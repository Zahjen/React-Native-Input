import { Button, StyleSheet, View } from 'react-native';
import { EInputType } from './Input/global/enumeration/input-type';
import InputDateTime from './Input/input-date-time/input-date-time';
import { InputDateTimeComponent } from './Input/input-date-time/input-date-time-component';

let input = new InputDateTimeComponent({
  value: new Date(),
  key: 'meet_date',
  type: EInputType.DATE,
  label: 'Sélectionner une date'
})


export default function App() {
  return (
    <View style={styles.container}>
      <InputDateTime 
        date={input} 
        icon={"date"} 
        mode={"date"}    
      />

      <Button
        title='press me'
        onPress={() => {
          console.log(input.getValue.getHours())
        }}
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

