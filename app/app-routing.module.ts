import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './homepage/homepage.component';
import { UserInfoPage } from './user/userinfo.component';
import { TestPage } from './user/test.component';

const routes: Routes = [
	{ path: '', redirectTo: '/homepage', pathMatch: 'full' },
	{ path: 'homepage', component: HomePage },
	{ path: 'user/info', component: UserInfoPage },
	{ path: 'user/info/:id', component: UserInfoPage },
	{ path: 'user/test/:id', component: TestPage },

	];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
