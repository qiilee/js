/**
 *
 * @param tag 要获取样式的元素
 * @param attr  要获取的样式名
 * return {}
 */
//用于获取某个标签的某个样式属性值
//带单位
//getComputedStyle是一个标准方法，但是ie低版本不支持
//console.log(getComputedStyle(box, null).width);
//console.log(getComputedStyle(box, null).height);

//ie低版本支持 标签.currentStyle 属性，获取的结果同样是一个样式的集合(对象)
//console.log(box.currentStyle.width);
//console.log(box.currentStyle["width"]);

//兼容性函数一
function getStyle(tag, attr) {
    //检测支持哪一个
    //box.currentStyle//如果不存在值为undefined
    //getComputedStyle如果浏览器不支持。相当于变量未声明，报错
    if (tag.currentStyle) {
        //ie支持
        return tag.currentStyle[attr];
    } else {
        //标准方法
        //第一个参数是要获取的标签，第二个参数传null或者false
        return getComputedStyle(tag, null)[attr];
    }
}

//兼容性函数二
function getStyle(tag, attr) {
    return tag.currentStyle ? tag.currentStyle[attr] : getComputedStyle(tag, null)[attr];
}