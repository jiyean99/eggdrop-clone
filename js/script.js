function slide(){

    var wid = 0; //슬라이드 가로값(브라우저100%)
    var i = 0; //현재 인덱스
    var slide_length = 0; //슬라이드,인디케이터의 갯수(인덱스)

    //초기화
    function init(){
        wid = $(".main-slide").width(); //브라우저의 너비(100%)
        i = $(".main-indi > li.indi-on").index(); //인디케이터(on)의 인덱스
        slide_length = $(".main-indi>li").length; //인디케이터의 갯수
    }

    //슬라이드 실행(왼쪽이동,인디케이터가 활성화되는 상태)
    function slideMove(){
        $(".main-img-panel").animate({"margin-left": -wid * i});
        $(".main-indi>li").removeClass("indi-on");
        $(".main-indi>li").eq(i).addClass("indi-on");
    }
    
    //자동 실행(진짜 이동,진짜 활성화-인덱스를 찾아주는 함수)
    function autoMove(){
        setInterval(function(){
            if(i == slide_length - 1){
                i = 0;
            }else{
                i++;
            }
            slideMove();
        },4000);
    }

    //인디케이터를 클릭했을때(인덱스가 일치되서 활성화)
    function indicator(){
        $(".main-indi>li").click(function(){
            i = $(this).index();
            slideMove();
        });
    }

    //화면크기 재설정
    function autoResize(){
        $(window).resize(function(){
            init();
            $(".main-img-panel").animate({"margin-left": -wid * i});
        });
    };

    function init() {
        wid = $slide.width() / 8; //960px (li 한 개는 240px * 4)
    }

    // md
    $(function () {
        setInterval(function () {
            $(".containner").animate({ marginLeft: -408 }, 500, function () {
                $(this).css({ marginLeft: 0 }).find("div:last").after($(this).find("div:first"));
            })
        }, 2000);
    });

    
    init();
    autoMove();
    indicator();
    autoResize();
}

$(document).ready(function(){
    slide();
});

// popup
$(function(){
    $(".popup-close").click(function(){
        $(".popup").hide()
        $(".popup-close").hide();
    });
})

// scrollDown ( 메인슬라이드 → section1 )
$(function(){
    $("a[href^='#slidingMenu']").click(function(e){
        e.preventDefault();
        var target = $(this.hash);
        
        $("html,body").animate({scrollTop : target.offset().top},1000)
    })
});

// scroll-top ( scrolltop이동 및 footer에서 고정 )
$(function(){
    $('.scroll-top').click(function(){
        $('html').animate({scrollTop : 0},1000);
    });

    var $w = $(window),
    footerHei = $('footer').outerHeight(),
    $banner = $('.fixed-icon');

    $w.on('scroll', function() {

        var scr = $w.scrollTop();
        var val = $(document).height() - $w.height() - footerHei;

        if (scr >= val)
            $banner.addClass('fixed')
        else
            $banner.removeClass('fixed')

    });

});

// scrollTop ID 부여하는 방법 (참고만)
// $(function(){
//     $("a[href^='#scrollTop']").click(function(e){
//         e.preventDefault();
//         var target = $(this.hash);
        
//         $("html,body").animate({scrollTop : target.offset().top},1000)
//     })
// });



/////section-1 slide 재시도1
// function slidingMenu(){
//     var now = 0;
//     var show = 8; //li갯수 (var length와 동일한 것)
//     var $containner = $(".containner");  //ul(li*6 포함)
//     var length = $(".containner>li").length;//총 li의 갯수 (6개) (show와 다른점은 인덱스로 불러올 갯수)
//     var view = $(".sliding-box").width(); 
//     var move = view/show; //한칸씩 움직이는 크기
//     var maxWidth = 10080; //최대 가로값
    
//     //초기화
//     $containner.css("width","length*move"); //2460px
    
//      //슬라이드
//         //★ 갖춰야할 명령 1.이동(한칸씩 왼쪽으로) 2.무한반복 3.인덱스값 초기화 4.마우스오버시 반복정지 등등
//         //1-1) 0번 인덱스가 왼쪽으로 가면 컨테이너 ul 복사
//         //1-2) 복사한 값이 컨테이너의 맨 뒤에가서 붙여넣기
//         //1-3) 복사한 값을 삭제하고 초기화
//     setInterval(function(){
//     // console.log(now);
//     if(now == 0){
//     //복사한 값 삭제,초기화
//     $containner.find(">li").eq(length-1).nextAll().remove();
//     $containner.css({"left":0}).stop();
//     //이동
//     now++;
//     $containner.stop().animate({"left":move*now*-1},1000);
    
//     //컨테이너 복사
//     var cloneCont = $containner.children().clone();
    
//     //컨테이너 붙여넣기
//     $containner.css({"width":$containner.innerWidth()+(move*length)});
//     cloneCont.appendTo($containner);
//     // $containner.css("width",maxWidth);
//     }else if(now >= 1){
//     //이동
//     now++;
//     $containner.stop().animate({"left":move*now*-1},1000);
//     }
    
//     if(now == length){
//     now = 0;
//     }
//     },2000);
    
//     };
    
// $(document).ready(function(){
//     slidingMenu();
// })


///////////////////////////////////////

/////section-1 slide 재시도2

// function slidingMenu() {

//     var wid = 0; //이동하는 가로값
//     var $slide = $(".containner"); // li *4를 포함한 div
//     var $panel = $(".sliding-bo"); //slide가 적용되는 범위 960px
//     var now = 0; //click 횟수

//     //초기화
//     function init() {
//         wid = $slide.width() / 8; //960px (li 한 개는 240px * 4)
//     }

//         // md
//         $(function () {
//             setInterval(function () {
//                 $(".containner").animate({ marginLeft: -408 }, 500, function () {
//                     $(this).css({ marginLeft: 0 }).find("div:last").after($(this).find("div:first"));
//                 })
//             }, 2000);
//         });

        
//     //event
//     function slideEvent() {
//         //next
//         $(".next").click(function (e) {
//             e.preventDefault();
//             nextChkPlay();
//         });

//         //prev
//         $(".prev").click(function (e) {
//             e.preventDefault();
//             prevChkPlay();
//         });
//     }

//     //next
//     function nextChkPlay() {
//         if (now == 4) {
//             // return false; //0이 되지 않게 제어
//             now = 0;
//         } else {
//             now++;
//             console.log(now);
//         }
//         init();
//         slideMove();
//     }

//     //prev
//     function prevChkPlay() {
//         if (now == 0) {
//             now = 4;
//         } else {
//             now--;
//             console.log(now);
//         }
//         init();
//         slideMove();
//     }

//     //slide
//     function slideMove() {
//         $panel.stop().animate({ "margin-left": -wid * now });
//     };

//     slideEvent();

// }
// $(document).ready(function () {
//     slidingMenu();
// })
