"use strict";

describe("runden", function () {

    var rundenFilter;

    beforeEach(() => {
        module("Vorlage");
        var controller;
        //Service injezieren
        inject(_rundenFilter_ => {
            rundenFilter = _rundenFilter_;
        });
    });
    it("Instanz wird erzeugt", function () {
        expect(rundenFilter).toBeDefined();
    });
    it("rundet ab, auf", ()=>{
        expect(rundenFilter(42.4)).toBe(42);
        expect(rundenFilter(42.6)).toBe(43);
    });
});
//inject