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
    var DFAAccelerationDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DFAAccelerationDataService = (function () {
                function DFAAccelerationDataService() {
                }
                DFAAccelerationDataService.prototype.init = function (deviceID) {
                    var xDatas = [];
                    var yDatas = [];
                    var zDatas = [];
                    for (var i = 120 - 1; i >= 0; i--) {
                        xDatas.push(parseInt(-2 + Math.random() * 5 + ""));
                        yDatas.push(parseInt(-1 + Math.random() * 5 + ""));
                        zDatas.push(parseInt(-3 + Math.random() * 5 + ""));
                    }
                    return Promise.resolve({
                        x: {
                            data: xDatas,
                            range: [-5, 5],
                            risk: [-4, 4],
                            critical: [-5, 5]
                        },
                        y: {
                            data: yDatas,
                            range: [-5, 5],
                            risk: [-4, 4],
                            critical: [-5, 5]
                        },
                        z: {
                            data: zDatas,
                            range: [-5, 5],
                            risk: [-4, 4],
                            critical: [-5, 5]
                        }
                    });
                };
                DFAAccelerationDataService.prototype.getCurData = function (deviceID) {
                    return Promise.resolve({
                        x: parseInt(-2 + Math.random() * 5 + ""),
                        y: parseInt(-1 + Math.random() * 5 + ""),
                        z: parseInt(-3 + Math.random() * 5 + "")
                    });
                };
                DFAAccelerationDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], DFAAccelerationDataService);
                return DFAAccelerationDataService;
            }());
            exports_1("DFAAccelerationDataService", DFAAccelerationDataService);
        }
    }
});
//# sourceMappingURL=dfaaccelerationdata.service.js.map