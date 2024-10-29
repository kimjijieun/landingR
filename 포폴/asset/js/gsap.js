gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


/* lenis 스크롤 스무스 */
// const lenis = new Lenis();

// lenis.on("scroll", (e) => {
//   console.log(e);
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);
// lenis.stop();

// $(function () {
//   $("html, body").animate({ scrollTop: 0 }, "slow");
// });


// lenis
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)
lenis.scrollTo(0)


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
    
    slideImg.to(".sc-project .project-wrap .project-item:nth-child(1)", { height: 0 }, "a");
    slideImg.to(".sc-project .title-list a", { yPercent: -100 }, "a");

    slideImg.to(".sc-project .project-wrap .project-item:nth-child(2)", { height: 0 }, "b");
    slideImg.to(".sc-project .title-list a", { yPercent: -200 }, "b");

    slideImg.to(".sc-project .project-wrap .project-item:nth-child(3)", { height: 0 }, "c");
    slideImg.to(".sc-project .title-list a", { yPercent: -300 }, "c");

    // slideImg.to(".sc-project .item:nth-child(4)", { height: 0 }, "d");
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


const subProjectItems = document.querySelectorAll('.content-item');


// 하나씩 순차적으로 애니메이션 적용하는 함수
subProjectItems.forEach((item, index) => {
  gsap.from(item, {
    y: 100, // 시작할 때의 Y축 위치
    //opacity: 0, // 시작할 때의 불투명도
    duration: 1, // 애니메이션 지속 시간
    ease: 'power3.out',
    scrollTrigger: {
      trigger: item, // 각 요소를 트리거로 설정
      start: 'top 80%', // 요소가 뷰포트의 80% 지점에 들어올 때 시작
      end: '150% 0%', // 애니메이션이 끝나는 시점
      scrub: true, // 스크롤할 때마다 부드럽게 동작하는 옵션
      toggleActions: 'play none none none', // 스크롤 트리거에 따른 액션
    //   markers: true,
    }
  });
});




let sliderItem = $('.slider-item');
let sliderItemWidth = sliderItem.width();
// const horSection = gsap.utils.toArray(".port__item");
// 클래스 이름이 "port__item"인 모든 요소들을 선택하여 배열 horSection에 저장합니다.
// gsap.to(sliderItem)

console.log(sliderItemWidth); // 요소의 너비 출력

gsap.to(sliderItem,{
  // x: () => sliderItemWidth * -10,
  xPercent: -70 * (sliderItem.length - 1), //스크롤시 70%만큼 이동
  // defaults:{
  //   ease: "none", // <-- 이걸넣어야 횡스크롤 좌표가 안밀림!
  // },
  ease:"none",
  scrollTrigger: {
    trigger:".sc-roll .sc-title",
    start:'top -10%',
    // end: '+=1500',
    end: '+=1500',
    pin:".sc-roll",
    scrub:1,
    // markers:true,
    invalidateOnRefresh: true //반응형,ScrollTrigger 캐시를 재설정
  }
});




// gsap.to('.sc-roll .pan-box',{
//   yPercent:-20,
//   height:0,
//   scrollTrigger: {
//     trigger:".sc-roll .desc",
//     start:'+=50 0',
//     end: '+=1500',
//     // end: '0 0',
//     scrub:1,
//     markers:true,
//     invalidateOnRefresh: true //반응형,ScrollTrigger 캐시를 재설정
//   }
// })
