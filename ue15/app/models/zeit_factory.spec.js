"use strict";

describe("Aktivitaet" ,function () {

    var Aktivitaet;
    Aktivitaet;

    beforeEach(() => {
        module("Vorlage");
        inject(function (_Aktivitaet_) {
            Aktivitaet = _Aktivitaet_;
            Aktivitaet = new Aktivitaet;
        });
    });
    it("hat den Konstruktor erzeugt", () => {
        expect(Aktivitaet).toBeDefined();
        });

    it("hat den richtigen Datentyp", () => {
            expect(Aktivitaet.constructor).toBe(Aktivitaet.constructor);
        });

    //akt = new Aktivitaet.constructor;
    it("hasownproperty", function () {
        expect(Aktivitaet.constructor).hasOwnProperty("person");
    });
    //expect(Aktivitaet).hasOwnProperty("person");
    it("properties", () => {
        var akt = new Aktivitaet.constructor("per", "taet", "dau", "start");
        expect(akt.person).toEqual("per");
        expect(akt.taetigkeit).toEqual("taet");
        expect(akt.dauer).toEqual("dau");
        expect(akt.startzeit).toEqual("start");
        });
    it("exception", () => {
        var akt = new Aktivitaet.constructor("per", "taet", "dau", "start");
        expect(function () {
            akt.person="neu Attribut";
        }).toThrow();
    });
    it("variante", () => {
        var akt = new Aktivitaet.constructor("per", "taet", "dau", "start");
        var atk = akt.variante("");
        expect(atk.person).toEqual("per");
        expect(atk.taetigkeit).toEqual("taet");
        expect(atk.dauer).toEqual("dau");
        expect(atk.startzeit).toEqual("start");
    });
    it("var", () => {
        var akt = new Aktivitaet.constructor("per", "taet", "dau", "start");
        var atk = akt.variante("perneu", "taetneu", "asdf", "saf");
        expect(atk.person).toEqual("perneu");
        expect(atk.taetigkeit).toEqual("taetneu");
        expect(atk.dauer).toEqual("dau");
        expect(atk.startzeit).toEqual("start");
    });
})

/*
"use strict";

describe("Beitrag", function() {

    var Beitrag,    // injizierte Konstruktorfunktion ("Factory")
        beitrag;    // erzeugtes Objekt

    // Wird vor jedem it(...) ausgeführt
    beforeEach(() => {
        // Modul angeben, welches getestet werden soll (so wie in index.html und app.js)
        module("Vorlage");

        // Dependency Injection muss man manuell machen. Am Beginn und am Ende der
        // Namen der Factories, Services etc. ein '_' anfügen
        inject(function(_Beitrag_) {
            Beitrag = _Beitrag_;
            beitrag = new Beitrag();
        });
    });

    it("wird von Konstruktor erzeugt", () => {
        expect(beitrag).toBeDefined();
    });

    it("hat den richtigen Datentyp", () => {
        expect(beitrag.constructor).toBe(Beitrag);
    });

});
*/