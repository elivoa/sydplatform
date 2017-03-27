import {Injectable} from '@angular/core'
import {Http, Response, Headers, URLSearchParams, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Observable';

import {UserToken, Token} from '../data/user_model'
import {Person, PersonList} from '../data/person_model'
import {ConstService} from '../service/const.service'
import {Utils} from './utils.service'
// Statics
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class PersonService {

  constructor(private http: Http, private utils: Utils, private config: ConstService) {
  }

  getCustomerList(personType: String, params: {}): Observable<PersonList> {
    params = params ? params : {}
    params['type'] = personType;
    let options = this.utils.jsonHeader(params)
    return this.utils.httpget("customer/customer:listCustomer", params)
      .map(this.listData)
      .catch(this.handleError);
    // return this.http.get(this.config.api("customer/customer:listCustomer"), options)
  }

  // TODO: params not used.
  getCustomer(id: number, params: {}): Observable<Person> {
    return this.utils.httpget("customer/Customer:get", {"id": id})
      .map((res: Response) => {
        let body = res.json();
        return body || {}
      }).catch(this.handleError);
  }

  private listData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error("ERROR:", errMsg);
    return Observable.throw(errMsg);
  }

}
