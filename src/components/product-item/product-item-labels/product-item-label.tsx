import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

interface IProductItemLabel {}

export const ProductItemLabel: FC<IProductItemLabel> = ({ item }) => {
  return (
    <View style={styles.view}>
      {item.pricePercent && item.pricePercent > 4 && (
        <Text variant="labelSmall" style={styles.label}>
          -{item.pricePercent}%
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    backgroundColor: "#FF0000",
    color: "#FFFFFF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: "flex-start",
  },
  view: {
    position: "absolute",
    top: 8,
    left: 8,
    zIndex: 1,
  },
});
