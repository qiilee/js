/**
 * Created by 15842_000 on 2016/11/21.
 */
/**
 * 封装了一个获得标签文本内容的函数
 * @param element
 * @returns {*}
 */
function getText(element) {
    if (typeof element.innerText == "string") {
        return element.innerText;
    } else {
        return element.innerText;
    }
}
/**
 * 封装了一个设置标签内容的函数
 * @param element
 * @param value
 */
function setText(element, value) {
    if (typeof  element.innerText == "string") {
        element.innerText = value;
    } else {
        element.innerText = value;
    }
}