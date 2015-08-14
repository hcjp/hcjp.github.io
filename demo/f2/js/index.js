window.onload = function(){
	var oNotes = document.getElementById('notes');
	var zz = document.getElementById('zz');
	var oNotesDialog = document.getElementById('dialog-notes');
	oNotes.onclick = function(){
		var cw = document.documentElement.clientWidth || document.body.clientWidth;
		var ch = document.documentElement.clientHeight || document.body.clientHeight;
		zz.style.width = cw + 'px';
		zz.style.height = ch + 'px';
		oNotesDialog.style.top = '50%';
		oNotesDialog.style.left = '50%';
		zz.style.display = 'block';
		oNotesDialog.style.display = 'block';
	}
	zz.onclick = function (){
		oNotesDialog.style.display = 'none';
		this.style.display = 'none';
	}
	$('.main-con-btn').each(function(){
		$(this).click(function(){
			$('.msg').appendTo($(this).parent('.main-con')).show();
		})
	});
	$('.search-input input').focus(function(){
		if($.trim($(this).val()) == '请输入军团名称'){
			$(this).val('');
		}
	}).blur(function(){
		if($.trim($(this).val()) == ''){
			$(this).val('请输入军团名称');
		}
	})
}