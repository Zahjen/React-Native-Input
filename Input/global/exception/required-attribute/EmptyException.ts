/**
 * Classe d'exception permettant de retourner un message stipulant qu'un attribut est vide, e.g. un tableau n'a aucun élément alors qu'il devrait => on lève une Exception.
 */
 export class EmptyException extends Error {

    // --------------------------
    // Constructeur
    // --------------------------

    constructor(className: string, attributeName: string) {
        super(`${ className } : L'attribut ${ attributeName } ne peut être vide.`);
        Object.setPrototypeOf(this, EmptyException.prototype);
    }
}