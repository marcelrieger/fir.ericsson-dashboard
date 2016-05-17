System.register(['angular2/core', '../fir-dbapi/dfaenergydata.service', '../bl-comp-gaugemeter/bl-comp-gaugemeter.component', '../bl-comp-linechart/bl-comp-linechart.component'], function(exports_1, context_1) {
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
    var core_1, dfaenergydata_service_1, bl_comp_gaugemeter_component_1, bl_comp_linechart_component_1;
    var EricssonWidgetDataMonitoring;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dfaenergydata_service_1_1) {
                dfaenergydata_service_1 = dfaenergydata_service_1_1;
            },
            function (bl_comp_gaugemeter_component_1_1) {
                bl_comp_gaugemeter_component_1 = bl_comp_gaugemeter_component_1_1;
            },
            function (bl_comp_linechart_component_1_1) {
                bl_comp_linechart_component_1 = bl_comp_linechart_component_1_1;
            }],
        execute: function() {
            EricssonWidgetDataMonitoring = (function () {
                function EricssonWidgetDataMonitoring(DFAEnergyData) {
                    this.DFAEnergyData = DFAEnergyData;
                    this.width = 390;
                    this._deviceID = null;
                    this.data = {
                        temp: null,
                        lux: null
                    };
                    this._datarate = 250;
                    this.updater = 0;
                    this.ready = false;
                    this.activeChart = 1;
                }
                Object.defineProperty(EricssonWidgetDataMonitoring.prototype, "deviceID", {
                    // TODO: IMPORTANT!!!!
                    //	 	 Render view only if all core promises has been resolved
                    set: function (val) {
                        this._deviceID = val;
                        this.ngOnInit();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EricssonWidgetDataMonitoring.prototype, "datarate", {
                    set: function (val) {
                        this._datarate = val;
                        this.updateDatarate();
                    },
                    enumerable: true,
                    configurable: true
                });
                EricssonWidgetDataMonitoring.prototype.ngOnInit = function () {
                    var C = this;
                    this.DFAEnergyData.init(this._deviceID).then(function (data) {
                        C.device = data;
                        C.ready = true;
                    });
                    this.updateDatarate();
                };
                EricssonWidgetDataMonitoring.prototype.updateDatarate = function () {
                    var C = this;
                    clearInterval(C.updater);
                    C.updater = setInterval(function () {
                        C.DFAEnergyData.getCurData(C._deviceID).then(function (data) { return C.data = data; });
                    }, C._datarate);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], EricssonWidgetDataMonitoring.prototype, "deviceID", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], EricssonWidgetDataMonitoring.prototype, "datarate", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], EricssonWidgetDataMonitoring.prototype, "width", void 0);
                EricssonWidgetDataMonitoring = __decorate([
                    core_1.Component({
                        selector: 'ericsson-widget-datamonitoring',
                        templateUrl: 'app/ericsson-widget-datamonitoring/ericsson-widget-datamonitoring.component.html',
                        styleUrls: ['app/ericsson-widget-datamonitoring/ericsson-widget-datamonitoring.component.css'],
                        directives: [
                            bl_comp_gaugemeter_component_1.BLCompGaugeMeterComponent,
                            bl_comp_linechart_component_1.BLCompLineChartComponent
                        ],
                        providers: [
                            dfaenergydata_service_1.DFAEnergyDataService
                        ]
                    }), 
                    __metadata('design:paramtypes', [dfaenergydata_service_1.DFAEnergyDataService])
                ], EricssonWidgetDataMonitoring);
                return EricssonWidgetDataMonitoring;
            }());
            exports_1("EricssonWidgetDataMonitoring", EricssonWidgetDataMonitoring);
        }
    }
});
//# sourceMappingURL=ericsson-widget-datamonitoring.component.js.map