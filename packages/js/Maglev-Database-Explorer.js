define("viz/Maglev-Database-Explorer", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Canvas", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Maglev-Database-Explorer');
smalltalk.packages["Maglev-Database-Explorer"].transport = {"type":"amd","amdNamespace":"viz"};

smalltalk.addClass('MaglevDraggableObject', globals.Widget, ['content'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "content",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@content"];
return $1;
},
args: [],
source: "content\x0a\x09^ content",
messageSends: [],
referencedClasses: []
}),
globals.MaglevDraggableObject);

smalltalk.addMethod(
smalltalk.method({
selector: "content:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@content"]=anObject;
return self},
args: ["anObject"],
source: "content: anObject\x0a\x09content := anObject.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevDraggableObject);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevIcon(){return globals.MaglevIcon||(typeof MaglevIcon=="undefined"?nil:MaglevIcon)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$6,$7,$3;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_with_("draggable-new-object-container",(function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(html)._div();
$ctx2.sendIdx["div"]=2;
_st($2)._class_("ui-widget-content ui-draggable draggable-new-object");
$ctx2.sendIdx["class:"]=1;
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$4=_st(html)._div();
$ctx3.sendIdx["div"]=3;
_st($4)._class_("object-drag-dummy");
$ctx3.sendIdx["class:"]=2;
_st($4)._style_("display: none;");
_st($4)._with_(_st($MaglevIcon())._move());
$ctx3.sendIdx["with:"]=2;
$5=_st($4)._with_(self["@content"]);
$ctx3.sendIdx["with:"]=3;
$5;
$6=_st(html)._div();
_st($6)._class_("object-iv-name");
$7=_st($6)._with_(self["@content"]);
return $7;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=1;
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MaglevDraggableObject)})},
args: ["html"],
source: "renderOn: html\x0a\x09html div\x0a\x09\x09class: 'draggable-new-object-container'\x0a\x09\x09with: [\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'ui-widget-content ui-draggable draggable-new-object';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html div\x0a\x09\x09\x09\x09\x09\x09class: 'object-drag-dummy';\x0a\x09\x09\x09\x09\x09\x09style: 'display: none;';\x0a\x09\x09\x09\x09\x09\x09with: MaglevIcon move;\x0a\x09\x09\x09\x09\x09\x09with: content.\x0a\x09\x09\x09\x09\x09html div\x0a\x09\x09\x09\x09\x09\x09class: 'object-iv-name';\x0a\x09\x09\x09\x09\x09\x09with: content]].",
messageSends: ["class:with:", "div", "class:", "with:", "style:", "move"],
referencedClasses: ["MaglevIcon"]
}),
globals.MaglevDraggableObject);


smalltalk.addMethod(
smalltalk.method({
selector: "with:",
protocol: 'not yet classified',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._content_(anObject);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:",{anObject:anObject},globals.MaglevDraggableObject.klass)})},
args: ["anObject"],
source: "with: anObject\x0a\x09^ self basicNew\x0a\x09\x09content: anObject;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["content:", "basicNew", "initialize", "yourself"],
referencedClasses: []
}),
globals.MaglevDraggableObject.klass);


smalltalk.addClass('MaglevGsNMethodEditor', globals.Widget, ['object', 'editorContainer', 'errorBox', 'rubyIcon', 'stIcon', 'envIdContainer', 'sourceLocationContainer', 'editor', 'editorHeight', 'editorWidth'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "commandSave",
protocol: 'interactions',
fn: function (){
var self=this;
var selectedCategory;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
_st(self["@errorBox"])._hide();
_st(_st(self["@errorBox"])._asJQuery())._empty();
$1=_st(_st(self["@object"])._environmentId()).__eq((1));
if(smalltalk.assert($1)){
$2=self["@object"];
$3=_st(self["@editor"])._getValue();
$ctx1.sendIdx["getValue"]=1;
_st($2)._compileRubySourceCode_withCallback_($3,(function(success,obj){
return smalltalk.withContext(function($ctx2) {
$4=_st(obj)._isException();
$ctx2.sendIdx["isException"]=1;
if(smalltalk.assert($4)){
return self._signalFailure_(obj);
$ctx2.sendIdx["signalFailure:"]=1;
} else {
return self._signalSuccess();
$ctx2.sendIdx["signalSuccess"]=1;
};
}, function($ctx2) {$ctx2.fillBlock({success:success,obj:obj},$ctx1,2)})}));
} else {
_st(self["@object"])._compileSmalltalkSourceCode_withCallback_(_st(self["@editor"])._getValue(),(function(success,obj){
return smalltalk.withContext(function($ctx2) {
$5=_st(obj)._isException();
if(smalltalk.assert($5)){
return self._signalFailure_(obj);
} else {
return self._signalSuccess();
};
}, function($ctx2) {$ctx2.fillBlock({success:success,obj:obj},$ctx1,6)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"commandSave",{selectedCategory:selectedCategory},globals.MaglevGsNMethodEditor)})},
args: [],
source: "commandSave\x0a\x09|selectedCategory|\x0a\x09errorBox hide.\x0a\x09errorBox asJQuery empty.\x0a\x09object environmentId = 1\x0a\x09\x09ifTrue: [object\x0a\x09\x09\x09compileRubySourceCode: editor getValue \x0a\x09\x09\x09withCallback: [:success :obj |\x0a\x09\x09\x09\x09obj isException\x0a\x09\x09\x09\x09\x09ifTrue: [self signalFailure: obj]\x0a\x09\x09\x09\x09\x09ifFalse: [self signalSuccess]]]\x0a\x09\x09ifFalse: [object \x0a\x09\x09\x09compileSmalltalkSourceCode: editor getValue \x0a\x09\x09\x09withCallback: [:success :obj |\x0a\x09\x09\x09\x09obj isException\x0a\x09\x09\x09\x09\x09ifTrue: [self signalFailure: obj]\x0a\x09\x09\x09\x09\x09ifFalse: [self signalSuccess]]].",
messageSends: ["hide", "empty", "asJQuery", "ifTrue:ifFalse:", "=", "environmentId", "compileRubySourceCode:withCallback:", "getValue", "isException", "signalFailure:", "signalSuccess", "compileSmalltalkSourceCode:withCallback:"],
referencedClasses: []
}),
globals.MaglevGsNMethodEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "envId",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._methodObject())._at_((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"envId",{},globals.MaglevGsNMethodEditor)})},
args: [],
source: "envId\x0a\x09^ self methodObject at: 2",
messageSends: ["at:", "methodObject"],
referencedClasses: []
}),
globals.MaglevGsNMethodEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "filename",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._methodObject())._at_((4)))._at_((1));
$ctx1.sendIdx["at:"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"filename",{},globals.MaglevGsNMethodEditor)})},
args: [],
source: "filename\x0a\x09^ (self methodObject at: 4) at: 1",
messageSends: ["at:", "methodObject"],
referencedClasses: []
}),
globals.MaglevGsNMethodEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEditor",
protocol: 'initializing',
fn: function (){
var self=this;
var params,extraKeys;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
function $CodeMirror(){return globals.CodeMirror||(typeof CodeMirror=="undefined"?nil:CodeMirror)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st($Object())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._basicAt_put_("Ctrl-S",(function(){
return smalltalk.withContext(function($ctx2) {
return self._commandSave();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["basicAt:put:"]=1;
$2=_st($1)._yourself();
$ctx1.sendIdx["yourself"]=1;
extraKeys=$2;
$3=_st($Object())._new();
_st($3)._basicAt_put_("mode","text/x-ruby");
$ctx1.sendIdx["basicAt:put:"]=2;
_st($3)._basicAt_put_("styleActiveLine",true);
$ctx1.sendIdx["basicAt:put:"]=3;
_st($3)._basicAt_put_("lineNumbers",true);
$ctx1.sendIdx["basicAt:put:"]=4;
_st($3)._basicAt_put_("matchBrackets",true);
$ctx1.sendIdx["basicAt:put:"]=5;
_st($3)._basicAt_put_("extraKeys",extraKeys);
$4=_st($3)._yourself();
params=$4;
self["@editor"]=_st($CodeMirror())._value_value_(_st(_st(self["@editorContainer"])._asJQuery())._at_((0)),params);
_st(self["@editor"])._setValue_("");
self._mouseFix();
self._makeEditorResizable();
return self}, function($ctx1) {$ctx1.fill(self,"initializeEditor",{params:params,extraKeys:extraKeys},globals.MaglevGsNMethodEditor)})},
args: [],
source: "initializeEditor\x0a\x09|params extraKeys|\x0a\x09extraKeys := Object new\x0a\x09\x09basicAt: 'Ctrl-S' put: [self commandSave];\x0a\x09\x09yourself.\x0a\x09params := Object new\x0a\x09\x09basicAt: 'mode' put: 'text/x-ruby';\x0a\x09\x09basicAt: 'styleActiveLine' put: true;\x0a\x09\x09basicAt: 'lineNumbers' put: true;\x0a\x09\x09basicAt: 'matchBrackets' put: true;\x0a\x09\x09basicAt: 'extraKeys' put: extraKeys;\x0a\x09\x09yourself. \x0a\x09editor := CodeMirror value: (editorContainer asJQuery at: 0) value: params.\x0a\x09editor setValue: ''.\x0a\x09self mouseFix.\x0a\x09self makeEditorResizable.",
messageSends: ["basicAt:put:", "new", "commandSave", "yourself", "value:value:", "at:", "asJQuery", "setValue:", "mouseFix", "makeEditorResizable"],
referencedClasses: ["Object", "CodeMirror"]
}),
globals.MaglevGsNMethodEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "lineInFile",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._methodObject())._at_((4)))._at_((2));
$ctx1.sendIdx["at:"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineInFile",{},globals.MaglevGsNMethodEditor)})},
args: [],
source: "lineInFile\x0a\x09^ (self methodObject at: 4) at: 2",
messageSends: ["at:", "methodObject"],
referencedClasses: []
}),
globals.MaglevGsNMethodEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "makeEditorResizable",
protocol: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@editorContainer']._asJQuery().find('.CodeMirror').resizable({
		resize: function() {	
			self['@editor'].setSize($(this).width(), $(this).height());	
		}
	}); ;
return self}, function($ctx1) {$ctx1.fill(self,"makeEditorResizable",{},globals.MaglevGsNMethodEditor)})},
args: [],
source: "makeEditorResizable\x0a\x09< self['@editorContainer']._asJQuery().find('.CodeMirror').resizable({\x0a\x09\x09resize: function() {\x09\x0a\x09\x09\x09self['@editor'].setSize($(this).width(), $(this).height());\x09\x0a\x09\x09}\x0a\x09}); >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevGsNMethodEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "methodObject",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@object"];
return $1;
},
args: [],
source: "methodObject\x0a\x09^ object",
messageSends: [],
referencedClasses: []
}),
globals.MaglevGsNMethodEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseFix",
protocol: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var editor = self['@editorContainer'];
	editor._asJQuery().mousedown(function (event) {
		event.preventDefault();
		return false;
	}); ;
return self}, function($ctx1) {$ctx1.fill(self,"mouseFix",{},globals.MaglevGsNMethodEditor)})},
args: [],
source: "mouseFix\x0a\x09< var editor = self['@editorContainer'];\x0a\x09editor._asJQuery().mousedown(function (event) {\x0a\x09\x09event.preventDefault();\x0a\x09\x09return false;\x0a\x09}); >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevGsNMethodEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "object",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@object"];
return $1;
},
args: [],
source: "object\x0a\x09^ object",
messageSends: [],
referencedClasses: []
}),
globals.MaglevGsNMethodEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "object:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@object"]=anObject;
return self},
args: ["anObject"],
source: "object: anObject\x0a\x09object := anObject",
messageSends: [],
referencedClasses: []
}),
globals.MaglevGsNMethodEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "renderEditorOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
self["@editorContainer"]=_st(_st(html)._span())._class_("pull-left code-area");
$ctx1.sendIdx["class:"]=1;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._style_("clear: both;");
$ctx1.sendIdx["style:"]=1;
$2=_st(html)._div();
_st($2)._class_("alert alert-error");
_st($2)._style_("margin-bottom: 0px;");
$3=_st($2)._hide();
self["@errorBox"]=$3;
self._initializeEditor();
return self}, function($ctx1) {$ctx1.fill(self,"renderEditorOn:",{html:html},globals.MaglevGsNMethodEditor)})},
args: ["html"],
source: "renderEditorOn: html\x0a\x09editorContainer := html span\x0a\x09\x09class: 'pull-left code-area'.\x0a\x09html div style: 'clear: both;'.\x0a\x09errorBox := html div\x0a\x09\x09class: 'alert alert-error';\x0a\x09\x09style: 'margin-bottom: 0px;';\x0a\x09\x09hide.\x0a\x09self initializeEditor.",
messageSends: ["class:", "span", "style:", "div", "hide", "initializeEditor"],
referencedClasses: []
}),
globals.MaglevGsNMethodEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMethodObject",
protocol: 'rendering',
fn: function (){
var self=this;
var envId;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
_st(self["@editor"])._setValue_(self._sourceString());
_st(self["@editorContainer"])._show();
$ctx1.sendIdx["show"]=1;
envId=self._envId();
_st(_st(self["@envIdContainer"])._asJQuery())._empty();
$ctx1.sendIdx["empty"]=1;
_st(self["@envIdContainer"])._with_(envId);
$ctx1.sendIdx["with:"]=1;
_st(self["@sourceLocationContainer"])._empty();
$1=_st(envId).__eq((1));
$ctx1.sendIdx["="]=1;
if(smalltalk.assert($1)){
_st(self["@sourceLocationContainer"])._with_(self._filename());
$ctx1.sendIdx["with:"]=2;
_st(self["@stIcon"])._hide();
$ctx1.sendIdx["hide"]=1;
_st(self["@rubyIcon"])._show();
$ctx1.sendIdx["show"]=2;
_st(self["@editor"])._setOption_data_("mode","text/x-ruby");
$ctx1.sendIdx["setOption:data:"]=1;
} else {
_st(self["@sourceLocationContainer"])._with_("n/a");
};
$2=_st(envId).__eq((0));
if(smalltalk.assert($2)){
_st(self["@stIcon"])._show();
_st(self["@rubyIcon"])._hide();
$ctx1.sendIdx["hide"]=2;
_st(self["@editor"])._setOption_data_("mode","text/x-stsrc");
};
$3=_st(envId).__gt((1));
if(smalltalk.assert($3)){
_st(self["@stIcon"])._hide();
$ctx1.sendIdx["hide"]=3;
_st(self["@rubyIcon"])._hide();
};
return self}, function($ctx1) {$ctx1.fill(self,"renderMethodObject",{envId:envId},globals.MaglevGsNMethodEditor)})},
args: [],
source: "renderMethodObject\x0a\x09|envId|\x0a\x09editor setValue: self sourceString. \x0a\x09editorContainer show.\x0a\x09envId := self envId.\x0a\x09envIdContainer asJQuery empty.\x0a\x09envIdContainer with: envId.\x0a\x09sourceLocationContainer empty.\x0a\x09envId = 1 \x0a\x09\x09ifTrue: [\x0a\x09\x09\x09sourceLocationContainer with: self filename.\x0a\x09\x09\x09stIcon hide. rubyIcon show.\x0a\x09\x09\x09editor setOption: 'mode' data: 'text/x-ruby'.]\x0a\x09\x09ifFalse: [sourceLocationContainer with: 'n/a'].\x0a\x09envId = 0 ifTrue: [\x0a\x09\x09stIcon show. rubyIcon hide.\x0a\x09\x09editor setOption: 'mode' data: 'text/x-stsrc'].\x0a\x09envId > 1\x0a\x09\x09ifTrue: [stIcon hide. rubyIcon hide].",
messageSends: ["setValue:", "sourceString", "show", "envId", "empty", "asJQuery", "with:", "ifTrue:ifFalse:", "=", "filename", "hide", "setOption:data:", "ifTrue:", ">"],
referencedClasses: []
}),
globals.MaglevGsNMethodEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderEditorOn_(html);
self._renderStatusBarOn_(html);
self._renderMethodObject();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MaglevGsNMethodEditor)})},
args: ["html"],
source: "renderOn: html\x0a\x09self renderEditorOn: html.\x0a\x09self renderStatusBarOn: html.\x0a\x09self renderMethodObject.",
messageSends: ["renderEditorOn:", "renderStatusBarOn:", "renderMethodObject"],
referencedClasses: []
}),
globals.MaglevGsNMethodEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "renderStatusBarOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevIconImage(){return globals.MaglevIconImage||(typeof MaglevIconImage=="undefined"?nil:MaglevIconImage)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$9,$2;
$1=_st(html)._table();
_st($1)._class_("table-bordered");
_st($1)._style_("margin-top: 5px; width: 100%;");
$ctx1.sendIdx["style:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._tbody())._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$3=_st(html)._td();
$ctx4.sendIdx["td"]=1;
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx5) {
$4=_st($MaglevIconImage())._ruby();
_st($4)._hide();
$ctx5.sendIdx["hide"]=1;
$5=_st($4)._yourself();
$ctx5.sendIdx["yourself"]=1;
self["@rubyIcon"]=$5;
self["@rubyIcon"];
$6=_st($MaglevIconImage())._smalltalk();
_st($6)._hide();
$7=_st($6)._yourself();
self["@stIcon"]=$7;
self["@stIcon"];
_st(html)._with_(self["@rubyIcon"]);
$ctx5.sendIdx["with:"]=5;
_st(html)._with_(self["@stIcon"]);
$ctx5.sendIdx["with:"]=6;
$8=_st(html)._span();
$ctx5.sendIdx["span"]=1;
self["@envIdContainer"]=_st($8)._with_("Environment ID");
$ctx5.sendIdx["with:"]=7;
return self["@envIdContainer"];
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)})}));
$ctx4.sendIdx["with:"]=4;
$9=_st($3)._style_("width: 1px;");
$9;
return _st(_st(html)._td())._with_((function(){
return smalltalk.withContext(function($ctx5) {
self["@sourceLocationContainer"]=_st(_st(html)._span())._with_("Source location");
return self["@sourceLocationContainer"];
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,5)})}));
$ctx4.sendIdx["with:"]=8;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["with:"]=3;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderStatusBarOn:",{html:html},globals.MaglevGsNMethodEditor)})},
args: ["html"],
source: "renderStatusBarOn: html\x0a\x09html table\x0a\x09\x09class: 'table-bordered';\x0a\x09\x09style: 'margin-top: 5px; width: 100%;';\x0a\x09\x09with: [html tbody with: [\x0a\x09\x09\x09html tr with: [\x0a\x09\x09\x09\x09html td with: [\x0a\x09\x09\x09\x09\x09rubyIcon := MaglevIconImage ruby hide; yourself.\x0a\x09\x09\x09\x09\x09stIcon := MaglevIconImage smalltalk hide; yourself.\x0a\x09\x09\x09\x09\x09html with: rubyIcon.\x0a\x09\x09\x09\x09\x09html with: stIcon.\x0a\x09\x09\x09\x09\x09envIdContainer := html span with: 'Environment ID'];\x0a\x09\x09\x09\x09\x09style: 'width: 1px;'.\x0a\x09\x09\x09\x09html td with: [\x0a\x09\x09\x09\x09\x09sourceLocationContainer := html span with: 'Source location']]]].",
messageSends: ["class:", "table", "style:", "with:", "tbody", "tr", "td", "hide", "ruby", "yourself", "smalltalk", "span"],
referencedClasses: ["MaglevIconImage"]
}),
globals.MaglevGsNMethodEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "signalFailure:",
protocol: 'interactions',
fn: function (aDescription){
var self=this;
var html;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(self["@errorBox"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
html=_st($HTMLCanvas())._onJQuery_($1);
_st(html)._with_(_st(aDescription)._inlineViewComponent());
_st(self["@errorBox"])._show();
$2=_st(self["@editorContainer"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=2;
_st($2)._css_with_("background-color","#ff0039");
$3=_st($Object())._new();
_st($3)._basicAt_put_("backgroundColor","#ffffff");
$4=_st($3)._yourself();
_st(_st(self["@editorContainer"])._asJQuery())._animate_timeout_($4,(250));
return self}, function($ctx1) {$ctx1.fill(self,"signalFailure:",{aDescription:aDescription,html:html},globals.MaglevGsNMethodEditor)})},
args: ["aDescription"],
source: "signalFailure: aDescription\x0a\x09|html|\x0a\x09html := HTMLCanvas onJQuery: errorBox asJQuery.\x0a\x09html with: aDescription inlineViewComponent.\x0a\x09errorBox show.\x0a\x09editorContainer asJQuery css: 'background-color' with: '#ff0039'.\x0a\x09editorContainer asJQuery animate: (Object new basicAt: 'backgroundColor' put: '#ffffff'; yourself) timeout: 250.",
messageSends: ["onJQuery:", "asJQuery", "with:", "inlineViewComponent", "show", "css:with:", "animate:timeout:", "basicAt:put:", "new", "yourself"],
referencedClasses: ["HTMLCanvas", "Object"]
}),
globals.MaglevGsNMethodEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "signalSuccess",
protocol: 'interactions',
fn: function (){
var self=this;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self["@editorContainer"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._css_with_("background-color","#3fb618");
$2=_st($Object())._new();
_st($2)._basicAt_put_("backgroundColor","#ffffff");
$3=_st($2)._yourself();
_st(_st(self["@editorContainer"])._asJQuery())._animate_timeout_($3,(250));
return self}, function($ctx1) {$ctx1.fill(self,"signalSuccess",{},globals.MaglevGsNMethodEditor)})},
args: [],
source: "signalSuccess\x0a\x09editorContainer asJQuery css: 'background-color' with: '#3fb618'.\x0a\x09editorContainer asJQuery animate: (Object new basicAt: 'backgroundColor' put: '#ffffff'; yourself) timeout: 250.",
messageSends: ["css:with:", "asJQuery", "animate:timeout:", "basicAt:put:", "new", "yourself"],
referencedClasses: ["Object"]
}),
globals.MaglevGsNMethodEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceOffset",
protocol: 'accessing',
fn: function (){
var self=this;
return (-1);
},
args: [],
source: "sourceOffset\x0a\x09^ -1",
messageSends: [],
referencedClasses: []
}),
globals.MaglevGsNMethodEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceString",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._methodObject())._at_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceString",{},globals.MaglevGsNMethodEditor)})},
args: [],
source: "sourceString\x0a\x09^ self methodObject at: 1",
messageSends: ["at:", "methodObject"],
referencedClasses: []
}),
globals.MaglevGsNMethodEditor);


smalltalk.addMethod(
smalltalk.method({
selector: "for:",
protocol: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._object_(anObject);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{anObject:anObject},globals.MaglevGsNMethodEditor.klass)})},
args: ["anObject"],
source: "for: anObject\x0a\x09^ self basicNew\x0a\x09\x09object: anObject;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["object:", "basicNew", "initialize", "yourself"],
referencedClasses: []
}),
globals.MaglevGsNMethodEditor.klass);


smalltalk.addClass('MaglevGsNMethodDebugEditor', globals.MaglevGsNMethodEditor, ['argValueBox', 'argSelect'], 'Maglev-Database-Explorer');
globals.MaglevGsNMethodDebugEditor.comment="Copied from _frameContentsAt:\x0a\x0a\x22Private.  Returns an Array describing the specified level in the receiver. \x0a aLevel == 1 is top of stack.  If aLevel is less than 1 or greater than\x0a stackDepth, returns nil.  \x0a\x0a The result Array contains:\x0a offset item\x0a -----  -----\x0a   1    gsMethod  (a GsNMethod)\x0a   2    ipOffset    (zero-based relative to first named instance variable in portable code;\x0a                     negative means a stack breakpoint is present)\x0a   3    frameOffset (zero-based)\x0a   4    varContext\x0a   5    saveProtectedMode\x0a   6    markerOrException\x0a   7    nil    (not used)\x0a   8    self   (possibly nil in a ComplexBlock)\x0a   9    argAndTempNames   (an Array of Symbols or Strings)\x0a  10    receiver\x0a  11    arguments and temps, if any\x22";
smalltalk.addMethod(
smalltalk.method({
selector: "argAndTempNames",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@object"])._at_((9));
return $1;
}, function($ctx1) {$ctx1.fill(self,"argAndTempNames",{},globals.MaglevGsNMethodDebugEditor)})},
args: [],
source: "argAndTempNames\x0a\x09^ object at: 9",
messageSends: ["at:"],
referencedClasses: []
}),
globals.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "argOrTempValue:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
function $MaglevObject(){return globals.MaglevObject||(typeof MaglevObject=="undefined"?nil:MaglevObject)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(self["@object"])._at_((11)))._at_(anInteger);
$ctx1.sendIdx["at:"]=1;
$1=_st($MaglevObject())._newObject_($2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"argOrTempValue:",{anInteger:anInteger},globals.MaglevGsNMethodDebugEditor)})},
args: ["anInteger"],
source: "argOrTempValue: anInteger\x0a\x09^ MaglevObject newObject: ((object at: 11) at: anInteger)",
messageSends: ["newObject:", "at:"],
referencedClasses: ["MaglevObject"]
}),
globals.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "methodObject",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@object"])._at_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"methodObject",{},globals.MaglevGsNMethodDebugEditor)})},
args: [],
source: "methodObject\x0a\x09^ object at: 1",
messageSends: ["at:"],
referencedClasses: []
}),
globals.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "ownerSelf",
protocol: 'accessing',
fn: function (){
var self=this;
function $MaglevObject(){return globals.MaglevObject||(typeof MaglevObject=="undefined"?nil:MaglevObject)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($MaglevObject())._newObject_(_st(self["@object"])._at_((8)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ownerSelf",{},globals.MaglevGsNMethodDebugEditor)})},
args: [],
source: "ownerSelf\x0a\x09^ MaglevObject newObject: (object at: 8)",
messageSends: ["newObject:", "at:"],
referencedClasses: ["MaglevObject"]
}),
globals.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
function $MaglevObject(){return globals.MaglevObject||(typeof MaglevObject=="undefined"?nil:MaglevObject)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($MaglevObject())._newObject_(_st(self["@object"])._at_((10)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"receiver",{},globals.MaglevGsNMethodDebugEditor)})},
args: [],
source: "receiver\x0a\x09^ MaglevObject newObject: (object at: 10)",
messageSends: ["newObject:", "at:"],
referencedClasses: ["MaglevObject"]
}),
globals.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "renderArg",
protocol: 'rendering',
fn: function (){
var self=this;
var argIndex,argValue;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1,$4,$5,$6;
$3=_st(self["@argSelect"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$2=_st($3)._at_((0));
$1=_st($2)._selectedIndex();
argIndex=_st($1).__minus((1));
$4=_st(argIndex).__eq((-1));
$ctx1.sendIdx["="]=1;
if(smalltalk.assert($4)){
argValue=self._ownerSelf();
argValue;
};
$5=_st(argIndex).__eq((0));
if(smalltalk.assert($5)){
argValue=self._receiver();
argValue;
};
$6=_st(argIndex).__gt((0));
if(smalltalk.assert($6)){
argValue=self._argOrTempValue_(argIndex);
argValue;
};
_st(_st(self["@argValueBox"])._asJQuery())._empty();
_st(self["@argValueBox"])._with_(_st(argValue)._inlineViewComponent());
return self}, function($ctx1) {$ctx1.fill(self,"renderArg",{argIndex:argIndex,argValue:argValue},globals.MaglevGsNMethodDebugEditor)})},
args: [],
source: "renderArg\x0a\x09|argIndex argValue|\x0a\x09argIndex := (argSelect asJQuery at: 0) selectedIndex - 1.\x0a\x09argIndex = -1 \x0a\x09\x09ifTrue: [argValue := self ownerSelf].\x0a\x09argIndex = 0\x0a\x09\x09ifTrue: [argValue := self receiver].\x0a\x09argIndex  > 0\x0a\x09\x09ifTrue: [argValue := self argOrTempValue: argIndex].\x0a\x09argValueBox asJQuery empty.\x0a\x09argValueBox with: argValue inlineViewComponent.",
messageSends: ["-", "selectedIndex", "at:", "asJQuery", "ifTrue:", "=", "ownerSelf", "receiver", ">", "argOrTempValue:", "empty", "with:", "inlineViewComponent"],
referencedClasses: []
}),
globals.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "renderArgsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9;
$1=_st(html)._table();
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._tbody())._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$2=_st(html)._td();
$ctx4.sendIdx["td"]=1;
_st($2)._with_((function(){
return smalltalk.withContext(function($ctx5) {
$3=_st(html)._select();
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx6) {
$4=_st(html)._option();
$ctx6.sendIdx["option"]=1;
return _st($4)._with_("(self)");
$ctx6.sendIdx["with:"]=6;
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,5)})}));
$ctx5.sendIdx["with:"]=5;
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx6) {
$5=_st(html)._option();
$ctx6.sendIdx["option"]=2;
return _st($5)._with_("(receiver)");
$ctx6.sendIdx["with:"]=8;
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,6)})}));
$ctx5.sendIdx["with:"]=7;
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx6) {
return _st(self._argAndTempNames())._do_((function(arg){
return smalltalk.withContext(function($ctx7) {
return _st(_st(html)._option())._with_(arg);
$ctx7.sendIdx["with:"]=10;
}, function($ctx7) {$ctx7.fillBlock({arg:arg},$ctx6,8)})}));
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,7)})}));
$ctx5.sendIdx["with:"]=9;
_st($3)._style_("margin-bottom: 0px;");
$ctx5.sendIdx["style:"]=1;
$6=_st($3)._onChange_((function(){
return smalltalk.withContext(function($ctx6) {
return self._renderArg();
$ctx6.sendIdx["renderArg"]=1;
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,9)})}));
self["@argSelect"]=$6;
self["@argSelect"];
self["@argValueBox"]=_st(html)._div();
$ctx5.sendIdx["div"]=1;
return self["@argValueBox"];
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)})}));
$ctx4.sendIdx["with:"]=4;
$7=_st(html)._td();
_st($7)._with_((function(){
return smalltalk.withContext(function($ctx5) {
self["@argValueBox"]=_st(html)._div();
return self["@argValueBox"];
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,10)})}));
$8=_st($7)._style_("padding-left: 5px;");
$ctx4.sendIdx["style:"]=2;
return $8;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["with:"]=3;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$9=_st($1)._style_("margin-top: 5px;");
self._renderArg();
return self}, function($ctx1) {$ctx1.fill(self,"renderArgsOn:",{html:html},globals.MaglevGsNMethodDebugEditor)})},
args: ["html"],
source: "renderArgsOn: html\x0a\x09html table with: [\x0a\x09\x09html tbody with: [\x0a\x09\x09\x09html tr with: [\x0a\x09\x09\x09\x09html td with: [\x0a\x09\x09\x09\x09\x09argSelect := html select\x0a\x09\x09\x09\x09\x09\x09with: [html option with: '(self)'];\x0a\x09\x09\x09\x09\x09\x09with: [html option with: '(receiver)'];\x0a\x09\x09\x09\x09\x09\x09with: [self argAndTempNames do: [:arg |\x0a\x09\x09\x09\x09\x09\x09\x09html option with: arg]];\x0a\x09\x09\x09\x09\x09\x09style: 'margin-bottom: 0px;';\x0a\x09\x09\x09\x09\x09\x09onChange: [self renderArg].\x0a\x09\x09\x09\x09\x09argValueBox := html div].\x0a\x09\x09\x09\x09html td \x0a\x09\x09\x09\x09\x09with: [argValueBox := html div];\x0a\x09\x09\x09\x09\x09style: 'padding-left: 5px;']]];\x0a\x09style: 'margin-top: 5px;'.\x0a\x09self renderArg.",
messageSends: ["with:", "table", "tbody", "tr", "td", "select", "option", "do:", "argAndTempNames", "style:", "onChange:", "renderArg", "div"],
referencedClasses: []
}),
globals.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMethodObject",
protocol: 'rendering',
fn: function (){
var self=this;
var rangeFrom,rangeTo;
return smalltalk.withContext(function($ctx1) { 
globals.MaglevGsNMethodDebugEditor.superclass.fn.prototype._renderMethodObject.apply(_st(self), []);
_st(console)._log_("fixme MaglevGsNMethodDebugEditor>>#renderMethodObject");
_st(self["@editor"])._replaceSelection_("⚡");
return self}, function($ctx1) {$ctx1.fill(self,"renderMethodObject",{rangeFrom:rangeFrom,rangeTo:rangeTo},globals.MaglevGsNMethodDebugEditor)})},
args: [],
source: "renderMethodObject\x0a\x09|rangeFrom rangeTo|\x0a\x09super renderMethodObject.\x0a\x09console log: 'fixme MaglevGsNMethodDebugEditor>>#renderMethodObject'.\x0a\x09\x22< self['@editor'].setSelection(\x0a\x09\x09{line: self._sourceOffsetY(), ch: self._sourceOffsetX()}, \x0a\x09\x09{line: self._sourceOffsetY(), ch: self._sourceOffsetX()}); >.\x22\x0a\x09editor replaceSelection: '⚡'.",
messageSends: ["renderMethodObject", "log:", "replaceSelection:"],
referencedClasses: []
}),
globals.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderEditorOn_(html);
self._renderArgsOn_(html);
self._renderStatusBarOn_(html);
self._renderMethodObject();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MaglevGsNMethodDebugEditor)})},
args: ["html"],
source: "renderOn: html\x0a\x09self renderEditorOn: html.\x0a\x09self renderArgsOn: html.\x0a\x09self renderStatusBarOn: html.\x0a\x09self renderMethodObject.",
messageSends: ["renderEditorOn:", "renderArgsOn:", "renderStatusBarOn:", "renderMethodObject"],
referencedClasses: []
}),
globals.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceOffset",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@object"])._at_((12));
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceOffset",{},globals.MaglevGsNMethodDebugEditor)})},
args: [],
source: "sourceOffset\x0a\x09^ object at: 12",
messageSends: ["at:"],
referencedClasses: []
}),
globals.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceOffsetX",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@object"])._at_((13)))._at_((1));
$ctx1.sendIdx["at:"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceOffsetX",{},globals.MaglevGsNMethodDebugEditor)})},
args: [],
source: "sourceOffsetX\x0a\x09^ (object at: 13) at: 1",
messageSends: ["at:"],
referencedClasses: []
}),
globals.MaglevGsNMethodDebugEditor);

smalltalk.addMethod(
smalltalk.method({
selector: "sourceOffsetY",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@object"])._at_((13)))._at_((2));
$ctx1.sendIdx["at:"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"sourceOffsetY",{},globals.MaglevGsNMethodDebugEditor)})},
args: [],
source: "sourceOffsetY\x0a\x09^ (object at: 13) at: 2",
messageSends: ["at:"],
referencedClasses: []
}),
globals.MaglevGsNMethodDebugEditor);



smalltalk.addClass('MaglevHaltedThreadListener', globals.Object, ['container', 'interval', 'timer', 'renderedOops', 'html', 'navbar'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initializing',
fn: function (){
var self=this;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
self["@container"]="#halted-threads-navigation"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
self["@navbar"]="#halted-threads-navbar"._asJQuery();
_st(self["@navbar"])._hide();
self["@html"]=_st($HTMLCanvas())._onJQuery_(self["@container"]);
self["@renderedOops"]=_st($Dictionary())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.MaglevHaltedThreadListener)})},
args: [],
source: "initialize\x0a\x09container := '#halted-threads-navigation' asJQuery.\x0a\x09navbar := '#halted-threads-navbar' asJQuery.\x0a\x09navbar hide.\x0a\x09html := HTMLCanvas onJQuery: container.\x0a\x09renderedOops := Dictionary new.",
messageSends: ["asJQuery", "hide", "onJQuery:", "new"],
referencedClasses: ["HTMLCanvas", "Dictionary"]
}),
globals.MaglevHaltedThreadListener);

smalltalk.addMethod(
smalltalk.method({
selector: "interval",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@interval"];
if(($receiver = $1) == nil || $receiver == null){
self["@interval"]=(2500);
self["@interval"];
} else {
$1;
};
$2=self["@interval"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"interval",{},globals.MaglevHaltedThreadListener)})},
args: [],
source: "interval\x0a\x09interval ifNil: [interval := 2500].\x0a\x09^ interval",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MaglevHaltedThreadListener);

smalltalk.addMethod(
smalltalk.method({
selector: "interval:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@interval"]=aNumber;
_st(window)._clearInterval_(self["@timer"]);
self._startPolling();
return self}, function($ctx1) {$ctx1.fill(self,"interval:",{aNumber:aNumber},globals.MaglevHaltedThreadListener)})},
args: ["aNumber"],
source: "interval: aNumber\x0a\x09interval := aNumber.\x0a\x09window clearInterval: timer.\x0a\x09\x22< clearInterval(self['@timer']); >.\x22\x0a\x09self startPolling.",
messageSends: ["clearInterval:", "startPolling"],
referencedClasses: []
}),
globals.MaglevHaltedThreadListener);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
protocol: 'polling',
fn: function (){
var self=this;
var params;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $MaglevObjectSpace(){return globals.MaglevObjectSpace||(typeof MaglevObjectSpace=="undefined"?nil:MaglevObjectSpace)}
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3,$6,$7,$8;
$1=_st($Dictionary())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._at_put_("allElements",true);
$ctx1.sendIdx["at:put:"]=1;
_st($1)._at_put_("noBehavior",true);
$2=_st($1)._yourself();
params=$2;
_st(_st(_st($MaglevObjectSpace())._instance())._evalObject())._evaluateWithoutUpdate_language_with_withCallback_("MaglevDatabaseExplorer.halted_threads","ruby",params,(function(success,obj){
var currentOops;
return smalltalk.withContext(function($ctx2) {
if(smalltalk.assert(success)){
currentOops=_st($Set())._new();
currentOops;
_st(obj)._do_((function(el){
return smalltalk.withContext(function($ctx3) {
$4=self["@renderedOops"];
$5=_st(el)._oop();
$ctx3.sendIdx["oop"]=1;
$3=_st($4)._includesKey_($5);
if(! smalltalk.assert($3)){
$6=_st(el)._oop();
$ctx3.sendIdx["oop"]=2;
self._renderObject_with_($6,_st(el)._inlineViewComponent());
};
return _st(currentOops)._add_(_st(el)._oop());
}, function($ctx3) {$ctx3.fillBlock({el:el},$ctx2,3)})}));
_st(self["@renderedOops"])._keysAndValuesDo_((function(oop,comp){
return smalltalk.withContext(function($ctx3) {
$7=_st(currentOops)._includes_(oop);
if(! smalltalk.assert($7)){
return self._removeObject_with_(oop,comp);
};
}, function($ctx3) {$ctx3.fillBlock({oop:oop,comp:comp},$ctx2,5)})}));
$8=_st(_st(self["@renderedOops"])._size()).__eq((0));
if(smalltalk.assert($8)){
return _st(self["@navbar"])._hide();
} else {
return _st(self["@navbar"])._show();
};
};
}, function($ctx2) {$ctx2.fillBlock({success:success,obj:obj,currentOops:currentOops},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{params:params},globals.MaglevHaltedThreadListener)})},
args: [],
source: "refresh\x0a\x09|params|\x0a\x09params := Dictionary new\x0a\x09\x09at: 'allElements' put: true;\x0a\x09\x09at: 'noBehavior' put: true;\x0a\x09\x09yourself.\x0a\x09MaglevObjectSpace instance evalObject \x0a\x09\x09evaluateWithoutUpdate: 'MaglevDatabaseExplorer.halted_threads' \x0a\x09\x09language: 'ruby'\x0a\x09\x09with: params \x0a\x09\x09withCallback: [:success :obj | |currentOops|\x0a\x09\x09\x09success ifTrue:[\x0a\x09\x09\x09currentOops := Set new.\x0a\x09\x09\x09obj do: [:el | \x0a\x09\x09\x09\x09(renderedOops includesKey: el oop)\x0a\x09\x09\x09\x09\x09ifFalse: [self renderObject: el oop with: el inlineViewComponent].\x0a\x09\x09\x09\x09currentOops add: el oop].\x0a\x09\x09\x09renderedOops keysAndValuesDo: [:oop :comp |\x0a\x09\x09\x09\x09(currentOops includes: oop)\x0a\x09\x09\x09\x09\x09ifFalse: [self removeObject: oop with: comp]].\x0a\x09\x09\x09renderedOops size = 0\x0a\x09\x09\x09\x09ifTrue: [navbar hide]\x0a\x09\x09\x09\x09ifFalse: [navbar show]]].",
messageSends: ["at:put:", "new", "yourself", "evaluateWithoutUpdate:language:with:withCallback:", "evalObject", "instance", "ifTrue:", "do:", "ifFalse:", "includesKey:", "oop", "renderObject:with:", "inlineViewComponent", "add:", "keysAndValuesDo:", "includes:", "removeObject:with:", "ifTrue:ifFalse:", "=", "size", "hide", "show"],
referencedClasses: ["Dictionary", "MaglevObjectSpace", "Set"]
}),
globals.MaglevHaltedThreadListener);

smalltalk.addMethod(
smalltalk.method({
selector: "removeObject:with:",
protocol: 'polling',
fn: function (oop,component){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(component)._asJQuery())._remove();
_st(self["@renderedOops"])._removeKey_(oop);
return self}, function($ctx1) {$ctx1.fill(self,"removeObject:with:",{oop:oop,component:component},globals.MaglevHaltedThreadListener)})},
args: ["oop", "component"],
source: "removeObject: oop with: component\x0a\x09component asJQuery remove.\x0a\x09renderedOops removeKey: oop.",
messageSends: ["remove", "asJQuery", "removeKey:"],
referencedClasses: []
}),
globals.MaglevHaltedThreadListener);

smalltalk.addMethod(
smalltalk.method({
selector: "renderObject:with:",
protocol: 'polling',
fn: function (oop,component){
var self=this;
var inlineContainer;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@html"])._span();
_st($1)._style_("padding: 4px 2px 2px 4px;");
$2=_st($1)._with_(component);
inlineContainer=$2;
_st(self["@renderedOops"])._at_put_(oop,inlineContainer);
return self}, function($ctx1) {$ctx1.fill(self,"renderObject:with:",{oop:oop,component:component,inlineContainer:inlineContainer},globals.MaglevHaltedThreadListener)})},
args: ["oop", "component"],
source: "renderObject: oop with: component\x0a\x09|inlineContainer|\x0a\x09inlineContainer := html span \x0a\x09\x09style: 'padding: 4px 2px 2px 4px;';\x0a\x09\x09with: component.\x0a\x09renderedOops at: oop put: inlineContainer.",
messageSends: ["style:", "span", "with:", "at:put:"],
referencedClasses: []
}),
globals.MaglevHaltedThreadListener);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
protocol: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@timer"]=self._startPolling();
return self}, function($ctx1) {$ctx1.fill(self,"start",{},globals.MaglevHaltedThreadListener)})},
args: [],
source: "start\x0a\x09timer := self startPolling.",
messageSends: ["startPolling"],
referencedClasses: []
}),
globals.MaglevHaltedThreadListener);

smalltalk.addMethod(
smalltalk.method({
selector: "startPolling",
protocol: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 return setInterval(function() {self._refresh();}, self._interval()); ;
return self}, function($ctx1) {$ctx1.fill(self,"startPolling",{},globals.MaglevHaltedThreadListener)})},
args: [],
source: "startPolling\x0a\x09< return setInterval(function() {self._refresh();}, self._interval()); >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevHaltedThreadListener);


globals.MaglevHaltedThreadListener.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "instance",
protocol: 'instance creation',
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
}, function($ctx1) {$ctx1.fill(self,"instance",{},globals.MaglevHaltedThreadListener.klass)})},
args: [],
source: "instance\x0a\x09instance ifNil: [instance := self new].\x0a\x09^ instance",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.MaglevHaltedThreadListener.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "start",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._instance())._start();
return self}, function($ctx1) {$ctx1.fill(self,"start",{},globals.MaglevHaltedThreadListener.klass)})},
args: [],
source: "start\x0a\x09self instance start.",
messageSends: ["start", "instance"],
referencedClasses: []
}),
globals.MaglevHaltedThreadListener.klass);


smalltalk.addClass('MaglevIcon', globals.Widget, ['b', 'icon', 'spin', 'caption'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "caption",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@caption"];
return $1;
},
args: [],
source: "caption\x0a\x09^ caption",
messageSends: [],
referencedClasses: []
}),
globals.MaglevIcon);

smalltalk.addMethod(
smalltalk.method({
selector: "caption:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@caption"]=aString;
return self},
args: ["aString"],
source: "caption: aString\x0a\x09caption := aString.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevIcon);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@b"])._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},globals.MaglevIcon)})},
args: [],
source: "hide\x0a\x09b hide.",
messageSends: ["hide"],
referencedClasses: []
}),
globals.MaglevIcon);

smalltalk.addMethod(
smalltalk.method({
selector: "icon",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@icon"];
if(($receiver = $1) == nil || $receiver == null){
self["@icon"]="star";
self["@icon"];
} else {
$1;
};
$2=self["@icon"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"icon",{},globals.MaglevIcon)})},
args: [],
source: "icon\x0a\x09icon ifNil: [icon := 'star'].\x0a\x09^ icon",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MaglevIcon);

smalltalk.addMethod(
smalltalk.method({
selector: "icon:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@icon"]=aString;
return self},
args: ["aString"],
source: "icon: aString\x0a\x09icon := aString.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevIcon);

smalltalk.addMethod(
smalltalk.method({
selector: "onClick:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@b"])._onClick_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onClick:",{aBlock:aBlock},globals.MaglevIcon)})},
args: ["aBlock"],
source: "onClick: aBlock\x0a\x09b onClick: aBlock.",
messageSends: ["onClick:"],
referencedClasses: []
}),
globals.MaglevIcon);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var cssClass;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
cssClass="icon-".__comma(self._icon());
$ctx1.sendIdx[","]=1;
$1=self._spin();
if(smalltalk.assert($1)){
cssClass=_st(cssClass).__comma(" icon-spin");
cssClass;
};
$2=self["@caption"];
if(($receiver = $2) == nil || $receiver == null){
$3=_st(html)._b();
$ctx1.sendIdx["b"]=1;
_st($3)._class_(cssClass);
$ctx1.sendIdx["class:"]=1;
$4=_st($3)._yourself();
$ctx1.sendIdx["yourself"]=1;
self["@b"]=$4;
self["@b"];
} else {
$5=_st(html)._b();
_st($5)._class_(cssClass);
_st($5)._data_with_("toggle","tooltip");
$ctx1.sendIdx["data:with:"]=1;
_st($5)._data_with_("placement","top");
$ctx1.sendIdx["data:with:"]=2;
_st($5)._data_with_("original-title",self["@caption"]);
$6=_st($5)._yourself();
self["@b"]=$6;
self["@b"];
_st(_st(self["@b"])._asJQuery())._tooltip();
};
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,cssClass:cssClass},globals.MaglevIcon)})},
args: ["html"],
source: "renderOn: html\x0a\x09|cssClass|\x0a\x09cssClass := 'icon-', self icon.\x0a\x09self spin \x0a\x09\x09ifTrue: [cssClass := cssClass, ' icon-spin'].\x0a\x09caption \x0a\x09\x09ifNil: [b := html b\x0a\x09\x09\x09\x09class: cssClass;\x0a\x09\x09\x09\x09yourself]\x0a\x09\x09ifNotNil: [b := html b\x0a\x09\x09\x09\x09class: cssClass;\x0a\x09\x09\x09\x09data: 'toggle' with: 'tooltip';\x0a\x09\x09\x09\x09data: 'placement' with: 'top';\x0a\x09\x09\x09\x09data: 'original-title' with: caption;\x0a\x09\x09\x09\x09yourself.\x0a\x09\x09\x09b asJQuery tooltip].",
messageSends: [",", "icon", "ifTrue:", "spin", "ifNil:ifNotNil:", "class:", "b", "yourself", "data:with:", "tooltip", "asJQuery"],
referencedClasses: []
}),
globals.MaglevIcon);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@b"])._show();
return self}, function($ctx1) {$ctx1.fill(self,"show",{},globals.MaglevIcon)})},
args: [],
source: "show\x0a\x09b show.",
messageSends: ["show"],
referencedClasses: []
}),
globals.MaglevIcon);

smalltalk.addMethod(
smalltalk.method({
selector: "spin",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@spin"];
if(($receiver = $1) == nil || $receiver == null){
self["@spin"]=false;
self["@spin"];
} else {
$1;
};
$2=self["@spin"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"spin",{},globals.MaglevIcon)})},
args: [],
source: "spin\x0a\x09spin ifNil: [spin := false].\x0a\x09^ spin",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MaglevIcon);

smalltalk.addMethod(
smalltalk.method({
selector: "spin:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@spin"]=aBoolean;
return self},
args: ["aBoolean"],
source: "spin: aBoolean\x0a\x09spin := aBoolean.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevIcon);


smalltalk.addMethod(
smalltalk.method({
selector: "codeFork",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._icon_("code-fork");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"codeFork",{},globals.MaglevIcon.klass)})},
args: [],
source: "codeFork\x0a\x09^ self new\x0a\x09\x09icon: 'code-fork';\x0a\x09\x09yourself",
messageSends: ["icon:", "new", "yourself"],
referencedClasses: []
}),
globals.MaglevIcon.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "flag",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._icon_("flag");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"flag",{},globals.MaglevIcon.klass)})},
args: [],
source: "flag\x0a\x09^ self new\x0a\x09\x09icon: 'flag';\x0a\x09\x09yourself",
messageSends: ["icon:", "new", "yourself"],
referencedClasses: []
}),
globals.MaglevIcon.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "globe",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._icon_("globe");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"globe",{},globals.MaglevIcon.klass)})},
args: [],
source: "globe\x0a\x09^ self new\x0a\x09\x09icon: 'globe';\x0a\x09\x09yourself",
messageSends: ["icon:", "new", "yourself"],
referencedClasses: []
}),
globals.MaglevIcon.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "hdd",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._icon_("hdd");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"hdd",{},globals.MaglevIcon.klass)})},
args: [],
source: "hdd\x0a\x09^ self new\x0a\x09\x09icon: 'hdd';\x0a\x09\x09yourself",
messageSends: ["icon:", "new", "yourself"],
referencedClasses: []
}),
globals.MaglevIcon.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "listAlt",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._icon_("list-alt");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"listAlt",{},globals.MaglevIcon.klass)})},
args: [],
source: "listAlt\x0a\x09^ self new\x0a\x09\x09icon: 'list-alt';\x0a\x09\x09yourself",
messageSends: ["icon:", "new", "yourself"],
referencedClasses: []
}),
globals.MaglevIcon.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._icon_("move");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"move",{},globals.MaglevIcon.klass)})},
args: [],
source: "move\x0a\x09^ self new\x0a\x09\x09icon: 'move';\x0a\x09\x09yourself",
messageSends: ["icon:", "new", "yourself"],
referencedClasses: []
}),
globals.MaglevIcon.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "pause",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._icon_("pause");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"pause",{},globals.MaglevIcon.klass)})},
args: [],
source: "pause\x0a\x09^ self new\x0a\x09\x09icon: 'pause';\x0a\x09\x09yourself",
messageSends: ["icon:", "new", "yourself"],
referencedClasses: []
}),
globals.MaglevIcon.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "pencil",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._icon_("pencil");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"pencil",{},globals.MaglevIcon.klass)})},
args: [],
source: "pencil\x0a\x09^ self new\x0a\x09\x09icon: 'pencil';\x0a\x09\x09yourself",
messageSends: ["icon:", "new", "yourself"],
referencedClasses: []
}),
globals.MaglevIcon.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "play",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._icon_("play");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"play",{},globals.MaglevIcon.klass)})},
args: [],
source: "play\x0a\x09^ self new\x0a\x09\x09icon: 'play';\x0a\x09\x09yourself",
messageSends: ["icon:", "new", "yourself"],
referencedClasses: []
}),
globals.MaglevIcon.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "playCircle",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._icon_("play-circle");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"playCircle",{},globals.MaglevIcon.klass)})},
args: [],
source: "playCircle\x0a\x09^ self new\x0a\x09\x09icon: 'play-circle';\x0a\x09\x09yourself",
messageSends: ["icon:", "new", "yourself"],
referencedClasses: []
}),
globals.MaglevIcon.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._icon_("remove");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"remove",{},globals.MaglevIcon.klass)})},
args: [],
source: "remove\x0a\x09^ self new\x0a\x09\x09icon: 'remove';\x0a\x09\x09yourself",
messageSends: ["icon:", "new", "yourself"],
referencedClasses: []
}),
globals.MaglevIcon.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "resizeSmall",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._icon_("resize-small");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"resizeSmall",{},globals.MaglevIcon.klass)})},
args: [],
source: "resizeSmall\x0a\x09^ self new\x0a\x09\x09icon: 'resize-small';\x0a\x09\x09yourself",
messageSends: ["icon:", "new", "yourself"],
referencedClasses: []
}),
globals.MaglevIcon.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "search",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._icon_("search");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"search",{},globals.MaglevIcon.klass)})},
args: [],
source: "search\x0a\x09^ self new\x0a\x09\x09icon: 'search';\x0a\x09\x09yourself",
messageSends: ["icon:", "new", "yourself"],
referencedClasses: []
}),
globals.MaglevIcon.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "star",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._icon_("star");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"star",{},globals.MaglevIcon.klass)})},
args: [],
source: "star\x0a\x09^ self new\x0a\x09\x09icon: 'star';\x0a\x09\x09yourself",
messageSends: ["icon:", "new", "yourself"],
referencedClasses: []
}),
globals.MaglevIcon.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stop",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._icon_("stop");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"stop",{},globals.MaglevIcon.klass)})},
args: [],
source: "stop\x0a\x09^ self new\x0a\x09\x09icon: 'stop';\x0a\x09\x09yourself",
messageSends: ["icon:", "new", "yourself"],
referencedClasses: []
}),
globals.MaglevIcon.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "terminal",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._icon_("terminal");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"terminal",{},globals.MaglevIcon.klass)})},
args: [],
source: "terminal\x0a\x09^ self new\x0a\x09\x09icon: 'terminal';\x0a\x09\x09yourself",
messageSends: ["icon:", "new", "yourself"],
referencedClasses: []
}),
globals.MaglevIcon.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "trash",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._icon_("trash");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"trash",{},globals.MaglevIcon.klass)})},
args: [],
source: "trash\x0a\x09^ self new\x0a\x09\x09icon: 'trash';\x0a\x09\x09yourself",
messageSends: ["icon:", "new", "yourself"],
referencedClasses: []
}),
globals.MaglevIcon.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "wait",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._icon_("refresh");
_st($2)._spin_(true);
_st($2)._caption_("Loading...");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"wait",{},globals.MaglevIcon.klass)})},
args: [],
source: "wait\x0a\x09^ self new\x0a\x09\x09icon: 'refresh';\x0a\x09\x09spin: true;\x0a\x09\x09caption: 'Loading...';\x0a\x09\x09yourself",
messageSends: ["icon:", "new", "spin:", "caption:", "yourself"],
referencedClasses: []
}),
globals.MaglevIcon.klass);


smalltalk.addClass('MaglevIconImage', globals.Widget, ['src', 'cssClass', 'image', 'hidden'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "cssClass:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@cssClass"]=aString;
return self},
args: ["aString"],
source: "cssClass: aString\x0a\x09cssClass := aString.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevIconImage);

smalltalk.addMethod(
smalltalk.method({
selector: "hidden",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@hidden"];
if(($receiver = $1) == nil || $receiver == null){
self["@hidden"]=false;
self["@hidden"];
} else {
$1;
};
$2=self["@hidden"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"hidden",{},globals.MaglevIconImage)})},
args: [],
source: "hidden\x0a\x09hidden ifNil: [hidden := false].\x0a\x09^ hidden",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MaglevIconImage);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@hidden"]=true;
$1=self["@image"];
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
_st(self["@image"])._hide();
};
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},globals.MaglevIconImage)})},
args: [],
source: "hide\x0a\x09hidden := true.\x0a\x09image ifNotNil: [image hide].",
messageSends: ["ifNotNil:", "hide"],
referencedClasses: []
}),
globals.MaglevIconImage);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(html)._img();
_st($1)._src_(self["@src"]);
$2=_st($1)._class_(self["@cssClass"]);
self["@image"]=$2;
$3=self._hidden();
if(smalltalk.assert($3)){
_st(self["@image"])._hide();
};
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MaglevIconImage)})},
args: ["html"],
source: "renderOn: html\x0a\x09image := html img\x0a\x09\x09src: src;\x0a\x09\x09class: cssClass.\x0a\x09self hidden ifTrue: [image hide].",
messageSends: ["src:", "img", "class:", "ifTrue:", "hidden", "hide"],
referencedClasses: []
}),
globals.MaglevIconImage);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@hidden"]=false;
$1=self["@image"];
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
_st(self["@image"])._show();
};
return self}, function($ctx1) {$ctx1.fill(self,"show",{},globals.MaglevIconImage)})},
args: [],
source: "show\x0a\x09hidden := false.\x0a\x09image ifNotNil: [image show].",
messageSends: ["ifNotNil:", "show"],
referencedClasses: []
}),
globals.MaglevIconImage);

smalltalk.addMethod(
smalltalk.method({
selector: "src:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@src"]=aString;
return self},
args: ["aString"],
source: "src: aString\x0a\x09src := aString.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevIconImage);


smalltalk.addMethod(
smalltalk.method({
selector: "rails",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._src_("images/rails_tiny.png");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"rails",{},globals.MaglevIconImage.klass)})},
args: [],
source: "rails\x0a\x09^ self new\x0a\x09\x09src: 'images/rails_tiny.png';\x0a\x09\x09yourself",
messageSends: ["src:", "new", "yourself"],
referencedClasses: []
}),
globals.MaglevIconImage.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ruby",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._src_("images/ruby.png");
_st($2)._cssClass_("icon-language");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"ruby",{},globals.MaglevIconImage.klass)})},
args: [],
source: "ruby\x0a\x09^ self new\x0a\x09\x09src: 'images/ruby.png';\x0a\x09\x09cssClass: 'icon-language';\x0a\x09\x09yourself",
messageSends: ["src:", "new", "cssClass:", "yourself"],
referencedClasses: []
}),
globals.MaglevIconImage.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "rubySmalltalkBridge",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._src_("images/ruby_smalltalk_bridge.png");
_st($2)._cssClass_("icon-language");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"rubySmalltalkBridge",{},globals.MaglevIconImage.klass)})},
args: [],
source: "rubySmalltalkBridge\x0a\x09^ self new\x0a\x09\x09src: 'images/ruby_smalltalk_bridge.png';\x0a\x09\x09cssClass: 'icon-language';\x0a\x09\x09yourself",
messageSends: ["src:", "new", "cssClass:", "yourself"],
referencedClasses: []
}),
globals.MaglevIconImage.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "smalltalk",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._src_("images/smalltalk.png");
_st($2)._cssClass_("icon-language");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"smalltalk",{},globals.MaglevIconImage.klass)})},
args: [],
source: "smalltalk\x0a\x09^ self new\x0a\x09\x09src: 'images/smalltalk.png';\x0a\x09\x09cssClass: 'icon-language';\x0a\x09\x09yourself",
messageSends: ["src:", "new", "cssClass:", "yourself"],
referencedClasses: []
}),
globals.MaglevIconImage.klass);


smalltalk.addClass('MaglevListBox', globals.Widget, ['list', 'changedCallback', 'htmlIv', 'divContainer', 'height', 'searchbox', 'searchInput', 'olContainer', 'olHeightBeforeSearch'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "bindEvents",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@list']._asJQuery().selectable({
		stop: function() {self._selectionChanged();},
		tolerance: 'fit'}); ;
return self}, function($ctx1) {$ctx1.fill(self,"bindEvents",{},globals.MaglevListBox)})},
args: [],
source: "bindEvents\x0a\x09< self['@list']._asJQuery().selectable({\x0a\x09\x09stop: function() {self._selectionChanged();},\x0a\x09\x09tolerance: 'fit'}); >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "changedCallback:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@changedCallback"]=aBlock;
return self},
args: ["aBlock"],
source: "changedCallback: aBlock\x0a\x09changedCallback := aBlock.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@list"])._asJQuery())._empty();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},globals.MaglevListBox)})},
args: [],
source: "clear\x0a\x09list asJQuery empty.",
messageSends: ["empty", "asJQuery"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "commandFind",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@olHeightBeforeSearch"]=self._height();
$ctx1.sendIdx["height"]=1;
_st(self["@searchbox"])._show();
self._height_(self._height());
_st(_st(self["@searchInput"])._asJQuery())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"commandFind",{},globals.MaglevListBox)})},
args: [],
source: "commandFind\x0a\x09olHeightBeforeSearch := self height.\x0a\x09searchbox show.\x0a\x09self height: self height.\x0a\x09searchInput asJQuery focus.",
messageSends: ["height", "show", "height:", "focus", "asJQuery"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "filterResults",
protocol: 'interactions',
fn: function (){
var self=this;
var text;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@searchInput"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
text=_st($1)._val();
_st(_st(_st(self["@list"])._asJQuery())._find_("li"))._each_((function(idx,htmlEl){
var el;
return smalltalk.withContext(function($ctx2) {
el=_st(window)._jQuery_(htmlEl);
el;
$2=_st(_st(el)._text())._includesSubString_(text);
if(smalltalk.assert($2)){
return _st(el)._show();
} else {
return _st(el)._hide();
};
}, function($ctx2) {$ctx2.fillBlock({idx:idx,htmlEl:htmlEl,el:el},$ctx1,1)})}));
self._hideSearchBox();
return self}, function($ctx1) {$ctx1.fill(self,"filterResults",{text:text},globals.MaglevListBox)})},
args: [],
source: "filterResults\x0a\x09|text|\x0a\x09text := searchInput asJQuery val.\x0a\x09(list asJQuery find: 'li') each: [:idx :htmlEl | |el|\x0a\x09\x09el := window jQuery: htmlEl.\x0a\x09\x09\x22< el = $(htmlEl); >.\x22\x0a\x09\x09(el text includesSubString: text)\x0a\x09\x09\x09ifTrue: [el show]\x0a\x09\x09\x09ifFalse: [el hide]].\x0a\x09self hideSearchBox.",
messageSends: ["val", "asJQuery", "each:", "find:", "jQuery:", "ifTrue:ifFalse:", "includesSubString:", "text", "show", "hide", "hideSearchBox"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "focus",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@list"])._asJQuery())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"focus",{},globals.MaglevListBox)})},
args: [],
source: "focus\x0a\x09list asJQuery focus.",
messageSends: ["focus", "asJQuery"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@olContainer"])._asJQuery())._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},globals.MaglevListBox)})},
args: [],
source: "height\x0a\x09^ olContainer asJQuery height",
messageSends: ["height", "asJQuery"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
var searchboxHeight;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3;
$2=_st(self["@searchbox"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$1=_st($2)._is_(":visible");
if(smalltalk.assert($1)){
$4=_st(self["@searchbox"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=2;
$3=_st($4)._height();
searchboxHeight=_st($3).__plus((2));
searchboxHeight;
} else {
searchboxHeight=(0);
searchboxHeight;
};
self["@height"]=anInteger;
_st(_st(self["@olContainer"])._asJQuery())._css_data_("height",_st(_st(_st(anInteger).__minus(searchboxHeight))._asString()).__comma("px"));
return self}, function($ctx1) {$ctx1.fill(self,"height:",{anInteger:anInteger,searchboxHeight:searchboxHeight},globals.MaglevListBox)})},
args: ["anInteger"],
source: "height: anInteger\x0a\x09|searchboxHeight|\x0a\x09(searchbox asJQuery is: ':visible')\x0a\x09\x09ifTrue: [searchboxHeight := searchbox asJQuery height + 2]\x0a\x09\x09ifFalse: [searchboxHeight := 0].\x0a\x09height := anInteger.\x0a\x09olContainer asJQuery css: 'height' data: (anInteger - searchboxHeight) asString, 'px'.",
messageSends: ["ifTrue:ifFalse:", "is:", "asJQuery", "+", "height", "css:data:", ",", "asString", "-"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "hide",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@list"])._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},globals.MaglevListBox)})},
args: [],
source: "hide\x0a\x09list hide.",
messageSends: ["hide"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "hideSearchBox",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@searchbox"])._hide();
self._height_(self["@olHeightBeforeSearch"]);
_st(_st(self["@list"])._asJQuery())._focus();
return self}, function($ctx1) {$ctx1.fill(self,"hideSearchBox",{},globals.MaglevListBox)})},
args: [],
source: "hideSearchBox\x0a\x09searchbox hide.\x0a\x09self height: olHeightBeforeSearch.\x0a\x09list asJQuery focus.",
messageSends: ["hide", "height:", "focus", "asJQuery"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "makeResizable",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@olContainer']._asJQuery().resizable({handles: 's'}); ;
return self}, function($ctx1) {$ctx1.fill(self,"makeResizable",{},globals.MaglevListBox)})},
args: [],
source: "makeResizable\x0a\x09< self['@olContainer']._asJQuery().resizable({handles: 's'}); >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "moveSelectionDown",
protocol: 'interactions',
fn: function (){
var self=this;
var newIndex;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
newIndex=_st(_st(self._selectedDataVisibleIndex()).__plus((1))).__minus((1));
$1=_st(newIndex).__eq(self._sizeVisible());
if(smalltalk.assert($1)){
newIndex=(0);
newIndex;
};
self._unselectAll();
$3=_st(self["@list"])._asJQuery();
$4=_st("li:visible:eq(".__comma(_st(newIndex)._asString())).__comma(")");
$ctx1.sendIdx[","]=1;
$2=_st($3)._find_($4);
_st($2)._addClass_("ui-selected");
self._selectionChanged();
return self}, function($ctx1) {$ctx1.fill(self,"moveSelectionDown",{newIndex:newIndex},globals.MaglevListBox)})},
args: [],
source: "moveSelectionDown\x0a\x09|newIndex|\x0a\x09newIndex := self selectedDataVisibleIndex + 1 - 1.\x0a\x09newIndex = self sizeVisible ifTrue: [newIndex := 0].\x0a\x09self unselectAll.\x0a\x09(list asJQuery find: 'li:visible:eq(', newIndex asString, ')') addClass: 'ui-selected'.\x0a\x09self selectionChanged.",
messageSends: ["-", "+", "selectedDataVisibleIndex", "ifTrue:", "=", "sizeVisible", "unselectAll", "addClass:", "find:", "asJQuery", ",", "asString", "selectionChanged"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "moveSelectionUp",
protocol: 'interactions',
fn: function (){
var self=this;
var newIndex;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
$1=_st(self._selectedDataVisibleIndex()).__minus((1));
$ctx1.sendIdx["-"]=2;
newIndex=_st($1).__minus((1));
$ctx1.sendIdx["-"]=1;
$2=_st(newIndex).__lt((0));
if(smalltalk.assert($2)){
newIndex=_st(self._sizeVisible()).__minus((1));
newIndex;
};
self._unselectAll();
$4=_st(self["@list"])._asJQuery();
$5=_st("li:visible:eq(".__comma(_st(newIndex)._asString())).__comma(")");
$ctx1.sendIdx[","]=1;
$3=_st($4)._find_($5);
_st($3)._addClass_("ui-selected");
self._selectionChanged();
return self}, function($ctx1) {$ctx1.fill(self,"moveSelectionUp",{newIndex:newIndex},globals.MaglevListBox)})},
args: [],
source: "moveSelectionUp\x0a\x09|newIndex|\x0a\x09newIndex := self selectedDataVisibleIndex - 1 - 1.\x0a\x09newIndex < 0 ifTrue: [newIndex := self sizeVisible - 1].\x0a\x09self unselectAll.\x0a\x09(list asJQuery find: 'li:visible:eq(', newIndex asString, ')') addClass: 'ui-selected'.\x0a\x09self selectionChanged.",
messageSends: ["-", "selectedDataVisibleIndex", "ifTrue:", "<", "sizeVisible", "unselectAll", "addClass:", "find:", "asJQuery", ",", "asString", "selectionChanged"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$6,$5,$8,$7,$9,$10,$3;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
self["@divContainer"]=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderSearchBoxOn_(html);
$2=_st(html)._div();
_st($2)._style_("overflow: hidden; border: 1px solid #aaaaaa");
$ctx2.sendIdx["style:"]=1;
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$4=_st(html)._ol();
_st($4)._style_("width: 100%; height: 100%; overflow: auto; border: none; outline: none;");
_st($4)._at_put_("tabindex","1");
_st($4)._onKeyDown_((function(e){
return smalltalk.withContext(function($ctx4) {
_st(e)._preventDefault();
$6=_st(e)._keyCode();
$ctx4.sendIdx["keyCode"]=1;
$5=_st($6).__eq((40));
$ctx4.sendIdx["="]=1;
if(smalltalk.assert($5)){
self._moveSelectionDown();
};
$8=_st(e)._keyCode();
$ctx4.sendIdx["keyCode"]=2;
$7=_st($8).__eq((38));
$ctx4.sendIdx["="]=2;
if(smalltalk.assert($7)){
self._moveSelectionUp();
};
$9=_st(_st(_st(e)._keyCode()).__eq((70)))._and_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(e)._ctrlKey();
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,6)})}));
if(smalltalk.assert($9)){
return self._commandFind();
};
}, function($ctx4) {$ctx4.fillBlock({e:e},$ctx3,3)})}));
$10=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._focus();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,8)})}));
self["@list"]=$10;
return self["@list"];
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
self["@olContainer"]=$3;
self["@olContainer"];
self._makeResizable();
self["@htmlIv"]=html;
return self["@htmlIv"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
self._bindEvents();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MaglevListBox)})},
args: ["html"],
source: "renderOn: html\x0a\x09divContainer := html div with: [\x0a\x09\x09self renderSearchBoxOn: html.\x0a\x09\x09olContainer := html div \x0a\x09\x09\x09style: 'overflow: hidden; border: 1px solid #aaaaaa';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09list := html ol\x0a\x09\x09\x09\x09\x09style: 'width: 100%; height: 100%; overflow: auto; border: none; outline: none;';\x0a\x09\x09\x09\x09\x09at: 'tabindex' put: '1';\x0a\x09\x09\x09\x09\x09onKeyDown: [:e | \x0a\x09\x09\x09\x09\x09\x09e preventDefault. \x0a\x09\x09\x09\x09\x09\x09e keyCode = 40 ifTrue: [self moveSelectionDown].\x0a\x09\x09\x09\x09\x09\x09e keyCode = 38 ifTrue: [self moveSelectionUp].\x0a\x09\x09\x09\x09\x09\x09(e keyCode = 70 and: [e ctrlKey]) ifTrue: [self commandFind]];\x0a\x09\x09\x09\x09\x09onClick: [self focus]].\x0a\x09\x09self makeResizable.\x0a\x09\x09htmlIv := html].\x0a\x09self bindEvents.",
messageSends: ["with:", "div", "renderSearchBoxOn:", "style:", "ol", "at:put:", "onKeyDown:", "preventDefault", "ifTrue:", "=", "keyCode", "moveSelectionDown", "moveSelectionUp", "and:", "ctrlKey", "commandFind", "onClick:", "focus", "makeResizable", "bindEvents"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSearchBoxOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(html)._div();
_st($1)._class_("input-prepend");
$ctx1.sendIdx["class:"]=1;
_st($1)._style_("margin-bottom: 2px; box-sizing: border-box; -webkit-box-sizing: border-box; padding-right: 52px; width: 100%;");
$ctx1.sendIdx["style:"]=1;
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(html)._span();
_st($2)._class_("add-on");
$ctx2.sendIdx["class:"]=2;
$3=_st($2)._with_("find");
$3;
$4=_st(html)._input();
_st($4)._type_("text");
_st($4)._class_("span2");
_st($4)._style_("width: 100%;");
_st($4)._onChange_((function(){
return smalltalk.withContext(function($ctx3) {
return self._filterResults();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$5=_st($4)._onFocusOut_((function(){
return smalltalk.withContext(function($ctx3) {
return self._hideSearchBox();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
self["@searchInput"]=$5;
return self["@searchInput"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$6=_st($1)._hide();
self["@searchbox"]=$6;
return self}, function($ctx1) {$ctx1.fill(self,"renderSearchBoxOn:",{html:html},globals.MaglevListBox)})},
args: ["html"],
source: "renderSearchBoxOn: html\x0a\x09searchbox := html div\x0a\x09\x09class: 'input-prepend';\x0a\x09\x09style: 'margin-bottom: 2px; box-sizing: border-box; -webkit-box-sizing: border-box; padding-right: 52px; width: 100%;';\x0a\x09\x09with: [\x0a\x09\x09\x09html span \x0a\x09\x09\x09\x09class: 'add-on';\x0a\x09\x09\x09\x09 with: 'find'.\x0a\x09\x09\x09searchInput := html input\x0a\x09\x09\x09\x09type: 'text';\x0a\x09\x09\x09\x09class: 'span2';\x0a\x09\x09\x09\x09style: 'width: 100%;';\x0a\x09\x09\x09\x09onChange: [self filterResults];\x0a\x09\x09\x09\x09onFocusOut: [self hideSearchBox]];\x0a\x09\x09hide.",
messageSends: ["class:", "div", "style:", "with:", "span", "type:", "input", "onChange:", "filterResults", "onFocusOut:", "hideSearchBox", "hide"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedData",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@list"])._asJQuery())._find_(".ui-selected"))._data_("data");
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedData",{},globals.MaglevListBox)})},
args: [],
source: "selectedData\x0a\x09^ (list asJQuery find: '.ui-selected') data: 'data'",
messageSends: ["data:", "find:", "asJQuery"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedDataIndex",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self["@list"])._asJQuery())._find_(".ui-selected"))._index()).__plus((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedDataIndex",{},globals.MaglevListBox)})},
args: [],
source: "selectedDataIndex\x0a\x09^ (list asJQuery find: '.ui-selected') index + 1",
messageSends: ["+", "index", "find:", "asJQuery"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedDataVisibleIndex",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1;
$4=_st(self["@list"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$3=_st($4)._find_("li:visible");
$ctx1.sendIdx["find:"]=1;
$2=_st($3)._index_(_st(_st(self["@list"])._asJQuery())._find_("li.ui-selected"));
$1=_st($2).__plus((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedDataVisibleIndex",{},globals.MaglevListBox)})},
args: [],
source: "selectedDataVisibleIndex\x0a\x09^ ((list asJQuery find: 'li:visible') index: (list asJQuery find: 'li.ui-selected')) + 1",
messageSends: ["+", "index:", "find:", "asJQuery"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "selectionChanged",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._focus();
_st(self["@changedCallback"])._value_value_(self._selectedData(),self._selectedDataIndex());
return self}, function($ctx1) {$ctx1.fill(self,"selectionChanged",{},globals.MaglevListBox)})},
args: [],
source: "selectionChanged\x0a\x09self focus.\x0a\x09changedCallback value: self selectedData value: self selectedDataIndex.",
messageSends: ["focus", "value:value:", "selectedData", "selectedDataIndex"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@list"])._show();
return self}, function($ctx1) {$ctx1.fill(self,"show",{},globals.MaglevListBox)})},
args: [],
source: "show\x0a\x09list show.",
messageSends: ["show"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@list"])._asJQuery())._find_("li"))._length();
return $1;
}, function($ctx1) {$ctx1.fill(self,"size",{},globals.MaglevListBox)})},
args: [],
source: "size\x0a\x09^ (list asJQuery find: 'li') length",
messageSends: ["length", "find:", "asJQuery"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "sizeVisible",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@list"])._asJQuery())._find_("li:visible"))._length();
return $1;
}, function($ctx1) {$ctx1.fill(self,"sizeVisible",{},globals.MaglevListBox)})},
args: [],
source: "sizeVisible\x0a\x09^ (list asJQuery find: 'li:visible') length",
messageSends: ["length", "find:", "asJQuery"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "style:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@divContainer"])._style_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"style:",{aString:aString},globals.MaglevListBox)})},
args: ["aString"],
source: "style: aString\x0a\x09divContainer style: aString.",
messageSends: ["style:"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "unselectAll",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(self["@list"])._asJQuery())._find_("li"))._removeClass_("ui-selected");
return self}, function($ctx1) {$ctx1.fill(self,"unselectAll",{},globals.MaglevListBox)})},
args: [],
source: "unselectAll\x0a\x09(list asJQuery find: 'li') removeClass: 'ui-selected'.",
messageSends: ["removeClass:", "find:", "asJQuery"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "with:",
protocol: 'rendering',
fn: function (content){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._with_data_darker_(content,"",false);
return self}, function($ctx1) {$ctx1.fill(self,"with:",{content:content},globals.MaglevListBox)})},
args: ["content"],
source: "with: content\x0a\x09self with: content data: '' darker: false.",
messageSends: ["with:data:darker:"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "with:darker:",
protocol: 'rendering',
fn: function (content,aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._with_data_darker_(content,"",aBoolean);
return self}, function($ctx1) {$ctx1.fill(self,"with:darker:",{content:content,aBoolean:aBoolean},globals.MaglevListBox)})},
args: ["content", "aBoolean"],
source: "with: content darker: aBoolean\x0a\x09self with: content data: '' darker: aBoolean.",
messageSends: ["with:data:darker:"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "with:data:",
protocol: 'rendering',
fn: function (content,dataString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self["@list"])._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(self["@htmlIv"])._li();
_st($1)._class_("ui-widget-content");
_st($1)._data_with_("data",dataString);
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(content)._value_(self["@htmlIv"]);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"with:data:",{content:content,dataString:dataString},globals.MaglevListBox)})},
args: ["content", "dataString"],
source: "with: content data: dataString\x0a\x09\x22|html|\x0a\x09html := HTMLCanvas onJQuery: list asJQuery.\x22\x0a\x09list with: [\x0a\x09\x09htmlIv li\x0a\x09\x09\x09class: 'ui-widget-content';\x0a\x09\x09\x09data: 'data' with: dataString;\x0a\x09\x09\x09with: [content value: htmlIv]].",
messageSends: ["with:", "class:", "li", "data:with:", "value:"],
referencedClasses: []
}),
globals.MaglevListBox);

smalltalk.addMethod(
smalltalk.method({
selector: "with:data:darker:",
protocol: 'rendering',
fn: function (content,dataString,aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self["@list"])._with_((function(){
var li;
return smalltalk.withContext(function($ctx2) {
$1=_st(self["@htmlIv"])._li();
_st($1)._class_("ui-widget-content");
_st($1)._data_with_("data",dataString);
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(content)._value_(self["@htmlIv"]);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
li=$2;
li;
if(smalltalk.assert(aBoolean)){
return _st(_st(li)._asJQuery())._addClass_("list-darker");
};
}, function($ctx2) {$ctx2.fillBlock({li:li},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"with:data:darker:",{content:content,dataString:dataString,aBoolean:aBoolean},globals.MaglevListBox)})},
args: ["content", "dataString", "aBoolean"],
source: "with: content data: dataString darker: aBoolean\x0a\x09list with: [ |li|\x0a\x09\x09li := htmlIv li\x0a\x09\x09\x09class: 'ui-widget-content';\x0a\x09\x09\x09data: 'data' with: dataString;\x0a\x09\x09\x09with: [content value: htmlIv].\x0a\x09\x09aBoolean ifTrue: [li asJQuery addClass: 'list-darker']].",
messageSends: ["with:", "class:", "li", "data:with:", "value:", "ifTrue:", "addClass:", "asJQuery"],
referencedClasses: []
}),
globals.MaglevListBox);



smalltalk.addClass('MaglevObjectDropdown', globals.Widget, ['container', 'resultContainer', 'editor', 'editorElement', 'rubyButton', 'smalltalkButton', 'object'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "appendToInlineObject:for:",
protocol: 'interactions',
fn: function (anObject,dropdownContainer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@object"]=_st(anObject)._object();
$1=_st(self["@container"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._appendTo_(_st(dropdownContainer)._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"appendToInlineObject:for:",{anObject:anObject,dropdownContainer:dropdownContainer},globals.MaglevObjectDropdown)})},
args: ["anObject", "dropdownContainer"],
source: "appendToInlineObject: anObject for: dropdownContainer\x0a\x09object := anObject object.\x0a\x09container asJQuery appendTo: dropdownContainer asJQuery.",
messageSends: ["object", "appendTo:", "asJQuery"],
referencedClasses: []
}),
globals.MaglevObjectDropdown);

smalltalk.addMethod(
smalltalk.method({
selector: "code",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@editor"])._getValue();
return $1;
}, function($ctx1) {$ctx1.fill(self,"code",{},globals.MaglevObjectDropdown)})},
args: [],
source: "code\x0a\x09^ editor getValue",
messageSends: ["getValue"],
referencedClasses: []
}),
globals.MaglevObjectDropdown);

smalltalk.addMethod(
smalltalk.method({
selector: "evalDoIt",
protocol: 'interactions',
fn: function (){
var self=this;
return self},
args: [],
source: "evalDoIt",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectDropdown);

smalltalk.addMethod(
smalltalk.method({
selector: "evalInspectIt",
protocol: 'interactions',
fn: function (){
var self=this;
return self},
args: [],
source: "evalInspectIt",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectDropdown);

smalltalk.addMethod(
smalltalk.method({
selector: "evalPrintIt",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._executeWithCallback_((function(success,resultObj){
return smalltalk.withContext(function($ctx2) {
if(smalltalk.assert(success)){
$1=self["@resultContainer"];
$2=_st(resultObj)._inlineViewComponent();
$ctx2.sendIdx["inlineViewComponent"]=1;
return _st($1)._with_($2);
$ctx2.sendIdx["with:"]=1;
} else {
return _st(self["@resultContainer"])._with_(_st(resultObj)._inlineViewComponent());
};
}, function($ctx2) {$ctx2.fillBlock({success:success,resultObj:resultObj},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"evalPrintIt",{},globals.MaglevObjectDropdown)})},
args: [],
source: "evalPrintIt\x0a\x09self executeWithCallback: [:success :resultObj | \x0a\x09\x09success\x0a\x09\x09\x09ifTrue: [resultContainer with: resultObj inlineViewComponent]\x0a\x09\x09\x09ifFalse: [resultContainer with: resultObj inlineViewComponent]].",
messageSends: ["executeWithCallback:", "ifTrue:ifFalse:", "with:", "inlineViewComponent"],
referencedClasses: []
}),
globals.MaglevObjectDropdown);

smalltalk.addMethod(
smalltalk.method({
selector: "executeWithCallback:",
protocol: 'interactions',
fn: function (aBlock){
var self=this;
function $MaglevIcon(){return globals.MaglevIcon||(typeof MaglevIcon=="undefined"?nil:MaglevIcon)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=self["@resultContainer"];
_st($1)._addClass_("alert-info");
$ctx1.sendIdx["addClass:"]=1;
_st($1)._removeClass_("alert-success");
$ctx1.sendIdx["removeClass:"]=1;
$2=_st($1)._removeClass_("alert-error");
$ctx1.sendIdx["removeClass:"]=2;
$3=_st(self["@resultContainer"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($3)._empty();
$ctx1.sendIdx["empty"]=1;
$4=self["@resultContainer"];
_st($4)._with_(_st($MaglevIcon())._wait());
$ctx1.sendIdx["with:"]=1;
_st($4)._with_(" loading...");
$5=_st($4)._show();
_st(self["@object"])._evaluate_language_withCallback_(self._code(),self._language(),(function(success,resultObj){
return smalltalk.withContext(function($ctx2) {
_st(_st(self["@resultContainer"])._asJQuery())._empty();
_st(self["@resultContainer"])._removeClass_("alert-info");
if(smalltalk.assert(success)){
_st(self["@resultContainer"])._addClass_("alert-success");
$ctx2.sendIdx["addClass:"]=2;
} else {
_st(self["@resultContainer"])._addClass_("alert-error");
};
return _st(aBlock)._value_value_(success,resultObj);
}, function($ctx2) {$ctx2.fillBlock({success:success,resultObj:resultObj},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"executeWithCallback:",{aBlock:aBlock},globals.MaglevObjectDropdown)})},
args: ["aBlock"],
source: "executeWithCallback: aBlock\x0a\x09resultContainer\x0a\x09\x09addClass: 'alert-info';\x0a\x09\x09removeClass: 'alert-success';\x0a\x09\x09removeClass: 'alert-error'.\x0a\x09resultContainer asJQuery empty.\x0a\x09resultContainer\x0a\x09\x09with: MaglevIcon wait;\x0a\x09\x09with: ' loading...';\x0a\x09\x09show.\x0a\x09object \x0a\x09\x09evaluate: self code \x0a\x09\x09language: self language \x0a\x09\x09withCallback: [:success :resultObj |\x0a\x09\x09\x09resultContainer asJQuery empty.\x0a\x09\x09\x09resultContainer removeClass: 'alert-info'.\x0a\x09\x09\x09success\x0a\x09\x09\x09\x09ifTrue: [resultContainer addClass: 'alert-success']\x0a\x09\x09\x09\x09ifFalse: [resultContainer addClass: 'alert-error'].\x0a\x09\x09\x09aBlock value: success value: resultObj]",
messageSends: ["addClass:", "removeClass:", "empty", "asJQuery", "with:", "wait", "show", "evaluate:language:withCallback:", "code", "language", "ifTrue:ifFalse:", "value:value:"],
referencedClasses: ["MaglevIcon"]
}),
globals.MaglevObjectDropdown);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEditor",
protocol: 'initializing',
fn: function (){
var self=this;
var params;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
function $CodeMirror(){return globals.CodeMirror||(typeof CodeMirror=="undefined"?nil:CodeMirror)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Object())._new();
_st($1)._basicAt_put_("mode","text/x-ruby");
$ctx1.sendIdx["basicAt:put:"]=1;
_st($1)._basicAt_put_("styleActiveLine",true);
$ctx1.sendIdx["basicAt:put:"]=2;
_st($1)._basicAt_put_("lineNumbers",true);
$ctx1.sendIdx["basicAt:put:"]=3;
_st($1)._basicAt_put_("matchBrackets",true);
$2=_st($1)._yourself();
params=$2;
self["@editor"]=_st($CodeMirror())._value_value_(_st(_st(self["@editorElement"])._asJQuery())._at_((0)),params);
_st(self["@editor"])._setValue_("");
return self}, function($ctx1) {$ctx1.fill(self,"initializeEditor",{params:params},globals.MaglevObjectDropdown)})},
args: [],
source: "initializeEditor\x0a\x09|params|\x0a\x09params := Object new\x0a\x09\x09basicAt: 'mode' put: 'text/x-ruby';\x0a\x09\x09basicAt: 'styleActiveLine' put: true;\x0a\x09\x09basicAt: 'lineNumbers' put: true;\x0a\x09\x09basicAt: 'matchBrackets' put: true;\x0a\x09\x09yourself. \x0a\x09editor := CodeMirror value: (editorElement asJQuery at: 0) value: params.\x0a\x09editor setValue: ''.",
messageSends: ["basicAt:put:", "new", "yourself", "value:value:", "at:", "asJQuery", "setValue:"],
referencedClasses: ["Object", "CodeMirror"]
}),
globals.MaglevObjectDropdown);

smalltalk.addMethod(
smalltalk.method({
selector: "isRuby",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@rubyButton"])._asJQuery())._hasClass_("active");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isRuby",{},globals.MaglevObjectDropdown)})},
args: [],
source: "isRuby\x0a\x09^ rubyButton asJQuery hasClass: 'active'",
messageSends: ["hasClass:", "asJQuery"],
referencedClasses: []
}),
globals.MaglevObjectDropdown);

smalltalk.addMethod(
smalltalk.method({
selector: "isSmalltalk",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@smalltalkButton"])._asJQuery())._hasClass_("active");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isSmalltalk",{},globals.MaglevObjectDropdown)})},
args: [],
source: "isSmalltalk\x0a\x09^ smalltalkButton asJQuery hasClass: 'active'",
messageSends: ["hasClass:", "asJQuery"],
referencedClasses: []
}),
globals.MaglevObjectDropdown);

smalltalk.addMethod(
smalltalk.method({
selector: "language",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isRuby();
if(smalltalk.assert($1)){
return "ruby";
} else {
return "smalltalk";
};
return self}, function($ctx1) {$ctx1.fill(self,"language",{},globals.MaglevObjectDropdown)})},
args: [],
source: "language\x0a\x09self isRuby\x0a\x09\x09ifTrue: [^ 'ruby']\x0a\x09\x09ifFalse: [^ 'smalltalk']",
messageSends: ["ifTrue:ifFalse:", "isRuby"],
referencedClasses: []
}),
globals.MaglevObjectDropdown);

smalltalk.addMethod(
smalltalk.method({
selector: "languageChanged",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isRuby();
if(smalltalk.assert($1)){
_st(self["@editor"])._setOption_data_("mode","text/x-stsrc");
} else {
_st(self["@editor"])._setOption_data_("mode","text/x-ruby");
$ctx1.sendIdx["setOption:data:"]=1;
};
return self}, function($ctx1) {$ctx1.fill(self,"languageChanged",{},globals.MaglevObjectDropdown)})},
args: [],
source: "languageChanged\x0a\x09self isRuby\x0a\x09\x09ifFalse: [editor setOption: 'mode' data: 'text/x-ruby']\x0a\x09\x09ifTrue: [editor setOption: 'mode' data: 'text/x-stsrc'].",
messageSends: ["ifFalse:ifTrue:", "isRuby", "setOption:data:"],
referencedClasses: []
}),
globals.MaglevObjectDropdown);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseFix",
protocol: 'initializing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var menu = self['@container'];
	var editor = self['@editorElement'];
	menu._asJQuery().mousedown(function (event) {
		event.preventDefault();
		return false;
	});
	editor._asJQuery().mousedown(function (event) {
		event.preventDefault();
		return false;
	}); ;
return self}, function($ctx1) {$ctx1.fill(self,"mouseFix",{},globals.MaglevObjectDropdown)})},
args: [],
source: "mouseFix\x0a\x09< var menu = self['@container'];\x0a\x09var editor = self['@editorElement'];\x0a\x09menu._asJQuery().mousedown(function (event) {\x0a\x09\x09event.preventDefault();\x0a\x09\x09return false;\x0a\x09});\x0a\x09editor._asJQuery().mousedown(function (event) {\x0a\x09\x09event.preventDefault();\x0a\x09\x09return false;\x0a\x09}); >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectDropdown);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$9,$10,$11,$12,$8;
$1=_st(html)._button();
$ctx1.sendIdx["button"]=1;
_st($1)._class_("btn btn-primary");
$ctx1.sendIdx["class:"]=1;
_st($1)._type_("button");
$ctx1.sendIdx["type:"]=1;
_st($1)._with_("Do it");
$ctx1.sendIdx["with:"]=1;
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._evalDoIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["onClick:"]=1;
$3=_st(html)._button();
$ctx1.sendIdx["button"]=2;
_st($3)._class_("btn btn-primary");
$ctx1.sendIdx["class:"]=2;
_st($3)._type_("button");
$ctx1.sendIdx["type:"]=2;
_st($3)._with_("Print it");
$ctx1.sendIdx["with:"]=2;
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._evalPrintIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["onClick:"]=2;
$5=_st(html)._button();
$ctx1.sendIdx["button"]=3;
_st($5)._class_("btn btn-primary");
$ctx1.sendIdx["class:"]=3;
_st($5)._type_("button");
$ctx1.sendIdx["type:"]=3;
_st($5)._with_("Inspect it");
$ctx1.sendIdx["with:"]=3;
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._evalInspectIt();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["onClick:"]=3;
$7=_st(html)._div();
_st($7)._class_("btn-group");
$ctx1.sendIdx["class:"]=4;
_st($7)._style_("float: right;");
_st($7)._data_with_("toggle","buttons-radio");
$ctx1.sendIdx["data:with:"]=1;
$8=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$9=_st(html)._button();
$ctx2.sendIdx["button"]=4;
_st($9)._class_("btn active");
$ctx2.sendIdx["class:"]=5;
_st($9)._data_with_("toggle","buttons-checkbox");
$ctx2.sendIdx["data:with:"]=2;
_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._languageChanged();
$ctx3.sendIdx["languageChanged"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
$ctx2.sendIdx["onClick:"]=4;
_st($9)._type_("button");
$ctx2.sendIdx["type:"]=4;
$10=_st($9)._with_("Ruby");
$ctx2.sendIdx["with:"]=5;
self["@rubyButton"]=$10;
self["@rubyButton"];
$11=_st(html)._button();
_st($11)._class_("btn");
_st($11)._data_with_("toggle","buttons-checkbox");
_st($11)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._languageChanged();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,6)})}));
_st($11)._type_("button");
$12=_st($11)._with_("Smalltalk");
self["@smalltalkButton"]=$12;
return self["@smalltalkButton"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
$ctx1.sendIdx["with:"]=4;
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},globals.MaglevObjectDropdown)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html button\x0a\x09\x09class: 'btn btn-primary';\x0a\x09\x09type: 'button';\x0a\x09\x09with: 'Do it';\x0a\x09\x09onClick: [self evalDoIt].\x0a\x09html button\x0a\x09\x09class: 'btn btn-primary';\x0a\x09\x09type: 'button';\x0a\x09\x09with: 'Print it';\x0a\x09\x09onClick: [self evalPrintIt].\x0a\x09html button\x0a\x09\x09class: 'btn btn-primary';\x0a\x09\x09type: 'button';\x0a\x09\x09with: 'Inspect it';\x0a\x09\x09onClick: [self evalInspectIt].\x0a\x09html div\x0a\x09\x09class: 'btn-group';\x0a\x09\x09style: 'float: right;';\x0a\x09\x09data: 'toggle' with: 'buttons-radio';\x0a\x09\x09with: [\x0a\x09\x09\x09rubyButton := html button\x0a\x09\x09\x09\x09class: 'btn active';\x0a\x09\x09\x09\x09data: 'toggle' with: 'buttons-checkbox';\x0a\x09\x09\x09\x09onClick: [self languageChanged];\x0a\x09\x09\x09\x09type: 'button';\x0a\x09\x09\x09\x09with: 'Ruby'.\x0a\x09\x09\x09smalltalkButton := html button\x0a\x09\x09\x09\x09class: 'btn';\x0a\x09\x09\x09\x09data: 'toggle' with: 'buttons-checkbox';\x0a\x09\x09\x09\x09onClick: [self languageChanged];\x0a\x09\x09\x09\x09type: 'button';\x0a\x09\x09\x09\x09with: 'Smalltalk'].",
messageSends: ["class:", "button", "type:", "with:", "onClick:", "evalDoIt", "evalPrintIt", "evalInspectIt", "div", "style:", "data:with:", "languageChanged"],
referencedClasses: []
}),
globals.MaglevObjectDropdown);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFormOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$2;
$1=_st(html)._form();
_st($1)._style_("margin: 0px;");
$ctx1.sendIdx["style:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
$ctx2.sendIdx["div"]=1;
self["@editorElement"]=_st($3)._class_("pull-left code-area");
$ctx2.sendIdx["class:"]=1;
self["@editorElement"];
$4=_st(html)._div();
$ctx2.sendIdx["div"]=2;
_st($4)._style_("clear: both;");
$5=_st(html)._div();
$ctx2.sendIdx["div"]=3;
_st($5)._class_("alert");
$ctx2.sendIdx["class:"]=2;
$6=_st($5)._hide();
self["@resultContainer"]=$6;
self["@resultContainer"];
$7=_st(html)._div();
_st($7)._class_("button-area");
$8=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderButtonsOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $8;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderFormOn:",{html:html},globals.MaglevObjectDropdown)})},
args: ["html"],
source: "renderFormOn: html\x0a\x09html form\x0a\x09\x09style: 'margin: 0px;';\x0a\x09\x09with: [\x0a\x09\x09\x09editorElement := html div\x0a\x09\x09\x09\x09class: 'pull-left code-area'.\x0a\x09\x09\x09html div style: 'clear: both;'.\x0a\x09\x09\x09resultContainer := html div\x0a\x09\x09\x09\x09class: 'alert';\x0a\x09\x09\x09\x09hide.\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'button-area';\x0a\x09\x09\x09\x09with: [self renderButtonsOn: html]].",
messageSends: ["style:", "form", "with:", "class:", "div", "hide", "renderButtonsOn:"],
referencedClasses: []
}),
globals.MaglevObjectDropdown);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("dropdown-menu");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._fieldset();
_st($3)._class_("textbox");
_st($3)._style_("padding: 10px");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderFormOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
self["@container"]=$2;
self._initializeEditor();
self._mouseFix();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MaglevObjectDropdown)})},
args: ["html"],
source: "renderOn: html\x0a\x09container := html div\x0a\x09\x09class: 'dropdown-menu';\x0a\x09\x09with: [html fieldset\x0a\x09\x09\x09\x09class: 'textbox';\x0a\x09\x09\x09\x09style: 'padding: 10px';\x0a\x09\x09\x09\x09with: [self renderFormOn: html]].\x0a\x09self initializeEditor.\x0a\x09self mouseFix.",
messageSends: ["class:", "div", "with:", "fieldset", "style:", "renderFormOn:", "initializeEditor", "mouseFix"],
referencedClasses: []
}),
globals.MaglevObjectDropdown);


globals.MaglevObjectDropdown.klass.iVarNames = ['instance'];
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
_st(self["@instance"])._appendToJQuery_("#temporary-rendering-area"._asJQuery());
} else {
$1;
};
$2=self["@instance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"instance",{},globals.MaglevObjectDropdown.klass)})},
args: [],
source: "instance\x0a\x09instance ifNil: [\x0a\x09\x09instance := self new.\x0a\x09\x09instance appendToJQuery: '#temporary-rendering-area' asJQuery].\x0a\x09^ instance",
messageSends: ["ifNil:", "new", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
globals.MaglevObjectDropdown.klass);


smalltalk.addClass('MaglevObjectInline', globals.Widget, ['object', 'hasDropDown', 'isDraggable', 'depth', 'isShort', 'dragContent', 'dragDummy', 'dragObject', 'fullInspection'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "bindDraggable",
protocol: 'interactions',
fn: function (){
var self=this;
var options,cursorPos;
function $Object(){return globals.Object||(typeof Object=="undefined"?nil:Object)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st($Object())._new();
$ctx1.sendIdx["new"]=1;
_st($1)._basicAt_put_("left",(0));
$ctx1.sendIdx["basicAt:put:"]=1;
_st($1)._basicAt_put_("top",(0));
$ctx1.sendIdx["basicAt:put:"]=2;
$2=_st($1)._yourself();
$ctx1.sendIdx["yourself"]=1;
cursorPos=$2;
$3=_st($Object())._new();
_st($3)._basicAt_put_("create",(function(event,ui){
}));
$ctx1.sendIdx["basicAt:put:"]=3;
_st($3)._basicAt_put_("cursorPos",cursorPos);
$ctx1.sendIdx["basicAt:put:"]=4;
_st($3)._basicAt_put_("start",(function(event,ui){
return smalltalk.withContext(function($ctx2) {
return self._dragStart_a_(event,ui);
}, function($ctx2) {$ctx2.fillBlock({event:event,ui:ui},$ctx1,2)})}));
$ctx1.sendIdx["basicAt:put:"]=5;
_st($3)._basicAt_put_("stop",(function(event,ui){
return smalltalk.withContext(function($ctx2) {
return self._dragStop_a_(event,ui);
}, function($ctx2) {$ctx2.fillBlock({event:event,ui:ui},$ctx1,3)})}));
$4=_st($3)._yourself();
options=$4;
_st(_st(self["@dragObject"])._asJQuery())._draggable_(options);
return self}, function($ctx1) {$ctx1.fill(self,"bindDraggable",{options:options,cursorPos:cursorPos},globals.MaglevObjectInline)})},
args: [],
source: "bindDraggable\x0a\x09|options cursorPos|\x0a\x09cursorPos := Object new\x0a\x09\x09basicAt: 'left' put: 0;\x0a\x09\x09basicAt: 'top' put: 0;\x0a\x09\x09yourself.\x0a\x09options := Object new\x0a\x09\x09basicAt: 'create' put: [:event :ui | ];\x0a\x09\x09basicAt: 'cursorPos' put: cursorPos;\x0a\x09\x09basicAt: 'start' put: [:event :ui | self dragStart: event a: ui];\x0a\x09\x09basicAt: 'stop' put: [:event :ui | self dragStop: event a: ui];\x0a\x09\x09yourself.\x0a\x09dragObject asJQuery draggable: options.",
messageSends: ["basicAt:put:", "new", "yourself", "dragStart:a:", "dragStop:a:", "draggable:", "asJQuery"],
referencedClasses: ["Object"]
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "depth",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@depth"];
if(($receiver = $1) == nil || $receiver == null){
self["@depth"]=(1);
self["@depth"];
} else {
$1;
};
$2=self["@depth"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"depth",{},globals.MaglevObjectInline)})},
args: [],
source: "depth\x0a\x09depth ifNil: [depth := 1].\x0a\x09^ depth",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "depth:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@depth"]=anInteger;
return self},
args: ["anInteger"],
source: "depth: anInteger\x0a\x09depth := anInteger.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "dragStart:a:",
protocol: 'interactions',
fn: function (event,ui){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@dragContent"])._hide();
_st(self["@dragDummy"])._show();
return self}, function($ctx1) {$ctx1.fill(self,"dragStart:a:",{event:event,ui:ui},globals.MaglevObjectInline)})},
args: ["event", "ui"],
source: "dragStart: event a: ui\x0a\x09dragContent hide.\x0a\x09dragDummy show.",
messageSends: ["hide", "show"],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "dragStop:a:",
protocol: 'interactions',
fn: function (event,ui){
var self=this;
var position,window;
function $Maglev(){return globals.Maglev||(typeof Maglev=="undefined"?nil:Maglev)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
position=_st(_st(self["@dragObject"])._asJQuery())._offset();
window=_st(_st($Maglev())._instance())._showReloadObjectWindow_(_st(self["@object"])._oop());
$1=window;
$3=_st(position)._left();
$4=_st(_st(self["@dragObject"])._width()).__slash((2));
$ctx1.sendIdx["/"]=1;
$2=_st($3).__minus($4);
$ctx1.sendIdx["-"]=1;
_st($1)._left_($2);
$ctx1.sendIdx["left:"]=1;
_st(window)._top_(_st(_st(position)._top()).__minus(_st(_st(self["@dragObject"])._height()).__slash((2))));
$ctx1.sendIdx["top:"]=1;
_st(self["@dragObject"])._left_((0));
_st(self["@dragObject"])._top_((0));
_st(self["@dragDummy"])._hide();
_st(self["@dragContent"])._show();
return self}, function($ctx1) {$ctx1.fill(self,"dragStop:a:",{event:event,ui:ui,position:position,window:window},globals.MaglevObjectInline)})},
args: ["event", "ui"],
source: "dragStop: event a: ui\x0a\x09|position window|\x0a\x09position := dragObject asJQuery offset.\x0a\x09window := Maglev instance showReloadObjectWindow: object oop.\x0a\x09window left: position left - (dragObject width / 2).\x0a\x09window top: position top - (dragObject height / 2).\x0a\x09dragObject left: 0.\x0a\x09dragObject top: 0.\x0a\x09dragDummy hide.\x0a\x09dragContent show.",
messageSends: ["offset", "asJQuery", "showReloadObjectWindow:", "instance", "oop", "left:", "-", "left", "/", "width", "top:", "top", "height", "hide", "show"],
referencedClasses: ["Maglev"]
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "fullInspection",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@fullInspection"];
if(($receiver = $1) == nil || $receiver == null){
self["@fullInspection"]=false;
self["@fullInspection"];
} else {
$1;
};
$2=self["@fullInspection"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"fullInspection",{},globals.MaglevObjectInline)})},
args: [],
source: "fullInspection\x0a\x09fullInspection ifNil: [fullInspection := false].\x0a\x09^ fullInspection",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "fullInspection:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@fullInspection"]=aBoolean;
return self},
args: ["aBoolean"],
source: "fullInspection: aBoolean\x0a\x09fullInspection := aBoolean.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "hasDropDown",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@hasDropDown"];
if(($receiver = $1) == nil || $receiver == null){
self["@hasDropDown"]=self._hasDropDownDefault();
self["@hasDropDown"];
} else {
$1;
};
$2=self["@hasDropDown"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"hasDropDown",{},globals.MaglevObjectInline)})},
args: [],
source: "hasDropDown\x0a\x09hasDropDown ifNil: [hasDropDown := self hasDropDownDefault].\x0a\x09^ hasDropDown",
messageSends: ["ifNil:", "hasDropDownDefault"],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "hasDropDown:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@hasDropDown"]=aBoolean;
return self},
args: ["aBoolean"],
source: "hasDropDown: aBoolean\x0a\x09hasDropDown := aBoolean.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "hasDropDownDefault",
protocol: 'constants',
fn: function (){
var self=this;
return true;
},
args: [],
source: "hasDropDownDefault\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "isDraggable",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@isDraggable"];
if(($receiver = $1) == nil || $receiver == null){
self["@isDraggable"]=self._isDraggableDefault();
self["@isDraggable"];
} else {
$1;
};
$2=self["@isDraggable"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"isDraggable",{},globals.MaglevObjectInline)})},
args: [],
source: "isDraggable\x0a\x09isDraggable ifNil: [isDraggable := self isDraggableDefault].\x0a\x09^ isDraggable",
messageSends: ["ifNil:", "isDraggableDefault"],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "isDraggable:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@isDraggable"]=aBoolean;
return self},
args: ["aBoolean"],
source: "isDraggable: aBoolean\x0a\x09isDraggable := aBoolean.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "isDraggableDefault",
protocol: 'constants',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isDraggableDefault\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "isShort",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@isShort"];
if(($receiver = $1) == nil || $receiver == null){
self["@isShort"]=false;
self["@isShort"];
} else {
$1;
};
$2=self["@isShort"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"isShort",{},globals.MaglevObjectInline)})},
args: [],
source: "isShort\x0a\x09isShort ifNil: [isShort := false].\x0a\x09^ isShort",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "isShort:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@isShort"]=aBoolean;
return self},
args: ["aBoolean"],
source: "isShort: aBoolean\x0a\x09isShort := aBoolean.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "maxDepth",
protocol: 'constants',
fn: function (){
var self=this;
return (1);
},
args: [],
source: "maxDepth\x0a\x09^ 1",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "maxInspection",
protocol: 'constants',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._fullInspection();
if(smalltalk.assert($1)){
return (1000);
} else {
return (15);
};
return self}, function($ctx1) {$ctx1.fill(self,"maxInspection",{},globals.MaglevObjectInline)})},
args: [],
source: "maxInspection\x0a\x09self fullInspection\x0a\x09\x09ifTrue: [^ 1000]\x0a\x09\x09ifFalse: [^ 15].",
messageSends: ["ifTrue:ifFalse:", "fullInspection"],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "object",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@object"];
return $1;
},
args: [],
source: "object\x0a\x09^ object",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "object:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@object"]=anObject;
return self},
args: ["anObject"],
source: "object: anObject\x0a\x09object := anObject.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "renderDraggableObjectOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevIcon(){return globals.MaglevIcon||(typeof MaglevIcon=="undefined"?nil:MaglevIcon)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$6,$7,$8,$4,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("draggable-new-object-container");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
$ctx2.sendIdx["div"]=2;
_st($3)._class_("ui-widget-content ui-draggable draggable-new-object");
$ctx2.sendIdx["class:"]=2;
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._div();
$ctx3.sendIdx["div"]=3;
_st($5)._class_("object-drag-dummy");
$ctx3.sendIdx["class:"]=3;
_st($5)._style_("display: none;");
_st($5)._with_(_st($MaglevIcon())._move());
$ctx3.sendIdx["with:"]=3;
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx4) {
return self._renderObjectContainerOn_(html);
$ctx4.sendIdx["renderObjectContainerOn:"]=1;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["with:"]=4;
self["@dragDummy"]=$6;
self["@dragDummy"];
$7=_st(html)._div();
_st($7)._class_("object-iv-name");
$8=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx4) {
return self._renderObjectContainerOn_(html);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
self["@dragContent"]=$8;
return self["@dragContent"];
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
self["@dragObject"]=$4;
return self["@dragObject"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
self._bindDraggable();
return self}, function($ctx1) {$ctx1.fill(self,"renderDraggableObjectOn:",{html:html},globals.MaglevObjectInline)})},
args: ["html"],
source: "renderDraggableObjectOn: html\x0a\x09html div\x0a\x09\x09class: 'draggable-new-object-container';\x0a\x09\x09with: [\x0a\x09\x09\x09dragObject := html div\x0a\x09\x09\x09\x09class: 'ui-widget-content ui-draggable draggable-new-object';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09dragDummy := html div\x0a\x09\x09\x09\x09\x09\x09class: 'object-drag-dummy';\x0a\x09\x09\x09\x09\x09\x09style: 'display: none;';\x0a\x09\x09\x09\x09\x09\x09with: MaglevIcon move;\x0a\x09\x09\x09\x09\x09\x09with: [self renderObjectContainerOn: html].\x0a\x09\x09\x09\x09\x09dragContent := html div\x0a\x09\x09\x09\x09\x09\x09class: 'object-iv-name';\x0a\x09\x09\x09\x09\x09\x09with: [self renderObjectContainerOn: html]]].\x0a\x09self bindDraggable.",
messageSends: ["class:", "div", "with:", "style:", "move", "renderObjectContainerOn:", "bindDraggable"],
referencedClasses: ["MaglevIcon"]
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "renderLoadedObjectOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var text,shorted;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$4,$2,$6,$7,$8,$9;
shorted=false;
$1=_st(self["@object"])._inspection();
$ctx1.sendIdx["inspection"]=1;
text=_st($1)._copyFrom_to_((1),self._maxInspection());
$3=_st(text)._size();
$ctx1.sendIdx["size"]=1;
$5=_st(self["@object"])._inspection();
$ctx1.sendIdx["inspection"]=2;
$4=_st($5)._size();
$2=_st($3).__lt($4);
if(smalltalk.assert($2)){
text=_st(text).__comma("...");
$ctx1.sendIdx[","]=1;
text;
shorted=true;
shorted;
$6=_st(_st(text)._at_((2))).__eq("<");
if(smalltalk.assert($6)){
text=_st(text).__comma(">");
text;
};
};
_st(html)._with_((function(){
var tooltip;
return smalltalk.withContext(function($ctx2) {
$7=_st(html)._span();
_st($7)._data_with_("toggle","tooltip");
$ctx2.sendIdx["data:with:"]=1;
_st($7)._data_with_("placement","top");
$ctx2.sendIdx["data:with:"]=2;
_st($7)._data_with_("original-title",_st(self["@object"])._inspection());
$8=_st($7)._with_(text);
tooltip=$8;
tooltip;
$9=shorted;
if(smalltalk.assert($9)){
return _st(_st(tooltip)._asJQuery())._tooltip();
};
}, function($ctx2) {$ctx2.fillBlock({tooltip:tooltip},$ctx1,3)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderLoadedObjectOn:",{html:html,text:text,shorted:shorted},globals.MaglevObjectInline)})},
args: ["html"],
source: "renderLoadedObjectOn: html\x0a\x09|text shorted|\x0a\x09shorted := false.\x0a\x09text := object inspection copyFrom: 1 to: self maxInspection.\x0a\x09text size < object inspection size ifTrue: [\x0a\x09\x09text := text, '...'. \x0a\x09\x09shorted := true.\x0a\x09\x09(text at: 2) = '<' ifTrue: [text := text, '>']].\x0a\x09html with: [|tooltip|\x0a\x09\x09tooltip := html span\x0a\x09\x09\x09data: 'toggle' with: 'tooltip';\x0a\x09\x09\x09data: 'placement' with: 'top';\x0a\x09\x09\x09data: 'original-title' with: object inspection;\x0a\x09\x09\x09with: text.\x0a\x09\x09shorted ifTrue: [tooltip asJQuery tooltip]].",
messageSends: ["copyFrom:to:", "inspection", "maxInspection", "ifTrue:", "<", "size", ",", "=", "at:", "with:", "data:with:", "span", "tooltip", "asJQuery"],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "renderObjectActionsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self},
args: ["html"],
source: "renderObjectActionsOn: html\x0a\x22\x09html\x0a\x09\x09with: MaglevIcon search;\x0a\x09\x09with: MaglevIcon pencil.\x22",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "renderObjectContainerOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$4,$2;
$1=_st(html)._span();
$ctx1.sendIdx["span"]=1;
_st($1)._class_("object-inline-view-view");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderObjectActionsOn_(html);
$3=_st(html)._span();
_st($3)._class_("object-inline-typed-view");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=self._hasDropDown();
if(smalltalk.assert($5)){
return self._renderObjectWithDropDownOn_(html);
} else {
return self._renderObjectOn_(html);
};
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderObjectContainerOn:",{html:html},globals.MaglevObjectInline)})},
args: ["html"],
source: "renderObjectContainerOn: html\x0a\x09html span\x0a\x09\x09class: 'object-inline-view-view';\x0a\x09\x09with: [\x0a\x09\x09\x09self renderObjectActionsOn: html.\x0a\x09\x09\x09html span\x0a\x09\x09\x09\x09class: 'object-inline-typed-view';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09self hasDropDown\x0a\x09\x09\x09\x09\x09\x09ifTrue: [self renderObjectWithDropDownOn: html]\x0a\x09\x09\x09\x09\x09\x09ifFalse: [self renderObjectOn: html]]].",
messageSends: ["class:", "span", "with:", "renderObjectActionsOn:", "ifTrue:ifFalse:", "hasDropDown", "renderObjectWithDropDownOn:", "renderObjectOn:"],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "renderObjectOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@object"])._isLoaded();
if(smalltalk.assert($1)){
self._renderLoadedObjectOn_(html);
} else {
self._renderUnloadedObjectOn_(html);
};
return self}, function($ctx1) {$ctx1.fill(self,"renderObjectOn:",{html:html},globals.MaglevObjectInline)})},
args: ["html"],
source: "renderObjectOn: html\x0a\x09object isLoaded\x0a\x09\x09ifTrue: [self renderLoadedObjectOn: html]\x0a\x09\x09ifFalse: [self renderUnloadedObjectOn: html].",
messageSends: ["ifTrue:ifFalse:", "isLoaded", "renderLoadedObjectOn:", "renderUnloadedObjectOn:"],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "renderObjectWithDropDownOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var dropdownContainer;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._span();
_st($1)._class_("dropdown");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._a();
_st($3)._class_("dropdown-toggle btn object-dropdown-toggle");
$ctx2.sendIdx["class:"]=2;
_st($3)._data_with_("toggle","dropdown");
_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._showDropdownFor_(dropdownContainer);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
self._renderObjectOn_(html);
return _st(_st(html)._b())._class_("caret");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
dropdownContainer=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderObjectWithDropDownOn:",{html:html,dropdownContainer:dropdownContainer},globals.MaglevObjectInline)})},
args: ["html"],
source: "renderObjectWithDropDownOn: html\x0a\x09|dropdownContainer|\x0a\x09dropdownContainer := html span\x0a\x09\x09class: 'dropdown';\x0a\x09\x09with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09class: 'dropdown-toggle btn object-dropdown-toggle';\x0a\x09\x09\x09\x09data: 'toggle' with: 'dropdown';\x0a\x09\x09\x09\x09onClick: [self showDropdownFor: dropdownContainer];\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09self renderObjectOn: html.\x0a\x09\x09\x09\x09\x09html b class: 'caret']].",
messageSends: ["class:", "span", "with:", "a", "data:with:", "onClick:", "showDropdownFor:", "renderObjectOn:", "b"],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isDraggable();
if(smalltalk.assert($1)){
self._renderDraggableObjectOn_(html);
} else {
self._renderObjectContainerOn_(html);
};
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MaglevObjectInline)})},
args: ["html"],
source: "renderOn: html\x0a\x09self isDraggable\x0a\x09\x09ifTrue: [self renderDraggableObjectOn: html]\x0a\x09\x09ifFalse: [self renderObjectContainerOn: html].",
messageSends: ["ifTrue:ifFalse:", "isDraggable", "renderDraggableObjectOn:", "renderObjectContainerOn:"],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "renderText:withDropDownOn:",
protocol: 'rendering',
fn: function (text,html){
var self=this;
var dropdownContainer;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
$1=self._hasDropDown();
if(smalltalk.assert($1)){
$2=_st(html)._span();
_st($2)._class_("dropdown");
$ctx1.sendIdx["class:"]=1;
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(html)._a();
_st($4)._class_("dropdown-toggle btn object-dropdown-toggle");
$ctx2.sendIdx["class:"]=2;
_st($4)._data_with_("toggle","dropdown");
_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._showDropdownFor_(dropdownContainer);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$5=_st($4)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._with_(text);
$ctx3.sendIdx["with:"]=3;
return _st(_st(html)._b())._class_("caret");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["with:"]=2;
return $5;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=1;
dropdownContainer=$3;
dropdownContainer;
} else {
_st(html)._with_(text);
};
return self}, function($ctx1) {$ctx1.fill(self,"renderText:withDropDownOn:",{text:text,html:html,dropdownContainer:dropdownContainer},globals.MaglevObjectInline)})},
args: ["text", "html"],
source: "renderText: text withDropDownOn: html\x0a\x09|dropdownContainer|\x0a\x09self hasDropDown\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09dropdownContainer := html span\x0a\x09\x09\x09\x09class: 'dropdown';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09class: 'dropdown-toggle btn object-dropdown-toggle';\x0a\x09\x09\x09\x09\x09data: 'toggle' with: 'dropdown';\x0a\x09\x09\x09\x09\x09onClick: [self showDropdownFor: dropdownContainer];\x0a\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09html with: text.\x0a\x09\x09\x09\x09\x09\x09\x09html b class: 'caret']]]\x0a\x09\x09ifFalse: [html with: text].",
messageSends: ["ifTrue:ifFalse:", "hasDropDown", "class:", "span", "with:", "a", "data:with:", "onClick:", "showDropdownFor:", "b"],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "renderUnloadedObjectOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var text,shorted;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$4,$2,$6,$7,$8,$9;
shorted=false;
$1=_st(self["@object"])._inspection();
$ctx1.sendIdx["inspection"]=1;
text=_st($1)._copyFrom_to_((1),self._maxInspection());
$3=_st(text)._size();
$ctx1.sendIdx["size"]=1;
$5=_st(self["@object"])._inspection();
$ctx1.sendIdx["inspection"]=2;
$4=_st($5)._size();
$2=_st($3).__lt($4);
if(smalltalk.assert($2)){
text=_st(text).__comma("...");
$ctx1.sendIdx[","]=1;
text;
shorted=true;
shorted;
$6=_st(_st(text)._at_((2))).__eq("<");
if(smalltalk.assert($6)){
text=_st(text).__comma(">");
text;
};
};
_st(html)._with_((function(){
var tooltip;
return smalltalk.withContext(function($ctx2) {
$7=_st(html)._span();
_st($7)._data_with_("toggle","tooltip");
$ctx2.sendIdx["data:with:"]=1;
_st($7)._data_with_("placement","top");
$ctx2.sendIdx["data:with:"]=2;
_st($7)._data_with_("original-title",_st(self["@object"])._inspection());
$8=_st($7)._with_(text);
tooltip=$8;
tooltip;
$9=shorted;
if(smalltalk.assert($9)){
return _st(_st(tooltip)._asJQuery())._tooltip();
};
}, function($ctx2) {$ctx2.fillBlock({tooltip:tooltip},$ctx1,3)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderUnloadedObjectOn:",{html:html,text:text,shorted:shorted},globals.MaglevObjectInline)})},
args: ["html"],
source: "renderUnloadedObjectOn: html\x0a\x09|text shorted|\x0a\x09shorted := false.\x0a\x09text := object inspection copyFrom: 1 to: self maxInspection.\x0a\x09text size < object inspection size ifTrue: [\x0a\x09\x09text := text, '...'. \x0a\x09\x09shorted := true.\x0a\x09\x09(text at: 2) = '<' ifTrue: [text := text, '>']].\x0a\x09html with: [|tooltip|\x0a\x09\x09tooltip := html span\x0a\x09\x09\x09data: 'toggle' with: 'tooltip';\x0a\x09\x09\x09data: 'placement' with: 'top';\x0a\x09\x09\x09data: 'original-title' with: object inspection;\x0a\x09\x09\x09with: text.\x0a\x09\x09shorted ifTrue: [tooltip asJQuery tooltip]].",
messageSends: ["copyFrom:to:", "inspection", "maxInspection", "ifTrue:", "<", "size", ",", "=", "at:", "with:", "data:with:", "span", "tooltip", "asJQuery"],
referencedClasses: []
}),
globals.MaglevObjectInline);

smalltalk.addMethod(
smalltalk.method({
selector: "showDropdownFor:",
protocol: 'interactions',
fn: function (dropdownContainer){
var self=this;
function $MaglevObjectDropdown(){return globals.MaglevObjectDropdown||(typeof MaglevObjectDropdown=="undefined"?nil:MaglevObjectDropdown)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($MaglevObjectDropdown())._instance())._appendToInlineObject_for_(self,dropdownContainer);
return self}, function($ctx1) {$ctx1.fill(self,"showDropdownFor:",{dropdownContainer:dropdownContainer},globals.MaglevObjectInline)})},
args: ["dropdownContainer"],
source: "showDropdownFor: dropdownContainer\x0a\x09MaglevObjectDropdown instance appendToInlineObject: self for: dropdownContainer.",
messageSends: ["appendToInlineObject:for:", "instance"],
referencedClasses: ["MaglevObjectDropdown"]
}),
globals.MaglevObjectInline);


smalltalk.addMethod(
smalltalk.method({
selector: "newWithDepth:",
protocol: 'instance creation',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._depth_(anInteger);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithDepth:",{anInteger:anInteger},globals.MaglevObjectInline.klass)})},
args: ["anInteger"],
source: "newWithDepth: anInteger\x0a\x09^ self basicNew\x0a\x09\x09depth: anInteger;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["depth:", "basicNew", "initialize", "yourself"],
referencedClasses: []
}),
globals.MaglevObjectInline.klass);


smalltalk.addClass('MaglevArrayInline', globals.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "maxDepth",
protocol: 'constants',
fn: function (){
var self=this;
return (2);
},
args: [],
source: "maxDepth\x0a\x09^ 2",
messageSends: [],
referencedClasses: []
}),
globals.MaglevArrayInline);

smalltalk.addMethod(
smalltalk.method({
selector: "maxElements",
protocol: 'constants',
fn: function (){
var self=this;
return (3);
},
args: [],
source: "maxElements\x0a\x09^ 3",
messageSends: [],
referencedClasses: []
}),
globals.MaglevArrayInline);

smalltalk.addMethod(
smalltalk.method({
selector: "renderLoadedObjectOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var showElements,maxElements;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$7,$6,$5,$10,$9,$8,$11;
maxElements=self._maxElements();
$1=maxElements;
$3=self._object();
$ctx1.sendIdx["object"]=1;
$2=_st($3)._elementsSize();
$ctx1.sendIdx["elementsSize"]=1;
showElements=_st($1)._min_($2);
self._renderText_withDropDownOn_("[",html);
$ctx1.sendIdx["renderText:withDropDownOn:"]=1;
_st(html)._with_(" ");
$ctx1.sendIdx["with:"]=1;
$4=self._isShort();
if(smalltalk.assert($4)){
_st(html)._with_(" ... ");
$ctx1.sendIdx["with:"]=2;
} else {
_st((1)._to_(showElements))._do_((function(idx){
return smalltalk.withContext(function($ctx2) {
$7=self._object();
$ctx2.sendIdx["object"]=2;
$6=_st($7)._at_(idx);
$5=_st($6)._inlineViewComponentWithDepth_(_st(self._depth()).__minus((1)));
_st(html)._with_($5);
$ctx2.sendIdx["with:"]=3;
$8=_st(_st(idx).__lt(showElements))._or_((function(){
return smalltalk.withContext(function($ctx3) {
$10=self._object();
$ctx3.sendIdx["object"]=3;
$9=_st($10)._elementsSize();
$ctx3.sendIdx["elementsSize"]=2;
return _st($9).__gt(maxElements);
$ctx3.sendIdx[">"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
if(smalltalk.assert($8)){
return _st(html)._with_(" , ");
$ctx2.sendIdx["with:"]=4;
};
}, function($ctx2) {$ctx2.fillBlock({idx:idx},$ctx1,3)})}));
$11=_st(_st(self._object())._elementsSize()).__gt(maxElements);
if(smalltalk.assert($11)){
_st(html)._with_(" ... ");
$ctx1.sendIdx["with:"]=5;
};
};
_st(html)._with_(" ");
self._renderText_withDropDownOn_("]",html);
return self}, function($ctx1) {$ctx1.fill(self,"renderLoadedObjectOn:",{html:html,showElements:showElements,maxElements:maxElements},globals.MaglevArrayInline)})},
args: ["html"],
source: "renderLoadedObjectOn: html\x0a\x09|showElements maxElements|\x0a\x09maxElements := self maxElements.\x0a\x09showElements := maxElements min: self object elementsSize.\x0a\x09self renderText: '[' withDropDownOn: html.\x0a\x09html with: ' '.\x0a\x09self isShort\x0a\x09\x09ifTrue: [html with: ' ... ']\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09(1 to: showElements) do: [:idx |\x0a\x09\x09\x09\x09html with: ((self object at: idx) inlineViewComponentWithDepth: self depth - 1).\x0a\x09\x09\x09\x09(idx < showElements or: [self object elementsSize > maxElements])\x0a\x09\x09\x09\x09\x09ifTrue: [html with: ' , ']].\x0a\x09\x09\x09self object elementsSize > maxElements\x0a\x09\x09\x09\x09ifTrue: [html with: ' ... ']\x09].\x0a\x09html with: ' '.\x0a\x09self renderText: ']' withDropDownOn: html.",
messageSends: ["maxElements", "min:", "elementsSize", "object", "renderText:withDropDownOn:", "with:", "ifTrue:ifFalse:", "isShort", "do:", "to:", "inlineViewComponentWithDepth:", "at:", "-", "depth", "ifTrue:", "or:", "<", ">"],
referencedClasses: []
}),
globals.MaglevArrayInline);

smalltalk.addMethod(
smalltalk.method({
selector: "renderObjectWithDropDownOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderObjectOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderObjectWithDropDownOn:",{html:html},globals.MaglevArrayInline)})},
args: ["html"],
source: "renderObjectWithDropDownOn: html\x0a\x09\x22Do not render a drop down menu around the whole object.\x22\x0a\x09self renderObjectOn: html.",
messageSends: ["renderObjectOn:"],
referencedClasses: []
}),
globals.MaglevArrayInline);

smalltalk.addMethod(
smalltalk.method({
selector: "renderUnloadedObjectOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderText_withDropDownOn_("[",html);
$ctx1.sendIdx["renderText:withDropDownOn:"]=1;
_st(html)._with_("...");
self._renderText_withDropDownOn_("]",html);
return self}, function($ctx1) {$ctx1.fill(self,"renderUnloadedObjectOn:",{html:html},globals.MaglevArrayInline)})},
args: ["html"],
source: "renderUnloadedObjectOn: html\x0a\x09self renderText: '[' withDropDownOn: html.\x0a\x09html with: '...'.\x0a\x09self renderText: ']' withDropDownOn: html.",
messageSends: ["renderText:withDropDownOn:", "with:"],
referencedClasses: []
}),
globals.MaglevArrayInline);



smalltalk.addClass('MaglevBooleanInline', globals.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "hasDropDownDefault",
protocol: 'constants',
fn: function (){
var self=this;
return false;
},
args: [],
source: "hasDropDownDefault\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.MaglevBooleanInline);

smalltalk.addMethod(
smalltalk.method({
selector: "isDraggableDefault",
protocol: 'constants',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isDraggableDefault\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.MaglevBooleanInline);



smalltalk.addClass('MaglevExceptionInline', globals.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "renderObjectActionsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevIcon(){return globals.MaglevIcon||(typeof MaglevIcon=="undefined"?nil:MaglevIcon)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(self["@object"])._isTrappable();
if(! smalltalk.assert($1)){
$2=_st(_st($MaglevIcon())._terminal())._caption_("Not trappable");
$ctx1.sendIdx["caption:"]=1;
_st(html)._with_($2);
$ctx1.sendIdx["with:"]=1;
};
$3=_st(self["@object"])._isResumable();
if(smalltalk.assert($3)){
$4=_st(_st($MaglevIcon())._playCircle())._caption_("Resumable");
$ctx1.sendIdx["caption:"]=2;
_st(html)._with_($4);
$ctx1.sendIdx["with:"]=2;
};
$5=_st(self["@object"])._isDBEHalt();
if(smalltalk.assert($5)){
_st(html)._with_(_st(_st($MaglevIcon())._flag())._caption_("Database Explorer Halt"));
};
return self}, function($ctx1) {$ctx1.fill(self,"renderObjectActionsOn:",{html:html},globals.MaglevExceptionInline)})},
args: ["html"],
source: "renderObjectActionsOn: html\x0a\x09object isTrappable\x0a\x09\x09ifFalse: [html with: (MaglevIcon terminal\x0a\x09\x09\x09caption: 'Not trappable')].\x0a\x09object isResumable\x0a\x09\x09ifTrue: [html with: (MaglevIcon playCircle\x0a\x09\x09\x09caption: 'Resumable')].\x0a\x09object isDBEHalt\x0a\x09\x09ifTrue: [html with: (MaglevIcon flag\x0a\x09\x09\x09caption: 'Database Explorer Halt')].",
messageSends: ["ifFalse:", "isTrappable", "with:", "caption:", "terminal", "ifTrue:", "isResumable", "playCircle", "isDBEHalt", "flag"],
referencedClasses: ["MaglevIcon"]
}),
globals.MaglevExceptionInline);



smalltalk.addClass('MaglevFixnumInline', globals.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "hasDropDownDefault",
protocol: 'constants',
fn: function (){
var self=this;
return false;
},
args: [],
source: "hasDropDownDefault\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.MaglevFixnumInline);

smalltalk.addMethod(
smalltalk.method({
selector: "isDraggableDefault",
protocol: 'constants',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isDraggableDefault\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.MaglevFixnumInline);

smalltalk.addMethod(
smalltalk.method({
selector: "renderObjectActionsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self},
args: ["html"],
source: "renderObjectActionsOn: html",
messageSends: [],
referencedClasses: []
}),
globals.MaglevFixnumInline);



smalltalk.addClass('MaglevFloatInline', globals.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "hasDropDownDefault",
protocol: 'constants',
fn: function (){
var self=this;
return false;
},
args: [],
source: "hasDropDownDefault\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.MaglevFloatInline);

smalltalk.addMethod(
smalltalk.method({
selector: "isDraggableDefault",
protocol: 'constants',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isDraggableDefault\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.MaglevFloatInline);

smalltalk.addMethod(
smalltalk.method({
selector: "renderObjectActionsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self},
args: ["html"],
source: "renderObjectActionsOn: html",
messageSends: [],
referencedClasses: []
}),
globals.MaglevFloatInline);



smalltalk.addClass('MaglevHashInline', globals.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "maxDepth",
protocol: 'constants',
fn: function (){
var self=this;
return (2);
},
args: [],
source: "maxDepth\x0a\x09^ 2",
messageSends: [],
referencedClasses: []
}),
globals.MaglevHashInline);

smalltalk.addMethod(
smalltalk.method({
selector: "maxElements",
protocol: 'constants',
fn: function (){
var self=this;
return (3);
},
args: [],
source: "maxElements\x0a\x09^ 3",
messageSends: [],
referencedClasses: []
}),
globals.MaglevHashInline);

smalltalk.addMethod(
smalltalk.method({
selector: "renderLoadedObjectOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var showElements,maxElements;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$6,$5,$8,$7,$10,$12,$11,$9,$13,$16,$15,$14,$17;
maxElements=self._maxElements();
$1=maxElements;
$3=self._object();
$ctx1.sendIdx["object"]=1;
$2=_st($3)._elementsSize();
$ctx1.sendIdx["elementsSize"]=1;
showElements=_st($1)._min_($2);
self._renderText_withDropDownOn_("{",html);
$ctx1.sendIdx["renderText:withDropDownOn:"]=1;
_st(html)._with_(" ");
$ctx1.sendIdx["with:"]=1;
$4=self._isShort();
if(smalltalk.assert($4)){
_st(html)._with_(" ... ");
$ctx1.sendIdx["with:"]=2;
} else {
_st((1)._to_(showElements))._do_((function(idx){
var key,value;
return smalltalk.withContext(function($ctx2) {
$6=self._object();
$ctx2.sendIdx["object"]=2;
$5=_st($6)._at_(idx);
$ctx2.sendIdx["at:"]=1;
key=_st($5)._key();
key;
$8=self._object();
$ctx2.sendIdx["object"]=3;
$7=_st($8)._at_(idx);
value=_st($7)._value();
value;
$10=key;
$12=self._depth();
$ctx2.sendIdx["depth"]=1;
$11=_st($12).__plus((1));
$ctx2.sendIdx["+"]=1;
$9=_st($10)._inlineViewComponentWithDepth_($11);
$ctx2.sendIdx["inlineViewComponentWithDepth:"]=1;
_st(html)._with_($9);
$ctx2.sendIdx["with:"]=3;
_st(html)._with_("=>");
$ctx2.sendIdx["with:"]=4;
$13=_st(html)._with_(_st(value)._inlineViewComponentWithDepth_(_st(self._depth()).__plus((1))));
$ctx2.sendIdx["with:"]=5;
$13;
$14=_st(_st(idx).__lt(showElements))._or_((function(){
return smalltalk.withContext(function($ctx3) {
$16=self._object();
$ctx3.sendIdx["object"]=4;
$15=_st($16)._elementsSize();
$ctx3.sendIdx["elementsSize"]=2;
return _st($15).__gt(maxElements);
$ctx3.sendIdx[">"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
if(smalltalk.assert($14)){
return _st(html)._with_(" , ");
$ctx2.sendIdx["with:"]=6;
};
}, function($ctx2) {$ctx2.fillBlock({idx:idx,key:key,value:value},$ctx1,3)})}));
$17=_st(_st(self._object())._elementsSize()).__gt(maxElements);
if(smalltalk.assert($17)){
_st(html)._with_(" ... ");
$ctx1.sendIdx["with:"]=7;
};
};
_st(html)._with_(" ");
self._renderText_withDropDownOn_("}",html);
return self}, function($ctx1) {$ctx1.fill(self,"renderLoadedObjectOn:",{html:html,showElements:showElements,maxElements:maxElements},globals.MaglevHashInline)})},
args: ["html"],
source: "renderLoadedObjectOn: html\x0a\x09|showElements maxElements|\x0a\x09maxElements := self maxElements.\x0a\x09showElements := maxElements min: self object elementsSize.\x0a\x09self renderText: '{' withDropDownOn: html.\x0a\x09html with: ' '.\x0a\x09self isShort\x0a\x09\x09ifTrue: [html with: ' ... ']\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09(1 to: showElements) do: [:idx | |key value|\x0a\x09\x09\x09\x09key := (self object at: idx) key.\x0a\x09\x09\x09\x09value := (self object at: idx) value.\x0a\x09\x09\x09\x09html \x0a\x09\x09\x09\x09\x09with: (key inlineViewComponentWithDepth: self depth + 1);\x0a\x09\x09\x09\x09\x09with: '=>';\x0a\x09\x09\x09\x09\x09with: (value inlineViewComponentWithDepth: self depth + 1).\x0a\x09\x09\x09\x09(idx < showElements or: [self object elementsSize > maxElements])\x0a\x09\x09\x09\x09\x09ifTrue: [html with: ' , ']].\x0a\x09\x09\x09self object elementsSize > maxElements\x0a\x09\x09\x09\x09ifTrue: [html with: ' ... ']].\x0a\x09html with: ' '.\x0a\x09self renderText: '}' withDropDownOn: html.",
messageSends: ["maxElements", "min:", "elementsSize", "object", "renderText:withDropDownOn:", "with:", "ifTrue:ifFalse:", "isShort", "do:", "to:", "key", "at:", "value", "inlineViewComponentWithDepth:", "+", "depth", "ifTrue:", "or:", "<", ">"],
referencedClasses: []
}),
globals.MaglevHashInline);

smalltalk.addMethod(
smalltalk.method({
selector: "renderObjectWithDropDownOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderObjectOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderObjectWithDropDownOn:",{html:html},globals.MaglevHashInline)})},
args: ["html"],
source: "renderObjectWithDropDownOn: html\x0a\x09\x22Do not render a drop down menu around the whole object.\x22\x0a\x09self renderObjectOn: html.",
messageSends: ["renderObjectOn:"],
referencedClasses: []
}),
globals.MaglevHashInline);

smalltalk.addMethod(
smalltalk.method({
selector: "renderUnloadedObjectOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderText_withDropDownOn_("{",html);
$ctx1.sendIdx["renderText:withDropDownOn:"]=1;
_st(html)._with_("...");
self._renderText_withDropDownOn_("}",html);
return self}, function($ctx1) {$ctx1.fill(self,"renderUnloadedObjectOn:",{html:html},globals.MaglevHashInline)})},
args: ["html"],
source: "renderUnloadedObjectOn: html\x0a\x09self renderText: '{' withDropDownOn: html.\x0a\x09html with: '...'.\x0a\x09self renderText: '}' withDropDownOn: html.",
messageSends: ["renderText:withDropDownOn:", "with:"],
referencedClasses: []
}),
globals.MaglevHashInline);



smalltalk.addClass('MaglevMaglevRecordBaseInline', globals.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "renderObjectActionsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevIcon(){return globals.MaglevIcon||(typeof MaglevIcon=="undefined"?nil:MaglevIcon)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st(_st($MaglevIcon())._hdd())._caption_("MaglevRecord::Base"));
return self}, function($ctx1) {$ctx1.fill(self,"renderObjectActionsOn:",{html:html},globals.MaglevMaglevRecordBaseInline)})},
args: ["html"],
source: "renderObjectActionsOn: html\x0a\x09html with: (MaglevIcon hdd caption: 'MaglevRecord::Base')",
messageSends: ["with:", "caption:", "hdd"],
referencedClasses: ["MaglevIcon"]
}),
globals.MaglevMaglevRecordBaseInline);



smalltalk.addClass('MaglevModuleInline', globals.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "maxDepth",
protocol: 'constants',
fn: function (){
var self=this;
return (1);
},
args: [],
source: "maxDepth\x0a\x09^ 1",
messageSends: [],
referencedClasses: []
}),
globals.MaglevModuleInline);



smalltalk.addClass('MaglevClassInline', globals.MaglevModuleInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "maxDepth",
protocol: 'constants',
fn: function (){
var self=this;
return (1);
},
args: [],
source: "maxDepth\x0a\x09^ 1",
messageSends: [],
referencedClasses: []
}),
globals.MaglevClassInline);

smalltalk.addMethod(
smalltalk.method({
selector: "renderObjectActionsOn:",
protocol: 'constants',
fn: function (html){
var self=this;
function $MaglevIcon(){return globals.MaglevIcon||(typeof MaglevIcon=="undefined"?nil:MaglevIcon)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st(_st($MaglevIcon())._listAlt())._caption_("List class instances"));
return self}, function($ctx1) {$ctx1.fill(self,"renderObjectActionsOn:",{html:html},globals.MaglevClassInline)})},
args: ["html"],
source: "renderObjectActionsOn: html\x0a\x09html with: (MaglevIcon listAlt\x0a\x09\x09\x09caption: 'List class instances').",
messageSends: ["with:", "caption:", "listAlt"],
referencedClasses: ["MaglevIcon"]
}),
globals.MaglevClassInline);



smalltalk.addClass('MaglevNilClassInline', globals.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "hasDropDownDefault",
protocol: 'constants',
fn: function (){
var self=this;
return false;
},
args: [],
source: "hasDropDownDefault\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.MaglevNilClassInline);

smalltalk.addMethod(
smalltalk.method({
selector: "isDraggableDefault",
protocol: 'constants',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isDraggableDefault\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.MaglevNilClassInline);



smalltalk.addClass('MaglevRubyWorkspaceInline', globals.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "renderObjectActionsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevIcon(){return globals.MaglevIcon||(typeof MaglevIcon=="undefined"?nil:MaglevIcon)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st(_st($MaglevIcon())._terminal())._caption_("Workspace"));
return self}, function($ctx1) {$ctx1.fill(self,"renderObjectActionsOn:",{html:html},globals.MaglevRubyWorkspaceInline)})},
args: ["html"],
source: "renderObjectActionsOn: html\x0a\x09html with: (MaglevIcon terminal caption: 'Workspace').",
messageSends: ["with:", "caption:", "terminal"],
referencedClasses: ["MaglevIcon"]
}),
globals.MaglevRubyWorkspaceInline);



smalltalk.addClass('MaglevStringInline', globals.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "hasDropDownDefault",
protocol: 'constants',
fn: function (){
var self=this;
return false;
},
args: [],
source: "hasDropDownDefault\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.MaglevStringInline);

smalltalk.addMethod(
smalltalk.method({
selector: "isDraggableDefault",
protocol: 'constants',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isDraggableDefault\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.MaglevStringInline);



smalltalk.addClass('MaglevSymbolInline', globals.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "hasDropDownDefault",
protocol: 'constants',
fn: function (){
var self=this;
return false;
},
args: [],
source: "hasDropDownDefault\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.MaglevSymbolInline);

smalltalk.addMethod(
smalltalk.method({
selector: "isDraggableDefault",
protocol: 'constants',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isDraggableDefault\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.MaglevSymbolInline);



smalltalk.addClass('MaglevThreadInline', globals.MaglevObjectInline, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "maxInspection",
protocol: 'constants',
fn: function (){
var self=this;
return (25);
},
args: [],
source: "maxInspection\x0a\x09^ 25",
messageSends: [],
referencedClasses: []
}),
globals.MaglevThreadInline);

smalltalk.addMethod(
smalltalk.method({
selector: "renderObjectActionsOn:",
protocol: 'constants',
fn: function (html){
var self=this;
function $MaglevIconImage(){return globals.MaglevIconImage||(typeof MaglevIconImage=="undefined"?nil:MaglevIconImage)}
function $MaglevIcon(){return globals.MaglevIcon||(typeof MaglevIcon=="undefined"?nil:MaglevIcon)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$6,$5,$7,$9,$8,$10,$11;
$1=_st(self["@object"])._isRailsThread();
if(smalltalk.assert($1)){
_st(html)._with_(_st($MaglevIconImage())._rails());
$ctx1.sendIdx["with:"]=1;
};
$3=_st(self["@object"])._status();
$ctx1.sendIdx["status"]=1;
$2=_st($3).__eq("sleep");
$ctx1.sendIdx["="]=1;
if(smalltalk.assert($2)){
$4=_st(_st($MaglevIcon())._pause())._caption_("Thread status: sleeping");
$ctx1.sendIdx["caption:"]=1;
_st(html)._with_($4);
$ctx1.sendIdx["with:"]=2;
};
$6=_st(self["@object"])._status();
$ctx1.sendIdx["status"]=2;
$5=_st($6).__eq("false");
$ctx1.sendIdx["="]=2;
if(smalltalk.assert($5)){
$7=_st(_st($MaglevIcon())._stop())._caption_("Thread status: stopped (false)");
$ctx1.sendIdx["caption:"]=2;
_st(html)._with_($7);
$ctx1.sendIdx["with:"]=3;
};
$9=_st(self["@object"])._status();
$ctx1.sendIdx["status"]=3;
$8=_st($9).__eq("run");
$ctx1.sendIdx["="]=3;
if(smalltalk.assert($8)){
$10=_st(_st($MaglevIcon())._play())._caption_("Thread status: running");
$ctx1.sendIdx["caption:"]=3;
_st(html)._with_($10);
$ctx1.sendIdx["with:"]=4;
};
$11=_st(_st(self["@object"])._status()).__eq("aborting");
if(smalltalk.assert($11)){
_st(html)._with_(_st(_st($MaglevIcon())._trash())._caption_("Thread status: aborting"));
};
return self}, function($ctx1) {$ctx1.fill(self,"renderObjectActionsOn:",{html:html},globals.MaglevThreadInline)})},
args: ["html"],
source: "renderObjectActionsOn: html\x0a\x09object isRailsThread\x0a\x09\x09ifTrue: [html with: MaglevIconImage rails].\x0a\x09object status = 'sleep'\x0a\x09\x09ifTrue: [html with: (MaglevIcon pause\x0a\x09\x09\x09caption: 'Thread status: sleeping')].\x0a\x09object status = 'false'\x0a\x09\x09ifTrue: [html with: (MaglevIcon stop\x0a\x09\x09\x09caption: 'Thread status: stopped (false)')].\x0a\x09object status = 'run'\x0a\x09\x09ifTrue: [html with: (MaglevIcon play\x0a\x09\x09\x09caption: 'Thread status: running')].\x0a\x09object status = 'aborting'\x0a\x09\x09ifTrue: [html with: (MaglevIcon trash\x0a\x09\x09\x09caption: 'Thread status: aborting')].",
messageSends: ["ifTrue:", "isRailsThread", "with:", "rails", "=", "status", "caption:", "pause", "stop", "play", "trash"],
referencedClasses: ["MaglevIconImage", "MaglevIcon"]
}),
globals.MaglevThreadInline);



smalltalk.addClass('MaglevObjectInstancesView', globals.Widget, ['object', 'rangeFrom', 'rangeTo', 'instancesWaitBox', 'contentBox'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "currentInstVarNames",
protocol: 'accessing',
fn: function (){
var self=this;
var ivNames;
function $Set(){return globals.Set||(typeof Set=="undefined"?nil:Set)}
return smalltalk.withContext(function($ctx1) { 
var $1;
ivNames=_st($Set())._new();
_st(_st(self._rangeFrom())._to_(self._rangeTo()))._do_((function(idx){
var obj;
return smalltalk.withContext(function($ctx2) {
obj=self._objectAt_(idx);
obj;
return _st(obj)._instVarsDo_((function(key,value){
return smalltalk.withContext(function($ctx3) {
return _st(ivNames)._add_(_st(key)._string());
}, function($ctx3) {$ctx3.fillBlock({key:key,value:value},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({idx:idx,obj:obj},$ctx1,1)})}));
$1=ivNames;
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentInstVarNames",{ivNames:ivNames},globals.MaglevObjectInstancesView)})},
args: [],
source: "currentInstVarNames\x0a\x09|ivNames|\x0a\x09ivNames := Set new.\x0a\x09(self rangeFrom to: self rangeTo) do: [:idx | |obj|\x0a\x09\x09obj := self objectAt: idx.\x0a\x09\x09obj instVarsDo: [:key :value | ivNames add: key string]].\x0a\x09^ ivNames",
messageSends: ["new", "do:", "to:", "rangeFrom", "rangeTo", "objectAt:", "instVarsDo:", "add:", "string"],
referencedClasses: ["Set"]
}),
globals.MaglevObjectInstancesView);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPage",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._rangeFrom()).__slash((10)))._ceiled();
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentPage",{},globals.MaglevObjectInstancesView)})},
args: [],
source: "currentPage\x0a\x09^ (self rangeFrom / 10) ceiled",
messageSends: ["ceiled", "/", "rangeFrom"],
referencedClasses: []
}),
globals.MaglevObjectInstancesView);

smalltalk.addMethod(
smalltalk.method({
selector: "object",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@object"];
return $1;
},
args: [],
source: "object\x0a\x09^ object",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectInstancesView);

smalltalk.addMethod(
smalltalk.method({
selector: "object:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@object"]=anObject;
return self},
args: ["anObject"],
source: "object: anObject\x0a\x09object := anObject.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectInstancesView);

smalltalk.addMethod(
smalltalk.method({
selector: "objectAt:",
protocol: 'accessing',
fn: function (anIndex){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@object"])._instances())._at_(anIndex);
return $1;
}, function($ctx1) {$ctx1.fill(self,"objectAt:",{anIndex:anIndex},globals.MaglevObjectInstancesView)})},
args: ["anIndex"],
source: "objectAt: anIndex\x0a\x09^ object instances at: anIndex",
messageSends: ["at:", "instances"],
referencedClasses: []
}),
globals.MaglevObjectInstancesView);

smalltalk.addMethod(
smalltalk.method({
selector: "pages",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@object"])._instancesSize()).__slash((10)))._ceiled();
return $1;
}, function($ctx1) {$ctx1.fill(self,"pages",{},globals.MaglevObjectInstancesView)})},
args: [],
source: "pages\x0a\x09^ (object instancesSize / 10) ceiled",
messageSends: ["ceiled", "/", "instancesSize"],
referencedClasses: []
}),
globals.MaglevObjectInstancesView);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeFrom",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@rangeFrom"];
if(($receiver = $1) == nil || $receiver == null){
self["@rangeFrom"]=(1);
self["@rangeFrom"];
} else {
$1;
};
$2=self["@rangeFrom"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"rangeFrom",{},globals.MaglevObjectInstancesView)})},
args: [],
source: "rangeFrom\x0a\x09rangeFrom ifNil: [rangeFrom := 1].\x0a\x09^ rangeFrom",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MaglevObjectInstancesView);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeFrom:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@rangeFrom"]=anInteger;
return self},
args: ["anInteger"],
source: "rangeFrom: anInteger\x0a\x09rangeFrom := anInteger.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectInstancesView);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeTo",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@rangeTo"];
if(($receiver = $1) == nil || $receiver == null){
self["@rangeTo"]=(10);
self["@rangeTo"];
} else {
$1;
};
$2=_st(self["@object"])._instancesSize();
$ctx1.sendIdx["instancesSize"]=1;
if(($receiver = $2) == nil || $receiver == null){
$2;
} else {
self["@rangeTo"]=_st(self["@rangeTo"])._min_(_st(self["@object"])._instancesSize());
self["@rangeTo"];
};
$3=self["@rangeTo"];
return $3;
}, function($ctx1) {$ctx1.fill(self,"rangeTo",{},globals.MaglevObjectInstancesView)})},
args: [],
source: "rangeTo\x0a\x09rangeTo ifNil: [rangeTo := 10].\x0a\x09object instancesSize ifNotNil: [rangeTo := rangeTo min: object instancesSize].\x0a\x09^ rangeTo",
messageSends: ["ifNil:", "ifNotNil:", "instancesSize", "min:"],
referencedClasses: []
}),
globals.MaglevObjectInstancesView);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeTo:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@rangeTo"]=anInteger;
$1=_st(self["@object"])._instancesSize();
$ctx1.sendIdx["instancesSize"]=1;
if(($receiver = $1) == nil || $receiver == null){
$1;
} else {
self["@rangeTo"]=_st(self["@rangeTo"])._min_(_st(self["@object"])._instancesSize());
self["@rangeTo"];
};
return self}, function($ctx1) {$ctx1.fill(self,"rangeTo:",{anInteger:anInteger},globals.MaglevObjectInstancesView)})},
args: ["anInteger"],
source: "rangeTo: anInteger\x0a\x09rangeTo := anInteger.\x0a\x09object instancesSize ifNotNil: [rangeTo := rangeTo min: object instancesSize].",
messageSends: ["ifNotNil:", "instancesSize", "min:"],
referencedClasses: []
}),
globals.MaglevObjectInstancesView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderInstVarTable",
protocol: 'rendering',
fn: function (){
var self=this;
var html;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $MaglevInvalidObject(){return globals.MaglevInvalidObject||(typeof MaglevInvalidObject=="undefined"?nil:MaglevInvalidObject)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$6,$7,$8,$9,$3;
$1=_st(self["@contentBox"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
html=_st($HTMLCanvas())._onJQuery_($1);
_st(_st(self["@contentBox"])._asJQuery())._empty();
_st(self["@instancesWaitBox"])._show();
_st(self["@object"])._loadInstancesFrom_to_withCallback_(self._rangeFrom(),self._rangeTo(),(function(obj){
var ivNames;
return smalltalk.withContext(function($ctx2) {
_st(self["@instancesWaitBox"])._hide();
$ctx2.sendIdx["hide"]=1;
self["@object"]=obj;
self["@object"];
ivNames=self._currentInstVarNames();
ivNames;
$2=_st(html)._table();
_st($2)._class_("table table-bordered");
_st($2)._style_("margin-bottom: 0px;");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._thead())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$4=_st(html)._tr();
$ctx4.sendIdx["tr"]=1;
return _st($4)._with_((function(){
return smalltalk.withContext(function($ctx5) {
$5=_st(html)._th();
$ctx5.sendIdx["th"]=1;
_st($5)._with_("oop");
$ctx5.sendIdx["with:"]=4;
$6=_st(html)._th();
$ctx5.sendIdx["th"]=2;
_st($6)._with_("Object");
$ctx5.sendIdx["with:"]=5;
return _st(ivNames)._do_((function(ivName){
return smalltalk.withContext(function($ctx6) {
return _st(_st(html)._th())._with_(ivName);
$ctx6.sendIdx["with:"]=6;
}, function($ctx6) {$ctx6.fillBlock({ivName:ivName},$ctx5,5)})}));
$ctx5.sendIdx["do:"]=1;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)})}));
$ctx4.sendIdx["with:"]=3;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["with:"]=2;
return _st(_st(html)._tbody())._with_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(self["@object"])._instances())._do_((function(obi){
return smalltalk.withContext(function($ctx5) {
return _st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx6) {
$7=_st(html)._td();
$ctx6.sendIdx["td"]=1;
_st($7)._with_(_st(obi)._oop());
$ctx6.sendIdx["with:"]=9;
$8=_st(html)._td();
$ctx6.sendIdx["td"]=2;
$9=_st(obi)._inlineViewComponent();
$ctx6.sendIdx["inlineViewComponent"]=1;
_st($8)._with_($9);
$ctx6.sendIdx["with:"]=10;
return _st(ivNames)._do_((function(ivName){
return smalltalk.withContext(function($ctx7) {
return _st(_st(html)._td())._with_(_st(_st(obi)._instVarAt_ifAbsent_(ivName,_st($MaglevInvalidObject())._instance()))._inlineViewComponent());
}, function($ctx7) {$ctx7.fillBlock({ivName:ivName},$ctx6,9)})}));
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,8)})}));
$ctx5.sendIdx["with:"]=8;
}, function($ctx5) {$ctx5.fillBlock({obi:obi},$ctx4,7)})}));
$ctx4.sendIdx["do:"]=2;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,6)})}));
$ctx3.sendIdx["with:"]=7;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=1;
$3;
self._renderPaginationOn_(html);
return _st(self["@instancesWaitBox"])._hide();
}, function($ctx2) {$ctx2.fillBlock({obj:obj,ivNames:ivNames},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderInstVarTable",{html:html},globals.MaglevObjectInstancesView)})},
args: [],
source: "renderInstVarTable\x0a\x09|html|\x0a\x09html := HTMLCanvas onJQuery: contentBox asJQuery.\x0a\x09contentBox asJQuery empty.\x0a\x09instancesWaitBox show.\x0a\x09object \x0a\x09\x09loadInstancesFrom: self rangeFrom \x0a\x09\x09to: self rangeTo \x0a\x09\x09withCallback: [:obj | |ivNames|\x0a\x09\x09\x09instancesWaitBox hide.\x0a\x09\x09\x09object := obj.\x0a\x09\x09\x09ivNames := self currentInstVarNames.\x0a\x09\x09\x09html table\x0a\x09\x09\x09\x09class: 'table table-bordered';\x0a\x09\x09\x09\x09style: 'margin-bottom: 0px;';\x0a\x09\x09\x09\x09with: [html thead with: [\x0a\x09\x09\x09\x09\x09html tr with: [\x0a\x09\x09\x09\x09\x09\x09html th with: 'oop'.\x0a\x09\x09\x09\x09\x09\x09html th with: 'Object'.\x0a\x09\x09\x09\x09\x09\x09ivNames do: [:ivName | \x0a\x09\x09\x09\x09\x09\x09\x09html th with: ivName]]].\x0a\x09\x09\x09\x09\x09html tbody with: [\x0a\x09\x09\x09\x09\x09\x09object instances do: [:obi |\x0a\x09\x09\x09\x09\x09\x09\x09html tr with: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09html td with: obi oop.\x0a\x09\x09\x09\x09\x09\x09\x09\x09html td with: obi inlineViewComponent.\x0a\x09\x09\x09\x09\x09\x09\x09\x09ivNames do: [:ivName |\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09html td with: (obi instVarAt: ivName ifAbsent: MaglevInvalidObject instance) inlineViewComponent]]]]].\x0a\x09\x09\x09self renderPaginationOn: html.\x0a\x09\x09\x09instancesWaitBox hide].",
messageSends: ["onJQuery:", "asJQuery", "empty", "show", "loadInstancesFrom:to:withCallback:", "rangeFrom", "rangeTo", "hide", "currentInstVarNames", "class:", "table", "style:", "with:", "thead", "tr", "th", "do:", "tbody", "instances", "td", "oop", "inlineViewComponent", "instVarAt:ifAbsent:", "instance", "renderPaginationOn:"],
referencedClasses: ["HTMLCanvas", "MaglevInvalidObject"]
}),
globals.MaglevObjectInstancesView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevIcon(){return globals.MaglevIcon||(typeof MaglevIcon=="undefined"?nil:MaglevIcon)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
self["@instancesWaitBox"]=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_(_st($MaglevIcon())._wait());
$ctx2.sendIdx["with:"]=2;
$2=_st(html)._with_(" loading...");
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
self["@contentBox"]=_st(html)._div();
self._renderInstVarTable();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MaglevObjectInstancesView)})},
args: ["html"],
source: "renderOn: html\x0a\x09instancesWaitBox := html div\x0a\x09\x09with: [html\x0a\x09\x09\x09\x09with: MaglevIcon wait;\x0a\x09\x09\x09\x09with: ' loading...'].\x0a\x09contentBox := html div.\x0a\x09self renderInstVarTable.",
messageSends: ["with:", "div", "wait", "renderInstVarTable"],
referencedClasses: ["MaglevIcon"]
}),
globals.MaglevObjectInstancesView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderPaginationOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var firstPage,lastPage,currentPage;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$7,$9,$10,$12,$14,$13,$15,$11,$8,$6,$4;
currentPage=self._currentPage();
$1=_st(currentPage).__minus((5));
$ctx1.sendIdx["-"]=1;
firstPage=_st($1)._max_((1));
$2=_st(firstPage).__plus((10));
$ctx1.sendIdx["+"]=1;
lastPage=_st($2)._min_(self._pages());
$3=_st(html)._div();
_st($3)._style_("text-align: center;");
$ctx1.sendIdx["style:"]=1;
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$5=_st(html)._span();
_st($5)._class_("pagination");
$ctx2.sendIdx["class:"]=1;
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$7=_st(html)._ul();
_st($7)._style_("margin-top: 10px;");
$8=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(firstPage)._to_(lastPage))._do_((function(index){
var liClass;
return smalltalk.withContext(function($ctx5) {
$9=_st(currentPage).__eq(index);
if(smalltalk.assert($9)){
liClass="disabled";
liClass;
} else {
liClass="active";
liClass;
};
$10=_st(html)._li();
_st($10)._class_(liClass);
$11=_st($10)._with_((function(){
return smalltalk.withContext(function($ctx6) {
$12=_st(html)._a();
_st($12)._onClick_((function(){
return smalltalk.withContext(function($ctx7) {
$14=_st(_st(index).__minus((1))).__star((10));
$ctx7.sendIdx["*"]=1;
$13=_st($14).__plus((1));
self._rangeFrom_($13);
self._rangeTo_(_st(index).__star((10)));
return self._renderInstVarTable();
}, function($ctx7) {$ctx7.fillBlock({},$ctx6,8)})}));
$15=_st($12)._with_(_st(index)._asString());
return $15;
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,7)})}));
$ctx5.sendIdx["with:"]=4;
return $11;
}, function($ctx5) {$ctx5.fillBlock({index:index,liClass:liClass},$ctx4,4)})}));
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["with:"]=3;
return $8;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderPaginationOn:",{html:html,firstPage:firstPage,lastPage:lastPage,currentPage:currentPage},globals.MaglevObjectInstancesView)})},
args: ["html"],
source: "renderPaginationOn: html\x0a\x09|firstPage lastPage currentPage|\x0a\x09currentPage := self currentPage.\x0a\x09firstPage := currentPage - 5 max: 1.\x0a\x09lastPage := firstPage + 10 min: self pages.\x0a\x09html\x0a\x09\x09div\x0a\x09\x09style: 'text-align: center;';\x0a\x09\x09with: [html span\x0a\x09\x09\x09\x09class: 'pagination';\x0a\x09\x09\x09\x09with: [html ul\x0a\x09\x09\x09\x09\x09style: 'margin-top: 10px;';\x0a\x09\x09\x09\x09\x09with: [(firstPage to: lastPage) do: [:index | |liClass|\x0a\x09\x09\x09\x09\x09\x09currentPage = index\x0a\x09\x09\x09\x09\x09\x09\x09ifTrue: [liClass := 'disabled']\x0a\x09\x09\x09\x09\x09\x09\x09ifFalse: [liClass := 'active'].\x0a\x09\x09\x09\x09\x09\x09html li\x0a\x09\x09\x09\x09\x09\x09\x09class: liClass;\x0a\x09\x09\x09\x09\x09\x09\x09with: [html a\x0a\x09\x09\x09\x09\x09\x09\x09\x09onClick: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09self rangeFrom: (index - 1) * 10 + 1.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09self rangeTo: index * 10.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09self renderInstVarTable];\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: index asString]]]]].",
messageSends: ["currentPage", "max:", "-", "min:", "+", "pages", "style:", "div", "with:", "class:", "span", "ul", "do:", "to:", "ifTrue:ifFalse:", "=", "li", "onClick:", "a", "rangeFrom:", "*", "rangeTo:", "renderInstVarTable", "asString"],
referencedClasses: []
}),
globals.MaglevObjectInstancesView);



smalltalk.addClass('MaglevTable', globals.Widget, ['object', 'collectionName', 'rangeFrom', 'rangeTo', 'isAssociationDictionary', 'tableBody', 'currentPage', 'pageListItems', 'pagination'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "collection",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@object"])._perform_(self["@collectionName"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"collection",{},globals.MaglevTable)})},
args: [],
source: "collection\x0a\x09^ object perform: collectionName",
messageSends: ["perform:"],
referencedClasses: []
}),
globals.MaglevTable);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionName",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@collectionName"];
return $1;
},
args: [],
source: "collectionName\x0a\x09^ collectionName",
messageSends: [],
referencedClasses: []
}),
globals.MaglevTable);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@collectionName"]=aString;
return self},
args: ["aString"],
source: "collectionName: aString\x0a\x09collectionName := aString",
messageSends: [],
referencedClasses: []
}),
globals.MaglevTable);

smalltalk.addMethod(
smalltalk.method({
selector: "collectionSize",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@object"])._perform_(_st(self["@collectionName"]).__comma("Size"));
return $1;
}, function($ctx1) {$ctx1.fill(self,"collectionSize",{},globals.MaglevTable)})},
args: [],
source: "collectionSize\x0a\x09^ object perform: collectionName, 'Size'",
messageSends: ["perform:", ","],
referencedClasses: []
}),
globals.MaglevTable);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPage",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@currentPage"];
if(($receiver = $1) == nil || $receiver == null){
self["@currentPage"]=(1);
self["@currentPage"];
} else {
$1;
};
$2=self["@currentPage"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"currentPage",{},globals.MaglevTable)})},
args: [],
source: "currentPage\x0a\x09currentPage ifNil: [currentPage := 1].\x0a\x09^ currentPage",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MaglevTable);

smalltalk.addMethod(
smalltalk.method({
selector: "isAssociationDictionary",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@isAssociationDictionary"];
if(($receiver = $1) == nil || $receiver == null){
self["@isAssociationDictionary"]=false;
self["@isAssociationDictionary"];
} else {
$1;
};
$2=self["@isAssociationDictionary"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"isAssociationDictionary",{},globals.MaglevTable)})},
args: [],
source: "isAssociationDictionary\x0a\x09isAssociationDictionary ifNil: [isAssociationDictionary := false].\x0a\x09^ isAssociationDictionary",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MaglevTable);

smalltalk.addMethod(
smalltalk.method({
selector: "isAssociationDictionary:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@isAssociationDictionary"]=aBoolean;
return self},
args: ["aBoolean"],
source: "isAssociationDictionary: aBoolean\x0a\x09isAssociationDictionary := aBoolean.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevTable);

smalltalk.addMethod(
smalltalk.method({
selector: "object",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@object"];
return $1;
},
args: [],
source: "object\x0a\x09^ object",
messageSends: [],
referencedClasses: []
}),
globals.MaglevTable);

smalltalk.addMethod(
smalltalk.method({
selector: "object:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@object"]=anObject;
return self},
args: ["anObject"],
source: "object: anObject\x0a\x09object := anObject.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevTable);

smalltalk.addMethod(
smalltalk.method({
selector: "pageSize",
protocol: 'accessing',
fn: function (){
var self=this;
return (10);
},
args: [],
source: "pageSize\x0a\x09^ 10",
messageSends: [],
referencedClasses: []
}),
globals.MaglevTable);

smalltalk.addMethod(
smalltalk.method({
selector: "pages",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._collectionSize()).__slash(self._pageSize()))._ceiled();
return $1;
}, function($ctx1) {$ctx1.fill(self,"pages",{},globals.MaglevTable)})},
args: [],
source: "pages\x0a\x09^ (self collectionSize / self pageSize) ceiled",
messageSends: ["ceiled", "/", "collectionSize", "pageSize"],
referencedClasses: []
}),
globals.MaglevTable);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeFrom",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@rangeFrom"];
if(($receiver = $1) == nil || $receiver == null){
self["@rangeFrom"]=(1);
self["@rangeFrom"];
} else {
$1;
};
$2=self["@rangeFrom"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"rangeFrom",{},globals.MaglevTable)})},
args: [],
source: "rangeFrom\x0a\x09rangeFrom ifNil: [rangeFrom := 1].\x0a\x09^ rangeFrom",
messageSends: ["ifNil:"],
referencedClasses: []
}),
globals.MaglevTable);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeFrom:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@rangeFrom"]=anInteger;
return self},
args: ["anInteger"],
source: "rangeFrom: anInteger\x0a\x09rangeFrom := anInteger.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevTable);

smalltalk.addMethod(
smalltalk.method({
selector: "rangeTo",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._rangeFrom()).__plus(self._pageSize())).__minus((1)))._min_(self._collectionSize());
return $1;
}, function($ctx1) {$ctx1.fill(self,"rangeTo",{},globals.MaglevTable)})},
args: [],
source: "rangeTo\x0a\x09^ self rangeFrom + self pageSize - 1 min: self collectionSize",
messageSends: ["min:", "-", "+", "rangeFrom", "pageSize", "collectionSize"],
referencedClasses: []
}),
globals.MaglevTable);

smalltalk.addMethod(
smalltalk.method({
selector: "renderAssociation:to:on:",
protocol: 'rendering',
fn: function (key,value,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._td();
$ctx2.sendIdx["td"]=1;
$2=_st(key)._inlineViewComponent();
$ctx2.sendIdx["inlineViewComponent"]=1;
_st($1)._with_($2);
$ctx2.sendIdx["with:"]=2;
return _st(_st(html)._td())._with_(_st(value)._inlineViewComponent());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderAssociation:to:on:",{key:key,value:value,html:html},globals.MaglevTable)})},
args: ["key", "value", "html"],
source: "renderAssociation: key to: value on: html\x0a\x09html tr with: [\x0a\x09\x09html td with: key inlineViewComponent.\x0a\x09\x09html td with: value inlineViewComponent].",
messageSends: ["with:", "tr", "td", "inlineViewComponent"],
referencedClasses: []
}),
globals.MaglevTable);

smalltalk.addMethod(
smalltalk.method({
selector: "renderAssociationDictionaryBodyOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(self._rangeFrom())._to_(self._rangeTo()))._do_((function(idx){
var obj;
return smalltalk.withContext(function($ctx2) {
obj=_st(self._collection())._at_(idx);
obj;
return _st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$1=_st(html)._td();
$ctx3.sendIdx["td"]=1;
$2=_st(_st(obj)._key())._inlineViewComponent();
$ctx3.sendIdx["inlineViewComponent"]=1;
_st($1)._with_($2);
$ctx3.sendIdx["with:"]=2;
return _st(_st(html)._td())._with_(_st(_st(obj)._value())._inlineViewComponent());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=1;
}, function($ctx2) {$ctx2.fillBlock({idx:idx,obj:obj},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderAssociationDictionaryBodyOn:",{html:html},globals.MaglevTable)})},
args: ["html"],
source: "renderAssociationDictionaryBodyOn: html\x0a\x09(self rangeFrom to: self rangeTo) do: [:idx | |obj|\x0a\x09\x09obj := self collection at: idx.\x0a\x09\x09html tr with: [\x0a\x09\x09\x09html td with: obj key inlineViewComponent.\x0a\x09\x09\x09html td with: obj value inlineViewComponent]].",
messageSends: ["do:", "to:", "rangeFrom", "rangeTo", "at:", "collection", "with:", "tr", "td", "inlineViewComponent", "key", "value"],
referencedClasses: []
}),
globals.MaglevTable);

smalltalk.addMethod(
smalltalk.method({
selector: "renderDictionaryBodyOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(self._rangeFrom())._to_(self._rangeTo()))._do_((function(idx){
var obj;
return smalltalk.withContext(function($ctx2) {
obj=_st(self._collection())._at_(idx);
obj;
return _st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$1=_st(html)._td();
$ctx3.sendIdx["td"]=1;
$2=_st(idx)._inlineViewComponent();
$ctx3.sendIdx["inlineViewComponent"]=1;
_st($1)._with_($2);
$ctx3.sendIdx["with:"]=2;
return _st(_st(html)._td())._with_(_st(obj)._inlineViewComponent());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=1;
}, function($ctx2) {$ctx2.fillBlock({idx:idx,obj:obj},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderDictionaryBodyOn:",{html:html},globals.MaglevTable)})},
args: ["html"],
source: "renderDictionaryBodyOn: html\x0a\x09(self rangeFrom to: self rangeTo) do: [:idx | |obj|\x0a\x09\x09obj := self collection at: idx.\x0a\x09\x09html tr with: [\x0a\x09\x09\x09html td with: idx inlineViewComponent.\x0a\x09\x09\x09html td with: obj inlineViewComponent]].",
messageSends: ["do:", "to:", "rangeFrom", "rangeTo", "at:", "collection", "with:", "tr", "td", "inlineViewComponent"],
referencedClasses: []
}),
globals.MaglevTable);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var pagClass;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$6,$7,$5;
$1=_st(self._pages()).__eq((1));
if(smalltalk.assert($1)){
pagClass="display: none;";
pagClass;
} else {
pagClass="";
pagClass;
};
$2=_st(html)._table();
_st($2)._class_("table table-bordered");
$ctx1.sendIdx["class:"]=1;
_st($2)._style_("margin-bottom: 0px;");
$ctx1.sendIdx["style:"]=1;
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self["@tableBody"]=_st(html)._tbody();
return self["@tableBody"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["with:"]=1;
$4=_st(html)._div();
_st($4)._style_("text-align: center;");
$ctx1.sendIdx["style:"]=2;
$5=_st($4)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$6=_st(html)._span();
_st($6)._class_("pagination");
$7=_st($6)._style_(pagClass);
self["@pagination"]=$7;
return self["@pagination"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
self._renderPagination();
self._renderPage_((1));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,pagClass:pagClass},globals.MaglevTable)})},
args: ["html"],
source: "renderOn: html\x0a\x09|pagClass|\x0a\x09self pages = 1 \x0a\x09\x09ifTrue: [pagClass := 'display: none;']\x0a\x09\x09ifFalse: [pagClass := ''].\x0a\x09html table\x0a\x09\x09class: 'table table-bordered';\x0a\x09\x09style: 'margin-bottom: 0px;';\x0a\x09\x09with: [tableBody := html tbody].\x0a\x09html div\x0a\x09\x09style: 'text-align: center;';\x0a\x09\x09with: [pagination := html span\x0a\x09\x09\x09class: 'pagination';\x0a\x09\x09\x09style: pagClass].\x0a\x09self renderPagination.\x0a\x09self renderPage: 1.",
messageSends: ["ifTrue:ifFalse:", "=", "pages", "class:", "table", "style:", "with:", "tbody", "div", "span", "renderPagination", "renderPage:"],
referencedClasses: []
}),
globals.MaglevTable);

smalltalk.addMethod(
smalltalk.method({
selector: "renderPage:",
protocol: 'rendering',
fn: function (anInteger){
var self=this;
var html;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $MaglevIcon(){return globals.MaglevIcon||(typeof MaglevIcon=="undefined"?nil:MaglevIcon)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
self["@currentPage"]=anInteger;
$1=_st(self["@tableBody"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
html=_st($HTMLCanvas())._onJQuery_($1);
$ctx1.sendIdx["onJQuery:"]=1;
self["@rangeFrom"]=_st(_st(_st(anInteger).__minus((1))).__star(self._pageSize())).__plus((1));
$2=_st(self["@tableBody"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=2;
_st($2)._empty();
$ctx1.sendIdx["empty"]=1;
$3=html;
_st($3)._with_(_st($MaglevIcon())._wait());
$ctx1.sendIdx["with:"]=1;
$4=_st($3)._with_(" loading...");
self._renderPagination();
_st(self["@object"])._ensureIsLoaded_from_to_withCallback_(self["@collectionName"],self["@rangeFrom"],self._rangeTo(),(function(){
return smalltalk.withContext(function($ctx2) {
$5=_st(self["@tableBody"])._asJQuery();
$ctx2.sendIdx["asJQuery"]=3;
_st($5)._empty();
return self._renderTableBodyOn_(_st($HTMLCanvas())._onJQuery_(_st(self["@tableBody"])._asJQuery()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderPage:",{anInteger:anInteger,html:html},globals.MaglevTable)})},
args: ["anInteger"],
source: "renderPage: anInteger\x0a\x09|html|\x0a\x09currentPage := anInteger.\x0a\x09html := HTMLCanvas onJQuery: tableBody asJQuery.\x0a\x09rangeFrom := anInteger - 1 * self pageSize + 1.\x0a\x09tableBody asJQuery empty.\x0a\x09html \x0a\x09\x09with: MaglevIcon wait;\x0a\x09\x09with: ' loading...'.\x0a\x09self renderPagination.\x0a\x09object \x0a\x09\x09ensureIsLoaded: collectionName \x0a\x09\x09from: rangeFrom \x0a\x09\x09to: self rangeTo \x0a\x09\x09withCallback: [\x0a\x09\x09\x09tableBody asJQuery empty.\x0a\x09\x09\x09self renderTableBodyOn: (HTMLCanvas onJQuery: tableBody asJQuery)].",
messageSends: ["onJQuery:", "asJQuery", "+", "*", "-", "pageSize", "empty", "with:", "wait", "renderPagination", "ensureIsLoaded:from:to:withCallback:", "rangeTo", "renderTableBodyOn:"],
referencedClasses: ["HTMLCanvas", "MaglevIcon"]
}),
globals.MaglevTable);

smalltalk.addMethod(
smalltalk.method({
selector: "renderPagination",
protocol: 'rendering',
fn: function (){
var self=this;
var firstPage,lastPage,html;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$7,$8,$6,$3;
self["@pageListItems"]=_st($Dictionary())._new();
firstPage=_st(_st(self._currentPage()).__minus((5)))._max_((1));
lastPage=_st(_st(firstPage).__plus((10)))._min_(self._pages());
$1=_st(self["@pagination"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._empty();
html=_st($HTMLCanvas())._onJQuery_(_st(self["@pagination"])._asJQuery());
_st(self["@pagination"])._with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(html)._ul();
_st($2)._style_("margin-top: 10px;");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(firstPage)._to_(lastPage))._do_((function(index){
var liClass;
return smalltalk.withContext(function($ctx4) {
$4=_st(self["@currentPage"]).__eq(index);
if(smalltalk.assert($4)){
liClass="disabled";
liClass;
} else {
liClass="active";
liClass;
};
$5=_st(html)._li();
_st($5)._class_(liClass);
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx5) {
$7=_st(html)._a();
_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx6) {
return self._renderPage_(index);
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,7)})}));
$8=_st($7)._with_(_st(index)._asString());
return $8;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,6)})}));
$ctx4.sendIdx["with:"]=3;
return $6;
}, function($ctx4) {$ctx4.fillBlock({index:index,liClass:liClass},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderPagination",{firstPage:firstPage,lastPage:lastPage,html:html},globals.MaglevTable)})},
args: [],
source: "renderPagination\x0a\x09|firstPage lastPage html|\x0a\x09pageListItems := Dictionary new.\x0a\x09firstPage := self currentPage - 5 max: 1.\x0a\x09lastPage := firstPage + 10 min: self pages.\x0a\x09pagination asJQuery empty.\x0a\x09html := (HTMLCanvas onJQuery: pagination asJQuery).\x0a\x09pagination\x0a\x09\x09with: [html ul\x0a\x09\x09\x09style: 'margin-top: 10px;';\x0a\x09\x09\x09with: [(firstPage to: lastPage) do: [:index | |liClass|\x0a\x09\x09\x09\x09currentPage = index\x0a\x09\x09\x09\x09\x09ifTrue: [liClass := 'disabled']\x0a\x09\x09\x09\x09\x09ifFalse: [liClass := 'active'].\x0a\x09\x09\x09\x09html li\x0a\x09\x09\x09\x09\x09class: liClass;\x0a\x09\x09\x09\x09\x09with: [html a\x0a\x09\x09\x09\x09\x09\x09onClick: [self renderPage: index];\x0a\x09\x09\x09\x09\x09\x09with: index asString]]]].",
messageSends: ["new", "max:", "-", "currentPage", "min:", "+", "pages", "empty", "asJQuery", "onJQuery:", "with:", "style:", "ul", "do:", "to:", "ifTrue:ifFalse:", "=", "class:", "li", "onClick:", "a", "renderPage:", "asString"],
referencedClasses: ["Dictionary", "HTMLCanvas"]
}),
globals.MaglevTable);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTableBodyOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isAssociationDictionary();
if(smalltalk.assert($1)){
self._renderAssociationDictionaryBodyOn_(html);
return self;
} else {
self._renderDictionaryBodyOn_(html);
return self;
};
return self}, function($ctx1) {$ctx1.fill(self,"renderTableBodyOn:",{html:html},globals.MaglevTable)})},
args: ["html"],
source: "renderTableBodyOn: html\x0a\x09self isAssociationDictionary \x0a\x09\x09\x09ifTrue: [self renderAssociationDictionaryBodyOn: html. ^ self]\x0a\x09\x09\x09ifFalse: [self renderDictionaryBodyOn: html. ^ self].",
messageSends: ["ifTrue:ifFalse:", "isAssociationDictionary", "renderAssociationDictionaryBodyOn:", "renderDictionaryBodyOn:"],
referencedClasses: []
}),
globals.MaglevTable);


smalltalk.addMethod(
smalltalk.method({
selector: "newAssociationDictFor:with:",
protocol: 'instance creation',
fn: function (anObject,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._object_(anObject);
_st($2)._collectionName_(aString);
_st($2)._isAssociationDictionary_(true);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newAssociationDictFor:with:",{anObject:anObject,aString:aString},globals.MaglevTable.klass)})},
args: ["anObject", "aString"],
source: "newAssociationDictFor: anObject with: aString\x0a\x09^ self basicNew\x0a\x09\x09object: anObject;\x0a\x09\x09collectionName: aString;\x0a\x09\x09isAssociationDictionary: true;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["object:", "basicNew", "collectionName:", "isAssociationDictionary:", "initialize", "yourself"],
referencedClasses: []
}),
globals.MaglevTable.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newFor:with:",
protocol: 'instance creation',
fn: function (anObject,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._basicNew();
_st($2)._object_(anObject);
_st($2)._collectionName_(aString);
_st($2)._initialize();
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFor:with:",{anObject:anObject,aString:aString},globals.MaglevTable.klass)})},
args: ["anObject", "aString"],
source: "newFor: anObject with: aString\x0a\x09^ self basicNew\x0a\x09\x09object: anObject;\x0a\x09\x09collectionName: aString;\x0a\x09\x09initialize;\x0a\x09\x09yourself",
messageSends: ["object:", "basicNew", "collectionName:", "initialize", "yourself"],
referencedClasses: []
}),
globals.MaglevTable.klass);


smalltalk.addClass('MaglevWindow', globals.Widget, ['container', 'navigationItem'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "appendToWorkspace",
protocol: 'rendering',
fn: function (){
var self=this;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self._renderOn_(_st($HTMLCanvas())._onJQuery_("#workspace"._asJQuery()));
return self}, function($ctx1) {$ctx1.fill(self,"appendToWorkspace",{},globals.MaglevWindow)})},
args: [],
source: "appendToWorkspace\x0a   self renderOn: (HTMLCanvas onJQuery: '#workspace' asJQuery).",
messageSends: ["renderOn:", "onJQuery:", "asJQuery"],
referencedClasses: ["HTMLCanvas"]
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@container"])._asJQuery())._empty();
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},globals.MaglevWindow)})},
args: [],
source: "clear\x0a\x09container asJQuery empty.",
messageSends: ["empty", "asJQuery"],
referencedClasses: []
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "closeWindow",
protocol: 'interactions',
fn: function (){
var self=this;
function $MaglevJsPlumb(){return globals.MaglevJsPlumb||(typeof MaglevJsPlumb=="undefined"?nil:MaglevJsPlumb)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@container"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($MaglevJsPlumb())._deleteEndpointsFor_($1);
_st(_st(self["@container"])._asJQuery())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"closeWindow",{},globals.MaglevWindow)})},
args: [],
source: "closeWindow\x0a\x09MaglevJsPlumb deleteEndpointsFor: container asJQuery.\x0a\x09container asJQuery remove.",
messageSends: ["deleteEndpointsFor:", "asJQuery", "remove"],
referencedClasses: ["MaglevJsPlumb"]
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "connectTo:as:with:",
protocol: 'interactions',
fn: function (aWindow,type,caption){
var self=this;
function $MaglevJsPlumb(){return globals.MaglevJsPlumb||(typeof MaglevJsPlumb=="undefined"?nil:MaglevJsPlumb)}
return smalltalk.withContext(function($ctx1) { 
_st($MaglevJsPlumb())._connectWindow_to_as_with_(self,aWindow,type,caption);
return self}, function($ctx1) {$ctx1.fill(self,"connectTo:as:with:",{aWindow:aWindow,type:type,caption:caption},globals.MaglevWindow)})},
args: ["aWindow", "type", "caption"],
source: "connectTo: aWindow as: type with: caption\x0a\x09MaglevJsPlumb connectWindow: self to: aWindow as: type with: caption.",
messageSends: ["connectWindow:to:as:with:"],
referencedClasses: ["MaglevJsPlumb"]
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "connectTo:with:",
protocol: 'interactions',
fn: function (aWindow,parameters){
var self=this;
function $MaglevJsPlumb(){return globals.MaglevJsPlumb||(typeof MaglevJsPlumb=="undefined"?nil:MaglevJsPlumb)}
return smalltalk.withContext(function($ctx1) { 
_st($MaglevJsPlumb())._connectWindow_to_with_(self,aWindow,parameters);
return self}, function($ctx1) {$ctx1.fill(self,"connectTo:with:",{aWindow:aWindow,parameters:parameters},globals.MaglevWindow)})},
args: ["aWindow", "parameters"],
source: "connectTo: aWindow with: parameters\x0a\x09MaglevJsPlumb connectWindow: self to: aWindow with: parameters.",
messageSends: ["connectWindow:to:with:"],
referencedClasses: ["MaglevJsPlumb"]
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "container",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@container"];
return $1;
},
args: [],
source: "container\x0a\x09^ container",
messageSends: [],
referencedClasses: []
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "isWaitingWindow",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isWaitingWindow\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "left:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@container"])._left_(aValue);
return self}, function($ctx1) {$ctx1.fill(self,"left:",{aValue:aValue},globals.MaglevWindow)})},
args: ["aValue"],
source: "left: aValue\x0a\x09container left: aValue.",
messageSends: ["left:"],
referencedClasses: []
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "moveToFront",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@container"])._asJQuery())._css_data_("z-index",_st(_st(self._class())._highestZIndex()).__plus((1)));
return self}, function($ctx1) {$ctx1.fill(self,"moveToFront",{},globals.MaglevWindow)})},
args: [],
source: "moveToFront\x0a\x09container asJQuery css: 'z-index' data: self class highestZIndex + 1.",
messageSends: ["css:data:", "asJQuery", "+", "highestZIndex", "class"],
referencedClasses: []
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "navigationItem",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@navigationItem"];
return $1;
},
args: [],
source: "navigationItem\x0a\x09^ navigationItem",
messageSends: [],
referencedClasses: []
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "navigationItem:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@navigationItem"]=anObject;
return self},
args: ["anObject"],
source: "navigationItem: anObject\x0a\x09navigationItem := anObject.",
messageSends: [],
referencedClasses: []
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareWindow",
protocol: 'interactions',
fn: function (){
var self=this;
function $MaglevJsPlumb(){return globals.MaglevJsPlumb||(typeof MaglevJsPlumb=="undefined"?nil:MaglevJsPlumb)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st($MaglevJsPlumb())._prepareObject_(_st(self["@container"])._asJQuery());
$1=self["@container"];
_st($1)._onMouseEnter_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@container"])._removeClass_("window-mouse-out");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$2=_st($1)._onMouseLeave_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@container"])._addClass_("window-mouse-out");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"prepareWindow",{},globals.MaglevWindow)})},
args: [],
source: "prepareWindow\x0a\x09MaglevJsPlumb prepareObject: (container asJQuery).\x0a\x09container\x0a\x09\x09onMouseEnter: [container removeClass: 'window-mouse-out'];\x0a\x09\x09onMouseLeave: [container addClass: 'window-mouse-out'].",
messageSends: ["prepareObject:", "asJQuery", "onMouseEnter:", "removeClass:", "onMouseLeave:", "addClass:"],
referencedClasses: ["MaglevJsPlumb"]
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCloseButtonOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevIcon(){return globals.MaglevIcon||(typeof MaglevIcon=="undefined"?nil:MaglevIcon)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._span();
_st($1)._class_("display-inline-block");
$ctx1.sendIdx["class:"]=1;
_st($1)._style_("float: right; margin-top: 3px; margin-left: 3px;");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._a();
_st($3)._href_("#");
_st($3)._class_("window-close-button");
_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._closeWindow();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$4=_st($3)._with_(_st($MaglevIcon())._remove());
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderCloseButtonOn:",{html:html},globals.MaglevWindow)})},
args: ["html"],
source: "renderCloseButtonOn: html\x0a\x09html span\x0a\x09\x09class: 'display-inline-block';\x0a\x09\x09style: 'float: right; margin-top: 3px; margin-left: 3px;';\x0a\x09\x09with: [html a\x0a\x09\x09\x09\x09href: '#';\x0a\x09\x09\x09\x09class: 'window-close-button';\x0a\x09\x09\x09\x09onClick: [self closeWindow];\x0a\x09\x09\x09\x09with: MaglevIcon remove].",
messageSends: ["class:", "span", "style:", "with:", "href:", "a", "onClick:", "closeWindow", "remove"],
referencedClasses: ["MaglevIcon"]
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeightPlaceholderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._span();
_st($1)._style_("visibility: hidden;");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._a();
_st($3)._class_("btn");
$4=_st($3)._with_("a");
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderHeightPlaceholderOn:",{html:html},globals.MaglevWindow)})},
args: ["html"],
source: "renderHeightPlaceholderOn: html\x0a\x09html span\x0a\x09\x09style: 'visibility: hidden;';\x0a\x09\x09with: [\x0a\x09\x09\x09html a\x0a\x09\x09\x09\x09class: 'btn';\x0a\x09\x09\x09\x09with: 'a'].",
messageSends: ["style:", "span", "with:", "class:", "a"],
referencedClasses: []
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHorziontalLineOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._hr())._style_("margin: 10px;");
return self}, function($ctx1) {$ctx1.fill(self,"renderHorziontalLineOn:",{html:html},globals.MaglevWindow)})},
args: ["html"],
source: "renderHorziontalLineOn: html\x0a\x09html hr style: 'margin: 10px;'.",
messageSends: ["style:", "hr"],
referencedClasses: []
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderNavigationOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_("New window");
return self}, function($ctx1) {$ctx1.fill(self,"renderNavigationOn:",{html:html},globals.MaglevWindow)})},
args: ["html"],
source: "renderNavigationOn: html\x0a\x09html with: 'New window'.",
messageSends: ["with:"],
referencedClasses: []
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
$1=self["@container"];
if(($receiver = $1) == nil || $receiver == null){
self["@container"]=_st(html)._div();
$ctx1.sendIdx["div"]=1;
self["@container"];
self._prepareWindow();
} else {
$1;
};
$2=self["@container"];
_st($2)._class_("component window");
$ctx1.sendIdx["class:"]=1;
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(html)._div();
_st($4)._class_("nowrap");
$5=_st($4)._with_((function(){
return smalltalk.withContext(function($ctx3) {
self._renderWindowTitleOn_(html);
return self._renderWindowContentOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
return $5;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=1;
_st(self["@container"])._onMouseDown_((function(){
return smalltalk.withContext(function($ctx2) {
return self._moveToFront();
$ctx2.sendIdx["moveToFront"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
self._moveToFront();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MaglevWindow)})},
args: ["html"],
source: "renderOn: html\x0a\x09container ifNil: [\x0a\x09\x09container := html div.\x0a\x09\x09self prepareWindow].\x0a\x09container\x0a\x09\x09class: 'component window';\x0a\x09\x09with: [\x0a\x09\x09\x09html div\x0a\x09\x09\x09\x09class: 'nowrap';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09self renderWindowTitleOn: html.\x0a\x09\x09\x09\x09\x09self renderWindowContentOn: html]].\x0a\x09container onMouseDown: [self moveToFront].\x0a\x09self moveToFront.",
messageSends: ["ifNil:", "div", "prepareWindow", "class:", "with:", "renderWindowTitleOn:", "renderWindowContentOn:", "onMouseDown:", "moveToFront"],
referencedClasses: []
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderReplace",
protocol: 'rendering',
fn: function (){
var self=this;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self._renderOn_(_st($HTMLCanvas())._onJQuery_(_st(self["@container"])._asJQuery()));
return self}, function($ctx1) {$ctx1.fill(self,"renderReplace",{},globals.MaglevWindow)})},
args: [],
source: "renderReplace\x0a\x09self renderOn: (HTMLCanvas onJQuery: container asJQuery).",
messageSends: ["renderOn:", "onJQuery:", "asJQuery"],
referencedClasses: ["HTMLCanvas"]
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderWindowContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self},
args: ["html"],
source: "renderWindowContentOn: html",
messageSends: [],
referencedClasses: []
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderWindowTitleContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_("A new window");
self._renderHeightPlaceholderOn_(html);
self._renderCloseButtonOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderWindowTitleContentOn:",{html:html},globals.MaglevWindow)})},
args: ["html"],
source: "renderWindowTitleContentOn: html\x0a\x09html with: 'A new window'.\x0a\x09self renderHeightPlaceholderOn: html.\x0a\x09self renderCloseButtonOn: html.",
messageSends: ["with:", "renderHeightPlaceholderOn:", "renderCloseButtonOn:"],
referencedClasses: []
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderWindowTitleOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("window-title");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._span();
_st($3)._class_("window-title-content");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return self._renderWindowTitleContentOn_(html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderWindowTitleOn:",{html:html},globals.MaglevWindow)})},
args: ["html"],
source: "renderWindowTitleOn: html\x0a\x09html div\x0a\x09\x09class: 'window-title';\x0a\x09\x09with: [html span\x0a\x09\x09\x09\x09class: 'window-title-content';\x0a\x09\x09\x09\x09with: [self renderWindowTitleContentOn: html]].",
messageSends: ["class:", "div", "with:", "span", "renderWindowTitleContentOn:"],
referencedClasses: []
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "replace:",
protocol: 'interactions',
fn: function (aWindow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aWindow)._clear();
self["@container"]=_st(aWindow)._container();
return self}, function($ctx1) {$ctx1.fill(self,"replace:",{aWindow:aWindow},globals.MaglevWindow)})},
args: ["aWindow"],
source: "replace: aWindow\x0a\x09aWindow clear.\x0a\x09container := aWindow container.",
messageSends: ["clear", "container"],
referencedClasses: []
}),
globals.MaglevWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "top:",
protocol: 'attributes',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@container"])._top_(aValue);
return self}, function($ctx1) {$ctx1.fill(self,"top:",{aValue:aValue},globals.MaglevWindow)})},
args: ["aValue"],
source: "top: aValue\x0a\x09container top: aValue.",
messageSends: ["top:"],
referencedClasses: []
}),
globals.MaglevWindow);


smalltalk.addMethod(
smalltalk.method({
selector: "highestZIndex",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var indexHighest = 0;
	$('.window').each(function(){
		var indexCurrent = parseInt($(this).css('z-index'), 10);
		if(indexCurrent.__gt(indexHighest)) {
			indexHighest = indexCurrent;
		}
	});
	return indexHighest; ;
return self}, function($ctx1) {$ctx1.fill(self,"highestZIndex",{},globals.MaglevWindow.klass)})},
args: [],
source: "highestZIndex\x0a\x09< var indexHighest = 0;\x0a\x09$('.window').each(function(){\x0a\x09\x09var indexCurrent = parseInt($(this).css('z-index'), 10);\x0a\x09\x09if(indexCurrent.__gt(indexHighest)) {\x0a\x09\x09\x09indexHighest = indexCurrent;\x0a\x09\x09}\x0a\x09});\x0a\x09return indexHighest; >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevWindow.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newReplace:",
protocol: 'instance creation',
fn: function (aWindow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._replace_(aWindow);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newReplace:",{aWindow:aWindow},globals.MaglevWindow.klass)})},
args: ["aWindow"],
source: "newReplace: aWindow\x0a\x09^ self new\x0a\x09\x09replace: aWindow;\x0a\x09\x09yourself",
messageSends: ["replace:", "new", "yourself"],
referencedClasses: []
}),
globals.MaglevWindow.klass);


smalltalk.addClass('MaglevObjectWindow', globals.MaglevWindow, ['container', 'object', 'classObject', 'tabs', 'captions', 'tabsContainer', 'currentTab'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "captions",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@captions"];
if(($receiver = $1) == nil || $receiver == null){
self["@captions"]=_st($Dictionary())._new();
self["@captions"];
} else {
$1;
};
$2=self["@captions"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"captions",{},globals.MaglevObjectWindow)})},
args: [],
source: "captions\x0a\x09captions ifNil: [captions := Dictionary new].\x0a\x09^ captions",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
globals.MaglevObjectWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "checkAddConnectionTo:",
protocol: 'rendering',
fn: function (aWindow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$5,$6,$4,$7,$8,$3,$9;
_st(self["@object"])._instVarsDo_((function(ivName,ivValue){
return smalltalk.withContext(function($ctx2) {
$2=_st(aWindow)._object();
$ctx2.sendIdx["object"]=1;
$1=_st(ivValue).__eq_eq($2);
$ctx2.sendIdx["=="]=1;
if(smalltalk.assert($1)){
return self._connectTo_as_with_(aWindow,"iv",_st(ivName)._inspection());
$ctx2.sendIdx["connectTo:as:with:"]=1;
};
}, function($ctx2) {$ctx2.fillBlock({ivName:ivName,ivValue:ivValue},$ctx1,1)})}));
$5=_st(self["@object"])._classObject();
$6=_st(aWindow)._object();
$ctx1.sendIdx["object"]=2;
$4=_st($5).__eq_eq($6);
$ctx1.sendIdx["=="]=2;
$3=_st($4)._and_((function(){
return smalltalk.withContext(function($ctx2) {
$7=_st(self["@object"])._virtualClassObject();
$ctx2.sendIdx["virtualClassObject"]=1;
$8=_st(aWindow)._object();
$ctx2.sendIdx["object"]=3;
return _st($7).__tild_tild($8);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
if(smalltalk.assert($3)){
self._connectTo_as_with_(aWindow,"class",nil);
$ctx1.sendIdx["connectTo:as:with:"]=2;
};
$9=_st(_st(self["@object"])._virtualClassObject()).__eq_eq(_st(aWindow)._object());
if(smalltalk.assert($9)){
self._connectTo_as_with_(aWindow,"virtualClass",nil);
};
return self}, function($ctx1) {$ctx1.fill(self,"checkAddConnectionTo:",{aWindow:aWindow},globals.MaglevObjectWindow)})},
args: ["aWindow"],
source: "checkAddConnectionTo: aWindow\x0a\x09object instVarsDo: [:ivName :ivValue |\x0a\x09\x09ivValue == aWindow object ifTrue: [self connectTo: aWindow as: #iv with: ivName inspection]].\x0a\x09(object classObject == aWindow object and: [object virtualClassObject ~~ aWindow object]) \x0a\x09\x09ifTrue: [self connectTo: aWindow as: #class with: nil].\x0a\x09object virtualClassObject == aWindow object \x0a\x09\x09ifTrue: [self connectTo: aWindow as: #virtualClass with: nil].",
messageSends: ["instVarsDo:", "ifTrue:", "==", "object", "connectTo:as:with:", "inspection", "and:", "classObject", "~~", "virtualClassObject"],
referencedClasses: []
}),
globals.MaglevObjectWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "closeWindow",
protocol: 'interactions',
fn: function (){
var self=this;
function $MaglevObjectSpace(){return globals.MaglevObjectSpace||(typeof MaglevObjectSpace=="undefined"?nil:MaglevObjectSpace)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($MaglevObjectSpace())._instance())._unregisterWindow_(self);
globals.MaglevObjectWindow.superclass.fn.prototype._closeWindow.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"closeWindow",{},globals.MaglevObjectWindow)})},
args: [],
source: "closeWindow\x0a\x09MaglevObjectSpace instance unregisterWindow: self.\x0a\x09super closeWindow.",
messageSends: ["unregisterWindow:", "instance", "closeWindow"],
referencedClasses: ["MaglevObjectSpace"]
}),
globals.MaglevObjectWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "container",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@container"];
return $1;
},
args: [],
source: "container\x0a\x09^ container",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "contentTabs",
protocol: 'rendering',
fn: function (){
var self=this;
var result;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2,$4,$6,$7,$5,$8;
result=_st($Dictionary())._new();
$1=_st(self._object())._hasInstVars();
if(smalltalk.assert($1)){
_st(result)._at_put_("Instance Variables","renderInstanceVariablesOn:");
$ctx1.sendIdx["at:put:"]=1;
};
_st(_st(self["@object"])._customTabs())._do_((function(customTab){
var selector;
return smalltalk.withContext(function($ctx2) {
$3=_st(customTab)._at_((2));
$ctx2.sendIdx["at:"]=1;
$2="renderCustom".__comma($3);
$ctx2.sendIdx[","]=2;
selector=_st($2).__comma("On:");
$ctx2.sendIdx[","]=1;
selector;
$4=self._class();
$6=_st(selector).__comma("html    ");
$7=_st(customTab)._at_((3));
$ctx2.sendIdx["at:"]=2;
$5=_st($6).__comma($7);
$ctx2.sendIdx[","]=3;
_st($4)._compile_($5);
return _st(result)._at_put_(_st(customTab)._at_((1)),_st(selector)._asSymbol());
}, function($ctx2) {$ctx2.fillBlock({customTab:customTab,selector:selector},$ctx1,2)})}));
$8=result;
return $8;
}, function($ctx1) {$ctx1.fill(self,"contentTabs",{result:result},globals.MaglevObjectWindow)})},
args: [],
source: "contentTabs\x0a\x09|result|\x0a\x09result := Dictionary new.\x0a\x09self object hasInstVars \x0a\x09\x09ifTrue: [result at: 'Instance Variables' put: #renderInstanceVariablesOn:].\x0a\x09object customTabs do: [:customTab | |selector|\x0a\x09\x09selector := 'renderCustom', (customTab at: 2), 'On:'.\x0a\x09\x09self class compile: selector, 'html    ', (customTab at: 3).\x0a\x09\x09result at: (customTab at: 1) put: selector asSymbol].\x0a\x09^ result",
messageSends: ["new", "ifTrue:", "hasInstVars", "object", "at:put:", "do:", "customTabs", ",", "at:", "compile:", "class", "asSymbol"],
referencedClasses: ["Dictionary"]
}),
globals.MaglevObjectWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultTab",
protocol: 'interactions',
fn: function (){
var self=this;
return nil;
},
args: [],
source: "defaultTab\x0a\x09^ nil",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "makeCurrentTabResizable",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
_st(self["@currentTab"])._style_("overflow: hidden;");
$3=_st(self["@currentTab"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$2=_st($3)._children();
$1=_st($2)._first();
_st($1)._attr_with_("style","width: 100%; height: 100%; overflow: auto;");
_st(_st(self["@currentTab"])._asJQuery())._resizable();
return self}, function($ctx1) {$ctx1.fill(self,"makeCurrentTabResizable",{},globals.MaglevObjectWindow)})},
args: [],
source: "makeCurrentTabResizable\x0a\x09currentTab\x0a\x09\x09style: 'overflow: hidden;'.\x0a\x09currentTab asJQuery children first \x0a\x09\x09attr: 'style' with: 'width: 100%; height: 100%; overflow: auto;'.\x0a\x09currentTab asJQuery resizable.",
messageSends: ["style:", "attr:with:", "first", "children", "asJQuery", "resizable"],
referencedClasses: []
}),
globals.MaglevObjectWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "object",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@object"];
return $1;
},
args: [],
source: "object\x0a\x09^ object",
messageSends: [],
referencedClasses: []
}),
globals.MaglevObjectWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "object:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@object"]=anObject;
self["@classObject"]=_st(anObject)._classObject();
return self}, function($ctx1) {$ctx1.fill(self,"object:",{anObject:anObject},globals.MaglevObjectWindow)})},
args: ["anObject"],
source: "object: anObject\x0a\x09object := anObject.\x0a\x09classObject := anObject classObject.",
messageSends: ["classObject"],
referencedClasses: []
}),
globals.MaglevObjectWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "prepareWindow",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(globals.MaglevObjectWindow.superclass.fn.prototype._prepareWindow.apply(_st(self), []))._MaglevObjectSpace())._registerWindow_(self);
return self}, function($ctx1) {$ctx1.fill(self,"prepareWindow",{},globals.MaglevObjectWindow)})},
args: [],
source: "prepareWindow\x0a\x09super prepareWindow\x0a\x09MaglevObjectSpace registerWindow: self.",
messageSends: ["registerWindow:", "MaglevObjectSpace", "prepareWindow"],
referencedClasses: []
}),
globals.MaglevObjectWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderInstanceVariablesOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevTable(){return globals.MaglevTable||(typeof MaglevTable=="undefined"?nil:MaglevTable)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($MaglevTable())._newAssociationDictFor_with_(self._object(),"instVars"));
return self}, function($ctx1) {$ctx1.fill(self,"renderInstanceVariablesOn:",{html:html},globals.MaglevObjectWindow)})},
args: ["html"],
source: "renderInstanceVariablesOn: html\x0a\x09html with: (MaglevTable newAssociationDictFor: self object with: #instVars).",
messageSends: ["with:", "newAssociationDictFor:with:", "object"],
referencedClasses: ["MaglevTable"]
}),
globals.MaglevObjectWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderNavigationOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st(self["@object"])._inlineViewComponentNavItem());
return self}, function($ctx1) {$ctx1.fill(self,"renderNavigationOn:",{html:html},globals.MaglevObjectWindow)})},
args: ["html"],
source: "renderNavigationOn: html\x0a\x09html with: object inlineViewComponentNavItem.",
messageSends: ["with:", "inlineViewComponentNavItem"],
referencedClasses: []
}),
globals.MaglevObjectWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderVirtualClassAndClassOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1,$5,$4,$6;
$2=self["@classObject"];
$3=_st(self["@object"])._virtualClassObject();
$ctx1.sendIdx["virtualClassObject"]=1;
$1=_st($2).__eq($3);
if(! smalltalk.assert($1)){
_st(html)._with_(" : ");
$ctx1.sendIdx["with:"]=1;
$5=_st(_st(self["@object"])._virtualClassObject())._inlineViewComponent();
$ctx1.sendIdx["inlineViewComponent"]=1;
$4=_st(html)._with_($5);
$ctx1.sendIdx["with:"]=2;
$4;
};
_st(html)._with_(" :: ");
$ctx1.sendIdx["with:"]=3;
$6=_st(html)._with_(_st(self["@classObject"])._inlineViewComponent());
return self}, function($ctx1) {$ctx1.fill(self,"renderVirtualClassAndClassOn:",{html:html},globals.MaglevObjectWindow)})},
args: ["html"],
source: "renderVirtualClassAndClassOn: html\x0a\x09classObject = object virtualClassObject ifFalse: [\x0a\x09\x09html\x0a\x09\x09\x09with: ' : ';\x0a\x09\x09\x09with: object virtualClassObject inlineViewComponent].\x0a\x09html \x0a\x09\x09with: ' :: ';\x0a\x09\x09with: classObject inlineViewComponent.",
messageSends: ["ifFalse:", "=", "virtualClassObject", "with:", "inlineViewComponent"],
referencedClasses: []
}),
globals.MaglevObjectWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderWindowContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var allTabs,firstCaption,defaultTab;
function $MaglevIcon(){return globals.MaglevIcon||(typeof MaglevIcon=="undefined"?nil:MaglevIcon)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$6,$7,$5,$8,$9,$10,$3,$11,$12;
allTabs=self._contentTabs();
$ctx1.sendIdx["contentTabs"]=1;
$1=_st(_st(allTabs)._size()).__gt((0));
if(smalltalk.assert($1)){
$2=_st(html)._ul();
_st($2)._class_("nav nav-tabs");
_st($2)._style_("display: inline-block; margin-bottom: 0px; margin-top: 5px; width: 100%;");
$ctx1.sendIdx["style:"]=1;
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$4=_st(html)._li();
$ctx2.sendIdx["li"]=1;
_st($4)._style_("float: right;");
_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._makeCurrentTabResizable();
$ctx3.sendIdx["makeCurrentTabResizable"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["onClick:"]=1;
$5=_st($4)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$6=_st(html)._a();
$ctx3.sendIdx["a"]=1;
_st($6)._href_("#");
$ctx3.sendIdx["href:"]=1;
_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._makeCurrentTabResizable();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)})}));
$ctx3.sendIdx["onClick:"]=2;
$7=_st($6)._with_(_st($MaglevIcon())._resizeSmall());
$ctx3.sendIdx["with:"]=3;
return $7;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["with:"]=2;
$5;
return _st(self._contentTabs())._keysAndValuesDo_((function(caption,generator){
var capEl;
return smalltalk.withContext(function($ctx3) {
$8=firstCaption;
if(($receiver = $8) == nil || $receiver == null){
firstCaption=caption;
firstCaption;
} else {
$8;
};
capEl=_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$9=_st(html)._a();
_st($9)._href_("#");
_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return self._showTab_(caption);
$ctx5.sendIdx["showTab:"]=1;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,9)})}));
$10=_st($9)._with_(caption);
return $10;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,8)})}));
$ctx3.sendIdx["with:"]=4;
capEl;
return _st(self._captions())._at_put_(caption,capEl);
}, function($ctx3) {$ctx3.fillBlock({caption:caption,generator:generator,capEl:capEl},$ctx2,6)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=1;
$3;
};
self["@tabsContainer"]=_st(html)._div();
defaultTab=self._defaultTab();
$11=defaultTab;
if(($receiver = $11) == nil || $receiver == null){
$12=firstCaption;
if(($receiver = $12) == nil || $receiver == null){
$12;
} else {
self._showTab_(firstCaption);
$ctx1.sendIdx["showTab:"]=2;
};
} else {
self._showTab_(defaultTab);
};
return self}, function($ctx1) {$ctx1.fill(self,"renderWindowContentOn:",{html:html,allTabs:allTabs,firstCaption:firstCaption,defaultTab:defaultTab},globals.MaglevObjectWindow)})},
args: ["html"],
source: "renderWindowContentOn: html\x0a\x09|allTabs firstCaption defaultTab|\x0a\x09allTabs := self contentTabs.\x0a\x09allTabs size > 0 ifTrue: [\x0a\x09\x09html ul\x0a\x09\x09\x09class: 'nav nav-tabs';\x0a\x09\x09\x09style: 'display: inline-block; margin-bottom: 0px; margin-top: 5px; width: 100%;';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html li\x0a\x09\x09\x09\x09\x09style: 'float: right;';\x0a\x09\x09\x09\x09\x09onClick: [self makeCurrentTabResizable];\x0a\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09\x09href: '#';\x0a\x09\x09\x09\x09\x09\x09\x09onClick: [self makeCurrentTabResizable];\x0a\x09\x09\x09\x09\x09\x09\x09with: MaglevIcon resizeSmall].\x0a\x09\x09\x09\x09self contentTabs keysAndValuesDo: [:caption :generator | |capEl|\x0a\x09\x09\x09\x09\x09firstCaption ifNil: [firstCaption := caption].\x0a\x09\x09\x09\x09\x09capEl := html li with: [\x0a\x09\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09\x09href: '#';\x0a\x09\x09\x09\x09\x09\x09\x09onClick: [self showTab: caption];\x0a\x09\x09\x09\x09\x09\x09\x09with: caption].\x0a\x09\x09\x09\x09self captions at: caption put: capEl]]].\x0a\x09tabsContainer := html div.\x0a\x09defaultTab := self defaultTab.\x0a\x09defaultTab \x0a\x09\x09ifNil: [firstCaption ifNotNil: [self showTab: firstCaption]]\x0a\x09\x09ifNotNil: [self showTab: defaultTab].",
messageSends: ["contentTabs", "ifTrue:", ">", "size", "class:", "ul", "style:", "with:", "li", "onClick:", "makeCurrentTabResizable", "href:", "a", "resizeSmall", "keysAndValuesDo:", "ifNil:", "showTab:", "at:put:", "captions", "div", "defaultTab", "ifNil:ifNotNil:", "ifNotNil:"],
referencedClasses: ["MaglevIcon"]
}),
globals.MaglevObjectWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderWindowTitleContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2,$5,$6;
_st(html)._with_(_st(self["@object"])._inlineViewComponentShort());
$ctx1.sendIdx["with:"]=1;
_st(html)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._span();
_st($1)._style_("margin-left: 5px;");
$3=$1;
$4=_st("<0x".__comma(_st(_st(self["@object"])._oop())._asHexString())).__comma(">");
$ctx2.sendIdx[","]=1;
$2=_st($3)._with_($4);
$ctx2.sendIdx["with:"]=3;
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=2;
self._renderHeightPlaceholderOn_(html);
$5=_st(html)._div();
_st($5)._class_("right-inline-block");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderVirtualClassAndClassOn_(html);
return self._renderCloseButtonOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderWindowTitleContentOn:",{html:html},globals.MaglevObjectWindow)})},
args: ["html"],
source: "renderWindowTitleContentOn: html\x0a\x09html with: object inlineViewComponentShort.\x0a\x09html with: [\x0a\x09\x09html span\x0a\x09\x09\x09style: 'margin-left: 5px;';\x0a\x09\x09\x09with: '<0x', object oop asHexString, '>'].\x0a\x09self renderHeightPlaceholderOn: html.\x0a\x09html div\x0a\x09\x09class: 'right-inline-block';\x0a\x09\x09with: [\x0a\x09\x09\x09self renderVirtualClassAndClassOn: html.\x0a\x09\x09\x09self renderCloseButtonOn: html].",
messageSends: ["with:", "inlineViewComponentShort", "style:", "span", ",", "asHexString", "oop", "renderHeightPlaceholderOn:", "class:", "div", "renderVirtualClassAndClassOn:", "renderCloseButtonOn:"],
referencedClasses: []
}),
globals.MaglevObjectWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "replace:",
protocol: 'interactions',
fn: function (aWindow){
var self=this;
function $MaglevObjectSpace(){return globals.MaglevObjectSpace||(typeof MaglevObjectSpace=="undefined"?nil:MaglevObjectSpace)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
globals.MaglevObjectWindow.superclass.fn.prototype._replace_.apply(_st(self), [aWindow]);
$1=_st(aWindow)._isWaitingWindow();
if(! smalltalk.assert($1)){
$2=_st($MaglevObjectSpace())._instance();
$ctx1.sendIdx["instance"]=1;
_st($2)._unregisterWindow_(aWindow);
};
_st(_st($MaglevObjectSpace())._instance())._registerWindow_(self);
return self}, function($ctx1) {$ctx1.fill(self,"replace:",{aWindow:aWindow},globals.MaglevObjectWindow)})},
args: ["aWindow"],
source: "replace: aWindow\x0a\x09super replace: aWindow.\x0a\x09aWindow isWaitingWindow\x0a\x09\x09ifFalse: [MaglevObjectSpace instance unregisterWindow: aWindow].\x0a\x09MaglevObjectSpace instance registerWindow: self.",
messageSends: ["replace:", "ifFalse:", "isWaitingWindow", "unregisterWindow:", "instance", "registerWindow:"],
referencedClasses: ["MaglevObjectSpace"]
}),
globals.MaglevObjectWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "showTab:",
protocol: 'interactions',
fn: function (caption){
var self=this;
var allTabs;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$2,$1,$5,$6,$7,$8;
allTabs=self._contentTabs();
$4=self._tabs();
$ctx1.sendIdx["tabs"]=1;
$3=_st($4)._includesKey_(caption);
$ctx1.sendIdx["includesKey:"]=1;
$2=_st($3)._not();
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(allTabs)._includesKey_(caption);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(smalltalk.assert($1)){
var tab,html;
html=_st($HTMLCanvas())._onJQuery_(_st(self["@tabsContainer"])._asJQuery());
html;
$5=_st(html)._div();
$ctx1.sendIdx["div"]=1;
tab=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$6=_st(allTabs)._at_(caption);
$ctx3.sendIdx["at:"]=1;
return self._perform_withArguments_($6,[html]);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["with:"]=1;
tab;
$7=self._tabs();
$ctx1.sendIdx["tabs"]=2;
_st($7)._at_put_(caption,tab);
};
_st(self._tabs())._keysAndValuesDo_((function(tabCaption,tab){
var capEl;
return smalltalk.withContext(function($ctx2) {
capEl=_st(self._captions())._at_(tabCaption);
capEl;
$8=_st(caption).__eq(tabCaption);
if(smalltalk.assert($8)){
self["@currentTab"]=tab;
self["@currentTab"];
_st(tab)._show();
return _st(capEl)._addClass_("active");
} else {
_st(tab)._hide();
return _st(capEl)._removeClass_("active");
};
}, function($ctx2) {$ctx2.fillBlock({tabCaption:tabCaption,tab:tab,capEl:capEl},$ctx1,5)})}));
return false;
}, function($ctx1) {$ctx1.fill(self,"showTab:",{caption:caption,allTabs:allTabs},globals.MaglevObjectWindow)})},
args: ["caption"],
source: "showTab: caption\x0a\x09|allTabs|\x0a\x09allTabs := self contentTabs.\x0a\x09\x22Lazy generate new tabs.\x22\x0a\x09((self tabs includesKey: caption) not and: [allTabs includesKey: caption])\x0a\x09\x09ifTrue: [ |tab html|\x0a\x09\x09\x09html := HTMLCanvas onJQuery: tabsContainer asJQuery.\x0a\x09\x09\x09tab := html div\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html div\x0a\x09\x09\x09\x09\x09\x09with: [self perform: (allTabs at: caption) withArguments: {html}]].\x0a\x09\x09\x09self tabs at: caption put: tab].\x0a\x09self tabs keysAndValuesDo: [:tabCaption :tab | |capEl|\x0a\x09\x09capEl := self captions at: tabCaption.\x0a\x09\x09caption = tabCaption\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09currentTab := tab.\x0a\x09\x09\x09\x09tab show.\x0a\x09\x09\x09\x09capEl addClass: 'active']\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09tab hide.\x0a\x09\x09\x09\x09capEl removeClass: 'active']].\x0a\x09\x22return false to avoid scrolling to the top\x22\x0a\x09^ false",
messageSends: ["contentTabs", "ifTrue:", "and:", "not", "includesKey:", "tabs", "onJQuery:", "asJQuery", "with:", "div", "perform:withArguments:", "at:", "at:put:", "keysAndValuesDo:", "captions", "ifTrue:ifFalse:", "=", "show", "addClass:", "hide", "removeClass:"],
referencedClasses: ["HTMLCanvas"]
}),
globals.MaglevObjectWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "tabs",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@tabs"];
if(($receiver = $1) == nil || $receiver == null){
self["@tabs"]=_st($Dictionary())._new();
self["@tabs"];
} else {
$1;
};
$2=self["@tabs"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"tabs",{},globals.MaglevObjectWindow)})},
args: [],
source: "tabs\x0a\x09tabs ifNil: [tabs := Dictionary new].\x0a\x09^ tabs",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
globals.MaglevObjectWindow);


smalltalk.addMethod(
smalltalk.method({
selector: "newReplace:with:",
protocol: 'instance creation',
fn: function (aWindow,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._object_(anObject);
_st($2)._replace_(aWindow);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newReplace:with:",{aWindow:aWindow,anObject:anObject},globals.MaglevObjectWindow.klass)})},
args: ["aWindow", "anObject"],
source: "newReplace: aWindow with: anObject\x0a\x09^ self new\x0a\x09\x09object: anObject;\x0a\x09\x09replace: aWindow;\x0a\x09\x09yourself",
messageSends: ["object:", "new", "replace:", "yourself"],
referencedClasses: []
}),
globals.MaglevObjectWindow.klass);


smalltalk.addClass('MaglevArrayWindow', globals.MaglevObjectWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "checkAddConnectionTo:",
protocol: 'rendering',
fn: function (aWindow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
globals.MaglevArrayWindow.superclass.fn.prototype._checkAddConnectionTo_.apply(_st(self), [aWindow]);
_st(_st(self["@object"])._elements())._keysAndValuesDo_((function(idx,value){
return smalltalk.withContext(function($ctx2) {
$1=_st(value).__eq_eq(_st(aWindow)._object());
if(smalltalk.assert($1)){
return self._connectTo_as_with_(aWindow,"arrayElement",idx);
};
}, function($ctx2) {$ctx2.fillBlock({idx:idx,value:value},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"checkAddConnectionTo:",{aWindow:aWindow},globals.MaglevArrayWindow)})},
args: ["aWindow"],
source: "checkAddConnectionTo: aWindow\x0a\x09super checkAddConnectionTo: aWindow.\x0a\x09object elements keysAndValuesDo: [:idx :value |\x0a\x09\x09value == aWindow object ifTrue: [self connectTo: aWindow as: #arrayElement with: idx]].",
messageSends: ["checkAddConnectionTo:", "keysAndValuesDo:", "elements", "ifTrue:", "==", "object", "connectTo:as:with:"],
referencedClasses: []
}),
globals.MaglevArrayWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "contentTabs",
protocol: 'rendering',
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
result=globals.MaglevArrayWindow.superclass.fn.prototype._contentTabs.apply(_st(self), []);
$1=_st(self._object())._hasElements();
if(smalltalk.assert($1)){
_st(result)._at_put_("Elements","renderArrayElementsOn:");
};
$2=result;
return $2;
}, function($ctx1) {$ctx1.fill(self,"contentTabs",{result:result},globals.MaglevArrayWindow)})},
args: [],
source: "contentTabs\x0a\x09|result|\x0a\x09result := super contentTabs.\x0a\x09self object hasElements \x0a\x09\x09ifTrue: [result at: 'Elements' put: #renderArrayElementsOn:].\x0a\x09^ result",
messageSends: ["contentTabs", "ifTrue:", "hasElements", "object", "at:put:"],
referencedClasses: []
}),
globals.MaglevArrayWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultTab",
protocol: 'interactions',
fn: function (){
var self=this;
return "Elements";
},
args: [],
source: "defaultTab\x0a\x09^ 'Elements'",
messageSends: [],
referencedClasses: []
}),
globals.MaglevArrayWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderArrayElementsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevTable(){return globals.MaglevTable||(typeof MaglevTable=="undefined"?nil:MaglevTable)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($MaglevTable())._newFor_with_(self._object(),"elements"));
return self}, function($ctx1) {$ctx1.fill(self,"renderArrayElementsOn:",{html:html},globals.MaglevArrayWindow)})},
args: ["html"],
source: "renderArrayElementsOn: html\x0a\x09html with: (MaglevTable newFor: self object with: #elements).",
messageSends: ["with:", "newFor:with:", "object"],
referencedClasses: ["MaglevTable"]
}),
globals.MaglevArrayWindow);



smalltalk.addClass('MaglevExceptionWindow', globals.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevFixnumWindow', globals.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevFloatWindow', globals.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevHashWindow', globals.MaglevObjectWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "checkAddConnectionTo:",
protocol: 'rendering',
fn: function (aWindow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$4,$3,$5,$6;
globals.MaglevHashWindow.superclass.fn.prototype._checkAddConnectionTo_.apply(_st(self), [aWindow]);
_st(self["@object"])._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx2) {
$2=_st(aWindow)._object();
$ctx2.sendIdx["object"]=1;
$1=_st(key).__eq_eq($2);
$ctx2.sendIdx["=="]=1;
if(smalltalk.assert($1)){
$4=_st(value)._shortInspection();
$ctx2.sendIdx["shortInspection"]=1;
$3="self[...] = ".__comma($4);
$ctx2.sendIdx[","]=1;
self._connectTo_as_with_(aWindow,"hashKey",$3);
$ctx2.sendIdx["connectTo:as:with:"]=1;
};
$5=_st(value).__eq_eq(_st(aWindow)._object());
if(smalltalk.assert($5)){
$6=_st("self[".__comma(_st(key)._shortInspection())).__comma("] = ...");
$ctx2.sendIdx[","]=2;
return self._connectTo_as_with_(aWindow,"hashValue",$6);
};
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"checkAddConnectionTo:",{aWindow:aWindow},globals.MaglevHashWindow)})},
args: ["aWindow"],
source: "checkAddConnectionTo: aWindow\x0a\x09super checkAddConnectionTo: aWindow.\x0a\x09object keysAndValuesDo: [:key :value |\x0a\x09\x09key == aWindow object ifTrue: [self connectTo: aWindow as: #hashKey with: 'self[...] = ', value shortInspection].\x0a\x09\x09value == aWindow object ifTrue: [self connectTo: aWindow as: #hashValue with: 'self[', key shortInspection, '] = ...']].",
messageSends: ["checkAddConnectionTo:", "keysAndValuesDo:", "ifTrue:", "==", "object", "connectTo:as:with:", ",", "shortInspection"],
referencedClasses: []
}),
globals.MaglevHashWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "contentTabs",
protocol: 'rendering',
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
result=globals.MaglevHashWindow.superclass.fn.prototype._contentTabs.apply(_st(self), []);
$1=_st(self._object())._hasElements();
if(smalltalk.assert($1)){
_st(result)._at_put_("Associations","renderHashElementsOn:");
};
$2=result;
return $2;
}, function($ctx1) {$ctx1.fill(self,"contentTabs",{result:result},globals.MaglevHashWindow)})},
args: [],
source: "contentTabs\x0a\x09|result|\x0a\x09result := super contentTabs.\x0a\x09self object hasElements \x0a\x09\x09ifTrue: [result at: 'Associations' put: #renderHashElementsOn:].\x0a\x09^ result",
messageSends: ["contentTabs", "ifTrue:", "hasElements", "object", "at:put:"],
referencedClasses: []
}),
globals.MaglevHashWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultTab",
protocol: 'interactions',
fn: function (){
var self=this;
return "Associations";
},
args: [],
source: "defaultTab\x0a\x09^ 'Associations'",
messageSends: [],
referencedClasses: []
}),
globals.MaglevHashWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHashElementsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevTable(){return globals.MaglevTable||(typeof MaglevTable=="undefined"?nil:MaglevTable)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($MaglevTable())._newAssociationDictFor_with_(self._object(),"elements"));
return self}, function($ctx1) {$ctx1.fill(self,"renderHashElementsOn:",{html:html},globals.MaglevHashWindow)})},
args: ["html"],
source: "renderHashElementsOn: html\x0a\x09html with: (MaglevTable newAssociationDictFor: self object with: #elements).",
messageSends: ["with:", "newAssociationDictFor:with:", "object"],
referencedClasses: ["MaglevTable"]
}),
globals.MaglevHashWindow);



smalltalk.addClass('MaglevMaglevRecordBaseWindow', globals.MaglevObjectWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "contentTabs",
protocol: 'rendering',
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1;
result=globals.MaglevMaglevRecordBaseWindow.superclass.fn.prototype._contentTabs.apply(_st(self), []);
_st(result)._at_put_("Attributes","renderAttributesOn:");
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"contentTabs",{result:result},globals.MaglevMaglevRecordBaseWindow)})},
args: [],
source: "contentTabs\x0a\x09|result|\x0a\x09result := super contentTabs.\x0a\x09result at: 'Attributes' put: #renderAttributesOn:.\x0a\x09^ result",
messageSends: ["contentTabs", "at:put:"],
referencedClasses: []
}),
globals.MaglevMaglevRecordBaseWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderAttributesOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevTable(){return globals.MaglevTable||(typeof MaglevTable=="undefined"?nil:MaglevTable)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($MaglevTable())._newAssociationDictFor_with_(self._object(),"attributes"));
return self}, function($ctx1) {$ctx1.fill(self,"renderAttributesOn:",{html:html},globals.MaglevMaglevRecordBaseWindow)})},
args: ["html"],
source: "renderAttributesOn: html\x0a\x09html with: (MaglevTable newAssociationDictFor: self object with: #attributes).",
messageSends: ["with:", "newAssociationDictFor:with:", "object"],
referencedClasses: ["MaglevTable"]
}),
globals.MaglevMaglevRecordBaseWindow);



smalltalk.addClass('MaglevModuleWindow', globals.MaglevObjectWindow, ['categoryNamesSelect', 'selectorsSelect', 'selectors', 'rubySelectors', 'methodContainer', 'waitingScreen', 'hierarchyContainer'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "contentTabs",
protocol: 'rendering',
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$4;
result=globals.MaglevModuleWindow.superclass.fn.prototype._contentTabs.apply(_st(self), []);
$2=self._object();
$ctx1.sendIdx["object"]=1;
$1=_st($2)._hasConstants();
if(smalltalk.assert($1)){
_st(result)._at_put_("Constants","renderConstantsOn:");
$ctx1.sendIdx["at:put:"]=1;
};
$3=_st(self._object())._hasIncludedModules();
if(smalltalk.assert($3)){
_st(result)._at_put_("Included Modules","renderIncludedModulesOn:");
$ctx1.sendIdx["at:put:"]=2;
};
_st(result)._at_put_("Code","renderCodeTabOn:");
$ctx1.sendIdx["at:put:"]=3;
_st(result)._at_put_("Hierarchy","renderHierarchyOn:");
$4=result;
return $4;
}, function($ctx1) {$ctx1.fill(self,"contentTabs",{result:result},globals.MaglevModuleWindow)})},
args: [],
source: "contentTabs\x0a\x09|result|\x0a\x09result := super contentTabs.\x0a\x09self object hasConstants \x0a\x09\x09ifTrue: [result at: 'Constants' put: #renderConstantsOn:].\x0a\x09self object hasIncludedModules\x0a\x09\x09ifTrue: [result at: 'Included Modules' put: #renderIncludedModulesOn:].\x0a\x09result at: 'Code' put: #renderCodeTabOn:.\x0a\x09result at: 'Hierarchy' put: #renderHierarchyOn:.\x0a\x09^ result",
messageSends: ["contentTabs", "ifTrue:", "hasConstants", "object", "at:put:", "hasIncludedModules"],
referencedClasses: []
}),
globals.MaglevModuleWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultTab",
protocol: 'interactions',
fn: function (){
var self=this;
return "Code";
},
args: [],
source: "defaultTab\x0a\x09^ 'Code'",
messageSends: [],
referencedClasses: []
}),
globals.MaglevModuleWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 container.jstree({
  plugins: ['crrm', 'html_data', 'themes'],
  core: {
    animation: 0,
    open_parents: true}});
// setTimout: jstree fix
setTimeout(function(){
  container.find('.treeview-replace-me').each(function(index, el) {
    var jqEl = $(el);
    self._renderInlineViewFor_inside_(jqEl.data('oop'), jqEl);
    jqEl.removeClass('treeview-replace-me');
  });}, 0); ;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.MaglevModuleWindow)})},
args: [],
source: "initialize\x0a< container.jstree({\x0a  plugins: ['crrm', 'html_data', 'themes'],\x0a  core: {\x0a    animation: 0,\x0a    open_parents: true}});\x0a// setTimout: jstree fix\x0asetTimeout(function(){\x0a  container.find('.treeview-replace-me').each(function(index, el) {\x0a    var jqEl = $(el);\x0a    self._renderInlineViewFor_inside_(jqEl.data('oop'), jqEl);\x0a    jqEl.removeClass('treeview-replace-me');\x0a  });}, 0); >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevModuleWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCodeTabOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevIcon(){return globals.MaglevIcon||(typeof MaglevIcon=="undefined"?nil:MaglevIcon)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(html)._root())._style_("width: 100%;");
$ctx1.sendIdx["style:"]=1;
self._renderListsOn_(html);
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
self["@waitingScreen"]=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_(_st($MaglevIcon())._wait());
$ctx2.sendIdx["with:"]=2;
$2=_st(html)._with_(" loading...");
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
self["@methodContainer"]=_st(_st(html)._div())._style_("margin-top: 10px;");
_st(self._object())._allSelectorsWithCallback_((function(obj){
return smalltalk.withContext(function($ctx2) {
self["@selectors"]=obj;
self["@selectors"];
self._renderSelectorCategories();
_st(self["@waitingScreen"])._hide();
_st(self["@categoryNamesSelect"])._show();
$ctx2.sendIdx["show"]=1;
return _st(self["@selectorsSelect"])._show();
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderCodeTabOn:",{html:html},globals.MaglevModuleWindow)})},
args: ["html"],
source: "renderCodeTabOn: html\x0a\x09html root\x0a\x09\x09style: 'width: 100%;'.\x0a\x09self renderListsOn: html.\x0a\x09waitingScreen := html div\x0a\x09\x09with: [html\x0a\x09\x09\x09with: MaglevIcon wait;\x0a\x09\x09\x09with: ' loading...'].\x0a\x09methodContainer := html div\x0a\x09\x09style: 'margin-top: 10px;'.\x0a\x09self object allSelectorsWithCallback: [:obj |\x0a\x09\x09selectors := obj.\x0a\x09\x09self renderSelectorCategories.\x0a\x09\x09waitingScreen hide.\x0a\x09\x09categoryNamesSelect show.\x0a\x09\x09selectorsSelect show].",
messageSends: ["style:", "root", "renderListsOn:", "with:", "div", "wait", "allSelectorsWithCallback:", "object", "renderSelectorCategories", "hide", "show"],
referencedClasses: ["MaglevIcon"]
}),
globals.MaglevModuleWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderConstantsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevTable(){return globals.MaglevTable||(typeof MaglevTable=="undefined"?nil:MaglevTable)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($MaglevTable())._newAssociationDictFor_with_(self._object(),"constants"));
return self}, function($ctx1) {$ctx1.fill(self,"renderConstantsOn:",{html:html},globals.MaglevModuleWindow)})},
args: ["html"],
source: "renderConstantsOn: html\x0a\x09html with: (MaglevTable newAssociationDictFor: self object with: #constants).",
messageSends: ["with:", "newAssociationDictFor:with:", "object"],
referencedClasses: ["MaglevTable"]
}),
globals.MaglevModuleWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHierarchyOn:",
protocol: 'rendering',
fn: function (htmlIn){
var self=this;
var waitingBox,hcContainer;
function $MaglevIcon(){return globals.MaglevIcon||(typeof MaglevIcon=="undefined"?nil:MaglevIcon)}
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$7,$8,$10,$9,$11,$12,$13,$6,$14;
$1=_st(htmlIn)._div();
$ctx1.sendIdx["div"]=1;
hcContainer=_st($1)._style_("height: 300px; overflow: hidden;");
$ctx1.sendIdx["style:"]=1;
$2=_st(htmlIn)._div();
$ctx1.sendIdx["div"]=2;
waitingBox=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(htmlIn)._with_(_st($MaglevIcon())._wait());
$ctx2.sendIdx["with:"]=2;
$3=_st(htmlIn)._with_(" loading...");
$ctx2.sendIdx["with:"]=3;
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
_st(self["@object"])._ensureSuperListLoadedWithCallback_((function(){
var renderedInlines,html;
return smalltalk.withContext(function($ctx2) {
$4=_st(hcContainer)._asJQuery();
$ctx2.sendIdx["asJQuery"]=1;
html=_st($HTMLCanvas())._onJQuery_($4);
html;
renderedInlines=_st($Array())._new();
renderedInlines;
$5=_st(html)._div();
_st($5)._style_("width: 100%; height: 100%; overflow: auto;");
$6=_st($5)._with_((function(){
var lastUl;
return smalltalk.withContext(function($ctx3) {
lastUl=_st(html)._ul();
$ctx3.sendIdx["ul"]=1;
lastUl;
return _st(_st(self["@object"])._superList())._do_((function(cls){
return smalltalk.withContext(function($ctx4) {
return _st(lastUl)._with_((function(){
return smalltalk.withContext(function($ctx5) {
$7=_st(html)._li();
$8=$7;
$10=_st(cls)._oop();
$ctx5.sendIdx["oop"]=1;
$9=_st($10)._asString();
$ctx5.sendIdx["asString"]=1;
_st($8)._data_with_("oop",$9);
$ctx5.sendIdx["data:with:"]=1;
_st($7)._with_((function(){
var cont;
return smalltalk.withContext(function($ctx6) {
$11=_st(html)._span();
_st($11)._data_with_("oop",_st(_st(cls)._oop())._asString());
$12=_st($11)._class_("treeview-replace-me");
cont=$12;
cont;
return _st(renderedInlines)._add_(cont);
}, function($ctx6) {$ctx6.fillBlock({cont:cont},$ctx5,6)})}));
$ctx5.sendIdx["with:"]=6;
$13=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx6) {
lastUl=_st(html)._ul();
return lastUl;
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,7)})}));
return $13;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,5)})}));
$ctx4.sendIdx["with:"]=5;
}, function($ctx4) {$ctx4.fillBlock({cls:cls},$ctx3,4)})}));
}, function($ctx3) {$ctx3.fillBlock({lastUl:lastUl},$ctx2,3)})}));
$ctx2.sendIdx["with:"]=4;
self["@hierarchyContainer"]=$6;
self["@hierarchyContainer"];
$14=_st(self["@hierarchyContainer"])._asJQuery();
$ctx2.sendIdx["asJQuery"]=2;
self._initializeTree_($14);
_st(_st(hcContainer)._asJQuery())._resizable();
return _st(waitingBox)._hide();
}, function($ctx2) {$ctx2.fillBlock({renderedInlines:renderedInlines,html:html},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderHierarchyOn:",{htmlIn:htmlIn,waitingBox:waitingBox,hcContainer:hcContainer},globals.MaglevModuleWindow)})},
args: ["htmlIn"],
source: "renderHierarchyOn: htmlIn\x0a\x09|waitingBox hcContainer|\x0a\x09hcContainer := htmlIn div\x0a\x09\x09style: 'height: 300px; overflow: hidden;'.\x0a\x09waitingBox := htmlIn div with: [\x0a\x09\x09htmlIn \x0a\x09\x09\x09with: MaglevIcon wait;\x0a\x09\x09\x09with: ' loading...'].\x0a\x09object ensureSuperListLoadedWithCallback: [ |renderedInlines html|\x0a\x09\x09html := HTMLCanvas onJQuery: hcContainer asJQuery.\x0a\x09\x09renderedInlines := Array new.\x0a\x09\x09hierarchyContainer := html div \x0a\x09\x09\x09style: 'width: 100%; height: 100%; overflow: auto;';\x0a\x09\x09\x09with: [ |lastUl|\x0a\x09\x09\x09\x09lastUl := html ul.\x0a\x09\x09\x09\x09object superList do: [:cls | \x22render superclasses\x22\x0a\x09\x09\x09\x09\x09lastUl with: [\x0a\x09\x09\x09\x09\x09\x09html li\x0a\x09\x09\x09\x09\x09\x09\x09data: 'oop' with: cls oop asString;\x0a\x09\x09\x09\x09\x09\x09\x09with: [|cont|\x0a\x09\x09\x09\x09\x09\x09\x09\x09cont := html span \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09data: 'oop' with: cls oop asString;\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09class: 'treeview-replace-me'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09renderedInlines add: cont];\x0a\x09\x09\x09\x09\x09\x09\x09with: [lastUl := html ul]]]].\x0a\x09\x09self initializeTree: hierarchyContainer asJQuery.\x0a\x09\x09hcContainer asJQuery resizable.\x0a\x09\x09waitingBox hide].",
messageSends: ["style:", "div", "with:", "wait", "ensureSuperListLoadedWithCallback:", "onJQuery:", "asJQuery", "new", "ul", "do:", "superList", "data:with:", "li", "asString", "oop", "span", "class:", "add:", "initializeTree:", "resizable", "hide"],
referencedClasses: ["MaglevIcon", "HTMLCanvas", "Array"]
}),
globals.MaglevModuleWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHierarchySubclass:for:",
protocol: 'interactions',
fn: function (cls,oop){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var ownerLi = self['@hierarchyContainer']._asJQuery().find("[data-oop='" + oop + "']");
	if (ownerLi.find("[data-oop='" + cls._oop() + "']").length == 0) {
		self['@hierarchyContainer']._asJQuery().jstree('create', ownerLi, null, {attr: {'data-oop': cls._oop(), 'data-replace-me': '1'}}, null, true);
	} ;
return self}, function($ctx1) {$ctx1.fill(self,"renderHierarchySubclass:for:",{cls:cls,oop:oop},globals.MaglevModuleWindow)})},
args: ["cls", "oop"],
source: "renderHierarchySubclass: cls for: oop\x0a\x09< var ownerLi = self['@hierarchyContainer']._asJQuery().find(\x22[data-oop='\x22 + oop + \x22']\x22);\x0a\x09if (ownerLi.find(\x22[data-oop='\x22 + cls._oop() + \x22']\x22).length == 0) {\x0a\x09\x09self['@hierarchyContainer']._asJQuery().jstree('create', ownerLi, null, {attr: {'data-oop': cls._oop(), 'data-replace-me': '1'}}, null, true);\x0a\x09} >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevModuleWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderIncludedModulesOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevTable(){return globals.MaglevTable||(typeof MaglevTable=="undefined"?nil:MaglevTable)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($MaglevTable())._newFor_with_(self._object(),"includedModules"));
return self}, function($ctx1) {$ctx1.fill(self,"renderIncludedModulesOn:",{html:html},globals.MaglevModuleWindow)})},
args: ["html"],
source: "renderIncludedModulesOn: html\x0a\x09html with: (MaglevTable newFor: self object with: #includedModules).",
messageSends: ["with:", "newFor:with:", "object"],
referencedClasses: ["MaglevTable"]
}),
globals.MaglevModuleWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderInlineViewFor:inside:",
protocol: 'rendering',
fn: function (oop,htmlElement){
var self=this;
var html,subclassesButton,waitIcon;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $MaglevIcon(){return globals.MaglevIcon||(typeof MaglevIcon=="undefined"?nil:MaglevIcon)}
function $MaglevObjectSpace(){return globals.MaglevObjectSpace||(typeof MaglevObjectSpace=="undefined"?nil:MaglevObjectSpace)}
return smalltalk.withContext(function($ctx1) { 
var $1;
html=_st($HTMLCanvas())._onJQuery_(htmlElement);
waitIcon=_st($MaglevIcon())._wait();
_st(html)._with_(waitIcon);
$ctx1.sendIdx["with:"]=1;
_st(waitIcon)._hide();
$ctx1.sendIdx["hide"]=1;
subclassesButton=_st($MaglevIcon())._codeFork();
_st(html)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._a())._with_(subclassesButton);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=2;
_st(subclassesButton)._onClick_((function(){
var obj;
return smalltalk.withContext(function($ctx2) {
_st(subclassesButton)._hide();
$ctx2.sendIdx["hide"]=2;
_st(waitIcon)._show();
$1=_st($MaglevObjectSpace())._instance();
$ctx2.sendIdx["instance"]=1;
obj=_st($1)._at_(oop);
$ctx2.sendIdx["at:"]=1;
obj;
return _st(obj)._ensureSubclassesLoadedWithCallback_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(obj)._subclasses())._do_((function(cls){
return smalltalk.withContext(function($ctx4) {
return self._renderHierarchySubclass_for_(cls,oop);
}, function($ctx4) {$ctx4.fillBlock({cls:cls},$ctx3,4)})}));
self._replaceHierarchySubclasses();
return _st(waitIcon)._hide();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1,2)})}));
_st(_st(_st(_st($MaglevObjectSpace())._instance())._at_(oop))._inlineViewComponentFull())._renderOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderInlineViewFor:inside:",{oop:oop,htmlElement:htmlElement,html:html,subclassesButton:subclassesButton,waitIcon:waitIcon},globals.MaglevModuleWindow)})},
args: ["oop", "htmlElement"],
source: "renderInlineViewFor: oop inside: htmlElement\x0a\x09|html subclassesButton waitIcon|\x0a\x09html := HTMLCanvas onJQuery: htmlElement.\x0a\x09waitIcon := MaglevIcon wait.\x0a\x09html with: waitIcon.\x0a\x09waitIcon hide.\x0a\x09subclassesButton := MaglevIcon codeFork.\x0a\x09html with: [html a with: subclassesButton].\x0a\x09subclassesButton onClick: [ |obj|\x0a\x09\x09subclassesButton hide.\x0a\x09\x09waitIcon show.\x0a\x09\x09obj := MaglevObjectSpace instance at: oop.\x0a\x09\x09obj ensureSubclassesLoadedWithCallback: [\x0a\x09\x09\x09obj subclasses do: [:cls |\x0a\x09\x09\x09\x09self renderHierarchySubclass: cls for: oop].\x0a\x09\x09\x09self replaceHierarchySubclasses.\x0a\x09\x09\x09waitIcon hide]].\x0a\x09(MaglevObjectSpace instance at: oop) inlineViewComponentFull renderOn: html.",
messageSends: ["onJQuery:", "wait", "with:", "hide", "codeFork", "a", "onClick:", "show", "at:", "instance", "ensureSubclassesLoadedWithCallback:", "do:", "subclasses", "renderHierarchySubclass:for:", "replaceHierarchySubclasses", "renderOn:", "inlineViewComponentFull"],
referencedClasses: ["HTMLCanvas", "MaglevIcon", "MaglevObjectSpace"]
}),
globals.MaglevModuleWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderListsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevListBox(){return globals.MaglevListBox||(typeof MaglevListBox=="undefined"?nil:MaglevListBox)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
self["@categoryNamesSelect"]=_st($MaglevListBox())._new();
$ctx1.sendIdx["new"]=1;
_st(html)._with_(self["@categoryNamesSelect"]);
$ctx1.sendIdx["with:"]=1;
$1=self["@categoryNamesSelect"];
_st($1)._changedCallback_((function(cat,index){
return smalltalk.withContext(function($ctx2) {
return self._renderSelectors_(cat);
}, function($ctx2) {$ctx2.fillBlock({cat:cat,index:index},$ctx1,1)})}));
$ctx1.sendIdx["changedCallback:"]=1;
_st($1)._height_((250));
$ctx1.sendIdx["height:"]=1;
_st($1)._style_("float: left; width: 50%; margin-right: 10px; margin-left: 0px; display: inline-block;");
$ctx1.sendIdx["style:"]=1;
$2=_st($1)._hide();
$ctx1.sendIdx["hide"]=1;
self["@selectorsSelect"]=_st($MaglevListBox())._new();
_st(html)._with_(self["@selectorsSelect"]);
$3=self["@selectorsSelect"];
_st($3)._changedCallback_((function(sel,index){
return smalltalk.withContext(function($ctx2) {
return self._renderSourceCode_(sel);
}, function($ctx2) {$ctx2.fillBlock({sel:sel,index:index},$ctx1,2)})}));
_st($3)._height_((250));
_st($3)._style_("display: inline-block; width: 50%; box-sizing: border-box; -webkit-box-sizing: border-box; padding-right: 10px;");
$4=_st($3)._hide();
return self}, function($ctx1) {$ctx1.fill(self,"renderListsOn:",{html:html},globals.MaglevModuleWindow)})},
args: ["html"],
source: "renderListsOn: html\x0a\x09categoryNamesSelect := MaglevListBox new.\x0a\x09html with: categoryNamesSelect.\x0a\x09categoryNamesSelect\x0a\x09\x09changedCallback: [:cat :index | self renderSelectors: cat];\x0a\x09\x09height: 250;\x0a\x09\x09style: 'float: left; width: 50%; margin-right: 10px; margin-left: 0px; display: inline-block;';\x0a\x09\x09hide.\x0a\x09selectorsSelect := MaglevListBox new.\x0a\x09html with: selectorsSelect.\x0a\x09selectorsSelect\x0a\x09\x09changedCallback: [:sel :index | self renderSourceCode: sel];\x0a\x09\x09height: 250;\x0a\x09\x09style: 'display: inline-block; width: 50%; box-sizing: border-box; -webkit-box-sizing: border-box; padding-right: 10px;';\x0a\x09\x09hide.",
messageSends: ["new", "with:", "changedCallback:", "renderSelectors:", "height:", "style:", "hide", "renderSourceCode:"],
referencedClasses: ["MaglevListBox"]
}),
globals.MaglevModuleWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMethodObject:",
protocol: 'rendering',
fn: function (obj){
var self=this;
function $MaglevGsNMethodEditor(){return globals.MaglevGsNMethodEditor||(typeof MaglevGsNMethodEditor=="undefined"?nil:MaglevGsNMethodEditor)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@methodContainer"])._with_(_st($MaglevGsNMethodEditor())._for_(obj));
_st(self["@waitingScreen"])._hide();
return self}, function($ctx1) {$ctx1.fill(self,"renderMethodObject:",{obj:obj},globals.MaglevModuleWindow)})},
args: ["obj"],
source: "renderMethodObject: obj\x0a\x09methodContainer with: (MaglevGsNMethodEditor for: obj).\x0a\x09waitingScreen hide.",
messageSends: ["with:", "for:", "hide"],
referencedClasses: ["MaglevGsNMethodEditor"]
}),
globals.MaglevModuleWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderRubySourceCodeFor:",
protocol: 'rendering',
fn: function (selectorString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@object"])._sourceCodeFor_language_withCallback_(selectorString,"ruby",(function(obj){
return smalltalk.withContext(function($ctx2) {
return self._renderMethodObject_(obj);
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderRubySourceCodeFor:",{selectorString:selectorString},globals.MaglevModuleWindow)})},
args: ["selectorString"],
source: "renderRubySourceCodeFor: selectorString\x0a\x09object \x0a\x09\x09sourceCodeFor: selectorString \x0a\x09\x09language: 'ruby'\x0a\x09\x09withCallback: [:obj | self renderMethodObject: obj].",
messageSends: ["sourceCodeFor:language:withCallback:", "renderMethodObject:"],
referencedClasses: []
}),
globals.MaglevModuleWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSelectorCategories",
protocol: 'rendering',
fn: function (){
var self=this;
function $MaglevIconImage(){return globals.MaglevIconImage||(typeof MaglevIconImage=="undefined"?nil:MaglevIconImage)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@categoryNamesSelect"])._clear();
_st(self["@selectors"])._keysAndValuesDo_((function(category,catSelectors){
return smalltalk.withContext(function($ctx2) {
return _st(self["@categoryNamesSelect"])._with_data_((function(html){
return smalltalk.withContext(function($ctx3) {
$1=_st(category).__eq("(all Ruby)");
if(smalltalk.assert($1)){
_st(html)._with_(_st($MaglevIconImage())._ruby());
$ctx3.sendIdx["with:"]=1;
} else {
_st(html)._with_(_st($MaglevIconImage())._smalltalk());
$ctx3.sendIdx["with:"]=2;
};
return _st(html)._with_(category);
}, function($ctx3) {$ctx3.fillBlock({html:html},$ctx2,2)})}),category);
}, function($ctx2) {$ctx2.fillBlock({category:category,catSelectors:catSelectors},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSelectorCategories",{},globals.MaglevModuleWindow)})},
args: [],
source: "renderSelectorCategories\x0a\x09categoryNamesSelect clear.\x0a\x09selectors keysAndValuesDo: [:category :catSelectors |\x0a\x09\x09categoryNamesSelect with: [:html |\x0a\x09\x09\x09category = '(all Ruby)' \x0a\x09\x09\x09\x09ifTrue: [html with: MaglevIconImage ruby]\x0a\x09\x09\x09\x09ifFalse: [html with: MaglevIconImage smalltalk].\x0a\x09\x09\x09html with: category]\x0a\x09\x09\x09data: category].",
messageSends: ["clear", "keysAndValuesDo:", "with:data:", "ifTrue:ifFalse:", "=", "with:", "ruby", "smalltalk"],
referencedClasses: ["MaglevIconImage"]
}),
globals.MaglevModuleWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSelectors:",
protocol: 'interactions',
fn: function (selectedCategory){
var self=this;
var currentSelectors;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@selectorsSelect"])._clear();
currentSelectors=_st(self["@selectors"])._at_(selectedCategory);
$1=currentSelectors;
if(($receiver = $1) == nil || $receiver == null){
return self;
} else {
$1;
};
_st(currentSelectors)._do_((function(sel){
return smalltalk.withContext(function($ctx2) {
return _st(self["@selectorsSelect"])._with_data_((function(html){
return smalltalk.withContext(function($ctx3) {
return _st(html)._with_(sel);
}, function($ctx3) {$ctx3.fillBlock({html:html},$ctx2,3)})}),sel);
}, function($ctx2) {$ctx2.fillBlock({sel:sel},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSelectors:",{selectedCategory:selectedCategory,currentSelectors:currentSelectors},globals.MaglevModuleWindow)})},
args: ["selectedCategory"],
source: "renderSelectors: selectedCategory\x0a\x09|currentSelectors|\x0a\x09selectorsSelect clear.\x0a\x09currentSelectors := selectors at: selectedCategory.\x0a\x09currentSelectors ifNil: [^ self].\x0a\x09currentSelectors do: [:sel |\x0a\x09\x09selectorsSelect \x0a\x09\x09\x09with: [:html | html with: sel]\x0a\x09\x09\x09data: sel].",
messageSends: ["clear", "at:", "ifNil:", "do:", "with:data:", "with:"],
referencedClasses: []
}),
globals.MaglevModuleWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSmalltalkSourceCodeFor:",
protocol: 'rendering',
fn: function (selectorString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@object"])._sourceCodeFor_language_withCallback_(selectorString,"smalltalk",(function(obj){
return smalltalk.withContext(function($ctx2) {
return self._renderMethodObject_(obj);
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderSmalltalkSourceCodeFor:",{selectorString:selectorString},globals.MaglevModuleWindow)})},
args: ["selectorString"],
source: "renderSmalltalkSourceCodeFor: selectorString\x0a\x09object \x0a\x09\x09sourceCodeFor: selectorString \x0a\x09\x09language: 'smalltalk'\x0a\x09\x09withCallback: [:obj | self renderMethodObject: obj].",
messageSends: ["sourceCodeFor:language:withCallback:", "renderMethodObject:"],
referencedClasses: []
}),
globals.MaglevModuleWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderSourceCode:",
protocol: 'interactions',
fn: function (selectorString){
var self=this;
var selectedCategory;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self["@methodContainer"])._asJQuery())._empty();
if(($receiver = selectorString) == nil || $receiver == null){
return self;
} else {
selectorString;
};
_st(self["@waitingScreen"])._show();
selectedCategory=self._selectedCategoryString();
$1=_st(selectedCategory).__eq("(all Ruby)");
if(smalltalk.assert($1)){
self._renderRubySourceCodeFor_(selectorString);
} else {
self._renderSmalltalkSourceCodeFor_(selectorString);
};
return self}, function($ctx1) {$ctx1.fill(self,"renderSourceCode:",{selectorString:selectorString,selectedCategory:selectedCategory},globals.MaglevModuleWindow)})},
args: ["selectorString"],
source: "renderSourceCode: selectorString\x0a\x09|selectedCategory|\x0a\x09methodContainer asJQuery empty.\x0a\x09selectorString ifNil: [^ self].\x0a\x09waitingScreen show.\x0a\x09selectedCategory := self selectedCategoryString.\x0a\x09selectedCategory = '(all Ruby)'\x0a\x09\x09ifTrue: [self renderRubySourceCodeFor: selectorString]\x0a\x09\x09ifFalse: [self renderSmalltalkSourceCodeFor: selectorString].",
messageSends: ["empty", "asJQuery", "ifNil:", "show", "selectedCategoryString", "ifTrue:ifFalse:", "=", "renderRubySourceCodeFor:", "renderSmalltalkSourceCodeFor:"],
referencedClasses: []
}),
globals.MaglevModuleWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "replaceHierarchySubclasses",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 self['@hierarchyContainer']._asJQuery().find("[data-replace-me='1']").each(function(idx, el) {
		// TODO: jQuery not working here for unknown reasons
		el.getElementsByTagName('a')[0].remove();
		el.removeAttribute('data-replace-me');
		var jqEl = $(el);
		self._renderInlineViewFor_inside_(jqEl.data('oop'), jqEl);
	}); ;
return self}, function($ctx1) {$ctx1.fill(self,"replaceHierarchySubclasses",{},globals.MaglevModuleWindow)})},
args: [],
source: "replaceHierarchySubclasses\x0a\x09< self['@hierarchyContainer']._asJQuery().find(\x22[data-replace-me='1']\x22).each(function(idx, el) {\x0a\x09\x09// TODO: jQuery not working here for unknown reasons\x0a\x09\x09el.getElementsByTagName('a')[0].remove();\x0a\x09\x09el.removeAttribute('data-replace-me');\x0a\x09\x09var jqEl = $(el);\x0a\x09\x09self._renderInlineViewFor_inside_(jqEl.data('oop'), jqEl);\x0a\x09}); >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevModuleWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "selectedCategoryString",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@categoryNamesSelect"])._selectedData();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectedCategoryString",{},globals.MaglevModuleWindow)})},
args: [],
source: "selectedCategoryString\x0a\x09^ categoryNamesSelect selectedData",
messageSends: ["selectedData"],
referencedClasses: []
}),
globals.MaglevModuleWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "sortList:",
protocol: 'rendering',
fn: function (aListBox){
var self=this;
var box,children;
return smalltalk.withContext(function($ctx1) { 
box=_st(aListBox)._asJQuery();
_st(box)._empty();
_st(children)._appendTo_(box);
return self}, function($ctx1) {$ctx1.fill(self,"sortList:",{aListBox:aListBox,box:box,children:children},globals.MaglevModuleWindow)})},
args: ["aListBox"],
source: "sortList: aListBox\x0a\x09|box children|\x0a\x09box := aListBox asJQuery.\x0a\x09\x22< children = box.children('option').sort(function (a, b) {return a.innerHTML >> b.innerHTML ? 1 : -1}); >.\x22\x0a\x09box empty.\x0a\x09children appendTo: box.",
messageSends: ["asJQuery", "empty", "appendTo:"],
referencedClasses: []
}),
globals.MaglevModuleWindow);



smalltalk.addClass('MaglevClassWindow', globals.MaglevModuleWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "checkAddConnectionTo:",
protocol: 'rendering',
fn: function (aWindow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
globals.MaglevClassWindow.superclass.fn.prototype._checkAddConnectionTo_.apply(_st(self), [aWindow]);
$1=_st(_st(self["@object"])._superclassObject()).__eq_eq(_st(aWindow)._object());
if(smalltalk.assert($1)){
self._connectTo_as_with_(aWindow,"superclass",nil);
};
return self}, function($ctx1) {$ctx1.fill(self,"checkAddConnectionTo:",{aWindow:aWindow},globals.MaglevClassWindow)})},
args: ["aWindow"],
source: "checkAddConnectionTo: aWindow\x0a\x09super checkAddConnectionTo: aWindow.\x0a\x09object superclassObject == aWindow object ifTrue: [self connectTo: aWindow as: #superclass with: nil].",
messageSends: ["checkAddConnectionTo:", "ifTrue:", "==", "superclassObject", "object", "connectTo:as:with:"],
referencedClasses: []
}),
globals.MaglevClassWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "contentTabs",
protocol: 'rendering',
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1;
result=globals.MaglevClassWindow.superclass.fn.prototype._contentTabs.apply(_st(self), []);
_st(result)._at_put_("Instances","renderInstancesOn:");
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"contentTabs",{result:result},globals.MaglevClassWindow)})},
args: [],
source: "contentTabs\x0a\x09|result|\x0a\x09result := super contentTabs.\x0a\x09result at: 'Instances' put: #renderInstancesOn:.\x0a\x09^ result",
messageSends: ["contentTabs", "at:put:"],
referencedClasses: []
}),
globals.MaglevClassWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderInstancesOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st(self["@object"])._instancesViewComponent());
return self}, function($ctx1) {$ctx1.fill(self,"renderInstancesOn:",{html:html},globals.MaglevClassWindow)})},
args: ["html"],
source: "renderInstancesOn: html\x0a\x09html with: object instancesViewComponent.",
messageSends: ["with:", "instancesViewComponent"],
referencedClasses: []
}),
globals.MaglevClassWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderWindowTitleContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3,$6,$7;
_st(html)._with_(_st(self["@object"])._inlineViewComponentShort());
$ctx1.sendIdx["with:"]=1;
_st(html)._with_(" < ");
$ctx1.sendIdx["with:"]=2;
$1=_st(html)._with_(_st(_st(self["@object"])._superclassObject())._inlineViewComponent());
$ctx1.sendIdx["with:"]=3;
_st(html)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(html)._span();
_st($2)._style_("margin-left: 5px;");
$4=$2;
$5=_st("<0x".__comma(_st(_st(self["@object"])._oop())._asHexString())).__comma(">");
$ctx2.sendIdx[","]=1;
$3=_st($4)._with_($5);
$ctx2.sendIdx["with:"]=5;
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=4;
self._renderHeightPlaceholderOn_(html);
$6=_st(html)._div();
_st($6)._class_("right-inline-block");
$7=_st($6)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderVirtualClassAndClassOn_(html);
return self._renderCloseButtonOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderWindowTitleContentOn:",{html:html},globals.MaglevClassWindow)})},
args: ["html"],
source: "renderWindowTitleContentOn: html\x0a\x09html \x0a\x09\x09with: object inlineViewComponentShort;\x0a\x09\x09with: ' < ';\x0a\x09\x09with: object superclassObject inlineViewComponent.\x0a\x09html with: [\x0a\x09\x09html span\x0a\x09\x09\x09style: 'margin-left: 5px;';\x0a\x09\x09\x09with: '<0x', object oop asHexString, '>'].\x0a\x09self renderHeightPlaceholderOn: html.\x0a\x09html div\x0a\x09\x09class: 'right-inline-block';\x0a\x09\x09with: [\x0a\x09\x09\x09self renderVirtualClassAndClassOn: html.\x0a\x09\x09\x09self renderCloseButtonOn: html].",
messageSends: ["with:", "inlineViewComponentShort", "inlineViewComponent", "superclassObject", "style:", "span", ",", "asHexString", "oop", "renderHeightPlaceholderOn:", "class:", "div", "renderVirtualClassAndClassOn:", "renderCloseButtonOn:"],
referencedClasses: []
}),
globals.MaglevClassWindow);



smalltalk.addClass('MaglevSystemClassWindow', globals.MaglevClassWindow, ['transactionResultBox'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "abortTransaction",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._showTransactionWaitingBox();
_st(self["@object"])._evaluate_language_withCallback_("self.__DBEAbortTransaction","ruby",(function(success,resultObj){
return smalltalk.withContext(function($ctx2) {
_st(_st(self["@transactionResultBox"])._asJQuery())._empty();
_st(self["@transactionResultBox"])._removeClass_("alert-info");
if(smalltalk.assert(success)){
_st(self["@transactionResultBox"])._addClass_("alert-success");
$ctx2.sendIdx["addClass:"]=1;
} else {
_st(self["@transactionResultBox"])._addClass_("alert-error");
};
return _st(self["@transactionResultBox"])._with_(_st(resultObj)._inlineViewComponent());
}, function($ctx2) {$ctx2.fillBlock({success:success,resultObj:resultObj},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"abortTransaction",{},globals.MaglevSystemClassWindow)})},
args: [],
source: "abortTransaction\x0a\x09self showTransactionWaitingBox.\x0a\x09object \x0a\x09\x09evaluate: 'self.__DBEAbortTransaction'\x0a\x09\x09language: 'ruby'\x0a\x09\x09withCallback: [:success :resultObj |\x0a\x09\x09\x09transactionResultBox asJQuery empty.\x0a\x09\x09\x09transactionResultBox removeClass: 'alert-info'.\x0a\x09\x09\x09success\x0a\x09\x09\x09\x09ifTrue: [transactionResultBox addClass: 'alert-success']\x0a\x09\x09\x09\x09ifFalse: [transactionResultBox addClass: 'alert-error'].\x0a\x09\x09\x09transactionResultBox with: resultObj inlineViewComponent].",
messageSends: ["showTransactionWaitingBox", "evaluate:language:withCallback:", "empty", "asJQuery", "removeClass:", "ifTrue:ifFalse:", "addClass:", "with:", "inlineViewComponent"],
referencedClasses: []
}),
globals.MaglevSystemClassWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "commitTransaction",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._showTransactionWaitingBox();
_st(self["@object"])._evaluate_language_withCallback_("self.__DBECommitTransaction","ruby",(function(success,resultObj){
return smalltalk.withContext(function($ctx2) {
_st(_st(self["@transactionResultBox"])._asJQuery())._empty();
_st(self["@transactionResultBox"])._removeClass_("alert-info");
if(smalltalk.assert(success)){
_st(self["@transactionResultBox"])._addClass_("alert-success");
$ctx2.sendIdx["addClass:"]=1;
} else {
_st(self["@transactionResultBox"])._addClass_("alert-error");
};
return _st(self["@transactionResultBox"])._with_(_st(resultObj)._inlineViewComponent());
}, function($ctx2) {$ctx2.fillBlock({success:success,resultObj:resultObj},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"commitTransaction",{},globals.MaglevSystemClassWindow)})},
args: [],
source: "commitTransaction\x0a\x09self showTransactionWaitingBox.\x0a\x09object \x0a\x09\x09evaluate: 'self.__DBECommitTransaction'\x0a\x09\x09language: 'ruby'\x0a\x09\x09withCallback: [:success :resultObj |\x0a\x09\x09\x09transactionResultBox asJQuery empty.\x0a\x09\x09\x09transactionResultBox removeClass: 'alert-info'.\x0a\x09\x09\x09success\x0a\x09\x09\x09\x09ifTrue: [transactionResultBox addClass: 'alert-success']\x0a\x09\x09\x09\x09ifFalse: [transactionResultBox addClass: 'alert-error'].\x0a\x09\x09\x09transactionResultBox with: resultObj inlineViewComponent].",
messageSends: ["showTransactionWaitingBox", "evaluate:language:withCallback:", "empty", "asJQuery", "removeClass:", "ifTrue:ifFalse:", "addClass:", "with:", "inlineViewComponent"],
referencedClasses: []
}),
globals.MaglevSystemClassWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "contentTabs",
protocol: 'rendering',
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1;
result=globals.MaglevSystemClassWindow.superclass.fn.prototype._contentTabs.apply(_st(self), []);
_st(result)._at_put_("Stone Version Report","renderStoneVersionReportOn:");
$ctx1.sendIdx["at:put:"]=1;
_st(result)._at_put_("Gem Version Report","renderGemVersionReportOn:");
$ctx1.sendIdx["at:put:"]=2;
_st(result)._at_put_("Control Panel","renderControlPanelOn:");
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"contentTabs",{result:result},globals.MaglevSystemClassWindow)})},
args: [],
source: "contentTabs\x0a\x09|result|\x0a\x09result := super contentTabs.\x0a\x09result at: 'Stone Version Report' put: #renderStoneVersionReportOn:.\x0a\x09result at: 'Gem Version Report' put: #renderGemVersionReportOn:.\x0a\x09result at: 'Control Panel' put: #renderControlPanelOn:.\x0a\x09^ result",
messageSends: ["contentTabs", "at:put:"],
referencedClasses: []
}),
globals.MaglevSystemClassWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "continueTransaction",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._showTransactionWaitingBox();
_st(self["@object"])._evaluate_language_withCallback_("self.__DBEContinueTransaction","ruby",(function(success,resultObj){
return smalltalk.withContext(function($ctx2) {
_st(_st(self["@transactionResultBox"])._asJQuery())._empty();
_st(self["@transactionResultBox"])._removeClass_("alert-info");
if(smalltalk.assert(success)){
_st(self["@transactionResultBox"])._addClass_("alert-success");
$ctx2.sendIdx["addClass:"]=1;
} else {
_st(self["@transactionResultBox"])._addClass_("alert-error");
};
return _st(self["@transactionResultBox"])._with_(_st(resultObj)._inlineViewComponent());
}, function($ctx2) {$ctx2.fillBlock({success:success,resultObj:resultObj},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"continueTransaction",{},globals.MaglevSystemClassWindow)})},
args: [],
source: "continueTransaction\x0a\x09self showTransactionWaitingBox.\x0a\x09object \x0a\x09\x09evaluate: 'self.__DBEContinueTransaction'\x0a\x09\x09language: 'ruby'\x0a\x09\x09withCallback: [:success :resultObj |\x0a\x09\x09\x09transactionResultBox asJQuery empty.\x0a\x09\x09\x09transactionResultBox removeClass: 'alert-info'.\x0a\x09\x09\x09success\x0a\x09\x09\x09\x09ifTrue: [transactionResultBox addClass: 'alert-success']\x0a\x09\x09\x09\x09ifFalse: [transactionResultBox addClass: 'alert-error'].\x0a\x09\x09\x09transactionResultBox with: resultObj inlineViewComponent].",
messageSends: ["showTransactionWaitingBox", "evaluate:language:withCallback:", "empty", "asJQuery", "removeClass:", "ifTrue:ifFalse:", "addClass:", "with:", "inlineViewComponent"],
referencedClasses: []
}),
globals.MaglevSystemClassWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultTab",
protocol: 'interactions',
fn: function (){
var self=this;
return "Control Panel";
},
args: [],
source: "defaultTab\x0a\x09^ 'Control Panel'",
messageSends: [],
referencedClasses: []
}),
globals.MaglevSystemClassWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderControlPanelOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$2;
_st(html)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._div();
$ctx2.sendIdx["div"]=1;
_st($1)._class_("well");
$ctx2.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._input();
$ctx3.sendIdx["input"]=1;
_st($3)._type_("button");
$ctx3.sendIdx["type:"]=1;
_st($3)._class_("btn btn-warning");
$ctx3.sendIdx["class:"]=2;
_st($3)._value_("Abort Transaction");
$ctx3.sendIdx["value:"]=1;
_st($3)._style_("width: 32%; margin-right: 1%;");
$ctx3.sendIdx["style:"]=1;
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._abortTransaction();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["onClick:"]=1;
$4;
$5=_st(html)._input();
$ctx3.sendIdx["input"]=2;
_st($5)._type_("button");
$ctx3.sendIdx["type:"]=2;
_st($5)._class_("btn btn-warning");
$ctx3.sendIdx["class:"]=3;
_st($5)._value_("Commit Transaction");
$ctx3.sendIdx["value:"]=2;
_st($5)._style_("width: 32%; margin-right: 1%;");
$ctx3.sendIdx["style:"]=2;
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._commitTransaction();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
$ctx3.sendIdx["onClick:"]=2;
$6;
$7=_st(html)._input();
_st($7)._type_("button");
_st($7)._class_("btn btn-warning");
$ctx3.sendIdx["class:"]=4;
_st($7)._value_("Continue Transaction");
_st($7)._style_("width: 33%;");
$ctx3.sendIdx["style:"]=3;
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._continueTransaction();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)})}));
$8;
$9=_st(html)._div();
_st($9)._style_("margin-top: 10px; margin-bottom: 0px;");
_st($9)._class_("alert");
$10=_st($9)._hide();
self["@transactionResultBox"]=$10;
return self["@transactionResultBox"];
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderControlPanelOn:",{html:html},globals.MaglevSystemClassWindow)})},
args: ["html"],
source: "renderControlPanelOn: html\x0a\x09html with:\x09[\x0a\x09\x09html div\x0a\x09\x09\x09class: 'well';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html input\x0a\x09\x09\x09\x09\x09type: 'button';\x0a\x09\x09\x09\x09\x09class: 'btn btn-warning';\x0a\x09\x09\x09\x09\x09value: 'Abort Transaction';\x0a\x09\x09\x09\x09\x09style: 'width: 32%; margin-right: 1%;';\x0a\x09\x09\x09\x09\x09onClick: [self abortTransaction].\x0a\x09\x09\x09\x09html input\x0a\x09\x09\x09\x09\x09type: 'button';\x0a\x09\x09\x09\x09\x09class: 'btn btn-warning';\x0a\x09\x09\x09\x09\x09value: 'Commit Transaction';\x0a\x09\x09\x09\x09\x09style: 'width: 32%; margin-right: 1%;';\x0a\x09\x09\x09\x09\x09onClick: [self commitTransaction].\x0a\x09\x09\x09\x09html input\x0a\x09\x09\x09\x09\x09type: 'button';\x0a\x09\x09\x09\x09\x09class: 'btn btn-warning';\x0a\x09\x09\x09\x09\x09value: 'Continue Transaction';\x0a\x09\x09\x09\x09\x09style: 'width: 33%;';\x0a\x09\x09\x09\x09\x09onClick: [self continueTransaction].\x0a\x09\x09\x09\x09transactionResultBox := html div\x0a\x09\x09\x09\x09\x09style: 'margin-top: 10px; margin-bottom: 0px;';\x0a\x09\x09\x09\x09\x09class: 'alert';\x0a\x09\x09\x09\x09\x09hide]].",
messageSends: ["with:", "class:", "div", "type:", "input", "value:", "style:", "onClick:", "abortTransaction", "commitTransaction", "continueTransaction", "hide"],
referencedClasses: []
}),
globals.MaglevSystemClassWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderGemVersionReportOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevTable(){return globals.MaglevTable||(typeof MaglevTable=="undefined"?nil:MaglevTable)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($MaglevTable())._newAssociationDictFor_with_(self._object(),"gemVersionReport"));
return self}, function($ctx1) {$ctx1.fill(self,"renderGemVersionReportOn:",{html:html},globals.MaglevSystemClassWindow)})},
args: ["html"],
source: "renderGemVersionReportOn: html\x0a\x09html with: (MaglevTable newAssociationDictFor: self object with: #gemVersionReport).",
messageSends: ["with:", "newAssociationDictFor:with:", "object"],
referencedClasses: ["MaglevTable"]
}),
globals.MaglevSystemClassWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderStoneVersionReportOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevTable(){return globals.MaglevTable||(typeof MaglevTable=="undefined"?nil:MaglevTable)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($MaglevTable())._newAssociationDictFor_with_(self._object(),"stoneVersionReport"));
return self}, function($ctx1) {$ctx1.fill(self,"renderStoneVersionReportOn:",{html:html},globals.MaglevSystemClassWindow)})},
args: ["html"],
source: "renderStoneVersionReportOn: html\x0a\x09html with: (MaglevTable newAssociationDictFor: self object with: #stoneVersionReport).",
messageSends: ["with:", "newAssociationDictFor:with:", "object"],
referencedClasses: ["MaglevTable"]
}),
globals.MaglevSystemClassWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "showTransactionWaitingBox",
protocol: 'rendering',
fn: function (){
var self=this;
function $MaglevIcon(){return globals.MaglevIcon||(typeof MaglevIcon=="undefined"?nil:MaglevIcon)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self["@transactionResultBox"];
_st($1)._addClass_("alert-info");
_st($1)._removeClass_("alert-success");
$ctx1.sendIdx["removeClass:"]=1;
$2=_st($1)._removeClass_("alert-error");
_st(_st(self["@transactionResultBox"])._asJQuery())._empty();
$3=self["@transactionResultBox"];
_st($3)._with_(_st($MaglevIcon())._wait());
$ctx1.sendIdx["with:"]=1;
_st($3)._with_(" loading...");
$4=_st($3)._show();
return self}, function($ctx1) {$ctx1.fill(self,"showTransactionWaitingBox",{},globals.MaglevSystemClassWindow)})},
args: [],
source: "showTransactionWaitingBox\x0a\x09transactionResultBox\x0a\x09\x09addClass: 'alert-info';\x0a\x09\x09removeClass: 'alert-success';\x0a\x09\x09removeClass: 'alert-error'.\x0a\x09transactionResultBox asJQuery empty.\x0a\x09transactionResultBox\x0a\x09\x09with: MaglevIcon wait;\x0a\x09\x09with: ' loading...';\x0a\x09\x09show.",
messageSends: ["addClass:", "removeClass:", "empty", "asJQuery", "with:", "wait", "show"],
referencedClasses: ["MaglevIcon"]
}),
globals.MaglevSystemClassWindow);



smalltalk.addClass('MaglevNilClassWindow', globals.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevRubyWorkspaceWindow', globals.MaglevObjectWindow, ['terminalBox', 'commandBox'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "contentTabs",
protocol: 'rendering',
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1;
result=globals.MaglevRubyWorkspaceWindow.superclass.fn.prototype._contentTabs.apply(_st(self), []);
_st(result)._at_put_("Workspace","renderWorkspaceOn:");
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"contentTabs",{result:result},globals.MaglevRubyWorkspaceWindow)})},
args: [],
source: "contentTabs\x0a\x09|result|\x0a\x09result := super contentTabs.\x0a\x09result at: 'Workspace' put: #renderWorkspaceOn:.\x0a\x09^ result",
messageSends: ["contentTabs", "at:put:"],
referencedClasses: []
}),
globals.MaglevRubyWorkspaceWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultTab",
protocol: 'interactions',
fn: function (){
var self=this;
return "Workspace";
},
args: [],
source: "defaultTab\x0a\x09^ 'Workspace'",
messageSends: [],
referencedClasses: []
}),
globals.MaglevRubyWorkspaceWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "handleEnter",
protocol: 'interactions',
fn: function (){
var self=this;
var command,html;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$6,$7,$5,$8,$9,$11,$10,$12,$13,$14;
$1=_st(self["@terminalBox"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
html=_st($HTMLCanvas())._onJQuery_($1);
$2=_st(self["@commandBox"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=2;
command=_st($2)._val();
command=_st(command)._replace_with_("'","''");
$3=_st(self["@commandBox"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=3;
_st($3)._prop_value_("disabled",true);
$ctx1.sendIdx["prop:value:"]=1;
$4=html;
_st($4)._with_(command);
$ctx1.sendIdx["with:"]=1;
$6=$4;
$7=_st(html)._br();
$ctx1.sendIdx["br"]=1;
$5=_st($6)._with_($7);
$ctx1.sendIdx["with:"]=2;
$8=self["@object"];
$9=_st("self.evaluate('".__comma(command)).__comma("')");
$ctx1.sendIdx[","]=1;
_st($8)._evaluate_language_withCallback_($9,"ruby",(function(success,resultObj){
var class_;
return smalltalk.withContext(function($ctx2) {
$11=_st(resultObj)._at_((1));
$ctx2.sendIdx["at:"]=1;
$10=_st($11)._value();
if(smalltalk.assert($10)){
class_="alert alert-error";
class_;
} else {
class_="alert alert-success";
class_;
};
_st(self["@terminalBox"])._with_((function(){
return smalltalk.withContext(function($ctx3) {
$12=_st(html)._div();
_st($12)._class_(class_);
_st($12)._with_("=> ");
$ctx3.sendIdx["with:"]=4;
_st($12)._with_(_st(_st(resultObj)._at_((2)))._inlineViewComponent());
$ctx3.sendIdx["with:"]=5;
$13=_st($12)._with_(_st(html)._br());
return $13;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["with:"]=3;
self._scrollToBottom();
$14=_st(self["@commandBox"])._asJQuery();
$ctx2.sendIdx["asJQuery"]=4;
_st($14)._prop_value_("disabled",false);
return _st(_st(self["@commandBox"])._asJQuery())._val_("");
}, function($ctx2) {$ctx2.fillBlock({success:success,resultObj:resultObj,class_:class_},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"handleEnter",{command:command,html:html},globals.MaglevRubyWorkspaceWindow)})},
args: [],
source: "handleEnter\x0a\x09|command html|\x0a\x09html := HTMLCanvas onJQuery: terminalBox asJQuery.\x0a\x09command := commandBox asJQuery val.\x0a\x09command := command replace: '''' with: ''''''.\x0a\x09commandBox asJQuery prop: 'disabled' value: true.\x0a\x09html\x0a\x09\x09with: command;\x0a\x09\x09with: html br.\x0a\x09object \x0a\x09\x09evaluate: 'self.evaluate(''', command, ''')'\x0a\x09\x09language: 'ruby'\x0a\x09\x09withCallback: [:success :resultObj | |class|\x0a\x09\x09\x09(resultObj at: 1) value\x0a\x09\x09\x09\x09ifTrue: [class := 'alert alert-error']\x0a\x09\x09\x09\x09ifFalse: [class := 'alert alert-success'].\x0a\x09\x09\x09terminalBox with: [html div\x0a\x09\x09\x09\x09class: class;\x0a\x09\x09\x09\x09with: '=> ';\x0a\x09\x09\x09\x09with: (resultObj at: 2) inlineViewComponent;\x0a\x09\x09\x09\x09with: html br].\x0a\x09\x09\x09self scrollToBottom.\x0a\x09\x09\x09commandBox asJQuery prop: 'disabled' value: false.\x0a\x09\x09\x09commandBox asJQuery val: ''].",
messageSends: ["onJQuery:", "asJQuery", "val", "replace:with:", "prop:value:", "with:", "br", "evaluate:language:withCallback:", ",", "ifTrue:ifFalse:", "value", "at:", "class:", "div", "inlineViewComponent", "scrollToBottom", "val:"],
referencedClasses: ["HTMLCanvas"]
}),
globals.MaglevRubyWorkspaceWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseFix",
protocol: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var editor = self['@terminalBox'];
	editor._asJQuery().mousedown(function (event) {
		event.preventDefault();
		return false;
	}); ;
return self}, function($ctx1) {$ctx1.fill(self,"mouseFix",{},globals.MaglevRubyWorkspaceWindow)})},
args: [],
source: "mouseFix\x0a\x09< var editor = self['@terminalBox'];\x0a\x09editor._asJQuery().mousedown(function (event) {\x0a\x09\x09event.preventDefault();\x0a\x09\x09return false;\x0a\x09}); >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevRubyWorkspaceWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderWorkspaceOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
self["@terminalBox"]=_st(_st(html)._pre())._style_("height: 350px; overflow-y: scroll; overflow-x: hidden; color: #000000;");
$ctx1.sendIdx["style:"]=1;
$1=_st(html)._input();
_st($1)._type_("text");
_st($1)._style_("width: 97%;");
$2=_st($1)._onKeyPress_((function(evt){
return smalltalk.withContext(function($ctx2) {
$3=_st(_st(evt)._keyCode()).__eq_eq((13));
if(smalltalk.assert($3)){
return self._handleEnter();
};
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)})}));
self["@commandBox"]=$2;
self._mouseFix();
return self}, function($ctx1) {$ctx1.fill(self,"renderWorkspaceOn:",{html:html},globals.MaglevRubyWorkspaceWindow)})},
args: ["html"],
source: "renderWorkspaceOn: html\x0a\x09terminalBox := html pre\x0a\x09\x09style: 'height: 350px; overflow-y: scroll; overflow-x: hidden; color: #000000;'.\x0a\x09commandBox := html input\x0a\x09\x09type: 'text';\x0a\x09\x09style: 'width: 97%;';\x0a\x09\x09onKeyPress: [:evt | evt keyCode == 13 \x0a\x09\x09\x09ifTrue: [self handleEnter]].\x0a\x09self mouseFix.",
messageSends: ["style:", "pre", "type:", "input", "onKeyPress:", "ifTrue:", "==", "keyCode", "handleEnter", "mouseFix"],
referencedClasses: []
}),
globals.MaglevRubyWorkspaceWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "scrollToBottom",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@terminalBox"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._scrollTop_(_st(_st(_st(self["@terminalBox"])._asJQuery())._at_((0)))._scrollHeight());
return self}, function($ctx1) {$ctx1.fill(self,"scrollToBottom",{},globals.MaglevRubyWorkspaceWindow)})},
args: [],
source: "scrollToBottom\x0a\x09terminalBox asJQuery scrollTop: (terminalBox asJQuery at: 0) scrollHeight.",
messageSends: ["scrollTop:", "asJQuery", "scrollHeight", "at:"],
referencedClasses: []
}),
globals.MaglevRubyWorkspaceWindow);



smalltalk.addClass('MaglevStringWindow', globals.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevSymbolWindow', globals.MaglevObjectWindow, [], 'Maglev-Database-Explorer');


smalltalk.addClass('MaglevThreadWindow', globals.MaglevObjectWindow, ['methodSelect', 'methodContainer', 'waitingScreen', 'waitForStackTrace'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "contentTabs",
protocol: 'rendering',
fn: function (){
var self=this;
var result;
return smalltalk.withContext(function($ctx1) { 
var $1;
result=globals.MaglevThreadWindow.superclass.fn.prototype._contentTabs.apply(_st(self), []);
_st(result)._at_put_("Stack Trace","renderStackTraceOn:");
$ctx1.sendIdx["at:put:"]=1;
_st(result)._at_put_("Thread Local Storage","renderLocalStorageOn:");
$1=result;
return $1;
}, function($ctx1) {$ctx1.fill(self,"contentTabs",{result:result},globals.MaglevThreadWindow)})},
args: [],
source: "contentTabs\x0a\x09|result|\x0a\x09result := super contentTabs.\x0a\x09result at: 'Stack Trace' put: #renderStackTraceOn:.\x0a\x09result at: 'Thread Local Storage' put: #renderLocalStorageOn:.\x0a\x09^ result",
messageSends: ["contentTabs", "at:put:"],
referencedClasses: []
}),
globals.MaglevThreadWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultTab",
protocol: 'interactions',
fn: function (){
var self=this;
return "Stack Trace";
},
args: [],
source: "defaultTab\x0a\x09^ 'Stack Trace'",
messageSends: [],
referencedClasses: []
}),
globals.MaglevThreadWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "frameIndex",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@methodSelect"])._selectedDataIndex();
return $1;
}, function($ctx1) {$ctx1.fill(self,"frameIndex",{},globals.MaglevThreadWindow)})},
args: [],
source: "frameIndex\x0a\x09^ methodSelect selectedDataIndex",
messageSends: ["selectedDataIndex"],
referencedClasses: []
}),
globals.MaglevThreadWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "isMethodUnimportant:",
protocol: 'interactions',
fn: function (aString){
var self=this;
var unimportant;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
unimportant=["AbstractException >>","AbstractException class","GsProcess >>","GsProcess class","ProcessorScheduler >>","ProcessorScheduler class","CodeEvaluation class","RubyCompiler >>","RubyCompiler class","onException:do:","RubyProc >> callAndRescue:","_gsReturnToC",">> onSynchronous:do:","ExecBlock >> ensure:","ExecBlock >> rubyEnsure:"];
_st(unimportant)._do_((function(str){
return smalltalk.withContext(function($ctx2) {
$1=_st(aString)._includesSubString_(str);
if(smalltalk.assert($1)){
throw $early=[true];
};
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)})}));
return false;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"isMethodUnimportant:",{aString:aString,unimportant:unimportant},globals.MaglevThreadWindow)})},
args: ["aString"],
source: "isMethodUnimportant: aString\x0a\x09|unimportant|\x0a\x09unimportant := {'AbstractException >>'.  'AbstractException class'. 'GsProcess >>'. 'GsProcess class'. \x0a\x09\x09\x09'ProcessorScheduler >>'. 'ProcessorScheduler class'. 'CodeEvaluation class'. 'RubyCompiler >>'. \x0a\x09\x09\x09'RubyCompiler class'. 'onException:do:'. 'RubyProc >> callAndRescue:'. '_gsReturnToC'. \x0a\x09\x09\x09'>> onSynchronous:do:'. 'ExecBlock >> ensure:'. 'ExecBlock >> rubyEnsure:'}.\x0a\x09unimportant do: [:str |\x0a\x09\x09(aString includesSubString: str) \x0a\x09\x09\x09ifTrue: [^ true]].\x0a\x09^ false",
messageSends: ["do:", "ifTrue:", "includesSubString:"],
referencedClasses: []
}),
globals.MaglevThreadWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "proceed",
protocol: 'interactions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@object"])._proceedWithCallback_((function(obj){
return smalltalk.withContext(function($ctx2) {
return _st(self["@object"])._fullReloadWithCallback_((function(threadReloaded){
return smalltalk.withContext(function($ctx3) {
$1=_st(self["@object"])._isRailsThread();
if(smalltalk.assert($1)){
return self._closeWindow();
} else {
return _st(_st(threadReloaded)._windowViewComponentReplace_(self))._renderReplace();
};
}, function($ctx3) {$ctx3.fillBlock({threadReloaded:threadReloaded},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"proceed",{},globals.MaglevThreadWindow)})},
args: [],
source: "proceed\x0a\x09object \x0a\x09\x09proceedWithCallback: [:obj | \x0a\x09\x09\x09object fullReloadWithCallback: [:threadReloaded |\x0a\x09\x09\x09\x09object isRailsThread\x0a\x09\x09\x09\x09\x09ifTrue: [self closeWindow]\x0a\x09\x09\x09\x09\x09ifFalse: [(threadReloaded windowViewComponentReplace: self) renderReplace]]].",
messageSends: ["proceedWithCallback:", "fullReloadWithCallback:", "ifTrue:ifFalse:", "isRailsThread", "closeWindow", "renderReplace", "windowViewComponentReplace:"],
referencedClasses: []
}),
globals.MaglevThreadWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "reloadStackWithCallback:",
protocol: 'interactions',
fn: function (aBlock){
var self=this;
var html;
function $MaglevIconImage(){return globals.MaglevIconImage||(typeof MaglevIconImage=="undefined"?nil:MaglevIconImage)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self["@waitForStackTrace"])._show();
_st(self["@methodSelect"])._clear();
_st(self["@object"])._stackTraceMethodsWithCallback_((function(obj){
return smalltalk.withContext(function($ctx2) {
_st(obj)._do_((function(method){
var isUnimportant;
return smalltalk.withContext(function($ctx3) {
isUnimportant=self._isMethodUnimportant_(method);
isUnimportant;
return _st(self["@methodSelect"])._with_darker_((function(){
return smalltalk.withContext(function($ctx4) {
$1=_st(method)._includesSubString_("(envId 0)");
$ctx4.sendIdx["includesSubString:"]=1;
if(smalltalk.assert($1)){
_st(html)._with_(_st($MaglevIconImage())._smalltalk());
$ctx4.sendIdx["with:"]=1;
};
$2=_st(method)._includesSubString_("(envId 1)");
$ctx4.sendIdx["includesSubString:"]=2;
if(smalltalk.assert($2)){
_st(html)._with_(_st($MaglevIconImage())._ruby());
$ctx4.sendIdx["with:"]=2;
};
$3=_st(method)._includesSubString_("(envId 1b)");
if(smalltalk.assert($3)){
_st(html)._with_(_st($MaglevIconImage())._rubySmalltalkBridge());
$ctx4.sendIdx["with:"]=3;
};
return _st(html)._with_(method);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}),isUnimportant);
}, function($ctx3) {$ctx3.fillBlock({method:method,isUnimportant:isUnimportant},$ctx2,2)})}));
_st(self["@waitForStackTrace"])._hide();
$4=_st(aBlock).__eq(nil);
if(! smalltalk.assert($4)){
return _st(aBlock)._value();
};
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"reloadStackWithCallback:",{aBlock:aBlock,html:html},globals.MaglevThreadWindow)})},
args: ["aBlock"],
source: "reloadStackWithCallback: aBlock\x0a\x09|html|\x0a\x09waitForStackTrace show.\x0a\x09methodSelect clear.\x0a\x09object stackTraceMethodsWithCallback: [:obj |\x0a\x09\x09obj do: [:method | |isUnimportant|\x0a\x09\x09\x09isUnimportant := self isMethodUnimportant: method.\x0a\x09\x09\x09methodSelect\x0a\x09\x09\x09\x09with: [ \x0a\x09\x09\x09\x09\x09(method includesSubString: '(envId 0)')\x0a\x09\x09\x09\x09\x09\x09ifTrue: [html with: MaglevIconImage smalltalk].\x0a\x09\x09\x09\x09\x09(method includesSubString: '(envId 1)')\x0a\x09\x09\x09\x09\x09\x09ifTrue: [html with: MaglevIconImage ruby].\x0a\x09\x09\x09\x09\x09(method includesSubString: '(envId 1b)')\x0a\x09\x09\x09\x09\x09\x09ifTrue: [html with: MaglevIconImage rubySmalltalkBridge].\x0a\x09\x09\x09\x09\x09html with: method] darker: isUnimportant].\x0a\x09\x09waitForStackTrace hide.\x0a\x09\x09aBlock = nil\x0a\x09\x09\x09ifFalse: [aBlock value]].",
messageSends: ["show", "clear", "stackTraceMethodsWithCallback:", "do:", "isMethodUnimportant:", "with:darker:", "ifTrue:", "includesSubString:", "with:", "smalltalk", "ruby", "rubySmalltalkBridge", "hide", "ifFalse:", "=", "value"],
referencedClasses: ["MaglevIconImage"]
}),
globals.MaglevThreadWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$2;
$1=_st(html)._div();
_st($1)._class_("button-area");
$ctx1.sendIdx["class:"]=1;
_st($1)._style_("margin-bottom: 10px;");
$ctx1.sendIdx["style:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._input();
$ctx2.sendIdx["input"]=1;
_st($3)._type_("button");
$ctx2.sendIdx["type:"]=1;
_st($3)._class_("btn btn-primary");
$ctx2.sendIdx["class:"]=2;
_st($3)._value_("Proceed");
$ctx2.sendIdx["value:"]=1;
_st($3)._style_("margin-right: 1%; width: 24%;");
$ctx2.sendIdx["style:"]=2;
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._proceed();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["onClick:"]=1;
$4;
$5=_st(html)._input();
$ctx2.sendIdx["input"]=2;
_st($5)._type_("button");
$ctx2.sendIdx["type:"]=2;
_st($5)._class_("btn btn-primary");
$ctx2.sendIdx["class:"]=3;
_st($5)._value_("Step into");
$ctx2.sendIdx["value:"]=2;
_st($5)._style_("margin-right: 1%; width: 24%;");
$ctx2.sendIdx["style:"]=3;
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._stepInto();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["onClick:"]=2;
$6;
$7=_st(html)._input();
$ctx2.sendIdx["input"]=3;
_st($7)._type_("button");
$ctx2.sendIdx["type:"]=3;
_st($7)._class_("btn btn-primary");
$ctx2.sendIdx["class:"]=4;
_st($7)._value_("Step over");
$ctx2.sendIdx["value:"]=3;
_st($7)._style_("margin-right: 1%; width: 24%;");
$ctx2.sendIdx["style:"]=4;
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._stepOver();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
$ctx2.sendIdx["onClick:"]=3;
$8;
$9=_st(html)._input();
_st($9)._type_("button");
_st($9)._class_("btn btn-primary");
_st($9)._value_("Trim stack");
_st($9)._style_("width: 25%;");
$10=_st($9)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return self._trimStack();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
return $10;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},globals.MaglevThreadWindow)})},
args: ["html"],
source: "renderButtonsOn: html\x0a\x09html div\x0a\x09\x09class: 'button-area';\x0a\x09\x09style: 'margin-bottom: 10px;';\x0a\x09\x09with: [\x0a\x09\x09\x09html input\x0a\x09\x09\x09\x09type: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-primary';\x0a\x09\x09\x09\x09value: 'Proceed';\x0a\x09\x09\x09\x09style: 'margin-right: 1%; width: 24%;';\x0a\x09\x09\x09\x09onClick: [self proceed].\x0a\x09\x09\x09html input\x0a\x09\x09\x09\x09type: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-primary';\x0a\x09\x09\x09\x09value: 'Step into';\x0a\x09\x09\x09\x09style: 'margin-right: 1%; width: 24%;';\x0a\x09\x09\x09\x09onClick: [self stepInto].\x0a\x09\x09\x09html input\x0a\x09\x09\x09\x09type: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-primary';\x0a\x09\x09\x09\x09value: 'Step over';\x0a\x09\x09\x09\x09style: 'margin-right: 1%; width: 24%;';\x0a\x09\x09\x09\x09onClick: [self stepOver].\x0a\x09\x09\x09html input\x0a\x09\x09\x09\x09type: 'button';\x0a\x09\x09\x09\x09class: 'btn btn-primary';\x0a\x09\x09\x09\x09value: 'Trim stack';\x0a\x09\x09\x09\x09style: 'width: 25%;';\x0a\x09\x09\x09\x09onClick: [self trimStack]].",
messageSends: ["class:", "div", "style:", "with:", "type:", "input", "value:", "onClick:", "proceed", "stepInto", "stepOver", "trimStack"],
referencedClasses: []
}),
globals.MaglevThreadWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFrame:",
protocol: 'rendering',
fn: function (frameIndex){
var self=this;
function $MaglevGsNMethodDebugEditor(){return globals.MaglevGsNMethodDebugEditor||(typeof MaglevGsNMethodDebugEditor=="undefined"?nil:MaglevGsNMethodDebugEditor)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@methodContainer"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._empty();
$ctx1.sendIdx["empty"]=1;
_st(self["@waitingScreen"])._show();
$2=_st(frameIndex).__gt((0));
if(smalltalk.assert($2)){
_st(self["@object"])._stackFrame_withCallback_(frameIndex,(function(obj){
return smalltalk.withContext(function($ctx2) {
_st(_st(self["@methodContainer"])._asJQuery())._empty();
_st(self["@methodContainer"])._with_(_st($MaglevGsNMethodDebugEditor())._for_(obj));
return _st(self["@waitingScreen"])._hide();
$ctx2.sendIdx["hide"]=1;
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1,2)})}));
} else {
_st(self["@waitingScreen"])._hide();
};
return self}, function($ctx1) {$ctx1.fill(self,"renderFrame:",{frameIndex:frameIndex},globals.MaglevThreadWindow)})},
args: ["frameIndex"],
source: "renderFrame: frameIndex\x0a\x09methodContainer asJQuery empty.\x0a\x09waitingScreen show.\x0a\x09frameIndex > 0\x0a\x09\x09ifTrue: [object\x0a\x09\x09\x09stackFrame: frameIndex \x0a\x09\x09\x09withCallback: [:obj |\x0a\x09\x09\x09\x09methodContainer asJQuery empty.\x0a\x09\x09\x09\x09methodContainer with: (MaglevGsNMethodDebugEditor for: obj).\x0a\x09\x09\x09\x09waitingScreen hide]]\x0a\x09\x09ifFalse: [waitingScreen hide].",
messageSends: ["empty", "asJQuery", "show", "ifTrue:ifFalse:", ">", "stackFrame:withCallback:", "with:", "for:", "hide"],
referencedClasses: ["MaglevGsNMethodDebugEditor"]
}),
globals.MaglevThreadWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderLocalStorageOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevTable(){return globals.MaglevTable||(typeof MaglevTable=="undefined"?nil:MaglevTable)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($MaglevTable())._newAssociationDictFor_with_(_st(self["@object"])._localStorage(),"elements"));
return self}, function($ctx1) {$ctx1.fill(self,"renderLocalStorageOn:",{html:html},globals.MaglevThreadWindow)})},
args: ["html"],
source: "renderLocalStorageOn: html\x0a\x09html with: (MaglevTable newAssociationDictFor: object localStorage with: #elements).",
messageSends: ["with:", "newAssociationDictFor:with:", "localStorage"],
referencedClasses: ["MaglevTable"]
}),
globals.MaglevThreadWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderStackTraceOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevIcon(){return globals.MaglevIcon||(typeof MaglevIcon=="undefined"?nil:MaglevIcon)}
function $MaglevListBox(){return globals.MaglevListBox||(typeof MaglevListBox=="undefined"?nil:MaglevListBox)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
self["@waitForStackTrace"]=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st($MaglevIcon())._wait();
$ctx2.sendIdx["wait"]=1;
_st(html)._with_($2);
$ctx2.sendIdx["with:"]=2;
$3=_st(html)._with_(" loading...");
$ctx2.sendIdx["with:"]=3;
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
self["@methodSelect"]=_st($MaglevListBox())._new();
_st(html)._with_(self["@methodSelect"]);
$ctx1.sendIdx["with:"]=4;
$4=self["@methodSelect"];
_st($4)._changedCallback_((function(text,index){
return smalltalk.withContext(function($ctx2) {
return self._renderFrame_(index);
}, function($ctx2) {$ctx2.fillBlock({text:text,index:index},$ctx1,2)})}));
_st($4)._height_((250));
$5=_st($4)._style_("width: 100%;");
self._renderButtonsOn_(html);
$6=_st(html)._div();
$ctx1.sendIdx["div"]=2;
_st($6)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_(_st($MaglevIcon())._wait());
$ctx2.sendIdx["with:"]=6;
$7=_st(html)._with_(" loading...");
return $7;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
$ctx1.sendIdx["with:"]=5;
$8=_st($6)._hide();
self["@waitingScreen"]=$8;
self["@methodContainer"]=_st(html)._div();
self._reloadStackWithCallback_(nil);
return self}, function($ctx1) {$ctx1.fill(self,"renderStackTraceOn:",{html:html},globals.MaglevThreadWindow)})},
args: ["html"],
source: "renderStackTraceOn: html\x0a\x09waitForStackTrace := html div\x0a\x09\x09with: [html\x0a\x09\x09\x09\x09with: MaglevIcon wait;\x0a\x09\x09\x09\x09with: ' loading...'].\x0a\x09methodSelect := MaglevListBox new.\x0a\x09html with: methodSelect.\x0a\x09methodSelect\x0a\x09\x09changedCallback: [:text :index | self renderFrame: index];\x0a\x09\x09height: 250;\x0a\x09\x09style: 'width: 100%;'.\x0a\x09self renderButtonsOn: html.\x0a\x09waitingScreen := html div\x0a\x09\x09with: [html\x0a\x09\x09\x09with: MaglevIcon wait;\x0a\x09\x09\x09with: ' loading...'];\x0a\x09\x09hide.\x0a\x09methodContainer := html div.\x0a\x09self reloadStackWithCallback: nil.",
messageSends: ["with:", "div", "wait", "new", "changedCallback:", "renderFrame:", "height:", "style:", "renderButtonsOn:", "hide", "reloadStackWithCallback:"],
referencedClasses: ["MaglevIcon", "MaglevListBox"]
}),
globals.MaglevThreadWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "selectStackFrame:",
protocol: 'interactions',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 

	self['@methodSelect']._asJQuery()[0].selectedIndex = anInteger - 1;
	self._renderFrame();
	;
return self}, function($ctx1) {$ctx1.fill(self,"selectStackFrame:",{anInteger:anInteger},globals.MaglevThreadWindow)})},
args: ["anInteger"],
source: "selectStackFrame: anInteger\x0a\x09<\x0a\x09self['@methodSelect']._asJQuery()[0].selectedIndex = anInteger - 1;\x0a\x09self._renderFrame();\x0a\x09>\x0a\x09",
messageSends: [],
referencedClasses: []
}),
globals.MaglevThreadWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "stepInto",
protocol: 'interactions',
fn: function (){
var self=this;
var frameIndex;
return smalltalk.withContext(function($ctx1) { 
frameIndex=self._frameIndex();
_st(self["@object"])._stepInto_withCallback_(frameIndex,(function(obj){
return smalltalk.withContext(function($ctx2) {
return self._reloadStackWithCallback_((function(){
return smalltalk.withContext(function($ctx3) {
return self._selectStackFrame_(frameIndex);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stepInto",{frameIndex:frameIndex},globals.MaglevThreadWindow)})},
args: [],
source: "stepInto\x0a\x09|frameIndex|\x0a\x09frameIndex := self frameIndex.\x0a\x09object \x0a\x09\x09stepInto: frameIndex\x0a\x09\x09withCallback: [:obj | \x0a\x09\x09\x09self reloadStackWithCallback: [\x0a\x09\x09\x09\x09self selectStackFrame: frameIndex]].",
messageSends: ["frameIndex", "stepInto:withCallback:", "reloadStackWithCallback:", "selectStackFrame:"],
referencedClasses: []
}),
globals.MaglevThreadWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "stepOver",
protocol: 'interactions',
fn: function (){
var self=this;
var frameIndex;
return smalltalk.withContext(function($ctx1) { 
frameIndex=self._frameIndex();
_st(self["@object"])._stepOver_withCallback_(frameIndex,(function(obj){
return smalltalk.withContext(function($ctx2) {
return self._reloadStackWithCallback_((function(){
return smalltalk.withContext(function($ctx3) {
return self._selectStackFrame_(frameIndex);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stepOver",{frameIndex:frameIndex},globals.MaglevThreadWindow)})},
args: [],
source: "stepOver\x0a\x09|frameIndex|\x0a\x09frameIndex := self frameIndex.\x0a\x09object \x0a\x09\x09stepOver: frameIndex\x0a\x09\x09withCallback: [:obj | self reloadStackWithCallback: [\x0a\x09\x09\x09self selectStackFrame: frameIndex]].",
messageSends: ["frameIndex", "stepOver:withCallback:", "reloadStackWithCallback:", "selectStackFrame:"],
referencedClasses: []
}),
globals.MaglevThreadWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "trimStack",
protocol: 'interactions',
fn: function (){
var self=this;
var frameIndex;
return smalltalk.withContext(function($ctx1) { 
frameIndex=self._frameIndex();
_st(self["@object"])._trimTo_withCallback_(frameIndex,(function(obj){
return smalltalk.withContext(function($ctx2) {
return self._reloadStackWithCallback_((function(){
return smalltalk.withContext(function($ctx3) {
return self._selectStackFrame_(frameIndex);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"trimStack",{frameIndex:frameIndex},globals.MaglevThreadWindow)})},
args: [],
source: "trimStack\x0a\x09|frameIndex|\x0a\x09frameIndex := self frameIndex.\x0a\x09object \x0a\x09\x09trimTo: frameIndex\x0a\x09\x09withCallback: [:obj | self reloadStackWithCallback: [\x0a\x09\x09\x09self selectStackFrame: frameIndex]].",
messageSends: ["frameIndex", "trimTo:withCallback:", "reloadStackWithCallback:", "selectStackFrame:"],
referencedClasses: []
}),
globals.MaglevThreadWindow);



smalltalk.addClass('MaglevSearchWindow', globals.MaglevWindow, ['maglev', 'selectBox', 'waitForResult', 'listContents', 'methodContainer', 'waitingScreen'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "listIndex",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(self["@selectBox"])._asJQuery())._at_((0)))._selectedIndex()).__plus((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"listIndex",{},globals.MaglevSearchWindow)})},
args: [],
source: "listIndex\x0a\x09^ (selectBox asJQuery at: 0) selectedIndex + 1",
messageSends: ["+", "selectedIndex", "at:", "asJQuery"],
referencedClasses: []
}),
globals.MaglevSearchWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "maglev",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Maglev(){return globals.Maglev||(typeof Maglev=="undefined"?nil:Maglev)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@maglev"];
if(($receiver = $1) == nil || $receiver == null){
self["@maglev"]=_st($Maglev())._instance();
self["@maglev"];
} else {
$1;
};
$2=self["@maglev"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"maglev",{},globals.MaglevSearchWindow)})},
args: [],
source: "maglev\x0a\x09maglev ifNil: [maglev := Maglev instance].\x0a\x09^maglev",
messageSends: ["ifNil:", "instance"],
referencedClasses: ["Maglev"]
}),
globals.MaglevSearchWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderClass",
protocol: 'not yet classified',
fn: function (){
var self=this;
var listElement,cls,selector,envId;
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$2,$5;
_st(self["@waitingScreen"])._show();
listElement=_st(self["@listContents"])._at_(self._listIndex());
$ctx1.sendIdx["at:"]=1;
$1=_st(listElement)._at_((1));
$ctx1.sendIdx["at:"]=3;
cls=_st($1)._at_((1));
$ctx1.sendIdx["at:"]=2;
$4=_st(listElement)._at_((1));
$ctx1.sendIdx["at:"]=5;
$3=_st($4)._at_((2));
$ctx1.sendIdx["at:"]=4;
$2=_st($3)._inspection();
envId=_st($2)._asNumber();
selector=_st(listElement)._at_((2));
$5=_st(envId).__eq((0));
if(smalltalk.assert($5)){
_st(cls)._sourceCodeFor_language_withCallback_(selector,"smalltalk",(function(obj){
return smalltalk.withContext(function($ctx2) {
return self._renderMethodObject_(obj);
$ctx2.sendIdx["renderMethodObject:"]=1;
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1,2)})}));
$ctx1.sendIdx["sourceCodeFor:language:withCallback:"]=1;
} else {
_st(cls)._sourceCodeFor_language_withCallback_(selector,"ruby",(function(obj){
return smalltalk.withContext(function($ctx2) {
return self._renderMethodObject_(obj);
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1,4)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"renderClass",{listElement:listElement,cls:cls,selector:selector,envId:envId},globals.MaglevSearchWindow)})},
args: [],
source: "renderClass\x0a\x09|listElement cls selector envId|\x0a\x09waitingScreen show.\x0a\x09listElement := listContents at: self listIndex.\x0a\x09cls := (listElement at: 1) at:1.\x0a\x09envId :=  ((listElement at: 1) at:2) inspection asNumber.\x0a\x09selector := listElement at: 2.\x0a\x09envId = 0 ifTrue:[\x0a\x09\x09cls sourceCodeFor: selector language: 'smalltalk' withCallback: [:obj| \x0a\x09\x09\x09self renderMethodObject: obj.]\x09\x09\x09\x0a\x09]\x0a\x09ifFalse:[\x0a\x09\x09cls sourceCodeFor: selector language: 'ruby' withCallback: [:obj|\x0a\x09\x09\x09self renderMethodObject: obj]\x0a\x09]",
messageSends: ["show", "at:", "listIndex", "asNumber", "inspection", "ifTrue:ifFalse:", "=", "sourceCodeFor:language:withCallback:", "renderMethodObject:"],
referencedClasses: []
}),
globals.MaglevSearchWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderListOf:",
protocol: 'not yet classified',
fn: function (selectors){
var self=this;
var html;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(self["@selectBox"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
html=_st($HTMLCanvas())._onJQuery_($1);
_st(_st(self["@selectBox"])._asJQuery())._empty();
self["@listContents"]=_st($Array())._new();
_st(selectors)._do_((function(selector){
return smalltalk.withContext(function($ctx2) {
return _st(self._maglev())._implementersOf_withCallback_(selector,(function(success,obj){
return smalltalk.withContext(function($ctx3) {
$2=_st(obj)._hasElements();
if(smalltalk.assert($2)){
$3=self["@selectBox"];
_st($3)._with_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(obj)._do_((function(cls){
return smalltalk.withContext(function($ctx5) {
_st(self["@listContents"])._add_([cls,selector]);
$4=_st(html)._option();
$5=_st(_st(_st(_st(cls)._at_((1)))._inspection()).__comma(">>")).__comma(selector);
$ctx5.sendIdx[","]=1;
return _st($4)._with_($5);
}, function($ctx5) {$ctx5.fillBlock({cls:cls},$ctx4,5)})}));
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
$ctx3.sendIdx["with:"]=1;
_st($3)._size_((10));
_st($3)._style_("width: 100%;");
$6=_st($3)._show();
$6;
};
return _st(self["@waitForResult"])._hide();
}, function($ctx3) {$ctx3.fillBlock({success:success,obj:obj},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({selector:selector},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderListOf:",{selectors:selectors,html:html},globals.MaglevSearchWindow)})},
args: ["selectors"],
source: "renderListOf: selectors\x0a\x09|html|\x0a\x09html := HTMLCanvas onJQuery: selectBox asJQuery.\x0a\x09selectBox asJQuery empty.\x0a\x09listContents := Array new.\x0a\x09selectors do:[:selector| \x0a\x09\x09self maglev implementersOf: selector withCallback:[:success :obj|\x0a\x09\x09\x09obj hasElements ifTrue:[\x0a\x09\x09\x09\x09selectBox\x0a\x09\x09\x09\x09with: [obj do: [:cls |\x0a\x09\x09\x09\x09\x09listContents add: {cls. selector}.\x0a\x09\x09\x09\x09\x09html option with: (cls at:1) inspection, '>>' , selector]];\x0a\x09\x09\x09\x09size: 10;\x0a\x09\x09\x09\x09style: 'width: 100%;';\x0a\x09\x09\x09\x09show\x0a\x09\x09\x09\x09\x22onChange: [self renderClass]\x22\x0a\x09\x09\x09].\x0a\x09\x09\x09waitForResult hide.\x0a\x09\x09]\x0a\x09]",
messageSends: ["onJQuery:", "asJQuery", "empty", "new", "do:", "implementersOf:withCallback:", "maglev", "ifTrue:", "hasElements", "with:", "add:", "option", ",", "inspection", "at:", "size:", "style:", "show", "hide"],
referencedClasses: ["HTMLCanvas", "Array"]
}),
globals.MaglevSearchWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderMethodObject:",
protocol: 'not yet classified',
fn: function (obj){
var self=this;
function $MaglevGsNMethodEditor(){return globals.MaglevGsNMethodEditor||(typeof MaglevGsNMethodEditor=="undefined"?nil:MaglevGsNMethodEditor)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@methodContainer"])._asJQuery())._empty();
_st(self["@methodContainer"])._with_(_st($MaglevGsNMethodEditor())._for_(obj));
_st(self["@waitingScreen"])._hide();
return self}, function($ctx1) {$ctx1.fill(self,"renderMethodObject:",{obj:obj},globals.MaglevSearchWindow)})},
args: ["obj"],
source: "renderMethodObject: obj\x0a\x09methodContainer asJQuery empty.\x0a\x09methodContainer with: (MaglevGsNMethodEditor for: obj).\x0a\x09waitingScreen hide.",
messageSends: ["empty", "asJQuery", "with:", "for:", "hide"],
referencedClasses: ["MaglevGsNMethodEditor"]
}),
globals.MaglevSearchWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderWindowContentOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
function $MaglevIcon(){return globals.MaglevIcon||(typeof MaglevIcon=="undefined"?nil:MaglevIcon)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2,$5,$6,$7,$8,$9,$10,$11,$12,$13;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("maglev-search");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._form();
_st($3)._class_("search-form");
$ctx2.sendIdx["class:"]=2;
_st($3)._onSubmit_((function(e){
return smalltalk.withContext(function($ctx3) {
_st(e)._preventDefault();
return self._searchSelectorsAndClasses();
}, function($ctx3) {$ctx3.fillBlock({e:e},$ctx2,2)})}));
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._input())._class_("search-input");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["with:"]=2;
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$5=_st(html)._select();
_st($5)._size_((10));
_st($5)._style_("width: 100%;");
_st($5)._onChange_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderClass();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
$6=_st($5)._hide();
$ctx1.sendIdx["hide"]=1;
self["@selectBox"]=$6;
$7=_st(html)._div();
$ctx1.sendIdx["div"]=2;
_st($7)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$8=_st($MaglevIcon())._wait();
$ctx2.sendIdx["wait"]=1;
_st(html)._with_($8);
$ctx2.sendIdx["with:"]=4;
$9=_st(html)._with_(" loading...");
$ctx2.sendIdx["with:"]=5;
return $9;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)})}));
$ctx1.sendIdx["with:"]=3;
$10=_st($7)._hide();
$ctx1.sendIdx["hide"]=2;
self["@waitForResult"]=$10;
$11=_st(html)._div();
$ctx1.sendIdx["div"]=3;
_st($11)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._with_(_st($MaglevIcon())._wait());
$ctx2.sendIdx["with:"]=7;
$12=_st(html)._with_(" loading...");
return $12;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)})}));
$ctx1.sendIdx["with:"]=6;
$13=_st($11)._hide();
self["@waitingScreen"]=$13;
self["@methodContainer"]=_st(html)._div();
return self}, function($ctx1) {$ctx1.fill(self,"renderWindowContentOn:",{html:html},globals.MaglevSearchWindow)})},
args: ["html"],
source: "renderWindowContentOn: html\x0a\x09html div\x0a\x09\x09class: 'maglev-search'; \x0a\x09\x09with: [\x0a\x09\x09html form\x0a\x09\x09\x09class: 'search-form';\x0a\x09\x09\x09onSubmit: [:e|e preventDefault. self searchSelectorsAndClasses.]; \x0a\x09\x09\x09with:[\x0a\x09\x09\x09html input\x0a\x09\x09\x09\x09class: 'search-input'\x0a\x09\x09\x09]\x0a\x09\x09].\x0a\x09selectBox := html select\x0a\x09\x09\x09size: 10;\x0a\x09\x09\x09style: 'width: 100%;';\x0a\x09\x09\x09onChange: [self renderClass];\x0a\x09\x09\x09hide.\x0a\x09waitForResult := html div\x0a\x09\x09with: [html\x0a\x09\x09\x09\x09with: MaglevIcon wait;\x0a\x09\x09\x09\x09with: ' loading...'];\x0a\x09\x09hide.\x0a\x09waitingScreen := html div\x0a\x09\x09\x09with: [html\x0a\x09\x09\x09\x09with: MaglevIcon wait;\x0a\x09\x09\x09\x09with: ' loading...'];\x0a\x09\x09\x09hide.\x0a\x09methodContainer := html div.",
messageSends: ["class:", "div", "with:", "form", "onSubmit:", "preventDefault", "searchSelectorsAndClasses", "input", "size:", "select", "style:", "onChange:", "renderClass", "hide", "wait"],
referencedClasses: ["MaglevIcon"]
}),
globals.MaglevSearchWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "searchSelectorsAndClasses",
protocol: 'not yet classified',
fn: function (){
var self=this;
var input,selectors;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
input=_st(".search-input"._asJQuery())._val();
selectors=_st($Array())._new();
_st(self["@waitForResult"])._show();
_st(self._maglev())._findMethodNamesMatching_with_(input,(function(success,obj){
return smalltalk.withContext(function($ctx2) {
if(smalltalk.assert(success)){
_st(selectors)._addAll_(_st(_st(obj)._string())._tokenize_(" "));
return self._renderListOf_(selectors);
};
}, function($ctx2) {$ctx2.fillBlock({success:success,obj:obj},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"searchSelectorsAndClasses",{input:input,selectors:selectors},globals.MaglevSearchWindow)})},
args: [],
source: "searchSelectorsAndClasses\x0a\x09|input selectors|\x0a\x09input := '.search-input' asJQuery val.\x0a\x09selectors := Array new.\x0a\x09waitForResult show.\x0a\x09self maglev findMethodNamesMatching: input with:[:success :obj| \x0a\x09\x09success ifTrue: [selectors addAll: (obj string tokenize: ' ').\x0a\x09\x09self renderListOf: selectors]. \x0a\x09\x09\x0a\x09].",
messageSends: ["val", "asJQuery", "new", "show", "findMethodNamesMatching:with:", "maglev", "ifTrue:", "addAll:", "tokenize:", "string", "renderListOf:"],
referencedClasses: ["Array"]
}),
globals.MaglevSearchWindow);



smalltalk.addClass('MaglevWaitingWindow', globals.MaglevWindow, [], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "isWaitingWindow",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isWaitingWindow\x0a \x09^ true",
messageSends: [],
referencedClasses: []
}),
globals.MaglevWaitingWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderWindowContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
return self},
args: ["html"],
source: "renderWindowContentOn: html",
messageSends: [],
referencedClasses: []
}),
globals.MaglevWaitingWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderWindowTitleOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevIcon(){return globals.MaglevIcon||(typeof MaglevIcon=="undefined"?nil:MaglevIcon)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(html)._with_(_st($MaglevIcon())._wait());
$ctx1.sendIdx["with:"]=1;
$1=_st(html)._with_(" loading...");
return self}, function($ctx1) {$ctx1.fill(self,"renderWindowTitleOn:",{html:html},globals.MaglevWaitingWindow)})},
args: ["html"],
source: "renderWindowTitleOn: html\x0a\x09html\x0a\x09\x09with: MaglevIcon wait;\x0a\x09\x09with: ' loading...'.",
messageSends: ["with:", "wait"],
referencedClasses: ["MaglevIcon"]
}),
globals.MaglevWaitingWindow);



smalltalk.addClass('MaglevWebBrowserWindow', globals.MaglevWindow, ['url', 'inputUrl', 'iframe'], 'Maglev-Database-Explorer');
smalltalk.addMethod(
smalltalk.method({
selector: "renderWindowContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
var iframeContainer;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$7,$9,$8,$6,$2,$10,$12,$13,$11;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("input-prepend");
$ctx1.sendIdx["class:"]=1;
_st($1)._style_("width: 100%; margin-top: 10px; box-sizing: border-box; padding-right: 51px; margin-bottom: 5px;");
$ctx1.sendIdx["style:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._span();
_st($3)._class_("add-on");
$4=_st($3)._with_("URL");
$ctx2.sendIdx["with:"]=2;
$4;
$5=_st(html)._input();
_st($5)._type_("text");
_st($5)._style_("width: 100%;");
$ctx2.sendIdx["style:"]=2;
$6=_st($5)._onKeyPress_((function(evt){
return smalltalk.withContext(function($ctx3) {
$7=_st(_st(evt)._which()).__eq((13));
if(smalltalk.assert($7)){
$9=_st(self["@inputUrl"])._asJQuery();
$ctx3.sendIdx["asJQuery"]=1;
$8=_st($9)._val();
return self._url_($8);
};
}, function($ctx3) {$ctx3.fillBlock({evt:evt},$ctx2,2)})}));
self["@inputUrl"]=$6;
return self["@inputUrl"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$10=_st(html)._div();
_st($10)._style_("margin-bottom: 5px; margin-right: 5px;");
$ctx1.sendIdx["style:"]=3;
$11=_st($10)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$12=_st(html)._iframe();
_st($12)._style_("width: 100%; height: 100%; border: 1px solid #ccc;");
_st($12)._frameborder_("0");
$13=_st($12)._src_("about:blank");
self["@iframe"]=$13;
return self["@iframe"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
iframeContainer=$11;
_st(_st(iframeContainer)._asJQuery())._resizable();
return self}, function($ctx1) {$ctx1.fill(self,"renderWindowContentOn:",{html:html,iframeContainer:iframeContainer},globals.MaglevWebBrowserWindow)})},
args: ["html"],
source: "renderWindowContentOn: html\x0a\x09|iframeContainer|\x0a\x09html div\x0a\x09\x09class: 'input-prepend';\x0a\x09\x09style: 'width: 100%; margin-top: 10px; box-sizing: border-box; padding-right: 51px; margin-bottom: 5px;';\x0a\x09\x09with: [\x0a\x09\x09\x09html span \x0a\x09\x09\x09\x09class: 'add-on';\x0a\x09\x09\x09\x09with: 'URL'.\x0a\x09\x09\x09inputUrl := html input\x09\x0a\x09\x09\x09\x09type: 'text';\x0a\x09\x09\x09\x09style: 'width: 100%;';\x0a\x09\x09\x09\x09onKeyPress: [:evt | evt which = 13\x0a\x09\x09\x09\x09\x09ifTrue: [self url: inputUrl asJQuery val]]].\x0a\x09iframeContainer := html div \x0a\x09\x09style: 'margin-bottom: 5px; margin-right: 5px;';\x0a\x09\x09with: [\x0a\x09\x09\x09iframe := html iframe\x0a\x09\x09\x09\x09style: 'width: 100%; height: 100%; border: 1px solid #ccc;';\x0a\x09\x09\x09\x09frameborder: '0';\x0a\x09\x09\x09\x09src: 'about:blank'].\x0a\x09iframeContainer asJQuery resizable.",
messageSends: ["class:", "div", "style:", "with:", "span", "type:", "input", "onKeyPress:", "ifTrue:", "=", "which", "url:", "val", "asJQuery", "iframe", "frameborder:", "src:", "resizable"],
referencedClasses: []
}),
globals.MaglevWebBrowserWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "renderWindowTitleContentOn:",
protocol: 'rendering',
fn: function (html){
var self=this;
function $MaglevIcon(){return globals.MaglevIcon||(typeof MaglevIcon=="undefined"?nil:MaglevIcon)}
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_(_st($MaglevIcon())._globe());
$ctx1.sendIdx["with:"]=1;
_st(html)._with_("Web Browser");
self._renderHeightPlaceholderOn_(html);
self._renderCloseButtonOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderWindowTitleContentOn:",{html:html},globals.MaglevWebBrowserWindow)})},
args: ["html"],
source: "renderWindowTitleContentOn: html\x0a\x09html with: MaglevIcon globe.\x0a\x09html with: 'Web Browser'.\x0a\x09self renderHeightPlaceholderOn: html.\x0a\x09self renderCloseButtonOn: html.",
messageSends: ["with:", "globe", "renderHeightPlaceholderOn:", "renderCloseButtonOn:"],
referencedClasses: ["MaglevIcon"]
}),
globals.MaglevWebBrowserWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@url"];
return $1;
},
args: [],
source: "url\x0a\x09^ url",
messageSends: [],
referencedClasses: []
}),
globals.MaglevWebBrowserWindow);

smalltalk.addMethod(
smalltalk.method({
selector: "url:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@url"]=aString;
$1=_st(self["@inputUrl"])._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._attr_with_("value",aString);
$ctx1.sendIdx["attr:with:"]=1;
_st(_st(self["@iframe"])._asJQuery())._attr_with_("src",aString);
return self}, function($ctx1) {$ctx1.fill(self,"url:",{aString:aString},globals.MaglevWebBrowserWindow)})},
args: ["aString"],
source: "url: aString\x0a\x09url := aString.\x0a\x09inputUrl asJQuery attr: 'value' with: aString.\x0a\x09iframe asJQuery attr: 'src' with: aString.",
messageSends: ["attr:with:", "asJQuery"],
referencedClasses: []
}),
globals.MaglevWebBrowserWindow);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultUrl",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var port = parseInt(window.location.host.split(':')[1]) - 1;
	return window.location.protocol + '//' + window.location.host.split(':')[0] + ':' + port + '/'; ;
return self}, function($ctx1) {$ctx1.fill(self,"defaultUrl",{},globals.MaglevWebBrowserWindow.klass)})},
args: [],
source: "defaultUrl\x0a\x09< var port = parseInt(window.location.host.split(':')[1]) - 1;\x0a\x09return window.location.protocol + '//' + window.location.host.split(':')[0] + ':' + port + '/'; >",
messageSends: [],
referencedClasses: []
}),
globals.MaglevWebBrowserWindow.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "showNew",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._appendToWorkspace();
$3=_st($2)._url_(self._defaultUrl());
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"showNew",{},globals.MaglevWebBrowserWindow.klass)})},
args: [],
source: "showNew\x0a\x09^ self new\x0a\x09\x09appendToWorkspace;\x0a\x09\x09url: self defaultUrl.",
messageSends: ["appendToWorkspace", "new", "url:", "defaultUrl"],
referencedClasses: []
}),
globals.MaglevWebBrowserWindow.klass);

});
