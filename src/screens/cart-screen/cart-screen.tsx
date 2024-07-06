import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

interface ICartScreen {}

export const CartScreen: FC<ICartScreen> = () => {
  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
