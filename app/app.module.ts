import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Compoennts,
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './layout/header.component';
import { LeftnavComponent } from './layout/leftnav.component';

// Pages
import { HomePage } from './homepage/homepage.component';
import { UserInfoPage } from './user/userinfo.component';

import { OrderCreatePage } from './sale/order-create/order-create-page.component';
import { OrderListPage } from './sale/order-list/order-list-page.component';
import { OrderQueryPage } from './sale/order-query/order-query-page.component';

// Components
import { OrderListComponent } from './sale/order-list/order-list.component';

// Common Components
import { PagerComponent } from './common/pager.component';

// Services 
import { AuthService } from './service/auth.service';

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

    // Components
    OrderListComponent,

    // Common Components
    PagerComponent,

    // layou components
    HeaderComponent, LeftnavComponent,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }


