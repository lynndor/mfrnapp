import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Details extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Details screen</Text>

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


export default Details