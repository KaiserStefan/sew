"use strict";

app.factory("Aufgabe", function() {
    function Aufgabe(faellig, beschreibung, erledigt) {
        this.faellig = faellig;
        this.beschreibung = beschreibung;
        this.erledigt = erledigt;

        Object.keys(this)
            .forEach(name => Object.defineProperty(this, name, { writable: false }));

        this.variante = function({ faellig = this.faellig,
                                     beschreibung = this.beschreibung,
                                     erledigt = this.erledigt }) {
            return new Aufgabe(faellig, beschreibung, erledigt);
        };
    }

    return Aufgabe;
});
