$(document).ready(function(){
  $(".menu-toggle-btn").click(function(){
    $("body").addClass("menu-toggle");
  });

  $(".menu-close-btn").click(function(){
    $("body").removeClass("menu-toggle");
  });
});
