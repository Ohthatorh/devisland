import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import { CatalogDetailScreen, CatalogScreen } from "../screens";
import { AppHeader } from "../components/app-header/app-header";

const Stack = createNativeStackNavigator();

export const CatalogStackNavigator: FC = () => {
  return (
    <Stack.Navigator initialRouteName="CatalogScreen">
      <Stack.Group>
        <Stack.Screen
          name="CatalogScreen"
          component={CatalogScreen}
          options={{ header: () => <AppHeader searchBar /> }}
        />
        <Stack.Screen
          name="CatalogDetailScreen"
          component={CatalogDetailScreen}
          options={{
            header: (props) => (
              <AppHeader
                canGoBack
                searchButton
                titleShown
                title={props?.route?.params?.title}
              />
            ),
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
