import { FC } from "react";
import { ScrollView, View } from "react-native";
import { CatalogList } from "../../components/catalog-list/catalog-list";
import { globalStyles } from "../../services/global/global-styles";
import { CategoriesList } from "../../components/categories-list/categories-list";

interface ICatalogScreenContent {}

export const CatalogScreenContent: FC<ICatalogScreenContent> = ({
  catalogCategories,
  catalogLinks,
}) => {
  return (
    <ScrollView style={globalStyles.container}>
      <CategoriesList categories={catalogLinks} />
      <CatalogList catalogCategories={catalogCategories} />
    </ScrollView>
  );
};
