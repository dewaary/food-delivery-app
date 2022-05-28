import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Display} from '../utils';
import {Fonts, Colors, Images} from '../contants';

const WelcomeCard = ({title, content, image}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Images[image]} resizeMode="contain" />
      <Text style={styles.titileText}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Display.setWidht(100),
  },
  image: {
    height: Display.setHeight(30),
    width: Display.setWidht(60),
  },
  titileText: {
    fontSize: 22,
    fontFamily: Fonts.POPPINS_BOLD,
  },
  contentText: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_LIGHT,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
