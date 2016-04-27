import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { BLCompGaugeMeterComponent } from '../bl-comp-gaugemeter/bl-comp-gaugemeter.component';

@Component({
  selector: 'ericsson-dashboard',
  templateUrl: 'app/ericsson-dashboard/ericsson-dashboard.component.html',
  styleUrls: ['app/ericsson-dashboard/ericsson-dashboard.component.css'],
  directives: [BLCompGaugeMeterComponent]
})
export class EricssonDashboardComponent {

	// Custom object to visualize a device
	public deviceA = {
		temp: 10,
		lux: 0,
		acceleration: 0
	};

	constructor() {

		var C = this;

		setInterval(function() {
			C.deviceA.temp = parseInt(Math.random() * 90 + 10 + "");
			C.deviceA.lux = parseInt(Math.random() * 300 + "");
			C.deviceA.acceleration = parseInt(Math.random() * 10 + "");
		},1000);
	}

}
