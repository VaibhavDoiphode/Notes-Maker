import {Button, Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import styles from '../Style';
import {useDispatch} from 'react-redux';
import {deleteSingleToDo, updateToDo} from '../Redux/Action';
const ModalComp = ({item}) => {
  const [modalVisible, setModalVisible] = useState(false);
  // const [updateId, setupdateId] = useState(null);
  const [newTitle, setnewTitle] = useState('');
  const [newDescription, setnewDescription] = useState('');
  const[newTime,setNewTime]=useState('');

  let time = new Date();
  function timeShow(){
    console.log(time.toLocaleString())
  }
  const dispatch = useDispatch();
  const [delModalVisibility,setdelModalVisibility]=useState(false)

  function deleteToDo(id) {
    dispatch(deleteSingleToDo(id));
  }
  function updateToDoHome(item) {
    console.log('in update tod --->', item);
    dispatch(updateToDo(item));
  }
  return (
    <View>
    <View style={[styles.flatlist,{elevation:4}]}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={{}}>{item.time}</Text>
      </View>
      
      <Text style={styles.description}>{item.description}</Text>
      
      <View style={styles.bottombtnContainer}>
        <Button title="Remove" onPress={() => setdelModalVisibility(true)} color="#2E8B57"/>
        <Modal visible={delModalVisibility} style={{flex:1,alignItems:'center'}}>
          <View style={{flex:0.4,margin:20,borderColor:'lightgrey',justifyContent:'space-evenly',marginTop:300,elevation:2}}>
            <View>
              <Text style={{fontSize:30,marginTop:40,textAlign:'center'}}>You want to delete </Text>
            </View>
            {/* <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
              <Button  title="Yes" onPress={() => deleteToDo(item.id)}/>
              <Button title="No" onPress={() => setdelModalVisibility(false)} />
            </View> */}
            <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:50}}>
            <View style={{ height: 100, width:120, marginTop: 10 }}>
            <Button
                title="Yes"
                color="#2E8B57"
                onPress={() => deleteToDo(item.id)}
              />
            </View>
              
            <View style={{ height: 100, width:120, marginTop: 10 }}>
            <Button title="Cancle" color="gold" onPress={() => setdelModalVisibility(false)} />
            </View> 

            </View>
          </View>
        </Modal>

        <Button
          title="Update"
          color={'gold'}
          onPress={() => {
            setnewTitle(item.title);
            setnewDescription(item.description);
            setNewTime(time.toLocaleString())
            setModalVisible(true);
            console.log(item.id, item.title);
          }}
        />
      </View>

      <View>
        <Modal visible={modalVisible}>
          <View
            style={{ flex:1,  justifyContent: 'center', elevation:2}}>
                <View style={{margin:20, justifyContent: 'center', alignItems: 'center',elevation:2,borderColor:'lightgrey'}}>
            <Text style={{fontSize: 30, margin: 10, fontWeight: '500',borderBottomColor:'lightblue',borderBottomWidth:2}}>
              Want To Update 
            </Text>
            <View >
              <TextInput
                style={{
                  width: 300,
                  backgroundColor: 'whitesmoke',
                  fontSize: 22,
                  margin: 5,
                }}
                value={newDescription}
                multiline={true}
                onChangeText={v => setnewDescription(v)}
              />
              <TextInput
                style={{
                  width: 300,
                  backgroundColor: 'whitesmoke',
                  fontSize: 23,
                  margin: 5,
                }}
                value={newTitle}
                onChangeText={v => setnewTitle(v)}
              />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',width:300}}>
            <View style={{ height: 100, width:120, marginTop: 10 }}>
            <Button
                title="Update"
                color="#2E8B57"
                onPress={() => {
                  setModalVisible(false);
                  updateToDoHome({
                    id: item.id,
                    title: newTitle,
                    description: newDescription,
                    time:time.toLocaleString()
                  });
                }}
              />
            </View>
              
            <View style={{ height: 100, width:120, marginTop: 10 }}>
            <Button title="Cancle" color="gold" onPress={() => setModalVisible(false)} />
            </View> 

            </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
    </View>
  );
};

export default ModalComp;
