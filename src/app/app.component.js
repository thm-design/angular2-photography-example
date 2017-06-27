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
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"page-container\">\n    <header>\n      <div>\n        <a routerLink=\"/\" class=\"signature\">Faksy Foo</a>          \n        <br />\n        <span class=\"sub-signature\">Photography</span>\n      </div>    \n      <nav>\n        <a routerLink=\"/work\" routerLinkActive=\"active-link\">Work</a>\n        <a routerLink=\"/contact\" routerLinkActive=\"active-link\">Contact</a>\n        <a routerLink=\"/about\" routerLinkActive=\"active-link\">About</a>        \n      </nav>\n    </header>\n    <main>        \n      <router-outlet></router-outlet>\n    </main>\n    <footer>\n      \u00A9 2017 Faksy Foo\n    </footer>\n  </div>",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map