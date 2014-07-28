var playSong = function(){
  $('#playBtn').on('click',function(){
    var params = { allowScriptAccess: "always" };
    var atts = { id: "myytplayer" };

    if($('#cram-amt').val() == 'easy-pz'){
      $.ajax({
        url: "/song_maker/level_one",
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
          initializeVideo(videoIds.shift());
        }
      })
    }else if($('#cram-amt').val() == 'moderate'){
      $.ajax({
        url: "/song_maker/level_two",
        type: "GET",
        dataType: "json",
        success: function(data){
          console.log("rails end point hit from js for level two songs succesful!");
          var videoIdsWithNum = data;
          videoIds = [];
          // below code extracts video ids and puts them inside video Ids array
          for(var key in videoIdsWithNum){
            videoIds.push(videoIdsWithNum[key]);
          }
          videoIds = videoIds.slice(0,10);
          videoIds = _.shuffle(videoIds);
          initializeVideo(videoIds.shift());
        }
      })
    }else if($('#cram-amt').val() == 'must-cram!'){
      $.ajax({
        url: "/song_maker/level_three",
        type: "GET",
        dataType: "json",
        success: function(data){
          console.log("rails end point hit from js for level three songs succesful!");
          var videoIdsWithNum = data;
          videoIds = [];
          // below code extracts video ids and puts them inside video Ids array
          for(var key in videoIdsWithNum){
            videoIds.push(videoIdsWithNum[key]);
          }
          videoIds = videoIds.slice(0,10);
          videoIds = _.shuffle(videoIds);
          initializeVideo(videoIds.shift());
        }
      })
    }else if($('#cram-amt').val() == 'so-stressed!'){
      $.ajax({
        url: "/song_maker/level_four",
        type: "GET",
        dataType: "json",
        success: function(data){
          console.log("rails end point hit from js for level four songs succesful!");
          var videoIdsWithNum = data;
          videoIds = [];
          // below code extracts video ids and puts them inside video Ids array
          for(var key in videoIdsWithNum){
            videoIds.push(videoIdsWithNum[key]);
          }
          videoIds = videoIds.slice(0,10);
          videoIds = _.shuffle(videoIds);
          initializeVideo(videoIds.shift());
        }
      })
    }
  })
};





//++++++++++++++++++++++++++++++++++++++++++++++++++++


function initializeVideo(videoID) {
  var params = { allowScriptAccess: "always" };
  var atts = { id: "myytplayer" };
  swfobject.embedSWF("http://www.youtube.com/v/" + videoID + "?enablejsapi=1&playerapiid=ytplayer&version=3&autoplay=1",
                   "ytapiplayer", "0", "0", "8", null, null, params, atts);
  hideButton();
};
function ytplayerOnStateChange(state) {
  console.log(state);
  if (state === 0) {
    // alert("state is 0");
    queueNextSong(ytplayer);
    ytplayer.playVideo();
  }
};
function onYouTubePlayerReady(playerId) {
  ytplayer = document.getElementById("myytplayer");
  console.log(ytplayer)
  ytplayer.addEventListener("onStateChange", "ytplayerOnStateChange");
};

function queueNextSong(ytplayer) {
  ytplayer.cueVideoById(videoIds.shift());
  initializeVideo(videoIds.shift());
  console.log("queued song")
};

var hideButton  = function() {
  $('#playBtn').attr('class', 'hidden');
};

//++++++++++++++++++++++++++++++++++++++
