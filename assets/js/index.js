document.ready(function(){
  $(".menu-toggle-btn").click(function(){
    $("body").toggleClass("menu-toggle");
    $(".menu-close-btn").removeClass("menu-toggle");
  });
});

