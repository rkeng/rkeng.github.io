$(function () {
   $('#contact-popover').popover({
      html:true,
      content:function(){
         return (
            "<a href='https://github.com/rkeng' target='_blank' class='footer-icon github hvr-grow'><i class='fab fa-github fa-2x'></i></a>"+
            "<a href='https://www.linkedin.com/in/ryan-keng/' target='_blank' class='footer-icon linkedin hvr-grow'><i class='fab fa-linkedin-in fa-2x'></i></a>"+
            "<a href='mailto:rkeng@ucsd.edu' class='footer-icon email hvr-grow'><i class='far fa-envelope fa-2x'></i></a>"
         );
      },
   });
})
$('.popover-dismiss').popover({
   trigger: 'focus',
})