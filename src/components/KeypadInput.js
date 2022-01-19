import { IonCol } from "@ionic/react";
import styles from "./KeypadInput.module.scss";

const KeypadInput = props => {

  const { value, isActive = false, isFilled = false, incorrect, correct } = props;

  return (

    <IonCol size="2">
      <div className={ `${ styles.keypadInput } ${ isActive && styles.active } ${ isFilled && styles.filled } ${ incorrect && styles.incorrect } ${ correct && styles.correct }` } onClick={ props.handleChange }>
        { value }
        { !isFilled && "0" }
      </div>
    </IonCol>
  );
}

export default KeypadInput;