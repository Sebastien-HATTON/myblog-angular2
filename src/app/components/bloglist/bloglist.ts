/*
 * Import Angular directives and decorators
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlogService } from './../../services/BlogService/BlogService';
import { BlogItem } from './../../Models/blogitem/blogitem';

@Component({
    selector: 'mb-blog-list',
    styleUrls: ['./css/_blog_item.scss'],
    template: `<mb-site-intro></mb-site-intro><div class='blog-list blogs'>
    <div class='blog_item' *ngFor='let blog_item of blogItems'>
        <p class='text-muted'>
            Post on : {{blog_item.created}} by Joao Garin
        </p>

        <h1 class='blog-title'>
            {{blog_item.title}}
        </h1>

        <p class='post-body' [innerHtml]='blog_item.body'>
        </p>

        <div class='full-post'>
            <a class='btn btn-primary' (click)="onSelect(blog_item)">Read full post</a>
        </div>
    </div>
</div>`
})
export class BlogListComponent implements OnInit {

    data: Object;
    loading: boolean;
    blogItems: Array<BlogItem>;

    constructor(private router: Router, public _blogservice: BlogService) { }

    ngOnInit() {
        this.getBogItems();
    }

    onSelect(blog_item: BlogItem) {
        this.router.navigate(['/blog', blog_item.url]);
    }

    /**
     * Get all blog items from the BlogService
     */
    getBogItems() {
        this._blogservice.getBlogitems()
            .subscribe(
            blogitems => this.blogItems = blogitems,
            error => console.error('Error: ' + error),
            () => { }
            );
    }
}
