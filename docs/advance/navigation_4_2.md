# jetpack compose中的导航

> 实例代码：https://github.com/google-developer-training/basic-android-kotlin-compose-training-cupcake.git

## 定义路由和创建一个NavHostController控制器

1. 导航组件有三个主要部分

- NavController： 负责在目的地之间导航

- NavGraph： 

- NavHost：



2. 在NavHost中处理路由

```java
import androidx.navigation.compose.composable

NavHost(
    navController = navController,
    startDestination = CupcakeScreen.Start.name,
    modifier = Modifier.padding(innerPadding)
) {
    composable(route = CupcakeScreen.Start.name) {
        StartOrderScreen(
            quantityOptions = DataSource.quantityOptions,
            onNextButtonClicked = {
                viewModel.setQuantity(it)
                navController.navigate(CupcakeScreen.Flavor.name)
            },
            modifier = Modifier.fillMaxSize().padding(dimensionResource(R.dimen.padding_medium))
        )
    }
}
```

3. LocalContext.current
可以访问当前的 Android 上下文，并且可以使用它来执行各种操作，比如获取资源、启动活动等

```java
val options = DataSource.flavors.map { id -> context.resources.getString(id) }
```

- 路由跳转

```java
// 跳转到某个页面
navController.navigate(CupcakeScreen.Flavor.name)

// 清除所有页面，然后跳转到指定页面
navController.popBackStack(CupcakeScreen.Start.name, inclusive = false)

// 回退到上一个路由
navController.navigateUp()
```

- 调用分享功能

```java
private fun shareOrder(context: Context, subject: String, summary: String) {
    val intent = Intent(Intent.ACTION_SEND).apply {
        type = "text/plain"
        putExtra(Intent.EXTRA_SUBJECT, subject)
        putExtra(Intent.EXTRA_TEXT, summary)
    }

    context.startActivity(
        Intent.createChooser(
            intent,
            context.getString(R.string.new_cupcake_order)
        )
    )
}

composable(route = CupcakeScreen.Summary.name) {
    val context = LocalContext.current
    OrderSummaryScreen(        
        onSendButtonClicked = { subject: String, summary: String ->
            shareOrder(context, subject = subject, summary = summary)
        },
    )
}
```

## UI 测试

1. 测试页面

```java
package com.example.cupcake.test

import androidx.activity.ComponentActivity
import androidx.compose.ui.test.assertIsDisplayed
import androidx.compose.ui.test.assertIsNotEnabled
import androidx.compose.ui.test.junit4.createAndroidComposeRule
import androidx.compose.ui.test.onNodeWithText
import com.example.cupcake.ui.SelectOptionScreen
import org.junit.Rule
import org.junit.Test

class CupcakeOrderScreenTest {
    @get:Rule
    val composeTestRule = createAndroidComposeRule<ComponentActivity>()

    @Test
    fun selectOptionScreen_verifyContent() {
        // Given list of options
        val flavors = listOf("Vanilla", "Chocolate", "Hazelnut", "Cookie", "Mango")
        // And subtotal
        val subtotal = "$100"

        // When SelectOptionScreen is loaded
        composeTestRule.setContent {
            SelectOptionScreen(subtotal = subtotal, options = flavors)
        }

        // Then all the options are displayed on the screen.
        flavors.forEach { flavor ->
            composeTestRule.onNodeWithText(flavor).assertIsDisplayed()
        }

        composeTestRule.onNodeWithText(
            composeTestRule.activity.getString(
                com.example.cupcake.R.string.subtotal_price,
                subtotal
            )
        ).assertIsDisplayed()

        // And then the next button is disabled
        composeTestRule.onNodeWithStringId(com.example.cupcake.R.string.next).assertIsNotEnabled()
    }



}
```

2. 测试跳转

```java
class CupcakeScreenNavigationTest {
    @get:Rule
    val composeTestRule = createAndroidComposeRule<ComponentActivity>()

    private  lateinit var navController: TestNavHostController


    @Before
    fun setupCupcakeNavHost() {
        composeTestRule.setContent {
            navController = TestNavHostController(LocalContext.current).apply {
                navigatorProvider.addNavigator(ComposeNavigator())
            }
            CupcakeApp( navController = navController)
        }
    }

    // 测试当前路由
    @Test
    fun cupcakeNavHost_verifyStartDestination() {
        navController.assertCurrentRouteName(CupcakeScreen.Start.name)
    }

    // 测试跳转
    @Test
    fun cupcakeNavHost_clickNextOnFlavorScreen_navigatesToPickupScreen() {
        navigateToFlavorScreen()
        composeTestRule.onNodeWithStringId(com.example.cupcake.R.string.next)
            .performClick()
        navController.assertCurrentRouteName(CupcakeScreen.Pickup.name)
    }

}
```