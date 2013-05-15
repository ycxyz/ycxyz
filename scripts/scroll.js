(function(){

    var $scroller = $("#scroller .scroller_inner");
    var $items = $(".scroll_item");
    var $size = $items.size();
    var $animateWidth = $items.width();
    var $upBtn = $("#topic_before .scroller-control-left");
    var $downBtn = $("#topic_before .scroller-control-right");
    var flag = 0;

    var scrollLeft = function(){
        // console.log( "left");
        if( flag > $size - 5 ){     // number of showing up item plus 1
            $upBtn.fadeOut(function(){
                $downBtn.fadeIn();
            });
            return;
        }
        $scroller.animate({"margin-left":"-=" + $animateWidth + "px"},500);
        flag += 1;
        $downBtn.fadeIn();
        // console.log( flag );
    };

    var scrollRight = function(){
        if ( flag < 1 ) {
            $downBtn.fadeOut(function(){
                $upBtn.fadeIn();
            });
            return;
        }
        $scroller.animate({"margin-left":"+=" + $animateWidth + "px"},500);
        $upBtn.fadeIn();
        flag -= 1;
        // console.log( flag );
    };

    $upBtn.bind( "click", scrollLeft );
    $downBtn.bind( "click", scrollRight )

}()); // closure
