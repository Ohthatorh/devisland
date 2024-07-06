import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";
import { variables } from "../../services/global/variables";

interface IAppHeader {
  canGoBack?: boolean;
  title?: string;
  titleShown?: boolean;
  searchBar?: boolean;
  searchTitle?: string;
  searchButton?: boolean;
}

export const AppHeader: FC<IAppHeader> = ({
  canGoBack,
  title,
  titleShown,
  searchBar,
  searchTitle,
  searchButton,
}) => {
  const navigation = useNavigation();
  return (
    <Appbar.Header style={styles.header} mode="center-aligned">
      {canGoBack && <Appbar.BackAction onPress={() => navigation.goBack()} />}
      {titleShown && title && <Appbar.Content title={title} />}
      {searchBar && (
        <View style={styles.searchBar}>
          <Appbar.Action
            icon="magnify"
            onPress={() => console.log("pressed icon")}
          />
          <Appbar.Content
            title={searchTitle ? searchTitle : "Искать товары"}
            titleStyle={styles.searchTitle}
            onPress={() => console.log("pressed title")}
          />
          <Appbar.Action
            icon="qrcode-scan"
            onPress={() => console.log("pressed icon scan")}
          />
        </View>
      )}
      {searchButton && (
        <Appbar.Action
          icon="magnify"
          onPress={() => console.log("pressed search button")}
          style={styles.rightIcon}
        />
      )}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: variables.paddingContainer,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f7f8f9",
    alignItems: "center",
    borderRadius: variables.borderRadiusLarge,
  },
  searchTitle: {
    fontSize: 14,
  },
  rightIcon: {
    marginLeft: "auto",
  },
});
