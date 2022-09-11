/**
 * Classe d'exception permettant de retourner un message stipulant qu'un attribut n'est pas sous le bon format pour générer une date / heure.
 */
 export class DateTimeFormatException extends Error {

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(className: string, attributeName: string) {
        super(`${ className } : L'attribut ${ attributeName } n'est pas au bon format pour la génération d'une date ou d'une heure.`);
        Object.setPrototypeOf(this, DateTimeFormatException.prototype);
    }
}