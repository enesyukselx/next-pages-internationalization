import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const About = () => {
    const { t } = useTranslation("about");

    return (
        <>
            <h1 className="text-2xl font-bold mb-4">{t("title")}</h1>
            <p>{t("content")}</p>
        </>
    );
};

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["about"])),
        },
    };
}

export default About;
