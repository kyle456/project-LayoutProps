import React from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/welcome.jpg')}
                style={{ width: 400, height: 300 }}
            />
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Layout')}
            >
                <Text style={styles.buttonText}>
                    Go to Layout
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('Quiz')}
            >
                <Text style={styles.buttonText}>
                    Quiz
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    buttonContainer: {
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 10,
        margin: 20,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
});

export default Home
