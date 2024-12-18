import { StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import WeatherApp from './components/WeatherApp';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WeatherApp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
});

export default App;
