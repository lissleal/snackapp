import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ShopStack } from './shopStack.jsx';
import { CartStack } from './cartStack.jsx';
import { OrdersStack } from './orderStack.jsx';
import { AuthStack } from './authStack.jsx';
import { CartIcon } from '../icons/cartIcon.jsx';
import { HomeIcon } from '../icons/homeIcon.jsx';
import { OrderIcon } from '../icons/orderIcon.jsx';
import { AccountIcon } from '../icons/accountIcon.jsx';

const { Screen: TabScreen, Navigator: TabNavigator } = createBottomTabNavigator()

export const Navigator = () => (

    <TabNavigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#D3B398',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarActiveTintColor: '#D3B398',
        tabBarInactiveTintColor: '#9ca3af',
    }}>
        <TabScreen name='ShopTab' component={ShopStack} options={{ title: "Tienda", tabBarIcon: ({ color }) => <HomeIcon color={color} /> }} />
        <TabScreen name='CartStack' component={CartStack} options={{ title: "Mi Carrito", tabBarIcon: ({ color }) => <CartIcon color={color} /> }} />
        <TabScreen name='OrdersStack' component={OrdersStack} options={{ title: "Mis Ordenes", tabBarIcon: ({ color }) => <OrderIcon color={color} /> }} />
        <TabScreen name='AuthStack' component={AuthStack} options={{ title: "Iniciar Sesión", tabBarIcon: ({ color }) => <AccountIcon color={color} /> }} />

    </TabNavigator>
)