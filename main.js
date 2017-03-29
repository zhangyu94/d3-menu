function main()
{
	var width = 200;
    var height = 200;

    var svg = d3.select("body").selectAll("svg")
        .data([null])
        .enter().append("svg")
        .attr("width", width)
        .attr("height", height)
        .style('position', 'absolute')

    var rect = svg.append('rect')
        .attr('id', 'Myrect')
        .attr('width', 50)
        .attr('height', 50)
        .attr('opacity', 0.1)
        .style('transform', 'translate(60px,30px)')

    var icons = [{
		            icon: 'fa-arrows-h',
		            title: 'Horizontal',
		            click: function(){console.log('h')}
		        }, {
		            icon: 'fa-arrows-v',
		            title: 'Vertical',
		            click: function(){console.log('v')}
		        }, {
		            icon: 'fa-sort-amount-desc',
		            title: 'Rank',
		            click: function(){console.log('r')}
		        }, ]

    //$(rect.node()).d3_menu();
    var menu = d3.menu().icons(icons).target(rect);
    rect.call(menu)
	
}