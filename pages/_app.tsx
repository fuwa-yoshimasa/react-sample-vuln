import "../styles/globals.css";
import type { AppPropsWithLayout } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "../store";
import Layout from "../components/Layout";
import { ReactElement } from "react";
import "react-datetime/css/react-datetime.css";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const subTitle = Component.subTitle ?? "";
    const getLayout = Component.getLayout ?? ((page: ReactElement) => <Layout subTitle={subTitle}>{page}</Layout>);

    return <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>;
}

export default MyApp;
