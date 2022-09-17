import React from "react";
import { FlatList, Pressable, StyleProp, Text, View, ViewStyle } from "react-native";
import Line from "../global/element/line";
import ModalElement from "../global/element/modal-element";
import Spacer from "../global/element/spacer";
import { Answer } from "../global/input/answer";
import InputErrorMessage from "../input-error/input-error";
import SearchBarComponent from "../search-bar/search-bar";
import { SearchBarController } from "../search-bar/search-bar-controller";
import { InputDropdownController } from "./input-dropdown-controller";
import { PropsInputDropdown, PropsItemInputDropDown, PropsItemListInputDropDown } from "./input-dropdown-props";

/**
 * Composant correspondant une ligne d'une flatlist par exemple. 
 * 
 * ---
 * ---
 * 
 * `PropsItemInputDropDown` : Interface composée de :
 * * `item` *(any)* : Correspond à un élément de la liste des réponses pré - faites.
 * * `input` *(InputDropdownComponent)* : Une instance de la classe InputDropdownComponent.
 * * `setTitle` *(React.Dispatch<React.SetStateAction<string>>)* : Permet de mettre à jour le titre du modal.
 * * `setError` *(React.Dispatch<React.SetStateAction<string>>)* : Permet de mettre à jour l'erreur relative à la liste déroulante.
 * 
 * ---
 * ---
 * 
 * @param props `PropsItemInputDropDown`
 * @returns Element ItemElement
 */
const ItemElement: React.FC<PropsItemInputDropDown> = ( props: PropsItemInputDropDown ): JSX.Element => {

    const inputDropdownController
        = InputDropdownController.getInstance();

    const isSelected: boolean 
        = props.item === props.input.getValue;

    const style: StyleProp<ViewStyle> = isSelected 
        ? {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: props.selectedItemBackgroundColor,
            borderColor: props.selectedItemBorderColor,
            borderWidth: 0.5,
            borderRadius: 7,
            paddingHorizontal: 10
        } 
        : {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start"
        };

    return (
        <Pressable 
            key = { props.item.getId } 
            style = { style }
            onPress = { () => inputDropdownController.onDropdownChange(props) }
        >
            <Text style = {{
                color: props.itemTextColor,
                fontSize: props.itemTextFontSize
            }}>
                {props.item.getValue}
            </Text>
            <Spacer height = { 40 }/>
        </Pressable>
    )
    
}

/**
 * Élément permettant de générer une liste d'item ainsi qu'une barre de recherche permettant de filtrer cette liste.
 * 
 * ---
 * ---
 * 
 * `PropsItemListInputDropDown` : Interface composée de :
 * * `input` *(InputDropdownComponent)* : Une instance de la classe InputDropdownComponent.
 * * `setTitle` *(React.Dispatch<React.SetStateAction<string>>)* : Permet de mettre à jour le titre du modal.
 * * `setError` *(React.Dispatch<React.SetStateAction<string>>)* : Permet de mettre à jour l'erreur relative à la liste déroulante.
 * 
 * ---
 * ---
 * 
 * @param props `PropsItemListInputDropDown`
 * @return Élement ItemList 
 */
 const ItemList: React.FC<PropsItemListInputDropDown> = ( props: PropsItemListInputDropDown ): JSX.Element => {
    const searchBarController = SearchBarController.getInstance();

    const [value, setValue]: [string, React.Dispatch<React.SetStateAction<string>>] 
        = React.useState('');

    const [data, setData]: [Answer[], React.Dispatch<React.SetStateAction<Answer[]>>] 
        = React.useState(props.input.getAnswers);

    return (
        <FlatList
            data = { data }
            renderItem = { ({item}: any) => {
                return <ItemElement
                    item = { item }
                    setTitle = { props.setTitle }
                    input = { props.input }
                    setError = { props.setError }
                    selectedItemBackgroundColor = { props.selectedItemBackgroundColor }
                    selectedItemBorderColor = { props.selectedItemBorderColor }
                    itemTextColor = { props.itemTextColor }
                    itemTextFontSize = { props.itemTextFontSize }
                />
            } }
            keyExtractor = { data => `${data.getKey + data.getId}` }
            ListHeaderComponent = { 
                <SearchBarComponent
                    placeholder = "Recherche ..."
                    //value = { value.getValue }
                    handleSearch = {(text: string) => searchBarController.handleSearch(text, props.input.getAnswers, setData, setValue, "_value")}
                    value = { value }
                /> 
            }
            ListHeaderComponentStyle = {{ backgroundColor: props.listHeaderComponentStyleBackgroundColor, paddingBottom: 15 }}
            stickyHeaderIndices = {[0]}
        />
    );
}

/**
 * Élement permettant de générer un input de type dropdown. On y retrouve un bouton permettant d'ouvrir un modal et de séléctionner un item.
 * 
 * ---
 * ---
 * 
 * `PropsInputDropdown` : Interface composée de :
 * * `input` *(InputDropdownComponent)* : Une instance de la classe InputDropdownComponent.
 * 
 * ---
 * ---
 * 
 * @param props `PropsInputDropdown`
 * @returns Élement InputDropdown
 */
const InputDropdown: React.FC<PropsInputDropdown> = ( props: PropsInputDropdown ): JSX.Element => {

    const [error, setError]: [string, React.Dispatch<React.SetStateAction<string>>]
        = React.useState('Veuillez Sélectionner un intervenant');

    const [title, setTitle]: [string, React.Dispatch<React.SetStateAction<string>>] 
        = React.useState(`${ props.input.getValue.getValue }`);

    return (
        <View>
            <View style = {{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
            }}>
                <ModalElement
                    title = { props.input.getTitle }
                    openModalTitle = { title }
                    closeModalTextColor = { props.closeModalTextColor }
                    closeModalTextFontSize = { props.closeModalTextFontSize }
                    titleModalTextColor = { props.titleModalTextColor }
                    titleModalTextFontSize = { props.titleModalTextFontSize }
                    openModalTextColor = { props.openModalTextColor }
                    openModalTextFontSize = { props.openModalTextFontSize }
                    modalBackgroundColor = { props.modalBackgroundColor }
                    styleOpenModal = { props.styleOpenModal }>
                        <Text style = {{
                            color: props.inputDropdownTextColor,
                            fontSize: props.inputDropdownTextFontSize,
                            textAlign: "center"
                        }}>
                            Sélection actuelle :  
                            <Text style = {{ fontWeight: "bold" }}> { props.input.getValue.getValue }</Text>
                        </Text>

                        <Spacer height = { 10 }/>

                        <ItemList
                            input = { props.input }
                            setTitle = { setTitle }
                            setError = { setError }
                            selectedItemBackgroundColor = { props.selectedItemBackgroundColor }
                            selectedItemBorderColor = { props.selectedItemBorderColor }
                            itemTextColor = { props.itemTextColor }
                            itemTextFontSize = { props.itemTextFontSize }
                            listHeaderComponentStyleBackgroundColor = { props.listHeaderComponentStyleBackgroundColor }
                        />
                </ModalElement>
            </View>
            <Line margin = {{top: 7, bottom: 7}}/>
            <Spacer height = { 10 }/>

            <InputErrorMessage
                errorMessage = { error }
                style = { props.errorStyle }
            />
        </View>
    )

}

export default InputDropdown;