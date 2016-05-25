import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { DFAModulesService } from '../fir-dbapi/dfamodules.service';

import {MDL} from '../MaterialDesignLiteUpgradeElement';
import { EricssonWidgetDataMonitoring } from '../ericsson-widget-datamonitoring/ericsson-widget-datamonitoring.component';
import { EricssonWidgetAccelerationMonitoring } from '../ericsson-widget-accelerationmonitoring/ericsson-widget-accelerationmonitoring.component';
import { EricssonWidgetLiveMap } from '../ericsson-widget-livemap/ericsson-widget-livemap.component';
import { EricssonWidgetContainer } from '../ericsson-widget-container/ericsson-widget-container.component';

@Component({
	selector: 'ericsson-dashboard',
	templateUrl: 'app/ericsson-dashboard/ericsson-dashboard.component.html',
	styleUrls: ['app/ericsson-dashboard/ericsson-dashboard.component.css'],
	directives: [
		MDL,
		EricssonWidgetContainer,
		EricssonWidgetDataMonitoring,
		EricssonWidgetAccelerationMonitoring,
		EricssonWidgetLiveMap
	],
	providers: [
		DFAModulesService
	]
})
export class EricssonDashboardComponent implements OnInit {

	private devices: any[] = [];
	private loading: boolean = true;
	private datarate: number = 250;
	private activeDeviceIndex: number;
	private mainWidgetDeviceID: number;
	private topWidgetDeviceID: number;
	private bottomWidgetDeviceID: number;
	private updater: any = 0;

	private devMode: boolean = false;
	private coordinateschanged: boolean = false;
	private devicescoordinate: any[] = [];

	constructor(private DFAModules: DFAModulesService) {}

	ngOnInit() {
		let C = this;
		this.DFAModules.getModules().then(function(data) {
			C.devices = data;
			C.switchActiveDevice(0);
		}).catch(function(e) {
			let errMsg = e.message || e.statusText || 'Server error';
			console.error("DashboardComponentException:" + errMsg);
		});
	}

	public updateDatarate() {}

	public switchActiveDevice(index: number) {
		var C = this;
		C.loading = true;
		C.activeDeviceIndex = index;
		C.mainWidgetDeviceID = index;
		C.topWidgetDeviceID = index;
		C.bottomWidgetDeviceID = index;
		setTimeout(function(){
			C.loading = false;
		},400)
	}

	public overrideDevice(widget, op) {
		var len = this.devices.length;
		switch (widget) {
			case 0:
				this.mainWidgetDeviceID = (this.mainWidgetDeviceID + parseInt(op)) % len;
				if (this.mainWidgetDeviceID < 0) { this.mainWidgetDeviceID = len - 1;}
				break;
			case 1:
				this.topWidgetDeviceID = (this.topWidgetDeviceID + parseInt(op)) % len;
				if (this.topWidgetDeviceID < 0) { this.topWidgetDeviceID = len - 1; }
				break;
			case 2:
				this.bottomWidgetDeviceID = (this.bottomWidgetDeviceID + parseInt(op)) % len;
				if (this.bottomWidgetDeviceID < 0) { this.bottomWidgetDeviceID = len - 1; }
		}
	}

}
