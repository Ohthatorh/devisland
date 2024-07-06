import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { FC, useCallback, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { CatalogSort } from "./catalog-sort/catalog-sort";
import { CatalogFilters } from "./catalog-sort/catalog-filters";

interface ICatalogActions {}

export const CatalogActions: FC<ICatalogActions> = ({ sortList }) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const [visibleModalFilters, setVisibleModalFilters] = useState(false);
  return (
    <View style={styles.view}>
      <Button
        icon="sort-variant"
        onPress={handlePresentModalPress}
        labelStyle={styles.buttonLabel}
      >
        {sortList.find((el) => el.choosed)?.name || "Популярные"}
      </Button>
      <Button
        icon="filter"
        contentStyle={styles.iconRightButton}
        onPress={() => setVisibleModalFilters(true)}
        labelStyle={styles.buttonLabel}
      >
        Фильтры
      </Button>
      <CatalogSort
        bottomSheetModalRef={bottomSheetModalRef}
        sortList={sortList}
      />
      <CatalogFilters
        visible={visibleModalFilters}
        setVisible={setVisibleModalFilters}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  iconRightButton: {
    flexDirection: "row-reverse",
  },
  buttonLabel: {
    color: "#000000",
  },
});
