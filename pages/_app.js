import React from "react";
import "../fonts/inter-web/inter.css";
import "../styles/globals.scss";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp
