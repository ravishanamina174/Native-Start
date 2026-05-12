import { Tabs } from 'expo-router';
import React from 'react';
import { Home, Search, ShoppingBag } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1A1A1A',
        tabBarInactiveTintColor: '#D1D1D1',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#F9F9F7',
          borderTopWidth: 0,
          height: 80,
          paddingTop: 10,
        },
      }}>
      <Tabs.Screen
        name="index" // This points to index.tsx (your Home)
        options={{
          tabBarIcon: ({ color }) => <Home size={24} color={color} strokeWidth={1.5} />,
        }}
      />
      <Tabs.Screen
        name="Products" // This points to Products.tsx
        options={{
          tabBarIcon: ({ color }) => <Search size={24} color={color} strokeWidth={1.5} />,
        }}
      />
      <Tabs.Screen
        name="Cart" // This points to Cart.tsx
        options={{
          tabBarIcon: ({ color }) => <ShoppingBag size={24} color={color} strokeWidth={1.5} />,
        }}
      />
    </Tabs>
  );
}