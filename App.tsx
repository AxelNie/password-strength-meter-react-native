import React from 'react';
import {View} from 'react-native';
import PasswordStrengthMeter from './PasswordStrengthMeter';

const App: React.FC = () => {
  return (
    <View>
      <PasswordStrengthMeter
        minLength={2}
        forceNumber={false}
        forceCapitalLetter={false}
        forceSpecialChar={false}
        showFeedbackText={true}
        showStrengthBar={true}
      />
    </View>
  );
};

export default App;
