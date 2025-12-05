import { useRecoilState, useRecoilValue } from "recoil";
import styles from "./CommonFooter.module.scss";
import { imageData } from "@/recoil/selectors/imageSelector";
import { pageState } from "@/recoil/atoms/pageState";
import { useState } from "react";

function CommonFooter() {
    const images = useRecoilValue(imageData);
    const [page, setPage] = useRecoilState(pageState);
    const [step, setStep] = useState(0);

    if (!images || !images.total_pages) return null;

    const newArr: number[] = new Array();
    for (let i = 1; i <= images.total_pages; i++) {
        newArr.push(i);
    }

    const length = newArr.length;
    const divide =
        Math.floor(length / 10) + (Math.floor(length % 10) > 0 ? 1 : 0);
    const res = [];

    for (let i = 0; i <= divide; i++) {
        res.push(newArr.splice(0, 10));
    }

    if (!res[step]) return null;

    const pages = res[step].map((page: number, index: number) => {
        if (page < 11) {
            return (
                <button
                    className={
                        index === page - 1
                            ? `${styles.pagination__button} ${styles.active}`
                            : `${styles.pagination__button} ${styles.inactive}`
                    }
                    key={page}
                    onClick={() => moveToPage(page)}
                >
                    {page}
                </button>
            );
        } else {
            return (
                <button
                    className={
                        index === page - 1 - step * 10
                            ? `${styles.pagination__button} ${styles.active}`
                            : `${styles.pagination__button} ${styles.inactive}`
                    }
                    key={page}
                    onClick={() => moveToPage(page)}
                >
                    {page}
                </button>
            );
        }
    });

    const moveToPage = (selected: number) => {
        setPage(selected);
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.pagination}>
                <button className={styles.pagination__button}>
                    <img src="src/assets/icons/icon-arrowLeft.svg" alt="" />
                </button>
                {pages}
                <button className={styles.pagination__button}>
                    <img src="src/assets/icons/icon-arrowRight.svg" alt="" />
                </button>
            </div>
        </footer>
    );
}

export default CommonFooter;
