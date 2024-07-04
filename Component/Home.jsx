import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Button,
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  storeNote,
  deleteNote,
  deleteSingleToDo,
  updateToDo,
} from '../Redux/Action';
import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import styles from '../Style';
import ModalComp from './ModalComp';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [delModalVisibility,setdelModalVisibility]=useState(false)
  const noteData = useSelector(state => state.addNoteReducer.allNotes);
  
  let time = new Date();

  function timeShow(){
    console.log(time.toLocaleString())
  }

  // console.log("show data from HOMEPAGE",JSON.stringify(noteData));
  useFocusEffect(
    React.useCallback(() => {
      storageData();
    }, []),
  );

  const storageData = async () => {
    try {
      const response = await AsyncStorage.getItem('notesData');
      let newData = JSON.parse(response);
      if (newData != null) {
        dispatch(storeNote(newData));
      }
    } catch (error) {
      console.log('show error from ASYNCSTORAGE', error);
    }
  };

  const clearAsyncStorage = async () => {
    await AsyncStorage.clear();
    dispatch(deleteNote());
    setdelModalVisibility(false)
  };
  
 

  return (
    <View style={{backgroundColor:'white'}}>
      <View style={[styles.btnContainer,{margin:10}]}>
      {/* <Button color="#2E8B57" title='time' onPress={() => timeShow()}/> */}
        <Button color="#2E8B57" title='Add Note' onPress={() => navigation.navigate('Note')}/>
        <Button color='#D70040' title='Remove All' onPress={() => setdelModalVisibility(true)}/>

        <Modal visible={delModalVisibility} style={{flex:1,alignItems:'center'}}>
          <View style={{flex:0.4,margin:10,borderColor:'lightgrey',marginTop:300,elevation:2}}>
            <View style={{alignItems:'center'}}>
              <Text style={{fontSize:30,textAlign:'center',marginTop:20}}>You want to Remove All </Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
            <View style={{ height: 100, width:150, marginTop: 80 }}>
            <Button  title="Yes" color="#2E8B57" onPress={() => clearAsyncStorage()}/>
            </View>
              
            <View style={{ height: 100, width:150, marginTop: 80 }}>
            <Button title="No" color='gold' onPress={() => setdelModalVisibility(false)} />
            </View> 
            </View>
          </View>
        </Modal>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Note')}>
          <Text style={{...styles.text, color: 'blue'}}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{...styles.text, color: 'red'}}
            onPress={() => clearAsyncStorage()}>
            Clear
          </Text>
        </TouchableOpacity> */}

      </View>
      <View style={{height: 700}}>
        <FlatList
          data={noteData}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <ModalComp item={item}/>
            );
          }}
        />
      </View>

      {/* MODAL */}

      
    </View>
  );
};

export default Home;
