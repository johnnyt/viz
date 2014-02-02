define("viz/Maglev-Vendor", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Maglev-Vendor');
smalltalk.packages["Maglev-Vendor"].transport = {"type":"amd","amdNamespace":"viz"};

smalltalk.addClass('MaglevAjax', globals.Object, [], 'Maglev-Vendor');

smalltalk.addMethod(
smalltalk.method({
selector: "ajax:data:",
protocol: 'not yet classified',
fn: function (aString,data){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var result = $.parseJSON($.ajax({url: aString, data: $.parseJSON(data._asJSONString()), async: false}).responseText);
	if (result.success === false) {
		self.error('Server call failed: ' + result.exception);
	}
	else {
		return result.result;
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"ajax:data:",{aString:aString,data:data},globals.MaglevAjax.klass)})},
args: ["aString", "data"],
source: "ajax: aString data: data\x0a\x09< var result = $.parseJSON($.ajax({url: aString, data: $.parseJSON(data._asJSONString()), async: false}).responseText);\x0a\x09if (result.success === false) {\x0a\x09\x09self.error('Server call failed: ' + result.exception);\x0a\x09}\x0a\x09else {\x0a\x09\x09return result.result;\x0a\x09} >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevAjax.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ajax:data:withCallback:",
protocol: 'not yet classified',
fn: function (aString,data,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 $.ajax({url: aString, data: $.parseJSON(data._asJSONString()), async: true, complete: function(response) {
		var result = $.parseJSON(response.responseText);
		if (result.success === false) {
			self.error('Server call failed: ' + result.exception);
		} else {
			aBlock._value_(result.result);
		}
	}}); ;
return self}, function($ctx1) {$ctx1.fill(self,"ajax:data:withCallback:",{aString:aString,data:data,aBlock:aBlock},globals.MaglevAjax.klass)})},
args: ["aString", "data", "aBlock"],
source: "ajax: aString data: data withCallback: aBlock\x0a\x09< $.ajax({url: aString, data: $.parseJSON(data._asJSONString()), async: true, complete: function(response) {\x0a\x09\x09var result = $.parseJSON(response.responseText);\x0a\x09\x09if (result.success === false) {\x0a\x09\x09\x09self.error('Server call failed: ' + result.exception);\x0a\x09\x09} else {\x0a\x09\x09\x09aBlock._value_(result.result);\x0a\x09\x09}\x0a\x09}}); >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevAjax.klass);


smalltalk.addClass('MaglevJsPlumb', globals.Object, [], 'Maglev-Vendor');

globals.MaglevJsPlumb.klass.iVarNames = ['sourceTarget','defaults','referenceConnection','instanceOfConnection','virtualClassConnection','superclassConnection','connection'];
smalltalk.addMethod(
smalltalk.method({
selector: "connectWindow:to:as:with:",
protocol: 'interactions',
fn: function (sourceWindow,targetWindow,cType,caption){
var self=this;
var params,type,defParams,sourceEl,targetEl,text;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(sourceWindow).__eq(targetWindow);
$ctx1.sendIdx["="]=1;
if(smalltalk.assert($1)){
return self;
};
type=_st(self._connection())._at_(cType);
$ctx1.sendIdx["at:"]=1;
$2=_st(sourceWindow)._container();
$ctx1.sendIdx["container"]=1;
sourceEl=_st($2)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
targetEl=_st(_st(targetWindow)._container())._asJQuery();
if(($receiver = caption) == nil || $receiver == null){
text="";
text;
} else {
text=_st(caption)._asString();
text;
};
$3=_st(text).__eq("");
if(! smalltalk.assert($3)){
text=_st("<span class=\x22component object-ivname-box\x22 style=\x22white-space: nowrap;\x22>".__comma(text)).__comma("</span>");
$ctx1.sendIdx[","]=1;
text;
};
params=self._extendedParams_(type);
$4=params;
_st($4)._basicAt_put_("source",sourceEl);
$ctx1.sendIdx["basicAt:put:"]=1;
$5=_st($4)._basicAt_put_("target",targetEl);
$6=_st(_st(_st(params)._overlays())._at_((1)))._at_((1));
$ctx1.sendIdx["at:"]=2;
_st($6)._label_(text);
_st(_st(window)._jsPlumb())._connect_(params);
return self}, function($ctx1) {$ctx1.fill(self,"connectWindow:to:as:with:",{sourceWindow:sourceWindow,targetWindow:targetWindow,cType:cType,caption:caption,params:params,type:type,defParams:defParams,sourceEl:sourceEl,targetEl:targetEl,text:text},globals.MaglevJsPlumb.klass)})},
args: ["sourceWindow", "targetWindow", "cType", "caption"],
source: "connectWindow: sourceWindow to: targetWindow as: cType with: caption\x0a\x09|params type defParams sourceEl targetEl text|\x0a\x09sourceWindow = targetWindow ifTrue: [^ self].\x0a\x09type := self connection at: cType.\x0a\x09sourceEl := sourceWindow container asJQuery.\x0a\x09targetEl := targetWindow container asJQuery.\x0a\x09caption\x0a\x09\x09ifNil: [text := '']\x0a\x09\x09ifNotNil: [text := caption asString].\x0a\x09text = ''\x0a\x09\x09ifFalse: [text := '<span class=\x22component object-ivname-box\x22 style=\x22white-space: nowrap;\x22>', text, '</span>'].\x0a\x09params := self extendedParams: type.\x0a\x09params\x0a\x09\x09basicAt: 'source' put: sourceEl;\x0a\x09\x09basicAt: 'target' put: targetEl.\x0a\x09\x09\x0a\x09((params overlays at: 1) at: 1) label: text.\x0a\x0a\x09\x22< params = $.extend(true, {}, type); \x0a\x09params.source = sourceEl;\x0a\x09params.target = targetEl; \x0a\x09params.overlays[1][1].label = text; >.\x22\x0a\x0a\x09window jsPlumb connect: params.",
messageSends: ["ifTrue:", "=", "at:", "connection", "asJQuery", "container", "ifNil:ifNotNil:", "asString", "ifFalse:", ",", "extendedParams:", "basicAt:put:", "label:", "overlays", "connect:", "jsPlumb"],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "connectWindow:to:with:",
protocol: 'interactions',
fn: function (sourceWindow,targetWindow,parameters){
var self=this;
var params,type,defParams;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(sourceWindow).__eq(targetWindow);
if(smalltalk.assert($1)){
return self;
};
type=_st(self._connection())._at_(_st(parameters)._at_("type"));
$ctx1.sendIdx["at:"]=1;
params=self._extendedParams_(defParams);
$2=params;
$3=$2;
$4=_st(sourceWindow)._container();
$ctx1.sendIdx["container"]=1;
_st($3)._basicAt_put_("source",$4);
$ctx1.sendIdx["basicAt:put:"]=1;
$5=_st($2)._basicAt_put_("target",_st(targetWindow)._container());
_st(_st(window)._jsPlumb())._connect_(params);
return self}, function($ctx1) {$ctx1.fill(self,"connectWindow:to:with:",{sourceWindow:sourceWindow,targetWindow:targetWindow,parameters:parameters,params:params,type:type,defParams:defParams},globals.MaglevJsPlumb.klass)})},
args: ["sourceWindow", "targetWindow", "parameters"],
source: "connectWindow: sourceWindow to: targetWindow with: parameters\x0a\x09|params type defParams|\x0a\x09sourceWindow = targetWindow ifTrue: [^ self].\x0a\x09type := self connection at: (parameters at: #type).\x0a\x09params := self extendedParams: defParams.\x0a\x09\x22< params = $.extend(true, {}, defParams); >.\x22\x0a\x09params\x0a\x09\x09basicAt: 'source' put: sourceWindow container;\x0a\x09\x09basicAt: 'target' put: targetWindow container.\x0a\x0a\x09window jsPlumb connect: params.",
messageSends: ["ifTrue:", "=", "at:", "connection", "extendedParams:", "basicAt:put:", "container", "connect:", "jsPlumb"],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "connection",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@connection"];
return $1;
},
args: [],
source: "connection\x0a\x09^ connection",
messageSends: [],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "constConnection",
protocol: 'constants',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Dictionary())._new();
_st($2)._at_put_("iv",self["@referenceConnection"]);
$ctx1.sendIdx["at:put:"]=1;
_st($2)._at_put_("hashKey",self["@referenceConnection"]);
$ctx1.sendIdx["at:put:"]=2;
_st($2)._at_put_("hashValue",self["@referenceConnection"]);
$ctx1.sendIdx["at:put:"]=3;
_st($2)._at_put_("arrayElement",self["@referenceConnection"]);
$ctx1.sendIdx["at:put:"]=4;
_st($2)._at_put_("class",self["@instanceOfConnection"]);
$ctx1.sendIdx["at:put:"]=5;
_st($2)._at_put_("virtualClass",self["@virtualClassConnection"]);
$ctx1.sendIdx["at:put:"]=6;
_st($2)._at_put_("superclass",self["@superclassConnection"]);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"constConnection",{},globals.MaglevJsPlumb.klass)})},
args: [],
source: "constConnection\x0a\x09^ Dictionary new\x0a\x09\x09at: #iv put: referenceConnection;\x0a\x09\x09at: #hashKey put: referenceConnection;\x0a\x09\x09at: #hashValue put: referenceConnection;\x0a\x09\x09at: #arrayElement put: referenceConnection;\x0a\x09\x09at: #class put: instanceOfConnection;\x0a\x09\x09at: #virtualClass put: virtualClassConnection;\x0a\x09\x09at: #superclass put: superclassConnection;\x0a\x09\x09yourself",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "constDefaults",
protocol: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return {
		Connector: ["Bezier", {curviness: 50}],
		DragOptions: {cursor: "pointer", zIndex: 2000},
		PaintStyle: {strokeStyle: "gray", lineWidth: 2},
		Endpoint: ["Dot",{radius: 1}],
		EndpointStyle: {radius: 1, fillStyle: "gray"},
		HoverPaintStyle: {strokeStyle: "#ec9f2e"},
		EndpointHoverStyle: {fillStyle: "#ec9f2e"},
		Anchors: ["BottomCenter", "TopCenter"]}; ;
return self}, function($ctx1) {$ctx1.fill(self,"constDefaults",{},globals.MaglevJsPlumb.klass)})},
args: [],
source: "constDefaults\x0a\x09< return {\x0a\x09\x09Connector: [\x22Bezier\x22, {curviness: 50}],\x0a\x09\x09DragOptions: {cursor: \x22pointer\x22, zIndex: 2000},\x0a\x09\x09PaintStyle: {strokeStyle: \x22gray\x22, lineWidth: 2},\x0a\x09\x09Endpoint: [\x22Dot\x22,{radius: 1}],\x0a\x09\x09EndpointStyle: {radius: 1, fillStyle: \x22gray\x22},\x0a\x09\x09HoverPaintStyle: {strokeStyle: \x22#ec9f2e\x22},\x0a\x09\x09EndpointHoverStyle: {fillStyle: \x22#ec9f2e\x22},\x0a\x09\x09Anchors: [\x22BottomCenter\x22, \x22TopCenter\x22]}; >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "constInstanceOfConnection",
protocol: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return {
		overlays: ["Arrow", [
			"Label",
			{label: "?", location: 0.25, id: "myLabel"}]],
		paintStyle: {
			lineWidth: 2,
			strokeStyle:"#9b59bb",
			dashstyle:"4 2",
			joinstyle:"miter"}}; ;
return self}, function($ctx1) {$ctx1.fill(self,"constInstanceOfConnection",{},globals.MaglevJsPlumb.klass)})},
args: [],
source: "constInstanceOfConnection\x0a\x09< return {\x0a\x09\x09overlays: [\x22Arrow\x22, [\x0a\x09\x09\x09\x22Label\x22,\x0a\x09\x09\x09{label: \x22?\x22, location: 0.25, id: \x22myLabel\x22}]],\x0a\x09\x09paintStyle: {\x0a\x09\x09\x09lineWidth: 2,\x0a\x09\x09\x09strokeStyle:\x22#9b59bb\x22,\x0a\x09\x09\x09dashstyle:\x224 2\x22,\x0a\x09\x09\x09joinstyle:\x22miter\x22}}; >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "constReferenceConnection",
protocol: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return {
		overlays: ["Arrow", [
			"Label",
			{label: "?", location: 0.25, id: "myLabel"}]]}; ;
return self}, function($ctx1) {$ctx1.fill(self,"constReferenceConnection",{},globals.MaglevJsPlumb.klass)})},
args: [],
source: "constReferenceConnection\x0a\x09< return {\x0a\x09\x09overlays: [\x22Arrow\x22, [\x0a\x09\x09\x09\x22Label\x22,\x0a\x09\x09\x09{label: \x22?\x22, location: 0.25, id: \x22myLabel\x22}]]}; >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "constSourceTarget",
protocol: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return {
		dropOptions: {
			hoverClass:"dragHover"
		},
 		anchor: "Continuous"}; ;
return self}, function($ctx1) {$ctx1.fill(self,"constSourceTarget",{},globals.MaglevJsPlumb.klass)})},
args: [],
source: "constSourceTarget\x0a\x09< return {\x0a\x09\x09dropOptions: {\x0a\x09\x09\x09hoverClass:\x22dragHover\x22\x0a\x09\x09},\x0a \x09\x09anchor: \x22Continuous\x22}; >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "constSuperclassConnection",
protocol: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return {
		overlays: ["PlainArrow", [
			"Label",
			{label: "?", location: 0.25, id: "myLabel"}]],
		paintStyle: {
			lineWidth: 2,
			strokeStyle:"#346789",
			joinstyle:"miter"}}; ;
return self}, function($ctx1) {$ctx1.fill(self,"constSuperclassConnection",{},globals.MaglevJsPlumb.klass)})},
args: [],
source: "constSuperclassConnection\x0a\x09< return {\x0a\x09\x09overlays: [\x22PlainArrow\x22, [\x0a\x09\x09\x09\x22Label\x22,\x0a\x09\x09\x09{label: \x22?\x22, location: 0.25, id: \x22myLabel\x22}]],\x0a\x09\x09paintStyle: {\x0a\x09\x09\x09lineWidth: 2,\x0a\x09\x09\x09strokeStyle:\x22#346789\x22,\x0a\x09\x09\x09joinstyle:\x22miter\x22}}; >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "constVirtualClassConnection",
protocol: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return {
		overlays: ["Arrow", [
			"Label",
			{label: "?", location: 0.25, id: "myLabel"}]],
		paintStyle: {
			lineWidth: 2,
			strokeStyle:"#c50b0b",
			dashstyle:"4 2",
			joinstyle:"miter"}}; ;
return self}, function($ctx1) {$ctx1.fill(self,"constVirtualClassConnection",{},globals.MaglevJsPlumb.klass)})},
args: [],
source: "constVirtualClassConnection\x0a\x09< return {\x0a\x09\x09overlays: [\x22Arrow\x22, [\x0a\x09\x09\x09\x22Label\x22,\x0a\x09\x09\x09{label: \x22?\x22, location: 0.25, id: \x22myLabel\x22}]],\x0a\x09\x09paintStyle: {\x0a\x09\x09\x09lineWidth: 2,\x0a\x09\x09\x09strokeStyle:\x22#c50b0b\x22,\x0a\x09\x09\x09dashstyle:\x224 2\x22,\x0a\x09\x09\x09joinstyle:\x22miter\x22}}; >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaults",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@defaults"];
return $1;
},
args: [],
source: "defaults\x0a\x09^ defaults",
messageSends: [],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "deleteEndpointsFor:",
protocol: 'interactions',
fn: function (anObject){
var self=this;
var endpoints;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(window)._jsPlumb();
$ctx1.sendIdx["jsPlumb"]=1;
endpoints=_st($1)._getEndpoints_(anObject);
$2=endpoints;
if(($receiver = $2) == nil || $receiver == null){
$2;
} else {
_st(endpoints)._do_((function(endpoint){
return smalltalk.withContext(function($ctx2) {
return _st(_st(window)._jsPlumb())._deleteEndpoint_(endpoint);
}, function($ctx2) {$ctx2.fillBlock({endpoint:endpoint},$ctx1,2)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"deleteEndpointsFor:",{anObject:anObject,endpoints:endpoints},globals.MaglevJsPlumb.klass)})},
args: ["anObject"],
source: "deleteEndpointsFor: anObject\x0a\x09|endpoints|\x0a\x09endpoints := window jsPlumb getEndpoints: anObject.\x0a\x09endpoints ifNotNil: [endpoints do: [:endpoint | window jsPlumb deleteEndpoint: endpoint]].",
messageSends: ["getEndpoints:", "jsPlumb", "ifNotNil:", "do:", "deleteEndpoint:"],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "extendedParams:",
protocol: 'accessing',
fn: function (defParams){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return $.extend(true, {}, defParams); ;
return self}, function($ctx1) {$ctx1.fill(self,"extendedParams:",{defParams:defParams},globals.MaglevJsPlumb.klass)})},
args: ["defParams"],
source: "extendedParams: defParams\x0a\x09< return $.extend(true, {}, defParams); >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._initializeConstants();
self._initializeJsPlumb();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.MaglevJsPlumb.klass)})},
args: [],
source: "initialize\x0a\x09self initializeConstants.\x0a\x09self initializeJsPlumb.",
messageSends: ["initializeConstants", "initializeJsPlumb"],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeChromeFix",
protocol: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 document.onselectstart = function() {
		return false;
	}; ;
return self}, function($ctx1) {$ctx1.fill(self,"initializeChromeFix",{},globals.MaglevJsPlumb.klass)})},
args: [],
source: "initializeChromeFix\x0a\x09< document.onselectstart = function() {\x0a\x09\x09return false;\x0a\x09}; >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeConstants",
protocol: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sourceTarget"]=self._constSourceTarget();
self["@defaults"]=self._constDefaults();
self["@referenceConnection"]=self._constReferenceConnection();
self["@instanceOfConnection"]=self._constInstanceOfConnection();
self["@virtualClassConnection"]=self._constVirtualClassConnection();
self["@superclassConnection"]=self._constSuperclassConnection();
self["@connection"]=self._constConnection();
return self}, function($ctx1) {$ctx1.fill(self,"initializeConstants",{},globals.MaglevJsPlumb.klass)})},
args: [],
source: "initializeConstants\x0a\x09sourceTarget := self constSourceTarget.\x0a\x09defaults := self constDefaults.\x0a\x09referenceConnection := self constReferenceConnection.\x0a\x09instanceOfConnection := self constInstanceOfConnection.\x0a\x09virtualClassConnection := self constVirtualClassConnection.\x0a\x09superclassConnection := self constSuperclassConnection.\x0a\x09connection := self constConnection.",
messageSends: ["constSourceTarget", "constDefaults", "constReferenceConnection", "constInstanceOfConnection", "constVirtualClassConnection", "constSuperclassConnection", "constConnection"],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeJsPlumb",
protocol: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
$1=_st(window)._jsPlumb();
$ctx1.sendIdx["jsPlumb"]=1;
_st($1)._bind_a_("ready",(function(){
return smalltalk.withContext(function($ctx2) {
self._initializeChromeFix();
$2=_st(window)._jsPlumb();
$ctx2.sendIdx["jsPlumb"]=2;
$4=_st(window)._jsPlumb();
$ctx2.sendIdx["jsPlumb"]=3;
$3=_st($4)._SVG();
_st($2)._setRenderMode_($3);
return _st(_st(window)._jsPlumb())._importDefaults_(self["@defaults"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeJsPlumb",{},globals.MaglevJsPlumb.klass)})},
args: [],
source: "initializeJsPlumb\x0a\x09window jsPlumb\x0a\x09\x09bind: 'ready'\x0a\x09\x09a: [\x0a\x09\x09\x09self initializeChromeFix.\x0a\x09\x09\x09window jsPlumb setRenderMode: window jsPlumb SVG.\x0a\x09\x09\x09window jsPlumb importDefaults: defaults].",
messageSends: ["bind:a:", "jsPlumb", "initializeChromeFix", "setRenderMode:", "SVG", "importDefaults:"],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "instanceOfConnection",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@instanceOfConnection"];
return $1;
},
args: [],
source: "instanceOfConnection\x0a\x09^ instanceOfConnection",
messageSends: [],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareObject:",
protocol: 'interactions',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(window)._jsPlumb();
$ctx1.sendIdx["jsPlumb"]=1;
_st($1)._draggable_(anObject);
$2=_st(window)._jsPlumb();
$ctx1.sendIdx["jsPlumb"]=2;
_st($2)._makeSource_a_(anObject,self["@sourceTarget"]);
_st(_st(window)._jsPlumb())._makeTarget_a_(anObject,self["@sourceTarget"]);
return self}, function($ctx1) {$ctx1.fill(self,"prepareObject:",{anObject:anObject},globals.MaglevJsPlumb.klass)})},
args: ["anObject"],
source: "prepareObject: anObject\x0a\x09window jsPlumb draggable: anObject.\x0a\x09window jsPlumb makeSource: anObject a: sourceTarget.\x0a\x09window jsPlumb makeTarget: anObject a: sourceTarget.",
messageSends: ["draggable:", "jsPlumb", "makeSource:a:", "makeTarget:a:"],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "referenceConnection",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@referenceConnection"];
return $1;
},
args: [],
source: "referenceConnection\x0a\x09^ referenceConnection",
messageSends: [],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceTarget",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@sourceTarget"];
return $1;
},
args: [],
source: "sourceTarget\x0a\x09^ sourceTarget",
messageSends: [],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "virtualClassConnection",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@virtualClassConnection"];
return $1;
},
args: [],
source: "virtualClassConnection\x0a\x09^ virtualClassConnection",
messageSends: [],
referencedClasses: []
}),
globals.MaglevJsPlumb.klass);

});
