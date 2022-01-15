import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Eyes from '../screens/Eyes'
import Account from '../screens/Account'
import Settings from '../screens/Settings'
import OpticStack from './OpticStack'
import EyesStack from './EyesStack'
import AccountStack from './AccountStack'
import SettingsStack from './SettingsStack'



const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name= "Home"
                    component = {OpticStack}
                    options = {{ title: "¡Welcome back!"}}
                ></Tab.Screen>
                <Tab.Screen 
                    name= "Eyes"
                    component = {EyesStack}
                    options = {{ title: "Autorefractometer"}}

                ></Tab.Screen>
                <Tab.Screen 
                    name= "Account"
                    component = {AccountStack}
                    options = {{ title: "Profile"}}

                ></Tab.Screen>
                <Tab.Screen 
                    name= "Settings"
                    component = {SettingsStack}
                    options = {{ title: "Settings"}}

                ></Tab.Screen>

            </Tab.Navigator>
        </NavigationContainer>
       
    )
}
