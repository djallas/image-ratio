function photoAdjust(){
  $(".image").css("overflow","hidden");
  $(".image img").css({'margin': '0 auto','display': 'block'});
  $(".image").each(function(){
    /* Image Container Adjuster */
    var width_div = $(this).width();
    var ratio = $(this).attr('data-image-ratio');
    if(ratio === '1by1'){
      $(this).css('height', width_div+'px');
    }
    /* Image Adjuster */
    var width_img = $(this).find('img').width();
    var height_img = $(this).find('img').height();
    if(width_img > height_img){
      var height_cont = $(this).height();
      $(this).find("img").css('margin-top', ((height_cont - height_img)/2)+'px');
    }else{
      var height_cont = $(this).height();
      $(this).find("img").css('height', (height_cont)+'px');
    }
  });
}
