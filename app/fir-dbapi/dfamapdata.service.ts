import {Injectable} from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import 'rxjs/Rx';


@Injectable()
export class DFAMapDataService {

	private api = 'http://89.1.74.115:3200/';
	private apiMapData = this.api + "mapdata";
  private apiLocation = this.api + "location";

  constructor(private http: Http) { }

  getMapData() {
	  let headers = new Headers();
	  headers.append('Content-Type', 'application/json');

	  return this.http.get(this.apiMapData)
		  .toPromise()
		  .then(function(res: Response) {
			  let body = res.json();
			  return Promise.resolve(body);
		  })
		  .catch(function(error: any) {
			  console.warn("MapData Exception: MapData not reachable");
			  return Promise.reject({});
		  });
  }
  
  getLocationData() {
	  let headers = new Headers();
	  headers.append('Content-Type', 'application/json');

	  return this.http.get(this.apiLocation)
		  .toPromise()
		  .then(function(res: Response) {
			  let body = res.json();
			  return Promise.resolve(body);
		  })
		  .catch(function(error: any) {
			  console.warn("MapData Exception: LocationData not reachable");
			  return Promise.reject({});
		  });
  }

}