// ==UserScript==
// @name         wyl's hello world
// @namespace    https://ty1hc.github.io/
// @version      0.2
// @description  wyl's first tm script
// @author       wyl
// @match        https://www.baidu.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ttlsa.com
// @grant GM_log
// @updateURL    https://github.com/ty1hc/tampermonkeyscript/edit/main/wylsscript.js
// @downloadURL  https://github.com/ty1hc/tampermonkeyscript/edit/main/wylsscript.js
// ==/UserScript==

(function() {
    'use strict';
    GM_log('running on Dive Into Greasemonkey site w/o www prefix');
    alert('脚本劫持了你的百度')
    //document.getElementsByClassName('button-layer')[0].style.display = 'none'
    // Your code here...
    if(location.href.indexOf('www.baidu.com')>-1){location.href='https://ty1hc.github.io/'}
})();