/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Svg, Path} from 'react-native-svg';

export default function App() {
  return (
    <View style={stylesheet._Frame_2}>
      <View style={stylesheet._Group_3}>
        <Image style={stylesheet._Vector} source={{uri: imageUrl_Vector}} />
        <Image
          style={stylesheet._shopping_cart}
          source={{uri: imageUrl_shopping_cart}}
        />
        <View
          style={[
            stylesheet._Your_Location,
            {display: 'flex', flexDirection: 'row', alignItems: 'center'},
          ]}>
          <Text
            style={[
              stylesheet._Your_Location,
              {
                position: 'relative',
                left: 0,
                top: 0,
                width: '100%',
                height: 'auto',
                transform: [{translateX: 0}, {translateY: 0}],
              },
            ]}>
            Your Location
          </Text>
        </View>
        <Image style={stylesheet._Pin} source={{uri: imageUrl_Pin}} />
      </View>
      <View style={stylesheet._Greeting}>
        <View
          style={[
            stylesheet._Hello__Name,
            {display: 'flex', flexDirection: 'row', alignItems: 'center'},
          ]}>
          <Text
            style={[
              stylesheet._Hello__Name,
              {
                position: 'relative',
                left: 0,
                top: 0,
                width: '100%',
                height: 'auto',
                transform: [{translateX: 0}, {translateY: 0}],
              },
            ]}>
            Hello, Name
          </Text>
        </View>
        <View
          style={[
            stylesheet._Have_a_nice_day__,
            {display: 'flex', flexDirection: 'row', alignItems: 'center'},
          ]}>
          <Text
            style={[
              stylesheet._Have_a_nice_day__,
              {
                position: 'relative',
                left: 0,
                top: 0,
                width: '100%',
                height: 'auto',
                transform: [{translateX: 0}, {translateY: 0}],
              },
            ]}>
            Have a nice day !
          </Text>
        </View>
      </View>
      <View style={stylesheet._Group_4}>
        <Svg style={stylesheet._Rectangle_8} fill={'rgba(239, 238, 238, 1)'}>
          <Path
            fillRule={'nonzero'}
            d={'M 0 0 L 366 0 L 366 60 L 0 60 L 0 0 Z'}
            strokeLinejoin={'miter'}
          />
        </Svg>
        <View
          style={[
            stylesheet._Search,
            {display: 'flex', flexDirection: 'row', alignItems: 'center'},
          ]}>
          <Text
            style={[
              stylesheet._Search,
              {
                position: 'relative',
                left: 0,
                top: 0,
                width: '100%',
                height: 'auto',
                transform: [{translateX: 0}, {translateY: 0}],
              },
            ]}>
            Search
          </Text>
        </View>
        <Image style={stylesheet._Vector_2} source={{uri: imageUrl_Vector_2}} />
      </View>
      <View style={stylesheet._Rectangle_9} />
      <View style={stylesheet._Group_1}>
        <Image style={stylesheet._Vector_3} source={{uri: imageUrl_Vector_3}} />
        <Image
          style={stylesheet._ic_sharp_history}
          source={{uri: imageUrl_ic_sharp_history}}
        />
        <Image style={stylesheet._user} source={{uri: imageUrl_user}} />
        <Image style={stylesheet._heart} source={{uri: imageUrl_heart}} />
      </View>
    </View>
  );
}

const stylesheet = StyleSheet.create({
  _Frame_2: {
    position: 'relative',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    borderRadius: 0,
    transform: [{translateX: 0}, {translateY: 0}, {rotate: '0deg'}],
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  _Group_3: {
    position: 'relative',
    width: 366,
    height: 26,
    transform: [{translateX: 0}, {translateY: 0}],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)',
    minWidth: 0,
    flexShrink: 0,
    marginBottom: 1,
    flex: 1,
  },
  _Vector: {
    position: 'absolute',
    width: 24,
    height: 17,
    borderRadius: 0,
    opacity: 1,
    left: 0,
    right: 'auto',
    top: 8,
    bottom: 'auto',
    transform: [{translateX: 0}, {translateY: 0}, {rotate: '0deg'}],
    backgroundColor: 'rgba(0,0,0,0)',
  },
  _shopping_cart: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 0,
    opacity: 1,
    left: 342,
    right: 'auto',
    top: 0,
    bottom: 'auto',
    transform: [{translateX: 0}, {translateY: 0}, {rotate: '0deg'}],
    backgroundColor: 'rgba(0,0,0,0)',
  },
  _Your_Location: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    left: 54,
    right: 'auto',
    transform: [{translateX: 0}, {translateY: 6}, {rotate: '0deg'}],
    fontFamily: 'Poppins',
    fontWeight: 'normal',
    textDecorationLine: 'none',
    lineHeight: 20,
    fontSize: 16,
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: -0.23999999463558197,
  },
  _Pin: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 0,
    opacity: 1,
    left: 162,
    right: 'auto',
    top: 8,
    bottom: 'auto',
    transform: [{translateX: 0}, {translateY: 0}, {rotate: '0deg'}],
    backgroundColor: 'rgba(0,0,0,0)',
  },
  _Header: {
    position: 'relative',
    width: 106,
    height: 20,
    transform: [{translateX: 0}, {translateY: 0}],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)',
    minWidth: 0,
    flexShrink: 0,
    marginBottom: 1,
  },
  _Greeting: {
    position: 'relative',
    width: 365,
    height: 'auto',
    borderRadius: 0,
    minWidth: 0,
    transform: [{translateX: 0}, {translateY: 0}],
    backgroundColor: 'rgba(0,0,0,0)',
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    marginBottom: 1,
    flex: 1,
  },
  _Hello__Name: {
    position: 'relative',
    width: 224.70855712890625,
    height: 46.404693603515625,
    minWidth: 0,
    transform: [{translateX: 0}, {translateY: 0}],
    fontFamily: 'Poppins',
    fontWeight: 'normal',
    textDecorationLine: 'none',
    lineHeight: 38,
    fontSize: 28,
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: -0.23999999463558197,
    flexShrink: 0,
    marginBottom: 0,
  },
  _Have_a_nice_day__: {
    position: 'relative',
    width: 226.00001525878906,
    height: 24.423507690429688,
    minWidth: 0,
    transform: [{translateX: 0}, {translateY: 0}],
    fontFamily: 'Poppins',
    fontWeight: 'normal',
    textDecorationLine: 'none',
    lineHeight: 20,
    fontSize: 14,
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: -0.23999999463558197,
    flexShrink: 0,
  },
  _Group_4: {
    position: 'relative',
    width: 366,
    height: 60,
    transform: [{translateX: 0}, {translateY: 0}],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)',
    minWidth: 0,
    flexShrink: 0,
    marginBottom: 1,
    flex: 1,
  },
  _Rectangle_8: {
    position: 'absolute',
    color: 'rgba(239, 238, 238, 1)',
    width: 366,
    height: 60,
    borderRadius: 30,
    left: 0,
    right: 'auto',
    top: 0,
    bottom: 'auto',
    transform: [{translateX: 0}, {translateY: 0}, {rotate: '0deg'}],
  },
  _Search: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    left: 51,
    right: 'auto',
    top: 14,
    bottom: 'auto',
    transform: [{translateX: 0}, {translateY: 0}, {rotate: '0deg'}],
    fontFamily: 'Abyssinica SIL',
    fontWeight: 'normal',
    textDecorationLine: 'none',
    fontSize: 17,
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: 0.1,
  },
  _Vector_2: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 0,
    opacity: 1,
    left: 16,
    right: 'auto',
    top: 14,
    bottom: 'auto',
    transform: [{translateX: 0}, {translateY: 0}, {rotate: '0deg'}],
    backgroundColor: 'rgba(0,0,0,0)',
  },
  _Rectangle_9: {
    position: 'relative',
    width: 353,
    height: 541,
    borderRadius: 0,
    opacity: 1,
    minWidth: 0,
    transform: [{translateX: 0}, {translateY: 0}],
    backgroundColor: 'rgba(196, 196, 196, 1)',
    flexShrink: 0,
    marginBottom: 1,
    flex: 1,
  },
  _Group_1: {
    position: 'relative',
    width: 309,
    height: 29,
    transform: [{translateX: 0}, {translateY: 0}],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)',
    minWidth: 0,
    flexShrink: 0,
    flex: 1,
  },
  _Vector_3: {
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
  'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/fddf150eb2e5a9f193a4ec6674a05fd1';
const imageUrl_Vector_2 =
  'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/ebd6d531397ba71260ba564f19f798d3';
const imageUrl_Vector =
  'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/718c434c37086c28cc33830d76976636';
const imageUrl_heart =
  'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/3184c0f9145f94653c3be3a23791cfac';
const imageUrl_Pin =
  'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/ab6516edfae6befa6f9eb3bb6ebe9d6e';
const imageUrl_user =
  'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/34d587ec0d1ddc0653f2934f2d18ff03';
const imageUrl_Vector_3 =
  'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/63ad62e625104c1cdac5a6ae8d783ac2';
const imageUrl_shopping_cart =
  'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/8cd67a730e55496ae96a1173346dfb7c';
