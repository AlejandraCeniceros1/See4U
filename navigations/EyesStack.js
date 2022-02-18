import { createStackNavigator } from '@react-navigation/stack'
import React from 'react' 
import Eyes from '../screens/Eyes'

const Stack = createStackNavigator()

export default function EyesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name= "Start"
                component ={Eyes}
                options={ {title: "Autorefractometer"}}
            />
        </Stack.Navigator>
    )
}
