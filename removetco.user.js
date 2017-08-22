// ==UserScript==
// @name remove t.co
// @namespace https://github.com/kkren
// @match *://twitter.com/
// @grant none
// require https://cdn.bootcss.com/jquery/2.1.4/jquery.min.js
// @run-at document-end
// @downloadURL https://github.com/kkren/remove_t.co/raw/master/removetco.user.js
// @version 0.1
// ==/UserScript==
(function() {
    function async_load() {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://cdn.bootcss.com/jquery/2.1.4/jquery.min.js";
        var x = document.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
    }
    if (window.attachEvent) window.attachEvent("onload", async_load); else window.addEventListener("load", async_load, false);
    var i = 0;
    window.onscroll = function() {
        var urls = $("[data-expanded-url]").length;
        for (;i < urls; i++) {
            var expanded = $("[data-expanded-url]").eq(i).attr("data-expanded-url");
            $("[data-expanded-url]").eq(i).attr("href", expanded);
        }
    };
})();