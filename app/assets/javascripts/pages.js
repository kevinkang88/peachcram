var setUpSlider = function(){
  var levels = ["level one","level two","level three","level four"];
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

var guide = function(){
  $('#guide').on('click',function(evt){
    evt.preventDefault();
    var link = this.href;
    window.open(link,'guide-window',"width=400,height=450",'toolbar=no,location=no,menubar=no,scrollbars=yes,resizable=no');
  })
};
