

$(".main-btn").click(function(){
    $(".open").animate({width:'250px'}); 
    $(".main-btn").animate({left:'250px'});
    $(".far").animate({paddingLeft:'240px'});
    $(".far").show();
    $(".nav-link").show();  

})
$(".far").click(function(){
        $(".open").animate({width:'-250px'}); 
    $(".main-btn").animate({left:'30px'});
    $(".far").animate({paddingLeft:'-240px'});
    $(".far").hide();
    $(".nav-link").hide();  
})


$(".about h2").click(function(){
    $(this).next().slideToggle(500);
         $(".about p").not($(this).next()).slideUp(500);
})


function countdown(){
				var now = new Date();
				var eventDate = new Date(2018, 12, 20);

				var currentTiime = now.getTime();
				var eventTime = eventDate.getTime();

				var remTime = eventTime - currentTiime;

				var s = Math.floor(remTime / 1000);
				var m = Math.floor(s / 60);
				var h = Math.floor(m / 60);
				var d = Math.floor(h / 24)-30;

				h %= 24;
				m %= 60;
				s %= 60;

				h = (h < 10) ? "0" + h : h;
				m = (m < 10) ? "0" + m : m;
				s = (s < 10) ? "0" + s : s;

				document.getElementById("days").innerHTML = "<h3>"+  d + " D"+"</h3>";
				document.getElementById("days").innerHTML = "<h3>"+  d + " D"+"</h3>";

				document.getElementById("hours").innerHTML ="<h3>"+  h + " h"+"</h3>";
				document.getElementById("minutes").innerHTML = "<h3>"+  m + " m"+"</h3>";
				document.getElementById("seconds").innerHTML = "<h3>"+  s + " s"+"</h3>";

				setTimeout(countdown, 1000);
			}

			countdown();

$(function(){
    		"use strick";
    var max=100;
    $("textarea").keydown(function(){
    var length=$(this).val().length;
    var character = max - length;
    console.log(character)
      if(character<=0)
            {
                 $("#num").text("your available character finished");
                
            }
        else{
        
        $("#num").text(character);
        }
        
                 })
})



    
        
 
