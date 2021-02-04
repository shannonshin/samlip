$(document).ready(function(){
        //헤더패널
    $('.panelWrap').hide();
    
    $('.panel').click(function(){
        $('.panelWrap').fadeIn();
        $('.panelMenu').css('width','70%');
    })
    
    $('.panelBg').click(function(){
        $('.panelWrap').fadeOut();
        $('.panelMenu').css('width','0');
    })
})
