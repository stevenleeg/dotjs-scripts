$(document).ready(function() {
	$('table:eq(0) tr:eq(3) td table tr:nth-child(3n+1) a').each(function(i) {
		if($(this).attr('id').indexOf('up_') == -1) {
			$(this).attr('target','_blank')
		}
	})
})
