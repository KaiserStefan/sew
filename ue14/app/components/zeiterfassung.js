"use strict";

app.component("zeiterfassung", {
    templateUrl: "components/zeiterfassung.html",
    controller: "zeiterfassungController",
    bindings: {
    }
});


app.config(function($stateProvider) {
    $stateProvider.state({
        name: "zeiterfassung",
        url: "/zeiterfassung",
        component: "zeiterfassung"
    });
});

app.controller("zeiterfassungController", function (ZeitService, Aktivitaet) {
    let $ctrl = this;

    $ctrl.hinzufuegen = function () {
        this.wirdBearbeitet = true;
    };

    $ctrl.entfernen = ZeitService.entfernen;
    $ctrl.ersetzen = ZeitService.ersetzen;
    $ctrl.aktivitaeten = ZeitService.aktivitaeten;

    $ctrl.save = function () {
        $ctrl.ersetzen({aktivitaetNeu: new Aktivitaet($ctrl.NeuPerson, $ctrl.NeuAktivitaet)});
        $ctrl.end();
    };

    $ctrl.add = function(){
        ZeitService.hinzufuegen(new Aktivitaet(this.NeuPerson, this.NeuAktivitaet, 0));
        $ctrl.wirdBearbeitet = false;
    };


    $ctrl.end = function () {
        $ctrl.wirdBearbeitet = false;
    };

    $ctrl.gesamtdauer = function () {
        $ctrl.dauer = 0;
        for (let i = 0; i < $ctrl.aktivitaeten.length; i++) {
            $ctrl.dauer += $ctrl.aktivitaeten[i].dauer;
        }

        return $ctrl.dauer;
    }
});