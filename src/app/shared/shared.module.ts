import { NgModule, ModuleWithProviders } from '@angular/core';
import { BlogService } from './../services/BlogService/BlogService';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { ModelService } from './model/model.service';

const MODULES = [
    CommonModule,
    RouterModule,
    HttpModule,
];

const PIPES = [];

const COMPONENTS = [];

const PROVIDERS = [
    ModelService,
    BlogService,
    ApiService
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