import { Button, StyleSheet, View } from 'react-native';
import { EInputType } from './Input/global/enumeration/input-type';
import InputDateTime from './Input/input-date-time/input-date-time';
import { InputDateTimeComponent } from './Input/input-date-time/input-date-time-component';
import InputPhone from './Input/input-phone/input-phone';
import { InputPhoneComponent } from './Input/input-phone/input-phone-component';

let input = new InputPhoneComponent({
  key: "contact_tel",
  label: "Numéro de téléphone",
  type: EInputType.TEL,
  placeholder: "Exemple: 06 06 06 06 06",
  isRequired: false,
  keyboardType: "phone-pad"
})


export default function App() {
  return (
    <View style={styles.container}>
      <InputPhone 
        input={input} 
      />

      <Button
        title='press me'
        onPress={() => {
          console.log(JSON.stringify(input, undefined, 4))
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

