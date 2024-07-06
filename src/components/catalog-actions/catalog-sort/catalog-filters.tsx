import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Portal } from "react-native-paper";
import Modal from "react-native-modal";

interface ICatalogFilters {}

export const CatalogFilters: FC<ICatalogFilters> = ({
  visible,
  setVisible,
}) => {
  return (
    <Portal>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.containerStyle}>
          <Text>FILTEEEEEEEEEEEEEERS.</Text>
          <Button onPress={() => setVisible(false)}>close</Button>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
});
