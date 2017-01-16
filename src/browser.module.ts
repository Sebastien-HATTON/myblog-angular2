import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal/browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from './app/shared/shared.module';

import { AppModule, AppComponent } from './app/app.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    UniversalModule,
    SharedModule.forRoot(),
    AppModule,
  ],
})
export class MainModule { }