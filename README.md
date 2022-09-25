# React Native Input

## Description

Ce repo a pour but de regrouper divers inputs utilisables pour le développement d'application fait avec React Native. Ces inputs peuvent eux - même être importés et réutilisés dans d'autres projets. Pour le moment, on y retrouve les possibilités suivantes :
* Texte : Permet la saisie de texte classique.
* Email : Permet la saisie d'une adresse mail.
* Number : Permet la saisie d'un nombre, il peut s'agir d'un décimal positif, négatif, positif et négatif, d'un entier positif, négatif, positif et négatif.
* Phone : Permet la saisie d'un numéro de téléphone.
* Bouton radio : Permet une sélection via un bouton radio.
* Dropdown : Permet une sélection via un dropdown.
* DateTime: Permet la saisie d'une date, d'une heure, ou d'une date et une heure.

À noter que ces inputs possèdent les vérifications basiques que l'on peut retrouver lors de la saisie de ce genre de champs.

<img src="assets/graph-uml.svg" alt = "Diagramme UML" width = "700">

## Librairies

Les librairies nécessaires au bon fonctionnement de ces inputs sont les suivantes : 
* Librairie permettant de sélectionner une date / heure. [Repo de la librairie.](https://github.com/mmazzarolo/react-native-modal-datetime-picker)
```bash
# installation avec npm
npm i react-native-modal-datetime-picker @react-native-community/datetimepicker

# installation avec yarn
yarn add react-native-modal-datetime-picker @react-native-community/datetimepicker

# installation avec expo
expo install react-native-modal-datetime-picker @react-native-community/datetimepicker
```

* Librairie permettant des vérifications approfondies d'un numéro de téléphone. [Repo de la librairie.](https://gitlab.com/catamphetamine/libphonenumber-js)
```bash
# installation avec npm
npm install --save libphonenumber-js

# installation avec yarn
yarn add libphonenumber-js
```

* Librairie permettant d'accéder à différents icons. [Repo de la librairie.](https://github.com/oblador/react-native-vector-icons)
```bash
# installation avec npm
npm install --save react-native-vector-icons

# installation avec yarn
yarn add react-native-vector-icons
```

## Utilisation

Afin d'expliquer l'utilisation de ces différents inputs, nous prendrons comme exemple l'affichage d'un input permettant la saisie de texte. Dans un premier temps, il nous faut déclarer une instance de la classe InputTextComponent.

```ts
import { InputTextComponent } from "../Input/input-text/input-text-component";

const input: InputTextComponent = new InputTextComponent({
    key: "input_required_text",
    label: "Saisir un texte requis",
    type: EInputType.TEXT,
    placeholder: "Exemple: Bla bla bla",
    isRequired: true,
});
```

Le but est ensuite de générer le composant correpondant à l'instance de classe précédemment déclarée.

```tsx
<InputText 
    // L'input correpond à une instance la classe InputTextComponent
    input = { input }  
    labelStyle = { textTypeComponent.labelStyle }
    textInputStyle = { textTypeComponent.textInputStyle }
    placeholderTextColor = { textTypeComponent.placeholderTextColor }
    errorStyle = { textTypeComponent.errorStyle }      
/>
```

Finalement, ce composant est accompagné de différents style, comme par exemple :

```ts
const textTypeComponent = {
    labelStyle:{ 
        color: "#d0e7dd", 
        fontSize: 16,
        marginBottom: 15
    },
    textInputStyle:{
        borderColor: "#303f56",
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 15,
        color: "#f0f0f0", 
        fontSize: 16
    },
    placeholderTextColor: "#6c7b92",
    errorStyle:{
        color: "#fea98a", 
        fontSize: 16,
        marginTop: 10
    }
}
```

Le processus est le même pour chacun des inputs énoncés au début.

## Exemple

Un exemple de rendu peut être visualisé via le snack expo suivant.

<img src="assets/expo-go.svg" alt = "Diagramme UML" width = "200">