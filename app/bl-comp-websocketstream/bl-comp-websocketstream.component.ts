/// <reference path="../socket.io.d.ts" />
import { Component, Input, OnInit, ElementRef, OnDestroy } from 'angular2/core';

@Component({
	selector: 'bl-comp-websocketstream',
	styles: [".livestream {width: 100%;color: rgb(152, 152, 152);display: block;text-align: center;}"],
	template: '<img class="livestream" alt="{{msg}}" src="data:image/jpg;base64,{{streambuffer}}" />'
})

export class BlCompWebSocketStream implements OnInit, OnDestroy {

    @Input() ip;
	@Input() deviceID;
	@Input()
	set datarate(n: any) {
		if (this.socket == null) {
			return;
		}
		this.socket.emit('setDatarate', { val: parseInt(n) });
	};
	private ip_gpsserver = "http://137.226.134.44:3000";
	private ip_raspi_5g = "http://10.35.169.139";
	private ip_raspi_wifi = "http://137.226.150.209";
	private socket = null;
	private host;
	private streambuffer;
	private msg = "camera offline";

	constructor(private element: ElementRef) {
		this.host = this.element.nativeElement;
	}

	ngOnInit() {
		let C = this;
		this.socket = io.connect(this.ip_raspi_wifi);
		this.socket.on('update', function (data) {
			C.streambuffer = data;
    });
	}
	
	ngOnDestroy() {
		this.socket.emit('close');
	}

}