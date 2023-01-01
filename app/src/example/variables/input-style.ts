import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { EInputType } from "../../enumeration/input-type";
import { InputRadioButtonComponent } from "../../input-set/input-radio-button/input-radio-button-component";
import { color } from "./color";

/**
 * Style relatif à un composant permettant l'affichage d'une erreur.
 */
export const errorComponent = {
    container: { 
        backgroundColor: color.error,
        padding: 10,
        borderRadius: 7
    },

    text: {
        color: color.text
    }
}

/**
 * Style relatif à un composant permettant l'affichage d'une date / heure.
 */
export const dateTimeComponent = {
    labelTextStyle: { 
        color: color.secondary, 
        fontSize: 16 
    },
    spaceLabelPicker: 15,
    openDatePickerPressableStyle: { 
        borderColor: color.background,
        borderWidth: 2,
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    } as StyleProp<ViewStyle>,
    datePickerTextStyle: {
        color: color.text,
        fontSize: 16 
    },
    iconPressableStyle: {
        color: color.secondary,
        fontSize: 18 
    },
    confirmTextButtonColor: color.confirm,
    confirmButtonBackgroundColor: color.background,
    cancelButtonBackgroundColor: color.background,
    cancelTextButtonColor: color.cancel
}

/**
 * Style relatif à un composant permettant l'affichage d'une texte (ici il peut s'agir d'un texte, d'une email ou d'une saisie de nombre).
 */
export const textTypeComponent = {
    labelStyle:{ 
        color: color.secondary, 
        fontSize: 16,
        marginBottom: 15
    },
    textInputStyle:{
        borderColor: color.background,
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 15,
        color: color.text, 
        fontSize: 16
    },
    placeholderTextColor: color.tertiary,
    errorStyle:{
        color: color.error, 
        fontSize: 16,
        marginTop: 10
    }
}

/**
 * Style relatif à un composant permettant l'affichage d'un dropdown.
 */
export const dropdownComponent = {
    labelStyle: { 
        color: color.secondary, 
        fontSize: 16,
        marginBottom: 15
    },
    itemTextStyle: {
        color: color.text
    },
    listHeaderComponentStyle: { 
        backgroundColor: color.background, 
        paddingBottom: 15 
    },
    inputDropdownCurrentSelectionTextStyle: {
        textAlign: "center",
        color: color.secondary,
    } as StyleProp<TextStyle>,
    errorStyle: {
        color: color.error, 
        fontSize: 16,
        marginTop: 15
    },
    modalContainer: {
        width: "100%"
    },
    styleModal: {
        height: "70%",
        marginTop: "auto",
        backgroundColor: color.background,
        paddingHorizontal: 30,
        paddingTop: 40,
        paddingBottom: 30,
        borderRadius: 50
    },
    closeModalTextStyle: {
        color: color.error,
        marginRight: 20
    },
    titleModalTextStyle: {
        color: color.text,
    },
    searchBarStyleContainer: {
        borderColor: color.text,
        borderWidth: 0.5,
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 15
    },
    searchBarStyleText: {
        color: color.text
    },
    styleOpenModal: {
        borderColor: color.background,
        borderWidth: 2,
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    openModalTextStyle: {
        color: color.text,
        fontSize: 16
    },
}

/**
 * Style relatif à un composant permettant l'affichage d'un bouton radio.
 */
export const radioButtonComponent = (input: InputRadioButtonComponent) => {
    return {
        labelStyle: { 
            color: color.secondary, 
            fontSize: 16,
            marginBottom: 15
        },
        selectedRadioColor: color.secondary,  
        unselectedRadioColor: color.tertiary,
        radioTextStyle: {
            color: color.text
        },
        margin: {
            bottom: (input.getType === EInputType.RADIO_COLUMN)
                ? 15 
                : 0
        },
        errorStyle: {
            color: color.error, 
            fontSize: 16,
            marginTop: (input.getType === EInputType.RADIO_COLUMN)
                ? 0 
                : 15
        },
    }
}

/**
 * Style relatif à un composant permettant l'affichage d'un numéro de téléphone.
 */
export const phoneComponent = {
    labelStyle: { 
        color: color.secondary, 
        fontSize: 16,
        marginBottom: 15
    },
    itemTextStyle: {
        color: color.text
    },
    listHeaderComponentStyle: { 
        backgroundColor: color.background, 
        paddingBottom: 15 
    },
    inputDropdownCurrentSelectionTextStyle: {
        textAlign: "center",
        color: color.secondary,
    } as StyleProp<TextStyle>,
    errorStyle: {
        color: color.error, 
        fontSize: 16,
        marginTop: 15
    },
    styleModal: {
        height: "70%",
        marginTop: "auto",
        backgroundColor: color.background,
        paddingHorizontal: 30,
        paddingTop: 40,
        paddingBottom: 30,
        borderRadius: 50
    },
    closeModalTextStyle: {
        color: color.error,
        marginRight: 20
    },
    titleModalTextStyle: {
        color: color.text,
    },
    searchBarStyleContainer: {
        borderColor: color.text,
        borderWidth: 0.5,
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 15
    },
    searchBarStyleText: {
        color: color.text
    },
    styleOpenModal: {
        borderColor: color.background,
        borderWidth: 2,
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    openModalTextStyle: {
        color: color.text,
        fontSize: 16
    },
    textInputPhoneStyle: {
        borderColor: color.background,
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 15,
        color: color.text, 
        fontSize: 16,
        flex: 1
    },
    placeholderPhoneTextColor: color.tertiary
}


export const radioStyleContent = (type: any): StyleProp<ViewStyle> => {
    if (type === EInputType.RADIO_ROW) {
        return {
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "flex-start"
        }
    }
}