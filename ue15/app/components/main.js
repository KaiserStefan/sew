
app.component("main", {
    templateUrl: "components/main.html",
    controller: "mainController"
});



app.controller("mainController", function () {
    let $ctrl = this;
    this.sagHallo = function () {
        this.begrue = "ASDF";
    };

});
