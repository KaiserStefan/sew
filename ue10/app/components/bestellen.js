"use strict";

app.component("bestellen", {
    templateUrl: "components/bestellen.html"
});


app.config(function($stateProvider) {
    $stateProvider.state({
        name: "bestellen",
        url: "/bestellen",
        component: "bestellen"
    });
});
