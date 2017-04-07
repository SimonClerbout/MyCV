$(document).foundation();

$(document).ready(function() {

        $(".lw, .lo, .la, .lc, .lg, .ln, .lp, .lco, .le").hide();

        $(".web").hover(function(){

         $('.lw').toggle();

       });

       $(".oop").hover(function(){

        $('.lo').toggle();

      });

      $(".android").hover(function(){

       $('.la').toggle();

     });

     $(".c").hover(function(){

      $('.lc').toggle();

    });

    $(".git").hover(function(){

     $('.lg').toggle();

   });

   $(".network").hover(function(){

    $('.ln').toggle();

  });

  $(".project").hover(function(){

   $('.lp').toggle();

 });

 $(".comm").hover(function(){

  $('.lco').toggle();

});

  $(".en").hover(function(){

    $('.le').toggle();

  });

});
