window.onscroll = function() {//滚动加载
    lazyload();
};
window.onload = function() {//页面加载后首屏自动加载一次
    lazyload();
};
function lazyload(lazy) {
     lazy = lazy||50;//提前加载的距离
    var images = document.images,i = 0, len = images.length;
    for (; i < len; i++) {
        var obj = images[i];
//             obj.getBoundingClientRect().top< document.documentElement.clientHeight 判断元素滚动到可视区返回true
        if (obj.getBoundingClientRect().top - lazy < document.documentElement.clientHeight && !obj.isLoad) {
            obj.isLoad = true;//判断首次加载
            imageLoaded(obj, obj.dataset.src);
        }
    }
}
function imageLoaded(obj,src){//img加载完成在设置src，避免img从顶部加载到尾部出现的白板
    var img = new Image();
    img.onload = function() {
        obj.src = img.src;
    };
    img.src = src;
}
