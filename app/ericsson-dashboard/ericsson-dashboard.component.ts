import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

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
	]
})
export class EricssonDashboardComponent {

	private devices: any[] = [];
	private loading: boolean = true;
	private datarate: number = 250;
	private activeDevice: any;
	private activeDeviceIndex: number = 0;
	private updater: any = 0;

	private devMode: boolean = false;
	private coordinateschanged: boolean = false;
	private devicescoordinate: any[] = [];

	constructor() {
		let C = this;

		this.devices = [
			{
				id: 541234,
				name: "Wagen A"
			},
			{
				id: 632267,
				name: "Wagen B"
			},
			{
				id: 194613,
				name: "Wagen C"
			}
		];
		C.activeDevice = this.devices[0];
		C.loading = false;
	}

	public updateDatarate() {}

	public switchActiveDevice(index: number) {
		var C = this;
		C.loading = true;
		C.activeDeviceIndex = index;
		C.activeDevice = C.devices[index];
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
