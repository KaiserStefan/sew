"use strict";

describe("AntwortService", function () {

    var AntwortService;

    beforeEach(() => {
        module("Vorlage");
        //Service injezieren
        inject(_AntwortService_ => {
            AntwortService = _AntwortService_;
        });

    });
    it("Instanz wird erzeugt", function () {
        expect(AntwortService).toBeDefined();
    });

    it("gitantwort", function () {
       expect(AntwortService.gibantwort()).toEqual("antwort");
    });
});