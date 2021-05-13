var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
   loop:true,
   autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });
// open info
  var img0=$(".0"); var img1=$(".1"); var img2=$(".2"); var img3=$(".3"); var img4=$(".4"); var img5=$(".5"); var img6=$(".6");
  var close=$(".x");

       // hover 
 img0.mouseover(function(){
     img0.css("opacity","0.5");
$(".plus0").css("opacity" ,"1");
});

img1.mouseover(function(){
     img1.css("opacity","0.5");
$(".plus1").css("opacity" ,"1");
});
img2.mouseover(function(){
     img2.css("opacity","0.5");
$(".plus2").css("opacity" ,"1");
});
img3.mouseover(function(){
     img3.css("opacity","0.5");
$(".plus3").css("opacity" ,"1");
});
img4.mouseover(function(){
     img4.css("opacity","0.5");
$(".plus4").css("opacity" ,"1");
});
img5.mouseover(function(){
     img5.css("opacity","0.5");
$(".plus5").css("opacity" ,"1");
});
img6.mouseover(function(){
     img6.css("opacity","0.5");
$(".plus6").css("opacity" ,"1");
});


img0.mouseout(function(){
     img0.css("opacity","1");
$(".plus0").css("opacity" ,"0");
});

img1.mouseout(function(){
     img1.css("opacity","1");
$(".plus1").css("opacity" ,"0");
});
img2.mouseout(function(){
     img2.css("opacity","1");
$(".plus2").css("opacity" ,"0");
});
img3.mouseout(function(){
     img3.css("opacity","1");
$(".plus3").css("opacity" ,"0");
});
img4.mouseout(function(){
     img4.css("opacity","1");
$(".plus4").css("opacity" ,"0");
});
img5.mouseout(function(){
     img5.css("opacity","1");
$(".plus5").css("opacity" ,"0");
});
img6.mouseout(function(){
     img6.css("opacity","1");
$(".plus6").css("opacity" ,"0");
});
 //....................
 
  img0.click(function(){
   $("#info").css("opacity","1");
   $("#info").css("pointer-events","all");
   $("body").css("background-color","rgba(0, 0, 0, 0.7)");
   $("img").css("opacity","0.5");
   $(".plus0").css("opacity" ,"0");
   $(".plus1").css("opacity" ,"0");
   $(".plus2").css("opacity" ,"0");
   $(".plus3").css("opacity" ,"0");
   $(".plus4").css("opacity" ,"0");
   $(".plus5").css("opacity" ,"0");
   $(".plus6").css("opacity" ,"0");
  });
  
  img1.click(function(){
   $("#info1").css("opacity","1");
   $("body").css("background-color","rgba(0, 0, 0, 0.7)");
   $("img").css("opacity","0.5");
   $("#info1").css("pointer-events","all");
   $(".plus0").css("opacity" ,"0");
   $(".plus1").css("opacity" ,"0");
   $(".plus2").css("opacity" ,"0");
   $(".plus3").css("opacity" ,"0");
   $(".plus4").css("opacity" ,"0");
   $(".plus5").css("opacity" ,"0");
   $(".plus6").css("opacity" ,"0");
  });
  
  img2.click(function(){
   $("#info2").css("opacity","1");
   $("body").css("background-color","rgba(0, 0, 0, 0.7)");
   $("img").css("opacity","0.5");
   $("#info2").css("pointer-events","all");
   $(".plus0").css("opacity" ,"0");
   $(".plus1").css("opacity" ,"0");
   $(".plus2").css("opacity" ,"0");
   $(".plus3").css("opacity" ,"0");
   $(".plus4").css("opacity" ,"0");
   $(".plus5").css("opacity" ,"0");
   $(".plus6").css("opacity" ,"0");
  });
  
  img3.click(function(){
   $("#info3").css("opacity","1");
   $("body").css("background-color","rgba(0, 0, 0, 0.7)");
   $("img").css("opacity","0.5");
   $("#info3").css("pointer-events","all");
   $(".plus3").css("opacity" ,"0");
  });
  
  img4.click(function(){
   $("#info4").css("opacity","1");
   $("body").css("background-color","rgba(0, 0, 0, 0.7)");
   $("img").css("opacity","0.5");
   $("#info4").css("pointer-events","all");
   $(".plus0").css("opacity" ,"0");
   $(".plus1").css("opacity" ,"0");
   $(".plus2").css("opacity" ,"0");
   $(".plus3").css("opacity" ,"0");
   $(".plus4").css("opacity" ,"0");
   $(".plus5").css("opacity" ,"0");
   $(".plus6").css("opacity" ,"0");
  });
  
  img5.click(function(){
   $("#info5").css("opacity","1");
   $("body").css("background-color","rgba(0, 0, 0, 0.7)");
   $("img").css("opacity","0.5");
   $("#info5").css("pointer-events","all");
   $(".plus0").css("opacity" ,"0");
   $(".plus1").css("opacity" ,"0");
   $(".plus2").css("opacity" ,"0");
   $(".plus3").css("opacity" ,"0");
   $(".plus4").css("opacity" ,"0");
   $(".plus5").css("opacity" ,"0");
   $(".plus6").css("opacity" ,"0");
  });
  
  img6.click(function(){
   $("#info6").css("opacity","1");
   $("body").css("background-color","rgba(0, 0, 0, 0.7)");
   $("img").css("opacity","0.5");
   $("#info6").css("pointer-events","all");
   $(".plus0").css("opacity" ,"0");
   $(".plus1").css("opacity" ,"0");
   $(".plus2").css("opacity" ,"0");
   $(".plus3").css("opacity" ,"0");
   $(".plus4").css("opacity" ,"0");
   $(".plus5").css("opacity" ,"0");
   $(".plus6").css("opacity" ,"0");
  });
  // close info
 
  close.click(function(){
    $("#info6").css("opacity","0");
    $("#info5").css("opacity","0");
    $("#info4").css("opacity","0");
    $("#info3").css("opacity","0");
    $("#info2").css("opacity","0");
    $("#info1").css("opacity","0");
    $("#info").css("opacity","0");
   $("body").css("background-color","rgb(240, 238, 238)");
   $("img").css("opacity","1");
   $("#info6").css("pointer-events","none");
   $("#info5").css("pointer-events","none");
   $("#info4").css("pointer-events","none");
   $("#info3").css("pointer-events","none");
   $("#info2").css("pointer-events","none");
   $("#info1").css("pointer-events","none");
   $("#info").css("pointer-events","none");
   $(".plus0").css("opacity" ,"0");
   $(".plus1").css("opacity" ,"0");
   $(".plus2").css("opacity" ,"0");
   $(".plus3").css("opacity" ,"0");
   $(".plus4").css("opacity" ,"0");
   $(".plus5").css("opacity" ,"0");
   $(".plus6").css("opacity" ,"0");


  });