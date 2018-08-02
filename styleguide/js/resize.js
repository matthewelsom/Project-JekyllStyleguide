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
  ViewportSize();
});
