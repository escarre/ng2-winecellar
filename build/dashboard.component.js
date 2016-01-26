System.register(['angular2/core', 'angular2/router', './wine/wine.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, wine_service_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (wine_service_1_1) {
                wine_service_1 = wine_service_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_wineService, _router) {
                    this._wineService = _wineService;
                    this._router = _router;
                    this.wines = [];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //this could only return top 5 unopened wines
                    //could also do some averages
                    this._wineService.getWines().then(function (wines) { return _this.wines = wines; });
                };
                DashboardComponent.prototype.gotoWine = function (wine) {
                    this._router.navigate(['WineDetail', { id: wine.id }]);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        templateUrl: 'app/dashboard.html'
                    }), 
                    __metadata('design:paramtypes', [wine_service_1.WineService, router_1.Router])
                ], DashboardComponent);
                return DashboardComponent;
            })();
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map