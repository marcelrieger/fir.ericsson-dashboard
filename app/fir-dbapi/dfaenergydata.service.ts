import {Injectable} from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import 'rxjs/Rx';


@Injectable()
export class DFAEnergyDataService {

	private api = 'http://137.226.134.44:8080/';
	private apiLastVal = this.api + "get_data/";

  constructor(private http: Http) { }

  getInitData(sensorIDs) {

	  let creds = JSON.stringify(sensorIDs);

	  let headers = new Headers();
	  headers.append('Content-Type', 'application/json');

	  return this.http.post(this.apiLastVal+"?count=120", JSON.stringify(sensorIDs), {
		  headers: headers
	  })
		  .toPromise()
		  .then(function(res: Response) {
			  let body = res.json();
			  return Promise.resolve(body);
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