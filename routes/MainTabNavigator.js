import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Layout from "../screens/layout"
import Home from "../screens/home"
import Quiz from "../screens/quiz"

const Nav = createBottomTabNavigator();
function MainTabNavigator() {
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
            </Nav.Navigator>
        </NavigationContainer>
    );
}

export default MainTabNavigator
