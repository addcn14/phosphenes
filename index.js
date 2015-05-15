var clicks = 0;
var index = function(){
  if(/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) { 
    if(/OS [2-7]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent)) {  
      // iOS 2-7 so Do Something   
      $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'iOSFix.css') );
    } else if(/CPU like Mac OS X/i.test(navigator.userAgent)) {
      // iOS 1 so Do Something 
      $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'iOSFix.css') );
    } else {
      // iOS 8 or Newer so Do Nothing
    }
  } else {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'normal.css') );
  }
  $("footer").click(function(){
    if(clicks<10){
      clicks++
      console.log(clicks)
    } else {
      window.location.replace("/bandstuff");
    }
  });
}
$(document).ready(index)
