import { Platform } from "react-native";
import { EInputType } from "../enumeration/input-type";
import { ENumericalDataType } from "../enumeration/numerical-data-type";
import { Answer } from "../input-set/answer/answer";
import { InputDateTimeComponent } from "../input-set/input-date-time/input-date-time-component";
import { InputDropdownComponent } from "../input-set/input-dropdown/input-dropdown-component";
import { InputEmailComponent } from "../input-set/input-email/input-email-component";
import { InputNumberComponent } from "../input-set/input-number/input-number-component";
import { InputPhoneComponent } from "../input-set/input-phone/input-phone-component";
import { InputRadioButtonComponent } from "../input-set/input-radio-button/input-radio-button-component";
import { InputTextComponent } from "../input-set/input-text/input-text-component";


/**
 * Cette classe nous permet daccéder à toutes les questions d'une fiche enquête.
 */
export class Example {

    // ----------------
    // Déclaration d'attribut
    // ----------------

    private static _instance: Example;

    // ----------------
    // Constructeur
    // ----------------

    private constructor() { }

    // ----------------
    // Récupération de l'instance de la classe Example 
    // pour l'implémentation du design pattern Singleton
    // ----------------

    public static getInstance() : Example {
        if (!Example._instance)
            Example._instance = new Example();

        return Example._instance;
    }

    // ----------------
    // Méthode
    // ----------------

    /**
     * Méthode permettant de récupérer les inputs permettant la saisie de date, heure ou date et heure.
     * 
     * @returns Tableau InputDateTimeComponent[].
     */
    public getDateTimeData() : InputDateTimeComponent[] {
        return [
            new InputDateTimeComponent({
                value: new Date(),
                key: 'input_date',
                type: EInputType.DATE,
                label: 'Date'
            }),
        
            new InputDateTimeComponent({
                value: new Date(),
                key: 'input_time',
                type: EInputType.TIME,
                label: 'Heure'
            }),

            new InputDateTimeComponent({
                value: new Date(),
                key: 'input_datetime',
                type: EInputType.DATETIME,
                label: 'Date et heure'
            })
        ];
    }

    /**
     * Méthode permettant de récupérer un input permettant la saisie de texte.
     * 
     * @returns InputTextComponent[].
     */
    public getTextData() : InputTextComponent[] {
        return [
            new InputTextComponent({
                key: "input_required_text",
                label: "Saisir un texte requis",
                type: EInputType.TEXT,
                placeholder: "Exemple: Bla bla bla",
                isRequired: true,
            }),

            new InputTextComponent({
                key: "input_not_required_text",
                label: "Saisir un texte qui n'est pas requis",
                type: EInputType.TEXT,
                placeholder: "Exemple: Bla bla bla",
                isRequired: false,
            })
        ]  
    }

    /**
     * Méthode permettant de récupérer un input permettant la saisie d'une adresse email.
     * 
     * @returns InputEmailComponent.
     */
     public getEmailData() : InputEmailComponent {
        return new InputEmailComponent({
            key: "input_email",
            label: "Saisir une adresse e-mail",
            type: EInputType.EMAIL,
            placeholder: "Exemple: exemple@test.com",
            isRequired: true,
            keyboardType: "email-address"
        })
    }

    /**
     * Méthode permettant de récupérer des inputs permettant la saisie de nombre entier / décimal négtif / positif.
     * 
     * @returns InputNumberComponent[].
     */
     public getNumberData() : InputNumberComponent[] {
        return [
            new InputNumberComponent({
                key: "input_number_non_negative_decimal",
                label: "Saisir un nombre décimal positif",
                type: EInputType.NUMBER,
                numericalDataType: ENumericalDataType.NON_NEGATIVE_DECIMAL,
                isRequired: false,
                placeholder: "Exemple: 42.2",
                keyboardType: "decimal-pad"
            }),

            new InputNumberComponent({
                key: "input_number_negative_decimal",
                label: "Saisir un nombre décimal négatif",
                type: EInputType.NUMBER,
                numericalDataType: ENumericalDataType.NEGATIVE_DECIMAL,
                isRequired: false,
                placeholder: "Exemple: - 42.2",
                keyboardType: Platform.OS === "ios" ? "numbers-and-punctuation" : "numeric"
            }),

            new InputNumberComponent({
                key: "input_number_decimal",
                label: "Saisir un nombre décimal, qu'il soit positif ou négatif",
                type: EInputType.NUMBER,
                numericalDataType: ENumericalDataType.DECIMAL,
                isRequired: false,
                placeholder: "Exemple: - 42.2, 56, ...",
                keyboardType: Platform.OS === "ios" ? "numbers-and-punctuation" : "numeric"
            }),

            new InputNumberComponent({
                key: "input_number_integer",
                label: "Saisir un nombre entier, qu'il soit positif ou négatif",
                type: EInputType.NUMBER,
                numericalDataType: ENumericalDataType.INTEGER,
                isRequired: false,
                placeholder: "Exemple: - 42, 56, ...",
                keyboardType: Platform.OS === "ios" ? "numbers-and-punctuation" : "numeric"
            }),

            new InputNumberComponent({
                key: "input_number_negative_integer",
                label: "Saisir un nombre entier, qu'il soit positif ou négatif",
                type: EInputType.NUMBER,
                numericalDataType: ENumericalDataType.NEGATIVE_INTEGER,
                isRequired: false,
                placeholder: "Exemple: - 42",
                keyboardType: Platform.OS === "ios" ? "numbers-and-punctuation" : "numeric"
            }),

            new InputNumberComponent({
                key: "input_number_non_negative_integer",
                label: "Saisir un nombre entier, qu'il soit positif ou négatif",
                type: EInputType.NUMBER,
                numericalDataType: ENumericalDataType.NON_NEGATIVE_INTEGER,
                isRequired: false,
                placeholder: "Exemple: 42",
                keyboardType: "number-pad"
            }),
        ]  
    }

    /**
     * Méthode permettant de récupérer des inputs permettant la saisie via un dropdown.
     * 
     * @returns InputDropdownComponent.
     */
    public getDropdownData() : InputDropdownComponent {
        return new InputDropdownComponent({
            key: "input_dropdown",
            label: "Sélectionner une option",
            type: EInputType.DROPDOWN,
            title: 'Sélectionner une option',
            isRequired: true,
            value: new Answer({
                id: 0,
                key: "option-0",
                value: "Sélectionner une option"
            }),
            answers: [
                new Answer({
                    id: 0,
                    key: "option-0",
                    value: "Sélectionner une option"
                }),
                new Answer({
                    id: 1,
                    key: "option-1",
                    value: "Option 1"
                }),
                new Answer({
                    id: 2,
                    key: "option-2",
                    value: "Option 2"
                }),
                new Answer({
                    id: 3,
                    key: "option-3",
                    value: "Option 3"
                })
            ]            
        })
    }

    /**
     * Méthode permettant de récupérer des inputs permettant la saisie via un bouton radio.
     * 
     * @returns InputRadioButtonComponent[].
     */
     public getRadioButtonData() : InputRadioButtonComponent[] {
        return [
            new InputRadioButtonComponent({
                key: "input_radio_button_column",
                label: "Sélectionner une option via un bouton radio en colonne",
                type: EInputType.RADIO_COLUMN,
                isRequired: true,
                answers: [
                    new Answer({
                        id: 1,
                        key: "option-1",
                        value: "Option 1"
                    }),
                    new Answer({
                        id: 2,
                        key: "option-2",
                        value: "Option 2"
                    }),
                    new Answer({
                        id: 3,
                        key: "option-3",
                        value: "Option 3"
                    })
                ]            
            }),

            new InputRadioButtonComponent({
                key: "input_radio_button_row",
                label: "Sélectionner une option via un bouton radio en ligne",
                type: EInputType.RADIO_ROW,
                isRequired: true,
                answers: [
                    new Answer({
                        id: 1,
                        key: "option-1",
                        value: "Option 1"
                    }),
                    new Answer({
                        id: 2,
                        key: "option-2",
                        value: "Option 2"
                    })
                ]            
            })
        ]
        
    }  

    /**
     * Méthode permettant de récupérer des inputs permettant la saisie d'un numéro de téléphone.
     * 
     * @returns InputPhoneComponent.
     */
    public getPhoneData() : InputPhoneComponent {
        return new InputPhoneComponent({
            key: "contact_tel",
            label: "Numéro de téléphone",
            type: EInputType.TEL,
            placeholder: "Exemple: 06 06 06 06 06",
            isRequired: false,
            keyboardType: "phone-pad"
        })     
    }  

}