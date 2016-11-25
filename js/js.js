$('.sl').slick({
    autoplay:true,
	autoplaySpeed: 4000,
    speed:1000,
	arrows: false,
	dots:true,
	pauseOnHover: false,
    vertical:true,
});
$('.sl2').slick({
    autoplay:true,
	autoplaySpeed: 4000,
    speed:1000,
	arrows: false,
	dots:true,
	pauseOnHover: false,
    vertical:true,
});
$('.sl3').slick({
    autoplay:true,
	autoplaySpeed: 4000,
    speed:1000,
	arrows: false,
	dots:true,
	pauseOnHover: false,
});
$('.sl4').slick({
    autoplay:true,
	autoplaySpeed: 4000,
    speed:1000,
	arrows: false,
	dots:true,
	pauseOnHover: false,
});
 $(function(){
    $('.circlestat').circliful();
 });

$(".button").on("click",function(){
  $(".nav-bar__menu").toggle(1000);
  });
$(".main-content__button_a2").on("click",function(){
  $(".nav-bar__menu").slideToggle(1000);
  });


$("#header").removeClass("default");
		$(window).scroll(function(){
				if ($(this).scrollTop() > 20) {
					$("#header").addClass("default").fadeIn('fast');
		} else {
					$("#header").removeClass("default").fadeIn('fast');
		};
});


$('a[href^="#"]').click(function () { 
			    elementClick = $(this).attr("href");
				destination = $(elementClick).offset().top;
				if($){
				$('body').animate( { scrollTop: destination }, 2000 );
				} else {
			    	$('html').animate( { scrollTop: destination }, 2000 );
				}
				return false;
});