import { FC } from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { variables } from "../../../services/global/variables";
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface ICatalogListItem {}

export const CatalogListItem: FC<ICatalogListItem> = ({ category, index }) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <Pressable
      style={{
        ...styles.item,
        marginRight: index % 3 === 2 ? 0 : 8,
      }}
      onPress={() =>
        navigation.navigate("CatalogDetailScreen", {
          categoryCode: category.code,
        })
      }
    >
      <Image source={{ uri: category.image }} style={styles.image} />
      <Text style={styles.title} numberOfLines={2}>
        {category.name}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: "center",
    borderRadius: variables.borderRadiusLarge,
    backgroundColor: "#f7f8f9",
    padding: 8,
    marginBottom: 8,
  },
  image: {
    objectFit: "contain",
    height: 100,
    width: 100,
    marginBottom: 8,
  },
  title: {
    textAlign: "center",
    fontSize: 10,
    minHeight: 30,
  },
});
