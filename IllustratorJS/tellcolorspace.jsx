// tellcolorspace.jsx
// This script tells color space with activedocment
var mydoc = app.activeDocument;
var colorSpace = mydoc.documentColorSpace;
if(colorSpace === DocumentColorSpace.CMYK){
	alert('このドキュメントのカラースペースはCMYKです');
}else{
	alert('このドキュメントのカラースペースはRGBです');
}
