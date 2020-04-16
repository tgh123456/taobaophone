$(function(){
   $("header li>div").click(function(){
   	$(this).addClass("quan").parent().siblings().children().removeClass("quan");
   	index=$(this).index();
   	$(this).parents("header").next().find("section").eq(index).show().siblings().hide();
   })
})
$(function(){
   $("header>div").click(function(){
   	$(this).addClass("bb").siblings().removeClass("bb");
   	index=$(this).index();
   	$(this).parent().next().find("section").eq(index).show().siblings().hide();
   })
})