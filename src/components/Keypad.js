import { IonRow } from "@ionic/react";
import styles from "./Keypad.module.scss";
import KeypadButton from "./KeypadButton";

const Keypad = props => {

  const { activeIndex, handleClick, handleRemove, amount, correct } = props;

  const keypadButtons = [
    [
      { value: "1", handleClick: () => handleClick(activeIndex, 1), small: false, remove: false },
      { value: "2", handleClick: () => handleClick(activeIndex, 2), small: false, remove: false },
      { value: "3", handleClick: () => handleClick(activeIndex, 3), small: false, remove: false }
    ],
    [
      { value: "4", handleClick: () => handleClick(activeIndex, 4), small: false, remove: false },
      { value: "5", handleClick: () => handleClick(activeIndex, 5), small: false, remove: false },
      { value: "6", handleClick: () => handleClick(activeIndex, 6), small: false, remove: false }
    ],
    [
      { value: "7", handleClick: () => handleClick(activeIndex, 7), small: false, remove: false },
      { value: "8", handleClick: () => handleClick(activeIndex, 8), small: false, remove: false },
      { value: "9", handleClick: () => handleClick(activeIndex, 9), small: false, remove: false }
    ],
    [
      { value: "Resend", handleClick: () => handleClick(activeIndex, 1), small: true, remove: false },
      { value: "0", handleClick: () => handleClick(activeIndex, 2), small: false, remove: false },
      { value: "", handleClick: () => handleRemove(), small: true, remove: true }
    ]
  ];

  return (
    <div className={ `${ styles.keypad }` }>

      { keypadButtons.map((keypadRow, index) => {

        const isDisabled = parseInt(activeIndex) === parseInt(amount);

        return (
          <IonRow key={ `keypadRow_${ index }` }>
            { keypadRow.map((button, index2) => {

                return <KeypadButton correct={ correct } isDisabled={ isDisabled } key={ `keypadButton_${ index2 }`} value={ button.value } handleClick={ button.handleClick } small={ button.small } remove={ button.remove } />
            })}
          </IonRow>
        );
      })}
    </div>
  );
}

export default Keypad;