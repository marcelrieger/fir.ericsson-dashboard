import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { BLCompGaugeMeterComponent } from '../bl-comp-gaugemeter/bl-comp-gaugemeter.component';
import { BLCompLineChartComponent } from '../bl-comp-linechart/bl-comp-linechart.component';

@Component({
	selector: 'ericsson-widget-datamonitoring',
	templateUrl: 'app/ericsson-widget-datamonitoring/ericsson-widget-datamonitoring.component.html',
	styleUrls: ['app/ericsson-widget-datamonitoring/ericsson-widget-datamonitoring.component.css'],
	directives: [
		BLCompGaugeMeterComponent,
		BLCompLineChartComponent
	]
})

export class EricssonWidgetDataMonitoring {

	@Input() deviceID = 0;

	public temp = {
		data: 0,
		risk: [20,70],
		critical: [10,90]
	};
	public lux = {
		data: 0,
		risk: [0, 260],
		critical: [0, 275]
	};
	public activeChart = 1;

	constructor() {

		var C = this;

		setInterval(function() {
			C.temp.data = parseInt(60 + Math.random() * 20 + "");
			C.lux.data = parseInt(270 + Math.random() * 5 + "");
		}, 250);

	}


}