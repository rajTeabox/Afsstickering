
$(document).ready(function () {
    $('#slides').slick({
        dots:true,
        draggable:false,
        swipeToSlide: false,
        touchMove: false,
        swipe:false,
        responsive: [
          {
            breakpoint:480,
            settings: {
              dots:false
            }
          }
        ]
    }).on("afterChange", function (event,index){
        if(index.$slider[0].id === 'slides'){
            let  highlightIndex = index.currentSlide+1;
            $("#mini-refs img").removeClass("active");
            $("#mini-refs .img:nth-child("+highlightIndex+")").children(0).addClass('active');
        }
    });
    $("#mini-refs .img").click(function (event) {
        const index = $("#mini-refs .img").index(this);
        $('#slides').slick('slickGoTo', index);
    });

    $('#testimonialSlider').slick({
        dots : true,
        arrows : false,
        autoplay: true
    });

    $('.service-individual').slick({
      dots:true,
      arrows:false,
      draggable:true
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

    // FAQ
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }

    // navingate to respective section
    $(".home_link").click(function(){
        $('html, body').animate({
           scrollTop: $("#section1").offset().top -110
         }, 500);
    });

    $(".aboutus_header").click(function(){
      $('html, body').animate({
       scrollTop: $("#section-2").offset().top - 60
     }, 500);
    });

    $(".feature_header").click(function(){
      $('html, body').animate({
       scrollTop: $("#section-3").offset().top - 60
     }, 500);
    });

    $(".service_header").click(function(){
      $('html, body').animate({
       scrollTop: $("#section-5").offset().top - 50
     }, 500);
    });

    var sections = $('.tab-active-scroll')
      , nav = $('.logo-header')
      , nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();
      sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();
        
        if (cur_pos >= top && cur_pos <= bottom) {
          nav.find('a').removeClass('active-item');
          sections.removeClass('active-item');
          nav.find('a[data-id="#'+$(this).attr('id')+'"]').addClass('active-item');
          
        }
      });
    });
    
    // contact form
    (function() {
      $(document).ready(function() {
        return $('#contact-form').submit(function(e) {
          var email, message, name, phone, companyname;
          name = document.getElementById('fullname');
          email = document.getElementById('email');
          phone = document.getElementById('contact');
          companyname = document.getElementById('companyname');
          message = document.getElementById('message');
          if (!name.value || !email.value || !phone.value) {
            alertify.error('Please check your entries');
            return false;
          } else {
            /*  URL has to be integrated with their account
           Steps To Follow
           https://www.npmjs.com/package/html-form-send-email-via-google-script-without-server */
    
            var url = 'https://script.google.com/macros/s/AKfycbwkBxiB15KrCS4NaRqZf5ypG1Y91sWdPAy_5_-D7kgYizstMpTy/exec';
            $.ajax({
              method: 'POST',
              url: url,
              data: $('#contact-form').serialize(),
              datatype: 'json'
            });
            e.preventDefault();
            $(this).get(0).reset();
            return alertify.success('Message sent');
          }
        });
      });
    
    }).call(this);

    $(".support").click(function(){
      window.fcWidget.open();
      window.fcWidget.show();
    });

    $('.single-item').slick(
      {
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
      }
    );

    $('.one-time').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });
    
});



