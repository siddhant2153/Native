// FormComponentStyles.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: 'red',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  submitButtonText: {
    color: 'white',
  },
});
