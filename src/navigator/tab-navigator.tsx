import { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import {
  CartScreen,
  CatalogScreen,
  FavoritesScreen,
  HomeScreen,
  ProfileScreen,
} from "../screens";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { CatalogStackNavigator } from "./stack-navigator";

export const TabNavigator = ({ bottomTabs }) => {
  const ROUTES = bottomTabs.routes?.sort(
    (a: any, b: any) => a.sort - b.sort
  ) || [
    {
      name: "HomeTab",
      label: "Главная",
      icon: "home",
    },
    {
      name: "CatalogTab",
      label: "Каталог",
      icon: "view-grid",
    },
    {
      name: "CartTab",
      label: "Корзина",
      icon: "cart",
    },
    {
      name: "FavoritesTab",
      label: "Избранное",
      icon: "heart",
    },
    {
      name: "ProfileTab",
      label: "Профиль",
      icon: "account",
    },
  ];
  const [index, setIndex] = useState(0);
  const [routes] = useState(
    ROUTES.map((route) => ({
      key: route.name,
      title: route.label,
      focusedIcon: route.icon,
      unfocusedIcon: `${route.icon}-outline`,
      badge: route.badge,
    }))
  );
  const renderScene = BottomNavigation.SceneMap({
    HomeTab: HomeScreen,
    CatalogTab: CatalogStackNavigator,
    CartTab: CartScreen,
    FavoritesTab: FavoritesScreen,
    ProfileTab: ProfileScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      labeled={bottomTabs.isVisibleLabels}
      activeColor={bottomTabs.activeColorIcon}
      inactiveColor={bottomTabs.inactiveColorIcon}
      barStyle={{
        backgroundColor: bottomTabs.backgroundColor,
        borderTopColor: bottomTabs.borderColor,
        borderTopWidth: bottomTabs.borderWidth,
      }}
      activeIndicatorStyle={{
        display: "none",
      }}
      shifting={bottomTabs.singleVisibleLabel}
      renderIcon={({ route, color, focused }) => {
        return (
          <Icon
            name={focused ? route.focusedIcon : route.unfocusedIcon}
            size={bottomTabs.iconSize || 24}
            color={color}
          />
        );
      }}
    />
  );
};
