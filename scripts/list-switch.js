$(".sub_topic").each(function(index){
    var _index = index;
    $(this).bind("click",function(){
        var $this = $(this);
        $this.siblings(".sub_topic").removeClass("current_sub_topic");      // all hidden
        $this.addClass("current_sub_topic");        // show title
        $(".list_jar").removeClass("current_jar");
        $(".list_jar:nth("+_index+")").addClass("current_jar");     // show list
        $("body").scrollTo("#topic_switcher",500);      // scroll to #topic_switcher
        return false;
    });
});

