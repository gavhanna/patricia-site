
(function(){

  $(".dropdown").on("hover", turnArrow);

  function turnArrow(){
    $(".arrow").toggleClass("spin");
  }

})();
