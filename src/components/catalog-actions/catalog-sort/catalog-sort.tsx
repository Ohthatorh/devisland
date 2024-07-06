import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { FC, useCallback, useMemo } from "react";
import { StyleSheet } from "react-native";
import { globalStyles } from "../../../services/global/global-styles";
import { Button } from "react-native-paper";

interface ICatalogSort {}

export const CatalogSort: FC<ICatalogSort> = ({
  bottomSheetModalRef,
  sortList,
}) => {
  const snapPoints = useMemo(() => [100], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );
  const onPressed = () => {
    console.log("onPressed");
    bottomSheetModalRef.current?.close();
  };
  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      enableDynamicSizing
    >
      <BottomSheetView style={globalStyles.bottomSheetView}>
        {sortList.map((el, index) => (
          <Button
            key={index}
            contentStyle={styles.contentButton}
            icon={
              el.choosed ? "checkbox-marked-circle" : "checkbox-blank-circle"
            }
            labelStyle={styles.labelButton}
            onPress={onPressed}
          >
            {el.name}
          </Button>
        ))}
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  labelButton: {
    color: "#000000",
  },
  contentButton: {
    paddingVertical: 8,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
});
