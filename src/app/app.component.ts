/*
 * Import Angular 2 decorators and services
 */
import {Directive, Component, ViewEncapsulation, OnInit} from '@angular/core';
import {Http} from '@angular/http';

/*
 * App child components
 */
import {BlogListComponent} from './components/bloglist/bloglist';
import {BlogNodeComponent} from './components/blognode/blognode';
import {HeaderComponent} from './components/Header/Header';
import {NavSidebarComponent} from './components/NavSidebar/NavSidebar';
import {AboutComponent} from './components/about/about';

/*
 * Import the global css for the site
 * 
 * Because this component is set to have encapsulation : ViewEncapsulation.None
 * the css will be global just like normal css meaning it will not be tied to any component or 
 * scoped in any way.
 */
var page_css = require('./css/layout/_page.scss');

/**
 * Include the prism css file to be processed by webpack
 */
var prism_css = require('./services/prism/prism.css');

@Component({
    selector: 'mb-app',
    styles: [`${page_css} ${prism_css}`],
    encapsulation: ViewEncapsulation.None,
    template: `
    <mb-blog-header></mb-blog-header>
    <mb-nav-sidebar (NavStateChanged)='moveBody($event)' [navLinks]=links></mb-nav-sidebar>
    <div class='blog-app' [ngClass]='{shiftLeft:shifted}'>
        <router-outlet></router-outlet>
    </div>`
})
export class AppComponent implements OnInit {

    links: any;
    shifted: boolean;

    ngOnInit() {
        this.links = [{
            'url': './about',
            'name': 'About Me',
        }];
    }

    moveBody(message: string) {
        this.shifted = !this.shifted;
    }
}
