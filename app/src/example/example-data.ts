import { EInputType } from "../Input/global/enumeration/input-type";
import { ENumericalDataType } from "../Input/global/enumeration/numerical-data-type";
import { InputDateTimeComponent } from "../Input/input-date-time/input-date-time-component";
import { InputEmailComponent } from "../Input/input-email/input-email-component";
import { InputNumberComponent } from "../Input/input-number/input-number-component";
import { InputTextComponent } from "../Input/input-text/input-text-component";


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
            isRequired: false,
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
                keyboardType: "numeric"
            }),

            new InputNumberComponent({
                key: "input_number_negative_decimal",
                label: "Saisir un nombre décimal négatif",
                type: EInputType.NUMBER,
                numericalDataType: ENumericalDataType.NEGATIVE_DECIMAL,
                isRequired: false,
                placeholder: "Exemple: - 42.2",
                keyboardType: "numeric"
            }),
        ]  
    }

}