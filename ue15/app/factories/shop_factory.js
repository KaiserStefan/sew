"use strict";

app.factory("Artikel", function () {
    function Artikel(text, menge) {
        this.text = text;
        this.menge = menge;
    }
    return Artikel;
});