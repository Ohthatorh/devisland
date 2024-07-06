import { FC } from "react";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";
import { ProductItem } from "../product-item/product-item";
import { screenWidth } from "../../utils/functions/dimensions";

interface ICatalogItemsList {}

export const CatalogItemsList: FC<ICatalogItemsList> = ({ items }) => {
  const sortedCatalogItems = items.sort((a, b) => a.sort - b.sort);
  const keyExtractor = (item) => item.id.toString();
  const renderItem = ({ item }) => (
    <ProductItem
      item={item}
      style={{ width: screenWidth / 2 - 16, marginBottom: 32 }}
    />
  );
  return (
    <FlashList
      data={sortedCatalogItems}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      estimatedItemSize={100}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() => <View style={{ height: 16 }} />}
    />
  );
};
