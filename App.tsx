import React from "react";
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from "expo-app-loading"; //expo install expo-app-loading


import { SignIn } from './src/screens/SignIn';
import { StatusBar } from "react-native";
import { Background } from "./src/components/Background";
import { Home } from "./src/screens/Home";
import { Routes } from "./src/routes";


export default function App() {
  //Carregando fontes instaladas
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsLoaded) { //Segura tela de splash até que as fonts sejam carregadas
    return <AppLoading />
  }

  return (//Fragment: Utilizado para empacotar elementos sem causar impacto visual
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  )
}