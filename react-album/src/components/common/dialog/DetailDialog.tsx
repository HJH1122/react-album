import styles from "./DetailDialog.module.scss";

function DetailDialog() {
    return (
        <div className={styles.contatiner}>
            <div className={styles.contatiner__dialog}>
                <div className={styles.contatiner__dialog__header}>
                    <div className={styles.close}>
                        <button className={styles.close__button}></button>
                        <img
                            src=""
                            alt="프로필 사진"
                            className={styles.close__authorImage}
                        />
                        <span className={styles.close__authorName}>hjh</span>
                    </div>
                    <div className={styles.bookmark}>
                        <button className={styles.bookmark__button}></button>
                        <button className={styles.bookmark__button}>
                            다운로드
                        </button>
                    </div>
                </div>
                <div className={styles.contatiner__dialog__body}>
                    <img src="" alt="상세이미지" className={styles.image} />
                </div>
                <div className={styles.contatiner__dialog__footer}>
                    <div className={styles.infoBox}>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>
                                이미지 크기
                            </span>
                            <span className={styles.infoBox__item__value}>
                                상세 데이터 조회
                            </span>
                        </div>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>
                                이미지 크기
                            </span>
                            <span className={styles.infoBox__item__value}>
                                상세 데이터 조회
                            </span>
                        </div>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>
                                이미지 크기
                            </span>
                            <span className={styles.infoBox__item__value}>
                                상세 데이터 조회
                            </span>
                        </div>
                        <div className={styles.infoBox__item}>
                            <span className={styles.infoBox__item__label}>
                                이미지 크기
                            </span>
                            <span className={styles.infoBox__item__value}>
                                상세 데이터 조회
                            </span>
                        </div>
                    </div>
                    <div className={styles.tagBox}>
                        <div className={styles.tagBox__tag}>태그 데이터</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailDialog;
