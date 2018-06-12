(function ( window ) {

var arr = [],
    push = arr.push;


// 对外公开的函数, 但是原型与构造函数相同, 而且 constructor 也是该函数
// 因此 Itcast 函数也是构造函数
function Itcast ( selector ) {
    return new Itcast.fn.init( selector );
}

// 原型的设置
Itcast.fn = Itcast.prototype = {
    constructor: Itcast,

    init: function ( selector ) {

        // 获得元素, 设置 this 
        push.apply( this, Itcast.select( selector ));

        
    },

    // 实例也应该增加 each 与 map 等方法
    each: function ( callback ) {
        // 遍历 this 使用 callback 处理每一个元素
        return Itcast.each( this, callback );
    },
    map: function ( callback ) {
        return Itcast.map( this, callback );
    }
};
// 共享原型
Itcast.fn.init.prototype = Itcast.fn;



// 已经写好的工具方法
Itcast.select = function ( selector ) {
    return document.querySelectorAll( selector );
};
Itcast.isArrayLike = function ( obj ) {
    if ( Object.prototype.toString.call( obj ) == '[object Array]' ) {
        return true;
    }
    var length = 'length' in obj && obj.length;
    return typeof length === 'number' && length >= 0;
};
Itcast.each = function ( arr, callback ) {
    if ( Itcast.isArrayLike ( arr ) ) {
        for ( var i = 0; i < arr.length; i++ ) {
            if ( callback.call( arr[ i ], i, arr[ i ] ) === false ) break;
        }
    } else {
        for ( var k in arr ) {
            if ( callback.call( arr[ k ], k, arr[ k ] ) === false ) break;
        }
    }
    return arr;
};
Itcast.map = function ( arr, callback ) {
    var newArr = [], tmp;
    if ( Itcast.isArrayLike ( arr ) ) {
        for ( var i = 0; i < arr.length; i++ ) {
            tmp = callback( arr[ i ], i );
            if ( tmp != null ) {
                newArr.push( tmp );
            }
        }
    } else {
        for ( var k in arr ) {
            tmp = callback( arr[ k ], k );
            if ( tmp != null ) {
                newArr.push( tmp );
            }
        }
    }
    return newArr;
}









window.Itcast = window.I = Itcast;


})( window );

