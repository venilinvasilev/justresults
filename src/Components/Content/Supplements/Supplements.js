import './Supplements.scss';
import SupplementsList from './SupplementsList';
export default function Supplements () {
    return (
        <div className="container shop">
            <div className="row">
                <h2 className="text-center mb-5 fs-1">Just Results Supplements</h2>
                <SupplementsList />
            </div>
        </div>
    );
}