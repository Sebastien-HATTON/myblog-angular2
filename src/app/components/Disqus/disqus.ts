/**
 * Include Angular2 decorators and services
 */
import {Component, Input, NgZone} from "angular2/core";
import {Location} from 'angular2/router';

@Component({
  selector: 'disqus',
  template: `<div id="disqus_thread"></div><a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>`
})
export class Disqus {

  // Discuss settings
  disqus_shortname: string;
  @Input() disqusIdentifier: string;
  @Input() disqusTitle: string;
  @Input() disqusUrl: string;
  disqus_api_key: string;
  location: Location;

  constructor(private _ngZone: NgZone) {
    this.disqus_shortname = "joaogarinblog";
  }

  /**
   * Initialize the Disquss plugin
   *
   * Discuss needs to tocuh the dom Window so we use <any>window)
   */
  ngOnInit() {

    if (typeof document != "undefined") {

      this._ngZone.run(() => {

        let disqus_url = location.href;
        let disqus_identifier = this.disqusTitle + " - " + this.disqusIdentifier;
        let disqus_shortname = this.disqus_shortname;
        let disqus_title = this.disqusTitle;

        // ensure that the disqus_identifier and disqus_url are both set, otherwise we will run in to identifier conflicts when using URLs with "#" in them
        // see http://help.disqus.com/customer/portal/articles/662547-why-are-the-same-comments-showing-up-on-multiple-pages-
        if (typeof this.disqusIdentifier === 'undefined' || typeof this.disqusUrl === 'undefined') {
          throw "Please ensure that the `disqus-identifier` and `disqus-url` attributes are both set.";
        }

        (<any>window).disqus_config = function() {
          console.log(disqus_url);
          this.page.url = disqus_url;
          this.page.identifier = disqus_identifier;
        };

        if (!((<any>window).DISQUS)) {
          var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
          dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        }
        else {
          (<any>window).DISQUS.reset({
            reload: true,
            config: function() {
              this.page.identifier = disqus_identifier;
              this.page.url = disqus_url;
              this.page.title = disqus_title;
            }
          });
        }

      });
    }
  }
}
