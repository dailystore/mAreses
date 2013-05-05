$(document).ready(function() {

	$('#loginBtn').click(function(event) {
		$("#loginResult").html("");
		event.preventDefault();
		/*var btn = $(this);
		btn.button('loading');*/
		var loginEmail = $("#loginEmail"),
			loginPassword = $("#loginPassword");
		$.post("http://192.168.29.134:1234/api/authen", {
			eml: loginEmail.val(),
			pwd: loginPassword.val(),
			sil: "true"
		}, function(data) {
			var result = JSON.parse(data);
			if(result.meta && result.meta.success == true) {
				/*var script = document.createElement("script");
				script.type  = "text/javascript";
				script.src   = "/js/user_authen.js";
				
				$("#login").modal('hide');
				$("#userStatus").html(result.data.menu);
				$("#userModals").html(result.data.modal).append(script);*/
				//window.location = '/user/';
				window.location.hash = 'user';
				
			} else {
				$("#loginResult").html("Đăng nhập thất bại! Lỗi: " + result.meta.error.message);
				btn.button('reset');
			}
		});
	});

	$('#regBtn').click(function() {
		$("#regResult").html("");
		var btn = $(this);
		btn.button('loading');
		var emailInp = $("#hinputEmail"),
			passwordInp = $("#hinputPassword"),
			nameInp = $("#hinputRealname"),
			genderInp = $("#hgenderSelect");
		$.post("http://192.168.29.134:1234/api/register", {
			eml: emailInp.val(),
			pwd: passwordInp.val(),
			nam: nameInp.val(),
			gdr:genderInp.val()
		}, function(data) {
			var result = JSON.parse(data);
			if(result.meta && result.meta.success == true) {
				emailInp.val("");
				passwordInp.val("");
				nameInp.val("");
				$("#regResult").html("Đăng ký thành công!");
			} else {
				$("#regResult").html("Đăng ký thất bại! Lỗi: " + result.meta.error.message);
			}
			btn.button('reset');
		});
	});
});