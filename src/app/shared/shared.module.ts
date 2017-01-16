import { NgModule, ModuleWithProviders } from '@angular/core';
import { BlogService } from './../services/BlogService/BlogService';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const MODULES = [
    CommonModule,
    RouterModule,
    HttpModule,
];

const PIPES = [];

const COMPONENTS = [];

const PROVIDERS = [
    BlogService,
];

@NgModule({
    imports: [
        ...MODULES
    ],
    declarations: [
        ...PIPES,
        ...COMPONENTS
    ],
    exports: [
        ...MODULES,
        ...PIPES,
        ...COMPONENTS
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ...PROVIDERS
            ]
        };
    }
}