import React from 'react';
import { Text, Alert, StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import Axios from 'axios';
import Constants from 'expo-constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const apiKey = process.env.REACT_APP_WEATHER_KEY;

const weatherOptions = {
    Clear: {
        iconName: "weather-sunny"
    },
    Clouds: {
        iconName: "weather-cloudy"
    },
    Thunderstorm: {
        iconName: "weather-lightning"
    }
}

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
            <View style={styles.container}>
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons name={weatherOptions[cond].iconName} size={128} color="black" />
                    <Text style={styles.tempTitle}>{temp} ℃</Text>
                </View>
                <View style={styles.halfContainer}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    tempTitle: {
        fontSize: 24,
    },
})