define("amber-gdev/Ludus-Examples", ["amber/boot", "amber-gdev/Ludus", "amber_core/Web"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Ludus-Examples');
$core.packages["Ludus-Examples"].transport = {"type":"amd","amdNamespace":"amber-gdev"};

$core.addClass('Pong', $globals.Game, ['ball', 'score', 'paddle1', 'paddle2', 'speed', 'ai'], 'Ludus-Examples');
$core.addMethod(
$core.method({
selector: "bounceAgainstPaddle1",
protocol: 'not yet classified',
fn: function (){
var self=this;
var y;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$5,$3,$2;
y=self._verticalAngleFor_(self["@paddle1"]);
$1=self["@ball"];
$4=$recv(self["@ball"])._direction();
$5=(-1).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__star($5);
$2=$recv($3).__plus((0).__at(y));
$recv($1)._direction_($2);
$recv(self._soundNamed_("click"))._play();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bounceAgainstPaddle1",{y:y},$globals.Pong)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bounceAgainstPaddle1\x0a\x09|y|\x0a\x09y := self verticalAngleFor: paddle1.\x0a\x09ball direction: (ball direction * (-1@ 0)) + (0 @ y).\x0a\x09(self soundNamed: 'click') play.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["verticalAngleFor:", "direction:", "+", "*", "direction", "@", "play", "soundNamed:"]
}),
$globals.Pong);

$core.addMethod(
$core.method({
selector: "bounceAgainstPaddle2",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$5,$3,$2;
$1=self["@ball"];
$4=$recv(self["@ball"])._direction();
$5=(-1).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__star($5);
$2=$recv($3).__plus((0).__at(self._verticalAngleFor_(self["@paddle2"])));
$recv($1)._direction_($2);
$recv(self._soundNamed_("click"))._play();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bounceAgainstPaddle2",{},$globals.Pong)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bounceAgainstPaddle2\x0a\x09ball direction: (ball direction * (-1@ 0)) + (0 @ (self verticalAngleFor: paddle2)).\x0a\x09(self soundNamed: 'click') play.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["direction:", "+", "*", "direction", "@", "verticalAngleFor:", "play", "soundNamed:"]
}),
$globals.Pong);

$core.addMethod(
$core.method({
selector: "createBall",
protocol: 'not yet classified',
fn: function (){
var self=this;
var offsetX,offsetY;
function $Sprite(){return $globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$6,$5;
self["@ball"]=$recv($recv($Sprite())._new())._spriteSheet_("images/ball.png");
$1=self["@ball"];
$2=(0).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=(15).__at((15));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$recv($1)._addFrameGroupNamed_origin_size_frameCount_("moving",$2,$3,(6));
$4=self["@ball"];
$6=$recv(self._width()).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__at($recv(self._height()).__slash((2)));
$recv($4)._centre_($5);
$recv(self["@ball"])._frameRate_((5));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createBall",{offsetX:offsetX,offsetY:offsetY},$globals.Pong)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createBall\x0a\x09|offsetX offsetY|\x0a\x09ball := Sprite new spriteSheet: 'images/ball.png'.\x0a\x09ball addFrameGroupNamed: 'moving' origin: (0@0) size: (15@15) frameCount: 6.\x0a\x09ball centre:  ((self width / 2) @ (self height / 2)).\x0a\x09ball frameRate: 5.",
referencedClasses: ["Sprite"],
//>>excludeEnd("ide");
messageSends: ["spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "centre:", "/", "width", "height", "frameRate:"]
}),
$globals.Pong);

$core.addMethod(
$core.method({
selector: "createPaddle1",
protocol: 'not yet classified',
fn: function (){
var self=this;
var verticalOffset;
function $Sprite(){return $globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9;
self["@paddle1"]=$recv($recv($Sprite())._new())._spriteSheet_("images/paddle.png");
$1=self["@paddle1"];
$2=(0).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=(15).__at((80));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$recv($1)._addFrameGroupNamed_origin_size_frameCount_("still",$2,$3,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=1;
//>>excludeEnd("ctx");
$4=self["@paddle1"];
$5=(15).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$6=(15).__at((80));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=4;
//>>excludeEnd("ctx");
$recv($4)._addFrameGroupNamed_origin_size_frameCount_("up",$5,$6,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=2;
//>>excludeEnd("ctx");
$7=self["@paddle1"];
$8=(30).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=5;
//>>excludeEnd("ctx");
$recv($7)._addFrameGroupNamed_origin_size_frameCount_("down",$8,(15).__at((80)),(1));
$9=$recv(self["@paddle1"])._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height"]=1;
//>>excludeEnd("ctx");
verticalOffset=$recv($9).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
$recv(self["@paddle1"])._x_((10));
$recv(self["@paddle1"])._y_($recv($recv(self._height()).__slash((2))).__minus(verticalOffset));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createPaddle1",{verticalOffset:verticalOffset},$globals.Pong)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createPaddle1\x0a\x09|verticalOffset|\x0a\x09paddle1 := Sprite new spriteSheet: 'images/paddle.png'.\x0a\x09paddle1 addFrameGroupNamed: 'still' origin: (0@0) size: (15@80) frameCount: 1.\x0a\x09paddle1 addFrameGroupNamed: 'up' origin: (15@0) size: (15@80) frameCount: 1.\x0a\x09paddle1 addFrameGroupNamed: 'down' origin: (30@0) size: (15@80) frameCount: 1.\x0a\x09verticalOffset := paddle1 height / 2.\x0a\x09paddle1 x: 10.\x0a\x09paddle1 y: ((self height / 2) - verticalOffset)",
referencedClasses: ["Sprite"],
//>>excludeEnd("ide");
messageSends: ["spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "/", "height", "x:", "y:", "-"]
}),
$globals.Pong);

$core.addMethod(
$core.method({
selector: "createPaddle2",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Sprite(){return $globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$12,$11,$10;
self["@paddle2"]=$recv($recv($Sprite())._new())._spriteSheet_("images/paddle.png");
$1=self["@paddle2"];
$2=(0).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=(15).__at((80));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$recv($1)._addFrameGroupNamed_origin_size_frameCount_("still",$2,$3,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=1;
//>>excludeEnd("ctx");
$4=self["@paddle2"];
$5=(15).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$6=(15).__at((80));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=4;
//>>excludeEnd("ctx");
$recv($4)._addFrameGroupNamed_origin_size_frameCount_("up",$5,$6,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=2;
//>>excludeEnd("ctx");
$7=self["@paddle2"];
$8=(30).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=5;
//>>excludeEnd("ctx");
$recv($7)._addFrameGroupNamed_origin_size_frameCount_("down",$8,(15).__at((80)),(1));
$9=self["@paddle2"];
$12=self._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=1;
//>>excludeEnd("ctx");
$11=$recv($12).__minus($recv(self["@paddle2"])._width());
$10=$recv($11).__minus((10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$recv($9)._x_($10);
$recv(self["@paddle2"])._y_($recv(self["@paddle1"])._y());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createPaddle2",{},$globals.Pong)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createPaddle2\x0a\x09paddle2 := Sprite new spriteSheet: 'images/paddle.png'.\x0a\x09paddle2 addFrameGroupNamed: 'still' origin: (0@0) size: (15@80) frameCount: 1.\x0a\x09paddle2 addFrameGroupNamed: 'up' origin: (15@0) size: (15@80) frameCount: 1.\x0a\x09paddle2 addFrameGroupNamed: 'down' origin: (30@0) size: (15@80) frameCount: 1.\x0a\x09paddle2 x: self width - paddle2 width - 10.\x0a\x09paddle2 y: paddle1 y",
referencedClasses: ["Sprite"],
//>>excludeEnd("ide");
messageSends: ["spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "x:", "-", "width", "y:", "y"]
}),
$globals.Pong);

$core.addMethod(
$core.method({
selector: "draw",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._clearCanvas();
self._drawSprite_(self["@paddle1"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["drawSprite:"]=1;
//>>excludeEnd("ctx");
self._drawSprite_(self["@paddle2"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["drawSprite:"]=2;
//>>excludeEnd("ctx");
self._drawMiddleLine();
$1=self._drawSprite_(self["@ball"]);
$recv(self["@paddle1"])._currentFrameGroup_("still");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["currentFrameGroup:"]=1;
//>>excludeEnd("ctx");
$recv(self["@paddle2"])._currentFrameGroup_("still");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"draw",{},$globals.Pong)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "draw\x0a\x09\x09self clearCanvas;\x0a\x09\x09\x09drawSprite: paddle1;\x0a\x09\x09\x09drawSprite: paddle2;\x0a\x09\x09\x09drawMiddleLine;\x0a\x09\x09\x09drawSprite: ball.\x0a\x09\x09paddle1 currentFrameGroup: 'still'.\x0a\x09\x09paddle2 currentFrameGroup: 'still'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["clearCanvas", "drawSprite:", "drawMiddleLine", "currentFrameGroup:"]
}),
$globals.Pong);

$core.addMethod(
$core.method({
selector: "drawMiddleLine",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5;
$1=self["@context"];
$2=$1;
$4=self._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
$recv($2)._moveTo_y_($3,(0));
$recv($1)._lineTo_y_($recv(self._width()).__slash((2)),self._height());
$recv($1)._strokeStyle_("white");
$5=$recv($1)._stroke();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawMiddleLine",{},$globals.Pong)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "drawMiddleLine\x0a\x09context\x0a\x09\x09moveTo: (self width / 2) y: 0;\x0a\x09\x09lineTo: (self width / 2) y: (self height);\x0a\x09\x09strokeStyle: 'white';\x0a\x09\x09stroke.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["moveTo:y:", "/", "width", "lineTo:y:", "height", "strokeStyle:", "stroke"]
}),
$globals.Pong);

$core.addMethod(
$core.method({
selector: "end",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Pong.superclass.fn.prototype._end.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self._soundNamed_("applause"))._play();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"end",{},$globals.Pong)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "end\x0a\x09super end.\x0a\x09(self soundNamed: 'applause') play.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["end", "play", "soundNamed:"]
}),
$globals.Pong);

$core.addMethod(
$core.method({
selector: "goDown:",
protocol: 'not yet classified',
fn: function (aPaddle){
var self=this;
var maxBottom;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3;
$2=self._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__minus(self["@speed"]);
maxBottom=$recv($1).__minus($recv(aPaddle)._height());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$4=$recv(aPaddle)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__gt(maxBottom);
if(!$core.assert($3)){
$recv(aPaddle)._y_($recv($recv(aPaddle)._y()).__plus(self["@speed"]));
};
$recv(aPaddle)._currentFrameGroup_("down");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"goDown:",{aPaddle:aPaddle,maxBottom:maxBottom},$globals.Pong)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPaddle"],
source: "goDown: aPaddle\x0a\x09|maxBottom|\x0a\x09maxBottom := ((self height - speed) - aPaddle height).\x0a\x09(aPaddle y > maxBottom)\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[aPaddle y: aPaddle y + speed].\x0a\x09aPaddle currentFrameGroup: 'down'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["-", "height", "ifFalse:", ">", "y", "y:", "+", "currentFrameGroup:"]
}),
$globals.Pong);

$core.addMethod(
$core.method({
selector: "goUp:",
protocol: 'not yet classified',
fn: function (aPaddle){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(aPaddle)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__lt(self["@speed"]);
if(!$core.assert($1)){
$recv(aPaddle)._y_($recv($recv(aPaddle)._y()).__minus(self["@speed"]));
};
$recv(aPaddle)._currentFrameGroup_("up");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"goUp:",{aPaddle:aPaddle},$globals.Pong)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPaddle"],
source: "goUp: aPaddle\x0a\x09aPaddle y < speed \x0a\x09\x09ifFalse: \x0a\x09\x09\x09[aPaddle y: aPaddle y - speed].\x0a\x09aPaddle currentFrameGroup: 'up'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "<", "y", "y:", "-", "currentFrameGroup:"]
}),
$globals.Pong);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Pong.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@ai"]=false;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Pong)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09ai := false.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.Pong);

$core.addMethod(
$core.method({
selector: "processAI",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
$1=$recv($recv(self["@step"]).__backslash_backslash((5))).__eq((0));
if($core.assert($1)){
$4=$recv(self["@ball"])._centre();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["centre"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__gt($recv($recv(self["@paddle1"])._centre())._y());
if($core.assert($2)){
self._goDown_(self["@paddle1"]);
} else {
self._goUp_(self["@paddle1"]);
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"processAI",{},$globals.Pong)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "processAI\x0a\x09(step \x5c\x5c 5) = 0\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09ball centre y > paddle1 centre y \x0a\x09\x09\x09\x09ifTrue: [ self goDown: paddle1 ]\x0a\x09\x09\x09\x09ifFalse: [ self goUp: paddle1 ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "\x5c\x5c", "ifTrue:ifFalse:", ">", "y", "centre", "goDown:", "goUp:"]
}),
$globals.Pong);

$core.addMethod(
$core.method({
selector: "processBallBorderCollision",
protocol: 'not yet classified',
fn: function (){
var self=this;
var offsetY;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$3,$2;
$1=self._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height"]=1;
//>>excludeEnd("ctx");
offsetY=$recv($1).__minus($recv(self["@ball"])._height());
$4=$recv(self["@ball"])._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__lt_eq((0));
$2=$recv($3)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(self["@ball"])._y()).__gt_eq(offsetY);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($2)){
$recv(self["@ball"])._direction_($recv($recv(self["@ball"])._direction()).__star((1).__at((-1))));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"processBallBorderCollision",{offsetY:offsetY},$globals.Pong)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "processBallBorderCollision\x0a\x09|offsetY|\x0a\x09offsetY := (self height - ball height).\x0a\x09((ball y <= 0) or: [(ball y >= offsetY)]) \x0a\x09\x09ifTrue: [ball direction: ball direction * (1@ -1)].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["-", "height", "ifTrue:", "or:", "<=", "y", ">=", "direction:", "*", "direction", "@"]
}),
$globals.Pong);

$core.addMethod(
$core.method({
selector: "processBallCollision",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
self._processBallBorderCollision();
$1=$recv(self["@ball"])._leftCollidesWith_(self["@paddle1"]);
if($core.assert($1)){
self._bounceAgainstPaddle1();
};
$2=$recv(self["@ball"])._rightCollidesWith_(self["@paddle2"]);
if($core.assert($2)){
self._bounceAgainstPaddle2();
};
self._processEndGame();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"processBallCollision",{},$globals.Pong)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "processBallCollision\x0a\x09self processBallBorderCollision.\x0a\x0a\x09(ball leftCollidesWith: paddle1)\x0a\x09\x09ifTrue: [self bounceAgainstPaddle1].\x0a\x0a\x09(ball rightCollidesWith: paddle2)\x0a\x09\x09ifTrue: [self bounceAgainstPaddle2].\x0a\x0a\x09self processEndGame",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["processBallBorderCollision", "ifTrue:", "leftCollidesWith:", "bounceAgainstPaddle1", "rightCollidesWith:", "bounceAgainstPaddle2", "processEndGame"]
}),
$globals.Pong);

$core.addMethod(
$core.method({
selector: "processBallMovement",
protocol: 'not yet classified',
fn: function (){
var self=this;
var ballStep;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._processBallCollision();
$recv(self["@ball"])._centre_($recv($recv(self["@ball"])._centre()).__plus($recv($recv(self["@ball"])._direction()).__star(self["@speed"])));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"processBallMovement",{ballStep:ballStep},$globals.Pong)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "processBallMovement\x0a\x09|ballStep|\x0a\x09self processBallCollision.\x0a\x09ball centre: ball centre + (ball direction * speed).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["processBallCollision", "centre:", "+", "centre", "*", "direction"]
}),
$globals.Pong);

$core.addMethod(
$core.method({
selector: "processEndGame",
protocol: 'not yet classified',
fn: function (){
var self=this;
var offsetX;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$2,$4;
$1=self._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=1;
//>>excludeEnd("ctx");
offsetX=$recv($1).__minus($recv(self["@ball"])._width());
$3=$recv(self["@ball"])._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__lt_eq((0));
if($core.assert($2)){
self._end();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["end"]=1;
//>>excludeEnd("ctx");
$recv(window)._alert_("Right player wins!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["alert:"]=1;
//>>excludeEnd("ctx");
};
$4=$recv($recv(self["@ball"])._x()).__gt_eq(offsetX);
if($core.assert($4)){
self._end();
$recv(window)._alert_("Left player wins!");
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"processEndGame",{offsetX:offsetX},$globals.Pong)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "processEndGame\x0a\x09|offsetX|\x0a\x0a\x09offsetX := (self width - ball width).\x0a\x0a\x09(ball x <= 0) \x0a\x09\x09ifTrue: [ self end.\x0a                         window alert: 'Right player wins!'].\x0a\x09(ball x >= offsetX)\x0a\x09\x09ifTrue: [ self end.\x0a                        window alert: 'Left player wins!'].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["-", "width", "ifTrue:", "<=", "x", "end", "alert:", ">="]
}),
$globals.Pong);

$core.addMethod(
$core.method({
selector: "startGame",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$6,$7,$5,$4;
self._width_((640));
$1=self._height_((360));
self["@speed"]=(10);
$recv(self["@canvas"])._style_("background-color: black");
self._addSound_("sounds/applause.ogg");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addSound:"]=1;
//>>excludeEnd("ctx");
self._addSound_("sounds/click.ogg");
self._createPaddle1();
self._createPaddle2();
$2=self._createBall();
$3=self["@ball"];
$6=[(-1), (1)];
$7=(2)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._at_($7);
$4=$recv($5).__at($recv($recv((20)._atRandom()).__minus((10))).__slash((10)));
$recv($3)._direction_($4);
$recv(window)._alert_("Left Player: a - up q - down / Right Player: up/down arrows");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startGame",{},$globals.Pong)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startGame\x0a\x09self width: 640; \x0a\x09\x09height: 360.\x0a\x0a\x09speed := 10.\x0a\x0a\x09canvas style: 'background-color: black'.\x0a\x0a\x09self addSound: 'sounds/applause.ogg'.\x0a\x09self addSound: 'sounds/click.ogg'.\x0a\x0a\x09self createPaddle1;\x0a\x09\x09createPaddle2;\x0a\x09\x09createBall.\x0a\x0a\x09ball direction: (#(-1 1) at: (2 atRandom)) @ ((20 atRandom - 10)/10).\x0a\x09window alert: 'Left Player: a - up q - down / Right Player: up/down arrows'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width:", "height:", "style:", "addSound:", "createPaddle1", "createPaddle2", "createBall", "direction:", "@", "at:", "atRandom", "/", "-", "alert:"]
}),
$globals.Pong);

$core.addMethod(
$core.method({
selector: "step",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Key(){return $globals.Key||(typeof Key=="undefined"?nil:Key)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=self["@ai"];
if($core.assert($1)){
self._processAI();
} else {
self._whileKeyPressed_do_($recv($Key())._a(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._goUp_(self["@paddle1"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["goUp:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whileKeyPressed:do:"]=1;
//>>excludeEnd("ctx");
$2=self._whileKeyPressed_do_($recv($Key())._q(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._goDown_(self["@paddle1"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["goDown:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whileKeyPressed:do:"]=2;
//>>excludeEnd("ctx");
$2;
};
self._whileKeyPressed_do_($recv($Key())._upArrow(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._goUp_(self["@paddle2"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whileKeyPressed:do:"]=3;
//>>excludeEnd("ctx");
self._whileKeyPressed_do_($recv($Key())._downArrow(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._goDown_(self["@paddle2"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)});
//>>excludeEnd("ctx");
}));
$3=self._processBallMovement();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"step",{},$globals.Pong)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "step\x0a\x09ai\x0a\x09\x09ifFalse: [self whileKeyPressed: Key a do: [self goUp: paddle1];\x0a\x09\x09\x09whileKeyPressed: Key q do: [self goDown: paddle1]]\x0a\x09\x09ifTrue: [self processAI].\x0a\x09self whileKeyPressed: Key upArrow do: [self goUp: paddle2];\x0a\x09\x09whileKeyPressed: Key downArrow do: [self goDown: paddle2];\x0a\x09\x09processBallMovement.",
referencedClasses: ["Key"],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", "whileKeyPressed:do:", "a", "goUp:", "q", "goDown:", "processAI", "upArrow", "downArrow", "processBallMovement"]
}),
$globals.Pong);

$core.addMethod(
$core.method({
selector: "verticalAngleFor:",
protocol: 'not yet classified',
fn: function (aPaddle){
var self=this;
var impactPosition;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$3;
$2=$recv(aPaddle)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__minus($recv(self["@ball"])._y());
impactPosition=$recv($1).__slash($recv(aPaddle)._height());
$3=$recv($recv($recv(impactPosition).__star((2))).__plus((1))).__star((-1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"verticalAngleFor:",{aPaddle:aPaddle,impactPosition:impactPosition},$globals.Pong)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPaddle"],
source: "verticalAngleFor: aPaddle\x0a \x09|impactPosition|\x0a\x09impactPosition := (aPaddle y - ball y) / aPaddle height.\x0a\x09^ ((impactPosition * 2) + 1) * -1.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["/", "-", "y", "height", "*", "+"]
}),
$globals.Pong);

$core.addMethod(
$core.method({
selector: "withAI",
protocol: 'not yet classified',
fn: function (){
var self=this;
self["@ai"]=true;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "withAI\x0a\x09ai := true.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Pong);



$core.addClass('Ship', $globals.Sprite, ['speed'], 'Ludus-Examples');
$core.addMethod(
$core.method({
selector: "decreaseSpeed",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._speed_($recv(self._speed()).__minus((0.05)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"decreaseSpeed",{},$globals.Ship)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "decreaseSpeed\x0a\x09self speed: self speed - 0.05",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["speed:", "-", "speed"]
}),
$globals.Ship);

$core.addMethod(
$core.method({
selector: "increaseSpeed",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._speed_($recv(self._speed()).__plus((0.05)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"increaseSpeed",{},$globals.Ship)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "increaseSpeed\x0a\x09self speed: self speed + 0.05",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["speed:", "+", "speed"]
}),
$globals.Ship);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Ship.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._spriteSheet_("images/trail.png");
$2=(0).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$1=self._addFrameGroupNamed_origin_size_frameCount_("ship",$2,(10).__at((10)),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Ship)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self spriteSheet: 'images/trail.png';\x0a\x09\x09addFrameGroupNamed: 'ship' origin: 0@0 size: 10@10 frameCount: 1.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "spriteSheet:", "addFrameGroupNamed:origin:size:frameCount:", "@"]
}),
$globals.Ship);

$core.addMethod(
$core.method({
selector: "speed",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@speed"];
if(($receiver = $2) == null || $receiver.isNil){
self["@speed"]=(0);
$1=self["@speed"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"speed",{},$globals.Ship)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "speed\x0a\x09^ speed ifNil: [speed := 0]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Ship);

$core.addMethod(
$core.method({
selector: "speed:",
protocol: 'not yet classified',
fn: function (aSpeed){
var self=this;
self["@speed"]=aSpeed;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSpeed"],
source: "speed: aSpeed\x0a\x09speed := aSpeed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Ship);



$core.addClass('SimplePacman', $globals.Game, ['pacman', 'ghost', 'pills'], 'Ludus-Examples');
$core.addMethod(
$core.method({
selector: "createGhost",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Sprite(){return $globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12;
self["@ghost"]=$recv($recv($Sprite())._new())._spriteSheet_("images/ghost.png");
$1=self["@ghost"];
$2=(0).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=(50).__at((55));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$recv($1)._addFrameGroupNamed_origin_size_frameCount_("down",$2,$3,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=1;
//>>excludeEnd("ctx");
$4=self["@ghost"];
$5=(100).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$6=(50).__at((55));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=4;
//>>excludeEnd("ctx");
$recv($4)._addFrameGroupNamed_origin_size_frameCount_("up",$5,$6,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=2;
//>>excludeEnd("ctx");
$7=self["@ghost"];
$8=(0).__at((55));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=5;
//>>excludeEnd("ctx");
$9=(50).__at((55));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=6;
//>>excludeEnd("ctx");
$recv($7)._addFrameGroupNamed_origin_size_frameCount_("right",$8,$9,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=3;
//>>excludeEnd("ctx");
$10=self["@ghost"];
$11=(100).__at((55));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=7;
//>>excludeEnd("ctx");
$12=(50).__at((55));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=8;
//>>excludeEnd("ctx");
$recv($10)._addFrameGroupNamed_origin_size_frameCount_("left",$11,$12,(2));
$recv(self["@ghost"])._centre_((500).__at((500)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createGhost",{},$globals.SimplePacman)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createGhost\x0a\x09ghost := Sprite new spriteSheet: 'images/ghost.png'.\x0a\x09ghost addFrameGroupNamed: 'down' origin: (0@0) size: (50@55) frameCount: 2.\x0a\x09ghost addFrameGroupNamed: 'up' origin: (100@0) size: (50@55) frameCount: 2.\x0a\x09ghost addFrameGroupNamed: 'right' origin: (0@55) size: (50@55) frameCount: 2.\x0a\x09ghost addFrameGroupNamed: 'left' origin: (100@55) size: (50@55) frameCount: 2.\x0a\x09ghost centre: 500@500.",
referencedClasses: ["Sprite"],
//>>excludeEnd("ide");
messageSends: ["spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "centre:"]
}),
$globals.SimplePacman);

$core.addMethod(
$core.method({
selector: "createPacman",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Sprite(){return $globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12;
self["@pacman"]=$recv($recv($Sprite())._new())._spriteSheet_("images/pacman.png");
$1=self["@pacman"];
$2=(0).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=(50).__at((50));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$recv($1)._addFrameGroupNamed_origin_size_frameCount_("left",$2,$3,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=1;
//>>excludeEnd("ctx");
$4=self["@pacman"];
$5=(0).__at((50));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$6=(50).__at((50));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=4;
//>>excludeEnd("ctx");
$recv($4)._addFrameGroupNamed_origin_size_frameCount_("right",$5,$6,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=2;
//>>excludeEnd("ctx");
$7=self["@pacman"];
$8=(100).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=5;
//>>excludeEnd("ctx");
$9=(50).__at((50));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=6;
//>>excludeEnd("ctx");
$recv($7)._addFrameGroupNamed_origin_size_frameCount_("down",$8,$9,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=3;
//>>excludeEnd("ctx");
$10=self["@pacman"];
$11=(100).__at((50));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=7;
//>>excludeEnd("ctx");
$12=(50).__at((50));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=8;
//>>excludeEnd("ctx");
$recv($10)._addFrameGroupNamed_origin_size_frameCount_("up",$11,$12,(2));
$recv(self["@pacman"])._centre_((100).__at((100)));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createPacman",{},$globals.SimplePacman)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createPacman\x0a\x09pacman := Sprite new spriteSheet: 'images/pacman.png'.\x0a\x09pacman addFrameGroupNamed: 'left' origin: (0@0) size: (50@50) frameCount: 2.\x0a\x09pacman addFrameGroupNamed: 'right' origin: (0@50) size: (50@50) frameCount: 2.\x0a\x09pacman addFrameGroupNamed: 'down' origin: (100@0) size: (50@50) frameCount: 2.\x0a\x09pacman addFrameGroupNamed: 'up' origin: (100@50) size: (50@50) frameCount: 2.\x0a\x09pacman centre: 100@100.",
referencedClasses: ["Sprite"],
//>>excludeEnd("ide");
messageSends: ["spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "centre:"]
}),
$globals.SimplePacman);

$core.addMethod(
$core.method({
selector: "draw",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._clearCanvas();
self._drawSprite_(self["@ghost"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["drawSprite:"]=1;
//>>excludeEnd("ctx");
self._drawSprite_(self["@pacman"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"draw",{},$globals.SimplePacman)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "draw\x0a\x09self clearCanvas.\x0a\x09self drawSprite: ghost.\x0a\x09self drawSprite: pacman.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["clearCanvas", "drawSprite:"]
}),
$globals.SimplePacman);

$core.addMethod(
$core.method({
selector: "moveDown",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv($recv(self["@pacman"])._centre())._y()).__plus((25))).__gt_eq(self._height());
if(!$core.assert($1)){
$recv(self["@pacman"])._moveCentreBy_((0).__at((15)));
};
$recv(self["@pacman"])._currentFrameGroup_("down");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveDown",{},$globals.SimplePacman)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "moveDown\x0a\x09(pacman centre y + 25) >= self height \x0a\x09\x09ifFalse: \x0a\x09\x09\x09[pacman moveCentreBy: (0@ 15)].\x0a\x09pacman currentFrameGroup: 'down'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", ">=", "+", "y", "centre", "height", "moveCentreBy:", "@", "currentFrameGroup:"]
}),
$globals.SimplePacman);

$core.addMethod(
$core.method({
selector: "moveGhost",
protocol: 'not yet classified',
fn: function (){
var self=this;
var direction;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
direction=(4)._atRandom();
$1=$recv(direction).__eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
self._moveGhostUp();
};
$2=$recv(direction).__eq((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
if($core.assert($2)){
self._moveGhostDown();
};
$3=$recv(direction).__eq((3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=3;
//>>excludeEnd("ctx");
if($core.assert($3)){
self._moveGhostLeft();
};
$4=$recv(direction).__eq((4));
if($core.assert($4)){
self._moveGhostRight();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveGhost",{direction:direction},$globals.SimplePacman)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "moveGhost\x0a\x09|direction|\x0a\x09direction := 4 atRandom.\x0a\x09direction = 1 ifTrue: [self moveGhostUp].\x0a\x09direction = 2 ifTrue: [self moveGhostDown].\x0a\x09direction = 3 ifTrue: [self moveGhostLeft].\x0a\x09direction = 4 ifTrue: [self moveGhostRight].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["atRandom", "ifTrue:", "=", "moveGhostUp", "moveGhostDown", "moveGhostLeft", "moveGhostRight"]
}),
$globals.SimplePacman);

$core.addMethod(
$core.method({
selector: "moveGhostDown",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv($recv(self["@ghost"])._centre())._y()).__plus((27))).__gt_eq(self._height());
if(!$core.assert($1)){
$recv(self["@ghost"])._moveCentreBy_((0).__at((15)));
};
$recv(self["@ghost"])._currentFrameGroup_("down");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveGhostDown",{},$globals.SimplePacman)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "moveGhostDown\x0a\x09(ghost centre y + 27) >= self height \x0a\x09\x09ifFalse: \x0a\x09\x09\x09[ghost moveCentreBy: (0@ 15)].\x0a\x09ghost currentFrameGroup: 'down'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", ">=", "+", "y", "centre", "height", "moveCentreBy:", "@", "currentFrameGroup:"]
}),
$globals.SimplePacman);

$core.addMethod(
$core.method({
selector: "moveGhostLeft",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(self["@ghost"])._centre())._x()).__lt_eq((25));
if(!$core.assert($1)){
$recv(self["@ghost"])._moveCentreBy_((-15).__at((0)));
};
$recv(self["@ghost"])._currentFrameGroup_("left");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveGhostLeft",{},$globals.SimplePacman)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "moveGhostLeft\x0a\x09ghost centre x <= 25\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[ghost moveCentreBy: (-15@ 0)].\x0a\x09ghost currentFrameGroup: 'left'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "<=", "x", "centre", "moveCentreBy:", "@", "currentFrameGroup:"]
}),
$globals.SimplePacman);

$core.addMethod(
$core.method({
selector: "moveGhostRight",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv($recv(self["@ghost"])._centre())._x()).__plus((25))).__gt_eq(self._width());
if(!$core.assert($1)){
$recv(self["@ghost"])._moveCentreBy_((15).__at((0)));
};
$recv(self["@ghost"])._currentFrameGroup_("right");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveGhostRight",{},$globals.SimplePacman)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "moveGhostRight\x0a\x09ghost centre x + 25 >= self width\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[ghost moveCentreBy: (15@ 0)].\x0a\x09ghost currentFrameGroup: 'right'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", ">=", "+", "x", "centre", "width", "moveCentreBy:", "@", "currentFrameGroup:"]
}),
$globals.SimplePacman);

$core.addMethod(
$core.method({
selector: "moveGhostUp",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(self["@ghost"])._centre())._y()).__lt_eq((27));
if(!$core.assert($1)){
$recv(self["@ghost"])._moveCentreBy_((0).__at((-15)));
};
$recv(self["@ghost"])._currentFrameGroup_("up");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveGhostUp",{},$globals.SimplePacman)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "moveGhostUp\x0a\x09ghost centre y <= 27\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[ghost moveCentreBy: (0@ -15)].\x0a\x09ghost currentFrameGroup: 'up'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "<=", "y", "centre", "moveCentreBy:", "@", "currentFrameGroup:"]
}),
$globals.SimplePacman);

$core.addMethod(
$core.method({
selector: "moveLeft",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(self["@pacman"])._centre())._x()).__lt_eq((25));
if(!$core.assert($1)){
$recv(self["@pacman"])._moveCentreBy_((-15).__at((0)));
};
$recv(self["@pacman"])._currentFrameGroup_("left");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveLeft",{},$globals.SimplePacman)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "moveLeft\x0a\x09pacman centre x <= 25\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[pacman moveCentreBy: (-15@ 0)].\x0a\x09pacman currentFrameGroup: 'left'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "<=", "x", "centre", "moveCentreBy:", "@", "currentFrameGroup:"]
}),
$globals.SimplePacman);

$core.addMethod(
$core.method({
selector: "moveRight",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv($recv(self["@pacman"])._centre())._x()).__plus((25))).__gt_eq(self._width());
if(!$core.assert($1)){
$recv(self["@pacman"])._moveCentreBy_((15).__at((0)));
};
$recv(self["@pacman"])._currentFrameGroup_("right");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveRight",{},$globals.SimplePacman)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "moveRight\x0a\x09pacman centre x + 25 >= self width\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[pacman moveCentreBy: (15@ 0)].\x0a\x09pacman currentFrameGroup: 'right'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", ">=", "+", "x", "centre", "width", "moveCentreBy:", "@", "currentFrameGroup:"]
}),
$globals.SimplePacman);

$core.addMethod(
$core.method({
selector: "moveUp",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv($recv(self["@pacman"])._centre())._y()).__lt_eq((25));
if(!$core.assert($1)){
$recv(self["@pacman"])._moveCentreBy_((0).__at((-15)));
};
$recv(self["@pacman"])._currentFrameGroup_("up");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveUp",{},$globals.SimplePacman)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "moveUp\x0a\x09pacman centre y <= 25\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[pacman moveCentreBy: (0@ -15)].\x0a\x09pacman currentFrameGroup: 'up'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "<=", "y", "centre", "moveCentreBy:", "@", "currentFrameGroup:"]
}),
$globals.SimplePacman);

$core.addMethod(
$core.method({
selector: "startGame",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._width_((720));
self._height_((540));
$1=self._backgroundColor_("black");
self._createPacman();
self._createGhost();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startGame",{},$globals.SimplePacman)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startGame\x0a\x09self width: 720; \x0a\x09\x09height: 540;\x0a\x09\x09backgroundColor: 'black'.\x0a\x0a\x09self createPacman.\x0a\x09self createGhost.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width:", "height:", "backgroundColor:", "createPacman", "createGhost"]
}),
$globals.SimplePacman);

$core.addMethod(
$core.method({
selector: "step",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Key(){return $globals.Key||(typeof Key=="undefined"?nil:Key)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$7,$6,$5,$4,$3,$8;
self._whileKeyPressed_do_($recv($Key())._leftArrow(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._moveLeft();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whileKeyPressed:do:"]=1;
//>>excludeEnd("ctx");
self._whileKeyPressed_do_($recv($Key())._rightArrow(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._moveRight();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whileKeyPressed:do:"]=2;
//>>excludeEnd("ctx");
self._whileKeyPressed_do_($recv($Key())._upArrow(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._moveUp();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whileKeyPressed:do:"]=3;
//>>excludeEnd("ctx");
$1=self._whileKeyPressed_do_($recv($Key())._downArrow(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._moveDown();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
self._onMouseClickDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=window;
$7=self._mousePosition();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["mousePosition"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._x();
$5=$recv($6)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__comma(",");
$3=$recv($4).__comma($recv($recv(self._mousePosition())._y())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($2)._alert_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["alert:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
self._moveGhost();
$8=$recv(self["@pacman"])._collidesWith_(self["@ghost"]);
if($core.assert($8)){
self._end();
$recv(window)._alert_("You lost!");
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"step",{},$globals.SimplePacman)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "step\x0a\x09self whileKeyPressed: Key leftArrow do: [self moveLeft];\x0a\x09\x09whileKeyPressed: Key rightArrow do: [self moveRight];\x0a\x09\x09whileKeyPressed: Key upArrow do: [self moveUp];\x0a\x09\x09whileKeyPressed: Key downArrow do: [self moveDown].\x0a\x09self onMouseClickDo: [window alert: self mousePosition x asString , ',' , self mousePosition y asString].\x0a\x09self moveGhost.\x0a\x09(pacman collidesWith: ghost) ifTrue: [self end. window alert: 'You lost!']",
referencedClasses: ["Key"],
//>>excludeEnd("ide");
messageSends: ["whileKeyPressed:do:", "leftArrow", "moveLeft", "rightArrow", "moveRight", "upArrow", "moveUp", "downArrow", "moveDown", "onMouseClickDo:", "alert:", ",", "asString", "x", "mousePosition", "y", "moveGhost", "ifTrue:", "collidesWith:", "end"]
}),
$globals.SimplePacman);



$core.addClass('SmallCave', $globals.Game, ['ship', 'gravity', 'trail', 'upOrDown', 'bumps', 'goingUp', 'light', 'maxVariation', 'obstaclePositions', 'started', 'scrollSpeed'], 'Ludus-Examples');
$core.addMethod(
$core.method({
selector: "bumps",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$4,$3,$7,$6,$5,$1,$receiver;
$2=self["@bumps"];
if(($receiver = $2) == null || $receiver.isNil){
self["@bumps"]=$recv((0)._to_((25)))._collect_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(self._width()).__slash((25));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["/"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__star(x);
$7=$recv(self["@step"]).__slash((20));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["/"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._atRandom();
$5=$recv($6).__plus($recv(self["@step"]).__slash((20)));
return $recv($3).__at($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$1=self["@bumps"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bumps",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "bumps\x0a\x09^bumps ifNil: [bumps := (0 to: 25) collect: [:x | (self width / 25) * x @ ((step / 20) atRandom + (step / 20))]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "collect:", "to:", "@", "*", "/", "width", "+", "atRandom"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "detectCollision",
protocol: 'not yet classified',
fn: function (){
var self=this;
var imageData,greenComponent;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$4,$3,$2,$8,$7,$10,$9,$6,$5,$11,$12,$13,$16,$15,$14,$17;
$1=self["@context"];
$4=self._ship();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ship"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._centre();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["centre"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$8=self._ship();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ship"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$10=self._ship();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ship"]=3;
//>>excludeEnd("ctx");
$9=$recv($10)._height();
$6=$recv($7).__plus($9);
$5=$recv($6).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
imageData=$recv($1)._getImageData_y_width_height_($2,$5,(1),(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["getImageData:y:width:height:"]=1;
//>>excludeEnd("ctx");
$11=$recv(imageData)._data();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["data"]=1;
//>>excludeEnd("ctx");
greenComponent=$recv($11)._at_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$12=$recv(greenComponent).__gt((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[">"]=1;
//>>excludeEnd("ctx");
if($core.assert($12)){
self._end();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["end"]=1;
//>>excludeEnd("ctx");
};
$13=self["@context"];
$16=self._ship();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ship"]=4;
//>>excludeEnd("ctx");
$15=$recv($16)._centre();
$14=$recv($15)._x();
imageData=$recv($13)._getImageData_y_width_height_($14,$recv($recv(self._ship())._y()).__minus((1)),(1),(1));
greenComponent=$recv($recv(imageData)._data())._at_((1));
$17=$recv(greenComponent).__gt((0));
if($core.assert($17)){
self._end();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"detectCollision",{imageData:imageData,greenComponent:greenComponent},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "detectCollision\x0a    | imageData greenComponent |\x0a\x0a    imageData := context getImageData: self ship centre x y: self ship y + self ship height + 1 width: 1 height: 1.\x0a    greenComponent := imageData data at: 1.\x0a    greenComponent > 0 ifTrue: [self end].\x0a\x0a    imageData := context getImageData: self ship centre x y: self ship y - 1 width: 1 height: 1.\x0a    greenComponent := imageData data at: 1.\x0a    greenComponent > 0 ifTrue: [self end].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getImageData:y:width:height:", "x", "centre", "ship", "+", "y", "height", "at:", "data", "ifTrue:", ">", "end", "-"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "draw",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._started();
if($core.assert($1)){
self._clearCanvas();
self._drawCeiling();
self._drawFloor();
self._drawObstacles();
$2=self._drawSprite_(self["@ship"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["drawSprite:"]=1;
//>>excludeEnd("ctx");
$2;
$recv($recv(self._trail())._allButLast())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._drawSprite_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
} else {
self._drawWelcomeScreen();
};
self._onMouseClickDo_((function(){
self["@started"]=true;
return self["@started"];

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"draw",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "draw\x0a\x09self started \x0a\x09\x09ifFalse: [self drawWelcomeScreen]\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09self clearCanvas;\x0a\x09\x09\x09\x09drawCeiling; \x0a\x09\x09\x09\x09drawFloor;\x0a\x09\x09\x09\x09drawObstacles;\x0a\x09\x09\x09\x09drawSprite: ship.\x0a\x09\x09\x09self trail allButLast do: [:each | self drawSprite: each ]].\x0a\x09self onMouseClickDo: [started := true].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", "started", "drawWelcomeScreen", "clearCanvas", "drawCeiling", "drawFloor", "drawObstacles", "drawSprite:", "do:", "allButLast", "trail", "onMouseClickDo:"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "drawCeiling",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$6,$5,$4,$2,$9,$8,$7,$10,$11,$12,$13,$14,$15,$16;
$1=self["@context"];
$recv($1)._beginPath();
$recv($1)._moveTo_y_((-200),(0));
$3=$1;
$6=self._bumps();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bumps"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._first();
$4=$recv($5)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._lineTo_y_((-200),$4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lineTo:y:"]=1;
//>>excludeEnd("ctx");
$9=self._bumps();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bumps"]=2;
//>>excludeEnd("ctx");
$8=$recv($9)._allButFirst();
$7=$recv($8)._allButLast();
$recv($7)._do_((function(eachBump){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$10=self["@context"];
$11=$recv(eachBump)._x();
$12=$recv(eachBump)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["y"]=2;
//>>excludeEnd("ctx");
return $recv($10)._lineTo_y_($11,$12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lineTo:y:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachBump:eachBump},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$13=self["@context"];
$14=$13;
$15=self._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=1;
//>>excludeEnd("ctx");
$recv($14)._lineTo_y_($15,$recv($recv(self._bumps())._last())._y());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lineTo:y:"]=3;
//>>excludeEnd("ctx");
$recv($13)._lineTo_y_($recv(self._width()).__plus((200)),(0));
$recv($13)._closePath();
$recv($13)._fillStyle_("green");
$16=$recv($13)._fill();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawCeiling",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "drawCeiling\x0a\x09context\x0a\x09\x09beginPath;\x0a\x09\x09moveTo:-200 y: 0;\x0a\x09\x09lineTo: -200 y: self bumps first y.\x0a\x0a\x09self bumps allButFirst allButLast do: [:eachBump |\x0a\x09\x09context lineTo: eachBump x y: eachBump y].\x0a\x0a\x09context\x0a\x09\x09lineTo: self width y: self bumps last y;\x0a\x09\x09lineTo: self width + 200 y: 0;\x0a\x09\x09closePath;\x0a\x09\x09fillStyle: 'green';\x0a\x09\x09fill.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["beginPath", "moveTo:y:", "lineTo:y:", "y", "first", "bumps", "do:", "allButLast", "allButFirst", "x", "width", "last", "+", "closePath", "fillStyle:", "fill"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "drawFloor",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$9,$8,$7,$10,$6,$4,$13,$12,$11,$14,$15,$17,$18,$16,$19,$20,$21,$22,$23;
$1=self["@context"];
$recv($1)._beginPath();
$2=$1;
$3=self._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height"]=1;
//>>excludeEnd("ctx");
$recv($2)._moveTo_y_((-200),$3);
$5=$1;
$9=self._bumps();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bumps"]=1;
//>>excludeEnd("ctx");
$8=$recv($9)._first();
$7=$recv($8)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$10=self._light();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["light"]=1;
//>>excludeEnd("ctx");
$6=$recv($7).__plus($10);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._lineTo_y_((-200),$6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lineTo:y:"]=1;
//>>excludeEnd("ctx");
$13=self._bumps();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bumps"]=2;
//>>excludeEnd("ctx");
$12=$recv($13)._allButFirst();
$11=$recv($12)._allButLast();
$recv($11)._do_((function(eachBump){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$14=self["@context"];
$15=$recv(eachBump)._x();
$17=$recv(eachBump)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["y"]=2;
//>>excludeEnd("ctx");
$18=self._light();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["light"]=2;
//>>excludeEnd("ctx");
$16=$recv($17).__plus($18);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=2;
//>>excludeEnd("ctx");
return $recv($14)._lineTo_y_($15,$16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["lineTo:y:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachBump:eachBump},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$19=self["@context"];
$20=$19;
$21=self._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=1;
//>>excludeEnd("ctx");
$22=$recv($recv($recv(self._bumps())._last())._y()).__plus(self._light());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=3;
//>>excludeEnd("ctx");
$recv($20)._lineTo_y_($21,$22);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["lineTo:y:"]=3;
//>>excludeEnd("ctx");
$recv($19)._lineTo_y_($recv(self._width()).__plus((200)),self._height());
$recv($19)._closePath();
$recv($19)._fillStyle_("green");
$23=$recv($19)._fill();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawFloor",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "drawFloor\x0a\x09context\x0a\x09\x09beginPath;\x0a\x09\x09moveTo:-200 y: self height;\x0a\x09\x09lineTo: -200 y: self bumps first y + self light.\x0a\x0a\x09self bumps allButFirst allButLast do: [:eachBump |\x0a\x09\x09context lineTo: eachBump x y: eachBump y + self light].\x0a\x0a\x09context\x0a\x09\x09lineTo: self width y: self bumps last y + self light;\x0a\x09\x09lineTo: self width + 200 y: self height;\x0a\x09\x09closePath;\x0a\x09\x09fillStyle: 'green';\x0a\x09\x09fill.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["beginPath", "moveTo:y:", "height", "lineTo:y:", "+", "y", "first", "bumps", "light", "do:", "allButLast", "allButFirst", "x", "width", "last", "closePath", "fillStyle:", "fill"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "drawObstacles",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(self._obstaclePositions())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self["@context"];
$recv($1)._fillStyle_("green");
$2=$recv($1)._fillRect_y_width_height_($recv(each)._x(),$recv(each)._y(),(50),(100));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawObstacles",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "drawObstacles\x0a\x09self obstaclePositions do: [:each |\x0a\x09\x09context\x0a\x09\x09\x09fillStyle: 'green';\x0a\x09\x09\x09fillRect: each x y: each y width: 50 height: 100]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "obstaclePositions", "fillStyle:", "fillRect:y:width:height:", "x", "y"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "drawWelcomeScreen",
protocol: 'not yet classified',
fn: function (){
var self=this;
var image;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
image=self._newImage();
$recv(image)._src_("images/welcome.png");
$recv(self["@context"])._drawImage_x_y_(image,(40),(50));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawWelcomeScreen",{image:image},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "drawWelcomeScreen\x0a\x09|image|\x0a\x09image := self newImage.\x0a\x09image src: 'images/welcome.png'.\x0a\x09context drawImage: image x: 40 y: 50.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newImage", "src:", "drawImage:x:y:"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "end",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SmallCave.superclass.fn.prototype._end.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=window;
$2=$recv("OUCH! Your score is ".__comma($recv(self._stepCount())._asString())).__comma(". Refresh the page to try again!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._alert_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"end",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "end\x0a\x09super end.\x0a\x09window alert: 'OUCH! Your score is ' , self stepCount asString , '. Refresh the page to try again!'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["end", "alert:", ",", "asString", "stepCount"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "goingUp",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$5,$4,$3,$2,$6,$7,$receiver;
$1=self["@goingUp"];
if(($receiver = $1) == null || $receiver.isNil){
self["@goingUp"]=false;
self["@goingUp"];
} else {
$1;
};
$5=self._bumps();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bumps"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["last"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__lt((0));
if($core.assert($2)){
self["@goingUp"]=false;
self["@goingUp"];
};
$6=$recv($recv($recv($recv(self._bumps())._last())._y()).__plus(self._light())).__gt(self._height());
if($core.assert($6)){
self["@goingUp"]=true;
self["@goingUp"];
};
$7=self["@goingUp"];
return $7;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"goingUp",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "goingUp\x0a\x09goingUp ifNil: [goingUp := false].\x0a\x09self bumps last y < 0 ifTrue: [goingUp := false].\x0a\x09(self bumps last y + self light) > self height ifTrue: [goingUp := true].\x0a\x09^ goingUp",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "ifTrue:", "<", "y", "last", "bumps", ">", "+", "light", "height"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "imageDataAt:",
protocol: 'not yet classified',
fn: function (anIndex){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return imageData.data[anIndex];;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"imageDataAt:",{anIndex:anIndex},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex"],
source: "imageDataAt: anIndex\x0a\x09<return imageData.data[anIndex];>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "light",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@light"];
if(($receiver = $2) == null || $receiver.isNil){
self["@light"]=$recv(self._height()).__star((0.75));
$1=self["@light"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"light",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "light\x0a\x09^ light ifNil: [\x09light := (self height * 0.75) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "*", "height"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "maxVariation",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@maxVariation"];
if(($receiver = $2) == null || $receiver.isNil){
self["@maxVariation"]=(2);
$1=self["@maxVariation"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"maxVariation",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "maxVariation\x0a\x09^ maxVariation ifNil: [maxVariation := 2]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "moveShip",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$6,$5,$4;
self._whileMouseUpDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._ship();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["ship"]=1;
//>>excludeEnd("ctx");
return $recv($1)._increaseSpeed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._whileMouseDownDo_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._ship();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["ship"]=2;
//>>excludeEnd("ctx");
return $recv($2)._decreaseSpeed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$3=self._ship();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ship"]=3;
//>>excludeEnd("ctx");
$6=self._ship();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ship"]=4;
//>>excludeEnd("ctx");
$5=$recv($6)._y();
$4=$recv($5).__plus($recv($recv(self._ship())._speed()).__star(self["@gravity"]));
$recv($3)._y_($4);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveShip",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "moveShip\x0a\x09self whileMouseUpDo: [self ship increaseSpeed].\x0a\x09self whileMouseDownDo: [self ship decreaseSpeed].\x0a\x09self ship y: (self ship y + (self ship speed * gravity))",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileMouseUpDo:", "increaseSpeed", "ship", "whileMouseDownDo:", "decreaseSpeed", "y:", "+", "y", "*", "speed"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "newImage",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(document)._createElement_("img");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newImage",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newImage\x0a    ^ document createElement: 'img'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createElement:"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "obstaclePositions",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$6,$5,$4,$9,$8,$7,$3,$14,$13,$12,$11,$18,$17,$16,$15,$10,$1,$receiver;
$2=self["@obstaclePositions"];
if(($receiver = $2) == null || $receiver.isNil){
$6=self._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
$9=self._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height"]=1;
//>>excludeEnd("ctx");
$8=$recv($9).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__at($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$14=self._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=2;
//>>excludeEnd("ctx");
$13=$recv($14).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=3;
//>>excludeEnd("ctx");
$12=$recv($13)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=3;
//>>excludeEnd("ctx");
$11=$recv($12).__plus(self._width());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$18=self._height();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["height"]=2;
//>>excludeEnd("ctx");
$17=$recv($18).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=4;
//>>excludeEnd("ctx");
$16=$recv($17)._atRandom();
$15=$recv($16).__plus($recv(self._height()).__slash((2)));
$10=$recv($11).__at($15);
self["@obstaclePositions"]=[$3,$10];
$1=self["@obstaclePositions"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"obstaclePositions",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "obstaclePositions\x0a\x09^obstaclePositions ifNil: [obstaclePositions := \x0a                                  { (self width / 2) atRandom @ (self height / 2) atRandom. ((self width / 2) atRandom + self width) @ ((self height / 2) atRandom + (self height / 2)) } ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "@", "atRandom", "/", "width", "height", "+"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "scrollSpeed",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@scrollSpeed"];
if(($receiver = $2) == null || $receiver.isNil){
self["@scrollSpeed"]=(5);
$1=self["@scrollSpeed"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scrollSpeed",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scrollSpeed\x0a\x09^ scrollSpeed ifNil: [scrollSpeed := 5]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "ship",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Ship(){return $globals.Ship||(typeof Ship=="undefined"?nil:Ship)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@ship"];
if(($receiver = $2) == null || $receiver.isNil){
self["@ship"]=$recv($recv($Ship())._new())._centre_((105).__at($recv(self._height()).__slash((2))));
$1=self["@ship"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ship",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ship\x0a\x09^ ship ifNil: [ship := Ship new centre: 105 @ (self height / 2)]",
referencedClasses: ["Ship"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "centre:", "new", "@", "/", "height"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "startGame",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@fps"]=(30);
self["@gravity"]=(1.1);
self._width_((720));
self._height_((540));
$1=self._backgroundColor_("black");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startGame",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startGame\x0a\x09fps := 30.\x0a\x09gravity := 1.1.\x0a\x0a\x09self width: 720; \x0a\x09\x09height: 540;\x0a\x09\x09backgroundColor: 'black'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width:", "height:", "backgroundColor:"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "started",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@started"];
if(($receiver = $2) == null || $receiver.isNil){
self["@started"]=false;
$1=self["@started"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"started",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "started\x0a\x09^ started ifNil: [started := false]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "step",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._started();
if($core.assert($1)){
self._detectCollision();
self._updateTrail();
self._updateBumps();
self._updateObstacles();
self._updateDifficulty();
$2=self._moveShip();
$2;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"step",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "step\x0a\x09self started ifTrue: [self detectCollision; updateTrail; updateBumps; updateObstacles; updateDifficulty; moveShip]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "started", "detectCollision", "updateTrail", "updateBumps", "updateObstacles", "updateDifficulty", "moveShip"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "trail",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Sprite(){return $globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$1,$receiver;
$2=self["@trail"];
if(($receiver = $2) == null || $receiver.isNil){
self["@trail"]=[];
self["@trail"];
(0)._to_do_((10),(function(i){
var ghostBall;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
ghostBall=$recv($recv($Sprite())._new())._spriteSheet_("images/trail.png");
ghostBall;
$3=ghostBall;
$4=(0).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$5=(10).__at((10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$recv($3)._addFrameGroupNamed_origin_size_frameCount_("trail",$4,$5,(1));
$recv(ghostBall)._position_($recv($recv(i).__star((10))).__at($recv(self._height()).__slash((2))));
return $recv(self["@trail"])._add_(ghostBall);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i,ghostBall:ghostBall},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$1=self["@trail"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trail",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "trail\x0a\x09^ trail ifNil: [\x0a        \x09trail := #().\x0a          \x090 to: 10 do: [:i |\x0a                             |ghostBall|\x0a                              ghostBall := Sprite new spriteSheet: 'images/trail.png'.\x0a                              ghostBall addFrameGroupNamed: 'trail' origin: (0@0) size: (10@10) frameCount: 1.\x0a                              ghostBall position: (i * 10) @ (self height / 2).\x0a                              trail add: ghostBall.\x0a                             ].\x0a\x09\x09trail]",
referencedClasses: ["Sprite"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "to:do:", "spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "position:", "*", "/", "height", "add:"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "updateBumps",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$3,$2,$7,$6,$9,$8,$5,$1,$10,$13,$12,$15,$14,$11,$17,$16,$18,$21,$20,$19,$22,$24,$23;
$4=self._bumps();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bumps"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._second();
$2=$recv($3)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$7=self._scrollSpeed();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scrollSpeed"]=1;
//>>excludeEnd("ctx");
$6=(0).__minus($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=2;
//>>excludeEnd("ctx");
$9=self._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=1;
//>>excludeEnd("ctx");
$8=$recv($9).__slash((25));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__minus($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__lt($5);
if($core.assert($1)){
var y;
$10=self._goingUp();
if($core.assert($10)){
$13=$recv(self["@bumps"])._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["last"]=1;
//>>excludeEnd("ctx");
$12=$recv($13)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$15=self._maxVariation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["maxVariation"]=1;
//>>excludeEnd("ctx");
$14=$recv($15)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
$11=$recv($12).__plus($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$17=self._maxVariation();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["maxVariation"]=2;
//>>excludeEnd("ctx");
$16=$recv($17).__star((2));
y=$recv($11).__minus($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=3;
//>>excludeEnd("ctx");
} else {
y=$recv($recv($recv(self["@bumps"])._last())._y()).__plus($recv(self._maxVariation())._atRandom());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
};
y;
$18=self._bumps();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bumps"]=2;
//>>excludeEnd("ctx");
$21=self._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=2;
//>>excludeEnd("ctx");
$20=$recv($21).__plus($recv(self._width()).__slash((25)));
$19=$recv($20).__at(y);
$recv($18)._add_($19);
$22=self._bumps();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bumps"]=3;
//>>excludeEnd("ctx");
$24=self._bumps();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["bumps"]=4;
//>>excludeEnd("ctx");
$23=$recv($24)._first();
$recv($22)._remove_($23);
};
$recv(self._bumps())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._x_($recv($recv(each)._x()).__minus(self._scrollSpeed()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateBumps",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateBumps\x0a\x09self bumps second x < ( 0 - self scrollSpeed - (self width / 25))\x0a\x09\x09ifTrue: [|y|\x0a                         y := self \x0a                         \x09goingUp \x0a                         \x09\x09ifTrue: [bumps last y + self maxVariation atRandom - (self maxVariation * 2)]\x0a                         \x09\x09ifFalse: [bumps last y + self maxVariation atRandom].\x0a                         self bumps add: (self width + (self width / 25) @ y).\x0a                         self bumps remove: self bumps first].\x0a\x09self bumps do: [:each | each x: each x - self scrollSpeed].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "<", "x", "second", "bumps", "-", "scrollSpeed", "/", "width", "ifTrue:ifFalse:", "goingUp", "+", "y", "last", "atRandom", "maxVariation", "*", "add:", "@", "remove:", "first", "do:", "x:"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "updateDifficulty",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$4,$5,$8,$7,$6,$9,$10,$11,$12,$15,$16,$14,$13;
$3=self._stepCount();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stepCount"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__backslash_backslash((200));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["\x5c\x5c"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$4=[false,true];
$5=(2)._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
self["@goingUp"]=$recv($4)._at_($5);
self["@goingUp"];
};
$8=self._stepCount();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stepCount"]=2;
//>>excludeEnd("ctx");
$7=$recv($8).__backslash_backslash((50));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["\x5c\x5c"]=2;
//>>excludeEnd("ctx");
$6=$recv($7).__eq((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=2;
//>>excludeEnd("ctx");
if($core.assert($6)){
$9=self._light();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["light"]=1;
//>>excludeEnd("ctx");
self["@light"]=$recv($9).__minus((1));
self["@light"];
};
$10=$recv(self._light()).__lt((20));
if($core.assert($10)){
self["@light"]=(20);
self["@light"];
};
$11=$recv($recv(self._stepCount()).__backslash_backslash((1200))).__eq((0));
if($core.assert($11)){
self["@maxVariation"]=$recv(self._maxVariation()).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
self["@maxVariation"];
$12=self._obstaclePositions();
$15=self._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=1;
//>>excludeEnd("ctx");
$16=$recv(self._width())._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=2;
//>>excludeEnd("ctx");
$14=$recv($15).__plus($16);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
$13=$recv($14).__at($recv(self._height())._atRandom());
$recv($12)._add_($13);
self["@scrollSpeed"]=$recv(self._scrollSpeed()).__plus((1));
self["@scrollSpeed"];
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateDifficulty",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateDifficulty\x0a\x09(self stepCount \x5c\x5c 200) = 0\x0a\x09\x09ifTrue: [goingUp := {false. true} at: 2 atRandom].\x0a\x09(self stepCount \x5c\x5c 50 = 0)\x0a\x09\x09ifTrue: [light := self light - 1].\x0a\x09self light < 20 ifTrue: [light := 20].\x0a\x09(self stepCount \x5c\x5c 1200) = 0\x0a\x09\x09ifTrue: [\x0a                  \x09maxVariation := self maxVariation + 1.\x0a                        self obstaclePositions add: ((self width + self width atRandom) @ (self height atRandom)).\x0a                        scrollSpeed := self scrollSpeed + 1].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "\x5c\x5c", "stepCount", "at:", "atRandom", "-", "light", "<", "+", "maxVariation", "add:", "obstaclePositions", "@", "width", "height", "scrollSpeed"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "updateObstacles",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $4,$3,$2,$1,$5,$8,$9,$7,$6,$10,$12,$11;
$4=self._obstaclePositions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["obstaclePositions"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["first"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__lt((-100));
if($core.assert($1)){
$5=self._obstaclePositions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["obstaclePositions"]=2;
//>>excludeEnd("ctx");
$8=self._width();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["width"]=1;
//>>excludeEnd("ctx");
$9=$recv(self._width())._atRandom();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atRandom"]=1;
//>>excludeEnd("ctx");
$7=$recv($8).__plus($9);
$6=$recv($7).__at($recv(self._height())._atRandom());
$recv($5)._add_($6);
$10=self._obstaclePositions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["obstaclePositions"]=3;
//>>excludeEnd("ctx");
$12=self._obstaclePositions();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["obstaclePositions"]=4;
//>>excludeEnd("ctx");
$11=$recv($12)._first();
$recv($10)._remove_($11);
};
$recv(self._obstaclePositions())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._x_($recv($recv(each)._x()).__minus(self._scrollSpeed()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateObstacles",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateObstacles\x0a\x09self obstaclePositions first x < -100\x0a\x09\x09ifTrue: [\x0a                         self obstaclePositions add: ((self width + self width atRandom) @ (self height atRandom)).\x0a                         self obstaclePositions remove: self obstaclePositions first].\x0a\x09self obstaclePositions do: [:each | each x: each x - self scrollSpeed].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "<", "x", "first", "obstaclePositions", "add:", "@", "+", "width", "atRandom", "height", "remove:", "do:", "x:", "-", "scrollSpeed"]
}),
$globals.SmallCave);

$core.addMethod(
$core.method({
selector: "updateTrail",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$5,$4,$3,$7,$6;
$2=self._trail();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["trail"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._allButLast();
$recv($1)._withIndexDo_((function(each,i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=self._trail();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["trail"]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._at_($recv(i).__plus((1)));
$3=$recv($4)._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["y"]=1;
//>>excludeEnd("ctx");
return $recv(each)._y_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$7=self._trail();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["trail"]=3;
//>>excludeEnd("ctx");
$6=$recv($7)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["last"]=1;
//>>excludeEnd("ctx");
$recv($6)._centre_($recv($recv($recv(self._trail())._last())._x()).__at($recv($recv(self._ship())._centre())._y()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateTrail",{},$globals.SmallCave)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateTrail\x0a\x09self trail allButLast withIndexDo: [:each :i | each y: (self trail at: i + 1) y].\x0a\x09self trail last centre: self trail last x @ self ship centre y.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "allButLast", "trail", "y:", "y", "at:", "+", "centre:", "last", "@", "x", "centre", "ship"]
}),
$globals.SmallCave);



$core.addClass('Sokoban', $globals.Game, ['guy', 'walls', 'stepSize', 'boxes', 'exits', 'lastMove', 'floor', 'currentLevel', 'directionDictionary', 'guyOffsetDictionary', 'boxOffsetDictionary'], 'Ludus-Examples');
$core.addMethod(
$core.method({
selector: "advanceLevel",
protocol: 'levels',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$5,$4,$3,$1,$receiver;
$recv(self._soundNamed_("applause"))._play();
$2=self._class();
$5=$recv(self["@currentLevel"]).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._asString();
$3="level".__comma($4);
$1=$recv($2)._methodAt_($3);
if(($receiver = $1) == null || $receiver.isNil){
self._end();
} else {
self["@currentLevel"]=$recv(self["@currentLevel"]).__plus((1));
self["@currentLevel"];
};
self._clearLevel();
self._createLevel();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"advanceLevel",{},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "advanceLevel\x0a\x09(self soundNamed: 'applause') play.\x0a\x09(self class methodAt: 'level' , (currentLevel + 1) asString) \x0a\x09\x09ifNil: [self end]\x0a\x09\x09ifNotNil:\x09[currentLevel := currentLevel + 1].\x0a\x09self clearLevel.\x0a\x09self createLevel.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["play", "soundNamed:", "ifNil:ifNotNil:", "methodAt:", "class", ",", "asString", "+", "end", "clearLevel", "createLevel"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "boxOffsetDictionary",
protocol: 'movement',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$1,$receiver;
$2=self["@boxOffsetDictionary"];
if(($receiver = $2) == null || $receiver.isNil){
$3=(0).__at((5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$4=(0).__at((-5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$5=(-5).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
self["@boxOffsetDictionary"]=$globals.HashedCollection._newFromPairs_(["Down",$3,"Up",$4,"Left",$5,"Right",(5).__at((0))]);
$1=self["@boxOffsetDictionary"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"boxOffsetDictionary",{},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "boxOffsetDictionary\x0a\x09^ boxOffsetDictionary ifNil: [ boxOffsetDictionary := #{'Down' -> (0@5). 'Up' -> (0@ -5). 'Left' -> (-5@0). 'Right' -> (5@0)} ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "@"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "boxes",
protocol: 'sprite collections',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@boxes"];
if(($receiver = $2) == null || $receiver.isNil){
self["@boxes"]=[];
$1=self["@boxes"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"boxes",{},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "boxes\x0a\x09^ boxes ifNil: [boxes := #()]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "clearLevel",
protocol: 'levels',
fn: function (){
var self=this;
self["@boxes"]=[];
self["@walls"]=[];
self["@exits"]=[];
self["@floor"]=[];
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clearLevel\x0a\x09boxes := #().\x0a\x09walls := #().\x0a\x09exits := #().\x0a\x09floor := #().",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "createBoxes",
protocol: 'sprite creation',
fn: function (){
var self=this;
var box;
function $Sprite(){return $globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$6,$5,$4,$7,$8,$11,$10,$9;
$recv(self._currentLevel())._withIndexDo_((function(eachRow,y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(eachRow)._includes_((7));
if($core.assert($1)){
return $recv(eachRow)._withIndexDo_((function(eachColumn,x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=$recv(eachColumn).__eq((7));
if($core.assert($2)){
box=$recv($recv($Sprite())._new())._spriteSheet_("images/box.png");
box;
$3=box;
$6=$recv((6)._atRandom()).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__star((28));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$7=(28).__at((28));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$recv($3)._addFrameGroupNamed_origin_size_frameCount_("still",$4,$7,(1));
$8=box;
$11=$recv(x).__star((30));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$10=$recv($11).__minus((15));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["-"]=2;
//>>excludeEnd("ctx");
$9=$recv($10).__at($recv($recv(y).__star((30))).__minus((15)));
$recv($8)._centre_($9);
return $recv(self._boxes())._add_(box);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({eachColumn:eachColumn,x:x},$ctx2,3)});
//>>excludeEnd("ctx");
}));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachRow:eachRow,y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["withIndexDo:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createBoxes",{box:box},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createBoxes\x0a\x09|box|\x0a\x0a\x09self currentLevel\x0a\x09\x09withIndexDo: [:eachRow :y | \x0a\x09\x09\x09(eachRow includes: 7) \x0a                              \x09ifTrue: \x0a                              \x09\x09[eachRow withIndexDo: [:eachColumn :x |\x0a\x09\x09\x09\x09\x09\x09eachColumn = 7 \x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [\x0a                                                        \x09box := Sprite new spriteSheet: 'images/box.png'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09box addFrameGroupNamed: 'still' origin: (((6 atRandom - 1) * 28)@0) size: (28@28) frameCount: 1.\x0a\x09\x09\x09\x09\x09\x09\x09\x09box centre: ((x * 30) - 15) @ ((y * 30) - 15).\x0a\x09\x09\x09\x09\x09\x09\x09\x09self boxes add: box ]]]].",
referencedClasses: ["Sprite"],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "currentLevel", "ifTrue:", "includes:", "=", "spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "*", "-", "atRandom", "centre:", "add:", "boxes"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "createExits",
protocol: 'sprite creation',
fn: function (){
var self=this;
var exit;
function $Sprite(){return $globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$9,$8,$7;
$recv(self._currentLevel())._withIndexDo_((function(eachRow,y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(eachRow)._includes_((9));
if($core.assert($1)){
return $recv(eachRow)._withIndexDo_((function(eachColumn,x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=$recv(eachColumn).__eq((9));
if($core.assert($2)){
exit=$recv($recv($Sprite())._new())._spriteSheet_("images/exit.png");
exit;
$3=exit;
$4=(0).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$5=(28).__at((28));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$recv($3)._addFrameGroupNamed_origin_size_frameCount_("exit",$4,$5,(1));
$6=exit;
$9=$recv(x).__star((30));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$8=$recv($9).__minus((15));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$7=$recv($8).__at($recv($recv(y).__star((30))).__minus((15)));
$recv($6)._centre_($7);
return $recv(self._exits())._add_(exit);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({eachColumn:eachColumn,x:x},$ctx2,3)});
//>>excludeEnd("ctx");
}));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachRow:eachRow,y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["withIndexDo:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createExits",{exit:exit},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createExits\x0a\x09|exit|\x0a\x0a\x09self currentLevel\x0a\x09\x09withIndexDo: [:eachRow :y | \x0a\x09\x09\x09(eachRow includes: 9) \x0a                              \x09ifTrue: \x0a                              \x09\x09[eachRow withIndexDo: [:eachColumn :x |\x0a\x09\x09\x09\x09\x09\x09eachColumn = 9 \x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [\x0a                                                        \x09exit := Sprite new spriteSheet: 'images/exit.png'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09exit addFrameGroupNamed: 'exit' origin: (0@0) size: (28@28) frameCount: 1.\x0a\x09\x09\x09\x09\x09\x09\x09\x09exit centre: ((x * 30) - 15) @ ((y * 30) - 15).\x0a\x09\x09\x09\x09\x09\x09\x09\x09self exits add: exit ]]]].",
referencedClasses: ["Sprite"],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "currentLevel", "ifTrue:", "includes:", "=", "spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "centre:", "-", "*", "add:", "exits"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "createFloor",
protocol: 'sprite creation',
fn: function (){
var self=this;
var tile;
function $Sprite(){return $globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$9,$8,$7;
$recv(self._currentLevel())._withIndexDo_((function(eachRow,y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(eachRow)._includes_((1));
if($core.assert($1)){
return $recv(eachRow)._withIndexDo_((function(eachColumn,x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=$recv(eachColumn).__gt((1));
if($core.assert($2)){
tile=$recv($recv($Sprite())._new())._spriteSheet_("images/floor.png");
tile;
$3=tile;
$4=(0).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$5=(30).__at((30));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$recv($3)._addFrameGroupNamed_origin_size_frameCount_("tile",$4,$5,(1));
$6=tile;
$9=$recv(x).__star((30));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$8=$recv($9).__minus((15));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$7=$recv($8).__at($recv($recv(y).__star((30))).__minus((15)));
$recv($6)._centre_($7);
return $recv(self._floor())._add_(tile);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({eachColumn:eachColumn,x:x},$ctx2,3)});
//>>excludeEnd("ctx");
}));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachRow:eachRow,y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["withIndexDo:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createFloor",{tile:tile},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createFloor\x0a\x09|tile|\x0a\x09self currentLevel\x0a\x09\x09withIndexDo: [:eachRow :y | \x0a\x09\x09\x09(eachRow includes: 1) \x0a                              \x09ifTrue: \x0a                              \x09\x09[eachRow withIndexDo: [:eachColumn :x |\x0a\x09\x09\x09\x09\x09\x09eachColumn > 1\x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [\x0a                                                        \x09tile := Sprite new spriteSheet: 'images/floor.png'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09tile addFrameGroupNamed: 'tile' origin: (0@0) size: (30@30) frameCount: 1.\x0a\x09\x09\x09\x09\x09\x09\x09\x09tile centre: ((x * 30) - 15) @ ((y * 30) - 15).\x0a\x09\x09\x09\x09\x09\x09\x09\x09self floor add: tile]]]].",
referencedClasses: ["Sprite"],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "currentLevel", "ifTrue:", "includes:", ">", "spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "centre:", "-", "*", "add:", "floor"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "createGuy",
protocol: 'sprite creation',
fn: function (){
var self=this;
function $Sprite(){return $globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35;
self["@guy"]=$recv($recv($Sprite())._new())._spriteSheet_("images/guy.png");
$1=self["@guy"];
$2=(0).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$3=(25).__at((25));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$recv($1)._addFrameGroupNamed_origin_size_frameCount_("walkDown",$2,$3,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=1;
//>>excludeEnd("ctx");
$4=self["@guy"];
$5=(0).__at((25));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
$6=(25).__at((25));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=4;
//>>excludeEnd("ctx");
$recv($4)._addFrameGroupNamed_origin_size_frameCount_("walkUp",$5,$6,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=2;
//>>excludeEnd("ctx");
$7=self["@guy"];
$8=(0).__at((50));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=5;
//>>excludeEnd("ctx");
$9=(25).__at((25));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=6;
//>>excludeEnd("ctx");
$recv($7)._addFrameGroupNamed_origin_size_frameCount_("walkLeft",$8,$9,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=3;
//>>excludeEnd("ctx");
$10=self["@guy"];
$11=(0).__at((75));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=7;
//>>excludeEnd("ctx");
$12=(25).__at((25));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=8;
//>>excludeEnd("ctx");
$recv($10)._addFrameGroupNamed_origin_size_frameCount_("walkRight",$11,$12,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=4;
//>>excludeEnd("ctx");
$13=self["@guy"];
$14=(50).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=9;
//>>excludeEnd("ctx");
$15=(25).__at((25));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=10;
//>>excludeEnd("ctx");
$recv($13)._addFrameGroupNamed_origin_size_frameCount_("stillDown",$14,$15,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=5;
//>>excludeEnd("ctx");
$16=self["@guy"];
$17=(50).__at((25));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=11;
//>>excludeEnd("ctx");
$18=(25).__at((25));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=12;
//>>excludeEnd("ctx");
$recv($16)._addFrameGroupNamed_origin_size_frameCount_("stillUp",$17,$18,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=6;
//>>excludeEnd("ctx");
$19=self["@guy"];
$20=(50).__at((50));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=13;
//>>excludeEnd("ctx");
$21=(25).__at((25));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=14;
//>>excludeEnd("ctx");
$recv($19)._addFrameGroupNamed_origin_size_frameCount_("stillLeft",$20,$21,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=7;
//>>excludeEnd("ctx");
$22=self["@guy"];
$23=(50).__at((75));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=15;
//>>excludeEnd("ctx");
$24=(25).__at((25));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=16;
//>>excludeEnd("ctx");
$recv($22)._addFrameGroupNamed_origin_size_frameCount_("stillRight",$23,$24,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=8;
//>>excludeEnd("ctx");
$25=self["@guy"];
$26=(75).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=17;
//>>excludeEnd("ctx");
$27=(25).__at((25));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=18;
//>>excludeEnd("ctx");
$recv($25)._addFrameGroupNamed_origin_size_frameCount_("pushDown",$26,$27,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=9;
//>>excludeEnd("ctx");
$28=self["@guy"];
$29=(75).__at((25));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=19;
//>>excludeEnd("ctx");
$30=(25).__at((25));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=20;
//>>excludeEnd("ctx");
$recv($28)._addFrameGroupNamed_origin_size_frameCount_("pushUp",$29,$30,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=10;
//>>excludeEnd("ctx");
$31=self["@guy"];
$32=(75).__at((50));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=21;
//>>excludeEnd("ctx");
$33=(25).__at((25));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=22;
//>>excludeEnd("ctx");
$recv($31)._addFrameGroupNamed_origin_size_frameCount_("pushLeft",$32,$33,(2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addFrameGroupNamed:origin:size:frameCount:"]=11;
//>>excludeEnd("ctx");
$34=self["@guy"];
$35=(75).__at((75));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=23;
//>>excludeEnd("ctx");
$recv($34)._addFrameGroupNamed_origin_size_frameCount_("pushRight",$35,(25).__at((25)),(2));
$recv(self["@guy"])._centre_(self._startPositionFor_(self._currentLevel()));
$recv(self["@guy"])._frameRate_((2));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createGuy",{},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createGuy\x0a\x09guy := Sprite new spriteSheet: 'images/guy.png'.\x0a\x09guy addFrameGroupNamed: 'walkDown' origin: (0@0) size: (25@25) frameCount: 2.\x0a\x09guy addFrameGroupNamed: 'walkUp' origin: (0@25) size: (25@25) frameCount: 2.\x0a\x09guy addFrameGroupNamed: 'walkLeft' origin: (0@50) size: (25@25) frameCount: 2.\x0a\x09guy addFrameGroupNamed: 'walkRight' origin: (0@75) size: (25@25) frameCount: 2.\x0a\x0a\x09guy addFrameGroupNamed: 'stillDown' origin: (50@0) size: (25@25) frameCount: 1.\x0a\x09guy addFrameGroupNamed: 'stillUp' origin: (50@25) size: (25@25) frameCount: 1.\x0a\x09guy addFrameGroupNamed: 'stillLeft' origin: (50@50) size: (25@25) frameCount: 1.\x0a\x09guy addFrameGroupNamed: 'stillRight' origin: (50@75) size: (25@25) frameCount: 1.\x0a\x0a\x09guy addFrameGroupNamed: 'pushDown' origin: (75@0) size: (25@25) frameCount: 2.\x0a\x09guy addFrameGroupNamed: 'pushUp' origin: (75@25) size: (25@25) frameCount: 2.\x0a\x09guy addFrameGroupNamed: 'pushLeft' origin: (75@50) size: (25@25) frameCount: 2.\x0a\x09guy addFrameGroupNamed: 'pushRight' origin: (75@75) size: (25@25) frameCount: 2.\x0a\x0a\x09guy centre: (self startPositionFor: self currentLevel).\x0a\x0a\x09guy frameRate: 2.",
referencedClasses: ["Sprite"],
//>>excludeEnd("ide");
messageSends: ["spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "centre:", "startPositionFor:", "currentLevel", "frameRate:"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "createLevel",
protocol: 'levels',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._createFloor();
self._createExits();
self._createGuy();
self._createBoxes();
$1=self._createWalls();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createLevel",{},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createLevel\x0a\x09self createFloor;\x0a\x09\x09createExits;\x0a\x09\x09createGuy;\x0a\x09\x09createBoxes;\x0a\x09\x09createWalls.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createFloor", "createExits", "createGuy", "createBoxes", "createWalls"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "createWalls",
protocol: 'sprite creation',
fn: function (){
var self=this;
var wall;
function $Sprite(){return $globals.Sprite||(typeof Sprite=="undefined"?nil:Sprite)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$8,$7,$9;
$recv(self._currentLevel())._withIndexDo_((function(eachRow,y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(eachRow)._includes_((1));
if($core.assert($1)){
return $recv(eachRow)._withIndexDo_((function(eachColumn,x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=$recv(eachColumn).__eq((1));
if($core.assert($2)){
wall=$recv($recv($Sprite())._new())._spriteSheet_("images/wall.png");
wall;
$3=wall;
$4=(0).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$recv($3)._addFrameGroupNamed_origin_size_frameCount_("wall",$4,(30).__at((30)),(1));
$5=wall;
$6=$5;
$8=$recv(x).__star((30));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$7=$recv($8).__minus((30));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$recv($6)._x_($7);
$9=$recv($5)._y_($recv($recv(y).__star((30))).__minus((30)));
$9;
return $recv(self._walls())._add_(wall);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({eachColumn:eachColumn,x:x},$ctx2,3)});
//>>excludeEnd("ctx");
}));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachRow:eachRow,y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["withIndexDo:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createWalls",{wall:wall},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createWalls\x0a\x09|wall|\x0a\x0a\x09self currentLevel\x0a\x09\x09withIndexDo: [:eachRow :y | \x0a\x09\x09\x09(eachRow includes: 1) \x0a                              \x09ifTrue: \x0a                              \x09\x09[eachRow withIndexDo: [:eachColumn :x |\x0a\x09\x09\x09\x09\x09\x09eachColumn = 1 \x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [\x0a                                                        \x09wall := Sprite new spriteSheet: 'images/wall.png'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09wall addFrameGroupNamed: 'wall' origin: (0@0) size: (30@30) frameCount: 1.\x0a\x09\x09\x09\x09\x09\x09\x09\x09wall x: ((x * 30) - 30); y: ((y * 30) - 30).\x0a\x09\x09\x09\x09\x09\x09\x09\x09self walls add: wall ]]]].",
referencedClasses: ["Sprite"],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "currentLevel", "ifTrue:", "includes:", "=", "spriteSheet:", "new", "addFrameGroupNamed:origin:size:frameCount:", "@", "x:", "-", "*", "y:", "add:", "walls"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "currentLevel",
protocol: 'levels',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self["@currentLevel"];
if(($receiver = $1) == null || $receiver.isNil){
self["@currentLevel"]=(1);
self["@currentLevel"];
} else {
$1;
};
$2=self._perform_("level".__comma($recv(self["@currentLevel"])._asString()));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currentLevel",{},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentLevel\x0a\x09currentLevel ifNil: [currentLevel := 1].\x0a\x09^ self perform: 'level' , currentLevel asString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "perform:", ",", "asString"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "directionDictionary",
protocol: 'movement',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@directionDictionary"];
if(($receiver = $2) == null || $receiver.isNil){
self["@directionDictionary"]=$globals.HashedCollection._newFromPairs_(["Down","bottom","Up","top","Left","left","Right","right"]);
$1=self["@directionDictionary"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"directionDictionary",{},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "directionDictionary\x0a\x09^ directionDictionary ifNil: [ directionDictionary := #{'Down' -> 'bottom'. 'Up' -> 'top'. 'Left' -> 'left'. 'Right' -> 'right'} ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._clearCanvas();
$recv(self._floor())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._drawSprite_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["drawSprite:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$recv(self._walls())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._drawSprite_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["drawSprite:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=2;
//>>excludeEnd("ctx");
$recv(self._exits())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._drawSprite_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["drawSprite:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=3;
//>>excludeEnd("ctx");
self._drawSprite_(self["@guy"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["drawSprite:"]=4;
//>>excludeEnd("ctx");
$recv(self._boxes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._drawSprite_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"draw",{},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "draw\x0a\x09self clearCanvas.\x0a        self floor do: [:each | self drawSprite: each].\x0a\x09self walls do: [:each | self drawSprite: each].\x0a\x09self exits do: [:each | self drawSprite: each].\x0a\x09self drawSprite: guy.\x0a\x09self boxes do: [:each | self drawSprite: each].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["clearCanvas", "do:", "floor", "drawSprite:", "walls", "exits", "boxes"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "end",
protocol: 'control',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.Sokoban.superclass.fn.prototype._end.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(self._soundNamed_("factory"))._stop();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"end",{},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "end\x0a\x09super end.\x0a\x09(self soundNamed: 'factory') stop.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["end", "stop", "soundNamed:"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "exits",
protocol: 'sprite collections',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@exits"];
if(($receiver = $2) == null || $receiver.isNil){
self["@exits"]=[];
$1=self["@exits"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"exits",{},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "exits\x0a\x09^ exits ifNil: [exits := #()]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "floor",
protocol: 'sprite collections',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@floor"];
if(($receiver = $2) == null || $receiver.isNil){
self["@floor"]=[];
$1=self["@floor"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"floor",{},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "floor\x0a\x09^ floor ifNil: [floor := #()]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "go:",
protocol: 'movement',
fn: function (aDirection){
var self=this;
var side,offset;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1,$5,$6,$4,$8,$9,$7,$10,$11,$12,$13,$14,$15,$16,$17;
side=$recv(self._directionDictionary())._at_(aDirection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
offset=$recv(self._guyOffsetDictionary())._at_(aDirection);
$recv(self["@guy"])._moveCentreBy_(offset);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["moveCentreBy:"]=1;
//>>excludeEnd("ctx");
$2=self["@guy"];
$3=$recv(side).__comma("CollidesWithAnyOf:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._perform_withArguments_($3,[self["@walls"]]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["perform:withArguments:"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$recv(self["@guy"])._moveCentreBy_($recv(offset).__star((-1)));
$recv(self["@guy"])._currentFrameGroup_("push".__comma(aDirection));
} else {
$5=self["@guy"];
$6=$recv(side).__comma("CollidesWithAnyOf:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$4=$recv($5)._perform_withArguments_($6,[self["@boxes"]]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["perform:withArguments:"]=2;
//>>excludeEnd("ctx");
if($core.assert($4)){
$8=self["@guy"];
$9=$recv(side).__comma("CollidesWithWhichOf:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$7=$recv($8)._perform_withArguments_($9,[self["@boxes"]]);
self._moveBox_direction_($7,aDirection);
$10=self["@guy"];
$11=$recv(offset).__star((-1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$recv($10)._moveCentreBy_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["moveCentreBy:"]=2;
//>>excludeEnd("ctx");
$12=self["@guy"];
$13="push".__comma(aDirection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$recv($12)._currentFrameGroup_($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["currentFrameGroup:"]=1;
//>>excludeEnd("ctx");
} else {
$14=self["@guy"];
$15=$recv($recv(offset).__slash((8))).__star($recv(self["@stepSize"]).__minus((8)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$recv($14)._moveCentreBy_($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["moveCentreBy:"]=3;
//>>excludeEnd("ctx");
$16=self["@guy"];
$17="walk".__comma(aDirection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=5;
//>>excludeEnd("ctx");
$recv($16)._currentFrameGroup_($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["currentFrameGroup:"]=2;
//>>excludeEnd("ctx");
};
};
self["@lastMove"]=aDirection;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"go:",{aDirection:aDirection,side:side,offset:offset},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDirection"],
source: "go: aDirection\x0a\x09|side offset|\x0a\x09side := self directionDictionary at: aDirection.\x0a\x09offset := self guyOffsetDictionary at: aDirection.\x0a\x0a\x09guy moveCentreBy: offset.\x0a\x09(guy perform: side , 'CollidesWithAnyOf:' withArguments: {walls})\x0a\x09\x09ifFalse:\x0a\x09\x09\x09[(guy perform: side , 'CollidesWithAnyOf:' withArguments: {boxes})\x0a                         \x09ifTrue: \x0a                         \x09\x09[self moveBox: (guy perform: side , 'CollidesWithWhichOf:' withArguments: {boxes}) direction: aDirection.\x0a                                        guy moveCentreBy: (offset * -1).\x0a                                        guy currentFrameGroup: 'push', aDirection]\x0a\x09                        ifFalse: \x0a                         \x09\x09[guy moveCentreBy: ((offset / 8) * (stepSize - 8)).\x0a        \x09                \x09guy currentFrameGroup: 'walk', aDirection]]\x0a\x09\x09ifTrue: \x0a\x09\x09\x09[guy moveCentreBy: (offset * -1).\x0a                        guy currentFrameGroup: 'push' , aDirection].\x0a\x0a\x09lastMove := aDirection.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "directionDictionary", "guyOffsetDictionary", "moveCentreBy:", "ifFalse:ifTrue:", "perform:withArguments:", ",", "ifTrue:ifFalse:", "moveBox:direction:", "*", "currentFrameGroup:", "/", "-"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "guyOffsetDictionary",
protocol: 'movement',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$1,$receiver;
$2=self["@guyOffsetDictionary"];
if(($receiver = $2) == null || $receiver.isNil){
$3=(0).__at((8));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=1;
//>>excludeEnd("ctx");
$4=(0).__at((-8));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=2;
//>>excludeEnd("ctx");
$5=(-8).__at((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["@"]=3;
//>>excludeEnd("ctx");
self["@guyOffsetDictionary"]=$globals.HashedCollection._newFromPairs_(["Down",$3,"Up",$4,"Left",$5,"Right",(8).__at((0))]);
$1=self["@guyOffsetDictionary"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"guyOffsetDictionary",{},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "guyOffsetDictionary\x0a\x09^ guyOffsetDictionary ifNil: [ guyOffsetDictionary := #{'Down' -> (0@8). 'Up' -> (0@ -8). 'Left' -> (-8@0). 'Right' -> (8@0)} ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "@"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "isLevelOver",
protocol: 'control',
fn: function (){
var self=this;
var exitCentres;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
exitCentres=$recv(self._exits())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._centre();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["centre"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self._boxes())._do_((function(elem){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(exitCentres)._includes_($recv(elem)._centre());
if(!$core.assert($1)){
throw $early=[false];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({elem:elem},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isLevelOver",{exitCentres:exitCentres},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isLevelOver\x0a\x09|exitCentres|\x0a\x09exitCentres := (self exits collect: [:each | each centre]).\x0a\x0a\x09self boxes do: [:elem | (exitCentres includes: elem centre) ifFalse: [^ false]].\x0a\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "exits", "centre", "do:", "boxes", "ifFalse:", "includes:"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "lastMove",
protocol: 'movement',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@lastMove"];
if(($receiver = $2) == null || $receiver.isNil){
self["@lastMove"]="Down";
$1=self["@lastMove"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastMove",{},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastMove\x0a\x09^ lastMove ifNil: [lastMove := 'Down']",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "level1",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (1), (7), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (1), (1), (2), (2), (7), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (2), (2), (7), (2), (7), (2), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (1), (1), (1), (2), (1), (2), (1), (1), (2), (1), (0), (0), (1), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (1), (2), (2), (2), (1), (2), (1), (1), (2), (1), (1), (1), (1), (2), (2), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (1), (2), (7), (2), (2), (7), (2), (2), (2), (2), (2), (2), (2), (2), (2), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (1), (1), (1), (1), (1), (2), (1), (1), (1), (2), (1), (8), (1), (2), (2), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level1\x0a\x09^  \x0a     #(#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 1 2 2 2 1 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 1 7 2 2 1 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 1 1 1 2 2 7 1 1 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 1 2 2 7 2 7 2 1 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 1 1 1 2 1 2 1 1 2 1 0 0 1 1 1 1 1 1 0 0 0)\x0a       #(0 0 0 1 2 2 2 1 2 1 1 2 1 1 1 1 2 2 9 9 1 0 0 0)\x0a       #(0 0 0 1 2 7 2 2 7 2 2 2 2 2 2 2 2 2 9 9 1 0 0 0)\x0a       #(0 0 0 1 1 1 1 1 2 1 1 1 2 1 8 1 2 2 9 9 1 0 0 0)\x0a       #(0 0 0 0 0 0 0 1 2 2 2 2 2 1 1 1 1 1 1 1 1 0 0 0)\x0a       #(0 0 0 0 0 0 0 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "level10",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (1), (1), (1), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (1), (1), (8), (1), (1), (1), (1), (2), (2), (2), (2), (2), (2), (2), (1), (2), (2), (2), (1), (0), (0), (0)], [(0), (0), (1), (2), (7), (7), (2), (2), (2), (7), (7), (2), (2), (7), (2), (7), (2), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (2), (7), (7), (7), (1), (2), (2), (2), (2), (7), (2), (2), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (7), (2), (2), (2), (1), (2), (7), (7), (2), (7), (7), (2), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (1), (1), (2), (2), (2), (1), (2), (2), (7), (2), (2), (2), (2), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (2), (2), (2), (2), (1), (2), (7), (2), (7), (2), (7), (2), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (2), (2), (2), (1), (1), (1), (1), (1), (1), (2), (1), (1), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (1), (2), (1), (2), (2), (1), (2), (2), (7), (2), (7), (2), (2), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (2), (1), (1), (2), (1), (2), (7), (7), (2), (7), (2), (7), (1), (1), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (9), (9), (1), (2), (1), (2), (2), (7), (2), (2), (2), (2), (2), (2), (1), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (9), (9), (1), (2), (1), (2), (7), (7), (7), (2), (7), (7), (7), (2), (1), (9), (1), (0), (0), (0)], [(0), (0), (1), (1), (1), (1), (1), (2), (1), (2), (2), (2), (2), (2), (2), (2), (1), (2), (1), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (1), (2), (1), (1), (1), (1), (1), (1), (1), (1), (1), (2), (1), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (2), (2), (2), (2), (2), (2), (1), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level10\x0a\x09^  \x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 1 1 1 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0) \x0a#(0 0 1 1 8 1 1 1 1 2 2 2 2 2 2 2 1 2 2 2 1 0 0 0) \x0a#(0 0 1 2 7 7 2 2 2 7 7 2 2 7 2 7 2 9 9 9 1 0 0 0) \x0a#(0 0 1 2 2 7 7 7 1 2 2 2 2 7 2 2 1 9 9 9 1 0 0 0) \x0a#(0 0 1 2 7 2 2 2 1 2 7 7 2 7 7 2 1 9 9 9 1 0 0 0) \x0a#(0 0 1 1 1 2 2 2 1 2 2 7 2 2 2 2 1 9 9 9 1 0 0 0) \x0a#(0 0 1 2 2 2 2 2 1 2 7 2 7 2 7 2 1 9 9 9 1 0 0 0) \x0a#(0 0 1 2 2 2 2 1 1 1 1 1 1 2 1 1 1 9 9 9 1 0 0 0) \x0a#(0 0 1 1 2 1 2 2 1 2 2 7 2 7 2 2 1 9 9 9 1 0 0 0) \x0a#(0 0 1 2 2 1 1 2 1 2 7 7 2 7 2 7 1 1 9 9 1 0 0 0) \x0a#(0 0 1 2 9 9 1 2 1 2 2 7 2 2 2 2 2 2 1 9 1 0 0 0) \x0a#(0 0 1 2 9 9 1 2 1 2 7 7 7 2 7 7 7 2 1 9 1 0 0 0) \x0a#(0 0 1 1 1 1 1 2 1 2 2 2 2 2 2 2 1 2 1 9 1 0 0 0) \x0a#(0 0 0 0 0 0 1 2 1 1 1 1 1 1 1 1 1 2 1 9 1 0 0 0) \x0a#(0 0 0 0 0 0 1 2 2 2 2 2 2 2 2 2 2 2 1 9 1 0 0 0) \x0a#(0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "level11",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (0), (1), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (1), (2), (8), (1), (1), (1), (7), (2), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (1), (1), (2), (2), (2), (2), (2), (2), (7), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (1), (1), (2), (2), (7), (2), (7), (7), (1), (1), (2), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (1), (2), (2), (1), (7), (1), (1), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (1), (2), (1), (2), (7), (2), (7), (7), (2), (1), (2), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (1), (2), (2), (2), (7), (2), (1), (2), (2), (1), (2), (7), (2), (1), (1), (1), (1), (1), (0), (0), (0), (0)], [(0), (1), (1), (1), (1), (2), (2), (2), (2), (1), (2), (2), (7), (7), (2), (1), (2), (2), (2), (1), (0), (0), (0), (0)], [(0), (1), (1), (1), (1), (2), (1), (1), (2), (7), (2), (2), (2), (2), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0)], [(0), (1), (9), (2), (2), (2), (2), (1), (1), (1), (2), (2), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0)], [(0), (1), (9), (9), (2), (9), (9), (1), (0), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (1), (9), (9), (9), (1), (9), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (1), (9), (9), (9), (9), (9), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level11\x0a\x09^  \x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a#(0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 1 1 1 1 0 1 2 2 1 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 1 1 2 8 1 1 1 7 2 1 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 1 1 2 2 2 2 2 2 7 2 2 1 0 0 0 0 0 0 0 0 0) \x0a#(0 0 1 1 2 2 7 2 7 7 1 1 2 1 1 0 0 0 0 0 0 0 0 0) \x0a#(0 0 1 2 2 1 7 1 1 2 2 2 2 2 1 0 0 0 0 0 0 0 0 0) \x0a#(0 0 1 2 1 2 7 2 7 7 2 1 2 1 1 1 0 0 0 0 0 0 0 0) \x0a#(0 0 1 2 2 2 7 2 1 2 2 1 2 7 2 1 1 1 1 1 0 0 0 0) \x0a#(0 1 1 1 1 2 2 2 2 1 2 2 7 7 2 1 2 2 2 1 0 0 0 0) \x0a#(0 1 1 1 1 2 1 1 2 7 2 2 2 2 2 2 2 2 2 1 0 0 0 0) \x0a#(0 1 9 2 2 2 2 1 1 1 2 2 1 1 1 1 1 1 1 1 0 0 0 0) \x0a#(0 1 9 9 2 9 9 1 0 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 1 9 9 9 1 9 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 1 9 9 9 9 9 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)  \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "level12",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (2), (2), (2), (2), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (1), (2), (1), (1), (1), (1), (1), (1), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (1), (2), (2), (7), (2), (7), (2), (7), (2), (7), (1), (2), (2), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (1), (2), (2), (2), (7), (8), (7), (2), (2), (2), (1), (1), (2), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (1), (2), (2), (7), (2), (7), (2), (7), (1), (1), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (1), (2), (2), (2), (7), (2), (7), (2), (2), (1), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (1), (1), (1), (7), (7), (7), (2), (7), (2), (1), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (1), (2), (1), (1), (2), (1), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (1), (1), (1), (2), (2), (2), (1), (1), (2), (1), (1), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (2), (2), (2), (2), (2), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level12\x0a\x09^  \x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0) \x0a#(0 0 0 0 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 1 0 0 0 0) \x0a#(0 0 0 0 1 2 1 2 1 1 1 1 1 1 2 2 2 2 2 1 0 0 0 0) \x0a#(0 0 0 0 1 2 1 2 2 7 2 7 2 7 2 7 1 2 2 1 0 0 0 0) \x0a#(0 0 0 0 1 2 1 2 2 2 7 8 7 2 2 2 1 1 2 1 1 0 0 0) \x0a#(0 0 0 0 1 2 1 2 2 7 2 7 2 7 1 1 1 9 9 9 1 0 0 0) \x0a#(0 0 0 0 1 2 1 2 2 2 7 2 7 2 2 1 1 9 9 9 1 0 0 0) \x0a#(0 0 0 0 1 2 1 1 1 7 7 7 2 7 2 1 1 9 9 9 1 0 0 0) \x0a#(0 0 0 0 1 2 2 2 2 2 1 2 1 1 2 1 1 9 9 9 1 0 0 0) \x0a#(0 0 0 0 1 1 1 1 1 2 2 2 1 1 2 1 1 9 9 9 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 1 1 1 1 1 2 2 2 2 2 1 1 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 1 2 2 2 2 2 1 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "level13",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (2), (2), (2), (1), (1), (2), (2), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0)], [(0), (0), (1), (1), (1), (2), (2), (2), (2), (2), (1), (2), (2), (1), (2), (2), (2), (2), (1), (1), (1), (0), (0), (0)], [(0), (0), (1), (2), (2), (7), (2), (1), (7), (2), (1), (2), (2), (1), (2), (2), (9), (9), (9), (2), (1), (0), (0), (0)], [(0), (0), (1), (2), (1), (2), (7), (1), (8), (7), (1), (1), (2), (1), (2), (1), (9), (1), (9), (2), (1), (0), (0), (0)], [(0), (0), (1), (2), (2), (1), (2), (1), (7), (2), (2), (1), (2), (2), (2), (2), (9), (2), (9), (2), (1), (0), (0), (0)], [(0), (0), (1), (2), (7), (2), (2), (2), (2), (7), (2), (1), (2), (1), (2), (1), (9), (1), (9), (2), (1), (0), (0), (0)], [(0), (0), (1), (2), (2), (2), (1), (1), (2), (2), (1), (1), (7), (2), (7), (2), (9), (2), (9), (2), (1), (0), (0), (0)], [(0), (0), (1), (2), (7), (2), (1), (2), (2), (2), (1), (2), (2), (1), (7), (1), (9), (1), (9), (2), (1), (0), (0), (0)], [(0), (0), (1), (1), (2), (7), (2), (2), (7), (2), (2), (2), (7), (2), (2), (7), (9), (9), (9), (2), (1), (0), (0), (0)], [(0), (0), (0), (1), (7), (2), (1), (1), (1), (1), (1), (1), (2), (2), (2), (2), (1), (1), (2), (2), (1), (0), (0), (0)], [(0), (0), (0), (1), (2), (2), (1), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level13\x0a\x09^  \x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 1 2 2 2 1 1 2 2 1 1 1 1 1 1 0 0 0 0 0) \x0a#(0 0 1 1 1 2 2 2 2 2 1 2 2 1 2 2 2 2 1 1 1 0 0 0) \x0a#(0 0 1 2 2 7 2 1 7 2 1 2 2 1 2 2 9 9 9 2 1 0 0 0) \x0a#(0 0 1 2 1 2 7 1 8 7 1 1 2 1 2 1 9 1 9 2 1 0 0 0) \x0a#(0 0 1 2 2 1 2 1 7 2 2 1 2 2 2 2 9 2 9 2 1 0 0 0) \x0a#(0 0 1 2 7 2 2 2 2 7 2 1 2 1 2 1 9 1 9 2 1 0 0 0) \x0a#(0 0 1 2 2 2 1 1 2 2 1 1 7 2 7 2 9 2 9 2 1 0 0 0) \x0a#(0 0 1 2 7 2 1 2 2 2 1 2 2 1 7 1 9 1 9 2 1 0 0 0) \x0a#(0 0 1 1 2 7 2 2 7 2 2 2 7 2 2 7 9 9 9 2 1 0 0 0) \x0a#(0 0 0 1 7 2 1 1 1 1 1 1 2 2 2 2 1 1 2 2 1 0 0 0) \x0a#(0 0 0 1 2 2 1 0 0 0 0 1 1 1 1 1 1 1 1 1 1 0 0 0) \x0a#(0 0 0 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "level2",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (9), (9), (2), (2), (1), (2), (2), (2), (2), (2), (1), (1), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (9), (9), (2), (2), (1), (2), (7), (2), (2), (7), (2), (2), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (9), (9), (2), (2), (1), (7), (1), (1), (1), (1), (2), (2), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (9), (9), (2), (2), (2), (2), (8), (2), (1), (1), (2), (2), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (9), (9), (2), (2), (1), (2), (1), (2), (2), (7), (2), (1), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (2), (1), (1), (7), (2), (7), (2), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (1), (2), (7), (2), (2), (7), (2), (7), (2), (7), (2), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (1), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level2\x0a\x09^  \x0a   #(#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 1 9 9 2 2 1 2 2 2 2 2 1 1 1 0 0 0 0 0 0)\x0a       #(0 0 0 0 1 9 9 2 2 1 2 7 2 2 7 2 2 1 0 0 0 0 0 0)\x0a       #(0 0 0 0 1 9 9 2 2 1 7 1 1 1 1 2 2 1 0 0 0 0 0 0)\x0a       #(0 0 0 0 1 9 9 2 2 2 2 8 2 1 1 2 2 1 0 0 0 0 0 0)\x0a       #(0 0 0 0 1 9 9 2 2 1 2 1 2 2 7 2 1 1 0 0 0 0 0 0)\x0a       #(0 0 0 0 1 1 1 1 1 1 2 1 1 7 2 7 2 1 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 1 2 7 2 2 7 2 7 2 7 2 1 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 1 2 2 2 2 1 2 2 2 2 2 1 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "level3",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (8), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (7), (1), (7), (2), (1), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (7), (2), (2), (7), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (7), (2), (7), (2), (1), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (2), (7), (2), (1), (2), (1), (1), (1), (0), (0), (0), (0)], [(0), (0), (0), (1), (9), (9), (9), (9), (2), (2), (1), (1), (2), (7), (2), (2), (7), (2), (2), (1), (0), (0), (0), (0)], [(0), (0), (0), (1), (1), (9), (9), (9), (2), (2), (2), (2), (7), (2), (2), (7), (2), (2), (2), (1), (0), (0), (0), (0)], [(0), (0), (0), (1), (9), (9), (9), (9), (2), (2), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0)], [(0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level3\x0a\x09^\x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)  \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 1 2 2 2 2 2 8 1 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 1 2 7 1 7 2 1 1 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 1 2 7 2 2 7 1 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 1 1 7 2 7 2 1 0 0 0 0 0 0) \x0a#(0 0 0 1 1 1 1 1 1 1 1 1 2 7 2 1 2 1 1 1 0 0 0 0) \x0a#(0 0 0 1 9 9 9 9 2 2 1 1 2 7 2 2 7 2 2 1 0 0 0 0) \x0a#(0 0 0 1 1 9 9 9 2 2 2 2 7 2 2 7 2 2 2 1 0 0 0 0) \x0a#(0 0 0 1 9 9 9 9 2 2 1 1 1 1 1 1 1 1 1 1 0 0 0 0) \x0a#(0 0 0 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "level4",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (9), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (2), (2), (9), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (2), (2), (2), (1), (2), (2), (7), (2), (7), (2), (2), (2), (9), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (7), (7), (7), (1), (7), (2), (2), (7), (2), (1), (2), (2), (9), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (2), (7), (2), (2), (2), (2), (2), (7), (2), (1), (2), (2), (9), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (1), (2), (7), (7), (2), (1), (7), (2), (7), (2), (7), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (1), (2), (2), (7), (2), (1), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (1), (1), (2), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (1), (2), (2), (2), (2), (1), (2), (2), (2), (2), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (1), (2), (2), (2), (2), (2), (7), (2), (2), (2), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (1), (2), (2), (7), (7), (1), (7), (7), (2), (2), (8), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (1), (2), (2), (2), (2), (1), (2), (2), (2), (2), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level4\x0a\x09^  \x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 1 2 2 9 9 9 9 1 0 0 0) \x0a#(0 0 1 1 1 1 1 1 1 1 1 1 1 1 2 2 9 9 9 9 1 0 0 0) \x0a#(0 0 1 2 2 2 2 1 2 2 7 2 7 2 2 2 9 9 9 9 1 0 0 0) \x0a#(0 0 1 2 7 7 7 1 7 2 2 7 2 1 2 2 9 9 9 9 1 0 0 0) \x0a#(0 0 1 2 2 7 2 2 2 2 2 7 2 1 2 2 9 9 9 9 1 0 0 0) \x0a#(0 0 1 2 7 7 2 1 7 2 7 2 7 1 1 1 1 1 1 1 1 0 0 0) \x0a#(0 0 1 2 2 7 2 1 2 2 2 2 2 1 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 1 1 2 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 1 2 2 2 2 1 2 2 2 2 1 1 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 1 2 2 2 2 2 7 2 2 2 1 1 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 1 2 2 7 7 1 7 7 2 2 8 1 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 1 2 2 2 2 1 2 2 2 2 1 1 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0)\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "level5",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (1), (7), (1), (1), (2), (2), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (7), (2), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (2), (1), (1), (1), (2), (2), (2), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (9), (9), (9), (9), (2), (2), (1), (1), (2), (7), (2), (2), (7), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (9), (9), (9), (9), (2), (2), (2), (2), (7), (2), (7), (7), (2), (1), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (9), (9), (9), (9), (2), (2), (1), (1), (7), (2), (2), (7), (2), (8), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (2), (2), (7), (2), (2), (1), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (7), (2), (7), (2), (2), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (2), (1), (1), (2), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level5\x0a\x09^  \x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 1 2 2 2 1 1 1 1 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 1 2 1 7 1 1 2 2 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 1 2 2 2 2 2 7 2 1 0 0 0) \x0a#(0 0 0 0 1 1 1 1 1 1 1 1 1 2 1 1 1 2 2 2 1 0 0 0) \x0a#(0 0 0 0 1 9 9 9 9 2 2 1 1 2 7 2 2 7 1 1 1 0 0 0) \x0a#(0 0 0 0 1 9 9 9 9 2 2 2 2 7 2 7 7 2 1 1 0 0 0 0) \x0a#(0 0 0 0 1 9 9 9 9 2 2 1 1 7 2 2 7 2 8 1 0 0 0 0) \x0a#(0 0 0 0 1 1 1 1 1 1 1 1 1 2 2 7 2 2 1 1 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 1 2 7 2 7 2 2 1 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 2 1 1 2 1 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 2 2 2 2 1 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "level6",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (0), (0), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (9), (9), (2), (2), (1), (0), (1), (1), (8), (1), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (9), (9), (2), (2), (1), (1), (1), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (9), (9), (2), (2), (2), (2), (2), (7), (7), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (9), (9), (2), (2), (1), (2), (1), (2), (7), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (9), (9), (1), (1), (1), (2), (1), (2), (7), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (1), (1), (1), (2), (7), (2), (1), (7), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (7), (1), (2), (7), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (7), (2), (2), (7), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (1), (1), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level6\x0a\x09^  \x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 1 1 1 1 1 0 0 1 1 1 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 9 9 2 2 1 0 1 1 8 1 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 9 9 2 2 1 1 1 2 2 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 9 9 2 2 2 2 2 7 7 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 9 9 2 2 1 2 1 2 7 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 9 9 1 1 1 2 1 2 7 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 1 1 1 2 7 2 1 7 2 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 1 2 2 7 1 2 7 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 1 2 7 2 2 7 2 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 1 2 2 1 1 2 2 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "level7",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (2), (2), (2), (1), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (2), (1), (2), (8), (1), (1), (2), (7), (7), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (2), (2), (2), (7), (2), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (2), (7), (2), (2), (1), (1), (1), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (1), (2), (1), (1), (1), (1), (1), (7), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (7), (2), (2), (1), (1), (1), (2), (9), (9), (1), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (7), (2), (7), (2), (7), (2), (9), (9), (9), (1), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (2), (2), (2), (1), (1), (1), (9), (9), (9), (1), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (7), (7), (2), (1), (0), (1), (9), (9), (9), (1), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (2), (2), (1), (1), (1), (0), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level7\x0a\x09^  \x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 1 1 1 1 1 1 2 2 2 1 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 1 2 1 2 8 1 1 2 7 7 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 2 2 2 2 7 2 2 2 2 2 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 2 2 7 2 2 1 1 1 2 2 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 1 1 2 1 1 1 1 1 7 1 1 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 2 7 2 2 1 1 1 2 9 9 1 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 2 7 2 7 2 7 2 9 9 9 1 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 2 2 2 2 1 1 1 9 9 9 1 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 2 7 7 2 1 0 1 9 9 9 1 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 2 2 1 1 1 0 1 1 1 1 1 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "level8",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (2), (2), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (7), (2), (2), (2), (7), (2), (7), (2), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (2), (7), (1), (2), (7), (2), (1), (2), (2), (7), (2), (2), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (2), (2), (7), (2), (7), (2), (2), (1), (2), (2), (2), (2), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (1), (1), (1), (2), (7), (1), (2), (1), (2), (2), (1), (1), (1), (1), (2), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (1), (8), (1), (7), (2), (7), (2), (7), (2), (2), (1), (1), (2), (2), (2), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (1), (2), (2), (2), (2), (7), (2), (1), (7), (1), (2), (2), (2), (1), (2), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (1), (2), (2), (2), (7), (2), (2), (2), (2), (7), (2), (7), (2), (7), (2), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (1), (1), (1), (1), (1), (2), (2), (1), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (9), (9), (9), (9), (9), (9), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (9), (9), (9), (9), (9), (9), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (9), (9), (9), (9), (9), (9), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level8\x0a\x09^  \x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 2 2 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0) \x0a#(0 0 0 0 0 1 2 2 2 2 7 2 2 2 7 2 7 2 1 0 0 0 0 0) \x0a#(0 0 0 0 0 1 2 7 1 2 7 2 1 2 2 7 2 2 1 0 0 0 0 0) \x0a#(0 0 0 0 0 1 2 2 7 2 7 2 2 1 2 2 2 2 1 0 0 0 0 0) \x0a#(0 0 0 1 1 1 2 7 1 2 1 2 2 1 1 1 1 2 1 0 0 0 0 0) \x0a#(0 0 0 1 8 1 7 2 7 2 7 2 2 1 1 2 2 2 1 0 0 0 0 0) \x0a#(0 0 0 1 2 2 2 2 7 2 1 7 1 2 2 2 1 2 1 0 0 0 0 0) \x0a#(0 0 0 1 2 2 2 7 2 2 2 2 7 2 7 2 7 2 1 0 0 0 0 0) \x0a#(0 0 0 1 1 1 1 1 2 2 1 1 1 1 1 1 1 1 1 0 0 0 0 0) \x0a#(0 0 0 0 0 1 2 2 2 2 2 2 1 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 2 2 2 2 2 2 1 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 9 9 9 9 9 9 1 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 9 9 9 9 9 9 1 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 9 9 9 9 9 9 1 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "level9",
protocol: 'levels',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (2), (2), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (2), (9), (2), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (1), (1), (2), (2), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (2), (1), (1), (2), (2), (9), (9), (9), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (2), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (7), (7), (7), (2), (1), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (2), (2), (7), (2), (7), (2), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (2), (2), (2), (1), (7), (2), (7), (2), (2), (2), (1), (2), (2), (2), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (8), (2), (7), (2), (2), (7), (2), (2), (2), (2), (7), (2), (2), (7), (2), (1), (0), (0), (0)], [(0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (2), (7), (7), (2), (7), (2), (1), (1), (1), (1), (1), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (2), (2), (2), (2), (2), (2), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (1), (1), (1), (1), (1), (1), (1), (1), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level9\x0a\x09^  \x0a#(\x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 2 2 9 9 9 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 2 2 9 9 9 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 1 2 2 2 2 2 2 9 2 9 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 1 2 2 1 1 2 2 9 9 9 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 1 1 2 1 1 2 2 9 9 9 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 1 1 1 2 1 1 1 1 1 1 1 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 1 2 7 7 7 2 1 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 1 1 1 1 1 2 2 7 2 7 2 1 1 1 1 1 0 0 0) \x0a#(0 0 0 0 1 1 2 2 2 1 7 2 7 2 2 2 1 2 2 2 1 0 0 0) \x0a#(0 0 0 0 1 8 2 7 2 2 7 2 2 2 2 7 2 2 7 2 1 0 0 0) \x0a#(0 0 0 0 1 1 1 1 1 1 2 7 7 2 7 2 1 1 1 1 1 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 1 2 2 2 2 2 2 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0) \x0a#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))\x0a\x22\x0a0 → empty\x0a1 → wall\x0a2 → floor\x0a7 → box\x0a8 → guy\x0a9 → exit\x0a\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "moveBox:direction:",
protocol: 'movement',
fn: function (aBox,aDirection){
var self=this;
var side,offset;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$5,$7,$6;
side=$recv(self._directionDictionary())._at_(aDirection);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
offset=$recv(self._boxOffsetDictionary())._at_(aDirection);
$2=$recv(aBox)._centre();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["centre"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__plus(offset);
$recv(aBox)._centre_($1);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["centre:"]=1;
//>>excludeEnd("ctx");
$4=$recv(side).__comma("CollidesWithAnyOf:");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$3=$recv(aBox)._perform_withArguments_($4,[self["@walls"]]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["perform:withArguments:"]=1;
//>>excludeEnd("ctx");
if($core.assert($3)){
$recv(aBox)._centre_($recv($recv(aBox)._centre()).__minus(offset));
} else {
$5=$recv(aBox)._perform_withArguments_($recv(side).__comma("CollidesWithAnyOf:"),[self["@boxes"]]);
if($core.assert($5)){
$7=$recv(aBox)._centre();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["centre"]=2;
//>>excludeEnd("ctx");
$6=$recv($7).__minus(offset);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$recv(aBox)._centre_($6);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["centre:"]=2;
//>>excludeEnd("ctx");
} else {
$recv(self._soundNamed_("slide"))._play();
(5)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(aBox)._moveCentreBy_(offset);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((100));
self._clearCanvas();
return $recv(self._boxes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._drawSprite_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"moveBox:direction:",{aBox:aBox,aDirection:aDirection,side:side,offset:offset},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBox", "aDirection"],
source: "moveBox: aBox direction: aDirection\x0a\x09|side offset|\x0a\x09side := self directionDictionary at: aDirection.\x0a\x09offset := self boxOffsetDictionary at: aDirection.\x0a\x0a\x09aBox centre: aBox centre + offset.\x0a\x09(aBox perform: side , 'CollidesWithAnyOf:' withArguments: {walls})\x0a\x09\x09ifFalse:\x0a\x09\x09\x09[(aBox perform: side , 'CollidesWithAnyOf:' withArguments: {boxes})\x0a                         \x09ifFalse: \x0a                         \x09\x09[ (self soundNamed: 'slide') play.\x0a                                          5 timesRepeat: \x0a                                         \x09[[aBox moveCentreBy: offset] valueWithTimeout: 100.\x0a                                         \x09self clearCanvas. \x0a                                         \x09self boxes do: [:each | self drawSprite: each]]]\x0a\x09                        ifTrue: \x0a                         \x09\x09[aBox centre: aBox centre - offset]]\x0a\x09\x09ifTrue: [aBox centre: aBox centre - offset]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "directionDictionary", "boxOffsetDictionary", "centre:", "+", "centre", "ifFalse:ifTrue:", "perform:withArguments:", ",", "play", "soundNamed:", "timesRepeat:", "valueWithTimeout:", "moveCentreBy:", "clearCanvas", "do:", "boxes", "drawSprite:", "-"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "processMovement",
protocol: 'movement',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@guy"])._currentFrameGroup_("still".__comma(self._lastMove()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"processMovement",{},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "processMovement\x0a\x09guy currentFrameGroup: 'still' , self lastMove.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["currentFrameGroup:", ",", "lastMove"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "restartLevel",
protocol: 'levels',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self._clearLevel();
$1=self._createLevel();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"restartLevel",{},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "restartLevel\x0a\x09self clearLevel;\x0a\x09\x09createLevel.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["clearLevel", "createLevel"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "startGame",
protocol: 'control',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
self["@fps"]=(20);
self["@stepSize"]=(10);
self._width_((720));
$1=self._height_((540));
$recv(self["@canvas"])._style_("border: 1px solid; background-image: url(\x22images/background.png\x22)");
self._addSound_("sounds/slide.ogg");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addSound:"]=1;
//>>excludeEnd("ctx");
self._addSound_("sounds/factory.ogg");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["addSound:"]=2;
//>>excludeEnd("ctx");
self._addSound_("sounds/applause.ogg");
$recv(self._soundNamed_("factory"))._loop();
self._createLevel();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startGame",{},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startGame\x0a\x09fps := 20.\x09\x0a\x09stepSize := 10.\x0a\x0a\x09self width: 720; \x0a\x09\x09height: 540.\x0a\x0a\x09canvas style: 'border: 1px solid; background-image: url(\x22images/background.png\x22)'.\x0a\x0a\x09self addSound: 'sounds/slide.ogg'.\x0a\x09self addSound: 'sounds/factory.ogg'.\x0a\x09self addSound: 'sounds/applause.ogg'.\x0a\x0a\x09(self soundNamed: 'factory') loop.\x0a\x0a\x09self createLevel.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width:", "height:", "style:", "addSound:", "loop", "soundNamed:", "createLevel"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "startPositionFor:",
protocol: 'control',
fn: function (aLevel){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$5,$4,$3;
var $early={};
try {
$recv(aLevel)._withIndexDo_((function(eachRow,y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(eachRow)._includes_((8));
if($core.assert($1)){
return $recv(eachRow)._withIndexDo_((function(eachColumn,x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=$recv(eachColumn).__eq((8));
if($core.assert($2)){
$5=$recv(x).__star((30));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__minus((15));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__at($recv($recv(y).__star((30))).__minus((15)));
throw $early=[$3];
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({eachColumn:eachColumn,x:x},$ctx2,3)});
//>>excludeEnd("ctx");
}));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({eachRow:eachRow,y:y},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["withIndexDo:"]=1;
//>>excludeEnd("ctx");
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startPositionFor:",{aLevel:aLevel},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLevel"],
source: "startPositionFor: aLevel\x0a\x09aLevel\x0a\x09\x09withIndexDo: [:eachRow :y | \x0a\x09\x09\x09(eachRow includes: 8) \x0a                              \x09ifTrue: \x0a                              \x09\x09[eachRow withIndexDo: [:eachColumn :x |\x0a\x09\x09\x09\x09\x09\x09eachColumn = 8 \x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [ ^ ((x * 30) - 15) @ ((y * 30) - 15) ]]]].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "ifTrue:", "includes:", "=", "@", "-", "*"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "step",
protocol: 'control',
fn: function (){
var self=this;
function $Key(){return $globals.Key||(typeof Key=="undefined"?nil:Key)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$recv(self["@guy"])._currentFrameGroup_("still".__comma(self._lastMove()));
self._whileKeyPressed_do_($recv($Key())._leftArrow(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._go_("Left");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["go:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whileKeyPressed:do:"]=1;
//>>excludeEnd("ctx");
self._whileKeyPressed_do_($recv($Key())._rightArrow(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._go_("Right");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["go:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whileKeyPressed:do:"]=2;
//>>excludeEnd("ctx");
self._whileKeyPressed_do_($recv($Key())._upArrow(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._go_("Up");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["go:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whileKeyPressed:do:"]=3;
//>>excludeEnd("ctx");
self._whileKeyPressed_do_($recv($Key())._downArrow(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._go_("Down");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whileKeyPressed:do:"]=4;
//>>excludeEnd("ctx");
self._whileKeyPressed_do_($recv($Key())._r(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._restartLevel();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whileKeyPressed:do:"]=5;
//>>excludeEnd("ctx");
self._whileKeyPressed_do_($recv($Key())._m(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._soundNamed_("factory"))._stop();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["whileKeyPressed:do:"]=6;
//>>excludeEnd("ctx");
$1=self._whileKeyPressed_do_($recv($Key())._n(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._advanceLevel();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["advanceLevel"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)});
//>>excludeEnd("ctx");
}));
$2=self._isLevelOver();
if($core.assert($2)){
self._advanceLevel();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"step",{},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "step\x0a\x09guy currentFrameGroup: 'still' , self lastMove.\x0a\x09self whileKeyPressed: Key leftArrow do: [self go: 'Left'];\x0a\x09\x09whileKeyPressed: Key rightArrow do: [self go: 'Right'];\x0a\x09\x09whileKeyPressed: Key upArrow do: [self go: 'Up'];\x0a\x09\x09whileKeyPressed: Key downArrow do: [self go: 'Down'];\x0a\x09\x09whileKeyPressed: Key r do: [self restartLevel];\x0a\x09\x09whileKeyPressed: Key m do: [(self soundNamed: 'factory') stop];\x0a\x09\x09whileKeyPressed: Key n do: [self advanceLevel].\x0a\x0a\x09self isLevelOver ifTrue: [self advanceLevel]",
referencedClasses: ["Key"],
//>>excludeEnd("ide");
messageSends: ["currentFrameGroup:", ",", "lastMove", "whileKeyPressed:do:", "leftArrow", "go:", "rightArrow", "upArrow", "downArrow", "r", "restartLevel", "m", "stop", "soundNamed:", "n", "advanceLevel", "ifTrue:", "isLevelOver"]
}),
$globals.Sokoban);

$core.addMethod(
$core.method({
selector: "walls",
protocol: 'sprite collections',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@walls"];
if(($receiver = $2) == null || $receiver.isNil){
self["@walls"]=[];
$1=self["@walls"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"walls",{},$globals.Sokoban)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "walls\x0a\x09^ walls ifNil: [walls := #()]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.Sokoban);



$core.addClass('SokobanLevelCreator', $globals.Widget, ['level', 'table', 'palette', 'currentBrush', 'div', 'textarea'], 'Ludus-Examples');
$core.addMethod(
$core.method({
selector: "emptyLevel",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=[[(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)], [(0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0), (0)]];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "emptyLevel\x0a^   #(#(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0)\x0a       #(0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0))",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SokobanLevelCreator);

$core.addMethod(
$core.method({
selector: "imageFor:",
protocol: 'not yet classified',
fn: function (anInteger){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($globals.HashedCollection._newFromPairs_([(7),"box",(9),"exit",(1),"wall",(2),"floor",(8),"guy",(0),"no"]))._at_(anInteger);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"imageFor:",{anInteger:anInteger},$globals.SokobanLevelCreator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "imageFor: anInteger\x0a\x09^ #{7 -> 'box'. 9 -> 'exit'. 1 -> 'wall'. 2 -> 'floor'. 8 -> 'guy'. 0 -> 'no' } at: anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.SokobanLevelCreator);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SokobanLevelCreator.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@currentBrush"]=(0);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SokobanLevelCreator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09currentBrush := 0.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.SokobanLevelCreator);

$core.addMethod(
$core.method({
selector: "level",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@level"];
if(($receiver = $2) == null || $receiver.isNil){
self["@level"]=self._emptyLevel();
$1=self["@level"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"level",{},$globals.SokobanLevelCreator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "level\x0a\x09^ level ifNil: [level := self emptyLevel]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "emptyLevel"]
}),
$globals.SokobanLevelCreator);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
self._renderTableOn_(html);
self._renderPaletteOn_(html);
$1=$recv(html)._button();
$recv($1)._with_("Print Array");
$2=$recv($1)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderTextAreaOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.SokobanLevelCreator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09self renderTableOn:html.\x0a\x09self renderPaletteOn: html.\x0a\x09html button \x0a\x09\x09with: 'Print Array'; \x0a\x09\x09onClick: [self renderTextAreaOn: html].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderTableOn:", "renderPaletteOn:", "with:", "button", "onClick:", "renderTextAreaOn:"]
}),
$globals.SokobanLevelCreator);

$core.addMethod(
$core.method({
selector: "renderPaletteOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$7,$6,$5,$8,$9,$10,$13,$12,$11,$14,$15,$16,$19,$18,$17,$20,$21,$22,$25,$24,$23,$26,$27,$28,$29,$30,$31,$32,$2;
$1=$recv(html)._table();
$recv($1)._id_("palette");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._img();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["img"]=1;
//>>excludeEnd("ctx");
$4=$3;
$7=self._imageFor_((7));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["imageFor:"]=1;
//>>excludeEnd("ctx");
$6="images/".__comma($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$5=$recv($6).__comma("Icon.png");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($4)._src_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["src:"]=1;
//>>excludeEnd("ctx");
$8=$recv($3)._onClick_((function(){
self["@currentBrush"]=(7);
return self["@currentBrush"];

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$8;
$9=$recv(html)._img();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["img"]=2;
//>>excludeEnd("ctx");
$10=$9;
$13=self._imageFor_((9));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["imageFor:"]=2;
//>>excludeEnd("ctx");
$12="images/".__comma($13);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=4;
//>>excludeEnd("ctx");
$11=$recv($12).__comma("Icon.png");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
$recv($10)._src_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["src:"]=2;
//>>excludeEnd("ctx");
$14=$recv($9)._onClick_((function(){
self["@currentBrush"]=(9);
return self["@currentBrush"];

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=2;
//>>excludeEnd("ctx");
$14;
$15=$recv(html)._img();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["img"]=3;
//>>excludeEnd("ctx");
$16=$15;
$19=self._imageFor_((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["imageFor:"]=3;
//>>excludeEnd("ctx");
$18="images/".__comma($19);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=6;
//>>excludeEnd("ctx");
$17=$recv($18).__comma("Icon.png");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=5;
//>>excludeEnd("ctx");
$recv($16)._src_($17);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["src:"]=3;
//>>excludeEnd("ctx");
$20=$recv($15)._onClick_((function(){
self["@currentBrush"]=(1);
return self["@currentBrush"];

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=3;
//>>excludeEnd("ctx");
$20;
$21=$recv(html)._img();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["img"]=4;
//>>excludeEnd("ctx");
$22=$21;
$25=self._imageFor_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["imageFor:"]=4;
//>>excludeEnd("ctx");
$24="images/".__comma($25);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=8;
//>>excludeEnd("ctx");
$23=$recv($24).__comma("Icon.png");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=7;
//>>excludeEnd("ctx");
$recv($22)._src_($23);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["src:"]=4;
//>>excludeEnd("ctx");
$26=$recv($21)._onClick_((function(){
self["@currentBrush"]=(2);
return self["@currentBrush"];

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=4;
//>>excludeEnd("ctx");
$26;
$27=$recv(html)._img();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["img"]=5;
//>>excludeEnd("ctx");
$28=$27;
$29=$recv("images/".__comma(self._imageFor_((8)))).__comma("Icon.png");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=9;
//>>excludeEnd("ctx");
$recv($28)._src_($29);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["src:"]=5;
//>>excludeEnd("ctx");
$30=$recv($27)._onClick_((function(){
self["@currentBrush"]=(8);
return self["@currentBrush"];

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["onClick:"]=5;
//>>excludeEnd("ctx");
$30;
$31=$recv(html)._img();
$recv($31)._src_("images/eraserIcon.png");
$32=$recv($31)._onClick_((function(){
self["@currentBrush"]=(0);
return self["@currentBrush"];

}));
return $32;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self["@palette"]=$2;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderPaletteOn:",{html:html},$globals.SokobanLevelCreator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderPaletteOn: html\x0a\x09palette := html table\x0a\x09\x09id: 'palette';\x0a\x09\x09with: [\x0a                \x09html img src: 'images/', (self imageFor: 7) , 'Icon.png';\x0a                  \x09\x09onClick: [currentBrush := 7].\x0a                \x09html img src: 'images/', (self imageFor: 9) , 'Icon.png';\x0a                  \x09\x09onClick: [currentBrush := 9].\x0a                \x09html img src: 'images/', (self imageFor: 1) , 'Icon.png';\x0a                  \x09\x09onClick: [currentBrush := 1].\x0a                \x09html img src: 'images/', (self imageFor: 2) , 'Icon.png';\x0a                  \x09\x09onClick: [currentBrush := 2].\x0a                \x09html img src: 'images/', (self imageFor: 8) , 'Icon.png';\x0a                  \x09\x09onClick: [currentBrush := 8].\x0a                \x09html img src: 'images/eraserIcon.png';\x0a                  \x09\x09onClick: [currentBrush := 0]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "table", "with:", "src:", "img", ",", "imageFor:", "onClick:"]
}),
$globals.SokobanLevelCreator);

$core.addMethod(
$core.method({
selector: "renderTableOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$5,$6,$12,$11,$10,$9,$8,$7,$13,$16,$15,$14,$17,$4,$2;
$1=$recv(html)._table();
$recv($1)._id_("levelTable");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["id:"]=1;
//>>excludeEnd("ctx");
$recv($1)._style_("border-spacing: 0; height: 0px; width: 0px; padding: 0; margin: 0; font: 0px serif;");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["style:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return (1)._to_do_((18),(function(y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=$recv(html)._tr();
$recv($3)._style_("border-spacing: 0; height: 0px; width: 0px; padding: 0; margin: 0; font: 0px serif;");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["style:"]=2;
//>>excludeEnd("ctx");
$recv($3)._id_(y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["id:"]=2;
//>>excludeEnd("ctx");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return (1)._to_do_((24),(function(x){
var cell;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
$5=$recv(html)._td();
$recv($5)._style_("border-spacing: 0; height: 0px; width: 0px; padding: 0; margin: 0; font: 0px serif; background-image: url(\x22images/emptyIcon.png\x22);");
$recv($5)._id_(x);
$recv($5)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx6) {
//>>excludeEnd("ctx");
$6=$recv(html)._img();
$12=self._level();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx6.sendIdx["level"]=1;
//>>excludeEnd("ctx");
$11=$recv($12)._at_(y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx6.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$10=$recv($11)._at_(x);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx6.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$9=self._imageFor_($10);
$8="images/".__comma($9);
$7=$recv($8).__comma("Icon.png");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx6.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($6)._src_($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,5)});
//>>excludeEnd("ctx");
}));
$13=$5;
$16=self._level();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["level"]=2;
//>>excludeEnd("ctx");
$15=$recv($16)._at_(y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["at:"]=4;
//>>excludeEnd("ctx");
$14=$recv($15)._at_(x);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$recv($13)._class_($14);
$17=$recv($5)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx6) {
//>>excludeEnd("ctx");
$recv($recv(self._level())._at_(y))._at_put_(x,self["@currentBrush"]);
return self._updateTable();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,6)});
//>>excludeEnd("ctx");
}));
cell=$17;
return cell;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({x:x,cell:cell},$ctx4,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({y:y},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["to:do:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self["@table"]=$2;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTableOn:",{html:html},$globals.SokobanLevelCreator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderTableOn:html\x0a\x09table := html table\x0a\x09\x09id: 'levelTable';\x0a\x09\x09style: 'border-spacing: 0; height: 0px; width: 0px; padding: 0; margin: 0; font: 0px serif;';\x0a\x09\x09with: [\x0a                \x091 to: 18 do: [:y | \x0a\x09\x09\x09\x09html tr \x0a                                      \x09style: 'border-spacing: 0; height: 0px; width: 0px; padding: 0; margin: 0; font: 0px serif;';\x0a                                     \x09id: y;\x0a                                \x09with: [ 1 to: 24 do: [:x |\x0a\x09\x09\x09\x09\x09\x09|cell|\x0a\x09\x09\x09\x09\x09\x09cell := html td \x0a\x09\x09                                      \x09style: 'border-spacing: 0; height: 0px; width: 0px; padding: 0; margin: 0; font: 0px serif; background-image: url(\x22images/emptyIcon.png\x22);';\x0a\x09\x09\x09\x09\x09\x09\x09id: x;\x0a                                                        with: [ html img src: 'images/', (self imageFor: ((self level at: y) at: x)) , 'Icon.png' ];\x0a                                                        class: ((self level at: y) at: x);\x0a                                                        onClick: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09(self level at: y) at: x put: (currentBrush). \x0a\x09\x09\x09\x09\x09\x09\x09\x09self updateTable]]]]].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "table", "style:", "with:", "to:do:", "tr", "td", "src:", "img", ",", "imageFor:", "at:", "level", "class:", "onClick:", "at:put:", "updateTable"]
}),
$globals.SokobanLevelCreator);

$core.addMethod(
$core.method({
selector: "renderTextAreaOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@textarea"]=$recv($recv(html)._textarea())._with_($recv($recv(self._level())._asString())._replace_with_("a Array ",$recv($recv($String())._cr()).__comma("#")));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderTextAreaOn:",{html:html},$globals.SokobanLevelCreator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderTextAreaOn: html\x0a\x09textarea := html textarea with: (self level asString replace: 'a Array ' with: String cr , '#')",
referencedClasses: ["String"],
//>>excludeEnd("ide");
messageSends: ["with:", "textarea", "replace:with:", "asString", "level", ",", "cr"]
}),
$globals.SokobanLevelCreator);

$core.addMethod(
$core.method({
selector: "updateTable",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@table"])._contents_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._renderTableOn_(html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updateTable",{},$globals.SokobanLevelCreator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updateTable\x0a\x09table contents: [:html | self renderTableOn: html].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "renderTableOn:"]
}),
$globals.SokobanLevelCreator);


$core.addMethod(
$core.method({
selector: "open",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
["#main", "#game", "#log"]._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(each)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
return $recv($1)._empty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self._new())._appendToJQuery_("#main"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"open",{},$globals.SokobanLevelCreator.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "open\x0a\x09#('#main' '#game' '#log') do: [:each | each asJQuery empty ].\x0a\x09self new appendToJQuery: '#main' asJQuery\x0a\x09\x22self new appendToJQuery: 'body' asJQuery\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "empty", "asJQuery", "appendToJQuery:", "new"]
}),
$globals.SokobanLevelCreator.klass);

});
