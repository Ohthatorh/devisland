import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

interface IProductItemPrice {}

export const ProductItemPrice: FC<IProductItemPrice> = ({ item }) => {
  return (
    <View>
      {item.priceDiscount && item.priceDicount !== item.price ? (
        <>
          <Text variant="titleLarge">{item.priceDiscount} ₽</Text>
          <Text variant="labelSmall" style={styles.priceDiscount}>
            {item.price} ₽
          </Text>
        </>
      ) : (
        <Text variant="titleLarge">{item.price} ₽</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  priceDiscount: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationColor: "#000000",
  },
});
