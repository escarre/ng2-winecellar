System.register(['./wine', './mock-wines', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var wine_1, mock_wines_1, core_1;
    var WineService;
    return {
        setters:[
            function (wine_1_1) {
                wine_1 = wine_1_1;
            },
            function (mock_wines_1_1) {
                mock_wines_1 = mock_wines_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            WineService = (function () {
                function WineService() {
                    this.wines = mock_wines_1.WINES;
                }
                WineService.prototype.getWines = function () {
                    return Promise.resolve(this.wines);
                };
                WineService.prototype.addWine = function (newWine) {
                    this.wines.push(new wine_1.Wine(newWine));
                };
                WineService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], WineService);
                return WineService;
            })();
            exports_1("WineService", WineService);
        }
    }
});
//# sourceMappingURL=wine.service.js.map