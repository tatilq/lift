function checkInput_nombre(evt)
{
  if(window.event.keyCode >='65' && window.event.keyCode<='90' || window.event.keyCode =='8' || window.event.keyCode =='32')
      return true;
  else
      evt.preventDefault();
}


