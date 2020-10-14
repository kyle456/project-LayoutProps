import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Button, Image, Text } from 'react-native';
import Constants from 'expo-constants';


const App = () => {

  const flexDirections = ['row', 'row-reverse', 'column', 'column-reverse'];
  const justifyContents = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ];
  const alignItemsArr = [
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ];
  const wraps = ['nowrap', 'wrap', 'wrap-reverse'];
  const directions = ['inherit', 'ltr', 'rtl'];

  const [flexDirection, setFlexDirection] = useState(0);
  const [justifyContent, setJustifyContent] = useState(0);
  const [alignItems, setAlignItems] = useState(0);
  const [direction, setDirection] = useState(0);
  const [wrap, setWrap] = useState(0);

  const Square = () => {
    const sqStyle = {
      width: 50,
      height: 50,
    };
    return <View style={sqStyle}/>;
  }

  return (
    <>
      <View style={{ paddingTop: Constants.statusBarHeight }} />
      <View style={[styles.container, styles.playingSpace]}>
        
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.controlSpace}>          
          <View style={styles.buttonView}>
            <Button title="CHANGE FLEX DIRECTION" 
              onPress={() => console.log("press 1")}
            />
          </View>

          <View style={styles.buttonView}>
            <Button title="CHANGE JUSTIFY CONTENT" 
              onPress={() => console.log("press 2")}
            />
          </View>

          <View style={styles.buttonView}>
            <Button title="CHANGE ALIGN ITEMS" 
              onPress={() => console.log("press 3")}
            />
          </View>

          <View style={styles.buttonView}>
            <Button title="CHANGE DIRECTION" 
              onPress={() => console.log("press 4")}
            />
          </View>

          <View style={styles.buttonView}>
            <Button title="CHANGE FLEX WRAP" 
              onPress={() => console.log("press 5")}
            />
          </View>

          <View style={styles.buttonView}>
            <Button title="ADD SQUARE" 
              onPress={() => console.log("press 6")}
            />
          </View>

          <View style={styles.buttonView}>
            <Button title="DELETE SQUARE" 
              onPress={() => console.log("press 7")}
            />
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