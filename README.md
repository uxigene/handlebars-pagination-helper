# Handlebars pagination helper
##### Pagination helper for handlebars templates

## Usage
##### Include JavaScript file:
```html
<script type="text/javascript" src="index.js"></script>
```

##### Register template helper:
```javascript
Handlebars.registerHelper('pagination', window.handlebarsPaginationHelper);
```

##### Create template:
```html
<script id="pagination-template" type="text/x-handlebars-template">
	<ul class="pagination">
		{{#pagination type='first' current=current}}
			<li class="pagination__page {{#if this.active}}pagination__page--active{{/if}}" data-page="{{this.page}}">First</li>
		{{/pagination}}
		{{#pagination type='prev' current=current}}
			<li class="pagination__page {{#if this.disabled}}pagination__page--disabled{{/if}}" data-page="{{this.page}}">Prev</li>
		{{/pagination}}
		{{#pagination type='pages' current=current total=total limit=limit}}
			<li class="pagination__page {{#if this.active}}pagination__page--active{{/if}}" data-page="{{this.page}}">{{this.page}}</li>
		{{/pagination}}
		{{#pagination type='next' current=current total=total}}
			<li class="pagination__page {{#if this.disabled}}pagination__page--disabled{{/if}}" data-page="{{this.page}}">Next</li>
		{{/pagination}}
		{{#pagination type='last' current=current total=total}}
			<li class="pagination__page {{#if this.active}}pagination__page--active{{/if}}" data-page="{{this.page}}">Last</li>
		{{/pagination}}
	</ul>
</script>
```

##### Render template:
```javascript
var template = Handlebars.compile(document.querySelector('#pagination-template').innerHTML);
var rendered = template({
	total: 50,
	limit: 5,
	current: 1
});
document.querySelector('#pagination-container').innerHTML = rendered;
```

## Preview
![screenshot](https://raw.githubusercontent.com/MarinescuEvghenii/handlebars-pagination-helper/master/demo/preview.png)
