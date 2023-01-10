import React, {useState} from 'react';
import {View} from 'react-native';
import PasswordStrengthMeter from './PasswordStrengthMeter';

const App: React.FC = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <PasswordStrengthMeter
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
