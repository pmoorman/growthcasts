$(document).ready(function() {
  affixHowWeHelpTitle();
  animateIntroTitle();
})

function affixHowWeHelpTitle() {
  $('#how-we-help-sidebar').stickySidebar({
    topSpacing: 60,
    bottomSpacing: 60,
    containerSelector: '#how-we-help-container',
    innerWrapperSelector: '.sidebar__inner'
  });
}

// TODO: Animate only when in viewport
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

$(window).on('scroll', function(){
  
  $("#how-we-work .checklist li").each(function() {
    if (isOverCenterScreen(this, 150)) {
      // console.log($(this))
      $(this).addClass("active");
     }
  });

  $("#our-process .process-step").each(function() {
    if (isOverCenterScreen(this, 150)) {
      // console.log($(this))
      $(this).addClass("active");
     }
  });

  $(".slide-top, .slide-right").each(function() {
    if (isOverCenterScreen(this, 150)) {
      // console.log($(this))
      $(this).addClass("active");
     }
  });

  processSteps();
  
});

function processSteps() {
  const first = $("#our-process .process-step:first-child");
  const last = $("#our-process .process-step:last-child");
  const line = $("#our-process .pct-line");
  const maxLength = last.offset().top - first.offset().top;


  let overScreen = isOverCenterScreen(first[0], 150);

  if (overScreen && overScreen <= (maxLength + 50)) {
    line.css('height', overScreen + 'px');
  }
}

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  console.log('docViewTop ' + docViewTop)
  console.log('elemTop ' + elemTop)

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function isOverCenterScreen(elem, offset) {
  var windowCenter =  $(window).height() / 2;
  var elemTop = elem.getBoundingClientRect().top;
  console.log('-----------------');

  return (windowCenter + offset) > elemTop ? (windowCenter + offset) - elemTop : false ;
}
