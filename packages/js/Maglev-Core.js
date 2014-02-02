define("viz/Maglev-Core", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Maglev-Core');
smalltalk.packages["Maglev-Core"].transport = {"type":"amd","amdNamespace":"viz"};

smalltalk.addClass('Maglev', globals.Object, ['objectSpace', 'windows', 'bottomNavHtml'], 'Maglev-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "addWindow:",
protocol: 'interactions',
fn: function (aWindow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderNavigationItemFor_(aWindow);
_st(self["@windows"])._add_(aWindow);
self._showConnectionsFor_(aWindow);
return self}, function($ctx1) {$ctx1.fill(self,"addWindow:",{aWindow:aWindow},globals.Maglev)})},
args: ["aWindow"],
source: "addWindow: aWindow\x0a\x09self renderNavigationItemFor: aWindow.\x0a\x09windows add: aWindow.\x0a\x09self showConnectionsFor: aWindow.",
messageSends: ["renderNavigationItemFor:", "add:", "showConnectionsFor:"],
referencedClasses: []
}),
globals.Maglev);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluateWithoutUpdate:language:with:withCallback:",
protocol: 'interactions',
fn: function (code,aString,additionalParams,aBlock){
var self=this;
var params;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MaglevAjax(){return globals.MaglevAjax||(typeof MaglevAjax=="undefined"?nil:MaglevAjax)}
function $MaglevObject(){return globals.MaglevObject||(typeof MaglevObject=="undefined"?nil:MaglevObject)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Dictionary())._new();
_st($1)._at_put_("language",aString);
$ctx1.sendIdx["at:put:"]=1;
_st($1)._at_put_("code",code);
_st($1)._addAll_(additionalParams);
$2=_st($1)._yourself();
params=$2;
_st($MaglevAjax())._ajax_data_withCallback_("object/evaluate/20",params,(function(obj){
var parsedObj;
return smalltalk.withContext(function($ctx2) {
parsedObj=_st($MaglevObject())._newObjectWithoutUpdate_(obj);
parsedObj;
return _st(aBlock)._value_value_(_st(_st(parsedObj)._isException())._not(),parsedObj);
}, function($ctx2) {$ctx2.fillBlock({obj:obj,parsedObj:parsedObj},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"evaluateWithoutUpdate:language:with:withCallback:",{code:code,aString:aString,additionalParams:additionalParams,aBlock:aBlock,params:params},globals.Maglev)})},
args: ["code", "aString", "additionalParams", "aBlock"],
source: "evaluateWithoutUpdate: code language: aString with: additionalParams withCallback: aBlock\x0a\x09|params|\x0a\x09params := Dictionary new\x0a\x09\x09at: 'language' put: aString;\x0a\x09\x09at: 'code' put: code;\x0a\x09\x09addAll: additionalParams;\x0a\x09\x09yourself.\x0a\x09MaglevAjax \x0a\x09\x09ajax: 'object/evaluate/20'\x0a\x09\x09data: params\x0a\x09\x09withCallback: [:obj | |parsedObj|\x0a\x09\x09\x09parsedObj := MaglevObject newObjectWithoutUpdate: obj.\x0a\x09\x09\x09aBlock value: parsedObj isException not value: parsedObj].",
messageSends: ["at:put:", "new", "addAll:", "yourself", "ajax:data:withCallback:", "newObjectWithoutUpdate:", "value:value:", "not", "isException"],
referencedClasses: ["Dictionary", "MaglevAjax", "MaglevObject"]
}),
globals.Maglev);

smalltalk.addMethod(
smalltalk.method({
selector: "findClassNamesMatching:with:",
protocol: 'interactions',
fn: function (aSelector,aBlock){
var self=this;
function $MaglevNilClass(){return globals.MaglevNilClass||(typeof MaglevNilClass=="undefined"?nil:MaglevNilClass)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(aSelector)._isString();
if(! smalltalk.assert($1)){
self._error_("The selector should be a string");
};
$2=_st($MaglevNilClass())._instance();
$3=_st("|organizer| organizer := ClassOrganizer new. organizer findClassNamesMatching:'".__comma(aSelector)).__comma("'.");
$ctx1.sendIdx[","]=1;
_st($2)._evaluateWithoutUpdate_language_withCallback_($3,"smalltalk",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"findClassNamesMatching:with:",{aSelector:aSelector,aBlock:aBlock},globals.Maglev)})},
args: ["aSelector", "aBlock"],
source: "findClassNamesMatching: aSelector with: aBlock\x0a\x09aSelector isString ifFalse:[self error: 'The selector should be a string'].\x0a\x0a\x09MaglevNilClass instance \x0a\x09\x09evaluateWithoutUpdate: '|organizer| organizer := ClassOrganizer new. organizer findClassNamesMatching:''', aSelector, '''.' \x0a\x09\x09language: 'smalltalk'\x0a\x09\x09withCallback: aBlock.",
messageSends: ["ifFalse:", "isString", "error:", "evaluateWithoutUpdate:language:withCallback:", "instance", ","],
referencedClasses: ["MaglevNilClass"]
}),
globals.Maglev);

smalltalk.addMethod(
smalltalk.method({
selector: "findMethodNamesMatching:with:",
protocol: 'interactions',
fn: function (aSelector,aBlock){
var self=this;
function $MaglevNilClass(){return globals.MaglevNilClass||(typeof MaglevNilClass=="undefined"?nil:MaglevNilClass)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(aSelector)._isString();
if(! smalltalk.assert($1)){
self._error_("The selector should be a string");
};
$2=_st($MaglevNilClass())._instance();
$3=_st("|organizer| organizer := ClassOrganizer new. organizer findMethodNamesMatching:'".__comma(aSelector)).__comma("'.");
$ctx1.sendIdx[","]=1;
_st($2)._evaluateWithoutUpdate_language_withCallback_($3,"smalltalk",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"findMethodNamesMatching:with:",{aSelector:aSelector,aBlock:aBlock},globals.Maglev)})},
args: ["aSelector", "aBlock"],
source: "findMethodNamesMatching: aSelector with: aBlock\x0a\x09aSelector isString ifFalse:[self error: 'The selector should be a string'].\x0a\x0a\x09MaglevNilClass instance \x0a\x09\x09evaluateWithoutUpdate: '|organizer| organizer := ClassOrganizer new. organizer findMethodNamesMatching:''', aSelector, '''.' \x0a\x09\x09language: 'smalltalk'\x0a\x09\x09withCallback: aBlock.",
messageSends: ["ifFalse:", "isString", "error:", "evaluateWithoutUpdate:language:withCallback:", "instance", ","],
referencedClasses: ["MaglevNilClass"]
}),
globals.Maglev);

smalltalk.addMethod(
smalltalk.method({
selector: "implementersOf:withCallback:",
protocol: 'interactions',
fn: function (aSelector,aBlock){
var self=this;
function $MaglevNilClass(){return globals.MaglevNilClass||(typeof MaglevNilClass=="undefined"?nil:MaglevNilClass)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$5,$4,$3;
$1=_st(aSelector)._isString();
if(! smalltalk.assert($1)){
self._error_("The selector should be a string");
};
$2=_st($MaglevNilClass())._instance();
$5=_st("|organizer dict ruby smalltalk| organizer := ClassOrganizer new. dict := Array new. smalltalk := organizer implementorsOf:'".__comma(aSelector)).__comma("' asSymbol. smalltalk do:[:cls| dict addLast:{cls. 0.}]. ruby := organizer rubyImplementorsOf:'");
$ctx1.sendIdx[","]=3;
$4=_st($5).__comma(aSelector);
$ctx1.sendIdx[","]=2;
$3=_st($4).__comma("' asSymbol. ruby do:[:cls| dict addLast:{cls. 1.}]. 1 to: dict size do:[:i||cls| cls:= (dict at: i) at:1. (cls class == GsNMethod) ifTrue:[(dict at:i) at:1 put: cls inClass]]. dict");
$ctx1.sendIdx[","]=1;
_st($2)._evaluateWithoutUpdate_language_withCallback_($3,"smalltalk",aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"implementersOf:withCallback:",{aSelector:aSelector,aBlock:aBlock},globals.Maglev)})},
args: ["aSelector", "aBlock"],
source: "implementersOf: aSelector withCallback: aBlock\x0a\x09aSelector isString ifFalse:[self error: 'The selector should be a string'].\x0a\x09MaglevNilClass instance\x0a\x09\x09evaluateWithoutUpdate: '|organizer dict ruby smalltalk| organizer := ClassOrganizer new. dict := Array new. smalltalk := organizer implementorsOf:''', aSelector, ''' asSymbol. smalltalk do:[:cls| dict addLast:{cls. 0.}]. ruby := organizer rubyImplementorsOf:''', aSelector, ''' asSymbol. ruby do:[:cls| dict addLast:{cls. 1.}]. 1 to: dict size do:[:i||cls| cls:= (dict at: i) at:1. (cls class == GsNMethod) ifTrue:[(dict at:i) at:1 put: cls inClass]]. dict' \x0a\x09\x09language: 'smalltalk'\x0a\x09\x09withCallback: aBlock.",
messageSends: ["ifFalse:", "isString", "error:", "evaluateWithoutUpdate:language:withCallback:", "instance", ","],
referencedClasses: ["MaglevNilClass"]
}),
globals.Maglev);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self["@windows"]=_st($OrderedCollection())._new();
self["@bottomNavHtml"]=_st($HTMLCanvas())._onJQuery_("#windows-navigation"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Maglev)})},
args: [],
source: "initialize\x0a\x09windows := OrderedCollection new.\x0a\x09bottomNavHtml := HTMLCanvas onJQuery: '#windows-navigation' asJQuery.",
messageSends: ["new", "onJQuery:", "asJQuery"],
referencedClasses: ["OrderedCollection", "HTMLCanvas"]
}),
globals.Maglev);

smalltalk.addMethod(
smalltalk.method({
selector: "objectSpace",
protocol: 'accessing',
fn: function (){
var self=this;
function $MaglevObjectSpace(){return globals.MaglevObjectSpace||(typeof MaglevObjectSpace=="undefined"?nil:MaglevObjectSpace)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@objectSpace"];
if(($receiver = $1) == nil || $receiver == null){
self["@objectSpace"]=_st($MaglevObjectSpace())._instance();
self["@objectSpace"];
} else {
$1;
};
$2=self["@objectSpace"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"objectSpace",{},globals.Maglev)})},
args: [],
source: "objectSpace\x0a\x09objectSpace ifNil: [objectSpace := MaglevObjectSpace instance].\x0a\x09^ objectSpace",
messageSends: ["ifNil:", "instance"],
referencedClasses: ["MaglevObjectSpace"]
}),
globals.Maglev);

smalltalk.addMethod(
smalltalk.method({
selector: "removeWindow:",
protocol: 'interactions',
fn: function (aWindow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(aWindow)._navigationItem())._asJQuery())._remove();
_st(self["@windows"])._remove_(aWindow);
return self}, function($ctx1) {$ctx1.fill(self,"removeWindow:",{aWindow:aWindow},globals.Maglev)})},
args: ["aWindow"],
source: "removeWindow: aWindow\x0a\x09aWindow navigationItem asJQuery remove.\x0a\x09windows remove: aWindow.",
messageSends: ["remove", "asJQuery", "navigationItem", "remove:"],
referencedClasses: []
}),
globals.Maglev);

smalltalk.addMethod(
smalltalk.method({
selector: "renderNavigationItemFor:",
protocol: 'rendering',
fn: function (aWindow){
var self=this;
var navItem;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
navItem=_st(_st(self["@bottomNavHtml"])._li())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(self["@bottomNavHtml"])._a();
_st($1)._class_("btn btn-info window-navigation-item");
_st($1)._style_("padding: 4px 2px 2px 4px; margin-top: 5px;");
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(aWindow)._moveToFront();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(aWindow)._renderNavigationOn_(self["@bottomNavHtml"]);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
_st(aWindow)._navigationItem_(navItem);
return self}, function($ctx1) {$ctx1.fill(self,"renderNavigationItemFor:",{aWindow:aWindow,navItem:navItem},globals.Maglev)})},
args: ["aWindow"],
source: "renderNavigationItemFor: aWindow\x0a\x09|navItem|\x0a\x09navItem := bottomNavHtml li\x0a\x09\x09with: [\x0a\x09\x09\x09bottomNavHtml a\x0a\x09\x09\x09\x09class: 'btn btn-info window-navigation-item';\x0a\x09\x09\x09\x09style: 'padding: 4px 2px 2px 4px; margin-top: 5px;';\x0a\x09\x09\x09\x09onClick: [aWindow moveToFront];\x0a\x09\x09\x09\x09with: [aWindow renderNavigationOn: bottomNavHtml]].\x0a\x09aWindow navigationItem: navItem.",
messageSends: ["with:", "li", "class:", "a", "style:", "onClick:", "moveToFront", "renderNavigationOn:", "navigationItem:"],
referencedClasses: []
}),
globals.Maglev);

smalltalk.addMethod(
smalltalk.method({
selector: "showConnectionsFor:",
protocol: 'rendering',
fn: function (aWindow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@windows"])._do_((function(window){
return smalltalk.withContext(function($ctx2) {
_st(window)._checkAddConnectionTo_(aWindow);
$ctx2.sendIdx["checkAddConnectionTo:"]=1;
return _st(aWindow)._checkAddConnectionTo_(window);
}, function($ctx2) {$ctx2.fillBlock({window:window},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"showConnectionsFor:",{aWindow:aWindow},globals.Maglev)})},
args: ["aWindow"],
source: "showConnectionsFor: aWindow\x0a\x09windows do: [:window | \x0a\x09\x09window checkAddConnectionTo: aWindow.\x0a\x09\x09aWindow checkAddConnectionTo: window].",
messageSends: ["do:", "checkAddConnectionTo:"],
referencedClasses: []
}),
globals.Maglev);

smalltalk.addMethod(
smalltalk.method({
selector: "showObjectWindow:",
protocol: 'rendering',
fn: function (oop){
var self=this;
var window;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4;
$2=self._objectSpace();
$ctx1.sendIdx["objectSpace"]=1;
$1=_st($2)._hasLoadedOop_(oop);
if(! smalltalk.assert($1)){
$3=self._showReloadObjectWindow_(oop);
return $3;
};
window=_st(_st(self._objectSpace())._at_(oop))._windowViewComponent();
_st(window)._appendToWorkspace();
$4=window;
return $4;
}, function($ctx1) {$ctx1.fill(self,"showObjectWindow:",{oop:oop,window:window},globals.Maglev)})},
args: ["oop"],
source: "showObjectWindow: oop\x0a\x09|window|\x0a\x09(self objectSpace hasLoadedOop: oop)\x0a\x09\x09ifFalse: [^ self showReloadObjectWindow: oop].\x0a\x09window := (self objectSpace at: oop) windowViewComponent.\x0a\x09window appendToWorkspace.\x0a\x09^ window",
messageSends: ["ifFalse:", "hasLoadedOop:", "objectSpace", "showReloadObjectWindow:", "windowViewComponent", "at:", "appendToWorkspace"],
referencedClasses: []
}),
globals.Maglev);

smalltalk.addMethod(
smalltalk.method({
selector: "showReloadObjectWindow:",
protocol: 'rendering',
fn: function (oop){
var self=this;
var window;
function $MaglevWaitingWindow(){return globals.MaglevWaitingWindow||(typeof MaglevWaitingWindow=="undefined"?nil:MaglevWaitingWindow)}
return smalltalk.withContext(function($ctx1) { 
var $1;
window=_st($MaglevWaitingWindow())._new();
_st(window)._appendToWorkspace();
_st(self._objectSpace())._reloadObject_withCallback_(oop,(function(object){
var objWindow;
return smalltalk.withContext(function($ctx2) {
objWindow=_st(object)._windowViewComponentReplace_(window);
objWindow;
return _st(objWindow)._renderReplace();
}, function($ctx2) {$ctx2.fillBlock({object:object,objWindow:objWindow},$ctx1,1)})}));
$1=window;
return $1;
}, function($ctx1) {$ctx1.fill(self,"showReloadObjectWindow:",{oop:oop,window:window},globals.Maglev)})},
args: ["oop"],
source: "showReloadObjectWindow: oop\x0a\x09|window|\x0a\x09window := MaglevWaitingWindow new.\x0a\x09window appendToWorkspace.\x0a\x09self objectSpace\x0a\x09\x09reloadObject: oop\x0a\x09\x09withCallback: [:object | |objWindow|\x0a\x09\x09\x09objWindow := object windowViewComponentReplace: window.\x0a\x09\x09\x09objWindow renderReplace].\x0a\x09^ window",
messageSends: ["new", "appendToWorkspace", "reloadObject:withCallback:", "objectSpace", "windowViewComponentReplace:", "renderReplace"],
referencedClasses: ["MaglevWaitingWindow"]
}),
globals.Maglev);


globals.Maglev.klass.iVarNames = ['instance','defaultWorkspaceId','persistentRootId','maglevSystemId','evalObjectId','swatchDesign'];
smalltalk.addMethod(
smalltalk.method({
selector: "defaultWorkspaceId",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@defaultWorkspaceId"];
return $1;
},
args: [],
source: "defaultWorkspaceId\x0a\x09^ defaultWorkspaceId",
messageSends: [],
referencedClasses: []
}),
globals.Maglev.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultWorkspaceId:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@defaultWorkspaceId"]=anInteger;
return self},
args: ["anInteger"],
source: "defaultWorkspaceId: anInteger\x0a\x09\x22Called from JavaScript initializer.\x22\x0a\x09defaultWorkspaceId := anInteger.",
messageSends: [],
referencedClasses: []
}),
globals.Maglev.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "evalObjectId",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@evalObjectId"];
return $1;
},
args: [],
source: "evalObjectId\x0a\x09^ evalObjectId",
messageSends: [],
referencedClasses: []
}),
globals.Maglev.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "evalObjectId:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@evalObjectId"]=anInteger;
return self},
args: ["anInteger"],
source: "evalObjectId: anInteger\x0a\x09evalObjectId := anInteger.",
messageSends: [],
referencedClasses: []
}),
globals.Maglev.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "instance",
protocol: 'singleton',
fn: function (){
var self=this;
function $Maglev(){return globals.Maglev||(typeof Maglev=="undefined"?nil:Maglev)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@instance"];
if(($receiver = $1) == nil || $receiver == null){
self["@instance"]=_st($Maglev())._new();
self["@instance"];
} else {
$1;
};
$2=self["@instance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"instance",{},globals.Maglev.klass)})},
args: [],
source: "instance\x0a\x09instance ifNil: [instance := Maglev new].\x0a\x09^ instance",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Maglev"]
}),
globals.Maglev.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "maglevSystemId",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@maglevSystemId"];
return $1;
},
args: [],
source: "maglevSystemId\x0a\x09^ maglevSystemId",
messageSends: [],
referencedClasses: []
}),
globals.Maglev.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "maglevSystemId:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@maglevSystemId"]=anInteger;
return self},
args: ["anInteger"],
source: "maglevSystemId: anInteger\x0a\x09\x22Called from JavaScript initializer.\x22\x0a\x09maglevSystemId := anInteger.",
messageSends: [],
referencedClasses: []
}),
globals.Maglev.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "openWindow:",
protocol: 'initializing',
fn: function (anInteger){
var self=this;
function $Maglev(){return globals.Maglev||(typeof Maglev=="undefined"?nil:Maglev)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Maglev())._instance())._showObjectWindow_(anInteger);
return self}, function($ctx1) {$ctx1.fill(self,"openWindow:",{anInteger:anInteger},globals.Maglev.klass)})},
args: ["anInteger"],
source: "openWindow: anInteger\x0a\x09Maglev instance showObjectWindow: anInteger.",
messageSends: ["showObjectWindow:", "instance"],
referencedClasses: ["Maglev"]
}),
globals.Maglev.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "persistentRootId",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@persistentRootId"];
return $1;
},
args: [],
source: "persistentRootId\x0a\x09^ persistentRootId",
messageSends: [],
referencedClasses: []
}),
globals.Maglev.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "persistentRootId:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@persistentRootId"]=anInteger;
return self},
args: ["anInteger"],
source: "persistentRootId: anInteger\x0a\x09\x22Called from JavaScript initializer.\x22\x0a\x09persistentRootId := anInteger.",
messageSends: [],
referencedClasses: []
}),
globals.Maglev.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ready",
protocol: 'initializing',
fn: function (){
var self=this;
function $MaglevObjectSpace(){return globals.MaglevObjectSpace||(typeof MaglevObjectSpace=="undefined"?nil:MaglevObjectSpace)}
function $MaglevHaltedThreadListener(){return globals.MaglevHaltedThreadListener||(typeof MaglevHaltedThreadListener=="undefined"?nil:MaglevHaltedThreadListener)}
function $MaglevWebBrowserWindow(){return globals.MaglevWebBrowserWindow||(typeof MaglevWebBrowserWindow=="undefined"?nil:MaglevWebBrowserWindow)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self._openWindow_(self._defaultWorkspaceId());
$ctx1.sendIdx["openWindow:"]=1;
self._openWindow_(self._persistentRootId());
$ctx1.sendIdx["openWindow:"]=2;
self._openWindow_(self._maglevSystemId());
$1=_st($MaglevObjectSpace())._instance();
$ctx1.sendIdx["instance"]=1;
_st($1)._evalObject_(_st(_st($MaglevObjectSpace())._instance())._reloadObject_(self._evalObjectId()));
_st($MaglevHaltedThreadListener())._start();
_st($MaglevWebBrowserWindow())._showNew();
return self}, function($ctx1) {$ctx1.fill(self,"ready",{},globals.Maglev.klass)})},
args: [],
source: "ready\x0a\x09self openWindow: self defaultWorkspaceId.\x0a\x09self openWindow: self persistentRootId.\x0a\x09self openWindow: self maglevSystemId.\x0a\x09MaglevObjectSpace instance \x0a\x09\x09evalObject: (MaglevObjectSpace instance reloadObject: self evalObjectId).\x0a\x09MaglevHaltedThreadListener start.\x0a\x09MaglevWebBrowserWindow showNew.",
messageSends: ["openWindow:", "defaultWorkspaceId", "persistentRootId", "maglevSystemId", "evalObject:", "instance", "reloadObject:", "evalObjectId", "start", "showNew"],
referencedClasses: ["MaglevObjectSpace", "MaglevHaltedThreadListener", "MaglevWebBrowserWindow"]
}),
globals.Maglev.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "swatchDesign",
protocol: 'rendering',
fn: function (){
var self=this;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self["@swatchDesign"];
if(($receiver = $1) == nil || $receiver == null){
var html;
$2="head"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
html=_st($HTMLCanvas())._onJQuery_($2);
html;
$3=_st(html)._link();
_st($3)._href_("themes/geo-bootstrap/swatch/bootstrap.css");
$4=_st($3)._rel_("stylesheet");
self["@swatchDesign"]=$4;
self["@swatchDesign"];
} else {
_st(_st(self["@swatchDesign"])._asJQuery())._remove();
self["@swatchDesign"]=nil;
self["@swatchDesign"];
};
return self}, function($ctx1) {$ctx1.fill(self,"swatchDesign",{},globals.Maglev.klass)})},
args: [],
source: "swatchDesign\x0a\x09swatchDesign \x0a\x09\x09ifNil: [ |html|\x0a\x09\x09\x09html := HTMLCanvas onJQuery: 'head' asJQuery.\x0a\x09\x09\x09swatchDesign := html link \x0a\x09\x09\x09\x09href: 'themes/geo-bootstrap/swatch/bootstrap.css';\x0a\x09\x09\x09\x09rel: 'stylesheet']\x0a\x09\x09ifNotNil: [\x0a\x09\x09\x09swatchDesign asJQuery remove.\x0a\x09\x09\x09swatchDesign := nil].",
messageSends: ["ifNil:ifNotNil:", "onJQuery:", "asJQuery", "href:", "link", "rel:", "remove"],
referencedClasses: ["HTMLCanvas"]
}),
globals.Maglev.klass);


smalltalk.addClass('MaglevObject', globals.Object, ['oop', 'instVars', 'instVarsSize', 'virtualClassObject', 'classObject', 'inspection', 'isLoaded', 'isException', 'windows', 'customTabs'], 'Maglev-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "=",
protocol: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._oop();
$ctx1.sendIdx["oop"]=1;
$1=_st($2).__eq(_st(anObject)._oop());
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{anObject:anObject},globals.MaglevObject)})},
args: ["anObject"],
source: "= anObject\x0a\x09^ self oop = anObject oop",
messageSends: ["=", "oop"],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "==",
protocol: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._oop();
$ctx1.sendIdx["oop"]=1;
$1=_st($2).__eq_eq(_st(anObject)._oop());
return $1;
}, function($ctx1) {$ctx1.fill(self,"==",{anObject:anObject},globals.MaglevObject)})},
args: ["anObject"],
source: "== anObject\x0a\x09^ self oop == anObject oop",
messageSends: ["==", "oop"],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "addWindow:",
protocol: 'interactions',
fn: function (aWindow){
var self=this;
function $Maglev(){return globals.Maglev||(typeof Maglev=="undefined"?nil:Maglev)}
return smalltalk.withContext(function($ctx1) { 
_st(self._windows())._add_(aWindow);
_st(_st($Maglev())._instance())._addWindow_(aWindow);
return aWindow;
}, function($ctx1) {$ctx1.fill(self,"addWindow:",{aWindow:aWindow},globals.MaglevObject)})},
args: ["aWindow"],
source: "addWindow: aWindow\x0a\x09self windows add: aWindow.\x0a\x09Maglev instance addWindow: aWindow.\x0a\x09^ aWindow",
messageSends: ["add:", "windows", "addWindow:", "instance"],
referencedClasses: ["Maglev"]
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "classObject",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@classObject"];
return $1;
},
args: [],
source: "classObject\x0a\x09^ classObject",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "customTabs",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@customTabs"];
return $1;
},
args: [],
source: "customTabs\x0a\x09^ customTabs",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "ensureIsLoaded:from:to:",
protocol: 'reloading',
fn: function (collectionName,from,to){
var self=this;
var obj,params;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MaglevAjax(){return globals.MaglevAjax||(typeof MaglevAjax=="undefined"?nil:MaglevAjax)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$6,$5,$4,$7,$9,$8,$10;
$1=self._isLoaded_from_to_(collectionName,from,to);
if(smalltalk.assert($1)){
return self;
};
$2=_st($Dictionary())._new();
$3=$2;
$6=_st(collectionName)._asString();
$ctx1.sendIdx["asString"]=1;
$5="range_".__comma($6);
$ctx1.sendIdx[","]=2;
$4=_st($5).__comma("_from");
$ctx1.sendIdx[","]=1;
_st($3)._at_put_($4,from);
$ctx1.sendIdx["at:put:"]=1;
$7=$2;
$9="range_".__comma(_st(collectionName)._asString());
$ctx1.sendIdx[","]=4;
$8=_st($9).__comma("_to");
$ctx1.sendIdx[","]=3;
_st($7)._at_put_($8,to);
$10=_st($2)._yourself();
params=$10;
obj=_st($MaglevAjax())._ajax_data_("object/index/".__comma(self._oop()),params);
self._parseJSON_(obj);
return self}, function($ctx1) {$ctx1.fill(self,"ensureIsLoaded:from:to:",{collectionName:collectionName,from:from,to:to,obj:obj,params:params},globals.MaglevObject)})},
args: ["collectionName", "from", "to"],
source: "ensureIsLoaded: collectionName from: from to: to\x0a\x09|obj params|\x0a\x09(self isLoaded: collectionName from: from to: to) ifTrue: [^ self].\x0a\x09params := Dictionary new\x0a\x09\x09at: 'range_', collectionName asString, '_from' put: from;\x0a\x09\x09at: 'range_', collectionName asString, '_to' put: to;\x0a\x09\x09yourself.\x0a\x09obj := MaglevAjax \x0a\x09\x09ajax: 'object/index/', self oop\x0a\x09\x09data: params.\x0a\x09self parseJSON: obj.",
messageSends: ["ifTrue:", "isLoaded:from:to:", "at:put:", "new", ",", "asString", "yourself", "ajax:data:", "oop", "parseJSON:"],
referencedClasses: ["Dictionary", "MaglevAjax"]
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "ensureIsLoaded:from:to:withCallback:",
protocol: 'reloading',
fn: function (collectionName,from,to,aBlock){
var self=this;
var params;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MaglevAjax(){return globals.MaglevAjax||(typeof MaglevAjax=="undefined"?nil:MaglevAjax)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$6,$5,$4,$7,$9,$8,$10;
$1=self._isLoaded_from_to_(collectionName,from,to);
if(smalltalk.assert($1)){
_st(aBlock)._value();
$ctx1.sendIdx["value"]=1;
return self;
};
$2=_st($Dictionary())._new();
$3=$2;
$6=_st(collectionName)._asString();
$ctx1.sendIdx["asString"]=1;
$5="range_".__comma($6);
$ctx1.sendIdx[","]=2;
$4=_st($5).__comma("_from");
$ctx1.sendIdx[","]=1;
_st($3)._at_put_($4,from);
$ctx1.sendIdx["at:put:"]=1;
$7=$2;
$9="range_".__comma(_st(collectionName)._asString());
$ctx1.sendIdx[","]=4;
$8=_st($9).__comma("_to");
$ctx1.sendIdx[","]=3;
_st($7)._at_put_($8,to);
$10=_st($2)._yourself();
params=$10;
_st($MaglevAjax())._ajax_data_withCallback_("object/index/".__comma(self._oop()),params,(function(obj){
return smalltalk.withContext(function($ctx2) {
self._parseJSON_(obj);
return _st(aBlock)._value();
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"ensureIsLoaded:from:to:withCallback:",{collectionName:collectionName,from:from,to:to,aBlock:aBlock,params:params},globals.MaglevObject)})},
args: ["collectionName", "from", "to", "aBlock"],
source: "ensureIsLoaded: collectionName from: from to: to withCallback: aBlock\x0a\x09|params|\x0a\x09(self isLoaded: collectionName from: from to: to) ifTrue: [aBlock value. ^ self].\x0a\x09params := Dictionary new\x0a\x09\x09at: 'range_', collectionName asString, '_from' put: from;\x0a\x09\x09at: 'range_', collectionName asString, '_to' put: to;\x0a\x09\x09yourself.\x0a\x09MaglevAjax \x0a\x09\x09ajax: 'object/index/', self oop\x0a\x09\x09data: params\x0a\x09\x09withCallback: [:obj | \x0a\x09\x09\x09self parseJSON: obj.\x0a\x09\x09\x09aBlock value].",
messageSends: ["ifTrue:", "isLoaded:from:to:", "value", "at:put:", "new", ",", "asString", "yourself", "ajax:data:withCallback:", "oop", "parseJSON:"],
referencedClasses: ["Dictionary", "MaglevAjax"]
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluate:language:withCallback:",
protocol: 'interactions',
fn: function (code,aString,aBlock){
var self=this;
var params;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Dictionary())._new();
_st($1)._at_put_("language",aString);
$ctx1.sendIdx["at:put:"]=1;
_st($1)._at_put_("code",code);
$2=_st($1)._yourself();
params=$2;
return self}, function($ctx1) {$ctx1.fill(self,"evaluate:language:withCallback:",{code:code,aString:aString,aBlock:aBlock,params:params},globals.MaglevObject)})},
args: ["code", "aString", "aBlock"],
source: "evaluate: code language: aString withCallback: aBlock\x0a\x09|params|\x0a\x09params := Dictionary new\x0a\x09\x09at: 'language' put: aString;\x0a\x09\x09at: 'code' put: code;\x0a\x09\x09yourself.\x0a\x09\x22MaglevAjax \x0a\x09\x09ajax: 'object/evaluate/', oop asString\x0a\x09\x09data: params\x0a\x09\x09withCallback: [:obj | |isException parsedObj|\x0a\x09\x09\x09isException := obj at: 1.\x0a\x09\x09\x09parsedObj := MaglevObject newObject: (obj at: 2).\x0a\x09\x09\x09aBlock value: isException not value: parsedObj].\x22",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluateWithoutUpdate:language:with:withCallback:",
protocol: 'interactions',
fn: function (code,aString,additionalParams,aBlock){
var self=this;
var params;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Dictionary())._new();
_st($1)._at_put_("language",aString);
$ctx1.sendIdx["at:put:"]=1;
_st($1)._at_put_("code",code);
_st($1)._addAll_(additionalParams);
$2=_st($1)._yourself();
params=$2;
return self}, function($ctx1) {$ctx1.fill(self,"evaluateWithoutUpdate:language:with:withCallback:",{code:code,aString:aString,additionalParams:additionalParams,aBlock:aBlock,params:params},globals.MaglevObject)})},
args: ["code", "aString", "additionalParams", "aBlock"],
source: "evaluateWithoutUpdate: code language: aString with: additionalParams withCallback: aBlock\x0a\x09|params|\x0a\x09params := Dictionary new\x0a\x09\x09at: 'language' put: aString;\x0a\x09\x09at: 'code' put: code;\x0a\x09\x09addAll: additionalParams;\x0a\x09\x09yourself.\x0a\x09\x22MaglevAjax \x0a\x09\x09ajax: 'object/evaluate/', oop asString\x0a\x09\x09data: params\x0a\x09\x09withCallback: [:obj | |isException parsedObj|\x0a\x09\x09\x09isException := obj at: 1.\x0a\x09\x09\x09parsedObj := MaglevObject newObjectWithoutUpdate: (obj at: 2).\x0a\x09\x09\x09aBlock value: isException not value: parsedObj].\x22",
messageSends: ["at:put:", "new", "addAll:", "yourself"],
referencedClasses: ["Dictionary"]
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "evaluateWithoutUpdate:language:withCallback:",
protocol: 'interactions',
fn: function (code,aString,aBlock){
var self=this;
var params;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Dictionary())._new();
_st($1)._at_put_("language",aString);
$ctx1.sendIdx["at:put:"]=1;
_st($1)._at_put_("code",code);
$2=_st($1)._yourself();
params=$2;
return self}, function($ctx1) {$ctx1.fill(self,"evaluateWithoutUpdate:language:withCallback:",{code:code,aString:aString,aBlock:aBlock,params:params},globals.MaglevObject)})},
args: ["code", "aString", "aBlock"],
source: "evaluateWithoutUpdate: code language: aString withCallback: aBlock\x0a\x09|params|\x0a\x09params := Dictionary new\x0a\x09\x09at: 'language' put: aString;\x0a\x09\x09at: 'code' put: code;\x0a\x09\x09yourself.\x0a\x09\x22MaglevAjax \x0a\x09\x09ajax: 'object/evaluate/', oop asString\x0a\x09\x09data: params\x0a\x09\x09withCallback: [:obj | |isException parsedObj|\x0a\x09\x09\x09isException := obj at: 1.\x0a\x09\x09\x09parsedObj := MaglevObject newObject: (obj at: 2).\x0a\x09\x09\x09aBlock value: isException not value: parsedObj].\x22",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "fullReloadWithCallback:",
protocol: 'interactions',
fn: function (aBlock){
var self=this;
function $MaglevObjectSpace(){return globals.MaglevObjectSpace||(typeof MaglevObjectSpace=="undefined"?nil:MaglevObjectSpace)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($MaglevObjectSpace())._instance())._reloadObject_withCallback_(self["@oop"],aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"fullReloadWithCallback:",{aBlock:aBlock},globals.MaglevObject)})},
args: ["aBlock"],
source: "fullReloadWithCallback: aBlock\x0a\x09MaglevObjectSpace instance\x0a\x09\x09reloadObject: oop withCallback: aBlock.",
messageSends: ["reloadObject:withCallback:", "instance"],
referencedClasses: ["MaglevObjectSpace"]
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "hasInstVar:",
protocol: 'accessing',
fn: function (instVarName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
self._instVarsDo_((function(ivName,ivValue){
return smalltalk.withContext(function($ctx2) {
$1=_st(ivName).__eq(instVarName);
if(smalltalk.assert($1)){
throw $early=[true];
};
}, function($ctx2) {$ctx2.fillBlock({ivName:ivName,ivValue:ivValue},$ctx1,1)})}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"hasInstVar:",{instVarName:instVarName},globals.MaglevObject)})},
args: ["instVarName"],
source: "hasInstVar: instVarName\x0a\x09self instVarsDo: [:ivName :ivValue |\x0a\x09\x09ivName = instVarName ifTrue: [^ true]].\x0a\x09^ false",
messageSends: ["instVarsDo:", "ifTrue:", "="],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "hasInstVars",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@instVars"])._size()).__gt((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasInstVars",{},globals.MaglevObject)})},
args: [],
source: "hasInstVars\x0a\x09^ instVars size > 0",
messageSends: [">", "size"],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotMaglevNil:",
protocol: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBlock)._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotMaglevNil:",{aBlock:aBlock},globals.MaglevObject)})},
args: ["aBlock"],
source: "ifNotMaglevNil: aBlock\x0a\x09^ aBlock value",
messageSends: ["value"],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineViewComponent",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(_st(self._class())._inlineViewClass())._basicNew();
_st($2)._object_(self);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlineViewComponent",{},globals.MaglevObject)})},
args: [],
source: "inlineViewComponent\x0a\x09^ self class inlineViewClass basicNew\x0a\x09\x09object: self;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["object:", "basicNew", "inlineViewClass", "class", "initialize", "yourself"],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineViewComponentFull",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(_st(self._class())._inlineViewClass())._basicNew();
_st($2)._fullInspection_(true);
_st($2)._object_(self);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlineViewComponentFull",{},globals.MaglevObject)})},
args: [],
source: "inlineViewComponentFull\x0a\x09^ self class inlineViewClass basicNew\x0a\x09\x09fullInspection: true;\x0a\x09\x09object: self;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["fullInspection:", "basicNew", "inlineViewClass", "class", "object:", "initialize", "yourself"],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineViewComponentNavItem",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(_st(self._class())._inlineViewClass())._basicNew();
_st($2)._object_(self);
_st($2)._isShort_(true);
_st($2)._hasDropDown_(false);
_st($2)._isDraggable_(false);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlineViewComponentNavItem",{},globals.MaglevObject)})},
args: [],
source: "inlineViewComponentNavItem\x0a\x09^ self class inlineViewClass basicNew\x0a\x09\x09object: self;\x0a\x09\x09isShort: true;\x0a\x09\x09hasDropDown: false;\x0a\x09\x09isDraggable: false;\x0a\x09\x09yourself",
messageSends: ["object:", "basicNew", "inlineViewClass", "class", "isShort:", "hasDropDown:", "isDraggable:", "yourself"],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineViewComponentShort",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(_st(self._class())._inlineViewClass())._basicNew();
_st($2)._object_(self);
_st($2)._isShort_(true);
_st($2)._isDraggable_(false);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlineViewComponentShort",{},globals.MaglevObject)})},
args: [],
source: "inlineViewComponentShort\x0a\x09^ self class inlineViewClass basicNew\x0a\x09\x09object: self;\x0a\x09\x09isShort: true;\x0a\x09\x09isDraggable: false;\x0a\x09\x09yourself",
messageSends: ["object:", "basicNew", "inlineViewClass", "class", "isShort:", "isDraggable:", "yourself"],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineViewComponentWithDepth:",
protocol: 'rendering',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._inlineViewComponent();
_st($2)._depth_(anInteger);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inlineViewComponentWithDepth:",{anInteger:anInteger},globals.MaglevObject)})},
args: ["anInteger"],
source: "inlineViewComponentWithDepth: anInteger\x0a\x09^ self inlineViewComponent\x0a\x09\x09depth: anInteger;\x0a\x09\x09yourself",
messageSends: ["depth:", "inlineViewComponent", "yourself"],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "inspection",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@inspection"];
return $1;
},
args: [],
source: "inspection\x0a\x09^ inspection",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "instVarAt:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
_st(self["@instVars"])._keysAndValuesDo_((function(index,iv){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(_st(iv)._key())._string()).__eq(_st(aString)._asString());
if(smalltalk.assert($1)){
$2=_st(iv)._value();
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({index:index,iv:iv},$ctx1,1)})}));
self._error_("instVar not found in forwarder object: ".__comma(aString));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"instVarAt:",{aString:aString},globals.MaglevObject)})},
args: ["aString"],
source: "instVarAt: aString\x0a\x09instVars keysAndValuesDo: [:index :iv | \x0a\x09\x09iv key string = aString asString\x0a\x09\x09\x09ifTrue: [^ iv value]].\x0a\x09self error: 'instVar not found in forwarder object: ', aString.",
messageSends: ["keysAndValuesDo:", "ifTrue:", "=", "string", "key", "asString", "value", "error:", ","],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "instVarAt:ifAbsent:",
protocol: 'accessing',
fn: function (aString,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
_st(self["@instVars"])._keysAndValuesDo_((function(index,iv){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(_st(iv)._key())._string()).__eq(_st(aString)._asString());
if(smalltalk.assert($1)){
$2=_st(iv)._value();
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({index:index,iv:iv},$ctx1,1)})}));
return anObject;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"instVarAt:ifAbsent:",{aString:aString,anObject:anObject},globals.MaglevObject)})},
args: ["aString", "anObject"],
source: "instVarAt: aString ifAbsent: anObject\x0a\x09instVars keysAndValuesDo: [:index :iv | \x0a\x09\x09iv key string = aString asString\x0a\x09\x09\x09ifTrue: [^ iv value]].\x0a\x09^ anObject",
messageSends: ["keysAndValuesDo:", "ifTrue:", "=", "string", "key", "asString", "value"],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "instVars",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@instVars"];
return $1;
},
args: [],
source: "instVars\x0a\x09^ instVars",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "instVarsDo:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@instVars"])._keysAndValuesDo_((function(index,iv){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(_st(iv)._key(),_st(iv)._value());
}, function($ctx2) {$ctx2.fillBlock({index:index,iv:iv},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"instVarsDo:",{aBlock:aBlock},globals.MaglevObject)})},
args: ["aBlock"],
source: "instVarsDo: aBlock\x0a\x09instVars keysAndValuesDo: [:index :iv | aBlock value: iv key value: iv value].",
messageSends: ["keysAndValuesDo:", "value:value:", "key", "value"],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "instVarsSize",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@instVarsSize"];
return $1;
},
args: [],
source: "instVarsSize\x0a\x09^ instVarsSize",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "instancesViewComponent",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(_st(self._class())._instancesViewClass())._basicNew();
_st($2)._object_(self);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"instancesViewComponent",{},globals.MaglevObject)})},
args: [],
source: "instancesViewComponent\x0a\x09^ self class instancesViewClass basicNew\x0a\x09\x09object: self;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["object:", "basicNew", "instancesViewClass", "class", "initialize", "yourself"],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "isException",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@isException"];
return $1;
},
args: [],
source: "isException\x0a\x09^ isException",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "isGsNMethod",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isGsNMethod\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "isLoaded",
protocol: 'testing',
fn: function (){
var self=this;
var $1;
$1=self["@isLoaded"];
return $1;
},
args: [],
source: "isLoaded\x0a\x09^ isLoaded",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "isLoaded:from:to:",
protocol: 'testing',
fn: function (collectionName,from,to){
var self=this;
var collection;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
collection=self._perform_(collectionName);
_st(_st(from)._to_(to))._do_((function(index){
return smalltalk.withContext(function($ctx2) {
$1=_st(collection)._includesKey_(index);
if(! smalltalk.assert($1)){
throw $early=[false];
};
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1,1)})}));
return true;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"isLoaded:from:to:",{collectionName:collectionName,from:from,to:to,collection:collection},globals.MaglevObject)})},
args: ["collectionName", "from", "to"],
source: "isLoaded: collectionName from: from to: to\x0a\x09|collection|\x0a\x09collection := self perform: collectionName.\x0a\x09(from to: to) do: [:index |\x0a\x09\x09(collection includesKey: index) ifFalse: [^ false]].\x0a\x09^ true",
messageSends: ["perform:", "do:", "to:", "ifFalse:", "includesKey:"],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "isMaglevNil",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isMaglevNil\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "oop",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@oop"];
return $1;
},
args: [],
source: "oop\x0a\x09^ oop",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "paramsAllElements",
protocol: 'interactions',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Dictionary())._new();
_st($2)._at_put_("allElements",true);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"paramsAllElements",{},globals.MaglevObject)})},
args: [],
source: "paramsAllElements\x0a\x09^ Dictionary new\x0a\x09\x09at: 'allElements' put: true;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "paramsFullString",
protocol: 'interactions',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Dictionary())._new();
_st($2)._at_put_("fullString",true);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"paramsFullString",{},globals.MaglevObject)})},
args: [],
source: "paramsFullString\x0a\x09^ Dictionary new\x0a\x09\x09at: 'fullString' put: true;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "paramsFullStringAndElements",
protocol: 'interactions',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Dictionary())._new();
_st($2)._at_put_("allElements",true);
$ctx1.sendIdx["at:put:"]=1;
_st($2)._at_put_("fullString",true);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"paramsFullStringAndElements",{},globals.MaglevObject)})},
args: [],
source: "paramsFullStringAndElements\x0a\x09^ Dictionary new\x0a\x09\x09at: 'allElements' put: true;\x0a\x09\x09at: 'fullString' put: true;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "paramsThreadFrame",
protocol: 'interactions',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Dictionary())._new();
_st($2)._at_put_("allElements",true);
$ctx1.sendIdx["at:put:"]=1;
_st($2)._at_put_("fullString",true);
$ctx1.sendIdx["at:put:"]=2;
_st($2)._at_put_("fullMethod",true);
$ctx1.sendIdx["at:put:"]=3;
_st($2)._at_put_("noBehavior",true);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"paramsThreadFrame",{},globals.MaglevObject)})},
args: [],
source: "paramsThreadFrame\x0a\x09^ Dictionary new\x0a\x09\x09at: 'allElements' put: true;\x0a\x09\x09at: 'fullString' put: true;\x0a\x09\x09at: 'fullMethod' put: true;\x0a\x09\x09at: 'noBehavior' put: true;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSON:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MaglevObject(){return globals.MaglevObject||(typeof MaglevObject=="undefined"?nil:MaglevObject)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@isLoaded"]=true;
$1=self["@instVars"];
if(($receiver = $1) == nil || $receiver == null){
self["@instVars"]=_st($Dictionary())._new();
self["@instVars"];
} else {
$1;
};
self["@oop"]=_st(obj)._oop();
self["@isException"]=_st(obj)._exception();
self["@classObject"]=_st($MaglevObject())._newObject_(_st(obj)._classObject());
$ctx1.sendIdx["newObject:"]=1;
self["@virtualClassObject"]=_st($MaglevObject())._newObject_(_st(obj)._virtualClassObject());
$ctx1.sendIdx["newObject:"]=2;
self["@inspection"]=_st(obj)._inspection();
self["@instVarsSize"]=_st(obj)._instVarsSize();
_st(_st(obj)._instVars())._keysAndValuesDo_((function(index,assoc){
var key,value;
return smalltalk.withContext(function($ctx2) {
$2=_st(assoc)._at_((1));
$ctx2.sendIdx["at:"]=1;
key=_st($MaglevObject())._newObject_($2);
$ctx2.sendIdx["newObject:"]=3;
key;
value=_st($MaglevObject())._newObject_(_st(assoc)._at_((2)));
value;
return _st(self["@instVars"])._at_put_(_st(index)._asNumber(),_st(key).__minus_gt(value));
}, function($ctx2) {$ctx2.fillBlock({index:index,assoc:assoc,key:key,value:value},$ctx1,2)})}));
self["@customTabs"]=_st(obj)._customTabs();
return self}, function($ctx1) {$ctx1.fill(self,"parseJSON:",{obj:obj},globals.MaglevObject)})},
args: ["obj"],
source: "parseJSON: obj\x0a\x09isLoaded := true.\x0a\x09instVars ifNil: [instVars := Dictionary new].\x0a\x09oop := obj oop.\x0a\x09isException := obj exception.\x0a\x09classObject := MaglevObject newObject: obj classObject.\x0a\x09virtualClassObject := MaglevObject newObject: obj virtualClassObject.\x0a\x09inspection := obj inspection.\x0a\x09instVarsSize := obj instVarsSize.\x0a\x09obj instVars keysAndValuesDo: [:index :assoc | |key value|\x0a\x09\x09key := MaglevObject newObject: (assoc at: 1).\x0a\x09\x09value := MaglevObject newObject: (assoc at: 2).\x0a\x09\x09instVars at: index asNumber put: key -> value].\x0a\x09customTabs := obj customTabs.",
messageSends: ["ifNil:", "new", "oop", "exception", "newObject:", "classObject", "virtualClassObject", "inspection", "instVarsSize", "keysAndValuesDo:", "instVars", "at:", "at:put:", "asNumber", "->", "customTabs"],
referencedClasses: ["Dictionary", "MaglevObject"]
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSONNotLoaded:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isLoaded();
if(($receiver = $1) == nil || $receiver == null){
self["@isLoaded"]=false;
self["@isLoaded"];
} else {
$1;
};
self["@oop"]=_st(obj)._oop();
self["@inspection"]=_st(obj)._inspection();
return self}, function($ctx1) {$ctx1.fill(self,"parseJSONNotLoaded:",{obj:obj},globals.MaglevObject)})},
args: ["obj"],
source: "parseJSONNotLoaded: obj\x0a\x09self isLoaded \x0a\x09\x09ifNil: [isLoaded := false].\x0a\x09oop := obj oop.\x0a\x09inspection := obj inspection.",
messageSends: ["ifNil:", "isLoaded", "oop", "inspection"],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "removeWindow:",
protocol: 'interactions',
fn: function (aWindow){
var self=this;
function $Maglev(){return globals.Maglev||(typeof Maglev=="undefined"?nil:Maglev)}
return smalltalk.withContext(function($ctx1) { 
_st(self._windows())._remove_(aWindow);
_st(_st($Maglev())._instance())._removeWindow_(aWindow);
return aWindow;
}, function($ctx1) {$ctx1.fill(self,"removeWindow:",{aWindow:aWindow},globals.MaglevObject)})},
args: ["aWindow"],
source: "removeWindow: aWindow\x0a\x09self windows remove: aWindow.\x0a\x09Maglev instance removeWindow: aWindow.\x0a\x09^ aWindow",
messageSends: ["remove:", "windows", "removeWindow:", "instance"],
referencedClasses: ["Maglev"]
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "shortInspection",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(self["@inspection"])._size()).__gt((10));
if(smalltalk.assert($1)){
$2=_st(_st(self["@inspection"])._copyFrom_to_((1),(10))).__comma("...");
return $2;
} else {
$3=self["@inspection"];
return $3;
};
return self}, function($ctx1) {$ctx1.fill(self,"shortInspection",{},globals.MaglevObject)})},
args: [],
source: "shortInspection\x0a\x09inspection size > 10 \x0a\x09\x09ifTrue: [^ (inspection copyFrom: 1 to: 10), '...']\x0a\x09\x09ifFalse: [^ inspection].",
messageSends: ["ifTrue:ifFalse:", ">", "size", ",", "copyFrom:to:"],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "virtualClassObject",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@virtualClassObject"];
return $1;
},
args: [],
source: "virtualClassObject\x0a\x09^ virtualClassObject",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "windowViewComponent",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(_st(self._class())._windowViewClass())._basicNew();
_st($2)._object_(self);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"windowViewComponent",{},globals.MaglevObject)})},
args: [],
source: "windowViewComponent\x0a\x09^ self class windowViewClass basicNew\x0a\x09\x09object: self;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["object:", "basicNew", "windowViewClass", "class", "initialize", "yourself"],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "windowViewComponentReplace:",
protocol: 'rendering',
fn: function (aWindow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._class())._windowViewClass())._newReplace_with_(aWindow,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"windowViewComponentReplace:",{aWindow:aWindow},globals.MaglevObject)})},
args: ["aWindow"],
source: "windowViewComponentReplace: aWindow\x0a\x09^ self class windowViewClass newReplace: aWindow with: self",
messageSends: ["newReplace:with:", "windowViewClass", "class"],
referencedClasses: []
}),
globals.MaglevObject);

smalltalk.addMethod(
smalltalk.method({
selector: "windows",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@windows"];
if(($receiver = $1) == nil || $receiver == null){
self["@windows"]=_st($OrderedCollection())._new();
self["@windows"];
} else {
$1;
};
$2=self["@windows"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"windows",{},globals.MaglevObject)})},
args: [],
source: "windows\x0a\x09windows ifNil: [windows := OrderedCollection new].\x0a\x09^ windows",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
globals.MaglevObject);


globals.MaglevObject.klass.iVarNames = ['basetypes','doesUpdateObjectSpace'];
smalltalk.addMethod(
smalltalk.method({
selector: "basetype",
protocol: 'constants',
fn: function (){
var self=this;
return "object";
},
args: [],
source: "basetype\x0a\x09^ #object",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObject.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "basetypes",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@basetypes"];
return $1;
},
args: [],
source: "basetypes\x0a\x09^ basetypes",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObject.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "doesUpdateObjectSpace",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@doesUpdateObjectSpace"];
if(($receiver = $1) == nil || $receiver == null){
self["@doesUpdateObjectSpace"]=true;
self["@doesUpdateObjectSpace"];
} else {
$1;
};
$2=self["@doesUpdateObjectSpace"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"doesUpdateObjectSpace",{},globals.MaglevObject.klass)})},
args: [],
source: "doesUpdateObjectSpace\x0a\x09doesUpdateObjectSpace ifNil: [doesUpdateObjectSpace := true].\x0a\x09^ doesUpdateObjectSpace",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MaglevObject.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "doesUpdateObjectSpace:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@doesUpdateObjectSpace"]=aBoolean;
return self},
args: ["aBoolean"],
source: "doesUpdateObjectSpace: aBoolean\x0a\x09doesUpdateObjectSpace := aBoolean.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObject.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._initializeBasetypes();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.MaglevObject.klass)})},
args: [],
source: "initialize\x0a\x09self initializeBasetypes.",
messageSends: ["initializeBasetypes"],
referencedClasses: []
}),
globals.MaglevObject.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeBasetypes",
protocol: 'initializing',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st($Dictionary())._new();
$2=$1;
$3=self._basetype();
$ctx1.sendIdx["basetype"]=1;
_st($2)._at_put_($3,self);
$ctx1.sendIdx["at:put:"]=1;
$4=_st($1)._yourself();
self["@basetypes"]=$4;
_st(self._allSubclasses())._do_((function(cls){
return smalltalk.withContext(function($ctx2) {
return _st(self["@basetypes"])._at_put_(_st(cls)._basetype(),cls);
}, function($ctx2) {$ctx2.fillBlock({cls:cls},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeBasetypes",{},globals.MaglevObject.klass)})},
args: [],
source: "initializeBasetypes\x0a\x09basetypes := Dictionary new\x0a\x09\x09at: self basetype put: self;\x0a\x09\x09yourself.\x0a\x09self allSubclasses do: [:cls |\x0a\x09\x09basetypes at: cls basetype put: cls].",
messageSends: ["at:put:", "new", "basetype", "yourself", "do:", "allSubclasses"],
referencedClasses: ["Dictionary"]
}),
globals.MaglevObject.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevObjectInline(){return globals.MaglevObjectInline||(typeof MaglevObjectInline=="undefined"?nil:MaglevObjectInline)}
return $MaglevObjectInline();
},
args: [],
source: "inlineViewClass\x0a\x09^ MaglevObjectInline",
messageSends: [],
referencedClasses: ["MaglevObjectInline"]
}),
globals.MaglevObject.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "instancesViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevObjectInstancesView(){return globals.MaglevObjectInstancesView||(typeof MaglevObjectInstancesView=="undefined"?nil:MaglevObjectInstancesView)}
return $MaglevObjectInstancesView();
},
args: [],
source: "instancesViewClass\x0a\x09^ MaglevObjectInstancesView",
messageSends: [],
referencedClasses: ["MaglevObjectInstancesView"]
}),
globals.MaglevObject.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newFor:",
protocol: 'instance creation',
fn: function (aBaseType){
var self=this;
var cls;
return smalltalk.withContext(function($ctx1) { 
var $1;
cls=_st(self._basetypes())._at_ifAbsent_(_st(aBaseType)._asSymbol(),(function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Could not create forwarder object for invalid base type ".__comma(aBaseType));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$1=_st(cls)._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFor:",{aBaseType:aBaseType,cls:cls},globals.MaglevObject.klass)})},
args: ["aBaseType"],
source: "newFor: aBaseType\x0a\x09|cls|\x0a\x09cls := self basetypes \x0a\x09\x09at: aBaseType asSymbol\x0a\x09\x09ifAbsent: [self error: 'Could not create forwarder object for invalid base type ', aBaseType].\x0a\x09^ cls new",
messageSends: ["at:ifAbsent:", "basetypes", "asSymbol", "error:", ",", "new"],
referencedClasses: []
}),
globals.MaglevObject.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newObject:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
var object;
function $MaglevObjectSpace(){return globals.MaglevObjectSpace||(typeof MaglevObjectSpace=="undefined"?nil:MaglevObjectSpace)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
object=self._parseJSON_(obj);
$1=self._doesUpdateObjectSpace();
if(smalltalk.assert($1)){
_st(_st($MaglevObjectSpace())._instance())._updateObject_(object);
};
$2=object;
return $2;
}, function($ctx1) {$ctx1.fill(self,"newObject:",{obj:obj,object:object},globals.MaglevObject.klass)})},
args: ["obj"],
source: "newObject: obj\x0a\x09|object|\x0a\x09object := self parseJSON: obj.\x0a\x09self doesUpdateObjectSpace \x0a\x09\x09ifTrue: [MaglevObjectSpace instance updateObject: object].\x0a\x09^ object",
messageSends: ["parseJSON:", "ifTrue:", "doesUpdateObjectSpace", "updateObject:", "instance"],
referencedClasses: ["MaglevObjectSpace"]
}),
globals.MaglevObject.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newObjectWithoutUpdate:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
var before,result;
return smalltalk.withContext(function($ctx1) { 
var $1;
before=self._doesUpdateObjectSpace();
result=self._newObject_(obj);
self["@doesUpdateObjectSpace"]=before;
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newObjectWithoutUpdate:",{obj:obj,before:before,result:result},globals.MaglevObject.klass)})},
args: ["obj"],
source: "newObjectWithoutUpdate: obj\x0a\x09|before result|\x0a\x09before := self doesUpdateObjectSpace.\x0a\x09result := self newObject: obj.\x0a\x09doesUpdateObjectSpace := before.\x0a\x09^ result",
messageSends: ["doesUpdateObjectSpace", "newObject:"],
referencedClasses: []
}),
globals.MaglevObject.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSON:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
var object;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2,$6,$7,$5;
object=self._newFor_(_st(obj)._basetype());
$1=_st(obj)._loaded();
if(smalltalk.assert($1)){
$3=object;
_st($3)._parseJSON_(obj);
$4=_st($3)._yourself();
$ctx1.sendIdx["yourself"]=1;
$2=$4;
return $2;
} else {
$6=object;
_st($6)._parseJSONNotLoaded_(obj);
$7=_st($6)._yourself();
$5=$7;
return $5;
};
return self}, function($ctx1) {$ctx1.fill(self,"parseJSON:",{obj:obj,object:object},globals.MaglevObject.klass)})},
args: ["obj"],
source: "parseJSON: obj\x0a\x09|object|\x0a\x09object := self newFor: obj basetype.\x0a\x09obj loaded\x0a\x09\x09ifTrue: [^ object parseJSON: obj; yourself]\x0a\x09\x09ifFalse: [^ object parseJSONNotLoaded: obj; yourself].",
messageSends: ["newFor:", "basetype", "ifTrue:ifFalse:", "loaded", "parseJSON:", "yourself", "parseJSONNotLoaded:"],
referencedClasses: []
}),
globals.MaglevObject.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevObjectWindow(){return globals.MaglevObjectWindow||(typeof MaglevObjectWindow=="undefined"?nil:MaglevObjectWindow)}
return $MaglevObjectWindow();
},
args: [],
source: "windowViewClass\x0a\x09^ MaglevObjectWindow",
messageSends: [],
referencedClasses: ["MaglevObjectWindow"]
}),
globals.MaglevObject.klass);


smalltalk.addClass('MaglevArray', globals.MaglevObject, ['elements', 'elementsSize'], 'Maglev-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "at:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._elements())._at_(anInteger);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{anInteger:anInteger},globals.MaglevArray)})},
args: ["anInteger"],
source: "at: anInteger\x0a\x09^ self elements at: anInteger",
messageSends: ["at:", "elements"],
referencedClasses: []
}),
globals.MaglevArray);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._elements())._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},globals.MaglevArray)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09self elements do: aBlock.",
messageSends: ["do:", "elements"],
referencedClasses: []
}),
globals.MaglevArray);

smalltalk.addMethod(
smalltalk.method({
selector: "elements",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@elements"];
return $1;
},
args: [],
source: "elements\x0a\x09^ elements",
messageSends: [],
referencedClasses: []
}),
globals.MaglevArray);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsSize",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@elementsSize"];
return $1;
},
args: [],
source: "elementsSize\x0a\x09^ elementsSize",
messageSends: [],
referencedClasses: []
}),
globals.MaglevArray);

smalltalk.addMethod(
smalltalk.method({
selector: "hasElements",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._elementsSize()).__gt((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasElements",{},globals.MaglevArray)})},
args: [],
source: "hasElements\x0a\x09^ self elementsSize > 0",
messageSends: [">", "elementsSize"],
referencedClasses: []
}),
globals.MaglevArray);

smalltalk.addMethod(
smalltalk.method({
selector: "isFullyLoaded",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._elementsSize()).__eq_eq(_st(self._elements())._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isFullyLoaded",{},globals.MaglevArray)})},
args: [],
source: "isFullyLoaded\x0a\x09^ self elementsSize == self elements size",
messageSends: ["==", "elementsSize", "size", "elements"],
referencedClasses: []
}),
globals.MaglevArray);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSON:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MaglevObject(){return globals.MaglevObject||(typeof MaglevObject=="undefined"?nil:MaglevObject)}
return smalltalk.withContext(function($ctx1) { 
var $1;
globals.MaglevArray.superclass.fn.prototype._parseJSON_.apply(_st(self), [obj]);
$1=self["@elements"];
if(($receiver = $1) == nil || $receiver == null){
self["@elements"]=_st($Dictionary())._new();
self["@elements"];
} else {
$1;
};
self["@elementsSize"]=_st(obj)._elementsSize();
_st(_st(obj)._elements())._keysAndValuesDo_((function(index,element){
return smalltalk.withContext(function($ctx2) {
return _st(self["@elements"])._at_put_(_st(index)._asNumber(),_st($MaglevObject())._newObject_(element));
}, function($ctx2) {$ctx2.fillBlock({index:index,element:element},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"parseJSON:",{obj:obj},globals.MaglevArray)})},
args: ["obj"],
source: "parseJSON: obj\x0a\x09super parseJSON: obj.\x0a\x09elements ifNil: [elements := Dictionary new].\x0a\x09elementsSize := obj elementsSize.\x0a\x09obj elements keysAndValuesDo: [:index :element |\x0a\x09\x09elements at: index asNumber put: (MaglevObject newObject: element)].",
messageSends: ["parseJSON:", "ifNil:", "new", "elementsSize", "keysAndValuesDo:", "elements", "at:put:", "asNumber", "newObject:"],
referencedClasses: ["Dictionary", "MaglevObject"]
}),
globals.MaglevArray);


smalltalk.addMethod(
smalltalk.method({
selector: "basetype",
protocol: 'constants',
fn: function (){
var self=this;
return "array";
},
args: [],
source: "basetype\x0a\x09^ #array",
messageSends: [],
referencedClasses: []
}),
globals.MaglevArray.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevArrayInline(){return globals.MaglevArrayInline||(typeof MaglevArrayInline=="undefined"?nil:MaglevArrayInline)}
return $MaglevArrayInline();
},
args: [],
source: "inlineViewClass\x0a\x09^ MaglevArrayInline",
messageSends: [],
referencedClasses: ["MaglevArrayInline"]
}),
globals.MaglevArray.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevArrayWindow(){return globals.MaglevArrayWindow||(typeof MaglevArrayWindow=="undefined"?nil:MaglevArrayWindow)}
return $MaglevArrayWindow();
},
args: [],
source: "windowViewClass\x0a\x09^ MaglevArrayWindow",
messageSends: [],
referencedClasses: ["MaglevArrayWindow"]
}),
globals.MaglevArray.klass);


smalltalk.addClass('MaglevBoolean', globals.MaglevObject, ['value'], 'Maglev-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "parseJSON:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.MaglevBoolean.superclass.fn.prototype._parseJSON_.apply(_st(self), [obj]);
self["@value"]=_st(obj)._value();
return self}, function($ctx1) {$ctx1.fill(self,"parseJSON:",{obj:obj},globals.MaglevBoolean)})},
args: ["obj"],
source: "parseJSON: obj\x0a\x09super parseJSON: obj.\x0a\x09value := obj value.",
messageSends: ["parseJSON:", "value"],
referencedClasses: []
}),
globals.MaglevBoolean);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSONNotLoaded:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.MaglevBoolean.superclass.fn.prototype._parseJSONNotLoaded_.apply(_st(self), [obj]);
self["@value"]=_st(obj)._value();
return self}, function($ctx1) {$ctx1.fill(self,"parseJSONNotLoaded:",{obj:obj},globals.MaglevBoolean)})},
args: ["obj"],
source: "parseJSONNotLoaded: obj\x0a\x09super parseJSONNotLoaded: obj.\x0a\x09value := obj value.",
messageSends: ["parseJSONNotLoaded:", "value"],
referencedClasses: []
}),
globals.MaglevBoolean);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@value"];
return $1;
},
args: [],
source: "value\x0a\x09^ value",
messageSends: [],
referencedClasses: []
}),
globals.MaglevBoolean);


smalltalk.addMethod(
smalltalk.method({
selector: "basetype",
protocol: 'constants',
fn: function (){
var self=this;
return "boolean";
},
args: [],
source: "basetype\x0a\x09^ #boolean",
messageSends: [],
referencedClasses: []
}),
globals.MaglevBoolean.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevBooleanInline(){return globals.MaglevBooleanInline||(typeof MaglevBooleanInline=="undefined"?nil:MaglevBooleanInline)}
return $MaglevBooleanInline();
},
args: [],
source: "inlineViewClass\x0a\x09^ MaglevBooleanInline",
messageSends: [],
referencedClasses: ["MaglevBooleanInline"]
}),
globals.MaglevBoolean.klass);


smalltalk.addClass('MaglevDictionary', globals.MaglevObject, ['elements', 'elementsSize'], 'Maglev-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "at:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._elements())._at_(anInteger);
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{anInteger:anInteger},globals.MaglevDictionary)})},
args: ["anInteger"],
source: "at: anInteger\x0a\x09^ self elements at: anInteger",
messageSends: ["at:", "elements"],
referencedClasses: []
}),
globals.MaglevDictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "atKey:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
_st(self._elements())._do_((function(assoc){
return smalltalk.withContext(function($ctx2) {
$1=_st(anObject).__eq(_st(assoc)._key());
if(smalltalk.assert($1)){
$2=_st(assoc)._value();
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1,1)})}));
self._error_("Object is not in the collection");
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"atKey:",{anObject:anObject},globals.MaglevDictionary)})},
args: ["anObject"],
source: "atKey: anObject\x0a\x09self elements do: [:assoc |\x0a\x09\x09anObject = assoc key\x0a\x09\x09\x09ifTrue: [^ assoc value]].\x0a\x09self error: 'Object is not in the collection'.",
messageSends: ["do:", "elements", "ifTrue:", "=", "key", "value", "error:"],
referencedClasses: []
}),
globals.MaglevDictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "atKeyInspection:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
_st(self._elements())._do_((function(assoc){
return smalltalk.withContext(function($ctx2) {
$1=_st(anObject).__eq(_st(_st(assoc)._key())._inspection());
if(smalltalk.assert($1)){
$2=_st(assoc)._value();
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1,1)})}));
self._error_("Object is not in the collection");
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"atKeyInspection:",{anObject:anObject},globals.MaglevDictionary)})},
args: ["anObject"],
source: "atKeyInspection: anObject\x0a\x09self elements do: [:assoc |\x0a\x09\x09anObject = assoc key inspection\x0a\x09\x09\x09ifTrue: [^ assoc value]].\x0a\x09self error: 'Object is not in the collection'.",
messageSends: ["do:", "elements", "ifTrue:", "=", "inspection", "key", "value", "error:"],
referencedClasses: []
}),
globals.MaglevDictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "atKeyString:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
_st(self._elements())._do_((function(assoc){
return smalltalk.withContext(function($ctx2) {
$1=_st(anObject).__eq(_st(_st(assoc)._key())._string());
if(smalltalk.assert($1)){
$2=_st(assoc)._value();
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1,1)})}));
self._error_("Object is not in the collection");
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"atKeyString:",{anObject:anObject},globals.MaglevDictionary)})},
args: ["anObject"],
source: "atKeyString: anObject\x0a\x09self elements do: [:assoc |\x0a\x09\x09anObject = assoc key string\x0a\x09\x09\x09ifTrue: [^ assoc value]].\x0a\x09self error: 'Object is not in the collection'.",
messageSends: ["do:", "elements", "ifTrue:", "=", "string", "key", "value", "error:"],
referencedClasses: []
}),
globals.MaglevDictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "elements",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@elements"];
return $1;
},
args: [],
source: "elements\x0a\x09^ elements",
messageSends: [],
referencedClasses: []
}),
globals.MaglevDictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsSize",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@elementsSize"];
return $1;
},
args: [],
source: "elementsSize\x0a\x09^ elementsSize",
messageSends: [],
referencedClasses: []
}),
globals.MaglevDictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "hasElements",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._elementsSize()).__gt((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasElements",{},globals.MaglevDictionary)})},
args: [],
source: "hasElements\x0a\x09^ self elementsSize > 0",
messageSends: [">", "elementsSize"],
referencedClasses: []
}),
globals.MaglevDictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "includesKey:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
_st(self._elements())._do_((function(assoc){
return smalltalk.withContext(function($ctx2) {
$1=_st(anObject).__eq(_st(assoc)._key());
if(smalltalk.assert($1)){
throw $early=[true];
};
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1,1)})}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"includesKey:",{anObject:anObject},globals.MaglevDictionary)})},
args: ["anObject"],
source: "includesKey: anObject\x0a\x09self elements do: [:assoc |\x0a\x09\x09anObject = assoc key\x0a\x09\x09\x09ifTrue: [^ true]].\x0a\x09^ false",
messageSends: ["do:", "elements", "ifTrue:", "=", "key"],
referencedClasses: []
}),
globals.MaglevDictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "isFullyLoaded",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._elementsSize()).__eq_eq(_st(self._elements())._size());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isFullyLoaded",{},globals.MaglevDictionary)})},
args: [],
source: "isFullyLoaded\x0a\x09^ self elementsSize == self elements size",
messageSends: ["==", "elementsSize", "size", "elements"],
referencedClasses: []
}),
globals.MaglevDictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "keysAndValuesDo:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._keysAndValuesDo_((function(index,kv){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_value_(_st(kv)._key(),_st(kv)._value());
}, function($ctx2) {$ctx2.fillBlock({index:index,kv:kv},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"keysAndValuesDo:",{aBlock:aBlock},globals.MaglevDictionary)})},
args: ["aBlock"],
source: "keysAndValuesDo: aBlock\x0a\x09elements keysAndValuesDo: [:index :kv | aBlock value: kv key value: kv value].",
messageSends: ["keysAndValuesDo:", "value:value:", "key", "value"],
referencedClasses: []
}),
globals.MaglevDictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSON:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MaglevObject(){return globals.MaglevObject||(typeof MaglevObject=="undefined"?nil:MaglevObject)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
globals.MaglevDictionary.superclass.fn.prototype._parseJSON_.apply(_st(self), [obj]);
$1=self["@elements"];
if(($receiver = $1) == nil || $receiver == null){
self["@elements"]=_st($Dictionary())._new();
self["@elements"];
} else {
$1;
};
self["@elementsSize"]=_st(obj)._elementsSize();
_st(_st(obj)._elements())._keysAndValuesDo_((function(index,assoc){
var key,value;
return smalltalk.withContext(function($ctx2) {
$2=_st(assoc)._at_((1));
$ctx2.sendIdx["at:"]=1;
key=_st($MaglevObject())._newObject_($2);
$ctx2.sendIdx["newObject:"]=1;
key;
value=_st($MaglevObject())._newObject_(_st(assoc)._at_((2)));
value;
return _st(self["@elements"])._at_put_(_st(index)._asNumber(),_st(key).__minus_gt(value));
}, function($ctx2) {$ctx2.fillBlock({index:index,assoc:assoc,key:key,value:value},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"parseJSON:",{obj:obj},globals.MaglevDictionary)})},
args: ["obj"],
source: "parseJSON: obj\x0a\x09super parseJSON: obj.\x0a\x09elements ifNil: [elements := Dictionary new].\x0a\x09elementsSize := obj elementsSize.\x0a\x09obj elements keysAndValuesDo: [:index :assoc | |key value|\x0a\x09\x09key := MaglevObject newObject: (assoc at: 1).\x0a\x09\x09value := MaglevObject newObject: (assoc at: 2).\x0a\x09\x09elements at: index asNumber put: key -> value].",
messageSends: ["parseJSON:", "ifNil:", "new", "elementsSize", "keysAndValuesDo:", "elements", "newObject:", "at:", "at:put:", "asNumber", "->"],
referencedClasses: ["Dictionary", "MaglevObject"]
}),
globals.MaglevDictionary);

smalltalk.addMethod(
smalltalk.method({
selector: "valuesDo:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._elements())._do_((function(assoc){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(_st(assoc)._value());
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"valuesDo:",{aBlock:aBlock},globals.MaglevDictionary)})},
args: ["aBlock"],
source: "valuesDo: aBlock\x0a\x09self elements do: [:assoc |\x0a\x09\x09aBlock value: assoc value].",
messageSends: ["do:", "elements", "value:", "value"],
referencedClasses: []
}),
globals.MaglevDictionary);


smalltalk.addMethod(
smalltalk.method({
selector: "basetype",
protocol: 'constants',
fn: function (){
var self=this;
return "dictionary";
},
args: [],
source: "basetype\x0a\x09^ #dictionary",
messageSends: [],
referencedClasses: []
}),
globals.MaglevDictionary.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevHashInline(){return globals.MaglevHashInline||(typeof MaglevHashInline=="undefined"?nil:MaglevHashInline)}
return $MaglevHashInline();
},
args: [],
source: "inlineViewClass\x0a\x09^ MaglevHashInline",
messageSends: [],
referencedClasses: ["MaglevHashInline"]
}),
globals.MaglevDictionary.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevHashWindow(){return globals.MaglevHashWindow||(typeof MaglevHashWindow=="undefined"?nil:MaglevHashWindow)}
return $MaglevHashWindow();
},
args: [],
source: "windowViewClass\x0a\x09^ MaglevHashWindow",
messageSends: [],
referencedClasses: ["MaglevHashWindow"]
}),
globals.MaglevDictionary.klass);


smalltalk.addClass('MaglevHash', globals.MaglevDictionary, ['elements', 'elementsSize'], 'Maglev-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "basetype",
protocol: 'constants',
fn: function (){
var self=this;
return "hash";
},
args: [],
source: "basetype\x0a\x09^ #hash",
messageSends: [],
referencedClasses: []
}),
globals.MaglevHash.klass);


smalltalk.addClass('MaglevException', globals.MaglevObject, ['gsResumable', 'gsTrappable', 'gsNumber', 'isDBEHalt'], 'Maglev-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "isDBEHalt",
protocol: 'testing',
fn: function (){
var self=this;
var $1;
$1=self["@isDBEHalt"];
return $1;
},
args: [],
source: "isDBEHalt\x0a\x09^ isDBEHalt",
messageSends: [],
referencedClasses: []
}),
globals.MaglevException);

smalltalk.addMethod(
smalltalk.method({
selector: "isResumable",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@gsResumable"];
return $1;
},
args: [],
source: "isResumable\x0a\x09^ gsResumable",
messageSends: [],
referencedClasses: []
}),
globals.MaglevException);

smalltalk.addMethod(
smalltalk.method({
selector: "isTrappable",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@gsTrappable"];
return $1;
},
args: [],
source: "isTrappable\x0a\x09^ gsTrappable",
messageSends: [],
referencedClasses: []
}),
globals.MaglevException);

smalltalk.addMethod(
smalltalk.method({
selector: "number",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@gsNumber"];
return $1;
},
args: [],
source: "number\x0a\x09^ gsNumber",
messageSends: [],
referencedClasses: []
}),
globals.MaglevException);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSON:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.MaglevException.superclass.fn.prototype._parseJSON_.apply(_st(self), [obj]);
self["@gsTrappable"]=_st(obj)._gsTrappable();
self["@gsResumable"]=_st(obj)._gsResumable();
self["@gsNumber"]=_st(obj)._at_("gsNumber");
self["@isDBEHalt"]=_st(obj)._isDBEHalt();
return self}, function($ctx1) {$ctx1.fill(self,"parseJSON:",{obj:obj},globals.MaglevException)})},
args: ["obj"],
source: "parseJSON: obj\x0a\x09super parseJSON: obj.\x0a\x09gsTrappable := obj gsTrappable.\x0a\x09gsResumable := obj gsResumable.\x0a\x09gsNumber := obj at: 'gsNumber'. \x22gsNumber might be nil\x22\x0a\x09isDBEHalt := obj isDBEHalt.",
messageSends: ["parseJSON:", "gsTrappable", "gsResumable", "at:", "isDBEHalt"],
referencedClasses: []
}),
globals.MaglevException);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSONNotLoaded:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.MaglevException.superclass.fn.prototype._parseJSONNotLoaded_.apply(_st(self), [obj]);
self["@gsTrappable"]=_st(obj)._gsTrappable();
self["@gsResumable"]=_st(obj)._gsResumable();
self["@gsNumber"]=_st(obj)._at_("gsNumber");
self["@isDBEHalt"]=_st(obj)._isDBEHalt();
return self}, function($ctx1) {$ctx1.fill(self,"parseJSONNotLoaded:",{obj:obj},globals.MaglevException)})},
args: ["obj"],
source: "parseJSONNotLoaded: obj\x0a\x09super parseJSONNotLoaded: obj.\x0a\x09gsTrappable := obj gsTrappable.\x0a\x09gsResumable := obj gsResumable.\x0a\x09gsNumber := obj at: 'gsNumber'. \x22gsNumber might be nil\x22\x0a\x09isDBEHalt := obj isDBEHalt.",
messageSends: ["parseJSONNotLoaded:", "gsTrappable", "gsResumable", "at:", "isDBEHalt"],
referencedClasses: []
}),
globals.MaglevException);


smalltalk.addMethod(
smalltalk.method({
selector: "basetype",
protocol: 'constants',
fn: function (){
var self=this;
return "exception";
},
args: [],
source: "basetype\x0a\x09^ #exception",
messageSends: [],
referencedClasses: []
}),
globals.MaglevException.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevExceptionInline(){return globals.MaglevExceptionInline||(typeof MaglevExceptionInline=="undefined"?nil:MaglevExceptionInline)}
return $MaglevExceptionInline();
},
args: [],
source: "inlineViewClass\x0a\x09^ MaglevExceptionInline",
messageSends: [],
referencedClasses: ["MaglevExceptionInline"]
}),
globals.MaglevException.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevExceptionWindow(){return globals.MaglevExceptionWindow||(typeof MaglevExceptionWindow=="undefined"?nil:MaglevExceptionWindow)}
return $MaglevExceptionWindow();
},
args: [],
source: "windowViewClass\x0a\x09^ MaglevExceptionWindow",
messageSends: [],
referencedClasses: ["MaglevExceptionWindow"]
}),
globals.MaglevException.klass);


smalltalk.addClass('MaglevFixnum', globals.MaglevObject, [], 'Maglev-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "number",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@inspection"])._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"number",{},globals.MaglevFixnum)})},
args: [],
source: "number\x0a\x09^ inspection asNumber",
messageSends: ["asNumber"],
referencedClasses: []
}),
globals.MaglevFixnum);


smalltalk.addMethod(
smalltalk.method({
selector: "basetype",
protocol: 'constants',
fn: function (){
var self=this;
return "fixnum";
},
args: [],
source: "basetype\x0a\x09^ #fixnum",
messageSends: [],
referencedClasses: []
}),
globals.MaglevFixnum.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevFixnumInline(){return globals.MaglevFixnumInline||(typeof MaglevFixnumInline=="undefined"?nil:MaglevFixnumInline)}
return $MaglevFixnumInline();
},
args: [],
source: "inlineViewClass\x0a\x09^ MaglevFixnumInline",
messageSends: [],
referencedClasses: ["MaglevFixnumInline"]
}),
globals.MaglevFixnum.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevFixnumWindow(){return globals.MaglevFixnumWindow||(typeof MaglevFixnumWindow=="undefined"?nil:MaglevFixnumWindow)}
return $MaglevFixnumWindow();
},
args: [],
source: "windowViewClass\x0a\x09^ MaglevFixnumWindow",
messageSends: [],
referencedClasses: ["MaglevFixnumWindow"]
}),
globals.MaglevFixnum.klass);


smalltalk.addClass('MaglevFloat', globals.MaglevObject, [], 'Maglev-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "number",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@inspection"])._asNumber();
return $1;
}, function($ctx1) {$ctx1.fill(self,"number",{},globals.MaglevFloat)})},
args: [],
source: "number\x0a\x09^ inspection asNumber",
messageSends: ["asNumber"],
referencedClasses: []
}),
globals.MaglevFloat);


smalltalk.addMethod(
smalltalk.method({
selector: "basetype",
protocol: 'constants',
fn: function (){
var self=this;
return "float";
},
args: [],
source: "basetype\x0a\x09^ #float",
messageSends: [],
referencedClasses: []
}),
globals.MaglevFloat.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevFloatInline(){return globals.MaglevFloatInline||(typeof MaglevFloatInline=="undefined"?nil:MaglevFloatInline)}
return $MaglevFloatInline();
},
args: [],
source: "inlineViewClass\x0a\x09^ MaglevFloatInline",
messageSends: [],
referencedClasses: ["MaglevFloatInline"]
}),
globals.MaglevFloat.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevFloatWindow(){return globals.MaglevFloatWindow||(typeof MaglevFloatWindow=="undefined"?nil:MaglevFloatWindow)}
return $MaglevFloatWindow();
},
args: [],
source: "windowViewClass\x0a\x09^ MaglevFloatWindow",
messageSends: [],
referencedClasses: ["MaglevFloatWindow"]
}),
globals.MaglevFloat.klass);


smalltalk.addClass('MaglevGsNMethod', globals.MaglevObject, ['selectorString', 'argsAndTemps', 'descrForStack'], 'Maglev-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "argsAndTemps",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@argsAndTemps"];
return $1;
},
args: [],
source: "argsAndTemps\x0a\x09^ argsAndTemps",
messageSends: [],
referencedClasses: []
}),
globals.MaglevGsNMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "compileRubySourceCode:withCallback:",
protocol: 'interactions',
fn: function (sourceCode,aBlock){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
_st(self._inClass())._evaluateWithoutUpdate_language_with_withCallback_(sourceCode,"rubyClass",_st($Dictionary())._new(),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"compileRubySourceCode:withCallback:",{sourceCode:sourceCode,aBlock:aBlock},globals.MaglevGsNMethod)})},
args: ["sourceCode", "aBlock"],
source: "compileRubySourceCode: sourceCode withCallback: aBlock\x0a\x09self inClass\x0a\x09\x09evaluateWithoutUpdate: sourceCode\x0a\x09\x09language: 'rubyClass'\x0a\x09\x09with: Dictionary new\x0a\x09\x09withCallback: aBlock.",
messageSends: ["evaluateWithoutUpdate:language:with:withCallback:", "inClass", "new"],
referencedClasses: ["Dictionary"]
}),
globals.MaglevGsNMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "compileSmalltalkSourceCode:withCallback:",
protocol: 'interactions',
fn: function (sourceCode,aBlock){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._inClass();
$2=_st("self compile: '".__comma(_st(sourceCode)._escapedString())).__comma("'.");
$ctx1.sendIdx[","]=1;
_st($1)._evaluateWithoutUpdate_language_with_withCallback_($2,"smalltalk",_st($Dictionary())._new(),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"compileSmalltalkSourceCode:withCallback:",{sourceCode:sourceCode,aBlock:aBlock},globals.MaglevGsNMethod)})},
args: ["sourceCode", "aBlock"],
source: "compileSmalltalkSourceCode: sourceCode withCallback: aBlock\x0a\x09self inClass\x0a\x09\x09evaluateWithoutUpdate: 'self compile: ''', sourceCode escapedString, '''.'\x0a\x09\x09language: 'smalltalk'\x0a\x09\x09with: Dictionary new\x0a\x09\x09withCallback: aBlock.",
messageSends: ["evaluateWithoutUpdate:language:with:withCallback:", "inClass", ",", "escapedString", "new"],
referencedClasses: ["Dictionary"]
}),
globals.MaglevGsNMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "debugInfo",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._instVarAt_("@_st_debugInfo");
return $1;
}, function($ctx1) {$ctx1.fill(self,"debugInfo",{},globals.MaglevGsNMethod)})},
args: [],
source: "debugInfo\x0a\x09^ self instVarAt: '@_st_debugInfo'",
messageSends: ["instVarAt:"],
referencedClasses: []
}),
globals.MaglevGsNMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "debugInfoFileNameOffset",
protocol: 'constants',
fn: function (){
var self=this;
return (4);
},
args: [],
source: "debugInfoFileNameOffset\x0a\x09^ 4",
messageSends: [],
referencedClasses: []
}),
globals.MaglevGsNMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "debugInfoSourceOffset",
protocol: 'constants',
fn: function (){
var self=this;
return (2);
},
args: [],
source: "debugInfoSourceOffset\x0a\x09^ 2",
messageSends: [],
referencedClasses: []
}),
globals.MaglevGsNMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "descrForStack",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@descrForStack"];
return $1;
},
args: [],
source: "descrForStack\x0a\x09^ descrForStack",
messageSends: [],
referencedClasses: []
}),
globals.MaglevGsNMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "environmentId",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._selector())._number())._bitShift_((0).__minus(self._siSelectorIdEnvShift())))._bitAnd_(self._selectorIdEnvMask());
return $1;
}, function($ctx1) {$ctx1.fill(self,"environmentId",{},globals.MaglevGsNMethod)})},
args: [],
source: "environmentId\x0a\x09^ (self selector number bitShift: 0 - self siSelectorIdEnvShift) bitAnd: self selectorIdEnvMask",
messageSends: ["bitAnd:", "bitShift:", "number", "selector", "-", "siSelectorIdEnvShift", "selectorIdEnvMask"],
referencedClasses: []
}),
globals.MaglevGsNMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "filename",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._debugInfo())._at_(self._debugInfoFileNameOffset());
return $1;
}, function($ctx1) {$ctx1.fill(self,"filename",{},globals.MaglevGsNMethod)})},
args: [],
source: "filename\x0a\x09^ self debugInfo at: self debugInfoFileNameOffset",
messageSends: ["at:", "debugInfo", "debugInfoFileNameOffset"],
referencedClasses: []
}),
globals.MaglevGsNMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "fullReloadWithCallback:",
protocol: 'interactions',
fn: function (aBlock){
var self=this;
function $MaglevObjectSpace(){return globals.MaglevObjectSpace||(typeof MaglevObjectSpace=="undefined"?nil:MaglevObjectSpace)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($MaglevObjectSpace())._instance())._reloadObject_withCallback_params_(self["@oop"],aBlock,self._paramsFullString());
return self}, function($ctx1) {$ctx1.fill(self,"fullReloadWithCallback:",{aBlock:aBlock},globals.MaglevGsNMethod)})},
args: ["aBlock"],
source: "fullReloadWithCallback: aBlock\x0a\x09MaglevObjectSpace instance\x0a\x09\x09reloadObject: oop \x0a\x09\x09withCallback: aBlock \x0a\x09\x09params: self paramsFullString.",
messageSends: ["reloadObject:withCallback:params:", "instance", "paramsFullString"],
referencedClasses: ["MaglevObjectSpace"]
}),
globals.MaglevGsNMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "inClass",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._instVarAt_("@_st_inClass");
return $1;
}, function($ctx1) {$ctx1.fill(self,"inClass",{},globals.MaglevGsNMethod)})},
args: [],
source: "inClass\x0a\x09^ self instVarAt: '@_st_inClass'",
messageSends: ["instVarAt:"],
referencedClasses: []
}),
globals.MaglevGsNMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "isGsNMethod",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isGsNMethod\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.MaglevGsNMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSON:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
function $MaglevObject(){return globals.MaglevObject||(typeof MaglevObject=="undefined"?nil:MaglevObject)}
return smalltalk.withContext(function($ctx1) { 
globals.MaglevGsNMethod.superclass.fn.prototype._parseJSON_.apply(_st(self), [obj]);
self["@selectorString"]=_st($MaglevObject())._newObject_(_st(obj)._selectorString());
$ctx1.sendIdx["newObject:"]=1;
self["@argsAndTemps"]=_st($MaglevObject())._newObject_(_st(obj)._argsAndTemps());
$ctx1.sendIdx["newObject:"]=2;
self["@descrForStack"]=_st($MaglevObject())._newObject_(_st(obj)._descrForStack());
return self}, function($ctx1) {$ctx1.fill(self,"parseJSON:",{obj:obj},globals.MaglevGsNMethod)})},
args: ["obj"],
source: "parseJSON: obj\x0a\x09super parseJSON: obj.\x0a\x09selectorString := MaglevObject newObject: obj selectorString.\x0a\x09argsAndTemps := MaglevObject newObject: obj argsAndTemps.\x0a\x09descrForStack := MaglevObject newObject: obj descrForStack.",
messageSends: ["parseJSON:", "newObject:", "selectorString", "argsAndTemps", "descrForStack"],
referencedClasses: ["MaglevObject"]
}),
globals.MaglevGsNMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSONNotLoaded:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
function $MaglevObject(){return globals.MaglevObject||(typeof MaglevObject=="undefined"?nil:MaglevObject)}
return smalltalk.withContext(function($ctx1) { 
globals.MaglevGsNMethod.superclass.fn.prototype._parseJSONNotLoaded_.apply(_st(self), [obj]);
self["@selectorString"]=_st($MaglevObject())._newObject_(_st(obj)._selectorString());
$ctx1.sendIdx["newObject:"]=1;
self["@descrForStack"]=_st($MaglevObject())._newObject_(_st(obj)._descrForStack());
return self}, function($ctx1) {$ctx1.fill(self,"parseJSONNotLoaded:",{obj:obj},globals.MaglevGsNMethod)})},
args: ["obj"],
source: "parseJSONNotLoaded: obj\x0a\x09super parseJSONNotLoaded: obj.\x0a\x09selectorString := MaglevObject newObject: obj selectorString.\x0a\x09descrForStack := MaglevObject newObject: obj descrForStack.",
messageSends: ["parseJSONNotLoaded:", "newObject:", "selectorString", "descrForStack"],
referencedClasses: ["MaglevObject"]
}),
globals.MaglevGsNMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "rubyFullName",
protocol: 'accessing',
fn: function (){
var self=this;
return "a GsNMethod";
},
args: [],
source: "rubyFullName\x0a\x09^ 'a GsNMethod'",
messageSends: [],
referencedClasses: []
}),
globals.MaglevGsNMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._instVarAt_("@_st_selector");
return $1;
}, function($ctx1) {$ctx1.fill(self,"selector",{},globals.MaglevGsNMethod)})},
args: [],
source: "selector\x0a\x09^ self instVarAt: '@_st_selector'",
messageSends: ["instVarAt:"],
referencedClasses: []
}),
globals.MaglevGsNMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorIdEnvMask",
protocol: 'constants',
fn: function (){
var self=this;
return (255);
},
args: [],
source: "selectorIdEnvMask\x0a\x09^ 255",
messageSends: [],
referencedClasses: []
}),
globals.MaglevGsNMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "selectorString",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@selectorString"];
return $1;
},
args: [],
source: "selectorString\x0a\x09^ selectorString",
messageSends: [],
referencedClasses: []
}),
globals.MaglevGsNMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "siSelectorIdEnvShift",
protocol: 'constants',
fn: function (){
var self=this;
return (53);
},
args: [],
source: "siSelectorIdEnvShift\x0a\x09^ 53",
messageSends: [],
referencedClasses: []
}),
globals.MaglevGsNMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "smalltalkFullName",
protocol: 'accessing',
fn: function (){
var self=this;
return "a GsNMethod";
},
args: [],
source: "smalltalkFullName\x0a\x09^ 'a GsNMethod'",
messageSends: [],
referencedClasses: []
}),
globals.MaglevGsNMethod);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceString",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._debugInfo())._at_(self._debugInfoSourceOffset()))._string();
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceString",{},globals.MaglevGsNMethod)})},
args: [],
source: "sourceString\x0a\x09^ (self debugInfo at: self debugInfoSourceOffset) string",
messageSends: ["string", "at:", "debugInfo", "debugInfoSourceOffset"],
referencedClasses: []
}),
globals.MaglevGsNMethod);


smalltalk.addMethod(
smalltalk.method({
selector: "basetype",
protocol: 'constants',
fn: function (){
var self=this;
return "gsnmethod";
},
args: [],
source: "basetype\x0a\x09^ #gsnmethod",
messageSends: [],
referencedClasses: []
}),
globals.MaglevGsNMethod.klass);


smalltalk.addClass('MaglevInvalidObject', globals.MaglevObject, [], 'Maglev-Core');

globals.MaglevInvalidObject.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "instance",
protocol: 'singleton',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@instance"];
if(($receiver = $1) == nil || $receiver == null){
self["@instance"]=self._new();
self["@instance"];
} else {
$1;
};
$2=self["@instance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"instance",{},globals.MaglevInvalidObject.klass)})},
args: [],
source: "instance\x0a\x09instance ifNil: [instance := self new].\x0a\x09^ instance",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.MaglevInvalidObject.klass);


smalltalk.addClass('MaglevMaglevRecordBase', globals.MaglevObject, ['attributes', 'attributesSize'], 'Maglev-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "attributeAt:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
_st(self["@attributes"])._keysAndValuesDo_((function(index,iv){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(_st(iv)._key())._string()).__eq(_st(aString)._asString());
if(smalltalk.assert($1)){
$2=_st(iv)._value();
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({index:index,iv:iv},$ctx1,1)})}));
self._error_("attribute not found in forwarder object: ".__comma(aString));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"attributeAt:",{aString:aString},globals.MaglevMaglevRecordBase)})},
args: ["aString"],
source: "attributeAt: aString\x0a\x09attributes keysAndValuesDo: [:index :iv | \x0a\x09\x09iv key string = aString asString\x0a\x09\x09\x09ifTrue: [^ iv value]].\x0a\x09self error: 'attribute not found in forwarder object: ', aString.",
messageSends: ["keysAndValuesDo:", "ifTrue:", "=", "string", "key", "asString", "value", "error:", ","],
referencedClasses: []
}),
globals.MaglevMaglevRecordBase);

smalltalk.addMethod(
smalltalk.method({
selector: "attributes",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@attributes"];
return $1;
},
args: [],
source: "attributes\x0a\x09^ attributes",
messageSends: [],
referencedClasses: []
}),
globals.MaglevMaglevRecordBase);

smalltalk.addMethod(
smalltalk.method({
selector: "attributesSize",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@attributesSize"];
return $1;
},
args: [],
source: "attributesSize\x0a\x09^ attributesSize",
messageSends: [],
referencedClasses: []
}),
globals.MaglevMaglevRecordBase);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSON:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MaglevObject(){return globals.MaglevObject||(typeof MaglevObject=="undefined"?nil:MaglevObject)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
globals.MaglevMaglevRecordBase.superclass.fn.prototype._parseJSON_.apply(_st(self), [obj]);
$1=_st(obj)._at_("attributes");
$ctx1.sendIdx["at:"]=1;
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
$2=self["@attributes"];
if(($receiver = $2) == nil || $receiver == null){
self["@attributes"]=_st($Dictionary())._new();
self["@attributes"];
} else {
$2;
};
self["@attributesSize"]=_st(obj)._attributesSize();
self["@attributesSize"];
_st(_st(obj)._attributes())._keysAndValuesDo_((function(index,assoc){
var key,value;
return smalltalk.withContext(function($ctx2) {
$3=_st(assoc)._at_((1));
$ctx2.sendIdx["at:"]=2;
key=_st($MaglevObject())._newObject_($3);
$ctx2.sendIdx["newObject:"]=1;
key;
value=_st($MaglevObject())._newObject_(_st(assoc)._at_((2)));
value;
return _st(self["@attributes"])._at_put_(_st(index)._asNumber(),_st(key).__minus_gt(value));
}, function($ctx2) {$ctx2.fillBlock({index:index,assoc:assoc,key:key,value:value},$ctx1,3)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"parseJSON:",{obj:obj},globals.MaglevMaglevRecordBase)})},
args: ["obj"],
source: "parseJSON: obj\x0a\x09super parseJSON: obj.\x0a\x09(obj at: 'attributes') ifNotNil: [\x0a\x09\x09attributes ifNil: [attributes := Dictionary new].\x0a\x09\x09attributesSize := obj attributesSize.\x0a\x09\x09obj attributes keysAndValuesDo: [:index :assoc | |key value|\x0a\x09\x09\x09key := MaglevObject newObject: (assoc at: 1).\x0a\x09\x09\x09value := MaglevObject newObject: (assoc at: 2).\x0a\x09\x09\x09attributes at: index asNumber put: key -> value]].",
messageSends: ["parseJSON:", "ifNotNil:", "at:", "ifNil:", "new", "attributesSize", "keysAndValuesDo:", "attributes", "newObject:", "at:put:", "asNumber", "->"],
referencedClasses: ["Dictionary", "MaglevObject"]
}),
globals.MaglevMaglevRecordBase);


smalltalk.addMethod(
smalltalk.method({
selector: "basetype",
protocol: 'constants',
fn: function (){
var self=this;
return "maglevRecordBase";
},
args: [],
source: "basetype\x0a\x09^ #maglevRecordBase",
messageSends: [],
referencedClasses: []
}),
globals.MaglevMaglevRecordBase.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevMaglevRecordBaseInline(){return globals.MaglevMaglevRecordBaseInline||(typeof MaglevMaglevRecordBaseInline=="undefined"?nil:MaglevMaglevRecordBaseInline)}
return $MaglevMaglevRecordBaseInline();
},
args: [],
source: "inlineViewClass\x0a\x09^ MaglevMaglevRecordBaseInline",
messageSends: [],
referencedClasses: ["MaglevMaglevRecordBaseInline"]
}),
globals.MaglevMaglevRecordBase.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevMaglevRecordBaseWindow(){return globals.MaglevMaglevRecordBaseWindow||(typeof MaglevMaglevRecordBaseWindow=="undefined"?nil:MaglevMaglevRecordBaseWindow)}
return $MaglevMaglevRecordBaseWindow();
},
args: [],
source: "windowViewClass\x0a\x09^ MaglevMaglevRecordBaseWindow",
messageSends: [],
referencedClasses: ["MaglevMaglevRecordBaseWindow"]
}),
globals.MaglevMaglevRecordBase.klass);


smalltalk.addClass('MaglevModule', globals.MaglevObject, ['includedModules', 'includedModulesSize', 'constants', 'constantsSize', 'rubyFullName', 'smalltalkFullName', 'superList'], 'Maglev-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "allSelectorsWithCallback:",
protocol: 'interactions',
fn: function (aBlock){
var self=this;
function $MaglevAjax(){return globals.MaglevAjax||(typeof MaglevAjax=="undefined"?nil:MaglevAjax)}
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
_st($MaglevAjax())._ajax_data_withCallback_("code/selectors/".__comma(_st(self["@oop"])._asString()),_st($Dictionary())._new(),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"allSelectorsWithCallback:",{aBlock:aBlock},globals.MaglevModule)})},
args: ["aBlock"],
source: "allSelectorsWithCallback: aBlock\x0a\x09MaglevAjax \x0a\x09\x09ajax: 'code/selectors/', oop asString\x0a\x09\x09data: Dictionary new\x0a\x09\x09withCallback: aBlock.",
messageSends: ["ajax:data:withCallback:", ",", "asString", "new"],
referencedClasses: ["MaglevAjax", "Dictionary"]
}),
globals.MaglevModule);

smalltalk.addMethod(
smalltalk.method({
selector: "compileRubySourceCode:withCallback:",
protocol: 'interactions',
fn: function (sourceCode,aBlock){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self._evaluateWithoutUpdate_language_with_withCallback_(sourceCode,"rubyClass",_st($Dictionary())._new(),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"compileRubySourceCode:withCallback:",{sourceCode:sourceCode,aBlock:aBlock},globals.MaglevModule)})},
args: ["sourceCode", "aBlock"],
source: "compileRubySourceCode: sourceCode withCallback: aBlock\x0a\x09self \x0a\x09\x09evaluateWithoutUpdate: sourceCode\x0a\x09\x09language: 'rubyClass'\x0a\x09\x09with: Dictionary new\x0a\x09\x09withCallback: aBlock.",
messageSends: ["evaluateWithoutUpdate:language:with:withCallback:", "new"],
referencedClasses: ["Dictionary"]
}),
globals.MaglevModule);

smalltalk.addMethod(
smalltalk.method({
selector: "compileSmalltalkSourceCode:withCallback:",
protocol: 'interactions',
fn: function (sourceCode,aBlock){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("self compile: '".__comma(_st(sourceCode)._escapedString())).__comma("'.");
$ctx1.sendIdx[","]=1;
self._evaluateWithoutUpdate_language_with_withCallback_($1,"smalltalk",_st($Dictionary())._new(),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"compileSmalltalkSourceCode:withCallback:",{sourceCode:sourceCode,aBlock:aBlock},globals.MaglevModule)})},
args: ["sourceCode", "aBlock"],
source: "compileSmalltalkSourceCode: sourceCode withCallback: aBlock\x0a\x09self \x0a\x09\x09evaluateWithoutUpdate: 'self compile: ''', sourceCode escapedString, '''.'\x0a\x09\x09language: 'smalltalk'\x0a\x09\x09with: Dictionary new\x0a\x09\x09withCallback: aBlock.",
messageSends: ["evaluateWithoutUpdate:language:with:withCallback:", ",", "escapedString", "new"],
referencedClasses: ["Dictionary"]
}),
globals.MaglevModule);

smalltalk.addMethod(
smalltalk.method({
selector: "constants",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@constants"];
return $1;
},
args: [],
source: "constants\x0a\x09^ constants",
messageSends: [],
referencedClasses: []
}),
globals.MaglevModule);

smalltalk.addMethod(
smalltalk.method({
selector: "constantsSize",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@constantsSize"];
return $1;
},
args: [],
source: "constantsSize\x0a\x09^ constantsSize",
messageSends: [],
referencedClasses: []
}),
globals.MaglevModule);

smalltalk.addMethod(
smalltalk.method({
selector: "ensureSuperListLoadedWithCallback:",
protocol: 'interactions',
fn: function (aBlock){
var self=this;
function $MaglevAjax(){return globals.MaglevAjax||(typeof MaglevAjax=="undefined"?nil:MaglevAjax)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@superList"];
if(($receiver = $1) == nil || $receiver == null){
_st($MaglevAjax())._ajax_data_withCallback_("object/index/".__comma(self._oop()),self._paramsSuperList(),(function(obj){
return smalltalk.withContext(function($ctx2) {
self._parseJSON_(obj);
return _st(aBlock)._value();
$ctx2.sendIdx["value"]=1;
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1,2)})}));
} else {
_st(aBlock)._value();
};
return self}, function($ctx1) {$ctx1.fill(self,"ensureSuperListLoadedWithCallback:",{aBlock:aBlock},globals.MaglevModule)})},
args: ["aBlock"],
source: "ensureSuperListLoadedWithCallback: aBlock\x0a\x09superList \x0a\x09\x09ifNil: [MaglevAjax \x0a\x09\x09\x09ajax: 'object/index/', self oop\x0a\x09\x09\x09data: self paramsSuperList\x0a\x09\x09\x09\x09withCallback: [:obj | \x0a\x09\x09\x09\x09\x09self parseJSON: obj.\x0a\x09\x09\x09\x09\x09aBlock value]]\x0a\x09\x09ifNotNil: [aBlock value].",
messageSends: ["ifNil:ifNotNil:", "ajax:data:withCallback:", ",", "oop", "paramsSuperList", "parseJSON:", "value"],
referencedClasses: ["MaglevAjax"]
}),
globals.MaglevModule);

smalltalk.addMethod(
smalltalk.method({
selector: "hasConstants",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._constantsSize()).__gt((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasConstants",{},globals.MaglevModule)})},
args: [],
source: "hasConstants\x0a\x09^ self constantsSize > 0",
messageSends: [">", "constantsSize"],
referencedClasses: []
}),
globals.MaglevModule);

smalltalk.addMethod(
smalltalk.method({
selector: "hasIncludedModules",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._includedModulesSize()).__gt((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasIncludedModules",{},globals.MaglevModule)})},
args: [],
source: "hasIncludedModules\x0a\x09^ self includedModulesSize > 0",
messageSends: [">", "includedModulesSize"],
referencedClasses: []
}),
globals.MaglevModule);

smalltalk.addMethod(
smalltalk.method({
selector: "includedModules",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@includedModules"];
return $1;
},
args: [],
source: "includedModules\x0a\x09^ includedModules",
messageSends: [],
referencedClasses: []
}),
globals.MaglevModule);

smalltalk.addMethod(
smalltalk.method({
selector: "includedModulesSize",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@includedModulesSize"];
return $1;
},
args: [],
source: "includedModulesSize\x0a\x09^ includedModulesSize",
messageSends: [],
referencedClasses: []
}),
globals.MaglevModule);

smalltalk.addMethod(
smalltalk.method({
selector: "paramsSuperList",
protocol: 'interactions',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Dictionary())._new();
_st($2)._at_put_("superList",true);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"paramsSuperList",{},globals.MaglevModule)})},
args: [],
source: "paramsSuperList\x0a\x09^ Dictionary new\x0a\x09\x09at: 'superList' put: true;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
globals.MaglevModule);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSON:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MaglevObject(){return globals.MaglevObject||(typeof MaglevObject=="undefined"?nil:MaglevObject)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11;
globals.MaglevModule.superclass.fn.prototype._parseJSON_.apply(_st(self), [obj]);
$1=self["@includedModules"];
if(($receiver = $1) == nil || $receiver == null){
self["@includedModules"]=_st($Dictionary())._new();
$ctx1.sendIdx["new"]=1;
self["@includedModules"];
} else {
$1;
};
$2=self["@constants"];
if(($receiver = $2) == nil || $receiver == null){
self["@constants"]=_st($Dictionary())._new();
self["@constants"];
} else {
$2;
};
$3=_st(obj)._at_("includedModulesSize");
$ctx1.sendIdx["at:"]=1;
if(($receiver = $3) == nil || $receiver == null){
$3;
} else {
self["@includedModulesSize"]=_st(obj)._includedModulesSize();
self["@includedModulesSize"];
_st(_st(obj)._includedModules())._keysAndValuesDo_((function(index,value){
return smalltalk.withContext(function($ctx2) {
$4=self["@includedModules"];
$5=_st(index)._asNumber();
$ctx2.sendIdx["asNumber"]=1;
$6=_st($MaglevObject())._newObject_(value);
$ctx2.sendIdx["newObject:"]=1;
return _st($4)._at_put_($5,$6);
$ctx2.sendIdx["at:put:"]=1;
}, function($ctx2) {$ctx2.fillBlock({index:index,value:value},$ctx1,4)})}));
$ctx1.sendIdx["keysAndValuesDo:"]=1;
};
$7=_st(obj)._at_("constantsSize");
$ctx1.sendIdx["at:"]=2;
if(($receiver = $7) == nil || $receiver == null){
$7;
} else {
self["@constantsSize"]=_st(obj)._constantsSize();
self["@constantsSize"];
_st(_st(obj)._constants())._keysAndValuesDo_((function(index,assoc){
var key,value;
return smalltalk.withContext(function($ctx2) {
$8=_st(assoc)._at_((1));
$ctx2.sendIdx["at:"]=3;
key=_st($MaglevObject())._newObject_($8);
$ctx2.sendIdx["newObject:"]=2;
key;
$9=_st(assoc)._at_((2));
$ctx2.sendIdx["at:"]=4;
value=_st($MaglevObject())._newObject_($9);
$ctx2.sendIdx["newObject:"]=3;
value;
return _st(self["@constants"])._at_put_(_st(index)._asNumber(),_st(key).__minus_gt(value));
}, function($ctx2) {$ctx2.fillBlock({index:index,assoc:assoc,key:key,value:value},$ctx1,6)})}));
};
$10=_st(obj)._at_("superList");
$ctx1.sendIdx["at:"]=5;
if(($receiver = $10) == nil || $receiver == null){
$10;
} else {
self["@superList"]=_st($MaglevObject())._newObject_(_st(obj)._superList());
$ctx1.sendIdx["newObject:"]=4;
self["@superList"];
};
$11=_st(obj)._at_("rubyFullName");
if(($receiver = $11) == nil || $receiver == null){
$11;
} else {
self["@rubyFullName"]=_st($MaglevObject())._newObject_(_st(obj)._rubyFullName());
$ctx1.sendIdx["newObject:"]=5;
self["@rubyFullName"];
self["@smalltalkFullName"]=_st($MaglevObject())._newObject_(_st(obj)._smalltalkFullName());
self["@smalltalkFullName"];
};
return self}, function($ctx1) {$ctx1.fill(self,"parseJSON:",{obj:obj},globals.MaglevModule)})},
args: ["obj"],
source: "parseJSON: obj\x0a\x09super parseJSON: obj.\x0a\x09includedModules ifNil: [includedModules := Dictionary new].\x0a\x09constants ifNil: [constants := Dictionary new].\x0a\x09(obj at: 'includedModulesSize') ifNotNil: [\x0a\x09\x09includedModulesSize := obj includedModulesSize.\x0a\x09\x09obj includedModules keysAndValuesDo: [:index :value |\x0a\x09\x09\x09includedModules at: index asNumber put: (MaglevObject newObject: value)]].\x0a\x09(obj at: 'constantsSize') ifNotNil: [\x0a\x09\x09constantsSize := obj constantsSize.\x0a\x09\x09obj constants keysAndValuesDo: [:index :assoc | |key value|\x0a\x09\x09\x09key := MaglevObject newObject: (assoc at: 1).\x0a\x09\x09\x09value := MaglevObject newObject: (assoc at: 2).\x0a\x09\x09\x09constants at: index asNumber put: key -> value]].\x0a\x09(obj at: 'superList') ifNotNil: [\x0a\x09\x09superList := MaglevObject newObject: obj superList].\x0a\x09(obj at: 'rubyFullName') ifNotNil: [\x0a\x09\x09rubyFullName := MaglevObject newObject: obj rubyFullName.\x0a\x09\x09smalltalkFullName := MaglevObject newObject: obj smalltalkFullName].",
messageSends: ["parseJSON:", "ifNil:", "new", "ifNotNil:", "at:", "includedModulesSize", "keysAndValuesDo:", "includedModules", "at:put:", "asNumber", "newObject:", "constantsSize", "constants", "->", "superList", "rubyFullName", "smalltalkFullName"],
referencedClasses: ["Dictionary", "MaglevObject"]
}),
globals.MaglevModule);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSONNotLoaded:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.MaglevModule.superclass.fn.prototype._parseJSONNotLoaded_.apply(_st(self), [obj]);
return self}, function($ctx1) {$ctx1.fill(self,"parseJSONNotLoaded:",{obj:obj},globals.MaglevModule)})},
args: ["obj"],
source: "parseJSONNotLoaded: obj\x0a\x09super parseJSONNotLoaded: obj.",
messageSends: ["parseJSONNotLoaded:"],
referencedClasses: []
}),
globals.MaglevModule);

smalltalk.addMethod(
smalltalk.method({
selector: "rubyFullName",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@rubyFullName"])._string();
return $1;
}, function($ctx1) {$ctx1.fill(self,"rubyFullName",{},globals.MaglevModule)})},
args: [],
source: "rubyFullName\x0a\x09^ rubyFullName string",
messageSends: ["string"],
referencedClasses: []
}),
globals.MaglevModule);

smalltalk.addMethod(
smalltalk.method({
selector: "smalltalkFullName",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@smalltalkFullName"])._string();
return $1;
}, function($ctx1) {$ctx1.fill(self,"smalltalkFullName",{},globals.MaglevModule)})},
args: [],
source: "smalltalkFullName\x0a\x09^ smalltalkFullName string",
messageSends: ["string"],
referencedClasses: []
}),
globals.MaglevModule);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceCodeFor:language:withCallback:",
protocol: 'interactions',
fn: function (selectorString,lang,aBlock){
var self=this;
var params;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MaglevAjax(){return globals.MaglevAjax||(typeof MaglevAjax=="undefined"?nil:MaglevAjax)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Dictionary())._new();
_st($1)._at_put_("language",lang);
$ctx1.sendIdx["at:put:"]=1;
_st($1)._at_put_("selector",selectorString);
$2=_st($1)._yourself();
params=$2;
_st($MaglevAjax())._ajax_data_withCallback_("code/code/".__comma(_st(self["@oop"])._asString()),params,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"sourceCodeFor:language:withCallback:",{selectorString:selectorString,lang:lang,aBlock:aBlock,params:params},globals.MaglevModule)})},
args: ["selectorString", "lang", "aBlock"],
source: "sourceCodeFor: selectorString language: lang withCallback: aBlock\x0a\x09|params|\x0a\x09params := Dictionary new\x0a\x09\x09at: 'language' put: lang;\x0a\x09\x09at: 'selector' put: selectorString;\x0a\x09\x09yourself.\x0a\x09MaglevAjax \x0a\x09\x09ajax: 'code/code/', oop asString\x0a\x09\x09data: params\x0a\x09\x09withCallback: aBlock.",
messageSends: ["at:put:", "new", "yourself", "ajax:data:withCallback:", ",", "asString"],
referencedClasses: ["Dictionary", "MaglevAjax"]
}),
globals.MaglevModule);

smalltalk.addMethod(
smalltalk.method({
selector: "superList",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@superList"];
return $1;
},
args: [],
source: "superList\x0a\x09^ superList",
messageSends: [],
referencedClasses: []
}),
globals.MaglevModule);


smalltalk.addMethod(
smalltalk.method({
selector: "basetype",
protocol: 'constants',
fn: function (){
var self=this;
return "module";
},
args: [],
source: "basetype\x0a\x09^ #module",
messageSends: [],
referencedClasses: []
}),
globals.MaglevModule.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevModuleInline(){return globals.MaglevModuleInline||(typeof MaglevModuleInline=="undefined"?nil:MaglevModuleInline)}
return $MaglevModuleInline();
},
args: [],
source: "inlineViewClass\x0a\x09^ MaglevModuleInline",
messageSends: [],
referencedClasses: ["MaglevModuleInline"]
}),
globals.MaglevModule.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevModuleWindow(){return globals.MaglevModuleWindow||(typeof MaglevModuleWindow=="undefined"?nil:MaglevModuleWindow)}
return $MaglevModuleWindow();
},
args: [],
source: "windowViewClass\x0a\x09^ MaglevModuleWindow",
messageSends: [],
referencedClasses: ["MaglevModuleWindow"]
}),
globals.MaglevModule.klass);


smalltalk.addClass('MaglevClass', globals.MaglevModule, ['superclassObject', 'size', 'subclasses', 'instances', 'instancesSize'], 'Maglev-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "ensureSubclassesLoadedWithCallback:",
protocol: 'interactions',
fn: function (aBlock){
var self=this;
function $MaglevAjax(){return globals.MaglevAjax||(typeof MaglevAjax=="undefined"?nil:MaglevAjax)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@subclasses"];
if(($receiver = $1) == nil || $receiver == null){
_st($MaglevAjax())._ajax_data_withCallback_("object/index/".__comma(self._oop()),self._paramsSubclasses(),(function(obj){
return smalltalk.withContext(function($ctx2) {
self._parseJSON_(obj);
return _st(aBlock)._value();
$ctx2.sendIdx["value"]=1;
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1,2)})}));
} else {
_st(aBlock)._value();
};
return self}, function($ctx1) {$ctx1.fill(self,"ensureSubclassesLoadedWithCallback:",{aBlock:aBlock},globals.MaglevClass)})},
args: ["aBlock"],
source: "ensureSubclassesLoadedWithCallback: aBlock\x0a\x09subclasses \x0a\x09\x09ifNil: [MaglevAjax \x0a\x09\x09\x09ajax: 'object/index/', self oop\x0a\x09\x09\x09data: self paramsSubclasses\x0a\x09\x09\x09\x09withCallback: [:obj | \x0a\x09\x09\x09\x09\x09self parseJSON: obj.\x0a\x09\x09\x09\x09\x09aBlock value]]\x0a\x09\x09ifNotNil: [aBlock value].",
messageSends: ["ifNil:ifNotNil:", "ajax:data:withCallback:", ",", "oop", "paramsSubclasses", "parseJSON:", "value"],
referencedClasses: ["MaglevAjax"]
}),
globals.MaglevClass);

smalltalk.addMethod(
smalltalk.method({
selector: "instances",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@instances"];
return $1;
},
args: [],
source: "instances\x0a\x09^ instances",
messageSends: [],
referencedClasses: []
}),
globals.MaglevClass);

smalltalk.addMethod(
smalltalk.method({
selector: "instancesSize",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@instancesSize"];
return $1;
},
args: [],
source: "instancesSize\x0a\x09^ instancesSize",
messageSends: [],
referencedClasses: []
}),
globals.MaglevClass);

smalltalk.addMethod(
smalltalk.method({
selector: "loadInstancesFrom:to:withCallback:",
protocol: 'interactions',
fn: function (from,to,aBlock){
var self=this;
var params;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MaglevAjax(){return globals.MaglevAjax||(typeof MaglevAjax=="undefined"?nil:MaglevAjax)}
function $MaglevObject(){return globals.MaglevObject||(typeof MaglevObject=="undefined"?nil:MaglevObject)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Dictionary())._new();
_st($1)._at_put_("range_instances_from",from);
$ctx1.sendIdx["at:put:"]=1;
_st($1)._at_put_("range_instances_to",to);
$ctx1.sendIdx["at:put:"]=2;
_st($1)._at_put_("instances",true);
$2=_st($1)._yourself();
params=$2;
_st($MaglevAjax())._ajax_data_withCallback_("object/index/".__comma(self._oop()),params,(function(obj){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(_st($MaglevObject())._newObjectWithoutUpdate_(obj));
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"loadInstancesFrom:to:withCallback:",{from:from,to:to,aBlock:aBlock,params:params},globals.MaglevClass)})},
args: ["from", "to", "aBlock"],
source: "loadInstancesFrom: from to: to withCallback: aBlock\x0a\x09|params|\x0a\x09params := Dictionary new\x0a\x09\x09at: 'range_instances_from' put: from;\x0a\x09\x09at: 'range_instances_to' put: to;\x0a\x09\x09at: 'instances' put: true;\x0a\x09\x09yourself.\x0a\x09MaglevAjax \x0a\x09\x09ajax: 'object/index/', self oop\x0a\x09\x09data: params\x0a\x09\x09withCallback: [:obj |\x0a\x09\x09\x09\x22Create new object instead of merging results to self. This way \x0a\x09\x09\x09we can separate instances with different filters and don't\x0a\x09\x09\x09pollute MaglevObjectSpace with masses of objects.\x22\x0a\x09\x09\x09aBlock value: (MaglevObject newObjectWithoutUpdate: obj)].",
messageSends: ["at:put:", "new", "yourself", "ajax:data:withCallback:", ",", "oop", "value:", "newObjectWithoutUpdate:"],
referencedClasses: ["Dictionary", "MaglevAjax", "MaglevObject"]
}),
globals.MaglevClass);

smalltalk.addMethod(
smalltalk.method({
selector: "paramsSubclasses",
protocol: 'interactions',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Dictionary())._new();
_st($2)._at_put_("subclasses",true);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"paramsSubclasses",{},globals.MaglevClass)})},
args: [],
source: "paramsSubclasses\x0a\x09^ Dictionary new\x0a\x09\x09at: 'subclasses' put: true;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
globals.MaglevClass);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSON:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
function $MaglevObject(){return globals.MaglevObject||(typeof MaglevObject=="undefined"?nil:MaglevObject)}
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
globals.MaglevClass.superclass.fn.prototype._parseJSON_.apply(_st(self), [obj]);
$1=_st(obj)._at_("superclassObject");
$ctx1.sendIdx["at:"]=1;
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
self["@superclassObject"]=_st($MaglevObject())._newObject_(_st(obj)._superclassObject());
$ctx1.sendIdx["newObject:"]=1;
self["@superclassObject"];
};
$2=_st(obj)._at_("subclasses");
$ctx1.sendIdx["at:"]=2;
if(($receiver = $2) == nil || $receiver == null){
$2;
} else {
self["@subclasses"]=_st($MaglevObject())._newObject_(_st(obj)._subclasses());
$ctx1.sendIdx["newObject:"]=2;
self["@subclasses"];
};
$3=_st(obj)._at_("instancesSize");
if(($receiver = $3) == nil || $receiver == null){
$3;
} else {
$4=self["@instances"];
if(($receiver = $4) == nil || $receiver == null){
self["@instances"]=_st($Dictionary())._new();
self["@instances"];
} else {
$4;
};
self["@instancesSize"]=_st(obj)._instancesSize();
self["@instancesSize"];
_st(_st(obj)._instances())._keysAndValuesDo_((function(index,element){
return smalltalk.withContext(function($ctx2) {
return _st(self["@instances"])._at_put_(_st(index)._asNumber(),_st($MaglevObject())._newObject_(element));
}, function($ctx2) {$ctx2.fillBlock({index:index,element:element},$ctx1,5)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"parseJSON:",{obj:obj},globals.MaglevClass)})},
args: ["obj"],
source: "parseJSON: obj\x0a\x09super parseJSON: obj.\x0a\x09(obj at: 'superclassObject') ifNotNil: [\x0a\x09\x09superclassObject := MaglevObject newObject: obj superclassObject].\x0a\x09(obj at: 'subclasses') ifNotNil: [\x0a\x09\x09subclasses := MaglevObject newObject: obj subclasses].\x0a\x09(obj at: 'instancesSize') ifNotNil: [\x0a\x09\x09instances ifNil: [instances := Dictionary new].\x0a\x09\x09instancesSize := obj instancesSize.\x0a\x09\x09obj instances keysAndValuesDo: [:index :element |\x0a\x09\x09\x09instances at: index asNumber put: (MaglevObject newObject: element)]].",
messageSends: ["parseJSON:", "ifNotNil:", "at:", "newObject:", "superclassObject", "subclasses", "ifNil:", "new", "instancesSize", "keysAndValuesDo:", "instances", "at:put:", "asNumber"],
referencedClasses: ["MaglevObject", "Dictionary"]
}),
globals.MaglevClass);

smalltalk.addMethod(
smalltalk.method({
selector: "subclasses",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@subclasses"];
return $1;
},
args: [],
source: "subclasses\x0a\x09^ subclasses",
messageSends: [],
referencedClasses: []
}),
globals.MaglevClass);

smalltalk.addMethod(
smalltalk.method({
selector: "superclassObject",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@superclassObject"];
return $1;
},
args: [],
source: "superclassObject\x0a\x09^ superclassObject",
messageSends: [],
referencedClasses: []
}),
globals.MaglevClass);


smalltalk.addMethod(
smalltalk.method({
selector: "basetype",
protocol: 'constants',
fn: function (){
var self=this;
return "class";
},
args: [],
source: "basetype\x0a\x09^ #class",
messageSends: [],
referencedClasses: []
}),
globals.MaglevClass.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevClassInline(){return globals.MaglevClassInline||(typeof MaglevClassInline=="undefined"?nil:MaglevClassInline)}
return $MaglevClassInline();
},
args: [],
source: "inlineViewClass\x0a\x09^ MaglevClassInline",
messageSends: [],
referencedClasses: ["MaglevClassInline"]
}),
globals.MaglevClass.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevClassWindow(){return globals.MaglevClassWindow||(typeof MaglevClassWindow=="undefined"?nil:MaglevClassWindow)}
return $MaglevClassWindow();
},
args: [],
source: "windowViewClass\x0a\x09^ MaglevClassWindow",
messageSends: [],
referencedClasses: ["MaglevClassWindow"]
}),
globals.MaglevClass.klass);


smalltalk.addClass('MaglevSystemClass', globals.MaglevClass, ['gemVersionReport', 'gemVersionReportSize', 'stoneVersionReport', 'stoneVersionReportSize'], 'Maglev-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "gemVersionReport",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@gemVersionReport"];
return $1;
},
args: [],
source: "gemVersionReport\x0a\x09^ gemVersionReport",
messageSends: [],
referencedClasses: []
}),
globals.MaglevSystemClass);

smalltalk.addMethod(
smalltalk.method({
selector: "gemVersionReportSize",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@gemVersionReportSize"];
return $1;
},
args: [],
source: "gemVersionReportSize\x0a\x09^ gemVersionReportSize",
messageSends: [],
referencedClasses: []
}),
globals.MaglevSystemClass);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSON:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
function $MaglevObject(){return globals.MaglevObject||(typeof MaglevObject=="undefined"?nil:MaglevObject)}
return smalltalk.withContext(function($ctx1) { 
globals.MaglevSystemClass.superclass.fn.prototype._parseJSON_.apply(_st(self), [obj]);
self["@gemVersionReport"]=_st($MaglevObject())._newObject_(_st(obj)._gemVersionReport());
$ctx1.sendIdx["newObject:"]=1;
self["@gemVersionReportSize"]=_st(obj)._gemVersionReportSize();
self["@stoneVersionReport"]=_st($MaglevObject())._newObject_(_st(obj)._stoneVersionReport());
self["@stoneVersionReportSize"]=_st(obj)._stoneVersionReportSize();
return self}, function($ctx1) {$ctx1.fill(self,"parseJSON:",{obj:obj},globals.MaglevSystemClass)})},
args: ["obj"],
source: "parseJSON: obj\x0a\x09super parseJSON: obj.\x0a\x09gemVersionReport := MaglevObject newObject: obj gemVersionReport.\x0a\x09gemVersionReportSize := obj gemVersionReportSize.\x0a\x09stoneVersionReport := MaglevObject newObject: obj stoneVersionReport.\x0a\x09stoneVersionReportSize := obj stoneVersionReportSize.",
messageSends: ["parseJSON:", "newObject:", "gemVersionReport", "gemVersionReportSize", "stoneVersionReport", "stoneVersionReportSize"],
referencedClasses: ["MaglevObject"]
}),
globals.MaglevSystemClass);

smalltalk.addMethod(
smalltalk.method({
selector: "stoneVersionReport",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@stoneVersionReport"];
return $1;
},
args: [],
source: "stoneVersionReport\x0a\x09^ stoneVersionReport",
messageSends: [],
referencedClasses: []
}),
globals.MaglevSystemClass);

smalltalk.addMethod(
smalltalk.method({
selector: "stoneVersionReportSize",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@stoneVersionReportSize"];
return $1;
},
args: [],
source: "stoneVersionReportSize\x0a\x09^ stoneVersionReportSize",
messageSends: [],
referencedClasses: []
}),
globals.MaglevSystemClass);


smalltalk.addMethod(
smalltalk.method({
selector: "basetype",
protocol: 'constants',
fn: function (){
var self=this;
return "systemClass";
},
args: [],
source: "basetype\x0a\x09^ #systemClass",
messageSends: [],
referencedClasses: []
}),
globals.MaglevSystemClass.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevSystemClassWindow(){return globals.MaglevSystemClassWindow||(typeof MaglevSystemClassWindow=="undefined"?nil:MaglevSystemClassWindow)}
return $MaglevSystemClassWindow();
},
args: [],
source: "windowViewClass\x0a\x09^ MaglevSystemClassWindow",
messageSends: [],
referencedClasses: ["MaglevSystemClassWindow"]
}),
globals.MaglevSystemClass.klass);


smalltalk.addClass('MaglevNilClass', globals.MaglevObject, [], 'Maglev-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "ifNotMaglevNil:",
protocol: 'testing',
fn: function (aBlock){
var self=this;
return self;
},
args: ["aBlock"],
source: "ifNotMaglevNil: aBlock\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
globals.MaglevNilClass);

smalltalk.addMethod(
smalltalk.method({
selector: "isMaglevNil",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isMaglevNil\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.MaglevNilClass);

smalltalk.addMethod(
smalltalk.method({
selector: "string",
protocol: 'accessing',
fn: function (){
var self=this;
return "(nil)";
},
args: [],
source: "string\x0a\x09^ '(nil)'",
messageSends: [],
referencedClasses: []
}),
globals.MaglevNilClass);


globals.MaglevNilClass.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "basetype",
protocol: 'constants',
fn: function (){
var self=this;
return "nilclass";
},
args: [],
source: "basetype\x0a\x09^ #nilclass",
messageSends: [],
referencedClasses: []
}),
globals.MaglevNilClass.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevNilClassInline(){return globals.MaglevNilClassInline||(typeof MaglevNilClassInline=="undefined"?nil:MaglevNilClassInline)}
return $MaglevNilClassInline();
},
args: [],
source: "inlineViewClass\x0a\x09^ MaglevNilClassInline",
messageSends: [],
referencedClasses: ["MaglevNilClassInline"]
}),
globals.MaglevNilClass.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "instance",
protocol: 'singleton',
fn: function (){
var self=this;
function $MaglevObjectSpace(){return globals.MaglevObjectSpace||(typeof MaglevObjectSpace=="undefined"?nil:MaglevObjectSpace)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@instance"];
if(($receiver = $1) == nil || $receiver == null){
self["@instance"]=_st(_st($MaglevObjectSpace())._instance())._reloadObject_((20));
self["@instance"];
} else {
$1;
};
$2=self["@instance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"instance",{},globals.MaglevNilClass.klass)})},
args: [],
source: "instance\x0a\x09instance ifNil: [instance := MaglevObjectSpace instance reloadObject: 20].\x0a\x09^ instance",
messageSends: ["ifNil:", "reloadObject:", "instance"],
referencedClasses: ["MaglevObjectSpace"]
}),
globals.MaglevNilClass.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevNilClassWindow(){return globals.MaglevNilClassWindow||(typeof MaglevNilClassWindow=="undefined"?nil:MaglevNilClassWindow)}
return $MaglevNilClassWindow();
},
args: [],
source: "windowViewClass\x0a\x09^ MaglevNilClassWindow",
messageSends: [],
referencedClasses: ["MaglevNilClassWindow"]
}),
globals.MaglevNilClass.klass);


smalltalk.addClass('MaglevRubyWorkspace', globals.MaglevObject, [], 'Maglev-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "basetype",
protocol: 'constants',
fn: function (){
var self=this;
return "rubyWorkspace";
},
args: [],
source: "basetype\x0a\x09^ #rubyWorkspace",
messageSends: [],
referencedClasses: []
}),
globals.MaglevRubyWorkspace.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevRubyWorkspaceInline(){return globals.MaglevRubyWorkspaceInline||(typeof MaglevRubyWorkspaceInline=="undefined"?nil:MaglevRubyWorkspaceInline)}
return $MaglevRubyWorkspaceInline();
},
args: [],
source: "inlineViewClass\x0a\x09^ MaglevRubyWorkspaceInline",
messageSends: [],
referencedClasses: ["MaglevRubyWorkspaceInline"]
}),
globals.MaglevRubyWorkspace.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevRubyWorkspaceWindow(){return globals.MaglevRubyWorkspaceWindow||(typeof MaglevRubyWorkspaceWindow=="undefined"?nil:MaglevRubyWorkspaceWindow)}
return $MaglevRubyWorkspaceWindow();
},
args: [],
source: "windowViewClass\x0a\x09^ MaglevRubyWorkspaceWindow",
messageSends: [],
referencedClasses: ["MaglevRubyWorkspaceWindow"]
}),
globals.MaglevRubyWorkspace.klass);


smalltalk.addClass('MaglevString', globals.MaglevObject, ['string', 'isStringComplete'], 'Maglev-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "parseJSON:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.MaglevString.superclass.fn.prototype._parseJSON_.apply(_st(self), [obj]);
self["@string"]=_st(obj)._string();
self["@isStringComplete"]=_st(obj)._stringComplete();
return self}, function($ctx1) {$ctx1.fill(self,"parseJSON:",{obj:obj},globals.MaglevString)})},
args: ["obj"],
source: "parseJSON: obj\x0a\x09super parseJSON: obj.\x0a\x09string := obj string.\x0a\x09isStringComplete := obj stringComplete.",
messageSends: ["parseJSON:", "string", "stringComplete"],
referencedClasses: []
}),
globals.MaglevString);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSONNotLoaded:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.MaglevString.superclass.fn.prototype._parseJSONNotLoaded_.apply(_st(self), [obj]);
self["@string"]=_st(obj)._string();
self["@isStringComplete"]=_st(obj)._stringComplete();
return self}, function($ctx1) {$ctx1.fill(self,"parseJSONNotLoaded:",{obj:obj},globals.MaglevString)})},
args: ["obj"],
source: "parseJSONNotLoaded: obj\x0a\x09super parseJSONNotLoaded: obj.\x0a\x09string := obj string.\x0a\x09isStringComplete := obj stringComplete.",
messageSends: ["parseJSONNotLoaded:", "string", "stringComplete"],
referencedClasses: []
}),
globals.MaglevString);

smalltalk.addMethod(
smalltalk.method({
selector: "string",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@string"];
return $1;
},
args: [],
source: "string\x0a\x09^ string",
messageSends: [],
referencedClasses: []
}),
globals.MaglevString);


smalltalk.addMethod(
smalltalk.method({
selector: "basetype",
protocol: 'constants',
fn: function (){
var self=this;
return "string";
},
args: [],
source: "basetype\x0a\x09^ #string",
messageSends: [],
referencedClasses: []
}),
globals.MaglevString.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevStringInline(){return globals.MaglevStringInline||(typeof MaglevStringInline=="undefined"?nil:MaglevStringInline)}
return $MaglevStringInline();
},
args: [],
source: "inlineViewClass\x0a\x09^ MaglevStringInline",
messageSends: [],
referencedClasses: ["MaglevStringInline"]
}),
globals.MaglevString.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevStringWindow(){return globals.MaglevStringWindow||(typeof MaglevStringWindow=="undefined"?nil:MaglevStringWindow)}
return $MaglevStringWindow();
},
args: [],
source: "windowViewClass\x0a\x09^ MaglevStringWindow",
messageSends: [],
referencedClasses: ["MaglevStringWindow"]
}),
globals.MaglevString.klass);


smalltalk.addClass('MaglevSymbol', globals.MaglevObject, ['string', 'isStringComplete'], 'Maglev-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "parseJSON:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.MaglevSymbol.superclass.fn.prototype._parseJSON_.apply(_st(self), [obj]);
self["@string"]=_st(obj)._string();
self["@isStringComplete"]=_st(obj)._stringComplete();
return self}, function($ctx1) {$ctx1.fill(self,"parseJSON:",{obj:obj},globals.MaglevSymbol)})},
args: ["obj"],
source: "parseJSON: obj\x0a\x09super parseJSON: obj.\x0a\x09string := obj string.\x0a\x09isStringComplete := obj stringComplete.",
messageSends: ["parseJSON:", "string", "stringComplete"],
referencedClasses: []
}),
globals.MaglevSymbol);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSONNotLoaded:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.MaglevSymbol.superclass.fn.prototype._parseJSONNotLoaded_.apply(_st(self), [obj]);
self["@string"]=_st(obj)._string();
self["@isStringComplete"]=_st(obj)._stringComplete();
return self}, function($ctx1) {$ctx1.fill(self,"parseJSONNotLoaded:",{obj:obj},globals.MaglevSymbol)})},
args: ["obj"],
source: "parseJSONNotLoaded: obj\x0a\x09super parseJSONNotLoaded: obj.\x0a\x09string := obj string.\x0a\x09isStringComplete := obj stringComplete.",
messageSends: ["parseJSONNotLoaded:", "string", "stringComplete"],
referencedClasses: []
}),
globals.MaglevSymbol);

smalltalk.addMethod(
smalltalk.method({
selector: "string",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@string"];
return $1;
},
args: [],
source: "string\x0a\x09^ string",
messageSends: [],
referencedClasses: []
}),
globals.MaglevSymbol);


smalltalk.addMethod(
smalltalk.method({
selector: "basetype",
protocol: 'constants',
fn: function (){
var self=this;
return "symbol";
},
args: [],
source: "basetype\x0a\x09^ #symbol",
messageSends: [],
referencedClasses: []
}),
globals.MaglevSymbol.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevSymbolInline(){return globals.MaglevSymbolInline||(typeof MaglevSymbolInline=="undefined"?nil:MaglevSymbolInline)}
return $MaglevSymbolInline();
},
args: [],
source: "inlineViewClass\x0a\x09^ MaglevSymbolInline",
messageSends: [],
referencedClasses: ["MaglevSymbolInline"]
}),
globals.MaglevSymbol.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevSymbolWindow(){return globals.MaglevSymbolWindow||(typeof MaglevSymbolWindow=="undefined"?nil:MaglevSymbolWindow)}
return $MaglevSymbolWindow();
},
args: [],
source: "windowViewClass\x0a\x09^ MaglevSymbolWindow",
messageSends: [],
referencedClasses: ["MaglevSymbolWindow"]
}),
globals.MaglevSymbol.klass);


smalltalk.addClass('MaglevThread', globals.MaglevObject, ['exception', 'localStorage', 'localStorageSize', 'status', 'isRailsThread'], 'Maglev-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "exception",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@exception"];
return $1;
},
args: [],
source: "exception\x0a\x09^ exception",
messageSends: [],
referencedClasses: []
}),
globals.MaglevThread);

smalltalk.addMethod(
smalltalk.method({
selector: "hasException",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@exception"];
if(($receiver = $1) == nil || $receiver == null){
return false;
} else {
$1;
};
$2=_st(_st(self["@exception"])._isMaglevNil())._not();
return $2;
}, function($ctx1) {$ctx1.fill(self,"hasException",{},globals.MaglevThread)})},
args: [],
source: "hasException\x0a\x09exception ifNil: [^ false].\x0a\x09^ exception isMaglevNil not",
messageSends: ["ifNil:", "not", "isMaglevNil"],
referencedClasses: []
}),
globals.MaglevThread);

smalltalk.addMethod(
smalltalk.method({
selector: "inspection",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2,$5;
$1=self._hasException();
if(smalltalk.assert($1)){
$4=_st(self["@exception"])._inspection();
$ctx1.sendIdx["inspection"]=1;
$3="#<GsProcess[".__comma($4);
$2=_st($3).__comma("]>");
$ctx1.sendIdx[","]=1;
return $2;
} else {
$5=globals.MaglevThread.superclass.fn.prototype._inspection.apply(_st(self), []);
return $5;
};
return self}, function($ctx1) {$ctx1.fill(self,"inspection",{},globals.MaglevThread)})},
args: [],
source: "inspection\x0a\x09self hasException \x0a\x09\x09ifTrue: [^ '#<GsProcess[', exception inspection, ']>']\x0a\x09\x09ifFalse: [^ super inspection].",
messageSends: ["ifTrue:ifFalse:", "hasException", ",", "inspection"],
referencedClasses: []
}),
globals.MaglevThread);

smalltalk.addMethod(
smalltalk.method({
selector: "isRailsThread",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@isRailsThread"]).__eq(true);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isRailsThread",{},globals.MaglevThread)})},
args: [],
source: "isRailsThread\x0a\x09^ isRailsThread = true",
messageSends: ["="],
referencedClasses: []
}),
globals.MaglevThread);

smalltalk.addMethod(
smalltalk.method({
selector: "localStorage",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@localStorage"];
return $1;
},
args: [],
source: "localStorage\x0a\x09^ localStorage",
messageSends: [],
referencedClasses: []
}),
globals.MaglevThread);

smalltalk.addMethod(
smalltalk.method({
selector: "localStorageSize",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@localStorageSize"];
return $1;
},
args: [],
source: "localStorageSize\x0a\x09^ localStorageSize",
messageSends: [],
referencedClasses: []
}),
globals.MaglevThread);

smalltalk.addMethod(
smalltalk.method({
selector: "parseJSON:",
protocol: 'instance creation',
fn: function (obj){
var self=this;
var objException;
function $MaglevObject(){return globals.MaglevObject||(typeof MaglevObject=="undefined"?nil:MaglevObject)}
return smalltalk.withContext(function($ctx1) { 
var $1;
globals.MaglevThread.superclass.fn.prototype._parseJSON_.apply(_st(self), [obj]);
objException=_st(obj)._at_("exception");
$1=objException;
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
self["@exception"]=_st($MaglevObject())._newObject_(objException);
$ctx1.sendIdx["newObject:"]=1;
self["@exception"];
};
self["@localStorage"]=_st($MaglevObject())._newObject_(_st(obj)._threadLocalStorage());
self["@localStorageSize"]=_st(obj)._threadLocalStorageSize();
self["@status"]=_st(obj)._status();
self["@isRailsThread"]=_st(obj)._isRailsThread();
return self}, function($ctx1) {$ctx1.fill(self,"parseJSON:",{obj:obj,objException:objException},globals.MaglevThread)})},
args: ["obj"],
source: "parseJSON: obj\x0a\x09|objException|\x0a\x09super parseJSON: obj.\x0a\x09objException := obj at: 'exception'.\x0a\x09objException ifNotNil: [exception := MaglevObject newObject: objException].\x0a\x09localStorage := MaglevObject newObject: obj threadLocalStorage.\x0a\x09localStorageSize := obj threadLocalStorageSize.\x0a\x09status := obj status.\x0a\x09isRailsThread := obj isRailsThread.",
messageSends: ["parseJSON:", "at:", "ifNotNil:", "newObject:", "threadLocalStorage", "threadLocalStorageSize", "status", "isRailsThread"],
referencedClasses: ["MaglevObject"]
}),
globals.MaglevThread);

smalltalk.addMethod(
smalltalk.method({
selector: "proceedWithCallback:",
protocol: 'interactions',
fn: function (aBlock){
var self=this;
function $MaglevAjax(){return globals.MaglevAjax||(typeof MaglevAjax=="undefined"?nil:MaglevAjax)}
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
_st($MaglevAjax())._ajax_data_withCallback_("code/proceed/".__comma(_st(self["@oop"])._asString()),_st($Dictionary())._new(),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"proceedWithCallback:",{aBlock:aBlock},globals.MaglevThread)})},
args: ["aBlock"],
source: "proceedWithCallback: aBlock\x0a\x09MaglevAjax \x0a\x09\x09ajax: 'code/proceed/', oop asString\x0a\x09\x09data: Dictionary new\x0a\x09\x09withCallback: aBlock.",
messageSends: ["ajax:data:withCallback:", ",", "asString", "new"],
referencedClasses: ["MaglevAjax", "Dictionary"]
}),
globals.MaglevThread);

smalltalk.addMethod(
smalltalk.method({
selector: "stackFrame:withCallback:",
protocol: 'interactions',
fn: function (anInteger,aBlock){
var self=this;
var params;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MaglevAjax(){return globals.MaglevAjax||(typeof MaglevAjax=="undefined"?nil:MaglevAjax)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Dictionary())._new();
_st($1)._at_put_("index",anInteger);
$2=_st($1)._yourself();
params=$2;
_st($MaglevAjax())._ajax_data_withCallback_("code/frame/".__comma(_st(self["@oop"])._asString()),params,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"stackFrame:withCallback:",{anInteger:anInteger,aBlock:aBlock,params:params},globals.MaglevThread)})},
args: ["anInteger", "aBlock"],
source: "stackFrame: anInteger withCallback: aBlock\x0a\x09|params|\x0a\x09params := Dictionary new\x0a\x09\x09at: 'index' put: anInteger;\x0a\x09\x09yourself.\x0a\x09MaglevAjax \x0a\x09\x09ajax: 'code/frame/', oop asString\x0a\x09\x09data: params\x0a\x09\x09withCallback: aBlock.",
messageSends: ["at:put:", "new", "yourself", "ajax:data:withCallback:", ",", "asString"],
referencedClasses: ["Dictionary", "MaglevAjax"]
}),
globals.MaglevThread);

smalltalk.addMethod(
smalltalk.method({
selector: "stackTraceMethodsWithCallback:",
protocol: 'interactions',
fn: function (aBlock){
var self=this;
function $MaglevAjax(){return globals.MaglevAjax||(typeof MaglevAjax=="undefined"?nil:MaglevAjax)}
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
_st($MaglevAjax())._ajax_data_withCallback_("code/frames/".__comma(_st(self["@oop"])._asString()),_st($Dictionary())._new(),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"stackTraceMethodsWithCallback:",{aBlock:aBlock},globals.MaglevThread)})},
args: ["aBlock"],
source: "stackTraceMethodsWithCallback: aBlock\x0a\x09MaglevAjax \x0a\x09\x09ajax: 'code/frames/', oop asString\x0a\x09\x09data: Dictionary new\x0a\x09\x09withCallback: aBlock.",
messageSends: ["ajax:data:withCallback:", ",", "asString", "new"],
referencedClasses: ["MaglevAjax", "Dictionary"]
}),
globals.MaglevThread);

smalltalk.addMethod(
smalltalk.method({
selector: "status",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@status"];
return $1;
},
args: [],
source: "status\x0a\x09^ status",
messageSends: [],
referencedClasses: []
}),
globals.MaglevThread);

smalltalk.addMethod(
smalltalk.method({
selector: "stepInto:withCallback:",
protocol: 'interactions',
fn: function (frameIndex,aBlock){
var self=this;
var params;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MaglevAjax(){return globals.MaglevAjax||(typeof MaglevAjax=="undefined"?nil:MaglevAjax)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Dictionary())._new();
_st($1)._at_put_("index",frameIndex);
$2=_st($1)._yourself();
params=$2;
_st($MaglevAjax())._ajax_data_withCallback_("code/stepInto/".__comma(_st(self["@oop"])._asString()),params,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"stepInto:withCallback:",{frameIndex:frameIndex,aBlock:aBlock,params:params},globals.MaglevThread)})},
args: ["frameIndex", "aBlock"],
source: "stepInto: frameIndex withCallback: aBlock\x0a\x09|params|\x0a\x09params := Dictionary new\x0a\x09\x09at: 'index' put: frameIndex;\x0a\x09\x09yourself.\x0a\x09MaglevAjax \x0a\x09\x09ajax: 'code/stepInto/', oop asString\x0a\x09\x09data: params\x0a\x09\x09withCallback: aBlock.",
messageSends: ["at:put:", "new", "yourself", "ajax:data:withCallback:", ",", "asString"],
referencedClasses: ["Dictionary", "MaglevAjax"]
}),
globals.MaglevThread);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOver:withCallback:",
protocol: 'interactions',
fn: function (frameIndex,aBlock){
var self=this;
var params;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MaglevAjax(){return globals.MaglevAjax||(typeof MaglevAjax=="undefined"?nil:MaglevAjax)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Dictionary())._new();
_st($1)._at_put_("index",frameIndex);
$2=_st($1)._yourself();
params=$2;
_st($MaglevAjax())._ajax_data_withCallback_("code/stepOver/".__comma(_st(self["@oop"])._asString()),params,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"stepOver:withCallback:",{frameIndex:frameIndex,aBlock:aBlock,params:params},globals.MaglevThread)})},
args: ["frameIndex", "aBlock"],
source: "stepOver: frameIndex withCallback: aBlock\x0a\x09|params|\x0a\x09params := Dictionary new\x0a\x09\x09at: 'index' put: frameIndex;\x0a\x09\x09yourself.\x0a\x09MaglevAjax \x0a\x09\x09ajax: 'code/stepOver/', oop asString\x0a\x09\x09data: params\x0a\x09\x09withCallback: aBlock.",
messageSends: ["at:put:", "new", "yourself", "ajax:data:withCallback:", ",", "asString"],
referencedClasses: ["Dictionary", "MaglevAjax"]
}),
globals.MaglevThread);

smalltalk.addMethod(
smalltalk.method({
selector: "trimTo:withCallback:",
protocol: 'interactions',
fn: function (frameIndex,aBlock){
var self=this;
var params;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MaglevAjax(){return globals.MaglevAjax||(typeof MaglevAjax=="undefined"?nil:MaglevAjax)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Dictionary())._new();
_st($1)._at_put_("index",frameIndex);
$2=_st($1)._yourself();
params=$2;
_st($MaglevAjax())._ajax_data_withCallback_("code/trim/".__comma(_st(self["@oop"])._asString()),params,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"trimTo:withCallback:",{frameIndex:frameIndex,aBlock:aBlock,params:params},globals.MaglevThread)})},
args: ["frameIndex", "aBlock"],
source: "trimTo: frameIndex withCallback: aBlock\x0a\x09|params|\x0a\x09params := Dictionary new\x0a\x09\x09at: 'index' put: frameIndex;\x0a\x09\x09yourself.\x0a\x09MaglevAjax \x0a\x09\x09ajax: 'code/trim/', oop asString\x0a\x09\x09data: params\x0a\x09\x09withCallback: aBlock.",
messageSends: ["at:put:", "new", "yourself", "ajax:data:withCallback:", ",", "asString"],
referencedClasses: ["Dictionary", "MaglevAjax"]
}),
globals.MaglevThread);


smalltalk.addMethod(
smalltalk.method({
selector: "basetype",
protocol: 'constants',
fn: function (){
var self=this;
return "thread";
},
args: [],
source: "basetype\x0a\x09^ #thread",
messageSends: [],
referencedClasses: []
}),
globals.MaglevThread.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inlineViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevThreadInline(){return globals.MaglevThreadInline||(typeof MaglevThreadInline=="undefined"?nil:MaglevThreadInline)}
return $MaglevThreadInline();
},
args: [],
source: "inlineViewClass\x0a\x09^ MaglevThreadInline",
messageSends: [],
referencedClasses: ["MaglevThreadInline"]
}),
globals.MaglevThread.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "windowViewClass",
protocol: 'constants',
fn: function (){
var self=this;
function $MaglevThreadWindow(){return globals.MaglevThreadWindow||(typeof MaglevThreadWindow=="undefined"?nil:MaglevThreadWindow)}
return $MaglevThreadWindow();
},
args: [],
source: "windowViewClass\x0a\x09^ MaglevThreadWindow",
messageSends: [],
referencedClasses: ["MaglevThreadWindow"]
}),
globals.MaglevThread.klass);


smalltalk.addClass('MaglevObjectSpace', globals.Object, ['objects', 'evalObject'], 'Maglev-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "at:",
protocol: 'objects',
fn: function (anOop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@objects"])._at_ifAbsent_(anOop,(function(){
return smalltalk.withContext(function($ctx2) {
return self._reloadObject_(anOop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:",{anOop:anOop},globals.MaglevObjectSpace)})},
args: ["anOop"],
source: "at: anOop\x0a\x09^ objects \x0a\x09\x09at: anOop\x0a\x09\x09ifAbsent: [self reloadObject: anOop]",
messageSends: ["at:ifAbsent:", "reloadObject:"],
referencedClasses: []
}),
globals.MaglevObjectSpace);

smalltalk.addMethod(
smalltalk.method({
selector: "at:withCallback:",
protocol: 'objects',
fn: function (anOop,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@objects"])._includesKey_(anOop);
if(smalltalk.assert($1)){
_st(aBlock)._value_(_st(self["@objects"])._at_(anOop));
} else {
self._reloadObject_withCallback_(anOop,aBlock);
};
return self}, function($ctx1) {$ctx1.fill(self,"at:withCallback:",{anOop:anOop,aBlock:aBlock},globals.MaglevObjectSpace)})},
args: ["anOop", "aBlock"],
source: "at: anOop withCallback: aBlock\x0a\x09(objects includesKey: anOop)\x0a\x09\x09ifTrue: [aBlock value: (objects at: anOop)]\x0a\x09\x09ifFalse: [self reloadObject: anOop withCallback: aBlock].",
messageSends: ["ifTrue:ifFalse:", "includesKey:", "value:", "at:", "reloadObject:withCallback:"],
referencedClasses: []
}),
globals.MaglevObjectSpace);

smalltalk.addMethod(
smalltalk.method({
selector: "evalObject",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@evalObject"];
return $1;
},
args: [],
source: "evalObject\x0a\x09^ evalObject",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectSpace);

smalltalk.addMethod(
smalltalk.method({
selector: "evalObject:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@evalObject"]=anObject;
return self},
args: ["anObject"],
source: "evalObject: anObject\x0a\x09evalObject := anObject.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectSpace);

smalltalk.addMethod(
smalltalk.method({
selector: "hasLoadedOop:",
protocol: 'objects',
fn: function (oop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@objects"])._includesKey_(oop))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self["@objects"])._at_(oop))._isLoaded();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasLoadedOop:",{oop:oop},globals.MaglevObjectSpace)})},
args: ["oop"],
source: "hasLoadedOop: oop\x0a\x09^ (objects includesKey: oop) and: [(objects at: oop) isLoaded]",
messageSends: ["and:", "includesKey:", "isLoaded", "at:"],
referencedClasses: []
}),
globals.MaglevObjectSpace);

smalltalk.addMethod(
smalltalk.method({
selector: "hasOop:",
protocol: 'objects',
fn: function (oop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@objects"])._includesKey_(oop);
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasOop:",{oop:oop},globals.MaglevObjectSpace)})},
args: ["oop"],
source: "hasOop: oop\x0a\x09^ objects includesKey: oop",
messageSends: ["includesKey:"],
referencedClasses: []
}),
globals.MaglevObjectSpace);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self["@objects"]=_st($Dictionary())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.MaglevObjectSpace)})},
args: [],
source: "initialize\x0a\x09objects := Dictionary new.",
messageSends: ["new"],
referencedClasses: ["Dictionary"]
}),
globals.MaglevObjectSpace);

smalltalk.addMethod(
smalltalk.method({
selector: "registerWindow:",
protocol: 'interactions',
fn: function (aWindow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@objects"])._at_(_st(_st(aWindow)._object())._oop()))._addWindow_(aWindow);
return self}, function($ctx1) {$ctx1.fill(self,"registerWindow:",{aWindow:aWindow},globals.MaglevObjectSpace)})},
args: ["aWindow"],
source: "registerWindow: aWindow\x0a\x09(objects at: aWindow object oop)\x0a\x09\x09addWindow: aWindow.",
messageSends: ["addWindow:", "at:", "oop", "object"],
referencedClasses: []
}),
globals.MaglevObjectSpace);

smalltalk.addMethod(
smalltalk.method({
selector: "reloadObject:",
protocol: 'objects',
fn: function (anOop){
var self=this;
var obj;
function $MaglevAjax(){return globals.MaglevAjax||(typeof MaglevAjax=="undefined"?nil:MaglevAjax)}
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MaglevObject(){return globals.MaglevObject||(typeof MaglevObject=="undefined"?nil:MaglevObject)}
return smalltalk.withContext(function($ctx1) { 
var $1;
obj=_st($MaglevAjax())._ajax_data_("object/index/".__comma(_st(anOop)._asString()),_st($Dictionary())._new());
$1=_st($MaglevObject())._newObject_(obj);
return $1;
}, function($ctx1) {$ctx1.fill(self,"reloadObject:",{anOop:anOop,obj:obj},globals.MaglevObjectSpace)})},
args: ["anOop"],
source: "reloadObject: anOop\x0a\x09|obj|\x0a\x09obj := MaglevAjax \x0a\x09\x09ajax: 'object/index/', anOop asString\x0a\x09\x09data: Dictionary new.\x0a\x09^ MaglevObject newObject: obj.",
messageSends: ["ajax:data:", ",", "asString", "new", "newObject:"],
referencedClasses: ["MaglevAjax", "Dictionary", "MaglevObject"]
}),
globals.MaglevObjectSpace);

smalltalk.addMethod(
smalltalk.method({
selector: "reloadObject:withCallback:",
protocol: 'objects',
fn: function (anOop,aBlock){
var self=this;
function $MaglevAjax(){return globals.MaglevAjax||(typeof MaglevAjax=="undefined"?nil:MaglevAjax)}
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MaglevObject(){return globals.MaglevObject||(typeof MaglevObject=="undefined"?nil:MaglevObject)}
return smalltalk.withContext(function($ctx1) { 
_st($MaglevAjax())._ajax_data_withCallback_("object/index/".__comma(_st(anOop)._asString()),_st($Dictionary())._new(),(function(obj){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(_st($MaglevObject())._newObject_(obj));
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"reloadObject:withCallback:",{anOop:anOop,aBlock:aBlock},globals.MaglevObjectSpace)})},
args: ["anOop", "aBlock"],
source: "reloadObject: anOop withCallback: aBlock\x0a\x09MaglevAjax \x0a\x09\x09ajax: 'object/index/', anOop asString\x0a\x09\x09data: Dictionary new\x0a\x09\x09withCallback: [:obj | \x0a\x09\x09\x09aBlock value: (MaglevObject newObject: obj)].",
messageSends: ["ajax:data:withCallback:", ",", "asString", "new", "value:", "newObject:"],
referencedClasses: ["MaglevAjax", "Dictionary", "MaglevObject"]
}),
globals.MaglevObjectSpace);

smalltalk.addMethod(
smalltalk.method({
selector: "reloadObject:withCallback:params:",
protocol: 'objects',
fn: function (anOop,aBlock,aParamsDict){
var self=this;
function $MaglevAjax(){return globals.MaglevAjax||(typeof MaglevAjax=="undefined"?nil:MaglevAjax)}
function $MaglevObject(){return globals.MaglevObject||(typeof MaglevObject=="undefined"?nil:MaglevObject)}
return smalltalk.withContext(function($ctx1) { 
_st($MaglevAjax())._ajax_data_withCallback_("object/index/".__comma(_st(anOop)._asString()),aParamsDict,(function(obj){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(_st($MaglevObject())._newObject_(obj));
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"reloadObject:withCallback:params:",{anOop:anOop,aBlock:aBlock,aParamsDict:aParamsDict},globals.MaglevObjectSpace)})},
args: ["anOop", "aBlock", "aParamsDict"],
source: "reloadObject: anOop withCallback: aBlock params: aParamsDict\x0a\x09MaglevAjax \x0a\x09\x09ajax: 'object/index/', anOop asString\x0a\x09\x09data: aParamsDict\x0a\x09\x09withCallback: [:obj | \x0a\x09\x09\x09aBlock value: (MaglevObject newObject: obj)].",
messageSends: ["ajax:data:withCallback:", ",", "asString", "value:", "newObject:"],
referencedClasses: ["MaglevAjax", "MaglevObject"]
}),
globals.MaglevObjectSpace);

smalltalk.addMethod(
smalltalk.method({
selector: "unregisterWindow:",
protocol: 'interactions',
fn: function (aWindow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@objects"])._at_(_st(_st(aWindow)._object())._oop()))._removeWindow_(aWindow);
return self}, function($ctx1) {$ctx1.fill(self,"unregisterWindow:",{aWindow:aWindow},globals.MaglevObjectSpace)})},
args: ["aWindow"],
source: "unregisterWindow: aWindow\x0a\x09(objects at: aWindow object oop)\x0a\x09\x09removeWindow: aWindow.",
messageSends: ["removeWindow:", "at:", "oop", "object"],
referencedClasses: []
}),
globals.MaglevObjectSpace);

smalltalk.addMethod(
smalltalk.method({
selector: "updateObject:",
protocol: 'objects',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._isLoaded();
if(smalltalk.assert($1)){
_st(self["@objects"])._at_put_(_st(anObject)._oop(),anObject);
};
return self}, function($ctx1) {$ctx1.fill(self,"updateObject:",{anObject:anObject},globals.MaglevObjectSpace)})},
args: ["anObject"],
source: "updateObject: anObject\x0a\x09anObject isLoaded\x0a\x09\x09ifTrue: [objects at: anObject oop put: anObject].",
messageSends: ["ifTrue:", "isLoaded", "at:put:", "oop"],
referencedClasses: []
}),
globals.MaglevObjectSpace);


globals.MaglevObjectSpace.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "instance",
protocol: 'singleton',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@instance"];
if(($receiver = $1) == nil || $receiver == null){
self["@instance"]=self._new();
self["@instance"];
} else {
$1;
};
$2=self["@instance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"instance",{},globals.MaglevObjectSpace.klass)})},
args: [],
source: "instance\x0a\x09instance ifNil: [instance := self new].\x0a\x09^ instance",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.MaglevObjectSpace.klass);

});
