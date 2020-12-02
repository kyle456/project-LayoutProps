import React from 'react';
import { Text, Alert, StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import Axios from 'axios';
import Constants from 'expo-constants';

const apiKey = process.env.REACT_APP_WEATHER_KEY;

export default class Weather extends React.Component {

    state = {
        cond: "Clear"
    };

    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync();
            const location = await Location.getCurrentPositionAsync();
            console.log(location);
            console.log(location.coords.latitude, location.coords.longitude);

            this.getWeather(location.coords.latitude, location.coords.longitude);
        } catch (error) {
            Alert.alert("Error", { error });
        }
    }

    getWeather = async (latitude, longitude) => {
        const { data } = await Axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        );
        console.log(data);
        console.log(data.main.temp); // 온도
        console.log(data.main.temp_max); // 최고 온도
        console.log(data.main.temp_min); // 최저 온도
        console.log(data.weather[0].main); // 날씨(맑음, 흐림 ...)
        this.setState({ cond: data.weather[0].main, temp: data.main.temp });
    }

    componentDidMount() {
        this.getLocation();
    }

    render() {
        const { cond, temp } = this.state;
        return (
            <>
                <View style={{ paddingTop: Constants.statusBarHeight }} />
                <Text>{temp}</Text>
                <Text>{cond}</Text>
            </>
        )
    }
}