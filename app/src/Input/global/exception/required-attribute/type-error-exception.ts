/**
 * Classe d'exception permettant de retourner un message stipulant que le type de l'attribut entré n'est pas correcte.
 */
 export class TypeErrorException extends Error {

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(className: string, attributeName: string, type: string) {
        super(`${className}: L'attribut ${attributeName} doit être un ${type}.`);
        Object.setPrototypeOf(this, TypeErrorException.prototype);
    }
}