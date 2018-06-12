(function ( window ) {

var arr = [],
    push = arr.push;


// 事件通用方法
// Itcast.fn.on =  function ( type, callback ) {
//     // 给 this 中每一个 dom 元素增加 type 事件
//     // 事件处理函数就是 callback
//     return this.each( function () {
//         this.addEventListener( type, callback );
//     });
// };
// Itcast.fn.off = function ( type, callback ) {
//     return this.each(function () {
//         this.removeEventListener( type, callback );
//     });
// }

Itcast.fn.extend({
    on: function ( type, callback ) {
        // 给 this 中每一个 dom 元素增加 type 事件
        // 事件处理函数就是 callback
        return this.each( function () {
            this.addEventListener( type, callback );
        });
    },
    off: function ( type, callback ) {
        return this.each(function () {
            this.removeEventListener( type, callback );
        });
    }
});


// 其他事件的快捷方法
// 有哪些事件
Itcast.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function ( i, v ) {

    Itcast.fn[ v ] = function ( callback ) {
        return this.on( v, callback );
    };
});



})( window );