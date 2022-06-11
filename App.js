import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import styles from './styles/masterStyles';
import NavBar from './components/navbar';

export default function App() {

  const [showView, setShowView] = useState('inherit')
  const [viewState, setViewState] = useState('Home')

  const handleButtonClick = () => {
    if (showView == 'inherit') {
      setShowView('none')
    } else {
      setShowView('inherit')
    }
  }

  const handleStateView = (type) => {
    setViewState(type)
  }

  return (
    <View style={styles.home}>
      <NavBar propStyle={styles.navbar}/>
      <Button onPress={handleButtonClick} title="Test"></Button>
      <Text>{viewState}</Text>
      <View style={{display: showView}}>
        <Text>This is the secondary view</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}