/**
 * Created by jf on 2016/4/2.
 */

function animate(obj, json) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        //true表示所有属性的数值都到达目标了
        //先假设所有属性都到达目标了
        for (var k in json) {
            //json {属性名：属性值} {k:json[k]}
            var leader = parseInt(getStyle(obj, k)) || 0;
            var target = json[k];
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            console.log("target: " + target + "leader: " + leader + "step: " + step);
            obj.style[k] = leader + "px";
            if (leader != target) {
                flag = false;//告诉人家 我还有没到的呢
            }
        }
        //最后再判断 如果标记仍然是true说明 没有没到达的了
        //也就是都到达了
        if (flag) {
            clearInterval(obj.timer);
        }
    }, 15)
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}