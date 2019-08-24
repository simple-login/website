/**
 * Summernote editor wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
(function ($) {
	'use strict';
	
	$.HSCore.components.HSSummernoteEditor = {
		/**
		 *
		 *
		 * @var Object _baseConfig
		 */
		_baseConfig: {
			buttons: {},
			lang: 'en-US',
			toolbar: [
				["style", ["style"]],
				["font", ["bold", "underline", "clear"]],
				["fontname", ["fontname"]],
				["fontsize", ["fontsize"]],
				["color", ["color"]],
				["para", ["ul", "ol", "paragraph"]],
				["table", ["table"]],
				["insert", ["link", "picture", "video"]],
				["view", ["fullscreen", "codeview", "help"]]
			],
			popover: {
				"image": [
					["imagesize", ["imageSize100", "imageSize50", "imageSize25"]],
					["float", ["floatLeft", "floatRight", "floatNone"]],
					["remove", ["removeMedia"]]
				],
				"link": [
					["link", ["linkDialogShow", "unlink"]]
				],
				"table": [
					["add", ["addRowDown", "addRowUp", "addColLeft", "addColRight"]],
					["delete", ["deleteRow", "deleteCol", "deleteTable"]]
				],
				"air": [
					["color", ["color"]],
					["font", ["bold", "underline", "clear"]],
					["para", ["ul", "paragraph"]],
					["table", ["table"]],
					["insert", ["link", "picture"]]
				]
			},
			airMode: false,
			width: null,
			height: 100,
			linkTargetBlank: true,
			focus: false,
			tabSize: 4,
			blockquoteBreakingLevel: 2,
			styleWithSpan: true,
			shortcuts: true,
			textareaAutoSync: true,
			hintDirection: 'bottom',
			tooltip: 'auto',
			container: 'body',
			maxTextLength: 0,
			styleTags: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
			fontNames: [
				"Arial", "Arial Black", "Comic Sans MS", "Courier New", "Helvetica Neue", "Helvetica", "Impact", "Lucida Grande", "Tahoma", "Times New Roman", "Verdana"
			],
			fontNamesIgnoreCheck: null,
			fontSizes: ["8", "9", "10", "11", "12", "14", "18", "24", "36"],
			colors: [
				["#000", "#424242", "#636363", "#9c9c94", "#cec6ce", "#efefef", "#f7f7f7", "#fff"],
				["#f00", "#ff9c00", "#ff0", "#0f0", "#0ff", "#00f", "#9c00ff", "#f0f"],
				["#f7c6ce", "#ffe7ce", "#ffefc6", "#d6efd6", "#cedee7", "#cee7f7", "#d6d6e7", "#e7d6de"],
				["#e79c9c", "#ffc69c", "#ffe79c", "#b5d6a5", "#a5c6ce", "#9cc6ef", "#b5a5d6", "#d6a5bd"],
				["#e76363", "#f7ad6b", "#ffd663", "#94bd7b", "#73a5ad", "#6badde", "#8c7bc6", "#c67ba5"],
				["#ce0000", "#e79439", "#efc631", "#6ba54a", "#4a7b8c", "#3984c6", "#634aa5", "#a54a7b"],
				["#9c0000", "#b56308", "#bd9400", "#397b21", "#104a5a", "#085294", "#311873", "#731842"],
				["#630000", "#7b3900", "#846300", "#295218", "#083139", "#003163", "#21104a", "#4a1031"]
			],
			colorsName: [
				["Black", "Tundora", "Dove Gray", "Star Dust", "Pale Slate", "Gallery", "Alabaster", "White"],
				["Red", "Orange Peel", "Yellow", "Green", "Cyan", "Blue", "Electric Violet", "Magenta"],
				["Azalea", "Karry", "Egg White", "Zanah", "Botticelli", "Tropical Blue", "Mischka", "Twilight"],
				["Tonys Pink", "Peach Orange", "Cream Brulee", "Sprout", "Casper", "Perano", "Cold Purple", "Careys Pink"],
				["Mandy", "Rajah", "Dandelion", "Olivine", "Gulf Stream", "Viking", "Blue Marguerite", "Puce"],
				["Guardsman Red", "Fire Bush", "Golden Dream", "Chelsea Cucumber", "Smalt Blue", "Boston Blue", "Butterfly Bush", "Cadillac"],
				["Sangria", "Mai Tai", "Buddha Gold", "Forest Green", "Eden", "Venice Blue", "Meteorite", "Claret"],
				["Rosewood", "Cinnamon", "Olive", "Parsley", "Tiber", "Midnight Blue", "Valentino", "Loulou"]
			],
			lineHeights: ["1.0", "1.2", "1.4", "1.5", "1.6", "1.8", "2.0", "3.0"],
			tableClassName: 'table table-bordered',
			insertTableMaxSize: {
				col: 10,
				row: 10
			},
			dialogsInBody: false,
			dialogsFade: false,
			disableDragAndDrop: false,
			maximumImageFileSize: null,
			codemirror: {
				mode: 'text/html',
				htmlMode: true,
				lineNumbers: true
			},
			keyMap: {
				pc: {
					"ENTER": "insertParagraph",
					"CTRL+Z": "undo",
					"CTRL+Y": "redo",
					"TAB": "tab",
					"SHIFT+TAB": "untab",
					"CTRL+B": "bold",
					"CTRL+I": "italic",
					"CTRL+U": "underline",
					"CTRL+SHIFT+S": "strikethrough",
					"CTRL+BACKSLASH": "removeFormat",
					"CTRL+SHIFT+L": "justifyLeft",
					"CTRL+SHIFT+E": "justifyCenter",
					"CTRL+SHIFT+R": "justifyRight",
					"CTRL+SHIFT+J": "justifyFull",
					"CTRL+SHIFT+NUM7": "insertUnorderedList",
					"CTRL+SHIFT+NUM8": "insertOrderedList",
					"CTRL+LEFTBRACKET": "outdent",
					"CTRL+RIGHTBRACKET": "indent",
					"CTRL+NUM0": "formatPara",
					"CTRL+NUM1": "formatH1",
					"CTRL+NUM2": "formatH2",
					"CTRL+NUM3": "formatH3",
					"CTRL+NUM4": "formatH4",
					"CTRL+NUM5": "formatH5",
					"CTRL+NUM6": "formatH6",
					"CTRL+ENTER": "insertHorizontalRule",
					"CTRL+K": "linkDialog.show"
				},
				mac: {
					"ENTER": "insertParagraph",
					"CMD+Z": "undo",
					"CMD+SHIFT+Z": "redo",
					"TAB": "tab",
					"SHIFT+TAB": "untab",
					"CMD+B": "bold",
					"CMD+I": "italic",
					"CMD+U": "underline",
					"CMD+SHIFT+S": "strikethrough",
					"CMD+BACKSLASH": "removeFormat",
					"CMD+SHIFT+L": "justifyLeft",
					"CMD+SHIFT+E": "justifyCenter",
					"CMD+SHIFT+R": "justifyRight",
					"CMD+SHIFT+J": "justifyFull",
					"CMD+SHIFT+NUM7": "insertUnorderedList",
					"CMD+SHIFT+NUM8": "insertOrderedList",
					"CMD+LEFTBRACKET": "outdent",
					"CMD+RIGHTBRACKET": "indent",
					"CMD+NUM0": "formatPara",
					"CMD+NUM1": "formatH1",
					"CMD+NUM2": "formatH2",
					"CMD+NUM3": "formatH3",
					"CMD+NUM4": "formatH4",
					"CMD+NUM5": "formatH5",
					"CMD+NUM6": "formatH6",
					"CMD+ENTER": "insertHorizontalRule",
					"CMD+K": "linkDialog.show"
				}
			},
			icons: {
				"align": "note-icon-align",
				"alignCenter": "note-icon-align-center",
				"alignJustify": "note-icon-align-justify",
				"alignLeft": "note-icon-align-left",
				"alignRight": "note-icon-align-right",
				"rowBelow": "note-icon-row-below",
				"colBefore": "note-icon-col-before",
				"colAfter": "note-icon-col-after",
				"rowAbove": "note-icon-row-above",
				"rowRemove": "note-icon-row-remove",
				"colRemove": "note-icon-col-remove",
				"indent": "note-icon-align-indent",
				"outdent": "note-icon-align-outdent",
				"arrowsAlt": "note-icon-arrows-alt",
				"bold": "note-icon-bold",
				"caret": "note-icon-caret",
				"circle": "note-icon-circle",
				"close": "note-icon-close",
				"code": "note-icon-code",
				"eraser": "note-icon-eraser",
				"font": "note-icon-font",
				"frame": "note-icon-frame",
				"italic": "note-icon-italic",
				"link": "note-icon-link",
				"unlink": "note-icon-chain-broken",
				"magic": "note-icon-magic",
				"menuCheck": "note-icon-menu-check",
				"minus": "note-icon-minus",
				"orderedlist": "note-icon-orderedlist",
				"pencil": "note-icon-pencil",
				"picture": "note-icon-picture",
				"question": "note-icon-question",
				"redo": "note-icon-redo",
				"square": "note-icon-square",
				"strikethrough": "note-icon-strikethrough",
				"subscript": "note-icon-subscript",
				"superscript": "note-icon-superscript",
				"table": "note-icon-table",
				"textHeight": "note-icon-text-height",
				"trash": "note-icon-trash",
				"underline": "note-icon-underline",
				"undo": "note-icon-undo",
				"unorderedlist": "note-icon-unorderedlist",
				"video": "note-icon-video"
			},
			placeholder: '',
			mentions: [],
			callbacks: {
				onInit: null,
				onFocus: null,
				onBlur: null,
				onBlurCodeview: null,
				onEnter: null,
				onKeyup: null,
				onKeydown: null,
				onImageUpload: null,
				onImageUploadError: null
			}
		},
		
		/**
		 *
		 *
		 * @var jQuery pageCollection
		 */
		pageCollection: $(),
		
		/**
		 * Initialization of Summernote editor wrapper.
		 *
		 * @param String selector (optional)
		 * @param Object config (optional)
		 *
		 * @return jQuery pageCollection - collection of initialized items.
		 */
		
		init: function (selector, config) {
			
			this.collection = selector && $(selector).length ? $(selector) : $();
			if (!$(selector).length) return;
			
			this.config = config && $.isPlainObject(config) ?
				$.extend({}, this._baseConfig, config) : this._baseConfig;
			
			this.config.itemSelector = selector;
			
			this.initSummernoteEditor();
			
			return this.pageCollection;
			
		},
		
		initSummernoteEditor: function () {
			//Variables
			var $self = this,
				config = $self.config,
				collection = $self.pageCollection;
			
			//Actions
			this.collection.each(function (i, el) {
				//Variables
				var $this = $(el),
					buttons = !!$this.data('buttons') ? $this.data('buttons') : config.buttons,
					lang = !!$this.data('lang') ? $this.data('lang') : config.lang,
					toolbar = !!$this.data('toolbar') ? JSON.parse(el.getAttribute('data-toolbar')) : config.toolbar,
					popover = !!$this.data('popover') ? JSON.parse(el.getAttribute('data-popover')) : config.popover,
					airMode = !!$this.data('air-mode') ? $this.data('air-mode') : config.airMode,
					width = !!$this.data('width') ? $this.data('width') : config.width,
					height = !!$this.data('height') ? $this.data('height') : config.height,
					linkTargetBlank = !!$this.data('link-target-blank') ? $this.data('link-target-blank') : config.linkTargetBlank,
					focus = !!$this.data('focus') ? $this.data('focus') : config.focus,
					tabSize = !!$this.data('tab-size') ? $this.data('tab-size') : config.tabSize,
					blockquoteBreakingLevel = !!$this.data('blockquote-breaking-level') ? $this.data('blockquote-breaking-level') : config.blockquoteBreakingLevel,
					styleWithSpan = !!$this.data('style-with-span') ? $this.data('style-with-span') : config.styleWithSpan,
					shortcuts = !!$this.data('shortcuts') ? $this.data('shortcuts') : config.shortcuts,
					textareaAutoSync = !!$this.data('textarea-auto-sync') ? $this.data('textarea-auto-sync') : config.textareaAutoSync,
					hintDirection = !!$this.data('hint-direction') ? $this.data('hint-direction') : config.hintDirection,
					tooltip = !!$this.data('tooltip') ? $this.data('tooltip') : config.tooltip,
					container = !!$this.data('container') ? $this.data('container') : config.container,
					maxTextLength = !!$this.data('max-text-length') ? $this.data('max-text-length') : config.maxTextLength,
					styleTags = !!$this.data('style-tags') ? JSON.parse(el.getAttribute('data-style-tags')) : config.styleTags,
					fontNames = !!$this.data('font-names') ? JSON.parse(el.getAttribute('data-font-names')) : config.fontNames,
					fontNamesIgnoreCheck = !!$this.data('font-names-ignore-check') ? JSON.parse(el.getAttribute('font-names-ignore-check')) : config.fontNamesIgnoreCheck,
					fontSizes = !!$this.data('font-sizes') ? JSON.parse(el.getAttribute('data-font-sizes')) : config.fontSizes,
					colors = !!$this.data('colors') ? JSON.parse(el.getAttribute('data-colors')) : config.colors,
					colorsName = !!$this.data('colors-name') ? JSON.parse(el.getAttribute('data-colors-name')) : config.colorsName,
					lineHeights = !!$this.data('line-heights') ? JSON.parse(el.getAttribute('data-line-heights')) : config.lineHeights,
					tableClassName = !!$this.data('table-class-name') ? $this.data('table-class-name') : config.tableClassName,
					insertTableMaxSize = !!$this.data('insert-table-max-size') ? JSON.parse(el.getAttribute('data-insert-table-max-size')) : config.insertTableMaxSize,
					dialogsInBody = !!$this.data('dialogs-in-body') ? $this.data('dialogs-in-body') : config.dialogsInBody,
					dialogsFade = !!$this.data('dialogs-fade') ? $this.data('dialogs-fade') : config.dialogsFade,
					disableDragAndDrop = !!$this.data('disable-drag-and-drop') ? $this.data('disable-drag-and-drop') : config.disableDragAndDrop,
					maximumImageFileSize = !!$this.data('maximum-image-file-size') ? $this.data('maximum-image-file-size') : config.maximumImageFileSize,
					codemirror = !!$this.data('codemirror') ? JSON.parse(el.getAttribute('data-codemirror')) : config.codemirror,
					keyMap = !!$this.data('key-map') ? JSON.parse(el.getAttribute('data-key-map')) : config.keyMap,
					icons = !!$this.data('icons') ? JSON.parse(el.getAttribute('data-icons')) : config.icons,
					placeholder = !!$this.data('placeholder') ? $this.data('placeholder') : config.placeholder,
					mentions = !!$this.data('mentions') ? JSON.parse(el.getAttribute('data-mentions')) : config.mentions;
				
				$this.summernote({
					buttons: buttons,
					lang: lang,
					toolbar: toolbar,
					popover: popover,
					airMode: airMode,
					width: width,
					height: height,
					linkTargetBlank: linkTargetBlank,
					focus: focus,
					tabSize: tabSize,
					blockquoteBreakingLevel: blockquoteBreakingLevel,
					styleWithSpan: styleWithSpan,
					shortcuts: shortcuts,
					textareaAutoSync: textareaAutoSync,
					hintDirection: hintDirection,
					tooltip: tooltip,
					container: container,
					maxTextLength: maxTextLength,
					styleTags: styleTags,
					fontNames: fontNames,
					fontNamesIgnoreCheck: fontNamesIgnoreCheck,
					fontSizes: fontSizes,
					colors: colors,
					colorsName: colorsName,
					lineHeights: lineHeights,
					tableClassName: tableClassName,
					insertTableMaxSize: insertTableMaxSize,
					dialogsInBody: dialogsInBody,
					dialogsFade: dialogsFade,
					disableDragAndDrop: disableDragAndDrop,
					maximumImageFileSize: maximumImageFileSize,
					codemirror: codemirror,
					keyMap: keyMap,
					icons: icons,
					placeholder: placeholder,
					callbacks: {
						onInit: config.callbacks.onInit,
						onFocus: config.callbacks.onFocus,
						onBlur: config.callbacks.onBlur,
						onBlurCodeview: config.callbacks.onBlurCodeview,
						onEnter: config.callbacks.onEnter,
						onKeyup: config.callbacks.onKeyup,
						onKeydown: config.callbacks.onKeydown,
						onImageUpload: config.callbacks.onImageUpload,
						onImageUploadError: config.callbacks.onImageUploadError
					},
					hint: !!$this.data('mentions') ? {
						mentions: mentions,
						match: /\B@(\w*)$/,
						search: function (keyword, callback) {
							callback($.grep(this.mentions, function (item) {
								return item.indexOf(keyword) == 0;
							}));
						},
						content: function (item) {
							return '@' + item;
						}
					} : false
				});
				
				//Actions
				collection = collection.add($this);
			});
		},
		
		method: function () {
			//Variables
			var $self = this,
				newArguments = [];
			
			for (var i = 1; i < arguments.length; i++) {
				
				newArguments.push(arguments[i]);
				
			}
			
			//Actions
			$self.collection.each(function (i, el) {
				//Variables
				var $this = $(el);
				
				$this.summernote.apply($this, newArguments);
			});
		}
		
	};
	
})(jQuery);
