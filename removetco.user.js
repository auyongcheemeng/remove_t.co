// ==UserScript==
// @name remove t.co
// @description  Bypass t.co redirection from Twitter external links
// @namespace https://github.com/auyongcheemeng
// @match *://twitter.com/*
// @match *://tweetdeck.twitter.com/*
// @grant none
// @require https://cdn.jsdelivr.net/npm/jquery@2.2.4/dist/jquery.min.js
// @run-at document-end
// @downloadURL https://raw.githubusercontent.com/auyongcheemeng/remove_t.co/master/removetco.user.js
// @version 0.6
// ==/UserScript==


function replace() {
  var i = 0;
  var urls = $("[href*='t.co']").length;
  for (; i < urls; i++) {
    if ($("[href*='t.co']").eq(i).attr("data-expanded-url") != undefined) {
      var expanded = $("[href*='t.co']").eq(i).attr("data-expanded-url");
    } else {
      var expanded = $("[href*='t.co']").eq(i).attr("title");
    }
    $("[href*='t.co']").eq(i).attr("href", expanded);

    if ($("[href*='t.co']").eq(i).attr("data-full-url") != undefined) {
      var expanded = $("[href*='t.co']").eq(i).attr("data-full-url");
    } else {
      var expanded = $("[href*='t.co']").eq(i).attr("title");
    }
    $("[href*='t.co']").eq(i).attr("href", expanded);
  }
}
//
mo = new MutationObserver(function(allmutations) {
  //alert();
  replace();
});
var targets = document.body;
mo.observe(targets, {
  'childList': true,
  'characterData': true,
  'subtree': true
});
replace();
