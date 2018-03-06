"use strict";

app.component("shopbereich", {
    templateUrl: "components/shopbereich.html",
    controller: "shopbereichController",
    bindings: {
        aktualisieren: "&"
    }
});

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state({
        name: "shopbereich",
        url: "shopbereich",
        template: "<shopbereich aktualisieren='$ctrl.gesperrt(status)'></shopbereich>"
    });
});


app.controller("shopbereichController", function (Warenkorb) {
    var $ctrl = this;

    $ctrl.artikelname = '';

    $ctrl.artikelliste = [];

    $ctrl.gesperrt = $ctrl.artikelliste.length === 0;

    $ctrl.add = function () {
        $ctrl.artikelliste.push({'text': $ctrl.artikelname, 'stueck': $ctrl.stueck});
        $ctrl.artikelname="";
        $ctrl.stueck="";
        $ctrl.formular.$setUntouched();
        $ctrl.aktualisieren({"status": true});
    }

    $ctrl.loeschen = function (text, stueck) {
        var index = $ctrl.artikelliste.indexOf(text, stueck);
        $ctrl.artikelliste.splice(index, 1);
        $ctrl.artikelliste.push();
        $ctrl.aktualisieren({"status": this.artikelliste.length});
    }


});