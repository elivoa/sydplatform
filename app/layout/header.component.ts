import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserToken } from '../data/user_model'
import { AuthService } from '../service/auth.service'

@Component({
	moduleId: module.id,
	selector: 'syd-header',
	templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {

	@Input() title: string = "SYD PLATFORM::SALES";

	userToken: UserToken;

	public constructor(
		private titleService: Title,
		private authService: AuthService,
	) {
		this.userToken = new UserToken(123, "Elivoa")
	}

	ngOnInit(): void {
		this.setTitle(this.title);
		// this.getUserToken()
		this.userToken = new UserToken(123, "Elivoa")

	}

	public setTitle(newTitle: string) {
		this.titleService.setTitle(newTitle);
	}

	getUserToken(): void {
		this.userToken = this.authService.getUserToken()
		// this.authService.getUserToken().then(ut => {
		// 	this.userToken = ut
		// 	console.log("ut is : ", this.userToken)
		// })
	}

}
