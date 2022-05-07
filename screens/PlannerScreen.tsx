import { useEffect } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';


export default function PlannerScreen({navigation}:any) {

    useEffect(() => {
    console.log('Inital rendering');
    
    }, [])
    
  return (
      <View>
          <Text>Planner screen</Text>
          <Button
        title="Go to Home"
        onPress={() => navigation.push("home")}
      ></Button>
      </View>
  )
}
