(function () {


// function F() {
// }
// function I() {
// }

// var obj = {};

// F.prototype = obj;
// I.prototype = obj;

// 将静态方法加到 I 中, 可以使用 I.map 等方法
// 将实例方法加到 I.prototype 中, 实际上也就是加到 F.prototype 中. 
// 所以实例方法也可以使用 I 来扩展


// 在 jq 中真正的处理办法
// function jQuery ( selector ) {
//     return new jQuery.prototype.init( selector );
// }

// jQuery.prototype = {
//     constructor: jQuery,

//     init: function ( selector ) {

//     },

//     each: function () {}

// };

// // 让构造函数( init ) 与对外公开的 jQuery 函数共享原型
// // 构造函数.prototype = jQuery.prototype
// jQuery.prototype.init.prototype = jQuery.prototype;



// jq 的真正结构
function jQuery ( selector ) {
    return new jQuery.fn.init( selector );
}

jQuery.fn = jQuery.prototype = {
    constructor: jQuery,

    init: function ( selector ) {

    }
};

jQuery.fn.init.prototype = jQuery.fn;


window.jQuery = window.$ = jQuery;
})();

