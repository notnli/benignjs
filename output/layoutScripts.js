//$(".header_UL li").on("click", function () {
//    var month = $(this).attr("data-id");
//    $.ajax({
//        type: "GET",
//        url: '/Home/TimeLineNewsHome',
//        data: {"Month": month },
//        contentType: 'application/json',
//        success: function (data) {
//            $(".VotE_ContenT").html('');
//            $(".VotE_ContenT").html(data);
//            var swiperTop = new Swiper('.swiper-NEWVOTE', {
//                nextButton: '.swiper-Vote-next',
//                prevButton: '.swiper-Vote-prev',
//                slidesPerView: 1,
//                spaceBetween: 0,
//                freeMode: false,
//                preventClicks: false,
//                autoplay: 2000,
//                paginationType: 'bullets',
//                pagination: '.swiper-paginationNEWVOTE',
//                paginationClickable: true,
//                paginationBulletRender: function (index, className) {
//                    return '<span class="' + className + '">' + (index + 1) + '</span>';
//                }
//            });

//            $('.swiper-NEWVOTE').on('mouseenter', function (e) {
//                swiperTop.stopAutoplay();
//            })
//            $('.swiper-NEWVOTE').on('mouseleave', function (e) {
//                swiperTop.startAutoplay();
//            })

//        }
//    });
//});

$(document).ready(function () {

    //var Randommonth = $('#Random').val();
    //    $('.header_UL li[ data-id=' + Randommonth + ']').addClass('active');
    //    $('.Footer_UL li[ data-id=' + Randommonth + ']').addClass('active');
            
     //var swiperTop3 = new Swiper('.swiper-NEWVOTE', {
     //    nextButton: '.swiper-Vote-next',
     //    prevButton: '.swiper-Vote-prev',
     //    slidesPerView: 1,
     //    spaceBetween: 0,
     //    freeMode: false,
     //    preventClicks: false,
     //    autoplay: 2000,
     //    paginationType: 'bullets',
     //    pagination: '.swiper-paginationNEWVOTE',
     //    paginationClickable: true,
     //    paginationBulletRender: function (index, className) {
     //        return '<span class="' + className + '">' + (index + 1) + '</span>';
     //    }
     //});


            $('.topTop a').click(function () {
                var el = $(this).attr('href');
                var elWrapped = $(el);
                scrollToDiv(elWrapped, 40);
                return false;
            });
            function scrollToDiv(element, navheight) {
                var offset = element.offset();
                var offsetTop = offset.top;
                var totalScroll = offsetTop - navheight;

                $('body,html').animate({
                    scrollTop: totalScroll
                }, 1000);
            }
        });
       
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 200) {
                $(".headerFix").addClass("socialFixed22");
            } else {
                $(".headerFix").removeClass("socialFixed22");
            }
        });
		 //Click event to scroll to top
        $('.topTop').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
		 //Check to see if the window is top if not then display button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.topTop').fadeIn();
            } else {
                $('.topTop').fadeOut();
            }
        });
		
        
		$(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 200) {
                $(".leftAdsFix").addClass("leftAdsFix1");
            } else {
                $(".leftAdsFix").removeClass("leftAdsFix1");
            }
        });		
		$(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 200) {
                $(".rightAdsFix").addClass("rightAdsFix1");
            } else {
                $(".rightAdsFix").removeClass("rightAdsFix1");
            }
        });
		
		//$(".search-query").keyup(function (event) {

		//    if (event.keyCode == 13) {
		//        debugger;
		//        //$(".btn-search").click();
		//        $(this).closest("form").submit();
		//	}
		//});
		$(".searchCont").delegate(".search-query", "keyup", function (event) {
		    if (event.keyCode == 13) {
		        debugger;
		        $(".btn-search").click();
		    }
		});
		$(".searchCont").delegate(".btn-search", "click", function (event) {
		    debugger;
		    var searchtxt = $(".search-query").val();
		    if (searchtxt.length > 0) {
		        $(this).closest('form').submit();
		    }
		    else {
		        return false;
		    }
		});
   $(window).load(function () {
            // When the page has loaded
            $("#nt-title").fadeIn(2000);
   });


   $(document).ready(function () {
       //document.oncontextmenu = function () { return false; };

       $('.TopNewsImg1').mousedown(function (e) {
           var that = $(this);
           if (e.button == 2) {

               $(that).wrap("<a class='newtab' href='" + $(this).attr("data-href") + "'></a>");


               //   return false;
           }
           return true;
       });
       setInterval(function () {

           $(".newtab").contents().unwrap();
       }, 2000);


       $(".header_UL li").on("click", function () {
           $(this).addClass("active").siblings().removeClass("active");
       });

       $(".Footer_UL li").on("click", function () {
           $(this).addClass("active").siblings().removeClass("active");
       });


       $(".Footer_UL li").on("click", function () {
           var month = $(this).attr("data-id");
           
           $.ajax({
               type: "GET",
               url: '/Home/TimeLineNewsHomeDesign2',
               data: {"Month": month },
               contentType: 'application/json',
               success: function (data) {
                   $(".GrayVotE").html('');
                   $(".GrayVotE").html(data);
               }
           });
       });
   });