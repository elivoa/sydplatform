import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Compoennts, Layouts, etc...
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './layout/header.component';
import { LeftnavComponent } from './layout/leftnav.component';

// Pages
import { HomePage } from './homepage/homepage.component';
import { UserInfoPage } from './user/userinfo.component';

// Sales:Order
import { OrderCreatePage } from './sale/order-create/order-create-page.component';
import { OrderListPage } from './sale/order-list/order-list-page.component';
import { OrderQueryPage } from './sale/order-query/order-query-page.component';

import { OrderListComponent } from './sale/order-list/order-list.component';

// Production:Product
import { ProductListPage } from './production/product-list/product-list-page.component';
import { ProductListComponent } from './production/product-list/product-list.component';
import { ProductEditPage } from './production/product-edit/product-edit-page.component';


// Common Components
import { PagerComponent } from './common/pager.component';

// Services 
import { ConstService } from './service/const.service';
import { AuthService } from './service/auth.service';
import { OrderService } from './service/order.service'
import { ProductService } from './service/product.service'
import { Utils } from './service/utils.service'

// Pipes
import { OrderStatusLabelPipe } from './common/syd.pipe'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,

    HomePage,

    // user
    UserInfoPage,

    // sale related pages.
    OrderCreatePage, OrderListPage, OrderQueryPage,
    OrderListComponent,

    // production
    ProductListPage, ProductEditPage,
    ProductListComponent,

    // Common Components
    PagerComponent,

    // layou components
    HeaderComponent, LeftnavComponent,

    // Pipes
    OrderStatusLabelPipe,
  ],
  providers: [
    Utils, ConstService, AuthService, OrderService, ProductService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }


