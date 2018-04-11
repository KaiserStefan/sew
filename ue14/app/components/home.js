"use strict";

app.component("home", {
    templateUrl: "components/home.html",
    controller: "homeController"
});



app.controller("homeController", function ($state) {
    let $ctrl = this;

    $ctrl.uiRouterState = $state;
});