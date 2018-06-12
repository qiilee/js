/**
 * Created by Administrator on 2016/11/21.
 */
/**
 * 封装了一个获得标签内容的函数
 * @param element
 * @returns {*}
 */
function getText(element){
//        var str = element.innerText;
    if(typeof element.innerText =="string"){ // 一般是boolean类型的值，或是关系表达式或是逻辑表达式  如果if的小括号里面放的是其它的数据类型的话，是先将其它的数据类型转换为对应的boolean类型的值，再进行判断   Boolean()
        return element.innerText; //IE8及之前的浏览器支持的方式
    }else {
        return element.textContent; //低版本的火狐浏览器支持的方式
    }
}

/**
 * 封装了一个设置标签内容的函数
 * @param element
 * @param value
 */
function setText(element,value){
    // 能力检测    就是看当前的浏览器是支持此对象的属性或是方法
    if(typeof element.innerText =="string"){ // IE8及之前的浏览器支持的方式
        element.innerText = value;
    }else { // 进入到这里，就是低版本的火狐浏览器支持的方式
        element.textContent = value;
    }
}