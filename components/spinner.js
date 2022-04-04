import styles from '../styles/Spinner.module.css'

const Spinner = () => {
    return (
        <div className={styles.overlay}>
            <div className={styles.spinnerContainer}>
                <div className={styles.loadingSpinner}></div>
            </div>
        </div>
    )
}

export default Spinner