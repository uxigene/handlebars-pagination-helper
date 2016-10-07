/*
	Pagination helper for handlebars templates
	Author: Marinescu Evghenii
	Email: marinescu.evghenii@gmail.com
*/

(function (window, document) {

	function Module() {};

	Module.prototype.render = function(options) {
		this.options = options;

		this.total   = options.hash.total   || 9999;
		this.limit   = options.hash.limit   || 3;
		this.current = options.hash.current || 1;

		var order = options.hash.order || 'first,prev,pages,next,last';
		order = order.split(',');

		var rendered = '';
		for (var i = 0; i < order.length; i++) {
			switch (order[i]) {
				case 'pages':
					rendered += this.pages();
					break;
				case 'first':
					rendered += this.first();
					break;
				case 'next':
					rendered += this.next();
					break;
				case 'prev':
					rendered += this.prev();
					break;
				case 'last':
					rendered += this.last();
					break;
			}
		}

		return this.clearMarkup(rendered);
	};

	Module.prototype.clearMarkup = function (markup) {
		return markup
			.replace(/\n/g, '')
			.replace(/  +/g, ' ')
			.replace(/\t+/g, ' ');
	};

	Module.prototype.first = function() {
		return this.options.fn({
			first			: true,
			page			: 1,
			disabled	: this.current === 1
		});
	};

	Module.prototype.last = function() {
		return this.options.fn({
			last			: true,
			page			: this.total,
			disabled	: this.current === this.total
		});
	};

	Module.prototype.next = function() {
		var disabled = this.current === this.total;
		var page = disabled ? this.current : this.current + 1;
		return this.options.fn({
			next			: true,
			page			: page,
			disabled	: disabled
		});
	};

	Module.prototype.prev = function() {
		var disabled = this.current === 1;
		var page = disabled ? this.current : this.current - 1;
		return this.options.fn({
			prev			: true,
			page			: page,
			disabled	: disabled
		});
	};

	Module.prototype.pages = function() {
		// find how many pages can be before current
		var before = Math.ceil(this.limit / 2);

		// calculate offset
		var offset = 0;
		offset = this.options.current > before ? this.current - before : offset;
		offset = this.options.current + before > this.total ? this.total - this.limit : offset;

		// create pages
		var result = '';
		for (var i = 1; i <= this.limit; i++) {
			page = i + offset;
			active = page === this.current;
			result += this.options.fn({
				pages		: true,
				page		: page,
				active	: active
			});
		}
		return result;
	};

	var helper = function(options) {
		var module = new Module();
		return module.render(options);
	};

	// define for Node module pattern loaders, including Browserify
	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = helper;
	}
	// define as an AMD module
	else if (typeof define === 'function' && define.amd) {
		define(helper);
	}
	// define as a global variable
	if (typeof window !== 'undefined') {
		window.handlebarsPaginationHelper = helper
	}
}(window, document));
