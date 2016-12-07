(function(){

  $(".dropdown").hover(function(){
    $(this).find("span").toggleClass("spin");
    console.log("this");
  });

  $(".carousel").slick({
    autoplay: true
  });

})();


// TODO: Fix that fucking carousel
