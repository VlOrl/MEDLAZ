$('.burger_header').click(function(event){
    $('.burger_header, nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
  
$('.icon_tel_right_block').click(function(event){
    
    $('.icon_tel_right_block,.sub_list_tel').toggleClass('active');

});
$('.next_footer_link').click(function(event){
    
    $('.next_footer_link,.footer_third_block').toggleClass('active');

});