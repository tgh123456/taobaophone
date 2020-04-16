$(function(){
			$("[name=myform]").validate({
			rules:{
				phone:{
					required:true,
					minlength:11,
					maxlength:11
				},
				pass:{
					required:true,
					minlength:8,
					maxlength:16
				}
				
			},
			//定义提示信息
			messages:{
				
				phone:{
					required:"<div style='color:red'>手机是必填项</div>",
					minlength:"<div style='color:red'>至少输入11位</div>",
					maxlength:"<div style='color:red'>最多输入11位</div>"
				},
				pass:{
					required:"<div style='color:red'>密码是必填项</div>",
					minlength:"<div style='color:red'>至少输入8位</div>",
					maxlength:"<div style='color:red'>最多输入16位</div>"
				}
			}
		});
		$("#guan").click(function(){
			$(".topa").hide();
		})
})
