import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PrettyJsonModule } from 'angular2-prettyjson';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    PrettyJsonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
