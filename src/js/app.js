
$(document).ready(function () {
    $('#slides').slick({
        dots:true
    }).on("afterChange", function (event){
        let index = $(".slick-dots .slick-active").index()+1;
        $("#mini-refs img").removeClass("active");
        $("#mini-refs .img:nth-child("+index+")").children(0).addClass('active');
    });
    $("#mini-refs .img").click(function (event) {
        const index = $("#mini-refs .img").index(this);
        $('#slides').slick('slickGoTo', index);
        $("#mini-refs img").removeClass("active");
        $(this).children(0).addClass("active");
    });

    $('#testimonialSlider').slick({
        dots : true,
        arrows : false,
        autoplay: true
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
    
            var url = 'https://script.google.com/macros/s/AKfycbz7PiiVSglLHRK66p58obztlWAIHuaWEyOLQ4GgQw/exec';
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

});



