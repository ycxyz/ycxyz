// alert for ie 6
// if version of ie is lower than 6
// show the alert div
var $browser = jQuery.browser;
var ver = parseInt( $browser.version ,10);
if( $browser.msie && ver <= 7 ){
    $(".browser-alert").delay(500).slideDown(500,function(){
        $(".browser")
    });
    var times = 999;
    for (var i=0; i < times; i++) {
        (function(i){

            setTimeout(function(){
                var color = i % 2 ? "red" : "#ff0";
                $(".browser-alert").css({"backgroundColor": color});
            },i * 500);

        })(i);
    }
}
