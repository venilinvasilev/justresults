import styles from './Calculator.module.css';
import ModalMessage from '../../Common/ModalMessage';
import { useState } from 'react';

function Calculator() {
    const [message, setMessage] = useState('');
    const calculateMacronutrients = (ev) => {
        ev.preventDefault();
        const form = ev.target;

        const age = Number(form.age.value);
        const sex = form.sex.value;
        const height = Number(form.height.value);
        const weight = Number(form.weight.value);
        const goal = form.goal.value;
        const activity = form.activity.value;

        if (!age || !height || !weight) {
            setMessage({
                heading: 'Missing input fields!',
                content: 'All fields are required in order to calculate your desired calorie intake!'
            })
            return;
        }
        let bmr;
        switch (sex) {
            case 'male': {
                bmr = (weight * 10) + (height * 6.25) + (age * 5) + 5;

            } break;
            case 'female': {
                bmr = (weight * 10) + (height * 6.25) + (age * 5) - 161;
            } break;
        }
        switch (activity) {
            case 'sedentary': {
                bmr *= 1.2;
            } break;
            case 'lightlyActive': {
                bmr *= 1.375;
            } break;
            case 'moderatelyActive': {
                bmr *= 1.550;
            } break;
            case 'veryActive': {
                bmr *= 1.725;
            } break;
            case 'extraActive': {
                bmr *= 1.9;
            } break;
        }
        let targetCalories;
        switch (goal) {
            case 'gain': {
                targetCalories = Math.trunc(bmr);
                setMessage({
                    heading: `Target Calories ${targetCalories}.`,
                    content: `Your calorie count should put you in a slight caloric surplus of around 500 calories.
                    This can help you establish a consistent, sustainable pace of weight gain.`
                });
            } break;
            case 'lose': {
                targetCalories = Math.trunc(bmr * 0.8);
                setMessage({
                    heading: `Target Calories ${targetCalories}.`,
                    content: `Your calorie count should put you in a slight caloric deficit of around 200-700 calories.
                This can help you establish a consistent, sustainable pace of weight loss.`
                });
            } break;
            default: {
                targetCalories = Math.trunc(bmr - 500);
                setMessage({
                    heading: `Target Calories ${targetCalories}.`,
                    content: `Your calorie count should put you close to a level where you maintain your current weight.`
                });
                break;
            }
        }

    }
    const handleGotIt = () => {
        setMessage('');
    }
    return (
        <div className={styles.calculatorWrapper}>
            <h2 className={styles.calculatorHeading}>Calorie Calculator</h2>
            <form onSubmit={calculateMacronutrients} className={styles.calculatorForm}>
                <label htmlFor="age" className={styles.calculatorInputLabel}>Age</label>
                <input className={styles.calculatorInputField} name="age" id="age" type="number" placeholder="Years..." />
                <label htmlFor="sex" className={styles.calculatorInputLabel}>Sex</label>
                <div className={styles.radioInputWrapperOne}>
                    <div className={styles.sameLineInput}>
                        <input className={styles.radioInput} type="radio" name="sex" id="male" value="male" defaultChecked />
                        <label className={styles.radioLabel} htmlFor="male">Male</label>
                    </div>
                    <div className={styles.sameLineInput}>
                        <input type="radio" name="sex" id="female " value="female" />
                        <label htmlFor="female">Female</label>
                    </div>
                </div>
                <label htmlFor="height" className={styles.calculatorInputLabel}>Height</label>
                <input className={styles.calculatorInputField} name="height" id="height" type="number" placeholder="Centimeters..." />
                <label htmlFor="weight" className={styles.calculatorInputLabel}>Weight</label>
                <input className={styles.calculatorInputField} name="weight" id="weight" type="number" placeholder="Kilograms..." />
                <label htmlFor="goal" className={styles.calculatorInputLabel}>Goal</label>
                <div className={styles.radioInputWrapper}>
                    <div className={styles.newLineOptionWrapperTwo}>
                        <input className={styles.radioInput} type="radio" name="goal" id="maintain" value="maintain" defaultChecked />
                        <label className={styles.radioLabel} htmlFor="maintain">Maintain Weight</label>
                    </div>
                    <div className={styles.newLineOptionWrapperTwo}>
                        <input className={styles.radioInput} type="radio" name="goal" id="lose" value="lose" />
                        <label className={styles.radioLabel} htmlFor="lose">Lose Weight</label>
                    </div>
                    <div className={styles.newLineOptionWrapperTwo}>
                        <input className={styles.radioInput} type="radio" name="goal" id="gain" value="gain" />
                        <label className={styles.radioLabel} htmlFor="gain">Gain Weight</label>
                    </div>
                </div>
                <label htmlFor="activity" className={styles.calculatorInputLabel}>Current Activity Level</label>
                <div className={styles.radioInputWrapper}>
                    <div className={styles.newLineOptionWrapper}>
                        <input className={styles.radioInput} type="radio" name="activity" id="sedentary" value="sedentary" defaultChecked />
                        <label className={styles.radioLabel} htmlFor="sedentary">Sedentary (Little or no exercise)</label>
                    </div>
                    <div className={styles.newLineOptionWrapper}>
                        <input className={styles.radioInput} type="radio" name="activity" id="lightlyActive" value="lightlyActive" />
                        <label className={styles.radioLabel} htmlFor="lightlyActive">Lightly active (Light exercise/sports 3-5 days a week)</label>
                    </div>
                    <div className={styles.newLineOptionWrapper}>
                        <input className={styles.radioInput} type="radio" name="activity" id="moderatelyActive" value="moderatelyActive" />
                        <label className={styles.radioLabel} htmlFor="moderatelyActive">Moderately active (Moderate exercise/sports 3-5 days a week)</label>
                    </div>
                    <div className={styles.newLineOptionWrapper}>
                        <input className={styles.radioInput} type="radio" name="activity" id="veryActive" value="veryActive" />
                        <label className={styles.radioLabel} htmlFor="veryActive">Very active (Hard exercise/sports 6-7 days a week)</label>
                    </div>
                    <div className={styles.newLineOptionWrapper}>
                        <input className={styles.radioInput} type="radio" name="activity" id="extraActive" value="extraActive" />
                        <label className={styles.radioLabel} htmlFor="extraActive">Extra active (Hard exercise/sports 6-7 days a week + physical job)</label>
                    </div>
                </div>
                <div className={styles.buttonsWrapper}>
                    <input className={styles.submitButton} type="reset" value="Clear Fields" />
                    <input className={styles.submitButton} type="submit" value="Calculate" />
                </div>


            </form>
            {message.content ? <ModalMessage message={message} handleGotIt={handleGotIt} /> : ''}
        </div>
    );
}
export default Calculator;