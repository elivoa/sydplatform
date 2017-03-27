import {
  Http, Response, Headers,
  URLSearchParams, RequestOptions
} from '@angular/http'

import {ConstService} from '../service/const.service'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Utils {
  constructor(private http: Http, private config: ConstService) {

  }

  //
  jsonHeader(queryParameters: {}): RequestOptions {
    let headers = new Headers({});
    headers.append("Accept", "application/json");
    let params = new URLSearchParams();
    // queryParameters.forEach((k,v,));
    for (let k in queryParameters) {
      params.set(k, queryParameters[k]);
    }
    let options = new RequestOptions({headers: headers, search: params});
    return options
  }

  public httpget(api: string, queryParameters: {}): Observable<Response> {
    let options = this.jsonHeader(queryParameters);
    return this.http.get(this.config.api(api), options);
  }

}
