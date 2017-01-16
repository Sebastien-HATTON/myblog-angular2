/**
 * Include component decorator and routerlink directive for 
 * this component
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'mb-nav-sidebar',
    styleUrls: ['./css/_navsidebar.scss'],
    template: `
    <div class="menu_toggle">
            <a (click)="toggleNav()"><i class="fa fa-navicon"></i></a>
    </div>
    <aside class="nav_sidebar" [ngClass]="{opened: isOpen}">
        <div class="user-pic">
          <a [routerLink]="['/home']"><img src="https://www.drupal.org/files/styles/grid-2/public/user-pictures/picture-612814-1413290760.png?itok=GXM2mba3"/></a>
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
     </aside>`
})
export class NavSidebarComponent {

    @Input() navLinks: any;
    isOpen: boolean;
    @Output() NavStateChanged = new EventEmitter();

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
        this.NavStateChanged.emit('opened');
    }
}
