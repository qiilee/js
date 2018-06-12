/**
 * Created by 15842_000 on 2016/11/30.
 */
//新函数中更改的部分
//1 传参为一个对象
//2 在内部修改值的时候需要根据对象内设置的样式个数决定
//3 结束定时器的时机不同，需要在每次forin结束后去检测是否可以清除

//修改animate，可以修改任意的属性，datas是代表一个对象

function animate(tag, datas) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        var flag = true;
        for (var k in datas) {
            var target = datas[k];
            var leader = parseInt(getStyle(tag, k)) || 0;
            var step = (target - leader ) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            tag.style[k] = leader + "px";
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(tag.timer);
        }

    }, 17);
}


console.log("=============================上下相同========================================");








function animate(tag, datas) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //假设成立法
        //写在定时器最开始的位置。保证每一次定时器的运行都有机会清除定时器
        var flag = true;

        //第一步需要取出传入的对象参数中的每一个需要变化的样式
        //使用for in
        for (var k in datas) {
            //k 某一个属性名 - attr
            //datas[k] - 相当于target
            var target = datas[k];
            //修改某一个样式的值
            var leader = parseInt(getStyle(tag, k)) || 0;
            var step = (target - leader ) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            tag.style[k] = leader + "px";
            //清除定时器的时候，不能在forin中，因为可能是某个样式先到了指定的值，其他的样式不能保证

            //有任意一个属性值没有到达指定位置，就不能清除
            if (leader != target) {
                //设置flag = false
                flag = false;
            }
        }
        //确定所有的样式都到达了指定位置
        if (flag) {
            clearInterval(tag.timer);
        }

    }, 17);
}

