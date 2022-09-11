import { IInputBaseComponentOption } from "../interface/input-base";
import { InputComponent } from "./input";

/**
 * Classe relative à un input pouvant être accompagné d'une erreur et pouvant être requis.
 * 
 * @property {`boolean`} _isRequired : Correspond au fait qu'un input puisse ou non être obligatoire à saisir.
 * @property {`string`} _error : Correspond à l'erreur sera affichée si une valeur incorrecte est saisie par l'utilisateur.
 * 
 * @extends {InputComponent<T>} Classe abstraite relative aux diverses caractéristiques "obligatoires" que peut comporter un input.
 * 
 * @template T Type de la valeur que peut prendre un input, i.e. string, number, ...
 */
export abstract class InputBaseComponent<T> extends InputComponent<T> {

    // --------------------------
    // Déclaration des attributs
    // --------------------------

    /** Correspond au fait qu'un input puisse ou non être obligatoire à saisir. */
    protected _isRequired!: boolean;
    /** Correspond à l'erreur sera affichée si une valeur incorrecte est saisie par l'utilisateur. */
    protected _error!: string;

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(
        options: IInputBaseComponentOption<T>
    ) {
        super(options)
        this.error = options.error!;
        this.isRequired = options.isRequired!;
    }

    // --------------------------
    // Getter
    // --------------------------

    /** Méthode permettant de récupérer l'erreur que doit générer un input mal rempli. */
    public get getError() : string 
    { return this._error; }

    /** Méthode permettant de récupérer la définition de si l'input est requis ou non.  */
    public get getIsRequired() : boolean 
    { return this._isRequired; }

    // --------------------------
    // Setter
    // --------------------------

    /** Méthode permettant de poser l'erreur que doit générer un input mal rempli. */
    public set error(error: string) {
        this._error = (error === undefined) ? '' : error.trim();
    }

    /** Méthode permettant de définir si l'input est requis ou non.  */
    public set isRequired(isRequired: boolean) {
        // Par défaut on pose que le champ est requis
        this._isRequired = (isRequired === undefined) ? true : isRequired;
    }

}