import { EInputType } from "../global/enumeration/input-type";
import { regex } from "../global/variables/regex";
import { InputTextComponent } from "../input-text/input-text-component";
import { IInputEmailComponentOption } from "./input-email-option";

/**
 * Classe relative à un input permettant la saisie d'un email..
 * 
 * @extends {InputTextComponent} Classe relative à un input de type texte.
 */
export class InputEmailComponent extends InputTextComponent {

    // --------------------------
    // Déclaration des attributs
    // --------------------------
    
    // --------------------------
    // Constructeur
    // --------------------------

    constructor(
        options: IInputEmailComponentOption
    ) {
        super(options);
    }

    // --------------------------
    // Getter
    // --------------------------

    // --------------------------
    // Setter
    // --------------------------

    // --------------------------
    // Surcharge
    // --------------------------

    // --------------------------
    // Méthode
    // --------------------------

    /**
     * Méthode permettant de déterminer si oui ou non l'email est invalide.
     * 
     * @returns Un booléen déterminant si oui ou non l'email est invalide.
     */
    public isNotEmailValid() : boolean {
        return this.getType === EInputType.EMAIL && !this._value.match(new RegExp(regex.email));
    }
   
}