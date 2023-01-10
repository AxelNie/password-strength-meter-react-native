import androidx.test.ext.junit.rules.ActivityScenarioRule
import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.compose.foundation.Text
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.input.TextFieldValue
import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.action.ViewActions.click
import androidx.test.espresso.action.ViewActions.typeText
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.matcher.ViewMatchers.isDisplayed
import androidx.test.espresso.matcher.ViewMatchers.withId
import androidx.test.espresso.matcher.ViewMatchers.withText
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class PasswordStrengthMeterTest {
    @get:Rule
    val activityScenarioRule = ActivityScenarioRule(MainActivity::class.java)

    @Test
    fun testPasswordStrengthMeter() {
        val passwordInput = TextFieldValue()

        activityScenarioRule.scenario.onActivity { activity ->
            activity.setContent {
                PasswordStrengthMeter(passwordInput)
            }
        }

        // Type a password into the text input field
        onView(withId(R.id.password_input)).perform(typeText("p4ssw0rd"))

        // Verify that the password strength meter appears and has a score of 3
        onView(withId(R.id.password_strength_meter)).check(matches(isDisplayed()))
        onView(withId(R.id.password_strength_score)).check(matches(withText("3")))

        // Type a password that does not meet the minimum length requirement
        onView(withId(R.id.password_input)).perform(typeText("short"))

        // Verify that the password strength meter appears and has a score of 0
        onView(withId(R.id.password_strength_meter)).check(matches(isDisplayed()))
        onView(withId(R.id.password_strength_score)).check(matches(withText("0")))

        // Type a password that does not contain a capital letter
        onView(withId(R.id.password_input)).perform(typeText("password"))

        // Verify that the password strength meter appears and has a score of 0
        onView(withId(R.id.password_strength_meter)).check(matches(isDisplayed()))
    }
}