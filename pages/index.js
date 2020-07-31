import React, {Fragment} from "react";
import Head from "next/head"
import Card from "../components/Card";
import Circle from "../components/Circle";
import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <Fragment>
            <Head>
                <title>Open World</title>
            </Head>
            <Card>
                <Circle className={styles.inset} />
            </Card>
        </Fragment>
    )
}
