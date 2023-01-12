import React from 'react';
import {View} from 'react-native';
import Carousel from './Carousel';
import PasswordStrengthMeter from './PasswordStrengthMeter';

const App: React.FC = () => {
  return (
    <View>
      <PasswordStrengthMeter
        minLength={8}
        forceCapitalLetter={true}
        onChange={string => console.log('PASS', string)}
      />
    </View>
  );
};

export default App;
