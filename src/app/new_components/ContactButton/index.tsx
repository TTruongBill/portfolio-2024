import Button from "@components/Button";
import "./ContactButton.css";
import { ContactButtonProps } from "./types";
import { useLocale } from "next-intl";

export default function ContactButton({className}: ContactButtonProps) {
    const localActive = useLocale();

    return <Button title={localActive == "en" ? "Contact me" : "Contactez-moi"} link="mailto: tientientruong1@gmail.com" className={`purple-button ${className ?? ''}`} />
}