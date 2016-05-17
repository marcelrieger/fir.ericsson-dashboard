import {Injectable} from 'angular2/core';

@Injectable()
export class DFAEnergyDataService {
  
  init(deviceID: number) {
	  let tempdata = [];
	  let luxdata = [];

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
  }

  getCurData(deviceID: number) {
	  return Promise.resolve({
		  temp : parseInt(60 + Math.random() * 20 + ""),
		  lux : parseInt(270 + Math.random() * 5 + ""),
	  });
  }

}