var $label = '<label class="printedlabel drag">Label</label>';
var circle = '<div class="drag circle">' + $label + '</div>';
var circlenav = '<nav class="circlemenu"><ul><li class="label">Label</li><li>Delete</li><li>Size</li><li>Color</li></ul></nav>';

/* basic venn functionality */
$(document).ready(function()	{
	$('#add').click(function(e)	{
		e.preventDefault();
		$('#main').append(circle); /* create circle */

		$('#menus').append(circlenav); /* create circle menu */

		/*draggable*/
		$('.drag').draggable({containment: "document"});		

		/* add classes dynamically to circles based on index */
		$('.circle').addClass(function( index ) {
  			return "circle-" + index;
		});

		/* add classes dynamically to circle menus based on index */
		$('.circlemenu').addClass(function( index )	{
			return "cnav-" + index;
		});

		/* todo: add class based on index to group all elements belonging to a circle array in a single class */

		
		/* renaming Labels for circle elements */
		var relabel = '<input class="relabel" type="text" placeholder="Label" name="Relabel">';
		$('.label').one('click', function()	{
			$('.circlemenu').prepend(relabel);

			/* add input value to printed label */
			$('.cnav-0 .relabel').change(function()	{
				var val0 = $(this).val();
				$('.circle-0 .printedlabel').html(val0);
			});

			$('.cnav-1 .relabel').change(function()	{
				var val1 = $(this).val();
				$('.circle-1 .printedlabel').html(val1);
			});

			$('.cnav-2 .relabel').change(function()	{
				var val2 = $(this).val();
				$('.circle-2 .printedlabel').html(val2);
			});
				/* currently have to add function for each circle and label. would like to bring this to a more simple, scalable solution */
		});

		/* delete menu function */
		$(".cnav-0 ul li:contains('Delete')").click(function()	{
			var array0 = $('.circle-0, .cnav-0');
			$(array0).remove();
		});

		$(".cnav-1 ul li:contains('Delete')").click(function()	{
			var array1 = $('.circle-1, .cnav-1');
			$(array1).remove();
		});

		$(".cnav-2 ul li:contains('Delete')").click(function()	{
			var array2 = $('.circle-2, .cnav-2');
			$(array2).remove();
		});
		
		/* resize menu function */
		$(".cnav-0 ul li:contains('Size')").click(function()	{
			$('.circle-0').addClass('resize');
			$('.resize').resizable({
				aspectRatio: true
			});
		});

		$(".cnav-1 ul li:contains('Size')").click(function()	{
			$('.circle-1').addClass('resize');
			$('.resize').resizable({
				aspectRatio: true
			});
		});

		$(".cnav-2 ul li:contains('Size')").click(function()	{
			$('.circle-2').addClass('resize');
			$('.resize').resizable({
				aspectRatio: true
			});
		});

		/* color menu function */
		/* bug in color menu: need to change input position so it doesn't fall in same place as relabel */
		
		$(".circlemenu ul li:contains('Color')").one('click', function()	{
			var recolor = '<input class="recolor" type="text" placeholder="Standard, Hex, RGB, or RGBA Color (CSS format)" name="Recolor">';
			$('.circlemenu').prepend(recolor);

			$('.cnav-0 .recolor').change(function()	{
				var color0 = $(this).val();
				$('.circle-0').css('background-color',color0);
			});

			$('.cnav-1 .recolor').change(function()	{
				var color1 = $(this).val();
				$('.circle-1').css('background-color',color1);
			});

			$('.cnav-2 .recolor').change(function()	{
				var color2 = $(this).val();
				$('.circle-2').css('background-color',color2);
			});
		});
	});
});

$(document).ready(function()	{
	$('#label').click(function(e)	{
		e.preventDefault();
		$($label).appendTo('#main').addClass("freelabel");
		$(".printedlabel").addClass(function( index ) {
  			return "flabel-" + index;
		});
		$('.drag').draggable({containment: "document"});

		/* label context menu */
		$('.freelabel').contextMenu('labelmenu', {
			'Rename': {
				click: function(element){
					var relabel = prompt("enter label name");
					element.text(relabel);
				}
			},
			'Delete': {
				click: function(element){
					element.remove();
				}
			}
		},
		{
			leftClick: true
		}
		);

		});

});








/* need to write javascript so that when someone presses enter while focused on label it just unselects the label instead of creates a new line */

/*need to build capability to select a circle to change options



Nice to have:
default box shadows

advanced:
label style properties
full style control on circles
*/

/*would like ability to create a locked grid at least have to figure out the PDF export option*/

