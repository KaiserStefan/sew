"use strict";

describe("artikelController", function () {

    var controller, artikelController;

    beforeEach(() => {
        module("Vorlage");
        //Service injezieren
        inject($controller => controller = $controller);

        //con erz
        artikelController = controller("artikelController", {
        });
    });
    it("Instanz wird erzeugt", function () {
        expect(artikelController).toBeDefined();
    });
    it("funktionen testen", () => {
        expect(artikelController.artikelname).toEqual("");
        expect(
            artikelController.anzahl).toEqual("");
        artikelController.artikelname = "Test";
        artikelController.anzahl = 9;
        artikelController.formular = {$setUntouched : function () {
            }};
        artikelController.neuArtikel();
        expect(ShopService.warenkorb.length).toEqual(1);
    });
});