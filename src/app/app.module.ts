import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about';
import { BlogListComponent } from './components/bloglist/bloglist';
import { BlogNodeComponent } from './components/blognode/blognode';
import { HeaderComponent } from './components/Header/Header';
import { NavSidebarComponent } from './components/NavSidebar/NavSidebar';
import { SiteIntroComponent } from './components/siteintro/siteintro';

import { routes } from './app.routes';

import { SharedModule } from './shared/shared.module';

// RxJS
import 'rxjs/add/operator/map';

@NgModule({
    imports: [
        // Import this first
        SharedModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        AboutComponent,
        SiteIntroComponent,
        BlogListComponent,
        BlogNodeComponent,
        HeaderComponent,
        SiteIntroComponent,
        NavSidebarComponent,
    ],
})
export class AppModule { }

export { AppComponent } from './app.component';