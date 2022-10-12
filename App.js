import React, {useState} from 'react';
import { Text, View, StyleSheet,Image,Button } from 'react-native';

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
 
  const [count, setCompteur] = useState(0);
  const [greetNbr, setGetNbr] = useState(10);

  function increment(){
    setCompteur(count+1);
    setGetNbr(greetNbr+1);
  }

  function decrement(){
    setCompteur(count-1);
    setGetNbr(greetNbr-1);
  }

  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting firstname='Amine' lastname='Mezghich' />
      <Greeting firstname='Kamel' lastname='Mezghich' />
      <Greeting firstname='Bertrand' lastname='Mezghich' />
      <Text>{count}</Text>
      <Text>Nbre de Greet initial : {greetNbr}</Text>
      <Button title="incrémenter" onPress={increment}></Button>
      <Button title="décrémenter" onPress={decrement}></Button>
    </View>
  );
}

export default LotsOfGreetings;
