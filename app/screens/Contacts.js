import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import {contacts} from '../config/data'
class Contacts extends React.Component {
  render() {
    return (
        <FlatList
            data={contacts}
            renderItem={({item}) => <View><Text>{item.email}</Text></View>}
            keyExtractor={(item) => item.email}
        />
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


export default Contacts