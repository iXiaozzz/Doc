# HTML知识点

## defer和async的区别

*defer* 要等到整个页面在内存中正常渲染结束（DOM结构完全生成，以及其他脚本执行完成），才会执行。多个defer脚本会按照它们在页面出现的顺序加载,“渲染完再执行”。

*async* 一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。多个async脚本是不能保证加载顺序的，“下载完就执行”。

## 原生Ajax的原理和设置
+ 创建XMLHttpRequest对象 `var xhr = new XMLHttpRequest()`
+ 与服务器建立连接 `open(Method,Url,IsAsync)`，如：`open("get","url")`
+ 发送HTTP请求  `xhr.send( )`
+ 响应`xhr.onreadystatechange = function(){}`

``` js
 var a = new XMLHttpRequest();
    a.open("get", url);
    a.send();
    a.onreadystatechange = function () {
        if (a.readyState === 4 && a.status === 200) {
            //JSON.parse()将字符串转为json对象
            var reponse = JSON.parse(a.responseText);
            console.log(reponse)
        }
    }

```
