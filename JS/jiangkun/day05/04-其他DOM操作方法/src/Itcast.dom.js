// 必须先加载 core 再加载 dom
// 在此文件中 itcast 的相关核心内容可以直接使用
(function ( window ) {

var arr = [],
    push = arr.push,
    slice = arr.slice;

// extend
Itcast.parseHTML = function ( html ) {
          
    // 1, 准备容器
    var  div = document.createElement( 'div' );
    // 2, 设置 innerHTML
    div.innerHTML = html;
    // 3, 取出来( 数组 )
    // return div.childNodes;
    var arr = [];
    for ( var i = 0; i < div.childNodes.length; i++ ) {
        arr.push( div.childNodes[ i ] );
    }
    return arr;  
};







Itcast.fn.extend({

    appendTo: function ( selector ) {
        var iObj = this.constructor( selector ); // 统一变成伪数组了
        // this 是 伪数组, iObj 也是伪数组, 将 this 中的每一个元素, 加到 iObj 中的每一个元素里
        var tmp = [], tmpNode;

        for ( var i = 0; i < this.length; i++ ) {

            for ( var j = 0; j < iObj.length; j++ ) {

                tmpNode = j == iObj.length - 1 ? this[ i ] : this[ i ].cloneNode( true );

                tmp.push( tmpNode );

                iObj[ j ].appendChild( tmpNode );

            }

        }

        // 返回的是一个新的 jq 对象, 用 tmp 中的元素组成
        var tmpIobj = this.constructor();
        tmpIobj.prevObject = this;
        push.apply( tmpIobj, tmp );
        return tmpIobj;

    },

    append: function ( selector ) {
        // 将 selector 表示的 dom 元素加到 this 中
        this.constructor( selector ).appendTo( this );
    }

})

})( window );