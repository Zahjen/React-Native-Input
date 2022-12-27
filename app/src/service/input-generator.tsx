import React from "react";
import { Text, View } from "react-native";
import { EInputType } from "../enumeration/input-type";
import InputDateTime from "../input-set/input-date-time/input-date-time";
import { InputDateTimeComponent } from "../input-set/input-date-time/input-date-time-component";
import InputDropdown from "../input-set/input-dropdown/input-dropdown";
import { InputDropdownComponent } from "../input-set/input-dropdown/input-dropdown-component";
import InputEmail from "../input-set/input-email/input-email";
import { InputEmailComponent } from "../input-set/input-email/input-email-component";
import InputNumber from "../input-set/input-number/input-number";
import { InputNumberComponent } from "../input-set/input-number/input-number-component";
import InputPhone from "../input-set/input-phone/input-phone";
import { InputPhoneComponent } from "../input-set/input-phone/input-phone-component";
import InputRadioButton from "../input-set/input-radio-button/input-radio-button";
import { InputRadioButtonComponent } from "../input-set/input-radio-button/input-radio-button-component";
import InputText from "../input-set/input-text/input-text";
import { InputTextComponent } from "../input-set/input-text/input-text-component";
import { dateTimeComponent, dropdownComponent, errorComponent, phoneComponent, radioButtonComponent, radioStyleContent, textTypeComponent } from "../example/variables/input-style";

const ERROR = "Oups... Un problème est survenu lors de la génération du Composant! Vérifiez l'input entré!";

export class InputGenerator {

    // ----------------
    // Déclaration d'attribut
    // ----------------

    private static _instance: InputGenerator;

    // ----------------
    // Constructeur
    // ----------------

    private constructor() { }

    // ----------------
    // Récupération de l'instance de la classe InputGenerator 
    // pour l'implémentation du design pattern Singleton
    // ----------------

    /**
     * Méthode permettant de générer une unique instance de la classe InputGenerator à l'aide du pattern Singleton.
     * 
     * @returns Une instance de la classe InputGenerator.
     */
    public static getInstance() : InputGenerator {
        if (!InputGenerator._instance) {
            InputGenerator._instance = new InputGenerator();
        }

        return InputGenerator._instance;
    }

    // ----------------
    // Méthode
    // ----------------

    /**
     * Méthode permettant d'afficher un message indiquant si un problème est survenu.
     * 
     * @returns Message d'erreur
     */
    public renderErrorComponent(error: string = ERROR): JSX.Element {
        return <View style = { errorComponent.container }>
            <Text style = { errorComponent.text }>
                { error }
            </Text>
        </View>
    }

    /**
     * Méthode permettant d'afficher un input de type date. La méthode se charge de déterminer si c'est une date, une heure, ou une date / heure à saisir.
     * 
     * @param input Instance de classe InputDateTimeComponent.
     * @returns Affiche un input de type texte.
     */
    public renderDateTimeInput(input: InputDateTimeComponent): JSX.Element {
        let mode!: "date" | "time" | "datetime" | undefined;
        let icon: string = "date";

        switch (input.getType) {
            case EInputType.DATE :
                mode = "date";
                break;
            
            case EInputType.TIME :
                mode = "time";
                icon = "clock";
                break;
            
            case EInputType.DATETIME :
                mode = "datetime";
                break;

            default :
                return this.renderErrorComponent();
        }

        return (
            <InputDateTime
                date = { input }
                mode = { mode }
                icon = { icon }
                labelTextStyle = { dateTimeComponent.labelTextStyle }
                spaceLabelPicker = { dateTimeComponent.spaceLabelPicker }
                openDatePickerPressableStyle = { dateTimeComponent.openDatePickerPressableStyle }
                datePickerTextStyle = { dateTimeComponent.datePickerTextStyle }
                iconPressableStyle = { dateTimeComponent.iconPressableStyle }
                confirmTextButtonColor = { dateTimeComponent.confirmTextButtonColor }
                confirmButtonBackgroundColor = { dateTimeComponent.confirmButtonBackgroundColor }
                cancelButtonBackgroundColor = { dateTimeComponent.cancelButtonBackgroundColor }
                cancelTextButtonColor = { dateTimeComponent.cancelTextButtonColor }
            />
        )
    }

    /**
     * Méthode permettant d'afficher un input de type text.
     * 
     * @param input Instance de classe InputTextComponent.
     * @returns Affiche un input de type texte.
     */
     public renderTextInput(input: InputTextComponent): JSX.Element {
        return <InputText 
            input = { input }  
            labelStyle = { textTypeComponent.labelStyle }
            textInputStyle = { textTypeComponent.textInputStyle }
            placeholderTextColor = { textTypeComponent.placeholderTextColor }
            errorStyle = { textTypeComponent.errorStyle }      
        />
    }

    /**
     * Méthode permettant d'afficher un input de type email.
     * 
     * @param input Instance de classe InputEmailComponent.
     * @returns Affiche un input de type email.
     */
     public renderEmailInput(input: InputEmailComponent): JSX.Element {
        return <InputEmail 
            input = { input }  
            labelStyle = { textTypeComponent.labelStyle }
            textInputStyle = { textTypeComponent.textInputStyle }
            placeholderTextColor = { textTypeComponent.placeholderTextColor }
            errorStyle = { textTypeComponent.errorStyle }  
        />
    }

    /**
     * Méthode permettant d'afficher un input de type nombre.
     * 
     * @param input Instance de classe InputNumberComponent.
     * @returns Affiche un input de type nombre.
     */
     public renderNumberInput(input: InputNumberComponent): JSX.Element {
        return <InputNumber 
            input = { input }  
            labelStyle = { textTypeComponent.labelStyle }
            textInputStyle = { textTypeComponent.textInputStyle }
            placeholderTextColor = { textTypeComponent.placeholderTextColor }
            errorStyle = { textTypeComponent.errorStyle }  
        />
    }

    /**
     * Méthode permettant d'afficher un input de type dropdown.
     * 
     * @param input Instance de classe InputDropdownComponent.
     * @returns Affiche un input de type dropdown.
     */
     public renderDropdownInput(input: InputDropdownComponent): JSX.Element {
        return <InputDropdown 
            input = { input } 
            labelStyle = { dropdownComponent.labelStyle }
            itemTextStyle = { dropdownComponent.itemTextStyle }
            listHeaderComponentStyleBackgroundColor = { dropdownComponent.listHeaderComponentStyleBackgroundColor }
            inputDropdownCurrentSelectionTextStyle = { dropdownComponent.inputDropdownCurrentSelectionTextStyle }
            errorStyle = { dropdownComponent.errorStyle }
            modalContainer = { dropdownComponent.modalContainer }
            styleModal = { dropdownComponent.styleModal }
            closeModalTextStyle = { dropdownComponent.closeModalTextStyle }
            titleModalTextStyle = { dropdownComponent.titleModalTextStyle }
            searchBarStyleContainer = { dropdownComponent.searchBarStyleContainer }
            searchBarStyleText = { dropdownComponent.searchBarStyleText }
            styleOpenModal = { dropdownComponent.styleOpenModal }
            openModalTextStyle = { dropdownComponent.openModalTextStyle }
        />
    }

    /**
     * Méthode permettant d'afficher un input de type dropdown.
     * 
     * @param input Instance de classe InputRadioButtonComponent.
     * @returns Affiche un input de type dropdown.
     */
     public renderRadioButtonInput(input: InputRadioButtonComponent): JSX.Element {
        const radioButtonStyle = radioButtonComponent(input);

        return <InputRadioButton 
            input = { input } 
            labelStyle = { radioButtonStyle.labelStyle }
            selectedRadioColor = { radioButtonStyle.selectedRadioColor }  
            unselectedRadioColor = { radioButtonStyle.unselectedRadioColor }
            radioTextStyle = { radioButtonStyle.radioTextStyle }
            margin = { radioButtonStyle.margin }
            styleContent = { radioStyleContent(input.getType) }
            errorStyle = { radioButtonStyle.errorStyle }
        />
    }
    
    /**
     * Méthode permettant d'afficher un input de type phone.
     * 
     * @param input Instance de classe InputPhoneComponent.
     * @returns Affiche un input de type dropdown.
     */
     public renderPhoneInput(input: InputPhoneComponent): JSX.Element {
        return <InputPhone 
            input = { input } 
            labelStyle = { phoneComponent.labelStyle }
            itemTextStyle = { phoneComponent.itemTextStyle }
            listHeaderComponentStyleBackgroundColor = { phoneComponent.listHeaderComponentStyleBackgroundColor }
            inputDropdownCurrentSelectionTextStyle = { phoneComponent.inputDropdownCurrentSelectionTextStyle }
            errorStyle = { phoneComponent.errorStyle }
            styleModal = { phoneComponent.styleModal }
            closeModalTextStyle = { phoneComponent.closeModalTextStyle }
            titleModalTextStyle = { phoneComponent.titleModalTextStyle }
            searchBarStyleContainer = { phoneComponent.searchBarStyleContainer }
            searchBarStyleText = { phoneComponent.searchBarStyleText }
            styleOpenModal = { phoneComponent.styleOpenModal }
            openModalTextStyle = { phoneComponent.openModalTextStyle }
            textInputPhoneStyle = { phoneComponent.textInputPhoneStyle }
            placeholderPhoneTextColor = { phoneComponent.placeholderPhoneTextColor }
        />
    }

}