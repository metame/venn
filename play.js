var circle = '<div class="drag circle resize"><label id="label" for="circle" class="drag">Label</label></div>';

$('document').ready(function()	{
	$('#add').click(function(e)	{
		e.preventDefault();
		$('#main').append(circle);
		$('.circle').addClass(function( index ) {
  			return "circle-" + index;
			});
		$('.drag').draggable();
	});
});

