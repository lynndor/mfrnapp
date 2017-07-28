import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class NewContacts extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>New contacts screen</Text>

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


export default NewContacts