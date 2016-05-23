import {Injectable} from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class DFAModulesService {

	private api = 'http://137.226.151.169/';
	private apiLastVal = this.api + "modules/";
	private mockup = [
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

	constructor(private http: Http) { }

	public getModules(): Promise<any> {
		let C = this;
		return this.http.get(this.apiLastVal)
			.toPromise()
			.then(function(res: Response) {
				let body = res.json();
				return Promise.resolve(res.json());
				//return C.mockup;
			})
			.catch(this.handleError);
	}

	private handleError(error: any) {
		let C = this;
		let errMsg = error.statusText || error.message || 'Server error';
		console.warn("ModulesServiceError:" + errMsg);
		console.warn("Serving mockup data");
		return Promise.reject(errMsg);
	}

  public getModulesMockUp() {
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
  }

}