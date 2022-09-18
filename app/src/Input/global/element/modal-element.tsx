import React from "react";
import { Modal, View, Text, Pressable, StyleProp, ViewStyle, TextStyle } from "react-native";

/**
 * Interface composée de :
 * * `title` *(string)* : Titre que prendra le Modal, e.g. "Séléctionner un pays", ...
 * * `openModalTitle` *(string)* : Phrase que prendra le bouton permettant d'ouvrir le modal, e.g. "Choisir un pays", ...
 * * `children?` *(any)* : Composansts pouvant se placer dans le Modal.
 * * `styleOpenModal?` *(StyleProp<ViewStyle>)* : Style relatif au bouton permettant d'ouvrir le Modal.
 * * `styleModal?` *(StyleProp<ViewStyle>)* : Style relatif à un Modal.
 * * `closeModalTextStyle?` *(StyleProp<TextStyle>)* : Style relatif au texte permettant de fermer le modal.
 * * `titleModalTextStyle?` *(StyleProp<TextStyle>)* : Style relatif au texte associé au titre du modal.
 * * `openModalTextStyle?` *(StyleProp<TextStyle>)* : Style relatif au texte permettant d'ouvrir le modal.
 */
export interface PropsModalElement {
    /** Titre que prendra le Modal, e.g. "Séléctionner un pays", ... */
    title: string,
    /** Phrase que prendra le bouton permettant d'ouvrir le modal, e.g. "Choisir un pays", ... */
    openModalTitle: string,
    /** Composansts pouvant se placer dans le Modal. */
    children?: any,
    /** Style relatif au bouton permettant d'ouvrir le Modal. */
    styleOpenModal?: StyleProp<ViewStyle>,
    /** Style relatif à un Modal. */
    styleModal?: StyleProp<ViewStyle>,
    /** Style relatif au texte permettant de fermer le modal. */
    closeModalTextStyle?: StyleProp<TextStyle>,
    /** Style relatif au texte associé au titre du modal. */
    titleModalTextStyle?: StyleProp<TextStyle>,
    /** Style relatif au texte permettant d'ouvrir le modal. */
    openModalTextStyle?: StyleProp<TextStyle>
}

/**
 * Élement permettant de générer un Modal. On cliquera donc sur un Pressable afin d'ouvrir le modal, et d'en sélectionner / saisir une valeur afin d'en extraire la nouvelle valeur souhaitée.
 * 
 * ---
 * ---
 * 
 * `PropsModalElement` : Interface composée de :
 * * `title` *(string)* : Titre que prendra le Modal, e.g. "Séléctionner un pays", ...
 * * `openModalTitle` *(string)* : Phrase que prendra le bouton permettant d'ouvrir le modal, e.g. "Choisir un pays", ...
 * * `children?` *(any)* : Composansts pouvant se placer dans le Modal.
 * * `styleOpenModal?` *(StyleProp<ViewStyle>)* : Style relatif au bouton permettant d'ouvrir le Modal.
 * * `styleModal?` *(StyleProp<ViewStyle>)* : Style relatif à un Modal.
 * * `closeModalTextStyle?` *(StyleProp<TextStyle>)* : Style relatif au texte permettant de fermer le modal.
 * * `titleModalTextStyle?` *(StyleProp<TextStyle>)* : Style relatif au texte associé au titre du modal.
 * * `openModalTextStyle?` *(StyleProp<TextStyle>)* : Style relatif au texte permettant d'ouvrir le modal.
 * 
 * ---
 * ---
 * 
 * Par défaut, le modal aura :
 * ```
 * ModalElement.defaultProps = {
 *      styleModal: {
 *          height: "60%",
 *          marginTop: 'auto',
 *          borderTopLeftRadius: 30,
 *          borderTopRightRadius: 30,
 *          paddingHorizontal: 30     
 *      }
 * }
 * ```
 * 
 * @param props `PropsModalElement`
 * @returns Element ModalElement
 */
const ModalElement: React.FC<PropsModalElement> = (props: PropsModalElement): JSX.Element => {

    const [visible, setVisible]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = React.useState(false)

    return (
        <View>
            <Modal    
                animationType = { "slide" }  
                transparent = { true }  
                visible = { visible }> 

                <Pressable 
                    style = {{ height: "40%", backgroundColor: "black", opacity: 0.2 }} 
                    onPress = { () => setVisible(!visible) }/>

                <View style = { props.styleModal }>  
                    <View style = {{
                        flexDirection: "row",
                        alignItems: "baseline",
                        justifyContent: "flex-start",
                        paddingVertical: 30
                    }}>
                        <Pressable onPress = {(): void => setVisible(!visible)}>
                            <Text style = { props.closeModalTextStyle }>
                                Fermer
                            </Text>
                        </Pressable>

                        <Text style = { props.titleModalTextStyle }>
                            { props.title }
                        </Text>  
                    </View>                   

                    { props.children }
                </View>  
            </Modal>  
                
            <Pressable 
                onPress = {() => setVisible(true)}
                style = { props.styleOpenModal }>
                    <Text style = { props.openModalTextStyle }>
                        { props.openModalTitle }
                    </Text>
            </Pressable>
        </View>
    )
}

/** Les paramètres par défaut que prendra le composant */
ModalElement.defaultProps = {
    styleModal: {
        height: "60%",
        marginTop: 'auto',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30
    }
}

export default ModalElement;