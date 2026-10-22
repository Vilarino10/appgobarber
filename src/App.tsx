import React from "react";
import { View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import {
  SafeAreaInsetsContext,
  SafeAreaProvider,
} from "react-native-safe-area-context";

import Routes from "./routes";

const App: React.FC = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, backgroundColor: "#312e38" }}>
        <Routes />
      </View>
    </NavigationContainer>
  </SafeAreaProvider>
);

export default App;
