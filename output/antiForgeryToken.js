if (typeof (window['__RequestVerificationToken']) != "undefined") {
	// Append anti forgery token for jQuery Ajax Requests
	$(document).ajaxSend(function (event, jqXHR, ajaxOptions) {

		if (typeof (ajaxOptions.type) === "undefined") {
			return;
		}

		if (ajaxOptions.type.toLowerCase() === 'post' ||
			ajaxOptions.type.toLowerCase() === 'put' ||
			ajaxOptions.type.toLowerCase() === 'delete') {
			jqXHR.setRequestHeader('X-RequestVerificationToken', window['__RequestVerificationToken']);
		}
	});

	// Append anti forgery token for all submitted forms
	(function () {
		function addToken(form) {
			if (form.length === 0) {
				return;
			}

			var formElement = form.get(0);
			if (formElement.method != null && formElement.method.toLowerCase() === "get") {
				// No need in token for get requests
				return;
			}

			var tokens = form.find('input[name="__RequestVerificationToken"]').length;
			if (tokens === 1) {
				return;
			} else if (tokens > 1) {
				// Make sure only one token is specified on a form otherwise validation will fail
				form.find('input[name="__RequestVerificationToken"]').remove();
			}

			form.append('<input name="__RequestVerificationToken" type="hidden" value="' + window['__RequestVerificationToken'] + '">');
		}

		function onFormSubmit() {
			addToken($(this));
		}

		// Delegated events used below is fastest and easiest solution. But doesn't work for some forms that use validation that stops submit propagation
		$(document).on('submit', 'form', onFormSubmit);

		// Insert token into forms directly to cover the cases when form submit event propagation is canceled
		$(document).ready(function () {
			$('form').on('submit', onFormSubmit);

			// In firefox if form is submitted by calling form.submit() and input element is added in handler for onsubmit event the input value won't be sent with form data
			// So need to make sure token is present already for such forms
			$('form').each(function() { addToken($(this)); });

			// Handle dynamically added forms 
			var mutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
			if (mutationObserver) {
				var observer = new mutationObserver(function (mutations) {
					for (var i = 0; i < mutations.length; i++) {
						var addedNodes = mutations[i].addedNodes;
						for (var j = 0; j < addedNodes.length; j++) {
							var addedNode = addedNodes[j];
							if (addedNode.nodeType === Node.ELEMENT_NODE && addedNode.tagName.toLowerCase() === 'form') {
								addToken($(addedNode));

								$(addedNode).off('submit', onFormSubmit);
								$(addedNode).on('submit', onFormSubmit);
							}
						}
					}
				});

				observer.observe(document, { childList: true, subtree: true });
			} else {
				// For older browsers use periodic checks. Not using DomNodeInserted events because they have severe perf impact
				// This will not handle if form is replaced dynamically with another form but that is unlikely to happen
				var docForms = document.forms.length;
				setInterval(function() {
					if (document.forms.length !== docForms) {
						for (var i = 0; i < document.forms.length; i++) {
							addToken($(document.forms[i]));

							$(document.forms[i]).off('submit', onFormSubmit);
							$(document.forms[i]).on('submit', onFormSubmit);
						}

						docForms = document.forms.length;
					}
				}, 500);
			}
		});
	})();
}

