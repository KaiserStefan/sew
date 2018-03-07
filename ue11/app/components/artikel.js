"use strict";

app.component("artikel", {
    templateUrl: "components/artikel.html",
    controller: "artikelController",
    bindings: {
        obj: "<?",
        onDelete:"&",
        onSpeichern:"&"
    }
});

app.controller("artikelController", function () {
    let $ctrl = this;

    $ctrl.$onInit = function () {
        $ctrl.neustueck = parseInt($ctrl.getanzahl());
    };

    $ctrl.bearbeiten = function () {
        $ctrl.geklickt = true;
    };

    $ctrl.getname = function () {
        return "" + $ctrl.obj.text;
    };

    $ctrl.getanzahl = function () {
        return "" + $ctrl.obj.menge;
    };

    $ctrl.del = function () {
        $ctrl.onDelete({"object": $ctrl.obj})
    };


    $ctrl.fertig = function () {
        $ctrl.geklickt = false;
    };

    $ctrl.speichern = function () {
        $ctrl.geklickt = false;
        $ctrl.onSpeichern({"object": $ctrl.obj, "anz":$ctrl.neustueck})
    };
});