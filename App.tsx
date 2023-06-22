import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomePage from './src/components/organisms/HomePage';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomePage />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#e8e7e3',
  },
});

export default App;
