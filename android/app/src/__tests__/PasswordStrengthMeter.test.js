import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import PasswordStrengthMeter from '../../../../PasswordStrengthMeter';

describe('PasswordStrengthMeter', () => {
  it('should render the password input field and strength meter', () => {
    const {getByText, getByTestId} = render(
      <PasswordStrengthMeter
        onChange={string => console.log('PASS', string)}
      />,
    );
    expect(getByText('Enter password:')).toBeDefined();
    expect(getByTestId('password-input')).toBeDefined();
    expect(getByText('Password strength: 0/4')).toBeDefined();
    expect(getByTestId('password-strength-meter')).toBeDefined();
  });

  it('should update the password strength as the user types in the password input field', () => {
    const {getByTestId, getByText} = render(
      <PasswordStrengthMeter
        minLength={4}
        onChange={string => console.log('PASS', string)}
      />,
    );
    const passwordInput = getByTestId('password-input');
    fireEvent.changeText(passwordInput, 'test');
    expect(getByText('Password strength: 1/4')).toBeDefined();
    fireEvent.changeText(passwordInput, 'Test');
    expect(getByText('Password strength: 2/4')).toBeDefined();
    fireEvent.changeText(passwordInput, 'Test1');
    expect(getByText('Password strength: 3/4')).toBeDefined();
    fireEvent.changeText(passwordInput, 'Test1!');
    expect(getByText('Password strength: 4/4')).toBeDefined();
  });

  it('should show feedback if the password does not meet the minimum length requirement', () => {
    const {getByTestId, getByText} = render(
      <PasswordStrengthMeter
        minLength={10}
        onChange={string => console.log('PASS', string)}
      />,
    );
    const passwordInput = getByTestId('password-input');
    fireEvent.changeText(passwordInput, 'test');
    expect(
      getByText('Your password should be at least 10 characters long.\n'),
    ).toBeDefined();
  });

  it('should show feedback if the password is missing a capital letter', () => {
    const {getByTestId, getByText} = render(
      <PasswordStrengthMeter
        minLength={4}
        forceCapitalLetter={true}
        onChange={string => console.log('PASS', string)}
      />,
    );
    const passwordInput = getByTestId('password-input');
    fireEvent.changeText(passwordInput, 'test');
    expect(
      getByText(
        'Your password should contain at least one uppercase letter.\n',
      ),
    ).toBeDefined();
  });

  it('should show feedback if the password is missing a number', () => {
    const {getByTestId, getByText} = render(
      <PasswordStrengthMeter
        minLength={4}
        forceNumber={true}
        onChange={string => console.log('PASS', string)}
      />,
    );
    const passwordInput = getByTestId('password-input');
    fireEvent.changeText(passwordInput, 'test');
    expect(
      getByText('Your password should contain at least one number.\n'),
    ).toBeDefined();
  });

  it('should show feedback if the password is missing a special character', () => {
    const {getByTestId, getByText} = render(
      <PasswordStrengthMeter
        minLength={4}
        forceSpecialChar={true}
        onChange={string => console.log('PASS', string)}
      />,
    );
    const passwordInput = getByTestId('password-input');
    fireEvent.changeText(passwordInput, 'test');
    expect(
      getByText(
        'Your password should contain at least one special character.\n',
      ),
    ).toBeDefined();
  });
});
