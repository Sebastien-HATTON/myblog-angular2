/*
 * Angular2 decorators and directives
 */
import { Component, NgZone, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

/*
 * Import our models and child components
 */
import { BlogItem } from '../../Models/blogitem/blogitem';
import { BlogService } from '../../services/BlogService/BlogService';
import { SiteIntroComponent } from '../siteintro/siteintro';
import { DisqusComponent } from '../Disqus/disqus';

/**
 * Import the css for this components
 * It will be compiled by webpack and inserted into the template directly
 */
var blogs_css = require('./css/_blog_item_node.scss');

/**
 * Load prism for formatting code snippets on the blog node
 */
var Prism = require('./../../services/prism/prism.js');

/**
 * Save the white version of the logo
 */
var logo = require('./images/logo-white.png');

@Component({
  selector: 'mb-blog-node',
  providers: [BlogService],
  styles: [`${blogs_css}`],
  template: `
  <div class='blog-list blogs'>
    <div class='blog_item' *ngFor='let blog_item of blogItems'>
        <div class='blog-header'>
            <div class='blog-header-info'>
              <a [routerLink]="['./home']">
                <img alt='logo_dark' src='${logo}'/>
              </a>
              <h1 class='blog-title'>
                      {{blog_item.title}}
              </h1>
              <p class='text-muted'>
                  Post on : {{blog_item.created}} by Joao Garin
              </p>
            </div>
            <div class='blog-item__image'>
              <img [alt]="blog_item.title" [src]="blog_item.image"/>
            </div>
        </div>
        <div class='blog-body'>
          <p class='post-body' [innerHtml]='blog_item.body'>

          </p>
          <div class='comments'>
              <mb-disqus [disqusIdentifier]='blog_item.id' [disqusTitle]='blog_item.title' [disqusUrl]='blog_item.url'></mb-disqus>
          </div>
        </div>
    </div>
</div>`
})
export class BlogNodeComponent implements OnInit {

  data: Object;
  loading: boolean;
  blogItems: Array<BlogItem>;
  title: string;
  private sub: any;

  //Here we will start picking up the blog items from the backoffice
  constructor(private _ngZone: NgZone,
    public blogservice: BlogService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.title = params['title'];
      this.getNode();
    });
  }

  getNode() {
    this.blogservice.getBlogItemNode('\/' + this.title).subscribe(
      blognode => {
        blognode.map(blognode_obs => {
          blognode_obs.subscribe(
            node => {
              this.blogItems = node;
            }
          );
        });
      },
      error => console.error('Error: ' + error),
      () => {
        this._ngZone.run(() => {
          //Only run if document exists (prevent from running in the server)
          if (typeof document != 'undefined') {
            setTimeout(function () {
              let blog_item = document.querySelectorAll('.language-css');
              Prism.highlightAll();
            }, 200);
          }
        });
      }
    );
  }
}
