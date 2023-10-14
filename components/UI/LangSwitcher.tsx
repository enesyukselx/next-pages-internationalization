import { useRouter } from "next/router";

const LangSwitcher = () => {
    const router = useRouter();
    const lang = router.locale;
    const defaultLocale = router.defaultLocale;
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
