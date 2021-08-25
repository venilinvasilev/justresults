import { useState} from 'react';
import { updateMe, updatePassword } from '../../../../utils/api/data';
import './EditProfile.scss';
import ModalMessage  from '../../../Common/ModalMessage';

export default function EditProfile({ setUser, user }) {
    const [message, setMessage] = useState('');
    const onSubmitFormPersonalHandler = async (ev) => {
        ev.preventDefault();
        const data = {
            username: ev.target.username.value,
            firstName: ev.target.firstName.value,
            lastName: ev.target.lastName.value,
            email: ev.target.name.value,
            address: ev.target.address.value,
            about: ev.target.about.value
        }
        try {
            const updatedUser = await updateMe(data);
            setMessage({ 
                heading: 'Success!',
                content: 'Your information was updated successfully.'
            });
            setUser({
                ...user,
                name: updatedUser.name,
                email: updatedUser.email
            });
        } catch (err) {
            setMessage({ 
                heading: 'Error',
                content: err.message
            });
        }
    }
    const onSubmitFormPasswordHandler = async (ev) => {
        ev.preventDefault();
        const data = {
            oldPassword: ev.target.oldPassword.value,
            password: ev.target.password.value,
            passwordConfirm: ev.target.passwordConfirm.value
        }
        try {
            await updatePassword(data);
            setMessage({ 
                heading: 'Success!',
                content: 'Your password was updated successfully.'
            });
            ev.target.reset();
        } catch (err) {
            setMessage({ 
                heading: 'Error!',
                content: err.message
            });
        }

    }
    return (
        <div>
            <form onSubmit={onSubmitFormPersonalHandler} className="edit-profile__form-personal">
                <h3 className="form__title">Change Personal Information</h3>
                <div className="form__row">
                    <div className="row__input-wrapper">
                        <label htmlFor="username">Username:</label>
                        <input id="username" type="text" defaultValue={user.username} />
                    </div>
                </div>
                <div className="form__row">
                    <div className="row__input-wrapper">
                        <label htmlFor="firstName">First Name:</label>
                        <input id="firstName" type="text" defaultValue={user.firstName} />
                    </div>
                </div>
                <div className="form__row">
                    <div className="row__input-wrapper">
                        <label htmlFor="lastName">Last Name:</label>
                        <input id="lastName" type="text" defaultValue={user.lastName} />
                    </div>
                </div>
                <div className="form__row">
                    <div className="row__input-wrapper">
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="text" defaultValue={user.email} />
                    </div>
                </div>
                <div className="form__row">
                    <div className="row__input-wrapper">
                        <label htmlFor="address">Address:</label>
                        <input id="address" type="text" defaultValue={user.address} />
                    </div>
                </div>
                <div className="form__row">
                    <div className="row__input-wrapper">
                        <label htmlFor="about">About:</label>
                        <textarea id="about" type="text" defaultValue={user.about} />
                    </div>
                </div>

                <div className="form__button-wrapper">
                    <button className="form__submit-btn" type="submit">Change Information</button>
                </div>
            </form>
            <form onSubmit={onSubmitFormPasswordHandler} className="edit-profile__form-password">
                <h3 className="form__title">Change Password</h3>
                <div className="form__row">
                    <div className="row__input-wrapper">
                        <label htmlFor="oldPassword">Old Password:</label>
                        <input id="oldPassword" type="password" />
                    </div>
                </div>
                <div className="form__row">
                    <div className="row__input-wrapper">
                        <label htmlFor="password">New Password:</label>
                        <input id="password" type="password" />
                    </div>
                </div>
                <div className="form__row">
                    <div className="row__input-wrapper">
                        <label htmlFor="passwordConfirm">Confirm New Password:</label>
                        <input id="passwordConfirm" type="password" />
                    </div>
                </div>
                <div className="form__button-wrapper">
                    <button className="form__submit-btn" type="submit">Change Password</button>
                </div>
            </form>
            {message && <ModalMessage message={message} handleGotIt={() => setMessage('')} />}
        </div>
    )
}