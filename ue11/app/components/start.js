//Kaiser Stefan 4BI
"use strict";

app.component("start", {
    templateUrl: "components/start.html",
    controller: "startController"
});


app.controller("startController", function ($state, ShopService) {
    let $ctrl = this;

    $ctrl.warenkorb = ShopService.warenkorb;

    $ctrl.uiRouterState = $state;

});