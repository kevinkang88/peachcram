var playSong = function(){
  $('#playBtn').on('click',function(){
    // play Yiruma song!
    var params = { allowScriptAccess: "always" };
    var atts = { id: "myytplayer" };

    if($('#cram-amt').val() == 'easy-pz'){
      $.ajax({
        url: "/song_maker/level_one",
        type: "GET",
        dataType: "json",
        success: function(data){
          console.log("works!");
          var videoIdsWithNum = data;
          videoIds = [];
          for(var key in videoIdsWithNum){
            videoIds.push(videoIdsWithNum[key]);
          }
          swfobject.embedSWF("http://www.youtube.com/v/" + videoIds[3]+ "?enablejsapi=1&playerapiid=ytplayer&version=3&autoplay=1",
                          "playerBox", "500", "500", "8", null, null, params, atts);
          function ytplayerOnStateChange(event) {
            if(event.data === 0) {
              console.log("works man for reals");
            }
          }

        }
      })
    }
  })
};
//++++++++++++++++++++++++++++++++++++++++++++++++++++











// $(document).ready(function() {
//   $('#start').on('click', initializeVideo);
// });

// var initializeVideo = function() {
//   hideButton();
//   var params = { allowScriptAccess: "always" };
//   var atts = { id: "myytplayer" };
//   var videoID = "F1FMFBdse7g";
//   swfobject.embedSWF("http://www.youtube.com/v/" + videoID + "?enablejsapi=1&playerapiid=ytplayer&version=3&autoplay=1",
//                    "ytapiplayer", "500", "500", "8", null, null, params, atts);
// };

// var hideButton  = function() {
//   $('#start').attr('class', 'hidden');
// };


// var queueNextSong = function(ytplayer) {
//   ytplayer.cueVideoById("oS4lYcgtT4E");
//   console.log("queued song")
// };

// function onYouTubePlayerReady(playerId) {
//   ytplayer = document.getElementById("myytplayer");
//   console.log(ytplayer)
//   ytplayer.addEventListener("onStateChange", "ytplayerOnStateChange");
// };

// var ytplayerOnStateChange = function(state){
//   console.log(state);
//   if (state === 0) {
//     alert("state is 0");
//     queueNextSong(ytplayer);
//     ytplayer.playVideo();
//   }
// };



































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

