import styles from './ModalMessage.module.css';

function ModalMessage({ message, handleGotIt }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h3>{message.heading}</h3>
                <p>{message.content}</p>
                <button onClick={handleGotIt} className={styles.action}>Got it!</button>
            </div>
        </div>
    );
}

export default ModalMessage;