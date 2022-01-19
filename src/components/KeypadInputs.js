import { IonRow } from "@ionic/react";
import { useEffect, useRef } from "react";
import KeypadInput from "./KeypadInput";

const KeypadInputs = props => {

  const { values, activeIndex, incorrect, correct } = props;
  const keypadRef = useRef();

  useEffect(() => {

    if (incorrect) {

      keypadRef.current.classList.add("incorrect");

      setTimeout(() => {
          
        keypadRef.current.classList.remove("incorrect");
      }, 1000);
    }
  }, [ incorrect ]);

  useEffect(() => {

    if (correct) {

      keypadRef.current.classList.add("correct");
    }
  }, [ correct ]);

  return (
      
    <IonRow ref={ keypadRef } className="ion-justify-content-center">
      { values.map((value, index) => {

        const isActive = parseInt(index) === parseInt(activeIndex);
        const isFilled = value !== "" ? true : false;

        return <KeypadInput correct={ correct } incorrect={ incorrect } isFilled={ isFilled } isActive={ isActive } value={ value } placeholder="0" />;
      })}
    </IonRow>
  );
}

export default KeypadInputs;