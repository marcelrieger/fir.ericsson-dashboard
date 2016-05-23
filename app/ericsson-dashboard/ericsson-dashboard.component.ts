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
	private activeDevice: any;
	private activeDeviceId: any = 0;
	private activeDeviceIndex: number = 0;
	private updater: any = 0;

	private devMode: boolean = false;
	private coordinateschanged: boolean = false;
	private devicescoordinate: any[] = [];

	constructor(private DFAModules: DFAModulesService) {
		//let C = this;
		//this.devices = [
		//	{ "id": "1", "name": "Carrier A", "sensors": [{ "id": "1", "module_id": "1", "freq": "10", "min": "0", "max": "200", "warn_low": null, "crit_low": null, "crit_high": null, "warn_high": null, "type": "temp", "name": "Cedric" }, { "id": "2", "module_id": "1", "freq": "10", "min": "0", "max": "200", "warn_low": null, "crit_low": null, "crit_high": null, "warn_high": null, "type": "light", "name": "Marcel" }, { "id": "3", "module_id": "1", "freq": "10", "min": "0", "max": "200", "warn_low": null, "crit_low": null, "crit_high": null, "warn_high": null, "type": "accel_x", "name": "Hans" }, { "id": "4", "module_id": "1", "freq": "10", "min": "0", "max": "200", "warn_low": null, "crit_low": null, "crit_high": null, "warn_high": null, "type": "accel_y", "name": "Peter" }, { "id": "5", "module_id": "1", "freq": "10", "min": "0", "max": "200", "warn_low": null, "crit_low": null, "crit_high": null, "warn_high": null, "type": "accel_z", "name": "Gerline" }] }, { "id": "1", "name": "Carrier B", "sensors": [{ "id": "1", "module_id": "1", "freq": "10", "min": "0", "max": "200", "warn_low": null, "crit_low": null, "crit_high": null, "warn_high": null, "type": "temp", "name": "Cedric" }, { "id": "2", "module_id": "1", "freq": "10", "min": "0", "max": "200", "warn_low": null, "crit_low": null, "crit_high": null, "warn_high": null, "type": "light", "name": "Marcel" }, { "id": "3", "module_id": "1", "freq": "10", "min": "0", "max": "200", "warn_low": null, "crit_low": null, "crit_high": null, "warn_high": null, "type": "accel_x", "name": "Hans" }, { "id": "4", "module_id": "1", "freq": "10", "min": "0", "max": "200", "warn_low": null, "crit_low": null, "crit_high": null, "warn_high": null, "type": "accel_y", "name": "Peter" }, { "id": "5", "module_id": "1", "freq": "10", "min": "0", "max": "200", "warn_low": null, "crit_low": null, "crit_high": null, "warn_high": null, "type": "accel_z", "name": "Gerline" }] }
		//];
		//C.activeDevice = this.devices[0];
	}

	ngOnInit() {
		let C = this;
		this.DFAModules.getModules().then(function(data) {
			C.devices = data;
			C.activeDevice = C.devices[0];
			C.loading = false;
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
		C.activeDevice = C.devices[index];
		C.activeDeviceId = C.devices[index].id;
		setTimeout(function(){
			C.loading = false;
		},400)
	}

	public dev(vehicle:number, index: number) {
		console.info(this.devicescoordinate);
		switch (index) {
			case 0:
				this.devicescoordinate[vehicle].y += 1;
				break;
			case 1:
				this.devicescoordinate[vehicle].y -= 1;
				break;
			case 2:
				this.devicescoordinate[vehicle].x -= 1;
				break;
			case 3:
				this.devicescoordinate[vehicle].x += 1;
				break;
		}
		this.coordinateschanged = !this.coordinateschanged;
	}

}
