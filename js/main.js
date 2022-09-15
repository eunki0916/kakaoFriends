// gnb에서 서브메뉴 슬라이드
$('.btn_character').click(function(){
    $(this).find('span').toggleClass('on');
    $('.list_sub_wrap').slideToggle(300);
});
$('.btn_category').click(function(){
    $(this).find('span').toggleClass('on');
    $('.category_wrap').toggle();
});

// gnb 왼쪽에서 튀어나옴
$('.top_left').click(function() {
    $('#gnb').animate({left:0}, 300);
    $('.dark').css('display','block');
});

// gnb 사라짐
$('.dark').click(function(){
    $('.dark').css({'display' : 'none'});
    $('#gnb').animate({left:-304},300,'swing');
    $('.login_popup').hide();
});

// 로그인팝업창
$('.login_require').click(function(){
    $('#gnb').animate({left:-304},300,'swing');
    $('.login_popup').show();
});

// 
$('.ico_close').click(function(){
    $('.login_popup').hide();
    $('.dark').css({'display' : 'none'});
});