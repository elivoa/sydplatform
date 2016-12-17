import { Injectable } from '@angular/core'
import { UserToken } from '../data/user_model'
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthService {

	private heroesUrl = 'http://localhost:8880/api/auth:oauth_token';  // URL to web api

	constructor(private http: Http) { }

	getUserToken(): Promise<UserToken> {
		return this.http.get(this.heroesUrl)
			.toPromise().then(response => response.json() as UserToken)
			.catch(this.handleError)
	}

	handleError(error: any): Promise<any> {
		console.error("An error occured", error);
		return Promise.reject(error.message || error);
	}



}