"use strict";

app.component("artikel", {
    templateUrl: "components/artikel.html",
    controller: "artikelController",
    bindings: {
        text: '@',
        stueck: '@',
        geaendert: '&',
        geloescht: '&'
    }

});


app.controller("artikelController", function () {

    var $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.neustueck = parseInt(this.stueck);
    }

    this.geaenderteArtikel = function () {
        $ctrl.geaendert({"text": $ctrl.text, "stueck": $ctrl.stueck});
        $ctrl.geklickt = true;
    }
    
    this.geloeschteArtikel = function () {
        $ctrl.geloescht({"text": $ctrl.text, "stueck": $ctrl.stueck});
    }

    $ctrl.finish = function () {
        $ctrl.geklickt = false;
    }

    $ctrl.save = function () {

    }
});