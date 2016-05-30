System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var BLCompGaugeMeterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BLCompGaugeMeterComponent = (function () {
                function BLCompGaugeMeterComponent() {
                    this._lastMaxVal = 0;
                    this.range = [0, 100];
                    this.value = 0;
                    this.title = "";
                    this.unit = "";
                    this.color = "#00FF00";
                    this.criticalValue = [0, 0];
                    this.riskValue = [0, 0];
                }
                BLCompGaugeMeterComponent.prototype.ngOnInit = function () {
                    this.range = [this.intOrNull(this.range[0]), this.intOrNull(this.range[1])];
                    this.criticalValue = [this.intOrNull(this.criticalValue[0]), this.intOrNull(this.criticalValue[1])];
                    this.riskValue = [this.intOrNull(this.riskValue[0]), this.intOrNull(this.riskValue[1])];
                };
                BLCompGaugeMeterComponent.prototype.intOrNull = function (v) {
                    return (v == null) ? null : parseInt(v);
                };
                // Convert current value to the rotation degree
                // TODO: Save value range as class property to save arithmetic operation
                BLCompGaugeMeterComponent.prototype.convertToDeg = function (val) {
                    if (val < this.range[0]) {
                        val = this.range[0];
                    }
                    else if (val > this.range[1]) {
                        val = this.range[1];
                    }
                    return (val - this.range[0]) * (180 / (this.range[1] - this.range[0]));
                };
                // Generate color
                // TODO: improve algorithm
                BLCompGaugeMeterComponent.prototype.genColor = function (percent) {
                    var minColor = { r: 0, g: 255, b: 0 };
                    var midColor = { r: 255, g: 255, b: 0 };
                    var maxColor = { r: 255, g: 0, b: 0 };
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
                    var halfPercent = (this.range[1] + this.range[0]) / 2;
                    return "#" + ((percent <= halfPercent) ? makeColorPiece(makeChannel(minColor.r, midColor.r, this.value / halfPercent)) + makeColorPiece(makeChannel(minColor.g, midColor.g, this.value / halfPercent)) + makeColorPiece(makeChannel(minColor.b, midColor.b, this.value / halfPercent)) : makeColorPiece(makeChannel(midColor.r, maxColor.r, (this.value - halfPercent + this.range[0]) / halfPercent)) + makeColorPiece(makeChannel(midColor.g, maxColor.g, (this.value - halfPercent + this.range[0]) / halfPercent)) + makeColorPiece(makeChannel(midColor.b, maxColor.b, (this.value - halfPercent + this.range[0]) / halfPercent)));
                };
                BLCompGaugeMeterComponent.prototype.updateGauge = function (val) {
                    if (val === void 0) { val = this.value; }
                    var deg = this.convertToDeg(val);
                    var color = this.color;
                    if ((this.criticalValue[0] != null && val < this.criticalValue[0]) || (this.criticalValue[1] != null && val > this.criticalValue[1])) {
                        color = "#FF0000";
                    }
                    else if ((this.riskValue[0] != null && val < this.riskValue[0]) || (this.riskValue[1] != null && val > this.riskValue[1])) {
                        color = "#FFE100";
                    }
                    var styles = {
                        '-webkit-transform': 'rotate(' + deg + "deg)",
                        '-moz-transform': 'rotate(' + deg + "deg)",
                        'transform': 'rotate(' + deg + "deg)",
                        'background-color': color
                    };
                    return styles;
                };
                BLCompGaugeMeterComponent.prototype.updateMaxGauge = function () {
                    if (this._lastMaxVal < this.value) {
                        this._lastMaxVal = this.value;
                    }
                    return this.updateGauge(this._lastMaxVal);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BLCompGaugeMeterComponent.prototype, "range", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BLCompGaugeMeterComponent.prototype, "value", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BLCompGaugeMeterComponent.prototype, "title", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BLCompGaugeMeterComponent.prototype, "unit", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BLCompGaugeMeterComponent.prototype, "color", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BLCompGaugeMeterComponent.prototype, "criticalValue", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BLCompGaugeMeterComponent.prototype, "riskValue", void 0);
                BLCompGaugeMeterComponent = __decorate([
                    core_1.Component({
                        selector: 'bl-comp-gaugemeter',
                        templateUrl: 'app/bl-comp-gaugemeter/bl-comp-gaugemeter.component.html',
                        styleUrls: ['app/bl-comp-gaugemeter/bl-comp-gaugemeter.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], BLCompGaugeMeterComponent);
                return BLCompGaugeMeterComponent;
            }());
            exports_1("BLCompGaugeMeterComponent", BLCompGaugeMeterComponent);
        }
    }
});
//# sourceMappingURL=bl-comp-gaugemeter.component.js.map