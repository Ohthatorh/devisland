import { NavigationContainer } from "@react-navigation/native";
import { FC } from "react";
import { TabNavigator } from "../../../navigator/tab-navigator";
import { View } from "react-native";

interface IAppProvider {}

export const AppProvider: FC<IAppProvider> = () => {
  return (
    <View>
      <TabNavigator />
    </View>
  );
};
