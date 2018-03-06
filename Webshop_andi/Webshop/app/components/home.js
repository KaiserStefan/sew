"use strict";

app.component("home", {
    templateUrl: "components/home.html",
    controller: "homeController"
});

app.controller("homeController", function (Warenkorb, $state) {

    var $ctrl = this;

    $ctrl.uiRouterState = $state;

    $ctrl.gesperrt = function (status) {
        $ctrl.hallo = status;
    }


});