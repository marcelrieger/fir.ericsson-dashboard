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
    var DFAMapDataService;
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
            DFAMapDataService = (function () {
                function DFAMapDataService(http) {
                    this.http = http;
                    this.api = 'http://137.226.134.44:3200/';
                    this.apiMapData = this.api + "mapdata";
                    this.apiLocation = this.api + "location";
                }
                DFAMapDataService.prototype.getMapData = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.get(this.apiMapData)
                        .toPromise()
                        .then(function (res) {
                        var body = res.json();
                        return Promise.resolve(body);
                    })
                        .catch(function (error) {
                        console.warn("MapData Exception: MapData not reachable");
                        return Promise.reject({});
                    });
                };
                DFAMapDataService.prototype.getLocationData = function () {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http.get(this.apiLocation)
                        .toPromise()
                        .then(function (res) {
                        var body = res.json();
                        return Promise.resolve(body);
                    })
                        .catch(function (error) {
                        console.warn("MapData Exception: LocationData not reachable");
                        return Promise.reject({});
                    });
                };
                DFAMapDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DFAMapDataService);
                return DFAMapDataService;
            }());
            exports_1("DFAMapDataService", DFAMapDataService);
        }
    }
});
//# sourceMappingURL=dfamapdata.service.js.map