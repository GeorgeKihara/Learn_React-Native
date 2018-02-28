import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [1,2,3,5,6],
      newTodo: ''
    }
  }
  handleChange(e) {
    const { value } = e.target;
    this.setState({newTodo: value})
  }
  handlePress(){
    this.setState({newTodo: "congrats"})
  }
  handlePress1(){
    this.setState({newTodo: ''})
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput value={this.state.newTodo} onChange={this.handleChange.bind(this)}></TextInput>
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <Text>Click here</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.handlePress1.bind(this)}>
          <Text>Reset</Text>
        </TouchableHighlight>
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
