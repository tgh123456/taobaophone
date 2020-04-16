$(function(){
	$(".cha").click(function(){
		$(".topc").hide();
	})
	var toggle = true;
	$(".center1-1-1").click(function(){
		if(toggle){
			$(".center1-1-1>img").attr("src","shop/下载 (1).png");
			$(".center1-2-1-1>img").attr("src","shop/下载 (1).png");
			$(".quan-1-1>img").attr("src","shop/下载 (1).png");
			toggle = false;
			$(".hh").text(d*b)
		}else{
			$(".center1-1-1>img").attr("src","shop/下载.png");
			$(".center1-2-1-1>img").attr("src","shop/下载.png");
			$(".quan-1-1>img").attr("src","shop/下载.png");
			toggle = true;
			$(".hh").text("￥0");
		}
		
	})
	$(".center1-2-1-1").click(function(){
		if(toggle){
			$(".center1-2-1-1>img").attr("src","shop/下载 (1).png");
			$(".center1-1-1>img").attr("src","shop/下载 (1).png");
			$(".quan-1-1>img").attr("src","shop/下载 (1).png");
			toggle = false;
			$(".hh").text(d*b)
		}else{
			$(".center1-2-1-1>img").attr("src","shop/下载.png");
			$(".center1-1-1>img").attr("src","shop/下载.png");
			$(".quan-1-1>img").attr("src","shop/下载.png");
			toggle = true;
			$(".hh").text("￥0");
		}
	})
	$(".quan-1-1").click(function(){
		if(toggle){
			$(".center1-2-1-1>img").attr("src","shop/下载 (1).png");
			$(".center1-1-1>img").attr("src","shop/下载 (1).png");
			$(".quan-1-1>img").attr("src","shop/下载 (1).png");
			toggle = false;
			$(".hh").text(d*b)
		}else{
			$(".center1-2-1-1>img").attr("src","shop/下载.png");
			$(".center1-1-1>img").attr("src","shop/下载.png");
			$(".quan-1-1>img").attr("src","shop/下载.png");
			toggle = true;
			$(".hh").text("￥0");
		}
	})
	$(".jia").click(function(e){
		e.stopPropagation();
		a=$("#myinput").val();
		b=parseInt(a);
		b+=1;
		$("#myinput").val(b);
		c=$("#money").text();
		d=parseInt(c);
	})
	$(".jian").click(function(e){
		e.stopPropagation();
		a=$("#myinput").val();
		b=parseInt(a);
	    b-=1;
		$("#myinput").val(b);
		
		if(b<=0){
			console.log("不能小于0");
			$("#myinput").val("0");
		}else{
			b-=0;
		}
	})
	$(".xuan div").click(function(){
		$(this).addClass("bb").siblings().removeClass("bb");
		$("#ys").text($(this).text());
		$("#myys").text($(this).text());
		index=$(this).index();
		$(this).parents(".zhu2").prev().find(".myimg>img").eq(index).show().siblings().hide();
		$(".center1-2-1-2>img").attr("src",$(this).parents(".zhu2").prev().find(".myimg>img").eq(index).attr("src"))

	})
	$(".ma li").click(function(){
		$(this).addClass("bb").siblings().removeClass("bb");
		$("#cm").text($(this).text());
		$("#mycm").text($(this).text());
	})
	$("#img").click(function(e){
		e.stopPropagation();
		$(".da").animate({
			bottom:0
		},230)
	})
	$("#guan").click(function(e){
		e.stopPropagation();
		$(".da").animate({
			bottom:-100+"%"
		},230)
	})
	$(".tijiao").click(function(e){
		e.stopPropagation();
		$(".da").animate({
			bottom:-100+"%"
		},230)
	})
})
