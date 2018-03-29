import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Request} from './request.model';
// import { TriprequestComponent } from '../triprequest.component';

@Injectable()
export class RequestService {
  selectedRequest: Request;
  requestlist: Request[];
  constructor(private http: Http) { }

  postRequest(req: Request) {
    const body = JSON.stringify(req);
    const headerOptions = new Headers({'Content-Type': 'application/json'});
    const requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
    return this.http.post('http://localhost:62910/api/TRtests', body, requestOptions).map(x => x.json());

  }

  putRequest(id, req) {
    const body = JSON.stringify(req);
    const headerOptions = new Headers({ 'Content-Type': 'application/json' });
    const requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:62910/api/TRtests/' + id,
      body,
      requestOptions).map(res => res.json());
  }

  getRequestlist() {
    this.http.get('http://localhost:62910/api/TRtests')
    .map((data: Response) => {
      return data.json() as Request[];
    }).toPromise().then(x => {
      this.requestlist = x;
    });
  }

  deleteRequest(id: number) {
    return this.http.delete('http://localhost:62910/api/TRtests/' + id).map(res => res.json());
  }

}
