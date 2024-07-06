import { FC } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text } from "react-native-paper";

interface ICategoriesListItem {}

export const CategoriesListItem: FC<ICategoriesListItem> = ({
  item,
  isLast,
}) => {
  return (
    <View style={{ ...styles.item, marginRight: isLast ? 0 : 16 }}>
      {item.image && (
        <Image source={{ uri: item.image }} style={styles.image} />
      )}
      <Text>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    borderRadius: 8,
    borderColor: "#000000",
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    gap: 8,
  },
  image: {
    objectFit: "contain",
    width: 30,
    height: 30,
  },
});
