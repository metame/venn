var circle = '<div class="drag circle resize"><label id="printedlabel" for="circle" class="drag">Label</label></div>';
var circlenav = '<nav class="circlemenu"><ul><li class="label">Label</li><li><a href="#">Delete</a></li><li><a href="#">Size</a></li><li><a href="#">Color</a></li></ul></nav>';

/* basic venn functionality */
$(document).ready(function()	{
	$('#add').click(function(e)	{
		e.preventDefault();
		$('#main').append(circle); /* create circle */

		$('#menus').append(circlenav); /* create circle menu */

		/* add classes dynamically to circles based on index */
		$('.circle').addClass(function( index ) {
  			return "circle-" + index;
		});

		/* add classes dynamically to circle menus based on index */
		$('.circlemenu').addClass(function( index )	{
			return "cnav-" + index;
		});

		/* todo: add class based on index to group all elements belonging to a circle array in a single class */

		/*draggable*/
		$('.drag').draggable();		

		/* renaming Labels for circle elements */
		var relabel = '<input class="relabel" type="text" placeholder="Label" name="Relabel">';
		$('.label').click(function()	{
			$('.circlemenu').prepend(relabel);

			/* dynamically assign classes to relabel inputs based on index */
			$('.relabel').addClass(function( index )	{
				return "relabel-" + index;
			});

			/* add input value to printed label */
			$('.relabel').change(function()	{
				var value = $(this).val();
				$('#printedlabel').html(value);
			});

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

