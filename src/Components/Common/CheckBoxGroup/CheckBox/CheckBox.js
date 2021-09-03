import './CheckBox.scss';

function CheckBox({ id, title }) {
    return (
        <input
            tabIndex={0}
                className="CheckBox"
            type="checkbox"
            id={id}
            name={id}
            defaultChecked={false}
        />
    );
}

export default CheckBox;
