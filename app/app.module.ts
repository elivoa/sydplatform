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
import { TestPage } from './user/test.component';

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
    UserInfoPage,TestPage,

    // layout components
    HeaderComponent, LeftnavComponent,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }


