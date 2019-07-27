
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
    });

    $('#testimonialSlider').slick({
        dots : true,
        arrows : false
    });

    $('#our-works').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        centerPadding: '100px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });
});



