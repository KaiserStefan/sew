"use strict";

app.service("AntwortService", function ($log) {

    this.gibantwort = function () {
        $log.debug("42");
        return "antwort";
    };

    $log.debug("AntwortService()");

});
