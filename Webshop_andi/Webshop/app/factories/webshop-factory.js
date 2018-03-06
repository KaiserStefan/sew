app.factory('Artikel', function () {
    this.artikel = function({text = this.text,stueck = this.stueck, infotext = this.infotext, url = this.url}){
        return new Artikel(text,stueck,infotext,url);
    }
})