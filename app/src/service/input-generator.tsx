import React from "react";
import { Text, View } from "react-native";
import { EInputType } from "../Input/global/enumeration/input-type";
import { TypeInputRadio } from "../Input/global/type/input-type";
import InputDateTime from "../Input/input-date-time/input-date-time";
import { InputDateTimeComponent } from "../Input/input-date-time/input-date-time-component";
import InputEmail from "../Input/input-email/input-email";
import { InputEmailComponent } from "../Input/input-email/input-email-component";
import InputNumber from "../Input/input-number/input-number";
import { InputNumberComponent } from "../Input/input-number/input-number-component";
import InputRadioButton from "../Input/input-radio-button/input-radio-button";
import { InputRadioButtonComponent } from "../Input/input-radio-button/input-radio-button-component";
import InputText from "../Input/input-text/input-text";
import { InputTextComponent } from "../Input/input-text/input-text-component";

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
        return <View style = {{ 
            backgroundColor: "#ea9576",
            padding: 10,
            borderRadius: 7
        }}>
            <Text style = {{ color: "#ffffff" }}>
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
                datePickerContainerStyle = {{}}
                labelTextStyle = {{ 
                    color: "#ea9576", 
                    fontSize: 16 
                }}
                spaceLabelPicker = { 15 }
                openDatePickerPressableStyle = {{ 
                    borderWidth: 0.5,
                    borderColor: "#f0f0f0",
                    borderRadius: 7,
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
                datePickerTextStyle = {{
                    color: "#f0f0f0",
                    fontSize: 16 
                }}
                iconPressableStyle = {{
                    color: "#f0f0f0",
                    fontSize: 18 
                }}
                confirmTextButtonColor = "#98bc62"
                confirmButtonBackgroundColor = "#303f56"
                cancelButtonBackgroundColor = "#303f56"
                cancelTextButtonColor = "#b44649"
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
            labelStyle = {{ 
                color: "#ea9576", 
                fontSize: 16,
            }}
            textInputStyle = {{
                color: "#f0f0f0", 
                fontSize: 16,
                marginVertical: 15,
                borderColor: "#f0f0f0",
                paddingBottom: 5
            }}
            placeholderTextColor = "#b4b4b4"
            errorStyle = {{
                color: "#b44649", 
                fontSize: 16,
            }}      
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
            labelStyle = {{ 
                color: "#ea9576", 
                fontSize: 16,
            }}
            textInputStyle = {{
                color: "#f0f0f0", 
                fontSize: 16,
                marginVertical: 15,
                borderColor: "#f0f0f0",
                paddingBottom: 5
            }}
            placeholderTextColor = "#b4b4b4"
            errorStyle = {{
                color: "#b44649", 
                fontSize: 16,
            }}      
        />
    }

    /**
     * Méthode permettant d'afficher un input de type nombre.
     * 
     * @param input Instance de classe InputNumberComponent.
     * @returns Affiche un input de type email.
     */
     public renderNumberInput(input: InputNumberComponent): JSX.Element {
        return <InputNumber 
            input = { input }  
            labelStyle = {{ 
                color: "#ea9576", 
                fontSize: 16,
            }}
            textInputStyle = {{
                color: "#f0f0f0", 
                fontSize: 16,
                marginVertical: 15,
                borderColor: "#f0f0f0",
                paddingBottom: 5
            }}
            placeholderTextColor = "#b4b4b4"
            errorStyle = {{
                color: "#b44649", 
                fontSize: 16,
            }}      
        />
    }

    

}