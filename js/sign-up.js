/*FNCION QUE SOLO ME RESTRINGE NUMEROS PARA MI INPUT DEL TELEFONO*/
function checkInput_nombre(evt)
{
  if(window.event.keyCode >='48' && window.event.keyCode<='57' || window.event.keyCode =='8')
  	
      return true;
  else
      evt.preventDefault();
}
/*FUNCION QUE SE EJECUTA AL CARGAR LA PAGINA */
function init()
{
	var imgPaises=document.getElementById("imgPais");
	var src=localStorage.getItem('srcImgPais');
	console.log(src);
	imgPaises.src=src;
}
function getGeneraRandom(a,b) 
{
        return Math.random() *((a-b) + b);
}
function  generaRandom()
{
	var laboratoria= "LAB-";
	var randomNum= getGeneraRandom(999,100);
	var codigo= laboratoria+Math.floor(randomNum);
	localStorage.setItem('codigoLab',codigo);
    alert("su codigo es: "+codigo);
}



