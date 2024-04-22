# android的Dart语法

## 变量

- fianl和const

如果没有打算改变一个变量，就用`final`或者`const`，而不是用`var`或者类型
final变量只能设置一次，const变量是常量

## 操作符

### 条件表达式

- `expr1 ?? expr2` 如果expr1 是非空返回expr1 否则返回expr2

### 级联符号 .., ?..

- 允许你在同一个对象制造一个操作顺序（允许您对同一对象进行一系列操作）

```dart
var paint = Paint()
  ..color = Colors.black
  ..strokeCap = StrokeCap.round
  ..strokeWidth = 5.0;

querySelector('#confirm') // Get an object.
  ?..text = 'Confirm' // Use its members.
  ..classes.add('important')
  ..onClick.listen((e) => window.alert('Confirmed!'))
  ..scrollIntoView();
```

等同于
```dart
var paint = Paint();
paint.color = Colors.black;
paint.strokeCap = StrokeCap.round;
paint.strokeWidth = 5.0;

var button = querySelector('#confirm');
button?.text = 'Confirm';
button?.classes.add('important');
button?.onClick.listen((e) => window.alert('Confirmed!'));
button?.scrollIntoView();
```


## Metadata(元数据)

使用元数据给代码添加额外的信息，元数据注释以字符@开头
4种注释`@Deprecated`, `@deprecated`, `@override`, `@pragma`

- `@Deprecated`注释案例

```dart
class Television {
  /// Use [turnOn] to turn the power on instead.
  @Deprecated('请用 turnOn 替代')
  void activate() {
    turnOn();
  }

  /// 开电视的电源
  void turnOn() {...}
  // ···
}
```

- 定义自己的元数据注释

```dart
class Todo {
  final String who;
  final String what;

  const Todo(this.who, this.what);
}

@Todo('Dash', 'Implement this function')
void doSomething() {
  print('Do something');
}
```

- `@override`覆盖

子类可以覆盖实例的methods，getters, setters,使用`@override`注释
指定你将要覆盖的成员

```dart
class Television {
  // ···
  set contrast(int value) {...}
}

class SmartTelevision extends Television {
  @override
  set contrast(num value) {...}
  // ···
}
```
> 正在覆盖方法声明必须要匹配它覆盖的方法（重写方法声明必须以以下几种方式匹配它所重写的方法:）
- 1. 返回的类型必须要一样

- 2. 参数类型必须要一样

- 3. 接受参数的数量必须要一样

- 4. 一个泛型的方法不可以重写非泛型的方法，一个非泛型的方法不可以重写泛型的方法