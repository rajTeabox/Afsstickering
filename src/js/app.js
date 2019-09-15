
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
    
    $("#sign-board").click(function(){
      $('html, body').animate({
       scrollTop: $("#singages-3D").offset().top - 60
     }, 500);
    });

    $("#signage1").click(function(){
      $('html, body').animate({
       scrollTop: $("#signage-2d").offset().top - 60
     }, 500);
    });

    $("#signage2").click(function(){
      $('html, body').animate({
       scrollTop: $("#Clear-Acrylic").offset().top - 60
     }, 500);
    });

    $("#Etched1").click(function(){
      $('html, body').animate({
       scrollTop: $("#Etching-Signage").offset().top - 60
     }, 500);
    });

    $("#signage4").click(function(){
      $('html, body').animate({
       scrollTop: $("#Metal-Signage").offset().top - 60
     }, 500);
    });

    $("#signage5").click(function(){
      $('html, body').animate({
       scrollTop: $("#Roll-ups-standees").offset().top - 60
     }, 500);
    });

    $("#signage6").click(function(){
      $('html, body').animate({
       scrollTop: $("#Safety-signage").offset().top - 60
     }, 500);
    });

    $("#signage7").click(function(){
      $('html, body').animate({
       scrollTop: $("#Sun-board-signage").offset().top - 60
     }, 500);
    });

    $("#signage-last").click(function(){
      $('html, body').animate({
       scrollTop: $("#WPC-signage").offset().top - 60
     }, 500);
    });

    $("#frosted1").click(function(){
      $('html, body').animate({
       scrollTop: $("#Frosted-Cutting-Design").offset().top - 60
     }, 500);
    });

    $("#frosted2").click(function(){
      $('html, body').animate({
       scrollTop: $("#Custom-Frosted-Film").offset().top - 60
     }, 500);
    });

    $("#frosted3").click(function(){
      $('html, body').animate({
       scrollTop: $("#Printed-Frosted-Film").offset().top - 60
     }, 500);
    });

    $("#frosted4").click(function(){
      $('html, body').animate({
       scrollTop: $("#Decorative-Films").offset().top - 60
     }, 500);
    });

    $("#sun1").click(function(){
      $('html, body').animate({
       scrollTop: $("#reflective-films").offset().top - 60
     }, 500);
    });

    $("#sun2").click(function(){
      $('html, body').animate({
       scrollTop: $("#non-reflective-films").offset().top - 60
     }, 500);
    });

    $("#vinyl1").click(function(){
      $('html, body').animate({
       scrollTop: $("#vinyl-wall-graphics").offset().top - 60
     }, 500);
    });

    $("#vinyl2").click(function(){
      $('html, body').animate({
       scrollTop: $("#vinyl-cut-lettering").offset().top - 60
     }, 500);
    });

    $("#vinyl3").click(function(){
      $('html, body').animate({
       scrollTop: $("#One-Way-Vision-Film").offset().top - 60
     }, 500);
    });

    $("#vinyl4").click(function(){
      $('html, body').animate({
       scrollTop: $("#clear-printing").offset().top - 60
     }, 500);
    });

    $("#wall1").click(function(){
      $('html, body').animate({
       scrollTop: $("#office-wallpapers").offset().top - 60
     }, 500);
    });

    $("#wall2").click(function(){
      $('html, body').animate({
       scrollTop: $("#residential-wallpapers").offset().top - 60
     }, 500);
    });

    $("#wall3").click(function(){
      $('html, body').animate({
       scrollTop: $("#customized-wallpaper").offset().top - 60
     }, 500);
    });

    $("#blind1").click(function(){
      $('html, body').animate({
       scrollTop: $("#blind-types").offset().top - 60
     }, 500);
    });

    $("#blind2").click(function(){
      $('html, body').animate({
       scrollTop: $("#blind-types").offset().top - 60
     }, 500);
    });

    $("#blind3").click(function(){
      $('html, body').animate({
       scrollTop: $("#blind-types").offset().top - 60
     }, 500);
    });

    $("#floor1").click(function(){
      $('html, body').animate({
       scrollTop: $("#artificial-grass").offset().top - 60
     }, 500);
    });

    $("#floor2").click(function(){
      $('html, body').animate({
        scrollTop: $("#vinyl-floor").offset().top - 60
      }, 500);
    });

    $("#floor3").click(function(){
      $('html, body').animate({
       scrollTop: $("#carpet-flooring").offset().top - 60
     }, 500);
    });

    $("#floor4").click(function(){
      $('html, body').animate({
       scrollTop: $("#wooden-flooring").offset().top - 60
     }, 500);
    });

    $("#workStn1").click(function(){
      $('html, body').animate({
       scrollTop: $("#office-work-station").offset().top - 60
     }, 500);
    });

    $("#workStn2").click(function(){
      $('html, body').animate({
       scrollTop: $("#glass-partition").offset().top - 60
     }, 500);
    });

});



