import { Component, Input, OnInit, ElementRef } from 'angular2/core';
import { Router } from 'angular2/router';

import { EricssonWidgetDataMonitoring } from '../ericsson-widget-datamonitoring/ericsson-widget-datamonitoring.component';
import { EricssonWidgetAccelerationMonitoring } from '../ericsson-widget-accelerationmonitoring/ericsson-widget-accelerationmonitoring.component';
import { EricssonWidgetLiveMap } from '../ericsson-widget-livemap/ericsson-widget-livemap.component';

@Component({
	selector: 'ericsson-widget-container',
	templateUrl: 'app/ericsson-widget-container/ericsson-widget-container.component.html',
	styleUrls: ['app/ericsson-widget-container/ericsson-widget-container.component.css'],
	directives: [
		EricssonWidgetDataMonitoring,
		EricssonWidgetAccelerationMonitoring,
		EricssonWidgetLiveMap
	]
})

export class EricssonWidgetContainer implements OnInit {

	@Input() device = null;
	@Input() 
	set defaultWidget(val: number) {
		this.activeWidget = val;
	}
	public activeWidget;
	public _deviceID = null;
	public datarate = 250;
	public widgetList = [
		{
			name: "Energiedaten",
			icon: "&#xE3A9;"
		},
		{
			name: "Beschleunigung",
			icon: "&#xE569;"
		},
		{
			name: "DFA-Karte",
			icon: "&#xE55E;"
		},
		{
			name: "Livestream",
			icon: "&#xE04B;"
		}
	];
	private width: number = 390;
	private loading: boolean = true;
	private menuActive: boolean = false;
	private host;

	@Input() 
	set deviceID(val: number){
		var C = this;
		C._deviceID = val;
		C.loading = true;
		setTimeout(function() {
			C.loading = false;
		}, 400)
	}

	constructor(private element: ElementRef) {
		this.host = this.element.nativeElement;
	}

	ngOnInit() {
		this.width = this.host.offsetWidth - 20;
	}

	public switchWidget(s: string) {
		switch (s) {
			case "left":
				this.activeWidget = (this.activeWidget == 0) ? this.widgetList.length-1 : --this.activeWidget;
				break;
			case "right":
				this.activeWidget = ++this.activeWidget % this.widgetList.length;
		}
	}

}