app.service('Warenkorb', function () {

    this.warenkorb = [];

    this.leeren = function () {
        warenkorb.length = 0;
    }

    this.dazufügen = function (artikel) {
        var vorhanden = a => a.text === artikel.text;

        if(vorhanden){
            $ctrl.warenkorb.splice({'text': $ctrl.artikelname, 'stueck': $ctrl.stueck + artikel.stueck, 'infotext': $ctrl.infotext, 'url': $ctrl.url});
        }else {
            $ctrl.warenkorb.push(artikel);
        }

    }

    this.wegnehmen = function () {
        var index = $ctrl.warenkorb.indexOf(text, stueck);
        $ctrl.warenkorb.splice(index, 1);
        $ctrl.warenkorb.push();
    }

    this.ersetzen = function (alt, neu) {

    }
})