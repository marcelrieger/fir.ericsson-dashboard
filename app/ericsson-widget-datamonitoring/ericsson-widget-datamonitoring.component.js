System.register(['angular2/core', '../bl-comp-gaugemeter/bl-comp-gaugemeter.component', '../bl-comp-linechart/bl-comp-linechart.component'], function(exports_1, context_1) {
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
    var core_1, bl_comp_gaugemeter_component_1, bl_comp_linechart_component_1;
    var EricssonWidgetDataMonitoring;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bl_comp_gaugemeter_component_1_1) {
                bl_comp_gaugemeter_component_1 = bl_comp_gaugemeter_component_1_1;
            },
            function (bl_comp_linechart_component_1_1) {
                bl_comp_linechart_component_1 = bl_comp_linechart_component_1_1;
            }],
        execute: function() {
            EricssonWidgetDataMonitoring = (function () {
                function EricssonWidgetDataMonitoring() {
                    this.deviceID = 0;
                    this.activeChart = 1;
                    var C = this;
                    setInterval(function () {
                        C.temp = parseInt(60 + Math.random() * 20 + "");
                        C.lux = parseInt(Math.random() * 300 + "");
                    }, 250);
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], EricssonWidgetDataMonitoring.prototype, "deviceID", void 0);
                EricssonWidgetDataMonitoring = __decorate([
                    core_1.Component({
                        selector: 'ericsson-widget-datamonitoring',
                        templateUrl: 'app/ericsson-widget-datamonitoring/ericsson-widget-datamonitoring.component.html',
                        styleUrls: ['app/ericsson-widget-datamonitoring/ericsson-widget-datamonitoring.component.css'],
                        directives: [
                            bl_comp_gaugemeter_component_1.BLCompGaugeMeterComponent,
                            bl_comp_linechart_component_1.BLCompLineChartComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], EricssonWidgetDataMonitoring);
                return EricssonWidgetDataMonitoring;
            }());
            exports_1("EricssonWidgetDataMonitoring", EricssonWidgetDataMonitoring);
        }
    }
});
//# sourceMappingURL=ericsson-widget-datamonitoring.component.js.map