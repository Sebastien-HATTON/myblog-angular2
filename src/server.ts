import 'angular2-universal/polyfills';

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

// Angular 2 Universal
import {
    provide,
    enableProdMode,
    expressEngine,
    REQUEST_URL,
    ORIGIN_URL,
    BASE_URL,
    NODE_ROUTER_PROVIDERS,
    NODE_HTTP_PROVIDERS,
    ExpressEngineConfig
} from 'angular2-universal';

/**
 * Include Rxjs operators 
 * map, mergeMap
 */
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


/**
 * Import our App
 */
import {AppComponent} from './app/app';

// Init Express
const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));

enableProdMode();

// Express View
app.engine('.html', expressEngine);
app.set('views', __dirname);
app.set('view engine', 'html');

app.use(bodyParser.json());

function ngApp(req, res) {
    let baseUrl = '/';
    let url = req.originalUrl || '/';

    let config: ExpressEngineConfig = {
        directives: [AppComponent],
        platformProviders: [
            provide(ORIGIN_URL, { useValue: 'http://localhost:8080' }),
            provide(BASE_URL, { useValue: baseUrl }),
        ],
        providers: [
            provide(REQUEST_URL, { useValue: url }),
            NODE_ROUTER_PROVIDERS,
            NODE_HTTP_PROVIDERS,
        ],
        async: true,
        preboot: false // { appRoot: 'app' } // your top level app component selector
    };

    res.render('index', config);
}

// Serve static files
app.use(express.static(ROOT, { index: false }));

// Routes
app.use('/', ngApp);
app.use('/blog/:title', ngApp);
app.use('/about', ngApp);

// Server
app.listen(8080, () => {

});
