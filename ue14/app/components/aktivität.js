"use strict";

app.component("aktivität", {
    templateUrl: "components/aktivität.html",
    controller: "aktivitätController",
    bindings: {
        aktivitaet: '<',
        geaendert: '&',
        geloescht: '&'
    }
});

app.controller("aktivitätController", function (Aktivitaet, ZeitService) {
    let $ctrl = this;
    
    $ctrl.ZeitService = ZeitService;

    $ctrl.edit = function () {
        $ctrl.NeuPerson = $ctrl.aktivitaet.person;
        $ctrl.NeuAktivitaet = $ctrl.aktivitaet.taetigkeit;
    };

    $ctrl.geklickt = $ctrl.ZeitService.geklickt;
    $ctrl.start = $ctrl.ZeitService.start;
    $ctrl.stop = $ctrl.ZeitService.stop;

    $ctrl.entfernen = function () {
        $ctrl.geloescht();
    };
});