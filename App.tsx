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
      <Carousel
        imgUrls={[
          'https://d3aux7tjp119y2.cloudfront.net/images/Visualiseringscenter_21-CMSTemplate.width-1650.jpg',
          'https://www.prologis.se/sites/sweden/files/images/2022/05/norkoping_sweden_web.jpeg',
          'https://www.christineabroad.com/images//2020/04/att-go%CC%88ra-i-norrko%CC%88ping.jpg',
        ]}
      />
    </View>
  );
};

export default App;
