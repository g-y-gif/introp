
AOS.init();


$(function(){
    // 홈 메인 버튼
    $(".bt").click(function(){
        $(this).addClass("on")
        
        var section = $(".aboutme").offset().top
        $("html, body").delay(1000).animate({
            scrollTop: section
        }, 1000);
    });

    // nav 클릭 스크롤
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
    
});         