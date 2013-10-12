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

/*need to build capability to select a circle to change options

Essential:
Label rename
Delete circle

Nice to have:
resize
color
default box shadows

advanced:
label style properties
full style control on circles
*/

/*would like ability to create a locked grid at least have to figure out the PDF export option*/

