import { FC } from "react";
import { FlashList } from "@shopify/flash-list";
import { CategoriesListItem } from "./categories-list-item/categories-list-item";
import { StyleSheet, View } from "react-native";

interface ICategoriesList {}

export const CategoriesList: FC<ICategoriesList> = ({ categories }) => {
  const sortedCategories = categories.sort((a, b) => a.sort - b.sort);
  const keyExtractor = (item) => item.id.toString();
  const renderItem = ({ item, index }) => (
    <CategoriesListItem
      item={item}
      isLast={index === sortedCategories.length - 1}
    />
  );
  return (
    <View style={styles.view}>
      <FlashList
        showsHorizontalScrollIndicator={false}
        data={sortedCategories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        estimatedItemSize={100}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginBottom: 16,
  },
});
