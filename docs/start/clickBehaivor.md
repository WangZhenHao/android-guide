
```java
package com.example.greetingcard

//import androidx.compose.foundation.layout.RowScopeInstance.weight
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentSize
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.CenterAlignedTopAppBar
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.greetingcard.ui.theme.GreetingCardTheme


class MainActivity : ComponentActivity() {
    @OptIn(ExperimentalMaterial3Api::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            GreetingCardTheme {
                Scaffold(
                    topBar = {
                        CenterAlignedTopAppBar(
                            title = {
                                Text(
                                    text = "Lemonade1",
                                    fontWeight = FontWeight.Bold
                                )
                            },
                            colors = TopAppBarDefaults.largeTopAppBarColors(
                                containerColor = MaterialTheme.colorScheme.primaryContainer
                            )
                        )
                    }
                ) {innerPadding ->
                    Surface(modifier = Modifier.fillMaxSize().padding(innerPadding)) {
                        DiceRollerApp()
                    }
                }
            }
        }
    }
}

@Preview
@Composable
fun DiceRollerApp() {
    var currentStep by remember {
        mutableStateOf(1)
    }

    when(currentStep) {
        1 -> {
            DiceWithButtonAndImage(R.string.Lemon_tree, R.drawable.lemon_tree, onImageClick = {
                currentStep++
            })
        }
        2 -> {
            DiceWithButtonAndImage(R.string.Lemon, R.drawable.lemon_squeeze, onImageClick = {
                currentStep++
            })
        }
        3 -> {
            DiceWithButtonAndImage(R.string.Glass_of_lemonade, R.drawable.lemon_drink, onImageClick = {
                currentStep++
            })
        }
        4-> {
            DiceWithButtonAndImage(R.string.Empty_glass, R.drawable.lemon_restart, onImageClick = {
                currentStep = 1
            })
        }
    }

}

@Composable
fun DiceWithButtonAndImage(textId: Int, imageId: Int, onImageClick: () -> Unit) {
    Box(modifier = Modifier
        .fillMaxSize()
        .background(Color.White)
        .wrapContentSize(Alignment.Center)) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Button(
                shape = RoundedCornerShape(40.dp),
                colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.tertiaryContainer),
                onClick = onImageClick
            ) {
                Image(
                    painter = painterResource(id = imageId),
                    contentDescription = null,
                    modifier = Modifier
                        .width(128.dp)
                        .height(160.dp)
                        .padding(4.dp)
                )
            }
            Spacer(modifier = Modifier.height(16.dp))
            Text(text = stringResource(id = textId), fontSize = 18.sp)
        }
    }

}
```