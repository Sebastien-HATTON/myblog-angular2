/**
 * Import server side rendering dependencies
 * express, path and body-parser
 */
import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';

/**
 * Import pollyfills and bindings directly from Angular Universal
 * 
 * Angular Universal provides its own polyfills but also its own bindings for HTTP, express engine etc.
 * We import them here so they are used bellow. See function ngApp()
 * 
 */
import 'angular2-universal-preview/polyfills';
import {
    expressEngine,
    REQUEST_URL,
    NODE_ROUTER_PROVIDERS,
    NODE_HTTP_PROVIDERS
} from 'angular2-universal-preview';

/**
 * Import Angular2 moduels like provide, enableProdMode 
 * but also the router bindings
 */
import {provide, enableProdMode} from 'angular2/core';
import {APP_BASE_HREF, ROUTER_PROVIDERS} from 'angular2/router';

/**
 * Include Rxjs operators 
 * map, mergeMap
 */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


/**
 * Import our App
 */
import {App} from './app/app';

// Init Express
let app = express();
let root = path.join(path.resolve(__dirname, '..'));

app.use(bodyParser.json());

enableProdMode();

// Express View
app.engine('.html', expressEngine);
app.set('views', __dirname);
app.set('view engine', 'html');

function ngApp(req, res) {
    let baseUrl = '/';
    let url = req.originalUrl || '/';
    res.render('index', {
        directives: [App],
        providers: [
            provide(APP_BASE_HREF, { useValue: baseUrl }),
            provide(REQUEST_URL, { useValue: url }),
            NODE_ROUTER_PROVIDERS,
            NODE_HTTP_PROVIDERS,
        ],
        async: true,
        preboot: false
    });
}

// Serve static files
app.use(express.static(root, {index: false}));

// Routes
app.use('/', ngApp);
app.use('/blog/:title', ngApp);
app.use('/about', ngApp);

// Server
app.listen(8080, () => {
    
});