/**
 * Created by 15842_000 on 2016/11/30.
 */

function animate(tag, target) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        var leader = tag.offsetLeft;
        var step = (target - leader ) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        tag.style.left = leader + "px";
        if (leader == target) {
            clearInterval(tag.timer);
        }
    }, 17);
}

//封装来源于此！
btn1.onclick = function () {
    clearInterval(timer);
    timer = setInterval(function () {
        var leader = box.offsetLeft;
        var step = (400 - leader ) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        box.style.left = leader + "px";
        if (leader == 400) {
            clearInterval(timer);
        }
    }, 17);
};















console.log("=============================上下相同========================================");





function animate(tag, target) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //取出盒子的当前位置
        //offsetLeft属性在取值的时候会四舍五入
        var leader = tag.offsetLeft;
        //缓动公式的一部分是更改step的值
        var step = (target - leader ) / 10;
        //由于offsetLeft在取值的时候会四舍五入，我们的step如果比较小，会造成无法运动的问题
        //根据步数的正负，更改取整方式
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //缓动公式
        leader = leader + step;
        //设置给box的left值
        tag.style.left = leader + "px";
        //检测是否走到了指定位置
        if (leader == target) {
            clearInterval(tag.timer);
        }
    }, 17);
}

//封装来源于此！
btn1.onclick = function () {
    clearInterval(timer);
    timer = setInterval(function () {
        //取出盒子的当前位置
        //offsetLeft属性在取值的时候会四舍五入
        var leader = box.offsetLeft;
        //缓动公式的一部分是更改step的值
        var step = (400 - leader ) / 10;
        //由于offsetLeft在取值的时候会四舍五入，我们的step如果比较小，会造成无法运动的问题
        //根据步数的正负，更改取整方式
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        //缓动公式
        leader = leader + step;
        //设置给box的left值
        box.style.left = leader + "px";
        //检测是否走到了指定位置
        if (leader == 400) {
            clearInterval(timer);
        }
    }, 17);
};