import { BlogService } from './services/BlogService/BlogService';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SiteIntroComponent } from './components/siteintro/siteintro';
import { NavSidebarComponent } from './components/NavSidebar/NavSidebar';
import { HeaderComponent } from './components/Header/Header';
import { DisqusComponent } from './components/Disqus/disqus';
import { BlogNodeComponent } from './components/blognode/blognode';
import { BlogListComponent } from './components/bloglist/bloglist';
import { AboutComponent } from './components/about/about';
import { routes } from './app.routes';

@NgModule({
    providers: [BlogService],
    imports: [
        // Import this first
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [AppComponent, AboutComponent, BlogListComponent, BlogNodeComponent, DisqusComponent, HeaderComponent, NavSidebarComponent, SiteIntroComponent],
})
export class AppModule { }

export { AppComponent } from './app.component';