
AOS.init();


$(function(){
    // 새로 고침 상단 고정
    $("html, body").animate({ scrollTop: 0 }, "slow");

    // 기본 이벤트 제거
    window.addEventListener("wheel", function(e){
        e.preventDefault();
    },{passive : false});

    // 페이지 선언
    var $html = $("html");
    var page = 1;
    var lastPage = $(".section").length;

    $html.animate({scrollTop:0},10);

    // 휠 굴렸을 때 이벤트
    $(window).on("wheel", function(e){
 
        if($html.is(":animated")) return;
     
        if(e.originalEvent.deltaY > 0){
            if(page== lastPage) return;
     
            page++;
        }else if(e.originalEvent.deltaY < 0){
            if(page == 1) return;
     
            page--;
        }
        var posTop = (page-1) * $(window).height();
     
        $html.animate({scrollTop : posTop});
     
    });

    // 홈 메인 버튼
    $(".bt").click(function(){
        $(this).addClass("on")
        
        var section = $(".about").offset().top
        $("html, body").delay(1000).animate({
            scrollTop: section
        }, 1000);
    });

    // nav 메뉴 클릭 위치 이동 
    $(".scroll_move").click(function(event){         
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });

    // 프로젝트 프리뷰
    $(".preview").hover(function(){
        var img = $(".preview img").height()-677
        $(".preview img").animate({
            marginTop: -img
        }, 3000)
    });

    // about nav 호버 컬러 변경
    $(window).scroll(function(){
        if ($(this).scrollTop() >= $(".about").offset().top && $(this).scrollTop() < $(".projectA").offset().top) {
            $(".top > ul > li > a").css("color", "black");
        } else {
            $(".top > ul > li > a").css("color", "white");
        }
    });
});