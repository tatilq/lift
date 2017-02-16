function init(){
	var lista_paises=document.getElementById("lista_paises");
	
	var paises='[{"nombre":"Australia","codigo": "61" , "img":"img/australia.png"},{"nombre":"Canada","codigo": "1" ,"img":"img/canada.png"},'+
	    '{"nombre":"China","codigo": "86" , "img":"img/china.png"},{"nombre":"Francia","codigo": "33" , "img":"img/francia.jpg"},'+
	    '{"nombre":"India","codigo": "91","img":"img/india.gif"},{"nombre":"Japon","codigo": "81","img":"img/Japan.gif"},'+
	    '{"nombre":"Mexico","codigo": "52","img":"img/mexico.png"},{"nombre":"Puerto Rico","codigo": "1","img":"img/puerto_rico.png"},'+
	    '{"nombre":"Peru","codigo": "51","img":"img/peru.png"},{"nombre":"Estados Unidos","codigo":"1","img":"img/EeUu.gif"}]';


	  var p =JSON.parse(paises);
	  var l=p.length;
	  

	  for(var i=0;i<l;i++)
	  {
	  	
	  	var html='<a href="sign-up.html"><li select=""><img src='+p[i].img + 
	  		' class="img_responsive bandera"><span class="code"'+ 
	  		' style="display:none;">'+p[i].codigo+'</span>'+ p[i].nombre+'</li></a>';

	  		lista_paises.innerHTML+=html;
	  }
	
	var lis=document.getElementsByTagName('li');
	
	for(var i=0; i<lis.length; i++)
	{
		lis[i].addEventListener('click',onLinkClick);
	}
}
function onLinkClick(evt)
{
	var srcPais=evt.currentTarget.getElementsByClassName('bandera')[0].src;
	var codePais=evt.currentTarget.getElementsByClassName('code')[0].textContent;
	console.log(codePais);
	localStorage.setItem('srcImgPais',srcPais);
	localStorage.setItem('codigo',codePais);
	//alert("hola gabi");
}




