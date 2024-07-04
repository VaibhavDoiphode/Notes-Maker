import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addNote} from '../Redux/Action';
import styles from '../Style';
const CreateNote = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const dispatch = useDispatch();
  
  const [titleValid,setTitleValid]=useState()
  const [descriptionValid,setDescriptionValid]=useState()
 
  let time = new Date();
  // function timeShow(){
  //   console.log(time.toLocaleString())
  // }

  const handleCreate = () => {
    if (title =='' &&  title ==null ){
      setTitleValid(true)
    }else{
      setTitleValid(false)
    }
    
    if(description  =='' && description  ==null){
     setDescriptionValid(true)

    }else{
      setDescriptionValid(false)
    }

    if(titleValid == false && descriptionValid ==false){
      if(title !='' && description  !='' ){
        let notes = {
          id: Math.random()+10,
          title: title,
          description: description,
          time:time.toLocaleString()
        };
        dispatch(addNote(notes));
      navigation.navigate('Home');
      console.log('Data From CREATENOTE', notes);
      }else{
        alert('Please enter Valid Input')
      }  
  };

}
  return (
    <View>
      <Text style={styles.text}>CreateNote</Text>
      <View style={styles.noteContainer}>
        <TextInput
          placeholder="Title"
          style={styles.input}
          maxLength={12}
          // value={title}
          onChangeText={(v)=>setTitle(v)}
        />
        <TextInput
          placeholder="Description"
          style={styles.input}
          // value={description}
          multiline={true}
          onChangeText={(v)=>setdescription(v)}
        />
      </View>
      <View style={styles.btnContainer}>
      <Button color={'green'} title='Create Note' onPress={() => handleCreate()}/>
        <Button color={'red'} title='Cancle' onPress={() => navigation.navigate('Home')}/>

      </View>
    </View>
  );
};

export default CreateNote;
