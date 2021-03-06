import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
//import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({
  item,
  deleteItem,
  editItem,
  isEditing,
  editItemDetail,
  saveEditItem,
  handleEditChange,
  itemChecked,
  checkedItems,
}) => {
  const checked = checkedItems.filter(
    checkedItem => checkedItem.id === item.id,
  );
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
      {isEditing && editItemDetail.id === item.id ? (
          <TextInput
            placeholder="Edit Item..."
            style={styles.editItemInput}
            onChangeText={handleEditChange}
          />
        ) : (
          <Text
            onPress={() => itemChecked(item.id, item.text)}
            style={
              checked.length ? styles.checkedItemText : styles.listItemText
            }>
            {item.text}
          </Text>
        )}
        <View style={styles.iconView}>
          {isEditing && editItemDetail.id === item.id ? (
            <Button
              name="save"
              size={20}
              color="green"
              title="Save"
              onPress={() => saveEditItem(item.id, item.text)}
            />
          ) : (
            !checked.length && (
              <Button
                name="pencil"
                size={20}
                color="blue"
                title="Edit"
                onPress={() => editItem(item.id, item.text)}
              />
            )
          )}
          <Button
            name="remove"
            size={20}
            color="firebrick"
            title="delete"
            onPress={() => deleteItem(item.id)}
          />          
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    listItem: {
      padding: 15,
      backgroundColor: '#f8f8f8',
      borderBottomWidth: 1,
      borderColor: '#eee',
    },
    listItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    listItemText: {
      fontSize: 18,
    },
    checkedItemText: {
      fontSize: 18,
      textDecorationLine: 'line-through',
      color: 'green',
    },
    iconView: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      
    },
    editItemInput: {
      padding: 0,
      fontSize: 18,
    },
  });
  
  export default ListItem;
  