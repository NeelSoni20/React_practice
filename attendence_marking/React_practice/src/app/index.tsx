import React from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';

// Custom Component
const Button = ({ title, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed, // Visual feedback on touch
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome</Text>

      {/* Reusing the Button component */}
      <Button
        title="Login"
        onPress={() => Alert.alert('Notice', 'Login Pressed')}
      />
      <Button
        title="Forgot Password?"
        onPress={() => Alert.alert('Notice', 'Forgot Password')}
      />
      <Button
        title="Login to Google"
        onPress={() => Alert.alert('Notice', 'Login to Google')}
      />
      <Button 
      title= "Sign Up"
      onPress={() => Alert.alert('Notice', 'Sign up to Expo')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 8,
    width: '80%',
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default App;