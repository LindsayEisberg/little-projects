$(document).ready(function() {
  if ($(window).width() >= 768) {
    $('.microsite-accordion .top-level-acc').click(function(e) {
      var dropDown = $(this).closest('li').find('.sub-list');

      $(this).closest('.microsite-accordion').find('.sub-list').not(
        dropDown).slideUp();

      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
      } else {
        $(this).closest('.microsite-accordion').find('a.active').removeClass(
          'active');
        $(this).addClass('active');
      }

      dropDown.stop(false, true).slideToggle();

      e.preventDefault();
    });
  } else {
    $('.microsite-accordion a').removeClass('top-level-acc');
    $('.sub-list').hide();
    $('.right-nav h3').on('click', function(e) {
      e.preventDefault();
      $(this).siblings('.microsite-accordion').slideToggle();
      $(this).parent('.microsite-nav').toggleClass('active-mobile');
      $(this).siblings('.interior-list').slideToggle();
      $(this).parent('.interior-nav').toggleClass('active-mobile');
    });
    //Smooth Scroll from anchor links
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(
            /^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(
              1) +
            ']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 30
            }, 800);
            return false;
          }
        }
      });
    });
  }


  $('.interior-nav .interior-list li a').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 30
    }, 800);
    return false;
  });


});
