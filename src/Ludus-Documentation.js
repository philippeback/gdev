define("amber-gdev/Ludus-Documentation", ["amber/boot", "amber_core/Web"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Ludus-Documentation');
$core.packages["Ludus-Documentation"].transport = {"type":"amd","amdNamespace":"amber-gdev"};

$core.addClass('LudusDoc', $globals.Widget, ['iframe'], 'Ludus-Documentation');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.LudusDoc.comment="Document the documentation?";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "display:",
protocol: 'not yet classified',
fn: function (aPage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=self["@iframe"];
$recv($1)._id_(aPage);
$3=$1;
$4=$recv("ludusdoc/".__comma(aPage)).__comma(".html");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._src_($4);
$recv($recv(self["@iframe"])._asJQuery())._bind_do_("load",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._resize();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"display:",{aPage:aPage},$globals.LudusDoc)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPage"],
source: "display: aPage\x0a\x09iframe id: aPage;\x0a\x09\x09src: 'ludusdoc/' , aPage , '.html'.\x0a\x0a\x09iframe asJQuery \x0a\x09\x09bind: 'load'\x0a\x09\x09do: [ self resize ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "src:", ",", "bind:do:", "asJQuery", "resize"]
}),
$globals.LudusDoc);

$core.addMethod(
$core.method({
selector: "pages",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=["Game", "Sprite", "FrameGroup", "Sound"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pages\x0a\x09^ #('Game' 'Sprite' 'FrameGroup' 'Sound').",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LudusDoc);

$core.addMethod(
$core.method({
selector: "renderDocumentationOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(html)._div();
$recv($1)._id_("links");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._pages())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$3=$recv(html)._a();
$recv($3)._class_("classLink shadowed");
$recv($3)._with_(each);
$4=$recv($3)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._display_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self["@iframe"]=$recv($recv(html)._iframe())._onChange_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._resize();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderDocumentationOn:",{html:html},$globals.LudusDoc)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderDocumentationOn: html\x0a\x09html div id: 'links'; \x0a\x09\x09with: [\x0a\x09\x09\x09self pages\x0a\x09\x09\x09\x09do: [ :each | \x0a\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09class: 'classLink shadowed';\x0a\x09\x09\x09\x09\x09with: each;\x0a\x09\x09\x09\x09\x09onClick: [ self display: each ] ] ].\x0a\x0a\x09iframe := html iframe onChange: [ self resize ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["id:", "div", "with:", "do:", "pages", "class:", "a", "onClick:", "display:", "onChange:", "iframe", "resize"]
}),
$globals.LudusDoc);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._renderDocumentationOn_(html);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.LudusDoc)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09self renderDocumentationOn: html.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["renderDocumentationOn:"]
}),
$globals.LudusDoc);

$core.addMethod(
$core.method({
selector: "resize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$8,$7,$6,$5,$4,$3,$2,$10,$9,$12,$11;
$1=$recv(self["@iframe"])._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=1;
//>>excludeEnd("ctx");
$8=$recv(self["@iframe"])._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._contentWindow();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["contentWindow"]=1;
//>>excludeEnd("ctx");
$6=$recv($7)._document();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["document"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._body();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["body"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._scrollHeight();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scrollHeight"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__comma("px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._height_($2);
$10=$recv(self["@iframe"])._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=3;
//>>excludeEnd("ctx");
$9=$recv($10)._style();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["style"]=1;
//>>excludeEnd("ctx");
$recv($9)._setProperty_to_("height","0px");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["setProperty:to:"]=1;
//>>excludeEnd("ctx");
$12=$recv(self["@iframe"])._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=4;
//>>excludeEnd("ctx");
$11=$recv($12)._style();
$recv($11)._setProperty_to_("height",$recv($recv($recv($recv($recv($recv($recv(self["@iframe"])._element())._contentWindow())._document())._body())._scrollHeight())._asString()).__comma("px"));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resize",{},$globals.LudusDoc)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resize\x0a\x09iframe element height: iframe element contentWindow document body scrollHeight asString , 'px'. \x22Needed by Firefox, although the iframe always grows, never shrinks\x22\x0a\x09iframe element style setProperty: 'height' to: '0px'. \x22Needed by Chrome\x22\x0a\x09iframe element style setProperty: 'height' to: iframe element contentWindow document body scrollHeight asString , 'px'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["height:", "element", ",", "asString", "scrollHeight", "body", "document", "contentWindow", "setProperty:to:", "style"]
}),
$globals.LudusDoc);


});
