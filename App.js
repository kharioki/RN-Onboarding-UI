import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Home from './components/Home';

import Onboard from './components/Onboard';

export default function App() {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardComplete = () => {
    setShowOnboard(false);
  };

  return (
    <>
      {showOnboard && <Onboard handleDone={handleOnboardComplete} />}
      {!showOnboard && <Home />}
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
