/**
 * Include component decorator and routerlink directive for 
 * this component
 */
import {Component, EventEmitter} from "@angular/core";
import {NgClass, NgFor, NgIf} from "@angular/common";
import {RouterLink} from '@angular/router-deprecated';

/**
 * Save the css to be used directly in the template
 * This will be processed by webpack and deliver the compiled sass
 */
var nav_css = require("./css/_navsidebar.scss");

@Component({
    selector: 'nav-sidebar',
    inputs: ['navLinks'],
    outputs: ['NavStateChanged'],
    styles: [`${nav_css}`],
    directives: [NgFor, RouterLink, NgClass],
    template: `
    <div class="menu_toggle">
            <a (click)="toggleNav()"><i class="fa fa-navicon"></i></a>
    </div>
    <aside class="nav_sidebar" [ngClass]="{opened: isOpen}">
        <div class="user-pic">
          <a [routerLink]="['Home']"><img src="https://www.drupal.org/files/styles/grid-2/public/user-pictures/picture-612814-1413290760.png?itok=GXM2mba3"/></a>
        </div>
        <ul>
            <li *ngFor="let navLink of navLinks">
                <a [routerLink]="[navLink.url]">{{navLink.name}}</a>
            </li>
            <li>
                <a target="_blank" href="http://themeforest.net/user/monkey_themes">Themes / Portfolio</a>
            </li>
            <li>
                <a target="_blank" href="https://behance.net/joaogarin">U/X & Design</a>
            </li>
            <li>
                <a target="_blank" href="https://github.com/joaogarin">Open source</a>
            </li>
        </ul>
        <a href="https://twitter.com/joaogarin" class="twitter-follow-button" data-show-count="false">Follow @joaogarin</a>
        <script>window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));</script>
     </aside>`
})
export class NavSidebar {

    navLinks: any;
    isOpen: boolean;
    NavStateChanged = new EventEmitter();

    constructor() {
        Object.assign(this, { isOpen: false });
    }

    /**
     * Toggle navigation on the sidebar
     * 
     * Emits an event so that outer components know of this and react accordingly
     */
    toggleNav() {
        var changedStatus = !this.isOpen;
        Object.assign(this, { isOpen: changedStatus });
        this.NavStateChanged.emit("opened");
    }
}