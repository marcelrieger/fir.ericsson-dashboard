import {Injectable} from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import 'rxjs/Rx';


@Injectable()
export class DFAEnergyDataService {

	private api = 'http://137.226.151.169/';
	private apiLastVal = this.api + "get_data/";

  constructor(private http: Http) { }
  
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

  getCurData2(sensorIDs) {
	  return Promise.resolve({
	    temp : parseInt(60 + Math.random() * 20 + ""),
	    lux : parseInt(270 + Math.random() * 5 + ""),
	  });
  }

  getInitData(sensorIDs) {

	  let creds = JSON.stringify(sensorIDs);

	  let headers = new Headers();
	  headers.append('Content-Type', 'application/json');

	  return this.http.post(this.apiLastVal+"?count=120", JSON.stringify(sensorIDs), {
		  headers: headers
	  })
		  .toPromise()
		  .then(function(res: Response) {
			  console.log(sensorIDs);
			  console.log(res);
			  let body = res.json();
			  return Promise.resolve(body);
			  //return Promise.resolve({
			//	  "1": [23, 24, 24, 23, 27, 25, 27, 27, 28, 25, 27, 26],
			//	  "2": [23, 24, 24, 23, 27, 25, 27, 27, 28, 25, 27, 26]
			  //});
		  })
		  .catch(function (error: any) {
			  console.warn("EnergyDataException: INIT API not reachable");
			  console.warn("Serving mockup data");
			  return Promise.reject({
				  "1": [23, 24, 24, 23, 27, 25, 27, 27, 28, 25, 27, 26],
				  "2": [23, 24, 24, 23, 27, 25, 27, 27, 28, 25, 27, 26]
			  });
		  });
  }

  getCurData(sensorIDs) {

	  let creds = JSON.stringify(sensorIDs);

	  let headers = new Headers();
	  headers.append('Content-Type', 'application/json');

	  return this.http.post(this.apiLastVal, JSON.stringify(sensorIDs), {
		  headers: headers
	  })
		  .toPromise()
		  .then(function(res: Response) {
			  let body = res.json();
			  return Promise.resolve(body);
			  //return Promise.resolve({
			//	  "1": [parseInt(20 + Math.random() * 5 + "")],
			//	  "2": [parseInt(20 + Math.random() * 5 + "")]
			  //});
		  })
		  .catch(this.handleError);
  }

  private handleError(error: any) {
	  let errMsg = error.message || error.statusText || 'Server error';
	  console.warn("EnergyDataException: CURDATA API not reachable");
	  console.warn("Serving mockup data");
	  return Promise.reject({
		  "1": [parseInt(20 + Math.random() * 5 + "")],
		  "2": [parseInt(20 + Math.random() * 5 + "")]
	  });
  }

}