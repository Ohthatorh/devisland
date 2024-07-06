import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { ProductItemPrice } from "./product-item-price/product-item-price";
import { ProductItemImages } from "./product-item-images/product-item-images";
import { ProductItemLabel } from "./product-item-labels/product-item-label";
import { ProductItemActions } from "./product-item-actions/product-item-actions";

interface IProductItem {}

export const ProductItem: FC<IProductItem> = ({ item, style }) => {
  return (
    <View style={style}>
      <ProductItemLabel item={item} />
      <ProductItemActions item={item} />
      <ProductItemImages images={item.images} />
      <ProductItemPrice item={item} />
      <Text variant="titleSmall" numberOfLines={2}>
        {item.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "49%",
  },
});
