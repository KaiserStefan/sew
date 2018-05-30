"use strict";

describe("einkaufenController", function () {

    var controller, einkaufenController, ShopService, Artikel;

    beforeEach(() => {
        module("Vorlage");
        //Service injezieren
        inject($controller => controller = $controller);

        //con erz
        einkaufenController = controller("einkaufenController", {
        });
    });
    /*
    beforeEach(inject(function($controller) {
        var ShopService = {
            warenkorb: [],
            add: function () {
            },
            del: function () {
            },
            replaze: function () {
            }
        };
        spyOn(ShopService, 'add', 'del', 'replaze').and.returnValue("ShopService");

    }));
    */
    it("Instanz wird erzeugt", function () {
        expect(einkaufenController).toBeDefined();
    });
    it("hat inst erzeugt", () => {
        expect(einkaufenController).toBeDefined();
    });
    it("funktionen testen", () => {
        expect(einkaufenController.artikelname).toEqual("");
        expect(einkaufenController.anzahl).toEqual("");
            einkaufenController.artikelname = "Test";
            einkaufenController.anzahl = 9;
        expect(einkaufenController.artikelname).toEqual("Test");
        expect(einkaufenController.anzahl).toEqual(9);
            einkaufenController.formular = {$setUntouched : function () {
            }};
            einkaufenController.neuArtikel();
            expect(einkaufenController.warenkorb.length).toEqual(1);
        expect(einkaufenController.artikelname).toEqual("");
        expect(einkaufenController.anzahl).toEqual("");
        einkaufenController.artikelname = "Test2";
        einkaufenController.anzahl = 49;
        einkaufenController.formular = {$setUntouched : function () {
        }};
        einkaufenController.neuArtikel();
        expect(einkaufenController.warenkorb.length).toEqual(2);
        });
    it("funktionen testen2", () => {
        einkaufenController.anzahl = 49;
        einkaufenController.artikelname = "Test";
        einkaufenController.formular = {$setUntouched : function () {
        }};
        einkaufenController.neuArtikel();
        einkaufenController.anzahl = 449;
        einkaufenController.artikelname = "Test2";
        einkaufenController.formular = {$setUntouched : function () {
        }};
        einkaufenController.neuArtikel();
        expect(einkaufenController.warenkorb.length).toEqual(2);
        einkaufenController.loesch();
        expect(einkaufenController.warenkorb.length).toEqual(1);
    });
});