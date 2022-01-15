import { createStackNavigator } from '@react-navigation/stack'
import React from 'react' 
import Settings from '../screens/Settings'

const Stack = createStackNavigator()

export default function SettingsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name= "settings"
                component ={Settings}
                options={ {title: "Settings"}}
            />
        </Stack.Navigator>
    )
}
