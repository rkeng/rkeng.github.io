$(".content-404").fadeIn(1000, function(){
   // logo wobbles once after fadeIn animation completes
   $('#logo').addClass('wobble-onload').delay(1000).queue(function(){
      $(this).removeClass("wobble-onload").dequeue();
   });
});