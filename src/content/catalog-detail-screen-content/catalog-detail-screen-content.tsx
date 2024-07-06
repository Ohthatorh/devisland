import { FC } from "react";
import { View } from "react-native";
import { globalStyles } from "../../services/global/global-styles";
import { CatalogActions } from "../../components/catalog-actions/catalog-actions";
import { CatalogItemsList } from "../../components/catalog-items-list/catalog-items-list";

interface ICatalogDetailScreenContent {}

export const CatalogDetailScreenContent: FC<ICatalogDetailScreenContent> = ({
  catalog,
}) => {
  return (
    <View style={globalStyles.container}>
      <CatalogActions sortList={catalog.sortList} />
      <CatalogItemsList items={catalog.products} />
    </View>
  );
};
