function init(){
	var lista_paises=document.getElementById("lista_paises");
	var lis=document.getElementsByTagName('li');
	for(var i=0; i<lis.length; i++)
	{
		lis[i].addEventListener('click',onLinkClick);
	}
}
function onLinkClick(evt)
{
	var srcPais=evt.currentTarget.getElementsByClassName('bandera')[0].src;
	//console.log(srcPais);
	localStorage.setItem('srcImgPais',srcPais);
}

