import styles from './Home.module.css';
function Home() {
    return (
            <div className={styles.homeWrapper}>
                <div className={styles.homeSection}>
                    <h3 className={styles.homeHeading}>No excuses JustResults!</h3>
                    <p className={styles.welcomeContent}>
                        JustResults is created to help lifters, athletes, beginners and fitness enthusiasts connect with like-minded people.
                        Members of the website share their tips, advice to help others get bigger, stronger and leaner!
                    </p>
                </div>
            </div>
    );
}

export default Home;