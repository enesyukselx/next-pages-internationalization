import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "@/next-i18next.config";

function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default appWithTranslation(App, nextI18NextConfig as any);
