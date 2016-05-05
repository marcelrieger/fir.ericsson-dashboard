import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { BLCompGaugeMeterComponent } from '../bl-comp-gaugemeter/bl-comp-gaugemeter.component';
import { BLCompLineChartComponent } from '../bl-comp-linechart/bl-comp-linechart.component';

@Component({
	selector: 'ericsson-widget-accelerationmonitoring',
	templateUrl: 'app/ericsson-widget-accelerationmonitoring/ericsson-widget-accelerationmonitoring.component.html',
	styleUrls: ['app/ericsson-widget-accelerationmonitoring/ericsson-widget-accelerationmonitoring.component.css'],
	directives: [
		BLCompGaugeMeterComponent,
		BLCompLineChartComponent
	]
})

export class EricssonWidgetAccelerationMonitoring {

	@Input() deviceID = 0;

	public x;
	public y;
	public z;
	public activeChart = 1;

	constructor() {

		var C = this;

		setInterval(function() {
			C.x = parseInt(1 + Math.random() * 5 + "");
			C.y = parseInt(1 + Math.random() * 5 + "");
			C.z = parseInt(Math.random() * 3 + "");
		}, 250);

	}


}