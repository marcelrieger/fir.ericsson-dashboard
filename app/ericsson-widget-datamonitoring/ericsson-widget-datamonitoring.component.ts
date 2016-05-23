import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { DFAEnergyDataService } from '../fir-dbapi/dfaenergydata.service';

import { BLCompGaugeMeterComponent } from '../bl-comp-gaugemeter/bl-comp-gaugemeter.component';
import { BLCompLineChartComponent } from '../bl-comp-linechart/bl-comp-linechart.component';

@Component({
	selector: 'ericsson-widget-datamonitoring',
	templateUrl: 'app/ericsson-widget-datamonitoring/ericsson-widget-datamonitoring.component.html',
	styleUrls: ['app/ericsson-widget-datamonitoring/ericsson-widget-datamonitoring.component.css'],
	directives: [
		BLCompGaugeMeterComponent,
		BLCompLineChartComponent
	],
	providers: [
		DFAEnergyDataService
	]
})

export class EricssonWidgetDataMonitoring implements OnInit {

	// TODO: IMPORTANT!!!!
    //	 	 Render view only if all core promises has been resolved

    @Input()
    set deviceID(val: number) {
		this._deviceID = val;
		this.ngOnInit();
    }

	@Input() sensors = [];
	@Input() sensorIDs = [];

    @Input()
    set datarate(val: number) {
		this._datarate = val;
		this.updateDatarate();
    }

    @Input() width = 390;
	private _deviceID = null;
	private data;
	private dataset;
	private _datarate: number = 2500;
	private updater: any = 0;
	private ready: boolean = false;
	private trigger:boolean = true;
	public activeChart = 0;

	constructor(private DFAEnergyData: DFAEnergyDataService) {}

	ngOnInit() {
		if (this.sensorIDs.length == 0) return;
		let C = this;
		//for (var i = 0, len = C.sensors.length; i < len;i++) {
		//	C.sensorIDs.push(C.sensors[i].id);
		//}
		//this.DFAEnergyData.init(this._deviceID).then(function(data) {
		//	C.device = data;
		//	
		//}).catch(function(e) {
		//	console.error("ExceptionEnergyData:" + e);
		//});
		this.DFAEnergyData.getInitData(this.sensorIDs).then(function(data) {
			C.dataset = data;
			C.data = data;
			C.ready = true;
		}).catch(function(e) {
			console.error("ExceptionEnergyData:" + e);
		});
		this.updateDatarate();
	}

	public updateDatarate() {
		if (this.sensorIDs.length == 0) return;
		let C = this;
		clearInterval(C.updater);
		C.updater = setInterval(function() {
			C.DFAEnergyData.getCurData(C.sensorIDs)
			.then(function (data){
				C.data = data;
				C.trigger = !C.trigger;
			});
		}, C._datarate);
	}

	public units(s: string) {
		switch (s) {
			case "temp":
				return '&#176;C';
			case "light":
				return 'lx';
			case "accel_x":
			case "accel_y":
			case "accel_z":
				return 'm/s';
			default:
				return '';
		}
	}

}