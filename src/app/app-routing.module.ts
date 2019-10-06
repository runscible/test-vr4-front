import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import { IndexComponent } from './components/index/index.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'main', component: IndexComponent},
  {path: '**', component: NotFoundComponent},
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
