/**
 * Import pollyfills and bindings directly from Angular Universal
 * 
 * Import also the prebootComplete event from universal preview so that we can call it to swap
 * Server side render with client side once client side app finishes loading 
 * see promisse callback in he bootstrap method
 * 
 */
import 'angular2-universal/polyfills';
import {bootstrap, enableProdMode, BROWSER_ROUTER_PROVIDERS, BROWSER_HTTP_PROVIDERS} from 'angular2-universal';

/**
 * Import our App
 */
import {AppComponent} from './app/app';

/**
 * Include Rxjs operators 
 * map, mergeMap
 */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

/**
 * Call the bootstrap method to kick in our client side app
 */
bootstrap(AppComponent, [
  ...BROWSER_ROUTER_PROVIDERS,
  ...BROWSER_HTTP_PROVIDERS
]);
