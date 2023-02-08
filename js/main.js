$(function() {

    //slick左右轮播(首页大图)
	$('.mbanner .news_list').slick({
        dots: true,  //指示点
        infinite: true,  //循环播放
        autoplay: true,  //自动播放
        autoplaySpeed: 5000, //自动播放间隔
        arrows: false,  //左右箭头
        useCSS: true,  //使用 CSS3 过度
        speed: 600,  //滑动时间
        slide: 'li',  //滑动元素查询
        slidesToShow:1,  //幻灯片每屏显示个数
        slidesToScroll: 1,  //幻灯片每次滑动个数
        
    });
    //验证点击提交时账号框和密码框
		$(".regi").click(function(){
            var code=$("#code").val();//获取账号框的值
            var pass=$("#password").val();//获取密码的值
            if(code==""||pass==""){
             alert("账号密码不能为空");//当两个框其中一个为空时，弹出提示框
            }
         })
});