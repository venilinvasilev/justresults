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
export function getWorkouts() {
    return database.ref('workouts').get().then((snapshot) => snapshot.val()).catch(err => console.log(err.message));
}
export function getWorkout(id) {
    return database.ref('workouts').child(id).get().then((snapshot) => snapshot.val()).catch(err => console.log(err.message));
}
export function createArticle(data) {
    return database.ref('articles').push(data).catch(err => console.log(err.message));
}
export function getArticles() {
    return database.ref('articles').get().then((snapshot) => Object.fromEntries(Object.entries(snapshot.val()).reverse())).catch(err => console.log(err.message));
}
export function getPopularArticles() {
    return database.ref('articles').orderByChild("likes").limitToLast(3).get().then((data) => {
        return Object.fromEntries(Object.entries(data.val()).sort((a, b) => b[1].likes - a[1].likes));
    });
}
export function getArticle(id) {
    return database.ref('articles').child(id).get().then((snapshot) => snapshot.val()).catch(err => console.log(err.message));
}
export function updateLikes(id, uid) {
    return database.ref('articles').child(id).child('likes').get()
        .then((snapshot) => Number(snapshot.val()) + 1)
        .then((newLikes) => {
            database.ref('articles').child(id).child('likes').set(newLikes)
            database.ref('users').child(uid).child('likes').child(id).set(true);
        })
        .catch(err => console.log(err.message));
}
export function getUserLiked(uid, id) {
    return database.ref('users').child(uid).child('likes').child(id).get()
    .then((snapshot) => {
        if(snapshot.exists()) {
            return true;
        }
        return false;
    }).catch((err) => console.log(err.message));
}
export function deleteArticle(id) {
    return database.ref('articles').child(id).remove()
}
export function editArticle(id, data) {
    console.log(id)
    return database.ref('articles').child(id).set(data);
}
export const articles = database.ref('articles')