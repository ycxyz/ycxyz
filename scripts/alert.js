var $browser = jQuery.browser;
var ver = parseInt( $browser.version );
if( !$browser.mise ){
    $(".browser-alert").delay(500).slideDown(500,function(){
        $(".browser").each(function( index ){
            console.log( index );
            $(this).animate({"top":0},500);
        });
    });
    var times = 200;
    for (var i=0; i < times; i++) {
        (function(i){

         setTimeout(function(){
             var color = i % 2 ? "red" : "yellow";
             $(".browser-alert").css({"background": color});
             },i * 300);

         })(i);
    }
}
