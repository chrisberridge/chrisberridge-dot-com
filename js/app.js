$(document).foundation()

/*! INCLUDE SCRIPTS - NEED TO INCLUDE ANY MODULES WITH LINKS IN PAGE DIRECTLY
$(document).ready(function(){ 
  $.get("casestudy_teasers.html", function(data) {
    $("#casestudy_teasers").html(data);
  });
}); 

$(document).ready(function(){ 
  $.get("footer.html", function(data) {
    $("#footer_include").html(data);
  });
}); 
*/

/* Clients bar include*/
$(document).ready(function(){ 
  $.get("clients.html", function(data) {
    $("#clients_bar").html(data);
  });
}); 
/* Nav Open */
function overlay() {
  el = document.getElementById("overlay");
  el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
('overlay').fadeIn(200);
('overlay').fadeOut(200);
}
function overlay2() {
  el = document.getElementById("overlay2");
  el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
('overlay2').fadeIn(200);
('overlay2').fadeOut(200);
}
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-80905888-1', 'auto');
  ga('send', 'pageview');
