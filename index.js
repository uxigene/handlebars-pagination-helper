/*
	Pagination helper for handlebars templates
	Author: Marinescu Evghenii
	Email: marinescu.evghenii@gmail.com
*/

(function (window, document) {
	var handlebarsPaginationHelper = function(options) {
		var type    = options.hash.type    || 'pages',
				total   = options.hash.total   || 9999,
				limit   = options.hash.limit   || 3,
				current = options.hash.current || 1;

		// normalize current value (min = 1; max = total)
		current = current > 0 ? current : 1;
		current = current > total ? total : current;

		// normalize limit value (min = 3; max = total)
		limit = limit > 3 ? limit : 3;
		limit = limit < total ? limit : total;

		var result   = '',
			disabled = false,
			active   = false,
			page     = 1;

		switch (type) {
			case 'first':
				// set first page value
				page = 1;
				// check if page is disabled
				disabled = page === current;
				result = options.fn({page: page, disabled: disabled});
				break;

			case 'last':
				// set last page value
				page = total;
				// check if page is disabled
				disabled = page === current;
				result = options.fn({page: page, disabled: disabled});
				break;

			case 'next':
				// check if next button is disabled
				disabled = current === total;
				// set next button page value
				page = disabled ? current : current + 1;
				result = options.fn({page: page, disabled: disabled});
				break;

			case 'prev':
				// check if previous button is disabled
				disabled = current === 1;
				// set previous button page value
				page = disabled ? current : current - 1;
				result = options.fn({page: page, disabled: disabled});
				break;

			case 'pages':
				// find how many pages can be before current
				var before = Math.ceil(limit / 2);
				// calculate offset
				var offset = 0;
				offset = current > before ? current - before : offset;
				offset = current + before > total ? total - limit : offset;
				// create pages
				for (var i = 1; i <= limit; i++) {
					page = i + offset;
					active = page === current;
					result += options.fn({
						page: page,
						active: active
					});
				}
				break;
		}
		return result;
	};

	// define for Node module pattern loaders, including Browserify
	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = handlebarsPaginationHelper;
	}
	// define as an AMD module
	else if (typeof define === 'function' && define.amd) {
		define(handlebarsPaginationHelper);
	}
	// define as a global variable
	if (typeof window !== 'undefined') {
		window.handlebarsPaginationHelper = handlebarsPaginationHelper;
	}
}(window, document));
