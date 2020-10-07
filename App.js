import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Button, Image, Text } from 'react-native';
import Constants from 'expo-constants';


const App = () => {
  return (
    <>
      <View style={{ paddingTop: Constants.statusBarHeight }} />
      <View style={[styles.container, styles.playingSpace]}>
        <Text>텍스트 연습용 입니다.</Text>
          <Text>안드로이드 이미지를 삽입했습니다.</Text>

         <Image
            style={{
             width: 200,
             height: 200,
             resizeMode: 'contain',
            }}

           source={{
              uri: 'data:image/png;base64,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'
           }}
         />
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.controlSpace}>
          <View style={styles.buttonView}>
            <Button title="CHANGE FLEX DIRECTION" />
          </View>
          <View style={styles.buttonView}>
            <Button title="CHANGE JUSTIFY CONTENT" />
          </View>
          <View style={styles.buttonView}>
            <Button title="CHANGE ALIGN ITEMS" />
          </View>
          <View style={styles.buttonView}>
            <Button title="CHANGE DIRECTION" />
          </View>
          <View style={styles.buttonView}>
            <Button title="CHANGE FLEX WRAP" />
          </View>
          <View style={styles.buttonView}>
            <Button title="ADD SQUARE" />
          </View>
          <View style={styles.buttonView}>
            <Button title="DELETE SQUARE" />
          </View>
        </View>

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
  },
  playingSpace: {
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 3,
  },
  controlSpace: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  buttonView: {
    width: '50%',
    padding: 10,
  },
})

export default App;