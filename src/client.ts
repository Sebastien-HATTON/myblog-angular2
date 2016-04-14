/**
 * Import pollyfills and bindings directly from Angular Universal
 * 
 * Import also the prebootComplete event from universal preview so that we can call it to swap
 * Server side render with client side once client side app finishes loading 
 * see promisse callback in he bootstrap method
 * 
 */
import 'angular2-universal-preview/polyfills';
import {prebootComplete} from 'angular2-universal-preview';

/**
 * Import Angular2 modules, router bindings, http bindings and bootstrap method
 */
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

/**
 * Import our App
 */
import {App} from './app/app';

/**
 * Include Rxjs operators 
 * map, mergeMap
 */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

/**
 * Call the bootstrap method to kick in our client side app
 */
bootstrap(App, [
  ...ROUTER_PROVIDERS,
  ...HTTP_PROVIDERS
])
.then(bootstrapComplete);

function bootstrapComplete(val){
    //Call prebootComplete form angular universal to swap server with client
    return prebootComplete(val);
}
