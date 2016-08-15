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

$(document).ready(function(){ 
  $.get("clients.html", function(data) {
    $("#clients_bar").html(data);
  });
}); 


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-80905888-1', 'auto');
  ga('send', 'pageview');

