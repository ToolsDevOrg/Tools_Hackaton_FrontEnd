  import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ icon, style, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[
        styles.container,
        isFocused && styles.inputFocused,
      ]}
      >
      {icon && <View style={styles.icon}>{icon}</View>}
      <View style={styles.disableInput}/>
      <TextInput
        style={[
          styles.input,
          style,
        ]}
        placeholderTextColor='#7F7F7F'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 0.8,
    borderRadius: 20,
    height: 52,
    paddingHorizontal: 14,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  disableInput: {
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    height: "100%",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24,
    marginRight: 10,
  },
  inputFocused: {
    borderColor: "#00C0C9",
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontWeight: 500,
    letterSpacing: -0.4,
    color: '#212121',
  },
  
});

export default Input;