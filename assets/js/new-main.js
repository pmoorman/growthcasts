$(window).on('scroll', function(){
  $("#how-we-work .checklist li").each(function() {
    
    if (isScrolledIntoView(this)) {
      console.log($(this))
      $(this).delay(1000).addClass("active");
     }
  })
  
});

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}