import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './homepage/homepage.component';
import { UserInfoPage } from './user/userinfo.component';

import { OrderCreatePage } from './sale/order-create/order-create-page.component';
import { OrderListPage } from './sale/order-list/order-list-page.component';
import { OrderQueryPage } from './sale/order-query/order-query-page.component';

const routes: Routes = [
	// { path: '', redirectTo: '/homepage', pathMatch: 'full' },
	{ path: '', component: HomePage },

	// users
	{ path: 'user/info', component: UserInfoPage },
	// { path: 'user/info/:id', component: UserInfoPage },
	// { path: 'user/test/:id', component: TestPage },

	// sales
	{ path: 'sale/order-create', component: OrderCreatePage },
	{ path: 'sale', redirectTo: 'sale/order-list/toprint', pathMatch: 'full' },
	{ path: 'sale/order-list', redirectTo: 'sale/order-list/toprint', pathMatch: 'full' },
	{ path: 'sale/order-list/:tab', component: OrderListPage },
	{ path: 'sale/order-query', component: OrderQueryPage },

	// Default to homepage.
	{ path: '**', redirectTo: "homepage" }
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
