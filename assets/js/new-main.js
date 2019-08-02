$(document).ready(function() {
  affixHowWeHelpTitle();
  animateIntroTitle();
  processSteps();
  onWindowsScroll();
  modalListener();
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
  const offset = 60;
  const offsetPx = offset + 'px';
  const container = $("#how-we-help");
  const sidebar = $("#how-we-help #how-we-help-sidebar");
  const sidebarWidth = sidebar.width();
  const sidebarHeight = sidebar.height();

  $(window).on('scroll', function() {
    container.each(function() {
      const docViewTop = $(window).scrollTop();
  
      const containerTop = $(this).offset().top;
      const containerBottom = containerTop + $(this).height();
  
      if (docViewTop > (containerTop + offset)) {
        sidebar.css('top', offsetPx);
        sidebar.css('bottom', '');
        sidebar.css('width', sidebarWidth);
        sidebar.css('position', 'fixed');
      } else {
        sidebar.css('position', 'absolute');
        sidebar.css('top', '')
      }
  
      if (docViewTop > (containerBottom - sidebarHeight)) {
        sidebar.css('bottom', offsetPx);
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

  $(window).on('scroll', function() {
    const maxLength = last.offset().top - first.offset().top;
    const overScreen = _isOverCenterScreen(first[0], 150);
    const currentHeight = line.height();
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
    if (_isOverCenterScreen(this, 150)) {
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


// for (let i = 0; i < this._modalButton.length; i++) {
//   this._modalButton[i].addEventListener("click", e => {
//     e.preventDefault();

//     let target = e.currentTarget.getAttribute("href");
//     let modal = document.querySelector(target);

//     this._isVisible = true;
//     modal.classList.toggle("modal--visible");

//     if (this._isVisible) {
//       modal.addEventListener("click", e => {
//         this._isVisible = false;
//         e.target.classList.contains("jsModalBg") ? modal.classList.remove("modal--visible") : null;
//       });
//     }
//   });
// }