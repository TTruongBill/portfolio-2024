'use client';

import { useLocale } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LocalSwitcher() {
    const router = useRouter();
    const localActive = useLocale();

    const otherLocale = localActive == "en" ? "fr" : "en";

    const changeLanguage = () => router.replace(otherLocale);

    return (
        <label>
            <p className="sr-only">change language</p>
            <Link href={"/" + otherLocale} onClick={changeLanguage}>{otherLocale}</Link>
        </label>
    );
}