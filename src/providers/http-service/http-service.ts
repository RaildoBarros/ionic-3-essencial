import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpServiceProvider {

  private url:string = 'api';

  constructor(public http: Http) {
  }

  getAll(endpoint) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.url}/${endpoint}/`, options)
      .map(res => {
        return res.json();
      });
  }

  get(endpoint, id) {

    return this.http.get(`${this.url}/${endpoint}/${id}/`)
      .map(res => res.json())
  }

  post(endpoint, resource) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');


    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.url}/${endpoint}/`, resource, options)
      .map(res => {
        res.json();
      });
  }

}
