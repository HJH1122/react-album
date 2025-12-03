import CommonHeader from "@/components/common/header/CommonHeader";
import styles from "./styles/index.module.scss";
import CommonSearchBar from "@/components/common/searchBar/CommonSearchBar";
import CommonNav from "@/components/common/navigation/CommonNav";
import CommonFooter from "@/components/common/footer/CommonFooter";
import Card from "./components/Card";

import { useMemo, useState } from "react";
import type { CardDTO } from "./types/card";
import { useRecoilValueLoadable } from "recoil";
import { imageData } from "@/recoil/selectors/imageSelector";
import DetailDialog from "@/components/common/dialog/DetailDialog";

function index() {
    const imgSelector = useRecoilValueLoadable(imageData);

    const [imgData, setImgData] = useState<CardDTO>();
    const [open, setOpen] = useState<boolean>(false);

    // const CARD_LIST = useMemo(() => {
    //     if (imgSelector.state === "hasValue") {
    //         const result = imgSelector.contents.map((card: CardDTO) => {
    //             return (
    //                 <Card
    //                     data={card}
    //                     key={card.id}
    //                     handleDialog={setOpen}
    //                     handleSetData={setImgData}
    //                 />
    //             );
    //         });
    //         return result;
    //     } else {
    //         return <div>loading...</div>;
    //     }
    // }, [imgSelector]);

    const CARD_LIST = useMemo(() => {
        if (imgSelector.state === "loading") {
            return <div>loading...</div>;
        }

        if (imgSelector.state === "hasError") {
            console.error(imgSelector.contents); // 에러 객체
            return <div>데이터 로딩 실패</div>;
        }

        // 여기서는 반드시 hasValue
        const data = imgSelector.contents ?? [];
        return data.map((card: CardDTO) => (
            <Card
                data={card}
                key={card.id}
                handleDialog={setOpen}
                handleSetData={setImgData}
            />
        ));
    }, [imgSelector]);

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
            {open && <DetailDialog data={imgData} handleDialog={setOpen} />}
        </div>
    );
}

export default index;
