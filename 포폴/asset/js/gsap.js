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
gsap.ticker.lagSmoothing(0) //지연 완화 기능을 비활성화, 즉각반응
lenis.scrollTo(0) //페이지 로드 시 스크롤 위치를 맨 위로 초기화
// lenis.stop();

const introTl = gsap.timeline();
ScrollTrigger.matchMedia({
  "(min-width:767px)":function(){
    introTl
    .to(".logo-text", {
      delay: 0.2,
      duration: 1,
      opacity: 1,
    })
    .to(".logo-text .t", {
      x: 0,
      duration: 1,
      ease: "expo.inOut",
    }, 'a')
    .to(".logo-text .fo", {
      x: 0,
      duration: 1,
      ease: "expo.inOut",
    }, 'a')

    .to(".logo-text .fo", {
      y: 0,
      duration: 1,
      // delay:0.5,
      ease: "expo.inOut",
    }, 'b')
    .to(".logo-text .lio", {
      y: 0,
      duration: 1,
      // delay:0.5,
      ease: "expo.inOut",
    }, 'b')

    .to(".info-txt",{
      opacity:0
    },'b')

    .to(".loding-page",{
      height: "0%",
      duration: 1,
      ease: "expo.inOut",
      onComplete: function () {
        lenis.start(); //.loding-page가 끝나고 스크롤 시작
      },
    },'b')
  }
});

// 스크롤 로고
gsap.to(".logo-text", {
  opacity: 0,
  ease: "none",
  scale: 0,
  scrollTrigger: {
    trigger: ".logo-text",
    start: "top top",
    end: "center top",
    scrub: 2,
    // markers:true,
  },
})
// ScrollTrigger.matchMedia({
// });




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
    
    slideImg.to(".sc-project .project-wrap .project-item:nth-child(1)", { height: 0 }, 'a');
    slideImg.to(".sc-project .title-list .title-item", { yPercent: -100 }, 'a');

    slideImg.to(".sc-project .project-wrap .project-item:nth-child(2)", { height: 0 }, 'b');
    slideImg.to(".sc-project .title-list .title-item", { yPercent: -200 }, 'b');

    slideImg.to(".sc-project .project-wrap .project-item:nth-child(3)", { height: 0 }, 'c');
    slideImg.to(".sc-project .title-list .title-item", { yPercent: -300 }, 'c');

    // slideImg.to(".sc-project .item:nth-child(4)", { height: 0 }, "d");
    // slideImg.to(".sc-project .slide-title a", { yPercent: -400 }, "d");
    },

    "(min-width: 767px) and (max-width: 1023px)": function () {
      // 애니메이션을 비활성화하거나 초기화하는 옵션
      // 예를 들어, 특정 요소의 초기 상태를 설정하거나 초기화할 수 있습니다.
    },
});


// 깔끔한 ~~ 설명글
// const txTl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".sc-work",
//     stagger: 1,
//     start: "20% center",
//     end: "20% center",
//     scrub: 1,
//     markers: true,
//   },
// });

// txTl


// rotateShow = gsap.utils.toArray('.work-tit');
// rotateShow.forEach((rotateShow) => {
//   gsap.fromTo(rotateShow, {
//     y: 50,
//     transform: 'rotate(5deg)',
//     opacity: 0
//   }, {
//     y: 0,
//     transform: 'none',
//     opacity: 1,
//     scrollTrigger: {
//       trigger: rotateShow,
//       start: 'top bottom',
//       end: 'top top',
//       // markers: true,
//       toggleActions: 'play reverse play reverse'
//     },
//   })
// })

gsap.fromTo('.work-tit', {
  y: 50,
  // transform: 'rotate(5deg)',
  opacity: 0
}, {
  y: 0,
  // transform: 'none',
  opacity: 1,
  scrollTrigger: {
    trigger: '.work-tit',
    start: 'top bottom',
    end: 'top top',
    // markers: true,
    toggleActions: 'play play play reverse'
  },
})
gsap.fromTo('.work-desc', {
  y: 50,
  // transform: 'rotate(5deg)',
  opacity: 0
}, {
  y: 0,
  // transform: 'none',
  opacity: 1,
  scrollTrigger: {
    trigger: '.work-desc',
    start: 'top bottom',
    end: 'top top',
    // markers: true,
    toggleActions: 'play play play reverse'
  },
})

gsap.utils.toArray(".sc-title .line").forEach((item) => {
  gsap.from(item, {
    height: "0",
    ease: "none",
    duration: 5,

    scrollTrigger: {
      trigger: item,  
      start: "0% 70%",
      end: "0% 70%",
      scrub: 1,
      // markers: true,
    },
  });
});


const menuTl = gsap.timeline({paused:true});

menuTl
  .to('.menu-wrap', { yPercent: '100' })
  .to('.menu-wrap .menu-item a', { translateY: 0, stagger: 0.1, duration: 0.2 , delay: 0.1,opacity:1})
  .to('.menu-wrap .social-list .social-item', { y: '0', delay: 0.1 });


$('.btn-menu').click(function(){
    $('.btn-menu').toggleClass('active');
    $('body').toggleClass('hidden')

    if ($(this).hasClass('active')) {
      menuTl.play()
    } else {
      menuTl.reverse()
    }
    // $('.header .menu-wrap').toggleClass('active')
})

// 추가
// $('.btn-menu a').click(function(){
//   $('.btn-menu').removeClass('on')
//   menuTl.reverse()
// })


// $('.header .menu-area .menu-close').click(function(e){
//     e.preventDefault();

//     $('.menu-area').removeClass('active');
//     $('body').removeClass('active');
// });


const subProjectItems = document.querySelectorAll('.content-item');


// 하나씩 순차적으로 애니메이션 적용하는 함수
subProjectItems.forEach((item, index) => {
  gsap.from(item, {
    y: 120, // 시작할 때의 Y축 위치
    //opacity: 0, // 시작할 때의 불투명도
    duration: 2, // 애니메이션 지속 시간
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


// 호버이벤트
$(document).mousemove(function (e) {
  // values: e.clientX, e.clientY, e.pageX, e.pageY
  xVal = e.clientX;
  yVal = e.clientY;
  gsap.to(".cursor", {
    x:xVal,
    y:yVal,
    stagger: 0.1,
  });
});

$(".sc-project .project-item .con-img-box,.sc-project .video-box").hover(
  function () {
    $(".cursor").addClass("on");
  },
  function () {
    $(".cursor").removeClass("on");
  }
);


// $('body').mousemove(function(e){
//   xVal = e.clientX;
//   yVal = e.clientY;

//   gsap.to('.cursor',{
//       x:xVal,
//       y:yVal
//   })
//   gsap.to('.view-wrap',1,{
//       x:xVal,
//       y:yVal
//   })
  
// })

// $('.move').mousemove(function(e){

//   console.log(e.offsetX);
//   var x = ((-$(this).width() / 2) + e.offsetX) *0.4;
//   var y = ((-$(this).height() / 2) + e.offsetY) *0.4;

//   gsap.to($(this), {
//       transform:"translate(" + x + "px," + y + "px)"
//   })
// })

// $('.move').mouseleave(function(){
//   gsap.to($(this), {
//       transform:"translate(0,0)"
//   })
// })

$('.btn, .btn-txt ').mousemove(function(e){

  // console.log(e.offsetX);
  var x = ((-$(this).width() / 2) + e.offsetX) * 0.4;
  var y = ((-$(this).height() / 2) + e.offsetY) * 0.4;

  gsap.to($(this),1.5, {
      // transform:"translate3D(" + x + "px," + y + "px, 0)",
      x: x, 
      y: y,
      ease: Elastic.easeOut,
  })
})

$('.btn, .btn-txt ').mouseleave(function(){
  gsap.to($(this),1.5, {
      // transform:"translate3D(0, 0, 0)",
      x: 0,
      y: 0,
      ease: Elastic.easeOut.config(1, 0.1)
  })
})

$(window).on('scroll', function (){
  curr = $(this).scrollTop();
  workHeight = $('.sc-work').outerHeight();

  // let rolling = gsap.timeline({})


  if (curr > workHeight) {
    gsap.to('.btn-menu', {
      scale: 1,
      duration: 0.5,
      ease: "power2.out"
    });
      // $('.header .logo-wrap, .btn-menu').addClass('on');
  } else {
    gsap.to('.btn-menu', {
      scale: 0,
      duration: 0.5,
      ease: "power2.out"
    });
      // $('.header .logo-wrap, .btn-menu').removeClass('on');
  }
})