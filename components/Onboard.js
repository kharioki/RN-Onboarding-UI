import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import { useFonts } from 'expo-font';

import colors from '../assets/colors/colors';
import onboard1 from '../assets/images/Onboard1.png';
import onboard2 from '../assets/images/Onboard2.png';
import onboard3 from '../assets/images/Onboard3.png';

const data = [
  {
    title: 'Save time by tracking your studies',
    text: 'Schedule your classes, assignments, quizzes and more',
    image: onboard1,
  },
  {
    title: 'Stay on top of your education',
    text: 'Reduce your stress, increase your productivity',
    image: onboard2,
  },
  {
    title: 'Spend more time doing the things you love',
    text: "Get started within five minutes",
    image: onboard3,
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
        style={[
          styles.slide,
        ]}>
        <Text style={[
          styles.title, {
            fontFamily: 'OpenSansBold',
          }
        ]}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={[
          styles.text, {
            fontFamily: 'OpenSansSemiBold',
          }
        ]}>{item.text}</Text>
      </View>
    )
  }

  const keyExtractor = (item) => item.title;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
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
});

export default Onboard
