import React, {useState} from 'react';
import { Text, View, StyleSheet,Image,Button,TextInput } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  },
img: {
  width: '80%',
  height:'40%',
  marginBottom:'20%',
  marginTop:'20%',
},input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
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
  const [text, onChangeText] = useState("Formation");

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
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

    <Text>Chaine initiale : {text}</Text>
    </View>
  );
}

export default LotsOfGreetings;
