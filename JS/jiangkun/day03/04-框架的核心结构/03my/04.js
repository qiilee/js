/**
 * Created by 15842_000 on 2017/2/19.
 */
//jq的真正结构
(function () {
    function jQuery(selector) {
        return new jQuery.fn.init(selector);
    }

    jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        init: function (selector) {

        }
    }

    jQuery.fn.init.prototype = jQuery.fn;

    window.jQuery = window.$ = jQuery;

})();