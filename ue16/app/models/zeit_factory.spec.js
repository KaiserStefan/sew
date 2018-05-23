"use strict";

describe("Aktivitaet" ,function () {

    var Aktivitaet, aktivitaet;

    beforeEach(() => {
        module("Vorlage");
        inject(function (_Aktivitaet_) {
            Aktivitaet = _Aktivitaet_;
            aktivitaet = new Aktivitaet();
        });
    });
    it("hat den Konstruktor erzeugt", () => {
        expect(aktivitaet).toBeDefined();
        });

    it("hat den richtigen Datentyp", () => {
            expect(aktivitaet.constructor).toBe(Aktivitaet);
        });

    //akt = new Aktivitaet.constructor;
    it("hasownproperty", function () {
        expect((aktivitaet).hasOwnProperty("person")).toBe(true);
    });
    //expect(Aktivitaet).hasOwnProperty("person");
    it("properties", () => {
        var akt = new aktivitaet.constructor("per", "taet", "dau", "start");
        expect(akt.person).toEqual("per");
        expect(akt.taetigkeit).toEqual("taet");
        expect(akt.dauer).toEqual("dau");
        expect(akt.startzeit).toEqual("start");
        });
    it("exception", () => {
        var akt = new aktivitaet.constructor("per", "taet", "dau", "start");
        expect(function () {
            akt.person="neu Attribut";
        }).toThrow();
    });
    it("variante", () => {

        var akt = new aktivitaet.constructor("per", "taet", "dau", "start");
        var atk = akt.variante("");
        expect(atk.person).toEqual("per");
        expect(atk.taetigkeit).toEqual("taet");
        expect(atk.dauer).toEqual("dau");
        expect(atk.startzeit).toEqual("start");

        var values = akt.variante({person:'beispieltext', taetigkeit:3, dauer:'mein informationen stehen hier', startzeit:'www.orf.at'});
        expect(values);
    });
    it("var", () => {
        var akt = new aktivitaet.constructor("per", "taet", "dau", "start");
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