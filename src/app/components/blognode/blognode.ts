/*
 * Angular2 decorators and directives
 */
import {Component, NgZone} from "@angular/core";
import {NgFor, NgIf} from "@angular/common";
import {RouteParams} from "@angular/router-deprecated";

/*
 * Import our models and child components
 */
import {BlogItem} from "../../Models/blogitem/blogitem";
import {BlogService} from "../../services/BlogService/BlogService";
import {SiteIntro} from "../siteintro/siteintro";
import {Disqus} from '../Disqus/disqus';

/**
 * Import the css for this components
 * It will be compiled by webpack and inserted into the template directly
 */
var blogs_css = require("./css/_blog_item_node.scss");

/**
 * Load prism for formatting code snippets on the blog node
 */
var Prism = require('./../../services/prism/prism.js');

@Component({
  selector: 'blog-node',
  providers: [BlogService],
  directives: [NgFor, SiteIntro, Disqus],
  styles: [`${blogs_css}`],
  template: `<site-intro></site-intro><div class="blog-list blogs">
    <div class="blog_item" *ngFor="let blog_item of blogItems">
        <p class="text-muted">
            Post on : {{blog_item.created}} by Joao Garin
        </p>

        <h1 class="blog-title">
            {{blog_item.title}}
        </h1>

        <div class="blog-item__image" [innerHtml]="blog_item.image">
        </div>

        <p class="post-body" [innerHtml]="blog_item.body">

        </p>
        <div class="comments">
            <disqus [disqusIdentifier]="blog_item.id" [disqusTitle]="blog_item.title" [disqusUrl]="blog_item.url"></disqus>
        </div>
    </div>
</div>`
})
export class BlogNode {

  data: Object;
  loading: boolean;
  blogItems: Array<BlogItem>;
  title: string;

  //Here we will start picking up the blog items from the backoffice
  constructor(private _ngZone: NgZone, public blogservice: BlogService, private routeParams: RouteParams) {
    this.title = routeParams.get("title");

    blogservice.getBlogItemNode("\/" + this.title).subscribe(
      blognode => {
        blognode.map(blognode_obs => {
          blognode_obs.subscribe(
            node => {
              this.blogItems = node;
            }
            )
        });
      },
      error => console.error('Error: ' + error),
      () => {
        _ngZone.run(() => {
          //Only run if document exists (prevent from running in the server)
          if (typeof document != "undefined") {
            setTimeout(function() {
              let blog_item = document.querySelectorAll('.language-css');
              Prism.highlightAll();
            }, 200);
          }
        });
      }
      );
  }
}
