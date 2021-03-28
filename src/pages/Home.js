import { IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonToolbar } from '@ionic/react';
import { arrowForwardOutline } from "ionicons/icons";
import styles from './Home.module.scss';
import KeypadInputs from '../components/KeypadInputs';
import Keypad from '../components/Keypad';
import { useEffect, useRef, useState } from 'react';

const Home = () => {

	const correctCode = [5,9,2,5];
	const [ keypadValues, setKeypadValues ] = useState(["","","",""]);
    const [ activeIndex, setActiveIndex ] = useState(0);
	const successRef = useRef();
	
	const [ incorrect, setIncorrect ] = useState(false);
	const [ correct, setCorrect ] = useState(false);

    const handleClick = (index, value) => {

        const tempValues = [ ...keypadValues ];
        tempValues[index] = parseInt(value);

		setKeypadValues(tempValues);
        setActiveIndex(activeIndex => activeIndex + 1);
    }

    const handleRemove = () => {

        const tempValues = [ ...keypadValues ];
        tempValues[activeIndex - 1] = "";

        setKeypadValues(tempValues);
        activeIndex > 0 && setActiveIndex(activeIndex => activeIndex - 1);
		setIncorrect(false);
		setCorrect(false);
    }

	useEffect(() => {

		if (parseInt(activeIndex) === parseInt(keypadValues.length)) {
			
			var error = false;

			keypadValues.forEach((value, index) => {

				if (parseInt(value) !== parseInt(correctCode[index])) {

					error = true;
					return false;
				}
			});

			if (error) {

				setIncorrect(true);
			} else {

				setCorrect(true);

				setTimeout(() => {

					successRef.current.classList.remove("hidden");
					successRef.current.classList.add("success");
				}, 900);
			}
		}
	}, [ activeIndex ]);

	return (
		<IonPage>

			<IonToolbar>
				<IonHeader>

				</IonHeader>
			</IonToolbar>
			<IonContent fullscreen>

				<IonGrid className="ion-text-center ion-padding-top">

					<IonRow>
						<IonCol size="12">
							<IonImg src="/assets/icon/favicon.png" className={ styles.logo } />
							<h1>Verification required</h1>
							<p>Enter your 4 digit verification code</p>
						</IonCol>
					</IonRow>

					<IonRow ref={ successRef } className="ion-justify-content-center hidden">
						<IonCol size="12" className={ styles.successContainer }>
							<p className={ styles.successText }>
								Awesome! You may continue.<br />
								<span className={ styles.successContinue }>
									Continue&nbsp;&nbsp;
									<IonIcon icon={ arrowForwardOutline } />
								</span>
							</p>
						</IonCol>
					</IonRow>

					<KeypadInputs incorrect={ incorrect } correct={ correct } values={ keypadValues } activeIndex={ activeIndex } />
					{ incorrect && <p className={ styles.incorrect }>Wrong code entered</p> }
					<Keypad handleRemove={ handleRemove } handleClick={ handleClick } activeIndex={ activeIndex } amount={ keypadValues.length } correct={ correct } />
				</IonGrid>
			</IonContent>
		</IonPage>
	);
};

export default Home;
