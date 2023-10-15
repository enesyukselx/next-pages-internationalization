import { useRouter } from "next/router";
import { i18n } from "@/next-i18next.config";

const LangSwitcher = () => {
    const router = useRouter();
    const lang = router.locale;
    const defaultLocale = i18n.defaultLocale;
    const locales = router.locales;

    const { pathname } = router;

    const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const locale = e.target.value;

        if (locale === defaultLocale) {
            router.push("http://" + process.env.NEXT_PUBLIC_APP_URL + pathname);
            return;
        }

        router.push(
            "http://" +
                locale +
                "." +
                process.env.NEXT_PUBLIC_APP_URL +
                pathname
        );
    };

    return (
        <select
            name="lang"
            id="lang"
            defaultValue={lang}
            onChange={changeHandler}
            className="uppercase font-bold"
        >
            {locales?.map((locale) => (
                <option key={locale} value={locale}>
                    {locale}
                </option>
            ))}
        </select>
    );
};

export default LangSwitcher;
