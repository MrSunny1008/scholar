// 本例通过设置 body 的 classname 来控制主题颜色
const mql = window.matchMedia('(prefers-color-scheme: dark)');
if (mql.matches) {
    // 当前为深色模式
    document.body.classList.add('dark-mode');
} else {
    // 当前为浅色模式
    document.body.classList.remove('dark-mode');
}


// 当设置要根据系统主题自动切换模式，执行以下代码
const mql = window.matchMedia('(prefers-color-scheme: dark)');
// 设置 onchange 事件的回调函数
mql.onchange = function (evt) {
    if (evt.matches) {
        // 当前为深色模式
        document.body.parentElement.classList.add('dark-mode');
    } else {
        // 当前为浅色模式
        document.body.parentElement.classList.remove('dark-mode');
    }
}



/* 魔法代码：一键全站切换深色模式 */
// html.dark-mode {
//     filter: invert(1) hue-rotate(180deg);
// }



