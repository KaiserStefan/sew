// Einziges Modul dieser App und seine Abhängigkeiten
var app = angular.module("Webshop", [ "ngResource", "ngMessages", "ngSanitize",
    "ngAnimate", "ngMaterial", "ui.router" ]);

app.controller("")

// Einstellungen für Debugging
app.config(function($logProvider, $compileProvider, $mdAriaProvider, $qProvider) {
    $logProvider.debugEnabled(true);
    $compileProvider.debugInfoEnabled(true);
    $mdAriaProvider.disableWarnings();
    $qProvider.errorOnUnhandledRejections(false);
});



app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state({
        name: "startseite",
        url: "startseite",
        component: "startseite"
    });
});

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state({
        name: "warenkorb",
        url: "warenkorb",
        component: "warenkorb"
    });

});