import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { styles } from './FormStyle'; // Import the styles

function FormComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSubmit = () => {
    // Handle form submission here, e.g., send data to a server or perform validation
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={handleNameChange}
      />

      <Text style={styles.labelText}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />

      <Button
        title="Submit"
        onPress={handleSubmit}
        style={styles.submitButton}
        color="blue"
      />
    </View>
  );
}

export default FormComponent;
