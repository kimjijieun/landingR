gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// // 해당영역으로 이동
$('.header .link-nav').click(function(e){
    e.preventDefault();

    target = $(this).data('target')
    gsap.to(window, {duration: 1, scrollTo:target});

    // gsap.to(window, { duration: 2, scrollTo: { y: "#a", offsetY: 50 } });
});



/* soto 슬라이드 */
ScrollTrigger.matchMedia({
    "(min-width:1024px)": function () {
    slideImg = gsap.timeline({
        scrollTrigger: {
        trigger: ".sc-project .common-inner",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 1,
        // markers: true,
        },
    });

    slideImg.to(".sc-project .project-wrap .img-box:nth-child(1)", { height: 0 }, "a");
    slideImg.to(".sc-project .title-list a", { yPercent: -100 }, "a");

    slideImg.to(".sc-project .project-wrap .img-box:nth-child(2)", { height: 0 }, "b");
    slideImg.to(".sc-project .title-list a", { yPercent: -200 }, "b");

    // slideImg.to(".sc-project .project-wrap .img-box:nth-child(3)", { height: 0 }, "c");
    // slideImg.to(".sc-project .title-list a", { yPercent: -300 }, "c");

    // slideImg.to(".sc-project .img-box a:nth-child(4)", { height: 0 }, "d");
    // slideImg.to(".sc-project .slide-title a", { yPercent: -400 }, "d");
    },
});

const txTl = gsap.timeline();

txTl
.to(".as", {
    opacity: 1,
    ease: "none",

    scrollTrigger: {
        trigger: ".sc-work",
        stagger: 1,
        start: "top center",
        end: "top center",
        scrub: 1,
        // markers: true,
    },
})

// .from(".sc-title .line", {
//     height: "0",
//     ease: "none",
//     duration: 3,
//     stagger: 1,

//     scrollTrigger: {
//         trigger: ".sc-work",
//         start: "65% center",
//         end: "65% center",
//         scrub: 1,
//         // markers: true,
//     },
// });



menu = gsap.from('.header .menu-wrap .menu-item',{
    opacity:0,
    yPercent:20,
    stagger:0.25,
    paused:true,
})


$('.btn-menu').click(function(){
    $('.btn-menu').toggleClass('active');
    $('body').toggleClass('hidden')

    if ($(this).hasClass('active')) {
        $('.header .menu-wrap').addClass('active')
    } else {
        $('.header .menu-wrap').removeClass('active')
    }
    // $('.header .menu-wrap').toggleClass('active')
    menu.restart()
})

// $('.header .menu-area .menu-close').click(function(e){
//     e.preventDefault();

//     $('.menu-area').removeClass('active');
//     $('body').removeClass('active');
// });