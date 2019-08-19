#CSS知识点

## 选择器优先级

**！important>行内样式>id选择器>类选择器>标签选择器>通配符>继承**

## 垂直水平居中的方式

- ### 已知高度宽度元素的水平垂直居中

- 利用绝对定位和margin

```css
.container{
    width: 600px;
    height: 600px;
    position: relative;
}
.center{
    width: 300px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}

```

- 利用绝对定位和负边距实现

```css
.container{
    width: 600px;
    height: 600px;
    position: relative;
}
.center{
    width: 300px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -150px 0 0 -150px;
}
```

## CSS3选择器:nth-child和:nth-of-type之间的差异

```html
<section>
    <div>我是一个普通的div标签</div>
    <span>我是一个普通的span标签</span>
    <p>我是第1个p标签</p>
    <p>我是第2个p标签</p>  <!-- 希望这个变红 -->
</section>
```

p:nth-child(2)表示这个元素要是p标签，且是第二个子元素，是两个必须满足的条件。于是，就是第一个p标签颜色为红色（正好符合：p标签，第二个子元素）

## margin会重叠

是<strong>垂直方向的margin</strong>（margin-top & margin-bottom）。你要是用margin-left和margin-right，试一百次都不会出现！同时只有当元素在<strong>同一个BFC中</strong>时，垂直方向上的margin
才会clollpase.如果它们属于不同的BFC，则不会有margin collapse

```html
style{
    .box>div{
        margin:10px 0px;
        width: 100px;
        height: 100px;
    }
}
<div class="box">
    <div></div>
    <div></div>
    <div></div>
</div>
```

## 什么是BFC?

###1. 如何形成BFC
答： 满足下列条件中至少一项，即可触发 BFC：
    1. float 的值不为none。
    2. position 的值不为static或者relative。
    3. display的值为 table-cell, table-caption, inline-block, flex, 或者 inline-flex中的其中一个。
    4. overflow的值不为visible。
    它们将会建立一个新的块级格式化上下文。

## 常用清楚浮动的方式
- 第一种

```css
.clearfix:after{
    content: "·"; 
    display: block; 
    height: 0; 
    clear: both; 
    visibility: hidden;  
}

.clearfix {
    /* IE6-7不支持BFC，而是使用私有属性hasLayout */
    /* 触发 hasLayout */ 
    zoom: 1; 
}
```

- 第二种
 父元素添加`overflow:hidden`