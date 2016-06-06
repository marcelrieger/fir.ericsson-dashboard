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
	private deviceIDs: number[] = [];
	private loading: boolean = true;
	private datarate: number = 250;
	private activeDeviceIndex: number;
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
		C.deviceIDs[0] = index;
		C.deviceIDs[1] = index;
		C.deviceIDs[2] = index;
		C.deviceIDs[3] = index;
		setTimeout(function(){
			C.loading = false;
		},400)
	}

	public overrideDevice(widget, op) {
		var len = this.devices.length;
		this.deviceIDs[widget] = (this.deviceIDs[widget] + parseInt(op)) % len;
		if (this.deviceIDs[widget] < 0) { this.deviceIDs[widget] = len - 1;}
	}

}
