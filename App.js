import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [1,2,3]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput/>
        {this.state.todos.map(todo => <Text>{todo}</Text>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
