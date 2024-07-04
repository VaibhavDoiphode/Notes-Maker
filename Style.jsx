import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // ----------Home--------

  text: {
    fontSize: 25,
    fontWeight: '400',
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    color: 'black',
  },
  description: {
    fontSize: 22,
    padding: 5,
  },
  flatlist: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgrey',
    margin: 10,
    padding: 10,
  },
  noteContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    margin: 10,
  },
  input: {
    fontSize: 20,
    fontWeight: '400',
    backgroundColor: 'white',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottombtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  // ------------CreateNote-----------
  noteContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    margin: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: '400',
    textAlign: 'center',
  },
  input: {
    fontSize: 20,
    fontWeight: '400',
    backgroundColor: 'white',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default styles;
