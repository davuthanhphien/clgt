/*
 * common.js
 *
 *  version --- 3.6
 *  updated --- 2016/09/26
 */
/* !stack ------------------------------------------------------------------- */
$(function(){
  //EACH TITLE WIDGET
  $(window).resize(function(event) {
    $(".widget-title").each(function(){
      var height_title = $(this).height();
      $(this).addClass("title-size")
      if(height_title > 40){
        var valueTop = (height_title/2) + 7;
        $(this).css("top", -valueTop);
        $(this).parent(".widget").css("padding-top", height_title + 7).css("margin-top", valueTop);
      }
    });
  });
});
$(window).load(function() {
  var helpScroll = (function() {
    var offset_footer = $("#footer").offset().top;
    var heightWindow = $(window).height();
    $(window).scroll(function(){
      var scroll = $(this).scrollTop();
      if(scroll >= offset_footer - heightWindow + 100){
        $(".help-box").addClass('absolute')
      }
      else {
        $(".help-box").removeClass('absolute')
      }
    });

  });
  $(window).resize(function(event) {
    helpScroll();
  }).trigger('resize');
  $(".notif-text").each(function(index, el) {
    var lengText = $(this).text().length;
    if(lengText > 97){
      $(this).addClass("hiden-text");
    }
  });
});

$(document).ready(function() {
	//checkSizeWindow
	var sizeCheck = function () {
		if(window.matchMedia('(max-width:767px)').matches){
		  return 'MB';
		} else {
		  return 'PC';
		}
  };
  $('.notif-wrap').perfectScrollbar();
  //CLICK-SHOW-MENU
  $(".btn-search").on("click", function(){
    $(".search-wrap").slideToggle();
    $(this).find('.fas').toggleClass('fa-search-minus');
  });

  
  $(".btn-menu").on('click', function() {
  	$(".head-menu").toggleClass('is-active');
    $(this).find('.fas').toggleClass('fa-times');
  });
  $(window).resize(function(event) {
    if(sizeCheck() == 'MB'){}
    else {
     $(".head-menu").removeClass('is-active'); 
     $(".btn-menu").find(".fas").removeClass("fa-times");
    }
  }).trigger('resize');

  //SLIDE MENU OVERVIEW
  $(".sub-menu .hash-sub>a").on("click", function(e){
    e.preventDefault();
    $(this).parents(".menu").find('.hash-sub').removeClass('change-active');
    if($(this).parent('li').hasClass('active')){
      $(this).parent('li').removeClass("active").find(".lever-2").slideUp();
    }
    else {
      $(this).parent('li').siblings('.hash-sub').removeClass("active").find(".lever-2").slideUp();
      $(this).parent('li').find(".lever-2 li").removeClass('is-active');
      $(this).parent('li').addClass("active");
      $(this).next('.lever-2').slideDown();
    }
  });
  $(".lever-2 li>a").on("click", function(e){
    e.preventDefault();
    $(".lever-2 li").removeClass("is-active")
    $(this).parent('li').addClass("is-active");
    $(this).parents(".hash-sub").addClass('change-active');
  });

  //CLICK TABLE SCORE
  $(".col-view").on("click", function(){
    if($(this).hasClass('active')){
      $(this).removeClass("active")
      $(this).next(".col-detail").slideUp();
      //$(this).siblings(".col-view").removeClass("active").siblings(".col-detail").slideUp();
    }
    else {
      $(this).siblings(".col-view").removeClass("active");
      $(this).addClass("active").siblings(".col-detail").slideUp();
      $(this).next(".col-detail").slideDown();
      //$(this).siblings(".col-view").siblings(".col-detail").removeClass("active");    
    } 
  });

  //CLICK SHOW TABLE PLAY DAILY SCREEN
  $(".click-here").on("click", function(){
    $(".answer-hidden").slideDown();
  });
  $(".btn-close-answer").on("click", function(){
    $(".answer-hidden").slideUp();
  });

  //CLOSE WARNING
  $(".close-warning").on('click', function(event) {
    var lengthWarn = $("#warning-wrap li").length;
    $(this).parent("li").remove();
    if(lengthWarn == 1){
      $("#warning-wrap").remove();
    }
  });
});
