import { Text, View, Button } from "react-native";


export default function HomeScreen({navigation}:any ) {
  return (
    <View>
      <Text>Home screen</Text>
      <Button
        title="Go to planner"
        onPress={() => navigation.push('Planner')}
      ></Button>
    </View>
  );
}
