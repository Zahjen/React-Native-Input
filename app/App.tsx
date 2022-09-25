import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Example } from './src/example/example-data';
import { color } from './src/example/variables/color';
import Spacer from './src/Input/global/element/spacer';
import { InputDateTimeComponent } from './src/Input/input-date-time/input-date-time-component';
import { InputDropdownComponent } from './src/Input/input-dropdown/input-dropdown-component';
import { InputEmailComponent } from './src/Input/input-email/input-email-component';
import { InputNumberComponent } from './src/Input/input-number/input-number-component';
import { InputPhoneComponent } from './src/Input/input-phone/input-phone-component';
import { InputRadioButtonComponent } from './src/Input/input-radio-button/input-radio-button-component';
import { InputTextComponent } from './src/Input/input-text/input-text-component';
import { InputGenerator } from './src/service/input-generator';

interface CardProps {
  title: string,
  children: any
}

const Card: React.FC<CardProps> = (props: CardProps): JSX.Element => {
  return <View>
    <Text style = { styles.title }>
      { props.title }
    </Text>
    <Spacer height = { spacer.input }/>

    <View style = { styles.card }>
      { props.children }
    </View>

    <Spacer height = { spacer.card }/>
  </View>
}

const App = () => {

  let dateTimeData: InputDateTimeComponent[] = Example.getInstance().getDateTimeData();
  let textData: InputTextComponent[] = Example.getInstance().getTextData();
  let emailData: InputEmailComponent = Example.getInstance().getEmailData();
  let numberData: InputNumberComponent[] = Example.getInstance().getNumberData();
  let dropdownData: InputDropdownComponent = Example.getInstance().getDropdownData();
  let radioButtonData: InputRadioButtonComponent[] = Example.getInstance().getRadioButtonData();
  let phoneData: InputPhoneComponent = Example.getInstance().getPhoneData();

  return (
    <SafeAreaView style = { styles.container }>
      <KeyboardAvoidingView
        style = {{
          flex: 1,
          alignItems: 'center'
        }}
        behavior = "position"
      >
        <ScrollView>
          <View style = { styles.view }>
            <Card title = "Saisie de date / heure">
              { dateTimeData.map((data: InputDateTimeComponent) => {
                return <View key = { data.getKey }>
                  { InputGenerator.getInstance().renderDateTimeInput(data) }
                  <Spacer height = { spacer.input }/>
                </View>
              }) }
            </Card>

            <Card title = "Saisie de Texte">
              { textData.map((data: InputTextComponent) => {
                return <View key = { data.getKey }>
                  { InputGenerator.getInstance().renderTextInput(data) }
                  <Spacer height = { spacer.input }/>
                </View>
              }) }
            </Card>

            <Card title = "Saisie d'une addresse e-mail">
              { InputGenerator.getInstance().renderEmailInput(emailData) }
            </Card>

            <Card title = "Saisie de Nombre">
              { numberData.map((data: InputNumberComponent) => {
                return <View key = { data.getKey }>
                  { InputGenerator.getInstance().renderNumberInput(data) }
                  <Spacer height = { spacer.input }/>
                </View>
              }) }
            </Card>

            <Card title = "Saisie via un dropdown">
              { InputGenerator.getInstance().renderDropdownInput(dropdownData) }
            </Card>

            <Card title = "Saisie via un bouton radio">
              { radioButtonData.map((data: InputRadioButtonComponent) => {
                return <View key = { data.getKey }>
                  { InputGenerator.getInstance().renderRadioButtonInput(data) }
                  <Spacer height = { spacer.input }/>
                </View>
              }) }
            </Card>

            <Card title = "Saisie d'un numéro de téléphone">
              { InputGenerator.getInstance().renderPhoneInput(phoneData) }
            </Card>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: color.background,
  },
  view: {
      paddingVertical: 30,
      paddingHorizontal: 20
  },
  title: {
      color: color.text,
      fontWeight: "bold",
      fontSize: 20
  },
  card: {
    backgroundColor: color.primary,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 15
  }
});

const spacer = {
  input: 20,
  card: 40
}

export default App;