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
            expect(ShopService.warenkorb.length).toEqual(1);
        });
});