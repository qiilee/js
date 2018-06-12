/**
 * Created by 15842_000 on 2016/11/30.
 */
function animate(tag, target) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //每次让box的left值扩大
        //使用offsetLeft去动态的获取box的当前位置
        //Leader是某一个元素的当前位置
        var leader = tag.offsetLeft;
        var step = 7;
        //根据leader和target的关系设置step的正负
        step = leader > target ? -step : step;

        //因为box是根据leader的值进行运动。我们限制了leader的最大值。
        //相当于限制了box的运动位置
        if (Math.abs(leader - target) > Math.abs(step)) {
            // 盒子要设置的新位置 = 盒子的当前位置(旧) + 步长
            leader = leader + step;
            //将新的位置设置给元素
            tag.style.left = leader + "px";
        } else {
            //说明当前位置和目标位置之间的距离不足一步，在运动一次就会越过边界，造成抖动
            //直接让盒子运动到指定位置
            tag.style.left = target + "px";
            clearInterval(tag.timer);
        }

    }, 20);
}