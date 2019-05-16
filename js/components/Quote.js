import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Quote extends Component {
  render() {
    const { text, author } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.author}>&mdash; {author}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 32,
    fontStyle: 'italic',
    margin: 10,
    textAlign: 'center',
    textShadowOffset: { width: 5, height: 5 },
    textShadowColor: '#bbb',
    textShadowRadius: 10,
  },
  author: {
    fontSize: 20,
    textAlign: 'right',
  },
});
