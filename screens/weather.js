import React from 'react';
import { Text, Alert, StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';

export default class Weather extends React.Component {
    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync();
            const location = await Location. getCurrentPositionAsync();
            console.log(location);
        } catch (error) {
            Alert.alert("Error", {error});
        }
    }

    render() {
        return (
            <>
            </>
        )
    }
}