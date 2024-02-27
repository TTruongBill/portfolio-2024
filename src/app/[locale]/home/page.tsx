import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HOME");
  
  return (
    <h1>this is the homepage</h1>
  );
}
