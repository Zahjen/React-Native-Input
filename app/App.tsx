import { StyleSheet, View } from 'react-native';
import { EInputType } from './Input/global/enumeration/input-type';
import { Answer } from './Input/global/input/answer';
import InputDropdown from './Input/input-dropdown/input-dropdown';
import { InputDropdownComponent } from './Input/input-dropdown/input-dropdown-component';
import InputRadioButton from './Input/input-radio-button/input-radio-button';
import { InputRadioButtonComponent } from './Input/input-radio-button/input-radio-button-component';

let input = new InputDropdownComponent({
  key: "address_visibleLodgingState",
  label: "État visible du logement",
  type: EInputType.RADIO_COLUMN,
  title: 'un titre de dropdown',
  value: new Answer({
      id: 0,
      key: "Select",
      value: "Slect"
  }),
  answers: [
      new Answer({
          id: 1,
          key: "Occupé",
          value: "Occupé"
      }),
      new Answer({
          id: 2,
          key: "Abandonné",
          value: "Abandonné"
      }),
      new Answer({
          id: 3,
          key: "Indeterminé",
          value: "Indeterminé"
      })
  ]
})


export default function App() {
  return (
    <View style={styles.container}>
      <InputDropdown 
        input={input} 
        selectedItemBackgroundColor = {'green'}
        selectedItemBorderColor = {"red"}
        listHeaderComponentStyleBackgroundColor = {"white"}
        modalBackgroundColor = {"white"}
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

