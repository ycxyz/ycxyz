$(document).ready(function(){
    $(".menu_item").each(function(index){
        $(this).hover(function(){
            document.title = index;
            if( index > 4 ){
                $(this).addClass("last_menu_item");
            }
            $(this)
                .find(".pop_menu")
                .addClass("mouse-in")
                .stop().fadeIn(500,function(){
                $(this).css({'opacity':1});
                });
        },function(){
            $(this)
                .find(".pop_menu")
                .removeClass("mouse-in","last_menu_item")
                .stop()
                .fadeOut();
        });
    });
});
