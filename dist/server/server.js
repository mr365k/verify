module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/_project/index","2":"pages/_project/sales","3":"pages/index","4":"pages/manage","5":"pages/projects/index","6":"pages/twitter/callback"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return createSimpleFunctional; });
/* unused harmony export directiveConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addOnceEventListener; });
/* unused harmony export passiveSupported */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addPassiveEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getNestedValue; });
/* unused harmony export deepEqual */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getObjectValueByPath; });
/* unused harmony export getPropertyFromItem */
/* unused harmony export createRange */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getZIndex; });
/* unused harmony export escapeHTML */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return filterObjectOnKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return convertToUnit; });
/* unused harmony export kebabCase */
/* unused harmony export isObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return keyCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return remapInternalIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return camelize; });
/* unused harmony export arrayDiff */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return upperFirst; });
/* unused harmony export groupItems */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return wrapInArray; });
/* unused harmony export sortItems */
/* unused harmony export defaultFilter */
/* unused harmony export searchItems */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getSlotType; });
/* unused harmony export debounce */
/* unused harmony export throttle */
/* unused harmony export getPrefixedScopedSlots */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return padEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return chunk; });
/* unused harmony export humanReadableFileSize */
/* unused harmony export camelizeObjectKeys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return mergeDeep; });
/* unused harmony export fillArray */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return composedPath; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function createSimpleFunctional(c, el = 'div', name) {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: name || c.replace(/__/g, '-'),
    functional: true,
    props: {
      tag: {
        type: String,
        default: el
      }
    },

    render(h, {
      data,
      props,
      children
    }) {
      data.staticClass = `${c} ${data.staticClass || ''}`.trim();
      return h(props.tag, data, children);
    }

  });
}
function directiveConfig(binding, defaults = {}) {
  return { ...defaults,
    ...binding.modifiers,
    value: binding.arg,
    ...(binding.value || {})
  };
}
function addOnceEventListener(el, eventName, cb, options = false) {
  const once = event => {
    cb(event);
    el.removeEventListener(eventName, once, options);
  };

  el.addEventListener(eventName, once, options);
}
let passiveSupported = false;

try {
  if (typeof window !== 'undefined') {
    const testListenerOpts = Object.defineProperty({}, 'passive', {
      get: () => {
        passiveSupported = true;
      }
    });
    window.addEventListener('testListener', testListenerOpts, testListenerOpts);
    window.removeEventListener('testListener', testListenerOpts, testListenerOpts);
  }
} catch (e) {
  console.warn(e);
}
/* eslint-disable-line no-console */



function addPassiveEventListener(el, event, cb, options) {
  el.addEventListener(event, cb, passiveSupported ? options : false);
}
function getNestedValue(obj, path, fallback) {
  const last = path.length - 1;
  if (last < 0) return obj === undefined ? fallback : obj;

  for (let i = 0; i < last; i++) {
    if (obj == null) {
      return fallback;
    }

    obj = obj[path[i]];
  }

  if (obj == null) return fallback;
  return obj[path[last]] === undefined ? fallback : obj[path[last]];
}
function deepEqual(a, b) {
  if (a === b) return true;

  if (a instanceof Date && b instanceof Date && a.getTime() !== b.getTime()) {
    // If the values are Date, compare them as timestamps
    return false;
  }

  if (a !== Object(a) || b !== Object(b)) {
    // If the values aren't objects, they were already checked for equality
    return false;
  }

  const props = Object.keys(a);

  if (props.length !== Object.keys(b).length) {
    // Different number of props, don't bother to check
    return false;
  }

  return props.every(p => deepEqual(a[p], b[p]));
}
function getObjectValueByPath(obj, path, fallback) {
  // credit: http://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key#comment55278413_6491621
  if (obj == null || !path || typeof path !== 'string') return fallback;
  if (obj[path] !== undefined) return obj[path];
  path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties

  path = path.replace(/^\./, ''); // strip a leading dot

  return getNestedValue(obj, path.split('.'), fallback);
}
function getPropertyFromItem(item, property, fallback) {
  if (property == null) return item === undefined ? fallback : item;
  if (item !== Object(item)) return fallback === undefined ? item : fallback;
  if (typeof property === 'string') return getObjectValueByPath(item, property, fallback);
  if (Array.isArray(property)) return getNestedValue(item, property, fallback);
  if (typeof property !== 'function') return fallback;
  const value = property(item, fallback);
  return typeof value === 'undefined' ? fallback : value;
}
function createRange(length) {
  return Array.from({
    length
  }, (v, k) => k);
}
function getZIndex(el) {
  if (!el || el.nodeType !== Node.ELEMENT_NODE) return 0;
  const index = +window.getComputedStyle(el).getPropertyValue('z-index');
  if (!index) return getZIndex(el.parentNode);
  return index;
}
const tagsToReplace = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};
function escapeHTML(str) {
  return str.replace(/[&<>]/g, tag => tagsToReplace[tag] || tag);
}
function filterObjectOnKeys(obj, keys) {
  const filtered = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];

    if (typeof obj[key] !== 'undefined') {
      filtered[key] = obj[key];
    }
  }

  return filtered;
}
function convertToUnit(str, unit = 'px') {
  if (str == null || str === '') {
    return undefined;
  } else if (isNaN(+str)) {
    return String(str);
  } else {
    return `${Number(str)}${unit}`;
  }
}
function kebabCase(str) {
  return (str || '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
function isObject(obj) {
  return obj !== null && typeof obj === 'object';
} // KeyboardEvent.keyCode aliases

const keyCodes = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
});
/**
 * This remaps internal names like '$cancel' or '$vuetify.icons.cancel'
 * to the current name or component for that icon.
 */

function remapInternalIcon(vm, iconName) {
  // Look for custom component in the configuration
  const component = vm.$vuetify.icons.component; // Look for overrides

  if (iconName.startsWith('$')) {
    // Get the target icon name
    const iconPath = `$vuetify.icons.values.${iconName.split('$').pop().split('.').pop()}`; // Now look up icon indirection name,
    // e.g. '$vuetify.icons.values.cancel'

    const override = getObjectValueByPath(vm, iconPath, iconName);
    if (typeof override === 'string') iconName = override;else return override;
  }

  if (component == null) {
    return iconName;
  }

  return {
    component,
    props: {
      icon: iconName
    }
  };
}
function keys(o) {
  return Object.keys(o);
}
/**
 * Camelize a hyphen-delimited string.
 */

const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '');
};
/**
 * Returns the set difference of B and A, i.e. the set of elements in B but not in A
 */

function arrayDiff(a, b) {
  const diff = [];

  for (let i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) < 0) diff.push(b[i]);
  }

  return diff;
}
/**
 * Makes the first character of a string uppercase
 */

function upperFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function groupItems(items, groupBy, groupDesc) {
  const key = groupBy[0];
  const groups = [];
  let current;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const val = getObjectValueByPath(item, key, null);

    if (current !== val) {
      current = val;
      groups.push({
        name: val != null ? val : '',
        items: []
      });
    }

    groups[groups.length - 1].items.push(item);
  }

  return groups;
}
function wrapInArray(v) {
  return v != null ? Array.isArray(v) ? v : [v] : [];
}
function sortItems(items, sortBy, sortDesc, locale, customSorters) {
  if (sortBy === null || !sortBy.length) return items;
  const stringCollator = new Intl.Collator(locale, {
    sensitivity: 'accent',
    usage: 'sort'
  });
  return items.sort((a, b) => {
    for (let i = 0; i < sortBy.length; i++) {
      const sortKey = sortBy[i];
      let sortA = getObjectValueByPath(a, sortKey);
      let sortB = getObjectValueByPath(b, sortKey);

      if (sortDesc[i]) {
        [sortA, sortB] = [sortB, sortA];
      }

      if (customSorters && customSorters[sortKey]) {
        const customResult = customSorters[sortKey](sortA, sortB);
        if (!customResult) continue;
        return customResult;
      } // Check if both cannot be evaluated


      if (sortA === null && sortB === null) {
        continue;
      } // Dates should be compared numerically


      if (sortA instanceof Date && sortB instanceof Date) {
        return sortA.getTime() - sortB.getTime();
      }

      [sortA, sortB] = [sortA, sortB].map(s => (s || '').toString().toLocaleLowerCase());

      if (sortA !== sortB) {
        if (!isNaN(sortA) && !isNaN(sortB)) return Number(sortA) - Number(sortB);
        return stringCollator.compare(sortA, sortB);
      }
    }

    return 0;
  });
}
function defaultFilter(value, search, item) {
  return value != null && search != null && typeof value !== 'boolean' && value.toString().toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
}
function searchItems(items, search) {
  if (!search) return items;
  search = search.toString().toLowerCase();
  if (search.trim() === '') return items;
  return items.filter(item => Object.keys(item).some(key => defaultFilter(getObjectValueByPath(item, key), search, item)));
}
/**
 * Returns:
 *  - 'normal' for old style slots - `<template slot="default">`
 *  - 'scoped' for old style scoped slots (`<template slot="default" slot-scope="data">`) or bound v-slot (`#default="data"`)
 *  - 'v-slot' for unbound v-slot (`#default`) - only if the third param is true, otherwise counts as scoped
 */

function getSlotType(vm, name, split) {
  if (vm.$slots.hasOwnProperty(name) && vm.$scopedSlots.hasOwnProperty(name) && vm.$scopedSlots[name].name) {
    return split ? 'v-slot' : 'scoped';
  }

  if (vm.$slots.hasOwnProperty(name)) return 'normal';
  if (vm.$scopedSlots.hasOwnProperty(name)) return 'scoped';
}
function debounce(fn, delay) {
  let timeoutId = 0;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
function throttle(fn, limit) {
  let throttling = false;
  return (...args) => {
    if (!throttling) {
      throttling = true;
      setTimeout(() => throttling = false, limit);
      return fn(...args);
    }
  };
}
function getPrefixedScopedSlots(prefix, scopedSlots) {
  return Object.keys(scopedSlots).filter(k => k.startsWith(prefix)).reduce((obj, k) => {
    obj[k.replace(prefix, '')] = scopedSlots[k];
    return obj;
  }, {});
}
function getSlot(vm, name = 'default', data, optional = false) {
  if (vm.$scopedSlots.hasOwnProperty(name)) {
    return vm.$scopedSlots[name](data instanceof Function ? data() : data);
  } else if (vm.$slots.hasOwnProperty(name) && (!data || optional)) {
    return vm.$slots[name];
  }

  return undefined;
}
function clamp(value, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value));
}
function padEnd(str, length, char = '0') {
  return str + char.repeat(Math.max(0, length - str.length));
}
function chunk(str, size = 1) {
  const chunked = [];
  let index = 0;

  while (index < str.length) {
    chunked.push(str.substr(index, size));
    index += size;
  }

  return chunked;
}
function humanReadableFileSize(bytes, binary = false) {
  const base = binary ? 1024 : 1000;

  if (bytes < base) {
    return `${bytes} B`;
  }

  const prefix = binary ? ['Ki', 'Mi', 'Gi'] : ['k', 'M', 'G'];
  let unit = -1;

  while (Math.abs(bytes) >= base && unit < prefix.length - 1) {
    bytes /= base;
    ++unit;
  }

  return `${bytes.toFixed(1)} ${prefix[unit]}B`;
}
function camelizeObjectKeys(obj) {
  if (!obj) return {};
  return Object.keys(obj).reduce((o, key) => {
    o[camelize(key)] = obj[key];
    return o;
  }, {});
}
function mergeDeep(source = {}, target = {}) {
  for (const key in target) {
    const sourceProperty = source[key];
    const targetProperty = target[key]; // Only continue deep merging if
    // both properties are objects

    if (isObject(sourceProperty) && isObject(targetProperty)) {
      source[key] = mergeDeep(sourceProperty, targetProperty);
      continue;
    }

    source[key] = targetProperty;
  }

  return source;
}
function fillArray(length, obj) {
  return Array(length).fill(obj);
}
/**  Polyfill for Event.prototype.composedPath */

function composedPath(e) {
  if (e.composedPath) return e.composedPath();
  const path = [];
  let el = e.target;

  while (el) {
    path.push(el);

    if (el.tagName === 'HTML') {
      path.push(document);
      path.push(window);
      return path;
    }

    el = el.parentElement;
  }

  return path;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export consoleInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return consoleWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return consoleError; });
/* unused harmony export deprecate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return breaking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removed; });
/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* eslint-disable no-console */


function createMessage(message, vm, parent) {
  if (_framework__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].config.silent) return;

  if (parent) {
    vm = {
      _isVue: true,
      $parent: parent,
      $options: vm
    };
  }

  if (vm) {
    // Only show each message once per instance
    vm.$_alreadyWarned = vm.$_alreadyWarned || [];
    if (vm.$_alreadyWarned.includes(message)) return;
    vm.$_alreadyWarned.push(message);
  }

  return `[Vuetify] ${message}` + (vm ? generateComponentTrace(vm) : '');
}

function consoleInfo(message, vm, parent) {
  const newMessage = createMessage(message, vm, parent);
  newMessage != null && console.info(newMessage);
}
function consoleWarn(message, vm, parent) {
  const newMessage = createMessage(message, vm, parent);
  newMessage != null && console.warn(newMessage);
}
function consoleError(message, vm, parent) {
  const newMessage = createMessage(message, vm, parent);
  newMessage != null && console.error(newMessage);
}
function deprecate(original, replacement, vm, parent) {
  consoleWarn(`[UPGRADE] '${original}' is deprecated, use '${replacement}' instead.`, vm, parent);
}
function breaking(original, replacement, vm, parent) {
  consoleError(`[BREAKING] '${original}' has been removed, use '${replacement}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`, vm, parent);
}
function removed(original, vm, parent) {
  consoleWarn(`[REMOVED] '${original}' has been removed. You can safely omit it.`, vm, parent);
}
/**
 * Shamelessly stolen from vuejs/vue/blob/dev/src/core/util/debug.js
 */

const classifyRE = /(?:^|[-_])(\w)/g;

const classify = str => str.replace(classifyRE, c => c.toUpperCase()).replace(/[-_]/g, '');

function formatComponentName(vm, includeFile) {
  if (vm.$root === vm) {
    return '<Root>';
  }

  const options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm || {};
  let name = options.name || options._componentTag;
  const file = options.__file;

  if (!name && file) {
    const match = file.match(/([^/\\]+)\.vue$/);
    name = match && match[1];
  }

  return (name ? `<${classify(name)}>` : `<Anonymous>`) + (file && includeFile !== false ? ` at ${file}` : '');
}

function generateComponentTrace(vm) {
  if (vm._isVue && vm.$parent) {
    const tree = [];
    let currentRecursiveSequence = 0;

    while (vm) {
      if (tree.length > 0) {
        const last = tree[tree.length - 1];

        if (last.constructor === vm.constructor) {
          currentRecursiveSequence++;
          vm = vm.$parent;
          continue;
        } else if (currentRecursiveSequence > 0) {
          tree[tree.length - 1] = [last, currentRecursiveSequence];
          currentRecursiveSequence = 0;
        }
      }

      tree.push(vm);
      vm = vm.$parent;
    }

    return '\n\nfound in\n\n' + tree.map((vm, i) => `${i === 0 ? '---> ' : ' '.repeat(5 + i * 2)}${Array.isArray(vm) ? `${formatComponentName(vm[0])}... (${vm[1]} recursive calls)` : formatComponentName(vm)}`).join('\n');
  } else {
    return `\n\n(found in ${formatComponentName(vm)})`;
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mixins; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable max-len, import/export, no-use-before-define */

function mixins(...args) {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    mixins: args
  });
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isCssColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return colorToInt; });
/* unused harmony export classToHex */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return intToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colorToHex; });
/* unused harmony export HSVAtoRGBA */
/* unused harmony export RGBAtoHSVA */
/* unused harmony export HSVAtoHSLA */
/* unused harmony export HSLAtoHSVA */
/* unused harmony export RGBAtoCSS */
/* unused harmony export RGBtoCSS */
/* unused harmony export RGBAtoHex */
/* unused harmony export HexToRGBA */
/* unused harmony export HexToHSVA */
/* unused harmony export HSVAtoHex */
/* unused harmony export parseHex */
/* unused harmony export parseGradient */
/* unused harmony export RGBtoInt */
/* unused harmony export contrastRatio */
/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _color_transformSRGB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
// Utilities



function isCssColor(color) {
  return !!color && !!color.match(/^(#|var\(--|(rgb|hsl)a?\()/);
}
function colorToInt(color) {
  let rgb;

  if (typeof color === 'number') {
    rgb = color;
  } else if (typeof color === 'string') {
    let c = color[0] === '#' ? color.substring(1) : color;

    if (c.length === 3) {
      c = c.split('').map(char => char + char).join('');
    }

    if (c.length !== 6) {
      Object(_console__WEBPACK_IMPORTED_MODULE_0__[/* consoleWarn */ "c"])(`'${color}' is not a valid rgb color`);
    }

    rgb = parseInt(c, 16);
  } else {
    throw new TypeError(`Colors can only be numbers or strings, recieved ${color == null ? color : color.constructor.name} instead`);
  }

  if (rgb < 0) {
    Object(_console__WEBPACK_IMPORTED_MODULE_0__[/* consoleWarn */ "c"])(`Colors cannot be negative: '${color}'`);
    rgb = 0;
  } else if (rgb > 0xffffff || isNaN(rgb)) {
    Object(_console__WEBPACK_IMPORTED_MODULE_0__[/* consoleWarn */ "c"])(`'${color}' is not a valid rgb color`);
    rgb = 0xffffff;
  }

  return rgb;
}
function classToHex(color, colors, currentTheme) {
  const [colorName, colorModifier] = color.toString().trim().replace('-', '').split(' ', 2);
  let hexColor = '';

  if (colorName && colorName in colors) {
    if (colorModifier && colorModifier in colors[colorName]) {
      hexColor = colors[colorName][colorModifier];
    } else if ('base' in colors[colorName]) {
      hexColor = colors[colorName].base;
    }
  } else if (colorName && colorName in currentTheme) {
    hexColor = currentTheme[colorName];
  }

  return hexColor;
}
function intToHex(color) {
  let hexColor = color.toString(16);
  if (hexColor.length < 6) hexColor = '0'.repeat(6 - hexColor.length) + hexColor;
  return '#' + hexColor;
}
function colorToHex(color) {
  return intToHex(colorToInt(color));
}
/**
 * Converts HSVA to RGBA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 *
 * @param color HSVA color as an array [0-360, 0-1, 0-1, 0-1]
 */

function HSVAtoRGBA(hsva) {
  const {
    h,
    s,
    v,
    a
  } = hsva;

  const f = n => {
    const k = (n + h / 60) % 6;
    return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  };

  const rgb = [f(5), f(3), f(1)].map(v => Math.round(v * 255));
  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2],
    a
  };
}
/**
 * Converts RGBA to HSVA. Based on formula from https://en.wikipedia.org/wiki/HSL_and_HSV
 *
 * @param color RGBA color as an array [0-255, 0-255, 0-255, 0-1]
 */

function RGBAtoHSVA(rgba) {
  if (!rgba) return {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  };
  const r = rgba.r / 255;
  const g = rgba.g / 255;
  const b = rgba.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;

  if (max !== min) {
    if (max === r) {
      h = 60 * (0 + (g - b) / (max - min));
    } else if (max === g) {
      h = 60 * (2 + (b - r) / (max - min));
    } else if (max === b) {
      h = 60 * (4 + (r - g) / (max - min));
    }
  }

  if (h < 0) h = h + 360;
  const s = max === 0 ? 0 : (max - min) / max;
  const hsv = [h, s, max];
  return {
    h: hsv[0],
    s: hsv[1],
    v: hsv[2],
    a: rgba.a
  };
}
function HSVAtoHSLA(hsva) {
  const {
    h,
    s,
    v,
    a
  } = hsva;
  const l = v - v * s / 2;
  const sprime = l === 1 || l === 0 ? 0 : (v - l) / Math.min(l, 1 - l);
  return {
    h,
    s: sprime,
    l,
    a
  };
}
function HSLAtoHSVA(hsl) {
  const {
    h,
    s,
    l,
    a
  } = hsl;
  const v = l + s * Math.min(l, 1 - l);
  const sprime = v === 0 ? 0 : 2 - 2 * l / v;
  return {
    h,
    s: sprime,
    v,
    a
  };
}
function RGBAtoCSS(rgba) {
  return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`;
}
function RGBtoCSS(rgba) {
  return RGBAtoCSS({ ...rgba,
    a: 1
  });
}
function RGBAtoHex(rgba) {
  const toHex = v => {
    const h = Math.round(v).toString(16);
    return ('00'.substr(0, 2 - h.length) + h).toUpperCase();
  };

  return `#${[toHex(rgba.r), toHex(rgba.g), toHex(rgba.b), toHex(Math.round(rgba.a * 255))].join('')}`;
}
function HexToRGBA(hex) {
  const rgba = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* chunk */ "d"])(hex.slice(1), 2).map(c => parseInt(c, 16));
  return {
    r: rgba[0],
    g: rgba[1],
    b: rgba[2],
    a: Math.round(rgba[3] / 255 * 100) / 100
  };
}
function HexToHSVA(hex) {
  const rgb = HexToRGBA(hex);
  return RGBAtoHSVA(rgb);
}
function HSVAtoHex(hsva) {
  return RGBAtoHex(HSVAtoRGBA(hsva));
}
function parseHex(hex) {
  if (hex.startsWith('#')) {
    hex = hex.slice(1);
  }

  hex = hex.replace(/([^0-9a-f])/gi, 'F');

  if (hex.length === 3 || hex.length === 4) {
    hex = hex.split('').map(x => x + x).join('');
  }

  if (hex.length === 6) {
    hex = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* padEnd */ "r"])(hex, 8, 'F');
  } else {
    hex = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* padEnd */ "r"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* padEnd */ "r"])(hex, 6), 8, 'F');
  }

  return `#${hex}`.toUpperCase().substr(0, 9);
}
function parseGradient(gradient, colors, currentTheme) {
  return gradient.replace(/([a-z]+(\s[a-z]+-[1-5])?)(?=$|,)/gi, x => {
    return classToHex(x, colors, currentTheme) || x;
  }).replace(/(rgba\()#[0-9a-f]+(?=,)/gi, x => {
    return 'rgba(' + Object.values(HexToRGBA(parseHex(x.replace(/rgba\(/, '')))).slice(0, 3).join(',');
  });
}
function RGBtoInt(rgba) {
  return (rgba.r << 16) + (rgba.g << 8) + rgba.b;
}
/**
 * Returns the contrast ratio (1-21) between two colors.
 *
 * @param c1 First color
 * @param c2 Second color
 */

function contrastRatio(c1, c2) {
  const [, y1] = Object(_color_transformSRGB__WEBPACK_IMPORTED_MODULE_2__[/* toXYZ */ "b"])(RGBtoInt(c1));
  const [, y2] = Object(_color_transformSRGB__WEBPACK_IMPORTED_MODULE_2__[/* toXYZ */ "b"])(RGBtoInt(c2));
  return (Math.max(y1, y2) + 0.05) / (Math.min(y1, y2) + 0.05);
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fromXYZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return toXYZ; });
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 // For converting XYZ to sRGB

const srgbForwardMatrix = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.2040, 1.0570]]; // Forward gamma adjust

const srgbForwardTransform = C => C <= 0.0031308 ? C * 12.92 : 1.055 * C ** (1 / 2.4) - 0.055; // For converting sRGB to XYZ


const srgbReverseMatrix = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]]; // Reverse gamma adjust

const srgbReverseTransform = C => C <= 0.04045 ? C / 12.92 : ((C + 0.055) / 1.055) ** 2.4;

function fromXYZ(xyz) {
  const rgb = Array(3);
  const transform = srgbForwardTransform;
  const matrix = srgbForwardMatrix; // Matrix transform, then gamma adjustment

  for (let i = 0; i < 3; ++i) {
    rgb[i] = Math.round(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* clamp */ "e"])(transform(matrix[i][0] * xyz[0] + matrix[i][1] * xyz[1] + matrix[i][2] * xyz[2])) * 255);
  } // Rescale back to [0, 255]


  return (rgb[0] << 16) + (rgb[1] << 8) + (rgb[2] << 0);
}
function toXYZ(rgb) {
  const xyz = [0, 0, 0];
  const transform = srgbReverseTransform;
  const matrix = srgbReverseMatrix; // Rescale from [0, 255] to [0, 1] then adjust sRGB gamma to linear RGB

  const r = transform((rgb >> 16 & 0xff) / 255);
  const g = transform((rgb >> 8 & 0xff) / 255);
  const b = transform((rgb >> 0 & 0xff) / 255); // Matrix color space transform

  for (let i = 0; i < 3; ++i) {
    xyz[i] = matrix[i][0] * r + matrix[i][1] * g + matrix[i][2] * b;
  }

  return xyz;
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export functionalThemeClasses */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* @vue/component */

const Themeable = vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend().extend({
  name: 'themeable',

  provide() {
    return {
      theme: this.themeableProvide
    };
  },

  inject: {
    theme: {
      default: {
        isDark: false
      }
    }
  },
  props: {
    dark: {
      type: Boolean,
      default: null
    },
    light: {
      type: Boolean,
      default: null
    }
  },

  data() {
    return {
      themeableProvide: {
        isDark: false
      }
    };
  },

  computed: {
    appIsDark() {
      return this.$vuetify.theme.dark || false;
    },

    isDark() {
      if (this.dark === true) {
        // explicitly dark
        return true;
      } else if (this.light === true) {
        // explicitly light
        return false;
      } else {
        // inherit from parent, or default false if there is none
        return this.theme.isDark;
      }
    },

    themeClasses() {
      return {
        'theme--dark': this.isDark,
        'theme--light': !this.isDark
      };
    },

    /** Used by menus and dialogs, inherits from v-app instead of the parent */
    rootIsDark() {
      if (this.dark === true) {
        // explicitly dark
        return true;
      } else if (this.light === true) {
        // explicitly light
        return false;
      } else {
        // inherit from v-app
        return this.appIsDark;
      }
    },

    rootThemeClasses() {
      return {
        'theme--dark': this.rootIsDark,
        'theme--light': !this.rootIsDark
      };
    }

  },
  watch: {
    isDark: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.themeableProvide.isDark = this.isDark;
        }
      },

      immediate: true
    }
  }
});
/* harmony default export */ __webpack_exports__["a"] = (Themeable);
function functionalThemeClasses(context) {
  const vm = { ...context.props,
    ...context.injections
  };
  const isDark = Themeable.options.computed.isDark.call(vm);
  return Themeable.options.computed.themeClasses.call({
    isDark
  });
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ framework_Vuetify; });

// NAMESPACE OBJECT: ./node_modules/vuetify/lib/services/goto/easing-patterns.js
var easing_patterns_namespaceObject = {};
__webpack_require__.r(easing_patterns_namespaceObject);
__webpack_require__.d(easing_patterns_namespaceObject, "linear", function() { return linear; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInQuad", function() { return easeInQuad; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeOutQuad", function() { return easeOutQuad; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInOutQuad", function() { return easeInOutQuad; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInCubic", function() { return easeInCubic; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeOutCubic", function() { return easeOutCubic; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInOutCubic", function() { return easeInOutCubic; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInQuart", function() { return easeInQuart; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeOutQuart", function() { return easeOutQuart; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInOutQuart", function() { return easeInOutQuart; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInQuint", function() { return easeInQuint; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeOutQuint", function() { return easeOutQuint; });
__webpack_require__.d(easing_patterns_namespaceObject, "easeInOutQuint", function() { return easeInOutQuint; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/install.js


function install(Vue, args = {}) {
  if (install.installed) return;
  install.installed = true;

  if (external_vue_default.a !== Vue) {
    Object(console["b" /* consoleError */])(`Multiple instances of Vue detected
See https://github.com/vuetifyjs/vuetify/issues/4068

If you're seeing "$attrs is readonly", it's caused by this`);
  }

  const components = args.components || {};
  const directives = args.directives || {};

  for (const name in directives) {
    const directive = directives[name];
    Vue.directive(name, directive);
  }

  (function registerComponents(components) {
    if (components) {
      for (const key in components) {
        const component = components[key];

        if (component && !registerComponents(component.$_vuetify_subcomponents)) {
          Vue.component(key, component);
        }
      }

      return true;
    }

    return false;
  })(components); // Used to avoid multiple mixins being setup
  // when in dev mode and hot module reload
  // https://github.com/vuejs/vue/issues/5089#issuecomment-284260111


  if (Vue.$_vuetify_installed) return;
  Vue.$_vuetify_installed = true;
  Vue.mixin({
    beforeCreate() {
      const options = this.$options;

      if (options.vuetify) {
        options.vuetify.init(this, this.$ssrContext);
        this.$vuetify = Vue.observable(options.vuetify.framework);
      } else {
        this.$vuetify = options.parent && options.parent.$vuetify || this;
      }
    },

    beforeMount() {
      // @ts-ignore
      if (this.$options.vuetify && this.$el && this.$el.hasAttribute('data-server-rendered')) {
        // @ts-ignore
        this.$vuetify.isHydrating = true; // @ts-ignore

        this.$vuetify.breakpoint.update(true);
      }
    },

    mounted() {
      // @ts-ignore
      if (this.$options.vuetify && this.$vuetify.isHydrating) {
        // @ts-ignore
        this.$vuetify.isHydrating = false; // @ts-ignore

        this.$vuetify.breakpoint.update();
      }
    }

  });
}
// EXTERNAL MODULE: ./node_modules/vuetify/src/styles/main.sass
var main = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/locale/en.js
/* harmony default export */ var en = ({
  badge: 'Badge',
  close: 'Close',
  dataIterator: {
    noResultsText: 'No matching records found',
    loadingText: 'Loading items...'
  },
  dataTable: {
    itemsPerPageText: 'Rows per page:',
    ariaLabel: {
      sortDescending: 'Sorted descending.',
      sortAscending: 'Sorted ascending.',
      sortNone: 'Not sorted.',
      activateNone: 'Activate to remove sorting.',
      activateDescending: 'Activate to sort descending.',
      activateAscending: 'Activate to sort ascending.'
    },
    sortBy: 'Sort by'
  },
  dataFooter: {
    itemsPerPageText: 'Items per page:',
    itemsPerPageAll: 'All',
    nextPage: 'Next page',
    prevPage: 'Previous page',
    firstPage: 'First page',
    lastPage: 'Last page',
    pageText: '{0}-{1} of {2}'
  },
  datePicker: {
    itemsSelected: '{0} selected',
    nextMonthAriaLabel: 'Next month',
    nextYearAriaLabel: 'Next year',
    prevMonthAriaLabel: 'Previous month',
    prevYearAriaLabel: 'Previous year'
  },
  noDataText: 'No data available',
  carousel: {
    prev: 'Previous visual',
    next: 'Next visual',
    ariaLabel: {
      delimiter: 'Carousel slide {0} of {1}'
    }
  },
  calendar: {
    moreEvents: '{0} more'
  },
  fileInput: {
    counter: '{0} files',
    counterSize: '{0} files ({1} in total)'
  },
  timePicker: {
    am: 'AM',
    pm: 'PM'
  },
  pagination: {
    ariaLabel: {
      wrapper: 'Pagination Navigation',
      next: 'Next page',
      previous: 'Previous page',
      page: 'Goto Page {0}',
      currentPage: 'Current Page, Page {0}'
    }
  },
  rating: {
    ariaLabel: {
      icon: 'Rating {0} of {1}'
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vuetify/lib/presets/default/index.js
// Styles
 // Locale


const default_preset = {
  breakpoint: {
    // TODO: update to MD2 spec in v3 - 1280
    mobileBreakpoint: 1264,
    scrollBarWidth: 16,
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920
    }
  },
  icons: {
    // TODO: remove v3
    iconfont: 'mdi',
    values: {}
  },
  lang: {
    current: 'en',
    locales: {
      en: en
    },
    // Default translator exists in lang service
    t: undefined
  },
  rtl: false,
  theme: {
    dark: false,
    default: 'light',
    disable: false,
    options: {
      cspNonce: undefined,
      customProperties: undefined,
      minifyTheme: undefined,
      themeCache: undefined,
      variations: true
    },
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00'
      },
      dark: {
        primary: '#2196F3',
        secondary: '#424242',
        accent: '#FF4081',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00'
      }
    }
  }
};
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/service/index.js
class Service {
  constructor() {
    this.framework = {};
  }

  init(root, ssrContext) {}

}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/presets/index.js
// Preset
 // Utilities




class presets_Presets extends Service {
  constructor(parentPreset, parent) {
    super(); // The default preset

    const defaultPreset = Object(helpers["q" /* mergeDeep */])({}, default_preset); // The user provided preset

    const {
      userPreset
    } = parent; // The user provided global preset

    const {
      preset: globalPreset = {},
      ...preset
    } = userPreset;

    if (globalPreset.preset != null) {
      Object(console["c" /* consoleWarn */])('Global presets do not support the **preset** option, it can be safely omitted');
    }

    parent.preset = Object(helpers["q" /* mergeDeep */])(Object(helpers["q" /* mergeDeep */])(defaultPreset, globalPreset), preset);
  }

}
presets_Presets.property = 'presets';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/application/index.js
// Extensions

class application_Application extends Service {
  constructor() {
    super(...arguments);
    this.bar = 0;
    this.top = 0;
    this.left = 0;
    this.insetFooter = 0;
    this.right = 0;
    this.bottom = 0;
    this.footer = 0;
    this.application = {
      bar: {},
      top: {},
      left: {},
      insetFooter: {},
      right: {},
      bottom: {},
      footer: {}
    };
  }

  register(uid, location, size) {
    this.application[location][uid] = size;
    this.update(location);
  }

  unregister(uid, location) {
    if (this.application[location][uid] == null) return;
    delete this.application[location][uid];
    this.update(location);
  }

  update(location) {
    this[location] = Object.values(this.application[location]).reduce((acc, cur) => acc + cur, 0);
  }

}
application_Application.property = 'application';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/breakpoint/index.js
// Extensions

class breakpoint_Breakpoint extends Service {
  constructor(preset) {
    super(); // Public

    this.xs = false;
    this.sm = false;
    this.md = false;
    this.lg = false;
    this.xl = false;
    this.xsOnly = false;
    this.smOnly = false;
    this.smAndDown = false;
    this.smAndUp = false;
    this.mdOnly = false;
    this.mdAndDown = false;
    this.mdAndUp = false;
    this.lgOnly = false;
    this.lgAndDown = false;
    this.lgAndUp = false;
    this.xlOnly = false; // Value is xs to match v2.x functionality

    this.name = 'xs';
    this.height = 0;
    this.width = 0; // TODO: Add functionality to detect this dynamically in v3
    // Value is true to match v2.x functionality

    this.mobile = true;
    this.resizeTimeout = 0;
    const {
      mobileBreakpoint,
      scrollBarWidth,
      thresholds
    } = preset[breakpoint_Breakpoint.property];
    this.mobileBreakpoint = mobileBreakpoint;
    this.scrollBarWidth = scrollBarWidth;
    this.thresholds = thresholds;
  }

  init() {
    this.update();
    /* istanbul ignore if */

    if (typeof window === 'undefined') return;
    window.addEventListener('resize', this.onResize.bind(this), {
      passive: true
    });
  }
  /* eslint-disable-next-line max-statements */


  update(ssr = false) {
    const height = ssr ? 0 : this.getClientHeight();
    const width = ssr ? 0 : this.getClientWidth();
    const xs = width < this.thresholds.xs;
    const sm = width < this.thresholds.sm && !xs;
    const md = width < this.thresholds.md - this.scrollBarWidth && !(sm || xs);
    const lg = width < this.thresholds.lg - this.scrollBarWidth && !(md || sm || xs);
    const xl = width >= this.thresholds.lg - this.scrollBarWidth;
    this.height = height;
    this.width = width;
    this.xs = xs;
    this.sm = sm;
    this.md = md;
    this.lg = lg;
    this.xl = xl;
    this.xsOnly = xs;
    this.smOnly = sm;
    this.smAndDown = (xs || sm) && !(md || lg || xl);
    this.smAndUp = !xs && (sm || md || lg || xl);
    this.mdOnly = md;
    this.mdAndDown = (xs || sm || md) && !(lg || xl);
    this.mdAndUp = !(xs || sm) && (md || lg || xl);
    this.lgOnly = lg;
    this.lgAndDown = (xs || sm || md || lg) && !xl;
    this.lgAndUp = !(xs || sm || md) && (lg || xl);
    this.xlOnly = xl;

    switch (true) {
      case xs:
        this.name = 'xs';
        break;

      case sm:
        this.name = 'sm';
        break;

      case md:
        this.name = 'md';
        break;

      case lg:
        this.name = 'lg';
        break;

      default:
        this.name = 'xl';
        break;
    }

    if (typeof this.mobileBreakpoint === 'number') {
      this.mobile = width < parseInt(this.mobileBreakpoint, 10);
      return;
    }

    const breakpoints = {
      xs: 0,
      sm: 1,
      md: 2,
      lg: 3,
      xl: 4
    };
    const current = breakpoints[this.name];
    const max = breakpoints[this.mobileBreakpoint];
    this.mobile = current <= max;
  }

  onResize() {
    clearTimeout(this.resizeTimeout); // Added debounce to match what
    // v-resize used to do but was
    // removed due to a memory leak
    // https://github.com/vuetifyjs/vuetify/pull/2997

    this.resizeTimeout = window.setTimeout(this.update.bind(this), 200);
  } // Cross-browser support as described in:
  // https://stackoverflow.com/questions/1248081


  getClientWidth() {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return 0; // SSR

    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  getClientHeight() {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return 0; // SSR

    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

}
breakpoint_Breakpoint.property = 'breakpoint';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/goto/easing-patterns.js
// linear
const linear = t => t; // accelerating from zero velocity

const easeInQuad = t => t ** 2; // decelerating to zero velocity

const easeOutQuad = t => t * (2 - t); // acceleration until halfway, then deceleration

const easeInOutQuad = t => t < 0.5 ? 2 * t ** 2 : -1 + (4 - 2 * t) * t; // accelerating from zero velocity

const easeInCubic = t => t ** 3; // decelerating to zero velocity

const easeOutCubic = t => --t ** 3 + 1; // acceleration until halfway, then deceleration

const easeInOutCubic = t => t < 0.5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; // accelerating from zero velocity

const easeInQuart = t => t ** 4; // decelerating to zero velocity

const easeOutQuart = t => 1 - --t ** 4; // acceleration until halfway, then deceleration

const easeInOutQuart = t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t; // accelerating from zero velocity

const easeInQuint = t => t ** 5; // decelerating to zero velocity

const easeOutQuint = t => 1 + --t ** 5; // acceleration until halfway, then deceleration

const easeInOutQuint = t => t < 0.5 ? 16 * t ** 5 : 1 + 16 * --t ** 5;
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/goto/util.js
// Return target's cumulative offset from the top
function getOffset(target) {
  if (typeof target === 'number') {
    return target;
  }

  let el = $(target);

  if (!el) {
    throw typeof target === 'string' ? new Error(`Target element "${target}" not found.`) : new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${type(target)} instead.`);
  }

  let totalOffset = 0;

  while (el) {
    totalOffset += el.offsetTop;
    el = el.offsetParent;
  }

  return totalOffset;
}
function getContainer(container) {
  const el = $(container);
  if (el) return el;
  throw typeof container === 'string' ? new Error(`Container element "${container}" not found.`) : new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${type(container)} instead.`);
}

function type(el) {
  return el == null ? el : el.constructor.name;
}

function $(el) {
  if (typeof el === 'string') {
    return document.querySelector(el);
  } else if (el && el._isVue) {
    return el.$el;
  } else if (el instanceof HTMLElement) {
    return el;
  } else {
    return null;
  }
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/goto/index.js
// Extensions
 // Utilities



function goTo(_target, _settings = {}) {
  const settings = {
    container: document.scrollingElement || document.body || document.documentElement,
    duration: 500,
    offset: 0,
    easing: 'easeInOutCubic',
    appOffset: true,
    ..._settings
  };
  const container = getContainer(settings.container);
  /* istanbul ignore else */

  if (settings.appOffset && goTo.framework.application) {
    const isDrawer = container.classList.contains('v-navigation-drawer');
    const isClipped = container.classList.contains('v-navigation-drawer--clipped');
    const {
      bar,
      top
    } = goTo.framework.application;
    settings.offset += bar;
    /* istanbul ignore else */

    if (!isDrawer || isClipped) settings.offset += top;
  }

  const startTime = performance.now();
  let targetLocation;

  if (typeof _target === 'number') {
    targetLocation = getOffset(_target) - settings.offset;
  } else {
    targetLocation = getOffset(_target) - getOffset(container) - settings.offset;
  }

  const startLocation = container.scrollTop;
  if (targetLocation === startLocation) return Promise.resolve(targetLocation);
  const ease = typeof settings.easing === 'function' ? settings.easing : easing_patterns_namespaceObject[settings.easing];
  /* istanbul ignore else */

  if (!ease) throw new TypeError(`Easing function "${settings.easing}" not found.`); // Cannot be tested properly in jsdom

  /* istanbul ignore next */

  return new Promise(resolve => requestAnimationFrame(function step(currentTime) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.abs(settings.duration ? Math.min(timeElapsed / settings.duration, 1) : 1);
    container.scrollTop = Math.floor(startLocation + (targetLocation - startLocation) * ease(progress));
    const clientHeight = container === document.body ? document.documentElement.clientHeight : container.clientHeight;
    const reachBottom = clientHeight + container.scrollTop >= container.scrollHeight;

    if (progress === 1 || // Need to go lower but reach bottom
    targetLocation > container.scrollTop && reachBottom) {
      return resolve(targetLocation);
    }

    requestAnimationFrame(step);
  }));
}
goTo.framework = {};

goTo.init = () => {};

class goto_Goto extends Service {
  constructor() {
    super();
    return goTo;
  }

}
goto_Goto.property = 'goTo';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/mdi-svg.js
const icons = {
  complete: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z',
  cancel: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
  close: 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',
  delete: 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z',
  clear: 'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z',
  success: 'M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z',
  info: 'M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z',
  warning: 'M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z',
  error: 'M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z',
  prev: 'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z',
  next: 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z',
  checkboxOn: 'M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z',
  checkboxOff: 'M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z',
  checkboxIndeterminate: 'M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z',
  delimiter: 'M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z',
  sort: 'M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z',
  expand: 'M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z',
  menu: 'M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z',
  subgroup: 'M7,10L12,15L17,10H7Z',
  dropdown: 'M7,10L12,15L17,10H7Z',
  radioOn: 'M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z',
  radioOff: 'M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z',
  edit: 'M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z',
  ratingEmpty: 'M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z',
  ratingFull: 'M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z',
  ratingHalf: 'M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z',
  loading: 'M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12',
  first: 'M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z',
  last: 'M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z',
  unfold: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z',
  file: 'M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z',
  plus: 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z',
  minus: 'M19,13H5V11H19V13Z'
};
/* harmony default export */ var mdi_svg = (icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/md.js
const md_icons = {
  complete: 'check',
  cancel: 'cancel',
  close: 'close',
  delete: 'cancel',
  clear: 'clear',
  success: 'check_circle',
  info: 'info',
  warning: 'priority_high',
  error: 'warning',
  prev: 'chevron_left',
  next: 'chevron_right',
  checkboxOn: 'check_box',
  checkboxOff: 'check_box_outline_blank',
  checkboxIndeterminate: 'indeterminate_check_box',
  delimiter: 'fiber_manual_record',
  sort: 'arrow_upward',
  expand: 'keyboard_arrow_down',
  menu: 'menu',
  subgroup: 'arrow_drop_down',
  dropdown: 'arrow_drop_down',
  radioOn: 'radio_button_checked',
  radioOff: 'radio_button_unchecked',
  edit: 'edit',
  ratingEmpty: 'star_border',
  ratingFull: 'star',
  ratingHalf: 'star_half',
  loading: 'cached',
  first: 'first_page',
  last: 'last_page',
  unfold: 'unfold_more',
  file: 'attach_file',
  plus: 'add',
  minus: 'remove'
};
/* harmony default export */ var md = (md_icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/mdi.js
const mdi_icons = {
  complete: 'mdi-check',
  cancel: 'mdi-close-circle',
  close: 'mdi-close',
  delete: 'mdi-close-circle',
  clear: 'mdi-close',
  success: 'mdi-check-circle',
  info: 'mdi-information',
  warning: 'mdi-exclamation',
  error: 'mdi-alert',
  prev: 'mdi-chevron-left',
  next: 'mdi-chevron-right',
  checkboxOn: 'mdi-checkbox-marked',
  checkboxOff: 'mdi-checkbox-blank-outline',
  checkboxIndeterminate: 'mdi-minus-box',
  delimiter: 'mdi-circle',
  sort: 'mdi-arrow-up',
  expand: 'mdi-chevron-down',
  menu: 'mdi-menu',
  subgroup: 'mdi-menu-down',
  dropdown: 'mdi-menu-down',
  radioOn: 'mdi-radiobox-marked',
  radioOff: 'mdi-radiobox-blank',
  edit: 'mdi-pencil',
  ratingEmpty: 'mdi-star-outline',
  ratingFull: 'mdi-star',
  ratingHalf: 'mdi-star-half-full',
  loading: 'mdi-cached',
  first: 'mdi-page-first',
  last: 'mdi-page-last',
  unfold: 'mdi-unfold-more-horizontal',
  file: 'mdi-paperclip',
  plus: 'mdi-plus',
  minus: 'mdi-minus'
};
/* harmony default export */ var mdi = (mdi_icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/fa.js
const fa_icons = {
  complete: 'fas fa-check',
  cancel: 'fas fa-times-circle',
  close: 'fas fa-times',
  delete: 'fas fa-times-circle',
  clear: 'fas fa-times-circle',
  success: 'fas fa-check-circle',
  info: 'fas fa-info-circle',
  warning: 'fas fa-exclamation',
  error: 'fas fa-exclamation-triangle',
  prev: 'fas fa-chevron-left',
  next: 'fas fa-chevron-right',
  checkboxOn: 'fas fa-check-square',
  checkboxOff: 'far fa-square',
  checkboxIndeterminate: 'fas fa-minus-square',
  delimiter: 'fas fa-circle',
  sort: 'fas fa-sort-up',
  expand: 'fas fa-chevron-down',
  menu: 'fas fa-bars',
  subgroup: 'fas fa-caret-down',
  dropdown: 'fas fa-caret-down',
  radioOn: 'far fa-dot-circle',
  radioOff: 'far fa-circle',
  edit: 'fas fa-edit',
  ratingEmpty: 'far fa-star',
  ratingFull: 'fas fa-star',
  ratingHalf: 'fas fa-star-half',
  loading: 'fas fa-sync',
  first: 'fas fa-step-backward',
  last: 'fas fa-step-forward',
  unfold: 'fas fa-arrows-alt-v',
  file: 'fas fa-paperclip',
  plus: 'fas fa-plus',
  minus: 'fas fa-minus'
};
/* harmony default export */ var fa = (fa_icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/fa4.js
const fa4_icons = {
  complete: 'fa fa-check',
  cancel: 'fa fa-times-circle',
  close: 'fa fa-times',
  delete: 'fa fa-times-circle',
  clear: 'fa fa-times-circle',
  success: 'fa fa-check-circle',
  info: 'fa fa-info-circle',
  warning: 'fa fa-exclamation',
  error: 'fa fa-exclamation-triangle',
  prev: 'fa fa-chevron-left',
  next: 'fa fa-chevron-right',
  checkboxOn: 'fa fa-check-square',
  checkboxOff: 'fa fa-square-o',
  checkboxIndeterminate: 'fa fa-minus-square',
  delimiter: 'fa fa-circle',
  sort: 'fa fa-sort-up',
  expand: 'fa fa-chevron-down',
  menu: 'fa fa-bars',
  subgroup: 'fa fa-caret-down',
  dropdown: 'fa fa-caret-down',
  radioOn: 'fa fa-dot-circle-o',
  radioOff: 'fa fa-circle-o',
  edit: 'fa fa-pencil',
  ratingEmpty: 'fa fa-star-o',
  ratingFull: 'fa fa-star',
  ratingHalf: 'fa fa-star-half-o',
  loading: 'fa fa-refresh',
  first: 'fa fa-step-backward',
  last: 'fa fa-step-forward',
  unfold: 'fa fa-angle-double-down',
  file: 'fa fa-paperclip',
  plus: 'fa fa-plus',
  minus: 'fa fa-minus'
};
/* harmony default export */ var fa4 = (fa4_icons);
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/fa-svg.js

function convertToComponentDeclarations(component, iconSet) {
  const result = {};

  for (const key in iconSet) {
    result[key] = {
      component,
      props: {
        icon: iconSet[key].split(' fa-')
      }
    };
  }

  return result;
}
/* harmony default export */ var fa_svg = (convertToComponentDeclarations('font-awesome-icon', fa));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/presets/index.js






/* harmony default export */ var presets = (Object.freeze({
  mdiSvg: mdi_svg,
  md: md,
  mdi: mdi,
  fa: fa,
  fa4: fa4,
  faSvg: fa_svg
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/icons/index.js
// Extensions
 // Utilities

 // Presets


class icons_Icons extends Service {
  constructor(preset) {
    super();
    const {
      iconfont,
      values,
      component
    } = preset[icons_Icons.property];
    this.component = component;
    this.iconfont = iconfont;
    this.values = Object(helpers["q" /* mergeDeep */])(presets[iconfont], values);
  }

}
icons_Icons.property = 'icons';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/lang/index.js
// Extensions
 // Utilities



const LANG_PREFIX = '$vuetify.';
const fallback = Symbol('Lang fallback');

function getTranslation(locale, key, usingDefault = false, defaultLocale) {
  const shortKey = key.replace(LANG_PREFIX, '');
  let translation = Object(helpers["k" /* getObjectValueByPath */])(locale, shortKey, fallback);

  if (translation === fallback) {
    if (usingDefault) {
      Object(console["b" /* consoleError */])(`Translation key "${shortKey}" not found in fallback`);
      translation = key;
    } else {
      Object(console["c" /* consoleWarn */])(`Translation key "${shortKey}" not found, falling back to default`);
      translation = getTranslation(defaultLocale, key, true, defaultLocale);
    }
  }

  return translation;
}

class lang_Lang extends Service {
  constructor(preset) {
    super();
    this.defaultLocale = 'en';
    const {
      current,
      locales,
      t
    } = preset[lang_Lang.property];
    this.current = current;
    this.locales = locales;
    this.translator = t || this.defaultTranslator;
  }

  currentLocale(key) {
    const translation = this.locales[this.current];
    const defaultLocale = this.locales[this.defaultLocale];
    return getTranslation(translation, key, false, defaultLocale);
  }

  t(key, ...params) {
    if (!key.startsWith(LANG_PREFIX)) return this.replace(key, params);
    return this.translator(key, ...params);
  }

  defaultTranslator(key, ...params) {
    return this.replace(this.currentLocale(key), params);
  }

  replace(str, params) {
    return str.replace(/\{(\d+)\}/g, (match, index) => {
      /* istanbul ignore next */
      return String(params[+index]);
    });
  }

}
lang_Lang.property = 'lang';
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/colorUtils.js
var colorUtils = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/color/transformSRGB.js
var transformSRGB = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/util/color/transformCIELAB.js
const delta = 0.20689655172413793; // 6÷29

const cielabForwardTransform = t => t > delta ** 3 ? Math.cbrt(t) : t / (3 * delta ** 2) + 4 / 29;

const cielabReverseTransform = t => t > delta ? t ** 3 : 3 * delta ** 2 * (t - 4 / 29);

function fromXYZ(xyz) {
  const transform = cielabForwardTransform;
  const transformedY = transform(xyz[1]);
  return [116 * transformedY - 16, 500 * (transform(xyz[0] / 0.95047) - transformedY), 200 * (transformedY - transform(xyz[2] / 1.08883))];
}
function toXYZ(lab) {
  const transform = cielabReverseTransform;
  const Ln = (lab[0] + 16) / 116;
  return [transform(Ln + lab[1] / 500) * 0.95047, transform(Ln), transform(Ln - lab[2] / 200) * 1.08883];
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/theme/utils.js




function parse(theme, isItem = false, variations = true) {
  const {
    anchor,
    ...variant
  } = theme;
  const colors = Object.keys(variant);
  const parsedTheme = {};

  for (let i = 0; i < colors.length; ++i) {
    const name = colors[i];
    const value = theme[name];
    if (value == null) continue;

    if (!variations) {
      parsedTheme[name] = {
        base: Object(colorUtils["c" /* intToHex */])(Object(colorUtils["b" /* colorToInt */])(value))
      };
    } else if (isItem) {
      /* istanbul ignore else */
      if (name === 'base' || name.startsWith('lighten') || name.startsWith('darken')) {
        parsedTheme[name] = Object(colorUtils["a" /* colorToHex */])(value);
      }
    } else if (typeof value === 'object') {
      parsedTheme[name] = parse(value, true, variations);
    } else {
      parsedTheme[name] = genVariations(name, Object(colorUtils["b" /* colorToInt */])(value));
    }
  }

  if (!isItem) {
    parsedTheme.anchor = anchor || parsedTheme.base || parsedTheme.primary.base;
  }

  return parsedTheme;
}
/**
 * Generate the CSS for a base color (.primary)
 */

const genBaseColor = (name, value) => {
  return `
.v-application .${name} {
  background-color: ${value} !important;
  border-color: ${value} !important;
}
.v-application .${name}--text {
  color: ${value} !important;
  caret-color: ${value} !important;
}`;
};
/**
 * Generate the CSS for a variant color (.primary.darken-2)
 */


const genVariantColor = (name, variant, value) => {
  const [type, n] = variant.split(/(\d)/, 2);
  return `
.v-application .${name}.${type}-${n} {
  background-color: ${value} !important;
  border-color: ${value} !important;
}
.v-application .${name}--text.text--${type}-${n} {
  color: ${value} !important;
  caret-color: ${value} !important;
}`;
};

const genColorVariableName = (name, variant = 'base') => `--v-${name}-${variant}`;

const genColorVariable = (name, variant = 'base') => `var(${genColorVariableName(name, variant)})`;

function genStyles(theme, cssVar = false) {
  const {
    anchor,
    ...variant
  } = theme;
  const colors = Object.keys(variant);
  if (!colors.length) return '';
  let variablesCss = '';
  let css = '';
  const aColor = cssVar ? genColorVariable('anchor') : anchor;
  css += `.v-application a { color: ${aColor}; }`;
  cssVar && (variablesCss += `  ${genColorVariableName('anchor')}: ${anchor};\n`);

  for (let i = 0; i < colors.length; ++i) {
    const name = colors[i];
    const value = theme[name];
    css += genBaseColor(name, cssVar ? genColorVariable(name) : value.base);
    cssVar && (variablesCss += `  ${genColorVariableName(name)}: ${value.base};\n`);
    const variants = Object(helpers["p" /* keys */])(value);

    for (let i = 0; i < variants.length; ++i) {
      const variant = variants[i];
      const variantValue = value[variant];
      if (variant === 'base') continue;
      css += genVariantColor(name, variant, cssVar ? genColorVariable(name, variant) : variantValue);
      cssVar && (variablesCss += `  ${genColorVariableName(name, variant)}: ${variantValue};\n`);
    }
  }

  if (cssVar) {
    variablesCss = `:root {\n${variablesCss}}\n\n`;
  }

  return variablesCss + css;
}
function genVariations(name, value) {
  const values = {
    base: Object(colorUtils["c" /* intToHex */])(value)
  };

  for (let i = 5; i > 0; --i) {
    values[`lighten${i}`] = Object(colorUtils["c" /* intToHex */])(lighten(value, i));
  }

  for (let i = 1; i <= 4; ++i) {
    values[`darken${i}`] = Object(colorUtils["c" /* intToHex */])(darken(value, i));
  }

  return values;
}
function lighten(value, amount) {
  const lab = fromXYZ(transformSRGB["b" /* toXYZ */](value));
  lab[0] = lab[0] + amount * 10;
  return transformSRGB["a" /* fromXYZ */](toXYZ(lab));
}
function darken(value, amount) {
  const lab = fromXYZ(transformSRGB["b" /* toXYZ */](value));
  lab[0] = lab[0] - amount * 10;
  return transformSRGB["a" /* fromXYZ */](toXYZ(lab));
}
// CONCATENATED MODULE: ./node_modules/vuetify/lib/services/theme/index.js
/* eslint-disable no-multi-spaces */
// Extensions
 // Utilities


 // Types


class theme_Theme extends Service {
  constructor(preset) {
    super();
    this.disabled = false;
    this.isDark = null;
    this.unwatch = null;
    this.vueMeta = null;
    const {
      dark,
      disable,
      options,
      themes
    } = preset[theme_Theme.property];
    this.dark = Boolean(dark);
    this.defaults = this.themes = themes;
    this.options = options;

    if (disable) {
      this.disabled = true;
      return;
    }

    this.themes = {
      dark: this.fillVariant(themes.dark, true),
      light: this.fillVariant(themes.light, false)
    };
  } // When setting css, check for element and apply new values

  /* eslint-disable-next-line accessor-pairs */


  set css(val) {
    if (this.vueMeta) {
      if (this.isVueMeta23) {
        this.applyVueMeta23();
      }

      return;
    }

    this.checkOrCreateStyleElement() && (this.styleEl.innerHTML = val);
  }

  set dark(val) {
    const oldDark = this.isDark;
    this.isDark = val; // Only apply theme after dark
    // has already been set before

    oldDark != null && this.applyTheme();
  }

  get dark() {
    return Boolean(this.isDark);
  } // Apply current theme default
  // only called on client side


  applyTheme() {
    if (this.disabled) return this.clearCss();
    this.css = this.generatedStyles;
  }

  clearCss() {
    this.css = '';
  } // Initialize theme for SSR and SPA
  // Attach to ssrContext head or
  // apply new theme to document


  init(root, ssrContext) {
    if (this.disabled) return;
    /* istanbul ignore else */

    if (root.$meta) {
      this.initVueMeta(root);
    } else if (ssrContext) {
      this.initSSR(ssrContext);
    }

    this.initTheme(root);
  } // Allows for you to set target theme


  setTheme(theme, value) {
    this.themes[theme] = Object.assign(this.themes[theme], value);
    this.applyTheme();
  } // Reset theme defaults


  resetThemes() {
    this.themes.light = Object.assign({}, this.defaults.light);
    this.themes.dark = Object.assign({}, this.defaults.dark);
    this.applyTheme();
  } // Check for existence of style element


  checkOrCreateStyleElement() {
    this.styleEl = document.getElementById('vuetify-theme-stylesheet');
    /* istanbul ignore next */

    if (this.styleEl) return true;
    this.genStyleElement(); // If doesn't have it, create it

    return Boolean(this.styleEl);
  }

  fillVariant(theme = {}, dark) {
    const defaultTheme = this.themes[dark ? 'dark' : 'light'];
    return Object.assign({}, defaultTheme, theme);
  } // Generate the style element
  // if applicable


  genStyleElement() {
    /* istanbul ignore if */
    if (typeof document === 'undefined') return;
    /* istanbul ignore next */

    this.styleEl = document.createElement('style');
    this.styleEl.type = 'text/css';
    this.styleEl.id = 'vuetify-theme-stylesheet';

    if (this.options.cspNonce) {
      this.styleEl.setAttribute('nonce', this.options.cspNonce);
    }

    document.head.appendChild(this.styleEl);
  }

  initVueMeta(root) {
    this.vueMeta = root.$meta();

    if (this.isVueMeta23) {
      // vue-meta needs to apply after mounted()
      root.$nextTick(() => {
        this.applyVueMeta23();
      });
      return;
    }

    const metaKeyName = typeof this.vueMeta.getOptions === 'function' ? this.vueMeta.getOptions().keyName : 'metaInfo';
    const metaInfo = root.$options[metaKeyName] || {};

    root.$options[metaKeyName] = () => {
      metaInfo.style = metaInfo.style || [];
      const vuetifyStylesheet = metaInfo.style.find(s => s.id === 'vuetify-theme-stylesheet');

      if (!vuetifyStylesheet) {
        metaInfo.style.push({
          cssText: this.generatedStyles,
          type: 'text/css',
          id: 'vuetify-theme-stylesheet',
          nonce: (this.options || {}).cspNonce
        });
      } else {
        vuetifyStylesheet.cssText = this.generatedStyles;
      }

      return metaInfo;
    };
  }

  applyVueMeta23() {
    const {
      set
    } = this.vueMeta.addApp('vuetify');
    set({
      style: [{
        cssText: this.generatedStyles,
        type: 'text/css',
        id: 'vuetify-theme-stylesheet',
        nonce: this.options.cspNonce
      }]
    });
  }

  initSSR(ssrContext) {
    // SSR
    const nonce = this.options.cspNonce ? ` nonce="${this.options.cspNonce}"` : '';
    ssrContext.head = ssrContext.head || '';
    ssrContext.head += `<style type="text/css" id="vuetify-theme-stylesheet"${nonce}>${this.generatedStyles}</style>`;
  }

  initTheme(root) {
    // Only watch for reactivity on client side
    if (typeof document === 'undefined') return; // If we get here somehow, ensure
    // existing instance is removed

    if (this.unwatch) {
      this.unwatch();
      this.unwatch = null;
    } // TODO: Update to use RFC if merged
    // https://github.com/vuejs/rfcs/blob/advanced-reactivity-api/active-rfcs/0000-advanced-reactivity-api.md


    root.$once('hook:created', () => {
      const obs = external_vue_default.a.observable({
        themes: this.themes
      });
      this.unwatch = root.$watch(() => obs.themes, () => this.applyTheme(), {
        deep: true
      });
    });
    this.applyTheme();
  }

  get currentTheme() {
    const target = this.dark ? 'dark' : 'light';
    return this.themes[target];
  }

  get generatedStyles() {
    const theme = this.parsedTheme;
    /* istanbul ignore next */

    const options = this.options || {};
    let css;

    if (options.themeCache != null) {
      css = options.themeCache.get(theme);
      /* istanbul ignore if */

      if (css != null) return css;
    }

    css = genStyles(theme, options.customProperties);

    if (options.minifyTheme != null) {
      css = options.minifyTheme(css);
    }

    if (options.themeCache != null) {
      options.themeCache.set(theme, css);
    }

    return css;
  }

  get parsedTheme() {
    return parse(this.currentTheme || {}, undefined, Object(helpers["j" /* getNestedValue */])(this.options, ['variations'], true));
  } // Is using v2.3 of vue-meta
  // https://github.com/nuxt/vue-meta/releases/tag/v2.3.0


  get isVueMeta23() {
    return typeof this.vueMeta.addApp === 'function';
  }

}
theme_Theme.property = 'theme';
// CONCATENATED MODULE: ./node_modules/vuetify/lib/framework.js
 // Services


class framework_Vuetify {
  constructor(userPreset = {}) {
    this.framework = {
      isHydrating: false
    };
    this.installed = [];
    this.preset = {};
    this.userPreset = {};
    this.userPreset = userPreset;
    this.use(presets_Presets);
    this.use(application_Application);
    this.use(breakpoint_Breakpoint);
    this.use(goto_Goto);
    this.use(icons_Icons);
    this.use(lang_Lang);
    this.use(theme_Theme);
  } // Called on the new vuetify instance
  // bootstrap in install beforeCreate
  // Exposes ssrContext if available


  init(root, ssrContext) {
    this.installed.forEach(property => {
      const service = this.framework[property];
      service.framework = this.framework;
      service.init(root, ssrContext);
    }); // rtl is not installed and
    // will never be called by
    // the init process

    this.framework.rtl = Boolean(this.preset.rtl);
  } // Instantiate a VuetifyService


  use(Service) {
    const property = Service.property;
    if (this.installed.includes(property)) return; // TODO maybe a specific type for arg 2?

    this.framework[property] = new Service(this.preset, this);
    this.installed.push(property);
  }

}
framework_Vuetify.install = install;
framework_Vuetify.installed = false;
framework_Vuetify.version = "2.6.3";
framework_Vuetify.config = {
  silent: false
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function installComponents (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
// Helpers
 // Types


/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'measurable',
  props: {
    height: [Number, String],
    maxHeight: [Number, String],
    maxWidth: [Number, String],
    minHeight: [Number, String],
    minWidth: [Number, String],
    width: [Number, String]
  },
  computed: {
    measurableStyles() {
      const styles = {};
      const height = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* convertToUnit */ "g"])(this.height);
      const minHeight = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* convertToUnit */ "g"])(this.minHeight);
      const minWidth = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* convertToUnit */ "g"])(this.minWidth);
      const maxHeight = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* convertToUnit */ "g"])(this.maxHeight);
      const maxWidth = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* convertToUnit */ "g"])(this.maxWidth);
      const width = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__[/* convertToUnit */ "g"])(this.width);
      if (height) styles.height = height;
      if (minHeight) styles.minHeight = minHeight;
      if (minWidth) styles.minWidth = minWidth;
      if (maxHeight) styles.maxHeight = maxHeight;
      if (maxWidth) styles.maxWidth = maxWidth;
      if (width) styles.width = width;
      return styles;
    }

  }
}));

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VSheet/VSheet.sass
var VSheet = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/binds-attrs/index.js
var binds_attrs = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/elevatable/index.js
var elevatable = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/measurable/index.js
var measurable = __webpack_require__(13);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/roundable/index.js

/* @vue/component */

/* harmony default export */ var roundable = (external_vue_default.a.extend({
  name: 'roundable',
  props: {
    rounded: [Boolean, String],
    tile: Boolean
  },
  computed: {
    roundedClasses() {
      const composite = [];
      const rounded = typeof this.rounded === 'string' ? String(this.rounded) : this.rounded === true;

      if (this.tile) {
        composite.push('rounded-0');
      } else if (typeof rounded === 'string') {
        const values = rounded.split(' ');

        for (const value of values) {
          composite.push(`rounded-${value}`);
        }
      } else if (rounded) {
        composite.push('rounded');
      }

      return composite.length > 0 ? {
        [composite.join(' ')]: true
      } : {};
    }

  }
}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
// Styles
 // Mixins






 // Helpers


/* @vue/component */

/* harmony default export */ var VSheet_VSheet = __webpack_exports__["a"] = (Object(mixins["a" /* default */])(binds_attrs["a" /* default */], colorable["a" /* default */], elevatable["a" /* default */], measurable["a" /* default */], roundable, themeable["a" /* default */]).extend({
  name: 'v-sheet',
  props: {
    outlined: Boolean,
    shaped: Boolean,
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    classes() {
      return {
        'v-sheet': true,
        'v-sheet--outlined': this.outlined,
        'v-sheet--shaped': this.shaped,
        ...this.themeClasses,
        ...this.elevationClasses,
        ...this.roundedClasses
      };
    },

    styles() {
      return this.measurableStyles;
    }

  },

  render(h) {
    const data = {
      class: this.classes,
      style: this.styles,
      on: this.listeners$
    };
    return h(this.tag, this.setBackgroundColor(this.color, data), this.$slots.default);
  }

}));

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return factory; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function factory(prop = 'value', event = 'input') {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: 'toggleable',
    model: {
      prop,
      event
    },
    props: {
      [prop]: {
        required: false
      }
    },

    data() {
      return {
        isActive: !!this[prop]
      };
    },

    watch: {
      [prop](val) {
        this.isActive = !!val;
      },

      isActive(val) {
        !!val !== this[prop] && this.$emit(event, val);
      }

    }
  });
}
/* eslint-disable-next-line @typescript-eslint/no-redeclare */

const Toggleable = factory();
/* harmony default export */ __webpack_exports__["a"] = (Toggleable);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _util_colorUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);



/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'colorable',
  props: {
    color: String
  },
  methods: {
    setBackgroundColor(color, data = {}) {
      if (typeof data.style === 'string') {
        // istanbul ignore next
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__[/* consoleError */ "b"])('style must be an object', this); // istanbul ignore next

        return data;
      }

      if (typeof data.class === 'string') {
        // istanbul ignore next
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__[/* consoleError */ "b"])('class must be an object', this); // istanbul ignore next

        return data;
      }

      if (Object(_util_colorUtils__WEBPACK_IMPORTED_MODULE_2__[/* isCssColor */ "d"])(color)) {
        data.style = { ...data.style,
          'background-color': `${color}`,
          'border-color': `${color}`
        };
      } else if (color) {
        data.class = { ...data.class,
          [color]: true
        };
      }

      return data;
    },

    setTextColor(color, data = {}) {
      if (typeof data.style === 'string') {
        // istanbul ignore next
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__[/* consoleError */ "b"])('style must be an object', this); // istanbul ignore next

        return data;
      }

      if (typeof data.class === 'string') {
        // istanbul ignore next
        Object(_util_console__WEBPACK_IMPORTED_MODULE_1__[/* consoleError */ "b"])('class must be an object', this); // istanbul ignore next

        return data;
      }

      if (Object(_util_colorUtils__WEBPACK_IMPORTED_MODULE_2__[/* isCssColor */ "d"])(color)) {
        data.style = { ...data.style,
          color: `${color}`,
          'caret-color': `${color}`
        };
      } else if (color) {
        const [colorName, colorModifier] = color.toString().trim().split(' ', 2);
        data.class = { ...data.class,
          [colorName + '--text']: true
        };

        if (colorModifier) {
          data.class['text--' + colorModifier] = true;
        }
      }

      return data;
    }

  }
}));

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Intersect */
function inserted(el, binding, vnode) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
  const modifiers = binding.modifiers || {};
  const value = binding.value;
  const {
    handler,
    options
  } = typeof value === 'object' ? value : {
    handler: value,
    options: {}
  };
  const observer = new IntersectionObserver((entries = [], observer) => {
    var _el$_observe;

    const _observe = (_el$_observe = el._observe) == null ? void 0 : _el$_observe[vnode.context._uid];

    if (!_observe) return; // Just in case, should never fire

    const isIntersecting = entries.some(entry => entry.isIntersecting); // If is not quiet or has already been
    // initted, invoke the user callback

    if (handler && (!modifiers.quiet || _observe.init) && (!modifiers.once || isIntersecting || _observe.init)) {
      handler(entries, observer, isIntersecting);
    }

    if (isIntersecting && modifiers.once) unbind(el, binding, vnode);else _observe.init = true;
  }, options);
  el._observe = Object(el._observe);
  el._observe[vnode.context._uid] = {
    init: false,
    observer
  };
  observer.observe(el);
}

function unbind(el, binding, vnode) {
  var _el$_observe2;

  const observe = (_el$_observe2 = el._observe) == null ? void 0 : _el$_observe2[vnode.context._uid];
  if (!observe) return;
  observe.observer.unobserve(el);
  delete el._observe[vnode.context._uid];
}

const Intersect = {
  inserted,
  unbind
};
/* harmony default export */ __webpack_exports__["a"] = (Intersect);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return factory; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


const availableProps = {
  absolute: Boolean,
  bottom: Boolean,
  fixed: Boolean,
  left: Boolean,
  right: Boolean,
  top: Boolean
};
function factory(selected = []) {
  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    name: 'positionable',
    props: selected.length ? Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* filterObjectOnKeys */ "i"])(availableProps, selected) : availableProps
  });
}
/* harmony default export */ __webpack_exports__["a"] = (factory()); // Add a `*` before the second `/`

/* Tests /
let single = factory(['top']).extend({
  created () {
    this.top
    this.bottom
    this.absolute
  }
})

let some = factory(['top', 'bottom']).extend({
  created () {
    this.top
    this.bottom
    this.absolute
  }
})

let all = factory().extend({
  created () {
    this.top
    this.bottom
    this.absolute
    this.foobar
  }
})
/**/

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  name: 'elevatable',
  props: {
    elevation: [Number, String]
  },
  computed: {
    computedElevation() {
      return this.elevation;
    },

    elevationClasses() {
      const elevation = this.computedElevation;
      if (elevation == null) return {};
      if (isNaN(parseInt(elevation))) return {};
      return {
        [`elevation-${this.elevation}`]: true
      };
    }

  }
}));

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeData; });
/* unused harmony export mergeStyles */
/* unused harmony export mergeClasses */
/* unused harmony export mergeListeners */
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

const pattern = {
  styleList: /;(?![^(]*\))/g,
  styleProp: /:(.*)/
};

function parseStyle(style) {
  const styleMap = {};

  for (const s of style.split(pattern.styleList)) {
    let [key, val] = s.split(pattern.styleProp);
    key = key.trim();

    if (!key) {
      continue;
    } // May be undefined if the `key: value` pair is incomplete.


    if (typeof val === 'string') {
      val = val.trim();
    }

    styleMap[Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* camelize */ "c"])(key)] = val;
  }

  return styleMap;
}

function mergeData() {
  const mergeTarget = {};
  let i = arguments.length;
  let prop; // Allow for variadic argument length.

  while (i--) {
    // Iterate through the data properties and execute merge strategies
    // Object.keys eliminates need for hasOwnProperty call
    for (prop of Object.keys(arguments[i])) {
      switch (prop) {
        // Array merge strategy (array concatenation)
        case 'class':
        case 'directives':
          if (arguments[i][prop]) {
            mergeTarget[prop] = mergeClasses(mergeTarget[prop], arguments[i][prop]);
          }

          break;

        case 'style':
          if (arguments[i][prop]) {
            mergeTarget[prop] = mergeStyles(mergeTarget[prop], arguments[i][prop]);
          }

          break;
        // Space delimited string concatenation strategy

        case 'staticClass':
          if (!arguments[i][prop]) {
            break;
          }

          if (mergeTarget[prop] === undefined) {
            mergeTarget[prop] = '';
          }

          if (mergeTarget[prop]) {
            // Not an empty string, so concatenate
            mergeTarget[prop] += ' ';
          }

          mergeTarget[prop] += arguments[i][prop].trim();
          break;
        // Object, the properties of which to merge via array merge strategy (array concatenation).
        // Callback merge strategy merges callbacks to the beginning of the array,
        // so that the last defined callback will be invoked first.
        // This is done since to mimic how Object.assign merging
        // uses the last given value to assign.

        case 'on':
        case 'nativeOn':
          if (arguments[i][prop]) {
            mergeTarget[prop] = mergeListeners(mergeTarget[prop], arguments[i][prop]);
          }

          break;
        // Object merge strategy

        case 'attrs':
        case 'props':
        case 'domProps':
        case 'scopedSlots':
        case 'staticStyle':
        case 'hook':
        case 'transition':
          if (!arguments[i][prop]) {
            break;
          }

          if (!mergeTarget[prop]) {
            mergeTarget[prop] = {};
          }

          mergeTarget[prop] = { ...arguments[i][prop],
            ...mergeTarget[prop]
          };
          break;
        // Reassignment strategy (no merge)

        default:
          // slot, key, ref, tag, show, keepAlive
          if (!mergeTarget[prop]) {
            mergeTarget[prop] = arguments[i][prop];
          }

      }
    }
  }

  return mergeTarget;
}
function mergeStyles(target, source) {
  if (!target) return source;
  if (!source) return target;
  target = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* wrapInArray */ "u"])(typeof target === 'string' ? parseStyle(target) : target);
  return target.concat(typeof source === 'string' ? parseStyle(source) : source);
}
function mergeClasses(target, source) {
  if (!source) return target;
  if (!target) return source;
  return target ? Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[/* wrapInArray */ "u"])(target).concat(source) : source;
}
function mergeListeners(...args) {
  if (!args[0]) return args[1];
  if (!args[1]) return args[0];
  const dest = {};

  for (let i = 2; i--;) {
    const arg = args[i];

    for (const event in arg) {
      if (!arg[event]) continue;

      if (dest[event]) {
        // Merge current listeners before (because we are iterating backwards).
        // Note that neither "target" or "source" must be altered.
        dest[event] = [].concat(arg[event], dest[event]);
      } else {
        // Straight assign.
        dest[event] = arg[event];
      }
    }
  }

  return dest;
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(36);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("162ac6c2", content, true, context)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("53f61d5f", content, true, context)
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("4a8780e3", content, true, context)
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/**
 * This mixin provides `attrs$` and `listeners$` to work around
 * vue bug https://github.com/vuejs/vue/issues/10115
 */

function makeWatcher(property) {
  return function (val, oldVal) {
    for (const attr in oldVal) {
      if (!Object.prototype.hasOwnProperty.call(val, attr)) {
        this.$delete(this.$data[property], attr);
      }
    }

    for (const attr in val) {
      this.$set(this.$data[property], attr, val[attr]);
    }
  };
}

/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  data: () => ({
    attrs$: {},
    listeners$: {}
  }),

  created() {
    // Work around unwanted re-renders: https://github.com/vuejs/vue/issues/10115
    // Make sure to use `attrs$` instead of `$attrs` (confusing right?)
    this.$watch('$attrs', makeWatcher('attrs$'), {
      immediate: true
    });
    this.$watch('$listeners', makeWatcher('listeners$'), {
      immediate: true
    });
  }

}));

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("41ce49a3", content, true, context)
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/AppHeader.vue?vue&type=template&id=4255762e&
var AppHeadervue_type_template_id_4255762e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"z-50 w-full shadow-lg bg-white"},[_c('v-app-bar',{attrs:{"color":"#fcb69f","dark":"","shrink-on-scroll":"","src":"https://solana.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FsolanaGradient.5cbbf07c.png&w=3840&q=75","scroll-target":"#scrolling"},scopedSlots:_vm._u([{key:"img",fn:function(ref){
var props = ref.props;
return [_c('v-img',_vm._b({attrs:{"gradient":"to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"}},'v-img',props,false))]}}])},[_vm._v(" "),_c('v-toolbar-title',[_vm._v(_vm._s(this.$config.project_name)+" | Degen Discord Tools")]),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('div',[_c('div',{staticClass:"flex overflow-hidden duration-200 transition-height md:h-auto",class:_vm.isExpanded ? 'h-500' : 'h-0'},[_c('ul',{staticClass:"flex flex-col list-none md:flex-row"},_vm._l((_vm.routes),function(route){return _c('li',{key:route.href,staticClass:"nowrap py-1 text-right"},[_c('a',{staticClass:"px-3 navlink",attrs:{"href":route.href}},[_vm._v("\n              "+_vm._s(route.label)+"\n            ")])])}),0)])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/base/AppHeader.vue?vue&type=template&id=4255762e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/AppHeader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AppHeadervue_type_script_lang_js_ = ({
  data() {
    return {
      isExpanded: false,
      routes: [{
        href: "/",
        label: "Home"
      }, {
        href: "/manage",
        label: "Manage"
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/base/AppHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_AppHeadervue_type_script_lang_js_ = (AppHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(12);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VAppBar/VAppBar.sass
var VAppBar = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VToolbar/VToolbar.sass
var VToolbar = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js + 1 modules
var VSheet = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VImg/VImg.sass
var VImg = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/intersect/index.js
var intersect = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VResponsive/VResponsive.sass
var VResponsive = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/measurable/index.js
var measurable = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VResponsive/VResponsive.js
 // Mixins

 // Utils


/* @vue/component */

/* harmony default export */ var VResponsive_VResponsive = (Object(mixins["a" /* default */])(measurable["a" /* default */]).extend({
  name: 'v-responsive',
  props: {
    aspectRatio: [String, Number],
    contentClass: String
  },
  computed: {
    computedAspectRatio() {
      return Number(this.aspectRatio);
    },

    aspectStyle() {
      return this.computedAspectRatio ? {
        paddingBottom: 1 / this.computedAspectRatio * 100 + '%'
      } : undefined;
    },

    __cachedSizer() {
      if (!this.aspectStyle) return [];
      return this.$createElement('div', {
        style: this.aspectStyle,
        staticClass: 'v-responsive__sizer'
      });
    }

  },
  methods: {
    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-responsive__content',
        class: this.contentClass
      }, this.$slots.default);
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-responsive',
      style: this.measurableStyles,
      on: this.$listeners
    }, [this.__cachedSizer, this.genContent()]);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VResponsive/index.js


/* harmony default export */ var components_VResponsive = (VResponsive_VResponsive);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mergeData.js
var mergeData = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
// Styles
 // Directives

 // Components

 // Mixins

 // Utils




const hasIntersect = typeof window !== 'undefined' && 'IntersectionObserver' in window;
/* @vue/component */

/* harmony default export */ var VImg_VImg = (Object(mixins["a" /* default */])(components_VResponsive, themeable["a" /* default */]).extend({
  name: 'v-img',
  directives: {
    intersect: intersect["a" /* default */]
  },
  props: {
    alt: String,
    contain: Boolean,
    eager: Boolean,
    gradient: String,
    lazySrc: String,
    options: {
      type: Object,
      // For more information on types, navigate to:
      // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      default: () => ({
        root: undefined,
        rootMargin: undefined,
        threshold: undefined
      })
    },
    position: {
      type: String,
      default: 'center center'
    },
    sizes: String,
    src: {
      type: [String, Object],
      default: ''
    },
    srcset: String,
    transition: {
      type: [Boolean, String],
      default: 'fade-transition'
    }
  },

  data() {
    return {
      currentSrc: '',
      image: null,
      isLoading: true,
      calculatedAspectRatio: undefined,
      naturalWidth: undefined,
      hasError: false
    };
  },

  computed: {
    computedAspectRatio() {
      return Number(this.normalisedSrc.aspect || this.calculatedAspectRatio);
    },

    normalisedSrc() {
      return this.src && typeof this.src === 'object' ? {
        src: this.src.src,
        srcset: this.srcset || this.src.srcset,
        lazySrc: this.lazySrc || this.src.lazySrc,
        aspect: Number(this.aspectRatio || this.src.aspect)
      } : {
        src: this.src,
        srcset: this.srcset,
        lazySrc: this.lazySrc,
        aspect: Number(this.aspectRatio || 0)
      };
    },

    __cachedImage() {
      if (!(this.normalisedSrc.src || this.normalisedSrc.lazySrc || this.gradient)) return [];
      const backgroundImage = [];
      const src = this.isLoading ? this.normalisedSrc.lazySrc : this.currentSrc;
      if (this.gradient) backgroundImage.push(`linear-gradient(${this.gradient})`);
      if (src) backgroundImage.push(`url("${src}")`);
      const image = this.$createElement('div', {
        staticClass: 'v-image__image',
        class: {
          'v-image__image--preload': this.isLoading,
          'v-image__image--contain': this.contain,
          'v-image__image--cover': !this.contain
        },
        style: {
          backgroundImage: backgroundImage.join(', '),
          backgroundPosition: this.position
        },
        key: +this.isLoading
      });
      /* istanbul ignore if */

      if (!this.transition) return image;
      return this.$createElement('transition', {
        attrs: {
          name: this.transition,
          mode: 'in-out'
        }
      }, [image]);
    }

  },
  watch: {
    src() {
      // Force re-init when src changes
      if (!this.isLoading) this.init(undefined, undefined, true);else this.loadImage();
    },

    '$vuetify.breakpoint.width': 'getSrc'
  },

  mounted() {
    this.init();
  },

  methods: {
    init(entries, observer, isIntersecting) {
      // If the current browser supports the intersection
      // observer api, the image is not observable, and
      // the eager prop isn't being used, do not load
      if (hasIntersect && !isIntersecting && !this.eager) return;

      if (this.normalisedSrc.lazySrc) {
        const lazyImg = new Image();
        lazyImg.src = this.normalisedSrc.lazySrc;
        this.pollForSize(lazyImg, null);
      }
      /* istanbul ignore else */


      if (this.normalisedSrc.src) this.loadImage();
    },

    onLoad() {
      this.getSrc();
      this.isLoading = false;
      this.$emit('load', this.src);

      if (this.image && (this.normalisedSrc.src.endsWith('.svg') || this.normalisedSrc.src.startsWith('data:image/svg+xml'))) {
        if (this.image.naturalHeight && this.image.naturalWidth) {
          this.naturalWidth = this.image.naturalWidth;
          this.calculatedAspectRatio = this.image.naturalWidth / this.image.naturalHeight;
        } else {
          this.calculatedAspectRatio = 1;
        }
      }
    },

    onError() {
      this.hasError = true;
      this.$emit('error', this.src);
    },

    getSrc() {
      /* istanbul ignore else */
      if (this.image) this.currentSrc = this.image.currentSrc || this.image.src;
    },

    loadImage() {
      const image = new Image();
      this.image = image;

      image.onload = () => {
        /* istanbul ignore if */
        if (image.decode) {
          image.decode().catch(err => {
            Object(console["c" /* consoleWarn */])(`Failed to decode image, trying to render anyway\n\n` + `src: ${this.normalisedSrc.src}` + (err.message ? `\nOriginal error: ${err.message}` : ''), this);
          }).then(this.onLoad);
        } else {
          this.onLoad();
        }
      };

      image.onerror = this.onError;
      this.hasError = false;
      this.sizes && (image.sizes = this.sizes);
      this.normalisedSrc.srcset && (image.srcset = this.normalisedSrc.srcset);
      image.src = this.normalisedSrc.src;
      this.$emit('loadstart', this.normalisedSrc.src);
      this.aspectRatio || this.pollForSize(image);
      this.getSrc();
    },

    pollForSize(img, timeout = 100) {
      const poll = () => {
        const {
          naturalHeight,
          naturalWidth
        } = img;

        if (naturalHeight || naturalWidth) {
          this.naturalWidth = naturalWidth;
          this.calculatedAspectRatio = naturalWidth / naturalHeight;
        } else if (!img.complete && this.isLoading && !this.hasError && timeout != null) {
          setTimeout(poll, timeout);
        }
      };

      poll();
    },

    genContent() {
      const content = components_VResponsive.options.methods.genContent.call(this);

      if (this.naturalWidth) {
        this._b(content.data, 'div', {
          style: {
            width: `${this.naturalWidth}px`
          }
        });
      }

      return content;
    },

    __genPlaceholder() {
      if (this.$slots.placeholder) {
        const placeholder = this.isLoading ? [this.$createElement('div', {
          staticClass: 'v-image__placeholder'
        }, this.$slots.placeholder)] : [];
        if (!this.transition) return placeholder[0];
        return this.$createElement('transition', {
          props: {
            appear: true,
            name: this.transition
          }
        }, placeholder);
      }
    }

  },

  render(h) {
    const node = components_VResponsive.options.render.call(this, h);
    const data = Object(mergeData["a" /* default */])(node.data, {
      staticClass: 'v-image',
      attrs: {
        'aria-label': this.alt,
        role: this.alt ? 'img' : undefined
      },
      class: this.themeClasses,
      // Only load intersect directive if it
      // will work in the current browser.
      directives: hasIntersect ? [{
        name: 'intersect',
        modifiers: {
          once: true
        },
        value: {
          handler: this.init,
          options: this.options
        }
      }] : undefined
    });
    node.children = [this.__cachedSizer, this.__cachedImage, this.__genPlaceholder(), this.genContent()];
    return h(node.tag, data, node.children);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/helpers.js
var helpers = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
// Styles
 // Extensions

 // Components

 // Utilities



/* @vue/component */

/* harmony default export */ var VToolbar_VToolbar = (VSheet["a" /* default */].extend({
  name: 'v-toolbar',
  props: {
    absolute: Boolean,
    bottom: Boolean,
    collapse: Boolean,
    dense: Boolean,
    extended: Boolean,
    extensionHeight: {
      default: 48,
      type: [Number, String]
    },
    flat: Boolean,
    floating: Boolean,
    prominent: Boolean,
    short: Boolean,
    src: {
      type: [String, Object],
      default: ''
    },
    tag: {
      type: String,
      default: 'header'
    }
  },
  data: () => ({
    isExtended: false
  }),
  computed: {
    computedHeight() {
      const height = this.computedContentHeight;
      if (!this.isExtended) return height;
      const extensionHeight = parseInt(this.extensionHeight);
      return this.isCollapsed ? height : height + (!isNaN(extensionHeight) ? extensionHeight : 0);
    },

    computedContentHeight() {
      if (this.height) return parseInt(this.height);
      if (this.isProminent && this.dense) return 96;
      if (this.isProminent && this.short) return 112;
      if (this.isProminent) return 128;
      if (this.dense) return 48;
      if (this.short || this.$vuetify.breakpoint.smAndDown) return 56;
      return 64;
    },

    classes() {
      return { ...VSheet["a" /* default */].options.computed.classes.call(this),
        'v-toolbar': true,
        'v-toolbar--absolute': this.absolute,
        'v-toolbar--bottom': this.bottom,
        'v-toolbar--collapse': this.collapse,
        'v-toolbar--collapsed': this.isCollapsed,
        'v-toolbar--dense': this.dense,
        'v-toolbar--extended': this.isExtended,
        'v-toolbar--flat': this.flat,
        'v-toolbar--floating': this.floating,
        'v-toolbar--prominent': this.isProminent
      };
    },

    isCollapsed() {
      return this.collapse;
    },

    isProminent() {
      return this.prominent;
    },

    styles() {
      return { ...this.measurableStyles,
        height: Object(helpers["g" /* convertToUnit */])(this.computedHeight)
      };
    }

  },

  created() {
    const breakingProps = [['app', '<v-app-bar app>'], ['manual-scroll', '<v-app-bar :value="false">'], ['clipped-left', '<v-app-bar clipped-left>'], ['clipped-right', '<v-app-bar clipped-right>'], ['inverted-scroll', '<v-app-bar inverted-scroll>'], ['scroll-off-screen', '<v-app-bar scroll-off-screen>'], ['scroll-target', '<v-app-bar scroll-target>'], ['scroll-threshold', '<v-app-bar scroll-threshold>'], ['card', '<v-app-bar flat>']];
    /* istanbul ignore next */

    breakingProps.forEach(([original, replacement]) => {
      if (this.$attrs.hasOwnProperty(original)) Object(console["a" /* breaking */])(original, replacement, this);
    });
  },

  methods: {
    genBackground() {
      const props = {
        height: Object(helpers["g" /* convertToUnit */])(this.computedHeight),
        src: this.src
      };
      const image = this.$scopedSlots.img ? this.$scopedSlots.img({
        props
      }) : this.$createElement(VImg_VImg, {
        props
      });
      return this.$createElement('div', {
        staticClass: 'v-toolbar__image'
      }, [image]);
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-toolbar__content',
        style: {
          height: Object(helpers["g" /* convertToUnit */])(this.computedContentHeight)
        }
      }, Object(helpers["l" /* getSlot */])(this));
    },

    genExtension() {
      return this.$createElement('div', {
        staticClass: 'v-toolbar__extension',
        style: {
          height: Object(helpers["g" /* convertToUnit */])(this.extensionHeight)
        }
      }, Object(helpers["l" /* getSlot */])(this, 'extension'));
    }

  },

  render(h) {
    this.isExtended = this.extended || !!this.$scopedSlots.extension;
    const children = [this.genContent()];
    const data = this.setBackgroundColor(this.color, {
      class: this.classes,
      style: this.styles,
      on: this.$listeners
    });
    if (this.isExtended) children.push(this.genExtension());
    if (this.src || this.$scopedSlots.img) children.unshift(this.genBackground());
    return h(this.tag, data, children);
  }

}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/directives/scroll/index.js
function inserted(el, binding, vnode) {
  const {
    self = false
  } = binding.modifiers || {};
  const value = binding.value;
  const options = typeof value === 'object' && value.options || {
    passive: true
  };
  const handler = typeof value === 'function' || 'handleEvent' in value ? value : value.handler;
  const target = self ? el : binding.arg ? document.querySelector(binding.arg) : window;
  if (!target) return;
  target.addEventListener('scroll', handler, options);
  el._onScroll = Object(el._onScroll);
  el._onScroll[vnode.context._uid] = {
    handler,
    options,
    // Don't reference self
    target: self ? undefined : target
  };
}

function unbind(el, binding, vnode) {
  var _el$_onScroll;

  if (!((_el$_onScroll = el._onScroll) != null && _el$_onScroll[vnode.context._uid])) return;
  const {
    handler,
    options,
    target = el
  } = el._onScroll[vnode.context._uid];
  target.removeEventListener('scroll', handler, options);
  delete el._onScroll[vnode.context._uid];
}

const Scroll = {
  inserted,
  unbind
};
/* harmony default export */ var directives_scroll = (Scroll);
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/positionable/index.js
var positionable = __webpack_require__(21);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/applicationable/index.js
 // Util


function applicationable(value, events = []) {
  /* @vue/component */
  return Object(mixins["a" /* default */])(Object(positionable["b" /* factory */])(['absolute', 'fixed'])).extend({
    name: 'applicationable',
    props: {
      app: Boolean
    },
    computed: {
      applicationProperty() {
        return value;
      }

    },
    watch: {
      // If previous value was app
      // reset the provided prop
      app(x, prev) {
        prev ? this.removeApplication(true) : this.callUpdate();
      },

      applicationProperty(newVal, oldVal) {
        this.$vuetify.application.unregister(this._uid, oldVal);
      }

    },

    activated() {
      this.callUpdate();
    },

    created() {
      for (let i = 0, length = events.length; i < length; i++) {
        this.$watch(events[i], this.callUpdate);
      }

      this.callUpdate();
    },

    mounted() {
      this.callUpdate();
    },

    deactivated() {
      this.removeApplication();
    },

    destroyed() {
      this.removeApplication();
    },

    methods: {
      callUpdate() {
        if (!this.app) return;
        this.$vuetify.application.register(this._uid, this.applicationProperty, this.updateApplication());
      },

      removeApplication(force = false) {
        if (!force && !this.app) return;
        this.$vuetify.application.unregister(this._uid, this.applicationProperty);
      },

      updateApplication: () => 0
    }
  });
}
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/scrollable/index.js
// Directives
 // Utilities

 // Types


/**
 * Scrollable
 *
 * Used for monitoring scrolling and
 * invoking functions based upon
 * scrolling thresholds being
 * met.
 */

/* @vue/component */

/* harmony default export */ var scrollable = (external_vue_default.a.extend({
  name: 'scrollable',
  directives: {
    Scroll: Scroll
  },
  props: {
    scrollTarget: String,
    scrollThreshold: [String, Number]
  },
  data: () => ({
    currentScroll: 0,
    currentThreshold: 0,
    isActive: false,
    isScrollingUp: false,
    previousScroll: 0,
    savedScroll: 0,
    target: null
  }),
  computed: {
    /**
     * A computed property that returns
     * whether scrolling features are
     * enabled or disabled
     */
    canScroll() {
      return typeof window !== 'undefined';
    },

    /**
     * The threshold that must be met before
     * thresholdMet function is invoked
     */
    computedScrollThreshold() {
      return this.scrollThreshold ? Number(this.scrollThreshold) : 300;
    }

  },
  watch: {
    isScrollingUp() {
      this.savedScroll = this.savedScroll || this.currentScroll;
    },

    isActive() {
      this.savedScroll = 0;
    }

  },

  mounted() {
    if (this.scrollTarget) {
      this.target = document.querySelector(this.scrollTarget);

      if (!this.target) {
        Object(console["c" /* consoleWarn */])(`Unable to locate element with identifier ${this.scrollTarget}`, this);
      }
    }
  },

  methods: {
    onScroll() {
      if (!this.canScroll) return;
      this.previousScroll = this.currentScroll;
      this.currentScroll = this.target ? this.target.scrollTop : window.pageYOffset;
      this.isScrollingUp = this.currentScroll < this.previousScroll;
      this.currentThreshold = Math.abs(this.currentScroll - this.computedScrollThreshold);
      this.$nextTick(() => {
        if (Math.abs(this.currentScroll - this.savedScroll) > this.computedScrollThreshold) this.thresholdMet();
      });
    },

    /**
     * The method invoked when
     * scrolling in any direction
     * has exceeded the threshold
     */
    thresholdMet() {}

  }
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/mixins/ssr-bootable/index.js

/**
 * SSRBootable
 *
 * @mixin
 *
 * Used in layout components (drawer, toolbar, content)
 * to avoid an entry animation when using SSR
 */

/* harmony default export */ var ssr_bootable = (external_vue_default.a.extend({
  name: 'ssr-bootable',
  data: () => ({
    isBooted: false
  }),

  mounted() {
    // Use setAttribute instead of dataset
    // because dataset does not work well
    // with unit tests
    window.requestAnimationFrame(() => {
      this.$el.setAttribute('data-booted', 'true');
      this.isBooted = true;
    });
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/toggleable/index.js
var toggleable = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBar.js
// Styles
 // Extensions

 // Directives

 // Mixins




 // Utilities



const baseMixins = Object(mixins["a" /* default */])(VToolbar_VToolbar, scrollable, ssr_bootable, toggleable["a" /* default */], applicationable('top', ['clippedLeft', 'clippedRight', 'computedHeight', 'invertedScroll', 'isExtended', 'isProminent', 'value']));
/* @vue/component */

/* harmony default export */ var VAppBar_VAppBar = (baseMixins.extend({
  name: 'v-app-bar',
  directives: {
    Scroll: directives_scroll
  },

  provide() {
    return {
      VAppBar: this
    };
  },

  props: {
    clippedLeft: Boolean,
    clippedRight: Boolean,
    collapseOnScroll: Boolean,
    elevateOnScroll: Boolean,
    fadeImgOnScroll: Boolean,
    hideOnScroll: Boolean,
    invertedScroll: Boolean,
    scrollOffScreen: Boolean,
    shrinkOnScroll: Boolean,
    value: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      isActive: this.value
    };
  },

  computed: {
    applicationProperty() {
      return !this.bottom ? 'top' : 'bottom';
    },

    canScroll() {
      return scrollable.options.computed.canScroll.call(this) && (this.invertedScroll || this.elevateOnScroll || this.hideOnScroll || this.collapseOnScroll || this.isBooted || // If falsy, user has provided an
      // explicit value which should
      // overwrite anything we do
      !this.value);
    },

    classes() {
      return { ...VToolbar_VToolbar.options.computed.classes.call(this),
        'v-toolbar--collapse': this.collapse || this.collapseOnScroll,
        'v-app-bar': true,
        'v-app-bar--clipped': this.clippedLeft || this.clippedRight,
        'v-app-bar--fade-img-on-scroll': this.fadeImgOnScroll,
        'v-app-bar--elevate-on-scroll': this.elevateOnScroll,
        'v-app-bar--fixed': !this.absolute && (this.app || this.fixed),
        'v-app-bar--hide-shadow': this.hideShadow,
        'v-app-bar--is-scrolled': this.currentScroll > 0,
        'v-app-bar--shrink-on-scroll': this.shrinkOnScroll
      };
    },

    scrollRatio() {
      const threshold = this.computedScrollThreshold;
      return Math.max((threshold - this.currentScroll) / threshold, 0);
    },

    computedContentHeight() {
      if (!this.shrinkOnScroll) return VToolbar_VToolbar.options.computed.computedContentHeight.call(this);
      const min = this.dense ? 48 : 56;
      const max = this.computedOriginalHeight;
      return min + (max - min) * this.scrollRatio;
    },

    computedFontSize() {
      if (!this.isProminent) return undefined;
      const min = 1.25;
      const max = 1.5;
      return min + (max - min) * this.scrollRatio;
    },

    computedLeft() {
      if (!this.app || this.clippedLeft) return 0;
      return this.$vuetify.application.left;
    },

    computedMarginTop() {
      if (!this.app) return 0;
      return this.$vuetify.application.bar;
    },

    computedOpacity() {
      if (!this.fadeImgOnScroll) return undefined;
      return this.scrollRatio;
    },

    computedOriginalHeight() {
      let height = VToolbar_VToolbar.options.computed.computedContentHeight.call(this);
      if (this.isExtended) height += parseInt(this.extensionHeight);
      return height;
    },

    computedRight() {
      if (!this.app || this.clippedRight) return 0;
      return this.$vuetify.application.right;
    },

    computedScrollThreshold() {
      if (this.scrollThreshold) return Number(this.scrollThreshold);
      return this.computedOriginalHeight - (this.dense ? 48 : 56);
    },

    computedTransform() {
      if (!this.canScroll || this.elevateOnScroll && this.currentScroll === 0 && this.isActive) return 0;
      if (this.isActive) return 0;
      const scrollOffScreen = this.scrollOffScreen ? this.computedHeight : this.computedContentHeight;
      return this.bottom ? scrollOffScreen : -scrollOffScreen;
    },

    hideShadow() {
      if (this.elevateOnScroll && this.isExtended) {
        return this.currentScroll < this.computedScrollThreshold;
      }

      if (this.elevateOnScroll) {
        return this.currentScroll === 0 || this.computedTransform < 0;
      }

      return (!this.isExtended || this.scrollOffScreen) && this.computedTransform !== 0;
    },

    isCollapsed() {
      if (!this.collapseOnScroll) {
        return VToolbar_VToolbar.options.computed.isCollapsed.call(this);
      }

      return this.currentScroll > 0;
    },

    isProminent() {
      return VToolbar_VToolbar.options.computed.isProminent.call(this) || this.shrinkOnScroll;
    },

    styles() {
      return { ...VToolbar_VToolbar.options.computed.styles.call(this),
        fontSize: Object(helpers["g" /* convertToUnit */])(this.computedFontSize, 'rem'),
        marginTop: Object(helpers["g" /* convertToUnit */])(this.computedMarginTop),
        transform: `translateY(${Object(helpers["g" /* convertToUnit */])(this.computedTransform)})`,
        left: Object(helpers["g" /* convertToUnit */])(this.computedLeft),
        right: Object(helpers["g" /* convertToUnit */])(this.computedRight)
      };
    }

  },
  watch: {
    canScroll: 'onScroll',

    computedTransform() {
      // Normally we do not want the v-app-bar
      // to update the application top value
      // to avoid screen jump. However, in
      // this situation, we must so that
      // the clipped drawer can update
      // its top value when scrolled
      if (!this.canScroll || !this.clippedLeft && !this.clippedRight) return;
      this.callUpdate();
    },

    invertedScroll(val) {
      this.isActive = !val || this.currentScroll !== 0;
    },

    hideOnScroll(val) {
      this.isActive = !val || this.currentScroll < this.computedScrollThreshold;
    }

  },

  created() {
    if (this.invertedScroll) this.isActive = false;
  },

  methods: {
    genBackground() {
      const render = VToolbar_VToolbar.options.methods.genBackground.call(this);
      render.data = this._b(render.data || {}, render.tag, {
        style: {
          opacity: this.computedOpacity
        }
      });
      return render;
    },

    updateApplication() {
      return this.invertedScroll ? 0 : this.computedHeight + this.computedTransform;
    },

    thresholdMet() {
      if (this.invertedScroll) {
        this.isActive = this.currentScroll > this.computedScrollThreshold;
        return;
      }

      if (this.hideOnScroll) {
        this.isActive = this.isScrollingUp || this.currentScroll < this.computedScrollThreshold;
      }

      if (this.currentThreshold < this.computedScrollThreshold) return;
      this.savedScroll = this.currentScroll;
    }

  },

  render(h) {
    const render = VToolbar_VToolbar.options.render.call(this, h);
    render.data = render.data || {};

    if (this.canScroll) {
      render.data.directives = render.data.directives || [];
      render.data.directives.push({
        arg: this.scrollTarget,
        name: 'scroll',
        value: this.onScroll
      });
    }

    return render;
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VGrid/_grid.sass
var _grid = __webpack_require__(55);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js


/* harmony default export */ var VSpacer = (Object(helpers["h" /* createSimpleFunctional */])('spacer', 'div', 'v-spacer'));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
// Components
 // Utilities


const VToolbarTitle = Object(helpers["h" /* createSimpleFunctional */])('v-toolbar__title');
const VToolbarItems = Object(helpers["h" /* createSimpleFunctional */])('v-toolbar__items');

/* harmony default export */ var components_VToolbar = ({
  $_vuetify_subcomponents: {
    VToolbar: VToolbar_VToolbar,
    VToolbarItems,
    VToolbarTitle
  }
});
// CONCATENATED MODULE: ./components/base/AppHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_AppHeadervue_type_script_lang_js_,
  AppHeadervue_type_template_id_4255762e_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "13298c0e"
  
)

/* harmony default export */ var AppHeader = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VAppBar: VAppBar_VAppBar,VImg: VImg_VImg,VSpacer: VSpacer,VToolbarTitle: VToolbarTitle})


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/base/AppFooter.vue?vue&type=template&id=527be704&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"twitter text-sm text-gray-600"},[_vm._ssrNode("\n    Made By <a href=\"https://instagram.com/kninekrypto?igshid=NDA1YzNhOGU=\" class=\"underline\">KnineKrypto</a> &amp; <a href=\"https://twitter.com/degenpromo\" class=\"underline\">Degenz DAO</a> | <a href=\"https://solnftdrops.com/\" class=\"underline\">Upcoming Drops</a>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/base/AppFooter.vue?vue&type=template&id=527be704&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/base/AppFooter.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(57)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1c11afc8"
  
)

/* harmony default export */ var AppFooter = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(34);
module.exports = __webpack_require__(61);


/***/ }),
/* 34 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.__nuxt-error-page{\n  padding:1rem;\n  background:#f7f8fb;\n  color:#47494e;\n  text-align:center;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  flex-direction:column;\n  font-family:sans-serif;\n  font-weight:100!important;\n  -ms-text-size-adjust:100%;\n  -webkit-text-size-adjust:100%;\n  -webkit-font-smoothing:antialiased;\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0\n}\n.__nuxt-error-page .error{\n  max-width:450px\n}\n.__nuxt-error-page .title{\n  font-size:1.5rem;\n  margin-top:15px;\n  color:#47494e;\n  margin-bottom:8px\n}\n.__nuxt-error-page .description{\n  color:#7f828b;\n  line-height:21px;\n  margin-bottom:10px\n}\n.__nuxt-error-page a{\n  color:#7f828b!important;\n  text-decoration:none\n}\n.__nuxt-error-page .logo{\n  position:fixed;\n  left:12px;\n  bottom:12px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.nuxt-progress{\n  position:fixed;\n  top:0;\n  left:0;\n  right:0;\n  height:2px;\n  width:0;\n  opacity:1;\n  transition:width .1s,opacity .4s;\n  background-color:#000;\n  z-index:999999\n}\n.nuxt-progress.nuxt-progress-notransition{\n  transition:none\n}\n.nuxt-progress-failed{\n  background-color:red\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(40);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("54b08540", content, true)

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n*, ::before, ::after{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.z-50{\n  z-index:50;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.-mx-4{\n  margin-left:-1rem;\n  margin-right:-1rem;\n}\n\n.my-0{\n  margin-top:0px;\n  margin-bottom:0px;\n}\n\n.mt-0{\n  margin-top:0px;\n}\n\n.mt-2{\n  margin-top:0.5rem;\n}\n\n.mt-5{\n  margin-top:1.25rem;\n}\n\n.mt-10{\n  margin-top:2.5rem;\n}\n\n.mr-5{\n  margin-right:1.25rem;\n}\n\n.mb-1{\n  margin-bottom:0.25rem;\n}\n\n.mb-2{\n  margin-bottom:0.5rem;\n}\n\n.mb-3{\n  margin-bottom:0.75rem;\n}\n\n.mb-4{\n  margin-bottom:1rem;\n}\n\n.mb-5{\n  margin-bottom:1.25rem;\n}\n\n.mb-8{\n  margin-bottom:2rem;\n}\n\n.-mb-8{\n  margin-bottom:-2rem;\n}\n\n.ml-5{\n  margin-left:1.25rem;\n}\n\n.block{\n  display:block;\n}\n\n.flex{\n  display:flex;\n}\n\n.table{\n  display:table;\n}\n\n.h-0{\n  height:0px;\n}\n\n.h-screen{\n  height:100vh;\n}\n\n.w-20{\n  width:5rem;\n}\n\n.w-1\\/12{\n  width:8.333333%;\n}\n\n.w-3\\/12{\n  width:25%;\n}\n\n.w-full{\n  width:100%;\n}\n\n.max-w-2xl{\n  max-width:42rem;\n}\n\n.flex-grow{\n  flex-grow:1;\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.list-none{\n  list-style-type:none;\n}\n\n.appearance-none{\n  -webkit-appearance:none;\n     -moz-appearance:none;\n          appearance:none;\n}\n\n.flex-col{\n  flex-direction:column;\n}\n\n.flex-wrap{\n  flex-wrap:wrap;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.justify-center{\n  justify-content:center;\n}\n\n.overflow-hidden{\n  overflow:hidden;\n}\n\n.rounded{\n  border-radius:0.25rem;\n}\n\n.rounded-full{\n  border-radius:9999px;\n}\n\n.border-4{\n  border-width:4px;\n}\n\n.border{\n  border-width:1px;\n}\n\n.border-white{\n  --tw-border-opacity:1;\n  border-color:rgba(255, 255, 255, var(--tw-border-opacity));\n}\n\n.bg-white{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n\n.bg-gray-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n\n.px-3{\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n}\n\n.px-4{\n  padding-left:1rem;\n  padding-right:1rem;\n}\n\n.px-8{\n  padding-left:2rem;\n  padding-right:2rem;\n}\n\n.py-1{\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n}\n\n.py-2{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n}\n\n.pt-6{\n  padding-top:1.5rem;\n}\n\n.pb-8{\n  padding-bottom:2rem;\n}\n\n.text-right{\n  text-align:right;\n}\n\n.text-xs{\n  font-size:0.75rem;\n  line-height:1rem;\n}\n\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.text-lg{\n  font-size:1.125rem;\n  line-height:1.75rem;\n}\n\n.text-xl{\n  font-size:1.25rem;\n  line-height:1.75rem;\n}\n\n.text-2xl{\n  font-size:1.5rem;\n  line-height:2rem;\n}\n\n.text-3xl{\n  font-size:1.875rem;\n  line-height:2.25rem;\n}\n\n.font-semibold{\n  font-weight:600;\n}\n\n.font-bold{\n  font-weight:700;\n}\n\n.leading-tight{\n  line-height:1.25;\n}\n\n.text-white{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.text-gray-400{\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity));\n}\n\n.text-gray-600{\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity));\n}\n\n.text-gray-700{\n  --tw-text-opacity:1;\n  color:rgba(55, 65, 81, var(--tw-text-opacity));\n}\n\n.underline{\n  text-decoration:underline;\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n.shadow{\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-md{\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-lg{\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.focus\\:outline-none:focus{\n  outline:2px solid transparent;\n  outline-offset:2px;\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.duration-200{\n  transition-duration:200ms;\n}\n\n@media (min-width: 640px){\n}\n\n@media (min-width: 768px){\n  .md\\:h-auto{\n    height:auto;\n  }\n\n  .md\\:w-1\\/3{\n    width:33.333333%;\n  }\n\n  .md\\:flex-row{\n    flex-direction:row;\n  }\n}\n\n@media (min-width: 1024px){\n}\n\n@media (min-width: 1280px){\n}\n\n@media (min-width: 1536px){\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.navlink, .navlink:link{\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.navlink:hover{\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  text-decoration:underline\n}\n.navlink:visited{\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("2fcf218e", content, true)

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n\n.theme--light.v-app-bar.v-toolbar.v-sheet{\n  background-color:#f5f5f5\n}\n\n.theme--dark.v-app-bar.v-toolbar.v-sheet{\n  background-color:#272727\n}\n\n.v-sheet.v-app-bar.v-toolbar{\n  border-radius:0\n}\n\n.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined){\n  box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)\n}\n\n.v-sheet.v-app-bar.v-toolbar.v-sheet--shaped{\n  border-radius:24px 0\n}\n\n.v-app-bar:not([data-booted=true]){\n  transition:none!important\n}\n\n.v-app-bar.v-app-bar--fixed{\n  position:fixed;\n  top:0;\n  z-index:5\n}\n\n.v-app-bar.v-app-bar.v-app-bar--hide-shadow{\n  box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important\n}\n\n.v-app-bar--fade-img-on-scroll .v-toolbar__image .v-image__image{\n  transition:opacity .4s cubic-bezier(.4,0,.2,1)\n}\n\n.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll .v-toolbar__image{\n  will-change:opacity\n}\n\n.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--collapse-on-scroll .v-toolbar__extension{\n  display:none\n}\n\n.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled .v-toolbar__title{\n  padding-top:9px\n}\n\n.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled:not(.v-app-bar--bottom) .v-toolbar__title{\n  padding-bottom:9px\n}\n\n.v-app-bar.v-app-bar--shrink-on-scroll .v-toolbar__title{\n  font-size:inherit\n}\n\n.v-app-bar-title__content,.v-app-bar-title__placeholder{\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap\n}\n\n.v-app-bar-title__content{\n  position:absolute\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(46);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("aa05e0a2", content, true)

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n\n.theme--light.v-toolbar.v-sheet{\n  background-color:#fff\n}\n\n.theme--dark.v-toolbar.v-sheet{\n  background-color:#272727\n}\n\n.v-sheet.v-toolbar{\n  border-radius:0\n}\n\n.v-sheet.v-toolbar:not(.v-sheet--outlined){\n  box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)\n}\n\n.v-sheet.v-toolbar.v-sheet--shaped{\n  border-radius:24px 0\n}\n\n.v-toolbar{\n  contain:layout;\n  display:block;\n  flex:1 1 auto;\n  max-width:100%;\n  transition:transform .2s cubic-bezier(.4,0,.2,1),background-color .2s cubic-bezier(.4,0,.2,1),left .2s cubic-bezier(.4,0,.2,1),right .2s cubic-bezier(.4,0,.2,1),box-shadow .28s cubic-bezier(.4,0,.2,1),max-width .25s cubic-bezier(.4,0,.2,1),width .25s cubic-bezier(.4,0,.2,1);\n  position:relative;\n  box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)\n}\n\n.v-toolbar .v-input{\n  padding-top:0;\n  margin-top:0\n}\n\n.v-toolbar__content,.v-toolbar__extension{\n  padding:4px 16px\n}\n\n.v-toolbar__content .v-btn.v-btn--icon.v-size--default,.v-toolbar__extension .v-btn.v-btn--icon.v-size--default{\n  height:48px;\n  width:48px\n}\n\n.v-application--is-ltr .v-toolbar__content>.v-btn.v-btn--icon:first-child,.v-application--is-ltr .v-toolbar__extension>.v-btn.v-btn--icon:first-child{\n  margin-left:-12px\n}\n\n.v-application--is-rtl .v-toolbar__content>.v-btn.v-btn--icon:first-child,.v-application--is-rtl .v-toolbar__extension>.v-btn.v-btn--icon:first-child{\n  margin-right:-12px\n}\n\n.v-application--is-ltr .v-toolbar__content>.v-btn.v-btn--icon:first-child+.v-toolbar__title,.v-application--is-ltr .v-toolbar__extension>.v-btn.v-btn--icon:first-child+.v-toolbar__title{\n  padding-left:20px\n}\n\n.v-application--is-rtl .v-toolbar__content>.v-btn.v-btn--icon:first-child+.v-toolbar__title,.v-application--is-rtl .v-toolbar__extension>.v-btn.v-btn--icon:first-child+.v-toolbar__title{\n  padding-right:20px\n}\n\n.v-application--is-ltr .v-toolbar__content>.v-btn.v-btn--icon:last-child,.v-application--is-ltr .v-toolbar__extension>.v-btn.v-btn--icon:last-child{\n  margin-right:-12px\n}\n\n.v-application--is-rtl .v-toolbar__content>.v-btn.v-btn--icon:last-child,.v-application--is-rtl .v-toolbar__extension>.v-btn.v-btn--icon:last-child{\n  margin-left:-12px\n}\n\n.v-toolbar__content>.v-tabs,.v-toolbar__extension>.v-tabs{\n  height:inherit;\n  margin-top:-4px;\n  margin-bottom:-4px\n}\n\n.v-toolbar__content>.v-tabs>.v-slide-group.v-tabs-bar,.v-toolbar__extension>.v-tabs>.v-slide-group.v-tabs-bar{\n  background-color:inherit;\n  height:inherit\n}\n\n.v-toolbar__content>.v-tabs:first-child,.v-toolbar__extension>.v-tabs:first-child{\n  margin-left:-16px\n}\n\n.v-toolbar__content>.v-tabs:last-child,.v-toolbar__extension>.v-tabs:last-child{\n  margin-right:-16px\n}\n\n.v-toolbar__content,.v-toolbar__extension{\n  align-items:center;\n  display:flex;\n  position:relative;\n  z-index:0\n}\n\n.v-toolbar__image{\n  position:absolute;\n  top:0;\n  bottom:0;\n  width:100%;\n  z-index:0;\n  contain:strict\n}\n\n.v-toolbar__image,.v-toolbar__image .v-image{\n  border-radius:inherit\n}\n\n.v-toolbar__items{\n  display:flex;\n  height:inherit\n}\n\n.v-toolbar__items>.v-btn{\n  border-radius:0;\n  height:100%!important;\n  max-height:none\n}\n\n.v-toolbar__title{\n  font-size:1.25rem;\n  line-height:1.5;\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap\n}\n\n.v-toolbar.v-toolbar--absolute{\n  position:absolute;\n  top:0;\n  z-index:1\n}\n\n.v-toolbar.v-toolbar--bottom{\n  top:auto;\n  bottom:0\n}\n\n.v-toolbar.v-toolbar--collapse .v-toolbar__title{\n  white-space:nowrap\n}\n\n.v-toolbar.v-toolbar--collapsed{\n  max-width:112px;\n  overflow:hidden\n}\n\n.v-application--is-ltr .v-toolbar.v-toolbar--collapsed{\n  border-bottom-right-radius:24px\n}\n\n.v-application--is-rtl .v-toolbar.v-toolbar--collapsed{\n  border-bottom-left-radius:24px\n}\n\n.v-toolbar.v-toolbar--collapsed .v-toolbar__extension,.v-toolbar.v-toolbar--collapsed .v-toolbar__title{\n  display:none\n}\n\n.v-toolbar--dense .v-toolbar__content,.v-toolbar--dense .v-toolbar__extension{\n  padding-top:0;\n  padding-bottom:0\n}\n\n.v-toolbar--flat{\n  box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important\n}\n\n.v-toolbar--floating{\n  display:inline-flex\n}\n\n.v-toolbar--prominent .v-toolbar__content{\n  align-items:flex-start\n}\n\n.v-toolbar--prominent .v-toolbar__title{\n  font-size:1.5rem;\n  padding-top:6px\n}\n\n.v-toolbar--prominent:not(.v-toolbar--bottom) .v-toolbar__title{\n  align-self:flex-end;\n  padding-bottom:6px;\n  padding-top:0\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(48);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("7b52cc53", content, true)

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n\n.theme--light.v-sheet{\n  background-color:#fff;\n  border-color:#fff;\n  color:rgba(0,0,0,.87)\n}\n\n.theme--light.v-sheet--outlined{\n  border:thin solid rgba(0,0,0,.12)\n}\n\n.theme--dark.v-sheet{\n  background-color:#1e1e1e;\n  border-color:#1e1e1e;\n  color:#fff\n}\n\n.theme--dark.v-sheet--outlined{\n  border:thin solid hsla(0,0%,100%,.12)\n}\n\n.v-sheet{\n  border-radius:0\n}\n\n.v-sheet:not(.v-sheet--outlined){\n  box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)\n}\n\n.v-sheet.v-sheet--shaped{\n  border-radius:24px 0\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("42e96288", content, true)

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n\n@-webkit-keyframes v-shake{\n  59%{\n    margin-left:0\n  }\n\n  60%,80%{\n    margin-left:2px\n  }\n\n  70%,90%{\n    margin-left:-2px\n  }\n}\n\n@keyframes v-shake{\n  59%{\n    margin-left:0\n  }\n\n  60%,80%{\n    margin-left:2px\n  }\n\n  70%,90%{\n    margin-left:-2px\n  }\n}\n\n.v-application .black{\n  background-color:#000!important;\n  border-color:#000!important\n}\n\n.v-application .black--text{\n  color:#000!important;\n  caret-color:#000!important\n}\n\n.v-application .white{\n  background-color:#fff!important;\n  border-color:#fff!important\n}\n\n.v-application .white--text{\n  color:#fff!important;\n  caret-color:#fff!important\n}\n\n.v-application .transparent{\n  background-color:transparent!important;\n  border-color:transparent!important\n}\n\n.v-application .transparent--text{\n  color:transparent!important;\n  caret-color:transparent!important\n}\n\n.v-application .red{\n  background-color:#f44336!important;\n  border-color:#f44336!important\n}\n\n.v-application .red--text{\n  color:#f44336!important;\n  caret-color:#f44336!important\n}\n\n.v-application .red.lighten-5{\n  background-color:#ffebee!important;\n  border-color:#ffebee!important\n}\n\n.v-application .red--text.text--lighten-5{\n  color:#ffebee!important;\n  caret-color:#ffebee!important\n}\n\n.v-application .red.lighten-4{\n  background-color:#ffcdd2!important;\n  border-color:#ffcdd2!important\n}\n\n.v-application .red--text.text--lighten-4{\n  color:#ffcdd2!important;\n  caret-color:#ffcdd2!important\n}\n\n.v-application .red.lighten-3{\n  background-color:#ef9a9a!important;\n  border-color:#ef9a9a!important\n}\n\n.v-application .red--text.text--lighten-3{\n  color:#ef9a9a!important;\n  caret-color:#ef9a9a!important\n}\n\n.v-application .red.lighten-2{\n  background-color:#e57373!important;\n  border-color:#e57373!important\n}\n\n.v-application .red--text.text--lighten-2{\n  color:#e57373!important;\n  caret-color:#e57373!important\n}\n\n.v-application .red.lighten-1{\n  background-color:#ef5350!important;\n  border-color:#ef5350!important\n}\n\n.v-application .red--text.text--lighten-1{\n  color:#ef5350!important;\n  caret-color:#ef5350!important\n}\n\n.v-application .red.darken-1{\n  background-color:#e53935!important;\n  border-color:#e53935!important\n}\n\n.v-application .red--text.text--darken-1{\n  color:#e53935!important;\n  caret-color:#e53935!important\n}\n\n.v-application .red.darken-2{\n  background-color:#d32f2f!important;\n  border-color:#d32f2f!important\n}\n\n.v-application .red--text.text--darken-2{\n  color:#d32f2f!important;\n  caret-color:#d32f2f!important\n}\n\n.v-application .red.darken-3{\n  background-color:#c62828!important;\n  border-color:#c62828!important\n}\n\n.v-application .red--text.text--darken-3{\n  color:#c62828!important;\n  caret-color:#c62828!important\n}\n\n.v-application .red.darken-4{\n  background-color:#b71c1c!important;\n  border-color:#b71c1c!important\n}\n\n.v-application .red--text.text--darken-4{\n  color:#b71c1c!important;\n  caret-color:#b71c1c!important\n}\n\n.v-application .red.accent-1{\n  background-color:#ff8a80!important;\n  border-color:#ff8a80!important\n}\n\n.v-application .red--text.text--accent-1{\n  color:#ff8a80!important;\n  caret-color:#ff8a80!important\n}\n\n.v-application .red.accent-2{\n  background-color:#ff5252!important;\n  border-color:#ff5252!important\n}\n\n.v-application .red--text.text--accent-2{\n  color:#ff5252!important;\n  caret-color:#ff5252!important\n}\n\n.v-application .red.accent-3{\n  background-color:#ff1744!important;\n  border-color:#ff1744!important\n}\n\n.v-application .red--text.text--accent-3{\n  color:#ff1744!important;\n  caret-color:#ff1744!important\n}\n\n.v-application .red.accent-4{\n  background-color:#d50000!important;\n  border-color:#d50000!important\n}\n\n.v-application .red--text.text--accent-4{\n  color:#d50000!important;\n  caret-color:#d50000!important\n}\n\n.v-application .pink{\n  background-color:#e91e63!important;\n  border-color:#e91e63!important\n}\n\n.v-application .pink--text{\n  color:#e91e63!important;\n  caret-color:#e91e63!important\n}\n\n.v-application .pink.lighten-5{\n  background-color:#fce4ec!important;\n  border-color:#fce4ec!important\n}\n\n.v-application .pink--text.text--lighten-5{\n  color:#fce4ec!important;\n  caret-color:#fce4ec!important\n}\n\n.v-application .pink.lighten-4{\n  background-color:#f8bbd0!important;\n  border-color:#f8bbd0!important\n}\n\n.v-application .pink--text.text--lighten-4{\n  color:#f8bbd0!important;\n  caret-color:#f8bbd0!important\n}\n\n.v-application .pink.lighten-3{\n  background-color:#f48fb1!important;\n  border-color:#f48fb1!important\n}\n\n.v-application .pink--text.text--lighten-3{\n  color:#f48fb1!important;\n  caret-color:#f48fb1!important\n}\n\n.v-application .pink.lighten-2{\n  background-color:#f06292!important;\n  border-color:#f06292!important\n}\n\n.v-application .pink--text.text--lighten-2{\n  color:#f06292!important;\n  caret-color:#f06292!important\n}\n\n.v-application .pink.lighten-1{\n  background-color:#ec407a!important;\n  border-color:#ec407a!important\n}\n\n.v-application .pink--text.text--lighten-1{\n  color:#ec407a!important;\n  caret-color:#ec407a!important\n}\n\n.v-application .pink.darken-1{\n  background-color:#d81b60!important;\n  border-color:#d81b60!important\n}\n\n.v-application .pink--text.text--darken-1{\n  color:#d81b60!important;\n  caret-color:#d81b60!important\n}\n\n.v-application .pink.darken-2{\n  background-color:#c2185b!important;\n  border-color:#c2185b!important\n}\n\n.v-application .pink--text.text--darken-2{\n  color:#c2185b!important;\n  caret-color:#c2185b!important\n}\n\n.v-application .pink.darken-3{\n  background-color:#ad1457!important;\n  border-color:#ad1457!important\n}\n\n.v-application .pink--text.text--darken-3{\n  color:#ad1457!important;\n  caret-color:#ad1457!important\n}\n\n.v-application .pink.darken-4{\n  background-color:#880e4f!important;\n  border-color:#880e4f!important\n}\n\n.v-application .pink--text.text--darken-4{\n  color:#880e4f!important;\n  caret-color:#880e4f!important\n}\n\n.v-application .pink.accent-1{\n  background-color:#ff80ab!important;\n  border-color:#ff80ab!important\n}\n\n.v-application .pink--text.text--accent-1{\n  color:#ff80ab!important;\n  caret-color:#ff80ab!important\n}\n\n.v-application .pink.accent-2{\n  background-color:#ff4081!important;\n  border-color:#ff4081!important\n}\n\n.v-application .pink--text.text--accent-2{\n  color:#ff4081!important;\n  caret-color:#ff4081!important\n}\n\n.v-application .pink.accent-3{\n  background-color:#f50057!important;\n  border-color:#f50057!important\n}\n\n.v-application .pink--text.text--accent-3{\n  color:#f50057!important;\n  caret-color:#f50057!important\n}\n\n.v-application .pink.accent-4{\n  background-color:#c51162!important;\n  border-color:#c51162!important\n}\n\n.v-application .pink--text.text--accent-4{\n  color:#c51162!important;\n  caret-color:#c51162!important\n}\n\n.v-application .purple{\n  background-color:#9c27b0!important;\n  border-color:#9c27b0!important\n}\n\n.v-application .purple--text{\n  color:#9c27b0!important;\n  caret-color:#9c27b0!important\n}\n\n.v-application .purple.lighten-5{\n  background-color:#f3e5f5!important;\n  border-color:#f3e5f5!important\n}\n\n.v-application .purple--text.text--lighten-5{\n  color:#f3e5f5!important;\n  caret-color:#f3e5f5!important\n}\n\n.v-application .purple.lighten-4{\n  background-color:#e1bee7!important;\n  border-color:#e1bee7!important\n}\n\n.v-application .purple--text.text--lighten-4{\n  color:#e1bee7!important;\n  caret-color:#e1bee7!important\n}\n\n.v-application .purple.lighten-3{\n  background-color:#ce93d8!important;\n  border-color:#ce93d8!important\n}\n\n.v-application .purple--text.text--lighten-3{\n  color:#ce93d8!important;\n  caret-color:#ce93d8!important\n}\n\n.v-application .purple.lighten-2{\n  background-color:#ba68c8!important;\n  border-color:#ba68c8!important\n}\n\n.v-application .purple--text.text--lighten-2{\n  color:#ba68c8!important;\n  caret-color:#ba68c8!important\n}\n\n.v-application .purple.lighten-1{\n  background-color:#ab47bc!important;\n  border-color:#ab47bc!important\n}\n\n.v-application .purple--text.text--lighten-1{\n  color:#ab47bc!important;\n  caret-color:#ab47bc!important\n}\n\n.v-application .purple.darken-1{\n  background-color:#8e24aa!important;\n  border-color:#8e24aa!important\n}\n\n.v-application .purple--text.text--darken-1{\n  color:#8e24aa!important;\n  caret-color:#8e24aa!important\n}\n\n.v-application .purple.darken-2{\n  background-color:#7b1fa2!important;\n  border-color:#7b1fa2!important\n}\n\n.v-application .purple--text.text--darken-2{\n  color:#7b1fa2!important;\n  caret-color:#7b1fa2!important\n}\n\n.v-application .purple.darken-3{\n  background-color:#6a1b9a!important;\n  border-color:#6a1b9a!important\n}\n\n.v-application .purple--text.text--darken-3{\n  color:#6a1b9a!important;\n  caret-color:#6a1b9a!important\n}\n\n.v-application .purple.darken-4{\n  background-color:#4a148c!important;\n  border-color:#4a148c!important\n}\n\n.v-application .purple--text.text--darken-4{\n  color:#4a148c!important;\n  caret-color:#4a148c!important\n}\n\n.v-application .purple.accent-1{\n  background-color:#ea80fc!important;\n  border-color:#ea80fc!important\n}\n\n.v-application .purple--text.text--accent-1{\n  color:#ea80fc!important;\n  caret-color:#ea80fc!important\n}\n\n.v-application .purple.accent-2{\n  background-color:#e040fb!important;\n  border-color:#e040fb!important\n}\n\n.v-application .purple--text.text--accent-2{\n  color:#e040fb!important;\n  caret-color:#e040fb!important\n}\n\n.v-application .purple.accent-3{\n  background-color:#d500f9!important;\n  border-color:#d500f9!important\n}\n\n.v-application .purple--text.text--accent-3{\n  color:#d500f9!important;\n  caret-color:#d500f9!important\n}\n\n.v-application .purple.accent-4{\n  background-color:#a0f!important;\n  border-color:#a0f!important\n}\n\n.v-application .purple--text.text--accent-4{\n  color:#a0f!important;\n  caret-color:#a0f!important\n}\n\n.v-application .deep-purple{\n  background-color:#673ab7!important;\n  border-color:#673ab7!important\n}\n\n.v-application .deep-purple--text{\n  color:#673ab7!important;\n  caret-color:#673ab7!important\n}\n\n.v-application .deep-purple.lighten-5{\n  background-color:#ede7f6!important;\n  border-color:#ede7f6!important\n}\n\n.v-application .deep-purple--text.text--lighten-5{\n  color:#ede7f6!important;\n  caret-color:#ede7f6!important\n}\n\n.v-application .deep-purple.lighten-4{\n  background-color:#d1c4e9!important;\n  border-color:#d1c4e9!important\n}\n\n.v-application .deep-purple--text.text--lighten-4{\n  color:#d1c4e9!important;\n  caret-color:#d1c4e9!important\n}\n\n.v-application .deep-purple.lighten-3{\n  background-color:#b39ddb!important;\n  border-color:#b39ddb!important\n}\n\n.v-application .deep-purple--text.text--lighten-3{\n  color:#b39ddb!important;\n  caret-color:#b39ddb!important\n}\n\n.v-application .deep-purple.lighten-2{\n  background-color:#9575cd!important;\n  border-color:#9575cd!important\n}\n\n.v-application .deep-purple--text.text--lighten-2{\n  color:#9575cd!important;\n  caret-color:#9575cd!important\n}\n\n.v-application .deep-purple.lighten-1{\n  background-color:#7e57c2!important;\n  border-color:#7e57c2!important\n}\n\n.v-application .deep-purple--text.text--lighten-1{\n  color:#7e57c2!important;\n  caret-color:#7e57c2!important\n}\n\n.v-application .deep-purple.darken-1{\n  background-color:#5e35b1!important;\n  border-color:#5e35b1!important\n}\n\n.v-application .deep-purple--text.text--darken-1{\n  color:#5e35b1!important;\n  caret-color:#5e35b1!important\n}\n\n.v-application .deep-purple.darken-2{\n  background-color:#512da8!important;\n  border-color:#512da8!important\n}\n\n.v-application .deep-purple--text.text--darken-2{\n  color:#512da8!important;\n  caret-color:#512da8!important\n}\n\n.v-application .deep-purple.darken-3{\n  background-color:#4527a0!important;\n  border-color:#4527a0!important\n}\n\n.v-application .deep-purple--text.text--darken-3{\n  color:#4527a0!important;\n  caret-color:#4527a0!important\n}\n\n.v-application .deep-purple.darken-4{\n  background-color:#311b92!important;\n  border-color:#311b92!important\n}\n\n.v-application .deep-purple--text.text--darken-4{\n  color:#311b92!important;\n  caret-color:#311b92!important\n}\n\n.v-application .deep-purple.accent-1{\n  background-color:#b388ff!important;\n  border-color:#b388ff!important\n}\n\n.v-application .deep-purple--text.text--accent-1{\n  color:#b388ff!important;\n  caret-color:#b388ff!important\n}\n\n.v-application .deep-purple.accent-2{\n  background-color:#7c4dff!important;\n  border-color:#7c4dff!important\n}\n\n.v-application .deep-purple--text.text--accent-2{\n  color:#7c4dff!important;\n  caret-color:#7c4dff!important\n}\n\n.v-application .deep-purple.accent-3{\n  background-color:#651fff!important;\n  border-color:#651fff!important\n}\n\n.v-application .deep-purple--text.text--accent-3{\n  color:#651fff!important;\n  caret-color:#651fff!important\n}\n\n.v-application .deep-purple.accent-4{\n  background-color:#6200ea!important;\n  border-color:#6200ea!important\n}\n\n.v-application .deep-purple--text.text--accent-4{\n  color:#6200ea!important;\n  caret-color:#6200ea!important\n}\n\n.v-application .indigo{\n  background-color:#3f51b5!important;\n  border-color:#3f51b5!important\n}\n\n.v-application .indigo--text{\n  color:#3f51b5!important;\n  caret-color:#3f51b5!important\n}\n\n.v-application .indigo.lighten-5{\n  background-color:#e8eaf6!important;\n  border-color:#e8eaf6!important\n}\n\n.v-application .indigo--text.text--lighten-5{\n  color:#e8eaf6!important;\n  caret-color:#e8eaf6!important\n}\n\n.v-application .indigo.lighten-4{\n  background-color:#c5cae9!important;\n  border-color:#c5cae9!important\n}\n\n.v-application .indigo--text.text--lighten-4{\n  color:#c5cae9!important;\n  caret-color:#c5cae9!important\n}\n\n.v-application .indigo.lighten-3{\n  background-color:#9fa8da!important;\n  border-color:#9fa8da!important\n}\n\n.v-application .indigo--text.text--lighten-3{\n  color:#9fa8da!important;\n  caret-color:#9fa8da!important\n}\n\n.v-application .indigo.lighten-2{\n  background-color:#7986cb!important;\n  border-color:#7986cb!important\n}\n\n.v-application .indigo--text.text--lighten-2{\n  color:#7986cb!important;\n  caret-color:#7986cb!important\n}\n\n.v-application .indigo.lighten-1{\n  background-color:#5c6bc0!important;\n  border-color:#5c6bc0!important\n}\n\n.v-application .indigo--text.text--lighten-1{\n  color:#5c6bc0!important;\n  caret-color:#5c6bc0!important\n}\n\n.v-application .indigo.darken-1{\n  background-color:#3949ab!important;\n  border-color:#3949ab!important\n}\n\n.v-application .indigo--text.text--darken-1{\n  color:#3949ab!important;\n  caret-color:#3949ab!important\n}\n\n.v-application .indigo.darken-2{\n  background-color:#303f9f!important;\n  border-color:#303f9f!important\n}\n\n.v-application .indigo--text.text--darken-2{\n  color:#303f9f!important;\n  caret-color:#303f9f!important\n}\n\n.v-application .indigo.darken-3{\n  background-color:#283593!important;\n  border-color:#283593!important\n}\n\n.v-application .indigo--text.text--darken-3{\n  color:#283593!important;\n  caret-color:#283593!important\n}\n\n.v-application .indigo.darken-4{\n  background-color:#1a237e!important;\n  border-color:#1a237e!important\n}\n\n.v-application .indigo--text.text--darken-4{\n  color:#1a237e!important;\n  caret-color:#1a237e!important\n}\n\n.v-application .indigo.accent-1{\n  background-color:#8c9eff!important;\n  border-color:#8c9eff!important\n}\n\n.v-application .indigo--text.text--accent-1{\n  color:#8c9eff!important;\n  caret-color:#8c9eff!important\n}\n\n.v-application .indigo.accent-2{\n  background-color:#536dfe!important;\n  border-color:#536dfe!important\n}\n\n.v-application .indigo--text.text--accent-2{\n  color:#536dfe!important;\n  caret-color:#536dfe!important\n}\n\n.v-application .indigo.accent-3{\n  background-color:#3d5afe!important;\n  border-color:#3d5afe!important\n}\n\n.v-application .indigo--text.text--accent-3{\n  color:#3d5afe!important;\n  caret-color:#3d5afe!important\n}\n\n.v-application .indigo.accent-4{\n  background-color:#304ffe!important;\n  border-color:#304ffe!important\n}\n\n.v-application .indigo--text.text--accent-4{\n  color:#304ffe!important;\n  caret-color:#304ffe!important\n}\n\n.v-application .blue{\n  background-color:#2196f3!important;\n  border-color:#2196f3!important\n}\n\n.v-application .blue--text{\n  color:#2196f3!important;\n  caret-color:#2196f3!important\n}\n\n.v-application .blue.lighten-5{\n  background-color:#e3f2fd!important;\n  border-color:#e3f2fd!important\n}\n\n.v-application .blue--text.text--lighten-5{\n  color:#e3f2fd!important;\n  caret-color:#e3f2fd!important\n}\n\n.v-application .blue.lighten-4{\n  background-color:#bbdefb!important;\n  border-color:#bbdefb!important\n}\n\n.v-application .blue--text.text--lighten-4{\n  color:#bbdefb!important;\n  caret-color:#bbdefb!important\n}\n\n.v-application .blue.lighten-3{\n  background-color:#90caf9!important;\n  border-color:#90caf9!important\n}\n\n.v-application .blue--text.text--lighten-3{\n  color:#90caf9!important;\n  caret-color:#90caf9!important\n}\n\n.v-application .blue.lighten-2{\n  background-color:#64b5f6!important;\n  border-color:#64b5f6!important\n}\n\n.v-application .blue--text.text--lighten-2{\n  color:#64b5f6!important;\n  caret-color:#64b5f6!important\n}\n\n.v-application .blue.lighten-1{\n  background-color:#42a5f5!important;\n  border-color:#42a5f5!important\n}\n\n.v-application .blue--text.text--lighten-1{\n  color:#42a5f5!important;\n  caret-color:#42a5f5!important\n}\n\n.v-application .blue.darken-1{\n  background-color:#1e88e5!important;\n  border-color:#1e88e5!important\n}\n\n.v-application .blue--text.text--darken-1{\n  color:#1e88e5!important;\n  caret-color:#1e88e5!important\n}\n\n.v-application .blue.darken-2{\n  background-color:#1976d2!important;\n  border-color:#1976d2!important\n}\n\n.v-application .blue--text.text--darken-2{\n  color:#1976d2!important;\n  caret-color:#1976d2!important\n}\n\n.v-application .blue.darken-3{\n  background-color:#1565c0!important;\n  border-color:#1565c0!important\n}\n\n.v-application .blue--text.text--darken-3{\n  color:#1565c0!important;\n  caret-color:#1565c0!important\n}\n\n.v-application .blue.darken-4{\n  background-color:#0d47a1!important;\n  border-color:#0d47a1!important\n}\n\n.v-application .blue--text.text--darken-4{\n  color:#0d47a1!important;\n  caret-color:#0d47a1!important\n}\n\n.v-application .blue.accent-1{\n  background-color:#82b1ff!important;\n  border-color:#82b1ff!important\n}\n\n.v-application .blue--text.text--accent-1{\n  color:#82b1ff!important;\n  caret-color:#82b1ff!important\n}\n\n.v-application .blue.accent-2{\n  background-color:#448aff!important;\n  border-color:#448aff!important\n}\n\n.v-application .blue--text.text--accent-2{\n  color:#448aff!important;\n  caret-color:#448aff!important\n}\n\n.v-application .blue.accent-3{\n  background-color:#2979ff!important;\n  border-color:#2979ff!important\n}\n\n.v-application .blue--text.text--accent-3{\n  color:#2979ff!important;\n  caret-color:#2979ff!important\n}\n\n.v-application .blue.accent-4{\n  background-color:#2962ff!important;\n  border-color:#2962ff!important\n}\n\n.v-application .blue--text.text--accent-4{\n  color:#2962ff!important;\n  caret-color:#2962ff!important\n}\n\n.v-application .light-blue{\n  background-color:#03a9f4!important;\n  border-color:#03a9f4!important\n}\n\n.v-application .light-blue--text{\n  color:#03a9f4!important;\n  caret-color:#03a9f4!important\n}\n\n.v-application .light-blue.lighten-5{\n  background-color:#e1f5fe!important;\n  border-color:#e1f5fe!important\n}\n\n.v-application .light-blue--text.text--lighten-5{\n  color:#e1f5fe!important;\n  caret-color:#e1f5fe!important\n}\n\n.v-application .light-blue.lighten-4{\n  background-color:#b3e5fc!important;\n  border-color:#b3e5fc!important\n}\n\n.v-application .light-blue--text.text--lighten-4{\n  color:#b3e5fc!important;\n  caret-color:#b3e5fc!important\n}\n\n.v-application .light-blue.lighten-3{\n  background-color:#81d4fa!important;\n  border-color:#81d4fa!important\n}\n\n.v-application .light-blue--text.text--lighten-3{\n  color:#81d4fa!important;\n  caret-color:#81d4fa!important\n}\n\n.v-application .light-blue.lighten-2{\n  background-color:#4fc3f7!important;\n  border-color:#4fc3f7!important\n}\n\n.v-application .light-blue--text.text--lighten-2{\n  color:#4fc3f7!important;\n  caret-color:#4fc3f7!important\n}\n\n.v-application .light-blue.lighten-1{\n  background-color:#29b6f6!important;\n  border-color:#29b6f6!important\n}\n\n.v-application .light-blue--text.text--lighten-1{\n  color:#29b6f6!important;\n  caret-color:#29b6f6!important\n}\n\n.v-application .light-blue.darken-1{\n  background-color:#039be5!important;\n  border-color:#039be5!important\n}\n\n.v-application .light-blue--text.text--darken-1{\n  color:#039be5!important;\n  caret-color:#039be5!important\n}\n\n.v-application .light-blue.darken-2{\n  background-color:#0288d1!important;\n  border-color:#0288d1!important\n}\n\n.v-application .light-blue--text.text--darken-2{\n  color:#0288d1!important;\n  caret-color:#0288d1!important\n}\n\n.v-application .light-blue.darken-3{\n  background-color:#0277bd!important;\n  border-color:#0277bd!important\n}\n\n.v-application .light-blue--text.text--darken-3{\n  color:#0277bd!important;\n  caret-color:#0277bd!important\n}\n\n.v-application .light-blue.darken-4{\n  background-color:#01579b!important;\n  border-color:#01579b!important\n}\n\n.v-application .light-blue--text.text--darken-4{\n  color:#01579b!important;\n  caret-color:#01579b!important\n}\n\n.v-application .light-blue.accent-1{\n  background-color:#80d8ff!important;\n  border-color:#80d8ff!important\n}\n\n.v-application .light-blue--text.text--accent-1{\n  color:#80d8ff!important;\n  caret-color:#80d8ff!important\n}\n\n.v-application .light-blue.accent-2{\n  background-color:#40c4ff!important;\n  border-color:#40c4ff!important\n}\n\n.v-application .light-blue--text.text--accent-2{\n  color:#40c4ff!important;\n  caret-color:#40c4ff!important\n}\n\n.v-application .light-blue.accent-3{\n  background-color:#00b0ff!important;\n  border-color:#00b0ff!important\n}\n\n.v-application .light-blue--text.text--accent-3{\n  color:#00b0ff!important;\n  caret-color:#00b0ff!important\n}\n\n.v-application .light-blue.accent-4{\n  background-color:#0091ea!important;\n  border-color:#0091ea!important\n}\n\n.v-application .light-blue--text.text--accent-4{\n  color:#0091ea!important;\n  caret-color:#0091ea!important\n}\n\n.v-application .cyan{\n  background-color:#00bcd4!important;\n  border-color:#00bcd4!important\n}\n\n.v-application .cyan--text{\n  color:#00bcd4!important;\n  caret-color:#00bcd4!important\n}\n\n.v-application .cyan.lighten-5{\n  background-color:#e0f7fa!important;\n  border-color:#e0f7fa!important\n}\n\n.v-application .cyan--text.text--lighten-5{\n  color:#e0f7fa!important;\n  caret-color:#e0f7fa!important\n}\n\n.v-application .cyan.lighten-4{\n  background-color:#b2ebf2!important;\n  border-color:#b2ebf2!important\n}\n\n.v-application .cyan--text.text--lighten-4{\n  color:#b2ebf2!important;\n  caret-color:#b2ebf2!important\n}\n\n.v-application .cyan.lighten-3{\n  background-color:#80deea!important;\n  border-color:#80deea!important\n}\n\n.v-application .cyan--text.text--lighten-3{\n  color:#80deea!important;\n  caret-color:#80deea!important\n}\n\n.v-application .cyan.lighten-2{\n  background-color:#4dd0e1!important;\n  border-color:#4dd0e1!important\n}\n\n.v-application .cyan--text.text--lighten-2{\n  color:#4dd0e1!important;\n  caret-color:#4dd0e1!important\n}\n\n.v-application .cyan.lighten-1{\n  background-color:#26c6da!important;\n  border-color:#26c6da!important\n}\n\n.v-application .cyan--text.text--lighten-1{\n  color:#26c6da!important;\n  caret-color:#26c6da!important\n}\n\n.v-application .cyan.darken-1{\n  background-color:#00acc1!important;\n  border-color:#00acc1!important\n}\n\n.v-application .cyan--text.text--darken-1{\n  color:#00acc1!important;\n  caret-color:#00acc1!important\n}\n\n.v-application .cyan.darken-2{\n  background-color:#0097a7!important;\n  border-color:#0097a7!important\n}\n\n.v-application .cyan--text.text--darken-2{\n  color:#0097a7!important;\n  caret-color:#0097a7!important\n}\n\n.v-application .cyan.darken-3{\n  background-color:#00838f!important;\n  border-color:#00838f!important\n}\n\n.v-application .cyan--text.text--darken-3{\n  color:#00838f!important;\n  caret-color:#00838f!important\n}\n\n.v-application .cyan.darken-4{\n  background-color:#006064!important;\n  border-color:#006064!important\n}\n\n.v-application .cyan--text.text--darken-4{\n  color:#006064!important;\n  caret-color:#006064!important\n}\n\n.v-application .cyan.accent-1{\n  background-color:#84ffff!important;\n  border-color:#84ffff!important\n}\n\n.v-application .cyan--text.text--accent-1{\n  color:#84ffff!important;\n  caret-color:#84ffff!important\n}\n\n.v-application .cyan.accent-2{\n  background-color:#18ffff!important;\n  border-color:#18ffff!important\n}\n\n.v-application .cyan--text.text--accent-2{\n  color:#18ffff!important;\n  caret-color:#18ffff!important\n}\n\n.v-application .cyan.accent-3{\n  background-color:#00e5ff!important;\n  border-color:#00e5ff!important\n}\n\n.v-application .cyan--text.text--accent-3{\n  color:#00e5ff!important;\n  caret-color:#00e5ff!important\n}\n\n.v-application .cyan.accent-4{\n  background-color:#00b8d4!important;\n  border-color:#00b8d4!important\n}\n\n.v-application .cyan--text.text--accent-4{\n  color:#00b8d4!important;\n  caret-color:#00b8d4!important\n}\n\n.v-application .teal{\n  background-color:#009688!important;\n  border-color:#009688!important\n}\n\n.v-application .teal--text{\n  color:#009688!important;\n  caret-color:#009688!important\n}\n\n.v-application .teal.lighten-5{\n  background-color:#e0f2f1!important;\n  border-color:#e0f2f1!important\n}\n\n.v-application .teal--text.text--lighten-5{\n  color:#e0f2f1!important;\n  caret-color:#e0f2f1!important\n}\n\n.v-application .teal.lighten-4{\n  background-color:#b2dfdb!important;\n  border-color:#b2dfdb!important\n}\n\n.v-application .teal--text.text--lighten-4{\n  color:#b2dfdb!important;\n  caret-color:#b2dfdb!important\n}\n\n.v-application .teal.lighten-3{\n  background-color:#80cbc4!important;\n  border-color:#80cbc4!important\n}\n\n.v-application .teal--text.text--lighten-3{\n  color:#80cbc4!important;\n  caret-color:#80cbc4!important\n}\n\n.v-application .teal.lighten-2{\n  background-color:#4db6ac!important;\n  border-color:#4db6ac!important\n}\n\n.v-application .teal--text.text--lighten-2{\n  color:#4db6ac!important;\n  caret-color:#4db6ac!important\n}\n\n.v-application .teal.lighten-1{\n  background-color:#26a69a!important;\n  border-color:#26a69a!important\n}\n\n.v-application .teal--text.text--lighten-1{\n  color:#26a69a!important;\n  caret-color:#26a69a!important\n}\n\n.v-application .teal.darken-1{\n  background-color:#00897b!important;\n  border-color:#00897b!important\n}\n\n.v-application .teal--text.text--darken-1{\n  color:#00897b!important;\n  caret-color:#00897b!important\n}\n\n.v-application .teal.darken-2{\n  background-color:#00796b!important;\n  border-color:#00796b!important\n}\n\n.v-application .teal--text.text--darken-2{\n  color:#00796b!important;\n  caret-color:#00796b!important\n}\n\n.v-application .teal.darken-3{\n  background-color:#00695c!important;\n  border-color:#00695c!important\n}\n\n.v-application .teal--text.text--darken-3{\n  color:#00695c!important;\n  caret-color:#00695c!important\n}\n\n.v-application .teal.darken-4{\n  background-color:#004d40!important;\n  border-color:#004d40!important\n}\n\n.v-application .teal--text.text--darken-4{\n  color:#004d40!important;\n  caret-color:#004d40!important\n}\n\n.v-application .teal.accent-1{\n  background-color:#a7ffeb!important;\n  border-color:#a7ffeb!important\n}\n\n.v-application .teal--text.text--accent-1{\n  color:#a7ffeb!important;\n  caret-color:#a7ffeb!important\n}\n\n.v-application .teal.accent-2{\n  background-color:#64ffda!important;\n  border-color:#64ffda!important\n}\n\n.v-application .teal--text.text--accent-2{\n  color:#64ffda!important;\n  caret-color:#64ffda!important\n}\n\n.v-application .teal.accent-3{\n  background-color:#1de9b6!important;\n  border-color:#1de9b6!important\n}\n\n.v-application .teal--text.text--accent-3{\n  color:#1de9b6!important;\n  caret-color:#1de9b6!important\n}\n\n.v-application .teal.accent-4{\n  background-color:#00bfa5!important;\n  border-color:#00bfa5!important\n}\n\n.v-application .teal--text.text--accent-4{\n  color:#00bfa5!important;\n  caret-color:#00bfa5!important\n}\n\n.v-application .green{\n  background-color:#4caf50!important;\n  border-color:#4caf50!important\n}\n\n.v-application .green--text{\n  color:#4caf50!important;\n  caret-color:#4caf50!important\n}\n\n.v-application .green.lighten-5{\n  background-color:#e8f5e9!important;\n  border-color:#e8f5e9!important\n}\n\n.v-application .green--text.text--lighten-5{\n  color:#e8f5e9!important;\n  caret-color:#e8f5e9!important\n}\n\n.v-application .green.lighten-4{\n  background-color:#c8e6c9!important;\n  border-color:#c8e6c9!important\n}\n\n.v-application .green--text.text--lighten-4{\n  color:#c8e6c9!important;\n  caret-color:#c8e6c9!important\n}\n\n.v-application .green.lighten-3{\n  background-color:#a5d6a7!important;\n  border-color:#a5d6a7!important\n}\n\n.v-application .green--text.text--lighten-3{\n  color:#a5d6a7!important;\n  caret-color:#a5d6a7!important\n}\n\n.v-application .green.lighten-2{\n  background-color:#81c784!important;\n  border-color:#81c784!important\n}\n\n.v-application .green--text.text--lighten-2{\n  color:#81c784!important;\n  caret-color:#81c784!important\n}\n\n.v-application .green.lighten-1{\n  background-color:#66bb6a!important;\n  border-color:#66bb6a!important\n}\n\n.v-application .green--text.text--lighten-1{\n  color:#66bb6a!important;\n  caret-color:#66bb6a!important\n}\n\n.v-application .green.darken-1{\n  background-color:#43a047!important;\n  border-color:#43a047!important\n}\n\n.v-application .green--text.text--darken-1{\n  color:#43a047!important;\n  caret-color:#43a047!important\n}\n\n.v-application .green.darken-2{\n  background-color:#388e3c!important;\n  border-color:#388e3c!important\n}\n\n.v-application .green--text.text--darken-2{\n  color:#388e3c!important;\n  caret-color:#388e3c!important\n}\n\n.v-application .green.darken-3{\n  background-color:#2e7d32!important;\n  border-color:#2e7d32!important\n}\n\n.v-application .green--text.text--darken-3{\n  color:#2e7d32!important;\n  caret-color:#2e7d32!important\n}\n\n.v-application .green.darken-4{\n  background-color:#1b5e20!important;\n  border-color:#1b5e20!important\n}\n\n.v-application .green--text.text--darken-4{\n  color:#1b5e20!important;\n  caret-color:#1b5e20!important\n}\n\n.v-application .green.accent-1{\n  background-color:#b9f6ca!important;\n  border-color:#b9f6ca!important\n}\n\n.v-application .green--text.text--accent-1{\n  color:#b9f6ca!important;\n  caret-color:#b9f6ca!important\n}\n\n.v-application .green.accent-2{\n  background-color:#69f0ae!important;\n  border-color:#69f0ae!important\n}\n\n.v-application .green--text.text--accent-2{\n  color:#69f0ae!important;\n  caret-color:#69f0ae!important\n}\n\n.v-application .green.accent-3{\n  background-color:#00e676!important;\n  border-color:#00e676!important\n}\n\n.v-application .green--text.text--accent-3{\n  color:#00e676!important;\n  caret-color:#00e676!important\n}\n\n.v-application .green.accent-4{\n  background-color:#00c853!important;\n  border-color:#00c853!important\n}\n\n.v-application .green--text.text--accent-4{\n  color:#00c853!important;\n  caret-color:#00c853!important\n}\n\n.v-application .light-green{\n  background-color:#8bc34a!important;\n  border-color:#8bc34a!important\n}\n\n.v-application .light-green--text{\n  color:#8bc34a!important;\n  caret-color:#8bc34a!important\n}\n\n.v-application .light-green.lighten-5{\n  background-color:#f1f8e9!important;\n  border-color:#f1f8e9!important\n}\n\n.v-application .light-green--text.text--lighten-5{\n  color:#f1f8e9!important;\n  caret-color:#f1f8e9!important\n}\n\n.v-application .light-green.lighten-4{\n  background-color:#dcedc8!important;\n  border-color:#dcedc8!important\n}\n\n.v-application .light-green--text.text--lighten-4{\n  color:#dcedc8!important;\n  caret-color:#dcedc8!important\n}\n\n.v-application .light-green.lighten-3{\n  background-color:#c5e1a5!important;\n  border-color:#c5e1a5!important\n}\n\n.v-application .light-green--text.text--lighten-3{\n  color:#c5e1a5!important;\n  caret-color:#c5e1a5!important\n}\n\n.v-application .light-green.lighten-2{\n  background-color:#aed581!important;\n  border-color:#aed581!important\n}\n\n.v-application .light-green--text.text--lighten-2{\n  color:#aed581!important;\n  caret-color:#aed581!important\n}\n\n.v-application .light-green.lighten-1{\n  background-color:#9ccc65!important;\n  border-color:#9ccc65!important\n}\n\n.v-application .light-green--text.text--lighten-1{\n  color:#9ccc65!important;\n  caret-color:#9ccc65!important\n}\n\n.v-application .light-green.darken-1{\n  background-color:#7cb342!important;\n  border-color:#7cb342!important\n}\n\n.v-application .light-green--text.text--darken-1{\n  color:#7cb342!important;\n  caret-color:#7cb342!important\n}\n\n.v-application .light-green.darken-2{\n  background-color:#689f38!important;\n  border-color:#689f38!important\n}\n\n.v-application .light-green--text.text--darken-2{\n  color:#689f38!important;\n  caret-color:#689f38!important\n}\n\n.v-application .light-green.darken-3{\n  background-color:#558b2f!important;\n  border-color:#558b2f!important\n}\n\n.v-application .light-green--text.text--darken-3{\n  color:#558b2f!important;\n  caret-color:#558b2f!important\n}\n\n.v-application .light-green.darken-4{\n  background-color:#33691e!important;\n  border-color:#33691e!important\n}\n\n.v-application .light-green--text.text--darken-4{\n  color:#33691e!important;\n  caret-color:#33691e!important\n}\n\n.v-application .light-green.accent-1{\n  background-color:#ccff90!important;\n  border-color:#ccff90!important\n}\n\n.v-application .light-green--text.text--accent-1{\n  color:#ccff90!important;\n  caret-color:#ccff90!important\n}\n\n.v-application .light-green.accent-2{\n  background-color:#b2ff59!important;\n  border-color:#b2ff59!important\n}\n\n.v-application .light-green--text.text--accent-2{\n  color:#b2ff59!important;\n  caret-color:#b2ff59!important\n}\n\n.v-application .light-green.accent-3{\n  background-color:#76ff03!important;\n  border-color:#76ff03!important\n}\n\n.v-application .light-green--text.text--accent-3{\n  color:#76ff03!important;\n  caret-color:#76ff03!important\n}\n\n.v-application .light-green.accent-4{\n  background-color:#64dd17!important;\n  border-color:#64dd17!important\n}\n\n.v-application .light-green--text.text--accent-4{\n  color:#64dd17!important;\n  caret-color:#64dd17!important\n}\n\n.v-application .lime{\n  background-color:#cddc39!important;\n  border-color:#cddc39!important\n}\n\n.v-application .lime--text{\n  color:#cddc39!important;\n  caret-color:#cddc39!important\n}\n\n.v-application .lime.lighten-5{\n  background-color:#f9fbe7!important;\n  border-color:#f9fbe7!important\n}\n\n.v-application .lime--text.text--lighten-5{\n  color:#f9fbe7!important;\n  caret-color:#f9fbe7!important\n}\n\n.v-application .lime.lighten-4{\n  background-color:#f0f4c3!important;\n  border-color:#f0f4c3!important\n}\n\n.v-application .lime--text.text--lighten-4{\n  color:#f0f4c3!important;\n  caret-color:#f0f4c3!important\n}\n\n.v-application .lime.lighten-3{\n  background-color:#e6ee9c!important;\n  border-color:#e6ee9c!important\n}\n\n.v-application .lime--text.text--lighten-3{\n  color:#e6ee9c!important;\n  caret-color:#e6ee9c!important\n}\n\n.v-application .lime.lighten-2{\n  background-color:#dce775!important;\n  border-color:#dce775!important\n}\n\n.v-application .lime--text.text--lighten-2{\n  color:#dce775!important;\n  caret-color:#dce775!important\n}\n\n.v-application .lime.lighten-1{\n  background-color:#d4e157!important;\n  border-color:#d4e157!important\n}\n\n.v-application .lime--text.text--lighten-1{\n  color:#d4e157!important;\n  caret-color:#d4e157!important\n}\n\n.v-application .lime.darken-1{\n  background-color:#c0ca33!important;\n  border-color:#c0ca33!important\n}\n\n.v-application .lime--text.text--darken-1{\n  color:#c0ca33!important;\n  caret-color:#c0ca33!important\n}\n\n.v-application .lime.darken-2{\n  background-color:#afb42b!important;\n  border-color:#afb42b!important\n}\n\n.v-application .lime--text.text--darken-2{\n  color:#afb42b!important;\n  caret-color:#afb42b!important\n}\n\n.v-application .lime.darken-3{\n  background-color:#9e9d24!important;\n  border-color:#9e9d24!important\n}\n\n.v-application .lime--text.text--darken-3{\n  color:#9e9d24!important;\n  caret-color:#9e9d24!important\n}\n\n.v-application .lime.darken-4{\n  background-color:#827717!important;\n  border-color:#827717!important\n}\n\n.v-application .lime--text.text--darken-4{\n  color:#827717!important;\n  caret-color:#827717!important\n}\n\n.v-application .lime.accent-1{\n  background-color:#f4ff81!important;\n  border-color:#f4ff81!important\n}\n\n.v-application .lime--text.text--accent-1{\n  color:#f4ff81!important;\n  caret-color:#f4ff81!important\n}\n\n.v-application .lime.accent-2{\n  background-color:#eeff41!important;\n  border-color:#eeff41!important\n}\n\n.v-application .lime--text.text--accent-2{\n  color:#eeff41!important;\n  caret-color:#eeff41!important\n}\n\n.v-application .lime.accent-3{\n  background-color:#c6ff00!important;\n  border-color:#c6ff00!important\n}\n\n.v-application .lime--text.text--accent-3{\n  color:#c6ff00!important;\n  caret-color:#c6ff00!important\n}\n\n.v-application .lime.accent-4{\n  background-color:#aeea00!important;\n  border-color:#aeea00!important\n}\n\n.v-application .lime--text.text--accent-4{\n  color:#aeea00!important;\n  caret-color:#aeea00!important\n}\n\n.v-application .yellow{\n  background-color:#ffeb3b!important;\n  border-color:#ffeb3b!important\n}\n\n.v-application .yellow--text{\n  color:#ffeb3b!important;\n  caret-color:#ffeb3b!important\n}\n\n.v-application .yellow.lighten-5{\n  background-color:#fffde7!important;\n  border-color:#fffde7!important\n}\n\n.v-application .yellow--text.text--lighten-5{\n  color:#fffde7!important;\n  caret-color:#fffde7!important\n}\n\n.v-application .yellow.lighten-4{\n  background-color:#fff9c4!important;\n  border-color:#fff9c4!important\n}\n\n.v-application .yellow--text.text--lighten-4{\n  color:#fff9c4!important;\n  caret-color:#fff9c4!important\n}\n\n.v-application .yellow.lighten-3{\n  background-color:#fff59d!important;\n  border-color:#fff59d!important\n}\n\n.v-application .yellow--text.text--lighten-3{\n  color:#fff59d!important;\n  caret-color:#fff59d!important\n}\n\n.v-application .yellow.lighten-2{\n  background-color:#fff176!important;\n  border-color:#fff176!important\n}\n\n.v-application .yellow--text.text--lighten-2{\n  color:#fff176!important;\n  caret-color:#fff176!important\n}\n\n.v-application .yellow.lighten-1{\n  background-color:#ffee58!important;\n  border-color:#ffee58!important\n}\n\n.v-application .yellow--text.text--lighten-1{\n  color:#ffee58!important;\n  caret-color:#ffee58!important\n}\n\n.v-application .yellow.darken-1{\n  background-color:#fdd835!important;\n  border-color:#fdd835!important\n}\n\n.v-application .yellow--text.text--darken-1{\n  color:#fdd835!important;\n  caret-color:#fdd835!important\n}\n\n.v-application .yellow.darken-2{\n  background-color:#fbc02d!important;\n  border-color:#fbc02d!important\n}\n\n.v-application .yellow--text.text--darken-2{\n  color:#fbc02d!important;\n  caret-color:#fbc02d!important\n}\n\n.v-application .yellow.darken-3{\n  background-color:#f9a825!important;\n  border-color:#f9a825!important\n}\n\n.v-application .yellow--text.text--darken-3{\n  color:#f9a825!important;\n  caret-color:#f9a825!important\n}\n\n.v-application .yellow.darken-4{\n  background-color:#f57f17!important;\n  border-color:#f57f17!important\n}\n\n.v-application .yellow--text.text--darken-4{\n  color:#f57f17!important;\n  caret-color:#f57f17!important\n}\n\n.v-application .yellow.accent-1{\n  background-color:#ffff8d!important;\n  border-color:#ffff8d!important\n}\n\n.v-application .yellow--text.text--accent-1{\n  color:#ffff8d!important;\n  caret-color:#ffff8d!important\n}\n\n.v-application .yellow.accent-2{\n  background-color:#ff0!important;\n  border-color:#ff0!important\n}\n\n.v-application .yellow--text.text--accent-2{\n  color:#ff0!important;\n  caret-color:#ff0!important\n}\n\n.v-application .yellow.accent-3{\n  background-color:#ffea00!important;\n  border-color:#ffea00!important\n}\n\n.v-application .yellow--text.text--accent-3{\n  color:#ffea00!important;\n  caret-color:#ffea00!important\n}\n\n.v-application .yellow.accent-4{\n  background-color:#ffd600!important;\n  border-color:#ffd600!important\n}\n\n.v-application .yellow--text.text--accent-4{\n  color:#ffd600!important;\n  caret-color:#ffd600!important\n}\n\n.v-application .amber{\n  background-color:#ffc107!important;\n  border-color:#ffc107!important\n}\n\n.v-application .amber--text{\n  color:#ffc107!important;\n  caret-color:#ffc107!important\n}\n\n.v-application .amber.lighten-5{\n  background-color:#fff8e1!important;\n  border-color:#fff8e1!important\n}\n\n.v-application .amber--text.text--lighten-5{\n  color:#fff8e1!important;\n  caret-color:#fff8e1!important\n}\n\n.v-application .amber.lighten-4{\n  background-color:#ffecb3!important;\n  border-color:#ffecb3!important\n}\n\n.v-application .amber--text.text--lighten-4{\n  color:#ffecb3!important;\n  caret-color:#ffecb3!important\n}\n\n.v-application .amber.lighten-3{\n  background-color:#ffe082!important;\n  border-color:#ffe082!important\n}\n\n.v-application .amber--text.text--lighten-3{\n  color:#ffe082!important;\n  caret-color:#ffe082!important\n}\n\n.v-application .amber.lighten-2{\n  background-color:#ffd54f!important;\n  border-color:#ffd54f!important\n}\n\n.v-application .amber--text.text--lighten-2{\n  color:#ffd54f!important;\n  caret-color:#ffd54f!important\n}\n\n.v-application .amber.lighten-1{\n  background-color:#ffca28!important;\n  border-color:#ffca28!important\n}\n\n.v-application .amber--text.text--lighten-1{\n  color:#ffca28!important;\n  caret-color:#ffca28!important\n}\n\n.v-application .amber.darken-1{\n  background-color:#ffb300!important;\n  border-color:#ffb300!important\n}\n\n.v-application .amber--text.text--darken-1{\n  color:#ffb300!important;\n  caret-color:#ffb300!important\n}\n\n.v-application .amber.darken-2{\n  background-color:#ffa000!important;\n  border-color:#ffa000!important\n}\n\n.v-application .amber--text.text--darken-2{\n  color:#ffa000!important;\n  caret-color:#ffa000!important\n}\n\n.v-application .amber.darken-3{\n  background-color:#ff8f00!important;\n  border-color:#ff8f00!important\n}\n\n.v-application .amber--text.text--darken-3{\n  color:#ff8f00!important;\n  caret-color:#ff8f00!important\n}\n\n.v-application .amber.darken-4{\n  background-color:#ff6f00!important;\n  border-color:#ff6f00!important\n}\n\n.v-application .amber--text.text--darken-4{\n  color:#ff6f00!important;\n  caret-color:#ff6f00!important\n}\n\n.v-application .amber.accent-1{\n  background-color:#ffe57f!important;\n  border-color:#ffe57f!important\n}\n\n.v-application .amber--text.text--accent-1{\n  color:#ffe57f!important;\n  caret-color:#ffe57f!important\n}\n\n.v-application .amber.accent-2{\n  background-color:#ffd740!important;\n  border-color:#ffd740!important\n}\n\n.v-application .amber--text.text--accent-2{\n  color:#ffd740!important;\n  caret-color:#ffd740!important\n}\n\n.v-application .amber.accent-3{\n  background-color:#ffc400!important;\n  border-color:#ffc400!important\n}\n\n.v-application .amber--text.text--accent-3{\n  color:#ffc400!important;\n  caret-color:#ffc400!important\n}\n\n.v-application .amber.accent-4{\n  background-color:#ffab00!important;\n  border-color:#ffab00!important\n}\n\n.v-application .amber--text.text--accent-4{\n  color:#ffab00!important;\n  caret-color:#ffab00!important\n}\n\n.v-application .orange{\n  background-color:#ff9800!important;\n  border-color:#ff9800!important\n}\n\n.v-application .orange--text{\n  color:#ff9800!important;\n  caret-color:#ff9800!important\n}\n\n.v-application .orange.lighten-5{\n  background-color:#fff3e0!important;\n  border-color:#fff3e0!important\n}\n\n.v-application .orange--text.text--lighten-5{\n  color:#fff3e0!important;\n  caret-color:#fff3e0!important\n}\n\n.v-application .orange.lighten-4{\n  background-color:#ffe0b2!important;\n  border-color:#ffe0b2!important\n}\n\n.v-application .orange--text.text--lighten-4{\n  color:#ffe0b2!important;\n  caret-color:#ffe0b2!important\n}\n\n.v-application .orange.lighten-3{\n  background-color:#ffcc80!important;\n  border-color:#ffcc80!important\n}\n\n.v-application .orange--text.text--lighten-3{\n  color:#ffcc80!important;\n  caret-color:#ffcc80!important\n}\n\n.v-application .orange.lighten-2{\n  background-color:#ffb74d!important;\n  border-color:#ffb74d!important\n}\n\n.v-application .orange--text.text--lighten-2{\n  color:#ffb74d!important;\n  caret-color:#ffb74d!important\n}\n\n.v-application .orange.lighten-1{\n  background-color:#ffa726!important;\n  border-color:#ffa726!important\n}\n\n.v-application .orange--text.text--lighten-1{\n  color:#ffa726!important;\n  caret-color:#ffa726!important\n}\n\n.v-application .orange.darken-1{\n  background-color:#fb8c00!important;\n  border-color:#fb8c00!important\n}\n\n.v-application .orange--text.text--darken-1{\n  color:#fb8c00!important;\n  caret-color:#fb8c00!important\n}\n\n.v-application .orange.darken-2{\n  background-color:#f57c00!important;\n  border-color:#f57c00!important\n}\n\n.v-application .orange--text.text--darken-2{\n  color:#f57c00!important;\n  caret-color:#f57c00!important\n}\n\n.v-application .orange.darken-3{\n  background-color:#ef6c00!important;\n  border-color:#ef6c00!important\n}\n\n.v-application .orange--text.text--darken-3{\n  color:#ef6c00!important;\n  caret-color:#ef6c00!important\n}\n\n.v-application .orange.darken-4{\n  background-color:#e65100!important;\n  border-color:#e65100!important\n}\n\n.v-application .orange--text.text--darken-4{\n  color:#e65100!important;\n  caret-color:#e65100!important\n}\n\n.v-application .orange.accent-1{\n  background-color:#ffd180!important;\n  border-color:#ffd180!important\n}\n\n.v-application .orange--text.text--accent-1{\n  color:#ffd180!important;\n  caret-color:#ffd180!important\n}\n\n.v-application .orange.accent-2{\n  background-color:#ffab40!important;\n  border-color:#ffab40!important\n}\n\n.v-application .orange--text.text--accent-2{\n  color:#ffab40!important;\n  caret-color:#ffab40!important\n}\n\n.v-application .orange.accent-3{\n  background-color:#ff9100!important;\n  border-color:#ff9100!important\n}\n\n.v-application .orange--text.text--accent-3{\n  color:#ff9100!important;\n  caret-color:#ff9100!important\n}\n\n.v-application .orange.accent-4{\n  background-color:#ff6d00!important;\n  border-color:#ff6d00!important\n}\n\n.v-application .orange--text.text--accent-4{\n  color:#ff6d00!important;\n  caret-color:#ff6d00!important\n}\n\n.v-application .deep-orange{\n  background-color:#ff5722!important;\n  border-color:#ff5722!important\n}\n\n.v-application .deep-orange--text{\n  color:#ff5722!important;\n  caret-color:#ff5722!important\n}\n\n.v-application .deep-orange.lighten-5{\n  background-color:#fbe9e7!important;\n  border-color:#fbe9e7!important\n}\n\n.v-application .deep-orange--text.text--lighten-5{\n  color:#fbe9e7!important;\n  caret-color:#fbe9e7!important\n}\n\n.v-application .deep-orange.lighten-4{\n  background-color:#ffccbc!important;\n  border-color:#ffccbc!important\n}\n\n.v-application .deep-orange--text.text--lighten-4{\n  color:#ffccbc!important;\n  caret-color:#ffccbc!important\n}\n\n.v-application .deep-orange.lighten-3{\n  background-color:#ffab91!important;\n  border-color:#ffab91!important\n}\n\n.v-application .deep-orange--text.text--lighten-3{\n  color:#ffab91!important;\n  caret-color:#ffab91!important\n}\n\n.v-application .deep-orange.lighten-2{\n  background-color:#ff8a65!important;\n  border-color:#ff8a65!important\n}\n\n.v-application .deep-orange--text.text--lighten-2{\n  color:#ff8a65!important;\n  caret-color:#ff8a65!important\n}\n\n.v-application .deep-orange.lighten-1{\n  background-color:#ff7043!important;\n  border-color:#ff7043!important\n}\n\n.v-application .deep-orange--text.text--lighten-1{\n  color:#ff7043!important;\n  caret-color:#ff7043!important\n}\n\n.v-application .deep-orange.darken-1{\n  background-color:#f4511e!important;\n  border-color:#f4511e!important\n}\n\n.v-application .deep-orange--text.text--darken-1{\n  color:#f4511e!important;\n  caret-color:#f4511e!important\n}\n\n.v-application .deep-orange.darken-2{\n  background-color:#e64a19!important;\n  border-color:#e64a19!important\n}\n\n.v-application .deep-orange--text.text--darken-2{\n  color:#e64a19!important;\n  caret-color:#e64a19!important\n}\n\n.v-application .deep-orange.darken-3{\n  background-color:#d84315!important;\n  border-color:#d84315!important\n}\n\n.v-application .deep-orange--text.text--darken-3{\n  color:#d84315!important;\n  caret-color:#d84315!important\n}\n\n.v-application .deep-orange.darken-4{\n  background-color:#bf360c!important;\n  border-color:#bf360c!important\n}\n\n.v-application .deep-orange--text.text--darken-4{\n  color:#bf360c!important;\n  caret-color:#bf360c!important\n}\n\n.v-application .deep-orange.accent-1{\n  background-color:#ff9e80!important;\n  border-color:#ff9e80!important\n}\n\n.v-application .deep-orange--text.text--accent-1{\n  color:#ff9e80!important;\n  caret-color:#ff9e80!important\n}\n\n.v-application .deep-orange.accent-2{\n  background-color:#ff6e40!important;\n  border-color:#ff6e40!important\n}\n\n.v-application .deep-orange--text.text--accent-2{\n  color:#ff6e40!important;\n  caret-color:#ff6e40!important\n}\n\n.v-application .deep-orange.accent-3{\n  background-color:#ff3d00!important;\n  border-color:#ff3d00!important\n}\n\n.v-application .deep-orange--text.text--accent-3{\n  color:#ff3d00!important;\n  caret-color:#ff3d00!important\n}\n\n.v-application .deep-orange.accent-4{\n  background-color:#dd2c00!important;\n  border-color:#dd2c00!important\n}\n\n.v-application .deep-orange--text.text--accent-4{\n  color:#dd2c00!important;\n  caret-color:#dd2c00!important\n}\n\n.v-application .brown{\n  background-color:#795548!important;\n  border-color:#795548!important\n}\n\n.v-application .brown--text{\n  color:#795548!important;\n  caret-color:#795548!important\n}\n\n.v-application .brown.lighten-5{\n  background-color:#efebe9!important;\n  border-color:#efebe9!important\n}\n\n.v-application .brown--text.text--lighten-5{\n  color:#efebe9!important;\n  caret-color:#efebe9!important\n}\n\n.v-application .brown.lighten-4{\n  background-color:#d7ccc8!important;\n  border-color:#d7ccc8!important\n}\n\n.v-application .brown--text.text--lighten-4{\n  color:#d7ccc8!important;\n  caret-color:#d7ccc8!important\n}\n\n.v-application .brown.lighten-3{\n  background-color:#bcaaa4!important;\n  border-color:#bcaaa4!important\n}\n\n.v-application .brown--text.text--lighten-3{\n  color:#bcaaa4!important;\n  caret-color:#bcaaa4!important\n}\n\n.v-application .brown.lighten-2{\n  background-color:#a1887f!important;\n  border-color:#a1887f!important\n}\n\n.v-application .brown--text.text--lighten-2{\n  color:#a1887f!important;\n  caret-color:#a1887f!important\n}\n\n.v-application .brown.lighten-1{\n  background-color:#8d6e63!important;\n  border-color:#8d6e63!important\n}\n\n.v-application .brown--text.text--lighten-1{\n  color:#8d6e63!important;\n  caret-color:#8d6e63!important\n}\n\n.v-application .brown.darken-1{\n  background-color:#6d4c41!important;\n  border-color:#6d4c41!important\n}\n\n.v-application .brown--text.text--darken-1{\n  color:#6d4c41!important;\n  caret-color:#6d4c41!important\n}\n\n.v-application .brown.darken-2{\n  background-color:#5d4037!important;\n  border-color:#5d4037!important\n}\n\n.v-application .brown--text.text--darken-2{\n  color:#5d4037!important;\n  caret-color:#5d4037!important\n}\n\n.v-application .brown.darken-3{\n  background-color:#4e342e!important;\n  border-color:#4e342e!important\n}\n\n.v-application .brown--text.text--darken-3{\n  color:#4e342e!important;\n  caret-color:#4e342e!important\n}\n\n.v-application .brown.darken-4{\n  background-color:#3e2723!important;\n  border-color:#3e2723!important\n}\n\n.v-application .brown--text.text--darken-4{\n  color:#3e2723!important;\n  caret-color:#3e2723!important\n}\n\n.v-application .blue-grey{\n  background-color:#607d8b!important;\n  border-color:#607d8b!important\n}\n\n.v-application .blue-grey--text{\n  color:#607d8b!important;\n  caret-color:#607d8b!important\n}\n\n.v-application .blue-grey.lighten-5{\n  background-color:#eceff1!important;\n  border-color:#eceff1!important\n}\n\n.v-application .blue-grey--text.text--lighten-5{\n  color:#eceff1!important;\n  caret-color:#eceff1!important\n}\n\n.v-application .blue-grey.lighten-4{\n  background-color:#cfd8dc!important;\n  border-color:#cfd8dc!important\n}\n\n.v-application .blue-grey--text.text--lighten-4{\n  color:#cfd8dc!important;\n  caret-color:#cfd8dc!important\n}\n\n.v-application .blue-grey.lighten-3{\n  background-color:#b0bec5!important;\n  border-color:#b0bec5!important\n}\n\n.v-application .blue-grey--text.text--lighten-3{\n  color:#b0bec5!important;\n  caret-color:#b0bec5!important\n}\n\n.v-application .blue-grey.lighten-2{\n  background-color:#90a4ae!important;\n  border-color:#90a4ae!important\n}\n\n.v-application .blue-grey--text.text--lighten-2{\n  color:#90a4ae!important;\n  caret-color:#90a4ae!important\n}\n\n.v-application .blue-grey.lighten-1{\n  background-color:#78909c!important;\n  border-color:#78909c!important\n}\n\n.v-application .blue-grey--text.text--lighten-1{\n  color:#78909c!important;\n  caret-color:#78909c!important\n}\n\n.v-application .blue-grey.darken-1{\n  background-color:#546e7a!important;\n  border-color:#546e7a!important\n}\n\n.v-application .blue-grey--text.text--darken-1{\n  color:#546e7a!important;\n  caret-color:#546e7a!important\n}\n\n.v-application .blue-grey.darken-2{\n  background-color:#455a64!important;\n  border-color:#455a64!important\n}\n\n.v-application .blue-grey--text.text--darken-2{\n  color:#455a64!important;\n  caret-color:#455a64!important\n}\n\n.v-application .blue-grey.darken-3{\n  background-color:#37474f!important;\n  border-color:#37474f!important\n}\n\n.v-application .blue-grey--text.text--darken-3{\n  color:#37474f!important;\n  caret-color:#37474f!important\n}\n\n.v-application .blue-grey.darken-4{\n  background-color:#263238!important;\n  border-color:#263238!important\n}\n\n.v-application .blue-grey--text.text--darken-4{\n  color:#263238!important;\n  caret-color:#263238!important\n}\n\n.v-application .grey{\n  background-color:#9e9e9e!important;\n  border-color:#9e9e9e!important\n}\n\n.v-application .grey--text{\n  color:#9e9e9e!important;\n  caret-color:#9e9e9e!important\n}\n\n.v-application .grey.lighten-5{\n  background-color:#fafafa!important;\n  border-color:#fafafa!important\n}\n\n.v-application .grey--text.text--lighten-5{\n  color:#fafafa!important;\n  caret-color:#fafafa!important\n}\n\n.v-application .grey.lighten-4{\n  background-color:#f5f5f5!important;\n  border-color:#f5f5f5!important\n}\n\n.v-application .grey--text.text--lighten-4{\n  color:#f5f5f5!important;\n  caret-color:#f5f5f5!important\n}\n\n.v-application .grey.lighten-3{\n  background-color:#eee!important;\n  border-color:#eee!important\n}\n\n.v-application .grey--text.text--lighten-3{\n  color:#eee!important;\n  caret-color:#eee!important\n}\n\n.v-application .grey.lighten-2{\n  background-color:#e0e0e0!important;\n  border-color:#e0e0e0!important\n}\n\n.v-application .grey--text.text--lighten-2{\n  color:#e0e0e0!important;\n  caret-color:#e0e0e0!important\n}\n\n.v-application .grey.lighten-1{\n  background-color:#bdbdbd!important;\n  border-color:#bdbdbd!important\n}\n\n.v-application .grey--text.text--lighten-1{\n  color:#bdbdbd!important;\n  caret-color:#bdbdbd!important\n}\n\n.v-application .grey.darken-1{\n  background-color:#757575!important;\n  border-color:#757575!important\n}\n\n.v-application .grey--text.text--darken-1{\n  color:#757575!important;\n  caret-color:#757575!important\n}\n\n.v-application .grey.darken-2{\n  background-color:#616161!important;\n  border-color:#616161!important\n}\n\n.v-application .grey--text.text--darken-2{\n  color:#616161!important;\n  caret-color:#616161!important\n}\n\n.v-application .grey.darken-3{\n  background-color:#424242!important;\n  border-color:#424242!important\n}\n\n.v-application .grey--text.text--darken-3{\n  color:#424242!important;\n  caret-color:#424242!important\n}\n\n.v-application .grey.darken-4{\n  background-color:#212121!important;\n  border-color:#212121!important\n}\n\n.v-application .grey--text.text--darken-4{\n  color:#212121!important;\n  caret-color:#212121!important\n}\n\n.v-application .shades.black{\n  background-color:#000!important;\n  border-color:#000!important\n}\n\n.v-application .shades--text.text--black{\n  color:#000!important;\n  caret-color:#000!important\n}\n\n.v-application .shades.white{\n  background-color:#fff!important;\n  border-color:#fff!important\n}\n\n.v-application .shades--text.text--white{\n  color:#fff!important;\n  caret-color:#fff!important\n}\n\n.v-application .shades.transparent{\n  background-color:transparent!important;\n  border-color:transparent!important\n}\n\n.v-application .shades--text.text--transparent{\n  color:transparent!important;\n  caret-color:transparent!important\n}\n\n/*!\n * ress.css • v2.0.4\n * MIT License\n * github.com/filipelinhares/ress\n */\n\nhtml{\n  box-sizing:border-box;\n  overflow-y:scroll;\n  -webkit-text-size-adjust:100%;\n  word-break:normal;\n  -moz-tab-size:4;\n  -o-tab-size:4;\n     tab-size:4\n}\n\n*,:after,:before{\n  background-repeat:no-repeat;\n  box-sizing:inherit\n}\n\n:after,:before{\n  text-decoration:inherit;\n  vertical-align:inherit\n}\n\n*{\n  padding:0;\n  margin:0\n}\n\nhr{\n  overflow:visible;\n  height:0\n}\n\ndetails,main{\n  display:block\n}\n\nsummary{\n  display:list-item\n}\n\nsmall{\n  font-size:80%\n}\n\n[hidden]{\n  display:none\n}\n\nabbr[title]{\n  border-bottom:none;\n  text-decoration:underline;\n  -webkit-text-decoration:underline dotted;\n          text-decoration:underline dotted\n}\n\na{\n  background-color:transparent\n}\n\na:active,a:hover{\n  outline-width:0\n}\n\ncode,kbd,pre,samp{\n  font-family:monospace,monospace\n}\n\npre{\n  font-size:1em\n}\n\nb,strong{\n  font-weight:bolder\n}\n\nsub,sup{\n  font-size:75%;\n  line-height:0;\n  position:relative;\n  vertical-align:baseline\n}\n\nsub{\n  bottom:-.25em\n}\n\nsup{\n  top:-.5em\n}\n\ninput{\n  border-radius:0\n}\n\n[disabled]{\n  cursor:default\n}\n\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{\n  height:auto\n}\n\n[type=search]{\n  -webkit-appearance:textfield;\n  outline-offset:-2px\n}\n\n[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{\n  -webkit-appearance:none\n}\n\ntextarea{\n  overflow:auto;\n  resize:vertical\n}\n\nbutton,input,optgroup,select,textarea{\n  font:inherit\n}\n\noptgroup{\n  font-weight:700\n}\n\nbutton{\n  overflow:visible\n}\n\nbutton,select{\n  text-transform:none\n}\n\n[role=button],[type=button],[type=reset],[type=submit],button{\n  cursor:pointer;\n  color:inherit\n}\n\n[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{\n  border-style:none;\n  padding:0\n}\n\n[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button:-moz-focusring{\n  outline:1px dotted ButtonText\n}\n\n[type=reset],[type=submit],button,html [type=button]{\n  -webkit-appearance:button\n}\n\nbutton,input,select,textarea{\n  background-color:transparent;\n  border-style:none\n}\n\nselect{\n  -moz-appearance:none;\n  -webkit-appearance:none\n}\n\nselect::-ms-expand{\n  display:none\n}\n\nselect::-ms-value{\n  color:currentColor\n}\n\nlegend{\n  border:0;\n  color:inherit;\n  display:table;\n  white-space:normal;\n  max-width:100%\n}\n\n::-webkit-file-upload-button{\n  -webkit-appearance:button;\n  color:inherit;\n  font:inherit\n}\n\nimg{\n  border-style:none\n}\n\nprogress{\n  vertical-align:baseline\n}\n\n@media screen{\n  [hidden~=screen]{\n    display:inherit\n  }\n\n  [hidden~=screen]:not(:active):not(:focus):not(:target){\n    position:absolute!important;\n    clip:rect(0 0 0 0)!important\n  }\n}\n\n[aria-busy=true]{\n  cursor:progress\n}\n\n[aria-controls]{\n  cursor:pointer\n}\n\n[aria-disabled=true]{\n  cursor:default\n}\n\n.v-application .elevation-24{\n  box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-23{\n  box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-22{\n  box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-21{\n  box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-20{\n  box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-19{\n  box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-18{\n  box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-17{\n  box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-16{\n  box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-15{\n  box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-14{\n  box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-13{\n  box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-12{\n  box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-11{\n  box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-10{\n  box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-9{\n  box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-8{\n  box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-7{\n  box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-6{\n  box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-5{\n  box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-4{\n  box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-3{\n  box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-2{\n  box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-1{\n  box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)!important\n}\n\n.v-application .elevation-0{\n  box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important\n}\n\n.carousel-transition-enter{\n  transform:translate(100%)\n}\n\n.carousel-transition-leave,.carousel-transition-leave-to{\n  position:absolute;\n  top:0;\n  transform:translate(-100%)\n}\n\n.carousel-reverse-transition-enter{\n  transform:translate(-100%)\n}\n\n.carousel-reverse-transition-leave,.carousel-reverse-transition-leave-to{\n  position:absolute;\n  top:0;\n  transform:translate(100%)\n}\n\n.dialog-transition-enter-active,.dialog-transition-leave-active{\n  pointer-events:none!important\n}\n\n.dialog-transition-enter,.dialog-transition-leave-to{\n  transform:scale(.5);\n  opacity:0\n}\n\n.dialog-transition-enter-to,.dialog-transition-leave{\n  opacity:1\n}\n\n.dialog-bottom-transition-enter,.dialog-bottom-transition-leave-to{\n  transform:translateY(100%)\n}\n\n.dialog-top-transition-enter,.dialog-top-transition-leave-to{\n  transform:translateY(-100%)\n}\n\n.picker-reverse-transition-enter-active,.picker-reverse-transition-leave-active,.picker-transition-enter-active,.picker-transition-leave-active{\n  transition:.3s cubic-bezier(0,0,.2,1)\n}\n\n.picker-reverse-transition-enter,.picker-reverse-transition-leave-to,.picker-transition-enter,.picker-transition-leave-to{\n  opacity:0\n}\n\n.picker-reverse-transition-leave,.picker-reverse-transition-leave-active,.picker-reverse-transition-leave-to,.picker-transition-leave,.picker-transition-leave-active,.picker-transition-leave-to{\n  position:absolute!important\n}\n\n.picker-transition-enter{\n  transform:translateY(100%)\n}\n\n.picker-reverse-transition-enter,.picker-transition-leave-to{\n  transform:translateY(-100%)\n}\n\n.picker-reverse-transition-leave-to{\n  transform:translateY(100%)\n}\n\n.picker-title-transition-enter-to,.picker-title-transition-leave{\n  transform:translate(0)\n}\n\n.picker-title-transition-enter{\n  transform:translate(-100%)\n}\n\n.picker-title-transition-leave-to{\n  opacity:0;\n  transform:translate(100%)\n}\n\n.picker-title-transition-leave,.picker-title-transition-leave-active,.picker-title-transition-leave-to{\n  position:absolute!important\n}\n\n.tab-transition-enter{\n  transform:translate(100%)\n}\n\n.tab-transition-leave,.tab-transition-leave-active{\n  position:absolute;\n  top:0\n}\n\n.tab-transition-leave-to{\n  position:absolute\n}\n\n.tab-reverse-transition-enter,.tab-transition-leave-to{\n  transform:translate(-100%)\n}\n\n.tab-reverse-transition-leave,.tab-reverse-transition-leave-to{\n  top:0;\n  position:absolute;\n  transform:translate(100%)\n}\n\n.expand-transition-enter-active,.expand-transition-leave-active{\n  transition:.3s cubic-bezier(.25,.8,.5,1)!important\n}\n\n.expand-transition-move{\n  transition:transform .6s\n}\n\n.expand-x-transition-enter-active,.expand-x-transition-leave-active{\n  transition:.3s cubic-bezier(.25,.8,.5,1)!important\n}\n\n.expand-x-transition-move{\n  transition:transform .6s\n}\n\n.scale-transition-enter-active,.scale-transition-leave-active{\n  transition:.3s cubic-bezier(.25,.8,.5,1)!important\n}\n\n.scale-transition-move{\n  transition:transform .6s\n}\n\n.scale-transition-enter,.scale-transition-leave,.scale-transition-leave-to{\n  opacity:0;\n  transform:scale(0)\n}\n\n.scale-rotate-transition-enter-active,.scale-rotate-transition-leave-active{\n  transition:.3s cubic-bezier(.25,.8,.5,1)!important\n}\n\n.scale-rotate-transition-move{\n  transition:transform .6s\n}\n\n.scale-rotate-transition-enter,.scale-rotate-transition-leave,.scale-rotate-transition-leave-to{\n  opacity:0;\n  transform:scale(0) rotate(-45deg)\n}\n\n.scale-rotate-reverse-transition-enter-active,.scale-rotate-reverse-transition-leave-active{\n  transition:.3s cubic-bezier(.25,.8,.5,1)!important\n}\n\n.scale-rotate-reverse-transition-move{\n  transition:transform .6s\n}\n\n.scale-rotate-reverse-transition-enter,.scale-rotate-reverse-transition-leave,.scale-rotate-reverse-transition-leave-to{\n  opacity:0;\n  transform:scale(0) rotate(45deg)\n}\n\n.message-transition-enter-active,.message-transition-leave-active{\n  transition:.3s cubic-bezier(.25,.8,.5,1)!important\n}\n\n.message-transition-move{\n  transition:transform .6s\n}\n\n.message-transition-enter,.message-transition-leave-to{\n  opacity:0;\n  transform:translateY(-15px)\n}\n\n.message-transition-leave,.message-transition-leave-active{\n  position:absolute\n}\n\n.slide-y-transition-enter-active,.slide-y-transition-leave-active{\n  transition:.3s cubic-bezier(.25,.8,.5,1)!important\n}\n\n.slide-y-transition-move{\n  transition:transform .6s\n}\n\n.slide-y-transition-enter,.slide-y-transition-leave-to{\n  opacity:0;\n  transform:translateY(-15px)\n}\n\n.slide-y-reverse-transition-enter-active,.slide-y-reverse-transition-leave-active{\n  transition:.3s cubic-bezier(.25,.8,.5,1)!important\n}\n\n.slide-y-reverse-transition-move{\n  transition:transform .6s\n}\n\n.slide-y-reverse-transition-enter,.slide-y-reverse-transition-leave-to{\n  opacity:0;\n  transform:translateY(15px)\n}\n\n.scroll-y-transition-enter-active,.scroll-y-transition-leave-active{\n  transition:.3s cubic-bezier(.25,.8,.5,1)!important\n}\n\n.scroll-y-transition-move{\n  transition:transform .6s\n}\n\n.scroll-y-transition-enter,.scroll-y-transition-leave-to{\n  opacity:0\n}\n\n.scroll-y-transition-enter{\n  transform:translateY(-15px)\n}\n\n.scroll-y-transition-leave-to{\n  transform:translateY(15px)\n}\n\n.scroll-y-reverse-transition-enter-active,.scroll-y-reverse-transition-leave-active{\n  transition:.3s cubic-bezier(.25,.8,.5,1)!important\n}\n\n.scroll-y-reverse-transition-move{\n  transition:transform .6s\n}\n\n.scroll-y-reverse-transition-enter,.scroll-y-reverse-transition-leave-to{\n  opacity:0\n}\n\n.scroll-y-reverse-transition-enter{\n  transform:translateY(15px)\n}\n\n.scroll-y-reverse-transition-leave-to{\n  transform:translateY(-15px)\n}\n\n.scroll-x-transition-enter-active,.scroll-x-transition-leave-active{\n  transition:.3s cubic-bezier(.25,.8,.5,1)!important\n}\n\n.scroll-x-transition-move{\n  transition:transform .6s\n}\n\n.scroll-x-transition-enter,.scroll-x-transition-leave-to{\n  opacity:0\n}\n\n.scroll-x-transition-enter{\n  transform:translateX(-15px)\n}\n\n.scroll-x-transition-leave-to{\n  transform:translateX(15px)\n}\n\n.scroll-x-reverse-transition-enter-active,.scroll-x-reverse-transition-leave-active{\n  transition:.3s cubic-bezier(.25,.8,.5,1)!important\n}\n\n.scroll-x-reverse-transition-move{\n  transition:transform .6s\n}\n\n.scroll-x-reverse-transition-enter,.scroll-x-reverse-transition-leave-to{\n  opacity:0\n}\n\n.scroll-x-reverse-transition-enter{\n  transform:translateX(15px)\n}\n\n.scroll-x-reverse-transition-leave-to{\n  transform:translateX(-15px)\n}\n\n.slide-x-transition-enter-active,.slide-x-transition-leave-active{\n  transition:.3s cubic-bezier(.25,.8,.5,1)!important\n}\n\n.slide-x-transition-move{\n  transition:transform .6s\n}\n\n.slide-x-transition-enter,.slide-x-transition-leave-to{\n  opacity:0;\n  transform:translateX(-15px)\n}\n\n.slide-x-reverse-transition-enter-active,.slide-x-reverse-transition-leave-active{\n  transition:.3s cubic-bezier(.25,.8,.5,1)!important\n}\n\n.slide-x-reverse-transition-move{\n  transition:transform .6s\n}\n\n.slide-x-reverse-transition-enter,.slide-x-reverse-transition-leave-to{\n  opacity:0;\n  transform:translateX(15px)\n}\n\n.fade-transition-enter-active,.fade-transition-leave-active{\n  transition:.3s cubic-bezier(.25,.8,.5,1)!important\n}\n\n.fade-transition-move{\n  transition:transform .6s\n}\n\n.fade-transition-enter,.fade-transition-leave-to{\n  opacity:0!important\n}\n\n.fab-transition-enter-active,.fab-transition-leave-active{\n  transition:.3s cubic-bezier(.25,.8,.5,1)!important\n}\n\n.fab-transition-move{\n  transition:transform .6s\n}\n\n.fab-transition-enter,.fab-transition-leave-to{\n  transform:scale(0) rotate(-45deg)\n}\n\n.v-application .blockquote{\n  padding:16px 0 16px 24px;\n  font-size:18px;\n  font-weight:300\n}\n\n.v-application code,.v-application kbd{\n  border-radius:3px;\n  font-size:85%;\n  font-weight:400\n}\n\n.v-application code{\n  padding:.2em .4em\n}\n\n.v-application kbd{\n  padding:.2em .4rem;\n  box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)\n}\n\n.theme--light.v-application code{\n  background-color:rgba(0,0,0,.05);\n  color:currentColor\n}\n\n.theme--light.v-application kbd{\n  background:#212529;\n  color:#fff\n}\n\n.theme--dark.v-application code{\n  background-color:hsla(0,0%,100%,.1);\n  color:currentColor\n}\n\n.theme--dark.v-application kbd{\n  background:#212529;\n  color:#fff\n}\n\nhtml{\n  font-size:16px;\n  overflow-x:hidden;\n  text-rendering:optimizeLegibility;\n  -webkit-font-smoothing:antialiased;\n  -moz-osx-font-smoothing:grayscale;\n  -webkit-tap-highlight-color:rgba(0,0,0,0)\n}\n\nhtml.overflow-y-hidden{\n  overflow-y:hidden!important\n}\n\n.v-application{\n  font-family:\"Roboto\",sans-serif;\n  line-height:1.5\n}\n\n.v-application ::-ms-clear,.v-application ::-ms-reveal{\n  display:none\n}\n\n@supports(-webkit-touch-callout:none){\n  body{\n    cursor:pointer\n  }\n}\n\n.v-application .theme--light.heading{\n  color:rgba(0,0,0,.87)\n}\n\n.v-application .theme--dark.heading{\n  color:#fff\n}\n\n.v-application ol,.v-application ul{\n  padding-left:24px\n}\n\n.v-application .display-4{\n  font-size:6rem!important;\n  line-height:6rem;\n  letter-spacing:-.015625em!important\n}\n\n.v-application .display-3,.v-application .display-4{\n  font-weight:300;\n  font-family:\"Roboto\",sans-serif!important\n}\n\n.v-application .display-3{\n  font-size:3.75rem!important;\n  line-height:3.75rem;\n  letter-spacing:-.0083333333em!important\n}\n\n.v-application .display-2{\n  font-size:3rem!important;\n  line-height:3.125rem;\n  letter-spacing:normal!important\n}\n\n.v-application .display-1,.v-application .display-2{\n  font-weight:400;\n  font-family:\"Roboto\",sans-serif!important\n}\n\n.v-application .display-1{\n  font-size:2.125rem!important;\n  line-height:2.5rem;\n  letter-spacing:.0073529412em!important\n}\n\n.v-application .headline{\n  font-size:1.5rem!important;\n  font-weight:400;\n  letter-spacing:normal!important\n}\n\n.v-application .headline,.v-application .title{\n  line-height:2rem;\n  font-family:\"Roboto\",sans-serif!important\n}\n\n.v-application .title{\n  font-size:1.25rem!important;\n  font-weight:500;\n  letter-spacing:.0125em!important\n}\n\n.v-application .subtitle-2{\n  font-size:.875rem!important;\n  font-weight:500;\n  letter-spacing:.0071428571em!important;\n  line-height:1.375rem;\n  font-family:\"Roboto\",sans-serif!important\n}\n\n.v-application .subtitle-1{\n  font-size:1rem!important;\n  letter-spacing:.009375em!important;\n  line-height:1.75rem\n}\n\n.v-application .body-2,.v-application .subtitle-1{\n  font-weight:400;\n  font-family:\"Roboto\",sans-serif!important\n}\n\n.v-application .body-2{\n  font-size:.875rem!important;\n  letter-spacing:.0178571429em!important;\n  line-height:1.25rem\n}\n\n.v-application .body-1{\n  font-size:1rem!important;\n  letter-spacing:.03125em!important;\n  line-height:1.5rem\n}\n\n.v-application .body-1,.v-application .caption{\n  font-weight:400;\n  font-family:\"Roboto\",sans-serif!important\n}\n\n.v-application .caption{\n  font-size:.75rem!important;\n  letter-spacing:.0333333333em!important;\n  line-height:1.25rem\n}\n\n.v-application .overline{\n  font-size:.75rem!important;\n  font-weight:500;\n  letter-spacing:.1666666667em!important;\n  line-height:2rem;\n  text-transform:uppercase;\n  font-family:\"Roboto\",sans-serif!important\n}\n\n.v-application p{\n  margin-bottom:16px\n}\n\n@media only print{\n  .v-application .hidden-print-only{\n    display:none!important\n  }\n}\n\n@media only screen{\n  .v-application .hidden-screen-only{\n    display:none!important\n  }\n}\n\n@media only screen and (max-width:599.98px){\n  .v-application .hidden-xs-only{\n    display:none!important\n  }\n}\n\n@media only screen and (min-width:600px)and (max-width:959.98px){\n  .v-application .hidden-sm-only{\n    display:none!important\n  }\n}\n\n@media only screen and (max-width:959.98px){\n  .v-application .hidden-sm-and-down{\n    display:none!important\n  }\n}\n\n@media only screen and (min-width:600px){\n  .v-application .hidden-sm-and-up{\n    display:none!important\n  }\n}\n\n@media only screen and (min-width:960px)and (max-width:1263.98px){\n  .v-application .hidden-md-only{\n    display:none!important\n  }\n}\n\n@media only screen and (max-width:1263.98px){\n  .v-application .hidden-md-and-down{\n    display:none!important\n  }\n}\n\n@media only screen and (min-width:960px){\n  .v-application .hidden-md-and-up{\n    display:none!important\n  }\n}\n\n@media only screen and (min-width:1264px)and (max-width:1903.98px){\n  .v-application .hidden-lg-only{\n    display:none!important\n  }\n}\n\n@media only screen and (max-width:1903.98px){\n  .v-application .hidden-lg-and-down{\n    display:none!important\n  }\n}\n\n@media only screen and (min-width:1264px){\n  .v-application .hidden-lg-and-up{\n    display:none!important\n  }\n}\n\n@media only screen and (min-width:1904px){\n  .v-application .hidden-xl-only{\n    display:none!important\n  }\n}\n\n.d-sr-only,.d-sr-only-focusable:not(:focus){\n  border:0!important;\n  clip:rect(0,0,0,0)!important;\n  height:1px!important;\n  margin:-1px!important;\n  overflow:hidden!important;\n  padding:0!important;\n  position:absolute!important;\n  white-space:nowrap!important;\n  width:1px!important\n}\n\n.v-application .font-weight-thin{\n  font-weight:100!important\n}\n\n.v-application .font-weight-light{\n  font-weight:300!important\n}\n\n.v-application .font-weight-regular{\n  font-weight:400!important\n}\n\n.v-application .font-weight-medium{\n  font-weight:500!important\n}\n\n.v-application .font-weight-bold{\n  font-weight:700!important\n}\n\n.v-application .font-weight-black{\n  font-weight:900!important\n}\n\n.v-application .font-italic{\n  font-style:italic!important\n}\n\n.v-application .transition-fast-out-slow-in{\n  transition:.3s cubic-bezier(.4,0,.2,1)!important\n}\n\n.v-application .transition-linear-out-slow-in{\n  transition:.3s cubic-bezier(0,0,.2,1)!important\n}\n\n.v-application .transition-fast-out-linear-in{\n  transition:.3s cubic-bezier(.4,0,1,1)!important\n}\n\n.v-application .transition-ease-in-out{\n  transition:.3s cubic-bezier(.4,0,.6,1)!important\n}\n\n.v-application .transition-fast-in-fast-out{\n  transition:.3s cubic-bezier(.25,.8,.25,1)!important\n}\n\n.v-application .transition-swing{\n  transition:.3s cubic-bezier(.25,.8,.5,1)!important\n}\n\n.v-application .overflow-auto{\n  overflow:auto!important\n}\n\n.v-application .overflow-hidden{\n  overflow:hidden!important\n}\n\n.v-application .overflow-visible{\n  overflow:visible!important\n}\n\n.v-application .overflow-x-auto{\n  overflow-x:auto!important\n}\n\n.v-application .overflow-x-hidden{\n  overflow-x:hidden!important\n}\n\n.v-application .overflow-y-auto{\n  overflow-y:auto!important\n}\n\n.v-application .overflow-y-hidden{\n  overflow-y:hidden!important\n}\n\n.v-application .d-none{\n  display:none!important\n}\n\n.v-application .d-inline{\n  display:inline!important\n}\n\n.v-application .d-inline-block{\n  display:inline-block!important\n}\n\n.v-application .d-block{\n  display:block!important\n}\n\n.v-application .d-table{\n  display:table!important\n}\n\n.v-application .d-table-row{\n  display:table-row!important\n}\n\n.v-application .d-table-cell{\n  display:table-cell!important\n}\n\n.v-application .d-flex{\n  display:flex!important\n}\n\n.v-application .d-inline-flex{\n  display:inline-flex!important\n}\n\n.v-application .float-none{\n  float:none!important\n}\n\n.v-application .float-left{\n  float:left!important\n}\n\n.v-application .float-right{\n  float:right!important\n}\n\n.v-application--is-rtl .float-end{\n  float:left!important\n}\n\n.v-application--is-ltr .float-end,.v-application--is-rtl .float-start{\n  float:right!important\n}\n\n.v-application--is-ltr .float-start{\n  float:left!important\n}\n\n.v-application .flex-fill{\n  flex:1 1 auto!important\n}\n\n.v-application .flex-row{\n  flex-direction:row!important\n}\n\n.v-application .flex-column{\n  flex-direction:column!important\n}\n\n.v-application .flex-row-reverse{\n  flex-direction:row-reverse!important\n}\n\n.v-application .flex-column-reverse{\n  flex-direction:column-reverse!important\n}\n\n.v-application .flex-grow-0{\n  flex-grow:0!important\n}\n\n.v-application .flex-grow-1{\n  flex-grow:1!important\n}\n\n.v-application .flex-shrink-0{\n  flex-shrink:0!important\n}\n\n.v-application .flex-shrink-1{\n  flex-shrink:1!important\n}\n\n.v-application .flex-wrap{\n  flex-wrap:wrap!important\n}\n\n.v-application .flex-nowrap{\n  flex-wrap:nowrap!important\n}\n\n.v-application .flex-wrap-reverse{\n  flex-wrap:wrap-reverse!important\n}\n\n.v-application .justify-start{\n  justify-content:flex-start!important\n}\n\n.v-application .justify-end{\n  justify-content:flex-end!important\n}\n\n.v-application .justify-center{\n  justify-content:center!important\n}\n\n.v-application .justify-space-between{\n  justify-content:space-between!important\n}\n\n.v-application .justify-space-around{\n  justify-content:space-around!important\n}\n\n.v-application .align-start{\n  align-items:flex-start!important\n}\n\n.v-application .align-end{\n  align-items:flex-end!important\n}\n\n.v-application .align-center{\n  align-items:center!important\n}\n\n.v-application .align-baseline{\n  align-items:baseline!important\n}\n\n.v-application .align-stretch{\n  align-items:stretch!important\n}\n\n.v-application .align-content-start{\n  align-content:flex-start!important\n}\n\n.v-application .align-content-end{\n  align-content:flex-end!important\n}\n\n.v-application .align-content-center{\n  align-content:center!important\n}\n\n.v-application .align-content-space-between{\n  align-content:space-between!important\n}\n\n.v-application .align-content-space-around{\n  align-content:space-around!important\n}\n\n.v-application .align-content-stretch{\n  align-content:stretch!important\n}\n\n.v-application .align-self-auto{\n  align-self:auto!important\n}\n\n.v-application .align-self-start{\n  align-self:flex-start!important\n}\n\n.v-application .align-self-end{\n  align-self:flex-end!important\n}\n\n.v-application .align-self-center{\n  align-self:center!important\n}\n\n.v-application .align-self-baseline{\n  align-self:baseline!important\n}\n\n.v-application .align-self-stretch{\n  align-self:stretch!important\n}\n\n.v-application .order-first{\n  order:-1!important\n}\n\n.v-application .order-0{\n  order:0!important\n}\n\n.v-application .order-1{\n  order:1!important\n}\n\n.v-application .order-2{\n  order:2!important\n}\n\n.v-application .order-3{\n  order:3!important\n}\n\n.v-application .order-4{\n  order:4!important\n}\n\n.v-application .order-5{\n  order:5!important\n}\n\n.v-application .order-6{\n  order:6!important\n}\n\n.v-application .order-7{\n  order:7!important\n}\n\n.v-application .order-8{\n  order:8!important\n}\n\n.v-application .order-9{\n  order:9!important\n}\n\n.v-application .order-10{\n  order:10!important\n}\n\n.v-application .order-11{\n  order:11!important\n}\n\n.v-application .order-12{\n  order:12!important\n}\n\n.v-application .order-last{\n  order:13!important\n}\n\n.v-application .ma-0{\n  margin:0!important\n}\n\n.v-application .ma-1{\n  margin:4px!important\n}\n\n.v-application .ma-2{\n  margin:8px!important\n}\n\n.v-application .ma-3{\n  margin:12px!important\n}\n\n.v-application .ma-4{\n  margin:16px!important\n}\n\n.v-application .ma-5{\n  margin:20px!important\n}\n\n.v-application .ma-6{\n  margin:24px!important\n}\n\n.v-application .ma-7{\n  margin:28px!important\n}\n\n.v-application .ma-8{\n  margin:32px!important\n}\n\n.v-application .ma-9{\n  margin:36px!important\n}\n\n.v-application .ma-10{\n  margin:40px!important\n}\n\n.v-application .ma-11{\n  margin:44px!important\n}\n\n.v-application .ma-12{\n  margin:48px!important\n}\n\n.v-application .ma-13{\n  margin:52px!important\n}\n\n.v-application .ma-14{\n  margin:56px!important\n}\n\n.v-application .ma-15{\n  margin:60px!important\n}\n\n.v-application .ma-16{\n  margin:64px!important\n}\n\n.v-application .ma-auto{\n  margin:auto!important\n}\n\n.v-application .mx-0{\n  margin-right:0!important;\n  margin-left:0!important\n}\n\n.v-application .mx-1{\n  margin-right:4px!important;\n  margin-left:4px!important\n}\n\n.v-application .mx-2{\n  margin-right:8px!important;\n  margin-left:8px!important\n}\n\n.v-application .mx-3{\n  margin-right:12px!important;\n  margin-left:12px!important\n}\n\n.v-application .mx-4{\n  margin-right:16px!important;\n  margin-left:16px!important\n}\n\n.v-application .mx-5{\n  margin-right:20px!important;\n  margin-left:20px!important\n}\n\n.v-application .mx-6{\n  margin-right:24px!important;\n  margin-left:24px!important\n}\n\n.v-application .mx-7{\n  margin-right:28px!important;\n  margin-left:28px!important\n}\n\n.v-application .mx-8{\n  margin-right:32px!important;\n  margin-left:32px!important\n}\n\n.v-application .mx-9{\n  margin-right:36px!important;\n  margin-left:36px!important\n}\n\n.v-application .mx-10{\n  margin-right:40px!important;\n  margin-left:40px!important\n}\n\n.v-application .mx-11{\n  margin-right:44px!important;\n  margin-left:44px!important\n}\n\n.v-application .mx-12{\n  margin-right:48px!important;\n  margin-left:48px!important\n}\n\n.v-application .mx-13{\n  margin-right:52px!important;\n  margin-left:52px!important\n}\n\n.v-application .mx-14{\n  margin-right:56px!important;\n  margin-left:56px!important\n}\n\n.v-application .mx-15{\n  margin-right:60px!important;\n  margin-left:60px!important\n}\n\n.v-application .mx-16{\n  margin-right:64px!important;\n  margin-left:64px!important\n}\n\n.v-application .mx-auto{\n  margin-right:auto!important;\n  margin-left:auto!important\n}\n\n.v-application .my-0{\n  margin-top:0!important;\n  margin-bottom:0!important\n}\n\n.v-application .my-1{\n  margin-top:4px!important;\n  margin-bottom:4px!important\n}\n\n.v-application .my-2{\n  margin-top:8px!important;\n  margin-bottom:8px!important\n}\n\n.v-application .my-3{\n  margin-top:12px!important;\n  margin-bottom:12px!important\n}\n\n.v-application .my-4{\n  margin-top:16px!important;\n  margin-bottom:16px!important\n}\n\n.v-application .my-5{\n  margin-top:20px!important;\n  margin-bottom:20px!important\n}\n\n.v-application .my-6{\n  margin-top:24px!important;\n  margin-bottom:24px!important\n}\n\n.v-application .my-7{\n  margin-top:28px!important;\n  margin-bottom:28px!important\n}\n\n.v-application .my-8{\n  margin-top:32px!important;\n  margin-bottom:32px!important\n}\n\n.v-application .my-9{\n  margin-top:36px!important;\n  margin-bottom:36px!important\n}\n\n.v-application .my-10{\n  margin-top:40px!important;\n  margin-bottom:40px!important\n}\n\n.v-application .my-11{\n  margin-top:44px!important;\n  margin-bottom:44px!important\n}\n\n.v-application .my-12{\n  margin-top:48px!important;\n  margin-bottom:48px!important\n}\n\n.v-application .my-13{\n  margin-top:52px!important;\n  margin-bottom:52px!important\n}\n\n.v-application .my-14{\n  margin-top:56px!important;\n  margin-bottom:56px!important\n}\n\n.v-application .my-15{\n  margin-top:60px!important;\n  margin-bottom:60px!important\n}\n\n.v-application .my-16{\n  margin-top:64px!important;\n  margin-bottom:64px!important\n}\n\n.v-application .my-auto{\n  margin-top:auto!important;\n  margin-bottom:auto!important\n}\n\n.v-application .mt-0{\n  margin-top:0!important\n}\n\n.v-application .mt-1{\n  margin-top:4px!important\n}\n\n.v-application .mt-2{\n  margin-top:8px!important\n}\n\n.v-application .mt-3{\n  margin-top:12px!important\n}\n\n.v-application .mt-4{\n  margin-top:16px!important\n}\n\n.v-application .mt-5{\n  margin-top:20px!important\n}\n\n.v-application .mt-6{\n  margin-top:24px!important\n}\n\n.v-application .mt-7{\n  margin-top:28px!important\n}\n\n.v-application .mt-8{\n  margin-top:32px!important\n}\n\n.v-application .mt-9{\n  margin-top:36px!important\n}\n\n.v-application .mt-10{\n  margin-top:40px!important\n}\n\n.v-application .mt-11{\n  margin-top:44px!important\n}\n\n.v-application .mt-12{\n  margin-top:48px!important\n}\n\n.v-application .mt-13{\n  margin-top:52px!important\n}\n\n.v-application .mt-14{\n  margin-top:56px!important\n}\n\n.v-application .mt-15{\n  margin-top:60px!important\n}\n\n.v-application .mt-16{\n  margin-top:64px!important\n}\n\n.v-application .mt-auto{\n  margin-top:auto!important\n}\n\n.v-application .mr-0{\n  margin-right:0!important\n}\n\n.v-application .mr-1{\n  margin-right:4px!important\n}\n\n.v-application .mr-2{\n  margin-right:8px!important\n}\n\n.v-application .mr-3{\n  margin-right:12px!important\n}\n\n.v-application .mr-4{\n  margin-right:16px!important\n}\n\n.v-application .mr-5{\n  margin-right:20px!important\n}\n\n.v-application .mr-6{\n  margin-right:24px!important\n}\n\n.v-application .mr-7{\n  margin-right:28px!important\n}\n\n.v-application .mr-8{\n  margin-right:32px!important\n}\n\n.v-application .mr-9{\n  margin-right:36px!important\n}\n\n.v-application .mr-10{\n  margin-right:40px!important\n}\n\n.v-application .mr-11{\n  margin-right:44px!important\n}\n\n.v-application .mr-12{\n  margin-right:48px!important\n}\n\n.v-application .mr-13{\n  margin-right:52px!important\n}\n\n.v-application .mr-14{\n  margin-right:56px!important\n}\n\n.v-application .mr-15{\n  margin-right:60px!important\n}\n\n.v-application .mr-16{\n  margin-right:64px!important\n}\n\n.v-application .mr-auto{\n  margin-right:auto!important\n}\n\n.v-application .mb-0{\n  margin-bottom:0!important\n}\n\n.v-application .mb-1{\n  margin-bottom:4px!important\n}\n\n.v-application .mb-2{\n  margin-bottom:8px!important\n}\n\n.v-application .mb-3{\n  margin-bottom:12px!important\n}\n\n.v-application .mb-4{\n  margin-bottom:16px!important\n}\n\n.v-application .mb-5{\n  margin-bottom:20px!important\n}\n\n.v-application .mb-6{\n  margin-bottom:24px!important\n}\n\n.v-application .mb-7{\n  margin-bottom:28px!important\n}\n\n.v-application .mb-8{\n  margin-bottom:32px!important\n}\n\n.v-application .mb-9{\n  margin-bottom:36px!important\n}\n\n.v-application .mb-10{\n  margin-bottom:40px!important\n}\n\n.v-application .mb-11{\n  margin-bottom:44px!important\n}\n\n.v-application .mb-12{\n  margin-bottom:48px!important\n}\n\n.v-application .mb-13{\n  margin-bottom:52px!important\n}\n\n.v-application .mb-14{\n  margin-bottom:56px!important\n}\n\n.v-application .mb-15{\n  margin-bottom:60px!important\n}\n\n.v-application .mb-16{\n  margin-bottom:64px!important\n}\n\n.v-application .mb-auto{\n  margin-bottom:auto!important\n}\n\n.v-application .ml-0{\n  margin-left:0!important\n}\n\n.v-application .ml-1{\n  margin-left:4px!important\n}\n\n.v-application .ml-2{\n  margin-left:8px!important\n}\n\n.v-application .ml-3{\n  margin-left:12px!important\n}\n\n.v-application .ml-4{\n  margin-left:16px!important\n}\n\n.v-application .ml-5{\n  margin-left:20px!important\n}\n\n.v-application .ml-6{\n  margin-left:24px!important\n}\n\n.v-application .ml-7{\n  margin-left:28px!important\n}\n\n.v-application .ml-8{\n  margin-left:32px!important\n}\n\n.v-application .ml-9{\n  margin-left:36px!important\n}\n\n.v-application .ml-10{\n  margin-left:40px!important\n}\n\n.v-application .ml-11{\n  margin-left:44px!important\n}\n\n.v-application .ml-12{\n  margin-left:48px!important\n}\n\n.v-application .ml-13{\n  margin-left:52px!important\n}\n\n.v-application .ml-14{\n  margin-left:56px!important\n}\n\n.v-application .ml-15{\n  margin-left:60px!important\n}\n\n.v-application .ml-16{\n  margin-left:64px!important\n}\n\n.v-application .ml-auto{\n  margin-left:auto!important\n}\n\n.v-application--is-ltr .ms-0{\n  margin-left:0!important\n}\n\n.v-application--is-rtl .ms-0{\n  margin-right:0!important\n}\n\n.v-application--is-ltr .ms-1{\n  margin-left:4px!important\n}\n\n.v-application--is-rtl .ms-1{\n  margin-right:4px!important\n}\n\n.v-application--is-ltr .ms-2{\n  margin-left:8px!important\n}\n\n.v-application--is-rtl .ms-2{\n  margin-right:8px!important\n}\n\n.v-application--is-ltr .ms-3{\n  margin-left:12px!important\n}\n\n.v-application--is-rtl .ms-3{\n  margin-right:12px!important\n}\n\n.v-application--is-ltr .ms-4{\n  margin-left:16px!important\n}\n\n.v-application--is-rtl .ms-4{\n  margin-right:16px!important\n}\n\n.v-application--is-ltr .ms-5{\n  margin-left:20px!important\n}\n\n.v-application--is-rtl .ms-5{\n  margin-right:20px!important\n}\n\n.v-application--is-ltr .ms-6{\n  margin-left:24px!important\n}\n\n.v-application--is-rtl .ms-6{\n  margin-right:24px!important\n}\n\n.v-application--is-ltr .ms-7{\n  margin-left:28px!important\n}\n\n.v-application--is-rtl .ms-7{\n  margin-right:28px!important\n}\n\n.v-application--is-ltr .ms-8{\n  margin-left:32px!important\n}\n\n.v-application--is-rtl .ms-8{\n  margin-right:32px!important\n}\n\n.v-application--is-ltr .ms-9{\n  margin-left:36px!important\n}\n\n.v-application--is-rtl .ms-9{\n  margin-right:36px!important\n}\n\n.v-application--is-ltr .ms-10{\n  margin-left:40px!important\n}\n\n.v-application--is-rtl .ms-10{\n  margin-right:40px!important\n}\n\n.v-application--is-ltr .ms-11{\n  margin-left:44px!important\n}\n\n.v-application--is-rtl .ms-11{\n  margin-right:44px!important\n}\n\n.v-application--is-ltr .ms-12{\n  margin-left:48px!important\n}\n\n.v-application--is-rtl .ms-12{\n  margin-right:48px!important\n}\n\n.v-application--is-ltr .ms-13{\n  margin-left:52px!important\n}\n\n.v-application--is-rtl .ms-13{\n  margin-right:52px!important\n}\n\n.v-application--is-ltr .ms-14{\n  margin-left:56px!important\n}\n\n.v-application--is-rtl .ms-14{\n  margin-right:56px!important\n}\n\n.v-application--is-ltr .ms-15{\n  margin-left:60px!important\n}\n\n.v-application--is-rtl .ms-15{\n  margin-right:60px!important\n}\n\n.v-application--is-ltr .ms-16{\n  margin-left:64px!important\n}\n\n.v-application--is-rtl .ms-16{\n  margin-right:64px!important\n}\n\n.v-application--is-ltr .ms-auto{\n  margin-left:auto!important\n}\n\n.v-application--is-rtl .ms-auto{\n  margin-right:auto!important\n}\n\n.v-application--is-ltr .me-0{\n  margin-right:0!important\n}\n\n.v-application--is-rtl .me-0{\n  margin-left:0!important\n}\n\n.v-application--is-ltr .me-1{\n  margin-right:4px!important\n}\n\n.v-application--is-rtl .me-1{\n  margin-left:4px!important\n}\n\n.v-application--is-ltr .me-2{\n  margin-right:8px!important\n}\n\n.v-application--is-rtl .me-2{\n  margin-left:8px!important\n}\n\n.v-application--is-ltr .me-3{\n  margin-right:12px!important\n}\n\n.v-application--is-rtl .me-3{\n  margin-left:12px!important\n}\n\n.v-application--is-ltr .me-4{\n  margin-right:16px!important\n}\n\n.v-application--is-rtl .me-4{\n  margin-left:16px!important\n}\n\n.v-application--is-ltr .me-5{\n  margin-right:20px!important\n}\n\n.v-application--is-rtl .me-5{\n  margin-left:20px!important\n}\n\n.v-application--is-ltr .me-6{\n  margin-right:24px!important\n}\n\n.v-application--is-rtl .me-6{\n  margin-left:24px!important\n}\n\n.v-application--is-ltr .me-7{\n  margin-right:28px!important\n}\n\n.v-application--is-rtl .me-7{\n  margin-left:28px!important\n}\n\n.v-application--is-ltr .me-8{\n  margin-right:32px!important\n}\n\n.v-application--is-rtl .me-8{\n  margin-left:32px!important\n}\n\n.v-application--is-ltr .me-9{\n  margin-right:36px!important\n}\n\n.v-application--is-rtl .me-9{\n  margin-left:36px!important\n}\n\n.v-application--is-ltr .me-10{\n  margin-right:40px!important\n}\n\n.v-application--is-rtl .me-10{\n  margin-left:40px!important\n}\n\n.v-application--is-ltr .me-11{\n  margin-right:44px!important\n}\n\n.v-application--is-rtl .me-11{\n  margin-left:44px!important\n}\n\n.v-application--is-ltr .me-12{\n  margin-right:48px!important\n}\n\n.v-application--is-rtl .me-12{\n  margin-left:48px!important\n}\n\n.v-application--is-ltr .me-13{\n  margin-right:52px!important\n}\n\n.v-application--is-rtl .me-13{\n  margin-left:52px!important\n}\n\n.v-application--is-ltr .me-14{\n  margin-right:56px!important\n}\n\n.v-application--is-rtl .me-14{\n  margin-left:56px!important\n}\n\n.v-application--is-ltr .me-15{\n  margin-right:60px!important\n}\n\n.v-application--is-rtl .me-15{\n  margin-left:60px!important\n}\n\n.v-application--is-ltr .me-16{\n  margin-right:64px!important\n}\n\n.v-application--is-rtl .me-16{\n  margin-left:64px!important\n}\n\n.v-application--is-ltr .me-auto{\n  margin-right:auto!important\n}\n\n.v-application--is-rtl .me-auto{\n  margin-left:auto!important\n}\n\n.v-application .ma-n1{\n  margin:-4px!important\n}\n\n.v-application .ma-n2{\n  margin:-8px!important\n}\n\n.v-application .ma-n3{\n  margin:-12px!important\n}\n\n.v-application .ma-n4{\n  margin:-16px!important\n}\n\n.v-application .ma-n5{\n  margin:-20px!important\n}\n\n.v-application .ma-n6{\n  margin:-24px!important\n}\n\n.v-application .ma-n7{\n  margin:-28px!important\n}\n\n.v-application .ma-n8{\n  margin:-32px!important\n}\n\n.v-application .ma-n9{\n  margin:-36px!important\n}\n\n.v-application .ma-n10{\n  margin:-40px!important\n}\n\n.v-application .ma-n11{\n  margin:-44px!important\n}\n\n.v-application .ma-n12{\n  margin:-48px!important\n}\n\n.v-application .ma-n13{\n  margin:-52px!important\n}\n\n.v-application .ma-n14{\n  margin:-56px!important\n}\n\n.v-application .ma-n15{\n  margin:-60px!important\n}\n\n.v-application .ma-n16{\n  margin:-64px!important\n}\n\n.v-application .mx-n1{\n  margin-right:-4px!important;\n  margin-left:-4px!important\n}\n\n.v-application .mx-n2{\n  margin-right:-8px!important;\n  margin-left:-8px!important\n}\n\n.v-application .mx-n3{\n  margin-right:-12px!important;\n  margin-left:-12px!important\n}\n\n.v-application .mx-n4{\n  margin-right:-16px!important;\n  margin-left:-16px!important\n}\n\n.v-application .mx-n5{\n  margin-right:-20px!important;\n  margin-left:-20px!important\n}\n\n.v-application .mx-n6{\n  margin-right:-24px!important;\n  margin-left:-24px!important\n}\n\n.v-application .mx-n7{\n  margin-right:-28px!important;\n  margin-left:-28px!important\n}\n\n.v-application .mx-n8{\n  margin-right:-32px!important;\n  margin-left:-32px!important\n}\n\n.v-application .mx-n9{\n  margin-right:-36px!important;\n  margin-left:-36px!important\n}\n\n.v-application .mx-n10{\n  margin-right:-40px!important;\n  margin-left:-40px!important\n}\n\n.v-application .mx-n11{\n  margin-right:-44px!important;\n  margin-left:-44px!important\n}\n\n.v-application .mx-n12{\n  margin-right:-48px!important;\n  margin-left:-48px!important\n}\n\n.v-application .mx-n13{\n  margin-right:-52px!important;\n  margin-left:-52px!important\n}\n\n.v-application .mx-n14{\n  margin-right:-56px!important;\n  margin-left:-56px!important\n}\n\n.v-application .mx-n15{\n  margin-right:-60px!important;\n  margin-left:-60px!important\n}\n\n.v-application .mx-n16{\n  margin-right:-64px!important;\n  margin-left:-64px!important\n}\n\n.v-application .my-n1{\n  margin-top:-4px!important;\n  margin-bottom:-4px!important\n}\n\n.v-application .my-n2{\n  margin-top:-8px!important;\n  margin-bottom:-8px!important\n}\n\n.v-application .my-n3{\n  margin-top:-12px!important;\n  margin-bottom:-12px!important\n}\n\n.v-application .my-n4{\n  margin-top:-16px!important;\n  margin-bottom:-16px!important\n}\n\n.v-application .my-n5{\n  margin-top:-20px!important;\n  margin-bottom:-20px!important\n}\n\n.v-application .my-n6{\n  margin-top:-24px!important;\n  margin-bottom:-24px!important\n}\n\n.v-application .my-n7{\n  margin-top:-28px!important;\n  margin-bottom:-28px!important\n}\n\n.v-application .my-n8{\n  margin-top:-32px!important;\n  margin-bottom:-32px!important\n}\n\n.v-application .my-n9{\n  margin-top:-36px!important;\n  margin-bottom:-36px!important\n}\n\n.v-application .my-n10{\n  margin-top:-40px!important;\n  margin-bottom:-40px!important\n}\n\n.v-application .my-n11{\n  margin-top:-44px!important;\n  margin-bottom:-44px!important\n}\n\n.v-application .my-n12{\n  margin-top:-48px!important;\n  margin-bottom:-48px!important\n}\n\n.v-application .my-n13{\n  margin-top:-52px!important;\n  margin-bottom:-52px!important\n}\n\n.v-application .my-n14{\n  margin-top:-56px!important;\n  margin-bottom:-56px!important\n}\n\n.v-application .my-n15{\n  margin-top:-60px!important;\n  margin-bottom:-60px!important\n}\n\n.v-application .my-n16{\n  margin-top:-64px!important;\n  margin-bottom:-64px!important\n}\n\n.v-application .mt-n1{\n  margin-top:-4px!important\n}\n\n.v-application .mt-n2{\n  margin-top:-8px!important\n}\n\n.v-application .mt-n3{\n  margin-top:-12px!important\n}\n\n.v-application .mt-n4{\n  margin-top:-16px!important\n}\n\n.v-application .mt-n5{\n  margin-top:-20px!important\n}\n\n.v-application .mt-n6{\n  margin-top:-24px!important\n}\n\n.v-application .mt-n7{\n  margin-top:-28px!important\n}\n\n.v-application .mt-n8{\n  margin-top:-32px!important\n}\n\n.v-application .mt-n9{\n  margin-top:-36px!important\n}\n\n.v-application .mt-n10{\n  margin-top:-40px!important\n}\n\n.v-application .mt-n11{\n  margin-top:-44px!important\n}\n\n.v-application .mt-n12{\n  margin-top:-48px!important\n}\n\n.v-application .mt-n13{\n  margin-top:-52px!important\n}\n\n.v-application .mt-n14{\n  margin-top:-56px!important\n}\n\n.v-application .mt-n15{\n  margin-top:-60px!important\n}\n\n.v-application .mt-n16{\n  margin-top:-64px!important\n}\n\n.v-application .mr-n1{\n  margin-right:-4px!important\n}\n\n.v-application .mr-n2{\n  margin-right:-8px!important\n}\n\n.v-application .mr-n3{\n  margin-right:-12px!important\n}\n\n.v-application .mr-n4{\n  margin-right:-16px!important\n}\n\n.v-application .mr-n5{\n  margin-right:-20px!important\n}\n\n.v-application .mr-n6{\n  margin-right:-24px!important\n}\n\n.v-application .mr-n7{\n  margin-right:-28px!important\n}\n\n.v-application .mr-n8{\n  margin-right:-32px!important\n}\n\n.v-application .mr-n9{\n  margin-right:-36px!important\n}\n\n.v-application .mr-n10{\n  margin-right:-40px!important\n}\n\n.v-application .mr-n11{\n  margin-right:-44px!important\n}\n\n.v-application .mr-n12{\n  margin-right:-48px!important\n}\n\n.v-application .mr-n13{\n  margin-right:-52px!important\n}\n\n.v-application .mr-n14{\n  margin-right:-56px!important\n}\n\n.v-application .mr-n15{\n  margin-right:-60px!important\n}\n\n.v-application .mr-n16{\n  margin-right:-64px!important\n}\n\n.v-application .mb-n1{\n  margin-bottom:-4px!important\n}\n\n.v-application .mb-n2{\n  margin-bottom:-8px!important\n}\n\n.v-application .mb-n3{\n  margin-bottom:-12px!important\n}\n\n.v-application .mb-n4{\n  margin-bottom:-16px!important\n}\n\n.v-application .mb-n5{\n  margin-bottom:-20px!important\n}\n\n.v-application .mb-n6{\n  margin-bottom:-24px!important\n}\n\n.v-application .mb-n7{\n  margin-bottom:-28px!important\n}\n\n.v-application .mb-n8{\n  margin-bottom:-32px!important\n}\n\n.v-application .mb-n9{\n  margin-bottom:-36px!important\n}\n\n.v-application .mb-n10{\n  margin-bottom:-40px!important\n}\n\n.v-application .mb-n11{\n  margin-bottom:-44px!important\n}\n\n.v-application .mb-n12{\n  margin-bottom:-48px!important\n}\n\n.v-application .mb-n13{\n  margin-bottom:-52px!important\n}\n\n.v-application .mb-n14{\n  margin-bottom:-56px!important\n}\n\n.v-application .mb-n15{\n  margin-bottom:-60px!important\n}\n\n.v-application .mb-n16{\n  margin-bottom:-64px!important\n}\n\n.v-application .ml-n1{\n  margin-left:-4px!important\n}\n\n.v-application .ml-n2{\n  margin-left:-8px!important\n}\n\n.v-application .ml-n3{\n  margin-left:-12px!important\n}\n\n.v-application .ml-n4{\n  margin-left:-16px!important\n}\n\n.v-application .ml-n5{\n  margin-left:-20px!important\n}\n\n.v-application .ml-n6{\n  margin-left:-24px!important\n}\n\n.v-application .ml-n7{\n  margin-left:-28px!important\n}\n\n.v-application .ml-n8{\n  margin-left:-32px!important\n}\n\n.v-application .ml-n9{\n  margin-left:-36px!important\n}\n\n.v-application .ml-n10{\n  margin-left:-40px!important\n}\n\n.v-application .ml-n11{\n  margin-left:-44px!important\n}\n\n.v-application .ml-n12{\n  margin-left:-48px!important\n}\n\n.v-application .ml-n13{\n  margin-left:-52px!important\n}\n\n.v-application .ml-n14{\n  margin-left:-56px!important\n}\n\n.v-application .ml-n15{\n  margin-left:-60px!important\n}\n\n.v-application .ml-n16{\n  margin-left:-64px!important\n}\n\n.v-application--is-ltr .ms-n1{\n  margin-left:-4px!important\n}\n\n.v-application--is-rtl .ms-n1{\n  margin-right:-4px!important\n}\n\n.v-application--is-ltr .ms-n2{\n  margin-left:-8px!important\n}\n\n.v-application--is-rtl .ms-n2{\n  margin-right:-8px!important\n}\n\n.v-application--is-ltr .ms-n3{\n  margin-left:-12px!important\n}\n\n.v-application--is-rtl .ms-n3{\n  margin-right:-12px!important\n}\n\n.v-application--is-ltr .ms-n4{\n  margin-left:-16px!important\n}\n\n.v-application--is-rtl .ms-n4{\n  margin-right:-16px!important\n}\n\n.v-application--is-ltr .ms-n5{\n  margin-left:-20px!important\n}\n\n.v-application--is-rtl .ms-n5{\n  margin-right:-20px!important\n}\n\n.v-application--is-ltr .ms-n6{\n  margin-left:-24px!important\n}\n\n.v-application--is-rtl .ms-n6{\n  margin-right:-24px!important\n}\n\n.v-application--is-ltr .ms-n7{\n  margin-left:-28px!important\n}\n\n.v-application--is-rtl .ms-n7{\n  margin-right:-28px!important\n}\n\n.v-application--is-ltr .ms-n8{\n  margin-left:-32px!important\n}\n\n.v-application--is-rtl .ms-n8{\n  margin-right:-32px!important\n}\n\n.v-application--is-ltr .ms-n9{\n  margin-left:-36px!important\n}\n\n.v-application--is-rtl .ms-n9{\n  margin-right:-36px!important\n}\n\n.v-application--is-ltr .ms-n10{\n  margin-left:-40px!important\n}\n\n.v-application--is-rtl .ms-n10{\n  margin-right:-40px!important\n}\n\n.v-application--is-ltr .ms-n11{\n  margin-left:-44px!important\n}\n\n.v-application--is-rtl .ms-n11{\n  margin-right:-44px!important\n}\n\n.v-application--is-ltr .ms-n12{\n  margin-left:-48px!important\n}\n\n.v-application--is-rtl .ms-n12{\n  margin-right:-48px!important\n}\n\n.v-application--is-ltr .ms-n13{\n  margin-left:-52px!important\n}\n\n.v-application--is-rtl .ms-n13{\n  margin-right:-52px!important\n}\n\n.v-application--is-ltr .ms-n14{\n  margin-left:-56px!important\n}\n\n.v-application--is-rtl .ms-n14{\n  margin-right:-56px!important\n}\n\n.v-application--is-ltr .ms-n15{\n  margin-left:-60px!important\n}\n\n.v-application--is-rtl .ms-n15{\n  margin-right:-60px!important\n}\n\n.v-application--is-ltr .ms-n16{\n  margin-left:-64px!important\n}\n\n.v-application--is-rtl .ms-n16{\n  margin-right:-64px!important\n}\n\n.v-application--is-ltr .me-n1{\n  margin-right:-4px!important\n}\n\n.v-application--is-rtl .me-n1{\n  margin-left:-4px!important\n}\n\n.v-application--is-ltr .me-n2{\n  margin-right:-8px!important\n}\n\n.v-application--is-rtl .me-n2{\n  margin-left:-8px!important\n}\n\n.v-application--is-ltr .me-n3{\n  margin-right:-12px!important\n}\n\n.v-application--is-rtl .me-n3{\n  margin-left:-12px!important\n}\n\n.v-application--is-ltr .me-n4{\n  margin-right:-16px!important\n}\n\n.v-application--is-rtl .me-n4{\n  margin-left:-16px!important\n}\n\n.v-application--is-ltr .me-n5{\n  margin-right:-20px!important\n}\n\n.v-application--is-rtl .me-n5{\n  margin-left:-20px!important\n}\n\n.v-application--is-ltr .me-n6{\n  margin-right:-24px!important\n}\n\n.v-application--is-rtl .me-n6{\n  margin-left:-24px!important\n}\n\n.v-application--is-ltr .me-n7{\n  margin-right:-28px!important\n}\n\n.v-application--is-rtl .me-n7{\n  margin-left:-28px!important\n}\n\n.v-application--is-ltr .me-n8{\n  margin-right:-32px!important\n}\n\n.v-application--is-rtl .me-n8{\n  margin-left:-32px!important\n}\n\n.v-application--is-ltr .me-n9{\n  margin-right:-36px!important\n}\n\n.v-application--is-rtl .me-n9{\n  margin-left:-36px!important\n}\n\n.v-application--is-ltr .me-n10{\n  margin-right:-40px!important\n}\n\n.v-application--is-rtl .me-n10{\n  margin-left:-40px!important\n}\n\n.v-application--is-ltr .me-n11{\n  margin-right:-44px!important\n}\n\n.v-application--is-rtl .me-n11{\n  margin-left:-44px!important\n}\n\n.v-application--is-ltr .me-n12{\n  margin-right:-48px!important\n}\n\n.v-application--is-rtl .me-n12{\n  margin-left:-48px!important\n}\n\n.v-application--is-ltr .me-n13{\n  margin-right:-52px!important\n}\n\n.v-application--is-rtl .me-n13{\n  margin-left:-52px!important\n}\n\n.v-application--is-ltr .me-n14{\n  margin-right:-56px!important\n}\n\n.v-application--is-rtl .me-n14{\n  margin-left:-56px!important\n}\n\n.v-application--is-ltr .me-n15{\n  margin-right:-60px!important\n}\n\n.v-application--is-rtl .me-n15{\n  margin-left:-60px!important\n}\n\n.v-application--is-ltr .me-n16{\n  margin-right:-64px!important\n}\n\n.v-application--is-rtl .me-n16{\n  margin-left:-64px!important\n}\n\n.v-application .pa-0{\n  padding:0!important\n}\n\n.v-application .pa-1{\n  padding:4px!important\n}\n\n.v-application .pa-2{\n  padding:8px!important\n}\n\n.v-application .pa-3{\n  padding:12px!important\n}\n\n.v-application .pa-4{\n  padding:16px!important\n}\n\n.v-application .pa-5{\n  padding:20px!important\n}\n\n.v-application .pa-6{\n  padding:24px!important\n}\n\n.v-application .pa-7{\n  padding:28px!important\n}\n\n.v-application .pa-8{\n  padding:32px!important\n}\n\n.v-application .pa-9{\n  padding:36px!important\n}\n\n.v-application .pa-10{\n  padding:40px!important\n}\n\n.v-application .pa-11{\n  padding:44px!important\n}\n\n.v-application .pa-12{\n  padding:48px!important\n}\n\n.v-application .pa-13{\n  padding:52px!important\n}\n\n.v-application .pa-14{\n  padding:56px!important\n}\n\n.v-application .pa-15{\n  padding:60px!important\n}\n\n.v-application .pa-16{\n  padding:64px!important\n}\n\n.v-application .px-0{\n  padding-right:0!important;\n  padding-left:0!important\n}\n\n.v-application .px-1{\n  padding-right:4px!important;\n  padding-left:4px!important\n}\n\n.v-application .px-2{\n  padding-right:8px!important;\n  padding-left:8px!important\n}\n\n.v-application .px-3{\n  padding-right:12px!important;\n  padding-left:12px!important\n}\n\n.v-application .px-4{\n  padding-right:16px!important;\n  padding-left:16px!important\n}\n\n.v-application .px-5{\n  padding-right:20px!important;\n  padding-left:20px!important\n}\n\n.v-application .px-6{\n  padding-right:24px!important;\n  padding-left:24px!important\n}\n\n.v-application .px-7{\n  padding-right:28px!important;\n  padding-left:28px!important\n}\n\n.v-application .px-8{\n  padding-right:32px!important;\n  padding-left:32px!important\n}\n\n.v-application .px-9{\n  padding-right:36px!important;\n  padding-left:36px!important\n}\n\n.v-application .px-10{\n  padding-right:40px!important;\n  padding-left:40px!important\n}\n\n.v-application .px-11{\n  padding-right:44px!important;\n  padding-left:44px!important\n}\n\n.v-application .px-12{\n  padding-right:48px!important;\n  padding-left:48px!important\n}\n\n.v-application .px-13{\n  padding-right:52px!important;\n  padding-left:52px!important\n}\n\n.v-application .px-14{\n  padding-right:56px!important;\n  padding-left:56px!important\n}\n\n.v-application .px-15{\n  padding-right:60px!important;\n  padding-left:60px!important\n}\n\n.v-application .px-16{\n  padding-right:64px!important;\n  padding-left:64px!important\n}\n\n.v-application .py-0{\n  padding-top:0!important;\n  padding-bottom:0!important\n}\n\n.v-application .py-1{\n  padding-top:4px!important;\n  padding-bottom:4px!important\n}\n\n.v-application .py-2{\n  padding-top:8px!important;\n  padding-bottom:8px!important\n}\n\n.v-application .py-3{\n  padding-top:12px!important;\n  padding-bottom:12px!important\n}\n\n.v-application .py-4{\n  padding-top:16px!important;\n  padding-bottom:16px!important\n}\n\n.v-application .py-5{\n  padding-top:20px!important;\n  padding-bottom:20px!important\n}\n\n.v-application .py-6{\n  padding-top:24px!important;\n  padding-bottom:24px!important\n}\n\n.v-application .py-7{\n  padding-top:28px!important;\n  padding-bottom:28px!important\n}\n\n.v-application .py-8{\n  padding-top:32px!important;\n  padding-bottom:32px!important\n}\n\n.v-application .py-9{\n  padding-top:36px!important;\n  padding-bottom:36px!important\n}\n\n.v-application .py-10{\n  padding-top:40px!important;\n  padding-bottom:40px!important\n}\n\n.v-application .py-11{\n  padding-top:44px!important;\n  padding-bottom:44px!important\n}\n\n.v-application .py-12{\n  padding-top:48px!important;\n  padding-bottom:48px!important\n}\n\n.v-application .py-13{\n  padding-top:52px!important;\n  padding-bottom:52px!important\n}\n\n.v-application .py-14{\n  padding-top:56px!important;\n  padding-bottom:56px!important\n}\n\n.v-application .py-15{\n  padding-top:60px!important;\n  padding-bottom:60px!important\n}\n\n.v-application .py-16{\n  padding-top:64px!important;\n  padding-bottom:64px!important\n}\n\n.v-application .pt-0{\n  padding-top:0!important\n}\n\n.v-application .pt-1{\n  padding-top:4px!important\n}\n\n.v-application .pt-2{\n  padding-top:8px!important\n}\n\n.v-application .pt-3{\n  padding-top:12px!important\n}\n\n.v-application .pt-4{\n  padding-top:16px!important\n}\n\n.v-application .pt-5{\n  padding-top:20px!important\n}\n\n.v-application .pt-6{\n  padding-top:24px!important\n}\n\n.v-application .pt-7{\n  padding-top:28px!important\n}\n\n.v-application .pt-8{\n  padding-top:32px!important\n}\n\n.v-application .pt-9{\n  padding-top:36px!important\n}\n\n.v-application .pt-10{\n  padding-top:40px!important\n}\n\n.v-application .pt-11{\n  padding-top:44px!important\n}\n\n.v-application .pt-12{\n  padding-top:48px!important\n}\n\n.v-application .pt-13{\n  padding-top:52px!important\n}\n\n.v-application .pt-14{\n  padding-top:56px!important\n}\n\n.v-application .pt-15{\n  padding-top:60px!important\n}\n\n.v-application .pt-16{\n  padding-top:64px!important\n}\n\n.v-application .pr-0{\n  padding-right:0!important\n}\n\n.v-application .pr-1{\n  padding-right:4px!important\n}\n\n.v-application .pr-2{\n  padding-right:8px!important\n}\n\n.v-application .pr-3{\n  padding-right:12px!important\n}\n\n.v-application .pr-4{\n  padding-right:16px!important\n}\n\n.v-application .pr-5{\n  padding-right:20px!important\n}\n\n.v-application .pr-6{\n  padding-right:24px!important\n}\n\n.v-application .pr-7{\n  padding-right:28px!important\n}\n\n.v-application .pr-8{\n  padding-right:32px!important\n}\n\n.v-application .pr-9{\n  padding-right:36px!important\n}\n\n.v-application .pr-10{\n  padding-right:40px!important\n}\n\n.v-application .pr-11{\n  padding-right:44px!important\n}\n\n.v-application .pr-12{\n  padding-right:48px!important\n}\n\n.v-application .pr-13{\n  padding-right:52px!important\n}\n\n.v-application .pr-14{\n  padding-right:56px!important\n}\n\n.v-application .pr-15{\n  padding-right:60px!important\n}\n\n.v-application .pr-16{\n  padding-right:64px!important\n}\n\n.v-application .pb-0{\n  padding-bottom:0!important\n}\n\n.v-application .pb-1{\n  padding-bottom:4px!important\n}\n\n.v-application .pb-2{\n  padding-bottom:8px!important\n}\n\n.v-application .pb-3{\n  padding-bottom:12px!important\n}\n\n.v-application .pb-4{\n  padding-bottom:16px!important\n}\n\n.v-application .pb-5{\n  padding-bottom:20px!important\n}\n\n.v-application .pb-6{\n  padding-bottom:24px!important\n}\n\n.v-application .pb-7{\n  padding-bottom:28px!important\n}\n\n.v-application .pb-8{\n  padding-bottom:32px!important\n}\n\n.v-application .pb-9{\n  padding-bottom:36px!important\n}\n\n.v-application .pb-10{\n  padding-bottom:40px!important\n}\n\n.v-application .pb-11{\n  padding-bottom:44px!important\n}\n\n.v-application .pb-12{\n  padding-bottom:48px!important\n}\n\n.v-application .pb-13{\n  padding-bottom:52px!important\n}\n\n.v-application .pb-14{\n  padding-bottom:56px!important\n}\n\n.v-application .pb-15{\n  padding-bottom:60px!important\n}\n\n.v-application .pb-16{\n  padding-bottom:64px!important\n}\n\n.v-application .pl-0{\n  padding-left:0!important\n}\n\n.v-application .pl-1{\n  padding-left:4px!important\n}\n\n.v-application .pl-2{\n  padding-left:8px!important\n}\n\n.v-application .pl-3{\n  padding-left:12px!important\n}\n\n.v-application .pl-4{\n  padding-left:16px!important\n}\n\n.v-application .pl-5{\n  padding-left:20px!important\n}\n\n.v-application .pl-6{\n  padding-left:24px!important\n}\n\n.v-application .pl-7{\n  padding-left:28px!important\n}\n\n.v-application .pl-8{\n  padding-left:32px!important\n}\n\n.v-application .pl-9{\n  padding-left:36px!important\n}\n\n.v-application .pl-10{\n  padding-left:40px!important\n}\n\n.v-application .pl-11{\n  padding-left:44px!important\n}\n\n.v-application .pl-12{\n  padding-left:48px!important\n}\n\n.v-application .pl-13{\n  padding-left:52px!important\n}\n\n.v-application .pl-14{\n  padding-left:56px!important\n}\n\n.v-application .pl-15{\n  padding-left:60px!important\n}\n\n.v-application .pl-16{\n  padding-left:64px!important\n}\n\n.v-application--is-ltr .ps-0{\n  padding-left:0!important\n}\n\n.v-application--is-rtl .ps-0{\n  padding-right:0!important\n}\n\n.v-application--is-ltr .ps-1{\n  padding-left:4px!important\n}\n\n.v-application--is-rtl .ps-1{\n  padding-right:4px!important\n}\n\n.v-application--is-ltr .ps-2{\n  padding-left:8px!important\n}\n\n.v-application--is-rtl .ps-2{\n  padding-right:8px!important\n}\n\n.v-application--is-ltr .ps-3{\n  padding-left:12px!important\n}\n\n.v-application--is-rtl .ps-3{\n  padding-right:12px!important\n}\n\n.v-application--is-ltr .ps-4{\n  padding-left:16px!important\n}\n\n.v-application--is-rtl .ps-4{\n  padding-right:16px!important\n}\n\n.v-application--is-ltr .ps-5{\n  padding-left:20px!important\n}\n\n.v-application--is-rtl .ps-5{\n  padding-right:20px!important\n}\n\n.v-application--is-ltr .ps-6{\n  padding-left:24px!important\n}\n\n.v-application--is-rtl .ps-6{\n  padding-right:24px!important\n}\n\n.v-application--is-ltr .ps-7{\n  padding-left:28px!important\n}\n\n.v-application--is-rtl .ps-7{\n  padding-right:28px!important\n}\n\n.v-application--is-ltr .ps-8{\n  padding-left:32px!important\n}\n\n.v-application--is-rtl .ps-8{\n  padding-right:32px!important\n}\n\n.v-application--is-ltr .ps-9{\n  padding-left:36px!important\n}\n\n.v-application--is-rtl .ps-9{\n  padding-right:36px!important\n}\n\n.v-application--is-ltr .ps-10{\n  padding-left:40px!important\n}\n\n.v-application--is-rtl .ps-10{\n  padding-right:40px!important\n}\n\n.v-application--is-ltr .ps-11{\n  padding-left:44px!important\n}\n\n.v-application--is-rtl .ps-11{\n  padding-right:44px!important\n}\n\n.v-application--is-ltr .ps-12{\n  padding-left:48px!important\n}\n\n.v-application--is-rtl .ps-12{\n  padding-right:48px!important\n}\n\n.v-application--is-ltr .ps-13{\n  padding-left:52px!important\n}\n\n.v-application--is-rtl .ps-13{\n  padding-right:52px!important\n}\n\n.v-application--is-ltr .ps-14{\n  padding-left:56px!important\n}\n\n.v-application--is-rtl .ps-14{\n  padding-right:56px!important\n}\n\n.v-application--is-ltr .ps-15{\n  padding-left:60px!important\n}\n\n.v-application--is-rtl .ps-15{\n  padding-right:60px!important\n}\n\n.v-application--is-ltr .ps-16{\n  padding-left:64px!important\n}\n\n.v-application--is-rtl .ps-16{\n  padding-right:64px!important\n}\n\n.v-application--is-ltr .pe-0{\n  padding-right:0!important\n}\n\n.v-application--is-rtl .pe-0{\n  padding-left:0!important\n}\n\n.v-application--is-ltr .pe-1{\n  padding-right:4px!important\n}\n\n.v-application--is-rtl .pe-1{\n  padding-left:4px!important\n}\n\n.v-application--is-ltr .pe-2{\n  padding-right:8px!important\n}\n\n.v-application--is-rtl .pe-2{\n  padding-left:8px!important\n}\n\n.v-application--is-ltr .pe-3{\n  padding-right:12px!important\n}\n\n.v-application--is-rtl .pe-3{\n  padding-left:12px!important\n}\n\n.v-application--is-ltr .pe-4{\n  padding-right:16px!important\n}\n\n.v-application--is-rtl .pe-4{\n  padding-left:16px!important\n}\n\n.v-application--is-ltr .pe-5{\n  padding-right:20px!important\n}\n\n.v-application--is-rtl .pe-5{\n  padding-left:20px!important\n}\n\n.v-application--is-ltr .pe-6{\n  padding-right:24px!important\n}\n\n.v-application--is-rtl .pe-6{\n  padding-left:24px!important\n}\n\n.v-application--is-ltr .pe-7{\n  padding-right:28px!important\n}\n\n.v-application--is-rtl .pe-7{\n  padding-left:28px!important\n}\n\n.v-application--is-ltr .pe-8{\n  padding-right:32px!important\n}\n\n.v-application--is-rtl .pe-8{\n  padding-left:32px!important\n}\n\n.v-application--is-ltr .pe-9{\n  padding-right:36px!important\n}\n\n.v-application--is-rtl .pe-9{\n  padding-left:36px!important\n}\n\n.v-application--is-ltr .pe-10{\n  padding-right:40px!important\n}\n\n.v-application--is-rtl .pe-10{\n  padding-left:40px!important\n}\n\n.v-application--is-ltr .pe-11{\n  padding-right:44px!important\n}\n\n.v-application--is-rtl .pe-11{\n  padding-left:44px!important\n}\n\n.v-application--is-ltr .pe-12{\n  padding-right:48px!important\n}\n\n.v-application--is-rtl .pe-12{\n  padding-left:48px!important\n}\n\n.v-application--is-ltr .pe-13{\n  padding-right:52px!important\n}\n\n.v-application--is-rtl .pe-13{\n  padding-left:52px!important\n}\n\n.v-application--is-ltr .pe-14{\n  padding-right:56px!important\n}\n\n.v-application--is-rtl .pe-14{\n  padding-left:56px!important\n}\n\n.v-application--is-ltr .pe-15{\n  padding-right:60px!important\n}\n\n.v-application--is-rtl .pe-15{\n  padding-left:60px!important\n}\n\n.v-application--is-ltr .pe-16{\n  padding-right:64px!important\n}\n\n.v-application--is-rtl .pe-16{\n  padding-left:64px!important\n}\n\n.v-application .rounded-0{\n  border-radius:0!important\n}\n\n.v-application .rounded-sm{\n  border-radius:2px!important\n}\n\n.v-application .rounded{\n  border-radius:4px!important\n}\n\n.v-application .rounded-lg{\n  border-radius:8px!important\n}\n\n.v-application .rounded-xl{\n  border-radius:24px!important\n}\n\n.v-application .rounded-pill{\n  border-radius:9999px!important\n}\n\n.v-application .rounded-circle{\n  border-radius:50%!important\n}\n\n.v-application .rounded-t-0{\n  border-top-left-radius:0!important;\n  border-top-right-radius:0!important\n}\n\n.v-application .rounded-t-sm{\n  border-top-left-radius:2px!important;\n  border-top-right-radius:2px!important\n}\n\n.v-application .rounded-t{\n  border-top-left-radius:4px!important;\n  border-top-right-radius:4px!important\n}\n\n.v-application .rounded-t-lg{\n  border-top-left-radius:8px!important;\n  border-top-right-radius:8px!important\n}\n\n.v-application .rounded-t-xl{\n  border-top-left-radius:24px!important;\n  border-top-right-radius:24px!important\n}\n\n.v-application .rounded-t-pill{\n  border-top-left-radius:9999px!important;\n  border-top-right-radius:9999px!important\n}\n\n.v-application .rounded-t-circle{\n  border-top-left-radius:50%!important;\n  border-top-right-radius:50%!important\n}\n\n.v-application .rounded-r-0{\n  border-top-right-radius:0!important;\n  border-bottom-right-radius:0!important\n}\n\n.v-application .rounded-r-sm{\n  border-top-right-radius:2px!important;\n  border-bottom-right-radius:2px!important\n}\n\n.v-application .rounded-r{\n  border-top-right-radius:4px!important;\n  border-bottom-right-radius:4px!important\n}\n\n.v-application .rounded-r-lg{\n  border-top-right-radius:8px!important;\n  border-bottom-right-radius:8px!important\n}\n\n.v-application .rounded-r-xl{\n  border-top-right-radius:24px!important;\n  border-bottom-right-radius:24px!important\n}\n\n.v-application .rounded-r-pill{\n  border-top-right-radius:9999px!important;\n  border-bottom-right-radius:9999px!important\n}\n\n.v-application .rounded-r-circle{\n  border-top-right-radius:50%!important;\n  border-bottom-right-radius:50%!important\n}\n\n.v-application .rounded-b-0{\n  border-bottom-left-radius:0!important;\n  border-bottom-right-radius:0!important\n}\n\n.v-application .rounded-b-sm{\n  border-bottom-left-radius:2px!important;\n  border-bottom-right-radius:2px!important\n}\n\n.v-application .rounded-b{\n  border-bottom-left-radius:4px!important;\n  border-bottom-right-radius:4px!important\n}\n\n.v-application .rounded-b-lg{\n  border-bottom-left-radius:8px!important;\n  border-bottom-right-radius:8px!important\n}\n\n.v-application .rounded-b-xl{\n  border-bottom-left-radius:24px!important;\n  border-bottom-right-radius:24px!important\n}\n\n.v-application .rounded-b-pill{\n  border-bottom-left-radius:9999px!important;\n  border-bottom-right-radius:9999px!important\n}\n\n.v-application .rounded-b-circle{\n  border-bottom-left-radius:50%!important;\n  border-bottom-right-radius:50%!important\n}\n\n.v-application .rounded-l-0{\n  border-top-left-radius:0!important;\n  border-bottom-left-radius:0!important\n}\n\n.v-application .rounded-l-sm{\n  border-top-left-radius:2px!important;\n  border-bottom-left-radius:2px!important\n}\n\n.v-application .rounded-l{\n  border-top-left-radius:4px!important;\n  border-bottom-left-radius:4px!important\n}\n\n.v-application .rounded-l-lg{\n  border-top-left-radius:8px!important;\n  border-bottom-left-radius:8px!important\n}\n\n.v-application .rounded-l-xl{\n  border-top-left-radius:24px!important;\n  border-bottom-left-radius:24px!important\n}\n\n.v-application .rounded-l-pill{\n  border-top-left-radius:9999px!important;\n  border-bottom-left-radius:9999px!important\n}\n\n.v-application .rounded-l-circle{\n  border-top-left-radius:50%!important;\n  border-bottom-left-radius:50%!important\n}\n\n.v-application .rounded-tl-0{\n  border-top-left-radius:0!important\n}\n\n.v-application .rounded-tl-sm{\n  border-top-left-radius:2px!important\n}\n\n.v-application .rounded-tl{\n  border-top-left-radius:4px!important\n}\n\n.v-application .rounded-tl-lg{\n  border-top-left-radius:8px!important\n}\n\n.v-application .rounded-tl-xl{\n  border-top-left-radius:24px!important\n}\n\n.v-application .rounded-tl-pill{\n  border-top-left-radius:9999px!important\n}\n\n.v-application .rounded-tl-circle{\n  border-top-left-radius:50%!important\n}\n\n.v-application .rounded-tr-0{\n  border-top-right-radius:0!important\n}\n\n.v-application .rounded-tr-sm{\n  border-top-right-radius:2px!important\n}\n\n.v-application .rounded-tr{\n  border-top-right-radius:4px!important\n}\n\n.v-application .rounded-tr-lg{\n  border-top-right-radius:8px!important\n}\n\n.v-application .rounded-tr-xl{\n  border-top-right-radius:24px!important\n}\n\n.v-application .rounded-tr-pill{\n  border-top-right-radius:9999px!important\n}\n\n.v-application .rounded-tr-circle{\n  border-top-right-radius:50%!important\n}\n\n.v-application .rounded-br-0{\n  border-bottom-right-radius:0!important\n}\n\n.v-application .rounded-br-sm{\n  border-bottom-right-radius:2px!important\n}\n\n.v-application .rounded-br{\n  border-bottom-right-radius:4px!important\n}\n\n.v-application .rounded-br-lg{\n  border-bottom-right-radius:8px!important\n}\n\n.v-application .rounded-br-xl{\n  border-bottom-right-radius:24px!important\n}\n\n.v-application .rounded-br-pill{\n  border-bottom-right-radius:9999px!important\n}\n\n.v-application .rounded-br-circle{\n  border-bottom-right-radius:50%!important\n}\n\n.v-application .rounded-bl-0{\n  border-bottom-left-radius:0!important\n}\n\n.v-application .rounded-bl-sm{\n  border-bottom-left-radius:2px!important\n}\n\n.v-application .rounded-bl{\n  border-bottom-left-radius:4px!important\n}\n\n.v-application .rounded-bl-lg{\n  border-bottom-left-radius:8px!important\n}\n\n.v-application .rounded-bl-xl{\n  border-bottom-left-radius:24px!important\n}\n\n.v-application .rounded-bl-pill{\n  border-bottom-left-radius:9999px!important\n}\n\n.v-application .rounded-bl-circle{\n  border-bottom-left-radius:50%!important\n}\n\n.v-application .text-left{\n  text-align:left!important\n}\n\n.v-application .text-right{\n  text-align:right!important\n}\n\n.v-application .text-center{\n  text-align:center!important\n}\n\n.v-application .text-justify{\n  text-align:justify!important\n}\n\n.v-application .text-start{\n  text-align:start!important\n}\n\n.v-application .text-end{\n  text-align:end!important\n}\n\n.v-application .text-decoration-line-through{\n  text-decoration:line-through!important\n}\n\n.v-application .text-decoration-none{\n  text-decoration:none!important\n}\n\n.v-application .text-decoration-overline{\n  text-decoration:overline!important\n}\n\n.v-application .text-decoration-underline{\n  text-decoration:underline!important\n}\n\n.v-application .text-wrap{\n  white-space:normal!important\n}\n\n.v-application .text-no-wrap{\n  white-space:nowrap!important\n}\n\n.v-application .text-pre{\n  white-space:pre!important\n}\n\n.v-application .text-pre-line{\n  white-space:pre-line!important\n}\n\n.v-application .text-pre-wrap{\n  white-space:pre-wrap!important\n}\n\n.v-application .text-break{\n  overflow-wrap:break-word!important;\n  word-break:break-word!important\n}\n\n.v-application .text-truncate{\n  white-space:nowrap!important;\n  overflow:hidden!important;\n  text-overflow:ellipsis!important\n}\n\n.v-application .text-none{\n  text-transform:none!important\n}\n\n.v-application .text-capitalize{\n  text-transform:capitalize!important\n}\n\n.v-application .text-lowercase{\n  text-transform:lowercase!important\n}\n\n.v-application .text-uppercase{\n  text-transform:uppercase!important\n}\n\n.v-application .text-h1{\n  font-size:6rem!important;\n  line-height:6rem;\n  letter-spacing:-.015625em!important\n}\n\n.v-application .text-h1,.v-application .text-h2{\n  font-weight:300;\n  font-family:\"Roboto\",sans-serif!important\n}\n\n.v-application .text-h2{\n  font-size:3.75rem!important;\n  line-height:3.75rem;\n  letter-spacing:-.0083333333em!important\n}\n\n.v-application .text-h3{\n  font-size:3rem!important;\n  line-height:3.125rem;\n  letter-spacing:normal!important\n}\n\n.v-application .text-h3,.v-application .text-h4{\n  font-weight:400;\n  font-family:\"Roboto\",sans-serif!important\n}\n\n.v-application .text-h4{\n  font-size:2.125rem!important;\n  line-height:2.5rem;\n  letter-spacing:.0073529412em!important\n}\n\n.v-application .text-h5{\n  font-size:1.5rem!important;\n  font-weight:400;\n  letter-spacing:normal!important\n}\n\n.v-application .text-h5,.v-application .text-h6{\n  line-height:2rem;\n  font-family:\"Roboto\",sans-serif!important\n}\n\n.v-application .text-h6{\n  font-size:1.25rem!important;\n  font-weight:500;\n  letter-spacing:.0125em!important\n}\n\n.v-application .text-subtitle-1{\n  font-size:1rem!important;\n  font-weight:400;\n  line-height:1.75rem;\n  letter-spacing:.009375em!important;\n  font-family:\"Roboto\",sans-serif!important\n}\n\n.v-application .text-subtitle-2{\n  font-size:.875rem!important;\n  font-weight:500;\n  line-height:1.375rem;\n  letter-spacing:.0071428571em!important;\n  font-family:\"Roboto\",sans-serif!important\n}\n\n.v-application .text-body-1{\n  font-size:1rem!important;\n  line-height:1.5rem;\n  letter-spacing:.03125em!important\n}\n\n.v-application .text-body-1,.v-application .text-body-2{\n  font-weight:400;\n  font-family:\"Roboto\",sans-serif!important\n}\n\n.v-application .text-body-2{\n  font-size:.875rem!important;\n  line-height:1.25rem;\n  letter-spacing:.0178571429em!important\n}\n\n.v-application .text-button{\n  font-size:.875rem!important;\n  font-weight:500;\n  line-height:2.25rem;\n  letter-spacing:.0892857143em!important;\n  font-family:\"Roboto\",sans-serif!important;\n  text-transform:uppercase!important\n}\n\n.v-application .text-caption{\n  font-weight:400;\n  line-height:1.25rem;\n  letter-spacing:.0333333333em!important\n}\n\n.v-application .text-caption,.v-application .text-overline{\n  font-size:.75rem!important;\n  font-family:\"Roboto\",sans-serif!important\n}\n\n.v-application .text-overline{\n  font-weight:500;\n  line-height:2rem;\n  letter-spacing:.1666666667em!important;\n  text-transform:uppercase!important\n}\n\n@media(min-width:600px){\n  .v-application .d-sm-none{\n    display:none!important\n  }\n\n  .v-application .d-sm-inline{\n    display:inline!important\n  }\n\n  .v-application .d-sm-inline-block{\n    display:inline-block!important\n  }\n\n  .v-application .d-sm-block{\n    display:block!important\n  }\n\n  .v-application .d-sm-table{\n    display:table!important\n  }\n\n  .v-application .d-sm-table-row{\n    display:table-row!important\n  }\n\n  .v-application .d-sm-table-cell{\n    display:table-cell!important\n  }\n\n  .v-application .d-sm-flex{\n    display:flex!important\n  }\n\n  .v-application .d-sm-inline-flex{\n    display:inline-flex!important\n  }\n\n  .v-application .float-sm-none{\n    float:none!important\n  }\n\n  .v-application .float-sm-left{\n    float:left!important\n  }\n\n  .v-application .float-sm-right{\n    float:right!important\n  }\n\n  .v-application--is-rtl .float-sm-end{\n    float:left!important\n  }\n\n  .v-application--is-ltr .float-sm-end,.v-application--is-rtl .float-sm-start{\n    float:right!important\n  }\n\n  .v-application--is-ltr .float-sm-start{\n    float:left!important\n  }\n\n  .v-application .flex-sm-fill{\n    flex:1 1 auto!important\n  }\n\n  .v-application .flex-sm-row{\n    flex-direction:row!important\n  }\n\n  .v-application .flex-sm-column{\n    flex-direction:column!important\n  }\n\n  .v-application .flex-sm-row-reverse{\n    flex-direction:row-reverse!important\n  }\n\n  .v-application .flex-sm-column-reverse{\n    flex-direction:column-reverse!important\n  }\n\n  .v-application .flex-sm-grow-0{\n    flex-grow:0!important\n  }\n\n  .v-application .flex-sm-grow-1{\n    flex-grow:1!important\n  }\n\n  .v-application .flex-sm-shrink-0{\n    flex-shrink:0!important\n  }\n\n  .v-application .flex-sm-shrink-1{\n    flex-shrink:1!important\n  }\n\n  .v-application .flex-sm-wrap{\n    flex-wrap:wrap!important\n  }\n\n  .v-application .flex-sm-nowrap{\n    flex-wrap:nowrap!important\n  }\n\n  .v-application .flex-sm-wrap-reverse{\n    flex-wrap:wrap-reverse!important\n  }\n\n  .v-application .justify-sm-start{\n    justify-content:flex-start!important\n  }\n\n  .v-application .justify-sm-end{\n    justify-content:flex-end!important\n  }\n\n  .v-application .justify-sm-center{\n    justify-content:center!important\n  }\n\n  .v-application .justify-sm-space-between{\n    justify-content:space-between!important\n  }\n\n  .v-application .justify-sm-space-around{\n    justify-content:space-around!important\n  }\n\n  .v-application .align-sm-start{\n    align-items:flex-start!important\n  }\n\n  .v-application .align-sm-end{\n    align-items:flex-end!important\n  }\n\n  .v-application .align-sm-center{\n    align-items:center!important\n  }\n\n  .v-application .align-sm-baseline{\n    align-items:baseline!important\n  }\n\n  .v-application .align-sm-stretch{\n    align-items:stretch!important\n  }\n\n  .v-application .align-content-sm-start{\n    align-content:flex-start!important\n  }\n\n  .v-application .align-content-sm-end{\n    align-content:flex-end!important\n  }\n\n  .v-application .align-content-sm-center{\n    align-content:center!important\n  }\n\n  .v-application .align-content-sm-space-between{\n    align-content:space-between!important\n  }\n\n  .v-application .align-content-sm-space-around{\n    align-content:space-around!important\n  }\n\n  .v-application .align-content-sm-stretch{\n    align-content:stretch!important\n  }\n\n  .v-application .align-self-sm-auto{\n    align-self:auto!important\n  }\n\n  .v-application .align-self-sm-start{\n    align-self:flex-start!important\n  }\n\n  .v-application .align-self-sm-end{\n    align-self:flex-end!important\n  }\n\n  .v-application .align-self-sm-center{\n    align-self:center!important\n  }\n\n  .v-application .align-self-sm-baseline{\n    align-self:baseline!important\n  }\n\n  .v-application .align-self-sm-stretch{\n    align-self:stretch!important\n  }\n\n  .v-application .order-sm-first{\n    order:-1!important\n  }\n\n  .v-application .order-sm-0{\n    order:0!important\n  }\n\n  .v-application .order-sm-1{\n    order:1!important\n  }\n\n  .v-application .order-sm-2{\n    order:2!important\n  }\n\n  .v-application .order-sm-3{\n    order:3!important\n  }\n\n  .v-application .order-sm-4{\n    order:4!important\n  }\n\n  .v-application .order-sm-5{\n    order:5!important\n  }\n\n  .v-application .order-sm-6{\n    order:6!important\n  }\n\n  .v-application .order-sm-7{\n    order:7!important\n  }\n\n  .v-application .order-sm-8{\n    order:8!important\n  }\n\n  .v-application .order-sm-9{\n    order:9!important\n  }\n\n  .v-application .order-sm-10{\n    order:10!important\n  }\n\n  .v-application .order-sm-11{\n    order:11!important\n  }\n\n  .v-application .order-sm-12{\n    order:12!important\n  }\n\n  .v-application .order-sm-last{\n    order:13!important\n  }\n\n  .v-application .ma-sm-0{\n    margin:0!important\n  }\n\n  .v-application .ma-sm-1{\n    margin:4px!important\n  }\n\n  .v-application .ma-sm-2{\n    margin:8px!important\n  }\n\n  .v-application .ma-sm-3{\n    margin:12px!important\n  }\n\n  .v-application .ma-sm-4{\n    margin:16px!important\n  }\n\n  .v-application .ma-sm-5{\n    margin:20px!important\n  }\n\n  .v-application .ma-sm-6{\n    margin:24px!important\n  }\n\n  .v-application .ma-sm-7{\n    margin:28px!important\n  }\n\n  .v-application .ma-sm-8{\n    margin:32px!important\n  }\n\n  .v-application .ma-sm-9{\n    margin:36px!important\n  }\n\n  .v-application .ma-sm-10{\n    margin:40px!important\n  }\n\n  .v-application .ma-sm-11{\n    margin:44px!important\n  }\n\n  .v-application .ma-sm-12{\n    margin:48px!important\n  }\n\n  .v-application .ma-sm-13{\n    margin:52px!important\n  }\n\n  .v-application .ma-sm-14{\n    margin:56px!important\n  }\n\n  .v-application .ma-sm-15{\n    margin:60px!important\n  }\n\n  .v-application .ma-sm-16{\n    margin:64px!important\n  }\n\n  .v-application .ma-sm-auto{\n    margin:auto!important\n  }\n\n  .v-application .mx-sm-0{\n    margin-right:0!important;\n    margin-left:0!important\n  }\n\n  .v-application .mx-sm-1{\n    margin-right:4px!important;\n    margin-left:4px!important\n  }\n\n  .v-application .mx-sm-2{\n    margin-right:8px!important;\n    margin-left:8px!important\n  }\n\n  .v-application .mx-sm-3{\n    margin-right:12px!important;\n    margin-left:12px!important\n  }\n\n  .v-application .mx-sm-4{\n    margin-right:16px!important;\n    margin-left:16px!important\n  }\n\n  .v-application .mx-sm-5{\n    margin-right:20px!important;\n    margin-left:20px!important\n  }\n\n  .v-application .mx-sm-6{\n    margin-right:24px!important;\n    margin-left:24px!important\n  }\n\n  .v-application .mx-sm-7{\n    margin-right:28px!important;\n    margin-left:28px!important\n  }\n\n  .v-application .mx-sm-8{\n    margin-right:32px!important;\n    margin-left:32px!important\n  }\n\n  .v-application .mx-sm-9{\n    margin-right:36px!important;\n    margin-left:36px!important\n  }\n\n  .v-application .mx-sm-10{\n    margin-right:40px!important;\n    margin-left:40px!important\n  }\n\n  .v-application .mx-sm-11{\n    margin-right:44px!important;\n    margin-left:44px!important\n  }\n\n  .v-application .mx-sm-12{\n    margin-right:48px!important;\n    margin-left:48px!important\n  }\n\n  .v-application .mx-sm-13{\n    margin-right:52px!important;\n    margin-left:52px!important\n  }\n\n  .v-application .mx-sm-14{\n    margin-right:56px!important;\n    margin-left:56px!important\n  }\n\n  .v-application .mx-sm-15{\n    margin-right:60px!important;\n    margin-left:60px!important\n  }\n\n  .v-application .mx-sm-16{\n    margin-right:64px!important;\n    margin-left:64px!important\n  }\n\n  .v-application .mx-sm-auto{\n    margin-right:auto!important;\n    margin-left:auto!important\n  }\n\n  .v-application .my-sm-0{\n    margin-top:0!important;\n    margin-bottom:0!important\n  }\n\n  .v-application .my-sm-1{\n    margin-top:4px!important;\n    margin-bottom:4px!important\n  }\n\n  .v-application .my-sm-2{\n    margin-top:8px!important;\n    margin-bottom:8px!important\n  }\n\n  .v-application .my-sm-3{\n    margin-top:12px!important;\n    margin-bottom:12px!important\n  }\n\n  .v-application .my-sm-4{\n    margin-top:16px!important;\n    margin-bottom:16px!important\n  }\n\n  .v-application .my-sm-5{\n    margin-top:20px!important;\n    margin-bottom:20px!important\n  }\n\n  .v-application .my-sm-6{\n    margin-top:24px!important;\n    margin-bottom:24px!important\n  }\n\n  .v-application .my-sm-7{\n    margin-top:28px!important;\n    margin-bottom:28px!important\n  }\n\n  .v-application .my-sm-8{\n    margin-top:32px!important;\n    margin-bottom:32px!important\n  }\n\n  .v-application .my-sm-9{\n    margin-top:36px!important;\n    margin-bottom:36px!important\n  }\n\n  .v-application .my-sm-10{\n    margin-top:40px!important;\n    margin-bottom:40px!important\n  }\n\n  .v-application .my-sm-11{\n    margin-top:44px!important;\n    margin-bottom:44px!important\n  }\n\n  .v-application .my-sm-12{\n    margin-top:48px!important;\n    margin-bottom:48px!important\n  }\n\n  .v-application .my-sm-13{\n    margin-top:52px!important;\n    margin-bottom:52px!important\n  }\n\n  .v-application .my-sm-14{\n    margin-top:56px!important;\n    margin-bottom:56px!important\n  }\n\n  .v-application .my-sm-15{\n    margin-top:60px!important;\n    margin-bottom:60px!important\n  }\n\n  .v-application .my-sm-16{\n    margin-top:64px!important;\n    margin-bottom:64px!important\n  }\n\n  .v-application .my-sm-auto{\n    margin-top:auto!important;\n    margin-bottom:auto!important\n  }\n\n  .v-application .mt-sm-0{\n    margin-top:0!important\n  }\n\n  .v-application .mt-sm-1{\n    margin-top:4px!important\n  }\n\n  .v-application .mt-sm-2{\n    margin-top:8px!important\n  }\n\n  .v-application .mt-sm-3{\n    margin-top:12px!important\n  }\n\n  .v-application .mt-sm-4{\n    margin-top:16px!important\n  }\n\n  .v-application .mt-sm-5{\n    margin-top:20px!important\n  }\n\n  .v-application .mt-sm-6{\n    margin-top:24px!important\n  }\n\n  .v-application .mt-sm-7{\n    margin-top:28px!important\n  }\n\n  .v-application .mt-sm-8{\n    margin-top:32px!important\n  }\n\n  .v-application .mt-sm-9{\n    margin-top:36px!important\n  }\n\n  .v-application .mt-sm-10{\n    margin-top:40px!important\n  }\n\n  .v-application .mt-sm-11{\n    margin-top:44px!important\n  }\n\n  .v-application .mt-sm-12{\n    margin-top:48px!important\n  }\n\n  .v-application .mt-sm-13{\n    margin-top:52px!important\n  }\n\n  .v-application .mt-sm-14{\n    margin-top:56px!important\n  }\n\n  .v-application .mt-sm-15{\n    margin-top:60px!important\n  }\n\n  .v-application .mt-sm-16{\n    margin-top:64px!important\n  }\n\n  .v-application .mt-sm-auto{\n    margin-top:auto!important\n  }\n\n  .v-application .mr-sm-0{\n    margin-right:0!important\n  }\n\n  .v-application .mr-sm-1{\n    margin-right:4px!important\n  }\n\n  .v-application .mr-sm-2{\n    margin-right:8px!important\n  }\n\n  .v-application .mr-sm-3{\n    margin-right:12px!important\n  }\n\n  .v-application .mr-sm-4{\n    margin-right:16px!important\n  }\n\n  .v-application .mr-sm-5{\n    margin-right:20px!important\n  }\n\n  .v-application .mr-sm-6{\n    margin-right:24px!important\n  }\n\n  .v-application .mr-sm-7{\n    margin-right:28px!important\n  }\n\n  .v-application .mr-sm-8{\n    margin-right:32px!important\n  }\n\n  .v-application .mr-sm-9{\n    margin-right:36px!important\n  }\n\n  .v-application .mr-sm-10{\n    margin-right:40px!important\n  }\n\n  .v-application .mr-sm-11{\n    margin-right:44px!important\n  }\n\n  .v-application .mr-sm-12{\n    margin-right:48px!important\n  }\n\n  .v-application .mr-sm-13{\n    margin-right:52px!important\n  }\n\n  .v-application .mr-sm-14{\n    margin-right:56px!important\n  }\n\n  .v-application .mr-sm-15{\n    margin-right:60px!important\n  }\n\n  .v-application .mr-sm-16{\n    margin-right:64px!important\n  }\n\n  .v-application .mr-sm-auto{\n    margin-right:auto!important\n  }\n\n  .v-application .mb-sm-0{\n    margin-bottom:0!important\n  }\n\n  .v-application .mb-sm-1{\n    margin-bottom:4px!important\n  }\n\n  .v-application .mb-sm-2{\n    margin-bottom:8px!important\n  }\n\n  .v-application .mb-sm-3{\n    margin-bottom:12px!important\n  }\n\n  .v-application .mb-sm-4{\n    margin-bottom:16px!important\n  }\n\n  .v-application .mb-sm-5{\n    margin-bottom:20px!important\n  }\n\n  .v-application .mb-sm-6{\n    margin-bottom:24px!important\n  }\n\n  .v-application .mb-sm-7{\n    margin-bottom:28px!important\n  }\n\n  .v-application .mb-sm-8{\n    margin-bottom:32px!important\n  }\n\n  .v-application .mb-sm-9{\n    margin-bottom:36px!important\n  }\n\n  .v-application .mb-sm-10{\n    margin-bottom:40px!important\n  }\n\n  .v-application .mb-sm-11{\n    margin-bottom:44px!important\n  }\n\n  .v-application .mb-sm-12{\n    margin-bottom:48px!important\n  }\n\n  .v-application .mb-sm-13{\n    margin-bottom:52px!important\n  }\n\n  .v-application .mb-sm-14{\n    margin-bottom:56px!important\n  }\n\n  .v-application .mb-sm-15{\n    margin-bottom:60px!important\n  }\n\n  .v-application .mb-sm-16{\n    margin-bottom:64px!important\n  }\n\n  .v-application .mb-sm-auto{\n    margin-bottom:auto!important\n  }\n\n  .v-application .ml-sm-0{\n    margin-left:0!important\n  }\n\n  .v-application .ml-sm-1{\n    margin-left:4px!important\n  }\n\n  .v-application .ml-sm-2{\n    margin-left:8px!important\n  }\n\n  .v-application .ml-sm-3{\n    margin-left:12px!important\n  }\n\n  .v-application .ml-sm-4{\n    margin-left:16px!important\n  }\n\n  .v-application .ml-sm-5{\n    margin-left:20px!important\n  }\n\n  .v-application .ml-sm-6{\n    margin-left:24px!important\n  }\n\n  .v-application .ml-sm-7{\n    margin-left:28px!important\n  }\n\n  .v-application .ml-sm-8{\n    margin-left:32px!important\n  }\n\n  .v-application .ml-sm-9{\n    margin-left:36px!important\n  }\n\n  .v-application .ml-sm-10{\n    margin-left:40px!important\n  }\n\n  .v-application .ml-sm-11{\n    margin-left:44px!important\n  }\n\n  .v-application .ml-sm-12{\n    margin-left:48px!important\n  }\n\n  .v-application .ml-sm-13{\n    margin-left:52px!important\n  }\n\n  .v-application .ml-sm-14{\n    margin-left:56px!important\n  }\n\n  .v-application .ml-sm-15{\n    margin-left:60px!important\n  }\n\n  .v-application .ml-sm-16{\n    margin-left:64px!important\n  }\n\n  .v-application .ml-sm-auto{\n    margin-left:auto!important\n  }\n\n  .v-application--is-ltr .ms-sm-0{\n    margin-left:0!important\n  }\n\n  .v-application--is-rtl .ms-sm-0{\n    margin-right:0!important\n  }\n\n  .v-application--is-ltr .ms-sm-1{\n    margin-left:4px!important\n  }\n\n  .v-application--is-rtl .ms-sm-1{\n    margin-right:4px!important\n  }\n\n  .v-application--is-ltr .ms-sm-2{\n    margin-left:8px!important\n  }\n\n  .v-application--is-rtl .ms-sm-2{\n    margin-right:8px!important\n  }\n\n  .v-application--is-ltr .ms-sm-3{\n    margin-left:12px!important\n  }\n\n  .v-application--is-rtl .ms-sm-3{\n    margin-right:12px!important\n  }\n\n  .v-application--is-ltr .ms-sm-4{\n    margin-left:16px!important\n  }\n\n  .v-application--is-rtl .ms-sm-4{\n    margin-right:16px!important\n  }\n\n  .v-application--is-ltr .ms-sm-5{\n    margin-left:20px!important\n  }\n\n  .v-application--is-rtl .ms-sm-5{\n    margin-right:20px!important\n  }\n\n  .v-application--is-ltr .ms-sm-6{\n    margin-left:24px!important\n  }\n\n  .v-application--is-rtl .ms-sm-6{\n    margin-right:24px!important\n  }\n\n  .v-application--is-ltr .ms-sm-7{\n    margin-left:28px!important\n  }\n\n  .v-application--is-rtl .ms-sm-7{\n    margin-right:28px!important\n  }\n\n  .v-application--is-ltr .ms-sm-8{\n    margin-left:32px!important\n  }\n\n  .v-application--is-rtl .ms-sm-8{\n    margin-right:32px!important\n  }\n\n  .v-application--is-ltr .ms-sm-9{\n    margin-left:36px!important\n  }\n\n  .v-application--is-rtl .ms-sm-9{\n    margin-right:36px!important\n  }\n\n  .v-application--is-ltr .ms-sm-10{\n    margin-left:40px!important\n  }\n\n  .v-application--is-rtl .ms-sm-10{\n    margin-right:40px!important\n  }\n\n  .v-application--is-ltr .ms-sm-11{\n    margin-left:44px!important\n  }\n\n  .v-application--is-rtl .ms-sm-11{\n    margin-right:44px!important\n  }\n\n  .v-application--is-ltr .ms-sm-12{\n    margin-left:48px!important\n  }\n\n  .v-application--is-rtl .ms-sm-12{\n    margin-right:48px!important\n  }\n\n  .v-application--is-ltr .ms-sm-13{\n    margin-left:52px!important\n  }\n\n  .v-application--is-rtl .ms-sm-13{\n    margin-right:52px!important\n  }\n\n  .v-application--is-ltr .ms-sm-14{\n    margin-left:56px!important\n  }\n\n  .v-application--is-rtl .ms-sm-14{\n    margin-right:56px!important\n  }\n\n  .v-application--is-ltr .ms-sm-15{\n    margin-left:60px!important\n  }\n\n  .v-application--is-rtl .ms-sm-15{\n    margin-right:60px!important\n  }\n\n  .v-application--is-ltr .ms-sm-16{\n    margin-left:64px!important\n  }\n\n  .v-application--is-rtl .ms-sm-16{\n    margin-right:64px!important\n  }\n\n  .v-application--is-ltr .ms-sm-auto{\n    margin-left:auto!important\n  }\n\n  .v-application--is-rtl .ms-sm-auto{\n    margin-right:auto!important\n  }\n\n  .v-application--is-ltr .me-sm-0{\n    margin-right:0!important\n  }\n\n  .v-application--is-rtl .me-sm-0{\n    margin-left:0!important\n  }\n\n  .v-application--is-ltr .me-sm-1{\n    margin-right:4px!important\n  }\n\n  .v-application--is-rtl .me-sm-1{\n    margin-left:4px!important\n  }\n\n  .v-application--is-ltr .me-sm-2{\n    margin-right:8px!important\n  }\n\n  .v-application--is-rtl .me-sm-2{\n    margin-left:8px!important\n  }\n\n  .v-application--is-ltr .me-sm-3{\n    margin-right:12px!important\n  }\n\n  .v-application--is-rtl .me-sm-3{\n    margin-left:12px!important\n  }\n\n  .v-application--is-ltr .me-sm-4{\n    margin-right:16px!important\n  }\n\n  .v-application--is-rtl .me-sm-4{\n    margin-left:16px!important\n  }\n\n  .v-application--is-ltr .me-sm-5{\n    margin-right:20px!important\n  }\n\n  .v-application--is-rtl .me-sm-5{\n    margin-left:20px!important\n  }\n\n  .v-application--is-ltr .me-sm-6{\n    margin-right:24px!important\n  }\n\n  .v-application--is-rtl .me-sm-6{\n    margin-left:24px!important\n  }\n\n  .v-application--is-ltr .me-sm-7{\n    margin-right:28px!important\n  }\n\n  .v-application--is-rtl .me-sm-7{\n    margin-left:28px!important\n  }\n\n  .v-application--is-ltr .me-sm-8{\n    margin-right:32px!important\n  }\n\n  .v-application--is-rtl .me-sm-8{\n    margin-left:32px!important\n  }\n\n  .v-application--is-ltr .me-sm-9{\n    margin-right:36px!important\n  }\n\n  .v-application--is-rtl .me-sm-9{\n    margin-left:36px!important\n  }\n\n  .v-application--is-ltr .me-sm-10{\n    margin-right:40px!important\n  }\n\n  .v-application--is-rtl .me-sm-10{\n    margin-left:40px!important\n  }\n\n  .v-application--is-ltr .me-sm-11{\n    margin-right:44px!important\n  }\n\n  .v-application--is-rtl .me-sm-11{\n    margin-left:44px!important\n  }\n\n  .v-application--is-ltr .me-sm-12{\n    margin-right:48px!important\n  }\n\n  .v-application--is-rtl .me-sm-12{\n    margin-left:48px!important\n  }\n\n  .v-application--is-ltr .me-sm-13{\n    margin-right:52px!important\n  }\n\n  .v-application--is-rtl .me-sm-13{\n    margin-left:52px!important\n  }\n\n  .v-application--is-ltr .me-sm-14{\n    margin-right:56px!important\n  }\n\n  .v-application--is-rtl .me-sm-14{\n    margin-left:56px!important\n  }\n\n  .v-application--is-ltr .me-sm-15{\n    margin-right:60px!important\n  }\n\n  .v-application--is-rtl .me-sm-15{\n    margin-left:60px!important\n  }\n\n  .v-application--is-ltr .me-sm-16{\n    margin-right:64px!important\n  }\n\n  .v-application--is-rtl .me-sm-16{\n    margin-left:64px!important\n  }\n\n  .v-application--is-ltr .me-sm-auto{\n    margin-right:auto!important\n  }\n\n  .v-application--is-rtl .me-sm-auto{\n    margin-left:auto!important\n  }\n\n  .v-application .ma-sm-n1{\n    margin:-4px!important\n  }\n\n  .v-application .ma-sm-n2{\n    margin:-8px!important\n  }\n\n  .v-application .ma-sm-n3{\n    margin:-12px!important\n  }\n\n  .v-application .ma-sm-n4{\n    margin:-16px!important\n  }\n\n  .v-application .ma-sm-n5{\n    margin:-20px!important\n  }\n\n  .v-application .ma-sm-n6{\n    margin:-24px!important\n  }\n\n  .v-application .ma-sm-n7{\n    margin:-28px!important\n  }\n\n  .v-application .ma-sm-n8{\n    margin:-32px!important\n  }\n\n  .v-application .ma-sm-n9{\n    margin:-36px!important\n  }\n\n  .v-application .ma-sm-n10{\n    margin:-40px!important\n  }\n\n  .v-application .ma-sm-n11{\n    margin:-44px!important\n  }\n\n  .v-application .ma-sm-n12{\n    margin:-48px!important\n  }\n\n  .v-application .ma-sm-n13{\n    margin:-52px!important\n  }\n\n  .v-application .ma-sm-n14{\n    margin:-56px!important\n  }\n\n  .v-application .ma-sm-n15{\n    margin:-60px!important\n  }\n\n  .v-application .ma-sm-n16{\n    margin:-64px!important\n  }\n\n  .v-application .mx-sm-n1{\n    margin-right:-4px!important;\n    margin-left:-4px!important\n  }\n\n  .v-application .mx-sm-n2{\n    margin-right:-8px!important;\n    margin-left:-8px!important\n  }\n\n  .v-application .mx-sm-n3{\n    margin-right:-12px!important;\n    margin-left:-12px!important\n  }\n\n  .v-application .mx-sm-n4{\n    margin-right:-16px!important;\n    margin-left:-16px!important\n  }\n\n  .v-application .mx-sm-n5{\n    margin-right:-20px!important;\n    margin-left:-20px!important\n  }\n\n  .v-application .mx-sm-n6{\n    margin-right:-24px!important;\n    margin-left:-24px!important\n  }\n\n  .v-application .mx-sm-n7{\n    margin-right:-28px!important;\n    margin-left:-28px!important\n  }\n\n  .v-application .mx-sm-n8{\n    margin-right:-32px!important;\n    margin-left:-32px!important\n  }\n\n  .v-application .mx-sm-n9{\n    margin-right:-36px!important;\n    margin-left:-36px!important\n  }\n\n  .v-application .mx-sm-n10{\n    margin-right:-40px!important;\n    margin-left:-40px!important\n  }\n\n  .v-application .mx-sm-n11{\n    margin-right:-44px!important;\n    margin-left:-44px!important\n  }\n\n  .v-application .mx-sm-n12{\n    margin-right:-48px!important;\n    margin-left:-48px!important\n  }\n\n  .v-application .mx-sm-n13{\n    margin-right:-52px!important;\n    margin-left:-52px!important\n  }\n\n  .v-application .mx-sm-n14{\n    margin-right:-56px!important;\n    margin-left:-56px!important\n  }\n\n  .v-application .mx-sm-n15{\n    margin-right:-60px!important;\n    margin-left:-60px!important\n  }\n\n  .v-application .mx-sm-n16{\n    margin-right:-64px!important;\n    margin-left:-64px!important\n  }\n\n  .v-application .my-sm-n1{\n    margin-top:-4px!important;\n    margin-bottom:-4px!important\n  }\n\n  .v-application .my-sm-n2{\n    margin-top:-8px!important;\n    margin-bottom:-8px!important\n  }\n\n  .v-application .my-sm-n3{\n    margin-top:-12px!important;\n    margin-bottom:-12px!important\n  }\n\n  .v-application .my-sm-n4{\n    margin-top:-16px!important;\n    margin-bottom:-16px!important\n  }\n\n  .v-application .my-sm-n5{\n    margin-top:-20px!important;\n    margin-bottom:-20px!important\n  }\n\n  .v-application .my-sm-n6{\n    margin-top:-24px!important;\n    margin-bottom:-24px!important\n  }\n\n  .v-application .my-sm-n7{\n    margin-top:-28px!important;\n    margin-bottom:-28px!important\n  }\n\n  .v-application .my-sm-n8{\n    margin-top:-32px!important;\n    margin-bottom:-32px!important\n  }\n\n  .v-application .my-sm-n9{\n    margin-top:-36px!important;\n    margin-bottom:-36px!important\n  }\n\n  .v-application .my-sm-n10{\n    margin-top:-40px!important;\n    margin-bottom:-40px!important\n  }\n\n  .v-application .my-sm-n11{\n    margin-top:-44px!important;\n    margin-bottom:-44px!important\n  }\n\n  .v-application .my-sm-n12{\n    margin-top:-48px!important;\n    margin-bottom:-48px!important\n  }\n\n  .v-application .my-sm-n13{\n    margin-top:-52px!important;\n    margin-bottom:-52px!important\n  }\n\n  .v-application .my-sm-n14{\n    margin-top:-56px!important;\n    margin-bottom:-56px!important\n  }\n\n  .v-application .my-sm-n15{\n    margin-top:-60px!important;\n    margin-bottom:-60px!important\n  }\n\n  .v-application .my-sm-n16{\n    margin-top:-64px!important;\n    margin-bottom:-64px!important\n  }\n\n  .v-application .mt-sm-n1{\n    margin-top:-4px!important\n  }\n\n  .v-application .mt-sm-n2{\n    margin-top:-8px!important\n  }\n\n  .v-application .mt-sm-n3{\n    margin-top:-12px!important\n  }\n\n  .v-application .mt-sm-n4{\n    margin-top:-16px!important\n  }\n\n  .v-application .mt-sm-n5{\n    margin-top:-20px!important\n  }\n\n  .v-application .mt-sm-n6{\n    margin-top:-24px!important\n  }\n\n  .v-application .mt-sm-n7{\n    margin-top:-28px!important\n  }\n\n  .v-application .mt-sm-n8{\n    margin-top:-32px!important\n  }\n\n  .v-application .mt-sm-n9{\n    margin-top:-36px!important\n  }\n\n  .v-application .mt-sm-n10{\n    margin-top:-40px!important\n  }\n\n  .v-application .mt-sm-n11{\n    margin-top:-44px!important\n  }\n\n  .v-application .mt-sm-n12{\n    margin-top:-48px!important\n  }\n\n  .v-application .mt-sm-n13{\n    margin-top:-52px!important\n  }\n\n  .v-application .mt-sm-n14{\n    margin-top:-56px!important\n  }\n\n  .v-application .mt-sm-n15{\n    margin-top:-60px!important\n  }\n\n  .v-application .mt-sm-n16{\n    margin-top:-64px!important\n  }\n\n  .v-application .mr-sm-n1{\n    margin-right:-4px!important\n  }\n\n  .v-application .mr-sm-n2{\n    margin-right:-8px!important\n  }\n\n  .v-application .mr-sm-n3{\n    margin-right:-12px!important\n  }\n\n  .v-application .mr-sm-n4{\n    margin-right:-16px!important\n  }\n\n  .v-application .mr-sm-n5{\n    margin-right:-20px!important\n  }\n\n  .v-application .mr-sm-n6{\n    margin-right:-24px!important\n  }\n\n  .v-application .mr-sm-n7{\n    margin-right:-28px!important\n  }\n\n  .v-application .mr-sm-n8{\n    margin-right:-32px!important\n  }\n\n  .v-application .mr-sm-n9{\n    margin-right:-36px!important\n  }\n\n  .v-application .mr-sm-n10{\n    margin-right:-40px!important\n  }\n\n  .v-application .mr-sm-n11{\n    margin-right:-44px!important\n  }\n\n  .v-application .mr-sm-n12{\n    margin-right:-48px!important\n  }\n\n  .v-application .mr-sm-n13{\n    margin-right:-52px!important\n  }\n\n  .v-application .mr-sm-n14{\n    margin-right:-56px!important\n  }\n\n  .v-application .mr-sm-n15{\n    margin-right:-60px!important\n  }\n\n  .v-application .mr-sm-n16{\n    margin-right:-64px!important\n  }\n\n  .v-application .mb-sm-n1{\n    margin-bottom:-4px!important\n  }\n\n  .v-application .mb-sm-n2{\n    margin-bottom:-8px!important\n  }\n\n  .v-application .mb-sm-n3{\n    margin-bottom:-12px!important\n  }\n\n  .v-application .mb-sm-n4{\n    margin-bottom:-16px!important\n  }\n\n  .v-application .mb-sm-n5{\n    margin-bottom:-20px!important\n  }\n\n  .v-application .mb-sm-n6{\n    margin-bottom:-24px!important\n  }\n\n  .v-application .mb-sm-n7{\n    margin-bottom:-28px!important\n  }\n\n  .v-application .mb-sm-n8{\n    margin-bottom:-32px!important\n  }\n\n  .v-application .mb-sm-n9{\n    margin-bottom:-36px!important\n  }\n\n  .v-application .mb-sm-n10{\n    margin-bottom:-40px!important\n  }\n\n  .v-application .mb-sm-n11{\n    margin-bottom:-44px!important\n  }\n\n  .v-application .mb-sm-n12{\n    margin-bottom:-48px!important\n  }\n\n  .v-application .mb-sm-n13{\n    margin-bottom:-52px!important\n  }\n\n  .v-application .mb-sm-n14{\n    margin-bottom:-56px!important\n  }\n\n  .v-application .mb-sm-n15{\n    margin-bottom:-60px!important\n  }\n\n  .v-application .mb-sm-n16{\n    margin-bottom:-64px!important\n  }\n\n  .v-application .ml-sm-n1{\n    margin-left:-4px!important\n  }\n\n  .v-application .ml-sm-n2{\n    margin-left:-8px!important\n  }\n\n  .v-application .ml-sm-n3{\n    margin-left:-12px!important\n  }\n\n  .v-application .ml-sm-n4{\n    margin-left:-16px!important\n  }\n\n  .v-application .ml-sm-n5{\n    margin-left:-20px!important\n  }\n\n  .v-application .ml-sm-n6{\n    margin-left:-24px!important\n  }\n\n  .v-application .ml-sm-n7{\n    margin-left:-28px!important\n  }\n\n  .v-application .ml-sm-n8{\n    margin-left:-32px!important\n  }\n\n  .v-application .ml-sm-n9{\n    margin-left:-36px!important\n  }\n\n  .v-application .ml-sm-n10{\n    margin-left:-40px!important\n  }\n\n  .v-application .ml-sm-n11{\n    margin-left:-44px!important\n  }\n\n  .v-application .ml-sm-n12{\n    margin-left:-48px!important\n  }\n\n  .v-application .ml-sm-n13{\n    margin-left:-52px!important\n  }\n\n  .v-application .ml-sm-n14{\n    margin-left:-56px!important\n  }\n\n  .v-application .ml-sm-n15{\n    margin-left:-60px!important\n  }\n\n  .v-application .ml-sm-n16{\n    margin-left:-64px!important\n  }\n\n  .v-application--is-ltr .ms-sm-n1{\n    margin-left:-4px!important\n  }\n\n  .v-application--is-rtl .ms-sm-n1{\n    margin-right:-4px!important\n  }\n\n  .v-application--is-ltr .ms-sm-n2{\n    margin-left:-8px!important\n  }\n\n  .v-application--is-rtl .ms-sm-n2{\n    margin-right:-8px!important\n  }\n\n  .v-application--is-ltr .ms-sm-n3{\n    margin-left:-12px!important\n  }\n\n  .v-application--is-rtl .ms-sm-n3{\n    margin-right:-12px!important\n  }\n\n  .v-application--is-ltr .ms-sm-n4{\n    margin-left:-16px!important\n  }\n\n  .v-application--is-rtl .ms-sm-n4{\n    margin-right:-16px!important\n  }\n\n  .v-application--is-ltr .ms-sm-n5{\n    margin-left:-20px!important\n  }\n\n  .v-application--is-rtl .ms-sm-n5{\n    margin-right:-20px!important\n  }\n\n  .v-application--is-ltr .ms-sm-n6{\n    margin-left:-24px!important\n  }\n\n  .v-application--is-rtl .ms-sm-n6{\n    margin-right:-24px!important\n  }\n\n  .v-application--is-ltr .ms-sm-n7{\n    margin-left:-28px!important\n  }\n\n  .v-application--is-rtl .ms-sm-n7{\n    margin-right:-28px!important\n  }\n\n  .v-application--is-ltr .ms-sm-n8{\n    margin-left:-32px!important\n  }\n\n  .v-application--is-rtl .ms-sm-n8{\n    margin-right:-32px!important\n  }\n\n  .v-application--is-ltr .ms-sm-n9{\n    margin-left:-36px!important\n  }\n\n  .v-application--is-rtl .ms-sm-n9{\n    margin-right:-36px!important\n  }\n\n  .v-application--is-ltr .ms-sm-n10{\n    margin-left:-40px!important\n  }\n\n  .v-application--is-rtl .ms-sm-n10{\n    margin-right:-40px!important\n  }\n\n  .v-application--is-ltr .ms-sm-n11{\n    margin-left:-44px!important\n  }\n\n  .v-application--is-rtl .ms-sm-n11{\n    margin-right:-44px!important\n  }\n\n  .v-application--is-ltr .ms-sm-n12{\n    margin-left:-48px!important\n  }\n\n  .v-application--is-rtl .ms-sm-n12{\n    margin-right:-48px!important\n  }\n\n  .v-application--is-ltr .ms-sm-n13{\n    margin-left:-52px!important\n  }\n\n  .v-application--is-rtl .ms-sm-n13{\n    margin-right:-52px!important\n  }\n\n  .v-application--is-ltr .ms-sm-n14{\n    margin-left:-56px!important\n  }\n\n  .v-application--is-rtl .ms-sm-n14{\n    margin-right:-56px!important\n  }\n\n  .v-application--is-ltr .ms-sm-n15{\n    margin-left:-60px!important\n  }\n\n  .v-application--is-rtl .ms-sm-n15{\n    margin-right:-60px!important\n  }\n\n  .v-application--is-ltr .ms-sm-n16{\n    margin-left:-64px!important\n  }\n\n  .v-application--is-rtl .ms-sm-n16{\n    margin-right:-64px!important\n  }\n\n  .v-application--is-ltr .me-sm-n1{\n    margin-right:-4px!important\n  }\n\n  .v-application--is-rtl .me-sm-n1{\n    margin-left:-4px!important\n  }\n\n  .v-application--is-ltr .me-sm-n2{\n    margin-right:-8px!important\n  }\n\n  .v-application--is-rtl .me-sm-n2{\n    margin-left:-8px!important\n  }\n\n  .v-application--is-ltr .me-sm-n3{\n    margin-right:-12px!important\n  }\n\n  .v-application--is-rtl .me-sm-n3{\n    margin-left:-12px!important\n  }\n\n  .v-application--is-ltr .me-sm-n4{\n    margin-right:-16px!important\n  }\n\n  .v-application--is-rtl .me-sm-n4{\n    margin-left:-16px!important\n  }\n\n  .v-application--is-ltr .me-sm-n5{\n    margin-right:-20px!important\n  }\n\n  .v-application--is-rtl .me-sm-n5{\n    margin-left:-20px!important\n  }\n\n  .v-application--is-ltr .me-sm-n6{\n    margin-right:-24px!important\n  }\n\n  .v-application--is-rtl .me-sm-n6{\n    margin-left:-24px!important\n  }\n\n  .v-application--is-ltr .me-sm-n7{\n    margin-right:-28px!important\n  }\n\n  .v-application--is-rtl .me-sm-n7{\n    margin-left:-28px!important\n  }\n\n  .v-application--is-ltr .me-sm-n8{\n    margin-right:-32px!important\n  }\n\n  .v-application--is-rtl .me-sm-n8{\n    margin-left:-32px!important\n  }\n\n  .v-application--is-ltr .me-sm-n9{\n    margin-right:-36px!important\n  }\n\n  .v-application--is-rtl .me-sm-n9{\n    margin-left:-36px!important\n  }\n\n  .v-application--is-ltr .me-sm-n10{\n    margin-right:-40px!important\n  }\n\n  .v-application--is-rtl .me-sm-n10{\n    margin-left:-40px!important\n  }\n\n  .v-application--is-ltr .me-sm-n11{\n    margin-right:-44px!important\n  }\n\n  .v-application--is-rtl .me-sm-n11{\n    margin-left:-44px!important\n  }\n\n  .v-application--is-ltr .me-sm-n12{\n    margin-right:-48px!important\n  }\n\n  .v-application--is-rtl .me-sm-n12{\n    margin-left:-48px!important\n  }\n\n  .v-application--is-ltr .me-sm-n13{\n    margin-right:-52px!important\n  }\n\n  .v-application--is-rtl .me-sm-n13{\n    margin-left:-52px!important\n  }\n\n  .v-application--is-ltr .me-sm-n14{\n    margin-right:-56px!important\n  }\n\n  .v-application--is-rtl .me-sm-n14{\n    margin-left:-56px!important\n  }\n\n  .v-application--is-ltr .me-sm-n15{\n    margin-right:-60px!important\n  }\n\n  .v-application--is-rtl .me-sm-n15{\n    margin-left:-60px!important\n  }\n\n  .v-application--is-ltr .me-sm-n16{\n    margin-right:-64px!important\n  }\n\n  .v-application--is-rtl .me-sm-n16{\n    margin-left:-64px!important\n  }\n\n  .v-application .pa-sm-0{\n    padding:0!important\n  }\n\n  .v-application .pa-sm-1{\n    padding:4px!important\n  }\n\n  .v-application .pa-sm-2{\n    padding:8px!important\n  }\n\n  .v-application .pa-sm-3{\n    padding:12px!important\n  }\n\n  .v-application .pa-sm-4{\n    padding:16px!important\n  }\n\n  .v-application .pa-sm-5{\n    padding:20px!important\n  }\n\n  .v-application .pa-sm-6{\n    padding:24px!important\n  }\n\n  .v-application .pa-sm-7{\n    padding:28px!important\n  }\n\n  .v-application .pa-sm-8{\n    padding:32px!important\n  }\n\n  .v-application .pa-sm-9{\n    padding:36px!important\n  }\n\n  .v-application .pa-sm-10{\n    padding:40px!important\n  }\n\n  .v-application .pa-sm-11{\n    padding:44px!important\n  }\n\n  .v-application .pa-sm-12{\n    padding:48px!important\n  }\n\n  .v-application .pa-sm-13{\n    padding:52px!important\n  }\n\n  .v-application .pa-sm-14{\n    padding:56px!important\n  }\n\n  .v-application .pa-sm-15{\n    padding:60px!important\n  }\n\n  .v-application .pa-sm-16{\n    padding:64px!important\n  }\n\n  .v-application .px-sm-0{\n    padding-right:0!important;\n    padding-left:0!important\n  }\n\n  .v-application .px-sm-1{\n    padding-right:4px!important;\n    padding-left:4px!important\n  }\n\n  .v-application .px-sm-2{\n    padding-right:8px!important;\n    padding-left:8px!important\n  }\n\n  .v-application .px-sm-3{\n    padding-right:12px!important;\n    padding-left:12px!important\n  }\n\n  .v-application .px-sm-4{\n    padding-right:16px!important;\n    padding-left:16px!important\n  }\n\n  .v-application .px-sm-5{\n    padding-right:20px!important;\n    padding-left:20px!important\n  }\n\n  .v-application .px-sm-6{\n    padding-right:24px!important;\n    padding-left:24px!important\n  }\n\n  .v-application .px-sm-7{\n    padding-right:28px!important;\n    padding-left:28px!important\n  }\n\n  .v-application .px-sm-8{\n    padding-right:32px!important;\n    padding-left:32px!important\n  }\n\n  .v-application .px-sm-9{\n    padding-right:36px!important;\n    padding-left:36px!important\n  }\n\n  .v-application .px-sm-10{\n    padding-right:40px!important;\n    padding-left:40px!important\n  }\n\n  .v-application .px-sm-11{\n    padding-right:44px!important;\n    padding-left:44px!important\n  }\n\n  .v-application .px-sm-12{\n    padding-right:48px!important;\n    padding-left:48px!important\n  }\n\n  .v-application .px-sm-13{\n    padding-right:52px!important;\n    padding-left:52px!important\n  }\n\n  .v-application .px-sm-14{\n    padding-right:56px!important;\n    padding-left:56px!important\n  }\n\n  .v-application .px-sm-15{\n    padding-right:60px!important;\n    padding-left:60px!important\n  }\n\n  .v-application .px-sm-16{\n    padding-right:64px!important;\n    padding-left:64px!important\n  }\n\n  .v-application .py-sm-0{\n    padding-top:0!important;\n    padding-bottom:0!important\n  }\n\n  .v-application .py-sm-1{\n    padding-top:4px!important;\n    padding-bottom:4px!important\n  }\n\n  .v-application .py-sm-2{\n    padding-top:8px!important;\n    padding-bottom:8px!important\n  }\n\n  .v-application .py-sm-3{\n    padding-top:12px!important;\n    padding-bottom:12px!important\n  }\n\n  .v-application .py-sm-4{\n    padding-top:16px!important;\n    padding-bottom:16px!important\n  }\n\n  .v-application .py-sm-5{\n    padding-top:20px!important;\n    padding-bottom:20px!important\n  }\n\n  .v-application .py-sm-6{\n    padding-top:24px!important;\n    padding-bottom:24px!important\n  }\n\n  .v-application .py-sm-7{\n    padding-top:28px!important;\n    padding-bottom:28px!important\n  }\n\n  .v-application .py-sm-8{\n    padding-top:32px!important;\n    padding-bottom:32px!important\n  }\n\n  .v-application .py-sm-9{\n    padding-top:36px!important;\n    padding-bottom:36px!important\n  }\n\n  .v-application .py-sm-10{\n    padding-top:40px!important;\n    padding-bottom:40px!important\n  }\n\n  .v-application .py-sm-11{\n    padding-top:44px!important;\n    padding-bottom:44px!important\n  }\n\n  .v-application .py-sm-12{\n    padding-top:48px!important;\n    padding-bottom:48px!important\n  }\n\n  .v-application .py-sm-13{\n    padding-top:52px!important;\n    padding-bottom:52px!important\n  }\n\n  .v-application .py-sm-14{\n    padding-top:56px!important;\n    padding-bottom:56px!important\n  }\n\n  .v-application .py-sm-15{\n    padding-top:60px!important;\n    padding-bottom:60px!important\n  }\n\n  .v-application .py-sm-16{\n    padding-top:64px!important;\n    padding-bottom:64px!important\n  }\n\n  .v-application .pt-sm-0{\n    padding-top:0!important\n  }\n\n  .v-application .pt-sm-1{\n    padding-top:4px!important\n  }\n\n  .v-application .pt-sm-2{\n    padding-top:8px!important\n  }\n\n  .v-application .pt-sm-3{\n    padding-top:12px!important\n  }\n\n  .v-application .pt-sm-4{\n    padding-top:16px!important\n  }\n\n  .v-application .pt-sm-5{\n    padding-top:20px!important\n  }\n\n  .v-application .pt-sm-6{\n    padding-top:24px!important\n  }\n\n  .v-application .pt-sm-7{\n    padding-top:28px!important\n  }\n\n  .v-application .pt-sm-8{\n    padding-top:32px!important\n  }\n\n  .v-application .pt-sm-9{\n    padding-top:36px!important\n  }\n\n  .v-application .pt-sm-10{\n    padding-top:40px!important\n  }\n\n  .v-application .pt-sm-11{\n    padding-top:44px!important\n  }\n\n  .v-application .pt-sm-12{\n    padding-top:48px!important\n  }\n\n  .v-application .pt-sm-13{\n    padding-top:52px!important\n  }\n\n  .v-application .pt-sm-14{\n    padding-top:56px!important\n  }\n\n  .v-application .pt-sm-15{\n    padding-top:60px!important\n  }\n\n  .v-application .pt-sm-16{\n    padding-top:64px!important\n  }\n\n  .v-application .pr-sm-0{\n    padding-right:0!important\n  }\n\n  .v-application .pr-sm-1{\n    padding-right:4px!important\n  }\n\n  .v-application .pr-sm-2{\n    padding-right:8px!important\n  }\n\n  .v-application .pr-sm-3{\n    padding-right:12px!important\n  }\n\n  .v-application .pr-sm-4{\n    padding-right:16px!important\n  }\n\n  .v-application .pr-sm-5{\n    padding-right:20px!important\n  }\n\n  .v-application .pr-sm-6{\n    padding-right:24px!important\n  }\n\n  .v-application .pr-sm-7{\n    padding-right:28px!important\n  }\n\n  .v-application .pr-sm-8{\n    padding-right:32px!important\n  }\n\n  .v-application .pr-sm-9{\n    padding-right:36px!important\n  }\n\n  .v-application .pr-sm-10{\n    padding-right:40px!important\n  }\n\n  .v-application .pr-sm-11{\n    padding-right:44px!important\n  }\n\n  .v-application .pr-sm-12{\n    padding-right:48px!important\n  }\n\n  .v-application .pr-sm-13{\n    padding-right:52px!important\n  }\n\n  .v-application .pr-sm-14{\n    padding-right:56px!important\n  }\n\n  .v-application .pr-sm-15{\n    padding-right:60px!important\n  }\n\n  .v-application .pr-sm-16{\n    padding-right:64px!important\n  }\n\n  .v-application .pb-sm-0{\n    padding-bottom:0!important\n  }\n\n  .v-application .pb-sm-1{\n    padding-bottom:4px!important\n  }\n\n  .v-application .pb-sm-2{\n    padding-bottom:8px!important\n  }\n\n  .v-application .pb-sm-3{\n    padding-bottom:12px!important\n  }\n\n  .v-application .pb-sm-4{\n    padding-bottom:16px!important\n  }\n\n  .v-application .pb-sm-5{\n    padding-bottom:20px!important\n  }\n\n  .v-application .pb-sm-6{\n    padding-bottom:24px!important\n  }\n\n  .v-application .pb-sm-7{\n    padding-bottom:28px!important\n  }\n\n  .v-application .pb-sm-8{\n    padding-bottom:32px!important\n  }\n\n  .v-application .pb-sm-9{\n    padding-bottom:36px!important\n  }\n\n  .v-application .pb-sm-10{\n    padding-bottom:40px!important\n  }\n\n  .v-application .pb-sm-11{\n    padding-bottom:44px!important\n  }\n\n  .v-application .pb-sm-12{\n    padding-bottom:48px!important\n  }\n\n  .v-application .pb-sm-13{\n    padding-bottom:52px!important\n  }\n\n  .v-application .pb-sm-14{\n    padding-bottom:56px!important\n  }\n\n  .v-application .pb-sm-15{\n    padding-bottom:60px!important\n  }\n\n  .v-application .pb-sm-16{\n    padding-bottom:64px!important\n  }\n\n  .v-application .pl-sm-0{\n    padding-left:0!important\n  }\n\n  .v-application .pl-sm-1{\n    padding-left:4px!important\n  }\n\n  .v-application .pl-sm-2{\n    padding-left:8px!important\n  }\n\n  .v-application .pl-sm-3{\n    padding-left:12px!important\n  }\n\n  .v-application .pl-sm-4{\n    padding-left:16px!important\n  }\n\n  .v-application .pl-sm-5{\n    padding-left:20px!important\n  }\n\n  .v-application .pl-sm-6{\n    padding-left:24px!important\n  }\n\n  .v-application .pl-sm-7{\n    padding-left:28px!important\n  }\n\n  .v-application .pl-sm-8{\n    padding-left:32px!important\n  }\n\n  .v-application .pl-sm-9{\n    padding-left:36px!important\n  }\n\n  .v-application .pl-sm-10{\n    padding-left:40px!important\n  }\n\n  .v-application .pl-sm-11{\n    padding-left:44px!important\n  }\n\n  .v-application .pl-sm-12{\n    padding-left:48px!important\n  }\n\n  .v-application .pl-sm-13{\n    padding-left:52px!important\n  }\n\n  .v-application .pl-sm-14{\n    padding-left:56px!important\n  }\n\n  .v-application .pl-sm-15{\n    padding-left:60px!important\n  }\n\n  .v-application .pl-sm-16{\n    padding-left:64px!important\n  }\n\n  .v-application--is-ltr .ps-sm-0{\n    padding-left:0!important\n  }\n\n  .v-application--is-rtl .ps-sm-0{\n    padding-right:0!important\n  }\n\n  .v-application--is-ltr .ps-sm-1{\n    padding-left:4px!important\n  }\n\n  .v-application--is-rtl .ps-sm-1{\n    padding-right:4px!important\n  }\n\n  .v-application--is-ltr .ps-sm-2{\n    padding-left:8px!important\n  }\n\n  .v-application--is-rtl .ps-sm-2{\n    padding-right:8px!important\n  }\n\n  .v-application--is-ltr .ps-sm-3{\n    padding-left:12px!important\n  }\n\n  .v-application--is-rtl .ps-sm-3{\n    padding-right:12px!important\n  }\n\n  .v-application--is-ltr .ps-sm-4{\n    padding-left:16px!important\n  }\n\n  .v-application--is-rtl .ps-sm-4{\n    padding-right:16px!important\n  }\n\n  .v-application--is-ltr .ps-sm-5{\n    padding-left:20px!important\n  }\n\n  .v-application--is-rtl .ps-sm-5{\n    padding-right:20px!important\n  }\n\n  .v-application--is-ltr .ps-sm-6{\n    padding-left:24px!important\n  }\n\n  .v-application--is-rtl .ps-sm-6{\n    padding-right:24px!important\n  }\n\n  .v-application--is-ltr .ps-sm-7{\n    padding-left:28px!important\n  }\n\n  .v-application--is-rtl .ps-sm-7{\n    padding-right:28px!important\n  }\n\n  .v-application--is-ltr .ps-sm-8{\n    padding-left:32px!important\n  }\n\n  .v-application--is-rtl .ps-sm-8{\n    padding-right:32px!important\n  }\n\n  .v-application--is-ltr .ps-sm-9{\n    padding-left:36px!important\n  }\n\n  .v-application--is-rtl .ps-sm-9{\n    padding-right:36px!important\n  }\n\n  .v-application--is-ltr .ps-sm-10{\n    padding-left:40px!important\n  }\n\n  .v-application--is-rtl .ps-sm-10{\n    padding-right:40px!important\n  }\n\n  .v-application--is-ltr .ps-sm-11{\n    padding-left:44px!important\n  }\n\n  .v-application--is-rtl .ps-sm-11{\n    padding-right:44px!important\n  }\n\n  .v-application--is-ltr .ps-sm-12{\n    padding-left:48px!important\n  }\n\n  .v-application--is-rtl .ps-sm-12{\n    padding-right:48px!important\n  }\n\n  .v-application--is-ltr .ps-sm-13{\n    padding-left:52px!important\n  }\n\n  .v-application--is-rtl .ps-sm-13{\n    padding-right:52px!important\n  }\n\n  .v-application--is-ltr .ps-sm-14{\n    padding-left:56px!important\n  }\n\n  .v-application--is-rtl .ps-sm-14{\n    padding-right:56px!important\n  }\n\n  .v-application--is-ltr .ps-sm-15{\n    padding-left:60px!important\n  }\n\n  .v-application--is-rtl .ps-sm-15{\n    padding-right:60px!important\n  }\n\n  .v-application--is-ltr .ps-sm-16{\n    padding-left:64px!important\n  }\n\n  .v-application--is-rtl .ps-sm-16{\n    padding-right:64px!important\n  }\n\n  .v-application--is-ltr .pe-sm-0{\n    padding-right:0!important\n  }\n\n  .v-application--is-rtl .pe-sm-0{\n    padding-left:0!important\n  }\n\n  .v-application--is-ltr .pe-sm-1{\n    padding-right:4px!important\n  }\n\n  .v-application--is-rtl .pe-sm-1{\n    padding-left:4px!important\n  }\n\n  .v-application--is-ltr .pe-sm-2{\n    padding-right:8px!important\n  }\n\n  .v-application--is-rtl .pe-sm-2{\n    padding-left:8px!important\n  }\n\n  .v-application--is-ltr .pe-sm-3{\n    padding-right:12px!important\n  }\n\n  .v-application--is-rtl .pe-sm-3{\n    padding-left:12px!important\n  }\n\n  .v-application--is-ltr .pe-sm-4{\n    padding-right:16px!important\n  }\n\n  .v-application--is-rtl .pe-sm-4{\n    padding-left:16px!important\n  }\n\n  .v-application--is-ltr .pe-sm-5{\n    padding-right:20px!important\n  }\n\n  .v-application--is-rtl .pe-sm-5{\n    padding-left:20px!important\n  }\n\n  .v-application--is-ltr .pe-sm-6{\n    padding-right:24px!important\n  }\n\n  .v-application--is-rtl .pe-sm-6{\n    padding-left:24px!important\n  }\n\n  .v-application--is-ltr .pe-sm-7{\n    padding-right:28px!important\n  }\n\n  .v-application--is-rtl .pe-sm-7{\n    padding-left:28px!important\n  }\n\n  .v-application--is-ltr .pe-sm-8{\n    padding-right:32px!important\n  }\n\n  .v-application--is-rtl .pe-sm-8{\n    padding-left:32px!important\n  }\n\n  .v-application--is-ltr .pe-sm-9{\n    padding-right:36px!important\n  }\n\n  .v-application--is-rtl .pe-sm-9{\n    padding-left:36px!important\n  }\n\n  .v-application--is-ltr .pe-sm-10{\n    padding-right:40px!important\n  }\n\n  .v-application--is-rtl .pe-sm-10{\n    padding-left:40px!important\n  }\n\n  .v-application--is-ltr .pe-sm-11{\n    padding-right:44px!important\n  }\n\n  .v-application--is-rtl .pe-sm-11{\n    padding-left:44px!important\n  }\n\n  .v-application--is-ltr .pe-sm-12{\n    padding-right:48px!important\n  }\n\n  .v-application--is-rtl .pe-sm-12{\n    padding-left:48px!important\n  }\n\n  .v-application--is-ltr .pe-sm-13{\n    padding-right:52px!important\n  }\n\n  .v-application--is-rtl .pe-sm-13{\n    padding-left:52px!important\n  }\n\n  .v-application--is-ltr .pe-sm-14{\n    padding-right:56px!important\n  }\n\n  .v-application--is-rtl .pe-sm-14{\n    padding-left:56px!important\n  }\n\n  .v-application--is-ltr .pe-sm-15{\n    padding-right:60px!important\n  }\n\n  .v-application--is-rtl .pe-sm-15{\n    padding-left:60px!important\n  }\n\n  .v-application--is-ltr .pe-sm-16{\n    padding-right:64px!important\n  }\n\n  .v-application--is-rtl .pe-sm-16{\n    padding-left:64px!important\n  }\n\n  .v-application .text-sm-left{\n    text-align:left!important\n  }\n\n  .v-application .text-sm-right{\n    text-align:right!important\n  }\n\n  .v-application .text-sm-center{\n    text-align:center!important\n  }\n\n  .v-application .text-sm-justify{\n    text-align:justify!important\n  }\n\n  .v-application .text-sm-start{\n    text-align:start!important\n  }\n\n  .v-application .text-sm-end{\n    text-align:end!important\n  }\n\n  .v-application .text-sm-h1{\n    font-size:6rem!important;\n    line-height:6rem;\n    letter-spacing:-.015625em!important\n  }\n\n  .v-application .text-sm-h1,.v-application .text-sm-h2{\n    font-weight:300;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-sm-h2{\n    font-size:3.75rem!important;\n    line-height:3.75rem;\n    letter-spacing:-.0083333333em!important\n  }\n\n  .v-application .text-sm-h3{\n    font-size:3rem!important;\n    line-height:3.125rem;\n    letter-spacing:normal!important\n  }\n\n  .v-application .text-sm-h3,.v-application .text-sm-h4{\n    font-weight:400;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-sm-h4{\n    font-size:2.125rem!important;\n    line-height:2.5rem;\n    letter-spacing:.0073529412em!important\n  }\n\n  .v-application .text-sm-h5{\n    font-size:1.5rem!important;\n    font-weight:400;\n    letter-spacing:normal!important\n  }\n\n  .v-application .text-sm-h5,.v-application .text-sm-h6{\n    line-height:2rem;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-sm-h6{\n    font-size:1.25rem!important;\n    font-weight:500;\n    letter-spacing:.0125em!important\n  }\n\n  .v-application .text-sm-subtitle-1{\n    font-size:1rem!important;\n    font-weight:400;\n    line-height:1.75rem;\n    letter-spacing:.009375em!important;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-sm-subtitle-2{\n    font-size:.875rem!important;\n    font-weight:500;\n    line-height:1.375rem;\n    letter-spacing:.0071428571em!important;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-sm-body-1{\n    font-size:1rem!important;\n    font-weight:400;\n    line-height:1.5rem;\n    letter-spacing:.03125em!important;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-sm-body-2{\n    font-weight:400;\n    line-height:1.25rem;\n    letter-spacing:.0178571429em!important\n  }\n\n  .v-application .text-sm-body-2,.v-application .text-sm-button{\n    font-size:.875rem!important;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-sm-button{\n    font-weight:500;\n    line-height:2.25rem;\n    letter-spacing:.0892857143em!important;\n    text-transform:uppercase!important\n  }\n\n  .v-application .text-sm-caption{\n    font-weight:400;\n    line-height:1.25rem;\n    letter-spacing:.0333333333em!important\n  }\n\n  .v-application .text-sm-caption,.v-application .text-sm-overline{\n    font-size:.75rem!important;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-sm-overline{\n    font-weight:500;\n    line-height:2rem;\n    letter-spacing:.1666666667em!important;\n    text-transform:uppercase!important\n  }\n}\n\n@media(min-width:960px){\n  .v-application .d-md-none{\n    display:none!important\n  }\n\n  .v-application .d-md-inline{\n    display:inline!important\n  }\n\n  .v-application .d-md-inline-block{\n    display:inline-block!important\n  }\n\n  .v-application .d-md-block{\n    display:block!important\n  }\n\n  .v-application .d-md-table{\n    display:table!important\n  }\n\n  .v-application .d-md-table-row{\n    display:table-row!important\n  }\n\n  .v-application .d-md-table-cell{\n    display:table-cell!important\n  }\n\n  .v-application .d-md-flex{\n    display:flex!important\n  }\n\n  .v-application .d-md-inline-flex{\n    display:inline-flex!important\n  }\n\n  .v-application .float-md-none{\n    float:none!important\n  }\n\n  .v-application .float-md-left{\n    float:left!important\n  }\n\n  .v-application .float-md-right{\n    float:right!important\n  }\n\n  .v-application--is-rtl .float-md-end{\n    float:left!important\n  }\n\n  .v-application--is-ltr .float-md-end,.v-application--is-rtl .float-md-start{\n    float:right!important\n  }\n\n  .v-application--is-ltr .float-md-start{\n    float:left!important\n  }\n\n  .v-application .flex-md-fill{\n    flex:1 1 auto!important\n  }\n\n  .v-application .flex-md-row{\n    flex-direction:row!important\n  }\n\n  .v-application .flex-md-column{\n    flex-direction:column!important\n  }\n\n  .v-application .flex-md-row-reverse{\n    flex-direction:row-reverse!important\n  }\n\n  .v-application .flex-md-column-reverse{\n    flex-direction:column-reverse!important\n  }\n\n  .v-application .flex-md-grow-0{\n    flex-grow:0!important\n  }\n\n  .v-application .flex-md-grow-1{\n    flex-grow:1!important\n  }\n\n  .v-application .flex-md-shrink-0{\n    flex-shrink:0!important\n  }\n\n  .v-application .flex-md-shrink-1{\n    flex-shrink:1!important\n  }\n\n  .v-application .flex-md-wrap{\n    flex-wrap:wrap!important\n  }\n\n  .v-application .flex-md-nowrap{\n    flex-wrap:nowrap!important\n  }\n\n  .v-application .flex-md-wrap-reverse{\n    flex-wrap:wrap-reverse!important\n  }\n\n  .v-application .justify-md-start{\n    justify-content:flex-start!important\n  }\n\n  .v-application .justify-md-end{\n    justify-content:flex-end!important\n  }\n\n  .v-application .justify-md-center{\n    justify-content:center!important\n  }\n\n  .v-application .justify-md-space-between{\n    justify-content:space-between!important\n  }\n\n  .v-application .justify-md-space-around{\n    justify-content:space-around!important\n  }\n\n  .v-application .align-md-start{\n    align-items:flex-start!important\n  }\n\n  .v-application .align-md-end{\n    align-items:flex-end!important\n  }\n\n  .v-application .align-md-center{\n    align-items:center!important\n  }\n\n  .v-application .align-md-baseline{\n    align-items:baseline!important\n  }\n\n  .v-application .align-md-stretch{\n    align-items:stretch!important\n  }\n\n  .v-application .align-content-md-start{\n    align-content:flex-start!important\n  }\n\n  .v-application .align-content-md-end{\n    align-content:flex-end!important\n  }\n\n  .v-application .align-content-md-center{\n    align-content:center!important\n  }\n\n  .v-application .align-content-md-space-between{\n    align-content:space-between!important\n  }\n\n  .v-application .align-content-md-space-around{\n    align-content:space-around!important\n  }\n\n  .v-application .align-content-md-stretch{\n    align-content:stretch!important\n  }\n\n  .v-application .align-self-md-auto{\n    align-self:auto!important\n  }\n\n  .v-application .align-self-md-start{\n    align-self:flex-start!important\n  }\n\n  .v-application .align-self-md-end{\n    align-self:flex-end!important\n  }\n\n  .v-application .align-self-md-center{\n    align-self:center!important\n  }\n\n  .v-application .align-self-md-baseline{\n    align-self:baseline!important\n  }\n\n  .v-application .align-self-md-stretch{\n    align-self:stretch!important\n  }\n\n  .v-application .order-md-first{\n    order:-1!important\n  }\n\n  .v-application .order-md-0{\n    order:0!important\n  }\n\n  .v-application .order-md-1{\n    order:1!important\n  }\n\n  .v-application .order-md-2{\n    order:2!important\n  }\n\n  .v-application .order-md-3{\n    order:3!important\n  }\n\n  .v-application .order-md-4{\n    order:4!important\n  }\n\n  .v-application .order-md-5{\n    order:5!important\n  }\n\n  .v-application .order-md-6{\n    order:6!important\n  }\n\n  .v-application .order-md-7{\n    order:7!important\n  }\n\n  .v-application .order-md-8{\n    order:8!important\n  }\n\n  .v-application .order-md-9{\n    order:9!important\n  }\n\n  .v-application .order-md-10{\n    order:10!important\n  }\n\n  .v-application .order-md-11{\n    order:11!important\n  }\n\n  .v-application .order-md-12{\n    order:12!important\n  }\n\n  .v-application .order-md-last{\n    order:13!important\n  }\n\n  .v-application .ma-md-0{\n    margin:0!important\n  }\n\n  .v-application .ma-md-1{\n    margin:4px!important\n  }\n\n  .v-application .ma-md-2{\n    margin:8px!important\n  }\n\n  .v-application .ma-md-3{\n    margin:12px!important\n  }\n\n  .v-application .ma-md-4{\n    margin:16px!important\n  }\n\n  .v-application .ma-md-5{\n    margin:20px!important\n  }\n\n  .v-application .ma-md-6{\n    margin:24px!important\n  }\n\n  .v-application .ma-md-7{\n    margin:28px!important\n  }\n\n  .v-application .ma-md-8{\n    margin:32px!important\n  }\n\n  .v-application .ma-md-9{\n    margin:36px!important\n  }\n\n  .v-application .ma-md-10{\n    margin:40px!important\n  }\n\n  .v-application .ma-md-11{\n    margin:44px!important\n  }\n\n  .v-application .ma-md-12{\n    margin:48px!important\n  }\n\n  .v-application .ma-md-13{\n    margin:52px!important\n  }\n\n  .v-application .ma-md-14{\n    margin:56px!important\n  }\n\n  .v-application .ma-md-15{\n    margin:60px!important\n  }\n\n  .v-application .ma-md-16{\n    margin:64px!important\n  }\n\n  .v-application .ma-md-auto{\n    margin:auto!important\n  }\n\n  .v-application .mx-md-0{\n    margin-right:0!important;\n    margin-left:0!important\n  }\n\n  .v-application .mx-md-1{\n    margin-right:4px!important;\n    margin-left:4px!important\n  }\n\n  .v-application .mx-md-2{\n    margin-right:8px!important;\n    margin-left:8px!important\n  }\n\n  .v-application .mx-md-3{\n    margin-right:12px!important;\n    margin-left:12px!important\n  }\n\n  .v-application .mx-md-4{\n    margin-right:16px!important;\n    margin-left:16px!important\n  }\n\n  .v-application .mx-md-5{\n    margin-right:20px!important;\n    margin-left:20px!important\n  }\n\n  .v-application .mx-md-6{\n    margin-right:24px!important;\n    margin-left:24px!important\n  }\n\n  .v-application .mx-md-7{\n    margin-right:28px!important;\n    margin-left:28px!important\n  }\n\n  .v-application .mx-md-8{\n    margin-right:32px!important;\n    margin-left:32px!important\n  }\n\n  .v-application .mx-md-9{\n    margin-right:36px!important;\n    margin-left:36px!important\n  }\n\n  .v-application .mx-md-10{\n    margin-right:40px!important;\n    margin-left:40px!important\n  }\n\n  .v-application .mx-md-11{\n    margin-right:44px!important;\n    margin-left:44px!important\n  }\n\n  .v-application .mx-md-12{\n    margin-right:48px!important;\n    margin-left:48px!important\n  }\n\n  .v-application .mx-md-13{\n    margin-right:52px!important;\n    margin-left:52px!important\n  }\n\n  .v-application .mx-md-14{\n    margin-right:56px!important;\n    margin-left:56px!important\n  }\n\n  .v-application .mx-md-15{\n    margin-right:60px!important;\n    margin-left:60px!important\n  }\n\n  .v-application .mx-md-16{\n    margin-right:64px!important;\n    margin-left:64px!important\n  }\n\n  .v-application .mx-md-auto{\n    margin-right:auto!important;\n    margin-left:auto!important\n  }\n\n  .v-application .my-md-0{\n    margin-top:0!important;\n    margin-bottom:0!important\n  }\n\n  .v-application .my-md-1{\n    margin-top:4px!important;\n    margin-bottom:4px!important\n  }\n\n  .v-application .my-md-2{\n    margin-top:8px!important;\n    margin-bottom:8px!important\n  }\n\n  .v-application .my-md-3{\n    margin-top:12px!important;\n    margin-bottom:12px!important\n  }\n\n  .v-application .my-md-4{\n    margin-top:16px!important;\n    margin-bottom:16px!important\n  }\n\n  .v-application .my-md-5{\n    margin-top:20px!important;\n    margin-bottom:20px!important\n  }\n\n  .v-application .my-md-6{\n    margin-top:24px!important;\n    margin-bottom:24px!important\n  }\n\n  .v-application .my-md-7{\n    margin-top:28px!important;\n    margin-bottom:28px!important\n  }\n\n  .v-application .my-md-8{\n    margin-top:32px!important;\n    margin-bottom:32px!important\n  }\n\n  .v-application .my-md-9{\n    margin-top:36px!important;\n    margin-bottom:36px!important\n  }\n\n  .v-application .my-md-10{\n    margin-top:40px!important;\n    margin-bottom:40px!important\n  }\n\n  .v-application .my-md-11{\n    margin-top:44px!important;\n    margin-bottom:44px!important\n  }\n\n  .v-application .my-md-12{\n    margin-top:48px!important;\n    margin-bottom:48px!important\n  }\n\n  .v-application .my-md-13{\n    margin-top:52px!important;\n    margin-bottom:52px!important\n  }\n\n  .v-application .my-md-14{\n    margin-top:56px!important;\n    margin-bottom:56px!important\n  }\n\n  .v-application .my-md-15{\n    margin-top:60px!important;\n    margin-bottom:60px!important\n  }\n\n  .v-application .my-md-16{\n    margin-top:64px!important;\n    margin-bottom:64px!important\n  }\n\n  .v-application .my-md-auto{\n    margin-top:auto!important;\n    margin-bottom:auto!important\n  }\n\n  .v-application .mt-md-0{\n    margin-top:0!important\n  }\n\n  .v-application .mt-md-1{\n    margin-top:4px!important\n  }\n\n  .v-application .mt-md-2{\n    margin-top:8px!important\n  }\n\n  .v-application .mt-md-3{\n    margin-top:12px!important\n  }\n\n  .v-application .mt-md-4{\n    margin-top:16px!important\n  }\n\n  .v-application .mt-md-5{\n    margin-top:20px!important\n  }\n\n  .v-application .mt-md-6{\n    margin-top:24px!important\n  }\n\n  .v-application .mt-md-7{\n    margin-top:28px!important\n  }\n\n  .v-application .mt-md-8{\n    margin-top:32px!important\n  }\n\n  .v-application .mt-md-9{\n    margin-top:36px!important\n  }\n\n  .v-application .mt-md-10{\n    margin-top:40px!important\n  }\n\n  .v-application .mt-md-11{\n    margin-top:44px!important\n  }\n\n  .v-application .mt-md-12{\n    margin-top:48px!important\n  }\n\n  .v-application .mt-md-13{\n    margin-top:52px!important\n  }\n\n  .v-application .mt-md-14{\n    margin-top:56px!important\n  }\n\n  .v-application .mt-md-15{\n    margin-top:60px!important\n  }\n\n  .v-application .mt-md-16{\n    margin-top:64px!important\n  }\n\n  .v-application .mt-md-auto{\n    margin-top:auto!important\n  }\n\n  .v-application .mr-md-0{\n    margin-right:0!important\n  }\n\n  .v-application .mr-md-1{\n    margin-right:4px!important\n  }\n\n  .v-application .mr-md-2{\n    margin-right:8px!important\n  }\n\n  .v-application .mr-md-3{\n    margin-right:12px!important\n  }\n\n  .v-application .mr-md-4{\n    margin-right:16px!important\n  }\n\n  .v-application .mr-md-5{\n    margin-right:20px!important\n  }\n\n  .v-application .mr-md-6{\n    margin-right:24px!important\n  }\n\n  .v-application .mr-md-7{\n    margin-right:28px!important\n  }\n\n  .v-application .mr-md-8{\n    margin-right:32px!important\n  }\n\n  .v-application .mr-md-9{\n    margin-right:36px!important\n  }\n\n  .v-application .mr-md-10{\n    margin-right:40px!important\n  }\n\n  .v-application .mr-md-11{\n    margin-right:44px!important\n  }\n\n  .v-application .mr-md-12{\n    margin-right:48px!important\n  }\n\n  .v-application .mr-md-13{\n    margin-right:52px!important\n  }\n\n  .v-application .mr-md-14{\n    margin-right:56px!important\n  }\n\n  .v-application .mr-md-15{\n    margin-right:60px!important\n  }\n\n  .v-application .mr-md-16{\n    margin-right:64px!important\n  }\n\n  .v-application .mr-md-auto{\n    margin-right:auto!important\n  }\n\n  .v-application .mb-md-0{\n    margin-bottom:0!important\n  }\n\n  .v-application .mb-md-1{\n    margin-bottom:4px!important\n  }\n\n  .v-application .mb-md-2{\n    margin-bottom:8px!important\n  }\n\n  .v-application .mb-md-3{\n    margin-bottom:12px!important\n  }\n\n  .v-application .mb-md-4{\n    margin-bottom:16px!important\n  }\n\n  .v-application .mb-md-5{\n    margin-bottom:20px!important\n  }\n\n  .v-application .mb-md-6{\n    margin-bottom:24px!important\n  }\n\n  .v-application .mb-md-7{\n    margin-bottom:28px!important\n  }\n\n  .v-application .mb-md-8{\n    margin-bottom:32px!important\n  }\n\n  .v-application .mb-md-9{\n    margin-bottom:36px!important\n  }\n\n  .v-application .mb-md-10{\n    margin-bottom:40px!important\n  }\n\n  .v-application .mb-md-11{\n    margin-bottom:44px!important\n  }\n\n  .v-application .mb-md-12{\n    margin-bottom:48px!important\n  }\n\n  .v-application .mb-md-13{\n    margin-bottom:52px!important\n  }\n\n  .v-application .mb-md-14{\n    margin-bottom:56px!important\n  }\n\n  .v-application .mb-md-15{\n    margin-bottom:60px!important\n  }\n\n  .v-application .mb-md-16{\n    margin-bottom:64px!important\n  }\n\n  .v-application .mb-md-auto{\n    margin-bottom:auto!important\n  }\n\n  .v-application .ml-md-0{\n    margin-left:0!important\n  }\n\n  .v-application .ml-md-1{\n    margin-left:4px!important\n  }\n\n  .v-application .ml-md-2{\n    margin-left:8px!important\n  }\n\n  .v-application .ml-md-3{\n    margin-left:12px!important\n  }\n\n  .v-application .ml-md-4{\n    margin-left:16px!important\n  }\n\n  .v-application .ml-md-5{\n    margin-left:20px!important\n  }\n\n  .v-application .ml-md-6{\n    margin-left:24px!important\n  }\n\n  .v-application .ml-md-7{\n    margin-left:28px!important\n  }\n\n  .v-application .ml-md-8{\n    margin-left:32px!important\n  }\n\n  .v-application .ml-md-9{\n    margin-left:36px!important\n  }\n\n  .v-application .ml-md-10{\n    margin-left:40px!important\n  }\n\n  .v-application .ml-md-11{\n    margin-left:44px!important\n  }\n\n  .v-application .ml-md-12{\n    margin-left:48px!important\n  }\n\n  .v-application .ml-md-13{\n    margin-left:52px!important\n  }\n\n  .v-application .ml-md-14{\n    margin-left:56px!important\n  }\n\n  .v-application .ml-md-15{\n    margin-left:60px!important\n  }\n\n  .v-application .ml-md-16{\n    margin-left:64px!important\n  }\n\n  .v-application .ml-md-auto{\n    margin-left:auto!important\n  }\n\n  .v-application--is-ltr .ms-md-0{\n    margin-left:0!important\n  }\n\n  .v-application--is-rtl .ms-md-0{\n    margin-right:0!important\n  }\n\n  .v-application--is-ltr .ms-md-1{\n    margin-left:4px!important\n  }\n\n  .v-application--is-rtl .ms-md-1{\n    margin-right:4px!important\n  }\n\n  .v-application--is-ltr .ms-md-2{\n    margin-left:8px!important\n  }\n\n  .v-application--is-rtl .ms-md-2{\n    margin-right:8px!important\n  }\n\n  .v-application--is-ltr .ms-md-3{\n    margin-left:12px!important\n  }\n\n  .v-application--is-rtl .ms-md-3{\n    margin-right:12px!important\n  }\n\n  .v-application--is-ltr .ms-md-4{\n    margin-left:16px!important\n  }\n\n  .v-application--is-rtl .ms-md-4{\n    margin-right:16px!important\n  }\n\n  .v-application--is-ltr .ms-md-5{\n    margin-left:20px!important\n  }\n\n  .v-application--is-rtl .ms-md-5{\n    margin-right:20px!important\n  }\n\n  .v-application--is-ltr .ms-md-6{\n    margin-left:24px!important\n  }\n\n  .v-application--is-rtl .ms-md-6{\n    margin-right:24px!important\n  }\n\n  .v-application--is-ltr .ms-md-7{\n    margin-left:28px!important\n  }\n\n  .v-application--is-rtl .ms-md-7{\n    margin-right:28px!important\n  }\n\n  .v-application--is-ltr .ms-md-8{\n    margin-left:32px!important\n  }\n\n  .v-application--is-rtl .ms-md-8{\n    margin-right:32px!important\n  }\n\n  .v-application--is-ltr .ms-md-9{\n    margin-left:36px!important\n  }\n\n  .v-application--is-rtl .ms-md-9{\n    margin-right:36px!important\n  }\n\n  .v-application--is-ltr .ms-md-10{\n    margin-left:40px!important\n  }\n\n  .v-application--is-rtl .ms-md-10{\n    margin-right:40px!important\n  }\n\n  .v-application--is-ltr .ms-md-11{\n    margin-left:44px!important\n  }\n\n  .v-application--is-rtl .ms-md-11{\n    margin-right:44px!important\n  }\n\n  .v-application--is-ltr .ms-md-12{\n    margin-left:48px!important\n  }\n\n  .v-application--is-rtl .ms-md-12{\n    margin-right:48px!important\n  }\n\n  .v-application--is-ltr .ms-md-13{\n    margin-left:52px!important\n  }\n\n  .v-application--is-rtl .ms-md-13{\n    margin-right:52px!important\n  }\n\n  .v-application--is-ltr .ms-md-14{\n    margin-left:56px!important\n  }\n\n  .v-application--is-rtl .ms-md-14{\n    margin-right:56px!important\n  }\n\n  .v-application--is-ltr .ms-md-15{\n    margin-left:60px!important\n  }\n\n  .v-application--is-rtl .ms-md-15{\n    margin-right:60px!important\n  }\n\n  .v-application--is-ltr .ms-md-16{\n    margin-left:64px!important\n  }\n\n  .v-application--is-rtl .ms-md-16{\n    margin-right:64px!important\n  }\n\n  .v-application--is-ltr .ms-md-auto{\n    margin-left:auto!important\n  }\n\n  .v-application--is-rtl .ms-md-auto{\n    margin-right:auto!important\n  }\n\n  .v-application--is-ltr .me-md-0{\n    margin-right:0!important\n  }\n\n  .v-application--is-rtl .me-md-0{\n    margin-left:0!important\n  }\n\n  .v-application--is-ltr .me-md-1{\n    margin-right:4px!important\n  }\n\n  .v-application--is-rtl .me-md-1{\n    margin-left:4px!important\n  }\n\n  .v-application--is-ltr .me-md-2{\n    margin-right:8px!important\n  }\n\n  .v-application--is-rtl .me-md-2{\n    margin-left:8px!important\n  }\n\n  .v-application--is-ltr .me-md-3{\n    margin-right:12px!important\n  }\n\n  .v-application--is-rtl .me-md-3{\n    margin-left:12px!important\n  }\n\n  .v-application--is-ltr .me-md-4{\n    margin-right:16px!important\n  }\n\n  .v-application--is-rtl .me-md-4{\n    margin-left:16px!important\n  }\n\n  .v-application--is-ltr .me-md-5{\n    margin-right:20px!important\n  }\n\n  .v-application--is-rtl .me-md-5{\n    margin-left:20px!important\n  }\n\n  .v-application--is-ltr .me-md-6{\n    margin-right:24px!important\n  }\n\n  .v-application--is-rtl .me-md-6{\n    margin-left:24px!important\n  }\n\n  .v-application--is-ltr .me-md-7{\n    margin-right:28px!important\n  }\n\n  .v-application--is-rtl .me-md-7{\n    margin-left:28px!important\n  }\n\n  .v-application--is-ltr .me-md-8{\n    margin-right:32px!important\n  }\n\n  .v-application--is-rtl .me-md-8{\n    margin-left:32px!important\n  }\n\n  .v-application--is-ltr .me-md-9{\n    margin-right:36px!important\n  }\n\n  .v-application--is-rtl .me-md-9{\n    margin-left:36px!important\n  }\n\n  .v-application--is-ltr .me-md-10{\n    margin-right:40px!important\n  }\n\n  .v-application--is-rtl .me-md-10{\n    margin-left:40px!important\n  }\n\n  .v-application--is-ltr .me-md-11{\n    margin-right:44px!important\n  }\n\n  .v-application--is-rtl .me-md-11{\n    margin-left:44px!important\n  }\n\n  .v-application--is-ltr .me-md-12{\n    margin-right:48px!important\n  }\n\n  .v-application--is-rtl .me-md-12{\n    margin-left:48px!important\n  }\n\n  .v-application--is-ltr .me-md-13{\n    margin-right:52px!important\n  }\n\n  .v-application--is-rtl .me-md-13{\n    margin-left:52px!important\n  }\n\n  .v-application--is-ltr .me-md-14{\n    margin-right:56px!important\n  }\n\n  .v-application--is-rtl .me-md-14{\n    margin-left:56px!important\n  }\n\n  .v-application--is-ltr .me-md-15{\n    margin-right:60px!important\n  }\n\n  .v-application--is-rtl .me-md-15{\n    margin-left:60px!important\n  }\n\n  .v-application--is-ltr .me-md-16{\n    margin-right:64px!important\n  }\n\n  .v-application--is-rtl .me-md-16{\n    margin-left:64px!important\n  }\n\n  .v-application--is-ltr .me-md-auto{\n    margin-right:auto!important\n  }\n\n  .v-application--is-rtl .me-md-auto{\n    margin-left:auto!important\n  }\n\n  .v-application .ma-md-n1{\n    margin:-4px!important\n  }\n\n  .v-application .ma-md-n2{\n    margin:-8px!important\n  }\n\n  .v-application .ma-md-n3{\n    margin:-12px!important\n  }\n\n  .v-application .ma-md-n4{\n    margin:-16px!important\n  }\n\n  .v-application .ma-md-n5{\n    margin:-20px!important\n  }\n\n  .v-application .ma-md-n6{\n    margin:-24px!important\n  }\n\n  .v-application .ma-md-n7{\n    margin:-28px!important\n  }\n\n  .v-application .ma-md-n8{\n    margin:-32px!important\n  }\n\n  .v-application .ma-md-n9{\n    margin:-36px!important\n  }\n\n  .v-application .ma-md-n10{\n    margin:-40px!important\n  }\n\n  .v-application .ma-md-n11{\n    margin:-44px!important\n  }\n\n  .v-application .ma-md-n12{\n    margin:-48px!important\n  }\n\n  .v-application .ma-md-n13{\n    margin:-52px!important\n  }\n\n  .v-application .ma-md-n14{\n    margin:-56px!important\n  }\n\n  .v-application .ma-md-n15{\n    margin:-60px!important\n  }\n\n  .v-application .ma-md-n16{\n    margin:-64px!important\n  }\n\n  .v-application .mx-md-n1{\n    margin-right:-4px!important;\n    margin-left:-4px!important\n  }\n\n  .v-application .mx-md-n2{\n    margin-right:-8px!important;\n    margin-left:-8px!important\n  }\n\n  .v-application .mx-md-n3{\n    margin-right:-12px!important;\n    margin-left:-12px!important\n  }\n\n  .v-application .mx-md-n4{\n    margin-right:-16px!important;\n    margin-left:-16px!important\n  }\n\n  .v-application .mx-md-n5{\n    margin-right:-20px!important;\n    margin-left:-20px!important\n  }\n\n  .v-application .mx-md-n6{\n    margin-right:-24px!important;\n    margin-left:-24px!important\n  }\n\n  .v-application .mx-md-n7{\n    margin-right:-28px!important;\n    margin-left:-28px!important\n  }\n\n  .v-application .mx-md-n8{\n    margin-right:-32px!important;\n    margin-left:-32px!important\n  }\n\n  .v-application .mx-md-n9{\n    margin-right:-36px!important;\n    margin-left:-36px!important\n  }\n\n  .v-application .mx-md-n10{\n    margin-right:-40px!important;\n    margin-left:-40px!important\n  }\n\n  .v-application .mx-md-n11{\n    margin-right:-44px!important;\n    margin-left:-44px!important\n  }\n\n  .v-application .mx-md-n12{\n    margin-right:-48px!important;\n    margin-left:-48px!important\n  }\n\n  .v-application .mx-md-n13{\n    margin-right:-52px!important;\n    margin-left:-52px!important\n  }\n\n  .v-application .mx-md-n14{\n    margin-right:-56px!important;\n    margin-left:-56px!important\n  }\n\n  .v-application .mx-md-n15{\n    margin-right:-60px!important;\n    margin-left:-60px!important\n  }\n\n  .v-application .mx-md-n16{\n    margin-right:-64px!important;\n    margin-left:-64px!important\n  }\n\n  .v-application .my-md-n1{\n    margin-top:-4px!important;\n    margin-bottom:-4px!important\n  }\n\n  .v-application .my-md-n2{\n    margin-top:-8px!important;\n    margin-bottom:-8px!important\n  }\n\n  .v-application .my-md-n3{\n    margin-top:-12px!important;\n    margin-bottom:-12px!important\n  }\n\n  .v-application .my-md-n4{\n    margin-top:-16px!important;\n    margin-bottom:-16px!important\n  }\n\n  .v-application .my-md-n5{\n    margin-top:-20px!important;\n    margin-bottom:-20px!important\n  }\n\n  .v-application .my-md-n6{\n    margin-top:-24px!important;\n    margin-bottom:-24px!important\n  }\n\n  .v-application .my-md-n7{\n    margin-top:-28px!important;\n    margin-bottom:-28px!important\n  }\n\n  .v-application .my-md-n8{\n    margin-top:-32px!important;\n    margin-bottom:-32px!important\n  }\n\n  .v-application .my-md-n9{\n    margin-top:-36px!important;\n    margin-bottom:-36px!important\n  }\n\n  .v-application .my-md-n10{\n    margin-top:-40px!important;\n    margin-bottom:-40px!important\n  }\n\n  .v-application .my-md-n11{\n    margin-top:-44px!important;\n    margin-bottom:-44px!important\n  }\n\n  .v-application .my-md-n12{\n    margin-top:-48px!important;\n    margin-bottom:-48px!important\n  }\n\n  .v-application .my-md-n13{\n    margin-top:-52px!important;\n    margin-bottom:-52px!important\n  }\n\n  .v-application .my-md-n14{\n    margin-top:-56px!important;\n    margin-bottom:-56px!important\n  }\n\n  .v-application .my-md-n15{\n    margin-top:-60px!important;\n    margin-bottom:-60px!important\n  }\n\n  .v-application .my-md-n16{\n    margin-top:-64px!important;\n    margin-bottom:-64px!important\n  }\n\n  .v-application .mt-md-n1{\n    margin-top:-4px!important\n  }\n\n  .v-application .mt-md-n2{\n    margin-top:-8px!important\n  }\n\n  .v-application .mt-md-n3{\n    margin-top:-12px!important\n  }\n\n  .v-application .mt-md-n4{\n    margin-top:-16px!important\n  }\n\n  .v-application .mt-md-n5{\n    margin-top:-20px!important\n  }\n\n  .v-application .mt-md-n6{\n    margin-top:-24px!important\n  }\n\n  .v-application .mt-md-n7{\n    margin-top:-28px!important\n  }\n\n  .v-application .mt-md-n8{\n    margin-top:-32px!important\n  }\n\n  .v-application .mt-md-n9{\n    margin-top:-36px!important\n  }\n\n  .v-application .mt-md-n10{\n    margin-top:-40px!important\n  }\n\n  .v-application .mt-md-n11{\n    margin-top:-44px!important\n  }\n\n  .v-application .mt-md-n12{\n    margin-top:-48px!important\n  }\n\n  .v-application .mt-md-n13{\n    margin-top:-52px!important\n  }\n\n  .v-application .mt-md-n14{\n    margin-top:-56px!important\n  }\n\n  .v-application .mt-md-n15{\n    margin-top:-60px!important\n  }\n\n  .v-application .mt-md-n16{\n    margin-top:-64px!important\n  }\n\n  .v-application .mr-md-n1{\n    margin-right:-4px!important\n  }\n\n  .v-application .mr-md-n2{\n    margin-right:-8px!important\n  }\n\n  .v-application .mr-md-n3{\n    margin-right:-12px!important\n  }\n\n  .v-application .mr-md-n4{\n    margin-right:-16px!important\n  }\n\n  .v-application .mr-md-n5{\n    margin-right:-20px!important\n  }\n\n  .v-application .mr-md-n6{\n    margin-right:-24px!important\n  }\n\n  .v-application .mr-md-n7{\n    margin-right:-28px!important\n  }\n\n  .v-application .mr-md-n8{\n    margin-right:-32px!important\n  }\n\n  .v-application .mr-md-n9{\n    margin-right:-36px!important\n  }\n\n  .v-application .mr-md-n10{\n    margin-right:-40px!important\n  }\n\n  .v-application .mr-md-n11{\n    margin-right:-44px!important\n  }\n\n  .v-application .mr-md-n12{\n    margin-right:-48px!important\n  }\n\n  .v-application .mr-md-n13{\n    margin-right:-52px!important\n  }\n\n  .v-application .mr-md-n14{\n    margin-right:-56px!important\n  }\n\n  .v-application .mr-md-n15{\n    margin-right:-60px!important\n  }\n\n  .v-application .mr-md-n16{\n    margin-right:-64px!important\n  }\n\n  .v-application .mb-md-n1{\n    margin-bottom:-4px!important\n  }\n\n  .v-application .mb-md-n2{\n    margin-bottom:-8px!important\n  }\n\n  .v-application .mb-md-n3{\n    margin-bottom:-12px!important\n  }\n\n  .v-application .mb-md-n4{\n    margin-bottom:-16px!important\n  }\n\n  .v-application .mb-md-n5{\n    margin-bottom:-20px!important\n  }\n\n  .v-application .mb-md-n6{\n    margin-bottom:-24px!important\n  }\n\n  .v-application .mb-md-n7{\n    margin-bottom:-28px!important\n  }\n\n  .v-application .mb-md-n8{\n    margin-bottom:-32px!important\n  }\n\n  .v-application .mb-md-n9{\n    margin-bottom:-36px!important\n  }\n\n  .v-application .mb-md-n10{\n    margin-bottom:-40px!important\n  }\n\n  .v-application .mb-md-n11{\n    margin-bottom:-44px!important\n  }\n\n  .v-application .mb-md-n12{\n    margin-bottom:-48px!important\n  }\n\n  .v-application .mb-md-n13{\n    margin-bottom:-52px!important\n  }\n\n  .v-application .mb-md-n14{\n    margin-bottom:-56px!important\n  }\n\n  .v-application .mb-md-n15{\n    margin-bottom:-60px!important\n  }\n\n  .v-application .mb-md-n16{\n    margin-bottom:-64px!important\n  }\n\n  .v-application .ml-md-n1{\n    margin-left:-4px!important\n  }\n\n  .v-application .ml-md-n2{\n    margin-left:-8px!important\n  }\n\n  .v-application .ml-md-n3{\n    margin-left:-12px!important\n  }\n\n  .v-application .ml-md-n4{\n    margin-left:-16px!important\n  }\n\n  .v-application .ml-md-n5{\n    margin-left:-20px!important\n  }\n\n  .v-application .ml-md-n6{\n    margin-left:-24px!important\n  }\n\n  .v-application .ml-md-n7{\n    margin-left:-28px!important\n  }\n\n  .v-application .ml-md-n8{\n    margin-left:-32px!important\n  }\n\n  .v-application .ml-md-n9{\n    margin-left:-36px!important\n  }\n\n  .v-application .ml-md-n10{\n    margin-left:-40px!important\n  }\n\n  .v-application .ml-md-n11{\n    margin-left:-44px!important\n  }\n\n  .v-application .ml-md-n12{\n    margin-left:-48px!important\n  }\n\n  .v-application .ml-md-n13{\n    margin-left:-52px!important\n  }\n\n  .v-application .ml-md-n14{\n    margin-left:-56px!important\n  }\n\n  .v-application .ml-md-n15{\n    margin-left:-60px!important\n  }\n\n  .v-application .ml-md-n16{\n    margin-left:-64px!important\n  }\n\n  .v-application--is-ltr .ms-md-n1{\n    margin-left:-4px!important\n  }\n\n  .v-application--is-rtl .ms-md-n1{\n    margin-right:-4px!important\n  }\n\n  .v-application--is-ltr .ms-md-n2{\n    margin-left:-8px!important\n  }\n\n  .v-application--is-rtl .ms-md-n2{\n    margin-right:-8px!important\n  }\n\n  .v-application--is-ltr .ms-md-n3{\n    margin-left:-12px!important\n  }\n\n  .v-application--is-rtl .ms-md-n3{\n    margin-right:-12px!important\n  }\n\n  .v-application--is-ltr .ms-md-n4{\n    margin-left:-16px!important\n  }\n\n  .v-application--is-rtl .ms-md-n4{\n    margin-right:-16px!important\n  }\n\n  .v-application--is-ltr .ms-md-n5{\n    margin-left:-20px!important\n  }\n\n  .v-application--is-rtl .ms-md-n5{\n    margin-right:-20px!important\n  }\n\n  .v-application--is-ltr .ms-md-n6{\n    margin-left:-24px!important\n  }\n\n  .v-application--is-rtl .ms-md-n6{\n    margin-right:-24px!important\n  }\n\n  .v-application--is-ltr .ms-md-n7{\n    margin-left:-28px!important\n  }\n\n  .v-application--is-rtl .ms-md-n7{\n    margin-right:-28px!important\n  }\n\n  .v-application--is-ltr .ms-md-n8{\n    margin-left:-32px!important\n  }\n\n  .v-application--is-rtl .ms-md-n8{\n    margin-right:-32px!important\n  }\n\n  .v-application--is-ltr .ms-md-n9{\n    margin-left:-36px!important\n  }\n\n  .v-application--is-rtl .ms-md-n9{\n    margin-right:-36px!important\n  }\n\n  .v-application--is-ltr .ms-md-n10{\n    margin-left:-40px!important\n  }\n\n  .v-application--is-rtl .ms-md-n10{\n    margin-right:-40px!important\n  }\n\n  .v-application--is-ltr .ms-md-n11{\n    margin-left:-44px!important\n  }\n\n  .v-application--is-rtl .ms-md-n11{\n    margin-right:-44px!important\n  }\n\n  .v-application--is-ltr .ms-md-n12{\n    margin-left:-48px!important\n  }\n\n  .v-application--is-rtl .ms-md-n12{\n    margin-right:-48px!important\n  }\n\n  .v-application--is-ltr .ms-md-n13{\n    margin-left:-52px!important\n  }\n\n  .v-application--is-rtl .ms-md-n13{\n    margin-right:-52px!important\n  }\n\n  .v-application--is-ltr .ms-md-n14{\n    margin-left:-56px!important\n  }\n\n  .v-application--is-rtl .ms-md-n14{\n    margin-right:-56px!important\n  }\n\n  .v-application--is-ltr .ms-md-n15{\n    margin-left:-60px!important\n  }\n\n  .v-application--is-rtl .ms-md-n15{\n    margin-right:-60px!important\n  }\n\n  .v-application--is-ltr .ms-md-n16{\n    margin-left:-64px!important\n  }\n\n  .v-application--is-rtl .ms-md-n16{\n    margin-right:-64px!important\n  }\n\n  .v-application--is-ltr .me-md-n1{\n    margin-right:-4px!important\n  }\n\n  .v-application--is-rtl .me-md-n1{\n    margin-left:-4px!important\n  }\n\n  .v-application--is-ltr .me-md-n2{\n    margin-right:-8px!important\n  }\n\n  .v-application--is-rtl .me-md-n2{\n    margin-left:-8px!important\n  }\n\n  .v-application--is-ltr .me-md-n3{\n    margin-right:-12px!important\n  }\n\n  .v-application--is-rtl .me-md-n3{\n    margin-left:-12px!important\n  }\n\n  .v-application--is-ltr .me-md-n4{\n    margin-right:-16px!important\n  }\n\n  .v-application--is-rtl .me-md-n4{\n    margin-left:-16px!important\n  }\n\n  .v-application--is-ltr .me-md-n5{\n    margin-right:-20px!important\n  }\n\n  .v-application--is-rtl .me-md-n5{\n    margin-left:-20px!important\n  }\n\n  .v-application--is-ltr .me-md-n6{\n    margin-right:-24px!important\n  }\n\n  .v-application--is-rtl .me-md-n6{\n    margin-left:-24px!important\n  }\n\n  .v-application--is-ltr .me-md-n7{\n    margin-right:-28px!important\n  }\n\n  .v-application--is-rtl .me-md-n7{\n    margin-left:-28px!important\n  }\n\n  .v-application--is-ltr .me-md-n8{\n    margin-right:-32px!important\n  }\n\n  .v-application--is-rtl .me-md-n8{\n    margin-left:-32px!important\n  }\n\n  .v-application--is-ltr .me-md-n9{\n    margin-right:-36px!important\n  }\n\n  .v-application--is-rtl .me-md-n9{\n    margin-left:-36px!important\n  }\n\n  .v-application--is-ltr .me-md-n10{\n    margin-right:-40px!important\n  }\n\n  .v-application--is-rtl .me-md-n10{\n    margin-left:-40px!important\n  }\n\n  .v-application--is-ltr .me-md-n11{\n    margin-right:-44px!important\n  }\n\n  .v-application--is-rtl .me-md-n11{\n    margin-left:-44px!important\n  }\n\n  .v-application--is-ltr .me-md-n12{\n    margin-right:-48px!important\n  }\n\n  .v-application--is-rtl .me-md-n12{\n    margin-left:-48px!important\n  }\n\n  .v-application--is-ltr .me-md-n13{\n    margin-right:-52px!important\n  }\n\n  .v-application--is-rtl .me-md-n13{\n    margin-left:-52px!important\n  }\n\n  .v-application--is-ltr .me-md-n14{\n    margin-right:-56px!important\n  }\n\n  .v-application--is-rtl .me-md-n14{\n    margin-left:-56px!important\n  }\n\n  .v-application--is-ltr .me-md-n15{\n    margin-right:-60px!important\n  }\n\n  .v-application--is-rtl .me-md-n15{\n    margin-left:-60px!important\n  }\n\n  .v-application--is-ltr .me-md-n16{\n    margin-right:-64px!important\n  }\n\n  .v-application--is-rtl .me-md-n16{\n    margin-left:-64px!important\n  }\n\n  .v-application .pa-md-0{\n    padding:0!important\n  }\n\n  .v-application .pa-md-1{\n    padding:4px!important\n  }\n\n  .v-application .pa-md-2{\n    padding:8px!important\n  }\n\n  .v-application .pa-md-3{\n    padding:12px!important\n  }\n\n  .v-application .pa-md-4{\n    padding:16px!important\n  }\n\n  .v-application .pa-md-5{\n    padding:20px!important\n  }\n\n  .v-application .pa-md-6{\n    padding:24px!important\n  }\n\n  .v-application .pa-md-7{\n    padding:28px!important\n  }\n\n  .v-application .pa-md-8{\n    padding:32px!important\n  }\n\n  .v-application .pa-md-9{\n    padding:36px!important\n  }\n\n  .v-application .pa-md-10{\n    padding:40px!important\n  }\n\n  .v-application .pa-md-11{\n    padding:44px!important\n  }\n\n  .v-application .pa-md-12{\n    padding:48px!important\n  }\n\n  .v-application .pa-md-13{\n    padding:52px!important\n  }\n\n  .v-application .pa-md-14{\n    padding:56px!important\n  }\n\n  .v-application .pa-md-15{\n    padding:60px!important\n  }\n\n  .v-application .pa-md-16{\n    padding:64px!important\n  }\n\n  .v-application .px-md-0{\n    padding-right:0!important;\n    padding-left:0!important\n  }\n\n  .v-application .px-md-1{\n    padding-right:4px!important;\n    padding-left:4px!important\n  }\n\n  .v-application .px-md-2{\n    padding-right:8px!important;\n    padding-left:8px!important\n  }\n\n  .v-application .px-md-3{\n    padding-right:12px!important;\n    padding-left:12px!important\n  }\n\n  .v-application .px-md-4{\n    padding-right:16px!important;\n    padding-left:16px!important\n  }\n\n  .v-application .px-md-5{\n    padding-right:20px!important;\n    padding-left:20px!important\n  }\n\n  .v-application .px-md-6{\n    padding-right:24px!important;\n    padding-left:24px!important\n  }\n\n  .v-application .px-md-7{\n    padding-right:28px!important;\n    padding-left:28px!important\n  }\n\n  .v-application .px-md-8{\n    padding-right:32px!important;\n    padding-left:32px!important\n  }\n\n  .v-application .px-md-9{\n    padding-right:36px!important;\n    padding-left:36px!important\n  }\n\n  .v-application .px-md-10{\n    padding-right:40px!important;\n    padding-left:40px!important\n  }\n\n  .v-application .px-md-11{\n    padding-right:44px!important;\n    padding-left:44px!important\n  }\n\n  .v-application .px-md-12{\n    padding-right:48px!important;\n    padding-left:48px!important\n  }\n\n  .v-application .px-md-13{\n    padding-right:52px!important;\n    padding-left:52px!important\n  }\n\n  .v-application .px-md-14{\n    padding-right:56px!important;\n    padding-left:56px!important\n  }\n\n  .v-application .px-md-15{\n    padding-right:60px!important;\n    padding-left:60px!important\n  }\n\n  .v-application .px-md-16{\n    padding-right:64px!important;\n    padding-left:64px!important\n  }\n\n  .v-application .py-md-0{\n    padding-top:0!important;\n    padding-bottom:0!important\n  }\n\n  .v-application .py-md-1{\n    padding-top:4px!important;\n    padding-bottom:4px!important\n  }\n\n  .v-application .py-md-2{\n    padding-top:8px!important;\n    padding-bottom:8px!important\n  }\n\n  .v-application .py-md-3{\n    padding-top:12px!important;\n    padding-bottom:12px!important\n  }\n\n  .v-application .py-md-4{\n    padding-top:16px!important;\n    padding-bottom:16px!important\n  }\n\n  .v-application .py-md-5{\n    padding-top:20px!important;\n    padding-bottom:20px!important\n  }\n\n  .v-application .py-md-6{\n    padding-top:24px!important;\n    padding-bottom:24px!important\n  }\n\n  .v-application .py-md-7{\n    padding-top:28px!important;\n    padding-bottom:28px!important\n  }\n\n  .v-application .py-md-8{\n    padding-top:32px!important;\n    padding-bottom:32px!important\n  }\n\n  .v-application .py-md-9{\n    padding-top:36px!important;\n    padding-bottom:36px!important\n  }\n\n  .v-application .py-md-10{\n    padding-top:40px!important;\n    padding-bottom:40px!important\n  }\n\n  .v-application .py-md-11{\n    padding-top:44px!important;\n    padding-bottom:44px!important\n  }\n\n  .v-application .py-md-12{\n    padding-top:48px!important;\n    padding-bottom:48px!important\n  }\n\n  .v-application .py-md-13{\n    padding-top:52px!important;\n    padding-bottom:52px!important\n  }\n\n  .v-application .py-md-14{\n    padding-top:56px!important;\n    padding-bottom:56px!important\n  }\n\n  .v-application .py-md-15{\n    padding-top:60px!important;\n    padding-bottom:60px!important\n  }\n\n  .v-application .py-md-16{\n    padding-top:64px!important;\n    padding-bottom:64px!important\n  }\n\n  .v-application .pt-md-0{\n    padding-top:0!important\n  }\n\n  .v-application .pt-md-1{\n    padding-top:4px!important\n  }\n\n  .v-application .pt-md-2{\n    padding-top:8px!important\n  }\n\n  .v-application .pt-md-3{\n    padding-top:12px!important\n  }\n\n  .v-application .pt-md-4{\n    padding-top:16px!important\n  }\n\n  .v-application .pt-md-5{\n    padding-top:20px!important\n  }\n\n  .v-application .pt-md-6{\n    padding-top:24px!important\n  }\n\n  .v-application .pt-md-7{\n    padding-top:28px!important\n  }\n\n  .v-application .pt-md-8{\n    padding-top:32px!important\n  }\n\n  .v-application .pt-md-9{\n    padding-top:36px!important\n  }\n\n  .v-application .pt-md-10{\n    padding-top:40px!important\n  }\n\n  .v-application .pt-md-11{\n    padding-top:44px!important\n  }\n\n  .v-application .pt-md-12{\n    padding-top:48px!important\n  }\n\n  .v-application .pt-md-13{\n    padding-top:52px!important\n  }\n\n  .v-application .pt-md-14{\n    padding-top:56px!important\n  }\n\n  .v-application .pt-md-15{\n    padding-top:60px!important\n  }\n\n  .v-application .pt-md-16{\n    padding-top:64px!important\n  }\n\n  .v-application .pr-md-0{\n    padding-right:0!important\n  }\n\n  .v-application .pr-md-1{\n    padding-right:4px!important\n  }\n\n  .v-application .pr-md-2{\n    padding-right:8px!important\n  }\n\n  .v-application .pr-md-3{\n    padding-right:12px!important\n  }\n\n  .v-application .pr-md-4{\n    padding-right:16px!important\n  }\n\n  .v-application .pr-md-5{\n    padding-right:20px!important\n  }\n\n  .v-application .pr-md-6{\n    padding-right:24px!important\n  }\n\n  .v-application .pr-md-7{\n    padding-right:28px!important\n  }\n\n  .v-application .pr-md-8{\n    padding-right:32px!important\n  }\n\n  .v-application .pr-md-9{\n    padding-right:36px!important\n  }\n\n  .v-application .pr-md-10{\n    padding-right:40px!important\n  }\n\n  .v-application .pr-md-11{\n    padding-right:44px!important\n  }\n\n  .v-application .pr-md-12{\n    padding-right:48px!important\n  }\n\n  .v-application .pr-md-13{\n    padding-right:52px!important\n  }\n\n  .v-application .pr-md-14{\n    padding-right:56px!important\n  }\n\n  .v-application .pr-md-15{\n    padding-right:60px!important\n  }\n\n  .v-application .pr-md-16{\n    padding-right:64px!important\n  }\n\n  .v-application .pb-md-0{\n    padding-bottom:0!important\n  }\n\n  .v-application .pb-md-1{\n    padding-bottom:4px!important\n  }\n\n  .v-application .pb-md-2{\n    padding-bottom:8px!important\n  }\n\n  .v-application .pb-md-3{\n    padding-bottom:12px!important\n  }\n\n  .v-application .pb-md-4{\n    padding-bottom:16px!important\n  }\n\n  .v-application .pb-md-5{\n    padding-bottom:20px!important\n  }\n\n  .v-application .pb-md-6{\n    padding-bottom:24px!important\n  }\n\n  .v-application .pb-md-7{\n    padding-bottom:28px!important\n  }\n\n  .v-application .pb-md-8{\n    padding-bottom:32px!important\n  }\n\n  .v-application .pb-md-9{\n    padding-bottom:36px!important\n  }\n\n  .v-application .pb-md-10{\n    padding-bottom:40px!important\n  }\n\n  .v-application .pb-md-11{\n    padding-bottom:44px!important\n  }\n\n  .v-application .pb-md-12{\n    padding-bottom:48px!important\n  }\n\n  .v-application .pb-md-13{\n    padding-bottom:52px!important\n  }\n\n  .v-application .pb-md-14{\n    padding-bottom:56px!important\n  }\n\n  .v-application .pb-md-15{\n    padding-bottom:60px!important\n  }\n\n  .v-application .pb-md-16{\n    padding-bottom:64px!important\n  }\n\n  .v-application .pl-md-0{\n    padding-left:0!important\n  }\n\n  .v-application .pl-md-1{\n    padding-left:4px!important\n  }\n\n  .v-application .pl-md-2{\n    padding-left:8px!important\n  }\n\n  .v-application .pl-md-3{\n    padding-left:12px!important\n  }\n\n  .v-application .pl-md-4{\n    padding-left:16px!important\n  }\n\n  .v-application .pl-md-5{\n    padding-left:20px!important\n  }\n\n  .v-application .pl-md-6{\n    padding-left:24px!important\n  }\n\n  .v-application .pl-md-7{\n    padding-left:28px!important\n  }\n\n  .v-application .pl-md-8{\n    padding-left:32px!important\n  }\n\n  .v-application .pl-md-9{\n    padding-left:36px!important\n  }\n\n  .v-application .pl-md-10{\n    padding-left:40px!important\n  }\n\n  .v-application .pl-md-11{\n    padding-left:44px!important\n  }\n\n  .v-application .pl-md-12{\n    padding-left:48px!important\n  }\n\n  .v-application .pl-md-13{\n    padding-left:52px!important\n  }\n\n  .v-application .pl-md-14{\n    padding-left:56px!important\n  }\n\n  .v-application .pl-md-15{\n    padding-left:60px!important\n  }\n\n  .v-application .pl-md-16{\n    padding-left:64px!important\n  }\n\n  .v-application--is-ltr .ps-md-0{\n    padding-left:0!important\n  }\n\n  .v-application--is-rtl .ps-md-0{\n    padding-right:0!important\n  }\n\n  .v-application--is-ltr .ps-md-1{\n    padding-left:4px!important\n  }\n\n  .v-application--is-rtl .ps-md-1{\n    padding-right:4px!important\n  }\n\n  .v-application--is-ltr .ps-md-2{\n    padding-left:8px!important\n  }\n\n  .v-application--is-rtl .ps-md-2{\n    padding-right:8px!important\n  }\n\n  .v-application--is-ltr .ps-md-3{\n    padding-left:12px!important\n  }\n\n  .v-application--is-rtl .ps-md-3{\n    padding-right:12px!important\n  }\n\n  .v-application--is-ltr .ps-md-4{\n    padding-left:16px!important\n  }\n\n  .v-application--is-rtl .ps-md-4{\n    padding-right:16px!important\n  }\n\n  .v-application--is-ltr .ps-md-5{\n    padding-left:20px!important\n  }\n\n  .v-application--is-rtl .ps-md-5{\n    padding-right:20px!important\n  }\n\n  .v-application--is-ltr .ps-md-6{\n    padding-left:24px!important\n  }\n\n  .v-application--is-rtl .ps-md-6{\n    padding-right:24px!important\n  }\n\n  .v-application--is-ltr .ps-md-7{\n    padding-left:28px!important\n  }\n\n  .v-application--is-rtl .ps-md-7{\n    padding-right:28px!important\n  }\n\n  .v-application--is-ltr .ps-md-8{\n    padding-left:32px!important\n  }\n\n  .v-application--is-rtl .ps-md-8{\n    padding-right:32px!important\n  }\n\n  .v-application--is-ltr .ps-md-9{\n    padding-left:36px!important\n  }\n\n  .v-application--is-rtl .ps-md-9{\n    padding-right:36px!important\n  }\n\n  .v-application--is-ltr .ps-md-10{\n    padding-left:40px!important\n  }\n\n  .v-application--is-rtl .ps-md-10{\n    padding-right:40px!important\n  }\n\n  .v-application--is-ltr .ps-md-11{\n    padding-left:44px!important\n  }\n\n  .v-application--is-rtl .ps-md-11{\n    padding-right:44px!important\n  }\n\n  .v-application--is-ltr .ps-md-12{\n    padding-left:48px!important\n  }\n\n  .v-application--is-rtl .ps-md-12{\n    padding-right:48px!important\n  }\n\n  .v-application--is-ltr .ps-md-13{\n    padding-left:52px!important\n  }\n\n  .v-application--is-rtl .ps-md-13{\n    padding-right:52px!important\n  }\n\n  .v-application--is-ltr .ps-md-14{\n    padding-left:56px!important\n  }\n\n  .v-application--is-rtl .ps-md-14{\n    padding-right:56px!important\n  }\n\n  .v-application--is-ltr .ps-md-15{\n    padding-left:60px!important\n  }\n\n  .v-application--is-rtl .ps-md-15{\n    padding-right:60px!important\n  }\n\n  .v-application--is-ltr .ps-md-16{\n    padding-left:64px!important\n  }\n\n  .v-application--is-rtl .ps-md-16{\n    padding-right:64px!important\n  }\n\n  .v-application--is-ltr .pe-md-0{\n    padding-right:0!important\n  }\n\n  .v-application--is-rtl .pe-md-0{\n    padding-left:0!important\n  }\n\n  .v-application--is-ltr .pe-md-1{\n    padding-right:4px!important\n  }\n\n  .v-application--is-rtl .pe-md-1{\n    padding-left:4px!important\n  }\n\n  .v-application--is-ltr .pe-md-2{\n    padding-right:8px!important\n  }\n\n  .v-application--is-rtl .pe-md-2{\n    padding-left:8px!important\n  }\n\n  .v-application--is-ltr .pe-md-3{\n    padding-right:12px!important\n  }\n\n  .v-application--is-rtl .pe-md-3{\n    padding-left:12px!important\n  }\n\n  .v-application--is-ltr .pe-md-4{\n    padding-right:16px!important\n  }\n\n  .v-application--is-rtl .pe-md-4{\n    padding-left:16px!important\n  }\n\n  .v-application--is-ltr .pe-md-5{\n    padding-right:20px!important\n  }\n\n  .v-application--is-rtl .pe-md-5{\n    padding-left:20px!important\n  }\n\n  .v-application--is-ltr .pe-md-6{\n    padding-right:24px!important\n  }\n\n  .v-application--is-rtl .pe-md-6{\n    padding-left:24px!important\n  }\n\n  .v-application--is-ltr .pe-md-7{\n    padding-right:28px!important\n  }\n\n  .v-application--is-rtl .pe-md-7{\n    padding-left:28px!important\n  }\n\n  .v-application--is-ltr .pe-md-8{\n    padding-right:32px!important\n  }\n\n  .v-application--is-rtl .pe-md-8{\n    padding-left:32px!important\n  }\n\n  .v-application--is-ltr .pe-md-9{\n    padding-right:36px!important\n  }\n\n  .v-application--is-rtl .pe-md-9{\n    padding-left:36px!important\n  }\n\n  .v-application--is-ltr .pe-md-10{\n    padding-right:40px!important\n  }\n\n  .v-application--is-rtl .pe-md-10{\n    padding-left:40px!important\n  }\n\n  .v-application--is-ltr .pe-md-11{\n    padding-right:44px!important\n  }\n\n  .v-application--is-rtl .pe-md-11{\n    padding-left:44px!important\n  }\n\n  .v-application--is-ltr .pe-md-12{\n    padding-right:48px!important\n  }\n\n  .v-application--is-rtl .pe-md-12{\n    padding-left:48px!important\n  }\n\n  .v-application--is-ltr .pe-md-13{\n    padding-right:52px!important\n  }\n\n  .v-application--is-rtl .pe-md-13{\n    padding-left:52px!important\n  }\n\n  .v-application--is-ltr .pe-md-14{\n    padding-right:56px!important\n  }\n\n  .v-application--is-rtl .pe-md-14{\n    padding-left:56px!important\n  }\n\n  .v-application--is-ltr .pe-md-15{\n    padding-right:60px!important\n  }\n\n  .v-application--is-rtl .pe-md-15{\n    padding-left:60px!important\n  }\n\n  .v-application--is-ltr .pe-md-16{\n    padding-right:64px!important\n  }\n\n  .v-application--is-rtl .pe-md-16{\n    padding-left:64px!important\n  }\n\n  .v-application .text-md-left{\n    text-align:left!important\n  }\n\n  .v-application .text-md-right{\n    text-align:right!important\n  }\n\n  .v-application .text-md-center{\n    text-align:center!important\n  }\n\n  .v-application .text-md-justify{\n    text-align:justify!important\n  }\n\n  .v-application .text-md-start{\n    text-align:start!important\n  }\n\n  .v-application .text-md-end{\n    text-align:end!important\n  }\n\n  .v-application .text-md-h1{\n    font-size:6rem!important;\n    line-height:6rem;\n    letter-spacing:-.015625em!important\n  }\n\n  .v-application .text-md-h1,.v-application .text-md-h2{\n    font-weight:300;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-md-h2{\n    font-size:3.75rem!important;\n    line-height:3.75rem;\n    letter-spacing:-.0083333333em!important\n  }\n\n  .v-application .text-md-h3{\n    font-size:3rem!important;\n    line-height:3.125rem;\n    letter-spacing:normal!important\n  }\n\n  .v-application .text-md-h3,.v-application .text-md-h4{\n    font-weight:400;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-md-h4{\n    font-size:2.125rem!important;\n    line-height:2.5rem;\n    letter-spacing:.0073529412em!important\n  }\n\n  .v-application .text-md-h5{\n    font-size:1.5rem!important;\n    font-weight:400;\n    letter-spacing:normal!important\n  }\n\n  .v-application .text-md-h5,.v-application .text-md-h6{\n    line-height:2rem;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-md-h6{\n    font-size:1.25rem!important;\n    font-weight:500;\n    letter-spacing:.0125em!important\n  }\n\n  .v-application .text-md-subtitle-1{\n    font-size:1rem!important;\n    font-weight:400;\n    line-height:1.75rem;\n    letter-spacing:.009375em!important;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-md-subtitle-2{\n    font-size:.875rem!important;\n    font-weight:500;\n    line-height:1.375rem;\n    letter-spacing:.0071428571em!important;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-md-body-1{\n    font-size:1rem!important;\n    font-weight:400;\n    line-height:1.5rem;\n    letter-spacing:.03125em!important;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-md-body-2{\n    font-weight:400;\n    line-height:1.25rem;\n    letter-spacing:.0178571429em!important\n  }\n\n  .v-application .text-md-body-2,.v-application .text-md-button{\n    font-size:.875rem!important;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-md-button{\n    font-weight:500;\n    line-height:2.25rem;\n    letter-spacing:.0892857143em!important;\n    text-transform:uppercase!important\n  }\n\n  .v-application .text-md-caption{\n    font-weight:400;\n    line-height:1.25rem;\n    letter-spacing:.0333333333em!important\n  }\n\n  .v-application .text-md-caption,.v-application .text-md-overline{\n    font-size:.75rem!important;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-md-overline{\n    font-weight:500;\n    line-height:2rem;\n    letter-spacing:.1666666667em!important;\n    text-transform:uppercase!important\n  }\n}\n\n@media(min-width:1264px){\n  .v-application .d-lg-none{\n    display:none!important\n  }\n\n  .v-application .d-lg-inline{\n    display:inline!important\n  }\n\n  .v-application .d-lg-inline-block{\n    display:inline-block!important\n  }\n\n  .v-application .d-lg-block{\n    display:block!important\n  }\n\n  .v-application .d-lg-table{\n    display:table!important\n  }\n\n  .v-application .d-lg-table-row{\n    display:table-row!important\n  }\n\n  .v-application .d-lg-table-cell{\n    display:table-cell!important\n  }\n\n  .v-application .d-lg-flex{\n    display:flex!important\n  }\n\n  .v-application .d-lg-inline-flex{\n    display:inline-flex!important\n  }\n\n  .v-application .float-lg-none{\n    float:none!important\n  }\n\n  .v-application .float-lg-left{\n    float:left!important\n  }\n\n  .v-application .float-lg-right{\n    float:right!important\n  }\n\n  .v-application--is-rtl .float-lg-end{\n    float:left!important\n  }\n\n  .v-application--is-ltr .float-lg-end,.v-application--is-rtl .float-lg-start{\n    float:right!important\n  }\n\n  .v-application--is-ltr .float-lg-start{\n    float:left!important\n  }\n\n  .v-application .flex-lg-fill{\n    flex:1 1 auto!important\n  }\n\n  .v-application .flex-lg-row{\n    flex-direction:row!important\n  }\n\n  .v-application .flex-lg-column{\n    flex-direction:column!important\n  }\n\n  .v-application .flex-lg-row-reverse{\n    flex-direction:row-reverse!important\n  }\n\n  .v-application .flex-lg-column-reverse{\n    flex-direction:column-reverse!important\n  }\n\n  .v-application .flex-lg-grow-0{\n    flex-grow:0!important\n  }\n\n  .v-application .flex-lg-grow-1{\n    flex-grow:1!important\n  }\n\n  .v-application .flex-lg-shrink-0{\n    flex-shrink:0!important\n  }\n\n  .v-application .flex-lg-shrink-1{\n    flex-shrink:1!important\n  }\n\n  .v-application .flex-lg-wrap{\n    flex-wrap:wrap!important\n  }\n\n  .v-application .flex-lg-nowrap{\n    flex-wrap:nowrap!important\n  }\n\n  .v-application .flex-lg-wrap-reverse{\n    flex-wrap:wrap-reverse!important\n  }\n\n  .v-application .justify-lg-start{\n    justify-content:flex-start!important\n  }\n\n  .v-application .justify-lg-end{\n    justify-content:flex-end!important\n  }\n\n  .v-application .justify-lg-center{\n    justify-content:center!important\n  }\n\n  .v-application .justify-lg-space-between{\n    justify-content:space-between!important\n  }\n\n  .v-application .justify-lg-space-around{\n    justify-content:space-around!important\n  }\n\n  .v-application .align-lg-start{\n    align-items:flex-start!important\n  }\n\n  .v-application .align-lg-end{\n    align-items:flex-end!important\n  }\n\n  .v-application .align-lg-center{\n    align-items:center!important\n  }\n\n  .v-application .align-lg-baseline{\n    align-items:baseline!important\n  }\n\n  .v-application .align-lg-stretch{\n    align-items:stretch!important\n  }\n\n  .v-application .align-content-lg-start{\n    align-content:flex-start!important\n  }\n\n  .v-application .align-content-lg-end{\n    align-content:flex-end!important\n  }\n\n  .v-application .align-content-lg-center{\n    align-content:center!important\n  }\n\n  .v-application .align-content-lg-space-between{\n    align-content:space-between!important\n  }\n\n  .v-application .align-content-lg-space-around{\n    align-content:space-around!important\n  }\n\n  .v-application .align-content-lg-stretch{\n    align-content:stretch!important\n  }\n\n  .v-application .align-self-lg-auto{\n    align-self:auto!important\n  }\n\n  .v-application .align-self-lg-start{\n    align-self:flex-start!important\n  }\n\n  .v-application .align-self-lg-end{\n    align-self:flex-end!important\n  }\n\n  .v-application .align-self-lg-center{\n    align-self:center!important\n  }\n\n  .v-application .align-self-lg-baseline{\n    align-self:baseline!important\n  }\n\n  .v-application .align-self-lg-stretch{\n    align-self:stretch!important\n  }\n\n  .v-application .order-lg-first{\n    order:-1!important\n  }\n\n  .v-application .order-lg-0{\n    order:0!important\n  }\n\n  .v-application .order-lg-1{\n    order:1!important\n  }\n\n  .v-application .order-lg-2{\n    order:2!important\n  }\n\n  .v-application .order-lg-3{\n    order:3!important\n  }\n\n  .v-application .order-lg-4{\n    order:4!important\n  }\n\n  .v-application .order-lg-5{\n    order:5!important\n  }\n\n  .v-application .order-lg-6{\n    order:6!important\n  }\n\n  .v-application .order-lg-7{\n    order:7!important\n  }\n\n  .v-application .order-lg-8{\n    order:8!important\n  }\n\n  .v-application .order-lg-9{\n    order:9!important\n  }\n\n  .v-application .order-lg-10{\n    order:10!important\n  }\n\n  .v-application .order-lg-11{\n    order:11!important\n  }\n\n  .v-application .order-lg-12{\n    order:12!important\n  }\n\n  .v-application .order-lg-last{\n    order:13!important\n  }\n\n  .v-application .ma-lg-0{\n    margin:0!important\n  }\n\n  .v-application .ma-lg-1{\n    margin:4px!important\n  }\n\n  .v-application .ma-lg-2{\n    margin:8px!important\n  }\n\n  .v-application .ma-lg-3{\n    margin:12px!important\n  }\n\n  .v-application .ma-lg-4{\n    margin:16px!important\n  }\n\n  .v-application .ma-lg-5{\n    margin:20px!important\n  }\n\n  .v-application .ma-lg-6{\n    margin:24px!important\n  }\n\n  .v-application .ma-lg-7{\n    margin:28px!important\n  }\n\n  .v-application .ma-lg-8{\n    margin:32px!important\n  }\n\n  .v-application .ma-lg-9{\n    margin:36px!important\n  }\n\n  .v-application .ma-lg-10{\n    margin:40px!important\n  }\n\n  .v-application .ma-lg-11{\n    margin:44px!important\n  }\n\n  .v-application .ma-lg-12{\n    margin:48px!important\n  }\n\n  .v-application .ma-lg-13{\n    margin:52px!important\n  }\n\n  .v-application .ma-lg-14{\n    margin:56px!important\n  }\n\n  .v-application .ma-lg-15{\n    margin:60px!important\n  }\n\n  .v-application .ma-lg-16{\n    margin:64px!important\n  }\n\n  .v-application .ma-lg-auto{\n    margin:auto!important\n  }\n\n  .v-application .mx-lg-0{\n    margin-right:0!important;\n    margin-left:0!important\n  }\n\n  .v-application .mx-lg-1{\n    margin-right:4px!important;\n    margin-left:4px!important\n  }\n\n  .v-application .mx-lg-2{\n    margin-right:8px!important;\n    margin-left:8px!important\n  }\n\n  .v-application .mx-lg-3{\n    margin-right:12px!important;\n    margin-left:12px!important\n  }\n\n  .v-application .mx-lg-4{\n    margin-right:16px!important;\n    margin-left:16px!important\n  }\n\n  .v-application .mx-lg-5{\n    margin-right:20px!important;\n    margin-left:20px!important\n  }\n\n  .v-application .mx-lg-6{\n    margin-right:24px!important;\n    margin-left:24px!important\n  }\n\n  .v-application .mx-lg-7{\n    margin-right:28px!important;\n    margin-left:28px!important\n  }\n\n  .v-application .mx-lg-8{\n    margin-right:32px!important;\n    margin-left:32px!important\n  }\n\n  .v-application .mx-lg-9{\n    margin-right:36px!important;\n    margin-left:36px!important\n  }\n\n  .v-application .mx-lg-10{\n    margin-right:40px!important;\n    margin-left:40px!important\n  }\n\n  .v-application .mx-lg-11{\n    margin-right:44px!important;\n    margin-left:44px!important\n  }\n\n  .v-application .mx-lg-12{\n    margin-right:48px!important;\n    margin-left:48px!important\n  }\n\n  .v-application .mx-lg-13{\n    margin-right:52px!important;\n    margin-left:52px!important\n  }\n\n  .v-application .mx-lg-14{\n    margin-right:56px!important;\n    margin-left:56px!important\n  }\n\n  .v-application .mx-lg-15{\n    margin-right:60px!important;\n    margin-left:60px!important\n  }\n\n  .v-application .mx-lg-16{\n    margin-right:64px!important;\n    margin-left:64px!important\n  }\n\n  .v-application .mx-lg-auto{\n    margin-right:auto!important;\n    margin-left:auto!important\n  }\n\n  .v-application .my-lg-0{\n    margin-top:0!important;\n    margin-bottom:0!important\n  }\n\n  .v-application .my-lg-1{\n    margin-top:4px!important;\n    margin-bottom:4px!important\n  }\n\n  .v-application .my-lg-2{\n    margin-top:8px!important;\n    margin-bottom:8px!important\n  }\n\n  .v-application .my-lg-3{\n    margin-top:12px!important;\n    margin-bottom:12px!important\n  }\n\n  .v-application .my-lg-4{\n    margin-top:16px!important;\n    margin-bottom:16px!important\n  }\n\n  .v-application .my-lg-5{\n    margin-top:20px!important;\n    margin-bottom:20px!important\n  }\n\n  .v-application .my-lg-6{\n    margin-top:24px!important;\n    margin-bottom:24px!important\n  }\n\n  .v-application .my-lg-7{\n    margin-top:28px!important;\n    margin-bottom:28px!important\n  }\n\n  .v-application .my-lg-8{\n    margin-top:32px!important;\n    margin-bottom:32px!important\n  }\n\n  .v-application .my-lg-9{\n    margin-top:36px!important;\n    margin-bottom:36px!important\n  }\n\n  .v-application .my-lg-10{\n    margin-top:40px!important;\n    margin-bottom:40px!important\n  }\n\n  .v-application .my-lg-11{\n    margin-top:44px!important;\n    margin-bottom:44px!important\n  }\n\n  .v-application .my-lg-12{\n    margin-top:48px!important;\n    margin-bottom:48px!important\n  }\n\n  .v-application .my-lg-13{\n    margin-top:52px!important;\n    margin-bottom:52px!important\n  }\n\n  .v-application .my-lg-14{\n    margin-top:56px!important;\n    margin-bottom:56px!important\n  }\n\n  .v-application .my-lg-15{\n    margin-top:60px!important;\n    margin-bottom:60px!important\n  }\n\n  .v-application .my-lg-16{\n    margin-top:64px!important;\n    margin-bottom:64px!important\n  }\n\n  .v-application .my-lg-auto{\n    margin-top:auto!important;\n    margin-bottom:auto!important\n  }\n\n  .v-application .mt-lg-0{\n    margin-top:0!important\n  }\n\n  .v-application .mt-lg-1{\n    margin-top:4px!important\n  }\n\n  .v-application .mt-lg-2{\n    margin-top:8px!important\n  }\n\n  .v-application .mt-lg-3{\n    margin-top:12px!important\n  }\n\n  .v-application .mt-lg-4{\n    margin-top:16px!important\n  }\n\n  .v-application .mt-lg-5{\n    margin-top:20px!important\n  }\n\n  .v-application .mt-lg-6{\n    margin-top:24px!important\n  }\n\n  .v-application .mt-lg-7{\n    margin-top:28px!important\n  }\n\n  .v-application .mt-lg-8{\n    margin-top:32px!important\n  }\n\n  .v-application .mt-lg-9{\n    margin-top:36px!important\n  }\n\n  .v-application .mt-lg-10{\n    margin-top:40px!important\n  }\n\n  .v-application .mt-lg-11{\n    margin-top:44px!important\n  }\n\n  .v-application .mt-lg-12{\n    margin-top:48px!important\n  }\n\n  .v-application .mt-lg-13{\n    margin-top:52px!important\n  }\n\n  .v-application .mt-lg-14{\n    margin-top:56px!important\n  }\n\n  .v-application .mt-lg-15{\n    margin-top:60px!important\n  }\n\n  .v-application .mt-lg-16{\n    margin-top:64px!important\n  }\n\n  .v-application .mt-lg-auto{\n    margin-top:auto!important\n  }\n\n  .v-application .mr-lg-0{\n    margin-right:0!important\n  }\n\n  .v-application .mr-lg-1{\n    margin-right:4px!important\n  }\n\n  .v-application .mr-lg-2{\n    margin-right:8px!important\n  }\n\n  .v-application .mr-lg-3{\n    margin-right:12px!important\n  }\n\n  .v-application .mr-lg-4{\n    margin-right:16px!important\n  }\n\n  .v-application .mr-lg-5{\n    margin-right:20px!important\n  }\n\n  .v-application .mr-lg-6{\n    margin-right:24px!important\n  }\n\n  .v-application .mr-lg-7{\n    margin-right:28px!important\n  }\n\n  .v-application .mr-lg-8{\n    margin-right:32px!important\n  }\n\n  .v-application .mr-lg-9{\n    margin-right:36px!important\n  }\n\n  .v-application .mr-lg-10{\n    margin-right:40px!important\n  }\n\n  .v-application .mr-lg-11{\n    margin-right:44px!important\n  }\n\n  .v-application .mr-lg-12{\n    margin-right:48px!important\n  }\n\n  .v-application .mr-lg-13{\n    margin-right:52px!important\n  }\n\n  .v-application .mr-lg-14{\n    margin-right:56px!important\n  }\n\n  .v-application .mr-lg-15{\n    margin-right:60px!important\n  }\n\n  .v-application .mr-lg-16{\n    margin-right:64px!important\n  }\n\n  .v-application .mr-lg-auto{\n    margin-right:auto!important\n  }\n\n  .v-application .mb-lg-0{\n    margin-bottom:0!important\n  }\n\n  .v-application .mb-lg-1{\n    margin-bottom:4px!important\n  }\n\n  .v-application .mb-lg-2{\n    margin-bottom:8px!important\n  }\n\n  .v-application .mb-lg-3{\n    margin-bottom:12px!important\n  }\n\n  .v-application .mb-lg-4{\n    margin-bottom:16px!important\n  }\n\n  .v-application .mb-lg-5{\n    margin-bottom:20px!important\n  }\n\n  .v-application .mb-lg-6{\n    margin-bottom:24px!important\n  }\n\n  .v-application .mb-lg-7{\n    margin-bottom:28px!important\n  }\n\n  .v-application .mb-lg-8{\n    margin-bottom:32px!important\n  }\n\n  .v-application .mb-lg-9{\n    margin-bottom:36px!important\n  }\n\n  .v-application .mb-lg-10{\n    margin-bottom:40px!important\n  }\n\n  .v-application .mb-lg-11{\n    margin-bottom:44px!important\n  }\n\n  .v-application .mb-lg-12{\n    margin-bottom:48px!important\n  }\n\n  .v-application .mb-lg-13{\n    margin-bottom:52px!important\n  }\n\n  .v-application .mb-lg-14{\n    margin-bottom:56px!important\n  }\n\n  .v-application .mb-lg-15{\n    margin-bottom:60px!important\n  }\n\n  .v-application .mb-lg-16{\n    margin-bottom:64px!important\n  }\n\n  .v-application .mb-lg-auto{\n    margin-bottom:auto!important\n  }\n\n  .v-application .ml-lg-0{\n    margin-left:0!important\n  }\n\n  .v-application .ml-lg-1{\n    margin-left:4px!important\n  }\n\n  .v-application .ml-lg-2{\n    margin-left:8px!important\n  }\n\n  .v-application .ml-lg-3{\n    margin-left:12px!important\n  }\n\n  .v-application .ml-lg-4{\n    margin-left:16px!important\n  }\n\n  .v-application .ml-lg-5{\n    margin-left:20px!important\n  }\n\n  .v-application .ml-lg-6{\n    margin-left:24px!important\n  }\n\n  .v-application .ml-lg-7{\n    margin-left:28px!important\n  }\n\n  .v-application .ml-lg-8{\n    margin-left:32px!important\n  }\n\n  .v-application .ml-lg-9{\n    margin-left:36px!important\n  }\n\n  .v-application .ml-lg-10{\n    margin-left:40px!important\n  }\n\n  .v-application .ml-lg-11{\n    margin-left:44px!important\n  }\n\n  .v-application .ml-lg-12{\n    margin-left:48px!important\n  }\n\n  .v-application .ml-lg-13{\n    margin-left:52px!important\n  }\n\n  .v-application .ml-lg-14{\n    margin-left:56px!important\n  }\n\n  .v-application .ml-lg-15{\n    margin-left:60px!important\n  }\n\n  .v-application .ml-lg-16{\n    margin-left:64px!important\n  }\n\n  .v-application .ml-lg-auto{\n    margin-left:auto!important\n  }\n\n  .v-application--is-ltr .ms-lg-0{\n    margin-left:0!important\n  }\n\n  .v-application--is-rtl .ms-lg-0{\n    margin-right:0!important\n  }\n\n  .v-application--is-ltr .ms-lg-1{\n    margin-left:4px!important\n  }\n\n  .v-application--is-rtl .ms-lg-1{\n    margin-right:4px!important\n  }\n\n  .v-application--is-ltr .ms-lg-2{\n    margin-left:8px!important\n  }\n\n  .v-application--is-rtl .ms-lg-2{\n    margin-right:8px!important\n  }\n\n  .v-application--is-ltr .ms-lg-3{\n    margin-left:12px!important\n  }\n\n  .v-application--is-rtl .ms-lg-3{\n    margin-right:12px!important\n  }\n\n  .v-application--is-ltr .ms-lg-4{\n    margin-left:16px!important\n  }\n\n  .v-application--is-rtl .ms-lg-4{\n    margin-right:16px!important\n  }\n\n  .v-application--is-ltr .ms-lg-5{\n    margin-left:20px!important\n  }\n\n  .v-application--is-rtl .ms-lg-5{\n    margin-right:20px!important\n  }\n\n  .v-application--is-ltr .ms-lg-6{\n    margin-left:24px!important\n  }\n\n  .v-application--is-rtl .ms-lg-6{\n    margin-right:24px!important\n  }\n\n  .v-application--is-ltr .ms-lg-7{\n    margin-left:28px!important\n  }\n\n  .v-application--is-rtl .ms-lg-7{\n    margin-right:28px!important\n  }\n\n  .v-application--is-ltr .ms-lg-8{\n    margin-left:32px!important\n  }\n\n  .v-application--is-rtl .ms-lg-8{\n    margin-right:32px!important\n  }\n\n  .v-application--is-ltr .ms-lg-9{\n    margin-left:36px!important\n  }\n\n  .v-application--is-rtl .ms-lg-9{\n    margin-right:36px!important\n  }\n\n  .v-application--is-ltr .ms-lg-10{\n    margin-left:40px!important\n  }\n\n  .v-application--is-rtl .ms-lg-10{\n    margin-right:40px!important\n  }\n\n  .v-application--is-ltr .ms-lg-11{\n    margin-left:44px!important\n  }\n\n  .v-application--is-rtl .ms-lg-11{\n    margin-right:44px!important\n  }\n\n  .v-application--is-ltr .ms-lg-12{\n    margin-left:48px!important\n  }\n\n  .v-application--is-rtl .ms-lg-12{\n    margin-right:48px!important\n  }\n\n  .v-application--is-ltr .ms-lg-13{\n    margin-left:52px!important\n  }\n\n  .v-application--is-rtl .ms-lg-13{\n    margin-right:52px!important\n  }\n\n  .v-application--is-ltr .ms-lg-14{\n    margin-left:56px!important\n  }\n\n  .v-application--is-rtl .ms-lg-14{\n    margin-right:56px!important\n  }\n\n  .v-application--is-ltr .ms-lg-15{\n    margin-left:60px!important\n  }\n\n  .v-application--is-rtl .ms-lg-15{\n    margin-right:60px!important\n  }\n\n  .v-application--is-ltr .ms-lg-16{\n    margin-left:64px!important\n  }\n\n  .v-application--is-rtl .ms-lg-16{\n    margin-right:64px!important\n  }\n\n  .v-application--is-ltr .ms-lg-auto{\n    margin-left:auto!important\n  }\n\n  .v-application--is-rtl .ms-lg-auto{\n    margin-right:auto!important\n  }\n\n  .v-application--is-ltr .me-lg-0{\n    margin-right:0!important\n  }\n\n  .v-application--is-rtl .me-lg-0{\n    margin-left:0!important\n  }\n\n  .v-application--is-ltr .me-lg-1{\n    margin-right:4px!important\n  }\n\n  .v-application--is-rtl .me-lg-1{\n    margin-left:4px!important\n  }\n\n  .v-application--is-ltr .me-lg-2{\n    margin-right:8px!important\n  }\n\n  .v-application--is-rtl .me-lg-2{\n    margin-left:8px!important\n  }\n\n  .v-application--is-ltr .me-lg-3{\n    margin-right:12px!important\n  }\n\n  .v-application--is-rtl .me-lg-3{\n    margin-left:12px!important\n  }\n\n  .v-application--is-ltr .me-lg-4{\n    margin-right:16px!important\n  }\n\n  .v-application--is-rtl .me-lg-4{\n    margin-left:16px!important\n  }\n\n  .v-application--is-ltr .me-lg-5{\n    margin-right:20px!important\n  }\n\n  .v-application--is-rtl .me-lg-5{\n    margin-left:20px!important\n  }\n\n  .v-application--is-ltr .me-lg-6{\n    margin-right:24px!important\n  }\n\n  .v-application--is-rtl .me-lg-6{\n    margin-left:24px!important\n  }\n\n  .v-application--is-ltr .me-lg-7{\n    margin-right:28px!important\n  }\n\n  .v-application--is-rtl .me-lg-7{\n    margin-left:28px!important\n  }\n\n  .v-application--is-ltr .me-lg-8{\n    margin-right:32px!important\n  }\n\n  .v-application--is-rtl .me-lg-8{\n    margin-left:32px!important\n  }\n\n  .v-application--is-ltr .me-lg-9{\n    margin-right:36px!important\n  }\n\n  .v-application--is-rtl .me-lg-9{\n    margin-left:36px!important\n  }\n\n  .v-application--is-ltr .me-lg-10{\n    margin-right:40px!important\n  }\n\n  .v-application--is-rtl .me-lg-10{\n    margin-left:40px!important\n  }\n\n  .v-application--is-ltr .me-lg-11{\n    margin-right:44px!important\n  }\n\n  .v-application--is-rtl .me-lg-11{\n    margin-left:44px!important\n  }\n\n  .v-application--is-ltr .me-lg-12{\n    margin-right:48px!important\n  }\n\n  .v-application--is-rtl .me-lg-12{\n    margin-left:48px!important\n  }\n\n  .v-application--is-ltr .me-lg-13{\n    margin-right:52px!important\n  }\n\n  .v-application--is-rtl .me-lg-13{\n    margin-left:52px!important\n  }\n\n  .v-application--is-ltr .me-lg-14{\n    margin-right:56px!important\n  }\n\n  .v-application--is-rtl .me-lg-14{\n    margin-left:56px!important\n  }\n\n  .v-application--is-ltr .me-lg-15{\n    margin-right:60px!important\n  }\n\n  .v-application--is-rtl .me-lg-15{\n    margin-left:60px!important\n  }\n\n  .v-application--is-ltr .me-lg-16{\n    margin-right:64px!important\n  }\n\n  .v-application--is-rtl .me-lg-16{\n    margin-left:64px!important\n  }\n\n  .v-application--is-ltr .me-lg-auto{\n    margin-right:auto!important\n  }\n\n  .v-application--is-rtl .me-lg-auto{\n    margin-left:auto!important\n  }\n\n  .v-application .ma-lg-n1{\n    margin:-4px!important\n  }\n\n  .v-application .ma-lg-n2{\n    margin:-8px!important\n  }\n\n  .v-application .ma-lg-n3{\n    margin:-12px!important\n  }\n\n  .v-application .ma-lg-n4{\n    margin:-16px!important\n  }\n\n  .v-application .ma-lg-n5{\n    margin:-20px!important\n  }\n\n  .v-application .ma-lg-n6{\n    margin:-24px!important\n  }\n\n  .v-application .ma-lg-n7{\n    margin:-28px!important\n  }\n\n  .v-application .ma-lg-n8{\n    margin:-32px!important\n  }\n\n  .v-application .ma-lg-n9{\n    margin:-36px!important\n  }\n\n  .v-application .ma-lg-n10{\n    margin:-40px!important\n  }\n\n  .v-application .ma-lg-n11{\n    margin:-44px!important\n  }\n\n  .v-application .ma-lg-n12{\n    margin:-48px!important\n  }\n\n  .v-application .ma-lg-n13{\n    margin:-52px!important\n  }\n\n  .v-application .ma-lg-n14{\n    margin:-56px!important\n  }\n\n  .v-application .ma-lg-n15{\n    margin:-60px!important\n  }\n\n  .v-application .ma-lg-n16{\n    margin:-64px!important\n  }\n\n  .v-application .mx-lg-n1{\n    margin-right:-4px!important;\n    margin-left:-4px!important\n  }\n\n  .v-application .mx-lg-n2{\n    margin-right:-8px!important;\n    margin-left:-8px!important\n  }\n\n  .v-application .mx-lg-n3{\n    margin-right:-12px!important;\n    margin-left:-12px!important\n  }\n\n  .v-application .mx-lg-n4{\n    margin-right:-16px!important;\n    margin-left:-16px!important\n  }\n\n  .v-application .mx-lg-n5{\n    margin-right:-20px!important;\n    margin-left:-20px!important\n  }\n\n  .v-application .mx-lg-n6{\n    margin-right:-24px!important;\n    margin-left:-24px!important\n  }\n\n  .v-application .mx-lg-n7{\n    margin-right:-28px!important;\n    margin-left:-28px!important\n  }\n\n  .v-application .mx-lg-n8{\n    margin-right:-32px!important;\n    margin-left:-32px!important\n  }\n\n  .v-application .mx-lg-n9{\n    margin-right:-36px!important;\n    margin-left:-36px!important\n  }\n\n  .v-application .mx-lg-n10{\n    margin-right:-40px!important;\n    margin-left:-40px!important\n  }\n\n  .v-application .mx-lg-n11{\n    margin-right:-44px!important;\n    margin-left:-44px!important\n  }\n\n  .v-application .mx-lg-n12{\n    margin-right:-48px!important;\n    margin-left:-48px!important\n  }\n\n  .v-application .mx-lg-n13{\n    margin-right:-52px!important;\n    margin-left:-52px!important\n  }\n\n  .v-application .mx-lg-n14{\n    margin-right:-56px!important;\n    margin-left:-56px!important\n  }\n\n  .v-application .mx-lg-n15{\n    margin-right:-60px!important;\n    margin-left:-60px!important\n  }\n\n  .v-application .mx-lg-n16{\n    margin-right:-64px!important;\n    margin-left:-64px!important\n  }\n\n  .v-application .my-lg-n1{\n    margin-top:-4px!important;\n    margin-bottom:-4px!important\n  }\n\n  .v-application .my-lg-n2{\n    margin-top:-8px!important;\n    margin-bottom:-8px!important\n  }\n\n  .v-application .my-lg-n3{\n    margin-top:-12px!important;\n    margin-bottom:-12px!important\n  }\n\n  .v-application .my-lg-n4{\n    margin-top:-16px!important;\n    margin-bottom:-16px!important\n  }\n\n  .v-application .my-lg-n5{\n    margin-top:-20px!important;\n    margin-bottom:-20px!important\n  }\n\n  .v-application .my-lg-n6{\n    margin-top:-24px!important;\n    margin-bottom:-24px!important\n  }\n\n  .v-application .my-lg-n7{\n    margin-top:-28px!important;\n    margin-bottom:-28px!important\n  }\n\n  .v-application .my-lg-n8{\n    margin-top:-32px!important;\n    margin-bottom:-32px!important\n  }\n\n  .v-application .my-lg-n9{\n    margin-top:-36px!important;\n    margin-bottom:-36px!important\n  }\n\n  .v-application .my-lg-n10{\n    margin-top:-40px!important;\n    margin-bottom:-40px!important\n  }\n\n  .v-application .my-lg-n11{\n    margin-top:-44px!important;\n    margin-bottom:-44px!important\n  }\n\n  .v-application .my-lg-n12{\n    margin-top:-48px!important;\n    margin-bottom:-48px!important\n  }\n\n  .v-application .my-lg-n13{\n    margin-top:-52px!important;\n    margin-bottom:-52px!important\n  }\n\n  .v-application .my-lg-n14{\n    margin-top:-56px!important;\n    margin-bottom:-56px!important\n  }\n\n  .v-application .my-lg-n15{\n    margin-top:-60px!important;\n    margin-bottom:-60px!important\n  }\n\n  .v-application .my-lg-n16{\n    margin-top:-64px!important;\n    margin-bottom:-64px!important\n  }\n\n  .v-application .mt-lg-n1{\n    margin-top:-4px!important\n  }\n\n  .v-application .mt-lg-n2{\n    margin-top:-8px!important\n  }\n\n  .v-application .mt-lg-n3{\n    margin-top:-12px!important\n  }\n\n  .v-application .mt-lg-n4{\n    margin-top:-16px!important\n  }\n\n  .v-application .mt-lg-n5{\n    margin-top:-20px!important\n  }\n\n  .v-application .mt-lg-n6{\n    margin-top:-24px!important\n  }\n\n  .v-application .mt-lg-n7{\n    margin-top:-28px!important\n  }\n\n  .v-application .mt-lg-n8{\n    margin-top:-32px!important\n  }\n\n  .v-application .mt-lg-n9{\n    margin-top:-36px!important\n  }\n\n  .v-application .mt-lg-n10{\n    margin-top:-40px!important\n  }\n\n  .v-application .mt-lg-n11{\n    margin-top:-44px!important\n  }\n\n  .v-application .mt-lg-n12{\n    margin-top:-48px!important\n  }\n\n  .v-application .mt-lg-n13{\n    margin-top:-52px!important\n  }\n\n  .v-application .mt-lg-n14{\n    margin-top:-56px!important\n  }\n\n  .v-application .mt-lg-n15{\n    margin-top:-60px!important\n  }\n\n  .v-application .mt-lg-n16{\n    margin-top:-64px!important\n  }\n\n  .v-application .mr-lg-n1{\n    margin-right:-4px!important\n  }\n\n  .v-application .mr-lg-n2{\n    margin-right:-8px!important\n  }\n\n  .v-application .mr-lg-n3{\n    margin-right:-12px!important\n  }\n\n  .v-application .mr-lg-n4{\n    margin-right:-16px!important\n  }\n\n  .v-application .mr-lg-n5{\n    margin-right:-20px!important\n  }\n\n  .v-application .mr-lg-n6{\n    margin-right:-24px!important\n  }\n\n  .v-application .mr-lg-n7{\n    margin-right:-28px!important\n  }\n\n  .v-application .mr-lg-n8{\n    margin-right:-32px!important\n  }\n\n  .v-application .mr-lg-n9{\n    margin-right:-36px!important\n  }\n\n  .v-application .mr-lg-n10{\n    margin-right:-40px!important\n  }\n\n  .v-application .mr-lg-n11{\n    margin-right:-44px!important\n  }\n\n  .v-application .mr-lg-n12{\n    margin-right:-48px!important\n  }\n\n  .v-application .mr-lg-n13{\n    margin-right:-52px!important\n  }\n\n  .v-application .mr-lg-n14{\n    margin-right:-56px!important\n  }\n\n  .v-application .mr-lg-n15{\n    margin-right:-60px!important\n  }\n\n  .v-application .mr-lg-n16{\n    margin-right:-64px!important\n  }\n\n  .v-application .mb-lg-n1{\n    margin-bottom:-4px!important\n  }\n\n  .v-application .mb-lg-n2{\n    margin-bottom:-8px!important\n  }\n\n  .v-application .mb-lg-n3{\n    margin-bottom:-12px!important\n  }\n\n  .v-application .mb-lg-n4{\n    margin-bottom:-16px!important\n  }\n\n  .v-application .mb-lg-n5{\n    margin-bottom:-20px!important\n  }\n\n  .v-application .mb-lg-n6{\n    margin-bottom:-24px!important\n  }\n\n  .v-application .mb-lg-n7{\n    margin-bottom:-28px!important\n  }\n\n  .v-application .mb-lg-n8{\n    margin-bottom:-32px!important\n  }\n\n  .v-application .mb-lg-n9{\n    margin-bottom:-36px!important\n  }\n\n  .v-application .mb-lg-n10{\n    margin-bottom:-40px!important\n  }\n\n  .v-application .mb-lg-n11{\n    margin-bottom:-44px!important\n  }\n\n  .v-application .mb-lg-n12{\n    margin-bottom:-48px!important\n  }\n\n  .v-application .mb-lg-n13{\n    margin-bottom:-52px!important\n  }\n\n  .v-application .mb-lg-n14{\n    margin-bottom:-56px!important\n  }\n\n  .v-application .mb-lg-n15{\n    margin-bottom:-60px!important\n  }\n\n  .v-application .mb-lg-n16{\n    margin-bottom:-64px!important\n  }\n\n  .v-application .ml-lg-n1{\n    margin-left:-4px!important\n  }\n\n  .v-application .ml-lg-n2{\n    margin-left:-8px!important\n  }\n\n  .v-application .ml-lg-n3{\n    margin-left:-12px!important\n  }\n\n  .v-application .ml-lg-n4{\n    margin-left:-16px!important\n  }\n\n  .v-application .ml-lg-n5{\n    margin-left:-20px!important\n  }\n\n  .v-application .ml-lg-n6{\n    margin-left:-24px!important\n  }\n\n  .v-application .ml-lg-n7{\n    margin-left:-28px!important\n  }\n\n  .v-application .ml-lg-n8{\n    margin-left:-32px!important\n  }\n\n  .v-application .ml-lg-n9{\n    margin-left:-36px!important\n  }\n\n  .v-application .ml-lg-n10{\n    margin-left:-40px!important\n  }\n\n  .v-application .ml-lg-n11{\n    margin-left:-44px!important\n  }\n\n  .v-application .ml-lg-n12{\n    margin-left:-48px!important\n  }\n\n  .v-application .ml-lg-n13{\n    margin-left:-52px!important\n  }\n\n  .v-application .ml-lg-n14{\n    margin-left:-56px!important\n  }\n\n  .v-application .ml-lg-n15{\n    margin-left:-60px!important\n  }\n\n  .v-application .ml-lg-n16{\n    margin-left:-64px!important\n  }\n\n  .v-application--is-ltr .ms-lg-n1{\n    margin-left:-4px!important\n  }\n\n  .v-application--is-rtl .ms-lg-n1{\n    margin-right:-4px!important\n  }\n\n  .v-application--is-ltr .ms-lg-n2{\n    margin-left:-8px!important\n  }\n\n  .v-application--is-rtl .ms-lg-n2{\n    margin-right:-8px!important\n  }\n\n  .v-application--is-ltr .ms-lg-n3{\n    margin-left:-12px!important\n  }\n\n  .v-application--is-rtl .ms-lg-n3{\n    margin-right:-12px!important\n  }\n\n  .v-application--is-ltr .ms-lg-n4{\n    margin-left:-16px!important\n  }\n\n  .v-application--is-rtl .ms-lg-n4{\n    margin-right:-16px!important\n  }\n\n  .v-application--is-ltr .ms-lg-n5{\n    margin-left:-20px!important\n  }\n\n  .v-application--is-rtl .ms-lg-n5{\n    margin-right:-20px!important\n  }\n\n  .v-application--is-ltr .ms-lg-n6{\n    margin-left:-24px!important\n  }\n\n  .v-application--is-rtl .ms-lg-n6{\n    margin-right:-24px!important\n  }\n\n  .v-application--is-ltr .ms-lg-n7{\n    margin-left:-28px!important\n  }\n\n  .v-application--is-rtl .ms-lg-n7{\n    margin-right:-28px!important\n  }\n\n  .v-application--is-ltr .ms-lg-n8{\n    margin-left:-32px!important\n  }\n\n  .v-application--is-rtl .ms-lg-n8{\n    margin-right:-32px!important\n  }\n\n  .v-application--is-ltr .ms-lg-n9{\n    margin-left:-36px!important\n  }\n\n  .v-application--is-rtl .ms-lg-n9{\n    margin-right:-36px!important\n  }\n\n  .v-application--is-ltr .ms-lg-n10{\n    margin-left:-40px!important\n  }\n\n  .v-application--is-rtl .ms-lg-n10{\n    margin-right:-40px!important\n  }\n\n  .v-application--is-ltr .ms-lg-n11{\n    margin-left:-44px!important\n  }\n\n  .v-application--is-rtl .ms-lg-n11{\n    margin-right:-44px!important\n  }\n\n  .v-application--is-ltr .ms-lg-n12{\n    margin-left:-48px!important\n  }\n\n  .v-application--is-rtl .ms-lg-n12{\n    margin-right:-48px!important\n  }\n\n  .v-application--is-ltr .ms-lg-n13{\n    margin-left:-52px!important\n  }\n\n  .v-application--is-rtl .ms-lg-n13{\n    margin-right:-52px!important\n  }\n\n  .v-application--is-ltr .ms-lg-n14{\n    margin-left:-56px!important\n  }\n\n  .v-application--is-rtl .ms-lg-n14{\n    margin-right:-56px!important\n  }\n\n  .v-application--is-ltr .ms-lg-n15{\n    margin-left:-60px!important\n  }\n\n  .v-application--is-rtl .ms-lg-n15{\n    margin-right:-60px!important\n  }\n\n  .v-application--is-ltr .ms-lg-n16{\n    margin-left:-64px!important\n  }\n\n  .v-application--is-rtl .ms-lg-n16{\n    margin-right:-64px!important\n  }\n\n  .v-application--is-ltr .me-lg-n1{\n    margin-right:-4px!important\n  }\n\n  .v-application--is-rtl .me-lg-n1{\n    margin-left:-4px!important\n  }\n\n  .v-application--is-ltr .me-lg-n2{\n    margin-right:-8px!important\n  }\n\n  .v-application--is-rtl .me-lg-n2{\n    margin-left:-8px!important\n  }\n\n  .v-application--is-ltr .me-lg-n3{\n    margin-right:-12px!important\n  }\n\n  .v-application--is-rtl .me-lg-n3{\n    margin-left:-12px!important\n  }\n\n  .v-application--is-ltr .me-lg-n4{\n    margin-right:-16px!important\n  }\n\n  .v-application--is-rtl .me-lg-n4{\n    margin-left:-16px!important\n  }\n\n  .v-application--is-ltr .me-lg-n5{\n    margin-right:-20px!important\n  }\n\n  .v-application--is-rtl .me-lg-n5{\n    margin-left:-20px!important\n  }\n\n  .v-application--is-ltr .me-lg-n6{\n    margin-right:-24px!important\n  }\n\n  .v-application--is-rtl .me-lg-n6{\n    margin-left:-24px!important\n  }\n\n  .v-application--is-ltr .me-lg-n7{\n    margin-right:-28px!important\n  }\n\n  .v-application--is-rtl .me-lg-n7{\n    margin-left:-28px!important\n  }\n\n  .v-application--is-ltr .me-lg-n8{\n    margin-right:-32px!important\n  }\n\n  .v-application--is-rtl .me-lg-n8{\n    margin-left:-32px!important\n  }\n\n  .v-application--is-ltr .me-lg-n9{\n    margin-right:-36px!important\n  }\n\n  .v-application--is-rtl .me-lg-n9{\n    margin-left:-36px!important\n  }\n\n  .v-application--is-ltr .me-lg-n10{\n    margin-right:-40px!important\n  }\n\n  .v-application--is-rtl .me-lg-n10{\n    margin-left:-40px!important\n  }\n\n  .v-application--is-ltr .me-lg-n11{\n    margin-right:-44px!important\n  }\n\n  .v-application--is-rtl .me-lg-n11{\n    margin-left:-44px!important\n  }\n\n  .v-application--is-ltr .me-lg-n12{\n    margin-right:-48px!important\n  }\n\n  .v-application--is-rtl .me-lg-n12{\n    margin-left:-48px!important\n  }\n\n  .v-application--is-ltr .me-lg-n13{\n    margin-right:-52px!important\n  }\n\n  .v-application--is-rtl .me-lg-n13{\n    margin-left:-52px!important\n  }\n\n  .v-application--is-ltr .me-lg-n14{\n    margin-right:-56px!important\n  }\n\n  .v-application--is-rtl .me-lg-n14{\n    margin-left:-56px!important\n  }\n\n  .v-application--is-ltr .me-lg-n15{\n    margin-right:-60px!important\n  }\n\n  .v-application--is-rtl .me-lg-n15{\n    margin-left:-60px!important\n  }\n\n  .v-application--is-ltr .me-lg-n16{\n    margin-right:-64px!important\n  }\n\n  .v-application--is-rtl .me-lg-n16{\n    margin-left:-64px!important\n  }\n\n  .v-application .pa-lg-0{\n    padding:0!important\n  }\n\n  .v-application .pa-lg-1{\n    padding:4px!important\n  }\n\n  .v-application .pa-lg-2{\n    padding:8px!important\n  }\n\n  .v-application .pa-lg-3{\n    padding:12px!important\n  }\n\n  .v-application .pa-lg-4{\n    padding:16px!important\n  }\n\n  .v-application .pa-lg-5{\n    padding:20px!important\n  }\n\n  .v-application .pa-lg-6{\n    padding:24px!important\n  }\n\n  .v-application .pa-lg-7{\n    padding:28px!important\n  }\n\n  .v-application .pa-lg-8{\n    padding:32px!important\n  }\n\n  .v-application .pa-lg-9{\n    padding:36px!important\n  }\n\n  .v-application .pa-lg-10{\n    padding:40px!important\n  }\n\n  .v-application .pa-lg-11{\n    padding:44px!important\n  }\n\n  .v-application .pa-lg-12{\n    padding:48px!important\n  }\n\n  .v-application .pa-lg-13{\n    padding:52px!important\n  }\n\n  .v-application .pa-lg-14{\n    padding:56px!important\n  }\n\n  .v-application .pa-lg-15{\n    padding:60px!important\n  }\n\n  .v-application .pa-lg-16{\n    padding:64px!important\n  }\n\n  .v-application .px-lg-0{\n    padding-right:0!important;\n    padding-left:0!important\n  }\n\n  .v-application .px-lg-1{\n    padding-right:4px!important;\n    padding-left:4px!important\n  }\n\n  .v-application .px-lg-2{\n    padding-right:8px!important;\n    padding-left:8px!important\n  }\n\n  .v-application .px-lg-3{\n    padding-right:12px!important;\n    padding-left:12px!important\n  }\n\n  .v-application .px-lg-4{\n    padding-right:16px!important;\n    padding-left:16px!important\n  }\n\n  .v-application .px-lg-5{\n    padding-right:20px!important;\n    padding-left:20px!important\n  }\n\n  .v-application .px-lg-6{\n    padding-right:24px!important;\n    padding-left:24px!important\n  }\n\n  .v-application .px-lg-7{\n    padding-right:28px!important;\n    padding-left:28px!important\n  }\n\n  .v-application .px-lg-8{\n    padding-right:32px!important;\n    padding-left:32px!important\n  }\n\n  .v-application .px-lg-9{\n    padding-right:36px!important;\n    padding-left:36px!important\n  }\n\n  .v-application .px-lg-10{\n    padding-right:40px!important;\n    padding-left:40px!important\n  }\n\n  .v-application .px-lg-11{\n    padding-right:44px!important;\n    padding-left:44px!important\n  }\n\n  .v-application .px-lg-12{\n    padding-right:48px!important;\n    padding-left:48px!important\n  }\n\n  .v-application .px-lg-13{\n    padding-right:52px!important;\n    padding-left:52px!important\n  }\n\n  .v-application .px-lg-14{\n    padding-right:56px!important;\n    padding-left:56px!important\n  }\n\n  .v-application .px-lg-15{\n    padding-right:60px!important;\n    padding-left:60px!important\n  }\n\n  .v-application .px-lg-16{\n    padding-right:64px!important;\n    padding-left:64px!important\n  }\n\n  .v-application .py-lg-0{\n    padding-top:0!important;\n    padding-bottom:0!important\n  }\n\n  .v-application .py-lg-1{\n    padding-top:4px!important;\n    padding-bottom:4px!important\n  }\n\n  .v-application .py-lg-2{\n    padding-top:8px!important;\n    padding-bottom:8px!important\n  }\n\n  .v-application .py-lg-3{\n    padding-top:12px!important;\n    padding-bottom:12px!important\n  }\n\n  .v-application .py-lg-4{\n    padding-top:16px!important;\n    padding-bottom:16px!important\n  }\n\n  .v-application .py-lg-5{\n    padding-top:20px!important;\n    padding-bottom:20px!important\n  }\n\n  .v-application .py-lg-6{\n    padding-top:24px!important;\n    padding-bottom:24px!important\n  }\n\n  .v-application .py-lg-7{\n    padding-top:28px!important;\n    padding-bottom:28px!important\n  }\n\n  .v-application .py-lg-8{\n    padding-top:32px!important;\n    padding-bottom:32px!important\n  }\n\n  .v-application .py-lg-9{\n    padding-top:36px!important;\n    padding-bottom:36px!important\n  }\n\n  .v-application .py-lg-10{\n    padding-top:40px!important;\n    padding-bottom:40px!important\n  }\n\n  .v-application .py-lg-11{\n    padding-top:44px!important;\n    padding-bottom:44px!important\n  }\n\n  .v-application .py-lg-12{\n    padding-top:48px!important;\n    padding-bottom:48px!important\n  }\n\n  .v-application .py-lg-13{\n    padding-top:52px!important;\n    padding-bottom:52px!important\n  }\n\n  .v-application .py-lg-14{\n    padding-top:56px!important;\n    padding-bottom:56px!important\n  }\n\n  .v-application .py-lg-15{\n    padding-top:60px!important;\n    padding-bottom:60px!important\n  }\n\n  .v-application .py-lg-16{\n    padding-top:64px!important;\n    padding-bottom:64px!important\n  }\n\n  .v-application .pt-lg-0{\n    padding-top:0!important\n  }\n\n  .v-application .pt-lg-1{\n    padding-top:4px!important\n  }\n\n  .v-application .pt-lg-2{\n    padding-top:8px!important\n  }\n\n  .v-application .pt-lg-3{\n    padding-top:12px!important\n  }\n\n  .v-application .pt-lg-4{\n    padding-top:16px!important\n  }\n\n  .v-application .pt-lg-5{\n    padding-top:20px!important\n  }\n\n  .v-application .pt-lg-6{\n    padding-top:24px!important\n  }\n\n  .v-application .pt-lg-7{\n    padding-top:28px!important\n  }\n\n  .v-application .pt-lg-8{\n    padding-top:32px!important\n  }\n\n  .v-application .pt-lg-9{\n    padding-top:36px!important\n  }\n\n  .v-application .pt-lg-10{\n    padding-top:40px!important\n  }\n\n  .v-application .pt-lg-11{\n    padding-top:44px!important\n  }\n\n  .v-application .pt-lg-12{\n    padding-top:48px!important\n  }\n\n  .v-application .pt-lg-13{\n    padding-top:52px!important\n  }\n\n  .v-application .pt-lg-14{\n    padding-top:56px!important\n  }\n\n  .v-application .pt-lg-15{\n    padding-top:60px!important\n  }\n\n  .v-application .pt-lg-16{\n    padding-top:64px!important\n  }\n\n  .v-application .pr-lg-0{\n    padding-right:0!important\n  }\n\n  .v-application .pr-lg-1{\n    padding-right:4px!important\n  }\n\n  .v-application .pr-lg-2{\n    padding-right:8px!important\n  }\n\n  .v-application .pr-lg-3{\n    padding-right:12px!important\n  }\n\n  .v-application .pr-lg-4{\n    padding-right:16px!important\n  }\n\n  .v-application .pr-lg-5{\n    padding-right:20px!important\n  }\n\n  .v-application .pr-lg-6{\n    padding-right:24px!important\n  }\n\n  .v-application .pr-lg-7{\n    padding-right:28px!important\n  }\n\n  .v-application .pr-lg-8{\n    padding-right:32px!important\n  }\n\n  .v-application .pr-lg-9{\n    padding-right:36px!important\n  }\n\n  .v-application .pr-lg-10{\n    padding-right:40px!important\n  }\n\n  .v-application .pr-lg-11{\n    padding-right:44px!important\n  }\n\n  .v-application .pr-lg-12{\n    padding-right:48px!important\n  }\n\n  .v-application .pr-lg-13{\n    padding-right:52px!important\n  }\n\n  .v-application .pr-lg-14{\n    padding-right:56px!important\n  }\n\n  .v-application .pr-lg-15{\n    padding-right:60px!important\n  }\n\n  .v-application .pr-lg-16{\n    padding-right:64px!important\n  }\n\n  .v-application .pb-lg-0{\n    padding-bottom:0!important\n  }\n\n  .v-application .pb-lg-1{\n    padding-bottom:4px!important\n  }\n\n  .v-application .pb-lg-2{\n    padding-bottom:8px!important\n  }\n\n  .v-application .pb-lg-3{\n    padding-bottom:12px!important\n  }\n\n  .v-application .pb-lg-4{\n    padding-bottom:16px!important\n  }\n\n  .v-application .pb-lg-5{\n    padding-bottom:20px!important\n  }\n\n  .v-application .pb-lg-6{\n    padding-bottom:24px!important\n  }\n\n  .v-application .pb-lg-7{\n    padding-bottom:28px!important\n  }\n\n  .v-application .pb-lg-8{\n    padding-bottom:32px!important\n  }\n\n  .v-application .pb-lg-9{\n    padding-bottom:36px!important\n  }\n\n  .v-application .pb-lg-10{\n    padding-bottom:40px!important\n  }\n\n  .v-application .pb-lg-11{\n    padding-bottom:44px!important\n  }\n\n  .v-application .pb-lg-12{\n    padding-bottom:48px!important\n  }\n\n  .v-application .pb-lg-13{\n    padding-bottom:52px!important\n  }\n\n  .v-application .pb-lg-14{\n    padding-bottom:56px!important\n  }\n\n  .v-application .pb-lg-15{\n    padding-bottom:60px!important\n  }\n\n  .v-application .pb-lg-16{\n    padding-bottom:64px!important\n  }\n\n  .v-application .pl-lg-0{\n    padding-left:0!important\n  }\n\n  .v-application .pl-lg-1{\n    padding-left:4px!important\n  }\n\n  .v-application .pl-lg-2{\n    padding-left:8px!important\n  }\n\n  .v-application .pl-lg-3{\n    padding-left:12px!important\n  }\n\n  .v-application .pl-lg-4{\n    padding-left:16px!important\n  }\n\n  .v-application .pl-lg-5{\n    padding-left:20px!important\n  }\n\n  .v-application .pl-lg-6{\n    padding-left:24px!important\n  }\n\n  .v-application .pl-lg-7{\n    padding-left:28px!important\n  }\n\n  .v-application .pl-lg-8{\n    padding-left:32px!important\n  }\n\n  .v-application .pl-lg-9{\n    padding-left:36px!important\n  }\n\n  .v-application .pl-lg-10{\n    padding-left:40px!important\n  }\n\n  .v-application .pl-lg-11{\n    padding-left:44px!important\n  }\n\n  .v-application .pl-lg-12{\n    padding-left:48px!important\n  }\n\n  .v-application .pl-lg-13{\n    padding-left:52px!important\n  }\n\n  .v-application .pl-lg-14{\n    padding-left:56px!important\n  }\n\n  .v-application .pl-lg-15{\n    padding-left:60px!important\n  }\n\n  .v-application .pl-lg-16{\n    padding-left:64px!important\n  }\n\n  .v-application--is-ltr .ps-lg-0{\n    padding-left:0!important\n  }\n\n  .v-application--is-rtl .ps-lg-0{\n    padding-right:0!important\n  }\n\n  .v-application--is-ltr .ps-lg-1{\n    padding-left:4px!important\n  }\n\n  .v-application--is-rtl .ps-lg-1{\n    padding-right:4px!important\n  }\n\n  .v-application--is-ltr .ps-lg-2{\n    padding-left:8px!important\n  }\n\n  .v-application--is-rtl .ps-lg-2{\n    padding-right:8px!important\n  }\n\n  .v-application--is-ltr .ps-lg-3{\n    padding-left:12px!important\n  }\n\n  .v-application--is-rtl .ps-lg-3{\n    padding-right:12px!important\n  }\n\n  .v-application--is-ltr .ps-lg-4{\n    padding-left:16px!important\n  }\n\n  .v-application--is-rtl .ps-lg-4{\n    padding-right:16px!important\n  }\n\n  .v-application--is-ltr .ps-lg-5{\n    padding-left:20px!important\n  }\n\n  .v-application--is-rtl .ps-lg-5{\n    padding-right:20px!important\n  }\n\n  .v-application--is-ltr .ps-lg-6{\n    padding-left:24px!important\n  }\n\n  .v-application--is-rtl .ps-lg-6{\n    padding-right:24px!important\n  }\n\n  .v-application--is-ltr .ps-lg-7{\n    padding-left:28px!important\n  }\n\n  .v-application--is-rtl .ps-lg-7{\n    padding-right:28px!important\n  }\n\n  .v-application--is-ltr .ps-lg-8{\n    padding-left:32px!important\n  }\n\n  .v-application--is-rtl .ps-lg-8{\n    padding-right:32px!important\n  }\n\n  .v-application--is-ltr .ps-lg-9{\n    padding-left:36px!important\n  }\n\n  .v-application--is-rtl .ps-lg-9{\n    padding-right:36px!important\n  }\n\n  .v-application--is-ltr .ps-lg-10{\n    padding-left:40px!important\n  }\n\n  .v-application--is-rtl .ps-lg-10{\n    padding-right:40px!important\n  }\n\n  .v-application--is-ltr .ps-lg-11{\n    padding-left:44px!important\n  }\n\n  .v-application--is-rtl .ps-lg-11{\n    padding-right:44px!important\n  }\n\n  .v-application--is-ltr .ps-lg-12{\n    padding-left:48px!important\n  }\n\n  .v-application--is-rtl .ps-lg-12{\n    padding-right:48px!important\n  }\n\n  .v-application--is-ltr .ps-lg-13{\n    padding-left:52px!important\n  }\n\n  .v-application--is-rtl .ps-lg-13{\n    padding-right:52px!important\n  }\n\n  .v-application--is-ltr .ps-lg-14{\n    padding-left:56px!important\n  }\n\n  .v-application--is-rtl .ps-lg-14{\n    padding-right:56px!important\n  }\n\n  .v-application--is-ltr .ps-lg-15{\n    padding-left:60px!important\n  }\n\n  .v-application--is-rtl .ps-lg-15{\n    padding-right:60px!important\n  }\n\n  .v-application--is-ltr .ps-lg-16{\n    padding-left:64px!important\n  }\n\n  .v-application--is-rtl .ps-lg-16{\n    padding-right:64px!important\n  }\n\n  .v-application--is-ltr .pe-lg-0{\n    padding-right:0!important\n  }\n\n  .v-application--is-rtl .pe-lg-0{\n    padding-left:0!important\n  }\n\n  .v-application--is-ltr .pe-lg-1{\n    padding-right:4px!important\n  }\n\n  .v-application--is-rtl .pe-lg-1{\n    padding-left:4px!important\n  }\n\n  .v-application--is-ltr .pe-lg-2{\n    padding-right:8px!important\n  }\n\n  .v-application--is-rtl .pe-lg-2{\n    padding-left:8px!important\n  }\n\n  .v-application--is-ltr .pe-lg-3{\n    padding-right:12px!important\n  }\n\n  .v-application--is-rtl .pe-lg-3{\n    padding-left:12px!important\n  }\n\n  .v-application--is-ltr .pe-lg-4{\n    padding-right:16px!important\n  }\n\n  .v-application--is-rtl .pe-lg-4{\n    padding-left:16px!important\n  }\n\n  .v-application--is-ltr .pe-lg-5{\n    padding-right:20px!important\n  }\n\n  .v-application--is-rtl .pe-lg-5{\n    padding-left:20px!important\n  }\n\n  .v-application--is-ltr .pe-lg-6{\n    padding-right:24px!important\n  }\n\n  .v-application--is-rtl .pe-lg-6{\n    padding-left:24px!important\n  }\n\n  .v-application--is-ltr .pe-lg-7{\n    padding-right:28px!important\n  }\n\n  .v-application--is-rtl .pe-lg-7{\n    padding-left:28px!important\n  }\n\n  .v-application--is-ltr .pe-lg-8{\n    padding-right:32px!important\n  }\n\n  .v-application--is-rtl .pe-lg-8{\n    padding-left:32px!important\n  }\n\n  .v-application--is-ltr .pe-lg-9{\n    padding-right:36px!important\n  }\n\n  .v-application--is-rtl .pe-lg-9{\n    padding-left:36px!important\n  }\n\n  .v-application--is-ltr .pe-lg-10{\n    padding-right:40px!important\n  }\n\n  .v-application--is-rtl .pe-lg-10{\n    padding-left:40px!important\n  }\n\n  .v-application--is-ltr .pe-lg-11{\n    padding-right:44px!important\n  }\n\n  .v-application--is-rtl .pe-lg-11{\n    padding-left:44px!important\n  }\n\n  .v-application--is-ltr .pe-lg-12{\n    padding-right:48px!important\n  }\n\n  .v-application--is-rtl .pe-lg-12{\n    padding-left:48px!important\n  }\n\n  .v-application--is-ltr .pe-lg-13{\n    padding-right:52px!important\n  }\n\n  .v-application--is-rtl .pe-lg-13{\n    padding-left:52px!important\n  }\n\n  .v-application--is-ltr .pe-lg-14{\n    padding-right:56px!important\n  }\n\n  .v-application--is-rtl .pe-lg-14{\n    padding-left:56px!important\n  }\n\n  .v-application--is-ltr .pe-lg-15{\n    padding-right:60px!important\n  }\n\n  .v-application--is-rtl .pe-lg-15{\n    padding-left:60px!important\n  }\n\n  .v-application--is-ltr .pe-lg-16{\n    padding-right:64px!important\n  }\n\n  .v-application--is-rtl .pe-lg-16{\n    padding-left:64px!important\n  }\n\n  .v-application .text-lg-left{\n    text-align:left!important\n  }\n\n  .v-application .text-lg-right{\n    text-align:right!important\n  }\n\n  .v-application .text-lg-center{\n    text-align:center!important\n  }\n\n  .v-application .text-lg-justify{\n    text-align:justify!important\n  }\n\n  .v-application .text-lg-start{\n    text-align:start!important\n  }\n\n  .v-application .text-lg-end{\n    text-align:end!important\n  }\n\n  .v-application .text-lg-h1{\n    font-size:6rem!important;\n    line-height:6rem;\n    letter-spacing:-.015625em!important\n  }\n\n  .v-application .text-lg-h1,.v-application .text-lg-h2{\n    font-weight:300;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-lg-h2{\n    font-size:3.75rem!important;\n    line-height:3.75rem;\n    letter-spacing:-.0083333333em!important\n  }\n\n  .v-application .text-lg-h3{\n    font-size:3rem!important;\n    line-height:3.125rem;\n    letter-spacing:normal!important\n  }\n\n  .v-application .text-lg-h3,.v-application .text-lg-h4{\n    font-weight:400;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-lg-h4{\n    font-size:2.125rem!important;\n    line-height:2.5rem;\n    letter-spacing:.0073529412em!important\n  }\n\n  .v-application .text-lg-h5{\n    font-size:1.5rem!important;\n    font-weight:400;\n    letter-spacing:normal!important\n  }\n\n  .v-application .text-lg-h5,.v-application .text-lg-h6{\n    line-height:2rem;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-lg-h6{\n    font-size:1.25rem!important;\n    font-weight:500;\n    letter-spacing:.0125em!important\n  }\n\n  .v-application .text-lg-subtitle-1{\n    font-size:1rem!important;\n    font-weight:400;\n    line-height:1.75rem;\n    letter-spacing:.009375em!important;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-lg-subtitle-2{\n    font-size:.875rem!important;\n    font-weight:500;\n    line-height:1.375rem;\n    letter-spacing:.0071428571em!important;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-lg-body-1{\n    font-size:1rem!important;\n    font-weight:400;\n    line-height:1.5rem;\n    letter-spacing:.03125em!important;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-lg-body-2{\n    font-weight:400;\n    line-height:1.25rem;\n    letter-spacing:.0178571429em!important\n  }\n\n  .v-application .text-lg-body-2,.v-application .text-lg-button{\n    font-size:.875rem!important;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-lg-button{\n    font-weight:500;\n    line-height:2.25rem;\n    letter-spacing:.0892857143em!important;\n    text-transform:uppercase!important\n  }\n\n  .v-application .text-lg-caption{\n    font-weight:400;\n    line-height:1.25rem;\n    letter-spacing:.0333333333em!important\n  }\n\n  .v-application .text-lg-caption,.v-application .text-lg-overline{\n    font-size:.75rem!important;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-lg-overline{\n    font-weight:500;\n    line-height:2rem;\n    letter-spacing:.1666666667em!important;\n    text-transform:uppercase!important\n  }\n}\n\n@media(min-width:1904px){\n  .v-application .d-xl-none{\n    display:none!important\n  }\n\n  .v-application .d-xl-inline{\n    display:inline!important\n  }\n\n  .v-application .d-xl-inline-block{\n    display:inline-block!important\n  }\n\n  .v-application .d-xl-block{\n    display:block!important\n  }\n\n  .v-application .d-xl-table{\n    display:table!important\n  }\n\n  .v-application .d-xl-table-row{\n    display:table-row!important\n  }\n\n  .v-application .d-xl-table-cell{\n    display:table-cell!important\n  }\n\n  .v-application .d-xl-flex{\n    display:flex!important\n  }\n\n  .v-application .d-xl-inline-flex{\n    display:inline-flex!important\n  }\n\n  .v-application .float-xl-none{\n    float:none!important\n  }\n\n  .v-application .float-xl-left{\n    float:left!important\n  }\n\n  .v-application .float-xl-right{\n    float:right!important\n  }\n\n  .v-application--is-rtl .float-xl-end{\n    float:left!important\n  }\n\n  .v-application--is-ltr .float-xl-end,.v-application--is-rtl .float-xl-start{\n    float:right!important\n  }\n\n  .v-application--is-ltr .float-xl-start{\n    float:left!important\n  }\n\n  .v-application .flex-xl-fill{\n    flex:1 1 auto!important\n  }\n\n  .v-application .flex-xl-row{\n    flex-direction:row!important\n  }\n\n  .v-application .flex-xl-column{\n    flex-direction:column!important\n  }\n\n  .v-application .flex-xl-row-reverse{\n    flex-direction:row-reverse!important\n  }\n\n  .v-application .flex-xl-column-reverse{\n    flex-direction:column-reverse!important\n  }\n\n  .v-application .flex-xl-grow-0{\n    flex-grow:0!important\n  }\n\n  .v-application .flex-xl-grow-1{\n    flex-grow:1!important\n  }\n\n  .v-application .flex-xl-shrink-0{\n    flex-shrink:0!important\n  }\n\n  .v-application .flex-xl-shrink-1{\n    flex-shrink:1!important\n  }\n\n  .v-application .flex-xl-wrap{\n    flex-wrap:wrap!important\n  }\n\n  .v-application .flex-xl-nowrap{\n    flex-wrap:nowrap!important\n  }\n\n  .v-application .flex-xl-wrap-reverse{\n    flex-wrap:wrap-reverse!important\n  }\n\n  .v-application .justify-xl-start{\n    justify-content:flex-start!important\n  }\n\n  .v-application .justify-xl-end{\n    justify-content:flex-end!important\n  }\n\n  .v-application .justify-xl-center{\n    justify-content:center!important\n  }\n\n  .v-application .justify-xl-space-between{\n    justify-content:space-between!important\n  }\n\n  .v-application .justify-xl-space-around{\n    justify-content:space-around!important\n  }\n\n  .v-application .align-xl-start{\n    align-items:flex-start!important\n  }\n\n  .v-application .align-xl-end{\n    align-items:flex-end!important\n  }\n\n  .v-application .align-xl-center{\n    align-items:center!important\n  }\n\n  .v-application .align-xl-baseline{\n    align-items:baseline!important\n  }\n\n  .v-application .align-xl-stretch{\n    align-items:stretch!important\n  }\n\n  .v-application .align-content-xl-start{\n    align-content:flex-start!important\n  }\n\n  .v-application .align-content-xl-end{\n    align-content:flex-end!important\n  }\n\n  .v-application .align-content-xl-center{\n    align-content:center!important\n  }\n\n  .v-application .align-content-xl-space-between{\n    align-content:space-between!important\n  }\n\n  .v-application .align-content-xl-space-around{\n    align-content:space-around!important\n  }\n\n  .v-application .align-content-xl-stretch{\n    align-content:stretch!important\n  }\n\n  .v-application .align-self-xl-auto{\n    align-self:auto!important\n  }\n\n  .v-application .align-self-xl-start{\n    align-self:flex-start!important\n  }\n\n  .v-application .align-self-xl-end{\n    align-self:flex-end!important\n  }\n\n  .v-application .align-self-xl-center{\n    align-self:center!important\n  }\n\n  .v-application .align-self-xl-baseline{\n    align-self:baseline!important\n  }\n\n  .v-application .align-self-xl-stretch{\n    align-self:stretch!important\n  }\n\n  .v-application .order-xl-first{\n    order:-1!important\n  }\n\n  .v-application .order-xl-0{\n    order:0!important\n  }\n\n  .v-application .order-xl-1{\n    order:1!important\n  }\n\n  .v-application .order-xl-2{\n    order:2!important\n  }\n\n  .v-application .order-xl-3{\n    order:3!important\n  }\n\n  .v-application .order-xl-4{\n    order:4!important\n  }\n\n  .v-application .order-xl-5{\n    order:5!important\n  }\n\n  .v-application .order-xl-6{\n    order:6!important\n  }\n\n  .v-application .order-xl-7{\n    order:7!important\n  }\n\n  .v-application .order-xl-8{\n    order:8!important\n  }\n\n  .v-application .order-xl-9{\n    order:9!important\n  }\n\n  .v-application .order-xl-10{\n    order:10!important\n  }\n\n  .v-application .order-xl-11{\n    order:11!important\n  }\n\n  .v-application .order-xl-12{\n    order:12!important\n  }\n\n  .v-application .order-xl-last{\n    order:13!important\n  }\n\n  .v-application .ma-xl-0{\n    margin:0!important\n  }\n\n  .v-application .ma-xl-1{\n    margin:4px!important\n  }\n\n  .v-application .ma-xl-2{\n    margin:8px!important\n  }\n\n  .v-application .ma-xl-3{\n    margin:12px!important\n  }\n\n  .v-application .ma-xl-4{\n    margin:16px!important\n  }\n\n  .v-application .ma-xl-5{\n    margin:20px!important\n  }\n\n  .v-application .ma-xl-6{\n    margin:24px!important\n  }\n\n  .v-application .ma-xl-7{\n    margin:28px!important\n  }\n\n  .v-application .ma-xl-8{\n    margin:32px!important\n  }\n\n  .v-application .ma-xl-9{\n    margin:36px!important\n  }\n\n  .v-application .ma-xl-10{\n    margin:40px!important\n  }\n\n  .v-application .ma-xl-11{\n    margin:44px!important\n  }\n\n  .v-application .ma-xl-12{\n    margin:48px!important\n  }\n\n  .v-application .ma-xl-13{\n    margin:52px!important\n  }\n\n  .v-application .ma-xl-14{\n    margin:56px!important\n  }\n\n  .v-application .ma-xl-15{\n    margin:60px!important\n  }\n\n  .v-application .ma-xl-16{\n    margin:64px!important\n  }\n\n  .v-application .ma-xl-auto{\n    margin:auto!important\n  }\n\n  .v-application .mx-xl-0{\n    margin-right:0!important;\n    margin-left:0!important\n  }\n\n  .v-application .mx-xl-1{\n    margin-right:4px!important;\n    margin-left:4px!important\n  }\n\n  .v-application .mx-xl-2{\n    margin-right:8px!important;\n    margin-left:8px!important\n  }\n\n  .v-application .mx-xl-3{\n    margin-right:12px!important;\n    margin-left:12px!important\n  }\n\n  .v-application .mx-xl-4{\n    margin-right:16px!important;\n    margin-left:16px!important\n  }\n\n  .v-application .mx-xl-5{\n    margin-right:20px!important;\n    margin-left:20px!important\n  }\n\n  .v-application .mx-xl-6{\n    margin-right:24px!important;\n    margin-left:24px!important\n  }\n\n  .v-application .mx-xl-7{\n    margin-right:28px!important;\n    margin-left:28px!important\n  }\n\n  .v-application .mx-xl-8{\n    margin-right:32px!important;\n    margin-left:32px!important\n  }\n\n  .v-application .mx-xl-9{\n    margin-right:36px!important;\n    margin-left:36px!important\n  }\n\n  .v-application .mx-xl-10{\n    margin-right:40px!important;\n    margin-left:40px!important\n  }\n\n  .v-application .mx-xl-11{\n    margin-right:44px!important;\n    margin-left:44px!important\n  }\n\n  .v-application .mx-xl-12{\n    margin-right:48px!important;\n    margin-left:48px!important\n  }\n\n  .v-application .mx-xl-13{\n    margin-right:52px!important;\n    margin-left:52px!important\n  }\n\n  .v-application .mx-xl-14{\n    margin-right:56px!important;\n    margin-left:56px!important\n  }\n\n  .v-application .mx-xl-15{\n    margin-right:60px!important;\n    margin-left:60px!important\n  }\n\n  .v-application .mx-xl-16{\n    margin-right:64px!important;\n    margin-left:64px!important\n  }\n\n  .v-application .mx-xl-auto{\n    margin-right:auto!important;\n    margin-left:auto!important\n  }\n\n  .v-application .my-xl-0{\n    margin-top:0!important;\n    margin-bottom:0!important\n  }\n\n  .v-application .my-xl-1{\n    margin-top:4px!important;\n    margin-bottom:4px!important\n  }\n\n  .v-application .my-xl-2{\n    margin-top:8px!important;\n    margin-bottom:8px!important\n  }\n\n  .v-application .my-xl-3{\n    margin-top:12px!important;\n    margin-bottom:12px!important\n  }\n\n  .v-application .my-xl-4{\n    margin-top:16px!important;\n    margin-bottom:16px!important\n  }\n\n  .v-application .my-xl-5{\n    margin-top:20px!important;\n    margin-bottom:20px!important\n  }\n\n  .v-application .my-xl-6{\n    margin-top:24px!important;\n    margin-bottom:24px!important\n  }\n\n  .v-application .my-xl-7{\n    margin-top:28px!important;\n    margin-bottom:28px!important\n  }\n\n  .v-application .my-xl-8{\n    margin-top:32px!important;\n    margin-bottom:32px!important\n  }\n\n  .v-application .my-xl-9{\n    margin-top:36px!important;\n    margin-bottom:36px!important\n  }\n\n  .v-application .my-xl-10{\n    margin-top:40px!important;\n    margin-bottom:40px!important\n  }\n\n  .v-application .my-xl-11{\n    margin-top:44px!important;\n    margin-bottom:44px!important\n  }\n\n  .v-application .my-xl-12{\n    margin-top:48px!important;\n    margin-bottom:48px!important\n  }\n\n  .v-application .my-xl-13{\n    margin-top:52px!important;\n    margin-bottom:52px!important\n  }\n\n  .v-application .my-xl-14{\n    margin-top:56px!important;\n    margin-bottom:56px!important\n  }\n\n  .v-application .my-xl-15{\n    margin-top:60px!important;\n    margin-bottom:60px!important\n  }\n\n  .v-application .my-xl-16{\n    margin-top:64px!important;\n    margin-bottom:64px!important\n  }\n\n  .v-application .my-xl-auto{\n    margin-top:auto!important;\n    margin-bottom:auto!important\n  }\n\n  .v-application .mt-xl-0{\n    margin-top:0!important\n  }\n\n  .v-application .mt-xl-1{\n    margin-top:4px!important\n  }\n\n  .v-application .mt-xl-2{\n    margin-top:8px!important\n  }\n\n  .v-application .mt-xl-3{\n    margin-top:12px!important\n  }\n\n  .v-application .mt-xl-4{\n    margin-top:16px!important\n  }\n\n  .v-application .mt-xl-5{\n    margin-top:20px!important\n  }\n\n  .v-application .mt-xl-6{\n    margin-top:24px!important\n  }\n\n  .v-application .mt-xl-7{\n    margin-top:28px!important\n  }\n\n  .v-application .mt-xl-8{\n    margin-top:32px!important\n  }\n\n  .v-application .mt-xl-9{\n    margin-top:36px!important\n  }\n\n  .v-application .mt-xl-10{\n    margin-top:40px!important\n  }\n\n  .v-application .mt-xl-11{\n    margin-top:44px!important\n  }\n\n  .v-application .mt-xl-12{\n    margin-top:48px!important\n  }\n\n  .v-application .mt-xl-13{\n    margin-top:52px!important\n  }\n\n  .v-application .mt-xl-14{\n    margin-top:56px!important\n  }\n\n  .v-application .mt-xl-15{\n    margin-top:60px!important\n  }\n\n  .v-application .mt-xl-16{\n    margin-top:64px!important\n  }\n\n  .v-application .mt-xl-auto{\n    margin-top:auto!important\n  }\n\n  .v-application .mr-xl-0{\n    margin-right:0!important\n  }\n\n  .v-application .mr-xl-1{\n    margin-right:4px!important\n  }\n\n  .v-application .mr-xl-2{\n    margin-right:8px!important\n  }\n\n  .v-application .mr-xl-3{\n    margin-right:12px!important\n  }\n\n  .v-application .mr-xl-4{\n    margin-right:16px!important\n  }\n\n  .v-application .mr-xl-5{\n    margin-right:20px!important\n  }\n\n  .v-application .mr-xl-6{\n    margin-right:24px!important\n  }\n\n  .v-application .mr-xl-7{\n    margin-right:28px!important\n  }\n\n  .v-application .mr-xl-8{\n    margin-right:32px!important\n  }\n\n  .v-application .mr-xl-9{\n    margin-right:36px!important\n  }\n\n  .v-application .mr-xl-10{\n    margin-right:40px!important\n  }\n\n  .v-application .mr-xl-11{\n    margin-right:44px!important\n  }\n\n  .v-application .mr-xl-12{\n    margin-right:48px!important\n  }\n\n  .v-application .mr-xl-13{\n    margin-right:52px!important\n  }\n\n  .v-application .mr-xl-14{\n    margin-right:56px!important\n  }\n\n  .v-application .mr-xl-15{\n    margin-right:60px!important\n  }\n\n  .v-application .mr-xl-16{\n    margin-right:64px!important\n  }\n\n  .v-application .mr-xl-auto{\n    margin-right:auto!important\n  }\n\n  .v-application .mb-xl-0{\n    margin-bottom:0!important\n  }\n\n  .v-application .mb-xl-1{\n    margin-bottom:4px!important\n  }\n\n  .v-application .mb-xl-2{\n    margin-bottom:8px!important\n  }\n\n  .v-application .mb-xl-3{\n    margin-bottom:12px!important\n  }\n\n  .v-application .mb-xl-4{\n    margin-bottom:16px!important\n  }\n\n  .v-application .mb-xl-5{\n    margin-bottom:20px!important\n  }\n\n  .v-application .mb-xl-6{\n    margin-bottom:24px!important\n  }\n\n  .v-application .mb-xl-7{\n    margin-bottom:28px!important\n  }\n\n  .v-application .mb-xl-8{\n    margin-bottom:32px!important\n  }\n\n  .v-application .mb-xl-9{\n    margin-bottom:36px!important\n  }\n\n  .v-application .mb-xl-10{\n    margin-bottom:40px!important\n  }\n\n  .v-application .mb-xl-11{\n    margin-bottom:44px!important\n  }\n\n  .v-application .mb-xl-12{\n    margin-bottom:48px!important\n  }\n\n  .v-application .mb-xl-13{\n    margin-bottom:52px!important\n  }\n\n  .v-application .mb-xl-14{\n    margin-bottom:56px!important\n  }\n\n  .v-application .mb-xl-15{\n    margin-bottom:60px!important\n  }\n\n  .v-application .mb-xl-16{\n    margin-bottom:64px!important\n  }\n\n  .v-application .mb-xl-auto{\n    margin-bottom:auto!important\n  }\n\n  .v-application .ml-xl-0{\n    margin-left:0!important\n  }\n\n  .v-application .ml-xl-1{\n    margin-left:4px!important\n  }\n\n  .v-application .ml-xl-2{\n    margin-left:8px!important\n  }\n\n  .v-application .ml-xl-3{\n    margin-left:12px!important\n  }\n\n  .v-application .ml-xl-4{\n    margin-left:16px!important\n  }\n\n  .v-application .ml-xl-5{\n    margin-left:20px!important\n  }\n\n  .v-application .ml-xl-6{\n    margin-left:24px!important\n  }\n\n  .v-application .ml-xl-7{\n    margin-left:28px!important\n  }\n\n  .v-application .ml-xl-8{\n    margin-left:32px!important\n  }\n\n  .v-application .ml-xl-9{\n    margin-left:36px!important\n  }\n\n  .v-application .ml-xl-10{\n    margin-left:40px!important\n  }\n\n  .v-application .ml-xl-11{\n    margin-left:44px!important\n  }\n\n  .v-application .ml-xl-12{\n    margin-left:48px!important\n  }\n\n  .v-application .ml-xl-13{\n    margin-left:52px!important\n  }\n\n  .v-application .ml-xl-14{\n    margin-left:56px!important\n  }\n\n  .v-application .ml-xl-15{\n    margin-left:60px!important\n  }\n\n  .v-application .ml-xl-16{\n    margin-left:64px!important\n  }\n\n  .v-application .ml-xl-auto{\n    margin-left:auto!important\n  }\n\n  .v-application--is-ltr .ms-xl-0{\n    margin-left:0!important\n  }\n\n  .v-application--is-rtl .ms-xl-0{\n    margin-right:0!important\n  }\n\n  .v-application--is-ltr .ms-xl-1{\n    margin-left:4px!important\n  }\n\n  .v-application--is-rtl .ms-xl-1{\n    margin-right:4px!important\n  }\n\n  .v-application--is-ltr .ms-xl-2{\n    margin-left:8px!important\n  }\n\n  .v-application--is-rtl .ms-xl-2{\n    margin-right:8px!important\n  }\n\n  .v-application--is-ltr .ms-xl-3{\n    margin-left:12px!important\n  }\n\n  .v-application--is-rtl .ms-xl-3{\n    margin-right:12px!important\n  }\n\n  .v-application--is-ltr .ms-xl-4{\n    margin-left:16px!important\n  }\n\n  .v-application--is-rtl .ms-xl-4{\n    margin-right:16px!important\n  }\n\n  .v-application--is-ltr .ms-xl-5{\n    margin-left:20px!important\n  }\n\n  .v-application--is-rtl .ms-xl-5{\n    margin-right:20px!important\n  }\n\n  .v-application--is-ltr .ms-xl-6{\n    margin-left:24px!important\n  }\n\n  .v-application--is-rtl .ms-xl-6{\n    margin-right:24px!important\n  }\n\n  .v-application--is-ltr .ms-xl-7{\n    margin-left:28px!important\n  }\n\n  .v-application--is-rtl .ms-xl-7{\n    margin-right:28px!important\n  }\n\n  .v-application--is-ltr .ms-xl-8{\n    margin-left:32px!important\n  }\n\n  .v-application--is-rtl .ms-xl-8{\n    margin-right:32px!important\n  }\n\n  .v-application--is-ltr .ms-xl-9{\n    margin-left:36px!important\n  }\n\n  .v-application--is-rtl .ms-xl-9{\n    margin-right:36px!important\n  }\n\n  .v-application--is-ltr .ms-xl-10{\n    margin-left:40px!important\n  }\n\n  .v-application--is-rtl .ms-xl-10{\n    margin-right:40px!important\n  }\n\n  .v-application--is-ltr .ms-xl-11{\n    margin-left:44px!important\n  }\n\n  .v-application--is-rtl .ms-xl-11{\n    margin-right:44px!important\n  }\n\n  .v-application--is-ltr .ms-xl-12{\n    margin-left:48px!important\n  }\n\n  .v-application--is-rtl .ms-xl-12{\n    margin-right:48px!important\n  }\n\n  .v-application--is-ltr .ms-xl-13{\n    margin-left:52px!important\n  }\n\n  .v-application--is-rtl .ms-xl-13{\n    margin-right:52px!important\n  }\n\n  .v-application--is-ltr .ms-xl-14{\n    margin-left:56px!important\n  }\n\n  .v-application--is-rtl .ms-xl-14{\n    margin-right:56px!important\n  }\n\n  .v-application--is-ltr .ms-xl-15{\n    margin-left:60px!important\n  }\n\n  .v-application--is-rtl .ms-xl-15{\n    margin-right:60px!important\n  }\n\n  .v-application--is-ltr .ms-xl-16{\n    margin-left:64px!important\n  }\n\n  .v-application--is-rtl .ms-xl-16{\n    margin-right:64px!important\n  }\n\n  .v-application--is-ltr .ms-xl-auto{\n    margin-left:auto!important\n  }\n\n  .v-application--is-rtl .ms-xl-auto{\n    margin-right:auto!important\n  }\n\n  .v-application--is-ltr .me-xl-0{\n    margin-right:0!important\n  }\n\n  .v-application--is-rtl .me-xl-0{\n    margin-left:0!important\n  }\n\n  .v-application--is-ltr .me-xl-1{\n    margin-right:4px!important\n  }\n\n  .v-application--is-rtl .me-xl-1{\n    margin-left:4px!important\n  }\n\n  .v-application--is-ltr .me-xl-2{\n    margin-right:8px!important\n  }\n\n  .v-application--is-rtl .me-xl-2{\n    margin-left:8px!important\n  }\n\n  .v-application--is-ltr .me-xl-3{\n    margin-right:12px!important\n  }\n\n  .v-application--is-rtl .me-xl-3{\n    margin-left:12px!important\n  }\n\n  .v-application--is-ltr .me-xl-4{\n    margin-right:16px!important\n  }\n\n  .v-application--is-rtl .me-xl-4{\n    margin-left:16px!important\n  }\n\n  .v-application--is-ltr .me-xl-5{\n    margin-right:20px!important\n  }\n\n  .v-application--is-rtl .me-xl-5{\n    margin-left:20px!important\n  }\n\n  .v-application--is-ltr .me-xl-6{\n    margin-right:24px!important\n  }\n\n  .v-application--is-rtl .me-xl-6{\n    margin-left:24px!important\n  }\n\n  .v-application--is-ltr .me-xl-7{\n    margin-right:28px!important\n  }\n\n  .v-application--is-rtl .me-xl-7{\n    margin-left:28px!important\n  }\n\n  .v-application--is-ltr .me-xl-8{\n    margin-right:32px!important\n  }\n\n  .v-application--is-rtl .me-xl-8{\n    margin-left:32px!important\n  }\n\n  .v-application--is-ltr .me-xl-9{\n    margin-right:36px!important\n  }\n\n  .v-application--is-rtl .me-xl-9{\n    margin-left:36px!important\n  }\n\n  .v-application--is-ltr .me-xl-10{\n    margin-right:40px!important\n  }\n\n  .v-application--is-rtl .me-xl-10{\n    margin-left:40px!important\n  }\n\n  .v-application--is-ltr .me-xl-11{\n    margin-right:44px!important\n  }\n\n  .v-application--is-rtl .me-xl-11{\n    margin-left:44px!important\n  }\n\n  .v-application--is-ltr .me-xl-12{\n    margin-right:48px!important\n  }\n\n  .v-application--is-rtl .me-xl-12{\n    margin-left:48px!important\n  }\n\n  .v-application--is-ltr .me-xl-13{\n    margin-right:52px!important\n  }\n\n  .v-application--is-rtl .me-xl-13{\n    margin-left:52px!important\n  }\n\n  .v-application--is-ltr .me-xl-14{\n    margin-right:56px!important\n  }\n\n  .v-application--is-rtl .me-xl-14{\n    margin-left:56px!important\n  }\n\n  .v-application--is-ltr .me-xl-15{\n    margin-right:60px!important\n  }\n\n  .v-application--is-rtl .me-xl-15{\n    margin-left:60px!important\n  }\n\n  .v-application--is-ltr .me-xl-16{\n    margin-right:64px!important\n  }\n\n  .v-application--is-rtl .me-xl-16{\n    margin-left:64px!important\n  }\n\n  .v-application--is-ltr .me-xl-auto{\n    margin-right:auto!important\n  }\n\n  .v-application--is-rtl .me-xl-auto{\n    margin-left:auto!important\n  }\n\n  .v-application .ma-xl-n1{\n    margin:-4px!important\n  }\n\n  .v-application .ma-xl-n2{\n    margin:-8px!important\n  }\n\n  .v-application .ma-xl-n3{\n    margin:-12px!important\n  }\n\n  .v-application .ma-xl-n4{\n    margin:-16px!important\n  }\n\n  .v-application .ma-xl-n5{\n    margin:-20px!important\n  }\n\n  .v-application .ma-xl-n6{\n    margin:-24px!important\n  }\n\n  .v-application .ma-xl-n7{\n    margin:-28px!important\n  }\n\n  .v-application .ma-xl-n8{\n    margin:-32px!important\n  }\n\n  .v-application .ma-xl-n9{\n    margin:-36px!important\n  }\n\n  .v-application .ma-xl-n10{\n    margin:-40px!important\n  }\n\n  .v-application .ma-xl-n11{\n    margin:-44px!important\n  }\n\n  .v-application .ma-xl-n12{\n    margin:-48px!important\n  }\n\n  .v-application .ma-xl-n13{\n    margin:-52px!important\n  }\n\n  .v-application .ma-xl-n14{\n    margin:-56px!important\n  }\n\n  .v-application .ma-xl-n15{\n    margin:-60px!important\n  }\n\n  .v-application .ma-xl-n16{\n    margin:-64px!important\n  }\n\n  .v-application .mx-xl-n1{\n    margin-right:-4px!important;\n    margin-left:-4px!important\n  }\n\n  .v-application .mx-xl-n2{\n    margin-right:-8px!important;\n    margin-left:-8px!important\n  }\n\n  .v-application .mx-xl-n3{\n    margin-right:-12px!important;\n    margin-left:-12px!important\n  }\n\n  .v-application .mx-xl-n4{\n    margin-right:-16px!important;\n    margin-left:-16px!important\n  }\n\n  .v-application .mx-xl-n5{\n    margin-right:-20px!important;\n    margin-left:-20px!important\n  }\n\n  .v-application .mx-xl-n6{\n    margin-right:-24px!important;\n    margin-left:-24px!important\n  }\n\n  .v-application .mx-xl-n7{\n    margin-right:-28px!important;\n    margin-left:-28px!important\n  }\n\n  .v-application .mx-xl-n8{\n    margin-right:-32px!important;\n    margin-left:-32px!important\n  }\n\n  .v-application .mx-xl-n9{\n    margin-right:-36px!important;\n    margin-left:-36px!important\n  }\n\n  .v-application .mx-xl-n10{\n    margin-right:-40px!important;\n    margin-left:-40px!important\n  }\n\n  .v-application .mx-xl-n11{\n    margin-right:-44px!important;\n    margin-left:-44px!important\n  }\n\n  .v-application .mx-xl-n12{\n    margin-right:-48px!important;\n    margin-left:-48px!important\n  }\n\n  .v-application .mx-xl-n13{\n    margin-right:-52px!important;\n    margin-left:-52px!important\n  }\n\n  .v-application .mx-xl-n14{\n    margin-right:-56px!important;\n    margin-left:-56px!important\n  }\n\n  .v-application .mx-xl-n15{\n    margin-right:-60px!important;\n    margin-left:-60px!important\n  }\n\n  .v-application .mx-xl-n16{\n    margin-right:-64px!important;\n    margin-left:-64px!important\n  }\n\n  .v-application .my-xl-n1{\n    margin-top:-4px!important;\n    margin-bottom:-4px!important\n  }\n\n  .v-application .my-xl-n2{\n    margin-top:-8px!important;\n    margin-bottom:-8px!important\n  }\n\n  .v-application .my-xl-n3{\n    margin-top:-12px!important;\n    margin-bottom:-12px!important\n  }\n\n  .v-application .my-xl-n4{\n    margin-top:-16px!important;\n    margin-bottom:-16px!important\n  }\n\n  .v-application .my-xl-n5{\n    margin-top:-20px!important;\n    margin-bottom:-20px!important\n  }\n\n  .v-application .my-xl-n6{\n    margin-top:-24px!important;\n    margin-bottom:-24px!important\n  }\n\n  .v-application .my-xl-n7{\n    margin-top:-28px!important;\n    margin-bottom:-28px!important\n  }\n\n  .v-application .my-xl-n8{\n    margin-top:-32px!important;\n    margin-bottom:-32px!important\n  }\n\n  .v-application .my-xl-n9{\n    margin-top:-36px!important;\n    margin-bottom:-36px!important\n  }\n\n  .v-application .my-xl-n10{\n    margin-top:-40px!important;\n    margin-bottom:-40px!important\n  }\n\n  .v-application .my-xl-n11{\n    margin-top:-44px!important;\n    margin-bottom:-44px!important\n  }\n\n  .v-application .my-xl-n12{\n    margin-top:-48px!important;\n    margin-bottom:-48px!important\n  }\n\n  .v-application .my-xl-n13{\n    margin-top:-52px!important;\n    margin-bottom:-52px!important\n  }\n\n  .v-application .my-xl-n14{\n    margin-top:-56px!important;\n    margin-bottom:-56px!important\n  }\n\n  .v-application .my-xl-n15{\n    margin-top:-60px!important;\n    margin-bottom:-60px!important\n  }\n\n  .v-application .my-xl-n16{\n    margin-top:-64px!important;\n    margin-bottom:-64px!important\n  }\n\n  .v-application .mt-xl-n1{\n    margin-top:-4px!important\n  }\n\n  .v-application .mt-xl-n2{\n    margin-top:-8px!important\n  }\n\n  .v-application .mt-xl-n3{\n    margin-top:-12px!important\n  }\n\n  .v-application .mt-xl-n4{\n    margin-top:-16px!important\n  }\n\n  .v-application .mt-xl-n5{\n    margin-top:-20px!important\n  }\n\n  .v-application .mt-xl-n6{\n    margin-top:-24px!important\n  }\n\n  .v-application .mt-xl-n7{\n    margin-top:-28px!important\n  }\n\n  .v-application .mt-xl-n8{\n    margin-top:-32px!important\n  }\n\n  .v-application .mt-xl-n9{\n    margin-top:-36px!important\n  }\n\n  .v-application .mt-xl-n10{\n    margin-top:-40px!important\n  }\n\n  .v-application .mt-xl-n11{\n    margin-top:-44px!important\n  }\n\n  .v-application .mt-xl-n12{\n    margin-top:-48px!important\n  }\n\n  .v-application .mt-xl-n13{\n    margin-top:-52px!important\n  }\n\n  .v-application .mt-xl-n14{\n    margin-top:-56px!important\n  }\n\n  .v-application .mt-xl-n15{\n    margin-top:-60px!important\n  }\n\n  .v-application .mt-xl-n16{\n    margin-top:-64px!important\n  }\n\n  .v-application .mr-xl-n1{\n    margin-right:-4px!important\n  }\n\n  .v-application .mr-xl-n2{\n    margin-right:-8px!important\n  }\n\n  .v-application .mr-xl-n3{\n    margin-right:-12px!important\n  }\n\n  .v-application .mr-xl-n4{\n    margin-right:-16px!important\n  }\n\n  .v-application .mr-xl-n5{\n    margin-right:-20px!important\n  }\n\n  .v-application .mr-xl-n6{\n    margin-right:-24px!important\n  }\n\n  .v-application .mr-xl-n7{\n    margin-right:-28px!important\n  }\n\n  .v-application .mr-xl-n8{\n    margin-right:-32px!important\n  }\n\n  .v-application .mr-xl-n9{\n    margin-right:-36px!important\n  }\n\n  .v-application .mr-xl-n10{\n    margin-right:-40px!important\n  }\n\n  .v-application .mr-xl-n11{\n    margin-right:-44px!important\n  }\n\n  .v-application .mr-xl-n12{\n    margin-right:-48px!important\n  }\n\n  .v-application .mr-xl-n13{\n    margin-right:-52px!important\n  }\n\n  .v-application .mr-xl-n14{\n    margin-right:-56px!important\n  }\n\n  .v-application .mr-xl-n15{\n    margin-right:-60px!important\n  }\n\n  .v-application .mr-xl-n16{\n    margin-right:-64px!important\n  }\n\n  .v-application .mb-xl-n1{\n    margin-bottom:-4px!important\n  }\n\n  .v-application .mb-xl-n2{\n    margin-bottom:-8px!important\n  }\n\n  .v-application .mb-xl-n3{\n    margin-bottom:-12px!important\n  }\n\n  .v-application .mb-xl-n4{\n    margin-bottom:-16px!important\n  }\n\n  .v-application .mb-xl-n5{\n    margin-bottom:-20px!important\n  }\n\n  .v-application .mb-xl-n6{\n    margin-bottom:-24px!important\n  }\n\n  .v-application .mb-xl-n7{\n    margin-bottom:-28px!important\n  }\n\n  .v-application .mb-xl-n8{\n    margin-bottom:-32px!important\n  }\n\n  .v-application .mb-xl-n9{\n    margin-bottom:-36px!important\n  }\n\n  .v-application .mb-xl-n10{\n    margin-bottom:-40px!important\n  }\n\n  .v-application .mb-xl-n11{\n    margin-bottom:-44px!important\n  }\n\n  .v-application .mb-xl-n12{\n    margin-bottom:-48px!important\n  }\n\n  .v-application .mb-xl-n13{\n    margin-bottom:-52px!important\n  }\n\n  .v-application .mb-xl-n14{\n    margin-bottom:-56px!important\n  }\n\n  .v-application .mb-xl-n15{\n    margin-bottom:-60px!important\n  }\n\n  .v-application .mb-xl-n16{\n    margin-bottom:-64px!important\n  }\n\n  .v-application .ml-xl-n1{\n    margin-left:-4px!important\n  }\n\n  .v-application .ml-xl-n2{\n    margin-left:-8px!important\n  }\n\n  .v-application .ml-xl-n3{\n    margin-left:-12px!important\n  }\n\n  .v-application .ml-xl-n4{\n    margin-left:-16px!important\n  }\n\n  .v-application .ml-xl-n5{\n    margin-left:-20px!important\n  }\n\n  .v-application .ml-xl-n6{\n    margin-left:-24px!important\n  }\n\n  .v-application .ml-xl-n7{\n    margin-left:-28px!important\n  }\n\n  .v-application .ml-xl-n8{\n    margin-left:-32px!important\n  }\n\n  .v-application .ml-xl-n9{\n    margin-left:-36px!important\n  }\n\n  .v-application .ml-xl-n10{\n    margin-left:-40px!important\n  }\n\n  .v-application .ml-xl-n11{\n    margin-left:-44px!important\n  }\n\n  .v-application .ml-xl-n12{\n    margin-left:-48px!important\n  }\n\n  .v-application .ml-xl-n13{\n    margin-left:-52px!important\n  }\n\n  .v-application .ml-xl-n14{\n    margin-left:-56px!important\n  }\n\n  .v-application .ml-xl-n15{\n    margin-left:-60px!important\n  }\n\n  .v-application .ml-xl-n16{\n    margin-left:-64px!important\n  }\n\n  .v-application--is-ltr .ms-xl-n1{\n    margin-left:-4px!important\n  }\n\n  .v-application--is-rtl .ms-xl-n1{\n    margin-right:-4px!important\n  }\n\n  .v-application--is-ltr .ms-xl-n2{\n    margin-left:-8px!important\n  }\n\n  .v-application--is-rtl .ms-xl-n2{\n    margin-right:-8px!important\n  }\n\n  .v-application--is-ltr .ms-xl-n3{\n    margin-left:-12px!important\n  }\n\n  .v-application--is-rtl .ms-xl-n3{\n    margin-right:-12px!important\n  }\n\n  .v-application--is-ltr .ms-xl-n4{\n    margin-left:-16px!important\n  }\n\n  .v-application--is-rtl .ms-xl-n4{\n    margin-right:-16px!important\n  }\n\n  .v-application--is-ltr .ms-xl-n5{\n    margin-left:-20px!important\n  }\n\n  .v-application--is-rtl .ms-xl-n5{\n    margin-right:-20px!important\n  }\n\n  .v-application--is-ltr .ms-xl-n6{\n    margin-left:-24px!important\n  }\n\n  .v-application--is-rtl .ms-xl-n6{\n    margin-right:-24px!important\n  }\n\n  .v-application--is-ltr .ms-xl-n7{\n    margin-left:-28px!important\n  }\n\n  .v-application--is-rtl .ms-xl-n7{\n    margin-right:-28px!important\n  }\n\n  .v-application--is-ltr .ms-xl-n8{\n    margin-left:-32px!important\n  }\n\n  .v-application--is-rtl .ms-xl-n8{\n    margin-right:-32px!important\n  }\n\n  .v-application--is-ltr .ms-xl-n9{\n    margin-left:-36px!important\n  }\n\n  .v-application--is-rtl .ms-xl-n9{\n    margin-right:-36px!important\n  }\n\n  .v-application--is-ltr .ms-xl-n10{\n    margin-left:-40px!important\n  }\n\n  .v-application--is-rtl .ms-xl-n10{\n    margin-right:-40px!important\n  }\n\n  .v-application--is-ltr .ms-xl-n11{\n    margin-left:-44px!important\n  }\n\n  .v-application--is-rtl .ms-xl-n11{\n    margin-right:-44px!important\n  }\n\n  .v-application--is-ltr .ms-xl-n12{\n    margin-left:-48px!important\n  }\n\n  .v-application--is-rtl .ms-xl-n12{\n    margin-right:-48px!important\n  }\n\n  .v-application--is-ltr .ms-xl-n13{\n    margin-left:-52px!important\n  }\n\n  .v-application--is-rtl .ms-xl-n13{\n    margin-right:-52px!important\n  }\n\n  .v-application--is-ltr .ms-xl-n14{\n    margin-left:-56px!important\n  }\n\n  .v-application--is-rtl .ms-xl-n14{\n    margin-right:-56px!important\n  }\n\n  .v-application--is-ltr .ms-xl-n15{\n    margin-left:-60px!important\n  }\n\n  .v-application--is-rtl .ms-xl-n15{\n    margin-right:-60px!important\n  }\n\n  .v-application--is-ltr .ms-xl-n16{\n    margin-left:-64px!important\n  }\n\n  .v-application--is-rtl .ms-xl-n16{\n    margin-right:-64px!important\n  }\n\n  .v-application--is-ltr .me-xl-n1{\n    margin-right:-4px!important\n  }\n\n  .v-application--is-rtl .me-xl-n1{\n    margin-left:-4px!important\n  }\n\n  .v-application--is-ltr .me-xl-n2{\n    margin-right:-8px!important\n  }\n\n  .v-application--is-rtl .me-xl-n2{\n    margin-left:-8px!important\n  }\n\n  .v-application--is-ltr .me-xl-n3{\n    margin-right:-12px!important\n  }\n\n  .v-application--is-rtl .me-xl-n3{\n    margin-left:-12px!important\n  }\n\n  .v-application--is-ltr .me-xl-n4{\n    margin-right:-16px!important\n  }\n\n  .v-application--is-rtl .me-xl-n4{\n    margin-left:-16px!important\n  }\n\n  .v-application--is-ltr .me-xl-n5{\n    margin-right:-20px!important\n  }\n\n  .v-application--is-rtl .me-xl-n5{\n    margin-left:-20px!important\n  }\n\n  .v-application--is-ltr .me-xl-n6{\n    margin-right:-24px!important\n  }\n\n  .v-application--is-rtl .me-xl-n6{\n    margin-left:-24px!important\n  }\n\n  .v-application--is-ltr .me-xl-n7{\n    margin-right:-28px!important\n  }\n\n  .v-application--is-rtl .me-xl-n7{\n    margin-left:-28px!important\n  }\n\n  .v-application--is-ltr .me-xl-n8{\n    margin-right:-32px!important\n  }\n\n  .v-application--is-rtl .me-xl-n8{\n    margin-left:-32px!important\n  }\n\n  .v-application--is-ltr .me-xl-n9{\n    margin-right:-36px!important\n  }\n\n  .v-application--is-rtl .me-xl-n9{\n    margin-left:-36px!important\n  }\n\n  .v-application--is-ltr .me-xl-n10{\n    margin-right:-40px!important\n  }\n\n  .v-application--is-rtl .me-xl-n10{\n    margin-left:-40px!important\n  }\n\n  .v-application--is-ltr .me-xl-n11{\n    margin-right:-44px!important\n  }\n\n  .v-application--is-rtl .me-xl-n11{\n    margin-left:-44px!important\n  }\n\n  .v-application--is-ltr .me-xl-n12{\n    margin-right:-48px!important\n  }\n\n  .v-application--is-rtl .me-xl-n12{\n    margin-left:-48px!important\n  }\n\n  .v-application--is-ltr .me-xl-n13{\n    margin-right:-52px!important\n  }\n\n  .v-application--is-rtl .me-xl-n13{\n    margin-left:-52px!important\n  }\n\n  .v-application--is-ltr .me-xl-n14{\n    margin-right:-56px!important\n  }\n\n  .v-application--is-rtl .me-xl-n14{\n    margin-left:-56px!important\n  }\n\n  .v-application--is-ltr .me-xl-n15{\n    margin-right:-60px!important\n  }\n\n  .v-application--is-rtl .me-xl-n15{\n    margin-left:-60px!important\n  }\n\n  .v-application--is-ltr .me-xl-n16{\n    margin-right:-64px!important\n  }\n\n  .v-application--is-rtl .me-xl-n16{\n    margin-left:-64px!important\n  }\n\n  .v-application .pa-xl-0{\n    padding:0!important\n  }\n\n  .v-application .pa-xl-1{\n    padding:4px!important\n  }\n\n  .v-application .pa-xl-2{\n    padding:8px!important\n  }\n\n  .v-application .pa-xl-3{\n    padding:12px!important\n  }\n\n  .v-application .pa-xl-4{\n    padding:16px!important\n  }\n\n  .v-application .pa-xl-5{\n    padding:20px!important\n  }\n\n  .v-application .pa-xl-6{\n    padding:24px!important\n  }\n\n  .v-application .pa-xl-7{\n    padding:28px!important\n  }\n\n  .v-application .pa-xl-8{\n    padding:32px!important\n  }\n\n  .v-application .pa-xl-9{\n    padding:36px!important\n  }\n\n  .v-application .pa-xl-10{\n    padding:40px!important\n  }\n\n  .v-application .pa-xl-11{\n    padding:44px!important\n  }\n\n  .v-application .pa-xl-12{\n    padding:48px!important\n  }\n\n  .v-application .pa-xl-13{\n    padding:52px!important\n  }\n\n  .v-application .pa-xl-14{\n    padding:56px!important\n  }\n\n  .v-application .pa-xl-15{\n    padding:60px!important\n  }\n\n  .v-application .pa-xl-16{\n    padding:64px!important\n  }\n\n  .v-application .px-xl-0{\n    padding-right:0!important;\n    padding-left:0!important\n  }\n\n  .v-application .px-xl-1{\n    padding-right:4px!important;\n    padding-left:4px!important\n  }\n\n  .v-application .px-xl-2{\n    padding-right:8px!important;\n    padding-left:8px!important\n  }\n\n  .v-application .px-xl-3{\n    padding-right:12px!important;\n    padding-left:12px!important\n  }\n\n  .v-application .px-xl-4{\n    padding-right:16px!important;\n    padding-left:16px!important\n  }\n\n  .v-application .px-xl-5{\n    padding-right:20px!important;\n    padding-left:20px!important\n  }\n\n  .v-application .px-xl-6{\n    padding-right:24px!important;\n    padding-left:24px!important\n  }\n\n  .v-application .px-xl-7{\n    padding-right:28px!important;\n    padding-left:28px!important\n  }\n\n  .v-application .px-xl-8{\n    padding-right:32px!important;\n    padding-left:32px!important\n  }\n\n  .v-application .px-xl-9{\n    padding-right:36px!important;\n    padding-left:36px!important\n  }\n\n  .v-application .px-xl-10{\n    padding-right:40px!important;\n    padding-left:40px!important\n  }\n\n  .v-application .px-xl-11{\n    padding-right:44px!important;\n    padding-left:44px!important\n  }\n\n  .v-application .px-xl-12{\n    padding-right:48px!important;\n    padding-left:48px!important\n  }\n\n  .v-application .px-xl-13{\n    padding-right:52px!important;\n    padding-left:52px!important\n  }\n\n  .v-application .px-xl-14{\n    padding-right:56px!important;\n    padding-left:56px!important\n  }\n\n  .v-application .px-xl-15{\n    padding-right:60px!important;\n    padding-left:60px!important\n  }\n\n  .v-application .px-xl-16{\n    padding-right:64px!important;\n    padding-left:64px!important\n  }\n\n  .v-application .py-xl-0{\n    padding-top:0!important;\n    padding-bottom:0!important\n  }\n\n  .v-application .py-xl-1{\n    padding-top:4px!important;\n    padding-bottom:4px!important\n  }\n\n  .v-application .py-xl-2{\n    padding-top:8px!important;\n    padding-bottom:8px!important\n  }\n\n  .v-application .py-xl-3{\n    padding-top:12px!important;\n    padding-bottom:12px!important\n  }\n\n  .v-application .py-xl-4{\n    padding-top:16px!important;\n    padding-bottom:16px!important\n  }\n\n  .v-application .py-xl-5{\n    padding-top:20px!important;\n    padding-bottom:20px!important\n  }\n\n  .v-application .py-xl-6{\n    padding-top:24px!important;\n    padding-bottom:24px!important\n  }\n\n  .v-application .py-xl-7{\n    padding-top:28px!important;\n    padding-bottom:28px!important\n  }\n\n  .v-application .py-xl-8{\n    padding-top:32px!important;\n    padding-bottom:32px!important\n  }\n\n  .v-application .py-xl-9{\n    padding-top:36px!important;\n    padding-bottom:36px!important\n  }\n\n  .v-application .py-xl-10{\n    padding-top:40px!important;\n    padding-bottom:40px!important\n  }\n\n  .v-application .py-xl-11{\n    padding-top:44px!important;\n    padding-bottom:44px!important\n  }\n\n  .v-application .py-xl-12{\n    padding-top:48px!important;\n    padding-bottom:48px!important\n  }\n\n  .v-application .py-xl-13{\n    padding-top:52px!important;\n    padding-bottom:52px!important\n  }\n\n  .v-application .py-xl-14{\n    padding-top:56px!important;\n    padding-bottom:56px!important\n  }\n\n  .v-application .py-xl-15{\n    padding-top:60px!important;\n    padding-bottom:60px!important\n  }\n\n  .v-application .py-xl-16{\n    padding-top:64px!important;\n    padding-bottom:64px!important\n  }\n\n  .v-application .pt-xl-0{\n    padding-top:0!important\n  }\n\n  .v-application .pt-xl-1{\n    padding-top:4px!important\n  }\n\n  .v-application .pt-xl-2{\n    padding-top:8px!important\n  }\n\n  .v-application .pt-xl-3{\n    padding-top:12px!important\n  }\n\n  .v-application .pt-xl-4{\n    padding-top:16px!important\n  }\n\n  .v-application .pt-xl-5{\n    padding-top:20px!important\n  }\n\n  .v-application .pt-xl-6{\n    padding-top:24px!important\n  }\n\n  .v-application .pt-xl-7{\n    padding-top:28px!important\n  }\n\n  .v-application .pt-xl-8{\n    padding-top:32px!important\n  }\n\n  .v-application .pt-xl-9{\n    padding-top:36px!important\n  }\n\n  .v-application .pt-xl-10{\n    padding-top:40px!important\n  }\n\n  .v-application .pt-xl-11{\n    padding-top:44px!important\n  }\n\n  .v-application .pt-xl-12{\n    padding-top:48px!important\n  }\n\n  .v-application .pt-xl-13{\n    padding-top:52px!important\n  }\n\n  .v-application .pt-xl-14{\n    padding-top:56px!important\n  }\n\n  .v-application .pt-xl-15{\n    padding-top:60px!important\n  }\n\n  .v-application .pt-xl-16{\n    padding-top:64px!important\n  }\n\n  .v-application .pr-xl-0{\n    padding-right:0!important\n  }\n\n  .v-application .pr-xl-1{\n    padding-right:4px!important\n  }\n\n  .v-application .pr-xl-2{\n    padding-right:8px!important\n  }\n\n  .v-application .pr-xl-3{\n    padding-right:12px!important\n  }\n\n  .v-application .pr-xl-4{\n    padding-right:16px!important\n  }\n\n  .v-application .pr-xl-5{\n    padding-right:20px!important\n  }\n\n  .v-application .pr-xl-6{\n    padding-right:24px!important\n  }\n\n  .v-application .pr-xl-7{\n    padding-right:28px!important\n  }\n\n  .v-application .pr-xl-8{\n    padding-right:32px!important\n  }\n\n  .v-application .pr-xl-9{\n    padding-right:36px!important\n  }\n\n  .v-application .pr-xl-10{\n    padding-right:40px!important\n  }\n\n  .v-application .pr-xl-11{\n    padding-right:44px!important\n  }\n\n  .v-application .pr-xl-12{\n    padding-right:48px!important\n  }\n\n  .v-application .pr-xl-13{\n    padding-right:52px!important\n  }\n\n  .v-application .pr-xl-14{\n    padding-right:56px!important\n  }\n\n  .v-application .pr-xl-15{\n    padding-right:60px!important\n  }\n\n  .v-application .pr-xl-16{\n    padding-right:64px!important\n  }\n\n  .v-application .pb-xl-0{\n    padding-bottom:0!important\n  }\n\n  .v-application .pb-xl-1{\n    padding-bottom:4px!important\n  }\n\n  .v-application .pb-xl-2{\n    padding-bottom:8px!important\n  }\n\n  .v-application .pb-xl-3{\n    padding-bottom:12px!important\n  }\n\n  .v-application .pb-xl-4{\n    padding-bottom:16px!important\n  }\n\n  .v-application .pb-xl-5{\n    padding-bottom:20px!important\n  }\n\n  .v-application .pb-xl-6{\n    padding-bottom:24px!important\n  }\n\n  .v-application .pb-xl-7{\n    padding-bottom:28px!important\n  }\n\n  .v-application .pb-xl-8{\n    padding-bottom:32px!important\n  }\n\n  .v-application .pb-xl-9{\n    padding-bottom:36px!important\n  }\n\n  .v-application .pb-xl-10{\n    padding-bottom:40px!important\n  }\n\n  .v-application .pb-xl-11{\n    padding-bottom:44px!important\n  }\n\n  .v-application .pb-xl-12{\n    padding-bottom:48px!important\n  }\n\n  .v-application .pb-xl-13{\n    padding-bottom:52px!important\n  }\n\n  .v-application .pb-xl-14{\n    padding-bottom:56px!important\n  }\n\n  .v-application .pb-xl-15{\n    padding-bottom:60px!important\n  }\n\n  .v-application .pb-xl-16{\n    padding-bottom:64px!important\n  }\n\n  .v-application .pl-xl-0{\n    padding-left:0!important\n  }\n\n  .v-application .pl-xl-1{\n    padding-left:4px!important\n  }\n\n  .v-application .pl-xl-2{\n    padding-left:8px!important\n  }\n\n  .v-application .pl-xl-3{\n    padding-left:12px!important\n  }\n\n  .v-application .pl-xl-4{\n    padding-left:16px!important\n  }\n\n  .v-application .pl-xl-5{\n    padding-left:20px!important\n  }\n\n  .v-application .pl-xl-6{\n    padding-left:24px!important\n  }\n\n  .v-application .pl-xl-7{\n    padding-left:28px!important\n  }\n\n  .v-application .pl-xl-8{\n    padding-left:32px!important\n  }\n\n  .v-application .pl-xl-9{\n    padding-left:36px!important\n  }\n\n  .v-application .pl-xl-10{\n    padding-left:40px!important\n  }\n\n  .v-application .pl-xl-11{\n    padding-left:44px!important\n  }\n\n  .v-application .pl-xl-12{\n    padding-left:48px!important\n  }\n\n  .v-application .pl-xl-13{\n    padding-left:52px!important\n  }\n\n  .v-application .pl-xl-14{\n    padding-left:56px!important\n  }\n\n  .v-application .pl-xl-15{\n    padding-left:60px!important\n  }\n\n  .v-application .pl-xl-16{\n    padding-left:64px!important\n  }\n\n  .v-application--is-ltr .ps-xl-0{\n    padding-left:0!important\n  }\n\n  .v-application--is-rtl .ps-xl-0{\n    padding-right:0!important\n  }\n\n  .v-application--is-ltr .ps-xl-1{\n    padding-left:4px!important\n  }\n\n  .v-application--is-rtl .ps-xl-1{\n    padding-right:4px!important\n  }\n\n  .v-application--is-ltr .ps-xl-2{\n    padding-left:8px!important\n  }\n\n  .v-application--is-rtl .ps-xl-2{\n    padding-right:8px!important\n  }\n\n  .v-application--is-ltr .ps-xl-3{\n    padding-left:12px!important\n  }\n\n  .v-application--is-rtl .ps-xl-3{\n    padding-right:12px!important\n  }\n\n  .v-application--is-ltr .ps-xl-4{\n    padding-left:16px!important\n  }\n\n  .v-application--is-rtl .ps-xl-4{\n    padding-right:16px!important\n  }\n\n  .v-application--is-ltr .ps-xl-5{\n    padding-left:20px!important\n  }\n\n  .v-application--is-rtl .ps-xl-5{\n    padding-right:20px!important\n  }\n\n  .v-application--is-ltr .ps-xl-6{\n    padding-left:24px!important\n  }\n\n  .v-application--is-rtl .ps-xl-6{\n    padding-right:24px!important\n  }\n\n  .v-application--is-ltr .ps-xl-7{\n    padding-left:28px!important\n  }\n\n  .v-application--is-rtl .ps-xl-7{\n    padding-right:28px!important\n  }\n\n  .v-application--is-ltr .ps-xl-8{\n    padding-left:32px!important\n  }\n\n  .v-application--is-rtl .ps-xl-8{\n    padding-right:32px!important\n  }\n\n  .v-application--is-ltr .ps-xl-9{\n    padding-left:36px!important\n  }\n\n  .v-application--is-rtl .ps-xl-9{\n    padding-right:36px!important\n  }\n\n  .v-application--is-ltr .ps-xl-10{\n    padding-left:40px!important\n  }\n\n  .v-application--is-rtl .ps-xl-10{\n    padding-right:40px!important\n  }\n\n  .v-application--is-ltr .ps-xl-11{\n    padding-left:44px!important\n  }\n\n  .v-application--is-rtl .ps-xl-11{\n    padding-right:44px!important\n  }\n\n  .v-application--is-ltr .ps-xl-12{\n    padding-left:48px!important\n  }\n\n  .v-application--is-rtl .ps-xl-12{\n    padding-right:48px!important\n  }\n\n  .v-application--is-ltr .ps-xl-13{\n    padding-left:52px!important\n  }\n\n  .v-application--is-rtl .ps-xl-13{\n    padding-right:52px!important\n  }\n\n  .v-application--is-ltr .ps-xl-14{\n    padding-left:56px!important\n  }\n\n  .v-application--is-rtl .ps-xl-14{\n    padding-right:56px!important\n  }\n\n  .v-application--is-ltr .ps-xl-15{\n    padding-left:60px!important\n  }\n\n  .v-application--is-rtl .ps-xl-15{\n    padding-right:60px!important\n  }\n\n  .v-application--is-ltr .ps-xl-16{\n    padding-left:64px!important\n  }\n\n  .v-application--is-rtl .ps-xl-16{\n    padding-right:64px!important\n  }\n\n  .v-application--is-ltr .pe-xl-0{\n    padding-right:0!important\n  }\n\n  .v-application--is-rtl .pe-xl-0{\n    padding-left:0!important\n  }\n\n  .v-application--is-ltr .pe-xl-1{\n    padding-right:4px!important\n  }\n\n  .v-application--is-rtl .pe-xl-1{\n    padding-left:4px!important\n  }\n\n  .v-application--is-ltr .pe-xl-2{\n    padding-right:8px!important\n  }\n\n  .v-application--is-rtl .pe-xl-2{\n    padding-left:8px!important\n  }\n\n  .v-application--is-ltr .pe-xl-3{\n    padding-right:12px!important\n  }\n\n  .v-application--is-rtl .pe-xl-3{\n    padding-left:12px!important\n  }\n\n  .v-application--is-ltr .pe-xl-4{\n    padding-right:16px!important\n  }\n\n  .v-application--is-rtl .pe-xl-4{\n    padding-left:16px!important\n  }\n\n  .v-application--is-ltr .pe-xl-5{\n    padding-right:20px!important\n  }\n\n  .v-application--is-rtl .pe-xl-5{\n    padding-left:20px!important\n  }\n\n  .v-application--is-ltr .pe-xl-6{\n    padding-right:24px!important\n  }\n\n  .v-application--is-rtl .pe-xl-6{\n    padding-left:24px!important\n  }\n\n  .v-application--is-ltr .pe-xl-7{\n    padding-right:28px!important\n  }\n\n  .v-application--is-rtl .pe-xl-7{\n    padding-left:28px!important\n  }\n\n  .v-application--is-ltr .pe-xl-8{\n    padding-right:32px!important\n  }\n\n  .v-application--is-rtl .pe-xl-8{\n    padding-left:32px!important\n  }\n\n  .v-application--is-ltr .pe-xl-9{\n    padding-right:36px!important\n  }\n\n  .v-application--is-rtl .pe-xl-9{\n    padding-left:36px!important\n  }\n\n  .v-application--is-ltr .pe-xl-10{\n    padding-right:40px!important\n  }\n\n  .v-application--is-rtl .pe-xl-10{\n    padding-left:40px!important\n  }\n\n  .v-application--is-ltr .pe-xl-11{\n    padding-right:44px!important\n  }\n\n  .v-application--is-rtl .pe-xl-11{\n    padding-left:44px!important\n  }\n\n  .v-application--is-ltr .pe-xl-12{\n    padding-right:48px!important\n  }\n\n  .v-application--is-rtl .pe-xl-12{\n    padding-left:48px!important\n  }\n\n  .v-application--is-ltr .pe-xl-13{\n    padding-right:52px!important\n  }\n\n  .v-application--is-rtl .pe-xl-13{\n    padding-left:52px!important\n  }\n\n  .v-application--is-ltr .pe-xl-14{\n    padding-right:56px!important\n  }\n\n  .v-application--is-rtl .pe-xl-14{\n    padding-left:56px!important\n  }\n\n  .v-application--is-ltr .pe-xl-15{\n    padding-right:60px!important\n  }\n\n  .v-application--is-rtl .pe-xl-15{\n    padding-left:60px!important\n  }\n\n  .v-application--is-ltr .pe-xl-16{\n    padding-right:64px!important\n  }\n\n  .v-application--is-rtl .pe-xl-16{\n    padding-left:64px!important\n  }\n\n  .v-application .text-xl-left{\n    text-align:left!important\n  }\n\n  .v-application .text-xl-right{\n    text-align:right!important\n  }\n\n  .v-application .text-xl-center{\n    text-align:center!important\n  }\n\n  .v-application .text-xl-justify{\n    text-align:justify!important\n  }\n\n  .v-application .text-xl-start{\n    text-align:start!important\n  }\n\n  .v-application .text-xl-end{\n    text-align:end!important\n  }\n\n  .v-application .text-xl-h1{\n    font-size:6rem!important;\n    line-height:6rem;\n    letter-spacing:-.015625em!important\n  }\n\n  .v-application .text-xl-h1,.v-application .text-xl-h2{\n    font-weight:300;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-xl-h2{\n    font-size:3.75rem!important;\n    line-height:3.75rem;\n    letter-spacing:-.0083333333em!important\n  }\n\n  .v-application .text-xl-h3{\n    font-size:3rem!important;\n    line-height:3.125rem;\n    letter-spacing:normal!important\n  }\n\n  .v-application .text-xl-h3,.v-application .text-xl-h4{\n    font-weight:400;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-xl-h4{\n    font-size:2.125rem!important;\n    line-height:2.5rem;\n    letter-spacing:.0073529412em!important\n  }\n\n  .v-application .text-xl-h5{\n    font-size:1.5rem!important;\n    font-weight:400;\n    letter-spacing:normal!important\n  }\n\n  .v-application .text-xl-h5,.v-application .text-xl-h6{\n    line-height:2rem;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-xl-h6{\n    font-size:1.25rem!important;\n    font-weight:500;\n    letter-spacing:.0125em!important\n  }\n\n  .v-application .text-xl-subtitle-1{\n    font-size:1rem!important;\n    font-weight:400;\n    line-height:1.75rem;\n    letter-spacing:.009375em!important;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-xl-subtitle-2{\n    font-size:.875rem!important;\n    font-weight:500;\n    line-height:1.375rem;\n    letter-spacing:.0071428571em!important;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-xl-body-1{\n    font-size:1rem!important;\n    font-weight:400;\n    line-height:1.5rem;\n    letter-spacing:.03125em!important;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-xl-body-2{\n    font-weight:400;\n    line-height:1.25rem;\n    letter-spacing:.0178571429em!important\n  }\n\n  .v-application .text-xl-body-2,.v-application .text-xl-button{\n    font-size:.875rem!important;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-xl-button{\n    font-weight:500;\n    line-height:2.25rem;\n    letter-spacing:.0892857143em!important;\n    text-transform:uppercase!important\n  }\n\n  .v-application .text-xl-caption{\n    font-weight:400;\n    line-height:1.25rem;\n    letter-spacing:.0333333333em!important\n  }\n\n  .v-application .text-xl-caption,.v-application .text-xl-overline{\n    font-size:.75rem!important;\n    font-family:\"Roboto\",sans-serif!important\n  }\n\n  .v-application .text-xl-overline{\n    font-weight:500;\n    line-height:2rem;\n    letter-spacing:.1666666667em!important;\n    text-transform:uppercase!important\n  }\n}\n\n@media print{\n  .v-application .d-print-none{\n    display:none!important\n  }\n\n  .v-application .d-print-inline{\n    display:inline!important\n  }\n\n  .v-application .d-print-inline-block{\n    display:inline-block!important\n  }\n\n  .v-application .d-print-block{\n    display:block!important\n  }\n\n  .v-application .d-print-table{\n    display:table!important\n  }\n\n  .v-application .d-print-table-row{\n    display:table-row!important\n  }\n\n  .v-application .d-print-table-cell{\n    display:table-cell!important\n  }\n\n  .v-application .d-print-flex{\n    display:flex!important\n  }\n\n  .v-application .d-print-inline-flex{\n    display:inline-flex!important\n  }\n\n  .v-application .float-print-none{\n    float:none!important\n  }\n\n  .v-application .float-print-left{\n    float:left!important\n  }\n\n  .v-application .float-print-right{\n    float:right!important\n  }\n\n  .v-application--is-rtl .float-print-end{\n    float:left!important\n  }\n\n  .v-application--is-ltr .float-print-end,.v-application--is-rtl .float-print-start{\n    float:right!important\n  }\n\n  .v-application--is-ltr .float-print-start{\n    float:left!important\n  }\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(52);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("ba837112", content, true)

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n\n.theme--light.v-image{\n  color:rgba(0,0,0,.87)\n}\n\n.theme--dark.v-image{\n  color:#fff\n}\n\n.v-image{\n  z-index:0\n}\n\n.v-image__image,.v-image__placeholder{\n  z-index:-1;\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%\n}\n\n.v-image__image{\n  background-repeat:no-repeat\n}\n\n.v-image__image--preload{\n  filter:blur(2px)\n}\n\n.v-image__image--contain{\n  background-size:contain\n}\n\n.v-image__image--cover{\n  background-size:cover\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("238364e8", content, true)

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n\n.v-responsive{\n  position:relative;\n  overflow:hidden;\n  flex:1 0 auto;\n  max-width:100%;\n  display:flex\n}\n\n.v-responsive__content{\n  flex:1 0 0px;\n  max-width:100%\n}\n\n.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{\n  margin-left:-100%\n}\n\n.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{\n  margin-right:-100%\n}\n\n.v-responsive__sizer{\n  transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);\n  flex:1 0 0px\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("11b94b9a", content, true)

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n\n.container.grow-shrink-0{\n  flex-grow:0;\n  flex-shrink:0\n}\n\n.container.fill-height{\n  align-items:center;\n  display:flex;\n  flex-wrap:wrap\n}\n\n.container.fill-height>.row{\n  flex:1 1 100%;\n  max-width:calc(100% + 24px)\n}\n\n.container.fill-height>.layout{\n  height:100%;\n  flex:1 1 auto\n}\n\n.container.fill-height>.layout.grow-shrink-0{\n  flex-grow:0;\n  flex-shrink:0\n}\n\n.container.grid-list-xs .layout .flex{\n  padding:1px\n}\n\n.container.grid-list-xs .layout:only-child{\n  margin:-1px\n}\n\n.container.grid-list-xs .layout:not(:only-child){\n  margin:auto -1px\n}\n\n.container.grid-list-xs :not(:only-child) .layout:first-child{\n  margin-top:-1px\n}\n\n.container.grid-list-xs :not(:only-child) .layout:last-child{\n  margin-bottom:-1px\n}\n\n.container.grid-list-sm .layout .flex{\n  padding:2px\n}\n\n.container.grid-list-sm .layout:only-child{\n  margin:-2px\n}\n\n.container.grid-list-sm .layout:not(:only-child){\n  margin:auto -2px\n}\n\n.container.grid-list-sm :not(:only-child) .layout:first-child{\n  margin-top:-2px\n}\n\n.container.grid-list-sm :not(:only-child) .layout:last-child{\n  margin-bottom:-2px\n}\n\n.container.grid-list-md .layout .flex{\n  padding:4px\n}\n\n.container.grid-list-md .layout:only-child{\n  margin:-4px\n}\n\n.container.grid-list-md .layout:not(:only-child){\n  margin:auto -4px\n}\n\n.container.grid-list-md :not(:only-child) .layout:first-child{\n  margin-top:-4px\n}\n\n.container.grid-list-md :not(:only-child) .layout:last-child{\n  margin-bottom:-4px\n}\n\n.container.grid-list-lg .layout .flex{\n  padding:8px\n}\n\n.container.grid-list-lg .layout:only-child{\n  margin:-8px\n}\n\n.container.grid-list-lg .layout:not(:only-child){\n  margin:auto -8px\n}\n\n.container.grid-list-lg :not(:only-child) .layout:first-child{\n  margin-top:-8px\n}\n\n.container.grid-list-lg :not(:only-child) .layout:last-child{\n  margin-bottom:-8px\n}\n\n.container.grid-list-xl .layout .flex{\n  padding:12px\n}\n\n.container.grid-list-xl .layout:only-child{\n  margin:-12px\n}\n\n.container.grid-list-xl .layout:not(:only-child){\n  margin:auto -12px\n}\n\n.container.grid-list-xl :not(:only-child) .layout:first-child{\n  margin-top:-12px\n}\n\n.container.grid-list-xl :not(:only-child) .layout:last-child{\n  margin-bottom:-12px\n}\n\n.layout{\n  display:flex;\n  flex:1 1 auto;\n  flex-wrap:nowrap;\n  min-width:0\n}\n\n.layout.reverse{\n  flex-direction:row-reverse\n}\n\n.layout.column{\n  flex-direction:column\n}\n\n.layout.column.reverse{\n  flex-direction:column-reverse\n}\n\n.layout.column>.flex{\n  max-width:100%\n}\n\n.layout.wrap{\n  flex-wrap:wrap\n}\n\n.layout.grow-shrink-0{\n  flex-grow:0;\n  flex-shrink:0\n}\n\n@media (min-width:0){\n  .flex.xs12{\n    flex-basis:100%;\n    flex-grow:0;\n    max-width:100%\n  }\n\n  .flex.order-xs12{\n    order:12\n  }\n\n  .flex.xs11{\n    flex-basis:91.6666666667%;\n    flex-grow:0;\n    max-width:91.6666666667%\n  }\n\n  .flex.order-xs11{\n    order:11\n  }\n\n  .flex.xs10{\n    flex-basis:83.3333333333%;\n    flex-grow:0;\n    max-width:83.3333333333%\n  }\n\n  .flex.order-xs10{\n    order:10\n  }\n\n  .flex.xs9{\n    flex-basis:75%;\n    flex-grow:0;\n    max-width:75%\n  }\n\n  .flex.order-xs9{\n    order:9\n  }\n\n  .flex.xs8{\n    flex-basis:66.6666666667%;\n    flex-grow:0;\n    max-width:66.6666666667%\n  }\n\n  .flex.order-xs8{\n    order:8\n  }\n\n  .flex.xs7{\n    flex-basis:58.3333333333%;\n    flex-grow:0;\n    max-width:58.3333333333%\n  }\n\n  .flex.order-xs7{\n    order:7\n  }\n\n  .flex.xs6{\n    flex-basis:50%;\n    flex-grow:0;\n    max-width:50%\n  }\n\n  .flex.order-xs6{\n    order:6\n  }\n\n  .flex.xs5{\n    flex-basis:41.6666666667%;\n    flex-grow:0;\n    max-width:41.6666666667%\n  }\n\n  .flex.order-xs5{\n    order:5\n  }\n\n  .flex.xs4{\n    flex-basis:33.3333333333%;\n    flex-grow:0;\n    max-width:33.3333333333%\n  }\n\n  .flex.order-xs4{\n    order:4\n  }\n\n  .flex.xs3{\n    flex-basis:25%;\n    flex-grow:0;\n    max-width:25%\n  }\n\n  .flex.order-xs3{\n    order:3\n  }\n\n  .flex.xs2{\n    flex-basis:16.6666666667%;\n    flex-grow:0;\n    max-width:16.6666666667%\n  }\n\n  .flex.order-xs2{\n    order:2\n  }\n\n  .flex.xs1{\n    flex-basis:8.3333333333%;\n    flex-grow:0;\n    max-width:8.3333333333%\n  }\n\n  .flex.order-xs1{\n    order:1\n  }\n\n  .v-application--is-ltr .flex.offset-xs12{\n    margin-left:100%\n  }\n\n  .v-application--is-rtl .flex.offset-xs12{\n    margin-right:100%\n  }\n\n  .v-application--is-ltr .flex.offset-xs11{\n    margin-left:91.6666666667%\n  }\n\n  .v-application--is-rtl .flex.offset-xs11{\n    margin-right:91.6666666667%\n  }\n\n  .v-application--is-ltr .flex.offset-xs10{\n    margin-left:83.3333333333%\n  }\n\n  .v-application--is-rtl .flex.offset-xs10{\n    margin-right:83.3333333333%\n  }\n\n  .v-application--is-ltr .flex.offset-xs9{\n    margin-left:75%\n  }\n\n  .v-application--is-rtl .flex.offset-xs9{\n    margin-right:75%\n  }\n\n  .v-application--is-ltr .flex.offset-xs8{\n    margin-left:66.6666666667%\n  }\n\n  .v-application--is-rtl .flex.offset-xs8{\n    margin-right:66.6666666667%\n  }\n\n  .v-application--is-ltr .flex.offset-xs7{\n    margin-left:58.3333333333%\n  }\n\n  .v-application--is-rtl .flex.offset-xs7{\n    margin-right:58.3333333333%\n  }\n\n  .v-application--is-ltr .flex.offset-xs6{\n    margin-left:50%\n  }\n\n  .v-application--is-rtl .flex.offset-xs6{\n    margin-right:50%\n  }\n\n  .v-application--is-ltr .flex.offset-xs5{\n    margin-left:41.6666666667%\n  }\n\n  .v-application--is-rtl .flex.offset-xs5{\n    margin-right:41.6666666667%\n  }\n\n  .v-application--is-ltr .flex.offset-xs4{\n    margin-left:33.3333333333%\n  }\n\n  .v-application--is-rtl .flex.offset-xs4{\n    margin-right:33.3333333333%\n  }\n\n  .v-application--is-ltr .flex.offset-xs3{\n    margin-left:25%\n  }\n\n  .v-application--is-rtl .flex.offset-xs3{\n    margin-right:25%\n  }\n\n  .v-application--is-ltr .flex.offset-xs2{\n    margin-left:16.6666666667%\n  }\n\n  .v-application--is-rtl .flex.offset-xs2{\n    margin-right:16.6666666667%\n  }\n\n  .v-application--is-ltr .flex.offset-xs1{\n    margin-left:8.3333333333%\n  }\n\n  .v-application--is-rtl .flex.offset-xs1{\n    margin-right:8.3333333333%\n  }\n\n  .v-application--is-ltr .flex.offset-xs0{\n    margin-left:0\n  }\n\n  .v-application--is-rtl .flex.offset-xs0{\n    margin-right:0\n  }\n}\n\n@media (min-width:600px){\n  .flex.sm12{\n    flex-basis:100%;\n    flex-grow:0;\n    max-width:100%\n  }\n\n  .flex.order-sm12{\n    order:12\n  }\n\n  .flex.sm11{\n    flex-basis:91.6666666667%;\n    flex-grow:0;\n    max-width:91.6666666667%\n  }\n\n  .flex.order-sm11{\n    order:11\n  }\n\n  .flex.sm10{\n    flex-basis:83.3333333333%;\n    flex-grow:0;\n    max-width:83.3333333333%\n  }\n\n  .flex.order-sm10{\n    order:10\n  }\n\n  .flex.sm9{\n    flex-basis:75%;\n    flex-grow:0;\n    max-width:75%\n  }\n\n  .flex.order-sm9{\n    order:9\n  }\n\n  .flex.sm8{\n    flex-basis:66.6666666667%;\n    flex-grow:0;\n    max-width:66.6666666667%\n  }\n\n  .flex.order-sm8{\n    order:8\n  }\n\n  .flex.sm7{\n    flex-basis:58.3333333333%;\n    flex-grow:0;\n    max-width:58.3333333333%\n  }\n\n  .flex.order-sm7{\n    order:7\n  }\n\n  .flex.sm6{\n    flex-basis:50%;\n    flex-grow:0;\n    max-width:50%\n  }\n\n  .flex.order-sm6{\n    order:6\n  }\n\n  .flex.sm5{\n    flex-basis:41.6666666667%;\n    flex-grow:0;\n    max-width:41.6666666667%\n  }\n\n  .flex.order-sm5{\n    order:5\n  }\n\n  .flex.sm4{\n    flex-basis:33.3333333333%;\n    flex-grow:0;\n    max-width:33.3333333333%\n  }\n\n  .flex.order-sm4{\n    order:4\n  }\n\n  .flex.sm3{\n    flex-basis:25%;\n    flex-grow:0;\n    max-width:25%\n  }\n\n  .flex.order-sm3{\n    order:3\n  }\n\n  .flex.sm2{\n    flex-basis:16.6666666667%;\n    flex-grow:0;\n    max-width:16.6666666667%\n  }\n\n  .flex.order-sm2{\n    order:2\n  }\n\n  .flex.sm1{\n    flex-basis:8.3333333333%;\n    flex-grow:0;\n    max-width:8.3333333333%\n  }\n\n  .flex.order-sm1{\n    order:1\n  }\n\n  .v-application--is-ltr .flex.offset-sm12{\n    margin-left:100%\n  }\n\n  .v-application--is-rtl .flex.offset-sm12{\n    margin-right:100%\n  }\n\n  .v-application--is-ltr .flex.offset-sm11{\n    margin-left:91.6666666667%\n  }\n\n  .v-application--is-rtl .flex.offset-sm11{\n    margin-right:91.6666666667%\n  }\n\n  .v-application--is-ltr .flex.offset-sm10{\n    margin-left:83.3333333333%\n  }\n\n  .v-application--is-rtl .flex.offset-sm10{\n    margin-right:83.3333333333%\n  }\n\n  .v-application--is-ltr .flex.offset-sm9{\n    margin-left:75%\n  }\n\n  .v-application--is-rtl .flex.offset-sm9{\n    margin-right:75%\n  }\n\n  .v-application--is-ltr .flex.offset-sm8{\n    margin-left:66.6666666667%\n  }\n\n  .v-application--is-rtl .flex.offset-sm8{\n    margin-right:66.6666666667%\n  }\n\n  .v-application--is-ltr .flex.offset-sm7{\n    margin-left:58.3333333333%\n  }\n\n  .v-application--is-rtl .flex.offset-sm7{\n    margin-right:58.3333333333%\n  }\n\n  .v-application--is-ltr .flex.offset-sm6{\n    margin-left:50%\n  }\n\n  .v-application--is-rtl .flex.offset-sm6{\n    margin-right:50%\n  }\n\n  .v-application--is-ltr .flex.offset-sm5{\n    margin-left:41.6666666667%\n  }\n\n  .v-application--is-rtl .flex.offset-sm5{\n    margin-right:41.6666666667%\n  }\n\n  .v-application--is-ltr .flex.offset-sm4{\n    margin-left:33.3333333333%\n  }\n\n  .v-application--is-rtl .flex.offset-sm4{\n    margin-right:33.3333333333%\n  }\n\n  .v-application--is-ltr .flex.offset-sm3{\n    margin-left:25%\n  }\n\n  .v-application--is-rtl .flex.offset-sm3{\n    margin-right:25%\n  }\n\n  .v-application--is-ltr .flex.offset-sm2{\n    margin-left:16.6666666667%\n  }\n\n  .v-application--is-rtl .flex.offset-sm2{\n    margin-right:16.6666666667%\n  }\n\n  .v-application--is-ltr .flex.offset-sm1{\n    margin-left:8.3333333333%\n  }\n\n  .v-application--is-rtl .flex.offset-sm1{\n    margin-right:8.3333333333%\n  }\n\n  .v-application--is-ltr .flex.offset-sm0{\n    margin-left:0\n  }\n\n  .v-application--is-rtl .flex.offset-sm0{\n    margin-right:0\n  }\n}\n\n@media (min-width:960px){\n  .flex.md12{\n    flex-basis:100%;\n    flex-grow:0;\n    max-width:100%\n  }\n\n  .flex.order-md12{\n    order:12\n  }\n\n  .flex.md11{\n    flex-basis:91.6666666667%;\n    flex-grow:0;\n    max-width:91.6666666667%\n  }\n\n  .flex.order-md11{\n    order:11\n  }\n\n  .flex.md10{\n    flex-basis:83.3333333333%;\n    flex-grow:0;\n    max-width:83.3333333333%\n  }\n\n  .flex.order-md10{\n    order:10\n  }\n\n  .flex.md9{\n    flex-basis:75%;\n    flex-grow:0;\n    max-width:75%\n  }\n\n  .flex.order-md9{\n    order:9\n  }\n\n  .flex.md8{\n    flex-basis:66.6666666667%;\n    flex-grow:0;\n    max-width:66.6666666667%\n  }\n\n  .flex.order-md8{\n    order:8\n  }\n\n  .flex.md7{\n    flex-basis:58.3333333333%;\n    flex-grow:0;\n    max-width:58.3333333333%\n  }\n\n  .flex.order-md7{\n    order:7\n  }\n\n  .flex.md6{\n    flex-basis:50%;\n    flex-grow:0;\n    max-width:50%\n  }\n\n  .flex.order-md6{\n    order:6\n  }\n\n  .flex.md5{\n    flex-basis:41.6666666667%;\n    flex-grow:0;\n    max-width:41.6666666667%\n  }\n\n  .flex.order-md5{\n    order:5\n  }\n\n  .flex.md4{\n    flex-basis:33.3333333333%;\n    flex-grow:0;\n    max-width:33.3333333333%\n  }\n\n  .flex.order-md4{\n    order:4\n  }\n\n  .flex.md3{\n    flex-basis:25%;\n    flex-grow:0;\n    max-width:25%\n  }\n\n  .flex.order-md3{\n    order:3\n  }\n\n  .flex.md2{\n    flex-basis:16.6666666667%;\n    flex-grow:0;\n    max-width:16.6666666667%\n  }\n\n  .flex.order-md2{\n    order:2\n  }\n\n  .flex.md1{\n    flex-basis:8.3333333333%;\n    flex-grow:0;\n    max-width:8.3333333333%\n  }\n\n  .flex.order-md1{\n    order:1\n  }\n\n  .v-application--is-ltr .flex.offset-md12{\n    margin-left:100%\n  }\n\n  .v-application--is-rtl .flex.offset-md12{\n    margin-right:100%\n  }\n\n  .v-application--is-ltr .flex.offset-md11{\n    margin-left:91.6666666667%\n  }\n\n  .v-application--is-rtl .flex.offset-md11{\n    margin-right:91.6666666667%\n  }\n\n  .v-application--is-ltr .flex.offset-md10{\n    margin-left:83.3333333333%\n  }\n\n  .v-application--is-rtl .flex.offset-md10{\n    margin-right:83.3333333333%\n  }\n\n  .v-application--is-ltr .flex.offset-md9{\n    margin-left:75%\n  }\n\n  .v-application--is-rtl .flex.offset-md9{\n    margin-right:75%\n  }\n\n  .v-application--is-ltr .flex.offset-md8{\n    margin-left:66.6666666667%\n  }\n\n  .v-application--is-rtl .flex.offset-md8{\n    margin-right:66.6666666667%\n  }\n\n  .v-application--is-ltr .flex.offset-md7{\n    margin-left:58.3333333333%\n  }\n\n  .v-application--is-rtl .flex.offset-md7{\n    margin-right:58.3333333333%\n  }\n\n  .v-application--is-ltr .flex.offset-md6{\n    margin-left:50%\n  }\n\n  .v-application--is-rtl .flex.offset-md6{\n    margin-right:50%\n  }\n\n  .v-application--is-ltr .flex.offset-md5{\n    margin-left:41.6666666667%\n  }\n\n  .v-application--is-rtl .flex.offset-md5{\n    margin-right:41.6666666667%\n  }\n\n  .v-application--is-ltr .flex.offset-md4{\n    margin-left:33.3333333333%\n  }\n\n  .v-application--is-rtl .flex.offset-md4{\n    margin-right:33.3333333333%\n  }\n\n  .v-application--is-ltr .flex.offset-md3{\n    margin-left:25%\n  }\n\n  .v-application--is-rtl .flex.offset-md3{\n    margin-right:25%\n  }\n\n  .v-application--is-ltr .flex.offset-md2{\n    margin-left:16.6666666667%\n  }\n\n  .v-application--is-rtl .flex.offset-md2{\n    margin-right:16.6666666667%\n  }\n\n  .v-application--is-ltr .flex.offset-md1{\n    margin-left:8.3333333333%\n  }\n\n  .v-application--is-rtl .flex.offset-md1{\n    margin-right:8.3333333333%\n  }\n\n  .v-application--is-ltr .flex.offset-md0{\n    margin-left:0\n  }\n\n  .v-application--is-rtl .flex.offset-md0{\n    margin-right:0\n  }\n}\n\n@media (min-width:1264px){\n  .flex.lg12{\n    flex-basis:100%;\n    flex-grow:0;\n    max-width:100%\n  }\n\n  .flex.order-lg12{\n    order:12\n  }\n\n  .flex.lg11{\n    flex-basis:91.6666666667%;\n    flex-grow:0;\n    max-width:91.6666666667%\n  }\n\n  .flex.order-lg11{\n    order:11\n  }\n\n  .flex.lg10{\n    flex-basis:83.3333333333%;\n    flex-grow:0;\n    max-width:83.3333333333%\n  }\n\n  .flex.order-lg10{\n    order:10\n  }\n\n  .flex.lg9{\n    flex-basis:75%;\n    flex-grow:0;\n    max-width:75%\n  }\n\n  .flex.order-lg9{\n    order:9\n  }\n\n  .flex.lg8{\n    flex-basis:66.6666666667%;\n    flex-grow:0;\n    max-width:66.6666666667%\n  }\n\n  .flex.order-lg8{\n    order:8\n  }\n\n  .flex.lg7{\n    flex-basis:58.3333333333%;\n    flex-grow:0;\n    max-width:58.3333333333%\n  }\n\n  .flex.order-lg7{\n    order:7\n  }\n\n  .flex.lg6{\n    flex-basis:50%;\n    flex-grow:0;\n    max-width:50%\n  }\n\n  .flex.order-lg6{\n    order:6\n  }\n\n  .flex.lg5{\n    flex-basis:41.6666666667%;\n    flex-grow:0;\n    max-width:41.6666666667%\n  }\n\n  .flex.order-lg5{\n    order:5\n  }\n\n  .flex.lg4{\n    flex-basis:33.3333333333%;\n    flex-grow:0;\n    max-width:33.3333333333%\n  }\n\n  .flex.order-lg4{\n    order:4\n  }\n\n  .flex.lg3{\n    flex-basis:25%;\n    flex-grow:0;\n    max-width:25%\n  }\n\n  .flex.order-lg3{\n    order:3\n  }\n\n  .flex.lg2{\n    flex-basis:16.6666666667%;\n    flex-grow:0;\n    max-width:16.6666666667%\n  }\n\n  .flex.order-lg2{\n    order:2\n  }\n\n  .flex.lg1{\n    flex-basis:8.3333333333%;\n    flex-grow:0;\n    max-width:8.3333333333%\n  }\n\n  .flex.order-lg1{\n    order:1\n  }\n\n  .v-application--is-ltr .flex.offset-lg12{\n    margin-left:100%\n  }\n\n  .v-application--is-rtl .flex.offset-lg12{\n    margin-right:100%\n  }\n\n  .v-application--is-ltr .flex.offset-lg11{\n    margin-left:91.6666666667%\n  }\n\n  .v-application--is-rtl .flex.offset-lg11{\n    margin-right:91.6666666667%\n  }\n\n  .v-application--is-ltr .flex.offset-lg10{\n    margin-left:83.3333333333%\n  }\n\n  .v-application--is-rtl .flex.offset-lg10{\n    margin-right:83.3333333333%\n  }\n\n  .v-application--is-ltr .flex.offset-lg9{\n    margin-left:75%\n  }\n\n  .v-application--is-rtl .flex.offset-lg9{\n    margin-right:75%\n  }\n\n  .v-application--is-ltr .flex.offset-lg8{\n    margin-left:66.6666666667%\n  }\n\n  .v-application--is-rtl .flex.offset-lg8{\n    margin-right:66.6666666667%\n  }\n\n  .v-application--is-ltr .flex.offset-lg7{\n    margin-left:58.3333333333%\n  }\n\n  .v-application--is-rtl .flex.offset-lg7{\n    margin-right:58.3333333333%\n  }\n\n  .v-application--is-ltr .flex.offset-lg6{\n    margin-left:50%\n  }\n\n  .v-application--is-rtl .flex.offset-lg6{\n    margin-right:50%\n  }\n\n  .v-application--is-ltr .flex.offset-lg5{\n    margin-left:41.6666666667%\n  }\n\n  .v-application--is-rtl .flex.offset-lg5{\n    margin-right:41.6666666667%\n  }\n\n  .v-application--is-ltr .flex.offset-lg4{\n    margin-left:33.3333333333%\n  }\n\n  .v-application--is-rtl .flex.offset-lg4{\n    margin-right:33.3333333333%\n  }\n\n  .v-application--is-ltr .flex.offset-lg3{\n    margin-left:25%\n  }\n\n  .v-application--is-rtl .flex.offset-lg3{\n    margin-right:25%\n  }\n\n  .v-application--is-ltr .flex.offset-lg2{\n    margin-left:16.6666666667%\n  }\n\n  .v-application--is-rtl .flex.offset-lg2{\n    margin-right:16.6666666667%\n  }\n\n  .v-application--is-ltr .flex.offset-lg1{\n    margin-left:8.3333333333%\n  }\n\n  .v-application--is-rtl .flex.offset-lg1{\n    margin-right:8.3333333333%\n  }\n\n  .v-application--is-ltr .flex.offset-lg0{\n    margin-left:0\n  }\n\n  .v-application--is-rtl .flex.offset-lg0{\n    margin-right:0\n  }\n}\n\n@media (min-width:1904px){\n  .flex.xl12{\n    flex-basis:100%;\n    flex-grow:0;\n    max-width:100%\n  }\n\n  .flex.order-xl12{\n    order:12\n  }\n\n  .flex.xl11{\n    flex-basis:91.6666666667%;\n    flex-grow:0;\n    max-width:91.6666666667%\n  }\n\n  .flex.order-xl11{\n    order:11\n  }\n\n  .flex.xl10{\n    flex-basis:83.3333333333%;\n    flex-grow:0;\n    max-width:83.3333333333%\n  }\n\n  .flex.order-xl10{\n    order:10\n  }\n\n  .flex.xl9{\n    flex-basis:75%;\n    flex-grow:0;\n    max-width:75%\n  }\n\n  .flex.order-xl9{\n    order:9\n  }\n\n  .flex.xl8{\n    flex-basis:66.6666666667%;\n    flex-grow:0;\n    max-width:66.6666666667%\n  }\n\n  .flex.order-xl8{\n    order:8\n  }\n\n  .flex.xl7{\n    flex-basis:58.3333333333%;\n    flex-grow:0;\n    max-width:58.3333333333%\n  }\n\n  .flex.order-xl7{\n    order:7\n  }\n\n  .flex.xl6{\n    flex-basis:50%;\n    flex-grow:0;\n    max-width:50%\n  }\n\n  .flex.order-xl6{\n    order:6\n  }\n\n  .flex.xl5{\n    flex-basis:41.6666666667%;\n    flex-grow:0;\n    max-width:41.6666666667%\n  }\n\n  .flex.order-xl5{\n    order:5\n  }\n\n  .flex.xl4{\n    flex-basis:33.3333333333%;\n    flex-grow:0;\n    max-width:33.3333333333%\n  }\n\n  .flex.order-xl4{\n    order:4\n  }\n\n  .flex.xl3{\n    flex-basis:25%;\n    flex-grow:0;\n    max-width:25%\n  }\n\n  .flex.order-xl3{\n    order:3\n  }\n\n  .flex.xl2{\n    flex-basis:16.6666666667%;\n    flex-grow:0;\n    max-width:16.6666666667%\n  }\n\n  .flex.order-xl2{\n    order:2\n  }\n\n  .flex.xl1{\n    flex-basis:8.3333333333%;\n    flex-grow:0;\n    max-width:8.3333333333%\n  }\n\n  .flex.order-xl1{\n    order:1\n  }\n\n  .v-application--is-ltr .flex.offset-xl12{\n    margin-left:100%\n  }\n\n  .v-application--is-rtl .flex.offset-xl12{\n    margin-right:100%\n  }\n\n  .v-application--is-ltr .flex.offset-xl11{\n    margin-left:91.6666666667%\n  }\n\n  .v-application--is-rtl .flex.offset-xl11{\n    margin-right:91.6666666667%\n  }\n\n  .v-application--is-ltr .flex.offset-xl10{\n    margin-left:83.3333333333%\n  }\n\n  .v-application--is-rtl .flex.offset-xl10{\n    margin-right:83.3333333333%\n  }\n\n  .v-application--is-ltr .flex.offset-xl9{\n    margin-left:75%\n  }\n\n  .v-application--is-rtl .flex.offset-xl9{\n    margin-right:75%\n  }\n\n  .v-application--is-ltr .flex.offset-xl8{\n    margin-left:66.6666666667%\n  }\n\n  .v-application--is-rtl .flex.offset-xl8{\n    margin-right:66.6666666667%\n  }\n\n  .v-application--is-ltr .flex.offset-xl7{\n    margin-left:58.3333333333%\n  }\n\n  .v-application--is-rtl .flex.offset-xl7{\n    margin-right:58.3333333333%\n  }\n\n  .v-application--is-ltr .flex.offset-xl6{\n    margin-left:50%\n  }\n\n  .v-application--is-rtl .flex.offset-xl6{\n    margin-right:50%\n  }\n\n  .v-application--is-ltr .flex.offset-xl5{\n    margin-left:41.6666666667%\n  }\n\n  .v-application--is-rtl .flex.offset-xl5{\n    margin-right:41.6666666667%\n  }\n\n  .v-application--is-ltr .flex.offset-xl4{\n    margin-left:33.3333333333%\n  }\n\n  .v-application--is-rtl .flex.offset-xl4{\n    margin-right:33.3333333333%\n  }\n\n  .v-application--is-ltr .flex.offset-xl3{\n    margin-left:25%\n  }\n\n  .v-application--is-rtl .flex.offset-xl3{\n    margin-right:25%\n  }\n\n  .v-application--is-ltr .flex.offset-xl2{\n    margin-left:16.6666666667%\n  }\n\n  .v-application--is-rtl .flex.offset-xl2{\n    margin-right:16.6666666667%\n  }\n\n  .v-application--is-ltr .flex.offset-xl1{\n    margin-left:8.3333333333%\n  }\n\n  .v-application--is-rtl .flex.offset-xl1{\n    margin-right:8.3333333333%\n  }\n\n  .v-application--is-ltr .flex.offset-xl0{\n    margin-left:0\n  }\n\n  .v-application--is-rtl .flex.offset-xl0{\n    margin-right:0\n  }\n}\n\n.child-flex>*,.flex{\n  flex:1 1 auto;\n  max-width:100%\n}\n\n.child-flex>.grow-shrink-0,.flex.grow-shrink-0{\n  flex-grow:0;\n  flex-shrink:0\n}\n\n.grow,.spacer{\n  flex-grow:1!important\n}\n\n.grow{\n  flex-shrink:0!important\n}\n\n.shrink{\n  flex-grow:0!important;\n  flex-shrink:1!important\n}\n\n.fill-height{\n  height:100%\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n.twitter{\n  text-align:center\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("79aebad6", content, true)

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*purgecss start ignore*/\n\n.theme--light.v-application{\n  background:#fff;\n  color:rgba(0,0,0,.87)\n}\n\n.theme--light.v-application .text--primary{\n  color:rgba(0,0,0,.87)!important\n}\n\n.theme--light.v-application .text--secondary{\n  color:rgba(0,0,0,.6)!important\n}\n\n.theme--light.v-application .text--disabled{\n  color:rgba(0,0,0,.38)!important\n}\n\n.theme--dark.v-application{\n  background:#121212;\n  color:#fff\n}\n\n.theme--dark.v-application .text--primary{\n  color:#fff!important\n}\n\n.theme--dark.v-application .text--secondary{\n  color:hsla(0,0%,100%,.7)!important\n}\n\n.theme--dark.v-application .text--disabled{\n  color:hsla(0,0%,100%,.5)!important\n}\n\n.v-application{\n  display:flex;\n  position:relative\n}\n\n.v-application a{\n  cursor:pointer\n}\n\n.v-application--is-rtl{\n  direction:rtl\n}\n\n.v-application--wrap{\n  flex:1 1 auto;\n  -webkit-backface-visibility:hidden;\n          backface-visibility:hidden;\n  display:flex;\n  flex-direction:column;\n  min-height:100vh;\n  max-width:100%;\n  position:relative\n}\n\n@-moz-document url-prefix(){\n  @media print{\n    .v-application,.v-application--wrap{\n      display:block\n    }\n  }\n}\n\n/*purgecss end ignore*/", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "BaseAppFooter", function() { return BaseAppFooter; });
__webpack_require__.d(components_namespaceObject, "BaseAppHeader", function() { return BaseAppHeader; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(3);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(29);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(30);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(16);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(14);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(17);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _3ac6a66d = () => interopDefault(__webpack_require__.e(/* import() | pages/manage */ 4).then(__webpack_require__.bind(null, 101)));

const _34423b40 = () => interopDefault(__webpack_require__.e(/* import() | pages/projects/index */ 5).then(__webpack_require__.bind(null, 102)));

const _2e015bc0 = () => interopDefault(__webpack_require__.e(/* import() | pages/twitter/callback */ 6).then(__webpack_require__.bind(null, 103)));

const _7a52b37a = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 3).then(__webpack_require__.bind(null, 105)));

const _12a7c5e0 = () => interopDefault(__webpack_require__.e(/* import() | pages/_project/index */ 1).then(__webpack_require__.bind(null, 100)));

const _3dd0391a = () => interopDefault(__webpack_require__.e(/* import() | pages/_project/sales */ 2).then(__webpack_require__.bind(null, 104)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/manage",
    component: _3ac6a66d,
    name: "manage"
  }, {
    path: "/projects",
    component: _34423b40,
    name: "projects"
  }, {
    path: "/twitter/callback",
    component: _2e015bc0,
    name: "twitter-callback"
  }, {
    path: "/",
    component: _7a52b37a,
    name: "index"
  }, {
    path: "/:project",
    component: _12a7c5e0,
    name: "project"
  }, {
    path: "/:project/sales",
    component: _3dd0391a,
    name: "project-sales"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(35)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1dfa047e"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "043c4b9c"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/@nuxtjs/tailwindcss/dist/runtime/tailwind.css
var tailwind = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=56c20c60&
var defaultvue_type_template_id_56c20c60_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('div',{staticClass:"bg-gray-100 flex-col h-screen"},[_c('AppHeader'),_vm._v(" "),_c('div',{staticClass:"flex justify-center items-center flex-col mt-5 mr-5 ml-5"},[_c('div',{staticClass:"w-full max-w-2xl"},[_c('div',{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},[_c('Nuxt')],1)])]),_vm._v(" "),_c('div',{staticClass:"flex flex-grow"}),_vm._v(" "),_c('AppFooter')],1)])}
var defaultvue_type_template_id_56c20c60_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=56c20c60&

// EXTERNAL MODULE: ./components/base/AppHeader.vue + 15 modules
var AppHeader = __webpack_require__(31);

// EXTERNAL MODULE: ./components/base/AppFooter.vue + 2 modules
var AppFooter = __webpack_require__(32);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=ts&



/* harmony default export */ var defaultvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  components: {
    AppHeader: AppHeader["default"],
    AppFooter: AppFooter["default"]
  }
}));
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=ts&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_ts_ = (defaultvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(12);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VApp/VApp.sass
var VApp = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/themeable/index.js
var themeable = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
// Styles
 // Mixins

 // Utilities


/* @vue/component */

/* harmony default export */ var VApp_VApp = (Object(mixins["a" /* default */])(themeable["a" /* default */]).extend({
  name: 'v-app',
  props: {
    dark: {
      type: Boolean,
      default: undefined
    },
    id: {
      type: String,
      default: 'app'
    },
    light: {
      type: Boolean,
      default: undefined
    }
  },
  computed: {
    isDark() {
      return this.$vuetify.theme.dark;
    }

  },

  beforeCreate() {
    if (!this.$vuetify || this.$vuetify === this.$root) {
      throw new Error('Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object');
    }
  },

  render(h) {
    const wrapper = h('div', {
      staticClass: 'v-application--wrap'
    }, this.$slots.default);
    return h('div', {
      staticClass: 'v-application',
      class: {
        'v-application--is-rtl': this.$vuetify.rtl,
        'v-application--is-ltr': !this.$vuetify.rtl,
        ...this.themeClasses
      },
      attrs: {
        'data-app': true
      },
      domProps: {
        id: this.id
      }
    }, [wrapper]);
  }

}));
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_ts_,
  defaultvue_type_template_id_56c20c60_render,
  defaultvue_type_template_id_56c20c60_staticRenderFns,
  false,
  null,
  null,
  "541060da"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* vuetify-loader */


installComponents_default()(default_component, {VApp: VApp_VApp})

// CONCATENATED MODULE: ./.nuxt/App.js







const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/components/index.js
const BaseAppFooter = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 32)).then(c => wrapFunctional(c.default || c));
const BaseAppHeader = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 31)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: ./node_modules/vuetify/lib/framework.js + 22 modules
var framework = __webpack_require__(11);

// CONCATENATED MODULE: ./.nuxt/vuetify/options.js
/* harmony default export */ var options = ({
  breakpoint: {},
  icons: {},
  lang: {},
  theme: {}
});
// CONCATENATED MODULE: ./.nuxt/vuetify/plugin.js



external_vue_default.a.use(framework["a" /* default */], {});
/* harmony default export */ var vuetify_plugin = (ctx => {
  const vuetifyOptions = typeof options === 'function' ? options(ctx) : options;
  vuetifyOptions.icons = vuetifyOptions.icons || {};
  vuetifyOptions.icons.iconfont = 'mdi';
  const vuetify = new framework["a" /* default */](vuetifyOptions);
  ctx.app.vuetify = vuetify;
  ctx.$vuetify = vuetify.framework;
});
// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')

 // Source: .\\vuetify\\plugin.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "Degenz Tools | Solana Tools",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "content": "Degenz Tools | Solana Tools",
        "property": "og:site_name"
      }, {
        "content": "Discord Verification Service",
        "property": "og:title"
      }, {
        "content": "Verify your Solana wallet holds the Discord project's NFT to gain exclusive roles. Service provided by NFT 4 Cause, where every NFT minted or traded on a secondary market is an 80% donation! Everything else funds the development of tools like this to enhance the Solana community.",
        "property": "og:description"
      }, {
        "content": "https:\u002F\u002Fwww.nft4cause.app\u002Fimg\u002Fnft4c-governance-token.png",
        "property": "og:image"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "rel": "stylesheet",
        "type": "text\u002Fcss",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"
      }, {
        "rel": "stylesheet",
        "type": "text\u002Fcss",
        "href": "https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"
      }],
      "style": [],
      "script": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof vuetify_plugin === 'function') {
    await vuetify_plugin(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("@solflare-wallet/sdk");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("base58-js");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("human-date");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map