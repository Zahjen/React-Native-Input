import { CountryCode } from "libphonenumber-js";
import { Utils } from "../global/tools/utils";
import { frenchCountries } from "../global/variables/french-countries";
import { InputTextComponent } from "../input-text/input-text-component";
import { IInputPhoneComponentOption } from "./input-phone-option";

/**
 * Classe relative à un input de type téléphone.
 * 
 * @property {`CountryCode`} _countryCode : Correspond au code Pays en norme ISO 3166-1 alpha-2, i.e. FR pour France, ...
 * 
 * @extends {InputTextComponent} Classe relative à un input pouvant être accompagné d'une erreur et pouvant être requis.
 */
export class InputPhoneComponent extends InputTextComponent {

    // --------------------------
    // Constructeur
    // --------------------------

    /** Correspond au code Pays en norme ISO 3166-1 alpha-2, i.e. FR pour France, ... */
    private _countryCode!: CountryCode;

    constructor(
        options: IInputPhoneComponentOption
    ) {
        super(options);
        this.countryCode = options.countryCode!;
    }

    // --------------------------
    // Getter
    // --------------------------

    /** Méthode permettant de récupérer le code pays. */
    public get getCountryCode() : CountryCode 
    { return this._countryCode; }

    // --------------------------
    // Setter
    // --------------------------

    /** Méthode permettant de poser le code pays. */
    public set countryCode(countryCode: CountryCode) {
        // On pose par défaut que le code pays est français
        (countryCode === undefined || countryCode === null) 
            ? this._countryCode = "FR" 
            : this._countryCode = countryCode;
    }

    // --------------------------
    // Méthode
    // --------------------------

    /**
     * Méthode permettant de récupèrer le nom d'un pays en utilisant son code pays.
     * Si le code pays est par exemple FR, cette méthode nous retourne France.
     * 
     * @returns Le nom du pays dépendant du code pays entré.
     */
     public getCountryName() : string {
        // On recherche le pays que l'utilisateur à saisie dans la liste de tous les pays à l'aide d'une recherche dichotomique
        const index = Utils
            .getInstance()
            .binarySearchOverObject(frenchCountries, this._countryCode, "code");

        return frenchCountries[index]["name"];
    }
   
}