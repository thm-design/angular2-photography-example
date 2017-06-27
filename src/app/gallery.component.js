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
var collections = {
    color: [
        'https://cdn.gomix.com/c0bf32ae-0bd4-4970-9a1a-9e3614092745%2Ffog.jpg',
        'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fc1.jpg',
        'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fwinter-196339_640.jpg',
        'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fforest-483207_640.jpg',
        'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Friver-1740973_640.jpg',
        'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fforest-1225983_640.jpg',
        'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fforest-1950402_640.jpg',
        'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fgreen-1072828_640.jpg',
        'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Froad-1072823_640.jpg',
        'https://cdn.pixabay.com/photo/2016/09/03/15/31/seascape-1641999_640.jpg'
    ],
    bw: [
        'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fblack-and-white-1278713_640.jpg',
        'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fcamera-541213_640.jpg',
        'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fwall-175686_640.jpg',
        'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fsea-of-fog-373782_640.jpg',
        'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fzebra-470358_640.jpg',
        'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fdog-188273_640.jpg',
        'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Fbuildings-123780_640.jpg',
        'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Ftiger-and-turtle-52691_640.jpg',
        'https://cdn.gomix.com/fdec271b-580f-478c-bb69-9ec593133745%2Froad-949832_640.jpg'
    ],
    cats: [
        'https://cdn.pixabay.com/photo/2015/05/22/05/52/cat-778315_640.jpg',
        'https://cdn.pixabay.com/photo/2017/02/02/18/15/tabby-cat-2033439_640.jpg'
    ]
};
var GalleryComponent = (function () {
    function GalleryComponent(route, router) {
        this.route = route;
        this.router = router;
        this.thumbnails = [];
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (_a) {
            var collection = _a.collection;
            var c = collections[collection];
            _this.primaryImage = c[Math.ceil((Math.random() * (c.length - 1)))];
            _this.thumbnails = c;
        });
    };
    GalleryComponent = __decorate([
        core_1.Component({
            selector: 'gallery',
            templateUrl: 'templates/gallery.tpl.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
//# sourceMappingURL=gallery.component.js.map