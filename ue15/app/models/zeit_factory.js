"use strict";

app.factory("Aktivitaet", function () {
    function Aktivitaet(person, taetigkeit, dauer, startzeit) {
        Object.defineProperty(this, "person", {value: person, writable: false});
        Object.defineProperty(this, "taetigkeit", {value: taetigkeit, writable: false});
        Object.defineProperty(this, "dauer", {value: dauer, writable: false});
        Object.defineProperty(this, "startzeit", {value: startzeit, writable: false});

        this.variante = function ({person = this.person, taetigkeit = this.taetigkeit,
                                      dauer = this.dauer, startzeit = this.startzeit}) {
            return new Aktivitaet(person,taetigkeit,dauer,startzeit);
        };
    }
    return Aktivitaet;
});