import { Component, Input } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'bl-comp-gaugemeter',
  templateUrl: 'app/bl-comp-gaugemeter/bl-comp-gaugemeter.component.html',
  styleUrls: ['app/bl-comp-gaugemeter/bl-comp-gaugemeter.component.css']
})

export class BLCompGaugeMeterComponent{

	private _lastMaxVal = 0;

	@Input() range = [0, 100];
	@Input() value = 0;
	@Input() _title = "";
	@Input() unit = "";
	@Input() color = "#00FF00";
	@Input() criticalValue = [0, 0];
	@Input() riskValue = [0, 0];

	// Convert current value to the rotation degree
	// TODO: Save value range as class property to save arithmetic operation
	convertToDeg(val: number) {
		if (val<this.range[0]) {
			val = this.range[0];
		} else if (val>this.range[1]) {
			val = this.range[1];
		}
		return (val - this.range[0]) * (180 / (this.range[1] - this.range[0]));
	}

	// Generate color
	// TODO: improve algorithm
	genColor(percent: number) {
		let minColor = { r: 0, g: 255, b: 0 };
        let midColor = { r: 255, g: 255, b: 0 };
		let maxColor = { r: 255, g: 0, b: 0 };

		function makeChannel(a, b, _percent) {
			return (a + Math.round((b - a) * _percent));
		}

		function makeColorPiece(num) {
			num = Math.min(num, 255);
			num = Math.max(num, 0);
			var str = num.toString(16);
			if (str.length < 2) {
				str = "0" + str;
			}
			return (str);
		}

        let halfPercent = (this.range[1] + this.range[0]) / 2;

        return "#" + ((percent <= halfPercent) ? makeColorPiece(makeChannel(minColor.r, midColor.r, this.value / halfPercent)) + makeColorPiece(makeChannel(minColor.g, midColor.g, this.value / halfPercent)) + makeColorPiece(makeChannel(minColor.b, midColor.b, this.value / halfPercent)) : makeColorPiece(makeChannel(midColor.r, maxColor.r, (this.value - halfPercent + this.range[0]) / halfPercent)) + makeColorPiece(makeChannel(midColor.g, maxColor.g, (this.value - halfPercent + this.range[0]) / halfPercent)) + makeColorPiece(makeChannel(midColor.b, maxColor.b, (this.value - halfPercent + this.range[0]) / halfPercent)));
	}

	updateGauge(val:number = this.value) {
		let deg = this.convertToDeg(val);
		let color = this.color;

		

		if ((this.criticalValue[0] > this.range[0] && val < this.criticalValue[0]) || (this.criticalValue[1] < this.range[1] && val > this.criticalValue[1])) {
			color = "#FF0000";
		} else if ((this.riskValue[0] > this.range[0] && val < this.riskValue[0]) || (this.riskValue[1] < this.range[1] && val > this.riskValue[1])) {
			color = "#FFFF00";
		}

		let styles = {
			'-webkit-transform': 'rotate(' + deg + "deg)",
			'-moz-transform': 'rotate(' + deg + "deg)",
			'transform': 'rotate(' + deg + "deg)",
			'background-color': color
		}

		return styles;
	}

	updateMaxGauge() {
		if (this._lastMaxVal < this.value) {
			this._lastMaxVal = this.value;
		} 
		return this.updateGauge(this._lastMaxVal);
	}

}