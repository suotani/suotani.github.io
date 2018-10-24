$(".header-list-parent").hover(
  function(){
    $(this).find(".header-sub-list").show();
  },
  function(){
    $(this).find(".header-sub-list").hide();
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