var s = app.activeDocument.selection;
if (s.length > 0) {
  for (var i = 0; i < s.length; i++) {
    var selectedItem = s[i];
    var copyItem;

    // Up
    copyItem = selectedItem.duplicate();
    copyItem.translate(0, selectedItem.width);

    // Right
    copyItem = selectedItem.duplicate();
    copyItem.translate(selectedItem.width, 0);

    // Down
    copyItem = selectedItem.duplicate();
    copyItem.translate(0, selectedItem.width * -1);
    
    // Left
    copyItem = selectedItem.duplicate();
    copyItem.translate(selectedItem.width * -1, 0);
  }
} else {
  alert("Nothing selected.");
}
