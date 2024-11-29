fetch('https://rata.digitraffic.fi/api/v1/live-trains/station/HKI?departing_trains=100&include_nonstopping=false') 
   // Muunnetaan vastaus JSON muotoon 
   .then(function (response) { 
   return response.json(); 
   }) 
   // Käsitellään muunnettu (eli JSON muotoinen) vastaus 
   .then(function (responseJson) { 
   // kutsutaan saa-funktiota 
   kerro(responseJson);  
   }) 
   // Jos tuli jokin virhe 
   .catch(function (error) { 
   document.getElementById("vastaus").innerHTML =  
   "<p>Tietoa ei pystytä hakemaan</p>"; 
   })

   function kerro(data) {
    var teksti = "";

    for (var i = 0; i < data.length; i++) {
        var junaNumero = data[i].trainNumber;
        var junaTyyppi = data[i].trainType;
        var lahteeAika = "";
        var saapuuAika = "";


        for (var j = 0; j < data[i].timeTableRows.length; j++) {
            var rivi = data[i].timeTableRows[j];


            if (rivi.stationShortCode == "HKI" && rivi.type == "DEPARTURE") {
                lahteeAika = rivi.scheduledTime.substr(0, 10) + " kello: " + rivi.scheduledTime.substr(11, 5);
            }


            if (rivi.stationShortCode == "TPE" && rivi.type == "ARRIVAL") {
                saapuuAika = rivi.scheduledTime.substr(0, 10) + " kello: " + rivi.scheduledTime.substr(11, 5);
            }
        }


        if (lahteeAika && saapuuAika) {
            teksti += "<h3>" + "Juna nro: " + junaNumero + "</h3>";
            teksti += "<p>" + "Junan tyyppi: " + junaTyyppi + "</p>";
            teksti += "<p>" + "Lähtee Helsingistä: " + lahteeAika + "</p>";
            teksti += "<p>" + "Saapuu Tampereelle: " + saapuuAika + "</p>";
            teksti += "<hr>";
        }
    }

    document.getElementById("vastaus").innerHTML = teksti;
}