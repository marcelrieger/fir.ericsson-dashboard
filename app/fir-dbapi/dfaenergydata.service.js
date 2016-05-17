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
    var DFAEnergyDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DFAEnergyDataService = (function () {
                function DFAEnergyDataService() {
                }
                DFAEnergyDataService.prototype.init = function (deviceID) {
                    var tempdata = [];
                    var luxdata = [];
                    for (var i = 120 - 1; i >= 0; i--) {
                        tempdata.push(parseInt(60 + Math.random() * 20 + ""));
                        luxdata.push(parseInt(260 + Math.random() * 15 + ""));
                    }
                    return Promise.resolve({
                        temp: {
                            data: tempdata,
                            risk: [20, 70],
                            critical: [10, 90]
                        },
                        lux: {
                            data: luxdata,
                            risk: [0, 260],
                            critical: [0, 275]
                        }
                    });
                };
                DFAEnergyDataService.prototype.getCurData = function (deviceID) {
                    return Promise.resolve({
                        temp: parseInt(60 + Math.random() * 20 + ""),
                        lux: parseInt(270 + Math.random() * 5 + ""),
                    });
                };
                DFAEnergyDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DFAEnergyDataService);
                return DFAEnergyDataService;
            }());
            exports_1("DFAEnergyDataService", DFAEnergyDataService);
        }
    }
});
//# sourceMappingURL=dfaenergydata.service.js.map