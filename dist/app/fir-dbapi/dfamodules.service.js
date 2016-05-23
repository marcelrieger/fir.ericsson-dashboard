System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var DFAModulesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            DFAModulesService = (function () {
                function DFAModulesService(http) {
                    this.http = http;
                    this.api = 'http://137.226.151.169/';
                    this.apiLastVal = this.api + "modules/";
                    this.mockup = [
                        {
                            "id": "1",
                            "name": "Carrier A",
                            "sensors": [
                                {
                                    "id": "1",
                                    "module_id": "1",
                                    "freq": "10",
                                    "min": "0",
                                    "max": "100",
                                    "warn_low": 20,
                                    "crit_low": 10,
                                    "crit_high": 80,
                                    "warn_high": 65,
                                    "type": "temp",
                                    "name": "Cedric"
                                },
                                {
                                    "id": "2",
                                    "module_id": "1",
                                    "freq": "10",
                                    "min": "0",
                                    "max": "300",
                                    "warn_low": null,
                                    "crit_low": null,
                                    "crit_high": null,
                                    "warn_high": null,
                                    "type": "light",
                                    "name": "Marcel"
                                },
                                {
                                    "id": "3",
                                    "module_id": "1",
                                    "freq": "10",
                                    "min": "0",
                                    "max": "200",
                                    "warn_low": null,
                                    "crit_low": null,
                                    "crit_high": null,
                                    "warn_high": null,
                                    "type": "accel_x",
                                    "name": "Hans"
                                },
                                {
                                    "id": "4",
                                    "module_id": "1",
                                    "freq": "10",
                                    "min": "0",
                                    "max": "200",
                                    "warn_low": null,
                                    "crit_low": null,
                                    "crit_high": null,
                                    "warn_high": null,
                                    "type": "accel_y",
                                    "name": "Peter"
                                },
                                {
                                    "id": "5",
                                    "module_id": "1",
                                    "freq": "10",
                                    "min": "0",
                                    "max": "200",
                                    "warn_low": null,
                                    "crit_low": null,
                                    "crit_high": null,
                                    "warn_high": null,
                                    "type": "accel_z",
                                    "name": "Gerline"
                                }
                            ]
                        },
                        {
                            "id": "2",
                            "name": "Carrier B",
                            "sensors": [
                                {
                                    "id": "1",
                                    "module_id": "1",
                                    "freq": "10",
                                    "min": "0",
                                    "max": "200",
                                    "warn_low": null,
                                    "crit_low": null,
                                    "crit_high": null,
                                    "warn_high": null,
                                    "type": "temp",
                                    "name": "Cedric"
                                },
                                {
                                    "id": "2",
                                    "module_id": "1",
                                    "freq": "10",
                                    "min": "0",
                                    "max": "200",
                                    "warn_low": null,
                                    "crit_low": null,
                                    "crit_high": null,
                                    "warn_high": null,
                                    "type": "light",
                                    "name": "Marcel"
                                },
                                {
                                    "id": "3",
                                    "module_id": "1",
                                    "freq": "10",
                                    "min": "0",
                                    "max": "200",
                                    "warn_low": null,
                                    "crit_low": null,
                                    "crit_high": null,
                                    "warn_high": null,
                                    "type": "accel_x",
                                    "name": "Hans"
                                },
                                {
                                    "id": "4",
                                    "module_id": "1",
                                    "freq": "10",
                                    "min": "0",
                                    "max": "200",
                                    "warn_low": null,
                                    "crit_low": null,
                                    "crit_high": null,
                                    "warn_high": null,
                                    "type": "accel_y",
                                    "name": "Peter"
                                },
                                {
                                    "id": "5",
                                    "module_id": "1",
                                    "freq": "10",
                                    "min": "0",
                                    "max": "200",
                                    "warn_low": null,
                                    "crit_low": null,
                                    "crit_high": null,
                                    "warn_high": null,
                                    "type": "accel_z",
                                    "name": "Gerline"
                                }
                            ]
                        },
                        {
                            "id": "3",
                            "name": "Carrier C",
                            "sensors": [
                                {
                                    "id": "1",
                                    "module_id": "1",
                                    "freq": "10",
                                    "min": "0",
                                    "max": "200",
                                    "warn_low": null,
                                    "crit_low": null,
                                    "crit_high": null,
                                    "warn_high": null,
                                    "type": "temp",
                                    "name": "Cedric"
                                },
                                {
                                    "id": "2",
                                    "module_id": "1",
                                    "freq": "10",
                                    "min": "0",
                                    "max": "200",
                                    "warn_low": null,
                                    "crit_low": null,
                                    "crit_high": null,
                                    "warn_high": null,
                                    "type": "light",
                                    "name": "Marcel"
                                },
                                {
                                    "id": "3",
                                    "module_id": "1",
                                    "freq": "10",
                                    "min": "0",
                                    "max": "200",
                                    "warn_low": null,
                                    "crit_low": null,
                                    "crit_high": null,
                                    "warn_high": null,
                                    "type": "accel_x",
                                    "name": "Hans"
                                },
                                {
                                    "id": "4",
                                    "module_id": "1",
                                    "freq": "10",
                                    "min": "0",
                                    "max": "200",
                                    "warn_low": null,
                                    "crit_low": null,
                                    "crit_high": null,
                                    "warn_high": null,
                                    "type": "accel_y",
                                    "name": "Peter"
                                },
                                {
                                    "id": "5",
                                    "module_id": "1",
                                    "freq": "10",
                                    "min": "0",
                                    "max": "200",
                                    "warn_low": null,
                                    "crit_low": null,
                                    "crit_high": null,
                                    "warn_high": null,
                                    "type": "accel_z",
                                    "name": "Gerline"
                                }
                            ]
                        }
                    ];
                }
                DFAModulesService.prototype.getModules = function () {
                    var C = this;
                    return this.http.get(this.apiLastVal)
                        .toPromise()
                        .then(function (res) {
                        var body = res.json();
                        return Promise.resolve(res.json());
                        //return C.mockup;
                    })
                        .catch(this.handleError);
                };
                DFAModulesService.prototype.handleError = function (error) {
                    var C = this;
                    var errMsg = error.statusText || error.message || 'Server error';
                    console.warn("ModulesServiceError:" + errMsg);
                    console.warn("Serving mockup data");
                    return Promise.reject(errMsg);
                };
                DFAModulesService.prototype.getModulesMockUp = function () {
                    return Promise.resolve([
                        {
                            id: 541234,
                            name: "Wagen A",
                            sensors: [
                                {
                                    id: 13761,
                                    type: "temperature",
                                    name: "Temperatur",
                                    min: 1,
                                    max: 3,
                                    crit_low: 1,
                                    crit_high: 1,
                                    warn_low: 1,
                                    warn_high: 1
                                },
                                {
                                    id: 62354,
                                    type: "lux",
                                    name: "Beleuchtung",
                                    min: 1,
                                    max: 3,
                                    crit_low: 1,
                                    crit_high: 1,
                                    warn_low: 1,
                                    warn_high: 1
                                },
                                {
                                    id: 13791,
                                    type: "acceleration",
                                    name: "X",
                                    min: 1,
                                    max: 3,
                                    crit_low: 1,
                                    crit_high: 1,
                                    warn_low: 1,
                                    warn_high: 1
                                },
                                {
                                    id: 13792,
                                    type: "acceleration",
                                    name: "Y",
                                    min: 1,
                                    max: 3,
                                    crit_low: 1,
                                    crit_high: 1,
                                    warn_low: 1,
                                    warn_high: 1
                                },
                                {
                                    id: 13793,
                                    type: "acceleration",
                                    name: "Z",
                                    min: 1,
                                    max: 3,
                                    crit_low: 1,
                                    crit_high: 1,
                                    warn_low: 1,
                                    warn_high: 1
                                },
                                {
                                    id: 13711,
                                    type: "camera",
                                    name: "livestream",
                                    min: 1,
                                    max: 3,
                                    crit_low: 1,
                                    crit_high: 1,
                                    warn_low: 1,
                                    warn_high: 1
                                }
                            ]
                        },
                        {
                            id: 632267,
                            name: "Wagen B",
                            sensors: [
                                {
                                    id: 13761,
                                    type: "temperature",
                                    name: "Temperatur",
                                    min: 1,
                                    max: 3,
                                    crit_low: 1,
                                    crit_high: 1,
                                    warn_low: 1,
                                    warn_high: 1
                                },
                                {
                                    id: 13512,
                                    type: "temperature",
                                    name: "Temperatur",
                                    min: 1,
                                    max: 3,
                                    crit_low: 1,
                                    crit_high: 1,
                                    warn_low: 1,
                                    warn_high: 1
                                },
                                {
                                    id: 62354,
                                    type: "lux",
                                    name: "Beleuchtung",
                                    min: 1,
                                    max: 3,
                                    crit_low: 1,
                                    crit_high: 1,
                                    warn_low: 1,
                                    warn_high: 1
                                },
                                {
                                    id: 13791,
                                    type: "acceleration",
                                    name: "X",
                                    min: 1,
                                    max: 3,
                                    crit_low: 1,
                                    crit_high: 1,
                                    warn_low: 1,
                                    warn_high: 1
                                },
                                {
                                    id: 13792,
                                    type: "acceleration",
                                    name: "Y",
                                    min: 1,
                                    max: 3,
                                    crit_low: 1,
                                    crit_high: 1,
                                    warn_low: 1,
                                    warn_high: 1
                                },
                                {
                                    id: 13793,
                                    type: "acceleration",
                                    name: "Z",
                                    min: 1,
                                    max: 3,
                                    crit_low: 1,
                                    crit_high: 1,
                                    warn_low: 1,
                                    warn_high: 1
                                },
                                {
                                    id: 13711,
                                    type: "camera",
                                    name: "livestream",
                                    min: 1,
                                    max: 3,
                                    crit_low: 1,
                                    crit_high: 1,
                                    warn_low: 1,
                                    warn_high: 1
                                }
                            ]
                        },
                        {
                            id: 194613,
                            name: "Wagen C",
                            sensors: [
                                {
                                    id: 13761,
                                    type: "temperature",
                                    name: "Temperatur",
                                    min: 1,
                                    max: 3,
                                    crit_low: 1,
                                    crit_high: 1,
                                    warn_low: 1,
                                    warn_high: 1
                                },
                                {
                                    id: 13512,
                                    type: "temperature",
                                    name: "Temperatur",
                                    min: 1,
                                    max: 3,
                                    crit_low: 1,
                                    crit_high: 1,
                                    warn_low: 1,
                                    warn_high: 1
                                },
                                {
                                    id: 62354,
                                    type: "lux",
                                    name: "Beleuchtung",
                                    min: 1,
                                    max: 3,
                                    crit_low: 1,
                                    crit_high: 1,
                                    warn_low: 1,
                                    warn_high: 1
                                },
                                {
                                    id: 13791,
                                    type: "acceleration",
                                    name: "X",
                                    min: 1,
                                    max: 3,
                                    crit_low: 1,
                                    crit_high: 1,
                                    warn_low: 1,
                                    warn_high: 1
                                },
                                {
                                    id: 13792,
                                    type: "acceleration",
                                    name: "Y",
                                    min: 1,
                                    max: 3,
                                    crit_low: 1,
                                    crit_high: 1,
                                    warn_low: 1,
                                    warn_high: 1
                                },
                                {
                                    id: 13793,
                                    type: "acceleration",
                                    name: "Z",
                                    min: 1,
                                    max: 3,
                                    crit_low: 1,
                                    crit_high: 1,
                                    warn_low: 1,
                                    warn_high: 1
                                },
                                {
                                    id: 13711,
                                    type: "camera",
                                    name: "livestream",
                                    min: 1,
                                    max: 3,
                                    crit_low: 1,
                                    crit_high: 1,
                                    warn_low: 1,
                                    warn_high: 1
                                }
                            ]
                        }
                    ]);
                };
                DFAModulesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DFAModulesService);
                return DFAModulesService;
            }());
            exports_1("DFAModulesService", DFAModulesService);
        }
    }
});
//# sourceMappingURL=dfamodules.service.js.map