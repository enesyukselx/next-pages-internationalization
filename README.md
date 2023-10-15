## Package

```bash
next-i18next
```

## \_app.tsx

```javascript
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
export default appWithTranslation(App);
```

## Usage

```javascript
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
    //const { t } = useTranslation("home"); //default common.json
    const { t } = useTranslation("home"); //home.json

    return <h1>{t("welcome")}</h1>;
}

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale)),
        },
    };
}
```
