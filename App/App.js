import React, { createContext, useState, useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useIsFocused, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import { Provider as PaperProvider, DefaultTheme, DarkTheme } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./screens/ProfileScreen";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import GroupsScreen from "./screens/GroupsScreen";
import ActivityScreen from "./screens/ActivityScreen";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FriendsScreen from "./screens/FriendsScreen";
import AddExpenseButton from "./comp/ui/AddExpenseButton";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';
// Search icon
// fontWeight:'600'

// Create Stack and Tab Navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Create a Theme Context
const ThemeContext = createContext();

// Theme Provider Component
const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// HomeScreen Component
function HomeScreen() {
  const navigation = useNavigation();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleNavigation = () => {
    navigation.navigate("Profile");
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#333" : "#fff" },
      ]}
    >
      <Pressable
        onPress={handleNavigation}
        style={{
          backgroundColor: isDarkMode ? "#555" : "lightgreen",
          height: 40,
          width: 300,
          borderRadius: 40,
          margin: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: isDarkMode ? "#fff" : "darkgreen" }}>
          Go to profile
        </Text>
      </Pressable>

      <Pressable
        onPress={toggleTheme}
        style={{
          backgroundColor: isDarkMode ? "#555" : "lightgreen",
          height: 40,
          borderRadius: 40,
          width: 300,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: isDarkMode ? "#fff" : "darkgreen" }}>
          Switch to {isDarkMode ? "Light" : "Dark"} Theme
        </Text>
      </Pressable>
    </View>
  );
}


// Tab Navigator Component
function MyTabs() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={{
        headerLeft: () => {
          return <Pressable onPress={() => {
            ToastAndroid.show("Ad Pressed", ToastAndroid.SHORT)
          }} style={{ padding: 6, flexDirection: 'row', gap: 8, paddingHorizontal: 8, marginLeft: 10,borderRadius: 10, borderWidth: 2, borderColor: "purple" }}>
            <FontAwesome name="diamond" size={16} color="purple" />
            <Text style={{ fontSize: 13, color: 'purple', fontWeight: '700' }}>50% off</Text>
          </Pressable>
        },
        tabBarLabelStyle: {
          color: 'green',
          fontWeight: '500'
        },
        headerTitle: '',
        headerRight: () => {
          return <Pressable style={{ marginRight: 10 }}>
            <EvilIcons name="search" size={34} color="black" />
          </Pressable>
        },
        tabBarStyle: {
          backgroundColor: isDarkMode ? "#222" : "#fff",
        },
        tabBarActiveTintColor: isDarkMode ? "#fff" : "#000",
        tabBarInactiveTintColor: isDarkMode ? "#888" : "#555",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Groups"
        component={GroupsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            
            <MaterialIcons name="groups" size={size} color={color} />      
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            
            <Feather name="activity" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            
          <FontAwesome5 name="user-friends" size={size} color={color} />            
        ),
        }}
      />
    </Tab.Navigator>
  );

}

// Main App Component
export default function App() {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ isDarkMode }) => (
          <PaperProvider theme={isDarkMode ? DarkTheme : DefaultTheme}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Main"
                  component={MyTabs}
                  options={{
                    headerShown: false, // Hide the header for the tab navigator
                  }}
                />
                <Stack.Screen
                  name="Profile"
                  component={ProfileScreen}
                  options={{
                    headerStyle: {
                      backgroundColor: isDarkMode ? "#222" : "white",
                    },
                    headerTitle: "",
                    headerBackVisible: false,
                    headerTintColor: isDarkMode ? "#fff" : "#000",
                    headerRight: () => (
                      <Pressable>
                        <AntDesign
                          name="search1"
                          size={24}
                          color={isDarkMode ? "#fff" : "#000"}
                        />
                      </Pressable>
                    ),
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
            <AddExpenseButton />

          </PaperProvider>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});