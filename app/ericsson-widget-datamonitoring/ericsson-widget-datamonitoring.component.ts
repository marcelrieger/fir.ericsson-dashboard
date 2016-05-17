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
    set deviceID(val: number){
		this._deviceID = val;
		this.ngOnInit();
    }
    @Input()
    set datarate(val: number) {
		this._datarate = val;
		this.updateDatarate();
    }

    @Input() width = 390;
	private _deviceID = null;
	private device;
	private data = {
		temp: null,
		lux: null
	};
	private _datarate: number = 250;
	private updater: any = 0;
	private ready: boolean = false;
	public activeChart = 1;

	constructor(private DFAEnergyData: DFAEnergyDataService) {}

	ngOnInit() {
		let C = this;
		this.DFAEnergyData.init(this._deviceID).then(function(data) {
			C.device = data;
			C.ready = true;
		});
		this.updateDatarate();
	}

	public updateDatarate() {
		let C = this;
		clearInterval(C.updater);
		C.updater = setInterval(function() {
			C.DFAEnergyData.getCurData(C._deviceID).then(data => C.data = data);
		}, C._datarate);
	}

}