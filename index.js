$(".menu-btn").click(function(){
	if($(".menu-list").is(":hidden")){
		$($(".menu-list")[0]).slideDown();
	}else{
		$(".menu-list").slideUp();
	}
});

$(".menu-list a").click(function(){
	$(".menu-list").hide();
});