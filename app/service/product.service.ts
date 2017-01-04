import { Injectable } from '@angular/core'
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable';

import { UserToken, Token } from '../data/user_model'
import { Product, ProductList } from '../data/product_model'
import { Utils } from './utils.service'

// Statics
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ProductService {

	private url = 'http://localhost:8880/api/production/ProductApi:list';  // URL to web api

	constructor(
		private http: Http,
		private utils: Utils,
	) { }

	getProductList(tab: String, params: {}): Observable<ProductList> {
		params = params ? params : {}
		params['tab'] = tab;
		let options = this.utils.jsonHeader(params)
		// let options = this.utils.jsonHeader({
		// 	"tab": tab,
		// });
		return this.http.get(this.url, options)
			.map(this.listData)
			.catch(this.handleError);
	}

	getProduct(id: number,params:{}):Observable<Product>{
		let options = this.utils.jsonHeader({"id":id})
		return this.http.get("http://localhost:8880/api/production/ProductApi:get", options)
				.map((res: Response)=>{
					let body = res.json();
					return body || {}
				}).catch(this.handleError);	
	}


	private listData(res: Response) {
		let body = res.json();
		// console.log("LLLLLLLLL",body)
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
		console.error("ERROR:",errMsg);
		return Observable.throw(errMsg);
	}



}