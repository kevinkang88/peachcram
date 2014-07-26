var params = { allowScriptAccess: "always" };
var atts = { id: "myytplayer" };
var videoID = "F1FMFBdse7g";

$(document).ready(function() {
  $('#start').on('click', initializeVideo);
});


var queueNextSong = function() {
  if (ytplayer) {
    ytplayer.cueVideoById("oS4lYcgtT4E");
    console.log("queued song")
  }
};

var initializeVideo = function() {
  hideButton();
  swfobject.embedSWF("http://www.youtube.com/v/" + videoID + "?enablejsapi=1&playerapiid=ytplayer&version=3&autoplay=1",
                   "ytapiplayer", "0", "0", "8", null, null, params, atts);
};

var hideButton  = function() {
  $('#start').attr('class', 'hidden');
};

function onYouTubePlayerReady(playerId) {
  alert("triggered!")
  ytplayer = document.getElementById("myytplayer");
  console.log(ytplayer)
  queueNextSong();
  ytplayer.addEventListener("onStateChange", ytplayerOnStateChange);
};

var ytplayerOnStateChange = function(state){
  console.log(state);
  if (state === 0) {
    alert("state is 0");
    ytplayer.playVideo();
  }
};