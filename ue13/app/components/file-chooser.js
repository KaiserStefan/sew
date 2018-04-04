"use strict";

app.component("file-chooser", {
    templateUrl: "components/file-chooser.html",
    controller: "ChooseController",
    transclude: true,
    bindings: {

    }
});

app.controller("ChooseController", function($element) {
    let inputlet = angular.element("input").on("change");
});
