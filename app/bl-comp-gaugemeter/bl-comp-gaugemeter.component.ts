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
	private _title = "";
	private _unit = "";
	private _color = "red";
	private _transformColor = false;

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
	set transformColor(f: boolean) {
		this._transformColor = f;
	}
	@Input()
	set color(s: string) {
		this._color = s;
	}

	// Check for changes
	ngOnChanges(changes: { [value: number]: SimpleChange }) {
		console.log('ngOnChanges - myProp = ' + changes['value'].currentValue);
	}

	// Convert current value to the rotation degree
	// TODO: Save value range as class property to save arithmetic operation
	convertToDeg(val: number) {
		return (val-this._minVal) * (180 / (this._maxVal - this._minVal));  
	}

	// Generate color
	genColor(percent: number) {
		let minColor = { r: 0, g: 255, b: 0 };
		let maxColor = { r: 255, g: 0, b: 0 };

	    function makeChannel(a, b) {
	        return (a + Math.round((b - a) * (percent / 100)));
	    }

	    this._value 

	    function makeColorPiece(num) {
	        num = Math.min(num, 255);
	        num = Math.max(num, 0);
	        var str = num.toString(16);
	        if (str.length < 2) {
	            str = "0" + str;
	        }
	        return (str);
	    }

		return "#" + makeColorPiece(makeChannel(minColor.r, maxColor.r)) + makeColorPiece(makeChannel(minColor.g, maxColor.g)) + makeColorPiece(makeChannel(minColor.b, maxColor.b));
	}

	updateGauge() {
		let deg = this.convertToDeg(this._value);
		let styles = {
			'-webkit-transform': 'rotate(' + deg + "deg)",
			'-moz-transform': 'rotate(' + deg + "deg)",
			'transform': 'rotate(' + deg + "deg)",
			'background-color': (this._transformColor) ? this.genColor(this._value) : this._color
		}

		return styles;
	}

}