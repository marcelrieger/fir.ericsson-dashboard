System.register(['angular2/core', '../fir-dbapi/dfamapdata.service'], function(exports_1, context_1) {
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
    var core_1, dfamapdata_service_1;
    var EricssonWidgetLiveMap;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dfamapdata_service_1_1) {
                dfamapdata_service_1 = dfamapdata_service_1_1;
            }],
        execute: function() {
            EricssonWidgetLiveMap = (function () {
                function EricssonWidgetLiveMap(element, DFAMapData) {
                    this.element = element;
                    this.DFAMapData = DFAMapData;
                    this.width = 390;
                    this.height = 200;
                    this._datarate = 300;
                    this.dataset = [];
                    this.sectors = [];
                    this._hMargin = 0;
                    this.ready = false;
                    this.updater = null;
                    this.initQueue = 2;
                    var C = this;
                    this.host = d3.select(this.element.nativeElement);
                    this.DFAMapData.getMapData().then(function (data) {
                        C.sectors = data;
                        C.DFAMapData.getLocationData().then(function (data) {
                            C.dataset = data;
                            C.ready = true;
                            C.ngOnInit();
                            C.updateDatarate();
                        }).catch(C.errorHandler);
                    }).catch(C.errorHandler);
                }
                Object.defineProperty(EricssonWidgetLiveMap.prototype, "deviceID", {
                    set: function (v) {
                        this._deviceID = parseInt(v);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EricssonWidgetLiveMap.prototype, "datarate", {
                    set: function (val) {
                        this._datarate = val;
                        this.updateDatarate();
                    },
                    enumerable: true,
                    configurable: true
                });
                EricssonWidgetLiveMap.prototype.ngOnInit = function () {
                    if (!this.ready)
                        return;
                    var C = this;
                    this.width = this.width * 0.9 + 10;
                    this.height *= 0.8;
                    this._x = d3.scale.linear().domain([0, 1]).range([0 + C._hMargin, this.width - C._hMargin]);
                    this._y = d3.scale.linear().domain([0, 1]).range([C.height, 0]);
                    this._mapContainer = this.host.select(".map")
                        .append("svg")
                        .attr("height", C.height).attr("width", C.width + "px");
                    var __sector = this._mapContainer
                        .selectAll("rect")
                        .data(this.sectors)
                        .enter();
                    __sector.append("rect")
                        .attr("class", "sector")
                        .attr("y", function (d) { return C._y(d.y); })
                        .attr("x", function (d) { return C._x(d.x); })
                        .attr("width", function (d) { return C._x(d.width); })
                        .attr("height", function (d) { return C._y(1 - d.height); });
                    __sector.append("text")
                        .attr("class", "sector")
                        .attr("x", function (d) { return C._x(d.x + d.width / 2); })
                        .attr("y", function (d) { return C._y(d.y - (1 - d.height) / 2) - 5; })
                        .style("text-anchor", "middle")
                        .html(function (d) { return d.name; });
                    this._devices = this._mapContainer
                        .selectAll("g")
                        .data(this.dataset);
                    this._devices
                        .transition()
                        .duration(300)
                        .ease("linear")
                        .attr("transform", function (d) { return "translate(" + C._x(0.5) + "," + C._y(0.5) + ")"; });
                    var __device = this._devices.enter().append("g").attr("class", "device");
                    __device.append("text")
                        .attr("y", "23px")
                        .style("text-anchor", "middle")
                        .style("opacity", "0")
                        .html(function (d) { return d.name; });
                    __device.append("rect")
                        .attr("rx", 5)
                        .attr("y", "8px")
                        .attr("x", function (d) { return -((this.parentNode.getBBox().width + 5) / 2); })
                        .attr("width", function (d) { return this.parentNode.getBBox().width + 5; })
                        .attr("height", 20)
                        .attr("fill", "#484848");
                    __device.append("text")
                        .attr("y", "23px")
                        .style("text-anchor", "middle")
                        .html(function (d) { return d.name; });
                    __device.append("circle")
                        .attr("class", function (d) { return (d.id == C._deviceID) ? "glow" : "none"; })
                        .attr("r", function (d) { return (d.id == C._deviceID) ? 7 : 5; });
                    __device.append("circle")
                        .attr("r", function (d) { return (d.id == C._deviceID) ? 7 : 5; })
                        .attr("fill", function (d) { return (d.id == C._deviceID) ? "#FE7400" : "#FFFFFF"; });
                    this.renderMap();
                };
                EricssonWidgetLiveMap.prototype.ngOnDestroy = function () {
                    clearInterval(this.updater);
                };
                EricssonWidgetLiveMap.prototype.updateDatarate = function () {
                    var C = this;
                    clearInterval(C.updater);
                    C.updater = setInterval(function () {
                        C.DFAMapData.getLocationData().then(function (data) {
                            C.dataset = data;
                            C.renderMap();
                        }).catch(C.errorHandler);
                    }, C._datarate);
                };
                EricssonWidgetLiveMap.prototype.renderMap = function () {
                    var C = this;
                    this._devices
                        .data(this.dataset)
                        .transition()
                        .duration(300)
                        .ease("linear")
                        .attr("transform", function (d) { return "translate(" + C._x(d.x) + "," + C._y(d.y) + ")"; });
                };
                EricssonWidgetLiveMap.prototype.errorHandler = function (e) {
                    var errMsg = e.message || e.statusText || 'Server error';
                    console.error("LiveMapException:" + errMsg);
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
                ], EricssonWidgetLiveMap.prototype, "deviceID", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], EricssonWidgetLiveMap.prototype, "datarate", null);
                EricssonWidgetLiveMap = __decorate([
                    core_1.Component({
                        selector: 'ericsson-widget-livemap',
                        templateUrl: 'app/ericsson-widget-livemap/ericsson-widget-livemap.component.html',
                        styleUrls: ['app/ericsson-widget-livemap/ericsson-widget-livemap.component.css'],
                        directives: [],
                        providers: [
                            dfamapdata_service_1.DFAMapDataService
                        ]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, dfamapdata_service_1.DFAMapDataService])
                ], EricssonWidgetLiveMap);
                return EricssonWidgetLiveMap;
            }());
            exports_1("EricssonWidgetLiveMap", EricssonWidgetLiveMap);
        }
    }
});
//# sourceMappingURL=ericsson-widget-livemap.component.js.map