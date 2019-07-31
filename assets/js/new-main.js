$(window).on('scroll', function(){
  $("#how-we-work .checklist li").each(function() {
    if (isOverCenterScreen(this, 150)) {
      // console.log($(this))
      $(this).addClass("active");
     }
  })
  
});

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  console.log('docViewTop ' + docViewTop)
  console.log('elemTop ' + elemTop)

  // return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function isOverCenterScreen(elem, offset) {
  var windowCenter =  $(window).height() / 2;
  var elemTop = elem.getBoundingClientRect().top;
  console.log('-----------------');

  return (windowCenter + offset) > elemTop;
}