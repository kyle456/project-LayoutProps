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
    alignItems: alignItemsArr[alignItems],
    direction: directions[direction],
    flexWrap: wraps[wrap],
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

  const [squares, setSquares] = useState([Square(), Square(), Square()]);


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
                // ...squares의 의미는 이미 squares 배열에 있는 기존값들은 보존한다는 것
                setSquares([...squares, Square()])
              }}
            />
          </View>

          <View style={styles.buttonView}>
            <Button title="DELETE SQUARE" 
              onPress={() => {
                // filter 메소드: 조건에 만족하는 요소들의 모임만 배열에 반영
                setSquares(squares.filter((v, i) => i != squares.length - 1))
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

//choose a color randomly
const randomHexColor = () => {
  return '#000000'.replace(/0/g, () => {
    return (~~(Math.random() * 16)).toString(16);
  });
};

/*
< const randomHexColor에 대한 설명 >

1) return '기본값'. replace() : replace는 기본값을 replace의 매개변수 값으로 변경하겠다는 의미
2) /0/g, () => { return ~~ } : 익명함수를 만들어서 '기본값'의 0에 해당하는 값을 익명함수의 return 값으로 바꾸겠다는 의미
3) ~~(Math.random() * 16) : color의 값은 16진수이기 때문에 random()의 값을 16진수로 변환 & 소수점 버림(~~)
4) .toString(16) : 나온 color의 값은 현재 16진수이기 때문에 이 값을 문자열로 변환
*/

export default App;