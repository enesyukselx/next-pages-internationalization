import LangSwitcher from "@/components/UI/LangSwitcher";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-white p-4 text-black flex justify-between items-center">
            <div className="font-bold text-3xl">
                <Link href="/">Brand</Link>
            </div>
            <LangSwitcher />
        </div>
    );
};

export default Navbar;
