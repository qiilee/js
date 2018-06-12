(function () {

function F() {
    
}

function I () {
    return new F();
}


// 所有的静态方法加到 I 中
// 扩展实例方法, 应该给 F.prototype 加方法

I.extend = function ( name, func ) {
    F.prototype[ name ] = func;
}


window.Itcast = window.I = I;


})();