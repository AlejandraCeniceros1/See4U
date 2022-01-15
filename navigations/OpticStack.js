import { createStackNavigator } from '@react-navigation/stack'
import React from 'react' 
import Home from '../screens/Home'

const Stack = createStackNavigator()

export default function OpticStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name= "Home"
                component ={Home}
                options={ {title: "SEE4U"}}
            />
        </Stack.Navigator>
    )
}
