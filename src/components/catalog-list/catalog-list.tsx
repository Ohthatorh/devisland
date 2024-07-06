import { FC } from "react";
import { CatalogListItem } from "./catalog-list-item/catalog-list-item";
import { FlashList } from "@shopify/flash-list";
import { View } from "react-native";

interface ICatalogList {}

export const CatalogList: FC<ICatalogList> = ({ catalogCategories }) => {
  const sortedCatalogCategories = catalogCategories.sort(
    (a, b) => a.sort - b.sort
  );
  const keyExtractor = (item) => item.id.toString();
  const renderItem = ({ item, index }) => (
    <CatalogListItem category={item} index={index} />
  );
  return (
    <FlashList
      scrollEnabled={false}
      data={sortedCatalogCategories}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      estimatedItemSize={100}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() => <View style={{ height: 16 }} />}
    />
  );
};
