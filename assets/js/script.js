/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	gsap.config({
		nullTargetWarn: false,
	});

// lenis-smooth-scroll
	const lenis = new Lenis({
		duration: 1.2, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		direction: 'vertical', 
		smooth: true, 
		smoothTouch: false, 
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);


	function TXTheaderSticky() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass('txa_sticky');
			} else {
				$header.removeClass('txa_sticky');
				$header.removeClass('txa_sticky_show');
			}

			if ($header.hasClass('txa_sticky')) {
				if (windowTop < lastScrollTop) {
					$header.addClass('txa_sticky_show');
				} else {
					$header.removeClass('txa_sticky_show');
				}
			}

			lastScrollTop = windowTop;
		});
	}
	TXTheaderSticky();
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 250) {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').addClass('sticky-on')
		} else {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').removeClass('sticky-on')
		}
	});
	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fas fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});
	// Background Image
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});
	$( function() {
		$( ".date-pick" ).datepicker({
			format: 'dd-mm-yyyy' 
		});
	} );
	$(document).ready(function() {
		$('.tv-select select').niceSelect();
	});
	gsap.registerPlugin(ScrollTrigger);
	
	// Animation
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	jQuery('.video_box').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});
	$('.marquee-left').marquee({
		gap: 0,
		speed: 40,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	$('.marquee-right').marquee({
		gap: 28,
		speed: 40,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){

			CustomEase.create("ease1", ".645,.045,.355,1");

			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}
			setTimeout(function() {
				
			}, 700);
		})		
	});
	gsap.utils.toArray('.tv-explore-scroller').forEach((el, index) => { 
		let Vertex = gsap.timeline({
			scrollTrigger: {
				trigger: ".tv-explore-sec",
				scrub: 6,
				start: "top 20%",
				end: "bottom 20%",
				toggleActions: "play none none reverse", 
				markers: false
			}
		})

		Vertex
		.set(el, {transformOrigin: 'top bottom'})
		.fromTo(el, { x: 0  }, { x: -1200 , duration: 30, immediateRender: false})
	});
	gsap.utils.toArray('.tv-place-slider').forEach((el, index) => { 
		let Vertex = gsap.timeline({
			scrollTrigger: {
				trigger: ".tv-place-slider",
				start: "top 30%",      
				end: "bottom 0%",    
				toggleClass: { targets: ".tv-place-slider", className: "active" },
				toggleActions: "play none none reverse", 
				markers: false
			}
		})
	});
	if ($('.tv-explore-slide').length > 0 ) {
		var slider = new Swiper('.tv-explore-slide', {
			spaceBetween: 20,
			slidesPerView: 4,
			loop: true,
			speed: 1000,
			breakpoints: {
				'1600': {
					slidesPerView: 4,
				},
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 2,
				},
				'576': {
					slidesPerView: 1,
				},
				'480': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	};
	if ($('.tv-place-slider').length > 0 ) {
		var slider = new Swiper('.tv-place-slider', {
			slidesPerView: 5,
			loop: true,
			spaceBetween: 15,
			centeredSlides: true,
			speed: 1000,
			on: {
				slideChange: function () {
					var swiperEl = this.el; 
					var activeIndex = this.activeIndex;
					var realIndex = this.slides[activeIndex].getAttribute('data-swiper-slide-index');
					$(swiperEl).find('.swiper-slide').removeClass('swiper-slide-nth-prev-2 swiper-slide-nth-next-2');
					var $currentSlide = $(swiperEl).find('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]');
					$currentSlide.prev().prev().addClass('swiper-slide-nth-prev-2');
					$currentSlide.next().next().addClass('swiper-slide-nth-next-2');
				}
			},
			breakpoints: {
				'1600': {
					slidesPerView: 5,
				},
				'1200': {
					slidesPerView: 4,
					spaceBetween: 40,
				},
				'992': {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				'991': {
					slidesPerView: 2,
					centeredSlides: false,
				},
				'768': {
					slidesPerView: 2,
					spaceBetween: 20,
					centeredSlides: false,
				},
				'576': {
					slidesPerView: 1,
					spaceBetween: 20,
					centeredSlides: false,
				},
				'0': {
					slidesPerView: 1,
					centeredSlides: false,
				},
			},
		});
	};
	
	if ($('.ra-sponsor-slider').length > 0 ) {
		var slider = new Swiper('.ra-sponsor-slider', {
			spaceBetween: 80,
			slidesPerView: 6,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			speed: 400,
			breakpoints: {
				'1600': {
					slidesPerView: 6,
				},
				'1200': {
					slidesPerView: 5,
					spaceBetween: 40,
				},
				'992': {
					slidesPerView: 5,
					spaceBetween: 20,
				},
				'768': {
					slidesPerView: 5,
					spaceBetween: 20,
				},
				'576': {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				'480': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	};
	var swiper2 = new Swiper(".tv-testi-for", {
		loop: true,
		spaceBetween: 0,
		speed: 1000,
		slidesPerView: 1,
		effect: "fade",
		navigation: {
			prevEl: ".tst-prev",
			nextEl: ".tst-next",
		},
		thumbs: {
			swiper: quick_view,
		},
	});
	var quick_view = new Swiper(".tv-testi-thumb", {
		loop: true,
		spaceBetween: 0,
		slidesPerView: 5,
		freeMode: true,
		speed: 1000,
		centeredSlides: true,
		navigation: {
			prevEl: ".tst-prev",
			nextEl: ".tst-next",
		},

		breakpoints: {  
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 4,
			},
			'1024': {
				slidesPerView: 3,
			},
			'991': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'577': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});
	
})(jQuery);