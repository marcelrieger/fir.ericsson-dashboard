import { Component, Input, OnInit, ElementRef } from 'angular2/core';
import { Router } from 'angular2/router';
///<reference path="d3.d.ts" />

@Component({
	selector: 'ericsson-widget-livemap',
	templateUrl: 'app/ericsson-widget-livemap/ericsson-widget-livemap.component.html',
	styleUrls: ['app/ericsson-widget-livemap/ericsson-widget-livemap.component.css'],
	directives: []
})
export class EricssonWidgetLiveMap implements OnInit {

	@Input() width = 390;
	@Input() height = 200;

	private dataset = [];
	private host;
	private _graphContainer;
	private _hMargin = 0;
	private _devices;
	private _x;
	private _y;
	private _mapAreaInMeter = [100,30];
	private ready = false;

	constructor(private element: ElementRef) {
		this.host = d3.select(this.element.nativeElement);
		this.dataset = [
			{ "x": 0, "y": 0, "color": "green" },
			{ "x": 70, "y": 10, "color": "purple" },
			{ "x": 80, "y": 15, "color": "red" }
		];
	}

	@Input()
	set draw(val:any) {
		if (this.ready) { this.renderMap(); }
	}

	ngOnInit() {
		let C = this;

		this._x = d3.scale.linear().domain([0, C._mapAreaInMeter[0]]).range([0 + C._hMargin, this.width - C._hMargin]);
		this._y = d3.scale.linear().domain([0, C._mapAreaInMeter[1]]).range([C.height, 0]);

		this._graphContainer = this.host.select(".chart")
								.append("svg")
								.attr("height", C.height).attr("width", C.width+"px");

		this._devices = this._graphContainer
			.selectAll("circle")
			.data(this.dataset);

		this._devices.enter()
			.append("circle");

		this.ready = true;

		this.renderMap();

		//console.log(C.dataset);

	}

	private renderMap() {

		let C = this;

		//console.log(C.dataset);

		this._devices
			.transition()
			.duration(300)
			.ease("linear")
			.attr("cx", function(d) { return C._x(d.x); })
			.attr("cy", function(d) { return C._y(d.y); })
			.attr("r", 5)
			.attr("fill", function(d) { return d.color; })

	}

}