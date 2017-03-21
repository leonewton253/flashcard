$(document).ready(function() {
  $(".panel-body").click(function() {
    $(this).children("h1").toggle();
    $(this).children("p").toggle();
  });

  // $(".panel-body").click(function() {
  //   if($(this).children("h1").length)
  //     $(this).children('p').show()
  //     $(this).children('h1').hide()
  //   else
  //     $(this).children('p').hide()
  //     $(this).children('h1').show()
  // });
});
