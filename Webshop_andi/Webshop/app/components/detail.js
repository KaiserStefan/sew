"use strict";

app.component("detail", {
    templateUrl: "components/detail.html",
    controller: "homeController"
});

app.controller("homeController", function (Warenkorb, $state) {
