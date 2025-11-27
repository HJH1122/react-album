import CommonHeader from "@/components/common/header/CommonHeader";
import styles from "./styles/index.module.scss";
import CommonSearchBar from "@/components/common/searchBar/CommonSearchBar";
import CommonNav from "@/components/common/navigation/CommonNav";
import CommonFooter from "@/components/common/footer/CommonFooter";
import Card from "./components/Card";
import axios from "axios";
import { useEffect } from "react";

function index() {
    const getData = async () => {
        const API_URL = "https://api.unsplash.com/search/photos";
        const API_KEY = "EPWseG23BNY5-VOFjdlw09dAlD23w";

        const PER_PAGE = 30;

        const searchValue = "Korea";
        const pageValue = 100;

        try {
            const res = await axios.get(
                `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`
            );
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <CommonFooter />
        </div>
    );
}

export default index;
