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
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$('.tv-scrollup').fadeIn();
		} else {
			$('.tv-scrollup').fadeOut();
		}
	});
	$('.tv-scrollup').on("click", function()  {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
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
	jQuery(document).ready(function (o) {
		0 < o(".navSidebar-button").length &&
		o(".navSidebar-button").on("click", function (e) {
			e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
		}),
		0 < o(".close-side-widget").length &&
		o(".close-side-widget").on("click", function (e) {
			e.preventDefault(), o(".info-group").removeClass("isActive");
		}),
		o(".xs-sidebar-widget").on("click", function (e) {
			e.stopPropagation();
		})
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
		// search-popup-start
	$('.search_btn_toggle').on('click', function() {
		$('.overlay, .search_box_active').addClass('active');
	});

	$('.overlay, .search_box_close').on('click', function() {
		$('.search_box_active').removeClass('active');
		$('.overlay').removeClass('active');
	});
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		preloader: true,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: false,
			duration: 300, 
			opener: function(element) {
				return element.find('img');
			}
		}
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
	// counter-activation
	$('.counter').counterUp({
		delay: 20,
		time: 5000
	});
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
	const boxes = gsap.utils.toArray('.txt_item_active');
	boxes.forEach(svg => {
		gsap.to(svg, {
			scrollTrigger: {
				trigger: svg,
				start: "top 100%",
				end: "bottom bottom",
				toggleClass: "active",
				duration: 3,
				delay:1,
				toggleActions: "play play play reverse",
				once: true,
			}
		});
	});
	if($('.tv-sub-tilte').length) {
		var agtsub = $(".tv-sub-tilte");

		if(agtsub.length == 0) return; gsap.registerPlugin(SplitText); agtsub.each(function(index, el) {
			
			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});
			
			if( $(el).hasClass('tv-sub-anim') ){
				gsap.set(el.split.chars, {
					opacity: 0,
					x: "10",
				});
			}
			
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					end: "top 60%",
					markers: false,
					scrub: 1,
				},

				x: "0",
				y: "0",
				opacity: 1,
				duration: .7,
				stagger: 0.2,
			});
			
		});
	}
	if($('.tv-sec-title').length) {
		var edtitle = $(".tv-sec-title");

		if(edtitle.length == 0) return; gsap.registerPlugin(SplitText); edtitle.each(function(index, el) {

			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});

			if( $(el).hasClass('tv-has-anim') ){
				gsap.set(el.split.words, {
					opacity: .3,
					y: "100",
				});
			};
			if( jQuery(el).hasClass('split-in-up') ){
				gsap.set(el.split.lines, {
					opacity: 0,
					y: 60,
					rotateX: "50deg",
					ease: "back.out",
					transformOrigin: "50% 0%"
				});
			}
			el.anim = gsap.to(el.split.words, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					markers: false
				},

				x: "0",
				y: "0",
				opacity: 1,
				duration: 1,
				stagger: 0.25,
			});
			el.anim = gsap.to(el.split.lines, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
				},
				x: "0",
				y: "0",
				rotateX: "0",
				yPercent: 0,
				rotationX: "0",
				color: 'inherit',
				webkitTextStroke: "0px white",
				scale: 1,
				opacity: 1,
				duration: .7, 
				stagger: 0.5,
			});
		});
	}
	var a = document.querySelectorAll(".btn-spin a");
	a.forEach(function (a) {
		a.addEventListener("mouseover", function () {
			var c, b, d;
			!a.classList.contains("animating") &&
			!a.classList.contains("mouseover") &&
			(a.classList.add("animating", "mouseover"),
				(c = a.innerText.split("")),
				setTimeout(function () {
					a.classList.remove("animating");
				}, (c.length + 1) * 50),
				(b = a.dataset.animation),
				b || (b = "vt-spin"),
				(a.innerText = ""),
				c.forEach(function (b) {
					b == " " && (b = "&nbsp;"), (a.innerHTML += '<span class="letter">' + b + "</span>");
				}),
				(d = a.querySelectorAll(".letter")),
				d.forEach(function (a, c) {
					setTimeout(function () {
						a.classList.add(b);
					}, 50 * c);
				}));
		}),
		a.addEventListener("mouseout", function () {
			a.classList.remove("mouseover");
		});
	});
	// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){

			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}

			gsap.utils.toArray(".tv-text p").forEach(paragraph => {
				let timeline = gsap.timeline({
					scrollTrigger: {
						trigger: paragraph,
						start: "top 90%",
						end: "bottom 60%",
						toggleActions: "play none none none"
					}
				});
				let splitText = new SplitText(paragraph, { type: "lines" });
				gsap.set(paragraph, { perspective: 400 });
				timeline.from(splitText.lines, {
					opacity: 0,
					rotationX: -80,
					transformOrigin: "top center -50",
					force3D: true,
					duration: 1,
					delay: 0.5,
					stagger: 0.1
				});
			});
			setTimeout(function() {
				if($(".tv_hero_title").length) {
					var AGTTitleAni = $(".tv_hero_title");
					if(AGTTitleAni.length == 0) return; gsap.registerPlugin(SplitText); AGTTitleAni.each(function(index, el) {

						el.split = new SplitText(el, { 
							type: "lines,words,chars",
							linesClass: "split-line"
						});

						gsap.set(el, { perspective: 400 });

						if( $(el).hasClass('hero_title_1') ){
							gsap.set(el.split.chars, {
								x: 100,
								opacity: 0,
							});
						}
						if( $(el).hasClass('hero_title_2') ){
							gsap.set(el.split.chars, {
								y: 100,
								opacity: 0,
							});
						}
						if( $(el).hasClass('hero_title_3') ){
							gsap.set(el.split.chars, {
								y: 100,
								scaleY: 0,
								opacity: 0,
								rotationX: 15,
							});
						}
						el.anim = gsap.to(el.split.chars, {
							scrollTrigger: {
								trigger: el,
								start: "top 90%",
								toggleActions: "play reverse play reverse",
								markers: false,
							},
							x: 0,
							y: 0,
							scaleX: 1,
							scaleY: 1,
							opacity: 1,
							duration: 1,
							stagger: .05,
							rotationX: 15,
							delay: .1,
							ease: "power3.inOut",
						});
					});
				}
				const TVH1 = gsap.timeline();
				TVH1
				.from(".tv-hero1-text .hero-slug", { scaleX: 0,  x: 100, duration: 1.5, transformOrigin: "left",  ease: "power1.out" })
				.from(".tv-hero1-search-option", { scaleY: 0, duration: 1, transformOrigin: "top top",  ease: "power1.out" },"<=.8")
				.from(".tv-login-social", { y: 50, duration: 1, opacity: 0, transformOrigin: "top top",  ease: "power1.out" },"<=.5")
				.from(".tv-hr1-img-text .item-img", { scale: 0, duration: 1, opacity: 0, transformOrigin: "center center",  ease: "power1.out" },"<=-.5")
				

				const TVH2 = gsap.timeline();
				TVH2
				.from(".tv-hero3-text .hr3-slug", { scaleY: 0,  x: 100, duration: 1, transformOrigin: "left",  ease: "power1.out" })
				.from(".tv-hero3-sec .tv-hr3-shape1", { opacity: 0, xPercent: -100, duration: 1, transformOrigin: "left",  ease: "power1.out" })
				.from(".tv-hero3-text .tv-btn3", { scaleY: 0,  x: 100, duration: 1, transformOrigin: "left",  ease: "power1.out" },"<=.1")
				.from(".tv-hero3-content .tv-hr3-plane", {  opacity: 0, rotate: "-90deg", xPercent: 120, yPercent: -120, duration: 6, transformOrigin: "top",   ease: "elastic.out(1,0.7)"},"<=.2")
				.from(".tv-hr3-cloud-wrap", {  opacity: 0, xPercent: -120, duration: 3, transformOrigin: "top",   ease: "power1.out"},"<=.3")
				.from(".tv-booking-select", {  opacity: 0,  yPercent: 120,  duration: 2, transformOrigin: "top",   ease: "elastic.out(1,0.7)"},"<=.1")
				.from(".tv-hr3-img-wrap .item-img1", {  opacity: 0, yPercent: 120, duration: 3, transformOrigin: "bottom",   ease: "elastic.out(1,0.7)"},"<=.05")
				.from(".tv-hr3-img-wrap .item-img2", {  opacity: 0, yPercent: 120, duration: 3, transformOrigin: "bottom",   ease: "elastic.out(1,0.7)"},"<=.1")
				.from(".tv-hr3-img-wrap .item-img3", {  opacity: 0, yPercent: 120, duration: 3, transformOrigin: "bottom",   ease: "elastic.out(1,0.7)"},"<=.15")
				.from(".tv-hero3-content .tv-hr3-img1", {  opacity: 0,  xPercent: 120,  duration: 4, transformOrigin: "top",   ease: "elastic.out(1,0.7)"},"<=.1")

				if ($('.tv-hero2-slider').length > 0 ) {
					var slider = new Swiper('.tv-hero2-slider', {
						spaceBetween: 20,
						slidesPerView: 1,
						loop: true,
						speed: 1000,
						effect: "fade",
						autoplay: {
							enabled: true,
							delay: 6000
						},
						navigation: {
							prevEl: ".hr2-prev2",
							nextEl: ".hr2-next2",
						},

					});
				};
			}, 700);
		})		
});
gsap.utils.toArray('.tv-explore-scroller').forEach((el, index) => { 
	let Vertex = gsap.timeline({
		scrollTrigger: {
			trigger: "el",
			scrub: 6,
			start: "top 100%",
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

if (window.matchMedia("(min-width: 1200px)").matches) {
	var TVDesti = gsap.timeline({
		scrollTrigger: {
			trigger: ".tv-desti-content",
			start: "top 70%",
			toggleActions: "play reverse play reverse",
			markers: false,
		},
	})
	TVDesti
	.from(".tv-desti-item", {
		xPercent: 100,
		opacity: 0,
		ease: "back.out(2.5)",
		duration: 1,
		stagger: -.2,
	})
}
var PlaceFeature = gsap.timeline({
	scrollTrigger: {
		trigger: ".tv-place-feature",
		start: "top 70%",
		toggleActions: "play none none reverse",
		markers: false,
	},
	defaults: {
		duration: 1,
	},
})

PlaceFeature
.from(".tv-place-ft .item-text", {
	yPercent: -100,
	stagger: .2,
})
gsap.utils.toArray(' .tv_img_view').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			end: "top 20%",
			start: "top 60%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'top'})
	.from(el, { opacity: 1, scale: 1, y: -150, rotate: "30deg" , x: 300}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
});
gsap.utils.toArray(' .tv_img_anim1').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			end: "top 20%",
			start: "top 60%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 1, scale: 1.2,  rotate: "360deg"})
});
gsap.utils.toArray(' .tv_img_anim2').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			end: "top 20%",
			start: "top 60%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 0, scale: 1.2, y: -100,  rotateX: "45deg"})
});
gsap.utils.toArray(' .top_view_3').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 2,
			start: "top 30%",
			end: "top 90%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 0,  yPercent: -100}, {opacity: 1, x: 0, duration: 1, immediateRender: false})
});
gsap.utils.toArray(' .slide_view_1').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			end: "top -80%",
			start: "top 0%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'top'})
	.from(el, { opacity: 1, scale: 1,  y: "-=500"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
});
gsap.utils.toArray(' .slide_view_2').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			end: "top -100%",
			start: "top 200%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'bottom bottom'})
	.from(el, { opacity: 1, scale: 1, y: "+=500"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
});
let imageappear = document.querySelectorAll(".ptx-image-appear1");
imageappear.forEach((container) => {
	let image = container.querySelector(".ptx-img-rvl_1");
	let ptx = gsap.timeline({
		scrollTrigger: {
			trigger: container,
			toggleActions: "play none none none",
			start: "top 60%",
			end: "top 0%",
			markers: false
		}
	});

	ptx.set(container, { autoAlpha: 1 });
	ptx.from(container, 1.5, {
		xPercent: 100,
		ease: Power2.out
	});
	ptx.from(image, 1.5, {
		xPercent: -100,
		scale: 1.3,
		delay: -1.5,
		ease: Power2.out
	});
});
gsap.utils.toArray(".img-parallax").forEach(function(container) {
	let image = container.querySelector("img");

	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: container,
			scrub: true,
			pin: false,

		},
	}); 
	tl.from(image, {
		yPercent: -30,
		ease: "none",
	}).to(image, {
		yPercent: 30,
		ease: "none",
	}); 
});
let imageBins = gsap.timeline({
	scrollTrigger: {
		trigger: ".tv-img-zm",
		start: "top bottom",
		markers: false,
		scrub: 1,
		end: "bottom center"
	}
})
imageBins.to(".tv-img-zm img", {
	scale: 1.15,
	duration: 1,
});
gsap.utils.toArray(' .top_view').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			start: "top 95%",
			end: "top 100%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 0, scale: 1, y: "300"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
});
gsap.utils.toArray(' .top_view2').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			start: "top 0%",
			end: "top 110%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 0, scale: 1, y: "-300"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
});
gsap.utils.toArray(' .left_view').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			start: "top 70%",
			end: "top -5%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 0, scale: 1, x: "-300"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
});
gsap.utils.toArray(' .right_view').forEach((el, index) => { 
	let tlcta = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			scrub: 1.5,
			start: "top 70%",
			end: "top -5%",
			toggleActions: "play none none reverse",
			markers: false
		}
	})

	tlcta
	.set(el, {transformOrigin: 'center center'})
	.from(el, { opacity: 0, scale: 1, x: "300"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
});
if (window.matchMedia("(min-width: 1200px)").matches) { 
	var TVCONT = gsap.timeline({
		scrollTrigger: {
			trigger: '.tv-contact-content',
			start: "top 100%",
			toggleActions: 'play none none reverse',
			markers: false,
		}

	});
	TVCONT
	.from(".tv-contact-content .tv-cont-sh5", { opacity: 0,  yPercent: -100, duration: 2,   ease: "power1.out" })
	.from(".tv-contact-content .tv-cont-sh6", { opacity: 0,  xPercent: -100, duration: 2,   ease: "power1.out" },"<= .5")
	.from(".tv-contact-content .tv-cont-sh4", { opacity: 0,  xPercent: 100, duration: 2,   ease: "power1.out" },"<= .5")
	.from(".tv-contact-content .tv-cont-sh7", { opacity: 0,  xPercent: -100, rotate: "-90deg", duration: 2,   ease: "power1.out" },"<= .5")
	.from(".tv-contact-wrap .tv-cn-sh2", { opacity: 0,  yPercent: -100, duration: 1,   ease: "power1.out" },"<= -.5")
	.from(".tv-contact-wrap .tv-cn-sh3", { opacity: 0,  yPercent: 100, duration: 1,   ease: "power1.out" },"<= .5")
	.from(".tv-contact-wrap .tv-cont-img", { opacity: 0,  yPercent: 100, duration: 1,   ease: "power1.out" },"<= .5")
	.from(".tv-contact-content .tv-cont-sh9", { opacity: 0,  yPercent: 100, duration: 1.5, rotateX: "90deg",   ease: "power1.out" },"<= -.5")
	.from(".tv-contact-content .tv-cont-sh8", { opacity: 0,  yPercent: 100, duration: 1, rotate: "90deg",   ease: "power1.out" },"<= .5")
	.from(".tv-contact-form .tv-cont-shape1", { opacity: 0,  xPercent: -100, duration: 1, rotateX: "90deg",   ease: "power1.out" },"<= .5")
};

if (window.matchMedia("(min-width: 1200px)").matches) { 
	var TVABT = gsap.timeline({
		scrollTrigger: {
			trigger: '.tv-ab3-content',
			start: "top 80%",
			toggleActions: 'play none none reverse',
			markers: false,
		}

	});
	TVABT
	.from(".tv-ab3-img-wrap .item-img1", { opacity: 0, rotate:'45deg',  yPercent: 100, duration: 2,   ease: "elastic.out(1,0.7)" })
	.from(".tv-ab3-img-wrap .item-img2", { opacity: 0, rotate:'45deg',  yPercent: 100, duration: 2,   ease: "elastic.out(1,0.7)" },"<= .3")

};
if (window.matchMedia("(min-width: 1200px)").matches) { 
	var TVABT = gsap.timeline({
		scrollTrigger: {
			trigger: '.tv-cta2-sec',
			start: "top 80%",
			toggleActions: 'play none none reverse',
			markers: false,
		}

	});
	TVABT
	.from(".tv-cta2-img-wrap .item-img1", { opacity: 0, rotate:'0deg',  yPercent: 100, duration: 2,   ease: "elastic.out(1,0.7)" })
	.from(".tv-cta2-img-wrap .item-img3", { opacity: 0, rotate:'0deg',  yPercent: 100, duration: 2,   ease: "elastic.out(1,0.7)" },"<= .3")
	.from(".tv-cta2-img-wrap .item-img2", { opacity: 0, rotate:'0deg',  yPercent: 100, duration: 2,   ease: "elastic.out(1,0.7)" },"<= .3")
	.from(".tv-cta2-sec .tv-cta2-shape", { opacity: 0, rotate:'0deg',  xPercent: 100, duration: 5,   ease: "elastic.out(1,0.7)" },"<= .3")

};

if($('.quantity-input-2').length) {
	$('.quantity-input-2').inputarrow({
		renderNext: function(input) {
			return $('<span class="custom-next"><i class="fa-solid fa-plus"></i></span>').insertAfter(input);
		},
		renderPrev: function(input) {
			return $('<span class="custom-prev"><i class="fa-solid fa-minus"></i></span>').insertBefore(input);
		},
		disabledClassName: 'custom-disabled'
	});
};
if ($('.line_shape_2').length > 0 ) {
	const path = document.getElementById('line_path');
	const plane = document.getElementById('paper-plane');
	const pathLength = path.getTotalLength();
	let progress = 0.5; 
	let speed = 0.0012; 
	function animatePlane() {
		const point = path.getPointAtLength(progress * pathLength);
		plane.setAttribute('transform', `translate(${point.x}, ${point.y})`);
		const tangent = path.getPointAtLength((progress + 0.01) * pathLength);
		const angle = Math.atan2(tangent.y - point.y, tangent.x - point.x);
		plane.setAttribute('transform', `translate(${point.x}, ${point.y}) rotate(${angle * 180 / Math.PI})`);
		progress += speed;
		if (progress > 1) {
			progress = 0;
		}
		requestAnimationFrame(animatePlane);
	}
	animatePlane();
};
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
				slidesPerView: 2,
			},
		},
	});
};

var quick_view = new Swiper(".tv-testi-thumb", {
	loop: true,
	spaceBetween: 0,
	slidesPerView: 5,
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
if ($('.tv-desti3-slider').length > 0 ) {
	var slider = new Swiper('.tv-desti3-slider', {
		spaceBetween: 20,
		slidesPerView: 5,
		loop: true,
		speed: 1000,
		breakpoints: {
			'1600': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
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
if ($('.tv-holiday2-slider').length > 0 ) {
	var slider = new Swiper('.tv-holiday2-slider', {
		spaceBetween: 18,
		slidesPerView: 4,
		loop: true,
		speed: 1000,
		navigation: {
			prevEl: ".holi2-prev3",
			nextEl: ".holi2-next3",
		},
		breakpoints: {
			'1600': {
				slidesPerView: 4,
			},
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
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
if ($('.tv-team2-slider').length > 0 ) {
	var slider = new Swiper('.tv-team2-slider', {
		spaceBetween: 20,
		slidesPerView: 3,
		loop: true,
		speed: 1000,
		navigation: {
			prevEl: ".team2-prev",
			nextEl: ".team2-next",
		},
		breakpoints: {
			'1600': {
				slidesPerView: 3,
			},
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 2,
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
if ($('.tv-testi3-slider').length > 0 ) {
	var slider = new Swiper('.tv-testi3-slider', {
		spaceBetween: 20,
		slidesPerView: 1,
		loop: true,
		speed: 1000,
		effect: "fade",
		navigation: {
			prevEl: ".tst-prev3",
			nextEl: ".tst-next3",
		},

	});
};

if ($('.tv-testi2-slider').length > 0 ) {
	var swiper2 = new Swiper(".tv-testi2-slider", {
		loop: true,
		spaceBetween: 15,
		speed: 1000,
		effect: "fade",
		slidesPerView: 1,
		navigation: {
			prevEl: ".tst-prev2",
			nextEl: ".tst-next2",
		},
	});
};
if ($('.tv-feat3-img-slide').length > 0 ) {
	var swiper2 = new Swiper(".tv-feat3-img-slide", {
		loop: true,
		spaceBetween: 15,
		speed: 1000,
		effect: "fade",
		autoplay: {
			enabled: true,
			delay: 4000
		},
		slidesPerView: 1,
	});
};
var slider = new Swiper('.gt-footer-gallery-slider', {
	slidesPerView: 5,
	spaceBetween: 0,
	loop: true,
	autoplay: {
		enabled: true,
		delay: 6000
	},
	speed: 500,

	breakpoints: {
		'1600': {
			slidesPerView: 5,
		},
		'1200': {
			slidesPerView: 5,
		},
		'992': {
			slidesPerView: 4,
		},
		'768': {
			slidesPerView: 3,
		},
		'576': {
			slidesPerView: 2,
		},
		'0': {
			slidesPerView: 2,
		},
	},
});
if($(".bottom-text").length) {
	var aniTitle1 = $(".bottom-text");
	if(aniTitle1.length == 0) return; gsap.registerPlugin(SplitText); aniTitle1.each(function(index, el) {

		el.split = new SplitText(el, { 
			type: "lines,words,chars",
			linesClass: "split-line"
		});

		gsap.set(el, { perspective: 400 });

		if( $(el).hasClass('bottom-text') ){
			gsap.set(el.split.chars, {
				yPercent: -100,
				opacity: 0,

			});
		}
		el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
				toggleActions: "play reverse play reverse",
				markers: false,

			},

			yPercent: 0,
			xPercent: 0,
			opacity: 1,
			duration: 2,
			stagger: .1,
			ease: "bounce.out",
		});

	});
}

})(jQuery);