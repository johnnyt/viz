require.config({paths:{
  'viz': 'packages/js',
  'viz/_source': 'packages/st'
}});

// Is this needed?
function bitShiftRight(a, b) {
  // don't use JS bitshift, this might fail with big numbers
  return Math.round(a / Math.pow(2, b));
}

require([
  'bower_components/jquery/jquery',
  'amber/deploy',
  'amber/lang',
  'viz/Maglev-Vendor',
  'viz/Maglev-Core',
  'viz/Maglev-Database-Explorer',
  'bower_components/director/build/director',
  'bower_components/jsplumb/dist/js/jquery.jsPlumb-1.5.5',
  //'bower_components/jquery-1.10.0.min',
  //'bower_components/jquery-ui/ui/jquery-ui',
  'libs/jquery-ui.min',
  'libs/jquery.livequery',
  'libs/jstree/jquery.jstree',
  //'bower_components/bootstrap.min',
  //'bower_components/codemirror/lib/codemirror',
  //'bower_components/codemirror/addon/selection/active-line',
  //'bower_components/codemirror/addon/edit/matchbrackets',
  //'bower_components/codemirror/mode/smalltalk/smalltalk',
  //'bower_components/codemirror/mode/ruby/ruby',
  //'bower_components/jquery.livequery',
  //'bower_components/jstree/jquery',

  'bs3/js/bootstrap'
], function (jquery, smalltalk) {
  window.smalltalk=smalltalk;
  window.helios = function(){ smalltalk.popupHelios(); };
  smalltalk.initialize({'transport.defaultAmdNamespace': 'viz'});
  smalltalk.globals.Maglev._ready();
});
