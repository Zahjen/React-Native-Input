import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, Button } from 'react-native';
import { Example } from './src/example/example-data';
import { color } from './src/example/variables/color';
import Spacer from './src/Input/global/element/spacer';
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

const errorHandle = (setError: React.Dispatch<React.SetStateAction<string>>, radioButtonData: any) => {
  try {
    radioButtonData.map((data: any) => {
      data.validator();
    })
  } catch (e: any) {
    setError(e.message)
  }
}

const App = () => {

  let dateTimeData = Example.getInstance().getDateTimeData();
  let textData = Example.getInstance().getTextData();
  let emailData = Example.getInstance().getEmailData();
  let numberData = Example.getInstance().getNumberData();
  let dropdownData = Example.getInstance().getDropdownData();
  let radioButtonData = Example.getInstance().getRadioButtonData();
  let phoneData = Example.getInstance().getPhoneData();

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
              { dateTimeData.map((data) => {
                return <View key = { data.getKey }>
                  { InputGenerator.getInstance().renderDateTimeInput(data) }
                  <Spacer height = { spacer.input }/>
                </View>
              }) }
            </Card>

            <Card title = "Saisie de Texte">
              { textData.map((data) => {
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
              { numberData.map((data) => {
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
              { radioButtonData.map((data) => {
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