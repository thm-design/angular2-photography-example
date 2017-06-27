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
var ContactPageComponent = (function () {
    function ContactPageComponent() {
    }
    ContactPageComponent = __decorate([
        core_1.Component({
            selector: 'contact-page',
            template: "\n    <section class=\"contact-me-section\">\n      <div class=\"portrait-photo\"></div>\n      <div class=\"forms-container\">\n        <div><input placeholder=\"Message title\" /></div>\n        <div><textarea placeholder=\"Write your message here\"></textarea></div>\n        <div class=\"button-container\"><button>Send</button></div>\n      </div>\n      <div class=\"contact-details\">\n        <address>\n          694 Memory Lane<br />\n          Hopkins Park<br />\n          California<br />\n        </address>\n        <p>\n          <b>Email:</b> faksyfoo@example.com<br />\n          <b>Phone:</b> 020 7946 0680<br />\n        </p>\n      </div>      \n    </section>"
        }), 
        __metadata('design:paramtypes', [])
    ], ContactPageComponent);
    return ContactPageComponent;
}());
exports.ContactPageComponent = ContactPageComponent;
//# sourceMappingURL=contact-page.component.js.map