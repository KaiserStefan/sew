"use strict";

app.factory("Aktivität", function () {
    function Aktivität(person, tätigkeit, dauer) {
        this.person = person;
        this.tätigkeit = tätigkeit;
        this.dauer = dauer;
    }
    return Aktivität;
});