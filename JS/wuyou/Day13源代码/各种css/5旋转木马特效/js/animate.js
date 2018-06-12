/**
 *
 * @param tag
 * @param obj
 * @param fn  函数体 必须传，不传函数给你报错，活该
 */
function animate(tag, obj, fn) {
    //第一步是在函数内分析参数传递过程
    //tag = box'
    //obj = {"width": 400,"height": 450,"opacity": 0.3,"zIndex": 6,"top": 220,"left": 220}
    //fn = function () {alert("今天天气不错");}  函数表达式

    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //假设成立法:假设当前这次定时器可以清除
        var flag = true;

        //需要同时修改多个属性
        //对对象中的每一个属性进行操作
        for (var k in obj) {
            if (k == "opacity") {
                //k - 属性名 - 字符串形式 - attr
                //obj[k] - 属性值 - target
                var target = obj[k] * 100;
                //获取结果可能是一个小数
                var leader = getStyle(tag, k) * 100 || 0;
                //缓动运动公式
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                //设置的时候
                tag.style[k] = leader / 100;
            } else if (k == "zIndex") {
                //直接设置层级，不需要渐变
                tag.style.zIndex = obj[k];
            } else {
                //普通的，带单位的样式
                //k - 属性名 - 字符串形式 - attr
                //obj[k] - 属性值 - target
                var target = obj[k];
                var leader = parseInt(getStyle(tag, k)) || 0;
                //缓动运动公式
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                //设置的时候
                tag.style[k] = leader + "px";
            }

            //检测，当前这个属性是否到达了指定位置
            if (leader != target) {
                //阻止清除定时器
                flag = false;
            }
        }

        //我们需要保证obj中每一个obj都运动到位置
        if (flag) {
            clearInterval(tag.timer);
            //我们需要保证新的运动在当前的运动执行完毕后再开始
            //在清除定时器以后，保证当前运动已经完毕了
            //animate(box, {"width": 700});
            //alert("今天天气不错");
            //当函数中的某段功能不确定的情况下，传入函数参数
            //只有函数才能保存一段代码

            //需要对fn进行有效性检测
            //最严谨的检测方式
            //if(typeof fn == "function"){
            //    //调用
            //    fn();
            //}

            //自己用，亲朋好友使用
            //使用一个短路操作
            //只要传入了fn，这时对fn进行调用
            fn && fn();
            //如果没传undefined
        }
    }, 20);
}


//getStyle(box, "width")
//获取计算后的样式的值
function getStyle(tag, attr) {
//        if (tag.currentStyle) {
//            //当你确定你要使用的是及格字母的时候,使用字符串
//            //当你使用的不是字母，而是内部保存的值，这时使用变量
//            return tag.currentStyle[attr];
//        } else {
//            return getComputedStyle(tag, null)[attr];
//        }


    return tag.currentStyle ? tag.currentStyle[attr] : getComputedStyle(tag, null)[attr];


}