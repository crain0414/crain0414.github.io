$(document).ready(function(){

    // 보유스킬 팝업창

    $("#skill_btn").click(function(){

        $("#pop_wrap").fadeIn();
    });

    $("#button").click(function(){

        $("#pop_wrap").fadeOut();
    });

    // sec04 컨텐츠 변경


    $("#guess").click(function(){

        $("#click01").fadeIn();
        $("#click02").fadeOut();
    });

    $("#twosome").click(function(){

        $("#click01").fadeOut();
        $("#click02").fadeIn();

    });

    //layout
    var ww=$(window).width();
    var wh=$(window).height();

    $('#wrap').css({
        width:ww,
        height:wh,
    });

    $('.mainpage_wrap').css({
        width: ww * 5,
        height:wh,
    });

    $('.mainpage').css({
        width:ww,
        height:wh,
        // font:'900 100px /'+wh+'px ""',
    });


    //scroll event
    var i=0;

    let array = [];
        for(let i=0; i<$('.mainpage').length; i++) {
            array[i] = $('.mainpage').eq(i).offset().left
        }

    let chk = true;

    $('.mainpage').on('mousewheel', function(){

        if(chk) {

            chk = false;
            setTimeout(function(){
                chk = true;
            },500)

            let w_delta = event.wheelDelta / 120;
            
            if(w_delta < 0 && $(this).next().length > 0) {
                $('.mainpage_wrap').animate({
                    left: -array[$(this).index()+1]
                }, 1000) 
            }

            else if(w_delta > 0 && $(this).prev().length > 0) {
                $('.mainpage_wrap').animate({
                    left: -array[$(this).index()-1]
                }, 1000)
            }
        }
    });

    // 메인인덱스 누르면 각 페이지로 이동

    var index = -1920;

    $(".index:nth-child(1)").click(function(){

        $(".mainpage_wrap").animate({
            left: index,
        });

    });

    $(".index:nth-child(2)").click(function(){

        $(".mainpage_wrap").animate({
            left: index * 2,
        });

    });

    $(".index:nth-child(3)").click(function(){

        $(".mainpage_wrap").animate({
            left: index * 3,
        });

    });

    // sec04 버튼 누르면 마지막페이지로 이동

    $("#click_bg").click(function(){

        $(".mainpage_wrap").animate({
            left: index * 4,
        });
    

    });




}); // end 