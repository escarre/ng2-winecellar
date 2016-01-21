System.register(['angular2/core', './wine/wine-detail.component', './wine/wine.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, wine_detail_component_1, wine_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (wine_detail_component_1_1) {
                wine_detail_component_1 = wine_detail_component_1_1;
            },
            function (wine_service_1_1) {
                wine_service_1 = wine_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_wineService) {
                    this._wineService = _wineService;
                    this.title = 'Wine Cellar';
                }
                AppComponent.prototype.getWines = function () {
                    var _this = this;
                    this._wineService.getWines().then(function (wines) { return _this.wines = wines; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getWines();
                };
                AppComponent.prototype.onSelect = function (wine) { this.selectedWine = wine; };
                AppComponent.prototype.addWine = function () {
                    this._wineService.addWine(this.newWine);
                    this.newWine = '';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.html',
                        directives: [wine_detail_component_1.WineDetailComponent],
                        providers: [wine_service_1.WineService]
                    }), 
                    __metadata('design:paramtypes', [wine_service_1.WineService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map