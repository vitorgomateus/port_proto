
/* POWER ACTION BUTTON */
/* 
on mobile:
 first click expands, second click downloads and contracts
 scrolling also contracts

on desktop:
  expands and contracts on hover
  downloads on click
 */


$('body').append("<!-- DOWNLOAD PDF-->"+
	"<pa-backdrop style='display: none;'></pa-backdrop>"+
	"<span class='btn btn-primary btn-corner-hover encolhido'>"+
	"<a href='res/vg-cv-en-2020.pdf' target='_blank' rel='noopener noreferrer' download style='display: none;'>"+
	"Download CV PDF"+
	"</a>"+
	"<i class='fas fa-download'></i>"+
	"</span>");

    var btnHover = $('.btn-corner-hover');
    var pa_link = $('.btn-corner-hover a');
    var pa_backdrop = $('pa-backdrop');
    var w = $(window).width();

    btnHover.hover(function(){
    w = $(window).width();
      if(w>576) {
        if(btnHover.hasClass("expandido")){
          //console.log('hover close');
          closePowerActionBtn();
        }else{
          //console.log('hover open');
          openPowerActionBtn();
        }     
      } 
    });

    btnHover.click(function(e){
    w = $(window).width();
      //console.log("type",e.type,"target", e.target);
      if(w>576) {
        //console.log('desktop');
      }else if(btnHover.hasClass("expandido")){
        //console.log('close');
        closePowerActionBtn();
      }else{
        e.preventDefault();
        //console.log('open');
        openPowerActionBtn();
      }      
    });
    pa_backdrop.click(function(){
        //console.log('pa_backdrop');
        closePowerActionBtn();
    });
    /* don't do anything
    btnHover.focusout(function(){
        console.log('focusout');
        closePowerActionBtn();
    });
    btnHover.blur(function(){
        console.log('blur');
        closePowerActionBtn();
    });*/

    function openPowerActionBtn(){
        btnHover.addClass("expandido");
        btnHover.removeClass("encolhido");
        pa_link.show();
        pa_backdrop.show();      
    }
    function closePowerActionBtn(){
        btnHover.removeClass("expandido");
        btnHover.addClass("encolhido");
        pa_link.hide();
        pa_backdrop.hide();
      
    }
    /* show floating power action button only when cover is not visible */
    $(window).ready(function() {
      checkPowerActionBtn();
    });
    $(window).scroll(function() {
      checkPowerActionBtn();
        w = $(window).width();
        if(w<576 && btnHover.hasClass("expandido")){
          //console.log('hover close');
          closePowerActionBtn();
        }

    });

    function checkPowerActionBtn(){
        if ($('#dl-btn-banner').visible()) {
            /*$('.btn-corner-hover').hide();*/
            $(".btn-corner-hover").css({ opacity: 0 });
        }else{
            /*$('.btn-corner-hover').show();*/
            $(".btn-corner-hover").css({ opacity: 1 });
        }
    }

    /*<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>
</button>*/