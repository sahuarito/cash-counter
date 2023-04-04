import React from 'react';
import { Pressable, Text, TextInput, StyleSheet, View } from 'react-native';

function MoneyFormat(value){
  return "$"+String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function MinusButton({onPressHandler}) {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPressHandler}>
      <View style={styles.minusButtonContainer}>
        <Text style={styles.minustSimbol}>-</Text>
      </View>
    </Pressable>
  );
}

function PlusButton({onPressHandler}) {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPressHandler}>
      <View style={styles.plusButtonContainer}>
        <Text style={styles.plusSimbol}>+</Text>
      </View>
    </Pressable>
  );
}

function Inputs({ value, setDenomination }) {
  return (
    <View style={styles.inputsContainer}>
      <MinusButton onPressHandler={() => setDenomination(Number(value) - 1)}/>
      <TextInput
        style={styles.input}
        onChangeText={setDenomination}
        value={String(value)}
        keyboardType='numeric'
        maxLength={3}
      />
      <PlusButton onPressHandler={() => setDenomination(Number(value) + 1)}/>
    </View>
  );
}

function Subtotal({ value }) {
  return (
    <View style={styles.subtotalContainer}>
      <Sign sign={'='} />
      <Text style={styles.subtotal}>{MoneyFormat(value)}</Text>
    </View>
  );
}

function Sign({ sign, sx={} }) {
  return <Text style={[styles.sign, sx]}>{sign}</Text>;
}

function Numbers({ value }) {
  return <Text style={styles.number}>{value}</Text>;
}

function Denomination({ denomination }) {
  return (
    <View style={styles.denominationContainer}>
      <Numbers value={denomination} />
      <Sign sign={'x'} sx={{textAlign: 'center'}}/>
    </View>
  );
}

function CounterItem({ denomination, value, setDenomination }) {
//   const units = useFormInput(');
  return (
    <View style={styles.container}>
      <Denomination denomination={denomination} />
      <Inputs setDenomination={setDenomination} value={value} />
      <Subtotal value={denomination * value} />
    </View>
  );
}

export default CounterItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    paddingVertical: 5,
  },
  denominationContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between'
  },
  minusButtonContainer: {
    position: 'relative',
    height: 26,
    width: 26,
    backgroundColor: 'red',
    borderRadius: 20,
  },
  minustSimbol: {
    position: 'absolute',
    fontSize: 30,
    top: -9,
    right: 9,
    textAlign: 'center',
    color: 'white',
  },
  buttonContainer: {
    padding: 14,
    // backgroundColor: 'blue',
    borderRadius: 20,
  },
  plusButtonContainer: {
    height: 26,
    width: 26,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 20,
  },
  number: {
    flex: 1,
    color: 'gray',
    fontSize: 20,
    paddingTop: 4
  },
  plusSimbol: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  sign: {
    flex: 1,
    color: 'gray',
    fontSize: 20,
  },
  inputsContainer: {
    display: 'flex',
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    color: "black"
  },
  subtotalContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtotal: {
    color: 'gray',
    fontSize: 20,
  },
});
