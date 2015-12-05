/// <reference path="../../../../node_modules/angular2/bundles/typings/angular2/angular2.d.ts" />
/// <reference path="../../../../node_modules/angular2/bundles/typings/angular2/http.d.ts" />

/*
 * Angular
 */
import {Component, View, NgIf, NgFor} from "angular2/angular2";
import {BlogItem} from "../../Models/blogitem/blogitem";
import {BlogService} from "../../services/BlogService/BlogService";

var blogs_css = require("!css!sass!./css/_blog_item.scss");

@Component({
    selector: 'blog-list',
    providers: [BlogService]
})
@View({
    directives: [NgFor],
    styles: [`${blogs_css}`],
    template: `<div class="blog-list blogs">
    <div class="blog_item" *ng-for="#blog_item of blogItems">
        <h1 class="blog-title">
            {{blog_item.title}}
        </h1>

        <div class="blog-item__image" [inner-html]="blog_item.image">

        </div>

        <p class="post-body" [inner-html]="blog_item.body">

        </p>
    </div>
</div>`
})
export class BlogList {

    data: Object;
    loading: boolean;
    blogItems: Array<BlogItem>;
    //Here we will start picking up the blog items from the backoffice
    constructor(public blogservice: BlogService) {

        blogservice.blogitems
            .subscribe(
                blogitems => this.blogItems = blogitems,
                error => console.error('Error: ' + error),
                () => console.log(this.blogItems)
            );
    }
}