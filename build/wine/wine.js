System.register([], function(exports_1) {
    var Wine;
    return {
        setters:[],
        execute: function() {
            Wine = (function () {
                function Wine(name) {
                    this._name = name;
                }
                Object.defineProperty(Wine.prototype, "name", {
                    get: function () {
                        return this._name;
                    },
                    set: function (value) {
                        this._name = name;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Wine;
            })();
            exports_1("Wine", Wine);
        }
    }
});
//# sourceMappingURL=wine.js.map