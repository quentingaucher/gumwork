function PowerhouseShowHide()
{
   // Will Bontrager Software LLC - https://www.willmaster.com/
   if( ! arguments.length ) { return; }
   for(var i=0; i< arguments.length; i++)
   {
      var ta = arguments[i].split("=",2);
      document.getElementById(ta[0]).style.display = ta[1];
   }
}
