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
                    this.overrideDeviceID = new core_1.EventEmitter();
                    this._deviceID = null;
                    this.datarate = 300;
                    this.availWidgetList = [
                        {
                            index: 0,
                            widgetType: 0,
                            activated: false,
                            name: "Temperature",
                            icon: "&#xE332;",
                            sensors: [],
                            ids: []
                        },
                        {
                            index: 4,
                            widgetType: 0,
                            activated: false,
                            name: "Illumination",
                            icon: "&#xE1AD;",
                            sensors: [],
                            ids: []
                        },
                        {
                            index: 1,
                            widgetType: 0,
                            activated: false,
                            name: "Acceleration",
                            icon: "&#xE569;",
                            sensors: [],
                            ids: []
                        },
                        {
                            index: 2,
                            widgetType: 1,
                            activated: false,
                            name: "DFA-Maps",
                            icon: "&#xE55E;",
                            sensors: [],
                            ids: []
                        },
                        {
                            index: 3,
                            widgetType: 2,
                            activated: true,
                            name: "Camera Feed",
                            icon: "&#xE04B;",
                            sensors: [],
                            ids: []
                        }
                    ];
                    this.ready = false;
                    this.width = 390;
                    this.height = 200;
                    this.loading = true;
                    this.menuActive = false;
                    this.livestreamurl = "";
                    this.activeWidgetIterator = 0;
                    this.subname = null;
                    this.livefeeddata = "";
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
                        //C.activeWidget = 0;
                        if (typeof C.device === "undefined") {
                            return;
                        }
                        // Create lookup table
                        var lookup = { ids: [3] };
                        for (var i_1 = 0, lookuplength = C.availWidgetList.length, len = lookuplength; i_1 < len; i_1++) {
                            C.availWidgetList[i_1].sensors = [];
                            C.availWidgetList[i_1].ids = [];
                            lookup[C.availWidgetList[i_1].index] = JSON.parse(JSON.stringify(C.availWidgetList[i_1]));
                        }
                        // Look for available sensors
                        for (var i_2 = 0, len = C.device.sensors.length; i_2 < len; i_2++) {
                            switch (C.device.sensors[i_2].type) {
                                case "temp":
                                    lookup[0].activated = true;
                                    lookup[0].sensors.push(C.device.sensors[i_2]);
                                    lookup[0].ids.push(C.device.sensors[i_2].id);
                                    lookup.ids.push(0);
                                    break;
                                case "light":
                                    lookup[4].activated = true;
                                    lookup[4].sensors.push(C.device.sensors[i_2]);
                                    lookup[4].ids.push(C.device.sensors[i_2].id);
                                    lookup.ids.push(4);
                                    break;
                                case "accel_x":
                                case "accel_y":
                                case "accel_z":
                                    lookup[1].activated = true;
                                    lookup[1].sensors.push(C.device.sensors[i_2]);
                                    lookup[1].ids.push(C.device.sensors[i_2].id);
                                    lookup.ids.push(1);
                                    break;
                            }
                        }
                        // Remove duplicates on widgetlist
                        {
                            var unique = lookup.ids.reduce(function (accum, current) {
                                if (accum.indexOf(current) < 0) {
                                    accum.push(current);
                                }
                                return accum;
                            }, []);
                            lookup.ids.length = 0;
                            for (var i = 0; i < unique.length; ++i) {
                                lookup.ids.push(unique[i]);
                            }
                        }
                        C.widgetList = lookup;
                        setTimeout(function () {
                            C.ready = true;
                            C.loading = false;
                        }, 700);
                    },
                    enumerable: true,
                    configurable: true
                });
                EricssonWidgetContainer.prototype.ngOnInit = function () {
                    var C = this;
                    this.width = this.host.offsetWidth - 20;
                    this.height = this.host.offsetHeight - 20;
                    var socket = io.connect('http://137.226.150.209');
                    socket.on('update', function (data) {
                        C.livefeeddata = data;
                    });
                    //this.interval = setInterval(function() { C.livestreamurl = "http://137.226.134.44:3000/?ts=" + (new Date()).getTime(); }, 100);
                };
                EricssonWidgetContainer.prototype.ngOnDestroy = function () {
                    clearInterval(this.interval);
                };
                EricssonWidgetContainer.prototype.switchWidget = function (s) {
                    switch (s) {
                        case "left":
                            this.activeWidgetIterator = (this.activeWidgetIterator == 0) ? this.widgetList.ids.length - 1 : --this.activeWidgetIterator;
                            break;
                        case "right":
                            this.activeWidgetIterator = ++this.activeWidgetIterator % this.widgetList.ids.length;
                            break;
                    }
                    this.activeWidget = this.widgetList.ids[this.activeWidgetIterator];
                };
                EricssonWidgetContainer.prototype.overrideDevice = function (s) {
                    this.overrideDeviceID.emit(s);
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
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], EricssonWidgetContainer.prototype, "overrideDeviceID", void 0);
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