import React, { useCallback, useEffect, useState } from 'react';
import Home from './screen/Home';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Text, View } from 'react-native';

// const getFonts = () => {
//   return Font.loadAsync({
//     "nunito-regular": require('./assets/fonts/Nunito-Regular.ttf'),
//     "nunito-bold": require('./assets/fonts/Nunito-Bold.ttf'),
//   })
// }
export default function App() {
    // const [isLoaded, setIsLoaded] = useState(false);
    const [fontsLoaded] = useFonts({
        "nunito-regular": require('./assets/fonts/Nunito-Regular.ttf'),
        "nunito-bold": require('./assets/fonts/Nunito-Bold.ttf'),
        "aboreto":require('./assets/fonts/Aboreto-Regular.ttf'), 
    });
  
    useEffect(() => {
      async function prepare() {
        await SplashScreen.preventAutoHideAsync();
      }
      
      prepare();
    }, []);
  
    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);
    
    if (!fontsLoaded) {
      return null;
    }
  
      return (
          <Home onLayout={onLayoutRootView}/>
      )
}