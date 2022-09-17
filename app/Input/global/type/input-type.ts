import { InputEmailComponent } from "../../input-email/input-email-component";
import { InputNumberComponent } from "../../input-number/input-number-component";
import { InputRadioButtonComponent } from "../../input-radio-button/input-radio-button-component";
import { InputTextComponent } from "../../input-text/input-text-component";

/**
 * Ce type permet de regrouper n'importe quel type d'input
 */
export type TypeInput = InputTextComponent 
    | InputEmailComponent
    | InputNumberComponent 
    | InputRadioButtonComponent
    /*| InputDateTimeComponent
    | InputPhoneComponent
    | InputDropdownComponent;*/

/**
 * Ce type permet de regrouper les inputs de type radio et radio dynamic, i.e. ceux pouvant donner lieux à de nouveaux inputs.
 */
/*export type TypeInputRadio = InputRadioButtonComponent 
    | InputRadioButtonDynamicComponent;*/

