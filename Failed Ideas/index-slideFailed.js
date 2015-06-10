var clicks = 0;
console.log("0");
var index = function(){
  //3rd time
  var ua = undefined;
  if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
    if (/OS [1-7](.*) like Mac OS X/i.test(navigator.userAgent)) {
      // iOS version is <= 4.
      ua = "legacy";
      $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'iOSFix.css') );
    } else {
      ua = "ios8";
      // iOS version is > 4.
      console.log("ios8");
      $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'normal.css') );
    }
  } else {
    ua = "modern";
    console.log('computer');
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'normal.css') );
  }
  //3rd time
  if (ua == "legacy" || ua == "ios8") {
    $('footer').css('cursor','pointer');
    $(document).on('click', 'footer',  function(event) {
      event.preventDefault();
      window.location.replace("/bandstuff");
    });
  }
  $("footer").click(function(){
    if(clicks<10){
      clicks++;
      console.log(clicks);
    } else {
      window.location.replace("/bandstuff");
    }
  });
}

/*window load animations*/
var spinner = function(){
  $("body").addClass("loaded");
}

/*window changes*/
$("#aboutUsTab").click(function(){
  $("#homeTab, #aboutUsTab").toggleClass("active");
  $("body").removeClass();
  $("body").addClass("aboutUs loaded");
});
$("#homeTab").click(function(){
  $("#homeTab, #aboutUsTab").toggleClass("active")
  $("body").removeClass();
  $("body").addClass("home loaded");
});

$(document).ready(index);
$(window).load(spinner);
