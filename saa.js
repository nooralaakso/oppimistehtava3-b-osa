fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=helsinki&units=metric&APPID=665ecd56dfc08dbb50feb8b8f5034e28') 
   // Muunnetaan vastaus JSON muotoon 
   .then(function (response) { 
   return response.json(); 
   }) 
   // Käsitellään muunnettu (eli JSON muotoinen) vastaus 
   .then(function (responseJson) { 
   // kutsutaan saa-funktiota 
   saa(responseJson);  
   }) 
   // Jos tuli jokin virhe 
   .catch(function (error) { 
   document.getElementById("vastaus").innerHTML =  
   "<p>Tietoa ei pystytä hakemaan</p>"; 
   })

   function saa(data){ 
    var teksti = ""; 
    
     
    teksti = "<li>" + "Kaupunki: " + data.name + "</li>"; 
    teksti = teksti + "<li>" + "Sää: " + data.weather[0].description + "</li>";  
    teksti = teksti + "<li>" + "Lämpötila: " + data.main.temp + "&degC</li>";
    teksti = teksti + "<li>" + "Tuulen nopeus: " + data.wind.speed + " m/s</li>";
    var kuva = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    teksti = teksti + "<p><img src='" + kuva + "' alt='kuva' ></p>"; 
    
    
    document.getElementById("vastaus").innerHTML = teksti; 
    } 

    fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=tampere&units=metric&APPID=665ecd56dfc08dbb50feb8b8f5034e28') 
   // Muunnetaan vastaus JSON muotoon 
   .then(function (response) { 
   return response.json(); 
   }) 
   // Käsitellään muunnettu (eli JSON muotoinen) vastaus 
   .then(function (responseJson) { 
   // kutsutaan saa-funktiota 
   saa2(responseJson);  
   }) 
   // Jos tuli jokin virhe 
   .catch(function (error) { 
   document.getElementById("vastaus2").innerHTML =  
   "<p>Tietoa ei pystytä hakemaan</p>"; 
   })

   function saa2(data){ 
    var teksti = ""; 
    
     
    teksti = "<li>" + "Kaupunki: " + data.name + "</li>"; 
    teksti = teksti + "<li>" + "Sää: " + data.weather[0].description + "</li>";  
    teksti = teksti + "<li>" + "Lämpötila: " + data.main.temp + "&degC</li>";
    teksti = teksti + "<li>" + "Tuulen nopeus: " + data.wind.speed + " m/s</li>";
    var kuva = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    teksti = teksti + "<p><img src='" + kuva + "' alt='kuva' ></p>"; 
    
    
    document.getElementById("vastaus2").innerHTML = teksti; 
    } 


