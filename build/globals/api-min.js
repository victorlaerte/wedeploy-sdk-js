this.launchpad=this.launchpad||{},this.launchpadNamed=this.launchpadNamed||{},function(e){var t=e.babelHelpers={};t.inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},t.createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),t.toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},t.bind=Function.prototype.bind,t.get=function n(e,t,r){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,t);if(void 0===a){var i=Object.getPrototypeOf(e);return null===i?void 0:n(i,t,r)}if("value"in a)return a.value;var s=a.get;return void 0===s?void 0:s.call(r)},t.classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}("undefined"==typeof global?self:global),function(){"use strict";var e=function(){function e(){babelHelpers.classCallCheck(this,e)}return babelHelpers.createClass(e,null,[{key:"abstractMethod",value:function(){throw Error("Unimplemented abstract method")}},{key:"collectSuperClassesProperty",value:function(e,t){for(var n=[e[t]];e.__proto__&&!e.__proto__.isPrototypeOf(Function);)e=e.__proto__,n.push(e[t]);return n}},{key:"getUid",value:function(t){return t?t[e.UID_PROPERTY]||(t[e.UID_PROPERTY]=e.uniqueIdCounter_++):e.uniqueIdCounter_++}},{key:"identityFunction",value:function(e){return e}},{key:"isBoolean",value:function(e){return"boolean"==typeof e}},{key:"isDef",value:function(e){return void 0!==e}},{key:"isDefAndNotNull",value:function(t){return e.isDef(t)&&!e.isNull(t)}},{key:"isDocument",value:function(e){return e&&"object"==typeof e&&9===e.nodeType}},{key:"isElement",value:function(e){return e&&"object"==typeof e&&1===e.nodeType}},{key:"isFunction",value:function(e){return"function"==typeof e}},{key:"isNull",value:function(e){return null===e}},{key:"isNumber",value:function(e){return"number"==typeof e}},{key:"isWindow",value:function(e){return null!==e&&e===e.window}},{key:"isObject",value:function(e){var t=typeof e;return"object"===t&&null!==e||"function"===t}},{key:"isString",value:function(e){return"string"==typeof e}},{key:"mergeSuperClassesProperty",value:function(t,n,r){var a=n+"_MERGED";if(t.hasOwnProperty(a))return!1;var i=e.collectSuperClassesProperty(t,n);return r&&(i=r(i)),t[a]=i,!0}},{key:"nullFunction",value:function(){}}]),e}();e.UID_PROPERTY="core_"+(1e9*Math.random()>>>0),e.uniqueIdCounter_=1,this.launchpad.core=e}.call(this),function(){"use strict";var e=function(){function e(){babelHelpers.classCallCheck(this,e)}return babelHelpers.createClass(e,[{key:"send",value:function(){}}]),e}();this.launchpad.Transport=e}.call(this),function(){"use strict";var e=function(){function e(){babelHelpers.classCallCheck(this,e)}return babelHelpers.createClass(e,null,[{key:"addParametersToUrlQueryString",value:function(e,t){var n="";return t.names().forEach(function(e){t.getAll(e).forEach(function(t){n+=e+"="+encodeURIComponent(t)+"&"})}),n=n.slice(0,-1),n&&(e+=e.indexOf("?")>-1?"&":"?",e+=n),e}},{key:"parseUrl",value:function(e){var t,n,r=e.indexOf("//");r>-1&&(e=e.substring(r+2));var a=e.indexOf("/");return-1===a&&(e+="/",a=e.length-1),t=e.substring(0,a),n=e.substring(a),[t,n]}},{key:"parseUrlContextPath",value:function(e){var t=this.parseUrl(e)[1];return t&&(t=t.split("/").splice(0,2).join("/")),t}},{key:"joinPaths",value:function(e,t){return"/"===e.charAt(e.length-1)&&(e=e.substring(0,e.length-1)),"/"===t.charAt(0)&&(t=t.substring(1)),[e,t].join("/").replace(/\/$/,"")}},{key:"parseResponseHeaders",value:function(e){var t=[];if(!e)return t;for(var n=e.split("\r\n"),r=0;r<n.length;r++){var a=n[r].indexOf(": ");if(a>0){var i=n[r].substring(0,a),s=n[r].substring(a+2);t.push({name:i,value:s})}}return t}}]),e}();this.launchpad.Util=e}.call(this),function(){"use strict";var e=function(){function e(){babelHelpers.classCallCheck(this,e),this.disposed_=!1}return babelHelpers.createClass(e,[{key:"dispose",value:function(){this.disposed_||(this.disposeInternal(),this.disposed_=!0)}},{key:"disposeInternal",value:function(){}},{key:"isDisposed",value:function(){return this.disposed_}}]),e}();this.launchpad.Disposable=e}.call(this),function(){"use strict";var e=this.launchpad.Disposable,t=function(e){function t(){babelHelpers.classCallCheck(this,t),babelHelpers.get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.keys={},this.values={}}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"add",value:function(e,t){return this.keys[e.toLowerCase()]=e,this.values[e.toLowerCase()]=this.values[e.toLowerCase()]||[],this.values[e.toLowerCase()].push(t),this}},{key:"clear",value:function(){return this.keys={},this.values={},this}},{key:"contains",value:function(e){return e.toLowerCase()in this.values}},{key:"disposeInternal",value:function(){this.values=null}},{key:"get",value:function(e){var t=this.values[e.toLowerCase()];return t?t[0]:void 0}},{key:"getAll",value:function(e){return this.values[e.toLowerCase()]}},{key:"isEmpty",value:function(){return 0===this.size()}},{key:"names",value:function(){var e=this;return Object.keys(this.values).map(function(t){return e.keys[t]})}},{key:"remove",value:function(e){return delete this.keys[e.toLowerCase()],delete this.values[e.toLowerCase()],this}},{key:"set",value:function(e,t){return this.keys[e.toLowerCase()]=e,this.values[e.toLowerCase()]=[t],this}},{key:"size",value:function(){return this.names().length}},{key:"toString",value:function(){return JSON.stringify(this.values)}}]),t}(e);this.launchpad.MultiMap=t}.call(this),function(){"use strict";var e=this.launchpad.core,t=this.launchpad.MultiMap,n=function(){function n(){babelHelpers.classCallCheck(this,n),this.headers_=new t}return babelHelpers.createClass(n,[{key:"body",value:function(t){return e.isDef(t)?(this.body_=t,this):this.body_}},{key:"header",value:function(e,t){if(2!==arguments.length)throw new Error("Invalid arguments");return this.headers_.set(e,t),this}},{key:"headers",value:function(n){return e.isDef(n)?(n instanceof t?this.headers_=n:this.headers_.values=n,n):this.headers_}},{key:"removeBody",value:function(){this.body_=void 0}}]),n}();this.launchpad.ClientMessage=n}.call(this),function(){"use strict";var e=this.launchpad.core,t=this.launchpad.ClientMessage,n=function(t){function n(e){if(babelHelpers.classCallCheck(this,n),babelHelpers.get(Object.getPrototypeOf(n.prototype),"constructor",this).call(this),!e)throw new Error("Can't create response without request");this.clientRequest_=e}return babelHelpers.inherits(n,t),babelHelpers.createClass(n,[{key:"request",value:function(){return this.clientRequest_}},{key:"statusCode",value:function(t){return e.isDef(t)?(this.statusCode_=t,this):this.statusCode_}},{key:"statusText",value:function(t){return e.isDef(t)?(this.statusText_=t,this):this.statusText_}},{key:"succeeded",value:function(){return this.statusCode()>=200&&this.statusCode()<=399}}]),n}(t);this.launchpad.ClientResponse=n}.call(this),function(){/*!
   * Promises polyfill from Google's Closure Library.
   *
   *      Copyright 2013 The Closure Library Authors. All Rights Reserved.
   *
   * NOTE(eduardo): Promise support is not ready on all supported browsers,
   * therefore core.js is temporarily using Google's promises as polyfill. It
   * supports cancellable promises and has clean and fast implementation.
   */
"use strict";var e=this.launchpad.core,t=function(){};t.prototype.then=function(){},t.IMPLEMENTED_BY_PROP="$goog_Thenable",t.addImplementation=function(e){e.prototype.then=e.prototype.then,e.prototype.$goog_Thenable=!0},t.isImplementedBy=function(e){if(!e)return!1;try{return!!e.$goog_Thenable}catch(t){return!1}};var n=function(e){var t=Array.prototype.slice.call(arguments,1);return function(){var n=t.slice();return n.push.apply(n,arguments),e.apply(this,n)}},r={};r.throwException=function(e){r.nextTick(function(){throw e})},r.run=function(e,t){r.run.workQueueScheduled_||(r.nextTick(r.run.processWorkQueue),r.run.workQueueScheduled_=!0),r.run.workQueue_.push(new r.run.WorkItem_(e,t))},r.run.workQueueScheduled_=!1,r.run.workQueue_=[],r.run.processWorkQueue=function(){for(;r.run.workQueue_.length;){var e=r.run.workQueue_;r.run.workQueue_=[];for(var t=0;t<e.length;t++){var n=e[t];try{n.fn.call(n.scope)}catch(a){r.throwException(a)}}}r.run.workQueueScheduled_=!1},r.run.WorkItem_=function(e,t){this.fn=e,this.scope=t},r.nextTick=function(t,n){var a=t;return n&&(a=t.bind(n)),a=r.nextTick.wrapCallback_(a),e.isFunction(window.setImmediate)?void window.setImmediate(a):(r.nextTick.setImmediate_||(r.nextTick.setImmediate_=r.nextTick.getSetImmediateEmulator_()),void r.nextTick.setImmediate_(a))},r.nextTick.setImmediate_=null,r.nextTick.getSetImmediateEmulator_=function(){var e=window.MessageChannel;if("undefined"==typeof e&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&(e=function(){var e=document.createElement("iframe");e.style.display="none",e.src="",document.documentElement.appendChild(e);var t=e.contentWindow,n=t.document;n.open(),n.write(""),n.close();var r="callImmediate"+Math.random(),a=t.location.protocol+"//"+t.location.host,i=function(e){(e.origin===a||e.data===r)&&this.port1.onmessage()}.bind(this);t.addEventListener("message",i,!1),this.port1={},this.port2={postMessage:function(){t.postMessage(r,a)}}}),"undefined"!=typeof e){var t=new e,n={},r=n;return t.port1.onmessage=function(){n=n.next;var e=n.cb;n.cb=null,e()},function(e){r.next={cb:e},r=r.next,t.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("script")?function(e){var t=document.createElement("script");t.onreadystatechange=function(){t.onreadystatechange=null,t.parentNode.removeChild(t),t=null,e(),e=null},document.documentElement.appendChild(t)}:function(e){setTimeout(e,0)}},r.nextTick.wrapCallback_=function(e){return e};var a=function i(e,t){this.state_=i.State_.PENDING,this.result_=void 0,this.parent_=null,this.callbackEntries_=null,this.executing_=!1,i.UNHANDLED_REJECTION_DELAY>0?this.unhandledRejectionId_=0:0===i.UNHANDLED_REJECTION_DELAY&&(this.hadUnhandledRejection_=!1);try{var n=this;e.call(t,function(e){n.resolve_(i.State_.FULFILLED,e)},function(e){n.resolve_(i.State_.REJECTED,e)})}catch(r){this.resolve_(i.State_.REJECTED,r)}};a.UNHANDLED_REJECTION_DELAY=0,a.State_={PENDING:0,BLOCKED:1,FULFILLED:2,REJECTED:3},a.CallbackEntry_=null,a.resolve=function(e){return new a(function(t){t(e)})},a.reject=function(e){return new a(function(t,n){n(e)})},a.race=function(e){return new a(function(t,n){e.length||t(void 0);for(var r,a=0;r=e[a];a++)r.then(t,n)})},a.all=function(e){return new a(function(t,r){var a=e.length,i=[];if(!a)return void t(i);for(var s,o=function(e,n){a--,i[e]=n,0===a&&t(i)},u=function(e){r(e)},l=0;s=e[l];l++)s.then(n(o,l),u)})},a.firstFulfilled=function(e){return new a(function(t,r){var a=e.length,i=[];if(!a)return void t(void 0);for(var s,o=function(e){t(e)},u=function(e,t){a--,i[e]=t,0===a&&r(i)},l=0;s=e[l];l++)s.then(o,n(u,l))})},a.prototype.then=function(t,n,r){return this.addChildPromise_(e.isFunction(t)?t:null,e.isFunction(n)?n:null,r)},t.addImplementation(a),a.prototype.thenAlways=function(e,t){var n=function(){try{e.call(t)}catch(n){a.handleRejection_.call(null,n)}};return this.addCallbackEntry_({child:null,onRejected:n,onFulfilled:n}),this},a.prototype.thenCatch=function(e,t){return this.addChildPromise_(null,e,t)},a.prototype["catch"]=a.prototype.thenCatch,a.prototype.cancel=function(e){this.state_===a.State_.PENDING&&r.run(function(){var t=new a.CancellationError(e);this.cancelInternal_(t)},this)},a.prototype.cancelInternal_=function(e){this.state_===a.State_.PENDING&&(this.parent_?this.parent_.cancelChild_(this,e):this.resolve_(a.State_.REJECTED,e))},a.prototype.cancelChild_=function(e,t){if(this.callbackEntries_){for(var n,r=0,i=-1,s=0;n=this.callbackEntries_[s];s++){var o=n.child;if(o&&(r++,o===e&&(i=s),i>=0&&r>1))break}if(i>=0)if(this.state_===a.State_.PENDING&&1===r)this.cancelInternal_(t);else{var u=this.callbackEntries_.splice(i,1)[0];this.executeCallback_(u,a.State_.REJECTED,t)}}},a.prototype.addCallbackEntry_=function(e){this.callbackEntries_&&this.callbackEntries_.length||this.state_!==a.State_.FULFILLED&&this.state_!==a.State_.REJECTED||this.scheduleCallbacks_(),this.callbackEntries_||(this.callbackEntries_=[]),this.callbackEntries_.push(e)},a.prototype.addChildPromise_=function(t,n,r){var i={child:null,onFulfilled:null,onRejected:null};return i.child=new a(function(s,o){i.onFulfilled=t?function(e){try{var n=t.call(r,e);s(n)}catch(a){o(a)}}:s,i.onRejected=n?function(t){try{var i=n.call(r,t);!e.isDef(i)&&t instanceof a.CancellationError?o(t):s(i)}catch(u){o(u)}}:o}),i.child.parent_=this,this.addCallbackEntry_(i),i.child},a.prototype.unblockAndFulfill_=function(e){if(this.state_!==a.State_.BLOCKED)throw new Error("CancellablePromise is not blocked.");this.state_=a.State_.PENDING,this.resolve_(a.State_.FULFILLED,e)},a.prototype.unblockAndReject_=function(e){if(this.state_!==a.State_.BLOCKED)throw new Error("CancellablePromise is not blocked.");this.state_=a.State_.PENDING,this.resolve_(a.State_.REJECTED,e)},a.prototype.resolve_=function(n,r){if(this.state_===a.State_.PENDING){if(this===r)n=a.State_.REJECTED,r=new TypeError("CancellablePromise cannot resolve to itself");else{if(t.isImplementedBy(r))return r=r,this.state_=a.State_.BLOCKED,void r.then(this.unblockAndFulfill_,this.unblockAndReject_,this);if(e.isObject(r))try{var i=r.then;if(e.isFunction(i))return void this.tryThen_(r,i)}catch(s){n=a.State_.REJECTED,r=s}}this.result_=r,this.state_=n,this.scheduleCallbacks_(),n!==a.State_.REJECTED||r instanceof a.CancellationError||a.addUnhandledRejection_(this,r)}},a.prototype.tryThen_=function(e,t){this.state_=a.State_.BLOCKED;var n=this,r=!1,i=function(e){r||(r=!0,n.unblockAndFulfill_(e))},s=function(e){r||(r=!0,n.unblockAndReject_(e))};try{t.call(e,i,s)}catch(o){s(o)}},a.prototype.scheduleCallbacks_=function(){this.executing_||(this.executing_=!0,r.run(this.executeCallbacks_,this))},a.prototype.executeCallbacks_=function(){for(;this.callbackEntries_&&this.callbackEntries_.length;){var e=this.callbackEntries_;this.callbackEntries_=[];for(var t=0;t<e.length;t++)this.executeCallback_(e[t],this.state_,this.result_)}this.executing_=!1},a.prototype.executeCallback_=function(e,t,n){t===a.State_.FULFILLED?e.onFulfilled(n):(this.removeUnhandledRejection_(),e.onRejected(n))},a.prototype.removeUnhandledRejection_=function(){var e;if(a.UNHANDLED_REJECTION_DELAY>0)for(e=this;e&&e.unhandledRejectionId_;e=e.parent_)clearTimeout(e.unhandledRejectionId_),e.unhandledRejectionId_=0;else if(0===a.UNHANDLED_REJECTION_DELAY)for(e=this;e&&e.hadUnhandledRejection_;e=e.parent_)e.hadUnhandledRejection_=!1},a.addUnhandledRejection_=function(e,t){a.UNHANDLED_REJECTION_DELAY>0?e.unhandledRejectionId_=setTimeout(function(){a.handleRejection_.call(null,t)},a.UNHANDLED_REJECTION_DELAY):0===a.UNHANDLED_REJECTION_DELAY&&(e.hadUnhandledRejection_=!0,r.run(function(){e.hadUnhandledRejection_&&a.handleRejection_.call(null,t)}))},a.handleRejection_=r.throwException,a.setUnhandledRejectionHandler=function(e){a.handleRejection_=e},a.CancellationError=function(e){function t(e){babelHelpers.classCallCheck(this,t),babelHelpers.get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),e&&(this.message=e)}return babelHelpers.inherits(t,e),t}(Error),a.CancellationError.prototype.name="cancel","undefined"==typeof window.Promise&&(window.Promise=a),this.launchpadNamed.Promise={},this.launchpadNamed.Promise.CancellablePromise=a,this.launchpadNamed.Promise.async=r}.call(this),function(){"use strict";var e=this.launchpad.core,t=this.launchpad.Transport,n=this.launchpad.Util,r=this.launchpad.ClientResponse,a=this.launchpadNamed.Promise.CancellablePromise,i=function(t){function i(){babelHelpers.classCallCheck(this,i),babelHelpers.get(Object.getPrototypeOf(i.prototype),"constructor",this).call(this)}return babelHelpers.inherits(i,t),babelHelpers.createClass(i,[{key:"send",value:function(e){var t=this.request(e.url(),e.method(),e.body(),e.headers(),e.params(),null,!1);return t.then(function(t){var a=new r(e);return a.body(t.responseText),a.statusCode(t.status),a.statusText(t.statusText),n.parseResponseHeaders(t.getAllResponseHeaders()).forEach(function(e){a.header(e.name,e.value)}),a})}},{key:"request",value:function s(t,r,i,o,u,l,c){var s=new XMLHttpRequest,h=new a(function(e,t){s.onload=function(){return s.aborted?void s.onerror():void e(s)},s.onerror=function(){var e=new Error("Request error");e.request=s,t(e)}}).thenCatch(function(e){throw s.abort(),e}).thenAlways(function(){clearTimeout(d)});if(u&&(t=n.addParametersToUrlQueryString(t,u)),s.open(r,t,!c),o&&o.names().forEach(function(e){s.setRequestHeader(e,o.getAll(e).join(", "))}),s.send(e.isDef(i)?i:null),e.isDefAndNotNull(l))var d=setTimeout(function(){h.cancel("Request timeout")},l);return h}}]),i}(t);this.launchpad.AjaxTransport=i}.call(this),function(){"use strict";var e=this.launchpad.core,t=this.launchpad.ClientMessage,n=this.launchpad.MultiMap,r=function(t){function r(){babelHelpers.classCallCheck(this,r),babelHelpers.get(Object.getPrototypeOf(r.prototype),"constructor",this).call(this),this.params_=new n}return babelHelpers.inherits(r,t),babelHelpers.createClass(r,[{key:"method",value:function(t){return e.isDef(t)?(this.method_=t,this):this.method_||r.DEFAULT_METHOD}},{key:"param",value:function(e,t){if(2!==arguments.length)throw new Error("Invalid arguments");return this.params_.set(e,t),this}},{key:"params",value:function(t){return e.isDef(t)?(t instanceof n?this.params_=t:this.params_.values=t,t):this.params_}},{key:"url",value:function(t){return e.isDef(t)?(this.url_=t,this):this.url_}}]),r}(t);r.DEFAULT_METHOD="GET",this.launchpad.ClientRequest=r}.call(this),function(){"use strict";var e=function(){function e(){babelHelpers.classCallCheck(this,e),this.body_={}}return babelHelpers.createClass(e,[{key:"body",value:function(){return this.body_}},{key:"toString",value:function(){return JSON.stringify(this.body())}}],[{key:"toBody",value:function(t){return t instanceof e?t.body():t}}]),e}();this.launchpad.Embodied=e}.call(this),function(){"use strict";var e=this.launchpad.core,t=this.launchpad.Embodied,n=function(){function n(r,a,i){babelHelpers.classCallCheck(this,n);var s={operator:e.isDef(i)?a:"="},o=e.isDef(i)?i:a;e.isDefAndNotNull(o)&&(o instanceof t&&(o=o.body()),s.value=o),this.createBody_(r,s)}return babelHelpers.createClass(n,[{key:"add",value:function(e,t){t?this.addArrayOperator_(e,t):this.createBody_(e,this.body_)}},{key:"addArrayOperator_",value:function(e,t){this.body_[e]instanceof Array||this.createBody_(e,[this.body_]),this.body_[e].push(t.body())}},{key:"addMany",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;t>r;r++)n[r-1]=arguments[r];for(var a=0;a<n.length;a++)this.add(e,n[a])}},{key:"createBody_",value:function(e,t){this.body_={},this.body_[e]=t}},{key:"getObject",value:function(){return this.body_}}]),n}();this.launchpad.FilterBody=n}.call(this),function(){"use strict";var e=this.launchpad.Embodied,t=this.launchpad.FilterBody,n=function(e){function n(e,r,a){babelHelpers.classCallCheck(this,n),babelHelpers.get(Object.getPrototypeOf(n.prototype),"constructor",this).call(this),this.body_=new t(e,r,a)}return babelHelpers.inherits(n,e),babelHelpers.createClass(n,[{key:"add",value:function(e,t,r,a){var i=t?n.toFilter(t,r,a):null;return this.body_.add(e,i),this}},{key:"addMany",value:function(e){for(var t,n=arguments.length,r=Array(n>1?n-1:0),a=1;n>a;a++)r[a-1]=arguments[a];return(t=this.body_).addMany.apply(t,[e].concat(r)),this}},{key:"and",value:function(e,t,n){return this.add("and",e,t,n)}},{key:"body",value:function(){return this.body_.getObject()}},{key:"disMax",value:function(e,t,n){return this.add("disMax",e,t,n)}},{key:"or",value:function(e,t,n){return this.add("or",e,t,n)}}],[{key:"and",value:function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return t[0].addMany.apply(t[0],["and"].concat(t.slice(1)))}},{key:"any",value:function(e){var t=Array.prototype.slice.call(arguments,1);return 1===t.length&&t[0]instanceof Array&&(t=t[0]),new n(e,"any",t)}},{key:"equal",value:function(e,t){return new n(e,"=",t)}},{key:"gt",value:function(e,t){return new n(e,">",t)}},{key:"gte",value:function(e,t){return new n(e,">=",t)}},{key:"regex",value:function(e,t){return new n(e,"~",t)}},{key:"lt",value:function(e,t){return new n(e,"<",t)}},{key:"lte",value:function(e,t){return new n(e,"<=",t)}},{key:"none",value:function(e){var t=Array.prototype.slice.call(arguments,1);return 1===t.length&&t[0]instanceof Array&&(t=t[0]),new n(e,"none",t)}},{key:"notEqual",value:function(e,t){return new n(e,"!=",t)}},{key:"not",value:function(e,t,r){return n.toFilter(e,t,r).add("not")}},{key:"of",value:function(e,t,r){return new n(e,t,r)}},{key:"or",value:function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return t[0].addMany.apply(t[0],["or"].concat(t.slice(1)))}},{key:"toFilter",value:function(e,t,r){var a=e;return a instanceof n||(a=n.of(e,t,r)),a}}]),n}(e);this.launchpad.Filter=n}.call(this),function(){"use strict";var e=this.launchpad.core,t=this.launchpad.Embodied,n=function(t){function n(t,r){babelHelpers.classCallCheck(this,n),babelHelpers.get(Object.getPrototypeOf(n.prototype),"constructor",this).call(this),e.isDefAndNotNull(t)&&(this.body_.from=t),e.isDefAndNotNull(r)&&(this.body_.to=r)}return babelHelpers.inherits(n,t),babelHelpers.createClass(n,null,[{key:"from",value:function(e){return new n(e)}},{key:"range",value:function(e,t){return new n(e,t)}},{key:"to",value:function(e){return new n(null,e)}}]),n}(t);this.launchpad.Range=n}.call(this),function(){"use strict";var e=this.launchpad.Embodied,t=this.launchpad.Range,n=function(){function e(t,n,r){babelHelpers.classCallCheck(this,e),this.field_=t,this.operator_=n,this.value_=r}return babelHelpers.createClass(e,[{key:"getField",value:function(){return this.field_}},{key:"getOperator",value:function(){return this.operator_}},{key:"getValue",value:function(){return this.value_}}],[{key:"avg",value:function(t){return e.of(t,"avg")}},{key:"count",value:function(t){return e.of(t,"count")}},{key:"distance",value:function(t,n){for(var r=arguments.length,a=Array(r>2?r-2:0),i=2;r>i;i++)a[i-2]=arguments[i];return new(babelHelpers.bind.apply(e.DistanceAggregation,[null].concat([t,n],a)))}},{key:"extendedStats",value:function(t){return e.of(t,"extendedStats")}},{key:"histogram",value:function(t,n){return new e(t,"histogram",n)}},{key:"max",value:function(t){return e.of(t,"max")}},{key:"min",value:function(t){return e.of(t,"min")}},{key:"missing",value:function(t){return e.of(t,"missing")}},{key:"of",value:function(t,n){return new e(t,n)}},{key:"range",value:function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;n>a;a++)r[a-1]=arguments[a];return new(babelHelpers.bind.apply(e.RangeAggregation,[null].concat([t],r)))}},{key:"stats",value:function(t){return e.of(t,"stats")}},{key:"sum",value:function(t){return e.of(t,"sum")}},{key:"terms",value:function(t){return e.of(t,"terms")}}]),e}(),r=function(n){function r(t,n){babelHelpers.classCallCheck(this,r),babelHelpers.get(Object.getPrototypeOf(r.prototype),"constructor",this).call(this,t,"geoDistance",{}),this.value_.location=e.toBody(n);for(var a=arguments.length,i=Array(a>2?a-2:0),s=2;a>s;s++)i[s-2]=arguments[s];this.value_.ranges=i.map(function(e){return e.body()})}return babelHelpers.inherits(r,n),babelHelpers.createClass(r,[{key:"range",value:function a(e,n){var a=e;return a instanceof t||(a=t.range(e,n)),this.value_.ranges.push(a.body()),this}},{key:"unit",value:function(e){return this.value_.unit=e,this}}]),r}(n);n.DistanceAggregation=r;var a=function(e){function n(e){babelHelpers.classCallCheck(this,n),babelHelpers.get(Object.getPrototypeOf(n.prototype),"constructor",this).call(this,e,"range");for(var t=arguments.length,r=Array(t>1?t-1:0),a=1;t>a;a++)r[a-1]=arguments[a];this.value_=r.map(function(e){return e.body()})}return babelHelpers.inherits(n,e),babelHelpers.createClass(n,[{key:"range",value:function r(e,n){var r=e;return r instanceof t||(r=t.range(e,n)),this.value_.push(r.body()),this}}]),n}(n);n.RangeAggregation=a,this.launchpad.Aggregation=n}.call(this),function(){"use strict";var e=this.launchpad.Embodied,t=function(){function e(){babelHelpers.classCallCheck(this,e)}return babelHelpers.createClass(e,null,[{key:"bbox",value:function(t,n){return new e.BoundingBox(t,n)}},{key:"circle",value:function(t,n){return new e.Circle(t,n)}},{key:"line",value:function(){for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return new(babelHelpers.bind.apply(e.Line,[null].concat(n)))}},{key:"point",value:function(t,n){return new e.Point(t,n)}},{key:"polygon",value:function(){for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];return new(babelHelpers.bind.apply(e.Polygon,[null].concat(n)))}}]),e}(),n=function(e){function t(e,n){babelHelpers.classCallCheck(this,t),babelHelpers.get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this),this.body_=[e,n]}return babelHelpers.inherits(t,e),t}(e);t.Point=n;var r=function(t){function n(){babelHelpers.classCallCheck(this,n),babelHelpers.get(Object.getPrototypeOf(n.prototype),"constructor",this).call(this);for(var t=arguments.length,r=Array(t),a=0;t>a;a++)r[a]=arguments[a];this.body_={type:"linestring",coordinates:r.map(function(t){return e.toBody(t)})}}return babelHelpers.inherits(n,t),n}(e);t.Line=r;var a=function(t){function n(t,r){babelHelpers.classCallCheck(this,n),babelHelpers.get(Object.getPrototypeOf(n.prototype),"constructor",this).call(this),this.body_={type:"envelope",coordinates:[e.toBody(t),e.toBody(r)]}}return babelHelpers.inherits(n,t),babelHelpers.createClass(n,[{key:"getPoints",value:function(){return this.body_.coordinates}}]),n}(e);t.BoundingBox=a;var i=function(t){function n(t,r){babelHelpers.classCallCheck(this,n),babelHelpers.get(Object.getPrototypeOf(n.prototype),"constructor",this).call(this),this.body_={type:"circle",coordinates:e.toBody(t),radius:r}}return babelHelpers.inherits(n,t),babelHelpers.createClass(n,[{key:"getCenter",value:function(){return this.body_.coordinates}},{key:"getRadius",value:function(){return this.body_.radius}}]),n}(e);t.Circle=i;var s=function(t){function n(){babelHelpers.classCallCheck(this,n),babelHelpers.get(Object.getPrototypeOf(n.prototype),"constructor",this).call(this),this.body_={type:"polygon",coordinates:[]},this.addCoordinates_.apply(this,arguments)}return babelHelpers.inherits(n,t),babelHelpers.createClass(n,[{key:"addCoordinates_",value:function(){for(var t=arguments.length,n=Array(t),r=0;t>r;r++)n[r]=arguments[r];this.body_.coordinates.push(n.map(function(t){return e.toBody(t)}))}},{key:"hole",value:function(){return this.addCoordinates_.apply(this,arguments),this}}]),n}(e);t.Polygon=s,this.launchpad.Geo=t}.call(this),function(){"use strict";var e=this.launchpad.core,t=this.launchpad.Embodied,n=this.launchpad.Filter,r=this.launchpad.Geo,a=this.launchpad.Range,i=function(i){function s(){babelHelpers.classCallCheck(this,s),babelHelpers.get(Object.getPrototypeOf(s.prototype),"constructor",this).apply(this,arguments)}return babelHelpers.inherits(s,i),babelHelpers.createClass(s,null,[{key:"bbox",value:function(e,t,n){return t instanceof r.BoundingBox?s.polygon.apply(s,[e].concat(babelHelpers.toConsumableArray(t.getPoints()))):s.polygon(e,t,n)}},{key:"common",value:function(t,r,a){var i=e.isString(r),o={query:i?r:t},u=i?a:r;u&&(o.threshold=u);var l=i?t:s.ALL;return n.of(l,"common",o)}},{key:"disMax",value:function(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return t[0].addMany.apply(t[0],["disMax"].concat(t.slice(1)))}},{key:"distance",value:function(e,t,n){var i=t,o=n;return t instanceof r.Circle?(i=t.getCenter(),o=a.to(t.getRadius())):n instanceof a||(o=a.to(n)),s.distanceInternal_(e,i,o)}},{key:"distanceInternal_",value:function(e,r,a){var i={location:t.toBody(r)};return a=a.body(),a.from&&(i.min=a.from),a.to&&(i.max=a.to),n.of(e,"gp",i)}},{key:"exists",value:function(e){return n.of(e,"exists",null)}},{key:"fuzzy",value:function(e,t,n){return s.fuzzyInternal_("fuzzy",e,t,n)}},{key:"fuzzyLikeThis",value:function(e,t,n){return s.fuzzyInternal_("flt",e,t,n)}},{key:"fuzzyInternal_",value:function(t,r,a,i){var o=e.isString(a),u={query:o?a:r},l=o?i:a;l&&(u.fuzziness=l);var c=o?r:s.ALL;return n.of(c,t,u)}},{key:"match",value:function(t,r){var a=e.isString(r)?t:s.ALL,i=e.isString(r)?r:t;return n.of(a,"match",i)}},{key:"missing",value:function(e){return n.of(e,"missing",null)}},{key:"moreLikeThis",value:function(t,r){var a=e.isString(r)?t:s.ALL,i={query:e.isString(r)?r:t};return n.of(a,"mlt",i)}},{key:"phrase",value:function(t,r){var a=e.isString(r)?t:s.ALL,i=e.isString(r)?r:t;return n.of(a,"phrase",i)}},{key:"phrasePrefix",value:function(t,r){var a=e.isString(r)?t:s.ALL,i=e.isString(r)?r:t;return n.of(a,"phrasePrefix",i)}},{key:"polygon",value:function(e){for(var r=arguments.length,a=Array(r>1?r-1:0),i=1;r>i;i++)a[i-1]=arguments[i];return a=a.map(function(e){return t.toBody(e)}),n.of(e,"gp",a)}},{key:"prefix",value:function(e,t){var r=t?e:s.ALL,a=t?t:e;return n.of(r,"pre",a)}},{key:"range",value:function o(e,t,r){var o=t;return o instanceof a||(o=a.range(t,r)),n.of(e,"range",o)}},{key:"shape",value:function(e){for(var r=arguments.length,a=Array(r>1?r-1:0),i=1;r>i;i++)a[i-1]=arguments[i];a=a.map(function(e){return t.toBody(e)});var s={type:"geometrycollection",geometries:a};return n.of(e,"gs",s)}}]),s}(n);i.ALL="*",this.launchpad.SearchFilter=i}.call(this),function(){"use strict";var e=this.launchpad.core,t=this.launchpad.Aggregation,n=this.launchpad.Embodied,r=this.launchpad.Filter,a=this.launchpad.SearchFilter,i=function(n){function i(){babelHelpers.classCallCheck(this,i),babelHelpers.get(Object.getPrototypeOf(i.prototype),"constructor",this).apply(this,arguments)}return babelHelpers.inherits(i,n),babelHelpers.createClass(i,[{key:"aggregate",value:function(n,r,a){var i=r;i instanceof t||(i=t.of(r,a));var s=i.getField(),o={};return o[s]={name:n,operator:i.getOperator()},e.isDefAndNotNull(i.getValue())&&(o[s].value=i.getValue()),this.body_.aggregation||(this.body_.aggregation=[]),this.body_.aggregation.push(o),this}},{key:"cursor",value:function(e){return this.body_.cursor=e,this}},{key:"addFilter_",value:function(e,t){var n=t||"preFilter";this.body_[n]||(this.body_[n]=[]),this.body_[n].push(e.body())}},{key:"filter_",value:function(e,t,n,i){var s=e;return n?s=r.of(e,t,n):t?s=a.match(e,t):s instanceof r||(s=a.match(e)),this.addFilter_(s,i),this}},{key:"highlight",value:function(e,t,n){return this.body_.highlight||(this.body_.highlight={}),this.body_.highlight[e]={},t&&(this.body_.highlight[e].size=t),n&&(this.body_.highlight[e].count=n),this}},{key:"postFilter",value:function(e,t,n){return this.filter_(e,t,n,"postFilter")}},{key:"preFilter",value:function(e,t,n){return this.filter_(e,t,n)}},{key:"query",value:function(e,t,n){return this.filter_(e,t,n,"query")}}],[{key:"builder",value:function(){return new i}}]),i}(n);this.launchpad.Search=i}.call(this),function(){"use strict";var e=this.launchpad.Embodied,t=this.launchpad.Filter,n=this.launchpad.Search,r=function(e){function r(){babelHelpers.classCallCheck(this,r),babelHelpers.get(Object.getPrototypeOf(r.prototype),"constructor",this).apply(this,arguments)}return babelHelpers.inherits(r,e),babelHelpers.createClass(r,[{key:"count",value:function(){return this.type("count")}},{key:"fetch",value:function(){return this.type("fetch")}},{key:"filter",value:function a(e,n,r){var a=t.toFilter(e,n,r);return this.body_.filter||(this.body_.filter=[]),this.body_.filter.push(a.body()),this}},{key:"from",value:function(e){return this.body_.offset=e,this}},{key:"limit",value:function(e){return this.body_.limit=e,this}},{key:"scan",value:function(){return this.type("scan")}},{key:"search",value:function i(e,t,r){var i=e;return i instanceof n||(i=n.builder().query(e,t,r)),this.body_.search=i.body(),this}},{key:"sort",value:function(e,t){this.body_.sort||(this.body_.sort=[]);var n={};return n[e]=t||"asc",this.body_.sort.push(n),this}},{key:"type",value:function(e){return this.body_.type=e,this}}],[{key:"builder",value:function(){return new r}}]),r}(e);this.launchpad.Query=r}.call(this),function(){"use strict";var e=this.launchpad.AjaxTransport,t=function(){function t(){babelHelpers.classCallCheck(this,t),this.transports={},this.transports[t.DEFAULT_TRANSPORT_NAME]=e}return babelHelpers.createClass(t,[{key:"get",value:function(e){var t=this.transports[e];if(null===t)throw new Error("Invalid transport name: "+e);try{return new t}catch(n){throw new Error("Can't create transport",n)}}},{key:"getDefault",value:function(){return this.get(t.DEFAULT_TRANSPORT_NAME)}}],[{key:"instance",value:function(){return t.instance_||(t.instance_=new t),t.instance_}}]),t}();t.DEFAULT_TRANSPORT_NAME="default",this.launchpad.TransportFactory=t}.call(this),function(){"use strict";var e=this.launchpad.core,t=this.launchpad.Embodied,n=this.launchpad.Filter,r=this.launchpad.Query,a=this.launchpad.TransportFactory,i=this.launchpad.ClientRequest,s=this.launchpad.Util,o=this.launchpad.MultiMap,u=function(){function u(){if(babelHelpers.classCallCheck(this,u),0===arguments.length)throw new Error("Invalid arguments, try `new Launchpad(baseUrl, url)`");this.url_=s.joinPaths(arguments[0]||"",arguments[1]||""),this.headers_=new o,this.params_=new o,this.header("Content-Type","application/json"),this.header("X-PJAX","true"),this.header("X-Requested-With","XMLHttpRequest")}return babelHelpers.createClass(u,[{key:"use",value:function(e){return this.customTransport_=e,this}},{key:"watch",value:function(e,t){if("undefined"==typeof io)throw new Error("Socket.io client not loaded");var n=this.createClientRequest_("GET",e),r=s.parseUrl(s.addParametersToUrlQueryString(n.url(),n.params()));return t=t||{},t.path=t.path||s.parseUrlContextPath(r[1]),io(r[0]+"?url="+encodeURIComponent(r[1]),t)}},{key:"path",value:function(e){return new u(this.url(),e).use(this.customTransport_)}},{key:"delete",value:function(e){return this.sendAsync("DELETE",e)}},{key:"get",value:function(e){return this.sendAsync("GET",e)}},{key:"patch",value:function(e){return this.sendAsync("PATCH",e)}},{key:"post",value:function(e){return this.sendAsync("POST",e)}},{key:"put",value:function(e){return this.sendAsync("PUT",e)}},{key:"header",value:function(e,t){if(2!==arguments.length)throw new Error("Invalid arguments");return this.headers_.set(e,t),this}},{key:"headers",value:function(){return this.headers_}},{key:"param",value:function(e,t){if(2!==arguments.length)throw new Error("Invalid arguments");return this.params_.set(e,t),this}},{key:"params",value:function(){return this.params_}},{key:"url",value:function(){return this.url_}},{key:"sendAsync",value:function(e,t){var n=this.customTransport_||a.instance().getDefault(),r=this.createClientRequest_(e,t);return n.send(r).then(this.decode)}},{key:"convertBodyToParams_",value:function(n,r){e.isString(r)?r={body:r}:r instanceof t&&(r=r.body()),Object.keys(r||{}).forEach(function(e){return n.param(e,r[e])})}},{key:"createClientRequest_",value:function(e,t){var n=new i;return n.body(t),n.method(e),n.headers(this.headers()),n.params(this.params()),n.url(this.url()),this.encode(n),n}},{key:"wrapWithQuery_",value:function(e){return e instanceof n&&(e=r.builder().filter(e)),e}},{key:"encode",value:function(n){var r=n.body();return e.isElement(r)&&(r=new FormData(r),n.body(r)),r=this.wrapWithQuery_(r),"GET"===n.method()&&(this.convertBodyToParams_(n,r),n.removeBody(),r=null),r instanceof FormData?n.headers().remove("content-type"):r instanceof t?n.body(r.toString()):u.isContentTypeJson(n)&&n.body(JSON.stringify(n.body())),this.encodeParams_(n),n}},{key:"encodeParams_",value:function(n){var r=n.params();r.names().forEach(function(n){var a=r.getAll(n);a.forEach(function(n,r){n instanceof t?n=n.toString():(e.isObject(n)||n instanceof Array)&&(n=JSON.stringify(n)),a[r]=n})})}},{key:"decode",value:function(e){if(u.isContentTypeJson(e))try{e.body(JSON.parse(e.body()))}catch(t){}return e}}],[{key:"url",value:function(e){return new u(e).use(this.customTransport_)}}]),u}();u.isContentTypeJson=function(e){var t=e.headers().get("content-type")||"";return 0===t.indexOf("application/json")},this.launchpad.Launchpad=u}.call(this),function(){"use strict";var e=this.launchpad.Launchpad;void 0!==typeof window&&(window.Launchpad=e)}.call(this),function(){"use strict";var e=this.launchpad.Filter,t=this.launchpad.Geo,n=this.launchpad.Query,r=this.launchpad.Range,a=this.launchpad.Search,i=this.launchpad.SearchFilter;void 0!==typeof window&&(window.Filter=e,window.Geo=t,window.Query=n,window.Range=r,window.Search=a,window.SearchFilter=i)}.call(this);