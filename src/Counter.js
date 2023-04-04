import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import CounterItem from './CounterItem';

export const COINS = [
  [0.50, 0],
  [1, 0],
  [2, 0],
  [5, 0],
  [10, 0],
  [20, 0],
  [50, 0],
  [100, 0],
  [200, 0],
  [500, 0],
  [1000, 0],
]

function Counter({denominations, setDenominations}) {
  const handleChange = (denomination, value) => {
    if (value >= 0){
      const denominationsCopy = new Map(denominations);
      denominationsCopy.set(denomination, value);
      setDenominations(denominationsCopy);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de dinero</Text>
      {COINS.map(([denomination, value]) => {
        return (
          <CounterItem
            key={denomination}
            denomination={denomination}
            value={denominations.get(denomination) ?? value}
            setDenomination={(value) => handleChange(denomination, value)}
          />
        );
      })}
    </View>
  );
}

export default Counter;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "gray"
  }
});
