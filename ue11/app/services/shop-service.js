"use strict";

app.service("ShopService", function() {

    this.warenkorb = [];

    this.add = function (artikel) {
        this.warenkorb.push(artikel);
    };

    this.del = function (artikel) {
        this.warenkorb.splice(this.warenkorb.indexOf(artikel), 1);
    };

    this.replaze = function (altartikel, neuartikel) {
        this.warenkorb.splice(this.warenkorb.indexOf(altartikel), 1, neuartikel);
    };
});