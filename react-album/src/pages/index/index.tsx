import CommonHeader from "@/components/common/header/CommonHeader";
import styles from "./styles/index.module.scss";
import CommonSearchBar from "@/components/common/searchBar/CommonSearchBar";
import CommonNav from "@/components/common/navigation/CommonNav";
import CommonFooter from "@/components/common/footer/CommonFooter";
import Card from "./components/Card";

import { useState } from "react";
import type { CardDTO } from "./types/card";
import { useRecoilValueLoadable } from "recoil";
import { imageData } from "@/recoil/selectors/imageSelector";

function index() {
    const imgSelectorLoadable = useRecoilValueLoadable(imageData);
    const imgSelector =
        imgSelectorLoadable.state === "hasValue"
            ? imgSelectorLoadable.contents
            : null;
    const [imgData, setImgData] = useState<CardDTO[]>([]);

    const CARD_LIST = imgSelector?.data?.results?.map((card: CardDTO) => {
        return <Card data={card} key={card.id} />;
    });

    return (
        <div className={styles.page}>
            <CommonHeader />
            <CommonNav />
            <div className={styles.page__contents}>
                <div className={styles.page__contents__introBox}>
                    <div className={styles.wrapper}>
                        <span className={styles.wrapper__title}>
                            PhotoSplash
                        </span>
                        <span className={styles.wrapper__desc}>
                            Photo 앨범입니다.
                        </span>
                        <CommonSearchBar />
                    </div>
                </div>
                <div className={styles.page__contents__imageBox}>
                    {CARD_LIST}
                </div>
            </div>
            <CommonFooter />
        </div>
    );
}

export default index;
