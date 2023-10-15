import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
    const { t } = useTranslation();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">{t("welcome")}</h1>

            <Link
                href="/about"
                className="inline-block bg-black text-white mt-4 text-center p-2 rounded-lg font-bold"
            >
                {t("goabout")}
            </Link>
        </div>
    );
}

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}
