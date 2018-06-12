/**
 * Created by 15842_000 on 2016/11/30.
 */
function animate(tag, attr, target) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        var leader = parseInt(getStyle(tag, attr)) || 0;
        var step = (target - leader ) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        tag.style[attr] = leader + "px";
        if (leader == target) {
            clearInterval(tag.timer);
        }
    }, 17);
}


function getStyle(tag, attr) {
    if (tag.currentStyle) {
        return tag.currentStyle[attr];
    } else {
        return getComputedStyle(tag, null)[attr];
    }
}







console.log("=============================上下相同========================================");







//修改animate，可以修改任意的属性
function animate(tag, attr, target) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //改点1 - 获取某个属性的当前状态
        //由于具有单位，需要取整
        //parseInt("hehe") => NaN    NaN || 0
        //为了应对auto转换为NaN的问题，我们使用短路操作，保证程序的健壮性
        var leader = parseInt(getStyle(tag, attr)) || 0;
        //缓动公式的一部分是更改step的值
        var step = (target - leader ) / 10;
        //由于offsetLeft在取值的时候会四舍五入，我们的step如果比较小，会造成无法运动的问题
        //根据步数的正负，更改取整方式
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //缓动公式
        leader = leader + step;
        //改点2 - 设置给某一个属性
        tag.style[attr] = leader + "px";
        //检测是否走到了指定位置
        if (leader == target) {
            clearInterval(tag.timer);
        }
    }, 17);
}
//用于获取某个标签的某个样式属性值
//带单位
function getStyle(tag, attr) {
    //检测支持哪一个
    //box.currentStyle//如果不存在值为undefined
    //getComputedStyle如果浏览器不支持。相当于变量未声明，报错
    if (tag.currentStyle) {
        //ie支持
        return tag.currentStyle[attr];
    } else {
        //标准方法
        return getComputedStyle(tag, null)[attr];
    }
}
