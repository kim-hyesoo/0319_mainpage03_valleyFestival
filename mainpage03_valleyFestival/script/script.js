$(function(){
    /*gnb메뉴*/
    $("#gnb ul#mainMenu>li").mouseover(function(){
        $(this).children(".subMenu").stop().fadeIn(1000);
    });
        $("#gnb ul#mainMenu>li").mouseout(function(){
      $(this).children(".subMenu").stop().fadeOut(600);
    });
        /*gnb메뉴*/
        /*슬라이드쇼 구현*/
    setInterval(fnslide,3000);
    function fnslide(){
    $("#slideshow a:first-child").fadeOut(500);
    $("#slideshow a:nth-child(2)").fadeIn(
        1000,
        function(){
            $("#slideshow a:first-child").insertAfter("#slideshow a:last-child");
        });


    }
        /*슬라이드쇼 구현*/
    /*레이어팝업 구현*/
    $("#bbs>table a").click(function(){
        $("#layerPopupBG").css({"display":"block"});
    });
     $("#buttonArea button#closeBtn").click(function(){
        $("#layerPopupBG").css({"display":"none"});
    });
        /*레이어팝업 구현*/


});
