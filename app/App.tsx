import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Example } from './src/example/example-data';
import Line from './src/Input/global/element/line';
import Spacer from './src/Input/global/element/spacer';
import { InputGenerator } from './src/service/input-generator';

const App = () => {

  let dateTimeData = Example.getInstance().getDateTimeData();
  let textData = Example.getInstance().getTextData();
  let emailData = Example.getInstance().getEmailData();
  let numberData = Example.getInstance().getNumberData();

  return (
    <SafeAreaView style = { styles.container }>
      <ScrollView>
        <View style = { styles.view }>
      
          <Text style = { styles.title }>
            Saisie de date / heure
          </Text>

          <Line color = "#b4b4b4" margin = {{ top: 10 }}/>

          <Spacer height = { 20 }/>

          { dateTimeData.map((data) => {
            return <View key = { data.getKey }>
              { InputGenerator.getInstance().renderDateTimeInput(data) }
              <Spacer height = { 20 }/>
            </View>
          }) }

          <Spacer height = { 40 }/>



          <Text style = { styles.title }>
            Saisie de Texte
          </Text>

          <Line color = "#b4b4b4" margin = {{ top: 10 }}/>

          <Spacer height = { 20 }/>

          { textData.map((data) => {
            return <View key = { data.getKey }>
              { InputGenerator.getInstance().renderTextInput(data) }
              <Spacer height = { 20 }/>
            </View>
          }) }

          <Spacer height = { 40 }/>



          <Text style = { styles.title }>
            Saisie d'une addresse e-mail
          </Text>

          <Line color = "#b4b4b4" margin = {{ top: 10 }}/>

          <Spacer height = { 20 }/>

          { InputGenerator.getInstance().renderEmailInput(emailData) }

          <Spacer height = { 40 }/>



          <Text style = { styles.title }>
            Saisie de Nombre
          </Text>

          <Line color = "#b4b4b4" margin = {{ top: 10 }}/>

          <Spacer height = { 20 }/>

          { numberData.map((data) => {
            return <View key = { data.getKey }>
              { InputGenerator.getInstance().renderNumberInput(data) }
              <Spacer height = { 20 }/>
            </View>
          }) }

          <Spacer height = { 40 }/>
        
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#303f56',
  },
  view: {
      paddingVertical: 30,
      paddingHorizontal: 30
  },
  title: {
      color: "#f0f0f0",
      fontWeight: "bold",
      fontSize: 20
  }
});

export default App;

