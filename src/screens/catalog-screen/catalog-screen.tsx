import { FC } from "react";
import { CatalogScreenContent } from "../../content/catalog-screen-content/catalog-screen-content";
import CATALOG_CATEGORIES from "../../../backend/catalog.json";
import CATALOG_LINKS from "../../../backend/catalog-links.json";

export const CatalogScreen: FC = () => {
  return (
    <CatalogScreenContent
      catalogCategories={CATALOG_CATEGORIES.categories}
      catalogLinks={CATALOG_LINKS.links}
    />
  );
};
