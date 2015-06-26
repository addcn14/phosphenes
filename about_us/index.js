var index = function(){
  if(/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) { 
    if(/OS [2-7]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent)) {  
      // iOS 2-7 so Do Something   
      $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'iOSFix.css') );
    } else if(/CPU like Mac OS X/i.test(navigator.userAgent)) {
      // iOS 1 so Do Something 
      $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'iOSFix.css') );
    } else {
      $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'iOSFix.css') );
      // iOS 8 or Newer so Do Nothing
    }
  } else {
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'normal.css') );
  }
}
$(document).ready(index)
