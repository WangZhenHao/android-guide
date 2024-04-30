# kotlin进阶2

## 使用集合

### 1.数组 使用`arrayOf()`函数声明数组

```java
val rockPlanets = arrayOf<String>("Mercury", "Venus", "Earth", "Mars")
val gasPlanets = arrayOf("Jupiter", "Saturn", "Uranus", "Neptune")

val solarSystem = rockPlanets + gasPlanets
```

- 访问数组的元素和设置数组的值

array name [ index ]

```java
println(solarSystem[0])
println(solarSystem[1])
println(solarSystem[2])
println(solarSystem[3])

solarSystem[3] = "Little Earth"
```

### 2.列表

- list定义属性和方法相当于只读

- MutableList扩展list接口，可以新增，移除元素

```java
fun main() {
    val solarSystem = listOf("Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune")

    println(solarSystem.size) 

    // 访问
    println(solarSystem[2])
    // 访问
    println(solarSystem.get(3))
}
```

- 迭代列表

```java
for (planet in solarSystem) {
    println(planet)
}
```

- 添加数组
```java
val solarSystem = mutableListOf("Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune")
solarSystem.add("Pluto")
solarSystem.add(3, "Theia")
```

- 移除数组
```java
solarSystem.removeAt(9)

solarSystem.remove("Future Moon")
```

- 其他访问数组
```java
println(solarSystem.contains("Pluto"))

println("Future Moon" in solarSystem)
```

### 3.Sets

set集合没有明确的顺序而且不允许值重复

- set比list快，特备是大的集合

- set比list使用更多内存

```java
val solarSystem = mutableSetOf("Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune")

println(solarSystem.size)
solarSystem.add("Pluto")

println(solarSystem.contains("Pluto"))
solarSystem.remove("Pluto")

```

### 4.Map集合
 
 map的是key是唯一的

 - 定义

mutableMapOf<key type, value type>()

```java
val solarSystem = mutableMapOf(
    "Mercury" to 0,
    "Venus" to 0,
    "Earth" to 1,
    "Mars" to 2,
    "Jupiter" to 79,
    "Saturn" to 82,
    "Uranus" to 27,
    "Neptune" to 14
)

println(solarSystem.size)
solarSystem["Pluto"] = 5
println(solarSystem.get("Theia"))
solarSystem.remove("Pluto")

solarSystem["Jupiter"] = 78
solarSystem.put("Theia", 78)
println(solarSystem["Jupiter"])



```
## 伴随集合的高阶函数

- `forEach()`和字符串模板

```java
class Cookie(
    val name: String,
    val softBaked: Boolean,
    val hasFilling: Boolean,
    val price: Double
)

val cookies = listOf(
    Cookie(
        name = "Chocolate Chip",
        softBaked = false,
        hasFilling = false,
        price = 1.69
    ),
    Cookie(
        name = "Banana Walnut", 
        softBaked = true, 
        hasFilling = false, 
        price = 1.49
    ),
    Cookie(
        name = "Vanilla Creme",
        softBaked = false,
        hasFilling = true,
        price = 1.59
    ),
    Cookie(
        name = "Chocolate Peanut Butter",
        softBaked = false,
        hasFilling = true,
        price = 1.49
    ),
    Cookie(
        name = "Snickerdoodle",
        softBaked = true,
        hasFilling = false,
        price = 1.39
    ),
    Cookie(
        name = "Blueberry Tart",
        softBaked = true,
        hasFilling = true,
        price = 1.79
    ),
    Cookie(
        name = "Sugar and Sprinkles",
        softBaked = false,
        hasFilling = false,
        price = 1.39
    )
)

fun main() {
	cookies.forEach {
	    println("Menu item: ${it.name}")
	}
}
```

- map()
map函数把一个集合变成一个新的集合

```java
val fullMenu = cookies.map {
    "${it.name} - $${it.price}"
}

println("Full menu:")
fullMenu.forEach {
    println(it)
}

// Full menu:
// Chocolate Chip - $1.69
// Banana Walnut - $1.49
// Vanilla Creme - $1.59
// Chocolate Peanut Butter - $1.49
// Snickerdoodle - $1.39
// Blueberry Tart - $1.79
// Sugar and Sprinkles - $1.39
```

- filter() 
创建一个子集合

```java
val softBakedMenu = cookies.filter {
    it.softBaked
}

println("Soft cookies:")
softBakedMenu.forEach {
    println("${it.name} - $${it.price}")
}

// Soft cookies:
// Banana Walnut - $1.49
// Snickerdoodle - $1.39
// Blueberry Tart - $1.79

```

- grupBy()

```java
val groupedMenu = cookies.groupBy { it.softBaked }

val softBakedMenu = groupedMenu[true] ?: listOf()
val crunchyMenu = groupedMenu[false] ?: listOf()

println("Soft cookies:")
softBakedMenu.forEach {
    println("${it.name} - $${it.price}")
}
println("Crunchy cookies:")
crunchyMenu.forEach {
    println("${it.name} - $${it.price}")
}

// Soft cookies:
// Banana Walnut - $1.49
// Snickerdoodle - $1.39
// Blueberry Tart - $1.79
// Crunchy cookies:
// Chocolate Chip - $1.69
// Vanilla Creme - $1.59
// Chocolate Peanut Butter - $1.49
// Sugar and Sprinkles - $1.39

```

- fold()

fold()函数用来从一个集合里面生成单独的值

```java
val totalPrice = cookies.fold(0.0) {total, cookie ->
    total + cookie.price
}

println("Total price: $${totalPrice}")
```

- sortedBy()

```java
val alphabeticalMenu = cookies.sortedBy {
    it.name
}

println("Alphabetical menu:")
alphabeticalMenu.forEach {
    println(it.name)
}
// 正序和倒叙
val numbers = listOf(5, 2, 10, 1, 8)

// 正序排序
val sortedNumbers = numbers.sortedBy { it }

// 倒序排序
val sortedDescendingNumbers = numbers.sortedByDescending { it }

println("正序排序: $sortedNumbers") // 输出: 正序排序: [1, 2, 5, 8, 10]
println("倒序排序: $sortedDescendingNumbers") // 输出: 倒序排序: [10, 8, 5, 2, 1]
```
