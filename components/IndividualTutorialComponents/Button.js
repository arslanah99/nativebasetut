import {Button, Text} from 'native-base';
import {View} from 'react-native';

export const ButtonsTutorial = ({navigation}) => {
  return (
    <View>
      <Button varaint="outline" onPress={() => navigation.navigate('Home')}>
        Navigate to Home Page
      </Button>
      <Text>Button Screen</Text>
    </View>
  );
};
