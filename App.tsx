import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/StackNavigator";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { AuthProvider } from "./src/context/Auth/AuthProvider";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
