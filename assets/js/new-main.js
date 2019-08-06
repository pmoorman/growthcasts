$(document).ready(function() {
  animateIntroTitle();
  processSteps();
  onWindowsScroll();
  modalListener();
  smoothScroll();
  affixHowWeHelpTitle();
  _viewportAnimations();
});

function animateIntroTitle() {
  let titleEl = $('#intro .title');
  let rightEl = $('#intro .title .right');
  let words = ['leads', 'growth', 'revenue'], 
      i = 0;

  rightEl.on("animationend", function() {
    titleEl.removeClass('active');
  });

  setInterval(function() {
    rightEl.html(words[i=(i+1)%words.length]);
    titleEl.addClass('active');
  }, 3000);  
}

function affixHowWeHelpTitle() {
  let offset = 60;
  let lineHeightDiff = 12;
  const container = $("#how-we-help");
  const sidebar = $("#how-we-help #how-we-help-sidebar");
  let sidebarWidth = sidebar.width();
  let sidebarHeight = sidebar.height();

  $(window).on('resize', function() {
    sidebarWidth = sidebar.width();
    sidebarHeight = sidebar.height();
  })

  $(window).on('scroll', function() {
    if (window.matchMedia("(max-width: 720px)").matches) {
      sidebar.css('top', '');
      sidebar.css('bottom', '');
      sidebar.css('width', '');
      sidebar.css('position', '');
      return;
    }

    container.each(function() {
      const docViewTop = $(window).scrollTop();
  
      const containerTop = $(this).offset().top;
      const containerBottom = containerTop + $(this).height();
  
      if (docViewTop > (containerTop + offset)) {
        sidebar.css('top', (offset + lineHeightDiff) + 'px');
        sidebar.css('bottom', '');
        sidebar.css('width', sidebarWidth);
        sidebar.css('position', 'fixed');
      } else {
        sidebar.css('position', 'absolute');
        sidebar.css('top', '')
      }
  
      if (docViewTop > (containerBottom - sidebarHeight)) {
        sidebar.css('bottom', (offset - lineHeightDiff) + 'px');
        sidebar.css('top', '');
        sidebar.css('position', 'absolute');
      }
    })
  });
}

function processSteps() {
  const first = $("#our-process .process-step:first-child");
  const last = $("#our-process .process-step:last-child");
  const line = $("#our-process .pct-line");
  let maxLength = last.offset().top - first.offset().top;
  let currentHeight = line.height();

  $(window).on('resize', function() {
    maxLength = last.offset().top - first.offset().top;
    currentHeight = line.height();
    const newHeight = Math.min(maxLength, currentHeight);
    line.css('height', newHeight + 'px');
  })

  $(window).on('scroll', function() {
    maxLength = last.offset().top - first.offset().top;
    currentHeight = line.height();
    const overScreen = _isOverCenterScreen(first[0], 150);
    const newHeight = Math.min(maxLength, overScreen);

    if (overScreen && newHeight > currentHeight) {
      line.css('height', newHeight + 'px');
    }
  });
}

function onWindowsScroll() {
  $(window).on('scroll', _viewportAnimations);
}

function _viewportAnimations() {
  $('.animated-logo').each(function() {
    if (_isOverCenterScreen(this, 150)) {
      $(this).addClass('active');
    }
  });

  $("#how-we-work .checklist li").each(function() {
    if (_isOverCenterScreen(this, 150)) {
      $(this).addClass("active");
     }
  });

  $("#our-process .process-step").each(function() {
    if (_isOverCenterScreen(this, 150)) {
      $(this).addClass("active");
     }
  });

  $(".slide-top, .slide-bottom, .slide-left, .slide-right").each(function() {
    const offset = $(this).attr('slide-offset') || 150;
    if (_isOverCenterScreen(this, parseInt(offset, 10))) {
      $(this).addClass("active");
     }
  });
}

function _isOverCenterScreen(elem, offset) {
  var windowCenter =  $(window).height() / 2;
  var elemTop = elem.getBoundingClientRect().top;
  return (windowCenter + offset) > elemTop 
    ? (windowCenter + offset) - elemTop 
    : false;
}

function modalListener() {
  $('.modal-btn').each(function() {
    $(this).on('click', function(e) {
      e.preventDefault();
      const target = $(this).attr('href');
      const modal = $(target);

      modal.toggleClass('modal--visible');

      modal.on('click', function(e) {
        if (e.target.classList.contains("modal_background")) {
          modal.removeClass("modal--visible");
          modal.find('iframe').each(function() {
            $(this).attr('src', $(this).attr('src'));
          });
        }
      });
    });
  });
}

function smoothScroll() {
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
}