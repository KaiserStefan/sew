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