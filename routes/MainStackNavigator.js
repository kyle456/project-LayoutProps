import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Layout from "../screens/layout"
import Home from "../screens/home"
import Quiz from "../screens/quiz"
import Correct from "../screens/correct"
import Incorrect from "../screens/incorrect"
import Weather from "../screens/weather"

const Nav = createStackNavigator();
function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Nav.Navigator initialRouteName='Home'>
                <Nav.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'home Screen' }}
                />
                <Nav.Screen
                    name="Layout"
                    component={Layout}
                    options={{ title: 'layout Screen' }}
                />
                <Nav.Screen
                    name="Quiz"
                    component={Quiz}
                    options={{ title: 'quiz Screen' }}
                />
                <Nav.Screen
                    name="Correct"
                    component={Correct}
                    options={{ title: 'correct Screen' }}
                />
                <Nav.Screen
                    name="Incorrect"
                    component={Incorrect}
                    options={{ title: 'incorrect Screen' }}
                />
                <Nav.Screen
                    name="Weather"
                    component={Weather}
                    options={{ title: 'Weather Screen' }}
                />
            </Nav.Navigator>
        </NavigationContainer>
    );
}

export default MainStackNavigator
