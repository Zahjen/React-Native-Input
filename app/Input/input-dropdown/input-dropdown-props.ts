import { StyleProp, ViewStyle } from "react-native"
import { InputDropdownComponent } from "./input-dropdown-component"

/**
 * Interface composée de :
 * * `item` *(any)* : Correspond à un élément de la liste des réponses pré - faites.
 * * `input` *(InputDropdownComponent)* : Une instance de la classe InputDropdownComponent.
 * * `setTitle` *(React.Dispatch<React.SetStateAction<string>>)* : Permet de mettre à jour le titre du modal.
 * * `setError` *(React.Dispatch<React.SetStateAction<string>>)* : Permet de mettre à jour l'erreur relative à la liste déroulante.
 * * `selectedItemBackgroundColor?` *(string)* : La couleur de fond associée à un item sélectionné.
 * * `selectedItemBorderColor?` *(string)* : La couleur de bordure associée à une item sélectionné
 * * `itemTextColor?` *(string)* : La couleur du texte associé à un item.
 * * `itemTextFontSize?` *(number)* : La taille de polilce du texte associé à un item.
 */
 export interface PropsItemInputDropDown {
    /** Correspond à un élément de la liste des réponses pré - faites. */
    item: any,
    /** Une instance de la classe InputDropdownComponent. */
    input: InputDropdownComponent,
    /** Permet de mettre à jour le titre du modal. */
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    /** Permet de mettre à jour l'erreur relative à la liste déroulante. */
    setError: React.Dispatch<React.SetStateAction<string>>,
    /** La couleur de fond associée à un item sélectionné. */
    selectedItemBackgroundColor?: string,
    /** La couleur de bordure associée à une item sélectionné */
    selectedItemBorderColor?: string,
    /** La couleur du texte associé à un item. */
    itemTextColor?: string,
    /** La taille de polilce du texte associé à un item. */
    itemTextFontSize?: number
}

/**
 * Interface composée de :
 * * `input` *(InputDropdownComponent)* : Une instance de la classe InputDropdownComponent.
 * * `setTitle` *(React.Dispatch<React.SetStateAction<string>>)* : Permet de mettre à jour le titre du modal.
 * * `setError` *(React.Dispatch<React.SetStateAction<string>>)* : Permet de mettre à jour l'erreur relative à la liste déroulante.
 * * `selectedItemBackgroundColor?` *(string)* : La couleur de fond associée à un item sélectionné.
 * * `selectedItemBorderColor?` *(string)* : La couleur de bordure associée à une item sélectionné
 * * `itemTextColor?` *(string)* : La couleur du texte associé à un item.
 * * `itemTextFontSize?` *(number)* : La taille de polilce du texte associé à un item.
 * * `listHeaderComponentStyleBackgroundColor?` *(string)* : La couleur de fond associé au header de la flatlist.
*/
export interface PropsItemListInputDropDown {
    /** Une instance de la classe InputDropdownComponent. */
    input: InputDropdownComponent,
    /** Permet de mettre à jour le titre du modal. */
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    /** Permet de mettre à jour l'erreur relative à la liste déroulante. */
    setError: React.Dispatch<React.SetStateAction<string>>,
    /** La couleur de fond associée à un item sélectionné. */
    selectedItemBackgroundColor?: string,
    /** La couleur de bordure associée à une item sélectionné */
    selectedItemBorderColor?: string,
    /** La couleur du texte associé à un item. */
    itemTextColor?: string,
    /** La taille de polilce du texte associé à un item. */
    itemTextFontSize?: number,
    /** La couleur de fond associé au header de la flatlist. */
    listHeaderComponentStyleBackgroundColor?: string
}

/**
 * Interface composée de :
 * * `input` *(InputDropdownComponent)* : Une instance de la classe InputDropdownComponent.
 * * `selectedItemBackgroundColor?` *(string)* : La couleur de fond associée à un item sélectionné.
 * * `selectedItemBorderColor?` *(string)* : La couleur de bordure associée à une item sélectionné
 * * `itemTextColor?` *(string)* : La couleur du texte associé à un item.
 * * `itemTextFontSize?` *(number)* : La taille de polilce du texte associé à un item.
 * * `listHeaderComponentStyleBackgroundColor?` *(string)* : La couleur de fond associé au header de la flatlist.
 * * `inputDropdownTextColor` *(string)* : La couleur du texte associée à la sélection actuelle de dropdown.
 * * `inputDropdownTextFontSize` *(number)* : LA taille de police du texte associée à la sélection actuelle du dropdown.
 * * `errorStyle?` *(StyleProp<ViewStyle>)* : Le style associé à l'affichage de l'erreur généré par le dropdown.
 * * `styleModal?` *(StyleProp<ViewStyle>)* : Style relatif à un Modal.
 * * `closeModalTextColor?` *(string)* : La couleur du texte permettant de fermer le modal.
 * * `closeModalTextFontSize?` *(number)* : La taille de police du texte permettant de fermer le modal.
 * * `titleModalTextColor?` *(string)* : La couleur du texte associé au titre du modal.
 * * `titleModalTextFontSize?` *(number)* :  La taille de police du texte associé au titre du modal.
 * * `modalBackgroundColor?` *(string)* : La couleur de fond du modal.
 * * `openModalTextColor?` *(string)* : La couleur du texte permettant d'ouvrir le modal.
 * * `openModalTextFontSize?` *(number)* : La taille de police du texte permettant d'ouvrir le modal.
 */
export interface PropsInputDropdown {
    /** Une instance de la classe InputDropdownComponent. */
    input: InputDropdownComponent,
    /** La couleur de fond associée à un item sélectionné. */
    selectedItemBackgroundColor?: string,
    /** La couleur de bordure associée à une item sélectionné */
    selectedItemBorderColor?: string,
    /** La couleur du texte associé à un item. */
    itemTextColor?: string,
    /** La taille de polilce du texte associé à un item. */
    itemTextFontSize?: number,
    /** La couleur de fond associé au header de la flatlist. */
    listHeaderComponentStyleBackgroundColor?: string
    /** La couleur du texte associée à la sélection actuelle de dropdown. */
    inputDropdownTextColor?: string,
    /** LA taille de police du texte associée à la sélection actuelle du dropdown. */
    inputDropdownTextFontSize?: number,
    /** Le style associé à l'affichage de l'erreur généré par le dropdown. */
    errorStyle?: StyleProp<ViewStyle>,
    /** La couleur du texte permettant de fermer le modal. */
    closeModalTextColor?: string,
    /** La taille de police du texte permettant de fermer le modal. */
    closeModalTextFontSize?: number,
    /** La couleur du texte associé au titre du modal. */
    titleModalTextColor?: string,
    /** La taille de police du texte associé au titre du modal. */
    titleModalTextFontSize?: number,
    /** La couleur de fond du modal. */
    modalBackgroundColor?: string,
    /** La couleur du texte permettant d'ouvrir le modal. */
    openModalTextColor?: string,
    /** La taille de police du texte permettant d'ouvrir le modal. */
    openModalTextFontSize?: number,
    /** Style relatif au bouton permettant d'ouvrir le Modal. */
    styleOpenModal?: StyleProp<ViewStyle>,
}