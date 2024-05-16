# 深入理解kotlin

## companion object


在Kotlin中，companion object 是用于在类中定义静态成员和方法的。与Java中的静态成员和方法不同，Kotlin没有静态关键字，因此需要通过companion object来实现类似的功能。

- 定义静态成员和方法

```java
class MyClass {
    companion object {
        const val CONSTANT = "This is a constant"

        fun staticMethod() {
            println("This is a static method")
        }
    }
}

fun main() {
    println(MyClass.CONSTANT)  // 输出: This is a constant
    MyClass.staticMethod()      // 输出: This is a static method
}

```

- 实现工厂方法
```java
class User private constructor(val name: String) {
    companion object {
        fun create(name: String): User {
            return User(name)
        }
    }
}

fun main() {
    val user = User.create("John Doe")
    println(user.name)  // 输出: John Doe
}

```

- 扩展函数

```java
class MyClass {
    companion object {
        // 可以为空
    }
}

fun MyClass.Companion.extensionFunction() {
    println("This is an extension function for the companion object")
}

fun main() {
    MyClass.extensionFunction()  // 输出: This is an extension function for the companion object
}
```

- 单例模式
```java
class Singleton {
    companion object {
        fun doSomething() {
            println("Doing something in singleton")
        }
    }
}

fun main() {
    Singleton.doSomething()  // 输出: Doing something in singleton
}

```