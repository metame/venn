var circle = '<div class="drag circle resize"><label id="printedlabel" for="circle" class="drag">Label</label></div>';
var circlenav = '<nav class="circlemenu"><ul><li class="label">Label</li><li><a href="#">Delete</a></li><li><a href="#">Size</a></li><li><a href="#">Color</a></li></ul></nav>';

/* basic venn functionality */
$(document).ready(function()	{
	$('#add').click(function(e)	{
		e.preventDefault();
		$('#main').append(circle);

		$('#menus').append(circlenav);

		$('.circle').addClass(function( index ) {
  			return "circle-" + index;
		});

		$('.circlemenu').addClass(function( index )	{
			return "cnav-" + index;
		});

		$('.drag').draggable();		

		/* renaming Labels for circle elements */
		$('.label').click(function()	{
			$(this).replaceWith('<input type="text" placeholder="Label" name="Relabel">');
		});

	});
});


/* draggable */
$(document).ready(function()	{
	$('.drag').draggable();
});





/* need to write javascript so that when someone presses enter while focused on label it just unselects the label instead of creates a new line */

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

