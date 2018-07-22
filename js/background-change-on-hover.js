  var backImage = new Array();
  backImage[0] = "/gumwork/media/img/background/intro-loop.gif";
  /* make GIF not video !! */
  backImage[1] = "/gumwork/media/img/background/gumwork-background-architecture-large.jpg";
  backImage[2] = "/gumwork/media/img/background/gumwork-background-film-large.jpg";
  backImage[3] = "/gumwork/media/img/background/gumwork-background-prototip-large.jpg";
  backImage[4] = "/gumwork/media/img/background/gumwork-background-graphic-large.jpg";
  backImage[5] = "/gumwork/media/img/background/gumwork-background-product-large.jpg";
  backImage[6] = "/gumwork/media/img/background/gumwork-background-journal-large.jpg";
  function changeBGImage(whichImage){
  if (document.body){document.body.background = backImage[whichImage];}
  }
