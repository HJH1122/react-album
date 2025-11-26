import CommonHeader from "@/components/common/header/CommonHeader";
import styles from "./styles/index.module.scss";
import CommonSearchBar from "@/components/common/searchBar/CommonSearchBar";
import CommonNav from "@/components/common/navigation/CommonNav";
import CommonFooter from "@/components/common/footer/CommonFooter";
import Card from "./components/Card";

function index() {
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
