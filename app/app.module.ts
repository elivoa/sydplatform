import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Compoennts
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './layout/header.component';
import { LeftnavComponent } from './layout/leftnav.component';
import { HomepageComponent } from './homepage/homepage.component';
// import { HeroDetailComponent }  from './hero-detail.component';
// import { HeroesComponent }      from './heroes.component';

// Services 
// import { HeroService }          from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    // layout components
    HeaderComponent, LeftnavComponent,

    // DashboardComponent,
    // HeroDetailComponent,
    // HeroesComponent
  ],
  // providers: [ HeroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }