import React from "react";
import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AppProvider from "./hooks";

import {
  SafeAreaInsetsContext,
  SafeAreaProvider,
} from "react-native-safe-area-context";

import Routes from "./routes";

const App: React.FC = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: "#312e38" }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
