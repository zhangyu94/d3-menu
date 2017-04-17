function main()
{
	let width = 200
    let height = 200

    let svg = d3.select("body").selectAll("svg")
        .data([null])
        .enter().append("svg")
        .attr("width", width)
        .attr("height", height)
        .style('position', 'absolute')

    let rect = svg.append('rect')
        .attr('id', 'Myrect')
        .attr('width', 50)
        .attr('height', 50)
        .attr('opacity', 0.1)
        .style('transform', 'translate(60px,30px)')

    let icons = [{
		            icon: 'fa-arrows-h',
		            title: 'Horizontal',
		            click: function(){console.log('h')}
		        }, {
                    text: '2',
		            //icon: 'fa-arrows-v',
		            title: 'Vertical',
		            click: function(){console.log('v')}
		        }, {
		            icon: 'fa-sort-amount-desc',
		            title: 'Rank',
		            click: function(){console.log('r')}
		        }]

    //$(rect.node()).d3_menu();
    let menu = d3.menu().icons(icons).target(rect)/*.bind_event('click')*///.position({horizontal:'middle',vertical:'middle'})
    rect.call(menu)
	
}