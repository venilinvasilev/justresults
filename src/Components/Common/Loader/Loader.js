import styles from './Loader.module.css';

function Loader() {
    return (
        <div className={styles.loaderContainer}>
            <h2 className={styles.loaderHeading}>Please wait<span>.</span><span>.</span><span>.</span></h2>
        <div className={styles.loaderAnimation}></div>
        </div>
    )
}

export default Loader;