(function(){

  $(".dropdown").hover(function(){
    $(this).find("span").toggleClass("spin");
    console.log("this");
  });

  $("#dropdown-button").on("click", function(){
		$(this).toggleClass("become-x");
		$(".navigation").toggleClass("open");
	});

	$(".nav-item").on("click", function(){
		$(".navigation").toggleClass("open");
		$("#dropdown-button").toggleClass("become-x");
	});

  $(".carousel").slick({
    autoplay: true,
    fade: true,
    speed: 1900,
    arrows: false
  });

})();


// TODO: Fix that fucking carousel
