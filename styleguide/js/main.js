//SmoothScroll
function SmoothScroll() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
}

//TOC Button
function TocButton() {
  var $TocButton = $('.sg-maximize-btn');

  $TocButton.click(function(e) {
    e.preventDefault();
    $(this).toggleClass('component-header__code_expanded');
    $(this).closest('.sg-pusher').toggleClass('hide-toc');
  });
}

//Get Viewport size
function ViewportSize() {
  var iframeWin = document.getElementById('sg-viewport').contentWindow;
  
  $(iframeWin).on("resize", function(){
    var iframe=document.getElementById('sg-viewport');
    console.log("resize");
      $('#sg-viewport-size').text(iframe.contentWindow.document.body.scrollHeight  + ' x ' + iframe.contentWindow.document.body.scrollWidth + ' px');
  });
}
//Functions that run when all HTML is loaded
$(document).ready(function() {
  SmoothScroll();
  TocButton();
  ViewportSize();
});


