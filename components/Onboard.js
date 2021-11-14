import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import { useFonts } from 'expo-font';

import colors from '../assets/colors/colors';

const data = [
  {
    title: 'Save time by tracking your studies',
    text: 'Schedule your classes, assignments, quizzes and more',
    image: require('../assets/images/Onboard1.png'),
  },
  {
    title: 'Stay on top of your education',
    text: 'Reduce your stress, increase your productivity',
    image: require('../assets/images/Onboard2.png'),
  },
  {
    title: 'Spend more time doing the things you love',
    text: "Get started within five minutes",
    image: require('../assets/images/Onboard3.png'),
  },
];


const Onboard = () => {
  const [loaded] = useFonts({
    OpenSansBold: require('../assets/fonts/OpenSans-Bold.ttf'),
    OpenSansSemiBold: require('../assets/fonts/OpenSans-SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const renderItem = ({ item }) => {
    return (
      <View
        style={[styles.slide]}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={[
            styles.title, {
              fontFamily: 'OpenSansBold',
            }
          ]}>{item.title}</Text>
          <Text style={[
            styles.text, {
              fontFamily: 'OpenSansSemiBold',
            }
          ]}>{item.text}</Text>
        </View>
      </View>
    )
  }

  const keyExtractor = (item) => item.title;

  const renderNextButton = () => (
    <View style={styles.buttonCircle}>
      <Text style={styles.buttonText}>NEXT</Text>
    </View>
  );

  const renderDoneButton = () => (
    <View style={[styles.buttonCircle, { backgroundColor: colors.blue, marginRight: -30 }]}>
      <Text style={[styles.buttonText, { color: colors.white }]}>DONE</Text>
    </View>
  );

  const renderPrevButton = () => (
    <View style={styles.buttonCircle}>
      <Text style={styles.buttonText}>PREV</Text>
    </View>
  )

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        showPrevButton
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        renderPrevButton={renderPrevButton}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: colors.blue,
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: colors.blue,
    textAlign: 'center',
  },
  dot: {
    backgroundColor: colors.blueFaded,
  },
  activeDot: {
    backgroundColor: colors.blue,
  },
  buttonCircle: {
    width: 80,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'OpenSansSemiBold',
    color: colors.blue,
  },
});

export default Onboard
