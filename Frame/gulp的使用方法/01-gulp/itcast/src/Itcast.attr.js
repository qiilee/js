(function ( window ) {

var arr = [],
    push = arr.push;



var mark = 'checked, selected, readonly, disabled'.split( ', ' );
// attr, prop
Itcast.fn.extend({

    attr: function ( attrName, attrValue ) {
        if ( typeof attrName == 'string' ) {
            // 单个属性
            if ( attrValue === undefined ) {
                // 返回数据
                if ( mark.indexOf( attrName ) != -1 ) {
                    return this[ 0 ][ attrName ];
                } else {
                    return this[ 0 ].getAttribute( attrName );
                }

            } else if ( typeof attrValue  === 'function' ) {
                // 取值有回调函数决定
                // 回调函数含有一个 index 属性, 用于描述是哪一个 元素使用该对象函数( 简化后不考虑第二个参数 )
                return this.each( function ( i ) {
                    if ( mark.indexOf( attrName ) != -1 ) {
                        this[ attrName ] = attrValue( i );
                    } else {
                        this.setAttribute( attrName, attrValue( i ) );
                    }

                });

            } else {
                // 设置单个值
                // 也是设置 每一个 DOM 元素
                return this.each( function () {
                    if ( mark.indexOf( attrName ) != -1 ) {
                        this[ attrName ] = attrValue;
                    } else {
                        this.setAttribute( attrName, attrValue );
                    }

                });
            }
        } else if ( Object.prototype.toString.call( attrName ) === '[object Object]' ) {
            // 对象, 设置多个属性
            // 给 this 中的 每一个 DOM 元素都设置 attrName 中的每一个属性
            return this.each(function () {
                var that = this;
                Itcast.each( attrName, function ( k, v ) {
                    if ( mark.indexOf( k ) != -1 ) {
                        that[ k ] = v;
                    } else {
                        that.setAttribute( k, v );
                    }
                });
            });
        }
    } ,


    prop: function ( attrName, attrValue ) {
        if ( typeof attrName == 'string' ) {
            if ( attrValue === undefined ) {
                return this[ 0 ][ attrName ];
                
            } else if ( typeof attrValue  === 'function' ) {
                return this.each( function ( i ) {
                    this[ attrName ] = attrValue( i, this[ attrName ] );
                });

            } else {
                return this.each( function () {
                    this[ attrName ] = attrValue;
                });
            }

        } else if ( Object.prototype.toString.call( attrName ) === '[object Object]' ) {
            return this.each(function () {
                var that = this;
                Itcast.each( attrName, function ( k, v ) {
                    that[ k ] = v;
                });
            });

        }
    } 

});



// html, text, val
Itcast.fn.extend({
    html: function ( html ) {
        if ( html ) {
            // 设置
            return this.each(function () {
                this.innerHTML = html;
            });
        } else {
            // 获取
            return this[ 0 ].innerHTML;
        }
    },
    text: function ( txt ) {
        if ( txt ) {
            // 设置
            return this.each(function () {
                this.innerText = txt;
            });
        } else {
            // 获取
            return this[ 0 ].innerText;
        }
    },
    val: function ( value ) {
        if ( value ) {
            // 设置
            return this.each(function () {
                this.value = value;
            });
        } else {
            // 获取
            return this[ 0 ].value;
        }
    }
});




})( window );