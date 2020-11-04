import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Layout from "../screens/layout"
import Home from "../screens/home"
import Quiz from "../screens/quiz"
import Correct from "../screens/correct"
import Incorrect from "../screens/incorrect"

const Stack = createStackNavigator();
function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'home Screen' }}
                />
                <Stack.Screen
                    name="Layout"
                    component={Layout}
                    options={{ title: 'layout Screen' }}
                />
                <Stack.Screen
                    name="Quiz"
                    component={Quiz}
                    options={{ title: 'quiz Screen' }}
                />
                <Stack.Screen
                    name="Correct"
                    component={Correct}
                    options={{ title: 'correct Screen' }}
                />
                <Stack.Screen
                    name="Incorrect"
                    component={Incorrect}
                    options={{ title: 'incorrect Screen' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStackNavigator
