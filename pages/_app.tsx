import "../styles/globals.css";
import type { AppPropsWithLayout } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "../store";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout =
        Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
    return (
        <Provider store={store}>
            {getLayout(<Component {...pageProps} />)}
        </Provider>
    );
}

export default MyApp;
