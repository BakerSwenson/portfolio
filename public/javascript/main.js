function parallax() {
    setpos("#pb0");
    setpos("#pb1");
    setpos("#pb2", 4);
    setpos("#pb3");
    setpos("#pb4");
}

function setpos(element, factor) {
    factor = factor || 2;
    
    var offset = $(element).offset();
    var w = $(window);
    
    var posx = (offset.left - w.scrollLeft()) / factor;
    var posy = (offset.top - w.scrollTop()) / factor;

    
    $(element).css('background-position', '50% '+posy+'px');
    
}

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
   
        window.location.hash = hash;
      });
    }
  });
});