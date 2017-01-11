/**
 * Include component decorator and routerlink directive for 
 * this component
 */
import { Component } from '@angular/core';

/**
 * Site intro component
 */
@Component({
  selector: 'mb-site-intro',
  styleUrls: ['./css/_siteintro.scss'],
  template: `<div class='site-intro'>
  <a [routerLink]="['./home']">
    <img alt='logo_dark' src='/assets/images/logo_dark.jpeg'/>
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
