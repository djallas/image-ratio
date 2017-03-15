  /*
  * This code are to be used for adjust image within a Container depending on
  * most common ratio
  * Originally wrote this snippet for Suffragette/Pathé campaign (https://apps.facebook.com/inspiring-women)
  * This snippet sets the new width and height based on their natural width and height
  * to maintain the aspect ratio.
  * Works best for 1:1(noted like 1by1) aspect ratio but can be modified to accommodate other ratio.
  * Author: Gilles Kagarama
  * Company: Inyarwanda Ltd
 */
function imgratio(){
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
