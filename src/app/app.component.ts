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

@Component({
    selector: 'mb-app',
    styleUrls: ['./services/prism/prism.css','./css/layout/_page.scss'],
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
