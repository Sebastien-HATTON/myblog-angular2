import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {BlogItem} from "../../Models/blogitem/blogitem";

var domain = require('../config.json').domain;

@Injectable()
export class BlogService {
    blogitems:any;
    blogitemnode:any;

    constructor(http:Http) {
        this.blogitems = function(node_item) {
            return http.get(domain + 'blog-items-fields/all')
                .map(response => response.json().map(item => {
                    return new BlogItem(
                        item.field_image.replace("/blog_backoffice/", domain + "blog_backoffice/"),
                        item.title,
                        item.body,
                        item.path.replace("/blog_backoffice/", ""),
                        item.nid,
                        item.created
                    )
                }))
        };

        this.blogitemnode = function (title) {

            return http.get(domain + 'get-alias-id/' + title).map(response_alias => response_alias.json().map(
                alias_item => {
                    //An observable being returned inside another
                    return http.get(domain + 'get-node/' + alias_item.nid)
                        .map(response => response.json().map(item => {
                            return new BlogItem(
                                item.field_image.replace("/blog_backoffice/", domain + "blog_backoffice/"),
                                item.title,
                                item.body,
                                item.path.replace("/blog_backoffice/", ""),
                                item.nid,
                                item.created
                            )
                        }))
                }
            ));
        };
    }
}