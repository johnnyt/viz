require.config({paths:{
  'viz': 'packages/js',
  'viz/_source': 'packages/st'
}});

require([
  'bower_components/jquery/jquery',
  'amber/deploy',
  'amber/lang',
  'viz/Maglev-Vendor',
  'viz/Maglev-Core',
  'viz/Maglev-Database-Explorer',
  'bower_components/director/build/director',
  'bower_components/jsplumb/dist/js/jquery.jsPlumb-1.5.5',
  'bs3/js/bootstrap'
], function (jquery, smalltalk) {
  window.smalltalk=smalltalk;
  smalltalk.initialize({'transport.defaultAmdNamespace': 'viz'});
  //smalltalk.globals.GBApplication._start();
  smalltalk.popupHelios();
});
