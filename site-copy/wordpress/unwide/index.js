$(".header-list-parent").hover(
  function(){
    if($(".sp").is(":hidden")){
      $(this).find(".header-sub-list").slideDown();
    }
  },
  function(){
    if($(".sp").is(":hidden")){
      $(this).find(".header-sub-list").slideUp();
    }
  }
);

$(".search-icon").click(function(){
  if($(".search-wrap").is(":hidden")){
    $(".search-wrap").slideDown();
    $("body").addClass("scroll-stop");
    $(".header-icons .fa-search").addClass("hidden");
    $(".header-icons .fa-times").removeClass("hidden");
  }else{
    $(".search-wrap").slideUp();
    $("body").removeClass("scroll-stop");
    $(".header-icons .fa-search").removeClass("hidden");
    $(".header-icons .fa-times").addClass("hidden");
  }
});

$(".sp-menu-btn").click(function(){
  if($(".menu-wrap").is(":hidden")){
    $(".menu-wrap").slideDown();
  }else{
    $(".menu-wrap").slideUp();
  }
});

$(".header-list-parent").click(function(){
  var $subList = $($(this).find(".header-sub-list")[0]);
  console.log("aaa");
  if(!$(".sp").is(":hidden")){
    if($subList.is(":hidden")){
      console.log("aaa");
      $subList.slideDown();
    }else{
      $subList.slideUp();
    }
  }
});