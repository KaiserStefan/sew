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

    $ctrl.options = [
        "Leopard 2",
        "M1A2 Abrams",
        "Challenger ",
        "T-90",
        "Leclerc"
    ];
});