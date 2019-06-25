var wid = Math.floor(window.innerHeight/3)-15;
//document.getElementsByClassName('card')[0].innerHTML = wid;

var i;
for (i = 0; i < document.getElementsByClassName('card').length; i++) {
	document.getElementsByClassName('card')[i].style.height=wid + 'px';
}

for (ii = 0; ii < document.getElementsByClassName('cardo').length; ii++) {
	document.getElementsByClassName('cardo')[ii].style.height=wid + 'px';
}