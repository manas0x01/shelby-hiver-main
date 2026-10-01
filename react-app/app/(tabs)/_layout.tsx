import { Tabs } from 'expo-router';
import { Chrome as Home, Search, Heart, User } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#f5f5dc',
          paddingTop: 8,
          paddingBottom: 8,
          height: 70,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: '#8B4513',
        tabBarInactiveTintColor: '#999999',
        tabBarLabelStyle: {
          fontFamily: 'Montserrat-Medium',
          fontSize: 11,
          marginBottom: 4,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Home size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',
          tabBarIcon: ({ size, color }) => (
            <Search size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ size, color }) => (
            <Heart size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, color }) => (
            <User size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}