// ./src/node.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { UniversalModule } from 'angular2-universal/node'; // for AoT we need to manually split universal packages

import { AppModule, AppComponent } from './app/app.module';

// Will be merged into @angular/platform-browser in a later release
// see https://github.com/angular/angular/pull/12322
import { Meta } from './angular2-meta';
export function getLRU() {
  return new Map();
}
export function getRequest() {
  return Zone.current.get('req') || {};
}
export function getResponse() {
  return Zone.current.get('res') || {};
}

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AppModule,
    HttpModule,
    RouterModule.forRoot([], { useHash: false }),
    UniversalModule,
  ],
  providers: [
    { provide: 'isBrowser', useValue: true },
    { provide: 'isNode', useValue: true },

    { provide: 'req', useFactory: getRequest },
    { provide: 'res', useFactory: getResponse },

    { provide: 'LRU', useFactory: getLRU, deps: [] },

    Meta,
  ]
})
export class MainModule { }