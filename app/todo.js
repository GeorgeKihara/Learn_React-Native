import React from 'react';
import { StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableHighlight,
    Button  } from 'react-native';

export class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }
  handleChange(e) {
    this.setState({newTodo: e})
  }
  handlePress(){
    const todos = [...this.state.todos, this.state.newTodo]
    this.setState({todos, newTodo: ''})
  }
  handlePress1(){
    this.setState({newTodo: ''})
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput value={this.state.newTodo} onChangeText={this.handleChange.bind(this)}></TextInput>
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <Text>Click me</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.handlePress1.bind(this)}>
          <Text>Reset</Text>
        </TouchableHighlight>
        {this.state.todos.map((todo, i) => <Text key={i}>{todo}</Text>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
