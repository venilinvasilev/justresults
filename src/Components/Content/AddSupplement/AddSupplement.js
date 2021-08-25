import './AddSupplement.scss';
import SupplementForm from '../../Common/SupplementForm';

import { addSupplement } from '../../../utils/api/data';

export default function AddSupplement() {

    return (
        <SupplementForm title='Add Supplement' fetchHandler={addSupplement} />
    );
}