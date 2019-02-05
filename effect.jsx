var s = app.activeDocument.selection;

if (s.length == 0) {
  Error.runtimeError(9999, "No item selected");
}

var totalDistance = parseInt(prompt('How far to go?', '10'));
var item = s[0];
var copyItem;

for (var i = 0; i < totalDistance; i++) {
  copyItem = item.duplicate();
  copyItem.selected = false;
  copyItem.translate(i * 5, i * 5);
  copyItem.zOrder(ZOrderMethod.SENDTOBACK);

  var newColor = new RGBColor();
	newColor.red = 0;
	newColor.green = 0;
  newColor.blue = Math.random() * 255;
	copyItem.textRange.paragraphs[0].fillColor = newColor;  
}