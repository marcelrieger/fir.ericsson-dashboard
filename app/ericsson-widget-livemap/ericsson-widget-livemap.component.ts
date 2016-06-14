import { Component, Input, OnInit, ElementRef, OnDestroy } from 'angular2/core';
import { Router } from 'angular2/router';
///<reference path="d3.d.ts" />

import { DFAMapDataService } from '../fir-dbapi/dfamapdata.service';

@Component({
	selector: 'ericsson-widget-livemap',
	templateUrl: 'app/ericsson-widget-livemap/ericsson-widget-livemap.component.html',
	styleUrls: ['app/ericsson-widget-livemap/ericsson-widget-livemap.component.css'],
	directives: [],
	providers: [
		DFAMapDataService
	]
})
export class EricssonWidgetLiveMap implements OnInit, OnDestroy {

	@Input() width = 390;
	@Input() height = 200;
	@Input() 
	set deviceID(v: any) {
		this._deviceID = parseInt(v);
	}
	@Input()
	set datarate(val: number) {
		this._datarate = val;
		this.updateDatarate();
	}
	
	private _datarate = 300;

	private dataset = [];
	private sectors = [];
	private host;
	private _deviceID;
	private _mapContainer;
	private _hMargin = 0;
	private _devices;
	private _x;
	private _y;
	private ready = false;
	private updater = null;
	private initQueue = 2;

	constructor(private element: ElementRef, private DFAMapData: DFAMapDataService) {
		let C = this;
		this.host = d3.select(this.element.nativeElement);
		
		this.DFAMapData.getMapData().then(function(data) {
			C.sectors = data;
			
			C.DFAMapData.getLocationData().then(function(data) {
					
					C.dataset = data;
					C.ready = true;
					C.ngOnInit();
					C.updateDatarate();
					
			}).catch(C.errorHandler);
			
		}).catch(C.errorHandler);

	}

	ngOnInit() {
		if (!this.ready) return;
		let C = this;
		
		this.width = this.width*0.9+10;
		this.height *= 0.8;

		this._x = d3.scale.linear().domain([0, 1]).range([0 + C._hMargin, this.width - C._hMargin]);
		this._y = d3.scale.linear().domain([0, 1]).range([C.height, 0]);

		this._mapContainer = this.host.select(".map")
								.append("svg")
								.attr("height", C.height).attr("width", C.width+"px");

		var __sector = this._mapContainer
				.selectAll("rect")
				.data(this.sectors)
				.enter()
				
		__sector.append("rect")
				.attr("class", "sector")
				.attr("y", function(d) { return C._y(d.y); })
				.attr("x", function(d) { return C._x(d.x); })
				.attr("width", function(d) { return C._x(d.width); })
				.attr("height", function(d) { return C._y(1-d.height); });
		__sector.append("text")
					.attr("class", "sector")
					.attr("x", function(d) { return C._x(d.x + d.width/2); })
					.attr("y", function(d) { return C._y(d.y - (1-d.height)/2)-5; })
					.style("text-anchor", "middle")
					.html(function(d) { return d.name; });
			
		this._devices = this._mapContainer
			.selectAll("g")
			.data(this.dataset);
			
		this._devices
			.transition()
			.duration(300)
			.ease("linear")
			.attr("transform", function(d) { return "translate(" +C._x(0.5) + "," + C._y(0.5) + ")"; });

		var __device = this._devices.enter().append("g").attr("class", "device");
		
		__device.append("text")
					.attr("y", "23px")
					.style("text-anchor", "middle")
					.style("opacity", "0")
					.html(function(d) { return d.name; });
					
		__device.append("rect")
					.attr("rx", 5)
					.attr("y", "8px")
					.attr("x", function(d) {return -((this.parentNode.getBBox().width+5)/2);})
					.attr("width", function(d) {return this.parentNode.getBBox().width+5;})
					.attr("height", 20)
					.attr("fill", "#484848");
					
		__device.append("text")
					.attr("y", "23px")
					.style("text-anchor", "middle")
					.html(function(d) { return d.name; });
					
		__device.append("circle")
				.attr("class", function(d) { return (d.id==C._deviceID) ?  "glow" : "none"; })
				.attr("r", function(d) { return (d.id==C._deviceID) ?  7 : 5; });
				
		__device.append("circle")
				.attr("r", function(d) { return (d.id==C._deviceID) ?  7 : 5; })
				.attr("fill", function(d) { return (d.id==C._deviceID) ?  "#FE7400" : "#FFFFFF"; });

		this.renderMap();
	}
	
	ngOnDestroy() {
		clearInterval(this.updater);
	}
	
	public updateDatarate() {
		let C = this;
		clearInterval(C.updater);
		C.updater = setInterval(function() {
			C.DFAMapData.getLocationData().then(function(data) {
				C.dataset = data;
				C.renderMap();
			}).catch(C.errorHandler);
		}, C._datarate);
	}

	private renderMap() {
		let C = this;
		
		this._devices
			.data(this.dataset)
			.transition()
			.duration(300)
			.ease("linear")
			.attr("transform", function(d) { return "translate(" +C._x(d.x) + "," + C._y(d.y) + ")"; });

	}
	
	private errorHandler(e) {
		let errMsg = e.message || e.statusText || 'Server error';
		console.error("LiveMapException:" + errMsg);
	}

}