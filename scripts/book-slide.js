$(document).ready(function(){

    var $wrapper = $("#book-wrapper");              // wrapper
    var $list = $("#book-list");

    var controls = $(".book-control");
    var $leftBtn = $(".book-control.left");         // will bind with moveToLeft func
    var $rightBtn = $(".book-control.right");       // will bind with moveToRight func

    var $bookItem = $list.find("li");
    //console.log( $bookItem,"log width", $bookItem.outerWidth() );

    var numoOfShow = 5;     // number of booked show up
    var speed = 500;        // animate speed
    var timePause = speed * 20;             // time of pause between animate
    var itemWidth = 180;
    var $stepWidth = itemWidth * numoOfShow;        // animate width
    var size = $bookItem.size();            // size fo book items
    var counter = 0;           // counter to store animate status

    $list.css({"width": ( size + 1 ) * itemWidth + "px"});

    var updateAll = function(){
        var updateIndex = function(){       // update current index
            $(".index").removeClass("current",function(){
                $(".index:nth-child("+counter+")").toggleClass("current");
            });
        };
        var updateArrow = function(){
            if( counter <= 0 ){
                controls.removeClass("disabled")
                $rightBtn.addClass("disabled");
            } else if( counter >= ( size / numoOfShow - 1 ) ){
                controls.removeClass("disabled");
                $leftBtn.addClass("disabled");
            } else {
                controls.removeClass("disabled");
            }
        };

        //updateIndex();
        updateArrow();
    };

    var move = function( direct,callback ){         // direct: use "-=" will moveToLeft
                                                    // "+=" will moveToRight
        $list.animate({"margin": direct + $stepWidth + "px"}, speed,function(){
            updateAll();
            callback();
        });
    };

    var moveToLeft = function(){            // animate to left
        //console.log( 'move to left func' );
        if (counter >= ( size / numoOfShow - 1 ) ){
            updateAll();
            return;
        }

        ++ counter;
        $list.animate({"margin-left": "-=" + $stepWidth + "px"},speed,function(){
            updateAll();
            //console.log( "counter",counter,'stepWidth',$stepWidth );
        });
    };

    var moveToRight = function(){           // animate to right
        //console.log( 'move to right func' );
        if (counter <= 0){
            updateAll();
            return;
        }

        -- counter;
        $list.animate({"margin-left": "+=" + $stepWidth + "px"},speed,function(){
            updateAll();
        });
    };

    var $slideTimer = setInterval( function(){
        if( counter >= (size / numoOfShow - 1) ){
            counter = 0;
            $list.animate({"margin-left":0}, speed * 2, updateAll);
            return;
        }
        moveToLeft();
    }, timePause );         // set interval timer

    $wrapper.hover(function(){              // mouse hover handling
        clearInterval( $slideTimer );
    },function(){
        $slideTimer = setInterval( moveToLeft, speed );
    });

    // binding function to control buttons
    $leftBtn.bind("click", moveToLeft);
    $rightBtn.bind("click", moveToRight);


});

// cover flip

//$(document).ready(function(){
    //$(".book-list li a").bind("click",function(){
        //$(this).find("div").toggleClass("flip-cover");
    //})
//});
