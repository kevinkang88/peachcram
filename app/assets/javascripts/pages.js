
//++++++++++++++++++++++++++++++++++++++++++++++++++++
var setUpSlider = function(){
  var levels = ["easy-pz","moderate","must-cram!","so-stressed!"];
  $("#slider").slider({
    value:0,
    min: 0,
    max: 3,
    step: 1,
    slide: function( event, ui ) {
      $( "#cram-amt" ).val( levels[ui.value] );
    }
  });
  $( "#cram-amt" ).val( levels[$( "#slider" ).slider( "value" )] );
};

