//Kaiser Stefan 4BI
"use strict";

app.component("start", {
    templateUrl: "components/start.html",
    controller: "startController"
});


app.controller("startController", function ($state) {
    var $ctrl = this;

    $ctrl.uiRouterState = $state;

    $ctrl.checkeWarenkorb = function (status) {
        $ctrl.istWarenkorbLeer = status;
    }
});