var zIndex = 999;
$(".board .tag").draggable({
    containment: ".board",
    scroll: false,
    cursor: "move",
    // revert: "invalid",
    drag: function () {
        zIndex += 1;
        $(this).css({"z-index":zIndex})
        $(this).addClass("dragging").stop().animate({"opacity": 0.9}, 100);
    },
    stop: function () {
        $(this).removeClass('dragging').stop().animate({"opacity": 1}, 100)
        // $(this).animate({'opacity':1}, 100);
    }
})
