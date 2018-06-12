/**
 * Created by Administrator on 2016/11/22.
 */
/**
 * 定义了一个没有兼容性的获取标签内容的函数
 * @param element
 * @returns {*}
 */
function getText(element){ //形参
    // 能力检测   就是要看当前的浏览器，是否支持此对象的属性或是方法
//        var b = typeof element.innerText;
    if(typeof element.innerText=="string"){
        return    element.innerText;
    }else {
        return   element.textContent; // 低版本的火狐浏览器支持
    }
}

/**
 * 定义了一个没有兼容性的设置标签内容的函数
 * @param element
 * @param value
 */
function setText(element,value){
    if(typeof element.innerText=="string"){
        element.innerText = value; //IE8及之前的低版本的浏览器
    }else {
        element.textContent = value;//低版本的火狐浏览器
    }
}


var Txt = {
    getText:function(element){
        // 能力检测   就是要看当前的浏览器，是否支持此对象的属性或是方法
//        var b = typeof element.innerText;
        if(typeof element.innerText=="string"){
            return    element.innerText;
        }else {
            return   element.textContent; // 低版本的火狐浏览器支持
        }
    },
    setText:function(element,value){
        if(typeof element.innerText=="string"){
            element.innerText = value; //IE8及之前的低版本的浏览器
        }else {
            element.textContent = value;//低版本的火狐浏览器
        }
    }
}


var ele = {
    getNextElement:function(element){
        // 能力检测  就是要看当前的浏览器是否支持此对象的属性或是方法
        if(element.nextElementSibling) {
            return element.nextElementSibling;//高级浏览器支持的方式
        }else { // 是IE8及之前的低版本的浏览器支持的方式
            var ele = element.nextSibling;
            while(ele&&ele.nodeType!=1){ // 每一个条件是保证对象得真实存，不是undefined，再一个就是这个节点不是标签
                ele =  ele.nextSibling; //继续在当前标签对象往后找
            }
            return ele;
        }
    },
    getPreviousElement:function(element){
        // 能力检测
        if(element.previousElementSibling){
            return element.previousElementSibling; // 高级浏览器支持的获取当前标签的上一个标签节点
        }else {
            var ele = element.previousSibling;
            while(ele&&ele.nodeType!=1){
                ele=  ele.previousSibling;
            }
            return ele;
        }
    },
    getFirstElement:function(element){
        // 能力检测
        if(element.firstElementChild){ // 高级浏览器支持的方式
            return element.firstElementChild;
        }else {
            //低版本的浏览器支持的方式
            var ele = element.firstChild;
            while(ele&&ele.nodeType!=1){
                ele= ele.nextSibling;
            }
            return ele;
        }
    },
    getLastElement:function(element){
        // 能力检测
        if(element.lastElementChild){
            return element.lastElementChild;
        }else {
            var ele = element.lastChild;
            while(ele&&ele.nodeType!=1){
                ele= ele.previousSibling;
            }
            return ele;
        }
    }
}


/**
 * 封装了一个兼容性版本的获取下一个相邻的标签节点的函数
 * @param element
 * @returns {*}
 */

function getNextElement(element){
    // 能力检测  就是要看当前的浏览器是否支持此对象的属性或是方法
    if(element.nextElementSibling) {
        return element.nextElementSibling;//高级浏览器支持的方式
    }else { // 是IE8及之前的低版本的浏览器支持的方式
        var ele = element.nextSibling;
        while(ele&&ele.nodeType!=1){ // 每一个条件是保证对象得真实存，不是undefined，再一个就是这个节点不是标签
            ele =  ele.nextSibling; //继续在当前标签对象往后找
        }
        return ele;
    }
}
/**
 * 封装了一个兼容版本的获取上一个标签节点的函数
 * @param element
 * @returns {*}
 */
function getPreviousElement(element){
    // 能力检测
    if(element.previousElementSibling){
        return element.previousElementSibling; // 高级浏览器支持的获取当前标签的上一个标签节点
    }else {
        var ele = element.previousSibling;
        while(ele&&ele.nodeType!=1){
            ele=  ele.previousSibling;
        }
        return ele;
    }
}
/**
 * 封装了一个兼容版本的获得子标签节点的函数
 * @param element
 * @returns {element}
 */
function  getFirstElement(element){
    // 能力检测
    if(element.firstElementChild){ // 高级浏览器支持的方式
        return element.firstElementChild;
    }else {
        //低版本的浏览器支持的方式
        var ele = element.firstChild;
        while(ele&&ele.nodeType!=1){
            ele= ele.nextSibling;
        }
        return ele;
    }
}

/**
 * 封装了一个兼容版本的获取父元素的最后一个子标签节点函数
 * @param element
 * @returns {*}
 */
function getLastElement(element){
    // 能力检测
    if(element.lastElementChild){
        return element.lastElementChild;
    }else {
        var ele = element.lastChild;
        while(ele&&ele.nodeType!=1){
            ele= ele.previousSibling;
        }
        return ele;
    }
}
/**
 * 封装了一个通过ID获取标签对象的函数
 * @param id
 * @returns {Element}
 */
function $$(id){
    return document.getElementById(id);
}


/**
 * 封装了一个移动所有的option的函数
 * @param source
 * @param target
 */
function moveAll(source,target){
    var all = $$(source);
    var sel = $$(target);
    var options = all.children;//仅仅获取子标签节点
    for(var i=0;i<options.length;i++){
        sel.appendChild(options[i]); //是将左侧的option一个一个的剪切到右边
        i--;
    }
}
/**
 * 封装了一个移动选中option的按钮
 * @param source
 * @param target
 */
function moveSelecte(source,target){
    var all = $$(source);
    var sel = $$(target);
    var options = all.children;
    for(var i=0;i<options.length;i++){ // 循环遍历每一个option,查看选中状态
        if(options[i].selected){
            sel.appendChild(options[i]);
            i--;// i--之后，再++,保证再从原来剪切的位置继续向后循环
        }
    }
}

