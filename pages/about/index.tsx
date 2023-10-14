import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const About = () => {
    const { t } = useTranslation("about");

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">{t("title")}</h1>
            <p>{t("content")}</p>
            <Link
                href="/about/page"
                className="inline-block bg-black text-white mt-4 text-center p-2 rounded-lg font-bold"
            >
                Example Page
            </Link>
        </>
    );
};

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale)),
        },
    };
}

export default About;
