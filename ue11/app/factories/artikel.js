"use strict";

app.component("artikel", {
    templateUrl: "components/artikel.html",
    controller: "artikelController",
    bindings: {
        obj: "<?",
        onDelete:"&"
    }
});

app.factory("factory", function () {
    
});

app.controller("artikelController", function (factory) {
    let $ctrl = this;

    $ctrl.getname = function () {
        return "" + $ctrl.obj.name;
    };

    $ctrl.getanzahl = function () {
        return "" + $ctrl.obj.anzahl;
    };

    $ctrl.del = function () {
        $ctrl.onDelete({"object": $ctrl.obj})
    };
});