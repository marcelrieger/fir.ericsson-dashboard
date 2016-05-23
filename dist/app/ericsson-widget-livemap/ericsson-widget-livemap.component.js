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
    var EricssonWidgetLiveMap;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ///<reference path="d3.d.ts" />
            EricssonWidgetLiveMap = (function () {
                function EricssonWidgetLiveMap(element) {
                    this.element = element;
                    this.width = 390;
                    this.height = 200;
                    this.dataset = [];
                    this._hMargin = 0;
                    this._mapAreaInMeter = [100, 30];
                    this.ready = false;
                    this.host = d3.select(this.element.nativeElement);
                    this.dataset = [
                        { "x": 0, "y": 0, "color": "green" },
                        { "x": 70, "y": 10, "color": "purple" },
                        { "x": 80, "y": 15, "color": "red" }
                    ];
                }
                Object.defineProperty(EricssonWidgetLiveMap.prototype, "draw", {
                    set: function (val) {
                        if (this.ready) {
                            this.renderMap();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                EricssonWidgetLiveMap.prototype.ngOnInit = function () {
                    var C = this;
                    this._x = d3.scale.linear().domain([0, C._mapAreaInMeter[0]]).range([0 + C._hMargin, this.width - C._hMargin]);
                    this._y = d3.scale.linear().domain([0, C._mapAreaInMeter[1]]).range([C.height, 0]);
                    this._graphContainer = this.host.select(".chart")
                        .append("svg")
                        .attr("height", C.height).attr("width", C.width + "px");
                    this._devices = this._graphContainer
                        .selectAll("circle")
                        .data(this.dataset);
                    this._devices.enter()
                        .append("circle");
                    this.ready = true;
                    this.renderMap();
                    //console.log(C.dataset);
                };
                EricssonWidgetLiveMap.prototype.renderMap = function () {
                    var C = this;
                    //console.log(C.dataset);
                    this._devices
                        .transition()
                        .duration(300)
                        .ease("linear")
                        .attr("cx", function (d) { return C._x(d.x); })
                        .attr("cy", function (d) { return C._y(d.y); })
                        .attr("r", 5)
                        .attr("fill", function (d) { return d.color; });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], EricssonWidgetLiveMap.prototype, "width", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], EricssonWidgetLiveMap.prototype, "height", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], EricssonWidgetLiveMap.prototype, "draw", null);
                EricssonWidgetLiveMap = __decorate([
                    core_1.Component({
                        selector: 'ericsson-widget-livemap',
                        templateUrl: 'app/ericsson-widget-livemap/ericsson-widget-livemap.component.html',
                        styleUrls: ['app/ericsson-widget-livemap/ericsson-widget-livemap.component.css'],
                        directives: []
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], EricssonWidgetLiveMap);
                return EricssonWidgetLiveMap;
            }());
            exports_1("EricssonWidgetLiveMap", EricssonWidgetLiveMap);
        }
    }
});
//# sourceMappingURL=ericsson-widget-livemap.component.js.map