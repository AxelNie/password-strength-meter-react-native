import React from 'react';
import {View} from 'react-native';
import PasswordStrengthMeter from './PasswordStrengthMeter';

const App: React.FC = () => {
  return (
    <View>
      <PasswordStrengthMeter
        forceNumber={false}
        forceCapitalLetter={false}
        forceSpecialChar={false}
        showFeedbackText={true}
        showStrengthBar={true}
        minLength={10}
        onChange={(s: string) => console.log('PASS', s)}
      />
    </View>
  );
};

/*
<PasswordStrengthMeter
        forceNumber={true}
        forceCapitalLetter={true}
        forceSpecialChar={true}
      />
*/

export default App;
