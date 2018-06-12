/**
 * Created by yoyo on 2016-08-22.
 */
function animate(tag, obj, fn) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        var flag = true;
        //同时设置多个属性的值。首先遍历对象
        for (var key in obj) {
            if (key == "opacity") {
                //透明度不能进行parseInt
                var leader = getStyle(tag, key) * 100;
                //step = ( target - leader ) / 10
                var target = obj[key] * 100;
                var step = (target - leader) / 10;
                //处理一下step的值，对step进行向上取整
                step = leader > target ? Math.floor(step) : Math.ceil(step);
                //leader = leader +  step
                leader = leader + step;
                //设置给attr值
                tag.style[key] = leader / 100;
                //不能因为某一个属性到达了指定位置就清除定时器，因为其他属性可能还没到地方
                //判断是否当前属性到达了指定位置
            } else if (key == "zIndex") {
                //层级
                //层级不需要渐变，所有直接设置
                tag.style[key] = obj[key];
            } else {
                //获取某个样式的当前值
                //target就是obj[key]  attr 就是 key
                var leader = parseInt(getStyle(tag, key)) || 0;
                //step = ( target - leader ) / 10
                var target = obj[key];
                var step = (target - leader) / 10;
                //处理一下step的值，对step进行向上取整
                step = leader > target ? Math.floor(step) : Math.ceil(step);
                //leader = leader +  step
                leader = leader + step;

                //设置给attr值
                tag.style[key] = leader + "px";
                //不能因为某一个属性到达了指定位置就清除定时器，因为其他属性可能还没到地方
                //判断是否当前属性到达了指定位置
            }
            if (leader != target) {
                //阻止定时器的清除
                flag = false;
            }
        }
        if (flag) {
            //先清除定时器，清除了旧的，再次开启新的
            clearInterval(tag.timer);
            //执行到这个if内部说明所有的运动执行完毕了
            //判断有没有fn，如果有才执行
            //在当前运动结束后执行新的一件事
            if (typeof fn == "function") {
                fn();
            }
            //fn && fn();
        }
    }, 18);
}

function getStyle(tag, attr) {
    return tag.currentStyle ? tag.currentStyle[attr] : getComputedStyle(tag, null)[attr];
}