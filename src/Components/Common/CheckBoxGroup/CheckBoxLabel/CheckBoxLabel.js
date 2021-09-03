import './CheckBoxLabel.scss';

function CheckBoxLabel({ title, children, selectCheckbox }) {
    return (
        <label className="CheckBoxLabel">
            {title}
            {children}
        </label>
    );
}

export default CheckBoxLabel;
