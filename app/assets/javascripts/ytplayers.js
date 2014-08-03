// controller

function playSong(){
  $('#playBtn').on('click',function(){
    var peachPlayer = new YtPlayer();
    var knobLocation = peachPlayer.findKnobLoc();
    peachPlayer.sendRequest(knobLocation);
  })
}
//+++++++++++++++++++++++++++++++++++++
// Pseudo-Code //
// class YtPlayer
// !1)ytplayer knows where the knob is pointing to
// !2)ytplayer knows to call ajax request to the correct route depending on the location of the knob
// 3)ytplayer knows to initialize video player
// 4)ytplayer knows to queue next song

// #################################################################
// #################################################################

// this is YtPlayer Model

var YtPlayer = function(){
};

YtPlayer.prototype = {
// this method finds the current location of the knob
  findKnobLoc: function(){
    return $('#cram-amt').val()
  },
// this method sends request to the get route, ytplayer.rb and returns array of videoIds
  sendRequest: function(knobValue){
    var player = this;
    $.ajax({
      url: "/song_maker/" + knobValue.split(' ').join('_'),
      type: "GET",
      dataType: "json",
      success: function(data){
        console.log("rails end point hit from js for level one songs succesful!");
        var videoIdsWithNum = data;
        videoIds = [];
        // below code extracts video ids and puts them inside video Ids array
        for(var key in videoIdsWithNum){
          videoIds.push(videoIdsWithNum[key]);
        }
        videoIds = videoIds.slice(0,10);
        videoIds = _.shuffle(videoIds);
        initialize(videoIds.shift());
      }
    })
  }
}

// #################################################################
// #################################################################
// This is Youtube's functions
function initialize(videoID){
  $("#playBtn").css('display','none');
  var params = { allowScriptAccess: "always" };
  var atts = { id: "myytplayer" };
  swfobject.embedSWF("http://www.youtube.com/v/" + videoID + "?enablejsapi=1&playerapiid=ytplayer&version=3&autoplay=1",
                   "ytapiplayer", "0", "0", "8", null, null, params, atts);
}
// this function hides the "play" button
function hideButton(){
  $('#playBtn').attr('class','hidden');
}

function ytplayerOnStateChange(state) {
  console.log(state);
  if (state === 0) {
    console.log("state is 0 time to queue next song");
    queueNextSong(ytplayer);
    console.log("queue complete play now")
    ytplayer.playVideo();
  }
}

function onYouTubePlayerReady(playerId) {
  ytplayer = document.getElementById("myytplayer");
  console.log("I am inside on youtube player rdy");
  ytplayer.addEventListener("onStateChange", "ytplayerOnStateChange");
}

function queueNextSong(ytplayer) {
  ytplayer.cueVideoById(videoIds.shift());
  this.initialize(videoIds.shift());
  ytplayer.playVideo();

  console.log("queued song")
}