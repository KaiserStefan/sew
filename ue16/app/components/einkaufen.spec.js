"use strict";

describe("einkaufenController", function () {

    var controller, einkaufenController;

    beforeEach(() => {
        module("Vorlage");
        //Service injezieren
        inject($controller => controller = $controller);

        //con erz
        einkaufenController = controller("einkaufenController", {
        });
    });
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
            einkaufenController.formular = {$setUntouched : function () {

            }};
            einkaufenController.neuArtikel();
            expect(ShopService.warenkorb.length).toEqual(1);

        });
});