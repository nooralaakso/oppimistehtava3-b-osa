fetch('https://tie.digitraffic.fi/api/weathercam/v1/stations/C04507/data') 
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

   function kerro(data){
    var teksti = "";

    for(var i = 0; i < data.presets.length; i++) { 
        teksti = teksti + "<h2>" + data.presets[i].measuredTime + "</h2>";
        var kuva = 'https://weathercam.digitraffic.fi/'  + data.presets[i].id + '.jpg';
        teksti = teksti + "<p><img src='" + kuva + "' alt='kuva' ></p>";
    }

    document.getElementById("vastaus").innerHTML = teksti;
}