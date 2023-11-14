import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-slate-50 flex-1 justify-center items-center">
      <View>
        <Text className="text-[5vh] text-green-600">Welcome to</Text>
      </View>
      <Text className="text-[5vh] text-green-600">This is Business Bro!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
