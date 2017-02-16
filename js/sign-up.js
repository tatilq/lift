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
	var code=document.getElementById("code");
	var srcLocal=localStorage.getItem('srcImgPais');
	var codeLocal=localStorage.getItem('codigo');
	imgPaises.src=srcLocal;
	code.textContent=codeLocal;
}
function getGeneraRandom(a,b) 
{
    return Math.random() *((a-b) + b);
}
function  generaRandom()
{
	var numero=document.getElementById("numero");
	console.log(numero.value.length);
	var long=numero.value.length;
	if(long==9)
	{
		btn_log.setAttribute("disabled","false");
		var laboratoria= "LAB-";
		var randomNum= getGeneraRandom(999,100);
		var codigo= laboratoria+Math.floor(randomNum);
		localStorage.setItem('codigoLab',codigo);
	    alert("su codigo es: "+codigo);
	    ref.href="sign-up2.html";
	}
	
}
