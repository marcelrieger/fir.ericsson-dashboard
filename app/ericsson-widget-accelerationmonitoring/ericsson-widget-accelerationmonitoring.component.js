System.register(['angular2/core', '../fir-dbapi/dfaaccelerationdata.service', '../bl-comp-gaugemeter/bl-comp-gaugemeter.component', '../bl-comp-linechart/bl-comp-linechart.component'], function(exports_1, context_1) {
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
    var core_1, dfaaccelerationdata_service_1, bl_comp_gaugemeter_component_1, bl_comp_linechart_component_1;
    var EricssonWidgetAccelerationMonitoring;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dfaaccelerationdata_service_1_1) {
                dfaaccelerationdata_service_1 = dfaaccelerationdata_service_1_1;
            },
            function (bl_comp_gaugemeter_component_1_1) {
                bl_comp_gaugemeter_component_1 = bl_comp_gaugemeter_component_1_1;
            },
            function (bl_comp_linechart_component_1_1) {
                bl_comp_linechart_component_1 = bl_comp_linechart_component_1_1;
            }],
        execute: function() {
            EricssonWidgetAccelerationMonitoring = (function () {
                function EricssonWidgetAccelerationMonitoring(DFAAccelerationData) {
                    this.DFAAccelerationData = DFAAccelerationData;
                    this.width = 390;
                    this._deviceID = null;
                    this.data = {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                    this._datarate = 250;
                    this.updater = 0;
                    this.ready = false;
                    this.activeChart = 1;
                }
                Object.defineProperty(EricssonWidgetAccelerationMonitoring.prototype, "deviceID", {
                    // TODO: IMPORTANT!!!!
                    //	 	 Render view only if all core promises has been resolved
                    set: function (val) {
                        this._deviceID = val;
                        this.ngOnInit();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EricssonWidgetAccelerationMonitoring.prototype, "datarate", {
                    set: function (val) {
                        this._datarate = val;
                        this.updateDatarate();
                    },
                    enumerable: true,
                    configurable: true
                });
                EricssonWidgetAccelerationMonitoring.prototype.ngOnInit = function () {
                    var C = this;
                    this.DFAAccelerationData.init(this.deviceID).then(function (data) {
                        C.device = data;
                        C.ready = true;
                    });
                    this.updateDatarate();
                };
                EricssonWidgetAccelerationMonitoring.prototype.updateDatarate = function () {
                    var C = this;
                    clearInterval(C.updater);
                    C.updater = setInterval(function () {
                        C.DFAAccelerationData.getCurData(C.deviceID).then(function (data) { return C.data = data; });
                    }, C._datarate);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], EricssonWidgetAccelerationMonitoring.prototype, "deviceID", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], EricssonWidgetAccelerationMonitoring.prototype, "datarate", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], EricssonWidgetAccelerationMonitoring.prototype, "width", void 0);
                EricssonWidgetAccelerationMonitoring = __decorate([
                    core_1.Component({
                        selector: 'ericsson-widget-accelerationmonitoring',
                        templateUrl: 'app/ericsson-widget-accelerationmonitoring/ericsson-widget-accelerationmonitoring.component.html',
                        styleUrls: ['app/ericsson-widget-accelerationmonitoring/ericsson-widget-accelerationmonitoring.component.css'],
                        directives: [
                            bl_comp_gaugemeter_component_1.BLCompGaugeMeterComponent,
                            bl_comp_linechart_component_1.BLCompLineChartComponent
                        ],
                        providers: [
                            dfaaccelerationdata_service_1.DFAAccelerationDataService
                        ]
                    }), 
                    __metadata('design:paramtypes', [dfaaccelerationdata_service_1.DFAAccelerationDataService])
                ], EricssonWidgetAccelerationMonitoring);
                return EricssonWidgetAccelerationMonitoring;
            }());
            exports_1("EricssonWidgetAccelerationMonitoring", EricssonWidgetAccelerationMonitoring);
        }
    }
});
//# sourceMappingURL=ericsson-widget-accelerationmonitoring.component.js.map