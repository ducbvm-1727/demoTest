import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class Main extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>{'My name is ' + `${this.props.name}`}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
