System.register(['angular2/core', '../ericsson-widget-datamonitoring/ericsson-widget-datamonitoring.component', '../ericsson-widget-accelerationmonitoring/ericsson-widget-accelerationmonitoring.component'], function(exports_1, context_1) {
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
    var core_1, ericsson_widget_datamonitoring_component_1, ericsson_widget_accelerationmonitoring_component_1;
    var EricssonDashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ericsson_widget_datamonitoring_component_1_1) {
                ericsson_widget_datamonitoring_component_1 = ericsson_widget_datamonitoring_component_1_1;
            },
            function (ericsson_widget_accelerationmonitoring_component_1_1) {
                ericsson_widget_accelerationmonitoring_component_1 = ericsson_widget_accelerationmonitoring_component_1_1;
            }],
        execute: function() {
            EricssonDashboardComponent = (function () {
                function EricssonDashboardComponent() {
                }
                EricssonDashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'ericsson-dashboard',
                        templateUrl: 'app/ericsson-dashboard/ericsson-dashboard.component.html',
                        styleUrls: ['app/ericsson-dashboard/ericsson-dashboard.component.css'],
                        directives: [
                            ericsson_widget_datamonitoring_component_1.EricssonWidgetDataMonitoring,
                            ericsson_widget_accelerationmonitoring_component_1.EricssonWidgetAccelerationMonitoring
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], EricssonDashboardComponent);
                return EricssonDashboardComponent;
            }());
            exports_1("EricssonDashboardComponent", EricssonDashboardComponent);
        }
    }
});
//# sourceMappingURL=ericsson-dashboard.component.js.map