parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"E35V":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={a:"ᜀ",i:"ᜁ",u:"ᜂ",e:"ᜁ",o:"ᜂ"},n={k:"ᜃ",g:"ᜄ",ng:"ᜅ",t:"ᜆ",d:"ᜇ",r:"ᜇ",n:"ᜈ",p:"ᜉ",b:"ᜊ",m:"ᜋ",y:"ᜌ",l:"ᜎ",w:"ᜏ",s:"ᜐ",h:"ᜑ"},u=["a","e","i","o","u","k","g","n","t","d","r","n","p","b","m","y","l","w","s","h",".",","],i={comma:"᜵",period:"᜶"},s={i:"ᜒ",u:"ᜓ",e:"ᜒ",o:"ᜓ"},l="᜔",d=["a","e","i","o","u"],c=function(e){return d.includes(e)?"a"===e?"":s[e]:u.includes(e)?n[e]:""},r=function r(t){if(""===t||null===r)return"";var o=t.toLowerCase().split(""),a=o.length-1;return o.reduce(function(r,t,g){var p=r.slice(-1),f=o[g-1];return 1===g?"g"===t||"ᜈ"===r?r=n.ng:(r=d.includes(r)?e[r]:u.includes(r)?n[r]:"",r+=d.includes(f)?d.includes(t)?e[t]:c(t):d.includes(t)?c(t):l+c(t)):" "===p?(r.substring(0,r.length-1),r+=d.includes(t)?e[t]:u.includes(t)?n[t]:""):"ᜈ"===p&&"g"===t?r=r.substring(0,r.length-1)+n.ng:d.includes(t)||d.includes(f)||!u.includes(t)||","===t||"."===t?d.includes(f)&&d.includes(t)?r+=e[t]:(r+=void 0===c(t)?"":c(t),r+=void 0===s[t]?"":s[t]):(r+=l,r+=c(t)),","===t&&(d.includes(f)||(r+=l),r+=i.comma),"."===t&&(d.includes(f)||(r+=l),r+=i.period),(g===a&&!d.includes(t)||" "===t&&!d.includes(t)&&" "!==f)&&"."!==t&&","!==t&&" "!==t&&(r+=l)," "===t&&(r+=" "),r})},t=r;exports.default=t;
},{}]},{},["E35V"], null)
//# sourceMappingURL=/baybayin.js.map