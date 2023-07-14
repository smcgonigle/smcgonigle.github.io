var image = new Array ();
image[0] = "/images/phish01.gif";
image[1] = "/images/phish02.gif";
image[2] = "/images/phish03.gif";
image[3] = "/images/phish04.gif";
image[4] = "/images/phish05.gif";
image[5] = "/images/phish06.gif";
image[6] = "/images/phish07.gif";
image[7] = "/images/phish08.gif";
image[8] = "/images/phish09.gif";
image[9] = "/images/phish10.gif";
image[10] = "/images/phish11.gif";
image[11] = "/images/phish12.gif";
image[12] = "/images/phish13.gif";
var size = image.length
var x = Math.floor(size*Math.random())

$('#randomImages').attr('src',image[x]);