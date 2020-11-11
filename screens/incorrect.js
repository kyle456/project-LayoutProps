import React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

function Incorrect({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image
                    source={require('../assets/incorrect.jpg')}
                    style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                />
            </View>
            <Text style={styles.correctText}>
                오답입니다! ㅠㅠ {"\n"}
                다시 풀어보세요! 화이팅!
            </Text>
            <View style={styles.buttonView}>
                <Button
                    title="Retry"
                    color="brown"
                    onPress={() => navigation.navigate('Quiz')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
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

export default Incorrect
