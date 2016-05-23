System.register(['angular2/core', '../ericsson-widget-datamonitoring/ericsson-widget-datamonitoring.component', '../ericsson-widget-accelerationmonitoring/ericsson-widget-accelerationmonitoring.component', '../ericsson-widget-livemap/ericsson-widget-livemap.component'], function(exports_1, context_1) {
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
    var core_1, ericsson_widget_datamonitoring_component_1, ericsson_widget_accelerationmonitoring_component_1, ericsson_widget_livemap_component_1;
    var EricssonWidgetContainer;
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
            },
            function (ericsson_widget_livemap_component_1_1) {
                ericsson_widget_livemap_component_1 = ericsson_widget_livemap_component_1_1;
            }],
        execute: function() {
            EricssonWidgetContainer = (function () {
                function EricssonWidgetContainer(element) {
                    this.element = element;
                    this.device = null;
                    this._deviceID = null;
                    this.datarate = 300;
                    this.widgetList = [];
                    this.availWidgetList = [
                        {
                            index: 0,
                            activated: false,
                            name: "Data Monitoring",
                            icon: "&#xE3A9;",
                            sensors: [],
                            ids: []
                        },
                        {
                            index: 1,
                            activated: false,
                            name: "Acceleration",
                            icon: "&#xE569;",
                            sensors: [],
                            ids: []
                        },
                        {
                            index: 2,
                            activated: false,
                            name: "DFA-Maps",
                            icon: "&#xE55E;",
                            sensors: [],
                            ids: []
                        },
                        {
                            index: 3,
                            activated: false,
                            name: "Camera Feed",
                            icon: "&#xE04B;",
                            sensors: [],
                            ids: []
                        }
                    ];
                    this.ready = false;
                    this.width = 390;
                    this.loading = true;
                    this.menuActive = false;
                    this.host = this.element.nativeElement;
                    this.widgetList = this.availWidgetList;
                }
                Object.defineProperty(EricssonWidgetContainer.prototype, "defaultWidget", {
                    set: function (val) {
                        this.activeWidget = val;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EricssonWidgetContainer.prototype, "deviceID", {
                    set: function (val) {
                        var C = this;
                        C._deviceID = val;
                        C.loading = true;
                        C.ready = false;
                        if (typeof C.device === "undefined") {
                            return;
                        }
                        // Create lookup table
                        var lookup = {}, lookuplength = C.availWidgetList.length;
                        ;
                        for (var i = 0, len = lookuplength; i < len; i++) {
                            C.availWidgetList[i].sensors = [];
                            C.availWidgetList[i].ids = [];
                            lookup[C.availWidgetList[i].index] = C.availWidgetList[i];
                        }
                        // Look for available sensors
                        for (var i = 0, len = C.device.sensors.length; i < len; i++) {
                            switch (C.device.sensors[i].type) {
                                case "temp":
                                case "light":
                                    lookup[0].activated = true;
                                    lookup[0].sensors.push(C.device.sensors[i]);
                                    lookup[0].ids.push(C.device.sensors[i].id);
                                    break;
                                case "accel_x":
                                case "accel_y":
                                case "accel_z":
                                    lookup[1].activated = true;
                                    lookup[1].sensors.push(C.device.sensors[i]);
                                    lookup[1].ids.push(C.device.sensors[i].id);
                                    break;
                                case "camera":
                                    lookup[3].activated = true;
                                    lookup[3].ids.push(C.device.sensors[i].id);
                                    break;
                            }
                        }
                        C.widgetList = [];
                        for (var i = 0, len = lookuplength; i < len; i++) {
                            if (lookup[i].activated) {
                                C.widgetList.push(lookup[i]);
                            }
                        }
                        setTimeout(function () {
                            C.ready = true;
                            C.loading = false;
                        }, 700);
                    },
                    enumerable: true,
                    configurable: true
                });
                EricssonWidgetContainer.prototype.ngOnInit = function () {
                    this.width = this.host.offsetWidth - 20;
                };
                EricssonWidgetContainer.prototype.switchWidget = function (s) {
                    switch (s) {
                        case "left":
                            this.activeWidget = (this.activeWidget == 0) ? this.widgetList.length - 1 : --this.activeWidget;
                            break;
                        case "right":
                            this.activeWidget = ++this.activeWidget % this.widgetList.length;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], EricssonWidgetContainer.prototype, "device", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], EricssonWidgetContainer.prototype, "defaultWidget", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number), 
                    __metadata('design:paramtypes', [Number])
                ], EricssonWidgetContainer.prototype, "deviceID", null);
                EricssonWidgetContainer = __decorate([
                    core_1.Component({
                        selector: 'ericsson-widget-container',
                        templateUrl: 'app/ericsson-widget-container/ericsson-widget-container.component.html',
                        styleUrls: ['app/ericsson-widget-container/ericsson-widget-container.component.css'],
                        directives: [
                            ericsson_widget_datamonitoring_component_1.EricssonWidgetDataMonitoring,
                            ericsson_widget_accelerationmonitoring_component_1.EricssonWidgetAccelerationMonitoring,
                            ericsson_widget_livemap_component_1.EricssonWidgetLiveMap
                        ]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], EricssonWidgetContainer);
                return EricssonWidgetContainer;
            }());
            exports_1("EricssonWidgetContainer", EricssonWidgetContainer);
        }
    }
});
//# sourceMappingURL=ericsson-widget-container.component.js.map