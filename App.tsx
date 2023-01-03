import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import PasswordStrengthMeter from './PasswordStrengthMeter';

const App: React.FC = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <PasswordStrengthMeter
        forceNumber={true}
        forceCapitalLetter={true}
        forceSpecialChar={true}
      />
    </View>
  );
};

export default App;
