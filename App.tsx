import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import './global.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { queryClient } from '@/shared/api';
import { AppNavigator } from '@/app/navigation/AppNavigator';

export default function App() {

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <SafeAreaView style={styles.container}>
            <AppNavigator />
          </SafeAreaView>
        </QueryClientProvider>
      </SafeAreaProvider>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
