import React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  },
img: {
  width: '80%',
  height:'40%',
  marginBottom:'20%',
  marginTop:'20%',
}

})

const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.firstname}!  {props.lastname}!</Text>
      <Image style={styles.img}
       source={{uri: 'https://www.plb.fr/app/images/logo-plb/officiel/logo-plb-Avenir.svg'}} 
      />
    </View>
  );
}

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting firstname='Amine' lastname='Mezghich' />
      <Greeting firstname='Kamel' lastname='Mezghich' />
      <Greeting firstname='Bertrand' lastname='Mezghich' />
     
    </View>
  );
}

export default LotsOfGreetings;
