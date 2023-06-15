/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
(function() {
  "use strict";
  var polyfillsLoaded = false;
  var whenLoadedFns = [];
  var allowUpgrades = false;
  var flushFn;
  function fireEvent() {
    window.WebComponents.ready = true;
    document.dispatchEvent(new CustomEvent("WebComponentsReady", {bubbles: true}));
  }
  function batchCustomElements() {
    if (window.customElements && customElements.polyfillWrapFlushCallback) {
      customElements.polyfillWrapFlushCallback(function(flushCallback) {
        flushFn = flushCallback;
        if (allowUpgrades) {
          flushFn();
        }
      });
    }
  }
  function asyncReady() {
    batchCustomElements();
    ready();
  }
  function ready() {
    if (window.HTMLTemplateElement && HTMLTemplateElement.bootstrap) {
      HTMLTemplateElement.bootstrap(window.document);
    }
    polyfillsLoaded = true;
    runWhenLoadedFns().then(fireEvent);
  }
  function runWhenLoadedFns() {
    allowUpgrades = false;
    var fnsMap = whenLoadedFns.map(function(fn) {
      return fn instanceof Function ? fn() : fn;
    });
    whenLoadedFns = [];
    return Promise.all(fnsMap).then(function() {
      allowUpgrades = true;
      flushFn && flushFn();
    }).catch(function(err) {
      console.error(err);
    });
  }
  window.WebComponents = window.WebComponents || {};
  window.WebComponents.ready = window.WebComponents.ready || false;
  window.WebComponents.waitFor = window.WebComponents.waitFor || function(waitFn) {
    if (!waitFn) {
      return;
    }
    whenLoadedFns.push(waitFn);
    if (polyfillsLoaded) {
      runWhenLoadedFns();
    }
  };
  window.WebComponents._batchCustomElements = batchCustomElements;
  var name = "webcomponents-loader.js";
  var polyfills = [];
  if (!("attachShadow" in Element.prototype && "getRootNode" in Element.prototype) || window.ShadyDOM && window.ShadyDOM.force) {
    polyfills.push("sd");
  }
  if (!window.customElements || window.customElements.forcePolyfill) {
    polyfills.push("ce");
  }
  var needsTemplate = function() {
    var t = document.createElement("template");
    if (!("content" in t)) {
      return true;
    }
    if (!(t.content.cloneNode() instanceof DocumentFragment)) {
      return true;
    }
    var t2 = document.createElement("template");
    t2.content.appendChild(document.createElement("div"));
    t.content.appendChild(t2);
    var clone = t.cloneNode(true);
    return clone.content.childNodes.length === 0 || clone.content.firstChild.content.childNodes.length === 0;
  }();
  if (!window.Promise || !Array.from || !window.URL || !window.Symbol || needsTemplate) {
    polyfills = ["sd-ce-pf"];
  }
  if (polyfills.length) {
    var url;
    var polyfillFile = "bundles/webcomponents-" + polyfills.join("-") + ".js";
    if (window.WebComponents.root) {
      url = window.WebComponents.root + polyfillFile;
    } else {
      var script = document.querySelector('script[src*="' + name + '"]');
      url = script.src.replace(name, polyfillFile);
    }
    var newScript = document.createElement("script");
    newScript.src = url;
    if (document.readyState === "loading") {
      newScript.setAttribute("onload", "window.WebComponents._batchCustomElements()");
      document.write(newScript.outerHTML);
      document.addEventListener("DOMContentLoaded", ready);
    } else {
      newScript.addEventListener("load", function() {
        asyncReady();
      });
      newScript.addEventListener("error", function() {
        throw new Error("Could not load polyfill bundle" + url);
      });
      document.head.appendChild(newScript);
    }
  } else {
    if (document.readyState === "complete") {
      polyfillsLoaded = true;
      fireEvent();
    } else {
      window.addEventListener("load", ready);
      window.addEventListener("DOMContentLoaded", function() {
        window.removeEventListener("load", ready);
        ready();
      });
    }
  }
})();
