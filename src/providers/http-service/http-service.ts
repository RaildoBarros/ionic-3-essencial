import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpServiceProvider {

  private url:string = 'https://localhost:8000/clientes';

  constructor(public http: Http) {
    //console.log('Hello HttpServiceProvider Provider');
  }

  getAll(endpoint) {
    return this.http.get(`${this.url}/${endpoint}`)
      .map(res => {
        return res.json();
      });
  }

  get(endpoint, id) {

    return this.http.get(`${this.url}/${endpoint}/${id}`)
      .map(res => res.json())
  }

  post(endpoint, resource) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.url}/${endpoint}`, resource, options)
      .map(res => {
        res.json();
      });
  }

}
