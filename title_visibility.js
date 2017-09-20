/**
 * Created by Aaron on 2017/9/20.
 */
$(function () {
    var originTitle = document.title;
    var titleTime;
    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            document.title = "(つェ⊂) 我藏好了哦~ " + originTitle;
            clearTimeout(titleTime);
        }
        else {
            document.title = "(*´∇｀*) 被你发现啦~ " + originTitle;
            titleTime = setTimeout(function() {
                document.title = originTitle;
            }, 2000);
        }
    })
});