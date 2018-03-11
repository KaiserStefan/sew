"use strict";

app.component("einkaufen", {
    templateUrl: "components/einkaufen.html",
    controller: "einkaufenController",
    bindings: {
    }
});


app.config(function($stateProvider) {
    $stateProvider.state({
        name: "einkaufen",
        url: "/einkaufen",
        component: "einkaufen"
    });
});

app.controller("einkaufenController", function (ShopService, Artikel) {
    let $ctrl = this;

    $ctrl.ops = [
        "",
        "Leopard 2",
        "M1A2 Abrams",
        "Challenger 2",
        "T-90",
        "Leclerc"
    ];

    $ctrl.warenkorb = ShopService.warenkorb;

    $ctrl.artikelname = "";
    $ctrl.anzahl = "";

    $ctrl.neuArtikel = function () {
        ShopService.add(new Artikel($ctrl.artikelname, $ctrl.anzahl));
        $ctrl.artikelname = "";
        $ctrl.anzahl = "";
        $ctrl.formular.$setUntouched();
        $ctrl.klick = true;
    };

    $ctrl.loesch = function (object) {
        ShopService.del(object);
    };

    $ctrl.speich = function (object, anz) {
        ShopService.replaze(object, new Artikel(object.text, anz));
    };

    $ctrl.getmenge = function () {
        let tempx = 0;
        for (let temp in $ctrl.warenkorb) {
            tempx += $ctrl.warenkorb[temp].menge;
        }
        return tempx;
    };
});