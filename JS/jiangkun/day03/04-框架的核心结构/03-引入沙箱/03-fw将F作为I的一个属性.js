(function () {

function F() {

}
F.prototype.each = function () {};


function I () {
    return new F();
}

// 让 F 成为 I 的一个属性
I.F = F;

window.I = window.Itcast = I;

})();

// 在 外面使用 
// I( ... )
// 静态方法在 I 的上面, 所以 I.map( ... )
// 如果要扩展的
// I.F.prototype.XXX = VVV;