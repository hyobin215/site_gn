
//Swiper 플러그인 호출
const swiper1 = new Swiper('#main_view', {
    // Optional parameters
    wrapperClass:'slider',
    slideClass:'view',
    loop:true,
    slidesPerView: 1,

    autoplay: { //자동슬라이드
      delay: 5000, //하나의 슬라이드가 보여주는 시간
    },
    speed:800, //슬라이드가 전환되는(움직이는) 시간
    
  
    // If we need pagination
    pagination: {
      el: '.pager', //버튼영역 대상
      bulletActiveClass:'active', //활성화된 요소에 추가되는 클래스
      clickable:true, //클릭 시 슬라이드 이동
    },

      // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  });
  //stroy_menu
  const stroy_menu = new Swiper('#story_menu', {
    // Optional parameters
    wrapperClass:'menu_ul',
    slideClass:'menu_li',
    slidesPerView: 3,

  });
  //stroy 
  const story = new Swiper('#main2', {
    // Optional parameters
    wrapperClass:'content',
    slideClass:'photo',
    loop:true,
    thumbs: {
      swiper: stroy_menu,
      slideThumbActiveClass:'active'
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  //Swiper 플러그인 호출
const swiper_good_change = new Swiper('#good_change', {
  // Optional parameters
  wrapperClass:'slider',
  slideClass:'view',
  loop:true,
  slidesPerView: 4,
  spaceBetween:40,
  //centeredSlides:true,
  autoplay: { //자동슬라이드
    delay: 5000, //하나의 슬라이드가 보여주는 시간
  },
  speed:800, //슬라이드가 전환되는(움직이는) 시간

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});
