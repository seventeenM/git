/**
 * Created by Administrator on 2017/8/4.
 */
var con = new Swiper(".swiper-con",{
    onSlideChangeStart:function(sw){
        $(".list li").eq(sw.activeIndex).addClass("bg").siblings().removeClass("bg");
    }
});
function s(index){
    con.slideTo(index);
}