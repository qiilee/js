/**
 * Created by 15842_000 on 2017/2/19.
 */

// 引入构造函数 F
function F( selector ) {
    [].push.apply( this, F.select( selector ) );
}
F.prototype.each = function ( callback ) {
    // 遍历 this, 用 callback 处理 里面的每一个元素
    return F.each( this, callback );
}
F.prototype.map = function ( callback ) {
    // 遍历 this, 用 callback 处理 里面的每一个元素
    return F.map( this, callback );
}
F.select = function ( selector ) {
    return document.querySelectorAll( selector );
}
F.isArrayLike = function( obj ) {
    if ( Object.prototype.toString.call( obj ) == '[object Array]' ) {
        return true;
    }
    var length = 'length' in obj && obj.length;
    return typeof length === 'number' && length >= 0;
}
F.each = function( arr, callback ) {
    if (F.isArrayLike ( arr ) ) {
        for ( var i = 0; i < arr.length; i++ ) {
            if ( callback.call( arr[ i ], arr[ i ], i ) === false ) break;
        }
    } else {
        for ( var k in arr ) {
            if ( callback.call( arr[ k ], arr[ k ], k ) === false ) break;
        }
    }
    return arr;
}
F.map = function( arr, callback ) {
    var newArr = [], tmp;
    if (F.isArrayLike ( arr ) ) {
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