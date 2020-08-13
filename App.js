import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert, FlatList } from 'react-native';
import AddItem from './components/AddItem';
import Header from './components/Header';
import ListItem from './components/ListItem';

 const App = () => {
  const [items, setItems] = useState([
    {
      id: '1',
      text: 'Milk',
    },
    {
      id: '2',
      text: 'Eggs',
    },
    {
      id: '3',
      text: 'Bread',
    },
    {
      id: '4',
      text: 'Juice',
    },
  ]);

  const addItem = text => {
    if (!text) {
      Alert.alert(
        'No item entered',
        'Please enter an item when adding to your shopping list',
        [
          {
            text: 'Understood',
            style: 'cancel',
          },
        ],
        {cancelable: true},
      );
    } else {
      setItems(prevItems => {
        return [{id: ({items}.length +1), text}, ...prevItems];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem = {addItem}/>      
      <StatusBar style="auto" />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem
            item={item}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;