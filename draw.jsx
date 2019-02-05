doc = app.activeDocument;

//line = doc.pathItems.add();
//line.stroked = true;
//line.setEntirePath([[220,475], [375,300], [200,300]]);

line2 = doc.pathItems.add();
line2.stroked = true;

point = line2.pathPoints.add();
point.anchor = [220, 475];
point.leftDirection = point.anchor;
point.rightDirection = point.anchor;
point.pointType = PointType.CORNER;

point = line2.pathPoints.add();
point.anchor = [375, 300];
point.leftDirection = point.anchor;
point.rightDirection = point.anchor;
point.pointType = PointType.CORNER;

point = line2.pathPoints.add();
point.anchor = [220, 300];
point.leftDirection = [280, 160];
point.rightDirection = [240, 320];
point.pointType = PointType.CORNER;
