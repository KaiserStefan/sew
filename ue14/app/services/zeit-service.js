app.service("ZeitService", function(Aktivitaet, $timeout) {

    this.aktivitaeten = [
        new Aktivitaet("Ich", "TEST", 0),
    ];


    function speichern(content) {
        localStorage.setItem("content", angular.toJson(content));
    }

    function laden() {
        let content = angular.fromJson(localStorage.getItem("content"));
        try {
        } catch (ex) {
        }

        return content || [];
    }

    this.content = laden();

    this.hinzufuegen = function (aktivitaet) {
        this.aktivitaeten.unshift(aktivitaet);
        this.wirdBearbeitet = false;
        speichern(this.content);
    };

    this.entfernen = function (aktivitaet) {
        let index = this.aktivitaeten.indexOf(aktivitaet);
        this.aktivitaeten.splice(index, 1);
        speichern(this.content);
    };

    this.ersetzen = function (aktivitaet, aktivitaeteneu) {
        let index = this.aktivitaeten.indexOf(aktivitaet);
        this.aktivitaeten.splice(index, 1, aktivitaeteneu);
        this.aktivitaeten.push(aktivitaeteneu);
        speichern(this.content);
    };

    this.geklickt = false;

    this.start= function () {
        this.zeit = 0;
        this.timeout = $timeout(function() {
            this.zeit = new Aktivitaet({"startzeit": Date.now()});
            this.zeit++;
        },1000);
        this.geklickt = true;
    };

    this.stop = function () {
        $timeout.cancel(this.timeout);
        this.geklickt = false;
    };
});