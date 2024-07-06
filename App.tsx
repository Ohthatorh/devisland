/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./src/navigator/tab-navigator";
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import APP_START from "./backend/app-start.json";
import { useEffect, useState } from "react";
import { Appearance } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function App() {
  const [theme, setTheme] = useState(DefaultTheme);
  useEffect(() => {
    // тут инфу с бэка о стартовом состоянии приложения спрашиваем

    // дефолтная схема - светлая
    Appearance.setColorScheme("light");
    // с бэка назначаем дефолтные цвета и настройки
    setTheme({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
      },
    });
  }, []);
  return (
    <PaperProvider theme={theme}>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <TabNavigator bottomTabs={APP_START.bottomTabs} />
          </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </PaperProvider>
  );
}
