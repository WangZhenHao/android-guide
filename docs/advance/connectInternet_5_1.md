# 连接网络

## Kotlin 协程入门实验

1. 延期执行

```java
import kotlinx.coroutines.*

fun main() {
   runBlocking {
        println("Weather forecast")
        delay(1000)
        println("Sunny")
    }
}

/* 
一秒之后同时输出

Weather forecast
Sunny

*/
```