# jetpack compose

## Box

可以对Box使用诸如填充、对齐和背景之类的修饰符来自定义其子元素的外观和位置。
```java
Box(
    modifier = Modifier
        .size(200.dp)
        .background(Color.Blue)
) {
    Text(
        text = "Hello, World!",
        color = Color.White,
        modifier = Modifier.align(Alignment.Center)
    )
}

```

## Surface
Surface composable主要用于绘制具有自定义阴影和形状的背景
可以有圆角，也可以自定义颜色、高度和圆形或矩形等形状。

```java
Surface(
    modifier = Modifier
        .size(200.dp)
        .padding(16.dp),
    shape = RoundedCornerShape(8.dp),
    elevation = 8.dp,
    color = Color.White
) {
    Text(
        text = "Hello, Surface!",
        color = Color.Black,
        modifier = Modifier.padding(16.dp)
    )
}

```