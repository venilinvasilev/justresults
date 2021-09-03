import './Calculator.scss';
import ModalMessage from '../../Common/ModalMessage';
import { useState } from 'react';
import CheckBoxGroup from '../../Common/CheckBoxGroup';

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
                content:
                    'All fields are required in order to calculate your desired calorie intake!',
            });
            return;
        }
        let bmr;
        if (sex === 'male') {
            bmr = weight * 10 + height * 6.25 + age * 5 + 5;
        } else {
            bmr = weight * 10 + height * 6.25 + age * 5 - 161;
        }
        switch (activity) {
            case 'sedentary': {
                bmr *= 1.2;
                break;
            }
            case 'lightlyActive': {
                bmr *= 1.375;
                break;
            }
            case 'moderatelyActive': {
                bmr *= 1.55;
                break;
            }
            case 'veryActive': {
                bmr *= 1.725;
                break;
            }
            case 'extraActive': {
                bmr *= 1.9;
                break;
            }
            default:
                break;
        }
        let targetCalories;
        switch (goal) {
            case 'gain': {
                targetCalories = Math.trunc(bmr + 500);
                setMessage({
                    heading: `Target Calories ${targetCalories}.`,
                    content: `Your calorie count should put you in a slight caloric surplus of around 500 calories.
                    This can help you establish a consistent, sustainable pace of weight gain.`,
                });
                break;
            }
            case 'lose': {
                targetCalories = Math.trunc(bmr * 0.8);
                setMessage({
                    heading: `Target Calories ${targetCalories}.`,
                    content: `Your calorie count should put you in a slight caloric deficit of around 200-700 calories.
                This can help you establish a consistent, sustainable pace of weight loss.`,
                });
                break;
            }
            case 'maintain': {
                targetCalories = Math.trunc(bmr);
                setMessage({
                    heading: `Target Calories ${targetCalories}.`,
                    content: `Your calorie count should put you close to a level where you maintain your current weight.`,
                });
                break;
            }
            default:
                break;
        }
    };
    const handleGotIt = () => {
        setMessage('');
    };
    return (
        <div className="container p-5 Calculator">
            <h2 className="text-center Calculator__title">Macronutrient calculator</h2>
            <form className="p-5 bg-light Calculator__form">
                <div className="row justify-content-between mb-5">
                    <div className="col-2">
                        <label className="pr-3 text-dark d-block text-center" htmlFor="age">
                            Age
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            aria-label="Enter your age in years"
                            placeholder="Years"
                            id="age"
                        />
                    </div>
                    <div className="col-4">
                        <label className="col-12 mb-2 text-dark mx-auto text-center">
                            Select your gender:
                        </label>
                        <div className="col-10 row justify-content-between Calculator__form__gender-controls">
                            <div className="col-6">
                                <label className="pr-3 text-dark" htmlFor="male">
                                    Male
                                </label>
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="gender"
                                    id="male"
                                    value="male"
                                    defaultChecked={true}
                                />
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <label className="pr-3 text-dark" htmlFor="female">
                                    Female
                                </label>
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="gender"
                                    id="female"
                                    value="female"
                                    defaultChecked={false}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-5 d-flex justify-content-between">
                        <div className="col-5">
                            <label className="pr-3 text-dark d-block text-center" htmlFor="weight">
                                Weight
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                aria-label="Enter your weight in kilograms"
                                placeholder="Kilograms"
                                id="weight"
                                name="weight"
                            />
                        </div>
                        <div className="col-5">
                            <label className="pr-3 text-dark d-block text-center" htmlFor="height">
                                Height
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                aria-label="Enter height in centimeters"
                                placeholder="Centimeters"
                                id="height"
                                name="weight"
                            />
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="goal" className="text-center text-dark">
                        Select your goal:
                    </label>
                </div>
                <div className="row justify-content-center mb-5">
                    <div className="col-3 d-flex justify-content-center">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="goal"
                            id="lose"
                            value="lose"
                            defaultChecked={true}
                        />
                        <label className="pr-3 text-dark" htmlFor="lose">
                            Lose weight
                        </label>
                    </div>
                    <div className="col-3 d-flex justify-content-center">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="goal"
                            id="maintain"
                            value="maintain"
                            defaultChecked={false}
                        />
                        <label className="pr-3 text-dark" htmlFor="maintain">
                            Maintain weight
                        </label>
                    </div>
                    <div className="col-3 d-flex justify-content-center">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="goal"
                            id="gain"
                            value="gain"
                            defaultChecked={false}
                        />
                        <label className="pr-3 text-dark" htmlFor="gain">
                            Gain weight
                        </label>
                    </div>
                </div>
                <div className="row">
                    <label htmlFor="" className="text-dark text-center mb-3">
                        Select your desired activity level:
                    </label>
                </div>
                <div className="row justify-content-center">
                    <div className="col-10 d-flex flex-column">
                        <div>
                            <input
                                type="radio"
                                className="form-check-input"
                                name="activity"
                                id="sedentary"
                                value="sedentary"
                                defaultChecked={true}
                            />
                            <label className="pr-3 text-dark" htmlFor="sedentary">
                                Sedentary (Little or no exercise)
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                className="form-check-input"
                                name="activity"
                                id="lightlyActive"
                                value="lightlyActive"
                                defaultChecked={false}
                            />
                            <label className="pr-3 text-dark" htmlFor="lightlyActive">
                                Lightly active (Light exercise/sports 3-5 days a week)
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                className="form-check-input"
                                name="activity"
                                id="moderatelyActive"
                                value="moderatelyActive"
                                defaultChecked={false}
                            />
                            <label className="pr-3 text-dark" htmlFor="moderatelyActive">
                                Moderately active (Moderate exercise/sports 3-5 days a week)
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                className="form-check-input"
                                name="activity"
                                id="veryActive"
                                value="veryActive"
                                defaultChecked={false}
                            />
                            <label className="pr-3 text-dark" htmlFor="veryActive">
                                Very active (Hard exercise/sports 6-7 days a week)
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                className="form-check-input"
                                name="activity"
                                id="extraActive"
                                value="extraActive"
                                defaultChecked={false}
                            />
                            <label className="pr-3 text-dark" htmlFor="extraActive">
                                Extra active (Hard exercise/sports 6-7 days a week, plus physical
                                job)
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Calculator;
