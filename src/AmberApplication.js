define("amber-gdev/AmberApplication", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/SUnit", "amber_core/Web"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('AmberApplication');
$core.packages["AmberApplication"].transport = {"type":"amd","amdNamespace":"amber-gdev"};

$core.addClass('AmberApplication', $globals.Object, ['mainCanvas', 'logCanvas'], 'AmberApplication');
$core.addMethod(
$core.method({
selector: "addMapWidget",
protocol: 'running',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._mainCanvas();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addMapWidget",{},$globals.AmberApplication)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addMapWidget\x0a\x09self mainCanvas",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["mainCanvas"]
}),
$globals.AmberApplication);

$core.addMethod(
$core.method({
selector: "log:",
protocol: 'logging',
fn: function (aThing){
var self=this;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._logCanvas())._p_(aThing);
$recv($Transcript())._show_($recv(aThing)._asString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"log:",{aThing:aThing},$globals.AmberApplication)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aThing"],
source: "log: aThing\x0a\x09self logCanvas p: aThing.\x0a\x09Transcript show: aThing asString",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["p:", "logCanvas", "show:", "asString"]
}),
$globals.AmberApplication);

$core.addMethod(
$core.method({
selector: "logCanvas",
protocol: 'accessing',
fn: function (){
var self=this;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@logCanvas"];
if(($receiver = $2) == null || $receiver.isNil){
self["@logCanvas"]=$recv($HTMLCanvas())._onJQuery_("#log"._asJQuery());
$1=self["@logCanvas"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"logCanvas",{},$globals.AmberApplication)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "logCanvas\x0a\x09^logCanvas ifNil:[logCanvas := (HTMLCanvas onJQuery: '#log' asJQuery)]",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "onJQuery:", "asJQuery"]
}),
$globals.AmberApplication);

$core.addMethod(
$core.method({
selector: "mainCanvas",
protocol: 'accessing',
fn: function (){
var self=this;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@mainCanvas"];
if(($receiver = $2) == null || $receiver.isNil){
self["@mainCanvas"]=$recv($HTMLCanvas())._onJQuery_("#main"._asJQuery());
$1=self["@mainCanvas"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mainCanvas",{},$globals.AmberApplication)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mainCanvas\x0a  \x22Need to call mainCanvas as main is a JSProxy object mirroring the DOM\x22\x0a  ^mainCanvas ifNil: [mainCanvas := (HTMLCanvas onJQuery: '#main' asJQuery)]",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "onJQuery:", "asJQuery"]
}),
$globals.AmberApplication);

$core.addMethod(
$core.method({
selector: "run",
protocol: 'running',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._log_("Welcome to Amber");
self._setMapWidget();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"run",{},$globals.AmberApplication)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "run\x0a\x09self log: 'Welcome to Amber'.\x0a\x09\x22self sampleMain.\x22\x0a\x09self setMapWidget.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["log:", "setMapWidget"]
}),
$globals.AmberApplication);

$core.addMethod(
$core.method({
selector: "sampleMain",
protocol: 'running',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._mainCanvas())._p_("Main Area");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sampleMain",{},$globals.AmberApplication)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sampleMain\x0a\x09self mainCanvas p: 'Main Area'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["p:", "mainCanvas"]
}),
$globals.AmberApplication);

$core.addMethod(
$core.method({
selector: "setMapWidget",
protocol: 'running',
fn: function (){
var self=this;
function $MapWidget(){return $globals.MapWidget||(typeof MapWidget=="undefined"?nil:MapWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._mainCanvas())._with_($recv($MapWidget())._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setMapWidget",{},$globals.AmberApplication)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setMapWidget\x0a\x09self mainCanvas with: MapWidget new",
referencedClasses: ["MapWidget"],
//>>excludeEnd("ide");
messageSends: ["with:", "mainCanvas", "new"]
}),
$globals.AmberApplication);


$core.addMethod(
$core.method({
selector: "run",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._new())._run();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"run",{},$globals.AmberApplication.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "run\x0a\x09self new run",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["run", "new"]
}),
$globals.AmberApplication.klass);

$core.addMethod(
$core.method({
selector: "testTranscript",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
var tst;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
tst="Welcome";
$recv($Transcript())._show_(tst);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTranscript",{tst:tst},$globals.AmberApplication.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTranscript\x0a\x09|tst|\x0a\x09tst := 'Welcome'.\x0a\x09Transcript  show: tst",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["show:"]
}),
$globals.AmberApplication.klass);


$core.addClass('AmberApplicationTests', $globals.TestCase, ['app'], 'AmberApplication');
$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'testing',
fn: function (){
var self=this;
function $AmberApplication(){return $globals.AmberApplication||(typeof AmberApplication=="undefined"?nil:AmberApplication)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@app"]=$recv($AmberApplication())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.AmberApplicationTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x09app := AmberApplication new",
referencedClasses: ["AmberApplication"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.AmberApplicationTests);

$core.addMethod(
$core.method({
selector: "testLog",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv($recv(self["@app"])._log())._p_("Test Log");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testLog",{},$globals.AmberApplicationTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testLog\x0a\x09app log p: 'Test Log'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["p:", "log"]
}),
$globals.AmberApplicationTests);

$core.addMethod(
$core.method({
selector: "testTranscript",
protocol: 'testing',
fn: function (){
var self=this;
var tst;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
tst="Welcome";
$recv($Transcript())._show_(tst);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testTranscript",{tst:tst},$globals.AmberApplicationTests)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testTranscript\x0a\x09|tst|\x0a\x09tst := 'Welcome'.\x0a\x09Transcript  show: tst",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["show:"]
}),
$globals.AmberApplicationTests);



$core.addClass('MapWidget', $globals.Widget, [], 'AmberApplication');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.MapWidget.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.MapWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.MapWidget);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(html)._p_("MAPWIDGET");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.MapWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09html p: 'MAPWIDGET'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["p:"]
}),
$globals.MapWidget);


});
