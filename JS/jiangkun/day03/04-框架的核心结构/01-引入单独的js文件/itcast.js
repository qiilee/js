
// 引入构造函数 F
function F( selector ) {
    [].push.apply( this, F.select( selector ) );
}
F.prototype.each = function ( callback ) {
    // 遍历 this, 用 callback 处理 里面的每一个元素
    return F.each( this, callback );
};
F.prototype.map = function ( callback ) {
    return F.map( this, callback );
};


F.select = function ( selector ) {
    return document.querySelectorAll( selector );
};
F.isArrayLike = function ( obj ) {
    if ( Object.prototype.toString.call( obj ) == '[object Array]' ) {
        return true;
    }
    var length = 'length' in obj && obj.length;
    return typeof length === 'number' && length >= 0;
};
F.each = function ( arr, callback ) {
    if ( F.isArrayLike ( arr ) ) {
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
F.map = function ( arr, callback ) {
    var newArr = [], tmp;
    if ( F.isArrayLike ( arr ) ) {
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
// 为什么要将这些方法挂载到 构造函数 F 上
// 模仿 jq 代码, 在 jq 中 遍历方法 each , map 都有两个版本
// 静态方法, 和 实例方法的版本






