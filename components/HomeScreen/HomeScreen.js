import {Button, Text} from 'native-base';
import {View} from 'react-native';

export const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        varaint="outline"
        onPress={() => navigation.navigate('ButtonsTutorial')}>
        Navigate to Button Page
      </Button>
      <Text>Home Screen</Text>
    </View>
  );
};
