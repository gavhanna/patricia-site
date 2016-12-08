(function(){

  $(".dropdown").hover(function(){
    $(this).find("span").toggleClass("spin");
    console.log("this");
  });

  $(".carousel").slick({
    autoplay: true,
    fade: true,
    speed: 1900
  });

})();


// TODO: Fix that fucking carousel
