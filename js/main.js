console.log("방가방가")
// alert("반갑습니다")

// menu
$('.nav>ul>li').mouseover(function () {
    console.log($(this));
    $(this).find('.submenu').stop().slideDown();
});
$('.nav>ul>li').mouseout(function () {
    $(this).find('.submenu').stop().slideUp();
});

// banner

// 변수 : 변하는값이라는 의미
let currentIndex = 0;

// setinterval(function(){},3000); setinterval(할일,시간) 시간마다 할일이 실행된다. 시간은 ms기준
/* if(조건문){
    조건이 만족하면 할일을 실행
}else{
    조건이 만족하지 않으면 할일을 실행
} */

setInterval(function () {
    if (currentIndex < 2) {
        currentIndex++; //++은 1씩 더하라
    } else {
        currentIndex = 0;
    }
    // console.log(currentIndex);
    let slidePosition = currentIndex * (-378) + "px";
    console.log(slidePosition);
    $('.slidelist').animate({ //animate({실행문},시간)
        top: slidePosition
    }, 400)
}, 3000);

/* 텝메뉴
.find() --> css에서 띄워쓰기(하위요소)와 동일, 자손을 찾아라
.hide() --> display:none 과같음
.show() --> display:block 
.next() --> 형제중에서 바로 밑동생을 부름
.parent() --> 바로위 상위요소(부모요소를 호출)
.siblings() --> 나를제외한 나머지 형제 */

let tabMenu = $('.notice');
tabMenu.find('ul>li>ul').hide();
tabMenu.find('ul>li.active>ul').show();

tabMenu.find('ul>li>a').click(function (e) {
    e.preventDefault(); //#때문에 튕기는현상을 막아라
    // $(this).parent('li').addClass('active');
    // $(this).parent('li').siblings('li').removeClass('active');
    // $(this).parent('li').siblings('li').find('ul').hide();

    $(this).parent('li').addClass('active');
    $(this).parent('li').siblings('li').removeClass('active')
    .find('ul').hide();


    $(this).next().show();
});

// 팝업창
// $('ad').click(어떤일)
// $('ad').click(function(){실행문});
$('.ad').click(function(){
    // $('.layer-bg').slideDown();
    $('.layer-bg').fadeIn();
});

$('.layer .close').click(function(){
    // $('.layer-bg').slideUp();
    // $('.layer-bg').hide();
    $('.layer-bg').fadeOut(1000);
})