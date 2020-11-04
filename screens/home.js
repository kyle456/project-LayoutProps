import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

function Home({navigation}) {
    return (
        <>
            <Image 
                source={require('../assets/sally.png')}
                style={{ width: '100%', height: '50%' }}
            />
            <Button
                title="Go to Layout"
                onPress={() => navigation.navigate('Layout')}
            />
        </>
    );
}

export default Home
