"use strict";

app.component("bestellen", {
    templateUrl: "components/bestellen.html",
    controller: "bestellenController"
});


app.config(function($stateProvider) {
    $stateProvider.state({
        name: "bestellen",
        url: "/bestellen",
        component: "bestellen"
    });
});

app.controller("bestellenController", function () {

});