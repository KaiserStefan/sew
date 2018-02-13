//Kaiser Stefan 4BI
"use strict";

app.component("home", {
    templateUrl: "components/home.html",
    controller: "homeController"
});

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state({
        name: "home",
        url: "/",
        component: "home"
    });
});

app.controller("homeController", function () {

});