// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

// function([string1, string2],target id,[color1,color2])    
consoleText(['Willkomen', 'Welcome', 'Bienvenue'], 'welcomeTXT');

function consoleText(words, id, colors) {

  if (colors === undefined) colors = ['#fff'];

  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])

  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 3000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 200)
  window.setInterval(function () {
    if (con.style.opacity.includes('100')) {
      con.style.opacity = 0;
    } else {
      con.style.opacity = 100;
    }
  }, 500)
}

function main() {

  (function () {
    'use strict';


    // Smooth Scrolling
    //==========================================
    $(function () {
      $('a.scroll').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 50
            }, 1000);
            return false;
          }
        }
      });
    });

    /*====================================
    Script for the Counters for Facts Section
    ======================================*/
    $('.count').each(function () {
      var $this = $(this);
      $this.data('target', parseInt($this.html()));
      $this.data('counted', false);
      $this.html('0');
    });
    $(window).bind('scroll', function () {
      var speed = 3000;
      $('.count').each(function () {
        var $this = $(this);
        if (!$this.data('counted') && $(window).scrollTop() +
          $(window).height() >= $this.offset().top) {
          $this.data('counted', true);
          $this.animate({
            dummy: 1
          }, {
            duration: speed,
            step: function (now) {
              var $this = $(this);
              var val = Math.round(
                $this.data(
                  'target') *
                now);
              $this.html(val);
              if (0 < $this.parent(
                '.value').length) {
                $this.parent(
                  '.value').css(
                    'width',
                    val + '%');
              }
            }
          });
        }
      });
    }).triggerHandler('scroll');

    /*====================================
    Portfolio Carousel 
    ======================================*/
    $(document).ready(function () {
      var owl = $("#team");
      owl.owlCarousel({

        itemsCustom: [
          [0, 1],
          [450, 1],
          [660, 2],
          [700, 2],
          [1200, 3],
          [1600, 3]
        ],
        navigation: false,
        pagination: true,
      });

    });

    /*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function () {
      var $container = $('#itemsWork , #itemsWorkTwo, #itemsWorkThree');
      $container.isotope({
        filter: '* , all',
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
      $('.cat a').click(function () {
        $('.cat .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        });
        return false;
      });

    });

    /*====================================
    Nivo Lightbox 
    ======================================*/
    // Agency Portfolio Popup
    $('#itemsWork a , #itemsWorkTwo a , #itemsWorkThree a , #popup a').nivoLightbox({
      effect: 'slideDown',
      keyboardNav: true,
    });

    $(document).ready(function () {

      $("#owl-demo").owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true

        // "singleItem:true" is a shortcut for:
        // items : 1, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

      });

    });




  }());


}
main();