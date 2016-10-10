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
	<div class="pagination">
		{{#pagination order='first,prev,pages,next,last' current=current total=total limit=limit}}
			<a href="#page={{this.page}}" class="pagination__page
				{{#if this.active}}pagination__page--active{{/if}}
				{{#if this.disabled}}pagination__page--disabled{{/if}}">
				{{#if this.first}}First page{{/if}}
				{{#if this.last}}Last{{/if}}
				{{#if this.next}}Next{{/if}}
				{{#if this.prev}}Prev{{/if}}
				{{#if this.pages}}{{this.page}}{{/if}}
			</a>
		{{/pagination}}
	</div>
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
JSFiddle: https://goo.gl/Ppf3En
