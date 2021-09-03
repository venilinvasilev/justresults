import CheckBox from './CheckBox/CheckBox';
import './CheckBoxGroup.scss';
import CheckBoxLabel from './CheckBoxLabel';
import CheckMark from './CheckMark';

function CheckBoxGroup({ title, id }) {
    return (
        <>
            <CheckBoxLabel title={title}>
                <CheckBox id={id} />
                <CheckMark />
            </CheckBoxLabel>
        </>
    );
}

export default CheckBoxGroup;
