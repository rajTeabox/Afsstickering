
$(document).ready(function () {
    $('#slides').slick({
        dots:true
    }).on("afterChange", function (event){
        let index = $(".slick-dots .slick-active").index()+1;
        $("#mini-refs img").removeClass("active")
        $("#mini-refs .img:nth-child("+index+")").children(0).addClass('active')
    });
    $("#mini-refs .img").click(function (event) {
        const index = $("#mini-refs .img").index(this);
        $(".slick-dots li").eq(index).trigger('click');
        $("#mini-refs img").removeClass("active")
        $(this).children(0).addClass("active")
    })

});


