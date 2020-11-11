import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

function Correct({ navigation }) {
    return (
        <>
            <View style={styles.imageView}>
                <Image
                    source={require('../assets/correct.jpg')}
                    style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                />
            </View>
            <Text style={styles.correctText}>
                정답입니다! {"\n"}
                중력과 가속도의 등가원리는 "일반상대성이론"입니다.
            </Text>
            <View style={styles.buttonView}>
                <Button
                    title="Go Home"
                    color="brown"
                    onPress={() => navigation.navigate('Home')}
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
    correctText : {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
        backgroundColor: 'beige'
    },
});

export default Correct
