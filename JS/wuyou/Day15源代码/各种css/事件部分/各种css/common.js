/**
 * Created by yoyo on 2016-11-07.
 */

/**
 *
 * @param e
 * @returns {*}
 */
function getPageX(e) {
    //先检测是否存在pageX
    if (e.pageX) {
        return e.pageX;
    } else {
        //pageX的值是可视区域横坐标+页面左侧的卷曲距离
        return e.clientX + myScroll().left;
    }
}

/**
 *
 * @param e
 * @returns {*}
 */
function getPageY(e) {
    //先检测是否存在pageY
    if (e.pageY) {
        return e.pageY;
    } else {
        //pageY的值是可视区域纵坐标+页面顶部的卷曲高度
        return e.clientY + myScroll().top;
    }
}


/**
 * 兼容事件对象
 * @param e 获取事件对象
 * @returns {*|Event} 返回兼容后的事件对象
 */
function getEvent(e) {
    return e || window.event;
}


/**
 * 对不同浏览器的移出事件方式进行兼容
 * @param tag 要移除事件的标签
 * @param eventName 事件类型名 - 不能加 on
 * @param fn 指定需要移除的事件处理程序
 */
function removeEvent(tag, eventName, fn) {
    if (typeof tag.removeEventListener == "function") {
        tag.removeEventListener(eventName, fn);
    } else {
        tag.detachEvent("on" + eventName, fn);
    }
}

/**
 * 对不同浏览器的添加事件方式进行兼容
 * @param tag 要添加事件的标签
 * @param eventName 事件类型名 - 不能加 on
 * @param fn 事件处理程序
 */
function addEvent(tag, eventName, fn) {
    if (typeof tag.addEventListener == "function") {
        tag.addEventListener(eventName, fn);
    } else {
        tag.attachEvent("on" + eventName, fn);
    }
}

/**
 * 自己实现多次给同一标签添加事件不覆盖的函数
 * @param tag 要添加事件的标签
 * @param eventName 事件类型名 - 不需要加 on
 * @param fn 事件处理程序
 */
function myAddEvent(tag, eventName, fn) {
    //问题出现在，每次添加事件的时候，查看以前有没有添加过这个事件
    //说白了，就是事件内部保存的值是否是函数
    //1 取出onclick内的值，查看是否是函数
    var oldEvent = tag["on" + eventName];
    if (typeof oldEvent == "function") {
        //说明有一个旧的点击事件处理程序存在
        //我们想让新的和旧的都在点击的时候执行
        tag["on" + eventName] = function () {
            oldEvent();
            fn();
        };
    } else {
        //没有添加过事件，就直接使用fn作为事件处理程序即可
        tag["on" + eventName] = fn;
    }
}


/**
 *
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function myScroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

/**
 *
 * @returns {{height: (Number|number), width: (Number|number)}}
 */
function myClient() {
    return {
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0,
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0
    };
}







//------------------------------基础部分----------------------------
/**
 *
 * @param tag
 * @param attr
 * @returns {*}
 */
function getStyle(tag, attr) {
    if (tag.currentStyle) {
        return tag.currentStyle[attr];
    } else {
        return getComputedStyle(tag, null)[attr];
    }
//        return tag.currentStyle?tag.currentStyle[attr]:getComputedStyle(tag,null)[attr];
}

/**
 * 获取元素的内部文本
 * @param tag
 * @returns {*}
 */
function getText(tag) {
    if (typeof tag.innerText != "undefined") {
        return tag.innerText;
    } else {
        return tag.textContent;
    }
}

/**
 * 设置元素内部的文本
 * @param tag
 * @param text
 */
function setText(tag, text) {
    if (typeof tag.innerText != "undefined") {
        //设置文本内容
        tag.innerText = text;
    } else {
        tag.textContent = text;
    }
}

/**
 * 根据类名获取元素
 * @param clsName
 * @returns {Array}
 */
function getByClass(clsName) {
    //1 能力检测 检测当前执行的浏览器使用具有相应的功能
    //如果浏览器具有这个功能，说明内部是一个函数，类型为function
    //如果浏览器不支持，那么对象的属性不存在，值为undefined，转换bool值为false，进入else代码执行
//        if (typeof document.getElementsByClassName == "function") {
//            return document.getElementsByClassName(clsName);
//        } else {
    //自己写
    //找到页面中满足条件的标签
    //1 标签有多少？声明一个数组保存结果
    var resultArr = [];
    //2 获取body中的所有标签
    var tags = document.body.getElementsByTagName("*");
    //3 遍历所有标签
    for (var i = 0; i < tags.length; i++) {
        //4 取得tags[i]的类名，为了防止具有多个类名，需要将类名按照空格分开
        var str = tags[i].className;
        //5 分割后的数组
        var arr = str.split(" ");
        //6 遍历arr，查看每一个数组元素是否有和clsName相等的
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] == clsName) {
                //tags[i]是我所需要，放入数组中
                resultArr.push(tags[i]);
                break;
            }
        }
    }
    return resultArr;

//        }

}

/**
 * 获取当前节点的所有兄弟
 * @param me
 * @returns {Array}
 */
function getSb(me) {
    //获取所有元素兄弟节点
    //获取方式：先找爹，在找儿子们，再去除自己
//        var me = document.getElementById("me");
    //有可能要获取所有兄弟的节点不具有id，造成了局限性
    //所以我们让用户直接传入节点进行操作
    //var me = document.getElementById(id);
    var meDie = me.parentNode;
    var resultArr = [];
    //获取所有元素子节点
    var xiongdis = meDie.children;
    //去掉自己
    for (var i = 0; i < xiongdis.length; i++) {
        //me跟xiongdis中的其中一个元素节点是完全相同的
        if (xiongdis[i] != me) {
            //要了他
            resultArr.push(xiongdis[i]);
        }
    }

//        console.log(resultArr);
    return resultArr;

}

/**
 * 获取后一个兄弟节点
 * @param node  元素节点
 * @returns {*|Node}  返回获取到的元素节点 或者null
 */
function getNextEleSib(node) {
    var ns = node.nextSibling;
    //如果获取到null  ns.nodeType
    while (null != ns && 1 != ns.nodeType) {
        //从新获取的元素找下一个
        ns = ns.nextSibling;
    }
    return ns;
}

/**
 * 获取前一个兄弟节点
 * @param node  元素节点
 * @returns {*|Node}  返回获取到的元素节点 或者null
 */
function getPreEleSib(node) {
    //获取node的前一个兄弟节点
    var ps = node.previousSibling;
    //检测这个节点。如果不是null也不是元素节点。继续查找
    while (null != ps && 1 != ps.nodeType) {
        //再找ps的上一个兄弟节点
        ps = ps.previousSibling;
    }

    return ps;
}
