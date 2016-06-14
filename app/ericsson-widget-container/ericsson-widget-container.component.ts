import { Component, Input, OnInit, ElementRef, Output, EventEmitter, OnDestroy } from 'angular2/core';
import { Router } from 'angular2/router';

import { EricssonWidgetDataMonitoring } from '../ericsson-widget-datamonitoring/ericsson-widget-datamonitoring.component';
import { EricssonWidgetLiveMap } from '../ericsson-widget-livemap/ericsson-widget-livemap.component';
import { BlCompWebSocketStream } from '../bl-comp-websocketstream/bl-comp-websocketstream.component';

@Component({
	selector: 'ericsson-widget-container',
	templateUrl: 'app/ericsson-widget-container/ericsson-widget-container.component.html',
	styleUrls: ['app/ericsson-widget-container/ericsson-widget-container.component.css'],
	directives: [
		EricssonWidgetDataMonitoring,
		EricssonWidgetLiveMap,
		BlCompWebSocketStream
	]
})

export class EricssonWidgetContainer implements OnInit, OnDestroy {

	@Input() device = null;
	@Input() 
	set defaultWidget(val: number) {
		this.activeWidget = val;
	}
	@Output() overrideDeviceID= new EventEmitter();

	public activeWidget;
	public _deviceID = null;
	public datarate = 300;
	public widgetList;
	public availWidgetList = [
		{
			index: 0,
			widgetType: 0,
			activated: false,
			name: "Temperature",
			icon: "&#xE332;",
			sensors: [],
			ids: []
		},
		{
			index: 4,
			widgetType: 0,
			activated: false,
			name: "Illumination",
			icon: "&#xE1AD;",
			sensors: [],
			ids: []
		},
		{
			index: 1,
			widgetType: 0,
			activated: false,
			name: "Acceleration",
			icon: "&#xE569;",
			sensors: [],
			ids: []
		},
		{
			index: 2,
			widgetType: 1,
			activated: true,
			name: "Live Map",
			icon: "&#xE55E;",
			sensors: [],
			ids: []
		},
		{
			index: 3,
			widgetType: 2,
			activated: true,
			name: "Camera Feed",
			icon: "&#xE04B;",
			sensors: [],
			ids: []
		}
	];
	private ready: boolean = false;
	private width: number = 390;
	private height: number = 200;
	private loading: boolean = true;
	private menuActive: boolean = false;
	private host;
	private livestreamurl = "";
	private interval;
	private activeWidgetIterator = 0;
	private subname = null;
	private livefeeddata = "";

	@Input() 
	set deviceID(val: number){
		let C = this;
		C.loading = true;
		C.ready = false;
		C.subname = null;
		//C.activeWidget = 0;
		if (typeof C.device === "undefined") { return; }
		
		C._deviceID = C.device.id;

		// Create lookup table
		var lookup = {ids: [3,2]};
		for (let i = 0, lookuplength = C.availWidgetList.length, len = lookuplength; i < len; i++) {
			C.availWidgetList[i].sensors = [];
			C.availWidgetList[i].ids = [];
			lookup[C.availWidgetList[i].index] = JSON.parse(JSON.stringify(C.availWidgetList[i]));
		}

		// Look for available sensors
		for (let i = 0, len = C.device.sensors.length; i < len; i++) {
			switch (C.device.sensors[i].type) {
				case "temp":
					lookup[0].activated = true;
					lookup[0].sensors.push(C.device.sensors[i]);
					lookup[0].ids.push(C.device.sensors[i].id);
					lookup.ids.push(0);
					break;
				case "light": 
					lookup[4].activated = true;
					lookup[4].sensors.push(C.device.sensors[i]);
					lookup[4].ids.push(C.device.sensors[i].id);
					lookup.ids.push(4);
					break;
				case "accel_x":
				case "accel_y":
				case "accel_z":
					lookup[1].activated = true;
					lookup[1].sensors.push(C.device.sensors[i]);
					lookup[1].ids.push(C.device.sensors[i].id);
					lookup.ids.push(1);
					break;
			}
		}
		
		// Remove duplicates on widgetlist
		{
				let unique = lookup.ids.reduce(function(accum, current) {
					if (accum.indexOf(current) < 0) {
						accum.push(current);
					}
					return accum;
				}, []);
				lookup.ids.length = 0;
				for (var i = 0; i < unique.length; ++i) {
					lookup.ids.push(unique[i]);
				}
		}
		C.widgetList = lookup;
		
		setTimeout(function() {
			C.ready = true;
			C.loading = false;
		}, 700)
	}

	constructor(private element: ElementRef) {
		this.host = this.element.nativeElement;
		this.widgetList = this.availWidgetList;
	}

	ngOnInit() {
		let C = this;
		this.width = this.host.offsetWidth - 20;
		this.height = this.host.offsetHeight - 20;
		//this.interval = setInterval(function() { C.livestreamurl = "http://137.226.134.44:3000/?ts=" + (new Date()).getTime(); }, 100);
	}

	ngOnDestroy() {
		clearInterval(this.interval);
	}

	public switchWidget(s: string) {
		switch (s) {
			case "left":
				this.activeWidgetIterator = (this.activeWidgetIterator == 0) ? this.widgetList.ids.length-1 : --this.activeWidgetIterator;
				break;
			case "right":
				this.activeWidgetIterator = ++this.activeWidgetIterator % this.widgetList.ids.length;
				break;
		}
		this.activeWidget = this.widgetList.ids[this.activeWidgetIterator];
		this.subname = null;
	}

	public overrideDevice(s: any) {
		this.overrideDeviceID.emit(s);
	}

}