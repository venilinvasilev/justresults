import './Profile.scss';

import { useEffect, useState } from 'react';
import { getMe } from '../../../utils/api/data';
import EditProfile from './EditProfile';
import Loader from '../../Common/Loader';

export default function Profile() {
    const [user, setUser] = useState({ loaded: false });
    useEffect(() => {
        getMe().then(data => {
            setUser({
                loaded: true,
                role: data.role,
                _id: data._id,
                username: data.username,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                address: data.address,
                telephone: data.telephone,
                about: data.about,
                likes: data.likes.length
            });
        });
    }, []);
    if(!user.loaded) {
        return (
            <Loader />
        )
    }
    return (
        <div className="profile">
            <h2 className="profile__heading">My Profile</h2>
            <div className="profile__info">
                <div className="info__profile-card">
                    <div className="profile-card__photo">
                        <img src="./default-profile.png" alt={user.firstName} />
                    </div>
                    <p className="profile-card__username">{`${user.firstName} ${user.lastName}`}</p>
                    <p className="profile-card__role">{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</p>
                    <h3 className="profile-card__data-title">Personal Information</h3>
                    <div className="profile-card__data">
                        <p className="data__email"><span><b>Email:</b> </span>{user.email}</p>
                        <p className="data__address"><span><b>Address:</b> </span>{user.address}</p>
                        <p className="data__telephone"><span><b>Telephone:</b> </span>{user.telephone}</p>
                        <p className="data__about"><span><b>About:</b> </span>{user.about}</p>
                        <p className="data__likes"><span><b>Liked articles:</b> </span>{user.likes}</p>
                    </div>
                </div>
            </div>
            <EditProfile setUser={setUser} user={user} />
        </div>
    );
}