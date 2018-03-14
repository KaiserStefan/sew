"use strict";

app.service("Liste", function(Aufgabe) {

    this.aufgaben = [
        new Aufgabe(new Date(), "Aufgabe1", false),
        new Aufgabe(new Date(), "Aufgabe2", true),
        new Aufgabe(new Date(), "Aufgabe3", false),
    ];

    this.hinzufuegen = function(aufgabe) {
        this.aufgaben.push(aufgabe);
    };

    this.entfernen = function(aufgabe) {
        var index = this.aufgaben.indexOf(aufgabe);
        if (index >= 0) {
            this.aufgaben.splice(index, 1);
        }
    };

    this.ersetzen = function(aufgabe, geaenderteAufgabe) {
        var index = this.aufgaben.indexOf(aufgabe);
        if (index >= 0) {
            this.aufgaben.splice(index, 1, geaenderteAufgabe);
        }
    };
});
