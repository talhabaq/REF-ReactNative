import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
const App = () => {
  const input = useRef()
  const updateInput = () => {
    input.current.focus()
  }
  return (
    <View style={styles.container}>
      <TextInput ref={input} style={styles.input} placeholder="Enter Name" />
      <TextInput style={styles.input} placeholder="Enter Password" />
      <Button title='Update Input' onPress={() => updateInput()} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  input: {
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 10,
    marginBottom: 10
  }
})
export default App
