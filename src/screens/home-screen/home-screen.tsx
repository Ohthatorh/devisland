import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

interface IHomeScreen {}

export const HomeScreen: FC<IHomeScreen> = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
