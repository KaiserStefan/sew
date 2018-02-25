"use strict";

app.component("einkaufen", {
    templateUrl: "components/einkaufen.html",
    controller: "einkaufenController",
    bindings: {
        aktualisieren: "&"
    }
});


app.config(function($stateProvider) {
    $stateProvider.state({
        name: "einkaufen",
        url: "/einkaufen",
        template: "<einkaufen aktualisieren='$ctrl.checkeWarenkorb(status)'></einkaufen>"
    });
});

app.controller("einkaufenController", function () {
    let $ctrl = this;

    $ctrl.ops = [
        "",
        "Leopard 2",
        "M1A2 Abrams",
        "Challenger 2",
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
        $ctrl.formular.$setUntouched();
        this.aktualisieren({"status": true});
    };

    $ctrl.loesch = function (object) {
        $ctrl.opslist.splice($ctrl.opslist.indexOf(object), 1);
        this.aktualisieren({"status": this.opslist.length});
    };
});