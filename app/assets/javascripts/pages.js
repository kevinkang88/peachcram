var playSong = function(){
  $('#playBtn').on('click',function(){
    // play Yiruma song!
    var params = { allowScriptAccess: "always" };
    var atts = { id: "myytplayer" };
    swfobject.embedSWF("http://www.youtube.com/v/CE8vZEheWew?enablejsapi=1&playerapiid=ytplayer&version=3&autoplay=1",
                       "playerBox", "0", "0", "8", null, null, params, atts);
  })
};


var setUpSlider = function(){
  var levels = ["easy-pz","moderate","must-cram!","so-stressed!"];
  $("#slider").slider({
    value:0,
    min: 0,
    max: 3,
    step: 1,
    slide: function( event, ui ) {
      $( "#cram-amt" ).val( "(╯°□°)╯" + levels[ui.value] );
    }
  });
  $( "#cram-amt" ).val( "(╯°□°)╯" + levels[$( "#slider" ).slider( "value" )] );
};

