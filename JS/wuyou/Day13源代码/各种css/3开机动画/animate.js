function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        //true��ʾ�������Ե���ֵ������Ŀ����
        //�ȼ����������Զ�����Ŀ����
        for (var k in json) {
            //json {������������ֵ} {k:json[k]}
            var leader = parseInt(getStyle(obj, k)) || 0;
            var target = json[k];
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            console.log("target: " + target + "leader: " + leader + "step: " + step);
            obj.style[k] = leader + "px";
            if (leader != target) {
                flag = false;//�����˼� �һ���û������
            }
        }
        //������ж� ��������Ȼ��true˵�� û��û�������
        //Ҳ���Ƕ�������
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 17)
}

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}
