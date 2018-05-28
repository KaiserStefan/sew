"use strict";

app.filter("runden", function () {

    function runden(wert) {
        return Math.round(wert);
    }

    return runden;
});
