import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal/browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppModule, AppComponent } from './app/app.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AppModule,
    HttpModule,
    UniversalModule,
  ]
})
export class MainModule { }