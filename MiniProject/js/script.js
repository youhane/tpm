mybutton = document.getElementById("myBtn");

function topFunction() {
    var body = $("html, body");
     body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
          console.log("Animation has finished");
     });
   }

$(".skills").addClass("active")
$(".skills .skill .skill-bar span").each(function() {
   $(this).animate({
      "width": $(this).parent().attr("data-bar") + "%"
   }, 1000);
});
setTimeout(function() {
   $(".skills .skill .skill-bar span b").animate({"opacity":"1"},1000);
}, 2000);