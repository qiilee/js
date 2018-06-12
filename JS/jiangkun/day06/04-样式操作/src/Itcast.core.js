(function ( window ) {

var arr = [],
    push = arr.push,
    slice = arr.slice;


// 对外公开的函数, 但是原型与构造函数相同, 而且 constructor 也是该函数
// 因此 Itcast 函数也是构造函数
function Itcast ( selector ) {
    return new Itcast.fn.init( selector );
}

// 原型的设置( 核心成员 )
Itcast.fn = Itcast.prototype = {
    constructor: Itcast,
    length: 0,
    init: function ( selector ) {

        // 传入的如果是 0, '', nulll, undefined
        if ( !selector ) return this;

        if ( typeof selector === 'string' ) {
            if ( /^\s*</.test( selector ) ) {
                // html 格式的字符串
                push.apply( this, Itcast.parseHTML( selector ));
            } else {
                // 选择器
                push.apply( this, Itcast.select( selector ));
            }
            return this;
        }

        // dom
        if ( selector.nodeType ) {
            // 将该 dom 元素转换成 Itcast 对象
            this[ 0 ] = selector;
            this.length = 1;
            return this;
        }

        // Itcast
        if ( selector.constructor == Itcast ) {
            // return selector; // 在课堂中没有任何问题

            // 保留 this , 但是需要利用 selector 构造一个新的 Itcast 对象
            push.apply( this, selector );
            return this;
        }

        // 函数
        if ( typeof selector == 'function' ) {
            // 相当于 onload 事件
            window.addEventListener( 'load', selector );
        }

    }
};
// 共享原型
Itcast.fn.init.prototype = Itcast.fn;

// 添加扩展方法
Itcast.extend = Itcast.fn.extend = function ( obj ) {
    for ( var k in obj ) {
        this[ k ] = obj[ k ];
    }
    return this;
};


// 已经写好的工具方法
Itcast.extend({
    select: function ( selector ) {
        return document.querySelectorAll( selector );
    },
    isArrayLike: function ( obj ) {
        if ( Object.prototype.toString.call( obj ) == '[object Array]' ) {
            return true;
        }

        if ( typeof obj == 'string' || typeof obj == 'function' ) {
            return false;
        }

        var length = 'length' in obj && obj.length;
        return typeof length === 'number' && length >= 0;
    },
    each: function ( arr, callback ) {
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
    },
    map: function ( arr, callback ) {
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
        // 扁平化处理
        return newArr.concat.apply( [], newArr );
    }
});

Itcast.fn.extend({
    each: function ( callback ) {
        return Itcast.each( this, callback );
    },
    map: function ( callback ) {
        return Itcast.map( this, callback );
    }
});


// 添加核心方法
Itcast.fn.extend({
    toArray: function () {
        // 要返回的是数组, 而且是 由 this 中的每一个 dom 元素所组成 的数组
        // 方案1
        // var arr = [];
        // for ( var i = 0; i < this.length; i++ ) {
        //     arr.push( this[ i ] );
        // }
        // return arr;

        // 方案2
        // return this.map(function ( v ) {
        //     return v;
        // });


        // 方案3
        return slice.call( this );

    },
    get: function ( index ) {
        if ( index === undefined ) {
            // toArray
            return this.toArray();
        }

        // 正负数
        if ( index < 0 ) {

            return this[ this.length + index ];

        } else {
            return this[ index ];
        }
    },
    first: function (  ) {
        // var iobj = this.constructor(); // Itcast()
        // var dom = this.get( 0 );
        // iobj[ 0 ] = dom;
        // iobj.length = 1;
        // return iobj;
        return this.eq( 0 );
    },
    eq: function ( index ) {
        // 获得元素, 并构造 Itcast 对象
        var iobj = this.constructor();
        
        if ( index == null ) return iobj; 

        var dom = this.get( index );
        if ( dom ) {
            iobj[ 0 ] = dom;
            iobj.length = 1; // 由于 iobj 是一个伪数组, 在 元素后应该长度 +1
        }
        return iobj;
    },
    last: function () {
        return this.eq( -1 );
    },
    pushStack: function ( array ) {
            // this 以前的 Itcast 对象
            // 栈结构
            var tmp = this.constructor();
            push.apply( tmp, array );
            tmp.prevObject = this;
            return tmp;
    },
    end: function () {
        return this.prevObject || this.constructor();
    }
});








window.Itcast = window.I = Itcast;


})( window );

