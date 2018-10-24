$(".header-list-parent").hover(
  function(){
    $(this).find(".header-sub-list").show();
  },
  function(){
    $(this).find(".header-sub-list").hide();
  }
);