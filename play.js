var $label = '<label class="printedlabel drag">Label</label>';
var circle = '<div class="drag circle">' + $label + '</div>';

/* basic venn functionality */
$(document).ready(function()	{
	$('#add').click(function(e)	{
		e.preventDefault();
		$('#main').append(circle); /* create circle */

		/*draggable*/
		$('.drag').draggable({containment: "document"});		

		/* add classes dynamically to circles based on index */
		$('.circle').addClass(function( index ) {
  			return "circle-" + index;
		});

	/* label context menu */
		$('.circle').contextMenu('circlemenu', {
			'Rename': {
				click: function(element){
					var clabel = element.children(".printedlabel");
					var relabel = prompt("enter label name");

					$(clabel).text(relabel);
				}
			},
			'Delete': {
				click: function(element){
					element.remove();
				}
			},
			'Size': {
				click: function(element){
					element.addClass('resize');
					$('.resize').resizable({
						aspectRatio: true
					});
				}
			},
			'Color': {
				click: function(element){
					var recolor = prompt("Enter Standard, Hex, RGB, or RGBA Color (CSS format)");
					element.css('background-color',recolor);
				}
			}
		},
		{
			leftClick: true
		}
		);	
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












/* 
Nice to have:
default box shadows

advanced:
label style properties
full style control on circles
*/

/*would like ability to create a locked grid at least have to figure out the PDF export option*/

