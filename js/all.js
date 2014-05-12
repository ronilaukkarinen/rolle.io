/*! jQuery v1.9.0 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license */(function(e,t){"use strict";function n(e){var t=e.length,n=st.type(e);return st.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}function r(e){var t=Tt[e]={};return st.each(e.match(lt)||[],function(e,n){t[n]=!0}),t}function i(e,n,r,i){if(st.acceptData(e)){var o,a,s=st.expando,u="string"==typeof n,l=e.nodeType,c=l?st.cache:e,f=l?e[s]:e[s]&&s;if(f&&c[f]&&(i||c[f].data)||!u||r!==t)return f||(l?e[s]=f=K.pop()||st.guid++:f=s),c[f]||(c[f]={},l||(c[f].toJSON=st.noop)),("object"==typeof n||"function"==typeof n)&&(i?c[f]=st.extend(c[f],n):c[f].data=st.extend(c[f].data,n)),o=c[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[st.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[st.camelCase(n)])):a=o,a}}function o(e,t,n){if(st.acceptData(e)){var r,i,o,a=e.nodeType,u=a?st.cache:e,l=a?e[st.expando]:st.expando;if(u[l]){if(t&&(r=n?u[l]:u[l].data)){st.isArray(t)?t=t.concat(st.map(t,st.camelCase)):t in r?t=[t]:(t=st.camelCase(t),t=t in r?[t]:t.split(" "));for(i=0,o=t.length;o>i;i++)delete r[t[i]];if(!(n?s:st.isEmptyObject)(r))return}(n||(delete u[l].data,s(u[l])))&&(a?st.cleanData([e],!0):st.support.deleteExpando||u!=u.window?delete u[l]:u[l]=null)}}}function a(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(Nt,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:wt.test(r)?st.parseJSON(r):r}catch(o){}st.data(e,n,r)}else r=t}return r}function s(e){var t;for(t in e)if(("data"!==t||!st.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function u(){return!0}function l(){return!1}function c(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function f(e,t,n){if(t=t||0,st.isFunction(t))return st.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return st.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=st.grep(e,function(e){return 1===e.nodeType});if(Wt.test(t))return st.filter(t,r,!n);t=st.filter(t,r)}return st.grep(e,function(e){return st.inArray(e,t)>=0===n})}function p(e){var t=zt.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function d(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function h(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function g(e){var t=nn.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function m(e,t){for(var n,r=0;null!=(n=e[r]);r++)st._data(n,"globalEval",!t||st._data(t[r],"globalEval"))}function y(e,t){if(1===t.nodeType&&st.hasData(e)){var n,r,i,o=st._data(e),a=st._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)st.event.add(t,n,s[n][r])}a.data&&(a.data=st.extend({},a.data))}}function v(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!st.support.noCloneEvent&&t[st.expando]){r=st._data(t);for(i in r.events)st.removeEvent(t,i,r.handle);t.removeAttribute(st.expando)}"script"===n&&t.text!==e.text?(h(t).text=e.text,g(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),st.support.html5Clone&&e.innerHTML&&!st.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Zt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}function b(e,n){var r,i,o=0,a=e.getElementsByTagName!==t?e.getElementsByTagName(n||"*"):e.querySelectorAll!==t?e.querySelectorAll(n||"*"):t;if(!a)for(a=[],r=e.childNodes||e;null!=(i=r[o]);o++)!n||st.nodeName(i,n)?a.push(i):st.merge(a,b(i,n));return n===t||n&&st.nodeName(e,n)?st.merge([e],a):a}function x(e){Zt.test(e.type)&&(e.defaultChecked=e.checked)}function T(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Nn.length;i--;)if(t=Nn[i]+n,t in e)return t;return r}function w(e,t){return e=t||e,"none"===st.css(e,"display")||!st.contains(e.ownerDocument,e)}function N(e,t){for(var n,r=[],i=0,o=e.length;o>i;i++)n=e[i],n.style&&(r[i]=st._data(n,"olddisplay"),t?(r[i]||"none"!==n.style.display||(n.style.display=""),""===n.style.display&&w(n)&&(r[i]=st._data(n,"olddisplay",S(n.nodeName)))):r[i]||w(n)||st._data(n,"olddisplay",st.css(n,"display")));for(i=0;o>i;i++)n=e[i],n.style&&(t&&"none"!==n.style.display&&""!==n.style.display||(n.style.display=t?r[i]||"":"none"));return e}function C(e,t,n){var r=mn.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function k(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=st.css(e,n+wn[o],!0,i)),r?("content"===n&&(a-=st.css(e,"padding"+wn[o],!0,i)),"margin"!==n&&(a-=st.css(e,"border"+wn[o]+"Width",!0,i))):(a+=st.css(e,"padding"+wn[o],!0,i),"padding"!==n&&(a+=st.css(e,"border"+wn[o]+"Width",!0,i)));return a}function E(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=ln(e),a=st.support.boxSizing&&"border-box"===st.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=un(e,t,o),(0>i||null==i)&&(i=e.style[t]),yn.test(i))return i;r=a&&(st.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+k(e,t,n||(a?"border":"content"),r,o)+"px"}function S(e){var t=V,n=bn[e];return n||(n=A(e,t),"none"!==n&&n||(cn=(cn||st("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(cn[0].contentWindow||cn[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=A(e,t),cn.detach()),bn[e]=n),n}function A(e,t){var n=st(t.createElement(e)).appendTo(t.body),r=st.css(n[0],"display");return n.remove(),r}function j(e,t,n,r){var i;if(st.isArray(t))st.each(t,function(t,i){n||kn.test(e)?r(e,i):j(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==st.type(t))r(e,t);else for(i in t)j(e+"["+i+"]",t[i],n,r)}function D(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(lt)||[];if(st.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function L(e,n,r,i){function o(u){var l;return a[u]=!0,st.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||s||a[c]?s?!(l=c):t:(n.dataTypes.unshift(c),o(c),!1)}),l}var a={},s=e===$n;return o(n.dataTypes[0])||!a["*"]&&o("*")}function H(e,n){var r,i,o=st.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((o[r]?e:i||(i={}))[r]=n[r]);return i&&st.extend(!0,e,i),e}function M(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(o in c)o in r&&(n[c[o]]=r[o]);for(;"*"===l[0];)l.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("Content-Type"));if(i)for(o in u)if(u[o]&&u[o].test(i)){l.unshift(o);break}if(l[0]in r)a=l[0];else{for(o in r){if(!l[0]||e.converters[o+" "+l[0]]){a=o;break}s||(s=o)}a=a||s}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function q(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=u[++s];)if("*"!==i){if("*"!==l&&l!==i){if(n=a[l+" "+i]||a["* "+i],!n)for(r in a)if(o=r.split(" "),o[1]===i&&(n=a[l+" "+o[0]]||a["* "+o[0]])){n===!0?n=a[r]:a[r]!==!0&&(i=o[0],u.splice(s--,0,i));break}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(c){return{state:"parsererror",error:n?c:"No conversion from "+l+" to "+i}}}l=i}return{state:"success",data:t}}function _(){try{return new e.XMLHttpRequest}catch(t){}}function F(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function O(){return setTimeout(function(){Qn=t}),Qn=st.now()}function B(e,t){st.each(t,function(t,n){for(var r=(rr[t]||[]).concat(rr["*"]),i=0,o=r.length;o>i;i++)if(r[i].call(e,t,n))return})}function P(e,t,n){var r,i,o=0,a=nr.length,s=st.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Qn||O(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:st.extend({},t),opts:st.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Qn||O(),duration:n.duration,tweens:[],createTween:function(t,n){var r=st.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(R(c,l.opts.specialEasing);a>o;o++)if(r=nr[o].call(l,e,c,l.opts))return r;return B(l,c),st.isFunction(l.opts.start)&&l.opts.start.call(e,l),st.fx.timer(st.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function R(e,t){var n,r,i,o,a;for(n in e)if(r=st.camelCase(n),i=t[r],o=e[n],st.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=st.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function W(e,t,n){var r,i,o,a,s,u,l,c,f,p=this,d=e.style,h={},g=[],m=e.nodeType&&w(e);n.queue||(c=st._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,f=c.empty.fire,c.empty.fire=function(){c.unqueued||f()}),c.unqueued++,p.always(function(){p.always(function(){c.unqueued--,st.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===st.css(e,"display")&&"none"===st.css(e,"float")&&(st.support.inlineBlockNeedsLayout&&"inline"!==S(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",st.support.shrinkWrapBlocks||p.done(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(o=t[r],Zn.exec(o)){if(delete t[r],u=u||"toggle"===o,o===(m?"hide":"show"))continue;g.push(r)}if(a=g.length){s=st._data(e,"fxshow")||st._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?st(e).show():p.done(function(){st(e).hide()}),p.done(function(){var t;st._removeData(e,"fxshow");for(t in h)st.style(e,t,h[t])});for(r=0;a>r;r++)i=g[r],l=p.createTween(i,m?s[i]:0),h[i]=s[i]||st.style(e,i),i in s||(s[i]=l.start,m&&(l.end=l.start,l.start="width"===i||"height"===i?1:0))}}function $(e,t,n,r,i){return new $.prototype.init(e,t,n,r,i)}function I(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=wn[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function z(e){return st.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}var X,U,V=e.document,Y=e.location,J=e.jQuery,G=e.$,Q={},K=[],Z="1.9.0",et=K.concat,tt=K.push,nt=K.slice,rt=K.indexOf,it=Q.toString,ot=Q.hasOwnProperty,at=Z.trim,st=function(e,t){return new st.fn.init(e,t,X)},ut=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,lt=/\S+/g,ct=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ft=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,pt=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,dt=/^[\],:{}\s]*$/,ht=/(?:^|:|,)(?:\s*\[)+/g,gt=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,mt=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,yt=/^-ms-/,vt=/-([\da-z])/gi,bt=function(e,t){return t.toUpperCase()},xt=function(){V.addEventListener?(V.removeEventListener("DOMContentLoaded",xt,!1),st.ready()):"complete"===V.readyState&&(V.detachEvent("onreadystatechange",xt),st.ready())};st.fn=st.prototype={jquery:Z,constructor:st,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:ft.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof st?n[0]:n,st.merge(this,st.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:V,!0)),pt.test(i[1])&&st.isPlainObject(n))for(i in n)st.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=V.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=V,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):st.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),st.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return nt.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=st.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return st.each(this,e,t)},ready:function(e){return st.ready.promise().done(e),this},slice:function(){return this.pushStack(nt.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(st.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:tt,sort:[].sort,splice:[].splice},st.fn.init.prototype=st.fn,st.extend=st.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||st.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(e=arguments[u]))for(n in e)r=s[n],i=e[n],s!==i&&(c&&i&&(st.isPlainObject(i)||(o=st.isArray(i)))?(o?(o=!1,a=r&&st.isArray(r)?r:[]):a=r&&st.isPlainObject(r)?r:{},s[n]=st.extend(c,a,i)):i!==t&&(s[n]=i));return s},st.extend({noConflict:function(t){return e.$===st&&(e.$=G),t&&e.jQuery===st&&(e.jQuery=J),st},isReady:!1,readyWait:1,holdReady:function(e){e?st.readyWait++:st.ready(!0)},ready:function(e){if(e===!0?!--st.readyWait:!st.isReady){if(!V.body)return setTimeout(st.ready);st.isReady=!0,e!==!0&&--st.readyWait>0||(U.resolveWith(V,[st]),st.fn.trigger&&st(V).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===st.type(e)},isArray:Array.isArray||function(e){return"array"===st.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?Q[it.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==st.type(e)||e.nodeType||st.isWindow(e))return!1;try{if(e.constructor&&!ot.call(e,"constructor")&&!ot.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||ot.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||V;var r=pt.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=st.buildFragment([e],t,i),i&&st(i).remove(),st.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=st.trim(n),n&&dt.test(n.replace(gt,"@").replace(mt,"]").replace(ht,"")))?Function("return "+n)():(st.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||st.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&st.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(yt,"ms-").replace(vt,bt)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,a=e.length,s=n(e);if(r){if(s)for(;a>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(s)for(;a>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:at&&!at.call("\ufeff\u00a0")?function(e){return null==e?"":at.call(e)}:function(e){return null==e?"":(e+"").replace(ct,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?st.merge(r,"string"==typeof e?[e]:e):tt.call(r,e)),r},inArray:function(e,t,n){var r;if(t){if(rt)return rt.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else for(;n[o]!==t;)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,a=e.length,s=n(e),u=[];if(s)for(;a>o;o++)i=t(e[o],o,r),null!=i&&(u[u.length]=i);else for(o in e)i=t(e[o],o,r),null!=i&&(u[u.length]=i);return et.apply([],u)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(r=e[n],n=e,e=r),st.isFunction(e)?(i=nt.call(arguments,2),o=function(){return e.apply(n||this,i.concat(nt.call(arguments)))},o.guid=e.guid=e.guid||st.guid++,o):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===st.type(r)){o=!0;for(u in r)st.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,st.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(st(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),st.ready.promise=function(t){if(!U)if(U=st.Deferred(),"complete"===V.readyState)setTimeout(st.ready);else if(V.addEventListener)V.addEventListener("DOMContentLoaded",xt,!1),e.addEventListener("load",st.ready,!1);else{V.attachEvent("onreadystatechange",xt),e.attachEvent("onload",st.ready);var n=!1;try{n=null==e.frameElement&&V.documentElement}catch(r){}n&&n.doScroll&&function i(){if(!st.isReady){try{n.doScroll("left")}catch(e){return setTimeout(i,50)}st.ready()}}()}return U.promise(t)},st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){Q["[object "+t+"]"]=t.toLowerCase()}),X=st(V);var Tt={};st.Callbacks=function(e){e="string"==typeof e?Tt[e]||r(e):st.extend({},e);var n,i,o,a,s,u,l=[],c=!e.once&&[],f=function(t){for(n=e.memory&&t,i=!0,u=a||0,a=0,s=l.length,o=!0;l&&s>u;u++)if(l[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}o=!1,l&&(c?c.length&&f(c.shift()):n?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function r(t){st.each(t,function(t,n){var i=st.type(n);"function"===i?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==i&&r(n)})})(arguments),o?s=l.length:n&&(a=t,f(n))}return this},remove:function(){return l&&st.each(arguments,function(e,t){for(var n;(n=st.inArray(t,l,n))>-1;)l.splice(n,1),o&&(s>=n&&s--,u>=n&&u--)}),this},has:function(e){return st.inArray(e,l)>-1},empty:function(){return l=[],this},disable:function(){return l=c=n=t,this},disabled:function(){return!l},lock:function(){return c=t,n||p.disable(),this},locked:function(){return!c},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!c||(o?c.push(t):f(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},st.extend({Deferred:function(e){var t=[["resolve","done",st.Callbacks("once memory"),"resolved"],["reject","fail",st.Callbacks("once memory"),"rejected"],["notify","progress",st.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return st.Deferred(function(n){st.each(t,function(t,o){var a=o[0],s=st.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&st.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?st.extend(e,r):r}},i={};return r.pipe=r.then,st.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=nt.call(arguments),a=o.length,s=1!==a||e&&st.isFunction(e.promise)?a:0,u=1===s?e:st.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?nt.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};if(a>1)for(t=Array(a),n=Array(a),r=Array(a);a>i;i++)o[i]&&st.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--s;return s||u.resolveWith(r,o),u.promise()}}),st.support=function(){var n,r,i,o,a,s,u,l,c,f,p=V.createElement("div");if(p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",r=p.getElementsByTagName("*"),i=p.getElementsByTagName("a")[0],!r||!i||!r.length)return{};o=V.createElement("select"),a=o.appendChild(V.createElement("option")),s=p.getElementsByTagName("input")[0],i.style.cssText="top:1px;float:left;opacity:.5",n={getSetAttribute:"t"!==p.className,leadingWhitespace:3===p.firstChild.nodeType,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(i.getAttribute("style")),hrefNormalized:"/a"===i.getAttribute("href"),opacity:/^0.5/.test(i.style.opacity),cssFloat:!!i.style.cssFloat,checkOn:!!s.value,optSelected:a.selected,enctype:!!V.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==V.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===V.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},s.checked=!0,n.noCloneChecked=s.cloneNode(!0).checked,o.disabled=!0,n.optDisabled=!a.disabled;try{delete p.test}catch(d){n.deleteExpando=!1}s=V.createElement("input"),s.setAttribute("value",""),n.input=""===s.getAttribute("value"),s.value="t",s.setAttribute("type","radio"),n.radioValue="t"===s.value,s.setAttribute("checked","t"),s.setAttribute("name","t"),u=V.createDocumentFragment(),u.appendChild(s),n.appendChecked=s.checked,n.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,p.attachEvent&&(p.attachEvent("onclick",function(){n.noCloneEvent=!1}),p.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})p.setAttribute(l="on"+f,"t"),n[f+"Bubbles"]=l in e||p.attributes[l].expando===!1;return p.style.backgroundClip="content-box",p.cloneNode(!0).style.backgroundClip="",n.clearCloneStyle="content-box"===p.style.backgroundClip,st(function(){var r,i,o,a="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",s=V.getElementsByTagName("body")[0];s&&(r=V.createElement("div"),r.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",s.appendChild(r).appendChild(p),p.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=p.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",c=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",n.reliableHiddenOffsets=c&&0===o[0].offsetHeight,p.innerHTML="",p.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",n.boxSizing=4===p.offsetWidth,n.doesNotIncludeMarginInBodyOffset=1!==s.offsetTop,e.getComputedStyle&&(n.pixelPosition="1%"!==(e.getComputedStyle(p,null)||{}).top,n.boxSizingReliable="4px"===(e.getComputedStyle(p,null)||{width:"4px"}).width,i=p.appendChild(V.createElement("div")),i.style.cssText=p.style.cssText=a,i.style.marginRight=i.style.width="0",p.style.width="1px",n.reliableMarginRight=!parseFloat((e.getComputedStyle(i,null)||{}).marginRight)),p.style.zoom!==t&&(p.innerHTML="",p.style.cssText=a+"width:1px;padding:1px;display:inline;zoom:1",n.inlineBlockNeedsLayout=3===p.offsetWidth,p.style.display="block",p.innerHTML="<div></div>",p.firstChild.style.width="5px",n.shrinkWrapBlocks=3!==p.offsetWidth,s.style.zoom=1),s.removeChild(r),r=p=o=i=null)}),r=o=u=a=i=s=null,n}();var wt=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,Nt=/([A-Z])/g;st.extend({cache:{},expando:"jQuery"+(Z+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?st.cache[e[st.expando]]:e[st.expando],!!e&&!s(e)},data:function(e,t,n){return i(e,t,n,!1)},removeData:function(e,t){return o(e,t,!1)},_data:function(e,t,n){return i(e,t,n,!0)},_removeData:function(e,t){return o(e,t,!0)},acceptData:function(e){var t=e.nodeName&&st.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),st.fn.extend({data:function(e,n){var r,i,o=this[0],s=0,u=null;if(e===t){if(this.length&&(u=st.data(o),1===o.nodeType&&!st._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>s;s++)i=r[s].name,i.indexOf("data-")||(i=st.camelCase(i.substring(5)),a(o,i,u[i]));st._data(o,"parsedAttrs",!0)}return u}return"object"==typeof e?this.each(function(){st.data(this,e)}):st.access(this,function(n){return n===t?o?a(o,e,st.data(o,e)):null:(this.each(function(){st.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){st.removeData(this,e)})}}),st.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=st._data(e,n),r&&(!i||st.isArray(r)?i=st._data(e,n,st.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=st.queue(e,t),r=n.length,i=n.shift(),o=st._queueHooks(e,t),a=function(){st.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return st._data(e,n)||st._data(e,n,{empty:st.Callbacks("once memory").add(function(){st._removeData(e,t+"queue"),st._removeData(e,n)})})}}),st.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?st.queue(this[0],e):n===t?this:this.each(function(){var t=st.queue(this,e,n);st._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&st.dequeue(this,e)})},dequeue:function(e){return this.each(function(){st.dequeue(this,e)})},delay:function(e,t){return e=st.fx?st.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=st.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};for("string"!=typeof e&&(n=e,e=t),e=e||"fx";s--;)r=st._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var Ct,kt,Et=/[\t\r\n]/g,St=/\r/g,At=/^(?:input|select|textarea|button|object)$/i,jt=/^(?:a|area)$/i,Dt=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,Lt=/^(?:checked|selected)$/i,Ht=st.support.getSetAttribute,Mt=st.support.input;st.fn.extend({attr:function(e,t){return st.access(this,st.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){st.removeAttr(this,e)})},prop:function(e,t){return st.access(this,st.prop,e,t,arguments.length>1)},removeProp:function(e){return e=st.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(st.isFunction(e))return this.each(function(t){st(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(lt)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Et," "):" ")){for(o=0;i=t[o++];)0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=st.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(st.isFunction(e))return this.each(function(t){st(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(lt)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Et," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");n.className=e?st.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return st.isFunction(e)?this.each(function(n){st(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var i,o=0,a=st(this),s=t,u=e.match(lt)||[];i=u[o++];)s=r?s:!a.hasClass(i),a[s?"addClass":"removeClass"](i);else("undefined"===n||"boolean"===n)&&(this.className&&st._data(this,"__className__",this.className),this.className=this.className||e===!1?"":st._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Et," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=st.isFunction(e),this.each(function(r){var o,a=st(this);1===this.nodeType&&(o=i?e.call(this,r,a.val()):e,null==o?o="":"number"==typeof o?o+="":st.isArray(o)&&(o=st.map(o,function(e){return null==e?"":e+""})),n=st.valHooks[this.type]||st.valHooks[this.nodeName.toLowerCase()],n&&"set"in n&&n.set(this,o,"value")!==t||(this.value=o))});if(o)return n=st.valHooks[o.type]||st.valHooks[o.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(o,"value"))!==t?r:(r=o.value,"string"==typeof r?r.replace(St,""):null==r?"":r)}}}),st.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(st.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&st.nodeName(n.parentNode,"optgroup"))){if(t=st(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=st.makeArray(t);return st(e).find("option").each(function(){this.selected=st.inArray(st(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return e.getAttribute===t?st.prop(e,n,r):(a=1!==s||!st.isXMLDoc(e),a&&(n=n.toLowerCase(),o=st.attrHooks[n]||(Dt.test(n)?kt:Ct)),r===t?o&&a&&"get"in o&&null!==(i=o.get(e,n))?i:(e.getAttribute!==t&&(i=e.getAttribute(n)),null==i?t:i):null!==r?o&&a&&"set"in o&&(i=o.set(e,r,n))!==t?i:(e.setAttribute(n,r+""),r):(st.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(lt);if(o&&1===e.nodeType)for(;n=o[i++];)r=st.propFix[n]||n,Dt.test(n)?!Ht&&Lt.test(n)?e[st.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:st.attr(e,n,""),e.removeAttribute(Ht?n:r)},attrHooks:{type:{set:function(e,t){if(!st.support.radioValue&&"radio"===t&&st.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!st.isXMLDoc(e),a&&(n=st.propFix[n]||n,o=st.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):At.test(e.nodeName)||jt.test(e.nodeName)&&e.href?0:t}}}}),kt={get:function(e,n){var r=st.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?Mt&&Ht?null!=i:Lt.test(n)?e[st.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?st.removeAttr(e,n):Mt&&Ht||!Lt.test(n)?e.setAttribute(!Ht&&st.propFix[n]||n,n):e[st.camelCase("default-"+n)]=e[n]=!0,n}},Mt&&Ht||(st.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return st.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t
},set:function(e,n,r){return st.nodeName(e,"input")?(e.defaultValue=n,t):Ct&&Ct.set(e,n,r)}}),Ht||(Ct=st.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},st.attrHooks.contenteditable={get:Ct.get,set:function(e,t,n){Ct.set(e,""===t?!1:t,n)}},st.each(["width","height"],function(e,n){st.attrHooks[n]=st.extend(st.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),st.support.hrefNormalized||(st.each(["href","src","width","height"],function(e,n){st.attrHooks[n]=st.extend(st.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),st.each(["href","src"],function(e,t){st.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),st.support.style||(st.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),st.support.optSelected||(st.propHooks.selected=st.extend(st.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),st.support.enctype||(st.propFix.enctype="encoding"),st.support.checkOn||st.each(["radio","checkbox"],function(){st.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),st.each(["radio","checkbox"],function(){st.valHooks[this]=st.extend(st.valHooks[this],{set:function(e,n){return st.isArray(n)?e.checked=st.inArray(st(e).val(),n)>=0:t}})});var qt=/^(?:input|select|textarea)$/i,_t=/^key/,Ft=/^(?:mouse|contextmenu)|click/,Ot=/^(?:focusinfocus|focusoutblur)$/,Bt=/^([^.]*)(?:\.(.+)|)$/;st.event={global:{},add:function(e,n,r,i,o){var a,s,u,l,c,f,p,d,h,g,m,y=3!==e.nodeType&&8!==e.nodeType&&st._data(e);if(y){for(r.handler&&(a=r,r=a.handler,o=a.selector),r.guid||(r.guid=st.guid++),(l=y.events)||(l=y.events={}),(s=y.handle)||(s=y.handle=function(e){return st===t||e&&st.event.triggered===e.type?t:st.event.dispatch.apply(s.elem,arguments)},s.elem=e),n=(n||"").match(lt)||[""],c=n.length;c--;)u=Bt.exec(n[c])||[],h=m=u[1],g=(u[2]||"").split(".").sort(),p=st.event.special[h]||{},h=(o?p.delegateType:p.bindType)||h,p=st.event.special[h]||{},f=st.extend({type:h,origType:m,data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&st.expr.match.needsContext.test(o),namespace:g.join(".")},a),(d=l[h])||(d=l[h]=[],d.delegateCount=0,p.setup&&p.setup.call(e,i,g,s)!==!1||(e.addEventListener?e.addEventListener(h,s,!1):e.attachEvent&&e.attachEvent("on"+h,s))),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=r.guid)),o?d.splice(d.delegateCount++,0,f):d.push(f),st.event.global[h]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,m=st.hasData(e)&&st._data(e);if(m&&(u=m.events)){for(t=(t||"").match(lt)||[""],l=t.length;l--;)if(s=Bt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=st.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||st.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)st.event.remove(e,d+t[l],n,r,!0);st.isEmptyObject(u)&&(delete m.handle,st._removeData(e,"events"))}},trigger:function(n,r,i,o){var a,s,u,l,c,f,p,d=[i||V],h=n.type||n,g=n.namespace?n.namespace.split("."):[];if(s=u=i=i||V,3!==i.nodeType&&8!==i.nodeType&&!Ot.test(h+st.event.triggered)&&(h.indexOf(".")>=0&&(g=h.split("."),h=g.shift(),g.sort()),c=0>h.indexOf(":")&&"on"+h,n=n[st.expando]?n:new st.Event(h,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=g.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:st.makeArray(r,[n]),p=st.event.special[h]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!st.isWindow(i)){for(l=p.delegateType||h,Ot.test(l+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),u=s;u===(i.ownerDocument||V)&&d.push(u.defaultView||u.parentWindow||e)}for(a=0;(s=d[a++])&&!n.isPropagationStopped();)n.type=a>1?l:p.bindType||h,f=(st._data(s,"events")||{})[n.type]&&st._data(s,"handle"),f&&f.apply(s,r),f=c&&s[c],f&&st.acceptData(s)&&f.apply&&f.apply(s,r)===!1&&n.preventDefault();if(n.type=h,!(o||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===h&&st.nodeName(i,"a")||!st.acceptData(i)||!c||!i[h]||st.isWindow(i))){u=i[c],u&&(i[c]=null),st.event.triggered=h;try{i[h]()}catch(m){}st.event.triggered=t,u&&(i[c]=u)}return n.result}},dispatch:function(e){e=st.event.fix(e);var n,r,i,o,a,s=[],u=nt.call(arguments),l=(st._data(this,"events")||{})[e.type]||[],c=st.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(s=st.event.handlers.call(this,e,l),n=0;(o=s[n++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,r=0;(a=o.handlers[r++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(a.namespace))&&(e.handleObj=a,e.data=a.data,i=((st.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u),i!==t&&(e.result=i)===!1&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(l.disabled!==!0||"click"!==e.type){for(i=[],r=0;u>r;r++)a=n[r],o=a.selector+" ",i[o]===t&&(i[o]=a.needsContext?st(o,this).index(l)>=0:st.find(o,this,null,[l]).length),i[o]&&i.push(a);i.length&&s.push({elem:l,handlers:i})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[st.expando])return e;var t,n,r=e,i=st.event.fixHooks[e.type]||{},o=i.props?this.props.concat(i.props):this.props;for(e=new st.Event(r),t=o.length;t--;)n=o[t],e[n]=r[n];return e.target||(e.target=r.srcElement||V),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,i.filter?i.filter(e,r):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,a=n.button,s=n.fromElement;return null==e.pageX&&null!=n.clientX&&(r=e.target.ownerDocument||V,i=r.documentElement,o=r.body,e.pageX=n.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?n.toElement:s),e.which||a===t||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return st.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==V.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===V.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=st.extend(new st.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?st.event.trigger(i,null,t):st.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},st.removeEvent=V.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,n,r){var i="on"+n;e.detachEvent&&(e[i]===t&&(e[i]=null),e.detachEvent(i,r))},st.Event=function(e,n){return this instanceof st.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?u:l):this.type=e,n&&st.extend(this,n),this.timeStamp=e&&e.timeStamp||st.now(),this[st.expando]=!0,t):new st.Event(e,n)},st.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=u,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=u,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u,this.stopPropagation()}},st.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){st.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!st.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),st.support.submitBubbles||(st.event.special.submit={setup:function(){return st.nodeName(this,"form")?!1:(st.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=st.nodeName(n,"input")||st.nodeName(n,"button")?n.form:t;r&&!st._data(r,"submitBubbles")&&(st.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),st._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&st.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return st.nodeName(this,"form")?!1:(st.event.remove(this,"._submit"),t)}}),st.support.changeBubbles||(st.event.special.change={setup:function(){return qt.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(st.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),st.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),st.event.simulate("change",this,e,!0)})),!1):(st.event.add(this,"beforeactivate._change",function(e){var t=e.target;qt.test(t.nodeName)&&!st._data(t,"changeBubbles")&&(st.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||st.event.simulate("change",this.parentNode,e,!0)}),st._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return st.event.remove(this,"._change"),!qt.test(this.nodeName)}}),st.support.focusinBubbles||st.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){st.event.simulate(t,e.target,st.event.fix(e),!0)};st.event.special[t]={setup:function(){0===n++&&V.addEventListener(e,r,!0)},teardown:function(){0===--n&&V.removeEventListener(e,r,!0)}}}),st.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(s in e)this.on(s,n,r,e[s],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=l;else if(!i)return this;return 1===o&&(a=i,i=function(e){return st().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=st.guid++)),this.each(function(){st.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,st(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=l),this.each(function(){st.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){st.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?st.event.trigger(e,n,r,!0):t},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){st.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)},_t.test(t)&&(st.event.fixHooks[t]=st.event.keyHooks),Ft.test(t)&&(st.event.fixHooks[t]=st.event.mouseHooks)}),function(e,t){function n(e){return ht.test(e+"")}function r(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>C.cacheLength&&delete e[t.shift()],e[n]=r}}function i(e){return e[P]=!0,e}function o(e){var t=L.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function a(e,t,n,r){var i,o,a,s,u,l,c,d,h,g;if((t?t.ownerDocument||t:R)!==L&&D(t),t=t||L,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!M&&!r){if(i=gt.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&O(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return Q.apply(n,K.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&W.getByClassName&&t.getElementsByClassName)return Q.apply(n,K.call(t.getElementsByClassName(a),0)),n}if(W.qsa&&!q.test(e)){if(c=!0,d=P,h=t,g=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(l=f(e),(c=t.getAttribute("id"))?d=c.replace(vt,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",u=l.length;u--;)l[u]=d+p(l[u]);h=dt.test(e)&&t.parentNode||t,g=l.join(",")}if(g)try{return Q.apply(n,K.call(h.querySelectorAll(g),0)),n}catch(m){}finally{c||t.removeAttribute("id")}}}return x(e.replace(at,"$1"),t,n,r)}function s(e,t){for(var n=e&&t&&e.nextSibling;n;n=n.nextSibling)if(n===t)return-1;return e?1:-1}function u(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return i(function(t){return t=+t,i(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function f(e,t){var n,r,i,o,s,u,l,c=X[e+" "];if(c)return t?0:c.slice(0);for(s=e,u=[],l=C.preFilter;s;){(!n||(r=ut.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(i=[])),n=!1,(r=lt.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(at," ")}),s=s.slice(n.length));for(o in C.filter)!(r=pt[o].exec(s))||l[o]&&!(r=l[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?a.error(e):X(e,u).slice(0)}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===t.dir,o=I++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l,c=$+" "+o;if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i)if(l=t[P]||(t[P]={}),(u=l[r])&&u[0]===c){if((s=u[1])===!0||s===N)return s===!0}else if(u=l[r]=[c],u[1]=e(t,n,a)||N,u[1]===!0)return!0}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function m(e,t,n,r,o,a){return r&&!r[P]&&(r=m(r)),o&&!o[P]&&(o=m(o,a)),i(function(i,a,s,u){var l,c,f,p=[],d=[],h=a.length,m=i||b(t||"*",s.nodeType?[s]:s,[]),y=!e||!i&&t?m:g(m,p,e,s,u),v=n?o||(i?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r)for(l=g(v,d),r(l,[],s,u),c=l.length;c--;)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f));if(i){if(o||e){if(o){for(l=[],c=v.length;c--;)(f=v[c])&&l.push(y[c]=f);o(null,v=[],l,u)}for(c=v.length;c--;)(f=v[c])&&(l=o?Z.call(i,f):p[c])>-1&&(i[l]=!(a[l]=f))}}else v=g(v===a?v.splice(h,v.length):v),o?o(null,a,v,u):Q.apply(a,v)})}function y(e){for(var t,n,r,i=e.length,o=C.relative[e[0].type],a=o||C.relative[" "],s=o?1:0,u=d(function(e){return e===t},a,!0),l=d(function(e){return Z.call(t,e)>-1},a,!0),c=[function(e,n,r){return!o&&(r||n!==j)||((t=n).nodeType?u(e,n,r):l(e,n,r))}];i>s;s++)if(n=C.relative[e[s].type])c=[d(h(c),n)];else{if(n=C.filter[e[s].type].apply(null,e[s].matches),n[P]){for(r=++s;i>r&&!C.relative[e[r].type];r++);return m(s>1&&h(c),s>1&&p(e.slice(0,s-1)).replace(at,"$1"),n,r>s&&y(e.slice(s,r)),i>r&&y(e=e.slice(r)),i>r&&p(e))}c.push(n)}return h(c)}function v(e,t){var n=0,r=t.length>0,o=e.length>0,s=function(i,s,u,l,c){var f,p,d,h=[],m=0,y="0",v=i&&[],b=null!=c,x=j,T=i||o&&C.find.TAG("*",c&&s.parentNode||s),w=$+=null==x?1:Math.E;for(b&&(j=s!==L&&s,N=n);null!=(f=T[y]);y++){if(o&&f){for(p=0;d=e[p];p++)if(d(f,s,u)){l.push(f);break}b&&($=w,N=++n)}r&&((f=!d&&f)&&m--,i&&v.push(f))}if(m+=y,r&&y!==m){for(p=0;d=t[p];p++)d(v,h,s,u);if(i){if(m>0)for(;y--;)v[y]||h[y]||(h[y]=G.call(l));h=g(h)}Q.apply(l,h),b&&!i&&h.length>0&&m+t.length>1&&a.uniqueSort(l)}return b&&($=w,j=x),v};return r?i(s):s}function b(e,t,n){for(var r=0,i=t.length;i>r;r++)a(e,t[r],n);return n}function x(e,t,n,r){var i,o,a,s,u,l=f(e);if(!r&&1===l.length){if(o=l[0]=l[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&!M&&C.relative[o[1].type]){if(t=C.find.ID(a.matches[0].replace(xt,Tt),t)[0],!t)return n;e=e.slice(o.shift().value.length)}for(i=pt.needsContext.test(e)?-1:o.length-1;i>=0&&(a=o[i],!C.relative[s=a.type]);i--)if((u=C.find[s])&&(r=u(a.matches[0].replace(xt,Tt),dt.test(o[0].type)&&t.parentNode||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return Q.apply(n,K.call(r,0)),n;break}}return S(e,l)(r,t,M,n,dt.test(e)),n}function T(){}var w,N,C,k,E,S,A,j,D,L,H,M,q,_,F,O,B,P="sizzle"+-new Date,R=e.document,W={},$=0,I=0,z=r(),X=r(),U=r(),V=typeof t,Y=1<<31,J=[],G=J.pop,Q=J.push,K=J.slice,Z=J.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},et="[\\x20\\t\\r\\n\\f]",tt="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",nt=tt.replace("w","w#"),rt="([*^$|!~]?=)",it="\\["+et+"*("+tt+")"+et+"*(?:"+rt+et+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+nt+")|)|)"+et+"*\\]",ot=":("+tt+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+it.replace(3,8)+")*)|.*)\\)|)",at=RegExp("^"+et+"+|((?:^|[^\\\\])(?:\\\\.)*)"+et+"+$","g"),ut=RegExp("^"+et+"*,"+et+"*"),lt=RegExp("^"+et+"*([\\x20\\t\\r\\n\\f>+~])"+et+"*"),ct=RegExp(ot),ft=RegExp("^"+nt+"$"),pt={ID:RegExp("^#("+tt+")"),CLASS:RegExp("^\\.("+tt+")"),NAME:RegExp("^\\[name=['\"]?("+tt+")['\"]?\\]"),TAG:RegExp("^("+tt.replace("w","w*")+")"),ATTR:RegExp("^"+it),PSEUDO:RegExp("^"+ot),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+et+"*(even|odd|(([+-]|)(\\d*)n|)"+et+"*(?:([+-]|)"+et+"*(\\d+)|))"+et+"*\\)|)","i"),needsContext:RegExp("^"+et+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+et+"*((?:-\\d)?\\d*)"+et+"*\\)|)(?=[^-]|$)","i")},dt=/[\x20\t\r\n\f]*[+~]/,ht=/\{\s*\[native code\]\s*\}/,gt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,mt=/^(?:input|select|textarea|button)$/i,yt=/^h\d$/i,vt=/'|\\/g,bt=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,xt=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,Tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{K.call(H.childNodes,0)[0].nodeType}catch(wt){K=function(e){for(var t,n=[];t=this[e];e++)n.push(t);return n}}E=a.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},D=a.setDocument=function(e){var r=e?e.ownerDocument||e:R;return r!==L&&9===r.nodeType&&r.documentElement?(L=r,H=r.documentElement,M=E(r),W.tagNameNoComments=o(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),W.attributes=o(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),W.getByClassName=o(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),W.getByName=o(function(e){e.id=P+0,e.innerHTML="<a name='"+P+"'></a><div name='"+P+"'></div>",H.insertBefore(e,H.firstChild);var t=r.getElementsByName&&r.getElementsByName(P).length===2+r.getElementsByName(P+0).length;return W.getIdNotName=!r.getElementById(P),H.removeChild(e),t}),C.attrHandle=o(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==V&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},W.getIdNotName?(C.find.ID=function(e,t){if(typeof t.getElementById!==V&&!M){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},C.filter.ID=function(e){var t=e.replace(xt,Tt);return function(e){return e.getAttribute("id")===t}}):(C.find.ID=function(e,n){if(typeof n.getElementById!==V&&!M){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==V&&r.getAttributeNode("id").value===e?[r]:t:[]}},C.filter.ID=function(e){var t=e.replace(xt,Tt);return function(e){var n=typeof e.getAttributeNode!==V&&e.getAttributeNode("id");return n&&n.value===t}}),C.find.TAG=W.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==V?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i];i++)1===n.nodeType&&r.push(n);return r}return o},C.find.NAME=W.getByName&&function(e,n){return typeof n.getElementsByName!==V?n.getElementsByName(name):t},C.find.CLASS=W.getByClassName&&function(e,n){return typeof n.getElementsByClassName===V||M?t:n.getElementsByClassName(e)},_=[],q=[":focus"],(W.qsa=n(r.querySelectorAll))&&(o(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||q.push("\\["+et+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||q.push(":checked")}),o(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&q.push("[*^$]="+et+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),q.push(",.*:")})),(W.matchesSelector=n(F=H.matchesSelector||H.mozMatchesSelector||H.webkitMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&o(function(e){W.disconnectedMatch=F.call(e,"div"),F.call(e,"[s!='']:x"),_.push("!=",ot)}),q=RegExp(q.join("|")),_=RegExp(_.join("|")),O=n(H.contains)||H.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},B=H.compareDocumentPosition?function(e,t){var n;return e===t?(A=!0,0):(n=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&n||e.parentNode&&11===e.parentNode.nodeType?e===r||O(R,e)?-1:t===r||O(R,t)?1:0:4&n?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var n,i=0,o=e.parentNode,a=t.parentNode,u=[e],l=[t];if(e===t)return A=!0,0;if(e.sourceIndex&&t.sourceIndex)return(~t.sourceIndex||Y)-(O(R,e)&&~e.sourceIndex||Y);if(!o||!a)return e===r?-1:t===r?1:o?-1:a?1:0;if(o===a)return s(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;u[i]===l[i];)i++;return i?s(u[i],l[i]):u[i]===R?-1:l[i]===R?1:0},A=!1,[0,0].sort(B),W.detectDuplicates=A,L):L},a.matches=function(e,t){return a(e,null,null,t)},a.matchesSelector=function(e,t){if((e.ownerDocument||e)!==L&&D(e),t=t.replace(bt,"='$1']"),!(!W.matchesSelector||M||_&&_.test(t)||q.test(t)))try{var n=F.call(e,t);if(n||W.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return a(t,L,null,[e]).length>0},a.contains=function(e,t){return(e.ownerDocument||e)!==L&&D(e),O(e,t)},a.attr=function(e,t){var n;return(e.ownerDocument||e)!==L&&D(e),M||(t=t.toLowerCase()),(n=C.attrHandle[t])?n(e):M||W.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},a.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},a.uniqueSort=function(e){var t,n=[],r=1,i=0;if(A=!W.detectDuplicates,e.sort(B),A){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return e},k=a.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=k(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=k(t);return n},C=a.selectors={cacheLength:50,createPseudo:i,match:pt,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xt,Tt),e[3]=(e[4]||e[5]||"").replace(xt,Tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||a.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&a.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return pt.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&ct.test(n)&&(t=f(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(xt,Tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=z[e+" "];return t||(t=RegExp("(^|"+et+")"+e+"("+et+"|$)"))&&z(e,function(e){return t.test(e.className||typeof e.getAttribute!==V&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=a.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.substr(i.length-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){for(c=m[P]||(m[P]={}),l=c[e]||[],d=l[0]===$&&l[1],p=l[0]===$&&l[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[$,d,p];break}}else if(v&&(l=(t[P]||(t[P]={}))[e])&&l[0]===$)p=l[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++p||(v&&((f[P]||(f[P]={}))[e]=[$,p]),f!==t)););return p-=i,p===r||0===p%r&&p/r>=0}}},PSEUDO:function(e,t){var n,r=C.pseudos[e]||C.setFilters[e.toLowerCase()]||a.error("unsupported pseudo: "+e);return r[P]?r(t):r.length>1?(n=[e,e,"",t],C.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,n){for(var i,o=r(e,t),a=o.length;a--;)i=Z.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:i(function(e){var t=[],n=[],r=S(e.replace(at,"$1"));return r[P]?i(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:i(function(e){return function(t){return a(e,t).length>0}}),contains:i(function(e){return function(t){return(t.textContent||t.innerText||k(t)).indexOf(e)>-1}}),lang:i(function(e){return ft.test(e||"")||a.error("unsupported lang: "+e),e=e.replace(xt,Tt).toLowerCase(),function(t){var n;do if(n=M?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!C.pseudos.empty(e)},header:function(e){return yt.test(e.nodeName)},input:function(e){return mt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=0>n?n+t:n;t>++r;)e.push(r);return e})}};for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})C.pseudos[w]=u(w);for(w in{submit:!0,reset:!0})C.pseudos[w]=l(w);S=a.compile=function(e,t){var n,r=[],i=[],o=U[e+" "];if(!o){for(t||(t=f(e)),n=t.length;n--;)o=y(t[n]),o[P]?r.push(o):i.push(o);o=U(e,v(i,r))}return o},C.pseudos.nth=C.pseudos.eq,C.filters=T.prototype=C.pseudos,C.setFilters=new T,D(),a.attr=st.attr,st.find=a,st.expr=a.selectors,st.expr[":"]=st.expr.pseudos,st.unique=a.uniqueSort,st.text=a.getText,st.isXMLDoc=a.isXML,st.contains=a.contains}(e);var Pt=/Until$/,Rt=/^(?:parents|prev(?:Until|All))/,Wt=/^.[^:#\[\.,]*$/,$t=st.expr.match.needsContext,It={children:!0,contents:!0,next:!0,prev:!0};st.fn.extend({find:function(e){var t,n,r;if("string"!=typeof e)return r=this,this.pushStack(st(e).filter(function(){for(t=0;r.length>t;t++)if(st.contains(r[t],this))return!0}));for(n=[],t=0;this.length>t;t++)st.find(e,this[t],n);return n=this.pushStack(st.unique(n)),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=st(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(st.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(f(this,e,!1))},filter:function(e){return this.pushStack(f(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?$t.test(e)?st(e,this.context).index(this[0])>=0:st.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=$t.test(e)||"string"!=typeof e?st(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n.ownerDocument&&n!==t&&11!==n.nodeType;){if(a?a.index(n)>-1:st.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}return this.pushStack(o.length>1?st.unique(o):o)},index:function(e){return e?"string"==typeof e?st.inArray(this[0],st(e)):st.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?st(e,t):st.makeArray(e&&e.nodeType?[e]:e),r=st.merge(this.get(),n);return this.pushStack(st.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),st.fn.andSelf=st.fn.addBack,st.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return st.dir(e,"parentNode")},parentsUntil:function(e,t,n){return st.dir(e,"parentNode",n)},next:function(e){return c(e,"nextSibling")},prev:function(e){return c(e,"previousSibling")
},nextAll:function(e){return st.dir(e,"nextSibling")},prevAll:function(e){return st.dir(e,"previousSibling")},nextUntil:function(e,t,n){return st.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return st.dir(e,"previousSibling",n)},siblings:function(e){return st.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return st.sibling(e.firstChild)},contents:function(e){return st.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:st.merge([],e.childNodes)}},function(e,t){st.fn[e]=function(n,r){var i=st.map(this,t,n);return Pt.test(e)||(r=n),r&&"string"==typeof r&&(i=st.filter(r,i)),i=this.length>1&&!It[e]?st.unique(i):i,this.length>1&&Rt.test(e)&&(i=i.reverse()),this.pushStack(i)}}),st.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?st.find.matchesSelector(t[0],e)?[t[0]]:[]:st.find.matches(e,t)},dir:function(e,n,r){for(var i=[],o=e[n];o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!st(o).is(r));)1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var zt="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Xt=/ jQuery\d+="(?:null|\d+)"/g,Ut=RegExp("<(?:"+zt+")[\\s/>]","i"),Vt=/^\s+/,Yt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Jt=/<([\w:]+)/,Gt=/<tbody/i,Qt=/<|&#?\w+;/,Kt=/<(?:script|style|link)/i,Zt=/^(?:checkbox|radio)$/i,en=/checked\s*(?:[^=]|=\s*.checked.)/i,tn=/^$|\/(?:java|ecma)script/i,nn=/^true\/(.*)/,rn=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,on={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:st.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},an=p(V),sn=an.appendChild(V.createElement("div"));on.optgroup=on.option,on.tbody=on.tfoot=on.colgroup=on.caption=on.thead,on.th=on.td,st.fn.extend({text:function(e){return st.access(this,function(e){return e===t?st.text(this):this.empty().append((this[0]&&this[0].ownerDocument||V).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(st.isFunction(e))return this.each(function(t){st(this).wrapAll(e.call(this,t))});if(this[0]){var t=st(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return st.isFunction(e)?this.each(function(t){st(this).wrapInner(e.call(this,t))}):this.each(function(){var t=st(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=st.isFunction(e);return this.each(function(n){st(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){st.nodeName(this,"body")||st(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=0;null!=(n=this[r]);r++)(!e||st.filter(e,[n]).length>0)&&(t||1!==n.nodeType||st.cleanData(b(n)),n.parentNode&&(t&&st.contains(n.ownerDocument,n)&&m(b(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&st.cleanData(b(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&st.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return st.clone(this,e,t)})},html:function(e){return st.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(Xt,""):t;if(!("string"!=typeof e||Kt.test(e)||!st.support.htmlSerialize&&Ut.test(e)||!st.support.leadingWhitespace&&Vt.test(e)||on[(Jt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(Yt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(st.cleanData(b(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=st.isFunction(e);return t||"string"==typeof e||(e=st(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;(n&&1===this.nodeType||11===this.nodeType)&&(st(this).remove(),t?t.parentNode.insertBefore(e,t):n.appendChild(e))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=et.apply([],e);var i,o,a,s,u,l,c=0,f=this.length,p=this,m=f-1,y=e[0],v=st.isFunction(y);if(v||!(1>=f||"string"!=typeof y||st.support.checkClone)&&en.test(y))return this.each(function(i){var o=p.eq(i);v&&(e[0]=y.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(f&&(i=st.buildFragment(e,this[0].ownerDocument,!1,this),o=i.firstChild,1===i.childNodes.length&&(i=o),o)){for(n=n&&st.nodeName(o,"tr"),a=st.map(b(i,"script"),h),s=a.length;f>c;c++)u=i,c!==m&&(u=st.clone(u,!0,!0),s&&st.merge(a,b(u,"script"))),r.call(n&&st.nodeName(this[c],"table")?d(this[c],"tbody"):this[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,st.map(a,g),c=0;s>c;c++)u=a[c],tn.test(u.type||"")&&!st._data(u,"globalEval")&&st.contains(l,u)&&(u.src?st.ajax({url:u.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):st.globalEval((u.text||u.textContent||u.innerHTML||"").replace(rn,"")));i=o=null}return this}}),st.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){st.fn[e]=function(e){for(var n,r=0,i=[],o=st(e),a=o.length-1;a>=r;r++)n=r===a?this:this.clone(!0),st(o[r])[t](n),tt.apply(i,n.get());return this.pushStack(i)}}),st.extend({clone:function(e,t,n){var r,i,o,a,s,u=st.contains(e.ownerDocument,e);if(st.support.html5Clone||st.isXMLDoc(e)||!Ut.test("<"+e.nodeName+">")?s=e.cloneNode(!0):(sn.innerHTML=e.outerHTML,sn.removeChild(s=sn.firstChild)),!(st.support.noCloneEvent&&st.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||st.isXMLDoc(e)))for(r=b(s),i=b(e),a=0;null!=(o=i[a]);++a)r[a]&&v(o,r[a]);if(t)if(n)for(i=i||b(e),r=r||b(s),a=0;null!=(o=i[a]);a++)y(o,r[a]);else y(e,s);return r=b(s,"script"),r.length>0&&m(r,!u&&b(e,"script")),r=i=o=null,s},buildFragment:function(e,t,n,r){for(var i,o,a,s,u,l,c,f=e.length,d=p(t),h=[],g=0;f>g;g++)if(o=e[g],o||0===o)if("object"===st.type(o))st.merge(h,o.nodeType?[o]:o);else if(Qt.test(o)){for(s=s||d.appendChild(t.createElement("div")),a=(Jt.exec(o)||["",""])[1].toLowerCase(),u=on[a]||on._default,s.innerHTML=u[1]+o.replace(Yt,"<$1></$2>")+u[2],c=u[0];c--;)s=s.lastChild;if(!st.support.leadingWhitespace&&Vt.test(o)&&h.push(t.createTextNode(Vt.exec(o)[0])),!st.support.tbody)for(o="table"!==a||Gt.test(o)?"<table>"!==u[1]||Gt.test(o)?0:s:s.firstChild,c=o&&o.childNodes.length;c--;)st.nodeName(l=o.childNodes[c],"tbody")&&!l.childNodes.length&&o.removeChild(l);for(st.merge(h,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=d.lastChild}else h.push(t.createTextNode(o));for(s&&d.removeChild(s),st.support.appendChecked||st.grep(b(h,"input"),x),g=0;o=h[g++];)if((!r||-1===st.inArray(o,r))&&(i=st.contains(o.ownerDocument,o),s=b(d.appendChild(o),"script"),i&&m(s),n))for(c=0;o=s[c++];)tn.test(o.type||"")&&n.push(o);return s=null,d},cleanData:function(e,n){for(var r,i,o,a,s=0,u=st.expando,l=st.cache,c=st.support.deleteExpando,f=st.event.special;null!=(o=e[s]);s++)if((n||st.acceptData(o))&&(i=o[u],r=i&&l[i])){if(r.events)for(a in r.events)f[a]?st.event.remove(o,a):st.removeEvent(o,a,r.handle);l[i]&&(delete l[i],c?delete o[u]:o.removeAttribute!==t?o.removeAttribute(u):o[u]=null,K.push(i))}}});var un,ln,cn,fn=/alpha\([^)]*\)/i,pn=/opacity\s*=\s*([^)]*)/,dn=/^(top|right|bottom|left)$/,hn=/^(none|table(?!-c[ea]).+)/,gn=/^margin/,mn=RegExp("^("+ut+")(.*)$","i"),yn=RegExp("^("+ut+")(?!px)[a-z%]+$","i"),vn=RegExp("^([+-])=("+ut+")","i"),bn={BODY:"block"},xn={position:"absolute",visibility:"hidden",display:"block"},Tn={letterSpacing:0,fontWeight:400},wn=["Top","Right","Bottom","Left"],Nn=["Webkit","O","Moz","ms"];st.fn.extend({css:function(e,n){return st.access(this,function(e,n,r){var i,o,a={},s=0;if(st.isArray(n)){for(i=ln(e),o=n.length;o>s;s++)a[n[s]]=st.css(e,n[s],!1,i);return a}return r!==t?st.style(e,n,r):st.css(e,n)},e,n,arguments.length>1)},show:function(){return N(this,!0)},hide:function(){return N(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:w(this))?st(this).show():st(this).hide()})}}),st.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=un(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":st.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=st.camelCase(n),l=e.style;if(n=st.cssProps[u]||(st.cssProps[u]=T(l,u)),s=st.cssHooks[n]||st.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=vn.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(st.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||st.cssNumber[u]||(r+="px"),st.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=st.camelCase(n);return n=st.cssProps[u]||(st.cssProps[u]=T(e.style,u)),s=st.cssHooks[n]||st.cssHooks[u],s&&"get"in s&&(o=s.get(e,!0,r)),o===t&&(o=un(e,n,i)),"normal"===o&&n in Tn&&(o=Tn[n]),r?(a=parseFloat(o),r===!0||st.isNumeric(a)?a||0:o):o},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(ln=function(t){return e.getComputedStyle(t,null)},un=function(e,n,r){var i,o,a,s=r||ln(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||st.contains(e.ownerDocument,e)||(u=st.style(e,n)),yn.test(u)&&gn.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):V.documentElement.currentStyle&&(ln=function(e){return e.currentStyle},un=function(e,n,r){var i,o,a,s=r||ln(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),yn.test(u)&&!dn.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u}),st.each(["height","width"],function(e,n){st.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&hn.test(st.css(e,"display"))?st.swap(e,xn,function(){return E(e,n,i)}):E(e,n,i):t},set:function(e,t,r){var i=r&&ln(e);return C(e,t,r?k(e,n,r,st.support.boxSizing&&"border-box"===st.css(e,"boxSizing",!1,i),i):0)}}}),st.support.opacity||(st.cssHooks.opacity={get:function(e,t){return pn.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=st.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===st.trim(o.replace(fn,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=fn.test(o)?o.replace(fn,i):o+" "+i)}}),st(function(){st.support.reliableMarginRight||(st.cssHooks.marginRight={get:function(e,n){return n?st.swap(e,{display:"inline-block"},un,[e,"marginRight"]):t}}),!st.support.pixelPosition&&st.fn.position&&st.each(["top","left"],function(e,n){st.cssHooks[n]={get:function(e,r){return r?(r=un(e,n),yn.test(r)?st(e).position()[n]+"px":r):t}}})}),st.expr&&st.expr.filters&&(st.expr.filters.hidden=function(e){return 0===e.offsetWidth&&0===e.offsetHeight||!st.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||st.css(e,"display"))},st.expr.filters.visible=function(e){return!st.expr.filters.hidden(e)}),st.each({margin:"",padding:"",border:"Width"},function(e,t){st.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+wn[r]+t]=o[r]||o[r-2]||o[0];return i}},gn.test(e)||(st.cssHooks[e+t].set=C)});var Cn=/%20/g,kn=/\[\]$/,En=/\r?\n/g,Sn=/^(?:submit|button|image|reset)$/i,An=/^(?:input|select|textarea|keygen)/i;st.fn.extend({serialize:function(){return st.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=st.prop(this,"elements");return e?st.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!st(this).is(":disabled")&&An.test(this.nodeName)&&!Sn.test(e)&&(this.checked||!Zt.test(e))}).map(function(e,t){var n=st(this).val();return null==n?null:st.isArray(n)?st.map(n,function(e){return{name:t.name,value:e.replace(En,"\r\n")}}):{name:t.name,value:n.replace(En,"\r\n")}}).get()}}),st.param=function(e,n){var r,i=[],o=function(e,t){t=st.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=st.ajaxSettings&&st.ajaxSettings.traditional),st.isArray(e)||e.jquery&&!st.isPlainObject(e))st.each(e,function(){o(this.name,this.value)});else for(r in e)j(r,e[r],n,o);return i.join("&").replace(Cn,"+")};var jn,Dn,Ln=st.now(),Hn=/\?/,Mn=/#.*$/,qn=/([?&])_=[^&]*/,_n=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Fn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,On=/^(?:GET|HEAD)$/,Bn=/^\/\//,Pn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Rn=st.fn.load,Wn={},$n={},In="*/".concat("*");try{Dn=Y.href}catch(zn){Dn=V.createElement("a"),Dn.href="",Dn=Dn.href}jn=Pn.exec(Dn.toLowerCase())||[],st.fn.load=function(e,n,r){if("string"!=typeof e&&Rn)return Rn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),st.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(o="POST"),s.length>0&&st.ajax({url:e,type:o,dataType:"html",data:n}).done(function(e){a=arguments,s.html(i?st("<div>").append(st.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,a||[e.responseText,t,e])}),this},st.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){st.fn[t]=function(e){return this.on(t,e)}}),st.each(["get","post"],function(e,n){st[n]=function(e,r,i,o){return st.isFunction(r)&&(o=o||i,i=r,r=t),st.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),st.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Dn,type:"GET",isLocal:Fn.test(jn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":In,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":st.parseJSON,"text xml":st.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?H(H(e,st.ajaxSettings),t):H(st.ajaxSettings,e)},ajaxPrefilter:D(Wn),ajaxTransport:D($n),ajax:function(e,n){function r(e,n,r,s){var l,f,v,b,T,N=n;2!==x&&(x=2,u&&clearTimeout(u),i=t,a=s||"",w.readyState=e>0?4:0,r&&(b=M(p,w,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=w.getResponseHeader("Last-Modified"),T&&(st.lastModified[o]=T),T=w.getResponseHeader("etag"),T&&(st.etag[o]=T)),304===e?(l=!0,N="notmodified"):(l=q(p,b),N=l.state,f=l.data,v=l.error,l=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),w.status=e,w.statusText=(n||N)+"",l?g.resolveWith(d,[f,N,w]):g.rejectWith(d,[w,N,v]),w.statusCode(y),y=t,c&&h.trigger(l?"ajaxSuccess":"ajaxError",[w,p,l?f:v]),m.fireWith(d,[w,N]),c&&(h.trigger("ajaxComplete",[w,p]),--st.active||st.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=t),n=n||{};var i,o,a,s,u,l,c,f,p=st.ajaxSetup({},n),d=p.context||p,h=p.context&&(d.nodeType||d.jquery)?st(d):st.event,g=st.Deferred(),m=st.Callbacks("once memory"),y=p.statusCode||{},v={},b={},x=0,T="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!s)for(s={};t=_n.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=b[n]=b[n]||e,v[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)y[t]=[y[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||T;return i&&i.abort(t),r(0,t),this}};if(g.promise(w).complete=m.add,w.success=w.done,w.error=w.fail,p.url=((e||p.url||Dn)+"").replace(Mn,"").replace(Bn,jn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=st.trim(p.dataType||"*").toLowerCase().match(lt)||[""],null==p.crossDomain&&(l=Pn.exec(p.url.toLowerCase()),p.crossDomain=!(!l||l[1]===jn[1]&&l[2]===jn[2]&&(l[3]||("http:"===l[1]?80:443))==(jn[3]||("http:"===jn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=st.param(p.data,p.traditional)),L(Wn,p,n,w),2===x)return w;c=p.global,c&&0===st.active++&&st.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!On.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(Hn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=qn.test(o)?o.replace(qn,"$1_="+Ln++):o+(Hn.test(o)?"&":"?")+"_="+Ln++)),p.ifModified&&(st.lastModified[o]&&w.setRequestHeader("If-Modified-Since",st.lastModified[o]),st.etag[o]&&w.setRequestHeader("If-None-Match",st.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&w.setRequestHeader("Content-Type",p.contentType),w.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+In+"; q=0.01":""):p.accepts["*"]);for(f in p.headers)w.setRequestHeader(f,p.headers[f]);if(p.beforeSend&&(p.beforeSend.call(d,w,p)===!1||2===x))return w.abort();T="abort";for(f in{success:1,error:1,complete:1})w[f](p[f]);if(i=L($n,p,n,w)){w.readyState=1,c&&h.trigger("ajaxSend",[w,p]),p.async&&p.timeout>0&&(u=setTimeout(function(){w.abort("timeout")},p.timeout));try{x=1,i.send(v,r)}catch(N){if(!(2>x))throw N;r(-1,N)}}else r(-1,"No Transport");return w},getScript:function(e,n){return st.get(e,t,n,"script")},getJSON:function(e,t,n){return st.get(e,t,n,"json")}}),st.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return st.globalEval(e),e}}}),st.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),st.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=V.head||st("head")[0]||V.documentElement;return{send:function(t,i){n=V.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Xn=[],Un=/(=)\?(?=&|$)|\?\?/;st.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xn.pop()||st.expando+"_"+Ln++;return this[e]=!0,e}}),st.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Un.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Un.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=st.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Un,"$1"+o):n.jsonp!==!1&&(n.url+=(Hn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||st.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Xn.push(o)),s&&st.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Vn,Yn,Jn=0,Gn=e.ActiveXObject&&function(){var e;for(e in Vn)Vn[e](t,!0)};st.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&_()||F()}:_,Yn=st.ajaxSettings.xhr(),st.support.cors=!!Yn&&"withCredentials"in Yn,Yn=st.support.ajax=!!Yn,Yn&&st.ajaxTransport(function(n){if(!n.crossDomain||st.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,f,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=st.noop,Gn&&delete Vn[a]),i)4!==u.readyState&&u.abort();else{f={},s=u.status,p=u.responseXML,c=u.getAllResponseHeaders(),p&&p.documentElement&&(f.xml=p),"string"==typeof u.responseText&&(f.text=u.responseText);try{l=u.statusText}catch(d){l=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=f.text?200:404}}catch(h){i||o(-1,h)}f&&o(s,l,f,c)},n.async?4===u.readyState?setTimeout(r):(a=++Jn,Gn&&(Vn||(Vn={},st(e).unload(Gn)),Vn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Qn,Kn,Zn=/^(?:toggle|show|hide)$/,er=RegExp("^(?:([+-])=|)("+ut+")([a-z%]*)$","i"),tr=/queueHooks$/,nr=[W],rr={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=er.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(st.cssNumber[e]?"":"px"),"px"!==r&&s){s=st.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,st.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};st.Animation=st.extend(P,{tweener:function(e,t){st.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],rr[n]=rr[n]||[],rr[n].unshift(t)},prefilter:function(e,t){t?nr.unshift(e):nr.push(e)}}),st.Tween=$,$.prototype={constructor:$,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(st.cssNumber[n]?"":"px")},cur:function(){var e=$.propHooks[this.prop];return e&&e.get?e.get(this):$.propHooks._default.get(this)},run:function(e){var t,n=$.propHooks[this.prop];return this.pos=t=this.options.duration?st.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):$.propHooks._default.set(this),this}},$.prototype.init.prototype=$.prototype,$.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=st.css(e.elem,e.prop,"auto"),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){st.fx.step[e.prop]?st.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[st.cssProps[e.prop]]||st.cssHooks[e.prop])?st.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},$.propHooks.scrollTop=$.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},st.each(["toggle","show","hide"],function(e,t){var n=st.fn[t];st.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(I(t,!0),e,r,i)}}),st.fn.extend({fadeTo:function(e,t,n,r){return this.filter(w).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=st.isEmptyObject(e),o=st.speed(t,n,r),a=function(){var t=P(this,st.extend({},e),o);a.finish=function(){t.stop(!0)},(i||st._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=st.timers,a=st._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&tr.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&st.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=st._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=st.timers,a=r?r.length:0;for(n.finish=!0,st.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),st.each({slideDown:I("show"),slideUp:I("hide"),slideToggle:I("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){st.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),st.speed=function(e,t,n){var r=e&&"object"==typeof e?st.extend({},e):{complete:n||!n&&t||st.isFunction(e)&&e,duration:e,easing:n&&t||t&&!st.isFunction(t)&&t};return r.duration=st.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in st.fx.speeds?st.fx.speeds[r.duration]:st.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){st.isFunction(r.old)&&r.old.call(this),r.queue&&st.dequeue(this,r.queue)},r},st.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},st.timers=[],st.fx=$.prototype.init,st.fx.tick=function(){var e,n=st.timers,r=0;for(Qn=st.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||st.fx.stop(),Qn=t},st.fx.timer=function(e){e()&&st.timers.push(e)&&st.fx.start()},st.fx.interval=13,st.fx.start=function(){Kn||(Kn=setInterval(st.fx.tick,st.fx.interval))},st.fx.stop=function(){clearInterval(Kn),Kn=null},st.fx.speeds={slow:600,fast:200,_default:400},st.fx.step={},st.expr&&st.expr.filters&&(st.expr.filters.animated=function(e){return st.grep(st.timers,function(t){return e===t.elem}).length}),st.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){st.offset.setOffset(this,e,t)});var n,r,i={top:0,left:0},o=this[0],a=o&&o.ownerDocument;if(a)return n=a.documentElement,st.contains(n,o)?(o.getBoundingClientRect!==t&&(i=o.getBoundingClientRect()),r=z(a),{top:i.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:i.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):i},st.offset={setOffset:function(e,t,n){var r=st.css(e,"position");"static"===r&&(e.style.position="relative");var i,o,a=st(e),s=a.offset(),u=st.css(e,"top"),l=st.css(e,"left"),c=("absolute"===r||"fixed"===r)&&st.inArray("auto",[u,l])>-1,f={},p={};c?(p=a.position(),i=p.top,o=p.left):(i=parseFloat(u)||0,o=parseFloat(l)||0),st.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(f.top=t.top-s.top+i),null!=t.left&&(f.left=t.left-s.left+o),"using"in t?t.using.call(e,f):a.css(f)}},st.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===st.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),st.nodeName(e[0],"html")||(n=e.offset()),n.top+=st.css(e[0],"borderTopWidth",!0),n.left+=st.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-st.css(r,"marginTop",!0),left:t.left-n.left-st.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||V.documentElement;e&&!st.nodeName(e,"html")&&"static"===st.css(e,"position");)e=e.offsetParent;return e||V.documentElement})}}),st.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);st.fn[e]=function(i){return st.access(this,function(e,i,o){var a=z(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?st(a).scrollLeft():o,r?o:st(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}}),st.each({Height:"height",Width:"width"},function(e,n){st.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){st.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return st.access(this,function(n,r,i){var o;return st.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?st.css(n,r,s):st.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=st,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return st})})(window);
//@ sourceMappingURL=jquery.min.map
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-rgba-cssanimations-cssgradients-csstransitions-touch-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.rgba=function(){return z("background-color:rgba(150,255,150,.5)"),C(j.backgroundColor,"rgba")},q.cssanimations=function(){return F("animationName")},q.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return z((a+"-webkit- ".split(" ").join(b+a)+m.join(c+a)).slice(0,-a.length)),C(j.backgroundImage,"gradient")},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document);
/*!
 * jQuery Lifestream Plug-in
 * Show a stream of your online activity
 * @version   0.4.3
 * @author    Christian Vuerings et al.
 * @copyright Copyright 2014, Christian Vuerings - http://denbuzze.com
 * @license   https://github.com/christianv/jquery-lifestream/blob/master/LICENSE MIT
 */
/*global jQuery */
;(function( $ ){

  "use strict";

  /**
   * Initialize the lifestream plug-in
   * @param {Object} config Configuration object
   */
  $.fn.lifestream = function( config ) {

    // Make the plug-in chainable
    return this.each(function() {

      // The element where the lifestream is linked to
      var outputElement = $(this),

      // Extend the default settings with the values passed
      settings = jQuery.extend({
        // The name of the main lifestream class
        // We use this for the main ul class e.g. lifestream
        // and for the specific feeds e.g. lifestream-twitter
        classname: "lifestream",
        // Callback function which will be triggered when a feed is loaded
        feedloaded: null,
        // The amount of feed items you want to show
        limit: 10,
        // An array of feed items which you want to use
        list: []
      }, config),

      // The data object contains all the feed items
      data = {
        count: settings.list.length,
        items: []
      },

      // We use the item settings to pass the global settings variable to
      // every feed
      itemsettings = jQuery.extend( true, {}, settings ),

      /**
       * This method will be called every time a feed is loaded. This means
       * that several DOM changes will occur. We did this because otherwise it
       * takes to look before anything shows up.
       * We allow 1 request per feed - so 1 DOM change per feed
       * @private
       * @param {Array} inputdata an array containing all the feeditems for a
       * specific feed.
       */
      finished = function( inputdata ) {

        // Merge the feed items we have from other feeds, with the feeditems
        // from the new feed
        $.merge( data.items, inputdata );

        // Sort the feeditems by date - we want the most recent one first
        data.items.sort( function( a, b ) {
            return ( b.date - a.date );
        });

        var items = data.items,

            // We need to check whether the amount of current feed items is
            // smaller than the main limit. This parameter will be used in the
            // for loop
            length = ( items.length < settings.limit ) ?
              items.length :
              settings.limit,
            i = 0, item,

            // We create an unordered list which will create all the feed
            // items
            ul = $('<ul class="' + settings.classname + '"/>');

        // Run over all the feed items + add them as list items to the
        // unordered list
        for ( ; i < length; i++ ) {
          item = items[i];
          if ( item.html ) {
            $('<li class="'+ settings.classname + '-' +
               item.config.service + '">').data( "name", item.config.service )
                                          .data( "url", item.url || "#" )
                                          .data( "time", item.date )
                                          .append( item.html )
                                          .appendTo( ul );
          }
        }

        // Change the innerHTML with a list of all the feeditems in
        // chronological order
        outputElement.html( ul );

        // Trigger the feedloaded callback, if it is a function
        if ( $.isFunction( settings.feedloaded ) ) {
          settings.feedloaded();
        }

      },

      /**
       * Fire up all the feeds and pass them the right arugments.
       * @private
       */
      load = function() {

        var i = 0, j = settings.list.length;

        // We don't pass the list array to each feed  because this will create
        // a recursive JavaScript object
        delete itemsettings.list;

        // Run over all the items in the list
        for( ; i < j; i++ ) {

          var config = settings.list[i];

          // Check whether the feed exists, if the feed is a function and if a
          // user has been filled in
          if ( $.fn.lifestream.feeds[config.service] &&
               $.isFunction( $.fn.lifestream.feeds[config.service] ) &&
               config.user) {

            // You'll be able to get the global settings by using
            // config._settings in your feed
            config._settings = itemsettings;

            // Call the feed with a config object and finished callback
            $.fn.lifestream.feeds[config.service]( config, finished );
          }

        }

      };

      // Load the jQuery templates plug-in if it wasn't included in the page.
      // At then end we call the load method.
      if( !jQuery.tmpl ) {
        jQuery.getScript(
          '//ajax.aspnetcdn.com/ajax/jquery.templates/beta1/' +
          'jquery.tmpl.min.js',
          load);
      } else {
        load();
      }

    });

  };

  /**
   * Create a valid YQL URL by passing in a query
   * @param {String} query The query you want to convert into a valid yql url
   * @return {String} A valid YQL URL
   */
  $.fn.lifestream.createYqlUrl = function( query ) {
      return ( ('https:' === document.location.protocol ? 'https' : 'http') +
        '://query.yahooapis.com/v1/public/yql?q=__QUERY__' +
        '&env=' + 'store://datatables.org/alltableswithkeys&format=json')
        .replace( "__QUERY__" , encodeURIComponent( query ) );
  };

  /**
   * A big container which contains all available feeds
   */
  $.fn.lifestream.feeds = $.fn.lifestream.feeds || {};

  /**
   * Add compatible Object.keys support in older environments that do not natively support it
   * https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys#section_6
   */
  if(!Object.keys) {
    Object.keys = function(o){
      if (o !== Object(o)) {
        throw new TypeError('Object.keys called on non-object');
      }
      var ret=[],p;
      for(p in o) {
        if(Object.prototype.hasOwnProperty.call(o,p)) {
          ret.push(p);
        }
      }
      return ret;
    };
  }

}( jQuery ));
(function($) {
$.fn.lifestream.feeds.atom = function( config, callback ) {

  var template = $.extend({},
    {
      posted: 'posted <a href="${link.href}">${title.content}</a>'
    },
    config.template),

  /**
   * Parse the input from atom feed
   */
  parseAtom = function( input ) {
    var output = [], list = [], i = 0, j = 0, url = '';
    if(input.query && input.query.count && input.query.count > 0) {
      list = input.query.results.feed.entry;
      j = list.length;

      for( ; i<j; i++) {
        var item = list[i];

        output.push({
          url: item.link.href,
          date: new Date( item.updated ),
          config: config,
          html: $.tmpl( template.posted, item )
        });
      }
    }
    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from xml where url="' +
      config.user + '"'),
    dataType: 'jsonp',
    success: function( data ) {
      callback(parseAtom(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);
(function($) {
$.fn.lifestream.feeds.bitbucket = function( config, callback ) {

  var template = $.extend({},
    {
      commit: '<a href="http://bitbucket.org/${owner}/${name}/changeset/${node}/">committed</a> at <a href="http://bitbucket.org/${owner}/${name}/">${owner}/${name}</a>',
      pullrequest_fulfilled: 'fulfilled a pull request at <a href="http://bitbucket.org/${owner}/${name}/">${owner}/${name}</a>',
      pullrequest_rejected: 'rejected a pull request at <a href="http://bitbucket.org/${owner}/${name}/">${owner}/${name}</a>',
      pullrequest_created: 'created a pull request at <a href="http://bitbucket.org/${owner}/${name}/">${owner}/${name}</a>',
      create: 'created a new project at <a href="http://bitbucket.org/${owner}/${name}/">${owner}/${name}</a>',
      fork: 'forked <a href="http://bitbucket.org/${owner}/${name}/">${owner}/${name}</a>'
    },
    config.template),

  supported_events = [
    "commit",
    "pullrequest_fulfilled",
    "pullrequest_rejected",
    "pullrequest_created",
    "create",
    "fork"
  ],

  parseBitbucketStatus = function( status ) {
    if ($.inArray(status.event, supported_events) !== -1) {
      //bb generates some weird create events, check for repository
      if (status.repository) {
        if (status.event === "commit") {
          return $.tmpl( template.commit, {
            owner: status.repository.owner,
            name: status.repository.name,
            node: status.node
          });
        } else {
          return $.tmpl( template[status.event], {
            owner: status.repository.owner,
            name: status.repository.name
          });
        }
      }
    }
  },

  parseBitbucket = function( input ) {
    var output = [];
    if (input.query && input.query.count && input.query.count > 0) {
      $.each(input.query.results.json, function () {
        output.push({
          date: new Date(this.events.created_on.replace(/-/g, '/')),
          config: config,
          html: parseBitbucketStatus(this.events)
        });
      });
    }

    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select events.event,' +
      'events.node, events.created_on,' +
      'events.repository.name, events.repository.owner ' +
      'from json where url = "https://api.bitbucket.org/1.0/users/' +
      config.user + '/events/"'),
    dataType: 'jsonp',
    success: function( data ) {
      callback(parseBitbucket(data));
    }
  });

  return {
    'template' : template
  };
};
})(jQuery);(function($) {
$.fn.lifestream.feeds.bitly = function( config, callback ) {

  var template = $.extend({},
    {
      created: 'created URL <a href="${short_url}" title="${title}">' +
        '${short_url}</a>'
    },
    config.template);

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select data.short_url, data.created, '+
      'data.title from json where url="' +
      'http://bitly.com/u/' + config.user + '.json"'),
    dataType: "jsonp",
    success: function( input ) {
      var output = [], i = 0, j, list;
      if ( input.query && input.query.count && input.query.results.json ) {
        list = input.query.results.json;
        j = list.length;
        for( ; i < j; i++) {
          var item = list[i].data;
          output.push({
            date: new Date(item.created * 1000),
            config: config,
            html: $.tmpl( template.created, item )
          });
        }
      }
      callback(output);
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.blogger = function( config, callback ) {

  var template = $.extend({},
    {
      posted: 'posted <a href="${origLink}">${title}</a>'
    },
    config.template),

  parseBlogger = function ( input ) {
    var output = [], list, i = 0, j, item, k, l;

    if ( input.query && input.query.count && input.query.count > 0 &&
        input.query.results.feed.entry ) {
      list = input.query.results.feed.entry;
      j = list.length;
      for ( ; i < j; i++) {
        item = list[i];

        if( !item.origLink ) {
          k = 0;
          l = item.link.length;
          for ( ; k < l ; k++ ) {
            if( item.link[k].rel === 'alternate' ) {
              item.origLink = item.link[k].href;
            }
          }
        }
        // ignore items that have no link.
        if ( item.origLink ){
          if( item.title.content ) {
            item.title = item.title.content;
          }

          output.push({
            date: new Date( item.published ),
            config: config,
            html: $.tmpl( template.posted, item )
          });
        }
      }
    }

    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from xml where url="http://' +
      config.user + '.blogspot.com/feeds/posts/default"'),
    dataType: "jsonp",
    success: function ( data ) {
      callback(parseBlogger(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.citeulike = function( config, callback ) {

  var template = $.extend({},
    {
      saved: 'saved <a href="${href}">${title}</a> by ${authors}'
    },
    config.template),

  parseCiteulike = function( data ) {
    var output = [], i = 0, j;

    if(data && data.length && data.length > 0) {
      j = data.length;
      for( ; i<j; i++) {
        var item = data[i];
        output.push({
          date: new Date(item.date),
          config: config,
          url: 'http://www.citeulike.org/user/' + config.user,
          html: $.tmpl( template.saved, item )
        });
      }
    }
    return output;
  };

  $.ajax({
    url: 'http://www.citeulike.org/json/user/' + config.user,
    dataType: 'jsonp',
    success: function( data ) {
      callback(parseCiteulike(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.dailymotion = function( config, callback ) {

  var template = $.extend({},
    {
      uploaded: 'uploaded a video <a href="${link}">${title[0]}</a>'
    },
    config.template),

  parseDailymotion = function( input ) {

    var output = [], list, i = 0, j, item;

    if ( input.query && input.query.count && input.query.count > 0 &&
        input.query.results.rss.channel.item ) {
      list = input.query.results.rss.channel.item;
      j = list.length;
      for ( ; i < j; i++) {
        item = list[i];
        output.push({
          date: new Date ( item.pubDate ),
          config: config,
          html: $.tmpl( template.uploaded, item )
        });
      }
    }

    return output;

  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from xml where ' +
      'url="http://www.dailymotion.com/rss/user/' + config.user + '"'),
    dataType: "jsonp",
    success: function( data ) {
      callback(parseDailymotion(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.delicious = function( config, callback ) {

  var template = $.extend({},
    {
      bookmarked: 'bookmarked <a href="${u}">${d}</a>'
    },
    config.template);

  $.ajax({
    url: "http://feeds.delicious.com/v2/json/" + config.user,
    dataType: "jsonp",
    success: function( data ) {
      var output = [], i = 0, j;
      if (data && data.length && data.length > 0) {
        j = data.length;
        for( ; i < j; i++) {
          var item = data[i];
          output.push({
            date: new Date(item.dt),
            config: config,
            html: $.tmpl( template.bookmarked, item )
          });
        }
      }
      callback(output);
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.deviantart = function( config, callback ) {

  var template = $.extend({},
    {
      posted: 'posted <a href="${link}">${title}</a>'
    },
    config.template);

  $.ajax({
    url: $.fn.lifestream.createYqlUrl(
      'select title,link,pubDate from rss where ' +
      'url="http://backend.deviantart.com/rss.xml?q=gallery%3A' +
      encodeURIComponent(config.user) +
      '&type=deviation' +
      '" | unique(field="title")'
    ),
    dataType: 'jsonp',
    success: function( resp ) {
      var output = [],
        items, item,
        i = 0, j;
      if (resp.query && resp.query.count > 0) {
        items = resp.query.results.item;
        j = items.length;
        for ( ; i < j; i++) {
          item = items[i];
          output.push({
            date: new Date(item.pubDate),
            config: config,
            html: $.tmpl( template.posted, item )
          });
        }
      }
      callback(output);
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.disqus = function( config, callback ) {

  var template = $.extend({},
    {
      post: 'commented on <a href="${url}">${thread.title}</a>',
      thread_like: 'liked <a href="${url}">${thread.title}</a>'
    },
    config.template),

  parseDisqus = function( input ) {
    var output = [], i = 0, j, item;

    if(input) {
      j = input.length;
      for( ; i<j; i++) {
        item = input[i];

        // replies to your comments are included by default
        if (item.type !== 'reply') {
          output.push({
            date: new Date( item.createdAt ),
            config: config,
            html: $.tmpl( template[item.type], item.object )
          });
        }
      }
    }

    return output;
  };

  $.ajax({
    url: "https://disqus.com/api/3.0/users/listActivity.json",
      data: {
        user: config.user,
        api_key: config.key
      },
    dataType: 'jsonp',
    success: function( data ) {
       if (data.code === 2) {
        callback([]);

        // log error to console if not on IE
        if (console && console.error) {
          console.error('Error loading Disqus stream.', data.response);
        }
        return;
      } else {
        callback(parseDisqus(data.response));
      }
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);
(function($) {
$.fn.lifestream.feeds.dribbble = function( config, callback ) {

    var template = $.extend({},
      {
        posted: 'posted a shot <a href="${url}">${title}</a>'
      },
      config.template);

    $.ajax({
      url: "http://api.dribbble.com/players/" + config.user + "/shots",
      dataType: "jsonp",
      success: function( data ) {
        var output = [], i = 0, j;

        if(data && data.total) {
          j = data.shots.length;
          for( ; i<j; i++) {
            var item = data.shots[i];
            output.push({
              date: new Date(item.created_at),
              config: config,
              html: $.tmpl( template.posted, item )
            });
          }
        }

        callback(output);
      }
    });

    // Expose the template.
    // We use this to check which templates are available
    return {
      "template" : template
    };

  };
  })(jQuery);(function($) {
$.fn.lifestream.feeds.facebook_page = function( config, callback ) {

  var template = $.extend({},
    {
      wall_post: 'post on wall <a href="${link}">${title}</a>'
    },
    config.template),

  /**
   * Parse the input from facebook
   */
  parseFBPage = function( input ) {
    var output = [], list, i = 0, j;

    if(input.query && input.query.count && input.query.count >0) {
      list = input.query.results.rss.channel.item;
      j = list.length;
      for( ; i<j; i++) {
        var item = list[i];
        if( $.trim( item.title ) ){
          output.push({
            date: new Date(item.pubDate),
            config: config,
            html: $.tmpl( template.wall_post, item )
          });
        }
      }
    }
    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from xml where url="' +
      'www.facebook.com/feeds/page.php?id=' +
      config.user + '&format=rss20"'),
    dataType: 'jsonp',
    success: function( data ) {
      callback(parseFBPage(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
  'use strict';

  $.fn.lifestream.feeds.fancy = function( config, callback ) {

    var template = $.extend({},
      {
        fancied: 'fancy\'d <a href="${link}">${title}</a>'
      },
      config.template),

    parseFancy = function( input ) {
      var output = [], i = 0, j;

      if(input.query && input.query.count && input.query.count > 0) {
        j = input.query.count;
        for( ; i<j; i++) {
          var item = input.query.results.item[i];
          output.push({
            date: new Date(item.pubDate),
            config: config,
            html: $.tmpl( template.fancied, item )
          });
        }
      }

      return output;
    };

    $.ajax({
      url: $.fn.lifestream.createYqlUrl('SELECT * FROM xml ' +
        'WHERE url="http://www.fancy.com/rss/' + config.user +
        '" AND itemPath="/rss/channel/item"'),
      dataType: 'jsonp',
      success: function( data ) {
        callback(parseFancy(data));
      }
    });

    // Expose the template.
    // We use this to check which templates are available
    return {
      "template" : template
    };

  };
})(jQuery);
(function($) {
$.fn.lifestream.feeds.flickr = function( config, callback ) {

  var template = $.extend({},
    {
      posted: 'posted a photo <a href="${link}">${title}</a>'
    },
    config.template);

  $.ajax({
    url: "http://api.flickr.com/services/feeds/photos_public.gne?id=" +
      config.user + "&lang=en-us&format=json",
    dataType: "jsonp",
    jsonp: 'jsoncallback',
    success: function( data ) {
      var output = [], i = 0, j;

      if(data && data.items && data.items.length > 0) {
        j = data.items.length;
        for( ; i<j; i++) {
          var item = data.items[i];
          output.push({
            date: new Date( item.published ),
            config: config,
            html: $.tmpl( template.posted, item )
          });
        }
      }

      callback(output);
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.foomark = function( config, callback ) {

  var template = $.extend({},
    {
      bookmarked: 'bookmarked <a href="${url}">${url}</a>'
    },
    config.template);

  $.ajax({
    url: "http://api.foomark.com/urls/list/",
    data: {
      format: "jsonp",
      username: config.user
    },
    dataType: "jsonp",
    success: function( data ) {

      var output = [], i=0, j;
      if( data && data.length && data.length > 0 ) {
        j = data.length;
        for( ; i < j; i++ ) {
          var item = data[i];
          output.push({
            date: new Date( item.created_at.replace(/-/g, '/') ),
            config: config,
            html: $.tmpl( template.bookmarked, item )
          });
        }
      }
      callback( output );
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);
(function($) {
$.fn.lifestream.feeds.formspring = function( config, callback ) {

  var template = $.extend({},
    {
      answered: 'answered a question <a href="${link}">${title}</a>'
    },
    config.template);

  var parseFormspring = function ( input ) {
    var output = [], list, i = 0, j, item;

    if ( input.query && input.query.count && input.query.count > 0 &&
        input.query.results.rss.channel.item ) {
      list = input.query.results.rss.channel.item;
      j = list.length;
      for ( ; i < j; i++) {
        item = list[i];

        output.push({
          date: new Date( item.pubDate ),
          config: config,
          html: $.tmpl( template.answered, item )
        });
      }
    }

    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from xml where ' +
      'url="http://www.formspring.me/profile/' + config.user + '.rss"'),
    dataType: "jsonp",
    success: function ( data ) {
      callback(parseFormspring(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.forrst = function( config, callback ) {

  var template = $.extend({},
    {
      posted: 'posted a ${post_type} <a href="${post_url}">${title}</a>'
    },
    config.template);

  $.ajax({
    url: "http://forrst.com/api/v2/users/posts?username=" + config.user,
    dataType: "jsonp",
    success: function(  data  ) {
      var output = [], i=0, j;
      if( data && data.resp.length && data.resp.length > 0 ) {
        j = data.resp.length;
        for( ; i < j; i++ ) {
          var item = data.resp[i];
          output.push({
            date: new Date( item.created_at.replace(' ', 'T') ),
            config: config,
            html: $.tmpl( template.posted, item )
          });
        }
      }
      callback( output );
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.foursquare = function( config, callback ) {

  var template = $.extend({},
    {
      checkedin: 'checked in @ <a href="${link}">${title}</a>'
    },
    config.template),

  parseFoursquare = function( input ) {
    var output = [], i = 0, j;

    if(input.query && input.query.count && input.query.count >0) {
      j = input.query.count;
      for( ; i<j; i++) {
        var item = input.query.results.item[i];
        output.push({
          date: new Date(item.pubDate),
          config: config,
          html: $.tmpl( template.checkedin, item )
        });
      }
    }

    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from rss where url=' +
      '"https://feeds.foursquare.com/history/' +
      config.user + '.rss"'),
    dataType: 'jsonp',
    success: function( data ) {
      callback(parseFoursquare(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.gimmebar = function( config, callback ) {

  var template = $.extend({},
    {
      bookmarked: 'bookmarked <a href="${short_url}">${title}</a>'
    },
    config.template);

  $.ajax({
    url: "https://gimmebar.com/api/v0/public/assets/" + config.user + ".json?jsonp_callback=?",
    dataType: "json",
    success: function( data ) {
      data = data.records;
      var output = [], i = 0, j;
      if (data && data.length && data.length > 0) {
        j = data.length;
        for( ; i < j; i++) {
          var item = data[i];
          output.push({
            date: new Date(item.date * 1000),
            config: config,
            html: $.tmpl( template.bookmarked, item )
          });
        }
      }
      callback(output);
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);
(function($) {
$.fn.lifestream.feeds.github = function( config, callback ) {

  var template = $.extend({},
    {
      commitCommentEvent: 'commented on <a href="http://github.com/' +
        '${status.repo.name}">${status.repo.name}</a>',
      createBranchEvent: 'created branch <a href="http://github.com/' +
        '${status.repo.name}/tree/${status.payload.ref}">' +
        '${status.payload.ref}</a> at <a href="http://github.com/' +
        '${status.repo.name}">${status.repo.name}</a>',
      createRepositoryEvent: 'created repository ' +
        '<a href="http://github.com/' +
        '${status.repo.name}">${status.repo.name}</a>',
      createTagEvent: 'created tag <a href="http://github.com/' +
        '${status.repo.name}/tree/${status.payload.ref}">' +
        '${status.payload.ref}</a> at <a href="http://github.com/' +
        '${status.repo.name}">${status.repo.name}</a>',
      deleteBranchEvent: 'deleted branch ${status.payload.ref} at ' +
        '<a href="http://github.com/${status.repo.name}">' +
        '${status.repo.name}</a>',
      deleteTagEvent: 'deleted tag ${status.payload.ref} at ' +
        '<a href="http://github.com/${status.repo.name}">' +
        '${status.repo.name}</a>',
      followEvent: 'started following <a href="http://github.com/' +
        '${status.payload.target.login}">${status.payload.target.login}</a>',
      forkEvent: 'forked <a href="http://github.com/${status.repo.name}">' +
        '${status.repo.name}</a>',
      gistEvent: '${status.payload.action} gist ' +
        '<a href="http://gist.github.com/${status.payload.gist.id}">' +
        '${status.payload.gist.id}</a>',
      issueCommentEvent: 'commented on issue <a href="http://github.com/' +
        '${status.repo.name}/issues/${status.payload.issue.number}">' +
        '${status.payload.issue.number}</a> on <a href="http://github.com/' +
        '${status.repo.name}">${status.repo.name}</a>',
      issuesEvent: '${status.payload.action} issue ' +
        '<a href="http://github.com/${status.repo.name}/issues/' +
        '${status.payload.issue.number}">${status.payload.issue.number}</a> '+
        'on <a href="http://github.com/${status.repo.name}">' +
        '${status.repo.name}</a>',
      pullRequestEvent: '${status.payload.action} pull request ' +
        '<a href="http://github.com/${status.repo.name}/pull/' +
        '${status.payload.number}">${status.payload.number}</a> on ' +
        '<a href="http://github.com/${status.repo.name}">' +
        '${status.repo.name}</a>',
      pushEvent: 'pushed to <a href="http://github.com/${status.repo.name}' +
        '/tree/${status.payload.ref}">${status.payload.ref}</a> at ' +
        '<a href="http://github.com/${status.repo.name}">' +
        '${status.repo.name}</a>',
      watchEvent: 'started watching <a href="http://github.com/' +
        '${status.repo.name}">${status.repo.name}</a>'
    },
    config.template),

  parseGithubStatus = function( status ) {
    if (status.type === 'CommitCommentEvent' ) {
      return $.tmpl( template.commitCommentEvent, {status: status} );
    }
    else if (status.type === 'CreateEvent' &&
        status.payload.ref_type === 'branch') {
      return $.tmpl( template.createBranchEvent, {status: status} );
    }
    else if (status.type === 'CreateEvent' &&
        status.payload.ref_type === 'repository') {
      return $.tmpl( template.createRepositoryEvent, {status: status} );
    }
    else if (status.type === 'CreateEvent' &&
        status.payload.ref_type === 'tag') {
      return $.tmpl( template.createTagEvent, {status: status} );
    }
    else if (status.type === 'DeleteEvent' &&
        status.payload.ref_type === 'branch') {
      return $.tmpl( template.deleteBranchEvent, {status: status} );
    }
    else if (status.type === 'DeleteEvent' &&
        status.payload.ref_type === 'tag') {
      return $.tmpl( template.deleteTagEvent, {status: status} );
    }
    else if (status.type === 'FollowEvent' ) {
      return $.tmpl( template.followEvent, {status: status} );
    }
    else if (status.type === 'ForkEvent' ) {
      return $.tmpl( template.forkEvent, {status: status} );
    }
    else if (status.type === 'GistEvent' ) {
      if (status.payload.action === 'create') {
        status.payload.action = 'created';
      } else if (status.payload.action === 'update') {
        status.payload.action = 'updated';
      }
      return $.tmpl( template.gistEvent, {status: status} );
    }
    else if (status.type === 'IssueCommentEvent' ) {
      return $.tmpl( template.issueCommentEvent, {status: status} );
    }
    else if (status.type === 'IssuesEvent' ) {
      return $.tmpl( template.issuesEvent, {status: status} );
    }
    else if (status.type === 'PullRequestEvent' ) {
      return $.tmpl( template.pullRequestEvent, {status: status} );
    }
    else if (status.type === 'PushEvent' ) {
      status.payload.ref = status.payload.ref.split('/')[2];
      return $.tmpl( template.pushEvent, {status: status} );
    }
    else if (status.type === 'WatchEvent' ) {
      return $.tmpl( template.watchEvent, {status: status} );
    }
  },

  parseGithub = function( input ) {
    var output = [], i = 0, j;

    if (input.query && input.query.count && input.query.count >0) {
      j = input.query.count;
      for ( ; i<j; i++) {
        var status = input.query.results.json[i].json;
        output.push({
          date: new Date(status.created_at),
          config: config,
          html: parseGithubStatus(status),
          url: 'https://github.com/' + config.user
        });
      }
    }

    return output;

  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select ' +
      'json.type, json.actor, json.repo, json.payload, json.created_at ' +
      'from json where url="https://api.github.com/users/' + config.user +
      '/events/public?per_page=100"'),
    dataType: 'jsonp',
    success: function( data ) {
      callback(parseGithub(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);
(function($) {
$.fn.lifestream.feeds.googleplus = function( config, callback ) {

  var template = $.extend({},
    {
    posted: '<a href="${actor.url}">${actor.displayName}</a>' +
      ' has posted a new entry <a href="${url}" ' +
      'title="${id}">${title}</a> <!--With--> ' +
      '${object.replies.totalItems} replies, ' +
      '${object.plusoners.totalItems} +1s, ' +
      '${object.resharers.totalItems} Reshares'
    },
    config.template),

  parseGooglePlus = function( input ) {
    var output = [], i = 0, j, item;

    if(input && input.items) {
      j = input.items.length;
      for( ; i<j; i++) {
        item = input.items[i];
        output.push({
          date: new Date( item.published ),
          config: config,
          html: $.tmpl( template.posted, item )
        });
      }
    }

    return output;
  };

  $.ajax({
    url: "https://www.googleapis.com/plus/v1/people/" + config.user +
      "/activities/public",
    data: {
      key: config.key
    },
    dataType: 'jsonp',
    success: function( data ) {
     if (data.error) {
        callback([]);
        if (console && console.error) {
          console.error('Error loading Google+ stream.', data.error);
        }
        return;
      } else {
        callback(parseGooglePlus(data));
      }
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);
(function($) {
$.fn.lifestream.feeds.hypem = function( config, callback ) {

  if( !config.type || config.type !== "history" || config.type !== "loved" ) { config.type = "loved"; }

  var template = $.extend({},
  {
    loved: 'loved <a href="http://hypem.com/item/${mediaid}">${title}</a> by <a href="http://hypem.com/artist/${artist}">${artist}</a>',
    history: 'listened to <a href="http://hypem.com/item/${mediaid}">${title}</a> by <a href="http://hypem.com/artist/${artist}">${artist}</a>'
  },
  config.template);

  $.ajax({
    url: "http://hypem.com/playlist/" + config.type + "/" + config.user + "/json/1/data.js",
    dataType: "json",
    success: function( data ) {
      var output = [], i = 0, j = -1;
      for (var k in data) {
        if (data.hasOwnProperty(k)) {
          j++;
        }
      }
      if (data && j > 0) {
        for( ; i < j; i++) {
          var item = data[i];
          output.push({
            date: new Date( (config.type === "history" ? item.dateplayed : item.dateloved) * 1000 ),
            config: config,
            html: $.tmpl( (config.type === "history" ? template.history : template.loved) , item )
          });
        }
      }
      callback(output);
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.instapaper = function( config, callback ) {

  var template = $.extend({},
    {
      loved: 'loved <a href="${link}">${title}</a>'
    },
    config.template),

  parseInstapaper = function( input ) {
    var output = [], list, i = 0, j, item;

    if(input.query && input.query.count && input.query.count > 0 &&
        input.query.results.rss.channel.item) {

      list = input.query.results.rss.channel.item;
      j = list.length;
      for( ; i<j; i++) {
        item = list[i];
        output.push({
          date: new Date( item.pubDate ),
          config: config,
          html: $.tmpl( template.loved, item )
        });
      }
    }
    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from xml where url=' +
      '"http://www.instapaper.com/starred/rss/' +
      config.user + '"'),
    dataType: 'jsonp',
    success: function( data ) {
      callback(parseInstapaper(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.iusethis = function( config, callback ) {

  var template = $.extend({},
    {
      global: '${action} <a href="${link}">${what}</a> on (${os})'
    },
    config.template);

  var parseIusethis = function( input ) {
    var output = [], list, i, j, k, l, m = 0, n, item, title, actions,
      action, what, os, oss = ["iPhone", "OS X", "Windows"];

    if (input.query && input.query.count && input.query.count > 0 &&
        input.query.results.rss) {
      n = input.query.results.rss.length;
      actions = ['started using', 'stopped using', 'stopped loving',
                 'Downloaded', 'commented on', 'updated entry for',
                 'started loving', 'registered'];
      l = actions.length;

      for( ; m < n; m++) {

        os = oss[m];
        list = input.query.results.rss[m].channel.item;
        i = 0;
        j = list.length;

        for ( ; i < j; i++) {
          item = list[i];
          title = item.title.replace(config.user + ' ', '');
          k = 0;

          for( ; k < l; k++) {
            if(title.indexOf(actions[k]) > -1) {
              action = actions[k];
              break;
            }
          }

          what = title.split(action);

          output.push({
            date: new Date(item.pubDate),
            config: config,
            html: $.tmpl( template.global, {
              action: action.toLowerCase(),
              link: item.link,
              what: what[1],
              os: os
            } )
          });
        }
      }
    }

    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from xml where ' +
      'url="http://iphone.iusethis.com/user/feed.rss/' + config.user +
      '" or ' +
      'url="http://osx.iusethis.com/user/feed.rss/' + config.user +
      '" or ' +
      'url="http://win.iusethis.com/user/feed.rss/' + config.user + '"'),
    dataType: "jsonp",
    success: function( data ) {
      callback(parseIusethis(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.lastfm = function( config, callback ) {

  var template = $.extend({},
    {
      loved: 'loved <a href="${url}">${name}</a> by ' +
        '<a href="${artist.url}">${artist.name}</a>'
    },
    config.template),

  parseLastfm = function( input ) {
    var output = [], list, i = 0, j;

    if(input.query && input.query.count && input.query.count > 0 &&
        input.query.results.lovedtracks &&
        input.query.results.lovedtracks.track) {
      list = input.query.results.lovedtracks.track;
      j = list.length;
      for( ; i<j; i++) {
        var item = list[i],
            itemDate =  item.nowplaying ? new Date() : item.date.uts;
        output.push({
          date: new Date(parseInt((itemDate * 1000), 10)),
          config: config,
          html: $.tmpl( template.loved, item )
        });
      }
    }
    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from xml where url=' +
      '"http://ws.audioscrobbler.com/2.0/user/' +
      config.user + '/lovedtracks.xml"'),
    dataType: 'jsonp',
    success: function( data ) {
      callback(parseLastfm(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);
(function($) {
$.fn.lifestream.feeds.librarything = function( config, callback ) {

  var template = $.extend({},
    {
      book: 'added <a href="http://www.librarything.com/work/book/${book.book_id}"' +
        ' title="${book.title} by ${book.author_fl}">' +
        '${book.title} by ${book.author_fl}</a> to my library'
    },
    config.template),

  parseLibraryThing = function( input ) {
    var output = [], i = "";

    if(input.books) {
      // LibraryThing returns a hash that maps id to Book objects
      // which leads to the following slightly weird for loop.
      for (i in input.books) {
        if (input.books.hasOwnProperty(i)) {
          var book = input.books[i];
          output.push({
            date : new Date(book.entry_stamp * 1000),
            config : config,
            html : $.tmpl(template.book, {book : book}),
            url : 'http://www.librarything.com/profile/' + config.user
          });
        }
      }
    }
    return output;
  };

  $.ajax({
    url: 'http://www.librarything.com/api_getdata.php?booksort=entry_REV&userid=' + config.user,
    dataType: 'jsonp',
    success: function( data ) {
      callback(parseLibraryThing(data));
    }
  });

  return {
    "template" : template
  };

};
})(jQuery);
(function($) {
  'use strict';

  $.fn.lifestream.feeds.linkedin = function( config, callback ) {

    var template = $.extend({},
      {
        'posted': '<a href="${link}">${title}</a>'
      }, config.template),
      jsonpCallbackName = 'jlsLinkedinCallback' + config.user,

    createYql = function(){
      var query = 'SELECT * FROM feed WHERE url="' + config.url + '"';

      // I bet some will not read the instructions
      if(config.user) {
        query += ' AND link LIKE "%' + config.user + '%"';
      }

      return query;
    },

    parseLinkedinItem = function(item) {
      return {
        'date': new Date(item.pubDate),
        'config': config,
        'html': $.tmpl(template.posted, item)
      };
    };

    // !!! Global function for jsonp callback
    window[jsonpCallbackName] = function(input) {
      var output = [], i = 0;

      if(input.query && input.query.count && input.query.count > 0) {
        if (input.query.count === 1) {
          output.push(parseLinkedinItem(input.query.results.item));
        } else {
          for(i; i < input.query.count; i++) {
            var item = input.query.results.item[i];
            output.push(parseLinkedinItem(item));
          }
        }
      }

      callback(output);
    };

    $.ajax({
      'url': $.fn.lifestream.createYqlUrl(createYql()),
      'cache': true,
      'data': {
        // YQL will cache this for 5 minutes
        '_maxage': 300
      },
      'dataType': 'jsonp',
      // let YQL cache
      'jsonpCallback': jsonpCallbackName
    });

    // Expose the template.
    // We use this to check which templates are available
    return {
      'template': template
    };
  };
})(jQuery);
(function($) {
$.fn.lifestream.feeds.mendeley = function( config, callback ) {

  var template = $.extend({},
    {
      flagged1: 'flagged <a href="http://www.mendeley.com${link}">${title}</a>',
      flagged2: 'flagged <a href="${link}">${title}</a>'
    },
    config.template),

  parseMendeley = function( input ) {
    var output = [], list, i = 0, j;

    if(input.query && input.query.count && input.query.count > 0) {
      list = input.query.results.rss.channel.item;
      j = list.length;
      for( ; i<j; i++) {
        var item = list[i];
        var tmplt = ( (item.link.charAt(0) === '/') ? template.flagged1 : template.flagged2 );
        output.push({
          date: new Date(item.pubDate),
          config: config,
          url: 'http://mendeley.com/groups/' + config.user,
          html: $.tmpl( tmplt, item )
        });
      }
    }
    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from xml where url=' +
      '"http://www.mendeley.com/groups/' + config.user + '/feed/rss/"'),
    dataType: 'jsonp',
    success: function( data ) {
      callback(parseMendeley(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);
(function($) {
$.fn.lifestream.feeds.miso = function( config, callback ) {

  var template = $.extend({},
    {
      watched: 'checked in to <a href="${link}">${title}</a>'
    },
    config.template),

  /**
   * Parse the input from rss feed
   */
  parseMiso = function( input ) {
    var output = [], list, i = 0, j;
    if(input.query && input.query.count && input.query.count > 0) {
      list = input.query.results.rss.channel.item;
      j = list.length;
      for( ; i<j; i++) {
        var item = list[i];

        output.push({
          url: 'http://www.gomiso.com/feeds/user/' + config.user +
            '/checkins.rss',
          date: new Date( item.pubDate ),
          config: config,
          html: $.tmpl( template.watched, item )
        });
      }
    }
    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from xml where url="' +
      'http://www.gomiso.com/feeds/user/' + config.user + '/checkins.rss"'),
    dataType: 'jsonp',
    success: function( data ) {
      callback(parseMiso(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);
(function($) {
$.fn.lifestream.feeds.mlkshk = function( config, callback ) {

  var template = $.extend({},
    {
      posted: 'posted <a href="${link}">${title}</a>'
    },
    config.template);


  var parseMlkshk = function ( input ) {

    var output = [], list, i = 0, j, item;

    if ( input.query && input.query.count && input.query.count > 0 &&
        input.query.results.rss.channel.item ) {
      list = input.query.results.rss.channel.item;
      j = list.length;
      for ( ; i < j; i++) {
        item = list[i];
        output.push({
          date: new Date( item.pubDate ),
          config: config,
          html: $.tmpl( template.posted, item )
        });
      }
    }
    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from xml where ' +
      'url="http://mlkshk.com/user/' + config.user + '/rss"'),
    dataType: "jsonp",
    success: function ( data ) {
      callback(parseMlkshk(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.pinboard = function( config, callback ) {

  var template = $.extend({},
    {
      bookmarked: 'bookmarked <a href="${link}">${title}</a>'
    },
    config.template);

  var parsePinboard = function( input ) {
    var output = [], list, i = 0, j, item;

    if (input.query && input.query.count && input.query.count > 0) {
      list = input.query.results.RDF.item;
      j = list.length;
      for ( ; i < j; i++) {
        item = list[i];

        output.push({
          date: new Date(item.date),
          config: config,
          html: $.tmpl( template.bookmarked, item )
        });

      }
    }

    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from xml where ' +
      'url="http://feeds.pinboard.in/rss/u:' + config.user + '"'),
    dataType: "jsonp",
    success: function( data ) {
      callback(parsePinboard(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.pocket = function( config, callback ) {

  var template = $.extend({},
    {
      pocketed: 'pocketed <a href="${link}">${title}</a>'
    },
    config.template),

  parsePocket = function( input ) {
    var output = [], list, i = 0, j;

    if(input.query && input.query.results) {
      list = input.query.results.rss.channel.item;
      j = list.length;
      for( ; i<j; i++) {
        var item = list[i];
        var tmplt = template.pocketed;
        output.push({
          date: new Date(item.pubDate),
          config: config,
          url: 'http://getpocket.com',
          html: $.tmpl( tmplt, item ),
        });
      }
    }
    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from xml where url='
      + '"http://www.getpocket.com/users/'
      + config.user + '/feed/all/"'),
    dataType: 'json',
    success: function( data ) {
      callback(parsePocket(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);
(function($) {
$.fn.lifestream.feeds.posterous = function( config, callback ) {

  var template = $.extend({},
    {
      posted: 'posted <a href="${link}">${title}</a>'
    },
    config.template);

  var parsePosterous = function ( input ) {
    var output = [], list, i = 0, j, item;

    if ( input.query && input.query.count && input.query.count > 0 &&
        input.query.results.rss.channel.item ) {
      list = input.query.results.rss.channel.item;
      j = list.length;
      for ( ; i < j; i++) {
        item = list[i];

        output.push({
          date: new Date( item.pubDate ),
          config: config,
          html: $.tmpl( template.posted, item )
        });
      }
    }

    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from xml where ' +
      'url="http://' + config.user + '.posterous.com/rss.xml"'),
    dataType: "jsonp",
    success: function ( data ) {
      callback(parsePosterous(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.quora = function( config, callback ) {

  var template = $.extend({},
    {
      posted: '<a href="${link}">${title}</a>'
    },
    config.template),

  /**
   * Get the link
   * Straigth copy from RSS
   *
   * @param  {Object} channel
   * @return {String}
   */
  getChannelUrl = function(channel){
    var i = 0, j = channel.link.length;

    for( ; i < j; i++) {
      var link = channel.link[i];
      if( typeof link === 'string' ) {
        return link;
      }
    }

    return '';
  },

  /**
   * Parse the input from quora feed
   */
  parseRSS = function( input ) {
    var output = [], list = [], i = 0, j = 0, url = '';
    if(input.query && input.query.count && input.query.count > 0) {
      list = input.query.results.rss.channel.item;
      j = list.length;
      url = getChannelUrl(input.query.results.rss.channel);
      for( ; i<j; i++) {
        var item = list[i];

        output.push({
          url: url,
          date: new Date( item.pubDate ),
          config: config,
          html: $.tmpl( template.posted, item )
        });
      }
    }
    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from xml where ' +
      'url="http://www.quora.com/' + config.user + '/rss"'),
    dataType: 'jsonp',
    success: function( data ) {
      callback(parseRSS(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);
(function($) {
$.fn.lifestream.feeds.reddit = function( config, callback ) {

  var template = $.extend({},
    {
      commented: '<a href="http://www.reddit.com/r/${item.data.subreddit}' +
        '/comments/${item.data.link_id.substring(3)}/u/' +
        '${item.data.name.substring(3)}?context=3">commented ' +
        '(${score})</a> in <a href="http://www.reddit.com/r/' +
        '${item.data.subreddit}">${item.data.subreddit}</a>',
      created: '<a href="http://www.reddit.com${item.data.permalink}">' +
        'created new thread (${score})</a> in ' +
        '<a href="http://www.reddit.com/r/${item.data.subreddit}">' +
        '${item.data.subreddit}</a>'
    },
    config.template);

  /**
   * Parsed one item from the Reddit API.
   * item.kind == t1 is a reply, t2 is a new thread
   */
  var parseRedditItem = function( item ) {

    var score = item.data.ups - item.data.downs,
        pass = {
          item: item,
          score: (score > 0) ? "+" + score : score
        };

    // t1 = reply, t3 = new thread
    if (item.kind === "t1") {
      return $.tmpl( template.commented, pass );
    }
    else if (item.kind === "t3") {
      return $.tmpl( template.created, pass );
    }

  },
  /**
   * Reddit date's are simple epochs.
   * seconds*1000 = milliseconds
   */
  convertDate = function( date ) {
    return new Date(date * 1000);
  };

  $.ajax({
    url: "http://www.reddit.com/user/" + config.user + ".json",
    dataType: "jsonp",
    jsonp:"jsonp",
    success: function( data ) {
      var output = [], i = 0, j;

      if(data && data.data && data.data.children &&
        data.data.children.length > 0) {
        j = data.data.children.length;
        for( ; i<j; i++) {
          var item = data.data.children[i];
          output.push({
            date: convertDate(item.data.created_utc),
            config: config,
            html: parseRedditItem(item),
            url: 'http://reddit.com/user/' + config.user
          });
        }
      }

      callback(output);
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);
(function($) {
$.fn.lifestream.feeds.rss = function( config, callback ) {

  var template = $.extend({},
    {
      posted: 'posted <a href="${link}">${title}</a>'
    },
    config.template),

  /**
   * Get the link
   * @param  {Object} channel
   * @return {String}
   */
  getChannelUrl = function(channel){
    var i = 0, j = channel.link.length;

    for( ; i < j; i++) {
      var link = channel.link[i];
      if( typeof link === 'string' ) {
        return link;
      }
    }

    return '';
  },

  /**
   * Parse the input from rss feed
   */
  parseRSS = function( input ) {
    var output = [], list = [], i = 0, j = 0, url = '';
    if(input.query && input.query.count && input.query.count > 0) {
      list = input.query.results.rss.channel.item;
      j = list.length;
      url = getChannelUrl(input.query.results.rss.channel);

      for( ; i<j; i++) {
        var item = list[i];

        output.push({
          url: url,
          date: new Date( item.pubDate ),
          config: config,
          html: $.tmpl( template.posted, item )
        });
      }
    }
    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from xml where url="' +
      config.user + '"'),
    dataType: 'jsonp',
    success: function( data ) {
      callback(parseRSS(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);
(function($) {
$.fn.lifestream.feeds.slideshare = function( config, callback ) {

  var template = $.extend({},
    {
      uploaded: 'uploaded a presentation <a href="${link}">${title}</a>'
    },
    config.template);

  var parseSlideshare = function( input ) {
    var output = [], list, i = 0, j, item;

    if (input.query && input.query.count && input.query.count > 0) {
      list = input.query.results.rss.channel.item;
      j = list.length;
      for ( ; i < j; i++) {
        item = list[i];

        output.push({
          date: new Date(item.pubDate),
          config: config,
          html: $.tmpl( template.uploaded, item )
        });

      }
    }

    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from xml where ' +
      'url="http://www.slideshare.net/rss/user/' + config.user + '"'),
    dataType: "jsonp",
    success: function( data ) {
      callback(parseSlideshare(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.snipplr = function( config, callback ) {

  var template = $.extend({},
    {
      posted: 'posted a snippet <a href="${link}">${title}</a>'
    },
    config.template);

  var parseSnipplr = function ( input ) {
    var output = [], list, i = 0, j, item;

    if ( input.query && input.query.count && input.query.count > 0 &&
        input.query.results.rss.channel.item ) {
      list = input.query.results.rss.channel.item;
      j = list.length;
      for ( ; i < j; i++) {
        item = list[i];

        output.push({
          date: new Date( item.pubDate ),
          config: config,
          html: $.tmpl( template.posted, item )
        });
      }
    }

    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from xml where ' +
      'url="http://snipplr.com/rss/users/' + config.user + '"'),
    dataType: "jsonp",
    success: function ( data ) {
      callback(parseSnipplr(data));
    }
  });

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.stackoverflow = function( config, callback ) {

  var template = $.extend({},
    {
      global: '<a href="${link}">${text}</a> - ${title}'
    },
    config.template);

  var parseStackoverflowItem = function( item ) {
    var text="", title="", link="",
    stackoverflow_link = "http://stackoverflow.com/users/" + config.user,
    question_link = "http://stackoverflow.com/questions/";

    if(item.timeline_type === "badge") {
      text = "was " + item.action + " the '" + item.description + "' badge";
      title = item.detail;
      link = stackoverflow_link + "?tab=reputation";
    }
    else if (item.timeline_type === "comment") {
       text = "commented on";
       title = item.description;
       link = question_link + item.post_id;
    }
    else if (item.timeline_type === "revision" ||
        item.timeline_type === "accepted" ||
        item.timeline_type === "askoranswered") {
      text = (item.timeline_type === 'askoranswered' ?
             item.action : item.action + ' ' + item.post_type);
      title = item.detail || item.description || "";
      link = question_link + item.post_id;
    }
    return {
      link: link,
      title: title,
      text: text
    };
  },
  convertDate = function( date ) {
    return new Date(date * 1000);
  };

  $.ajax({
    url: "https://api.stackoverflow.com/1.1/users/" + config.user +
      "/timeline?jsonp",
    dataType: "jsonp",
    jsonp: 'jsonp',
    success: function( data ) {
      var output = [], i = 0, j;

      if(data && data.total && data.total > 0 && data.user_timelines) {
        j = data.user_timelines.length;
        for( ; i<j; i++) {
          var item = data.user_timelines[i];
          output.push({
            date: convertDate(item.creation_date),
            config: config,
            html: $.tmpl( template.global, parseStackoverflowItem(item) )
          });
        }
      }

      callback(output);
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);
(function($) {
$.fn.lifestream.feeds.tumblr = function( config, callback ) {

  var template = $.extend({},
    {
      posted: 'posted a ${type} <a href="${url}">${title}</a>'
    },
    config.template),
  limit = config.limit || 20,

  getImage = function( post ) {
    switch(post.type) {
      case 'photo':
        var images = post['photo-url'];
        return $('<img width="75" height="75"/>')
          .attr({
            src: images[images.length - 1].content,
            title: getTitle(post),
            alt: getTitle(post)
          }).wrap('<div/>').parent().html(); // generate an HTML string
      case 'video':
        var videos = post['video-player'];
        var video = videos[videos.length - 1].content;
        // Videos hosted on Tumblr use JavaScript to render the
        // video, but the JavaScript doesn't work when we call it
        // from a lifestream - so don't try to embed these.
        if (video.match(/<\s*script/)) { return null; }

        return video;
      case 'audio':
        // Unlike photo and video, audio gives you no visual indication
        // of what it contains, so we append the "title" text.
        return post['audio-player'] + ' ' +
          // HTML-escape the text.
          $('<div/>').text(getTitle(post)).html();
      default:
        return null;
    }
  },

  getFirstElementOfBody = function( post, bodyAttribute ) {
    return $(post[bodyAttribute]).filter(':not(:empty):first').text();
  },

  getTitleForPostType = function( post ) {
    var title;

    switch(post.type) {
    case 'regular':
      return post['regular-title'] ||
        getFirstElementOfBody(post, 'regular-body');
    case 'link':
      title = post['link-text'] ||
        getFirstElementOfBody(post, 'link-description');
      if (title === '') { title = post['link-url']; }
      return title;
    case 'video':
      return getFirstElementOfBody(post, 'video-caption');
    case 'audio':
      return getFirstElementOfBody(post, 'audio-caption');
    case 'photo':
      return getFirstElementOfBody(post, 'photo-caption');
    case 'quote':
      return '"' + post['quote-text'].replace(/<.+?>/g, ' ').trim() + '"';
    case 'conversation':
      title = post['conversation-title'];
      if (!title) {
        title = post.conversation.line;
        if (typeof(title) !== 'string') {
          title = title[0].label + ' ' + title[0].content + ' ...';
        }
      }
      return title;
    case 'answer':
      return post.question;
    default:
      return post.type;
    }
  },

  /**
   * get title text
   */
  getTitle = function( post ) {
    var title = getTitleForPostType(post) || '';

    // remove tags
    return title.replace( /<.+?>/gi, " ");
  },
  createTumblrOutput = function( config, post ) {
    return {
      date: new Date(post.date),
      config: config,
      html: $.tmpl( template.posted, {
          type: post.type.replace('regular', 'blog entry'),
          url: post.url,
          image: getImage(post),
          title: getTitle(post)
        } )
    };
  },
  parseTumblr = function( input ) {
    var output = [], i = 0, j, post;
    if(input.query && input.query.count && input.query.count > 0) {
      // If a user only has one post, post is a plain object, otherwise it
      // is an array
      if ( $.isArray(input.query.results.posts.post) ) {
        j = input.query.results.posts.post.length;
        for( ; i < j; i++) {
          post = input.query.results.posts.post[i];
          output.push(createTumblrOutput(config, post));
        }
      }
      else if ( $.isPlainObject(input.query.results.posts.post) ) {
        output.push(
          createTumblrOutput(config,input.query.results.posts.post)
        );
      }
    }
    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select *' +
      ' from tumblr.posts where username="' + config.user + '"' +
      ' and num="' + limit + '"'),
    dataType: 'jsonp',
    success: function( data ) {
      callback(parseTumblr(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
  "use strict";

  $.fn.lifestream.feeds.twitter = function( config, callback ) {
    var template = $.extend({},
      {
        "posted": '{{html tweet}}'
      },
      config.template),
    jsonpCallbackName = 'jlsTwitterCallback' +
      config.user.replace(/[^a-zA-Z0-9]+/g, ''),

    /**
     * Add links to the twitter feed.
     * Hashes, @ and regular links are supported.
     * @private
     * @param {String} tweet A string of a tweet
     * @return {String} A linkified tweet
     */
    linkify = function( tweet ) {

      var link = function( t ) {
        return t.replace(
          /([a-z]+:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
          function( m ) {
            return '<a href="' + m + '">' +
              ( ( m.length > 25 ) ? m.substr( 0, 24 ) + '...' : m ) +
              '</a>';
          }
        );
      },
      at = function( t ) {
        return t.replace(
          /(^|[^\w]+)\@([a-zA-Z0-9_]{1,15})/g,
          function( m, m1, m2 ) {
            return m1 + '<a href="http://twitter.com/' + m2 + '">@' +
              m2 + '</a>';
          }
        );
      },
      hash = function( t ) {
        return t.replace(
          /(^|[^\w'"]+)\#([a-zA-Z0-9ÅåÄäÖöØøÆæÉéÈèÜüÊêÛûÎî_]+)/g,
          function( m, m1, m2 ) {
            return m1 + '<a href="http://search.twitter.com/search?q=%23' +
            m2 + '">#' + m2 + '</a>';
          }
        );
      };

      return hash(at(link(tweet)));

    },
    /**
     * Parse the input from twitter
     * @private
     * @param  {Object[]} items
     * @return {Object[]} Array of Twitter status messages.
     */
    parseTwitter = function( items ) {
      var output = [], i = 0, j = items.length;

      for( i; i < j; i++ ) {
        var status = items[i];

        output.push({
          "date": new Date(status.created_at * 1000), // unix time
          "config": config,
          "html": $.tmpl( template.posted, {
            "tweet": linkify($('<div/>').html(status.text).text()),
            "complete_url": 'http://twitter.com/' + config.user +
              "/status/" + status.id_str
          } ),
          "url": 'http://twitter.com/' + config.user
        });
      }

      return output;
    };

    /**
     * Global JSONP callback
     * This should allow for better response caching by YQL.
     * @param  {Object[]} data YQL response items
     * @return {undefined}
     */
    window[jsonpCallbackName] = function(data) {
      if ( data.query && data.query.count > 0 ) {
        callback(parseTwitter(data.query.results.items));
      }
    };

    $.ajax({
      "url": $.fn.lifestream.createYqlUrl('USE ' +
        '"http://arminrosu.github.io/twitter-open-data-table/table.xml" ' +
        'AS twitter; SELECT * FROM twitter WHERE screen_name = "' +
        config.user + '"'),
      "cache": true,
      'data': {
        '_maxage': 300 // cache for 5 minutes
      },
      "dataType": 'jsonp',
      "jsonpCallback": jsonpCallbackName // better caching
    });

    // Expose the template.
    // We use this to check which templates are available
    return {
      "template" : template
    };

  };
})(jQuery);
(function($) {
$.fn.lifestream.feeds.vimeo = function( config, callback ) {

  var template = $.extend({},
  {
    liked: 'liked <a href="${url}" title="${description}">${title}</a>',
    posted: 'posted <a href="${url}" title="${description}">${title}</a>'
  },
  config.template),

  parseVimeo = function( input, item_type ) {
    var output = [], i = 0, j, item, type = item_type || 'liked', date, description;

    if (input) {
      j = input.length;
      for( ; i < j; i++) {
        item = input[i];
        if (type === 'posted') {
          date = new Date( item.upload_date.replace(' ', 'T') );
        } else {
          date = new Date( item.liked_on.replace(' ', 'T') );
        }

        if (item.description) {
          description = item.description.replace(/"/g, "'").replace( /<.+?>/gi, '');
        } else {
          description = '';
        }

        output.push({
          date: date,
          config: config,
          html: $.tmpl( template[type], {
            url: item.url,
            description: item.description ? item.description
              .replace(/"/g, "'")
              .replace( /<.+?>/gi, '') : '',
            title: item.title
          })
        });
      }
    }

    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('SELECT * FROM xml WHERE ' +
      'url="http://vimeo.com/api/v2/' + config.user + '/likes.xml" OR ' +
      'url="http://vimeo.com/api/v2/' + config.user + '/videos.xml"'),
    dataType: 'jsonp',
    success: function( response ) {
      var output = [];

      // check for likes & parse
      if ( response.query.results.videos[0] != null &&
           response.query.results.videos[0].video.length > 0 ) {
        output = output.concat(parseVimeo(
          response.query.results.videos[0].video
        ));
      }

      // check for uploads & parse
      if ( response.query.results.videos[1] != null &&
           response.query.results.videos[1].video.length > 0 ) {
        output = output.concat(
          parseVimeo(response.query.results.videos[1].video, 'posted')
        );
      }

      callback(output);
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    'template' : template
  };

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.wikipedia = function( config, callback ) {
  // default to english if no language was set
  var language = config.language || 'en',

  template = $.extend({},
    {
      contribution: 'contributed to <a href="${url}">${title}</a>'
    },
    config.template);

  $.ajax({
    url: "http://" + language +
      ".wikipedia.org/w/api.php?action=query&ucuser=" +
      config.user + "&list=usercontribs&ucdir=older&format=json",
    dataType: "jsonp",
    success: function( data ) {
      var output = [], i = 0, j;

      if(data && data.query.usercontribs) {
        j = data.query.usercontribs.length;
        for( ; i<j; i++) {

          var item = data.query.usercontribs[i];

          // Fastest way to get the URL.
          // Alternatively, we'd have to poll wikipedia for the pageid's link
          item.url = 'http://' + language + '.wikipedia.org/wiki/' +
            item.title.replace(' ', '_');

          output.push({
            date: new Date( item.timestamp ),
            config: config,
            html: $.tmpl( template.contribution, item )
          });
        }
      }

      callback(output);
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.wordpress = function( config, callback ) {

  var template = $.extend({},
    {
      posted: 'posted <a href="${link}">${title}</a>'
    },
    config.template);

  var parseWordpress = function ( input ) {
    var output = [], list, i = 0, j, item;

    if ( input.query && input.query.count && input.query.count > 0 &&
        input.query.results.rss.channel.item ) {
      list = input.query.results.rss.channel.item;
      j = list.length;
      for ( ; i < j; i++) {
        item = list[i];

        output.push({
          date: new Date( item.pubDate ),
          config: config,
          html: $.tmpl( template.posted, item )
        });
      }
    }

    return output;
  };

  var url = "";

  if ( config.user ){
    // If the config.user property starts with http:// we assume that is the
    // full url to the user his blog. We append the /feed to the url.
    url = (config.user.indexOf('http://') === 0 ?
        config.user + '/feed' :
        'http://' + config.user + '.wordpress.com/feed');
    $.ajax({
      url: $.fn.lifestream.createYqlUrl('select * from xml where ' +
        'url="' + url + '"'),
      dataType: "jsonp",
      success: function ( data ) {
        callback(parseWordpress(data));
      }
    });
  }

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);(function($) {
$.fn.lifestream.feeds.youtube = function( config, callback ) {

  var template = $.extend({},
    {
      uploaded: 'uploaded <a href="${video.player.default}" ' +
        'title="${video.description}">${video.title}</a>',
      favorited: 'favorited <a href="${video.player.default}" ' +
        'title="${video.description}">${video.title}</a>'
    },
    config.template),

  parseYoutube = function( input, activity ) {
    var output = [], i = 0, j, item, video, date, templateData;

    if(input.data && input.data.items) {
      j = input.data.items.length;
      for( ; i<j; i++) {
        item = input.data.items[i];

        switch (activity) {
          case 'favorited':
            video = item.video;
            date = item.created;
            templateData = item;
            break;
          case 'uploaded':
            video = item;
            date = video.uploaded;
            templateData = {video: video};
            break;
        }

        // Don't add unavailable items (private, rejected, failed)
        if (!video.player || !video.player['default']) {
          continue;
        }

        output.push({
          date: new Date(date),
          config: config,
          html: $.tmpl( template[activity], templateData )
        });
      }
    }

    return output;
  };

  $.ajax({
    url: "http://gdata.youtube.com/feeds/api/users/" + config.user +
      "/favorites?v=2&alt=jsonc",
    dataType: 'jsonp',
    success: function( data ) {
      callback(parseYoutube(data, 'favorited'));
    }
  });

  $.ajax({
    url: "http://gdata.youtube.com/feeds/api/users/" + config.user +
      "/uploads?v=2&alt=jsonc",
    dataType: 'jsonp',
    success: function( data ) {
      callback(parseYoutube(data, 'uploaded'));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);
(function($) {
$.fn.lifestream.feeds.zotero = function( config, callback ) {

  var template = $.extend({},
    {
      flagged: 'flagged <a href="${id}">${title}</a> by ${creatorSummary}'
    },
    config.template),

  parseZotero = function( input ) {
    var output = [], list, i = 0, j;

    if(input.query && input.query.count && input.query.count > 0) {
      list = input.query.results.feed.entry;
      j = list.length;
      for( ; i<j; i++) {
        var item = list[i];
        output.push({
          date: new Date(item.updated),
          config: config,
          url: 'http://zotero.com/users/' + config.user,
          html: $.tmpl( template.flagged, item )
        });
      }
    }
    return output;
  };

  $.ajax({
    url: $.fn.lifestream.createYqlUrl('select * from xml where url=' +
      '"https://api.zotero.org/users/' +
      config.user + '/items"'),
    dataType: 'jsonp',
    success: function( data ) {
      callback(parseZotero(data));
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
})(jQuery);
/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 1.1.0
 * @requires jQuery v1.2.3+
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2013, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  $.timeago = function(timestamp) {
    if (timestamp instanceof Date) {
      return inWords(timestamp);
    } else if (typeof timestamp === "string") {
      return inWords($.timeago.parse(timestamp));
    } else if (typeof timestamp === "number") {
      return inWords(new Date(timestamp));
    } else {
      return inWords($.timeago.datetime(timestamp));
    }
  };
  var $t = $.timeago;

  $.extend($.timeago, {
    settings: {
      refreshMillis: 60000,
      allowFuture: false,
      strings: {
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "ago",
        suffixFromNow: "from now",
        seconds: "less than a minute",
        minute: "about a minute",
        minutes: "%d minutes",
        hour: "about an hour",
        hours: "about %d hours",
        day: "a day",
        days: "%d days",
        month: "about a month",
        months: "%d months",
        year: "about a year",
        years: "%d years",
        wordSeparator: " ",
        numbers: []
      }
    },
    inWords: function(distanceMillis) {
      var $l = this.settings.strings;
      var prefix = $l.prefixAgo;
      var suffix = $l.suffixAgo;
      if (this.settings.allowFuture) {
        if (distanceMillis < 0) {
          prefix = $l.prefixFromNow;
          suffix = $l.suffixFromNow;
        }
      }

      var seconds = Math.abs(distanceMillis) / 1000;
      var minutes = seconds / 60;
      var hours = minutes / 60;
      var days = hours / 24;
      var years = days / 365;

      function substitute(stringOrFunction, number) {
        var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction;
        var value = ($l.numbers && $l.numbers[number]) || number;
        return string.replace(/%d/i, value);
      }

      var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
        seconds < 90 && substitute($l.minute, 1) ||
        minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
        minutes < 90 && substitute($l.hour, 1) ||
        hours < 24 && substitute($l.hours, Math.round(hours)) ||
        hours < 42 && substitute($l.day, 1) ||
        days < 30 && substitute($l.days, Math.round(days)) ||
        days < 45 && substitute($l.month, 1) ||
        days < 365 && substitute($l.months, Math.round(days / 30)) ||
        years < 1.5 && substitute($l.year, 1) ||
        substitute($l.years, Math.round(years));

      var separator = $l.wordSeparator || "";
      if ($l.wordSeparator === undefined) { separator = " "; }
      return $.trim([prefix, words, suffix].join(separator));
    },
    parse: function(iso8601) {
      var s = $.trim(iso8601);
      s = s.replace(/\.\d+/,""); // remove milliseconds
      s = s.replace(/-/,"/").replace(/-/,"/");
      s = s.replace(/T/," ").replace(/Z/," UTC");
      s = s.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400
      return new Date(s);
    },
    datetime: function(elem) {
      var iso8601 = $t.isTime(elem) ? $(elem).attr("datetime") : $(elem).attr("title");
      return $t.parse(iso8601);
    },
    isTime: function(elem) {
      // jQuery's `is()` doesn't play well with HTML5 in IE
      return $(elem).get(0).tagName.toLowerCase() === "time"; // $(elem).is("time");
    }
  });

  // functions that can be called via $(el).timeago('action')
  // init is default when no action is given
  // functions are called with context of a single element
  var functions = {
    init: function(){
      var refresh_el = $.proxy(refresh, this);
      refresh_el();
      var $s = $t.settings;
      if ($s.refreshMillis > 0) {
        setInterval(refresh_el, $s.refreshMillis);
      }
    },
    update: function(time){
      $(this).data('timeago', { datetime: $t.parse(time) });
      refresh.apply(this);
    }
  };

  $.fn.timeago = function(action, options) {
    var fn = action ? functions[action] : functions.init;
    if(!fn){
      throw new Error("Unknown function name '"+ action +"' for timeago");
    }
    // each over objects here and call the requested function
    this.each(function(){
      fn.call(this, options);
    });
    return this;
  };

  function refresh() {
    var data = prepareData(this);
    if (!isNaN(data.datetime)) {
      $(this).text(inWords(data.datetime));
    }
    return this;
  }

  function prepareData(element) {
    element = $(element);
    if (!element.data("timeago")) {
      element.data("timeago", { datetime: $t.datetime(element) });
      var text = $.trim(element.text());
      if (text.length > 0 && !($t.isTime(element) && element.attr("title"))) {
        element.attr("title", text);
      }
    }
    return element.data("timeago");
  }

  function inWords(date) {
    return $t.inWords(distance(date));
  }

  function distance(date) {
    return (new Date().getTime() - date.getTime());
  }

  // fix for IE6 suckage
  document.createElement("abbr");
  document.createElement("time");
}));
/*!
Smallipop (06/21/2013)
Copyright (c) 2011-2013 Small Improvements (http://www.small-improvements.com)

Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.

@author Sebastian Helzle (sebastian@helzle.net)
*/

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    return define(['jquery'], factory);
  } else {
    return factory(jQuery);
  }
})(function($) {
  var $document, $overlay, $window, classAlignLeft, classAlignRight, classBase, classBottom, classContent, classHint, classInitialized, classInstance, classLeft, classRight, classTheme, classTour, classTourClose, classTourCloseIcon, classTourContent, classTourFooter, classTourNext, classTourOverlay, classTourPrev, classTourProgress, cssAnimationsEnabled, currentTour, dataBeingShown, dataIsTour, dataPopupHovered, dataPosition, dataShown, dataTimerHide, dataTimerShow, dataTriggerHovered, dataXDistance, dataYDistance, dataZIndex, destroy, eventBlur, eventClick, eventFocus, eventKeyUp, eventMouseOut, eventMouseOver, eventResize, eventScroll, eventTouchEnd, fadeInPopup, fadeInPopupFinished, filterAlignmentClass, filterBaseClass, filterClass, forceRefreshPosition, getInstance, getOverlay, getTrigger, hideSmallipop, hideTourOverlay, instances, isElementFixed, killTimers, lastId, lastScrollCheck, nextInstanceId, onWindowKeyUp, onWindowScroll, popupTemplate, queueRefreshPosition, reAlignmentClass, reBaseClass, refreshPosition, refreshQueueTimer, resetTourZIndices, runTour, scrollTimer, setContent, showPopup, showSmallipop, showWhenVisible, sip, touchEnabled, tourClose, tourNext, tourPrev, tourShow, tours, triggerMouseout, triggerMouseover;
  classBase = 'smallipop';
  classHint = classBase + '-hint';
  classInstance = classBase + '-instance';
  classContent = classBase + '-content';
  classLeft = classBase + '-left';
  classRight = classBase + '-right';
  classBottom = classBase + '-bottom';
  classAlignLeft = classBase + '-align-left';
  classAlignRight = classBase + '-align-right';
  classInitialized = classBase + '-initialized';
  classTheme = classBase + '-theme-';
  classTour = classBase + '-tour';
  classTourContent = classTour + '-content';
  classTourOverlay = classTour + '-overlay';
  classTourFooter = classTour + '-footer';
  classTourCloseIcon = classTour + '-close-icon';
  classTourProgress = classTour + '-progress';
  classTourClose = classTour + '-close';
  classTourPrev = classTour + '-prev';
  classTourNext = classTour + '-next';
  eventFocus = 'focus.' + classBase;
  eventClick = 'click.' + classBase;
  eventBlur = 'blur.' + classBase;
  eventMouseOut = 'mouseout.' + classBase;
  eventMouseOver = 'mouseover.' + classBase;
  eventTouchEnd = 'touchend.' + classBase;
  eventResize = 'resize.' + classBase;
  eventScroll = 'scroll.' + classBase;
  eventKeyUp = 'keyup.' + classBase;
  dataZIndex = classBase + 'OriginalZIndex';
  dataBeingShown = classBase + 'BeingShown';
  dataTimerHide = classBase + 'HideDelayTimer';
  dataTimerShow = classBase + 'ShowDelayTimer';
  dataTriggerHovered = classBase + 'TriggerHovered';
  dataPopupHovered = classBase + 'PopupHovered';
  dataShown = classBase + 'Shown';
  dataPosition = classBase + 'Position';
  dataXDistance = classBase + 'XDistance';
  dataYDistance = classBase + 'YDistance';
  dataIsTour = classBase + 'IsTour';
  reAlignmentClass = new RegExp(classBase + '-(align|bottom)\w*', "g");
  reBaseClass = new RegExp(classBase + '\w+', "g");
  $document = $(document);
  $window = $(window);
  $overlay = null;
  instances = {};
  tours = {};
  currentTour = null;
  lastId = 1;
  nextInstanceId = 1;
  scrollTimer = null;
  lastScrollCheck = 0;
  refreshQueueTimer = null;
  popupTemplate = "<div class='" + classInstance + "'><div class='" + classContent + "'/></div>";
  $.smallipop = sip = {
    version: '0.6.1',
    defaults: {
      autoscrollPadding: 200,
      contentAnimationSpeed: 150,
      cssAnimations: {
        enabled: false,
        show: 'animated fadeIn',
        hide: 'animated fadeOut'
      },
      funcEase: 'easeInOutQuad',
      handleInputs: true,
      hideDelay: 500,
      hideTrigger: false,
      hideOnPopupClick: true,
      hideOnTriggerClick: true,
      infoClass: classHint,
      invertAnimation: false,
      popupId: '',
      popupOffset: 31,
      popupYOffset: 0,
      popupDistance: 20,
      popupDelay: 100,
      popupAnimationSpeed: 200,
      preferredPosition: 'top',
      referencedContent: null,
      theme: 'default',
      touchSupport: true,
      tourHighlight: false,
      tourHighlightColor: '#222',
      tourHighlightFadeDuration: 200,
      tourHighlightOpacity: .5,
      tourHighlightZIndex: 9997,
      tourNavigationEnabled: true,
      triggerAnimationSpeed: 150,
      triggerOnClick: false,
      onAfterHide: null,
      onAfterShow: null,
      onBeforeHide: null,
      onBeforeShow: null,
      onTourClose: null,
      onTourNext: null,
      onTourPrev: null,
      windowPadding: 30,
      labels: {
        prev: 'Prev',
        next: 'Next',
        close: 'Close',
        of: 'of'
      }
    }
  };
  if (!$.easing.easeInOutQuad) {
    $.easing.easeInOutQuad = function(x, t, b, c, d) {
      if ((t /= d / 2) < 1) {
        return c / 2 * t * t + b;
      } else {
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
      }
    };
  }
  resetTourZIndices = function() {
    var step, steps, tour, tourTrigger, _results;
    _results = [];
    for (tour in tours) {
      steps = tours[tour];
      _results.push((function() {
        var _i, _len, _results1;
        _results1 = [];
        for (_i = 0, _len = steps.length; _i < _len; _i++) {
          step = steps[_i];
          tourTrigger = step.trigger;
          if (tourTrigger.data(dataZIndex)) {
            _results1.push(tourTrigger.css('zIndex', tourTrigger.data(dataZIndex)));
          } else {
            _results1.push(void 0);
          }
        }
        return _results1;
      })());
    }
    return _results;
  };
  touchEnabled = typeof Modernizr !== "undefined" && Modernizr !== null ? Modernizr.touch : void 0;
  cssAnimationsEnabled = typeof Modernizr !== "undefined" && Modernizr !== null ? Modernizr.cssanimations : void 0;
  getTrigger = function(id) {
    return $("." + (classBase + id));
  };
  getOverlay = function() {
    if (!$overlay) {
      $overlay = $("<div id='" + classTourOverlay + "'/>").appendTo($('body')).fadeOut(0);
    }
    return $overlay;
  };
  hideTourOverlay = function(options) {
    getOverlay().fadeOut(options.tourHighlightFadeDuration);
    return resetTourZIndices();
  };
  hideSmallipop = function(e) {
    var direction, ignorePopupClick, ignoreTriggerClick, popup, popupData, popupId, shownId, target, trigger, triggerData, triggerIsTarget, triggerOptions, xDistance, yDistance, _base, _ref, _ref1, _results;
    clearTimeout(scrollTimer);
    target = (e != null ? e.target : void 0) ? $(e.target) : e;
    _results = [];
    for (popupId in instances) {
      popup = instances[popupId];
      popupData = popup.data();
      if (!(shownId = popupData[dataShown])) {
        continue;
      }
      trigger = getTrigger(shownId);
      triggerIsTarget = trigger.is(target);
      triggerData = trigger.data(classBase);
      triggerOptions = triggerData.options || sip.defaults;
      if ((popupData[dataIsTour] || triggerData.isFormElement) && !popup.is(target) && !(triggerIsTarget && popup.is(triggerOptions.popupInstance))) {
        continue;
      }
      if (popupData[dataIsTour]) {
        currentTour = null;
        if ((_ref = trigger.data(classBase)) != null) {
          if (typeof (_base = _ref.options).onTourClose === "function") {
            _base.onTourClose();
          }
        }
        hideTourOverlay(triggerOptions);
      }
      ignoreTriggerClick = !triggerOptions.hideOnTriggerClick && triggerIsTarget;
      ignorePopupClick = !triggerOptions.hideOnPopupClick && popup.find(target).length;
      if (target && trigger.length && ((_ref1 = e != null ? e.type : void 0) === 'click' || _ref1 === 'touchend') && (ignoreTriggerClick || ignorePopupClick)) {
        continue;
      }
      if (shownId && triggerOptions.hideTrigger) {
        trigger.stop(true).fadeTo(triggerOptions.triggerAnimationSpeed, 1);
      }
      popup.data(dataTimerHide, null).data(dataBeingShown, false);
      if (triggerOptions.cssAnimations.enabled) {
        popup.removeClass(triggerOptions.cssAnimations.show).addClass(triggerOptions.cssAnimations.hide).data(dataShown, '');
        if (triggerOptions.onAfterHide) {
          _results.push(window.setTimeout(triggerOptions.onAfterHide, triggerOptions.popupAnimationSpeed));
        } else {
          _results.push(void 0);
        }
      } else {
        direction = triggerOptions.invertAnimation ? -1 : 1;
        xDistance = popupData[dataXDistance] * direction;
        yDistance = popupData[dataYDistance] * direction;
        _results.push(popup.stop(true).animate({
          top: "-=" + yDistance,
          left: "+=" + xDistance,
          opacity: 0
        }, triggerOptions.popupAnimationSpeed, triggerOptions.funcEase, function() {
          var self;
          self = $(this);
          if (!self.data(dataBeingShown)) {
            self.css('display', 'none').data(dataShown, '');
          }
          return typeof triggerOptions.onAfterHide === "function" ? triggerOptions.onAfterHide() : void 0;
        }));
      }
    }
    return _results;
  };
  showSmallipop = function(e) {
    var triggerData, _ref;
    triggerData = $(this).data(classBase);
    if (!triggerData) {
      return;
    }
    if (triggerData.popupInstance.data(dataShown) !== triggerData.id && ((_ref = !triggerData.type) === 'checkbox' || _ref === 'radio')) {
      if (e != null) {
        e.preventDefault();
      }
    }
    return triggerMouseover.call(this);
  };
  killTimers = function(popup) {
    clearTimeout(popup.data(dataTimerHide));
    return clearTimeout(popup.data(dataTimerShow));
  };
  queueRefreshPosition = function(delay) {
    if (delay == null) {
      delay = 50;
    }
    clearTimeout(refreshQueueTimer);
    return refreshQueueTimer = setTimeout(refreshPosition, delay);
  };
  filterClass = function(classStr, re) {
    if (classStr) {
      return (classStr.match(re) || []).join(' ');
    }
  };
  filterAlignmentClass = function(idx, classStr) {
    return filterClass(classStr, reAlignmentClass);
  };
  filterBaseClass = function(idx, classStr) {
    return filterClass(classStr, reBaseClass);
  };
  refreshPosition = function(resetTheme) {
    var isFixed, offset, opacity, options, popup, popupCenter, popupData, popupDistanceBottom, popupDistanceLeft, popupDistanceRight, popupDistanceTop, popupH, popupId, popupOffsetLeft, popupOffsetTop, popupW, popupY, preferredPosition, selfHeight, selfWidth, selfY, shownId, themes, trigger, triggerData, win, winHeight, winScrollLeft, winScrollTop, winWidth, windowPadding, xDistance, xOffset, xOverflow, yDistance, yOffset, yOverflow, _results;
    if (resetTheme == null) {
      resetTheme = true;
    }
    _results = [];
    for (popupId in instances) {
      popup = instances[popupId];
      popupData = popup.data();
      shownId = popupData[dataShown];
      if (!shownId) {
        continue;
      }
      trigger = getTrigger(shownId);
      triggerData = trigger.data(classBase);
      options = triggerData.options;
      popup.removeClass(filterAlignmentClass);
      if (resetTheme) {
        themes = classTheme + options.theme.split(' ').join(" " + classTheme);
        popup.attr('class', "" + classInstance + " " + themes);
      }
      win = $(window);
      xDistance = yDistance = options.popupDistance;
      xOffset = options.popupOffset;
      yOffset = options.popupYOffset;
      isFixed = popup.data(dataPosition) === 'fixed';
      popupH = popup.outerHeight();
      popupW = popup.outerWidth();
      popupCenter = popupW / 2;
      winWidth = win.width();
      winHeight = win.height();
      winScrollTop = win.scrollTop();
      winScrollLeft = win.scrollLeft();
      windowPadding = options.windowPadding;
      offset = trigger.offset();
      selfWidth = trigger.outerWidth();
      selfHeight = trigger.outerHeight();
      selfY = offset.top - winScrollTop;
      popupOffsetLeft = offset.left + selfWidth / 2;
      popupOffsetTop = offset.top - popupH + yOffset;
      popupY = popupH + options.popupDistance - yOffset;
      popupDistanceTop = selfY - popupY;
      popupDistanceBottom = winHeight - selfY - selfHeight - popupY;
      popupDistanceLeft = offset.left - popupW - xOffset;
      popupDistanceRight = winWidth - offset.left - selfWidth - popupW;
      preferredPosition = options.preferredPosition;
      if (preferredPosition === 'left' || preferredPosition === 'right') {
        yDistance = 0;
        popupOffsetTop += selfHeight / 2 + popupH / 2;
        if ((preferredPosition === 'right' && popupDistanceRight > windowPadding) || popupDistanceLeft < windowPadding) {
          popup.addClass(classRight);
          popupOffsetLeft = offset.left + selfWidth + xOffset;
        } else {
          popup.addClass(classLeft);
          popupOffsetLeft = offset.left - popupW - xOffset;
          xDistance = -xDistance;
        }
      } else {
        xDistance = 0;
        if (popupOffsetLeft + popupCenter > winWidth - windowPadding) {
          popupOffsetLeft -= popupCenter * 2 - xOffset;
          popup.addClass(classAlignLeft);
        } else if (popupOffsetLeft - popupCenter < windowPadding) {
          popupOffsetLeft -= xOffset;
          popup.addClass(classAlignRight);
        } else {
          popupOffsetLeft -= popupCenter;
        }
        if (popupOffsetLeft < windowPadding) {
          popupOffsetLeft = windowPadding;
        }
        if ((preferredPosition === 'bottom' && popupDistanceBottom > windowPadding) || popupDistanceTop < windowPadding) {
          yDistance = -yDistance;
          popupOffsetTop += popupH + selfHeight - 2 * yOffset;
          popup.addClass(classBottom);
        }
      }
      if (popupH < selfHeight) {
        yOverflow = popupOffsetTop + popupH + windowPadding - yDistance + yOffset - winScrollTop - winHeight;
        if (yOverflow > 0) {
          popupOffsetTop = Math.max(popupOffsetTop - yOverflow - windowPadding, offset.top + yOffset + windowPadding + yDistance);
        }
      }
      if (popupW < selfWidth) {
        xOverflow = popupOffsetLeft + popupW + windowPadding + xDistance + xOffset - winScrollLeft - winWidth;
        if (xOverflow > 0) {
          popupOffsetLeft = Math.max(popupOffsetLeft - xOverflow + windowPadding, offset.left + xOffset + windowPadding - xDistance);
        }
      }
      if (options.hideTrigger) {
        trigger.stop(true).fadeTo(options.triggerAnimationSpeed, 0);
      }
      opacity = 0;
      if (!popupData[dataBeingShown] || options.cssAnimations.enabled) {
        popupOffsetTop -= yDistance;
        popupOffsetLeft += xDistance;
        xDistance = yDistance = 0;
        opacity = 1;
      }
      if (isFixed) {
        popupOffsetLeft -= winScrollLeft;
        popupOffsetTop -= winScrollTop;
      }
      popup.data(dataXDistance, xDistance).data(dataYDistance, yDistance).css({
        top: popupOffsetTop,
        left: popupOffsetLeft,
        display: 'block',
        opacity: opacity
      });
      _results.push(fadeInPopup(popup, {
        top: "-=" + yDistance,
        left: "+=" + xDistance,
        opacity: 1
      }));
    }
    return _results;
  };
  forceRefreshPosition = function() {
    return refreshPosition(false);
  };
  fadeInPopup = function(popup, animationTarget) {
    var options, _ref;
    options = ((_ref = getTrigger(popup.data(dataShown)).data(classBase)) != null ? _ref.options : void 0) || sip.defaults;
    if (options.cssAnimations.enabled) {
      popup.addClass(options.cssAnimations.show);
      return window.setTimeout(function() {
        return fadeInPopupFinished(popup, options);
      }, options.popupAnimationSpeed);
    } else {
      return popup.stop(true).animate(animationTarget, options.popupAnimationSpeed, options.funcEase, function() {
        return fadeInPopupFinished(popup, options);
      });
    }
  };
  fadeInPopupFinished = function(popup, options) {
    var popupData;
    popupData = popup.data();
    if (popupData[dataBeingShown]) {
      popup.data(dataBeingShown, false);
      return typeof options.onAfterShow === "function" ? options.onAfterShow(getTrigger(popupData[dataShown])) : void 0;
    }
  };
  showPopup = function(trigger, content) {
    var lastTrigger, lastTriggerOpt, popup, popupContent, popupPosition, shownId, tourOverlay, triggerData, triggerOptions;
    if (content == null) {
      content = '';
    }
    triggerData = trigger.data(classBase);
    triggerOptions = triggerData.options;
    popup = triggerData.popupInstance;
    if (!popup.data(dataTriggerHovered)) {
      return;
    }
    shownId = popup.data(dataShown);
    if (shownId) {
      lastTrigger = getTrigger(shownId);
      if (lastTrigger.length) {
        lastTriggerOpt = lastTrigger.data(classBase).options || sip.defaults;
        if (lastTriggerOpt.hideTrigger) {
          lastTrigger.stop(true).fadeTo(lastTriggerOpt.fadeSpeed, 1);
        }
      }
    }
    if (triggerOptions.tourHighlight && triggerOptions.tourIndex) {
      tourOverlay = getOverlay().css({
        backgroundColor: triggerOptions.tourHighlightColor,
        zIndex: triggerOptions.tourHighlightZIndex
      });
      resetTourZIndices();
      if (trigger.css('position') === 'static') {
        trigger.css('position', 'relative');
      }
      if (!trigger.data(dataZIndex)) {
        trigger.data(dataZIndex, trigger.css('zIndex'));
      }
      trigger.css('zIndex', triggerOptions.tourHighlightZIndex + 1);
      tourOverlay.fadeTo(triggerOptions.tourHighlightFadeDuration, triggerOptions.tourHighlightOpacity);
    } else if ($overlay) {
      hideTourOverlay(triggerOptions);
    }
    popupContent = content || triggerData.hint;
    if (triggerOptions.referencedContent && !content) {
      popupContent = $(triggerOptions.referencedContent).clone(true, true) || popupContent;
    }
    popupPosition = isElementFixed(trigger) ? 'fixed' : 'absolute';
    if (shownId !== triggerData.id) {
      popup.hide(0);
    }
    popup.data(dataBeingShown, true).data(dataShown, triggerData.id).data(dataPosition, popupPosition).find('.' + classContent).empty().append(popupContent);
    popup.css('position', popupPosition);
    return queueRefreshPosition(0);
  };
  isElementFixed = function(element) {
    var elemToCheck;
    elemToCheck = element;
    while (elemToCheck.length && elemToCheck[0].nodeName.toUpperCase() !== 'HTML') {
      if (elemToCheck.css('position') === 'fixed') {
        return true;
      }
      elemToCheck = elemToCheck.parent();
    }
    return false;
  };
  triggerMouseover = function() {
    var isTrigger, popup, shownId, trigger, triggerData, _base;
    trigger = popup = $(this);
    isTrigger = trigger.hasClass(classInitialized);
    if (!isTrigger) {
      trigger = getTrigger(popup.data(dataShown));
    }
    if (!trigger.length) {
      return;
    }
    triggerData = trigger.data(classBase);
    popup = triggerData.popupInstance.data((isTrigger ? dataTriggerHovered : dataPopupHovered), true);
    killTimers(popup);
    shownId = popup.data(dataShown);
    if (shownId !== triggerData.id || popup.css('opacity') === 0) {
      if (typeof (_base = triggerData.options).onBeforeShow === "function") {
        _base.onBeforeShow(trigger);
      }
      return popup.data(dataTimerShow, setTimeout(function() {
        return showPopup(trigger);
      }, triggerData.options.popupDelay));
    }
  };
  triggerMouseout = function() {
    var isTrigger, popup, popupData, trigger, triggerData, _base;
    trigger = popup = $(this);
    isTrigger = trigger.hasClass(classInitialized);
    if (!isTrigger) {
      trigger = getTrigger(popup.data(dataShown));
    }
    if (!trigger.length) {
      return;
    }
    triggerData = trigger.data(classBase);
    popup = triggerData.popupInstance.data((isTrigger ? dataTriggerHovered : dataPopupHovered), false);
    killTimers(popup);
    popupData = popup.data();
    if (!(popupData[dataPopupHovered] || popupData[dataTriggerHovered])) {
      if (typeof (_base = triggerData.options).onBeforeHide === "function") {
        _base.onBeforeHide(trigger);
      }
      return popup.data(dataTimerHide, setTimeout(function() {
        return hideSmallipop(popup);
      }, triggerData.options.hideDelay));
    }
  };
  onWindowScroll = function(e) {
    clearTimeout(scrollTimer);
    return scrollTimer = setTimeout(forceRefreshPosition, 250);
  };
  setContent = function(trigger, content) {
    var partOfTour, popupContent, triggerData;
    if (!(trigger != null ? trigger.length : void 0)) {
      return;
    }
    triggerData = trigger.data(classBase);
    partOfTour = triggerData.tourTitle;
    if (partOfTour) {
      popupContent = triggerData.popupInstance.find('.' + classTourContent);
    } else {
      popupContent = triggerData.popupInstance.find('.' + classContent);
    }
    if (popupContent.html() !== content) {
      return popupContent.stop(true).fadeTo(triggerData.options.contentAnimationSpeed, 0, function() {
        $(this).html(content).fadeTo(triggerData.options.contentAnimationSpeed, 1);
        return refreshPosition();
      });
    }
  };
  runTour = function(trigger, step) {
    var currentTourItems, i, tourTitle, triggerData, _i, _ref;
    triggerData = trigger.data(classBase);
    tourTitle = triggerData != null ? triggerData.tourTitle : void 0;
    if (!(tourTitle && tours[tourTitle])) {
      return;
    }
    tours[tourTitle].sort(function(a, b) {
      return a.index - b.index;
    });
    if (!(typeof step === 'number' && step % 1 === 0)) {
      step = -1;
    } else {
      step -= 1;
    }
    currentTour = tourTitle;
    currentTourItems = tours[tourTitle];
    for (i = _i = 0, _ref = currentTourItems.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      if ((step >= 0 && i === step) || (step < 0 && currentTourItems[i].id === triggerData.id)) {
        return tourShow(tourTitle, i);
      }
    }
  };
  tourShow = function(title, index) {
    var $content, $trigger, currentTourItems, navigation, navigationEnabled, options, triggerData;
    currentTourItems = tours[title];
    if (!currentTourItems) {
      return;
    }
    $trigger = currentTourItems[index].trigger;
    triggerData = $trigger.data(classBase);
    options = triggerData.options;
    navigationEnabled = options.tourNavigationEnabled;
    navigation = '';
    if (navigationEnabled) {
      navigation += ("<div class='" + classTourProgress + "'>") + ("" + (index + 1) + " " + options.labels.of + " " + currentTourItems.length + "</div>");
      if (index > 0) {
        navigation += "<a href='#' class='" + classTourPrev + "'>" + options.labels.prev + "</a>";
      }
      if (index < currentTourItems.length - 1) {
        navigation += "<a href='#' class='" + classTourNext + "'>" + options.labels.next + "</a>";
      }
    }
    if (!navigationEnabled || index === currentTourItems.length - 1) {
      navigation += "<a href='#' class='" + classTourClose + "'>" + options.labels.close + "</a>";
    }
    $content = $(("<div class='" + classTourContent + "'/>") + ("<a href='#' class='" + classTourCloseIcon + "'>&Chi;</a>") + ("<div class='" + classTourFooter + "'>" + navigation + "</div>"));
    $content.eq(0).append(triggerData.hint);
    killTimers(triggerData.popupInstance);
    triggerData.popupInstance.data(dataTriggerHovered, true);
    return showWhenVisible($trigger, $content);
  };
  showWhenVisible = function($trigger, content) {
    var offset, targetPosition, triggerOptions, windowHeight;
    targetPosition = $trigger.offset().top;
    offset = targetPosition - $document.scrollTop();
    windowHeight = $window.height();
    triggerOptions = $trigger.data(classBase).options;
    if (!isElementFixed($trigger) && (offset < triggerOptions.autoscrollPadding || offset > windowHeight - triggerOptions.autoscrollPadding)) {
      return $('html, body').animate({
        scrollTop: targetPosition - windowHeight / 2
      }, 800, 'swing', function() {
        return showPopup($trigger, content);
      });
    } else {
      return showPopup($trigger, content);
    }
  };
  tourNext = function(e) {
    var $popup, currentTourItems, i, shownId, triggerOptions, _i, _ref;
    if (e != null) {
      e.preventDefault();
    }
    currentTourItems = tours[currentTour];
    if (!currentTourItems) {
      return;
    }
    $popup = currentTourItems[0].popupInstance;
    shownId = $popup.data(dataShown) || currentTourItems[0].id;
    for (i = _i = 0, _ref = currentTourItems.length - 2; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
      if (!(currentTourItems[i].id === shownId)) {
        continue;
      }
      triggerOptions = currentTourItems[i].trigger.data(classBase).options;
      if (triggerOptions.tourNavigationEnabled) {
        if (typeof triggerOptions.onTourNext === "function") {
          triggerOptions.onTourNext(currentTourItems[i + 1].trigger);
        }
        return tourShow(currentTour, i + 1);
      }
    }
  };
  tourPrev = function(e) {
    var $popup, currentTourItems, i, shownId, triggerOptions, _i, _ref;
    if (e != null) {
      e.preventDefault();
    }
    currentTourItems = tours[currentTour];
    if (!currentTourItems) {
      return;
    }
    $popup = currentTourItems[0].popupInstance;
    shownId = $popup.data(dataShown) || currentTourItems[0].id;
    for (i = _i = 1, _ref = currentTourItems.length - 1; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
      if (!(currentTourItems[i].id === shownId)) {
        continue;
      }
      triggerOptions = currentTourItems[i].trigger.data(classBase).options;
      if (triggerOptions.tourNavigationEnabled) {
        if (typeof triggerOptions.onTourPrev === "function") {
          triggerOptions.onTourPrev(currentTourItems[i - 1].trigger);
        }
        return tourShow(currentTour, i - 1);
      }
    }
  };
  tourClose = function(e) {
    var $popup;
    if (e != null) {
      e.preventDefault();
    }
    $popup = $(e.target).closest("." + classInstance);
    return hideSmallipop($popup);
  };
  destroy = function(instances) {
    return instances.each(function() {
      var data, self;
      self = $(this);
      data = self.data(classBase);
      if (data) {
        return self.unbind("." + classBase).data(classBase, {}).removeClass(filterBaseClass);
      }
    });
  };
  onWindowKeyUp = function(e) {
    var popup, popupId, targetIsInput, _ref, _results;
    targetIsInput = (_ref = e != null ? e.target.tagName.toLowerCase() : void 0) === 'input' || _ref === 'textarea';
    switch (e.which) {
      case 27:
        _results = [];
        for (popupId in instances) {
          popup = instances[popupId];
          _results.push(hideSmallipop(popup));
        }
        return _results;
        break;
      case 37:
        if (!targetIsInput) {
          return tourPrev();
        }
        break;
      case 39:
        if (!targetIsInput) {
          return tourNext();
        }
    }
  };
  getInstance = function(id, isTour) {
    var instance;
    if (id == null) {
      id = 'default';
    }
    if (isTour == null) {
      isTour = false;
    }
    if (instances[id]) {
      return instances[id];
    }
    instance = $(popupTemplate).css('opacity', 0).attr('id', "" + (classBase + nextInstanceId++)).addClass(classInstance).data(dataXDistance, 0).data(dataYDistance, 0).data(dataIsTour, isTour).bind(eventMouseOver, triggerMouseover).bind(eventMouseOut, triggerMouseout);
    $('body').append(instance);
    if (isTour) {
      instance.delegate("." + classTourPrev, eventClick, tourPrev).delegate("." + classTourNext, eventClick, tourNext).delegate("." + classTourClose + ", ." + classTourCloseIcon, eventClick, tourClose);
    } else {
      instance.delegate('a', eventClick, hideSmallipop);
    }
    if (nextInstanceId === 2) {
      $document.bind("" + eventClick + " " + eventTouchEnd, hideSmallipop);
      $window.bind(eventResize, queueRefreshPosition).bind(eventScroll, onWindowScroll).bind(eventKeyUp, onWindowKeyUp);
    }
    return instances[id] = instance;
  };
  return $.fn.smallipop = function(options, hint) {
    var $popup;
    if (options == null) {
      options = {};
    }
    if (hint == null) {
      hint = '';
    }
    if (typeof options === 'string') {
      switch (options.toLowerCase()) {
        case 'show':
          showSmallipop.call(this.first().get(0));
          break;
        case 'hide':
          hideSmallipop(this.first().get(0));
          break;
        case 'destroy':
          destroy(this);
          break;
        case 'tour':
          runTour(this.first(), hint);
          break;
        case 'update':
          setContent(this.first(), hint);
      }
      return this;
    }
    options = $.extend(true, {}, sip.defaults, options);
    if (!cssAnimationsEnabled) {
      options.cssAnimations.enabled = false;
    }
    $popup = getInstance(options.popupId);
    return this.each(function() {
      var $objInfo, $self, isFormElement, newId, objHint, option, optionName, tagName, touchTrigger, tourTitle, triggerData, triggerEvents, triggerOptions, triggerPopupInstance, type, value;
      $self = $(this);
      tagName = $self[0].tagName.toLowerCase();
      type = $self.attr('type');
      triggerData = $self.data();
      objHint = hint || $self.attr('title');
      $objInfo = $("> ." + options.infoClass + ":first", $self);
      if ($objInfo.length) {
        objHint = $objInfo.clone(true, true).removeClass(options.infoClass);
      }
      if (objHint && !$self.hasClass(classInitialized)) {
        newId = lastId++;
        triggerEvents = {};
        triggerPopupInstance = $popup;
        triggerOptions = $.extend(true, {}, options);
        if (typeof triggerData[classBase] === 'object') {
          $.extend(true, triggerOptions, triggerData[classBase]);
        }
        for (option in triggerData) {
          value = triggerData[option];
          if (!(option.indexOf(classBase) >= 0)) {
            continue;
          }
          optionName = option.replace(classBase, '');
          if (optionName) {
            optionName = optionName.substr(0, 1).toLowerCase() + optionName.substr(1);
            triggerOptions[optionName] = value;
          }
        }
        isFormElement = triggerOptions.handleInputs && (tagName === 'input' || tagName === 'select' || tagName === 'textarea');
        if (triggerOptions.tourIndex) {
          tourTitle = triggerOptions.tourTitle || 'defaultTour';
          triggerOptions.hideOnTriggerClick = triggerOptions.hideOnPopupClick = false;
          triggerPopupInstance = getInstance(tourTitle, true);
          if (!tours[tourTitle]) {
            tours[tourTitle] = [];
          }
          tours[tourTitle].push({
            index: triggerOptions.tourIndex || 0,
            id: newId,
            trigger: $self,
            popupInstance: triggerPopupInstance
          });
        } else {
          touchTrigger = triggerOptions.touchSupport && touchEnabled;
          if (isFormElement) {
            triggerOptions.hideOnTriggerClick = false;
            triggerEvents[eventFocus] = triggerMouseover;
            triggerEvents[eventBlur] = triggerMouseout;
          } else if (!touchTrigger) {
            triggerEvents[eventMouseOut] = triggerMouseout;
          }
          if (triggerOptions.triggerOnClick || touchTrigger) {
            triggerEvents[eventClick] = showSmallipop;
          } else {
            triggerEvents[eventClick] = triggerMouseout;
            triggerEvents[eventMouseOver] = triggerMouseover;
          }
        }
        $self.addClass("" + classInitialized + " " + classBase + newId).attr('title', '').data(classBase, {
          id: newId,
          hint: objHint,
          options: triggerOptions,
          tagName: tagName,
          type: type,
          tourTitle: tourTitle,
          popupInstance: triggerPopupInstance,
          isFormElement: isFormElement
        }).bind(triggerEvents);
        if (!triggerOptions.hideOnTriggerClick) {
          return $self.delegate('a', eventClick, hideSmallipop);
        }
      }
    });
  };
});
(function(){

$('.hoverme').smallipop({
  theme: 'black',
  touchSupport: true
});

      var count = 0,
      list = [
        {
          service: 'delicious',
          user: 'rollex'
        },
        {
          service: 'deviantart',
          user: 'rolleq'
        },
        {
          service: 'dribbble',
          user: 'rolle'
        },
        {
          service: 'facebook_page',
          user: '569702083062696'
        },
        {
          service: 'facebook_page',
          user: '569702083062696'
        },
        {
          service: 'facebook_page',
          user: '115627098466807'
        },
        {
          service: 'facebook_page',
          user: '128416057191530'
        },
        {
          service: 'facebook_page',
          user: '540347485'
        },
        {
          service: 'pocket',
          user: 'rolle-'
        },
        {
          service: 'github',
          user: 'ronilaukkarinen'
        },
        {
          service: 'bitbucket',
          user: 'ronilaukkarinen'
        },
        {
          service: 'lastfm',
          user: 'rolle-'
        },
        {
          service: 'linkedin',
          user: 'rolle'
        },
        {
          service: 'tumblr',
          user: 'rolle'
        },
,
        {
          service: 'vimeo',
          user: 'rollex'
        },
        {
          service: 'wordpress',
          user: 'rolleweb'
        },
        {
          service: 'youtube',
          user: 'rollex2'
        },
        {
          service: 'rss',
          user: 'http://www.rollemaa.org/feed/'
        },
        {
          service: 'rss',
          user: 'http://www.rollemaa.org/pikkuinen/feed/'
        },
        {
          service: 'rss',
          user: 'http://unet.rollemaa.org/feed/'
        },
        {
          service: 'rss',
          user: 'http://www.pulina.fi/feed/'
        },
        {
          service: 'rss',
          user: 'http://www.huurteinen.fi/feed/'
        },
        {
          service: 'rss',
          user: 'http://www.problemsolv.in/feed/'
        },
        {
          service: 'rss',
          user: 'http://www.dude.fi/blogi/feed/'
        },
        {
          service: 'rss',
          user: 'http://letterboxd.com/rolle/rss/'
        }
      ];

      Date.prototype.toISO8601 = function(date) {
          var pad = function (amount, width) {
              var padding = "";
              while (padding.length < width - 1 && amount < Math.pow(10, width - padding.length - 1))
                  padding += "0";
              return padding + amount.toString();
          }
          date = date ? date : new Date();
          var offset = date.getTimezoneOffset();
          return pad(date.getFullYear(), 4)
              + "-" + pad(date.getMonth() + 1, 2)
              + "-" + pad(date.getDate(), 2)
              + "T" + pad(date.getHours(), 2)
              + ":" + pad(date.getMinutes(), 2)
              + ":" + pad(date.getUTCSeconds(), 2)
              + (offset > 0 ? "-" : "+")
              + pad(Math.floor(Math.abs(offset) / 60), 2)
              + ":" + pad(Math.abs(offset) % 60, 2);
      };

      $("#lifestream").lifestream({
        limit: 30,
        list: list,
        feedloaded: function(){
          count++;
          // Check if all the feeds have been loaded
          if( count === list.length + 1 ){
            $("#lifestream li").each(function(){
              var element = $(this),
                  date = new Date(element.data("time"));
              element.append(' <abbr class="timeago" title="' + date.toISO8601(date) + '">' + date + "</abbr>");
            })
            $("#lifestream .timeago").timeago();
          }
        }
      });
    })();