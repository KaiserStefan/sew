"use strict";

app.component("item", {
    templateUrl: "components/item.html",
    controller: "ItemController",
    bindings: {
        aufgabe: "<"
    }
});


app.controller("ItemController", function(Liste) {

    this.Liste = Liste;

});
