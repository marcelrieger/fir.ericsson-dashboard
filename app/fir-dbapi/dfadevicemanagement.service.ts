import {Injectable} from 'angular2/core';

@Injectable()
export class DFADeviceManagement {
  
  getDevices() {
    return Promise.resolve([
			{
				id: 541234,
				name: "Wagen A"
			},
			{
				id: 632267,
				name: "Wagen B"
			},
			{
				id: 194613,
				name: "Wagen C"
			}
		]);
  }

}