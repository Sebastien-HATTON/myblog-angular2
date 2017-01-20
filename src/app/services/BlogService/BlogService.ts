import { ModelService } from './../../shared/model/model.service';
/**
 * Include all the necessary things for this component
 * Injectable so that the service can be DI'ed into other components as a service.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

/**
 * Import the BlogItem model
 * 
 * Representation of a blog item
 */
import { BlogItem } from '../../Models/blogitem/blogitem';

/**
 * Import domain from the config file
 */
var domain = require('../config.json').domain;

@Injectable()
export class BlogService {
    blogitems: any;
    blogitemnode: any;
    http: Http;

    constructor(http: Http, public model: ModelService) {
        this.http = http;
        this.blogitems = this.getBlogitems();
    }

    /**
     * Gets all blog items from the current domain setup in the config file
     * 
     * @return {Array<BlogItem>} 
     * The array of all the blog items
     */
    getBlogitems(): Observable<any> {
        return this.model.get(domain + 'blog-items-fields/all')
            .map(response => response.map(item => {
                return new BlogItem(
                    item.field_image.replace('/sites/', domain + '/sites/'),
                    item.title,
                    item.body,
                    item.path.replace('\/', ''),
                    item.nid,
                    item.created
                );
            }));
    };

    /**
     * Gets a specific blog item from a node title
     * 
     * @param {string} title
     * The title of the item to be requested
     * 
     * This will first use the title to get the alias from the Drupal site and then with that alias get the correct node.
     * It will map this node into a BlogItem model type and return it.
     * 
     * @return {BlogItem} 
     * The blog item corresponding to the node being fetched
     */
    getBlogItemNode(title: string) {
        return this.model.get(domain + 'get-alias-id' + title).map(response_alias => response_alias.map(
            alias_item => {
                //An observable being returned inside another
                return this.model.get(domain + 'get-node/' + alias_item.nid)
                    .map(response => response.map(item => {
                        let regex = /<img.*?src=['"](.*?)['"]/;
                        let image_src = regex.exec(item.field_image.replace('/sites/', domain + '/sites/'))[1];
                        return new BlogItem(
                            image_src,
                            item.title,
                            item.body,
                            item.path.replace('/blog_backoffice/', ''),
                            item.nid,
                            item.created
                        );
                    }));
            }
        ));
    };
}
