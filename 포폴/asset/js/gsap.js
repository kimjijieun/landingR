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
    
    slideImg.to(".sc-project .project-wrap .item:nth-child(1)", { height: 0 }, "a");
    slideImg.to(".sc-project .title-list a", { yPercent: -100 }, "a");

    slideImg.to(".sc-project .project-wrap .item:nth-child(2)", { height: 0 }, "b");
    slideImg.to(".sc-project .title-list a", { yPercent: -200 }, "b");

    slideImg.to(".sc-project .project-wrap .item:nth-child(3)", { height: 0 }, "c");
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


// gsap.to(".img-wrap img", {
//     y: 500,
//     scrollTrigger: {
//       trigger: ".roll-img-area",
//       start: "top top",
//       end: "bottom top",
//       scrub: true
//     }
//   });


// gsap.utils.toArray('.img-wrap').forEach(function (section, index) {
//     gsap.to(section, {
//       scrollTrigger: {
//         trigger: section,
//         start: "top 80%",
//         end: "bottom 20%",
//         toggleActions: "play none none reverse",
//         scrub: 1,
//       },
//       opacity: 1,
//       duration: 1,
//     });
//   });



// 오른쪽 텍스트 항목 배열 가져오기
let textItems = gsap.utils.toArray(".rolltext-box span");

// 각 텍스트 항목을 스크롤에 맞춰 트리거 설정
textItems.forEach((textItem, i) => {
    gsap.fromTo(textItem, 
        { 
            // opacity: 0,  
            y: 0,  // 초기 위치: 모두 -100%로 설정
        }, 
        { 
            // opacity: 1,
            transition: '0.3s',
            y: () => `-${(i + 1) * 100}%`,     // 스크롤 시 원래 위치로 돌아옴
            scrollTrigger: {
                trigger: ".photo-txtBott",     // 이미지 전체를 기준으로 스크롤 트리거 설정
                start: () => `top+=${i * window.innerHeight / 2} center`, // 각 아이템이 스크롤될 때 나타남
                end: () => `top+=${(i + 1) * window.innerHeight / 2} center`, // 다음 아이템이 나타나면 이전 아이템 사라짐
                toggleActions: "play none none reverse", // 스크롤 되돌릴 때 다시 사라지게
                scrub: true,               // 스크롤에 따라 애니메이션이 동적으로 적용
            }
        }
    );
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
  defaults:{
    ease: "none", // <-- 이걸넣어야 횡스크롤 좌표가 안밀림!
  },
//   ease:"none",/
  scrollTrigger: {
    trigger:".sc-roll .sc-title",
    start:'top -10%',
    // end: '+=1500',
    end: '+=1500',
    pin:".sc-roll",
    scrub:true,
    markers:true,
    invalidateOnRefresh: true //반응형,ScrollTrigger 캐시를 재설정
  }
});