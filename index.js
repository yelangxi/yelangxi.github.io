
$(document).ready(function(){
    $("#content1").fadeIn(4000);

    $("#myimg").mouseenter(function(){
       $("#myimg img").animate({
               height:"350px",
               width:"350px",
               left:"-25px",
               top:"-25px"
       })
    });
    $("#myimg").mouseleave(function(){
        $("#myimg img").animate({
                height:"300px",
                width:"300px",
                left:"0",
                top:"0"
        });
    });


    $(".piece").mouseenter(function(){
        $(this).animate({
            "margin-left":"20px",
            "margin-right":"20px",
            "height":"320px",
            "width":"240px",
        });
    });
    $(".piece").mouseleave(function(){
        $(this).animate({
            "margin-left":"30px",
            "margin-right":"30px",
            "height":"300px",
            "width":"220px",
        });
    });
    $(".piece").click(function(){
        var scrollTop = $(window).scrollTop();    //滚动条在Y轴上的滚动距离
        var scrollHeight = $(document).height();//内容可视区域的高度
        var windowHeight = $(this).height();    //内容可视区域的高度减去溢出（滚动）的距离

        var e = $(this).next();
        e.css({"top":scrollTop,"height":"100%","visibility":"visible"});

        $("body").css({overflow:"hidden"}); //禁止页面滚动
    });


    $(".modal-close").click(function(){
        $(this).parents().parent(".modal-overlay").css({"visibility":"hidden"});
        $("body").css({"overflow":""});
    });


    /*$(window).scroll(function() {
        var scrollTop = $(this).scrollTop();    //滚动条在Y轴上的滚动距离
        var scrollHeight = $(document).height();//内容可视区域的高度
        var windowHeight = $(this).height();    //内容可视区域的高度减去溢出（滚动）的距离

        if (scrollTop>800) {
            alert('bottom!!');
        }
    });
    console.log($(window).scrollTop());*/
});