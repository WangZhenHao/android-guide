```java
fun main() {
    val child = 5
    val adult = 28
    val senior = 87
    
    val isMonday = true
    
    println("The movie ticket price for a person aged $child is \$${ticketPrice(child, isMonday)}.")
    println("The movie ticket price for a person aged $adult is \$${ticketPrice(adult, isMonday)}.")
    println("The movie ticket price for a person aged $senior is \$${ticketPrice(senior, isMonday)}.")
}

fun ticketPrice(age: Int, isMonday: Boolean): Int {
   	if(age <= 12) {
   		return 15
   	} else if(age >= 13 && age <= 60) {
   		if(isMonday) {
   			return 25
   		}

   		return 30
   	} else if(age > 60) {
   		return 20
   	} else {
   		return -1
   	}
}

fun main() {
    val child = 5
    val adult = 28
    val senior = 87
    
    val isMonday = true
    
    println("The movie ticket price for a person aged $child is \$${ticketPrice(child, isMonday)}.")
    println("The movie ticket price for a person aged $adult is \$${ticketPrice(adult, isMonday)}.")
    println("The movie ticket price for a person aged $senior is \$${ticketPrice(senior, isMonday)}.")
}
 
fun ticketPrice(age: Int, isMonday: Boolean): Int {
    return when(age) {
        in 0..12 -> 15
        in 13..60 -> if (isMonday) 25 else 30
        in 61..100 -> 20
        else -> -1
    }
}

// The movie ticket price for a person aged 5 is $15.
// The movie ticket price for a person aged 28 is $25.
// The movie ticket price for a person aged 87 is $20.
```

```java
fun main() {
    // Fill in the code.
    printFinalTemperature(27.0, "Celsius", "Fahrenheit", ::cToFah)
    printFinalTemperature(350.0, "Kelvin", "Celsius", ::kToCel)
    printFinalTemperature(10.0, "Fahrenheit", "Kelvin", ::fTokel)
}

fun cToFah(num: Double): Double {
	return 9.toDouble() / 5 * num + 32
}

fun kToCel(num: Double): Double {
	return num - 273.15
}

fun fTokel(num: Double): Double {
	return 5.toDouble() / 9 * (num - 32.toDouble()) + 273.15
}

fun printFinalTemperature(
    initialMeasurement: Double, 
    initialUnit: String, 
    finalUnit: String, 
    conversionFormula: (Double) -> Double
) {
    val finalMeasurement = String.format("%.2f", conversionFormula(initialMeasurement)) // two decimal places
    println("$initialMeasurement degrees $initialUnit is $finalMeasurement degrees $finalUnit.")
}


fun main() {    
        printFinalTemperature(27.0, "Celsius", "Fahrenheit") { 9.0 / 5.0 * it + 32 }
        printFinalTemperature(350.0, "Kelvin", "Celsius") { it - 273.15 }
        printFinalTemperature(10.0, "Fahrenheit", "Kelvin") { 5.0 / 9.0 * (it - 32) + 273.15 }
}


fun printFinalTemperature(
    initialMeasurement: Double, 
    initialUnit: String, 
    finalUnit: String, 
    conversionFormula: (Double) -> Double
) {
    val finalMeasurement = String.format("%.2f", conversionFormula(initialMeasurement)) // two decimal places
    println("$initialMeasurement degrees $initialUnit is $finalMeasurement degrees $finalUnit.")
}

// 27.0 degrees Celsius is 80.60 degrees Fahrenheit.
// 350.0 degrees Kelvin is 76.85 degrees Celsius.
// 10.0 degrees Fahrenheit is 260.93 degrees Kelvin.
```

```java
fun main() {
  var song = Song("蒲公英的约定", "周杰伦", 2006, 1000000)
  
  song.description()
}
class Song(val title: String, val artist: String, val year: Int, val count: Int) {
	val isPopular: Boolean
		  get() = count > 1000

	
	fun description() {
		println("$title, performed by $artist, was released in $year published.")
	}
}

```

```java
fun main() {    
    val amanda = Person("Amanda", 33, "play tennis", null)
    val atiqah = Person("Atiqah", 28, "climb", amanda)
    
    amanda.showProfile()
    atiqah.showProfile()
}


class Person(val name: String, val age: Int, val hobby: String?, val referrer: Person?) {
    fun showProfile() {
      var referrerTips: String? = null
      if(referrer != null) {
      	referrerTips = "Has a referrer named ${referrer.name}, who likes to ${referrer.hobby}"
      } else {
      	referrerTips = "Doesn't have a referrer."
      }
       // Fill in code 
      println("Name: $name")
      println("Age: $age")
      println("Likes to $hobby. $referrerTips")
      println("\n")
    }
}
```

```java
class Phone(var isScreenLightOn: Boolean = false){
    fun switchOn() {
        isScreenLightOn = true
    }
    
    fun switchOff() {
        isScreenLightOn = false
    }
    
    fun checkPhoneScreenLight() {
        val phoneScreenLight = if (isScreenLightOn) "on" else "off"
        println("The phone screen's light is $phoneScreenLight.")
    }
}
```

```java
fun main() {
    val winningBid = Bid(5000, "Private Collector")
    
    println("Item A is sold at ${auctionPrice(winningBid, 2000)}.")
    println("Item B is sold at ${auctionPrice(null, 3000)}.")
}

class Bid(val amount: Int, val bidder: String)
 
fun auctionPrice(bid: Bid?, minimumPrice: Int): Int {
   return bid?.amount ?: minimumPrice

//    return bid ? bid.amount : minimumPrice
}
```