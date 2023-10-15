import LangSwitcher from "@/components/UI/LangSwitcher";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const Navbar = () => {
    const { t } = useTranslation("common");

    return (
        <div className="bg-white p-4 text-black flex justify-between items-center">
            <div className="font-bold text-3xl">
                <Link href="/">{t("brand")}</Link>
            </div>
            <LangSwitcher />
        </div>
    );
};

export default Navbar;
