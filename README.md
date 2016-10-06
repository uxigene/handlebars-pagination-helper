# Handlebars pagination helper
###### Pagination helper for handlebars templates

### Usage
```javascript
// include module
var pagination = require('handlebars-pagination-helper');
// Register pagination helper
Handlebars.registerHelper('pagination', pagination);
// get template markup
var template = Handlebars.compile(document.querySelector('#pagination-template').innerHTML);
// render template
var rendered = template({
	total: 50,
	limit: 5,
	current: 1
});
```

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
