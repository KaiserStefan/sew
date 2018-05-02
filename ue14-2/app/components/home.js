"use strict";

app.component("home", {
    templateUrl: "components/home.html",
    controller: "homeController"
});



app.controller("homeController", function ($http) {
    let $ctrl = this;

    $ctrl.bool = false;
    $ctrl.bool2 = false;
    $ctrl.temp = "";
    $ctrl.temp2 = "";
    $ctrl.timezone = "";
    $ctrl.name = "";

    $ctrl.ip = "";
    $ctrl.place = "";
    $ctrl.time = "";
    $ctrl.time2 = "";
    $ctrl.weather = "";
    $ctrl.erro = "";

    $ctrl.neuhost = function() {
        $http.get("http://www.dns-lg.com/ch01/"+$ctrl.name+"/a")
            .then(function(response){
                $ctrl.bool = true;
                /*
                console.log(response);
                console.log(response.data.answer[0].rdata);
                */
                $ctrl.ip=response.data.answer[0].rdata;
                $http.get("http://ip-api.com/json/"+$ctrl.ip)
                    .then(responseOrt=>{
                        /*
                        console.log(responseOrt);
                        console.log(responseOrt.data.as);
                        */
                        $ctrl.temp="lat="+responseOrt.data.lat+"&lng="+responseOrt.data.lon;
                        $ctrl.temp2="lat="+responseOrt.data.lat+"&lon="+responseOrt.data.lon;
                        $ctrl.place=responseOrt.data.country+"; Ort: "+responseOrt.data.city+"; lat: "+responseOrt.data.lat+"; lon: "+responseOrt.data.lon;
                        //console.log($ctrl.temp);
                        console.log("https://timezoneapi.io/api/ip/?"+$ctrl.ip);
                        $http.get("https://timezoneapi.io/api/ip/?ip="+$ctrl.ip)
                            .then(responsetime=>{
                                $ctrl.timezone = responsetime.data.data.datetime.offset_gmt;
                                //console.log($ctrl.timezone);
                                //console.log(responsetime);
                                $http.get("https://api.sunrise-sunset.org/json?"+$ctrl.temp)
                                    .then(responsetime2=>{
                                        //console.log(responsetime2);
                                        //$ctrl.time | date : responsetime2.data.results.sunrise : $ctrl.timezone
                                        $ctrl.time= responsetime2.data.results.sunrise;
                                        $ctrl.time2 = responsetime2.data.results.sunset;
                                        //$ctrl.time=responsetime2.data.results.sunrise+"; Sonnenuntergang: "+responsetime2.data.results.sunset;
                                        $http.get("https://api.openweathermap.org/data/2.5/weather?"+$ctrl.temp2+"&APPID=83114794b3bf4887a79bea63b515e04e")
                                            .then(responsetime3=>{
                                                //console.log(responsetime3);
                                                $ctrl.weather=responsetime3.data.weather[0].main+"; Details: "+responsetime3.data.weather[0].description;
                                            });
                                    });
                            });
                    });


            }).catch(function (data) {
                $ctrl.bool2 = true;
                $ctrl.erro = data.status;
            });
    };

    /*
    $http.get("asfds!").then(function(value){
        $ip=value.data.answer[0].rdata
        $http.get("gsddfhdfgh")
    })

    "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID=83114794b3bf4887a79bea63b515e04e"
//http://www.dns-lg.com/ch01/statdns.net/a
    $http.get("http://www.dns-lg.com/ch01/statdns.net/a%22)
        .then(function(response){
            console.log(response.data.answer[0].rdata);
            letip=response.data.answer[0].rdata;
            $http.get("http://ip-api.com/json/"+ip)
                .then(responseOrt=>{
                    console.log(responseOrt);
                });

        });
*/
});