import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={stylesheet._Group_1}>
      <Image style={stylesheet._Vector} source={{uri: imageUrl_Vector}} />
      <Image
        style={stylesheet._ic_sharp_history}
        source={{uri: imageUrl_ic_sharp_history}}
      />
      <Image style={stylesheet._user} source={{uri: imageUrl_user}} />
      <Image style={stylesheet._heart} source={{uri: imageUrl_heart}} />
    </View>
  );
}

const stylesheet = StyleSheet.create({
  _Group_1: {
    position: 'absolute',
    width: 309,
    height: 29,
    transform: [{translateX: 0}, {translateY: 0}, {rotate: '0deg'}],
  },
  _Vector: {
    position: 'absolute',
    width: 25,
    height: 25,
    borderRadius: 0,
    opacity: 1,
    left: 0,
    right: 'auto',
    top: 1,
    bottom: 'auto',
    transform: [{translateX: 0}, {translateY: 0}, {rotate: '0deg'}],
    backgroundColor: 'rgba(0,0,0,0)',
  },
  _ic_sharp_history: {
    position: 'absolute',
    width: 29,
    height: 29,
    borderRadius: 0,
    opacity: 1,
    left: 280,
    right: 'auto',
    top: 0,
    bottom: 'auto',
    transform: [{translateX: 0}, {translateY: 0}, {rotate: '0deg'}],
    backgroundColor: 'rgba(0,0,0,0)',
  },
  _user: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 0,
    opacity: 1,
    left: 188,
    right: 'auto',
    top: 1,
    bottom: 'auto',
    transform: [{translateX: 0}, {translateY: 0}, {rotate: '0deg'}],
    backgroundColor: 'rgba(0,0,0,0)',
  },
  _heart: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 0,
    opacity: 1,
    left: 96,
    right: 'auto',
    top: 1,
    bottom: 'auto',
    transform: [{translateX: 0}, {translateY: 0}, {rotate: '0deg'}],
    backgroundColor: 'rgba(0,0,0,0)',
  },
});

const imageUrl_ic_sharp_history =
  'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/277377eff6b0e401d31c4bdedcc15eef';
const imageUrl_Vector =
  'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/e036d8e9e7846e87b1e6f63acfbad597';
const imageUrl_user =
  'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/5cf64f834fcaa8095ad91bacca0a93ce';
const imageUrl_heart =
  'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/78ce6cec36797dcea0be85b14e96ab44';
