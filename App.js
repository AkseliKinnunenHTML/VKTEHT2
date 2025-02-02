import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import homescreen from "./homescreen";
import secondscreen from "./secondscreen";

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
     name="MD Nav Demo"
     component={homescreen}
     options={{
        title:'MD Nav Demo',
        headerTitle:'MD Nav Demo'
      }}
    />
    <Stack.Screen
     name="Second"
     component={secondscreen}
     options={{
        title:'Second',
        headerTitle:'Second'
     }}
     />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
