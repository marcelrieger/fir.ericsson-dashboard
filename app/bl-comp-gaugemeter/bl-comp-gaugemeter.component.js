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
                    this._value = 0;
                    this._minVal = 0;
                    this._maxVal = 100;
                    this._title = "";
                    this._unit = "";
                    this._color = "red";
                    this._transformColor = false;
                }
                Object.defineProperty(BLCompGaugeMeterComponent.prototype, "value", {
                    set: function (val) {
                        this._value = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BLCompGaugeMeterComponent.prototype, "valueMin", {
                    set: function (val) {
                        this._minVal = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BLCompGaugeMeterComponent.prototype, "valueMax", {
                    set: function (val) {
                        this._maxVal = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BLCompGaugeMeterComponent.prototype, "title", {
                    set: function (ti) {
                        this._title = ti;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BLCompGaugeMeterComponent.prototype, "unit", {
                    set: function (u) {
                        this._unit = u;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BLCompGaugeMeterComponent.prototype, "transformColor", {
                    set: function (f) {
                        this._transformColor = f;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BLCompGaugeMeterComponent.prototype, "color", {
                    set: function (s) {
                        this._color = s;
                    },
                    enumerable: true,
                    configurable: true
                });
                // Check for changes
                BLCompGaugeMeterComponent.prototype.ngOnChanges = function (changes) {
                    console.log('ngOnChanges - myProp = ' + changes['value'].currentValue);
                };
                // Convert current value to the rotation degree
                // TODO: Save value range as class property to save arithmetic operation
                BLCompGaugeMeterComponent.prototype.convertToDeg = function (val) {
                    return (val - this._minVal) * (180 / (this._maxVal - this._minVal));
                };
                // Generate color
                BLCompGaugeMeterComponent.prototype.genColor = function (percent) {
                    var minColor = { r: 0, g: 255, b: 0 };
                    var maxColor = { r: 255, g: 0, b: 0 };
                    function makeChannel(a, b) {
                        return (a + Math.round((b - a) * (percent / 100)));
                    }
                    this._value;
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
                };
                BLCompGaugeMeterComponent.prototype.updateGauge = function () {
                    var deg = this.convertToDeg(this._value);
                    var styles = {
                        '-webkit-transform': 'rotate(' + deg + "deg)",
                        '-moz-transform': 'rotate(' + deg + "deg)",
                        'transform': 'rotate(' + deg + "deg)",
                        'background-color': (this._transformColor) ? this.genColor(this._value) : this._color
                    };
                    return styles;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], BLCompGaugeMeterComponent.prototype, "value", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], BLCompGaugeMeterComponent.prototype, "valueMin", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], BLCompGaugeMeterComponent.prototype, "valueMax", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], BLCompGaugeMeterComponent.prototype, "title", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], BLCompGaugeMeterComponent.prototype, "unit", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean), 
                    __metadata('design:paramtypes', [Boolean])
                ], BLCompGaugeMeterComponent.prototype, "transformColor", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String), 
                    __metadata('design:paramtypes', [String])
                ], BLCompGaugeMeterComponent.prototype, "color", null);
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