$(function(){
	$("#load").bind('click',function(){
		$.ajax({
			type:"Get",
			url: "data/data.json",
			dataType:"json",
			success: function (data) {
				$('input[name="name"]').val(data.Name);
				$('input[name="Gender"]').val(data.Gender);
				$('input[name="Age"]').val(data.Age);
				$('input[name="Character"]').val(data.Character);
				console.log(data);

			},
			error:function(errorMsg){
				console.log(errorMsg);
			}
		})
	})


})