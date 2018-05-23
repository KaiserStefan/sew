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
});