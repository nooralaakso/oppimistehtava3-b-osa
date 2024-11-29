
fetch('https://api.visittampere.com/api/v1/visittampere/event/published/all/?format=json&lang=fi')
    // Muunnetaan vastaus JSON muotoon 
    .then(function (response) {
        return response.json();
    })

    // Käsitellään muunnettu (eli JSON muotoinen) vastaus 
    .then(function (responseJson) {
        
        // Kutsutaan funktiota ja välitetään sille json-vastaus  
        kerro(responseJson);
    })

    // Jos tuli jokin virhe 
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML =
            "<p>Tietoa ei pystytä hakemaan </p>" + error;
    })

function kerro(data) {
   
    var teksti = "";
    teksti = "<h1>Tampereella tapahtuu</h1>";

    for (var i = 0; i < data.length; i++) {
        teksti = teksti + "<h2>" + data[i].title + "</h2>";
        teksti = teksti + "<p>" + data[i].description + "</p>";
        teksti = teksti + "<li><a href = '" + data[i].url + "'>" + data[i].url+ "</a></li>";
    }
   
    document.getElementById("vastaus").innerHTML = teksti;
}


