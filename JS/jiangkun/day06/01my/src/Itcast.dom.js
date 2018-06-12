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



// 工具方法
var tmpDomMethod = {
    appendTo: function ( currentNode, objNode ) {
        objNode.appendChild( currentNode );
    },
    prependTo: function ( currentNode, objNode ) {
        if ( objNode.childNodes.length == 0 ) {
            objNode.appendChild( currentNode );
        } else {
            objNode.insertBefore( currentNode, objNode.firstChild );
        }
    }, 
    insertBefore: function ( currentNode, objNode ) {
        objNode.parentNode.insertBefore( currentNode, objNode );
    }, 
    insertAfter: function ( currentNode, objNode ) {
        var nextNode = objNode.nextSibling;
        if ( nextNode ) {
            nextNode.parentNode.insertBefore( currentNode, nextNode );
        } else {
            objNode.parentNode.appendChild( currentNode );
        }
    }
};

Itcast.extend( tmpDomMethod );


// 给 Itcast.fn 添加 appendTo, prependTo, insertBefore, insertAfter 方法

Itcast.each( tmpDomMethod, function ( k, v ) {

    Itcast.fn[ k ] = function ( selector ) {
        var iObj = this.constructor( selector ); 
        var tmp = [], tmpNode;
        for ( var i = 0; i < this.length; i++ ) {
            for ( var j = 0; j < iObj.length; j++ ) {
                tmpNode = j == iObj.length - 1 ? this[ i ] : this[ i ].cloneNode( true );
                tmp.push( tmpNode );

                // 使用 k 对应的 方法 v 来处理这里的两个元素
                v( tmpNode, iObj[ j ] );
            }
        }

        // return this.pushStack( tmp );

        var tmpIobj = this.constructor();
        tmpIobj.prevObject = this;
        push.apply( tmpIobj, tmp );
        return tmpIobj;
    };
});


Itcast.each({
    'append': 'appendTo',
    'prepend': 'prependTo',
    'before': 'insertBefore',
    'after': 'insertAfter'
}, function ( k, v ) {
    Itcast.fn[ k ] = function ( selector ) {
        this.constructor( selector )[ v ]( this );
        return this;
    };
});





// 其他亲属访问方法
// 工具方法
Itcast.extend({
    contains: function ( arr, item ) {
        // return arr.indexOf( item ) > -1;
        for ( var i = 0; i < arr.length; i++ ) {
            if ( arr[ i ] == item ) {
                return true;
            }
        }
        return false;
    },
    unique: function ( arr ) {
        var newArr = [];
        for ( var i = 0; i < arr.length; i++ ) {
            if( !Itcast.contains( newArr, arr[ i ] ) ) {
                newArr.push( arr[ i ] );
            }
        }
        return newArr;
    }
});

// 亲属访问方法
Itcast.fn.extend({
    parent: function () {
        // 将每一个 this 中的元素的 父元素取出来, 构成 Itcast 对象
        return this.pushStack( Itcast.unique( this.map(function ( v, i ) {
            return v.parentNode;
        })));
    }
});

})( window );