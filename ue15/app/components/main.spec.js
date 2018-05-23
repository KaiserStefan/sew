"use strict";

describe("mainController", function () {

    var controller, mainConroller;

    beforeEach(() => {
        module("Vorlage");
        var controller;
        //Service injezieren
        inject($controller => controller = $controller);

        //con erz
        var mainControler = controller("mainController", {

        });
    });
    it("Instanz wird erzeugt", function () {
            expect(mainConroller).toBeDefined();
    });
    it("hat inst erzeugt", () => {
        expect(mainConroller).toBeDefined();
    });
});