//version 2017.3.22 11:00
//Dependency:
//jquery-3.2.0
//bootstrap-3.3.7
//font-awesome-4.7.0
//d3.js 3.5.17

(function(){
    d3.menu = function() 
    {
    	//public
        var target = null;//用jquery选中的target
        var icons;

        //private
        var _key = Math.ceil(Math.random() * 1000000);

    //renderer
        function menu() 
        {
            var mouseover = target.on('mouseover');
            target.on('mouseover',function(d,i){
            	if (mouseover != undefined)
            		mouseover(d,i);
            	var [left, top] = [$(this).offset().left, $(this).offset().top];
            	d3.selectAll('.group' + _key)
	            	.style('top', top + 'px')
			        .style('left', left + 'px')
            	d3.selectAll('.entry.group' + _key).style('display','inline')
            })

            var mouseout = target.on('mouseout');
            target.on('mouseout',function(d,i){
            	if (mouseover != undefined)
            		mouseout(d,i);
            	var [left, top] = [$(this).offset().left, $(this).offset().top];
            	d3.selectAll('.group' + _key)
	            	.style('top', top + 'px')
			        .style('left', left + 'px')
            	d3.selectAll('.entry.group' + _key).style('display','none')
            })

		    d3.select('body').append('div')
		        .attr('class', 'd3_menu_bar entry ' + 'group' + _key)
		        .on('mouseover', function() {
		            d3.select(this).style('display','inline')
		            d3.selectAll('.list.group' + _key).style('display','inline')
		        })
		        .append('i')
		        .attr('class', 'fa fa-fw fa-th-list')
		        .attr('title', 'entry')

		    d3.select('body').append('div')
		        .attr('class', 'd3_menu_bar list ' + 'group' + _key)
		        .on('mouseover', function() { d3.select(this).style('display','inline') })
		        .on('mouseout', function() { d3.select(this).style('display','none') })
		    .selectAll('.fa').data(icons)
		    	.enter().append('i')
		        .attr('class', d => 'fa fa-fw ' + d.icon)
		        .attr('title', d => d.title)
		        .on('click', d => d.click())

		    return menu;
        }

    //setter & getter
        menu.target = function(value){
            if (!arguments.length) return target;
            if (typeof(value)!="object")
            {
                console.warn("invalid value for target",value);
                return;
            }
            target = value;
            return menu;
        };
        menu.icons = function(value){
            if (!arguments.length) return icons;
            if (typeof(value)!="object")
            {
                console.warn("invalid value for icons",value);
                return;
            }
            icons = value;
            return menu;
        };
        return menu;
    }
})()

$.fn.d3_menu = function(){
    if ($(this).data('d3_menu') == undefined)
    {
    	var target = d3.select(this[0]);
        var renderer = d3.menu().target(target);
        $(this).data('d3_menu',renderer)
    }
    return $(this).data('d3_menu');
}
