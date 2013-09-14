$(".board ul").sortable({
    revert: true
});
$(".board .tag").draggable({
    containment: ".board",
    scroll: false,
    cursor: "move",
    revert: "invalid",
    drag: function () {
        $(this).addClass("dragging")//.animate({"opacity": 0.5}, 100);
    },
    stop: function () {
        $(this).removeClass('dragging')//.animate({"opacity": 1}, 100);
    }
})
