var playSong = function(){
  $('#playBtn').on('click',function(){
    // play Yiruma song!

    var params = { allowScriptAccess: "always" };
    var atts = { id: "myytplayer" };
    swfobject.embedSWF("http://www.youtube.com/v/CE8vZEheWew?enablejsapi=1&playerapiid=ytplayer&version=3&autoplay=1",
                       "playerBox", "0", "0", "8", null, null, params, atts);

  })
};
