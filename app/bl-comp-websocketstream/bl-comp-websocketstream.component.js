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
    var BlCompWebSocketStream;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BlCompWebSocketStream = (function () {
                function BlCompWebSocketStream(element) {
                    this.element = element;
                    this.ip_gpsserver = "http://137.226.134.44:3000";
                    this.ip_raspi_5g = "http://10.35.169.139";
                    this.ip_raspi_wifi = "http://137.226.150.209";
                    this.socket = null;
                    this.msg = "camera offline";
                    this.host = this.element.nativeElement;
                }
                Object.defineProperty(BlCompWebSocketStream.prototype, "datarate", {
                    set: function (n) {
                        if (this.socket == null) {
                            return;
                        }
                        this.socket.emit('setDatarate', { val: parseInt(n) });
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                BlCompWebSocketStream.prototype.ngOnInit = function () {
                    var C = this;
                    this.socket = io.connect(this.ip_raspi_wifi);
                    this.socket.on('update', function (data) {
                        C.streambuffer = data;
                    });
                };
                BlCompWebSocketStream.prototype.ngOnDestroy = function () {
                    this.socket.emit('close');
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BlCompWebSocketStream.prototype, "ip", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], BlCompWebSocketStream.prototype, "deviceID", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], BlCompWebSocketStream.prototype, "datarate", null);
                BlCompWebSocketStream = __decorate([
                    core_1.Component({
                        selector: 'bl-comp-websocketstream',
                        styles: [".livestream {width: 100%;color: rgb(152, 152, 152);display: block;text-align: center;}"],
                        template: '<img class="livestream" alt="{{msg}}" src="data:image/jpg;base64,{{streambuffer}}" />'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], BlCompWebSocketStream);
                return BlCompWebSocketStream;
            }());
            exports_1("BlCompWebSocketStream", BlCompWebSocketStream);
        }
    }
});
//# sourceMappingURL=bl-comp-websocketstream.component.js.map