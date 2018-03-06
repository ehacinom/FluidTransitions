import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  footer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
  },
  textBold: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  circlesContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

const Circle = (props) => (
  <View style={{
    backgroundColor: props.background,
    width: props.size,
    height: props.size,
    borderRadius: props.size / 2,
    margin: 14 }}
  />
);

const Square = (props) => (
  <View style={{
    backgroundColor: props.background,
    width: props.size,
    height: props.size,
    margin: 14 }}
  />
);

const Screen1 = (props) => (
  <View style={styles.container}>
    <View style={[styles.top, { backgroundColor: '#AA3939' }]}>
      <Transition appear="scale">
        <Circle background="#D46A6A" size={140} />
      </Transition>
      <View style={styles.circlesContainer}>
        <Transition appear="vertical" delay>
          <Circle background="#550000" size={40} />
        </Transition>
        <Transition appear="vertical" delay>
          <Circle background="#550000" size={40} />
        </Transition>
        <Transition appear="vertical" delay>
          <Circle background="#550000" size={40} />
        </Transition>
      </View>
    </View>
    <View style={styles.content}>
      <Transition appear="horizontal">
        <View>
          <Text style={styles.textBold}>Welcome to this demo!</Text>
          <Text style={styles.text}>It shows you how to build some cool transitions to use in your onboarding screens.</Text>
        </View>
      </Transition>
    </View>
    <View style={styles.footer}>
      <Transition appear="horizontal">
        <Button title="Next" onPress={() => props.navigation.navigate('screen2')} />
      </Transition>
    </View>
  </View>
);

const Screen2 = (props) => (
  <View style={styles.container}>
    <View style={[styles.top, { backgroundColor: '#2E4272' }]}>
      <Transition appear="scale">
        <Square background="#4F628E" size={140} />
      </Transition>
      <View style={styles.circlesContainer}>
        <Transition appear="horizontal" delay>
          <Square background="#061539" size={40} />
        </Transition>
        <Transition appear="horizontal" delay>
          <Square background="#061539" size={40} />
        </Transition>
        <Transition appear="horizontal" delay>
          <Square background="#061539" size={40} />
        </Transition>
      </View>
    </View>
    <View style={styles.content}>
      <Transition appear="horizontal">
        <View>
          <Text style={styles.textBold}>This is the second page</Text>
          <Text style={styles.text}>It uses transitions to add individual transitions in a navigation transition.</Text>
        </View>
      </Transition>
    </View>
    <View style={styles.footer}>
      <Transition appear="horizontal">
        <Button title="Back" onPress={() => props.navigation.goBack()} />
      </Transition>
      <Transition appear="horizontal">
        <Button title="Next" onPress={() => props.navigation.navigate('screen3')} />
      </Transition>
    </View>
  </View>
);

const Screen3 = (props) => (
  <View style={styles.container}>
    <View style={[styles.top, { backgroundColor: '#88CC88' }]}>
      <Transition appear="scale">
        <Circle background="#2D882D" size={140} />
      </Transition>
      <View style={styles.circlesContainer}>
        <Transition appear="horizontal" delay>
          <Circle background="#550000" size={40} />
        </Transition>
        <Transition appear="horizontal" delay>
          <Circle background="#550000" size={40} />
        </Transition>
        <Transition appear="horizontal" delay>
          <Circle background="#550000" size={40} />
        </Transition>
      </View>
    </View>
    <View style={styles.content}>
      <Transition appear="horizontal">
        <View>
          <Text style={styles.textBold}>This is the last page</Text>
          <Text style={styles.text}>Navigate back to see the reversed transitions.</Text>
        </View>
      </Transition>
    </View>
    <View style={styles.footer}>
      <Transition appear="horizontal">
        <Button title="Back" onPress={() => props.navigation.goBack()} />
      </Transition>
    </View>
  </View>
);

const Navigator = FluidNavigator({
  screen1: { screen: Screen1 },
  screen2: { screen: Screen2 },
  screen3: { screen: Screen3 },
});

export default () => (
  <Navigator />
);
