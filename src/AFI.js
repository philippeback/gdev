define("amber-gdev/AFI", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('AFI');
$core.packages["AFI"].transport = {"type":"amd","amdNamespace":"amber-gdev"};

$core.addClass('Ajax', $globals.Object, ['url', 'settings', 'options'], 'AFI');
$core.addMethod(
$core.method({
selector: "onCompleteDo:",
protocol: 'callback',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._options())._at_put_("complete",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onCompleteDo:",{aBlock:aBlock},$globals.Ajax)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onCompleteDo: aBlock\x0a\x09\x22A block to be called when the request finishes (after success and error callbacks are executed). Block arguments: jqXHR, textStatus\x22\x0a\x09self options at: 'complete' put: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "options"]
}),
$globals.Ajax);

$core.addMethod(
$core.method({
selector: "onErrorDo:",
protocol: 'callback',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._options())._at_put_("error",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onErrorDo:",{aBlock:aBlock},$globals.Ajax)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onErrorDo: aBlock\x0a\x09\x22A block to be called if the request fails.Block arguments: jqXHR, textStatus, errorThrown\x22\x0a\x09self options at: 'error' put: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "options"]
}),
$globals.Ajax);

$core.addMethod(
$core.method({
selector: "onSuccessDo:",
protocol: 'callback',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._options())._at_put_("success",aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onSuccessDo:",{aBlock:aBlock},$globals.Ajax)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "onSuccessDo: aBlock\x0a\x09\x22Set action to execute when Ajax request is successful. Pass received data as block argument. Block arguments: data, textStatus, jqXHR\x22\x0a\x09self options at: 'success' put: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "options"]
}),
$globals.Ajax);

$core.addMethod(
$core.method({
selector: "options",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@options"];
if(($receiver = $2) == null || $receiver.isNil){
self["@options"]=$recv($Dictionary())._new();
$1=self["@options"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"options",{},$globals.Ajax)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "options\x0a\x09^ options ifNil: [options := Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.Ajax);

$core.addMethod(
$core.method({
selector: "send",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(jQuery)._ajax_options_(self["@url"],self["@options"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"send",{},$globals.Ajax)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "send\x0a\x09jQuery ajax: url options: options.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ajax:options:"]
}),
$globals.Ajax);

$core.addMethod(
$core.method({
selector: "url:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@url"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "url: aString\x0a\x09url := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Ajax);


$core.addMethod(
$core.method({
selector: "url:",
protocol: 'initialize',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._url_(aString);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"url:",{aString:aString},$globals.Ajax.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "url: aString\x0a\x09^ self new \x0a\x09\x09url: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["url:", "new", "yourself"]
}),
$globals.Ajax.klass);

});
