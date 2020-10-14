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

  //apply changes to main view
  const hookedStyles = {
    flexDirection: flexDirections[flexDirection],
    justifyContent: justifyContents[justifyContent],
  };

  //set the next value
  const changeSetting = (value, options, setfunction) => {
    if (value == options.length - 1) {
      //end of array
      setfunction(0)
    } else {
      setfunction(value + 1)
    }
  }

  //create new square
  const Square = () => {
    const sqStyle = {
      width: 50,
      height: 50,
      backgroundColor: randomHexColor(),
    };
    return <View style={sqStyle} />;
  }

  const [squares, setSqaures] = useState([Square(), Square(), Square()]);


  return (
    <>
      <View style={{ paddingTop: Constants.statusBarHeight }} />
      <View style={[styles.container, styles.playingSpace, hookedStyles]}>
      {squares.map(elem => elem)}
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.controlSpace}>
          <View style={styles.buttonView}>
            <Button title="CHANGE FLEX DIRECTION" 
              onPress={() => {
                changeSetting(flexDirection, flexDirections, setFlexDirection)
              }}
            />
          </View>

          <View style={styles.buttonView}>
            <Button title="CHANGE JUSTIFY CONTENT" 
              onPress={() => {
                changeSetting(justifyContent, justifyContents, setJustifyContent)
              }}
            />
          </View>

          <View style={styles.buttonView}>
            <Button title="CHANGE ALIGN ITEMS" 
              onPress={() => {
                changeSetting(alignItems, alignItemsArr, setAlignItems)
              }}
            />
          </View>

          <View style={styles.buttonView}>
            <Button title="CHANGE DIRECTION" 
              onPress={() => {
                changeSetting(direction, directions, setDirection)
              }}
            />
          </View>

          <View style={styles.buttonView}>
            <Button title="CHANGE FLEX WRAP" 
              onPress={() => {
                changeSetting(wrap, wraps, setWrap)
              }}
            />
          </View>

          <View style={styles.buttonView}>
            <Button title="ADD SQUARE" 
              onPress={() => {

              }}
            />
          </View>

          <View style={styles.buttonView}>
            <Button title="DELETE SQUARE" 
              onPress={() => {
                
              }}
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
});

//make a color randomly
const randomHexColor = () => {
  return '#000000'.replace(/0/g, () => {
    return (~~(Math.random() * 16)).toString(16);
  });
};

export default App;