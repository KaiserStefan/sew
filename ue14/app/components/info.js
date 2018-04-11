"use strict";

app.component("info", {
    templateUrl: "components/info.html",
    controller: "infoController"
});

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state({
        name: "info",
        url: "/",
        component: "info"
    });
});

app.controller("infoController", function () {

});