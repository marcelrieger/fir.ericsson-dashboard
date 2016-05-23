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
    var DFAEnergyDataService;
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
            DFAEnergyDataService = (function () {
                function DFAEnergyDataService(http) {
                    this.http = http;
                    this.api = 'http://137.226.151.169/';
                    this.apiLastVal = this.api + "get_data/";
                }
                DFAEnergyDataService.prototype.getInitData = function (sensorIDs) {
                    var creds = JSON.stringify(sensorIDs);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(this.apiLastVal + "?count=120", JSON.stringify(sensorIDs), {
                        headers: headers
                    })
                        .toPromise()
                        .then(function (res) {
                        var body = res.json();
                        return Promise.resolve(body);
                    })
                        .catch(function (error) {
                        console.warn("EnergyDataException: INIT API not reachable");
                        console.warn("Serving mockup data");
                        return Promise.reject({
                            "1": [23, 24, 24, 23, 27, 25, 27, 27, 28, 25, 27, 26],
                            "2": [23, 24, 24, 23, 27, 25, 27, 27, 28, 25, 27, 26]
                        });
                    });
                };
                DFAEnergyDataService.prototype.getCurData = function (sensorIDs) {
                    var creds = JSON.stringify(sensorIDs);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post(this.apiLastVal, JSON.stringify(sensorIDs), {
                        headers: headers
                    })
                        .toPromise()
                        .then(function (res) {
                        var body = res.json();
                        return Promise.resolve(body);
                    })
                        .catch(this.handleError);
                };
                DFAEnergyDataService.prototype.handleError = function (error) {
                    var errMsg = error.message || error.statusText || 'Server error';
                    console.warn("EnergyDataException: CURDATA API not reachable");
                    console.warn("Serving mockup data");
                    return Promise.reject({
                        "1": [parseInt(20 + Math.random() * 5 + "")],
                        "2": [parseInt(20 + Math.random() * 5 + "")]
                    });
                };
                DFAEnergyDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DFAEnergyDataService);
                return DFAEnergyDataService;
            }());
            exports_1("DFAEnergyDataService", DFAEnergyDataService);
        }
    }
});
//# sourceMappingURL=dfaenergydata.service.js.map