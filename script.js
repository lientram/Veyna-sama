$(document).ready(function () {
    var stt = 0;
    var endImg = $("img.slide:last").attr("idx");

    $("img.button").click(function () {
        stt = $(this).attr("idx");

        changeImg(stt);
    });

    $("#next").click(function () {
        if (++stt > endImg) {
            stt = 0;
        }

        changeImg(stt);
    });

    $("#prev").click(function () {
        if (--stt < 0) {
            stt = endImg;
        }

        changeImg(stt);
    });

    var interval;
    var timer = function () {
        interval = setInterval(function () {
            $("#next").click();
        }, 5000);
    };
    timer();
});
//Hide all image slide and show image have index "stt"
//Remove active all buttton and set "active" for button have index "stt"
//Reset timer when change image
function changeImg(stt) {
    $("img.slide").hide();
    $("img.slide").eq(stt).fadeIn(500);
    $("img.button").removeClass("active");
    $("img.button").eq(stt).addClass("active");
    clearInterval(interval);
    timer();
};