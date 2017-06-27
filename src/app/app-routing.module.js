"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var home_page_component_1 = require('./home-page.component');
var about_page_component_1 = require('./about-page.component');
var contact_page_component_1 = require('./contact-page.component');
var work_page_component_1 = require('./work-page.component');
var gallery_component_1 = require('./gallery.component');
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        component: home_page_component_1.HomePageComponent
                    },
                    {
                        path: 'about',
                        component: about_page_component_1.AboutPageComponent
                    },
                    {
                        path: 'contact',
                        component: contact_page_component_1.ContactPageComponent
                    },
                    {
                        path: 'work',
                        component: work_page_component_1.WorkPageComponent,
                        children: [
                            {
                                path: '',
                                redirectTo: 'in-color',
                                pathMatch: 'full'
                            },
                            {
                                path: 'in-color',
                                component: gallery_component_1.GalleryComponent,
                                data: { collection: 'color' }
                            },
                            {
                                path: 'in-black-and-white',
                                component: gallery_component_1.GalleryComponent,
                                data: { collection: 'bw' }
                            },
                            {
                                path: 'cats',
                                component: gallery_component_1.GalleryComponent,
                                data: { collection: 'cats' }
                            }
                        ]
                    }
                ])
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map