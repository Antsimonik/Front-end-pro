import { ClerkProvider } from "@clerk/clerk-react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import MenuList from "./components/MenuList";

const clerkProviderConfig = () => {
  return (
    <ClerkProvider publishableKey="pk_test_ZXZpZGVudC1nYXRvci01OS5jbGVyay5hY2NvdW50cy5kZXYk">
      <SafeAreaProvider>
        <NavigationContainer>
          <MenuList />
        </NavigationContainer>
      </SafeAreaProvider>
    </ClerkProvider>
  );
};

export default clerkProviderConfig;
