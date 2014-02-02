define("amber_core/Kernel-Exceptions", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('Kernel-Exceptions');
smalltalk.packages["Kernel-Exceptions"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('Error', globals.Object, ['messageText'], 'Kernel-Exceptions');
globals.Error.comment="From the ANSI standard:\x0a\x0aThis protocol describes the behavior of instances of class `Error`.\x0aThese are used to represent error conditions that prevent the normal continuation of processing.\x0aActual error exceptions used by an application may be subclasses of this class.\x0aAs `Error` is explicitly specified to be subclassable, conforming implementations must implement its behavior in a non-fragile manner.";
smalltalk.addMethod(
smalltalk.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.context;
return self}, function($ctx1) {$ctx1.fill(self,"context",{},globals.Error)})},
args: [],
source: "context\x0a\x09<return self.context>",
messageSends: [],
referencedClasses: []
}),
globals.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._messageText_("Errorclass: ".__comma(_st(self._class())._name()));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Error)})},
args: [],
source: "initialize\x0a\x09self messageText: 'Errorclass: ', (self class name).",
messageSends: ["messageText:", ",", "name", "class"],
referencedClasses: []
}),
globals.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "isSmalltalkError",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.smalltalkError === true;
return self}, function($ctx1) {$ctx1.fill(self,"isSmalltalkError",{},globals.Error)})},
args: [],
source: "isSmalltalkError\x0a\x09<return self.smalltalkError === true>",
messageSends: [],
referencedClasses: []
}),
globals.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "jsStack",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self.stack;
return self}, function($ctx1) {$ctx1.fill(self,"jsStack",{},globals.Error)})},
args: [],
source: "jsStack\x0a\x09<return self.stack>",
messageSends: [],
referencedClasses: []
}),
globals.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "messageText",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@messageText"];
return $1;
},
args: [],
source: "messageText\x0a\x09^ messageText",
messageSends: [],
referencedClasses: []
}),
globals.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "messageText:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@messageText"]=aString;
return self},
args: ["aString"],
source: "messageText: aString\x0a\x09messageText := aString",
messageSends: [],
referencedClasses: []
}),
globals.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "resignal",
protocol: 'signaling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
throw(self);
return self}, function($ctx1) {$ctx1.fill(self,"resignal",{},globals.Error)})},
args: [],
source: "resignal\x0a\x09\x22Resignal the receiver without changing its exception context\x22\x0a\x09\x0a\x09<throw(self)>",
messageSends: [],
referencedClasses: []
}),
globals.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "signal",
protocol: 'signaling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.context = smalltalk.getThisContext(); self.smalltalkError = true; throw(self);
return self}, function($ctx1) {$ctx1.fill(self,"signal",{},globals.Error)})},
args: [],
source: "signal\x0a\x09<self.context = smalltalk.getThisContext(); self.smalltalkError = true; throw(self)>",
messageSends: [],
referencedClasses: []
}),
globals.Error);

smalltalk.addMethod(
smalltalk.method({
selector: "signal:",
protocol: 'signaling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._messageText_(aString);
self._signal();
return self}, function($ctx1) {$ctx1.fill(self,"signal:",{aString:aString},globals.Error)})},
args: ["aString"],
source: "signal: aString\x0a\x09self messageText: aString.\x0a\x09self signal",
messageSends: ["messageText:", "signal"],
referencedClasses: []
}),
globals.Error);


smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
protocol: 'helios',
fn: function (){
var self=this;
return "exception";
},
args: [],
source: "heliosClass\x0a\x09^ 'exception'",
messageSends: [],
referencedClasses: []
}),
globals.Error.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "signal",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._signal();
return $1;
}, function($ctx1) {$ctx1.fill(self,"signal",{},globals.Error.klass)})},
args: [],
source: "signal\x0a\x09^ self new signal",
messageSends: ["signal", "new"],
referencedClasses: []
}),
globals.Error.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "signal:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._signal_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"signal:",{aString:aString},globals.Error.klass)})},
args: ["aString"],
source: "signal: aString\x0a\x09^ self new\x0a\x09\x09signal: aString",
messageSends: ["signal:", "new"],
referencedClasses: []
}),
globals.Error.klass);


smalltalk.addClass('JavaScriptException', globals.Error, ['exception'], 'Kernel-Exceptions');
globals.JavaScriptException.comment="A JavaScriptException is thrown when a non-Smalltalk exception occurs while in the Smalltalk stack.\x0aSee `boot.js` `inContext()` and `BlockClosure >> on:do:`";
smalltalk.addMethod(
smalltalk.method({
selector: "context:",
protocol: 'accessing',
fn: function (aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.context = aMethodContext;
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aMethodContext:aMethodContext},globals.JavaScriptException)})},
args: ["aMethodContext"],
source: "context: aMethodContext\x0a\x09\x22Set the context from the outside.\x0a\x09See boot.js `inContext()` exception handling\x22\x0a\x09\x0a\x09<self.context = aMethodContext>",
messageSends: [],
referencedClasses: []
}),
globals.JavaScriptException);

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
globals.JavaScriptException);

smalltalk.addMethod(
smalltalk.method({
selector: "exception:",
protocol: 'accessing',
fn: function (anException){
var self=this;
self["@exception"]=anException;
return self},
args: ["anException"],
source: "exception: anException\x0a\x09exception := anException",
messageSends: [],
referencedClasses: []
}),
globals.JavaScriptException);

smalltalk.addMethod(
smalltalk.method({
selector: "messageText",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return 'JavaScript exception: ' + self["@exception"].toString();
return self}, function($ctx1) {$ctx1.fill(self,"messageText",{},globals.JavaScriptException)})},
args: [],
source: "messageText\x0a\x09<return 'JavaScript exception: ' + self[\x22@exception\x22].toString()>",
messageSends: [],
referencedClasses: []
}),
globals.JavaScriptException);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
protocol: 'instance creation',
fn: function (anException){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._exception_(anException);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anException:anException},globals.JavaScriptException.klass)})},
args: ["anException"],
source: "on: anException\x0a\x09^ self new\x0a\x09\x09exception: anException;\x0a\x09\x09yourself",
messageSends: ["exception:", "new", "yourself"],
referencedClasses: []
}),
globals.JavaScriptException.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:context:",
protocol: 'instance creation',
fn: function (anException,aMethodContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._exception_(anException);
_st($2)._context_(aMethodContext);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:context:",{anException:anException,aMethodContext:aMethodContext},globals.JavaScriptException.klass)})},
args: ["anException", "aMethodContext"],
source: "on: anException context: aMethodContext\x0a\x09^ self new\x0a\x09\x09exception: anException;\x0a\x09\x09context: aMethodContext;\x0a\x09\x09yourself",
messageSends: ["exception:", "new", "context:", "yourself"],
referencedClasses: []
}),
globals.JavaScriptException.klass);


smalltalk.addClass('MessageNotUnderstood', globals.Error, ['message', 'receiver'], 'Kernel-Exceptions');
globals.MessageNotUnderstood.comment="This exception is provided to support `Object>>doesNotUnderstand:`.";
smalltalk.addMethod(
smalltalk.method({
selector: "message",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@message"];
return $1;
},
args: [],
source: "message\x0a\x09^ message",
messageSends: [],
referencedClasses: []
}),
globals.MessageNotUnderstood);

smalltalk.addMethod(
smalltalk.method({
selector: "message:",
protocol: 'accessing',
fn: function (aMessage){
var self=this;
self["@message"]=aMessage;
return self},
args: ["aMessage"],
source: "message: aMessage\x0a\x09message := aMessage",
messageSends: [],
referencedClasses: []
}),
globals.MessageNotUnderstood);

smalltalk.addMethod(
smalltalk.method({
selector: "messageText",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._receiver())._asString()).__comma(" does not understand #")).__comma(_st(self._message())._selector());
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"messageText",{},globals.MessageNotUnderstood)})},
args: [],
source: "messageText\x0a\x09^ self receiver asString, ' does not understand #', self message selector",
messageSends: [",", "asString", "receiver", "selector", "message"],
referencedClasses: []
}),
globals.MessageNotUnderstood);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@receiver"];
return $1;
},
args: [],
source: "receiver\x0a\x09^ receiver",
messageSends: [],
referencedClasses: []
}),
globals.MessageNotUnderstood);

smalltalk.addMethod(
smalltalk.method({
selector: "receiver:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@receiver"]=anObject;
return self},
args: ["anObject"],
source: "receiver: anObject\x0a\x09receiver := anObject",
messageSends: [],
referencedClasses: []
}),
globals.MessageNotUnderstood);



smalltalk.addClass('NonBooleanReceiver', globals.Error, ['object'], 'Kernel-Exceptions');
globals.NonBooleanReceiver.comment="NonBooleanReceiver exceptions may be thrown when executing inlined methods such as `#ifTrue:` with a non boolean receiver.";
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
globals.NonBooleanReceiver);

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
globals.NonBooleanReceiver);


});
