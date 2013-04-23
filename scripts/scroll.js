(function(){

    var $scroller = $("#scroller .scroller_inner");
    var $items = $(".scroll_item");
    var $size = $items.size();
    var $up = $scroller.find(".up");
    var $down = $scroller.find(".down");
    var $animateHeight = $items.height();
    var $upBtn = $("#scroll_controler .up");
    var $downBtn = $("#scroll_controler .down");
    var flag = 0;

    var scrollUp = function(){
        if( flag > $size - 3 ){
            $upBtn.fadeOut(function(){
                $downBtn.fadeIn();
            });
            return;
        }
        $scroller.animate({"margin-top":"-=" + $animateHeight + "px"},500);
        flag += 1;
        $downBtn.fadeIn();
        console.log( flag );
    };

    var scrollDown = function(){
        if ( flag < 1 ) {
            $downBtn.fadeOut(function(){
                $upBtn.fadeIn();
            });
            return;
        }
        $scroller.animate({"margin-top":"+=" + $animateHeight + "px"},500);
        $upBtn.fadeIn();
        flag -= 1;
        console.log( flag );
    };

    $upBtn.bind( "click",scrollUp );
    $downBtn.bind( "click",scrollDown )

    $down.bind("click",function(){
        scrollDown();
    });

}()); // closure
