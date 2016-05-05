import { Component, Input, OnChanges, SimpleChange } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'bl-comp-gaugemeter',
  templateUrl: 'app/bl-comp-gaugemeter/bl-comp-gaugemeter.component.html',
  styleUrls: ['app/bl-comp-gaugemeter/bl-comp-gaugemeter.component.css']
})

export class BLCompGaugeMeterComponent implements OnChanges{

	private _value = 0;
	private _minVal = 0;
	private _maxVal = 100;
	private _lastMaxVal = 0;
	private _title = "";
	private _unit = "";
	private _color = "#00FF00";
	@Input() criticalValue = [0, 0];
	@Input() riskValue = [0, 0];

	@Input()
	set value(val: number) {
		this._value = val;
	}
	@Input()
	set valueMin(val: number) {
		this._minVal = val;
	}
	@Input()
	set valueMax(val: number) {
		this._maxVal = val;
	}
	@Input()
	set title(ti: string) {
		this._title = ti;
	}
	@Input()
	set unit(u: string) {
		this._unit = u;
	}
	@Input()
	set color(s: string) {
		this._color = s;
	}

	// Check for changes
	ngOnChanges(changes: { [value: number]: SimpleChange }) {
		//console.log('ngOnChanges - myProp = ' + changes['value'].currentValue);
	}

	// Convert current value to the rotation degree
	// TODO: Save value range as class property to save arithmetic operation
	convertToDeg(val: number) {
		if (val<this._minVal) {
			val = this._minVal;
		} else if (val>this._maxVal) {
			val = this._maxVal;
		}
		return (val - this._minVal) * (180 / (this._maxVal - this._minVal));
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

        let halfPercent = (this._maxVal + this._minVal) / 2;

        return "#" + ((percent <= halfPercent) ? makeColorPiece(makeChannel(minColor.r, midColor.r, this._value / halfPercent)) + makeColorPiece(makeChannel(minColor.g, midColor.g, this._value / halfPercent)) + makeColorPiece(makeChannel(minColor.b, midColor.b, this._value / halfPercent)) : makeColorPiece(makeChannel(midColor.r, maxColor.r, (this._value - halfPercent + this._minVal) / halfPercent)) + makeColorPiece(makeChannel(midColor.g, maxColor.g, (this._value - halfPercent + this._minVal) / halfPercent)) + makeColorPiece(makeChannel(midColor.b, maxColor.b, (this._value - halfPercent + this._minVal) / halfPercent)));
	}

	updateGauge(val:number = this._value) {
		let deg = this.convertToDeg(val);
		let color = this._color;

		if ((val < this.criticalValue[0]) || (this.criticalValue[1] > 0 && val > this.criticalValue[1])) {
			color = "#FF0000";
		} else if ((val < this.riskValue[0]) || (this.riskValue[1] > 0 && val > this.riskValue[1])) {
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
		if (this._lastMaxVal < this._value) {
			this._lastMaxVal = this._value;
		} 
		return this.updateGauge(this._lastMaxVal);
	}

}