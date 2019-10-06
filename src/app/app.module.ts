import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { MusicComponent } from './components/music/music.component';
import { FilmsComponent } from './components/films/films.component';
import { AboutComponent } from './components/about/about.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {MainServicService} from './main-servic.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MusicComponent,
    FilmsComponent,
    AboutComponent,
    AvatarComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [MainServicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
