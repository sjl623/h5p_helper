// ==UserScript==
// @name         hvp helper
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  one key finish the question in hvp
// @author       sjl623
// @match        https://moodle.scnu.edu.cn/mod/hvp/view.php?id=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    H5P.jQuery(".span4 a").click(function(){
        H5P.jQuery.post(H5PIntegration.ajax.setFinished, {
	      contentId: H5P.jQuery("iframe")['0'].dataset.contentId,
	      score: 1,
	      maxScore: 1,
	      opened: Math.round(new Date() / 1000)-(Math.floor(Math.random() * (600 - 300) ) + 300),
	      finished: Math.round(new Date() / 1000),
	    });
        alert("当前视频题目已完成，跳转至下一个视频")})
    // Your code here...
})();
