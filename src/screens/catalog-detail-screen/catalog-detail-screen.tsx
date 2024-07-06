import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FC, useEffect } from "react";
import { CatalogDetailScreenContent } from "../../content/catalog-detail-screen-content/catalog-detail-screen-content";
import CATALOG from "../../../backend/catalog-detail.json";

interface ICatalogDetailScreen {}

export const CatalogDetailScreen: FC<ICatalogDetailScreen> = (props) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  // const categoryCode = props.route.params?.categoryCode;
  useEffect(() => {
    navigation.setParams({
      title: CATALOG.info.name,
    });
  }, []);
  return <CatalogDetailScreenContent catalog={CATALOG} />;
};
