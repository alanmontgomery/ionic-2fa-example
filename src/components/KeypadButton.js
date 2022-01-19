import { IonButton, IonCol, IonIcon } from "@ionic/react";
import { backspaceOutline } from "ionicons/icons";
import styles from "./KeypadButton.module.scss";

const KeypadButton = props => {

  const { small, value, remove, handleClick, isDisabled = false, correct } = props;

  return (
    <IonCol size="4" className={ styles.keypadButton }>
      <IonButton disabled={ (!small || correct) && isDisabled } className={ `${ styles.keypadButton } ${ small && styles.smallKeypadButton }` } onClick={ handleClick }>
        { !remove && value }
        { remove && <IonIcon icon={ backspaceOutline } /> }
      </IonButton>
    </IonCol>
  );
}

export default KeypadButton;