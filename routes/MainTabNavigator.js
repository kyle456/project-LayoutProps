import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Layout from "../screens/layout"
import Home from "../screens/home"
import Quiz from "../screens/quiz"
import Correct from "../screens/correct"
import Incorrect from "../screens/incorrect"

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
                    options={{ title: 'layout Screen'}}
                />
                <Nav.Screen
                    name="Quiz"
                    component={Quiz}
                    options={{ title: 'quiz Screen' }}
                />
                <Nav.Screen
                    name="Correct"
                    component={Correct}
                    options={{ title: 'correct Screen', tabBarVisible: false }}
                />
                <Nav.Screen
                    name="Incorrect"
                    component={Incorrect}
                    options={{ title: 'incorrect Screen', tabBarVisible: false }}
                />
            </Nav.Navigator>
        </NavigationContainer>
    );
}

export default MainTabNavigator
