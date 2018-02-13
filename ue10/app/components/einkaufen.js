"use strict";

app.component("einkaufen", {
    templateUrl: "components/einkaufen.html",
    controller: "einkaufenController"
});


app.config(function($stateProvider) {
    $stateProvider.state({
        name: "einkaufen",
        url: "/einkaufen",
        component: "einkaufen"
    });
});

app.controller("einkaufenController", function () {
    let $ctrl = this;

    $ctrl.ops = [
        "",
        "Leopard 2",
        "M1A2 Abrams",
        "Challenger ",
        "T-90",
        "Leclerc"
    ];

    $ctrl.opslist = [];
    $ctrl.artikelname = "";
    $ctrl.anzahl = "";

    $ctrl.neuArtikel = function () {
        $ctrl.opslist.push({"name": $ctrl.artikelname, "anzahl": $ctrl.anzahl});
        $ctrl.artikelname = "";
        $ctrl.anzahl = "";
    };

    $ctrl.loesch = function (object) {
        $ctrl.opslist.splice($ctrl.opslist.indexOf(object), 1);
    };
});