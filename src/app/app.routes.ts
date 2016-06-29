import { RouterConfig } from '@angular/router';

/*
 * App child components
 */
import {BlogListComponent} from './components/bloglist/bloglist';
import {BlogNodeComponent} from './components/blognode/blognode';
import {AboutComponent} from './components/about/about';

export const routes: RouterConfig = [
  { path: '', redirectTo: 'home' },
  { path: 'home', component: BlogListComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:title', component: BlogNodeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'home' }
];
