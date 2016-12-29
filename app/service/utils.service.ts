import {
	Http, Response, Headers,
	URLSearchParams, RequestOptions
} from '@angular/http'

import { Injectable } from '@angular/core'

@Injectable()
export class Utils {
	constructor(private http: Http) { }

	// TODO
	jsonHeader(queryParameters: {}): RequestOptions {
		let headers = new Headers({});
		headers.append("Accept", "application/json");
		let params = new URLSearchParams();
		// queryParameters.forEach((k,v,));
		for (let k in queryParameters) {
			console.log("lll", k,queryParameters[k]);
			params.set(k, queryParameters[k]);
		}
		let options = new RequestOptions({ headers: headers, search: params });
		return options
	}
}