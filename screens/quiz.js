import React from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

function Quiz({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image
                    source={require('../assets/einstein.jpg')}
                    style={{ width: 400, height: 400, resizeMode: 'center' }}
                />
            </View>
            <Text style={styles.quizText}>
                20세기 천재 과학자 알버트 아인슈타인의 "특수상대성이론"은 중력과 가속도는 구별할 수 없다는 등가원리를 통해 도출되었다. {"\n"}
                (맞으면 Yes, 틀리면 No)
            </Text>
            <View style={styles.buttonView}>
                <Button
                    title="Yes"
                    color="blue"
                    onPress={() => navigation.navigate('Incorrect')}
                />
            </View>
            <View style={styles.buttonView}>
                <Button
                    title="No"
                    color="red"
                    onPress={() => navigation.navigate('Correct')}
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
    quizText : {
        padding: 10,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
        backgroundColor: 'beige'
    },
});

export default Quiz
