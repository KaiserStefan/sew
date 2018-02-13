"use strict";

app.component("einkaufen", {
    templateUrl: "components/einkaufen.html"
});


app.config(function($stateProvider) {
    $stateProvider.state({
        name: "einkaufen",
        url: "/einkaufen",
        component: "einkaufen"
    });
});
