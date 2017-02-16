var map;
function initMap() 
{
  map = new google.maps.Map(document.getElementById('map'), 
  {
    center: {lat: -16.441803699999998, lng: -71.5242798},
  	zoom: 14
	}
	);

	var myLatLng={
		lat: -16.441803699999998, 
    	lng: -71.5242798
    };


   var marker = new google.maps.Marker({//parametro recibe un objeto
    position: myLatLng,
    map: map ,     
    title: 'Paz Peru!',
    //label:'Paz Peru',
   	icon:'img/persona.png'

  	}
  	);

  // map.setcenter('','')
} 

/*
//funcion para obtener coordenadas

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
  var ubicacion=document.getElementById('localizacion');
  var lat='';
  var long='';
  var a='';
  lat='Latitud: '+posicion.coords.latitude+'<br>';
  long='Longitud: '+posicion.coords.longitude+'<br>';
  a='Exactitud: '+posicion.coords.accuracy+' metros.<br>';
  console.log(lat);
  console.log(long);
  console.log(a);
}
 
function gestionarErrores(error)
{
  alert('Error: '+error.code+' '+error.message+ '\n\nPor favor compruebe que está conectado '+
  'a internet y habilite la opción permitir compartir ubicación física');
}
 
//window.addEventListener('load', iniciar, false);
 
*/