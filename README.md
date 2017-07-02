# d3-menu

A reusable menu component. First, bind the menu to an HTML element. After that, when hover the element, a button representing the menu will be displayed. When user hover on the button, the menu would be displayed.

The plugin is implemented as a closure that support method chaining.

## Installing

Dependency: D3-menu requires 

D3 3.x version & 

jquery 3.x version & 

bootstrap 3.x version & 

font-awesome 4.x verison as dependency

Installing: All the content of d3-menu plugin is in the folder libs/d3_menu, including d3.menu.js and d3.menu.css

## Usage example
```js
let svg = d3.select("body").append("svg")
        .attr("width", 200)
        .attr("height", 200)
        .style('position', 'absolute')

let rect = svg.append('rect')
        .attr('width', 50)
        .attr('height', 50)
        .style('transform', 'translate(60px,30px)')

let icons = [{
    	icon: 'fa-arrows-h',
	title: 'Horizontal',
	click: function(){console.log('h')}
}, {
    	text: '2',
	title: 'Vertical',
	click: function(){console.log('v')}
}, {
	icon: 'fa-sort-amount-desc',
	title: 'Rank',
	click: function(){console.log('r')}
}]

let menu = d3.menu().icons(icons).target(rect)
rect.call(menu)
```
