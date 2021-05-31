import { auth, database } from './';

export function loginUser(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
}

export function registerUser(username, email, password) {
    return auth.createUserWithEmailAndPassword(email, password).then((credentials) => {
        database.ref('users/' + credentials.user.uid).set({
            username: username,
            email: email,
        });
    })
}

export function getUserInfo(uid) {
    return database.ref().child('users').child(uid).get().then((snapshot) => snapshot.val());
}

export function addWorkout(data) {
    return database.ref('workouts').push(data).catch(err => console.log(err.message));
}