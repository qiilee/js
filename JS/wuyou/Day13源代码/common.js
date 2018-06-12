/**
 * Created by yoyo on 2016-12-01.
 */

/**
 * 获取页面卷曲的高度和宽度
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function myScroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}