import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { DFAAccelerationDataService } from '../fir-dbapi/dfaaccelerationdata.service';

import { BLCompGaugeMeterComponent } from '../bl-comp-gaugemeter/bl-comp-gaugemeter.component';
import { BLCompLineChartComponent } from '../bl-comp-linechart/bl-comp-linechart.component';

@Component({
	selector: 'ericsson-widget-accelerationmonitoring',
	templateUrl: 'app/ericsson-widget-accelerationmonitoring/ericsson-widget-accelerationmonitoring.component.html',
	styleUrls: ['app/ericsson-widget-accelerationmonitoring/ericsson-widget-accelerationmonitoring.component.css'],
	directives: [
		BLCompGaugeMeterComponent,
		BLCompLineChartComponent
	],
	providers: [
		DFAAccelerationDataService
	]
})

export class EricssonWidgetAccelerationMonitoring {

	// TODO: IMPORTANT!!!!
    //	 	 Render view only if all core promises has been resolved

	@Input()
    set deviceID(val: number) {
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
		x: 0,
		y: 0,
		z: 0
	};
	private _datarate: number = 250;
	private updater: any = 0;
	private ready: boolean = false;
	public activeChart = 1;

	constructor(private DFAAccelerationData: DFAAccelerationDataService) {}

	ngOnInit() {
		let C = this;
		this.DFAAccelerationData.init(this.deviceID).then(function(data) {
			C.device = data;
			C.ready = true;
		});
		this.updateDatarate();
	}

	public updateDatarate() {
		let C = this;
		clearInterval(C.updater);
		C.updater = setInterval(function() {
			C.DFAAccelerationData.getCurData(C.deviceID).then(data => C.data = data);
		}, C._datarate);
	}


}