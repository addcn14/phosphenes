var clicks = 0;
console.log("0")
var index = function(){
  /*if(/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) { 
    console.log("1")
    if(/OS [2-7]_\d(_\d)? like Mac OS X/i.test(navigator.userAgent)) {  
      console.log("2")
      // iOS 2-7 so Do Something   
      $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'iOSFix.css') );
      console.log("3")
    } else if(/CPU like Mac OS X/i.test(navigator.userAgent)) {
      // iOS 1 so Do Something 
      $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'iOSFix.css') );
    } else {
      // iOS 8 or Newer so Do Nothing
    }
  } else {
    console.log("4")
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'normal.css') );
  }*/
  //Here
  function iOSversion() {
    console.log("iosversion")
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
  }
}

var ver = iOSversion();
console.log(ver)
if (ver!= undefined) {
if (ver[0] <7) {
  console.log('ios7')
  $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'iOSFix.css') );
} else {
  console.log('computer')
  $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'normal.css') );
}} else {
  console.log('computer')
  $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'normal.css') );
}
  //To here
  $("footer").click(function(){
    if(clicks<10){
      clicks++
      console.log(clicks)
    } else {
      window.location.replace("/bandstuff");
    }
  });
}
$(document).ready(index);
