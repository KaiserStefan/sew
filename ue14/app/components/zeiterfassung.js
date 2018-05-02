"use strict";

app.component("zeiterfassung", {
    templateUrl: "components/zeiterfassung.html",
    controller: "zeiterfassungController",
    bindings: {
    }
});


app.config(function($stateProvider) {
    $stateProvider.state({
        name: "zeiterfassung",
        url: "/zeiterfassung",
        component: "zeiterfassung"
    });
});

app.controller("zeiterfassungController", function (ZeitService, Aktivität) {
    let $ctrl = this;

});