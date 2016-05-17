import {Injectable} from 'angular2/core';

@Injectable()
export class DFAAccelerationDataService {
  
  init(deviceID: number) {
	  let xDatas = [];
	  let yDatas = [];
	  let zDatas = [];

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
  }

  getCurData(deviceID: number) {
	  return Promise.resolve({
			x : parseInt(-2 + Math.random() * 5 + ""),
			y : parseInt(-1 + Math.random() * 5 + ""),
			z : parseInt(-3 + Math.random() * 5 + "")
	  });
  }

}