define("amber-gdev/Ludus", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Web"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Ludus');
$core.packages["Ludus"].transport = {"type":"amd","amdNamespace":"amber-gdev"};

$core.addClass('FrameGroup', $globals.Object, ['identifier', 'origin', 'frameSize', 'frameCount', 'currentFrameNumber', 'frameRate'], 'Ludus');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.FrameGroup.comment="I represent a group of ordered frames. Each frame is a clip rectangle that a Sprite can retrieve from me to paint itself.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "atLastFrame",
protocol: 'frames',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@currentFrameNumber"]).__eq($recv(self["@frameCount"]).__minus((1)));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atLastFrame",{},$globals.FrameGroup)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atLastFrame\x0a\x09^ currentFrameNumber = (frameCount - 1)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["=", "-"]
}),
$globals.FrameGroup);

$core.addMethod(
$core.method({
selector: "currentFrameNumber",
protocol: 'frames',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@currentFrameNumber"];
if(($receiver = $2) == null || $receiver.isNil){
self["@currentFrameNumber"]=(0);
$1=self["@currentFrameNumber"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentFrameNumber",{},$globals.FrameGroup)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentFrameNumber\x0a\x09^ currentFrameNumber ifNil: [currentFrameNumber := 0]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.FrameGroup);

$core.addMethod(
$core.method({
selector: "frameRate",
protocol: 'frames',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@frameRate"];
if(($receiver = $2) == null || $receiver.isNil){
self["@frameRate"]=(5);
$1=self["@frameRate"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"frameRate",{},$globals.FrameGroup)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "frameRate\x0a\x09^ frameRate ifNil: [frameRate := 5].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.FrameGroup);

$core.addMethod(
$core.method({
selector: "frameRate:",
protocol: 'frames',
fn: function (anInteger){
var self=this;
self["@frameRate"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "frameRate: anInteger\x0a\x09frameRate := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FrameGroup);

$core.addMethod(
$core.method({
selector: "height",
protocol: 'attributes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@frameSize"])._y();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"height",{},$globals.FrameGroup)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "height\x0a\x09^ frameSize y",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["y"]
}),
$globals.FrameGroup);

$core.addMethod(
$core.method({
selector: "identifier",
protocol: 'attributes',
fn: function (){
var self=this;
var $1;
$1=self["@identifier"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "identifier\x0a\x09^ identifier",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FrameGroup);

$core.addMethod(
$core.method({
selector: "identifier:origin:frameSize:frameCount:",
protocol: 'attributes',
fn: function (aString,anOriginPoint,aSizePoint,anInteger){
var self=this;
self["@identifier"]=aString;
self["@origin"]=anOriginPoint;
self["@frameSize"]=aSizePoint;
self["@frameCount"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anOriginPoint", "aSizePoint", "anInteger"],
source: "identifier: aString origin: anOriginPoint frameSize: aSizePoint frameCount: anInteger\x0a\x09identifier := aString.\x0a\x09origin := anOriginPoint.\x0a\x09frameSize := aSizePoint.\x0a\x09frameCount := anInteger.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FrameGroup);

$core.addMethod(
$core.method({
selector: "nextFrame",
protocol: 'frames',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._atLastFrame();
if($core.assert($1)){
self["@currentFrameNumber"]=(0);
self["@currentFrameNumber"];
} else {
self["@currentFrameNumber"]=$recv(self["@currentFrameNumber"]).__plus((1));
self["@currentFrameNumber"];
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextFrame",{},$globals.FrameGroup)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextFrame\x0a\x09self atLastFrame\x0a\x09\x09ifTrue: [currentFrameNumber := 0]\x0a\x09\x09ifFalse: [currentFrameNumber := currentFrameNumber + 1]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "atLastFrame", "+"]
}),
$globals.FrameGroup);

$core.addMethod(
$core.method({
selector: "offset",
protocol: 'frames',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._width()).__star(self._currentFrameNumber());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"offset",{},$globals.FrameGroup)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "offset\x0a\x09^ self width * self currentFrameNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["*", "width", "currentFrameNumber"]
}),
$globals.FrameGroup);

$core.addMethod(
$core.method({
selector: "origin",
protocol: 'attributes',
fn: function (){
var self=this;
var $1;
$1=self["@origin"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "origin\x0a\x09^ origin",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FrameGroup);

$core.addMethod(
$core.method({
selector: "width",
protocol: 'attributes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@frameSize"])._x();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width",{},$globals.FrameGroup)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "width\x0a\x09^ frameSize x",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x"]
}),
$globals.FrameGroup);


$core.addMethod(
$core.method({
selector: "identifier:origin:frameSize:frameCount:",
protocol: 'instance creation',
fn: function (aString,anOriginPoint,aSizePoint,anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._identifier_origin_frameSize_frameCount_(aString,anOriginPoint,aSizePoint,anInteger);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"identifier:origin:frameSize:frameCount:",{aString:aString,anOriginPoint:anOriginPoint,aSizePoint:aSizePoint,anInteger:anInteger},$globals.FrameGroup.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anOriginPoint", "aSizePoint", "anInteger"],
source: "identifier: aString origin: anOriginPoint frameSize: aSizePoint frameCount: anInteger\x0a\x09^ self new identifier: aString origin: anOriginPoint frameSize: aSizePoint frameCount: anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["identifier:origin:frameSize:frameCount:", "new"]
}),
$globals.FrameGroup.klass);


$core.addClass('Game', $globals.Widget, ['canvas', 'context', 'fps', 'keys', 'step', 'end', 'mousePosition', 'mouseDown', 'sounds'], 'Ludus');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Game.comment="I am a game. You need to override a couple of my methods to make me usable:\x0a\x0a**#startGame** Here you can define my intial conditions, such as the size of the canvas, my sounds, the background properties, the FPS, etc.\x0a\x0a**#step**  Here you can define what has to be done at each game cycle, or step. This method should control posititions, collisions, mouse and keyboard events, etc. This method should not deal with any graphic properties, these should be dealt with by:\x0a\x0a**#draw** → This is the method that controls my view. Here you should define the drawing of sprites and other graphic elements. Don't forget to clear the canvas before re-drawing sprites, if your game requires so.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addSound:",
protocol: 'audio',
fn: function (aSoundUrl){
var self=this;
var sound;
function $Sound(){return $globals.Sound||(typeof Sound=="undefined"?nil:Sound)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
sound=$recv($Sound())._src_(aSoundUrl);
$recv(self["@sounds"])._add_(sound);
$recv(sound)._appendToJQuery_("body"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addSound:",{aSoundUrl:aSoundUrl,sound:sound},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSoundUrl"],
source: "addSound: aSoundUrl\x0a\x09|sound|\x0a\x09sound := (Sound src: aSoundUrl).\x0a\x09sounds add: sound.\x0a\x09sound appendToJQuery: 'body' asJQuery.",
referencedClasses: ["Sound"],
//>>excludeEnd("ide");
messageSends: ["src:", "add:", "appendToJQuery:", "asJQuery"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "backgroundColor:",
protocol: 'attributes',
fn: function (aColor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self["@canvas"];
$2=$recv("background-color: ".__comma(aColor)).__comma(";");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("style",$2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"backgroundColor:",{aColor:aColor},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor"],
source: "backgroundColor: aColor\x0a\x09canvas at: 'style' put: ('background-color: ', aColor , ';')",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", ","]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "clearCanvas",
protocol: 'drawing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2;
$1=self["@context"];
$3=$recv(self["@canvas"])._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._width();
$recv($1)._clearRect_y_width_height_((0),(0),$2,$recv($recv(self["@canvas"])._element())._height());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clearCanvas",{},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clearCanvas\x0a\x09context clearRect: 0 y: 0 width: canvas element width height: canvas element height.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["clearRect:y:width:height:", "width", "element", "height"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "context",
protocol: 'drawing',
fn: function (){
var self=this;
var $1;
$1=self["@context"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "context\x0a\x09^ context",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"draw",{},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "draw\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "drawSprite:",
protocol: 'drawing',
fn: function (aSprite){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$6,$5,$4,$8,$7,$3,$11,$10,$9,$12,$13,$14;
$1=self["@context"];
$2=$recv(aSprite)._spriteSheet();
$6=$recv(aSprite)._currentFrameGroup();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["currentFrameGroup"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._origin();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["origin"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$8=$recv(aSprite)._currentFrameGroup();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["currentFrameGroup"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._offset();
$3=$recv($4).__plus($7);
$11=$recv(aSprite)._currentFrameGroup();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["currentFrameGroup"]=3;
//>>excludeEnd("ctx");
$10=$recv($11)._origin();
$9=$recv($10)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$12=$recv(aSprite)._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=1;
//>>excludeEnd("ctx");
$13=$recv(aSprite)._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height"]=1;
//>>excludeEnd("ctx");
$recv($1)._drawImage_originX_originY_frameWidth_frameHeight_x_y_scaleWidth_scaleHeight_($2,$3,$9,$12,$13,$recv(aSprite)._x(),$recv(aSprite)._y(),$recv(aSprite)._width(),$recv(aSprite)._height());
$14=$recv($recv(self["@step"]).__backslash_backslash($recv($recv(aSprite)._currentFrameGroup())._frameRate())).__eq((0));
if($core.assert($14)){
$recv(aSprite)._nextFrame();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawSprite:",{aSprite:aSprite},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite"],
source: "drawSprite: aSprite\x0a\x09context \x0a\x09\x09drawImage: aSprite spriteSheet\x0a\x09\x09originX: aSprite currentFrameGroup origin x + (aSprite currentFrameGroup offset)\x0a\x09\x09originY: aSprite currentFrameGroup origin y\x0a\x09\x09frameWidth: aSprite width\x0a\x09\x09frameHeight: aSprite height\x0a\x09\x09x: aSprite x \x0a\x09\x09y: aSprite y\x0a\x09\x09scaleWidth: aSprite width\x0a\x09\x09scaleHeight: aSprite height.\x0a\x09(step \x5c\x5c aSprite currentFrameGroup frameRate) = 0 ifTrue: [aSprite nextFrame].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["drawImage:originX:originY:frameWidth:frameHeight:x:y:scaleWidth:scaleHeight:", "spriteSheet", "+", "x", "origin", "currentFrameGroup", "offset", "y", "width", "height", "ifTrue:", "=", "\x5c\x5c", "frameRate", "nextFrame"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "drawSpriteCollection:",
protocol: 'drawing',
fn: function (aSpriteCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(aSpriteCollection)._do_((function(eachSprite){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._drawSprite_(eachSprite);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachSprite:eachSprite},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawSpriteCollection:",{aSpriteCollection:aSpriteCollection},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSpriteCollection"],
source: "drawSpriteCollection: aSpriteCollection\x0a\x09aSpriteCollection\x0a\x09\x09do: [:eachSprite | \x0a\x09\x09\x09self drawSprite: eachSprite]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "drawSprite:"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "end",
protocol: 'control',
fn: function (){
var self=this;
self["@end"]=true;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "end\x0a\x09end := true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "everyStepNumber:do:",
protocol: 'control',
fn: function (anInteger,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@step"]).__backslash_backslash(anInteger)).__eq((0));
$recv($1)._ifTrue_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"everyStepNumber:do:",{anInteger:anInteger,aBlock:aBlock},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger", "aBlock"],
source: "everyStepNumber: anInteger do: aBlock\x0a\x09( step \x5c\x5c anInteger ) = 0 ifTrue: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "\x5c\x5c"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "forElement:ofDataEntry:getProperty:",
protocol: 'events',
fn: function (anElement,aDataEntryName,aPropertyName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");

	var data;
	data = $(anElement).data(aDataEntryName);
	if (data != undefined) {
		return data[aPropertyName];
	} else {
		return null;
	}
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forElement:ofDataEntry:getProperty:",{anElement:anElement,aDataEntryName:aDataEntryName,aPropertyName:aPropertyName},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement", "aDataEntryName", "aPropertyName"],
source: "forElement: anElement ofDataEntry: aDataEntryName getProperty: aPropertyName\x0a\x09\x22^ (anElement asJQuery data: aDataEntryName) at: aPropertyName\x22\x0a\x09<\x0a\x09var data;\x0a\x09data = $(anElement).data(aDataEntryName);\x0a\x09if (data != undefined) {\x0a\x09\x09return data[aPropertyName];\x0a\x09} else {\x0a\x09\x09return null;\x0a\x09}\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "fps:",
protocol: 'initialization',
fn: function (anInteger){
var self=this;
self["@fps"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "fps: anInteger\x0a\x09fps := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "gameLoop",
protocol: 'control',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._gameOver();
if(!$core.assert($1)){
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._step();
self._draw();
self["@step"]=$recv(self["@step"]).__plus((1));
self["@step"];
return self._gameLoop();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((1000).__slash(self["@fps"]));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gameLoop",{},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gameLoop\x0a\x09\x22Do not override me, use #step and #draw instead\x22\x0a\x09self gameOver \x0a\x09\x09ifFalse: [ [ \x0a                  \x09self step.\x0a                  \x09self draw.\x0a                  \x09step := step + 1.\x0a                  \x09self gameLoop] valueWithTimeout: (1000 / fps)]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "gameOver", "valueWithTimeout:", "step", "draw", "+", "gameLoop", "/"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "gameOver",
protocol: 'control',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@end"];
if(($receiver = $2) == null || $receiver.isNil){
self["@end"]=false;
$1=self["@end"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gameOver",{},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gameOver\x0a\x09^ end ifNil: [end := false]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "height",
protocol: 'attributes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@canvas"])._element())._height();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"height",{},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "height\x0a\x09^ canvas element height",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["height", "element"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "height:",
protocol: 'attributes',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@canvas"])._at_put_("height",anInteger);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"height:",{anInteger:anInteger},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "height: anInteger\x0a\x09canvas at: 'height' put: anInteger.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Game.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@fps"]=(30);
self._keys();
self["@sounds"]=[];
self["@mouseDown"]=false;
self["@step"]=(1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09fps := 30.\x0a\x09self keys. \x22 and not keys := #().\x22\x0a\x09sounds := #().\x0a\x09mouseDown := false.\x0a\x09step := 1.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "keys"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "keyDown:",
protocol: 'events',
fn: function (evt){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@keys"])._at_put_($recv(evt)._keyCode(),true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keyDown:",{evt:evt},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["evt"],
source: "keyDown: evt\x0a\x09keys at: evt keyCode put: true.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "keyCode"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "keyUp:",
protocol: 'events',
fn: function (evt){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@keys"])._at_put_($recv(evt)._keyCode(),false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keyUp:",{evt:evt},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["evt"],
source: "keyUp: evt\x0a\x09keys at: evt keyCode put: false.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "keyCode"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "keys",
protocol: 'events',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@keys"];
if(($receiver = $2) == null || $receiver.isNil){
self["@keys"]=$recv($Array())._new();
self["@keys"];
(255)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@keys"])._add_(false);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$1=self["@keys"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keys",{},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keys\x0a\x09^ keys ifNil: [keys := Array new. 255 timesRepeat: [keys add: false]. keys]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new", "timesRepeat:", "add:"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "mouseDown:",
protocol: 'events',
fn: function (evt){
var self=this;
self["@mouseDown"]=true;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["evt"],
source: "mouseDown: evt\x0a\x09mouseDown := true.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "mouseMove:",
protocol: 'events',
fn: function (evt){
var self=this;
var canvasPosition,windowScrollTop,windowScrollLeft,canvasRelative;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
windowScrollTop=self._windowScrollTop();
windowScrollLeft=self._windowScrollLeft();
canvasPosition=$recv("canvas"._asJQuery())._position();
$1=$recv($recv(canvasPosition)._left()).__minus(windowScrollLeft);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$2=$recv($recv(canvasPosition)._top()).__minus(windowScrollTop);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=2;
//>>excludeEnd("ctx");
canvasRelative=$recv($1).__at($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=$recv($recv(evt)._clientX()).__minus($recv(canvasRelative)._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=3;
//>>excludeEnd("ctx");
self["@mousePosition"]=$recv($3).__at($recv($recv(evt)._clientY()).__minus($recv(canvasRelative)._y()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseMove:",{evt:evt,canvasPosition:canvasPosition,windowScrollTop:windowScrollTop,windowScrollLeft:windowScrollLeft,canvasRelative:canvasRelative},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["evt"],
source: "mouseMove: evt\x0a\x09|canvasPosition windowScrollTop windowScrollLeft canvasRelative|\x0a\x0a\x09windowScrollTop := self windowScrollTop.\x0a\x09windowScrollLeft := self windowScrollLeft.\x0a\x09canvasPosition := 'canvas' asJQuery position.\x0a\x0a\x09canvasRelative := (canvasPosition left - windowScrollLeft) @ ( canvasPosition top - windowScrollTop ) .\x0a\x09mousePosition := (evt clientX - canvasRelative x) @ (evt clientY - canvasRelative y).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["windowScrollTop", "windowScrollLeft", "position", "asJQuery", "@", "-", "left", "top", "clientX", "x", "clientY", "y"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "mousePosition",
protocol: 'events',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@mousePosition"];
if(($receiver = $2) == null || $receiver.isNil){
self["@mousePosition"]=(0).__at((0));
$1=self["@mousePosition"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mousePosition",{},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mousePosition\x0a\x09^ mousePosition ifNil: [mousePosition := 0@0]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "@"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "mouseUp:",
protocol: 'events',
fn: function (evt){
var self=this;
self["@mouseDown"]=false;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["evt"],
source: "mouseUp: evt\x0a\x09mouseDown := false.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "onMouseClickDo:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._forElement_ofDataEntry_getProperty_("#canvas","events","click");
if(($receiver = $1) == null || $receiver.isNil){
$recv(self["@canvas"])._onClick_(aBlock);
} else {
$1;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMouseClickDo:",{aBlock:aBlock},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onMouseClickDo: aBlock\x0a\x09(self \x0a\x09\x09forElement: '#canvas' \x0a\x09\x09ofDataEntry: 'events' \x0a\x09\x09getProperty: 'click')\x0a\x09\x09\x09ifNil: [canvas onClick: aBlock]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "forElement:ofDataEntry:getProperty:", "onClick:"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "onMouseDownDo:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._forElement_ofDataEntry_getProperty_("#canvas","events","mousedown");
if(($receiver = $1) == null || $receiver.isNil){
$recv($recv(self["@canvas"])._asJQuery())._bind_do_("mousedown",aBlock);
} else {
$1;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMouseDownDo:",{aBlock:aBlock},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onMouseDownDo: aBlock\x0a\x09(self \x0a\x09\x09forElement: '#canvas' \x0a\x09\x09ofDataEntry: 'events' \x0a\x09\x09getProperty: 'mousedown')\x0a\x09\x09\x09ifNil: [canvas asJQuery bind: 'mousedown' do: aBlock]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "forElement:ofDataEntry:getProperty:", "bind:do:", "asJQuery"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "onMouseUpDo:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._forElement_ofDataEntry_getProperty_("#canvas","events","mouseup");
if(($receiver = $1) == null || $receiver.isNil){
$recv($recv(self["@canvas"])._asJQuery())._bind_do_("mouseup",aBlock);
} else {
$1;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onMouseUpDo:",{aBlock:aBlock},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onMouseUpDo: aBlock\x0a\x09(self \x0a\x09\x09forElement: '#canvas' \x0a\x09\x09ofDataEntry: 'events' \x0a\x09\x09getProperty: 'mouseup')\x0a\x09\x09\x0a\x09\x09ifNil: [canvas asJQuery bind: 'mouseup' do: aBlock]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "forElement:ofDataEntry:getProperty:", "bind:do:", "asJQuery"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5;
self["@canvas"]=$recv(html)._canvas();
$1=self["@canvas"];
$recv($1)._at_put_("width",(250));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_("height",(250));
$2=$recv($1)._id_("canvas");
self["@context"]=$recv($recv(self["@canvas"])._element())._getContext_("2d");
$3=$recv(window)._jQuery_(document);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["jQuery:"]=1;
//>>excludeEnd("ctx");
$recv($3)._keydown_((function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._keyDown_(evt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($recv(window)._jQuery_(document))._keyup_((function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._keyUp_(evt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$4=$recv(self["@canvas"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($4)._bind_do_("mousedown",(function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._mouseDown_(evt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bind:do:"]=1;
//>>excludeEnd("ctx");
$5=$recv(self["@canvas"])._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$recv($5)._bind_do_("mouseup",(function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._mouseUp_(evt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bind:do:"]=2;
//>>excludeEnd("ctx");
$recv($recv(self["@canvas"])._asJQuery())._bind_do_("mousemove",(function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._mouseMove_(evt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,5)});
//>>excludeEnd("ctx");
}));
self._startGame();
self._gameLoop();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09\x22Do not override me, use #startGame instead\x22\x0a\x09canvas := html canvas.\x0a\x09canvas at: 'width' put: 250;\x0a\x09\x09at: 'height' put: 250;\x0a\x09\x09id: 'canvas'.\x0a\x09context := canvas element getContext: '2d'.\x0a\x0a\x09(window jQuery: document) keydown: [:evt | self keyDown: evt].\x0a\x09(window jQuery: document) keyup: [:evt | self keyUp: evt].\x0a\x09canvas asJQuery bind: 'mousedown' do: [:evt | self mouseDown: evt].\x0a\x09canvas asJQuery bind: 'mouseup' do: [:evt | self mouseUp: evt].\x0a\x09canvas asJQuery bind: 'mousemove' do: [:evt | self mouseMove: evt].\x0a\x0a\x09self startGame.\x0a\x0a\x09self gameLoop.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["canvas", "at:put:", "id:", "getContext:", "element", "keydown:", "jQuery:", "keyDown:", "keyup:", "keyUp:", "bind:do:", "asJQuery", "mouseDown:", "mouseUp:", "mouseMove:", "startGame", "gameLoop"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "soundNamed:",
protocol: 'audio',
fn: function (aName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@sounds"])._detect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._id()).__eq(aName);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"soundNamed:",{aName:aName},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aName"],
source: "soundNamed: aName\x0a\x09^ sounds detect: [:each | each id = aName ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:", "=", "id"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "startGame",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startGame",{},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startGame\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "step",
protocol: 'control',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"step",{},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "step\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "stepCount",
protocol: 'control',
fn: function (){
var self=this;
var $1;
$1=self["@step"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stepCount\x0a\x09^ step",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "whileKeyPressed:do:",
protocol: 'events',
fn: function (aKeyCode,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=self._keys();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["keys"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._at_ifAbsent_(aKeyCode,(function(){
return false;

}));
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._keys())._at_(aKeyCode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv($1)._ifTrue_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"whileKeyPressed:do:",{aKeyCode:aKeyCode,aBlock:aBlock},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKeyCode", "aBlock"],
source: "whileKeyPressed: aKeyCode do: aBlock\x0a\x09( ( self keys at: aKeyCode ifAbsent: [ false ] ) and: [ self keys at: aKeyCode ] ) ifTrue: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "and:", "at:ifAbsent:", "keys", "at:"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "whileMouseDownDo:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self["@mouseDown"];
$recv($1)._ifTrue_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"whileMouseDownDo:",{aBlock:aBlock},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "whileMouseDownDo: aBlock\x0a\x09mouseDown ifTrue: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "whileMouseUpDo:",
protocol: 'events',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self["@mouseDown"];
$recv($1)._ifFalse_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"whileMouseUpDo:",{aBlock:aBlock},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "whileMouseUpDo: aBlock\x0a\x09mouseDown ifFalse: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "width",
protocol: 'attributes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@canvas"])._element())._width();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width",{},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "width\x0a\x09^ canvas element width",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width", "element"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "width:",
protocol: 'attributes',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@canvas"])._at_put_("width",anInteger);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width:",{anInteger:anInteger},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "width: anInteger\x0a\x09canvas at: 'width' put: anInteger.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "windowScrollLeft",
protocol: 'attributes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return $(window).scrollLeft();;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"windowScrollLeft",{},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "windowScrollLeft\x0a\x09<return $(window).scrollLeft();>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Game);

$core.addMethod(
$core.method({
selector: "windowScrollTop",
protocol: 'attributes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return $(window).scrollTop();;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"windowScrollTop",{},$globals.Game)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "windowScrollTop\x0a\x09<return $(window).scrollTop();>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Game);


$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09\x22uncomment if you want the game to start when loading the page\x22\x0a\x22\x09'self start\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Game.klass);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'initialization',
fn: function (){
var self=this;
var instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
instance=self._new();
$1="#game"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._empty();
$recv(instance)._appendToJQuery_("#game"._asJQuery());
$2=instance;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{instance:instance},$globals.Game.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09|instance|\x0a\x09instance := self new.\x0a\x09\x22self halt.\x22\x0a\x09\x22clear the crap\x22\x0a\x09'#game' asJQuery empty.\x0a\x09instance appendToJQuery: ('#game' asJQuery).\x0a\x09^instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "empty", "asJQuery", "appendToJQuery:"]
}),
$globals.Game.klass);


$core.addClass('Key', $globals.Object, [], 'Ludus');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Key.comment="I am a helper class that always returns the key code of a certain key.\x0aI have a couple of methods defined for keys that have names, such as:\x0a\x0aspace (or spaceBar)\x0atab\x0aenter\x0aleftArrow\x0a...\x0a\x0aFor the rest of the keys, my #doesNotUnderstand handles the conversion.";
//>>excludeEnd("ide");

$core.addMethod(
$core.method({
selector: "doesNotUnderstand:",
protocol: 'error handling',
fn: function (aMessage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$4,$5;
$3=$recv(aMessage)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._size();
$1=$recv($2).__eq((1));
if($core.assert($1)){
$4=self._keyCodeFor_($recv(aMessage)._selector());
return $4;
} else {
$5=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Key.klass.superclass.fn.prototype._doesNotUnderstand_.apply($recv(self), [aMessage]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $5;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},$globals.Key.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09aMessage selector size = 1\x0a\x09\x09ifTrue: [^ self keyCodeFor: aMessage selector]\x0a\x09\x09ifFalse: [^ super doesNotUnderstand: aMessage]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "=", "size", "selector", "keyCodeFor:", "doesNotUnderstand:"]
}),
$globals.Key.klass);

$core.addMethod(
$core.method({
selector: "downArrow",
protocol: 'key codes',
fn: function (){
var self=this;
return (40);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "downArrow\x0a\x09^ 40",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Key.klass);

$core.addMethod(
$core.method({
selector: "enter",
protocol: 'key codes',
fn: function (){
var self=this;
return (13);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "enter\x0a\x09^13",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Key.klass);

$core.addMethod(
$core.method({
selector: "keyCodeFor:",
protocol: 'key codes',
fn: function (aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(aValue)._isString();
if($core.assert($2)){
$1=$recv($recv($recv(aValue)._asUppercase())._first())._asciiValue();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asciiValue"]=1;
//>>excludeEnd("ctx");
} else {
$1=$recv($recv(aValue)._asString())._asciiValue();
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keyCodeFor:",{aValue:aValue},$globals.Key.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "keyCodeFor: aValue\x0a\x09^ aValue isString \x0a\x09\x09ifTrue: [aValue asUppercase first asciiValue]\x0a\x09\x09ifFalse: [aValue asString asciiValue]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isString", "asciiValue", "first", "asUppercase", "asString"]
}),
$globals.Key.klass);

$core.addMethod(
$core.method({
selector: "leftArrow",
protocol: 'key codes',
fn: function (){
var self=this;
return (37);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "leftArrow\x0a\x09^ 37",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Key.klass);

$core.addMethod(
$core.method({
selector: "rightArrow",
protocol: 'key codes',
fn: function (){
var self=this;
return (39);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "rightArrow\x0a\x09^ 39",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Key.klass);

$core.addMethod(
$core.method({
selector: "space",
protocol: 'key codes',
fn: function (){
var self=this;
return (32);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "space\x0a\x09^32",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Key.klass);

$core.addMethod(
$core.method({
selector: "spaceBar",
protocol: 'key codes',
fn: function (){
var self=this;
return (32);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "spaceBar\x0a\x09^32",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Key.klass);

$core.addMethod(
$core.method({
selector: "tab",
protocol: 'key codes',
fn: function (){
var self=this;
return (9);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tab\x0a\x09^9",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Key.klass);

$core.addMethod(
$core.method({
selector: "upArrow",
protocol: 'key codes',
fn: function (){
var self=this;
return (38);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "upArrow\x0a\x09^ 38",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Key.klass);


$core.addClass('Sound', $globals.Widget, ['src'], 'Ludus');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Sound.comment="I am a sound. I have a source audio file.\x0aI can be played, paused, stopped or looped.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "id",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $RegularExpression(){return $globals.RegularExpression||(typeof RegularExpression=="undefined"?nil:RegularExpression)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$4,$2,$1;
$3=self._src();
$4=$recv($RegularExpression())._fromString_("\x5c..{2,3}$");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fromString:"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._replaceRegexp_with_($4,"");
$1=$recv($2)._replaceRegexp_with_($recv($RegularExpression())._fromString_(".*\x5c/"),"");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["replaceRegexp:with:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"id",{},$globals.Sound)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09\x22We take the file name, without extension\x22\x0a\x09^ (self src \x0a           \x09replaceRegexp: (RegularExpression fromString: '\x5c..{2,3}$') with: '')\x0a\x09\x09\x09replaceRegexp: (RegularExpression fromString: '.*\x5c/') with: ''",
referencedClasses: ["RegularExpression"],
//>>excludeEnd("ide");
messageSends: ["replaceRegexp:with:", "src", "fromString:"]
}),
$globals.Sound);

$core.addMethod(
$core.method({
selector: "loop",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(document)._getElementById_(self._id()))._at_put_("loop",true);
self._play();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loop",{},$globals.Sound)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loop\x0a\x09(document getElementById: self id) at: 'loop' put: true.\x0a\x09self play.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "getElementById:", "id", "play"]
}),
$globals.Sound);

$core.addMethod(
$core.method({
selector: "pause",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(document)._getElementById_(self._id()))._pause();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pause",{},$globals.Sound)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pause\x0a\x09(document getElementById: self id) pause.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["pause", "getElementById:", "id"]
}),
$globals.Sound);

$core.addMethod(
$core.method({
selector: "play",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._stop();
$recv($recv(document)._getElementById_(self._id()))._play();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"play",{},$globals.Sound)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "play\x0a\x09self stop.\x0a\x09(document getElementById: self id) play.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stop", "play", "getElementById:", "id"]
}),
$globals.Sound);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
var sound;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(html)._audio();
$recv($1)._id_(self._id());
$2=$recv($1)._src_(self._src());
sound=$2;
$recv(sound)._at_put_("preload",true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,sound:sound},$globals.Sound)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09|sound|\x0a\x09sound := html audio\x0a\x09\x09id: self id;\x0a\x09\x09src: self src.\x0a\x09sound at: 'preload' put: true.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "audio", "id", "src:", "src", "at:put:"]
}),
$globals.Sound);

$core.addMethod(
$core.method({
selector: "resume",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(document)._getElementById_(self._id()))._play();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resume",{},$globals.Sound)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resume\x0a\x09(document getElementById: self id) play.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["play", "getElementById:", "id"]
}),
$globals.Sound);

$core.addMethod(
$core.method({
selector: "src",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@src"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "src\x0a\x09^ src",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sound);

$core.addMethod(
$core.method({
selector: "src:",
protocol: 'not yet classified',
fn: function (anUrl){
var self=this;
self["@src"]=anUrl;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anUrl"],
source: "src: anUrl\x0a\x09src := anUrl",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sound);

$core.addMethod(
$core.method({
selector: "stop",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._pause();
$recv($recv(document)._getElementById_(self._id()))._src_(self._src());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stop",{},$globals.Sound)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stop\x0a\x09self pause.\x0a\x09(document getElementById: self id) src: self src.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["pause", "src:", "getElementById:", "id", "src"]
}),
$globals.Sound);


$core.addMethod(
$core.method({
selector: "src:",
protocol: 'not yet classified',
fn: function (anUrl){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._src_(anUrl);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"src:",{anUrl:anUrl},$globals.Sound.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anUrl"],
source: "src: anUrl\x0a\x09^ self new src: anUrl",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["src:", "new"]
}),
$globals.Sound.klass);


$core.addClass('Sprite', $globals.Object, ['position', 'direction', 'spriteSheet', 'currentFrameGroup', 'frameGroups', 'animating'], 'Ludus');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Sprite.comment="I am a Sprite. I need to have a spritesheet, which is an image file that displays all possible frames I can paint organized in an ordered fashion.\x0aYou define different frame groups for this spritesheet, and you can cycle through these framegroups and through the frames of each of them.\x0aI have a direction, defined by a unit vector. This vector will always be a unit vector. If someone tries to force-set my direction to a vector that is not a unit one, I will just convert it.\x0aI handle collisions with other sprites and sprite collections.\x0aOf course, I also have a position, defined by cartesian coordinates.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addFrameGroupNamed:origin:size:frameCount:",
protocol: 'frames',
fn: function (aString,anOriginPoint,aSizePoint,anInteger){
var self=this;
function $FrameGroup(){return $globals.FrameGroup||(typeof FrameGroup=="undefined"?nil:FrameGroup)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._frameGroups())._add_($recv($recv($FrameGroup())._new())._identifier_origin_frameSize_frameCount_(aString,anOriginPoint,aSizePoint,anInteger));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addFrameGroupNamed:origin:size:frameCount:",{aString:aString,anOriginPoint:anOriginPoint,aSizePoint:aSizePoint,anInteger:anInteger},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anOriginPoint", "aSizePoint", "anInteger"],
source: "addFrameGroupNamed: aString origin: anOriginPoint size: aSizePoint frameCount: anInteger\x0a\x09self frameGroups \x0a\x09\x09add: \x0a\x09\x09\x09(FrameGroup new \x0a                         \x09identifier: aString\x0a                         \x09origin: anOriginPoint\x0a                         \x09frameSize: aSizePoint\x0a                         \x09frameCount: anInteger)",
referencedClasses: ["FrameGroup"],
//>>excludeEnd("ide");
messageSends: ["add:", "frameGroups", "identifier:origin:frameSize:frameCount:", "new"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "animating",
protocol: 'animation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@animating"];
if(($receiver = $2) == null || $receiver.isNil){
self["@animating"]=true;
$1=self["@animating"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"animating",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "animating\x0a\x09^ animating ifNil: [animating := true]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "atLastFrame",
protocol: 'frames',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._currentFrameGroup())._atLastFrame();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atLastFrame",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atLastFrame\x0a\x09^ self currentFrameGroup atLastFrame",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["atLastFrame", "currentFrameGroup"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "bottomCollidesWith:",
protocol: 'collisions',
fn: function (aSprite){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aSprite)._topCollidesWith_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bottomCollidesWith:",{aSprite:aSprite},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite"],
source: "bottomCollidesWith: aSprite\x0a\x09^ aSprite topCollidesWith: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["topCollidesWith:"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "bottomCollidesWithAnyOf:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aSpriteCollection)._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._bottomCollidesWith_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._notEmpty();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bottomCollidesWithAnyOf:",{aSpriteCollection:aSpriteCollection},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSpriteCollection"],
source: "bottomCollidesWithAnyOf: aSpriteCollection\x0a\x09^ (aSpriteCollection select: [:each | self bottomCollidesWith: each]) notEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notEmpty", "select:", "bottomCollidesWith:"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "bottomCollidesWithWhichOf:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aSpriteCollection)._detect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._bottomCollidesWith_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bottomCollidesWithWhichOf:",{aSpriteCollection:aSpriteCollection},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSpriteCollection"],
source: "bottomCollidesWithWhichOf: aSpriteCollection\x0a\x09^ (aSpriteCollection detect: [:each | self bottomCollidesWith: each])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:", "bottomCollidesWith:"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "centre",
protocol: 'attributes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv(self._width()).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__plus(self._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__at($recv($recv(self._height()).__slash((2))).__plus(self._y()));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"centre",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "centre\x0a\x09^ ((self width / 2) + self x) @ ((self height / 2) + self y).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["@", "+", "/", "width", "x", "height", "y"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "centre:",
protocol: 'attributes',
fn: function (aPoint){
var self=this;
var xOffset,yOffset;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
xOffset=$recv(self._width()).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
yOffset=$recv(self._height()).__slash((2));
$2=$recv($recv(aPoint)._x()).__minus(xOffset);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__at($recv($recv(aPoint)._y()).__minus(yOffset));
self._position_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"centre:",{aPoint:aPoint,xOffset:xOffset,yOffset:yOffset},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "centre: aPoint\x0a\x09|xOffset yOffset|\x0a\x09xOffset := (self width / 2).\x0a\x09yOffset := (self height / 2).\x0a\x0a\x09self position: ((aPoint x - xOffset) @ (aPoint y - yOffset)).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["/", "width", "height", "position:", "@", "-", "x", "y"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "collidesWith:",
protocol: 'collisions',
fn: function (aSprite){
var self=this;
var x0,x1,y0,y1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$11,$12,$10,$14,$15,$13,$9,$16,$8,$7;
$1=self._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$2=self._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=1;
//>>excludeEnd("ctx");
x0=$recv($1).__plus($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$3=$recv(aSprite)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=2;
//>>excludeEnd("ctx");
x1=$recv($3).__plus($recv(aSprite)._width());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$4=$recv(aSprite)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$5=$recv(aSprite)._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height"]=1;
//>>excludeEnd("ctx");
y1=$recv($4).__plus($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=3;
//>>excludeEnd("ctx");
$6=self._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=2;
//>>excludeEnd("ctx");
y0=$recv($6).__plus(self._height());
$11=x0;
$12=$recv(aSprite)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=3;
//>>excludeEnd("ctx");
$10=$recv($11).__gt($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
$14=y0;
$15=$recv(aSprite)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=3;
//>>excludeEnd("ctx");
$13=$recv($14).__gt($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=2;
//>>excludeEnd("ctx");
$9=$recv($10).__and($13);
$16=$recv(x1).__gt(self._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=3;
//>>excludeEnd("ctx");
$8=$recv($9).__and($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=2;
//>>excludeEnd("ctx");
$7=$recv($8).__and($recv(y1).__gt(self._y()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=1;
//>>excludeEnd("ctx");
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collidesWith:",{aSprite:aSprite,x0:x0,x1:x1,y0:y0,y1:y1},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite"],
source: "collidesWith: aSprite\x0a\x09|x0 x1 y0 y1|\x0a\x09x0 := self x + self width.\x0a\x09x1 := aSprite x + aSprite width.\x0a\x09y1 := aSprite y + aSprite height.\x0a\x09y0 := self y + self height.\x0a\x0a\x09^ (x0 > aSprite x) & (y0 > aSprite y) & (x1 > self x) & (y1 > self y).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "x", "width", "y", "height", "&", ">"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "collidesWithAnyOf:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aSpriteCollection)._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._collidesWith_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._notEmpty();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"collidesWithAnyOf:",{aSpriteCollection:aSpriteCollection},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSpriteCollection"],
source: "collidesWithAnyOf: aSpriteCollection\x0a\x09^ (aSpriteCollection select: [:each | self collidesWith: each]) notEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notEmpty", "select:", "collidesWith:"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "currentFrameGroup",
protocol: 'frames',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@currentFrameGroup"];
if(($receiver = $2) == null || $receiver.isNil){
$1=$recv(self._frameGroups())._first();
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentFrameGroup",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentFrameGroup\x0a\x09^ currentFrameGroup ifNil: [ self frameGroups first ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "first", "frameGroups"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "currentFrameGroup:",
protocol: 'frames',
fn: function (anIdentifier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@currentFrameGroup"]=$recv(self._frameGroups())._detect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(each)._identifier()).__eq(anIdentifier);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentFrameGroup:",{anIdentifier:anIdentifier},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIdentifier"],
source: "currentFrameGroup: anIdentifier\x0a\x09currentFrameGroup := self frameGroups detect: [:each | each identifier = anIdentifier].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:", "frameGroups", "=", "identifier"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "direction",
protocol: 'attributes',
fn: function (){
var self=this;
function $Math(){return $globals.Math||(typeof Math=="undefined"?nil:Math)}
function $Number(){return $globals.Number||(typeof Number=="undefined"?nil:Number)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$5,$6,$4,$8,$7,$receiver;
$1=self["@direction"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var angle;
$3=$recv(self["@direction"])._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__gt_eq((0));
if($core.assert($2)){
$5=$recv(self["@direction"])._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$6=$recv(self["@direction"])._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=2;
//>>excludeEnd("ctx");
$4=$recv($5).__slash($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
angle=$recv($Math())._atan_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atan:"]=1;
//>>excludeEnd("ctx");
angle;
} else {
angle=$recv($recv($Math())._atan_($recv($recv(self["@direction"])._x()).__slash($recv(self["@direction"])._y()))).__plus($recv($Number())._pi());
angle;
};
self["@direction"]=$recv($recv($Math())._sin_(angle)).__at($recv($Math())._cos_(angle));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
self["@direction"];
};
$8=self["@direction"];
if(($receiver = $8) == null || $receiver.isNil){
self["@direction"]=(0).__at((1));
$7=self["@direction"];
} else {
$7=$8;
};
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"direction",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "direction\x0a\x09\x22The direction is always a unit vector\x22\x0a\x09direction ifNotNil:\x0a\x09\x09[|angle|\x0a                direction y >= 0\x0a\x09\x09\x09ifTrue: [ angle := Math atan: (direction x / direction y) ]\x0a\x09\x09\x09ifFalse: [ angle := (Math atan: (direction x / direction y)) + Number pi ].\x0a\x09\x09direction := (Math sin: angle) @ (Math cos: angle)].\x0a\x0a\x09^ direction ifNil: [direction := 0@1]",
referencedClasses: ["Math", "Number"],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "ifTrue:ifFalse:", ">=", "y", "atan:", "/", "x", "+", "pi", "@", "sin:", "cos:", "ifNil:"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "direction:",
protocol: 'attributes',
fn: function (aPoint){
var self=this;
var angle;
function $Math(){return $globals.Math||(typeof Math=="undefined"?nil:Math)}
function $Number(){return $globals.Number||(typeof Number=="undefined"?nil:Number)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$5,$3;
$2=$recv(aPoint)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__gt_eq((0));
if($core.assert($1)){
$4=$recv(aPoint)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$5=$recv(aPoint)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__slash($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
angle=$recv($Math())._atan_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atan:"]=1;
//>>excludeEnd("ctx");
angle;
} else {
angle=$recv($recv($Math())._atan_($recv($recv(aPoint)._x()).__slash($recv(aPoint)._y()))).__plus($recv($Number())._pi());
angle;
};
self["@direction"]=$recv($recv($Math())._sin_(angle)).__at($recv($Math())._cos_(angle));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"direction:",{aPoint:aPoint,angle:angle},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "direction: aPoint\x0a\x09\x22The direction is always a unit vector\x22\x0a\x09|angle|\x0a\x09aPoint y >= 0\x0a\x09\x09ifTrue: [ angle := Math atan: (aPoint x / aPoint y) ]\x0a\x09\x09ifFalse: [ angle := (Math atan: (aPoint x / aPoint y)) + Number pi ].\x0a\x09direction := (Math sin: angle) @ (Math cos: angle).",
referencedClasses: ["Math", "Number"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", ">=", "y", "atan:", "/", "x", "+", "pi", "@", "sin:", "cos:"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "distanceFromCentreTo:",
protocol: 'trigonometry',
fn: function (aPoint){
var self=this;
function $Math(){return $globals.Math||(typeof Math=="undefined"?nil:Math)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $6,$5,$4,$3,$9,$8,$7,$2,$1;
$6=self._centre();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["centre"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__minus($recv(aPoint)._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$3=$recv($Math())._pow_to_($4,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pow:to:"]=1;
//>>excludeEnd("ctx");
$9=$recv(self._centre())._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$8=$recv($9).__minus($recv(aPoint)._y());
$7=$recv($Math())._pow_to_($8,(2));
$2=$recv($3).__plus($7);
$1=$recv($Math())._sqrt_($2);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"distanceFromCentreTo:",{aPoint:aPoint},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "distanceFromCentreTo: aPoint\x0a\x09^  Math \x0a\x09\x09sqrt: \x0a\x09\x09\x09((Math pow: ((self centre x) - (aPoint  x)) to: 2)\x0a                         \x09+ (Math pow: ((self centre y) - (aPoint y)) to: 2))",
referencedClasses: ["Math"],
//>>excludeEnd("ide");
messageSends: ["sqrt:", "+", "pow:to:", "-", "x", "centre", "y"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "frameGroups",
protocol: 'frames',
fn: function (){
var self=this;
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@frameGroups"];
if(($receiver = $2) == null || $receiver.isNil){
self["@frameGroups"]=$recv($Array())._new();
$1=self["@frameGroups"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"frameGroups",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "frameGroups\x0a\x09^ frameGroups ifNil: [frameGroups :=Array new]",
referencedClasses: ["Array"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "frameRate:",
protocol: 'animation',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._frameGroups())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._frameRate_(anInteger);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"frameRate:",{anInteger:anInteger},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "frameRate: anInteger\x0a\x09self frameGroups do: [:each | each frameRate: anInteger]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "frameGroups", "frameRate:"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "height",
protocol: 'attributes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._currentFrameGroup())._height();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"height",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "height\x0a\x09^ self currentFrameGroup height",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["height", "currentFrameGroup"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "isInsideCanvas:",
protocol: 'collisions',
fn: function (aCanvas){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $5,$4,$6,$3,$8,$7,$2,$10,$9,$1;
$5=self._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__gt_eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">="]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$6=self._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["y"]=1;
//>>excludeEnd("ctx");
return $recv($6).__gt_eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($3)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$8=self._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["width"]=1;
//>>excludeEnd("ctx");
$7=$recv($8).__plus(self._x());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
return $recv($7).__lt_eq($recv(aCanvas)._width());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["<="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=2;
//>>excludeEnd("ctx");
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$10=self._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["height"]=1;
//>>excludeEnd("ctx");
$9=$recv($10).__plus(self._y());
return $recv($9).__lt_eq($recv(aCanvas)._height());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isInsideCanvas:",{aCanvas:aCanvas},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCanvas"],
source: "isInsideCanvas: aCanvas\x0a\x09^ ( ( ( self x >= 0 ) \x0a\x09\x09and: [ self y >= 0 ] )\x0a\x09\x09\x09and: [ self width + self x <= aCanvas width ] )\x0a\x09\x09\x09\x09and: [ self height + self y <= aCanvas height ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", ">=", "x", "y", "<=", "+", "width", "height"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "leftCollidesWith:",
protocol: 'collisions',
fn: function (aSprite){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aSprite)._rightCollidesWith_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"leftCollidesWith:",{aSprite:aSprite},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite"],
source: "leftCollidesWith: aSprite\x0a\x09^ aSprite rightCollidesWith: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rightCollidesWith:"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "leftCollidesWithAnyOf:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aSpriteCollection)._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._leftCollidesWith_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._notEmpty();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"leftCollidesWithAnyOf:",{aSpriteCollection:aSpriteCollection},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSpriteCollection"],
source: "leftCollidesWithAnyOf: aSpriteCollection\x0a\x09^ (aSpriteCollection select: [:each | self leftCollidesWith: each]) notEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notEmpty", "select:", "leftCollidesWith:"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "leftCollidesWithWhichOf:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aSpriteCollection)._detect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._leftCollidesWith_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"leftCollidesWithWhichOf:",{aSpriteCollection:aSpriteCollection},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSpriteCollection"],
source: "leftCollidesWithWhichOf: aSpriteCollection\x0a\x09^ (aSpriteCollection detect: [:each | self leftCollidesWith: each])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:", "leftCollidesWith:"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "moveCentreBy:",
protocol: 'movement',
fn: function (anOffset){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._centre_($recv(self._centre()).__plus(anOffset));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveCentreBy:",{anOffset:anOffset},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anOffset"],
source: "moveCentreBy: anOffset\x0a\x09\x22Example: aSprite moveCentreBy: 0@5\x22\x0a\x09self centre: self centre + anOffset",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["centre:", "+", "centre"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "newImage",
protocol: 'attributes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return new Image();;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newImage",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newImage\x0a\x09<return new Image();>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "nextFrame",
protocol: 'frames',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._animating();
if($core.assert($1)){
$recv(self._currentFrameGroup())._nextFrame();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextFrame",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextFrame\x0a\x09self animating ifTrue: [self currentFrameGroup nextFrame].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "animating", "nextFrame", "currentFrameGroup"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "nextFrameGroup",
protocol: 'frames',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$4,$3,$1,$5,$8,$7,$6;
$2=self._currentFrameGroup();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["currentFrameGroup"]=1;
//>>excludeEnd("ctx");
$4=self._frameGroups();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["frameGroups"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._last();
$1=$recv($2).__eq($3);
if($core.assert($1)){
self["@currentFrameGroup"]=$recv(self._frameGroups())._first();
self["@currentFrameGroup"];
} else {
$5=self._frameGroups();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["frameGroups"]=2;
//>>excludeEnd("ctx");
$8=self._frameGroups();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["frameGroups"]=3;
//>>excludeEnd("ctx");
$7=$recv($8)._indexOf_(self._currentFrameGroup());
$6=$recv($7).__plus((1));
self["@currentFrameGroup"]=$recv($5)._at_($6);
self["@currentFrameGroup"];
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextFrameGroup",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextFrameGroup\x0a\x09( self currentFrameGroup = self frameGroups last )\x0a\x09\x09ifFalse: [ currentFrameGroup := self frameGroups at: ( ( self frameGroups indexOf: self currentFrameGroup ) + 1 ) ]\x0a\x09\x09ifTrue: [ currentFrameGroup := self frameGroups first ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", "=", "currentFrameGroup", "last", "frameGroups", "at:", "+", "indexOf:", "first"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "position",
protocol: 'attributes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@position"];
if(($receiver = $2) == null || $receiver.isNil){
self["@position"]=(0).__at((0));
$1=self["@position"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"position",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "position\x0a\x09^ position ifNil: [position := 0@0]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "@"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "position:",
protocol: 'attributes',
fn: function (aPoint){
var self=this;
var $1;
self["@position"]=aPoint;
$1=self["@position"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPoint"],
source: "position: aPoint\x0a\x09^ position := aPoint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "rightCollidesWith:",
protocol: 'collisions',
fn: function (aSprite){
var self=this;
var x0,y0,y1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$9,$10,$8,$12,$13,$11,$7,$6,$15,$14,$5;
$1=self._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
x0=$recv($1).__plus(self._width());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$2=$recv(aSprite)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$3=$recv(aSprite)._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height"]=1;
//>>excludeEnd("ctx");
y1=$recv($2).__plus($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$4=self._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=2;
//>>excludeEnd("ctx");
y0=$recv($4).__plus(self._height());
$9=x0;
$10=$recv(aSprite)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=2;
//>>excludeEnd("ctx");
$8=$recv($9).__gt_eq($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">="]=1;
//>>excludeEnd("ctx");
$12=y0;
$13=$recv(aSprite)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=3;
//>>excludeEnd("ctx");
$11=$recv($12).__gt_eq($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">="]=2;
//>>excludeEnd("ctx");
$7=$recv($8).__and($11);
$6=$recv($7).__and($recv(y1).__gt_eq(self._y()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=2;
//>>excludeEnd("ctx");
$15=self._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=3;
//>>excludeEnd("ctx");
$14=$recv($15).__lt($recv(aSprite)._x());
$5=$recv($6).__and($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=1;
//>>excludeEnd("ctx");
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rightCollidesWith:",{aSprite:aSprite,x0:x0,y0:y0,y1:y1},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite"],
source: "rightCollidesWith: aSprite\x0a\x09|x0  y0 y1|\x0a\x09x0 := self x + self width.\x0a\x09y1 := aSprite y + aSprite height.\x0a\x09y0 := self y + self height.\x0a\x0a\x09^ (x0 >= aSprite x) & (y0 >= aSprite y) & (y1 >= self y) & (self x < aSprite x).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "x", "width", "y", "height", "&", ">=", "<"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "rightCollidesWithAnyOf:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aSpriteCollection)._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._rightCollidesWith_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._notEmpty();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rightCollidesWithAnyOf:",{aSpriteCollection:aSpriteCollection},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSpriteCollection"],
source: "rightCollidesWithAnyOf: aSpriteCollection\x0a\x09^ (aSpriteCollection select: [:each | self rightCollidesWith: each]) notEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notEmpty", "select:", "rightCollidesWith:"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "rightCollidesWithWhichOf:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aSpriteCollection)._detect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._rightCollidesWith_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rightCollidesWithWhichOf:",{aSpriteCollection:aSpriteCollection},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSpriteCollection"],
source: "rightCollidesWithWhichOf: aSpriteCollection\x0a\x09^ (aSpriteCollection detect: [:each | self rightCollidesWith: each])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:", "rightCollidesWith:"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "spriteSheet",
protocol: 'attributes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@spriteSheet"];
if(($receiver = $1) == null || $receiver.isNil){
self["@spriteSheet"]=self._newImage();
self["@spriteSheet"];
} else {
$1;
};
$2=self["@spriteSheet"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"spriteSheet",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "spriteSheet\x0a\x09spriteSheet ifNil: [spriteSheet := self newImage ].\x0a        ^spriteSheet.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "newImage"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "spriteSheet:",
protocol: 'attributes',
fn: function (anImageUrl){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._spriteSheet())._src_(anImageUrl);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"spriteSheet:",{anImageUrl:anImageUrl},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anImageUrl"],
source: "spriteSheet: anImageUrl\x0a\x09self spriteSheet src: anImageUrl",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["src:", "spriteSheet"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "startAnimation",
protocol: 'animation',
fn: function (){
var self=this;
self["@animating"]=true;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startAnimation\x0a\x09animating := true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "stopAnimation",
protocol: 'animation',
fn: function (){
var self=this;
self["@animating"]=false;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stopAnimation\x0a\x09animating := false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "toggleAnimation",
protocol: 'animation',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@animating"]=$recv(self["@animating"])._not();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toggleAnimation",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toggleAnimation\x0a\x09animating := animating not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "topCollidesWith:",
protocol: 'collisions',
fn: function (aSprite){
var self=this;
var x0,x1,y0,y1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$9,$8,$11,$12,$10,$7,$14,$13,$6,$5;
$1=self._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$2=self._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=1;
//>>excludeEnd("ctx");
x0=$recv($1).__plus($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$3=$recv(aSprite)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=2;
//>>excludeEnd("ctx");
x1=$recv($3).__plus($recv(aSprite)._width());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$4=$recv(aSprite)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
y1=$recv($4).__plus($recv(aSprite)._height());
$9=self._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=2;
//>>excludeEnd("ctx");
$8=$recv($9).__lt_eq(y1);
$11=x0;
$12=$recv(aSprite)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=3;
//>>excludeEnd("ctx");
$10=$recv($11).__gt_eq($12);
$7=$recv($8).__and($10);
$14=self._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=3;
//>>excludeEnd("ctx");
$13=$recv($14).__gt($recv(aSprite)._y());
$6=$recv($7).__and($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__and($recv(self._x()).__lt(x1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=1;
//>>excludeEnd("ctx");
return $5;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"topCollidesWith:",{aSprite:aSprite,x0:x0,x1:x1,y0:y0,y1:y1},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSprite"],
source: "topCollidesWith: aSprite\x0a\x09|x0 x1 y0 y1|\x0a\x09x0 := self x + self width.\x0a\x09x1 := aSprite x + aSprite width.\x0a\x09y1 := aSprite y + aSprite height.\x0a\x0a\x09 ^ (self y <= y1) & (x0 >= aSprite x) & (self y > aSprite y) & (self x < x1)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "x", "width", "y", "height", "&", "<=", ">=", ">", "<"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "topCollidesWithAnyOf:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(aSpriteCollection)._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._topCollidesWith_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
})))._notEmpty();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"topCollidesWithAnyOf:",{aSpriteCollection:aSpriteCollection},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSpriteCollection"],
source: "topCollidesWithAnyOf: aSpriteCollection\x0a\x09^ (aSpriteCollection select: [:each | self topCollidesWith: each]) notEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notEmpty", "select:", "topCollidesWith:"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "topCollidesWithWhichOf:",
protocol: 'collisions',
fn: function (aSpriteCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(aSpriteCollection)._detect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._topCollidesWith_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"topCollidesWithWhichOf:",{aSpriteCollection:aSpriteCollection},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSpriteCollection"],
source: "topCollidesWithWhichOf: aSpriteCollection\x0a\x09^ (aSpriteCollection detect: [:each | self topCollidesWith: each])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["detect:", "topCollidesWith:"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "width",
protocol: 'attributes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._currentFrameGroup())._width();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "width\x0a\x09^ self currentFrameGroup width",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width", "currentFrameGroup"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "x",
protocol: 'attributes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._position())._x();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"x",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "x\x0a\x09^ self position x",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x", "position"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "x:",
protocol: 'attributes',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._position())._x_(anInteger);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"x:",{anInteger:anInteger},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "x: anInteger\x0a\x09self position x: anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x:", "position"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "y",
protocol: 'attributes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._position())._y();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"y",{},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "y\x0a\x09^ self position y",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["y", "position"]
}),
$globals.Sprite);

$core.addMethod(
$core.method({
selector: "y:",
protocol: 'attributes',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._position())._y_(anInteger);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"y:",{anInteger:anInteger},$globals.Sprite)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "y: anInteger\x0a\x09self position y: anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["y:", "position"]
}),
$globals.Sprite);


});
