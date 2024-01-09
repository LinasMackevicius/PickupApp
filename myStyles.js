import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  driverStyle: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBlockColor: 'black',
    borderWidth: 3,
  },

  raceInfoStyle: {
    backgroundColor: 'yellow',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
    borderBlockColor: 'black',
    borderWidth: 3,
  },

  simpleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },

  buttonPressable: {
    height: 50,
    width: 250,
    backgroundColor: 'yellow',
  },

  buttonText: {
    textAlignVertical: 'center',
    alignItems: 'flex-end',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'left',
  },

  smallButton: {
    backgroundColor: 'yellow',
    width: 50,
    borderBlockColor: 'black',
    borderWidth: 1,
  },

  driver1: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'

  }
});

export default styles;
