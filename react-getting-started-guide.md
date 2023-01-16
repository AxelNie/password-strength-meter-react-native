# Getting Started with React Native

Welcome to the world of React Native! This guide will help you set up your development environment and create your first React Native app for Android.

## Setting up your development environment

To set up your development environment for React Native on Android, you'll need to install Node.js, the React Native CLI, and Android Studio.

### Installing dependencies

1. Install **`Node.js`** from the [official website](https://nodejs.org/en/download/).
2. Install the **`React Native CLI`**:

```java
npm install -g react-native-cli
```

3. Download and install **`Android Studio`**. During the installation, make sure to check the boxes next to "Android SDK", "Android SDK Platform", "Android Virtual Device", and "Performance (Intel HAXM)". If the checkboxes are grayed out, you will have a chance to install these components later.

4. Once setup has finalized and you're presented with the Welcome screen, click on "Configure" and select "SDK Manager". In the "SDK Platforms" tab, make sure to check the box next to the latest version of Android. In the "SDK Tools" tab, make sure to check the boxes next to "Android SDK Build-Tools" and "Android Emulator". Click "Apply" to install these components.

## Creating a new React Native app

Now that you have your development environment set up, you can create a new React Native app using the React Native CLI.

1. Open a terminal window.
2. Run the following command to create a new React Native app:

```java
react-native init MyApp
```

Replace "MyApp" with the name of your app. This will create a new directory with the same name and generate all the files you need to start building your app.

## Running your React Native application

To run your React Native app, you'll need to start **`Metro`**, the JavaScript bundler that ships with React Native, and then run your app on a device or emulator.

### Starting Metro

To start Metro, open a terminal window and navigate to the root directory of your React Native project. Then, run the following command:

```java
npx react-native start
```

This will start the Metro bundler, which takes your entry file and various options and returns a single JavaScript file that includes all your code and its dependencies.

### Running your app on a device or emulator

To run your app on a device or emulator, open a separate terminal window and navigate to the root directory of your project. Then, run the following command:

```java
npx react-native run-android
```

This will build and run your app on an Android emulator or device, if one is available.

If everything is set up correctly, you should see your new app running in your emulator or device shortly.

## Start building your app

Now that you have your development environment set up and you've created and run your first React Native app, you're ready to start building your app!

1. Open the **`App.js`** file in your text editor. This is the entry point for your app and is where you will define your root component.

2. Import the **`View`** and **`Text`** components from the react-native library:

```javascript
import { View, Text } from "react-native";
```

3. Define your root component as a View component with a nested Text component inside:

```javascript
const App = () => {
  return (
    <View>
      <Text>Welcome to my app!</Text>
    </View>
  );
};
```

4. Export the App component so it can be rendered by the native platform:

```javascript
export default App;
```

### Common components

- **`View`**: A container component that can be used to layout other components using flexbox.
- **`Text`**: A component for displaying text.
- **`Image`**: A component for displaying images.
- **`Button`**: A component for creating buttons.
- **`TextInput`**: A component for creating text input fields.
- **`ScrollView`**: A component for creating scrollable areas.

For a full list of available components, see the [React Native documentation](https://reactnative.dev/docs/components-and-apis)

### Styling of components

To style components in React Native, you can use the built-in StyleSheet component. This allow you to apply a variety of visual properties, such as color, font, and layout, to your app's components.

1. Extend the import from the react-native library with the StyleSheet component.

```javascript
import { View, Text, StyleSheet } from "react-native";
```

2. Create a stylesheet object to store your component styles:

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
```

**`flex: 1`** tells the container to take up all the available space in its parent component.
**`alignItems: 'center'`** aligns the child components along the vertical axis.
**`justifyContent: 'center'`** aligns the child components along the horizontal axis.

3. Apply the your styles using the style prop:

```javascript
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to my app!</Text>
    </View>
  );
};
```

## Basic Interaction with Listeners/Callback Functions

In React Native, you can handle user interactions by using listeners or callback functions. Listeners are functions that are called when a certain event occurs, such as a button press or a change in the value of a text input field. Callback functions are passed as props to a component and are called when a certain event occurs within that component.

To add a listener to a button, you can use the onPress prop, like this:

```javascript
<Button
  title="Press me"
  onPress={() => {
    console.log("Button pressed!");
  }}
/>
```

To pass a callback function as a prop to a component, you can use the onChangeText prop of a TextInput component. For example:

```javascript
<TextInput
  value={this.state.text}
  onChangeText={(text) => this.setState({ text })}
/>
```

## Navigation between different screens

Navigating between different screens in a React Native app is typically handled using a navigation library, such as React Navigation. React Navigation provides a way to define a stack of screens and navigate between them, as well as handling the navigation history and the transition animations.

To use React Navigation, you'll need to install the library and its dependencies:

```javascript
npm install @react-navigation/native
```

```javascript
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

Then, in your App.js file, you can wrap your root component with a NavigationContainer component from the @react-navigation/native library:

```javascript
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      {/* Your app's components go here */}
    </NavigationContainer>
  );
};
```

Finally, you can use the Stack component to define a stack of screens and the Screen component to define a single screen. For example:

```javascript
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
```

You can then change between stacks by using the navigate function. The navigate function is passed to your component as a prop by the Stack.Navigator component.

For example, if you have a HomeScreen component and a DetailsScreen component in your stack, you can navigate from the HomeScreen to the DetailsScreen by calling the navigate function and passing the name of the destination screen as an argument:

```javascript
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
};
```
