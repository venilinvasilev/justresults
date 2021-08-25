import './SupplementForm.scss';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import ModalMessage from '../ModalMessage';

export default function SupplementForm ({fetchHandler, title, supplement}) {
    const { id } = useParams();
    const history = useHistory();
    const [message, setMessage] = useState({
        heading: '',
        content: ''
    });
    const onSubmitHandler = async (ev) => {
        ev.preventDefault();
        const data = {
            name: ev.target.name.value,
            brand: ev.target.brand.value,
            category: ev.target.category.value,
            price: ev.target.price.value,
            imageUrl: ev.target.imageUrl.value,
            description: ev.target.description.value
        }
        console.log(data);
        try {
            const newSupplement = await fetchHandler(data, id);
            history.push(`/supplements/${newSupplement._id}`);
        } catch (err) {
            setMessage({
                heading: 'Error!',
                content: err.message
            })
        }

    }
    return (
        <div className="container">
            <h2 className="text-center">{title}</h2>
            <form onSubmit={onSubmitHandler} className="bg-dark supplement-form">
                <div className="row">
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="name">Name:</label>
                        <input className="form-control" type="text" id="name" />
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="brand">Brand:</label>
                        <input className="form-control" type="text" id="brand" />
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="category">Category:</label>
                        <select className="form-control" id="category">
                            <option value='proteins'>Proteins</option>
                            <option value='vitamins'>Vitamins/Minerals</option>
                            <option value='pre'>Pre/Workouts</option>
                            <option value='post'>Post/Workouts</option>
                        </select>
                    </div>
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="price">Price:</label>
                        <input className="form-control" type="text" id="price" placeholder="In USD..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageURL">Image URL:</label>
                        <input type="text" className="form-control" id="imageUrl" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea className="form-control" id="description" rows="3"></textarea>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-secondary">Add Supplement</button>
                </div>
            </form>
            {message.heading && <ModalMessage message={message} handleGotIt={() => setMessage('')} />}
        </div>
    );
}