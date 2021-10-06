// profile patient

$(".list-ul li").click(function(){
    
    $(this).addClass("active-li").siblings().removeClass("active-li");
     
     var list = $(this).data('role');
     
     $(".content >div").hide();
     
     $(".content").contents().filter('#' + list).fadeIn();
     
 });
 
 // popup 
 
 $("#open").click(function(){
    
     $("nav .popup").css('transform','scale(1)');
 });
 
 $("#close").click(function(){
    
     $("nav .popup").css('transform','scale(0)');
 });
 
 
 
 
 