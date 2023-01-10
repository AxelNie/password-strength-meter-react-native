import React, {useState, useEffect} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

interface PasswordStrengthMeterProps {
  minLength?: number;
  forceNumber?: boolean;
  forceCapitalLetter?: boolean;
  forceSpecialChar?: boolean;
  onChange: (s: string) => void;
}

const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = ({
  minLength = 8,
  forceNumber = false,
  forceCapitalLetter = false,
  forceSpecialChar = false,
  onChange,
}) => {
  const [score, setScore] = useState(0);
  const [password, setPassword] = useState('');
  const [passwordMissingCapitalLetter, setPasswordMissingCapitalLetter] =
    useState(forceCapitalLetter);
  const [passwordMissingNumber, setPasswordMissingNumber] =
    useState(forceNumber);
  const [
    passwordMissingNumberSpecialChar,
    setPasswordMissingNumberSpecialChar,
  ] = useState(forceSpecialChar);

  const styles = StyleSheet.create({
    title: {
      fontWeight: 'bold',
      color: 'black',
    },
    innerText: {
      color: 'red',
    },
    inputField: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      paddingTop: 10,
      paddingBottom: 10,
    },
    barContainer: {
      height: 8,
      backgroundColor: 'lightgrey',
      borderRadius: 10,
      marginTop: 10,
    },
    bar: {
      height: 8,
      borderRadius: 10,
    },
  });

  useEffect(() => {
    checkPasswordStrength(password);
  }, [password]);

  function checkPasswordStrength(password: string) {
    setPassword(password);
    setPasswordMissingNumberSpecialChar(forceSpecialChar);
    setPasswordMissingNumber(forceNumber);
    setPasswordMissingCapitalLetter(forceCapitalLetter);
    let score = 0;

    if (password.match(/[a-z]/)) {
      score += 1;
    }
    if (password.match(/[A-Z]/)) {
      setPasswordMissingCapitalLetter(false);
      score += 1;
    }
    if (password.match(/\d+/)) {
      setPasswordMissingNumber(false);
      score += 1;
    }
    if (password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)) {
      setPasswordMissingNumberSpecialChar(false);
      score += 1;
    }

    setScore(score);

    if (passwordMissingNumberSpecialChar) {
      setScore(0);
    }
    if (passwordMissingNumber) {
      setScore(0);
    }
    if (passwordMissingCapitalLetter) {
      setScore(0);
    }
    if (password.length < minLength) {
      setScore(0);
    }
  }

  function getFeedbackText() {
    let feedbackText = '';
    if (password.length < minLength) {
      feedbackText += `Your password should be at least ${minLength} characters long.\n`;
    }
    if (passwordMissingCapitalLetter) {
      feedbackText +=
        'Your password should contain at least one uppercase letter.\n';
    }
    if (passwordMissingNumber) {
      feedbackText += 'Your password should contain at least one number.\n';
    }
    if (passwordMissingNumberSpecialChar) {
      feedbackText +=
        'Your password should contain at least one special character.\n';
    }

    return feedbackText;
  }

  return (
    <View>
      <Text style={styles.title}>Enter password:</Text>
      <TextInput
        testID="password-input"
        onChangeText={input => {
          onChange(input);
          setPassword(input);
        }}
        value={password}
        secureTextEntry={true}
        style={styles.inputField}
      />
      <Text>Password strength: {score}/4</Text>
      <View style={styles.barContainer} testID="password-strength-meter">
        <View
          style={[
            styles.bar,
            {
              width: `${(score / 4) * 100}%`,
              backgroundColor: getColor(score),
            },
          ]}
        />
      </View>
      <Text>{getFeedbackText()}</Text>
    </View>
  );
};

function getColor(score: number) {
  if (score == 0) {
    return 'gray';
  } else if (score == 1) {
    return 'red';
  } else if (score == 2) {
    return 'yellow';
  } else if (score == 3) {
    return 'blue';
  } else {
    return 'green';
  }
}

export default PasswordStrengthMeter;
