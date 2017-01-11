/**
 * Include component decorator and routerlink directive for 
 * this component
 */
import { Component } from '@angular/core';

/**
 * Save the logo to be injected in the template
 * This will be processed by webpack
 */
export const logo = require('./images/logo_dark.jpeg');

/**
 * Site intro component
 */
@Component({
  selector: 'mb-site-intro',
  styleUrls: ['./css/_siteintro.scss'],
  template: `<div class='site-intro'>
  <a [routerLink]="['./home']">
    <img alt='logo_dark' src='${logo}'/>
  </a>
  <p class='site-intro__intro-text'>
    Hi, my name is Joao Garin. I love travelling, programming and sports. I also enjoy coffee very much. Thank you for
    visiting my blog.
  </p>
  <span class='site-intro__separator'>
      <i class='fa fa-2x fa-list'>

      </i>
  </span>
</div>`
})
export class SiteIntroComponent {
}
