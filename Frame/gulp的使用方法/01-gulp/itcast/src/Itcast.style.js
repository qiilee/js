(function  ( window ) {

Itcast.fn.extend({


    css: function ( key, value ) {
        // 
        if ( Itcast.isArrayLike( key ) ) { // length
            // 数组, 忽略第二个参数
            // 返回的是第 0 个 dom 元素( this[ 0 ] ) 中对应样式属性的 对象
            var obj = {},
                target = this[ 0 ];
            Itcast.each( key, function ( i, v ) {
                // v 表示我要获得的样式名
                obj[ v ] = target.style[ v ] || window.getComputedStyle( target )[ v ];
            });
            return obj;

        } else if ( Object.prototype.toString.call( key ) === '[object Object]' ) {
            // 第一个参数是对象, 不考虑第二个参数, 设置
            // 给 this 中的每一个 元素 都加上 key 中描述的所有样式
            // this 是 jq 对象
            return this.each(function () {
                for ( var k in key ) {
                    this.style[ k ] = key[ k ];
                    // this 是 DOM 对象
                }
            });

        } else if ( typeof key === 'string' ) {

            if ( value === undefined ) {
                // 获得对应的样式
                return this[ 0 ].style[ key ] || window.getComputedStyle( this[ 0 ] )[ key ];

            } else if ( typeof value === 'string' ) {
                // 设置样式
                // 给 每一个 DOM 元素 都这个该样式
                return this.each(function  () {
                    this.style[ key ] = value;
                });

            } else if ( typeof value === 'function' ) {
                // 条件设置
                // 给每一个 DOM 元素设置该样式, 但是样式值由函数返回值决定
                return this.each(function ( i ) {
                    this.style[ key ] = value( i, this.style[ key ] || window.getComputedStyle( this )[ key ] )
                });
            }

        }

    },

    hasClass: function ( className ) {
        // 判断 this 中的所有 DOM 元素, 只要有一个含有该类样式的元素就返回 true
        // dom.className.split( ' ' ).indexOf (  'c' ) > -1
        className = className.trim();
        for ( var i = 0; i < this.length; i++ ) {
            var dom = this[ i ],
                classNames = dom.className && dom.className.split( ' ' );

            if ( classNames && classNames.indexOf( className ) > -1 ) {
                // 存在
                return true;
            }
        }
        return false;
    },


    addClass: function ( className ) {
        return this.each(function () {
            if ( this.className ) {
                this.className += ' ' + className;
            } else {
                this.className = className;
            }
        });
    } ,


    removeClass: function ( className ) {
        // 将 this 中 每一个 DOM 元素的 className 属性中符合 参数中描述的 className 的类样式删除
        className = className.trim(); // ES5
        return this.each(function () {

            // 删除 this 中的 对应 className
            var classNames = this.className && this.className.split( ' ' );
            if ( !classNames ) return;

            // 移除数组中符合要求的字符串
            var index; // undefined
            while( ( index = classNames.indexOf( className ) ) != -1 ) {
                classNames.splice( index, 1 );
            }

            this.className = classNames.join( ' ' );

        });
    },


    toggleClass: function ( className ) {
        // 给每一个 dom 元素处理一下, 有则减, 无则加
        return this.each( function () {
            if( I(this).hasClass( className ) ) {
                I( this ).removeClass( className );
            } else {
                I( this ).addClass( className );
            }
        });
    }





})



})( window )