import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*
var config = {
  apiKey: "AIzaSyBWC9buYKwKo5AJDPyY4_afhsWXAKH7prc",
  authDomain: "fitness-app-8b3e4.firebaseapp.com",
  databaseURL: "https://fitness-app-8b3e4.firebaseio.com",
  projectId: "fitness-app-8b3e4",
  storageBucket: "fitness-app-8b3e4.appspot.com",
  messagingSenderId: "525243556566"
};
*/
