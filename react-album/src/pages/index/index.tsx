import styles from "./styles/index.module.scss";

function index() {
    return (
        <div className={styles.page}>
            <div className={styles.page__contents}>
                <div className={styles.page__contents__introBox}>
                    <div className={styles.wrapper}>
                        <span className={styles.wrapper__title}>
                            PhotoSplash
                        </span>
                        <span className={styles.wrapper__desc}>
                            Photo 앨범입니다.
                        </span>
                    </div>
                </div>
                <div className={styles.page__contents__imageBox}></div>
            </div>
        </div>
    );
}

export default index;
