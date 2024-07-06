import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { IconButton } from "react-native-paper";

interface IProductItemActions {}

export const ProductItemActions: FC<IProductItemActions> = ({ item }) => {
  return (
    <View style={styles.view}>
      <IconButton icon="heart-outline" />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    top: -6,
    right: -6,
    zIndex: 1,
  },
});
