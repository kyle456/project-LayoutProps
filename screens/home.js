import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

function Home({ navigation }) {
    return (
        <>
            <View style={styles.imageView}>
                <Image
                    source={require('../assets/welcome.jpg')}
                    style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                />
            </View>
            <View style={styles.buttonView}>
                <Button
                    title="Go to Layout"
                    color="blue"
                    onPress={() => navigation.navigate('Layout')}
                />
            </View>
            <View style={styles.buttonView}>
                <Button
                    title="Quiz"
                    color="brown"
                    onPress={() => navigation.navigate('Quiz')}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    imageView: {
        height: '50%',
        backgroundColor: 'beige'
    },
    buttonView: {
        padding: 10,
        alignItems: 'stretch',
    },
});

export default Home
