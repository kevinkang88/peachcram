$(document).ready(function() {
  $('#start').on('click', initializeVideo);
});

var initializeVideo = function() {
  hideButton();
  var params = { allowScriptAccess: "always" };
  var atts = { id: "myytplayer" };
  var videoID = "F1FMFBdse7g";
  swfobject.embedSWF("http://www.youtube.com/v/" + videoID + "?enablejsapi=1&playerapiid=ytplayer&version=3&autoplay=1",
                   "ytapiplayer", "500", "500", "8", null, null, params, atts);
};

var hideButton  = function() {
  $('#start').attr('class', 'hidden');
};


var queueNextSong = function(ytplayer) {
  ytplayer.cueVideoById("oS4lYcgtT4E");
  console.log("queued song")
};

function onYouTubePlayerReady(playerId) {
  ytplayer = document.getElementById("myytplayer");
  console.log(ytplayer)
  ytplayer.addEventListener("onStateChange", "ytplayerOnStateChange");
};

var ytplayerOnStateChange = function(state){
  console.log(state);
  if (state === 0) {
    alert("state is 0");
    queueNextSong(ytplayer);
    ytplayer.playVideo();
  }
};