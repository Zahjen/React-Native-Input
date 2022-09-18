import { ENumericalDataType } from "../global/enumeration/numerical-data-type";
import { regex } from "../global/variables/regex";
import { InputTextComponent } from "../input-text/input-text-component";
import { IInputNumberComponentOption } from "./input-number-option";

/**
 * Classe relative à un input de type nombre.
 * 
 * @property {`ENumericalDataType`} _numericalDataType : Correspond au type de données numérique que l'on peut associer à un inpuit de type NUMBER.
 * 
 * @extends {InputTextComponent} Classe relative à un input pouvant être accompagné d'une erreur et pouvant être requis.
 */
export class InputNumberComponent extends InputTextComponent {

    // --------------------------
    // Déclaration des attributs
    // --------------------------
    
    /** Correspond au type de données numérique que l'on peut associer à un inpuit de type NUMBER. */
    private _numericalDataType!: ENumericalDataType;

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(
        options: IInputNumberComponentOption
    ) {
        super(options);
        this.numericalDataType = options.numericalDataType!;
    }

    // --------------------------
    // Getter
    // --------------------------

    /** Méthode permettant de récupérer le type de données numérique d'un input. */
    public get getNumericalDataType() : ENumericalDataType 
    { return this._numericalDataType; }

    // --------------------------
    // Setter
    // --------------------------

    /** Méthode permettant de poser le type de données numérique d'un input. */
    public set numericalDataType(numericalDataType: ENumericalDataType) {
        this._numericalDataType = (numericalDataType === undefined || numericalDataType === null)
            ? ENumericalDataType.DECIMAL
            : numericalDataType;
    }

    // --------------------------
    // Méthode
    // --------------------------

    /**
     * Méthode permettant de déterminer si la valeur de l'input est un entier ou pas.
     * 
     * @returns Un booléen déterminant si oui ou non la valeur est un entier.
     */
    public isNotInteger() : boolean {
        return this._numericalDataType === ENumericalDataType.INTEGER 
            && !this._value.match(new RegExp(regex.integer));
    }

    /**
     * Méthode permettant de déterminer si la valeur de l'input est un entier positif ou pas.
     * 
     * @returns Un booléen déterminant si oui ou non la valeur est un entier positif.
     */
    public isNotNonNegativeInteger() : boolean {
        return this._numericalDataType === ENumericalDataType.NON_NEGATIVE_INTEGER 
            && !this._value.match(new RegExp(regex.nonNegativeInteger));
    }

    /**
     * Méthode permettant de déterminer si la valeur de l'input est un entier négatif ou pas.
     * 
     * @returns Un booléen déterminant si oui ou non la valeur est un entier négatif.
     */
    public isNotNegativeInteger() : boolean {
        return this._numericalDataType === ENumericalDataType.NEGATIVE_INTEGER 
            && !this._value.match(new RegExp(regex.negativeInteger));
    }

    /**
     * Méthode permettant de déterminer si la valeur de l'input est un nombre à virgule ou pas.
     * 
     * @returns Un booléen déterminant si oui ou non la valeur est un nombre à virgule.
     */
     public isNotDecimal() : boolean {
        return this._numericalDataType === ENumericalDataType.DECIMAL 
            && !this._value.match(new RegExp(regex.decimal));
    }

    /**
     * Méthode permettant de déterminer si la valeur de l'input est un nombre à virgule positif ou pas.
     * 
     * @returns Un booléen déterminant si oui ou non la valeur est un nombre à virgule positif.
     */
    public isNotNonNegativeDecimal() : boolean {
        return this._numericalDataType === ENumericalDataType.NON_NEGATIVE_DECIMAL 
            && !this._value.match(new RegExp(regex.nonNegativeDecimal));
    }

    /**
     * Méthode permettant de déterminer si la valeur de l'input est un nombre à virgule négatif ou pas.
     * 
     * @returns Un booléen déterminant si oui ou non la valeur est un nombre à virgule négatif.
     */
    public isNotNegativeDecimal() : boolean {
        return this._numericalDataType === ENumericalDataType.NEGATIVE_DECIMAL 
            && !this._value.match(new RegExp(regex.negativeDecimal));
    }


   
}