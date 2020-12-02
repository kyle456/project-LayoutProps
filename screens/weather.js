import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { Text, Alert, StyleSheet, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import Axios from 'axios';
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
    },
    Drizzle: {
        iconName: "weather-rainy"
    },
    Rain: {
        iconName: "weather-pouring"
    },
    Snow: {
        iconName: "weather-snowy"
    },
    Fog: {
        iconName: "weather-fog"
    },
    Haze: {
        iconName: "weather-hazy"
    },
    Tornado: {
        iconName: "weather-tornado"
    },
}

export default class Weather extends React.Component {

    state = {
        cond: "Clear",
        temp: 0,
        region: {
            name: "San Francisco",
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
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

    getWeather = async (myLatitude, myLongitude) => {
        const { data } = await Axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${myLatitude}&lon=${myLongitude}&appid=${apiKey}&units=metric`
        );
        console.log(data);
        console.log(data.main.temp); // 온도
        console.log(data.main.temp_max); // 최고 온도
        console.log(data.main.temp_min); // 최저 온도
        console.log(data.weather[0].main); // 날씨(맑음, 흐림 ...)
        console.log(data.name);
        this.setState({ 
            cond: data.weather[0].main, 
            temp: data.main.temp,
            region: {
                name: data.name,
                latitude: myLatitude,
                longitude: myLongitude,
                latitudeDelta: 0.03,
                longitudeDelta: 0.03,
            },
         });
    }

    componentDidMount() {
        this.getLocation();
    }

    render() {
        const { cond, temp, region } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.mapContainer}>
                    <MapView 
                        style={styles.mapStyle}
                        initialRegion={region}
                        region={region}
                        >
                        <Marker
                            coordinate={region}
                            title="나의 현재 위치"
                            description={region.name}
                        />
                    </MapView> 
                </View>
                <View style={styles.weatherContainer}>
                    <Text style={styles.tempTitle}>현재 {region.name} 날씨</Text>
                    <MaterialCommunityIcons name={weatherOptions[cond].iconName} size={128} color="black" />
                    <Text style={styles.tempTitle}>{temp} ℃</Text>
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
    mapContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    weatherContainer: {
        flex: 1,
        alignItems: "center",
    },
    tempTitle: {
        fontSize: 24,
    },
    mapStyle: {
        width: 400,
        height: 400,
      },
})