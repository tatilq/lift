var map;
/*s

function init()
{
  obtener();
}
 
function obtener()
{
  navigator.geolocation.getCurrentPosition(mostrar, gestionarErrores);
}
 
function mostrar(posicion)
{
  //ar ubicacion=document.getElementById('localizacion');
  var lati=posicion.coords.latitude;
  var longi=posicion.coords.longitude;
  var a=posicion.coords.accuracy;

  initMap(posicion.coords.latitude, posicion.coords.longitude);
}
 
function gestionarErrores(error)
{
  alert('Error: '+error.code+' '+error.message+ '\n\nPor favor compruebe que está conectado '+
  'a internet y habilite la opción permitir compartir ubicación física');
}
 
//window.addEventListener('load', iniciar, false);
 


function initMap(lati, longi) 
{
  console.log(lati);
  console.log(longi);
  var posicionActual={lat: lati, lng: longi};
  //var myLatlng = {lat: -16.4418207, lng: -71.52429889999999};

    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: posicionActual
  });

  var marker = new google.maps.Marker({
    position: posicionActual,
    map: map,
    title: 'Click to zoom'
  });

  map.addListener('center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(function() {
      map.panTo(marker.getPosition());
    }, 3000);
  });

  marker.addListener('click', function() {
    map.setZoom(8);
    map.setCenter(marker.getPosition());
  });

}*/
var lat;
var long;
var a;
function init()
{
  obtener();
}
 
function obtener()
{
  navigator.geolocation.watchPosition(mostrar, gestionarErrores);
}
 
function mostrar(posicion)
{
  //var ubicacion=document.getElementById('localizacion');
  
  lati=posicion.coords.latitude;
  longi=posicion.coords.longitude;
  a=posicion.coords.accuracy;
 console.log(lati);
 console.log(longi);

  initMap(lati, longi,a);
}
 
function gestionarErrores(error)
{
  alert('Error: '+error.code+' '+error.message+ '\n\nPor favor compruebe que está conectado '+
  'a internet y habilite la opción permitir compartir ubicación física');
}
 
//window.addEventListener('load', iniciar, false);
 

function initMap(lati, longi,a) 
{
  var positionActual={lat: lati, lng: longi};
  var position1={lat:  -16.4349299, lng: -71.5342893};
  var position2={lat:  -16.4459299, lng: -71.5299393};
  map = new google.maps.Map(document.getElementById('map'),{ center: positionActual, zoom: 14 });
    //var myLatLng={lat: -16.441803699999998,  lng: -71.5242798 };

    var marker = new google.maps.Marker({//parametro recibe un objeto
    position: positionActual,
    map: map ,     
    title: 'Paz Peru',
    //label:'Paz Peru',
    icon:'img/persona.png'

    }
    );

    var marker1 = new google.maps.Marker({//parametro recibe un objeto
    position: position1,
    map: map ,     
    title: 'Posicion1',
    //label:'Paz Peru',
    icon:'img/car.png'

    }
    );
    
     var marker2 = new google.maps.Marker({//parametro recibe un objeto
    position: position2,
    map: map ,     
    title: 'Posicion2',
    //label:'Paz Peru',
    icon:'img/car.png'

    }
    );

  // map.setcenter('','')
} 
