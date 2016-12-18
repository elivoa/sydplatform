import { Injectable } from '@angular/core'
import { UserToken, Token } from '../data/user_model'
import { Headers, Http } from '@angular/http'

import 'rxjs/add/operator/toPromise';


@Injectable()
export class AuthService {

	private heroesUrl = 'http://localhost:8880/api/auth:oauth_token';  // URL to web api

	constructor(private http: Http) { }

	// 只返回Cookie 中的 UserToken，不管是否登陆. 验证token是否过期，如果过期则不管他返回空。
	getUserToken(): UserToken {
		return this.getUserTokenFromCookie()
	}

	ensureLogin(): UserToken {
		// 1. 从cookie中取得UserToken。
		var token = this.getUserTokenFromCookie()
		// 2. 判断是否tooken过期。如果过期就refreshToken。如果没过期就直接确认登陆状态。

		// 3. -> 如果过期：使用refreshToken来refresh。
		// 4. -> 如果cookie中没有token。则跳转到登陆界面来登陆。

		// TEST 先return 一个假的userToken吧. 用户登陆以后再做.
		return token
	}

	// getUserToken from server。
	getUserToken2(): Promise<UserToken> {
		return this.http.get(this.heroesUrl)
			.toPromise().then(response => response.json() as UserToken)
			.catch(this.handleError)
	}

	handleError(error: any): Promise<any> {
		console.error("An error occured", error);
		return Promise.reject(error.message || error);
	}

	getUserTokenFromCookie(): UserToken {
		// TODO implement this.
		return this._testUserToken();
	}

	_testUserToken(): UserToken {
		var test = new UserToken(123, "Elivoa");
		var oauthToken = new Token()
		oauthToken.access_token = "xxxxaccesstokenxxxxx"
		oauthToken.refresh_token = "xxxxrefreshtokenxxxxx"
		oauthToken.token_type = "xyz"
		oauthToken.expiry = "2016-12-18"
		test.token = oauthToken
		return test
	}

	// 需要点登陆，如果不登陆则报错，返回错误页面。TODO
	requireLogin(): UserToken {
		console.log("todo Check Login:")
		return null;
	}

	requireRole(roles: string[]): UserToken {
		console.log("todo CheckRole:", roles)
		return null;
	}
}