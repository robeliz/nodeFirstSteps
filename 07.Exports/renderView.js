/**
 * http://usejsdoc.org/
 * Roberto Elizo
 */


function render(html, nombre){
	var html_string = html.toString();
	myhtml = html_string.replace("{nombre}", nombre);
	return myhtml;
}

module.exports.render= render;
