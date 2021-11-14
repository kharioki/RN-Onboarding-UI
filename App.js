import React from 'react';
import { StyleSheet } from 'react-native';

import Onboard from './components/Onboard';

export default function App() {
  return (
    <>
      <Onboard />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
