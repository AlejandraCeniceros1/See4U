//
import React from 'react'

//
import OpticStack from './OpticStack'
import EyesStack from './EyesStack'
import AccountStack from './AccountStack'
import SettingsStack from './SettingsStack'
//tr
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

function Navigation() {
    return (
        <Stack.Navigator
            initialRouteName = "Home"
            screenOptions = {{
                inactiveTintColor: "#8aa4b0",
                activeTintColor: "#4faedb",
            }}>
        
        <Stack.Screen
            name = "Home"
            component = {OpticStack}
            options = {{ title: "¡Welcome back!"}}
        ></Stack.Screen>

        <Stack.Screen 
            name= "Second"
            component = {EyesStack}
            options = {{ title: "Autorefractometer"}}

        ></Stack.Screen>
        <Stack.Screen 
            name= "Thrd"
            component = {AccountStack}
            options = {{ title: "Account"}}
                
        ></Stack.Screen>
        <Stack.Screen 
            name= "Four"
            component = {SettingsStack}
            options = {{ title: "a"}}
        ></Stack.Screen>
        </Stack.Navigator>

    );
}
 


function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: '#4faedb',
            inactiveTintColor: "#8aa4b0",
          }}>
          <Tab.Screen
            name="¡Welcome back!"
            component={OpticStack}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name = "Autorefractometer"
            component = {EyesStack}
            options={{
              tabBarLabel: 'Start',
              tabBarIcon: ({ color,size }) => (
                <MaterialCommunityIcons name= "monitor-eye" color = {color} size ={size} />
              ),
            }}

          />
          <Tab.Screen
            name = "Account"
            component = {AccountStack}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color,size }) => (
                <MaterialCommunityIcons name= "account" color = {color} size ={size} />
              ),
            }}

          />
          <Tab.Screen
            name = "Settings"
            component = {SettingsStack}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color,size }) => (
                <MaterialCommunityIcons name= "cog" color = {color} size ={size} />
              ),
            }}


          

          />
         
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;