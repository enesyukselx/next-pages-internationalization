import Head from "next/head";
import Navbar from "./Navbar/Navbar";
import { useRouter } from "next/router";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const defaultLocale = router.defaultLocale;
    const locales = router.locales;

    return (
        <>
            <Head>
                {locales?.map((locale) =>
                    defaultLocale === locale ? (
                        <link
                            key={locale}
                            rel="alternate"
                            hrefLang={locale}
                            href={"http://" + process.env.NEXT_PUBLIC_APP_URL}
                        />
                    ) : (
                        <link
                            key={locale}
                            rel="alternate"
                            hrefLang={locale}
                            href={
                                "http://" +
                                locale +
                                "." +
                                process.env.NEXT_PUBLIC_APP_URL
                            }
                        />
                    )
                )}
            </Head>
            <Navbar />
            <main className="w-1/2 bg-white text-black mt-4 p-8 mx-auto rounded">
                {children}
            </main>
        </>
    );
};

export default Layout;
