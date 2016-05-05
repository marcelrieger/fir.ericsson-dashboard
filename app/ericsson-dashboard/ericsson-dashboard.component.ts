import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { EricssonWidgetDataMonitoring } from '../ericsson-widget-datamonitoring/ericsson-widget-datamonitoring.component';
import { EricssonWidgetAccelerationMonitoring } from '../ericsson-widget-accelerationmonitoring/ericsson-widget-accelerationmonitoring.component';

@Component({
	selector: 'ericsson-dashboard',
	templateUrl: 'app/ericsson-dashboard/ericsson-dashboard.component.html',
	styleUrls: ['app/ericsson-dashboard/ericsson-dashboard.component.css'],
	directives: [
		EricssonWidgetDataMonitoring,
		EricssonWidgetAccelerationMonitoring
	]
})
export class EricssonDashboardComponent {

	constructor() {}

}
