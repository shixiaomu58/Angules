$(function(){
	$("#load").bind('click',function(){
		$.ajax({
			type:"Get",
			url: "assets/json/data.json",
			dataType:"json",
			success: function (oData) {
				$('input[name="Name"]').val(oData.Name);
				$('input[name="Gender"]').val(oData.Gender);
				$('input[name="Age"]').val(oData.Age);
				$('input[name="Character"]').val(oData.Character);
				console.log(oData);

			},
			error:function(errorMsg){
				console.log("错误"+errorMsg);
				// console.log(errorMsg);
			}
		})
	})


})