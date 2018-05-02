"use strict";

app.factory("Aktivität", function () {
    function Aktivität(person, tätigkeit, dauer, startzeit) {
        this.person = person;
        this.tätigkeit = tätigkeit;
        this.dauer = dauer;
        this.startzeit = startzeit;
    }
    return Aktivität;
});