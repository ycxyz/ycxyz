$(document).ready(function(){

    var $wrapper = $("#book-wrapper");        // wrapper
    var $list = $("#book-list");

    var $control = $(".book-control");
    var $leftBtn = $(".book-control.left");   // will be bound with moveToLeft
    var $rightBtn = $(".book-control.right"); // will be bound with moveToRight

    var $bookItem = $list.find("li");

    var numoOfShow = 5;                       // number of books show up
    var speed = 1000;                         // animate speed
    var timePause = speed * 20;               // pause of slide
    var itemWidth = 178;                      // 123 + 27 + 28 = 178
    var $stepWidth = itemWidth * numoOfShow;  // animate width
    var size = $bookItem.size();              // size fo book items
    var counter = 0;                          // counter to store animate status


    var updateAll = function(){
        var updateIndex = function(){       // update current index
            $(".index").removeClass("current");
            $(".index:nth-child("+( counter+1 )+")").addClass("current");
        };

        var updateArrow = function(){       // show or hide Arrow
            if( counter <= 0 ){
                $control.removeClass("disabled")
                $rightBtn.addClass("disabled");
            } else if ( counter >= ( size / numoOfShow - 1 ) ){
                $control.removeClass("disabled");
                $leftBtn.addClass("disabled");
            } else {
                $control.removeClass("disabled");
            }
        };

        updateIndex();
        updateArrow();
    };

    var $move = function( direct,callback ){         // direct: use "-=" will moveToLeft
                                                    // "+=" will moveToRight
        $list.animate({"margin-left": direct + $stepWidth + "px"}, speed, function(){
            updateAll();
            if (callback) callback();

        });
    };

    var moveToLeft = function(){            // animate to left
        if (counter >= ( size / numoOfShow - 1 ) ){
            updateAll();
            return;
        }

        ++ counter;
        $move("-=");
    };

    var moveToRight = function(){           // animate to right
        if (counter <= 0){
            updateAll();
            return;
        }

        -- counter;
        $move("+=");
    };

    var $slideTimer = setInterval( function(){
        if( counter >= (size / numoOfShow - 1) ){
            counter = 0;
            $list.animate({"margin-left":0}, speed * 2, updateAll);
            return;
        }
        moveToLeft();
    }, timePause );         // set interval timer


    var addIndex  = function(){
        var $con = $("#index-con");
        var num = size / numoOfShow;
        // generate html string
        var html = (new Array(num + 1)).join("<i class='index'></i>");
        $con.html( html );

        $("#index-con .index").text(function(i) {
            return i + 1;
        });
    };

    // initialize
    $list.css({"width": ( size + 1 ) * itemWidth + "px"});
    addIndex();

    updateAll();

    // mouse hover handling
    $wrapper.hover(function(){
        clearInterval( $slideTimer );
    },function(){
        $slideTimer = setInterval( moveToLeft, speed );
    });

    // binding function to control buttons
    $leftBtn.bind("click", moveToLeft);
    $rightBtn.bind("click", moveToRight);

});
