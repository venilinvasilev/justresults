<div className={styles.calculatorWrapper}>
    <h2 className={styles.calculatorHeading}>Calorie Calculator</h2>
    <form onSubmit={calculateMacronutrients} className={styles.calculatorForm}>
        <label htmlFor="age" className={styles.calculatorInputLabel}>
            Age
        </label>
        <input
            className={styles.calculatorInputField}
            name="age"
            id="age"
            type="number"
            placeholder="Years..."
        />
        <label htmlFor="sex" className={styles.calculatorInputLabel}>
            Sex
        </label>
        <div className={styles.radioInputWrapperOne}>
            <div className={styles.sameLineInput}>
                <input
                    className={styles.radioInput}
                    type="radio"
                    name="sex"
                    id="male"
                    value="male"
                    defaultChecked
                />
                <label className={styles.radioLabel} htmlFor="male">
                    Male
                </label>
            </div>
            <div className={styles.sameLineInput}>
                <input type="radio" name="sex" id="female " value="female" />
                <label htmlFor="female">Female</label>
            </div>
        </div>
        <label htmlFor="height" className={styles.calculatorInputLabel}>
            Height
        </label>
        <input
            className={styles.calculatorInputField}
            name="height"
            id="height"
            type="number"
            placeholder="Centimeters..."
        />
        <label htmlFor="weight" className={styles.calculatorInputLabel}>
            Weight
        </label>
        <input
            className={styles.calculatorInputField}
            name="weight"
            id="weight"
            type="number"
            placeholder="Kilograms..."
        />
        <label htmlFor="goal" className={styles.calculatorInputLabel}>
            Goal
        </label>
        <div className={styles.radioInputWrapper}>
            <div className={styles.newLineOptionWrapperTwo}>
                <input
                    className={styles.radioInput}
                    type="radio"
                    name="goal"
                    id="maintain"
                    value="maintain"
                    defaultChecked
                />
                <label className={styles.radioLabel} htmlFor="maintain">
                    Maintain Weight
                </label>
            </div>
            <div className={styles.newLineOptionWrapperTwo}>
                <input
                    className={styles.radioInput}
                    type="radio"
                    name="goal"
                    id="lose"
                    value="lose"
                />
                <label className={styles.radioLabel} htmlFor="lose">
                    Lose Weight
                </label>
            </div>
            <div className={styles.newLineOptionWrapperTwo}>
                <input
                    className={styles.radioInput}
                    type="radio"
                    name="goal"
                    id="gain"
                    value="gain"
                />
                <label className={styles.radioLabel} htmlFor="gain">
                    Gain Weight
                </label>
            </div>
        </div>
        <label htmlFor="activity" className={styles.calculatorInputLabel}>
            Current Activity Level
        </label>
        <div className={styles.radioInputWrapper}>
            <div className={styles.newLineOptionWrapper}>
                <input
                    className={styles.radioInput}
                    type="radio"
                    name="activity"
                    id="sedentary"
                    value="sedentary"
                    defaultChecked
                />
                <label className={styles.radioLabel} htmlFor="sedentary">
                    Sedentary (Little or no exercise)
                </label>
            </div>
            <div className={styles.newLineOptionWrapper}>
                <input
                    className={styles.radioInput}
                    type="radio"
                    name="activity"
                    id="lightlyActive"
                    value="lightlyActive"
                />
                <label className={styles.radioLabel} htmlFor="lightlyActive">
                    Lightly active (Light exercise/sports 3-5 days a week)
                </label>
            </div>
            <div className={styles.newLineOptionWrapper}>
                <input
                    className={styles.radioInput}
                    type="radio"
                    name="activity"
                    id="moderatelyActive"
                    value="moderatelyActive"
                />
                <label className={styles.radioLabel} htmlFor="moderatelyActive">
                    Moderately active (Moderate exercise/sports 3-5 days a week)
                </label>
            </div>
            <div className={styles.newLineOptionWrapper}>
                <input
                    className={styles.radioInput}
                    type="radio"
                    name="activity"
                    id="veryActive"
                    value="veryActive"
                />
                <label className={styles.radioLabel} htmlFor="veryActive">
                    Very active (Hard exercise/sports 6-7 days a week)
                </label>
            </div>
            <div className={styles.newLineOptionWrapper}>
                <input
                    className={styles.radioInput}
                    type="radio"
                    name="activity"
                    id="extraActive"
                    value="extraActive"
                />
                <label className={styles.radioLabel} htmlFor="extraActive">
                    Extra active (Hard exercise/sports 6-7 days a week + physical job)
                </label>
            </div>
        </div>
        <div className={styles.buttonsWrapper}>
            <input className={styles.submitButton} type="reset" value="Clear Fields" />
            <input className={styles.submitButton} type="submit" value="Calculate" />
        </div>
        <CheckBoxGroup id={'nekafkontrol'} title={'Nekaf title'} />
    </form>
    {message.content ? <ModalMessage message={message} handleGotIt={handleGotIt} /> : ''}
</div>;
