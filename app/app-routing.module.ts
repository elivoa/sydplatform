import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent }   from './homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage',  component: HomepageComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes',     component: HeroesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
